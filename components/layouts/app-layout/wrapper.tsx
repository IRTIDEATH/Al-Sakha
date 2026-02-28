"use client";

import type { LenisRef } from "lenis/react";
import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { usePathname } from "next/navigation";
import { type PropsWithChildren, useEffect, useRef } from "react";
import Footer from "@/components/layouts/app-layout/footer";
import Navbar from "@/components/layouts/app-layout/navbar";

const Wrapper = ({ children }: PropsWithChildren) => {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  useEffect(() => {
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        smoothWheel: true,
      }}
    >
      <div className="mx-auto w-full max-w-[900px] px-[22px] md:px-7">
        <Navbar />
        {children}
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Wrapper;
