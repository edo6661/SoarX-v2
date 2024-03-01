"use client";
import { motion } from "framer-motion";
import NavMenu, { NavMenuMobile } from "./NavMenu";
import LogoNav from "./LogoNav";
import RightMobileGlass from "./RightMobileNav";
const Header = () => {
  return (
    <>
      <motion.div className="container-nav-glass ">
        <div className="nav-glass glass-bg p-4 rounded-xl text-white max-w-7xl mx-auto grid items-center grid-cols-3">
          <div className=" sm:block hidden">
            <NavMenu />
          </div>
          <div className="fl-itc sm:justify-self-center sm:col-span-1 col-span-2 ">
            <LogoNav />
          </div>
          <RightMobileGlass />
        </div>
        <NavMenuMobile />
      </motion.div>
    </>
  );
};

export default Header;
