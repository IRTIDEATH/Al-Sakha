"use client";

import type { LenisRef } from "lenis/react";
import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { type PropsWithChildren, useEffect, useRef } from "react";
import Footer from "@/components/layouts/app-layout/footer";
import Navbar from "@/components/layouts/app-layout/navbar";

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
      <div className="mx-auto w-full max-w-[900px] px-7">
        <Navbar />
        {children}
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Wrapper;
