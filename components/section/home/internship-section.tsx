"use client";

import dynamic from 'next/dynamic';

const CardInternship = dynamic(() => import("@/components/card-internship"));
import { useReducedMotion } from 'motion/react';

const InternshipSection = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <>
      <section>
        <h1 className="text-2xl mb-6 font-medium">internship activities</h1>
        {!prefersReducedMotion && <CardInternship />}
      </section>
    </>
  );
}

export default InternshipSection