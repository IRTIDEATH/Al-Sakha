"use client";

import CoffeeText from "@/components/ui/coffee-text";

const TitleSection = () => {
  return (
    <>
      <section className="mt-12">
        <h1 className="text-2xl mb-6 font-medium">coding result</h1>
        <p className="w-full text-zeta font-medium text-lg text-start">
          these are some of my <CoffeeText>completed</CoffeeText>{" "}
          projects and those in <CoffeeText>development</CoffeeText>.
          since i am unemployed, i will probably make more projects in the
          future, just to have something to do while unemployed.
        </p>
      </section>
    </>
  );
};

export default TitleSection;
