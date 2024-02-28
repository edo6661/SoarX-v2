import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoNav = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={"/images/SoarX Logo.png"}
          width={46}
          height={46}
          sizes="100vw"
          alt="Header Logo"
        />
      </Link>
      <h1 className="text-white text-2xl -translate-y-1">SoarX</h1>
      <div className=" ml-1 w-1 h-1 rounded-full bg-white -translate-y-1" />
    </>
  );
};

export default LogoNav;
