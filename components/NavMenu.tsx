"use client";
import { AnimatePresence } from "framer-motion";
import { mockMenu } from "../constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useGlobalState from "../lib/zustand";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Admin, User } from "@prisma/client";

interface Props {
  admin?: Admin;
}

const NavMenu = ({ admin }: Props) => {
  const pathname = usePathname();

  return (
    <ul className="fl-itc gap-4">
      {mockMenu.map((item, index) => {
        const conGlass = item === "Home" ? "/" : `/${item.toLowerCase()}`;
        if (item === "Admin" && (!admin || admin === "User")) return null;
        return (
          <li key={index}>
            <Link
              href={conGlass.toLowerCase()}
              className={cn("btn-glass", {
                "glass-bg": pathname === conGlass,
              })}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const NavMenuMobile = ({ admin }: Props) => {
  const pathname = usePathname();
  const { isNav, setIsNav } = useGlobalState();

  useEffect(() => {
    if (isNav) {
      setIsNav(false);
    }
  }, [pathname, isNav, setIsNav]);

  return (
    <>
      <AnimatePresence>
        {isNav && (
          <motion.ul
            className="absolute w-1/2 p-4 rounded-l-xl right-0 h-screen z-50 fl-itc justify-center flex-col gap-8 translate-y-4 bg-slate-900   "
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              // ! if u want to change the color based on the hover of the hero section
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
            }}
          >
            {mockMenu.map((item, i) => {
              const conGlass = item === "Home" ? "/" : `/${item}`;

              if (admin && item === "Admin" && !admin) return null;

              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={isNav ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 * i }}
                  className=" -translate-y-12"
                >
                  <button
                    className={cn(
                      "text-white rounded-xl text-3xl px-8 py-4 btn-glass",
                      {
                        "glass-bg": pathname === conGlass,
                      }
                    )}
                  >
                    <Link href={conGlass}>{item}</Link>
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
export default NavMenu;
