"use client"

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame, useReducedMotion } from "motion/react";
import { PropsWithChildren, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const CursorFollower = dynamic(
  () => import("@/components/ui/cursor-follower"),
  {
    ssr: false,
  }
);


const Wrapper = ({ children }: PropsWithChildren) => {
  const lenisRef = useRef<LenisRef>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);
  
  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
      <div className="mx-auto w-full max-w-[900px] px-7">
        {!prefersReducedMotion && <Navbar />}
        {children}
        <Footer />
        {!prefersReducedMotion && <CursorFollower />}
      </div>
    </ReactLenis>
  );
};

export default Wrapper