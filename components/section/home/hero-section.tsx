"use client";

import { skillBadgeIcon } from "@/constants";
import { AnimatedButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/skill-badge";
import { Icon } from "@iconify/react";
import CoffeeText from "@/components/ui/coffee-text";
import { Cursor } from "@/components/ui/animate-cursor";
import { useReducedMotion } from "motion/react";
import Image from "next/image";


const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <>
      <section className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-medium">
            <span className="text-zeta">
              {!prefersReducedMotion && (
                <Cursor
                  attachToParent
                  variants={{
                    initial: { height: 0, opacity: 0, scale: 0.3 },
                    animate: { height: "auto", opacity: 1, scale: 1 },
                    exit: { height: 0, opacity: 0, scale: 0.3 },
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.3,
                    bounce: 0.1,
                  }}
                  className="overflow-hidden"
                  springConfig={{
                    bounce: 0.01,
                  }}
                >
                  <Image
                    src="/zetaagent.png"
                    alt="Vestia Zeta"
                    width={240}
                    height={240}
                    className="h-40 w-60 object-cover"
                  />
                </Cursor>
              )}
              Gray,
            </span>{" "}
            cozy as a <br /> cat taking a nap.
          </h1>
          <p className="font-medium text-zeta text-lg">
            loving cold or hot <CoffeeText>coffee</CoffeeText>
            <br />
            while working and study.
          </p>
          <AnimatedButton>Download CV</AnimatedButton>
        </div>
        <div className="bg-foreground p-5 flex flex-col">
          <ul className="flex mb-4 gap-2">
            <li className="w-3 h-3 bg-white rounded-full"></li>
            <li className="w-3 h-3 bg-white rounded-full"></li>
            <li className="w-3 h-3 bg-white rounded-full"></li>
          </ul>
          <div className="md:w-[21rem] space-x-[4px] space-y-[4px]">
            {skillBadgeIcon.map((item, index) => (
              <Badge key={index}>
                <Icon className="-ms-0.5 text-[16px]" icon={item.icon} />
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
