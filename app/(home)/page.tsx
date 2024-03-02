"use client"
import React from "react";
import HeroSection from "./_components/HeroSection";
import OurAimSection from "./_components/OurAimSection";
import Partners from "./_components/PartnersSection";
import PressClippingSection from "./_components/PressClippingSection";
import Testimonial from "./_components/Testimonial";
import Discord from "./_components/Discord";
import UserPosts from "./_components/UserPosts";

import { currentUser } from "@clerk/nextjs";

const HomePage = async () => {
  const self = await currentUser();
  if (!self) return;

  return (
    <>
      <HeroSection />
      <div className="bg-red-500 w-full">
        <UserPosts id={self?.id!} />
      </div>
      <OurAimSection />
      <Partners />
      <PressClippingSection />
      <Testimonial />
      <Discord />
    </>
  );
};

export default HomePage;
