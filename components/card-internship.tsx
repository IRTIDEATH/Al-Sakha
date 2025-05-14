"use client";

import { Badge } from "@/components/ui/skill-badge";
import { internships } from "@/constants";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const CardInternship = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [showBadges, setShowBadges] = useState<number | null>(null);

  const toggleBadges = (index: number) => {
    if (showBadges === index) {
      setShowBadges(null);
    } else {
      setShowBadges(index);
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-6">
        {internships.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            className={`w-full flex-row items-center justify-between h-28 relative inline-flex overflow-hidden`}
          >
            <div className="flex flex-row items-center gap-4 h-full">
              <div className="h-full w-8 bg-foreground" />
              <div className="flex flex-col items-start gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <Link
                    aria-label="company link"
                    href={item.link}
                    className="text-lg sm:text-xl font-medium font-roboto hover:underline"
                  >
                    {item.company}
                  </Link>
                  <p className="text-base sm:text-lg font-medium text-zeta">
                    {item.position}
                  </p>
                </div>
                <span className="text-[12px] sm:text-[14px]">{item.date}</span>
              </div>
            </div>

            {/* techstack badge */}
            <div className="hidden sm:flex flex-wrap w-[300px] items-center justify-end gap-2 h-full">
              {item.technologies.map((items, index) => (
                <Badge key={index} className="">
                  <Icon className="-ms-0.5 text-[16px]" icon={items.icon} />
                  {items.name}
                </Badge>
              ))}
            </div>

            {/* techstack button */}
            <button
              aria-label="Slide to see techstack"
              onClick={() => toggleBadges(index)}
              className="flex sm:hidden items-center justify-center z-10 mr-1"
            >
              <Icon
                icon="weui:arrow-filled"
                className={`text-4xl transition-colors duration-500 border-2 w-6 h-6 ${
                  showBadges === index
                    ? "text-background border-background"
                    : "text-foreground border-foreground"
                }`}
              />
            </button>

            <motion.div
              className="absolute inset-0 bg-transparent sm:bg-suram -z-10"
              initial={{ width: 0 }}
              animate={{ width: isHovered === index ? "100%" : 0 }}
              transition={{ duration: 0.16, ease: "easeIn" }}
              style={{
                top: 0,
                left: 0,
                bottom: 0,
                originX: 0,
              }}
            />

            <motion.div
              className="absolute inset-0 bg-foreground overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: showBadges === index ? "100%" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                top: 0,
                left: 0,
                bottom: 0,
                originX: 0,
              }}
            >
              <motion.div
                className="w-full h-full flex flex-wrap items-center justify-end gap-2 py-1.5 px-10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: showBadges === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: showBadges === index ? 0.3 : 0,
                }}
              >
                {showBadges === index &&
                  item.technologies.map((tech, techIndex) => (
                    <Badge variant="secondary" key={techIndex}>
                      <Icon className="-ms-0.5 text-[14px]" icon={tech.icon} />
                      {tech.name}
                    </Badge>
                  ))}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardInternship;
