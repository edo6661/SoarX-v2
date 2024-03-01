"use client";
import React from "react";
import { motion } from "framer-motion";
import useGlobalState from "@/lib/zustand";
import { cn } from "@/lib/utils";
import { Mask } from "./Mask";

const HeroSection = () => {
  const { isHoveredSection: isHovered, setIsHoveredSection: setIsHovered } =
    useGlobalState((state) => state);
  const insideRevealEl = (
    <div className=" max-w-xl mx-auto">
      <div className="space-y-4 text-center sm:px-0 px-8">
        <h2 className=" text-5xl text-slate-700 font-bold pb-2 ">
          Pre-built method for Payment Performance
        </h2>

        <p className="text-slate-700 font-bold ">
          Financial performance is a complete evaluation of standing in
          categories such as assets, liabilities, expenses, revenue, and overall
          profitability
        </p>
        <div
          className={cn("fl-itc relative", {
            "-z-10": isHovered,
          })}
        >
          
          <input type="text" placeholder="Test..." className="input-hero " />
          <button className="absolute right-1 bg-primarySoarx py-3 px-6 text-slate-200  rounded-full font-medium border-nav ">
            Try it now!
          </button>
        </div>
        <p className="text-slate-700 font-bold">
          Try our demo of dashboard now! -
          <motion.span className="text-slate-700">Learn more</motion.span>
        </p>
      </div>
    </div>
  );
  const outsideRevealEl = (
    <div className=" max-w-xl mx-auto">
      <div className="space-y-4 text-center sm:px-0 px-8">
        <h2 className=" text-5xl text-white  pb-2 ">
          Pre-built method for Payment{" "}
          <span className=" text-primarySoarx">Performance</span>
        </h2>
        <p className="text-white text-base">
          Financial <span className="text-primarySoarx">performance</span> is a
          complete evaluation of standing in categories such as assets,
          liabilities, expenses, revenue, and overall profitability
        </p>
        <div className="fl-itc relative text-base ">
          <input type="text" placeholder="Test..." className="input-hero" />
          <button className="absolute right-1 bg-primarySoarx py-3 px-6 text-white rounded-full font-medium border-nav ">
            Try it now!
          </button>
        </div>

        <p className="text-white text-base">
          Try our demo of dashboard now! -
          <motion.span className=" text-primarySoarx">Learn more</motion.span>
        </p>
      </div>
    </div>
  );

  return (
    <section>
      <div className="w-full  ">
        <Mask revealText={insideRevealEl}>{outsideRevealEl}</Mask>
      </div>
    </section>
  );
};

export default HeroSection;
