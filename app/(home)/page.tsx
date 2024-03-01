"use client"
import React from "react";
import HeroSection from "./_components/HeroSection";
import OurAimSection from "./_components/OurAimSection";
import Partners from "./_components/PartnersSection";
import PressClippingSection from "./_components/PressClippingSection";
import Testimonial from "./_components/Testimonial";
import Discord from "./_components/Discord";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OurAimSection />
      <Partners />
      <PressClippingSection />
      <Testimonial />
      <Discord />
    </>
  );
};

export default HomePage;
