"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./LayoutGrid";
import { layoutGridCards } from "./LayoutGridStuff";

export default function LayoutGridSection() {
  return (
    <div className="h-screen py-20 w-full ">
      <LayoutGrid cards={layoutGridCards} />
    </div>
  );
}
