"use client";

import Image from "next/image";

const Cursor = dynamic(() => import("@/components/animate/animate-cursor"), {
  ssr: false,
});

import { motion } from "motion/react";

import dynamic from "next/dynamic";

const HeroSection = () => {
  return (
    <section className="bg-foreground px-6 py-8">
      <div className="flex max-w-lg flex-col items-start gap-3">
        <span className="font-semibold text-5xl text-background">
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
              damping: 24,
              mass: 0.4,
            }}
          >
            <Image
              src="/vestia-zeta.webp"
              alt="Vestia Zeta"
              priority
              width={240}
              height={240}
              unoptimized
              className="object-cover"
            />
          </Cursor>
          Gray
        </span>
        <span className="relative font-medium font-schoolbell text-background text-xl">
          cozy as a cat taking a nap
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="-right-2 absolute rotate-12 select-none text-[9px] text-background/80"
          >
            z
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="-right-4 -top-2.5 absolute rotate-12 select-none text-[12px] text-background/80"
          >
            z
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.3 }}
            className="-right-6 -top-5 absolute rotate-12 select-none text-[12px] text-background/90"
          >
            Z
          </motion.span>
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
