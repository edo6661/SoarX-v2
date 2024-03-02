"use server";
import NavMenu, { NavMenuMobile } from "./NavMenu";
import LogoNav from "./LogoNav";
import RightMobileGlass from "./RightMobileNav";
import { getCurrentUser } from "@/services/user";
const Header = async () => {
  const currentUser = await getCurrentUser();
  return (
    <>
      <div className="container-nav-glass ">
        <div className="nav-glass glass-bg p-4 rounded-xl text-white max-w-7xl mx-auto grid items-center grid-cols-3">
          <div className=" sm:block hidden">
            <NavMenu {...currentUser} />
          </div>
          <div className="fl-itc sm:justify-self-center sm:col-span-1 col-span-2 ">
            <LogoNav />
          </div>
          <RightMobileGlass />
        </div>
        <NavMenuMobile />
      </div>
    </>
  );
};

export default Header;
