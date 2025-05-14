"use client"

import CoffeeText from "@/components/ui/coffee-text";

const AboutSection = () => {
  return (
    <section className="w-full mx-auto">
      <h1 className="text-2xl mb-6 font-medium">
        <span className="inline-block">what about me?</span>
      </h1>
      <p 
        className="w-full text-zeta font-medium text-lg text-start"
        style={{ 
          contentVisibility: 'auto',
          containIntrinsicSize: '0 150px' 
        }}
      >
        yea, an ordinary npc and{" "}
        <CoffeeText>weak in math</CoffeeText>, that{"'"}s me. you can
        call me al sakha. sometimes i think about myself, who somehow got into
        programming. focusing on{" "}
        <CoffeeText>web development</CoffeeText>, and hoping to
        stick with this career in the future.
      </p>
    </section>
  );
}

export default AboutSection