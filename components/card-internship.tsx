"use client";

import { internships } from "@/constants";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const CardInternship = () => {
  const [animationStates, setAnimationStates] = useState<
    Record<number, "none" | "entering" | "exiting">
  >({});

  const handleMouseEnter = (index: number) => {
    setAnimationStates((prev) => ({
      ...prev,
      [index]: "entering",
    }));
  };

  const handleMouseLeave = (index: number) => {
    setAnimationStates((prev) => ({
      ...prev,
      [index]: "exiting",
    }));
  };

  const handleAnimationComplete = (
    index: number,
    type: "entering" | "exiting"
  ) => {
    if (type === "exiting") {
      setAnimationStates((prev) => ({
        ...prev,
        [index]: "none",
      }));
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-6">
        {internships.map((item, index) => {
          const cardState = animationStates[index] || "none";

          return (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`w-full flex-row items-center justify-between h-22 sm:h-18 relative inline-flex overflow-hidden`}
            >
              <div className="flex flex-row items-center gap-4 h-full w-full">
                <div className="h-full w-8 bg-foreground" />
                <div className="flex flex-col items-start sm:flex-row sm:justify-between w-full sm:items-end">
                  <div className="flex flex-col gap-0.5">
                    <Link
                      aria-label="company link"
                      href={item.link}
                      className="text-xl font-medium font-roboto hover:underline decoration-2"
                    >
                      {item.company}
                    </Link>
                    <p className="text-lg font-medium text-zeta">
                      {item.position}
                    </p>
                  </div>
                  <span className="text-[14px] font-medium text-zeta mt-2">
                    {item.date}
                  </span>
                </div>
              </div>

              {cardState === "entering" && (
                <motion.div
                  key={`enter-${index}`}
                  className="absolute inset-0 bg-transparent sm:bg-suram -z-10"
                  initial={{ left: "-100%", right: "100%" }}
                  animate={{ left: "0%", right: "0%" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  onAnimationComplete={() =>
                    handleAnimationComplete(index, "entering")
                  }
                />
              )}

              {cardState === "exiting" && (
                <motion.div
                  key={`exit-${index}`}
                  className="absolute inset-0 bg-transparent sm:bg-suram -z-10"
                  initial={{ left: "0%", right: "0%" }}
                  animate={{ left: "100%", right: "-100%" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  onAnimationComplete={() =>
                    handleAnimationComplete(index, "exiting")
                  }
                />
              )}              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardInternship;
