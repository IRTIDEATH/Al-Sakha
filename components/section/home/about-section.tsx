"use client";

import CoffeeText from "@/components/ui/coffee-text";

const AboutSection = () => {
  return (
    <section className="w-full mx-auto">
      <h1 className="text-2xl mb-6 font-medium">what about me?</h1>
      <p className="w-full text-zeta font-medium text-[16px] text-start mb-6">
        yea, just an ordinary npc and dumb in math, you can call me al sakha. i{" "}
        <CoffeeText>never</CoffeeText> imagined myself in the field of
        programming, but now focusing on website development. unemployed and
        not in college. i hope to stick with this career in the future.
      </p>
      <p className="w-full text-zeta font-medium text-[16px] text-start">
        i{"'"}m also learning editing, graphic design, and writing. loving cold
        or hot <CoffeeText>coffee</CoffeeText> while working and study. anyway,
        that{"'"}s all about me and thank you.
      </p>
    </section>
  );
};

export default AboutSection;
