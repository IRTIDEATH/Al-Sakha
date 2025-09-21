"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("@/components/animate-cursor"), {
  ssr: false,
});

const HeroSection = () => {
  return (
    <section className="bg-foreground px-6 py-8">
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
    </section>
  );
};

export default HeroSection;
