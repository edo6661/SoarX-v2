import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { sidebarItems } from "./AdminStuff";
import AdminMenuItem from "./AdminMenuItem";

export default function AdminSidebar({
  onSidebarHide,
  showSidebar,
}: {
  onSidebarHide: () => void;
  showSidebar: boolean;
}) {
  const [selected, setSelected] = useState("0");

  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col bg-white text-white z-10",
        showSidebar ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center  sm:justify-center xl:justify-start p-2  sidebar-separator-top">
          <div className="sidebar-header-img">
            <Image
              src={"/images/header-logo.png"}
              width={0}
              height={0}
              sizes="100vw"
              className="img-responsive"
              alt="Banner"
            />
          </div>
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl ">
            AR CLUB
          </div>
          <div className="flex-grow sm:hidden xl:block" />

          <AiOutlineClose
            className=" text-4xl block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        {sidebarItems.map((i) => (
          <AdminMenuItem
            key={i.id}
            item={i}
            // onClick={setSelected}
            selected={selected}
          />
        ))}
      </div>

      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          <div className="block sm:hidden xl:block ml-2 font-bold ">
            {/* {auth?.user?.email} */}
          </div>
          <div className="flex-grow block sm:hidden xl:block" />
          <BsThreeDotsVertical className="block sm:hidden xl:block w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
