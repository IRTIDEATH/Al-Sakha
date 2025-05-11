"use client";

import HeroSection from "@/components/section/home/hero-section";
import AboutSection from "@/components/section/home/about-section";
import Divider from "@/components/ui/divider";
import InternshipSection from "@/components/section/home/internship-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <InternshipSection />
    </>
  );
};

export default HomePage;
