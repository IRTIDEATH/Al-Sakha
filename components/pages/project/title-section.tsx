"use client";

import CoffeeText from "@/components/ui/coffee-text";
import { Divider } from "@/components/ui/divider";

const TitleSection = () => {
  return (
    <section>
      <h1 className="text-3xl mb-6 font-medium">coding result</h1>
      <p className="w-full text-zeta font-medium text-[16px] text-start mb-6">
        these are some of my coding projects completed, under development, and
        pending. i often used my free time, especially when unemployed, to build
        things, learn new skills, and stay <CoffeeText>productive.</CoffeeText>
      </p>

      <Divider className="md:mb-0"/>
      <ul className="items-center justify-between text-[10px] font-medium font-roboto my-6 hidden md:flex select-none">
        <li>click</li>
        <li>the</li>
        <li>image</li>
      </ul>
    </section>
  );
};

export default TitleSection;
