"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/animated-background";
import { skillBadgeIcon } from "@/constants/skill-badge";

const SkillSection = () => {
  return (
    <section className="mx-auto mb-4 w-full divide-y-2 divide-suram sm:mb-0">
      <AnimatedBackground
        className="-z-50 bg-suram"
        transition={{
          bounce: 0,
          type: "spring",
          duration: 0.3,
          from: 50,
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
            <div className="group flex cursor-pointer items-center justify-between px-6 py-6">
              <div className="flex items-center gap-8">
                <Icon
                  className="font-medium text-3xl text-zeta tracking-tight transition-colors duration-300 group-hover:text-foreground"
                  icon={item.icon}
                  aria-hidden="true"
                />

                <span className="font-medium text-lg text-zeta tracking-tight transition-colors duration-300 group-hover:text-foreground">
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
