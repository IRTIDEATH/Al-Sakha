"use client";

import HeroSection from "@/components/section/home/hero-section";
import AboutSection from "@/components/section/home/about-section";

import Divider from "@/components/ui/divider";
import CardInternship from "@/components/card-internship";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <section>
        <h2 className="text-2xl mb-6 font-medium">internship activities</h2>
        <CardInternship />
      </section>
    </>
  );
};

export default HomePage;
