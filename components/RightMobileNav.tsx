"use client";
import useGlobalState from "../lib/zustand";
import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RightMobileGlass = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const { isNav, setIsNav } = useGlobalState();

  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <>
      <div className="sm:block hidden justify-self-end space-x-4">
        {/* TODO */}
        {isClient && (
          <>
            {/* <SignedOut>
              <button className="btn-glass" onClick={handleSignIn}>
                Sign in
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
          </>
        )}
      </div>
      <div
        className="justify-self-end space-x-4 sm:hidden block"
        onClick={() => setIsNav(!isNav)}
      >
        {/* <Hamburger distance="md" size={25} /> */}
        <Hamburger
          size={25}
          toggled={isNav}
          toggle={setIsNav as React.Dispatch<React.SetStateAction<boolean>>}
        />
      </div>
    </>
  );
};

export default RightMobileGlass;
