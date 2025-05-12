"use client";

import HeroSection from "@/components/section/home/hero-section";
import AboutSection from "@/components/section/home/about-section";
import Divider from "@/components/ui/divider";
import InternshipSection from "@/components/section/home/internship-section";
import ColorPaletteSection from "@/components/section/home/color-palette-section";
import InspirationSection from "@/components/section/home/inspiration-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <InternshipSection />
      <Divider />
      <ColorPaletteSection />
      <Divider />
      <InspirationSection />
    </>
  );
};

export default HomePage;
