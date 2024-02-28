"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useGlobalState from "@/lib/zustand";

interface Props {
  children?: React.ReactNode;
  revealText?: React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}

export const Mask = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: Props) => {
  const { isHoveredSection, setIsHoveredSection } = useGlobalState(
    (state) => state
  );
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
  const containerRef = useRef<HTMLDivElement>(null);
  const updateMousePosition = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // ! default from acernity

  // useEffect(() => {
  //   if (containerRef.current) {
  //     containerRef.current.addEventListener("mousemove", updateMousePosition);
  //     return () => {
  //       containerRef.current?.removeEventListener(
  //         "mousemove",
  //         updateMousePosition
  //       );
  //     };
  //   }
  // }, []);

  // ! without warning

  useEffect(() => {
    const current = containerRef.current;
    if (current) {
      current.addEventListener("mousemove", updateMousePosition);
      return () => {
        current.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, []);

  const isHovered = isHoveredSection;
  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-screen relative", className)}
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center  absolute bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          WebkitMaskPosition: `${mousePosition.x! - maskSize / 2}px ${
            mousePosition.y! - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        style={{
          maskImage: "url(mask.svg)",
          maskSize: "40px",
          maskRepeat: "no-repeat",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="cursor-hero" />
        <div
          onMouseEnter={() => {
            setIsHoveredSection(true);
          }}
          onMouseLeave={() => {
            setIsHoveredSection(false);
          }}
          className="mx-auto text-center text-white font-bold relative z-20"
        >
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-white">
        {revealText}
      </div>
    </motion.div>
  );
};
