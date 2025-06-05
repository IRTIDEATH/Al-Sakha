"use client";

import CoffeeText from "@/components/ui/coffee-text";

const AboutSection = () => {
  return (
    <section className="w-full mx-auto">
      <h1 className="text-2xl mb-6 font-medium">what about me?</h1>
      <p
        className="w-full text-zeta font-medium text-lg text-start"
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "0 150px",
        }}
      >
        yea, just an ordinary npc and <CoffeeText>dumb in math</CoffeeText>,
        you can call me al sakha. i never imagined myself in the field of
        programming, but am now focusing on website development. <CoffeeText>unemployed</CoffeeText> and
        not in college. i hope to stick with this career in the future.
        <br />
        <br />
        i'm also learning editing, graphic design, and writing. anyway, that's
        all the yapping from me and thank you.
      </p>
    </section>
  );
};

export default AboutSection;
