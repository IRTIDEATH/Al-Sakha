"use client";

import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";

import Divider from "@/components/ui/divider";
import CardInternship from "@/components/card-internship";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <section className="mb-16">
        <h2 className="text-2xl mb-6 font-medium">internship activities</h2>
        <CardInternship />
      </section>
    </>
  );
};

export default HomePage;
