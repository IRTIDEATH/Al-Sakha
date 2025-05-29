"use client";

import CoffeeText from "@/components/ui/coffee-text";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import ZetaText from "@/components/ui/zeta-text";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Cursor = dynamic(() => import("@/components/ui/animate-cursor"), {
  ssr: false,
});

const SlidingNumber = dynamic(() => import("@/components/ui/sliding-number"), {
  ssr: false,
});

const TextLoop = dynamic(() => import("@/components/ui/text-loop"), {
  ssr: false,
});



const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="mt-12 relative flex items-end sm:items-center gap-8 justify-between">
        <div className="space-y-6 flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl font-medium">
            <ZetaText>
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
                    priority={true}
                    sizes="(max-width: 768px) 260px, 260px"
                    alt="Vestia Zeta"
                    width={260}
                    height={260}
                  />
                </Cursor>
              )}
              Gray
            </ZetaText>
            , cozy as a <br /> cat taking a nap.
          </h1>
          <p className="font-medium text-zeta text-lg">
            loving cold or hot <CoffeeText>coffee</CoffeeText>
            <br />
            while working and study.
          </p>
          <div className="px-3 py-1 border-2 border-zeta">
            <div className="flex items-center gap-0.5 font-roboto text-zeta">
              <SlidingNumber value={hours} padStart={true} />
              <span>:</span>
              <SlidingNumber value={minutes} padStart={true} />
              <span>:</span>
              <SlidingNumber value={seconds} padStart={true} />
            </div>
          </div>
        </div>
        <TextLoop className="absolute right-0 font-bold text-2xl sm:text-3xl rotate-90">
          <span>{"-->"}</span>
          <span>{"-->"}</span>
          <span>{"-->"}</span>
          <span>{"-->"}</span>
        </TextLoop>
      </section>
    </>
  );
};

export default HeroSection;
