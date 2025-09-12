"use client";

import { AnimatedBackground } from "@/components/animated-background";
import { skillBadgeIcon } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";

const SkillSection = () => {
  return (
    <section className="w-full mx-auto divide-y-2 divide-suram mb-4 sm:mb-0">
      <AnimatedBackground
        className='-z-50 bg-suram'
        transition={{
          bounce: 0,
          type: "spring",
          duration: 0.3,
          from: 50
        }}
        enableHover
      >
        {skillBadgeIcon.map((item, index) => (
            <Link
              aria-label="Skills Link"
              key={index}
              data-id={`card-${index}`}
              href={`${item.link}`}
              rel="noopener noreferrer"
              target="_blank"
              className="block"
            >
              <div className="group flex items-center justify-between px-6 py-6 cursor-pointer">
                <div className="flex items-center gap-8">
                  <Icon
                  className="text-3xl font-medium text-zeta transition-colors duration-300 group-hover:text-foreground tracking-tight"
                    icon={item.icon}
                    aria-hidden="true"
                  />

                <span className="font-medium text-lg text-zeta transition-colors duration-300 group-hover:text-foreground tracking-tight">
                    {item.name}
                  </span>
                </div>

                <span
                className="font-bold text-xl text-zeta transition-colors duration-300 group-hover:text-foreground"
                  aria-hidden="true"
                >
                  {"-->"}
                </span>
              </div>
            </Link>
        ))}
      </AnimatedBackground>
    </section>
  );
};

export default SkillSection;