"use client"

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { PropsWithChildren, useEffect, useRef } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  const lenisRef = useRef<LenisRef>(null);

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
      <div className="mx-auto w-full max-w-[1024px] px-7">
        <Navbar />
        {children}
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Wrapper