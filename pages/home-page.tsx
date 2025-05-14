"use client";

import HeroSection from "@/components/section/home/hero-section";
import AboutSection from "@/components/section/home/about-section";
import Divider from "@/components/ui/divider";
import ColorPaletteSection from "@/components/section/home/color-palette-section";
import InspirationSection from "@/components/section/home/inspiration-section";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

const InternshipSection = dynamic(() => import("@/components/section/home/internship-section"));

const HomePage = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      {!prefersReducedMotion && <InternshipSection />}
      <Divider />
      <ColorPaletteSection />
      <Divider />
      <InspirationSection />
    </>
  );
};

export default HomePage;
