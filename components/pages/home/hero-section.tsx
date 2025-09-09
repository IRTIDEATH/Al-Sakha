"use client";

import { useReducedMotion } from "motion/react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("@/components/animate-cursor"), {
  ssr: false,
});

const TextLoop = dynamic(() => import("@/components/text-loop"), {
  ssr: false,
});

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative flex items-start sm:items-center gap-8 justify-between bg-foreground px-6 py-8">
      <div className="space-y-3 flex flex-col items-start">
        <h1 className="text-5xl font-semibold text-background">
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
            <div className="w-58 h-34">
              <Image src="/zetaagent.png" alt="Vestia Zeta" fill priority />
            </div>
          </Cursor>
          Gray
        </h1>
        <p className="font-medium text-background text-xl">
          cozy as a cat taking a nap
        </p>
      </div>
      {!prefersReducedMotion && (
        <TextLoop className="absolute right-2 font-bold text-background text-2xl sm:text-3xl rotate-90">
          <span>{"-->"}</span>
          <span>{"-->"}</span>
          <span>{"-->"}</span>
          <span>{"-->"}</span>
        </TextLoop>
      )}
    </section>
  );
};

export default HeroSection;
