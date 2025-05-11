"use client"

import { skillBadgeIcon } from "@/constants";
import { AnimatedButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/skill-badge";
import { Icon } from "@iconify/react";

const HeroSection = () => {
  return (
    <section className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-medium">
          <span className="text-zeta">Gray,</span> cozy as a <br /> cat taking a
          nap.
        </h1>
        <p className="font-medium text-zeta text-lg">
          loving cold or hot <span className="text-coffee">coffee</span>
          <br />
          while working and study.
        </p>
        <AnimatedButton>Download CV</AnimatedButton>
      </div>
      <div className="bg-foreground p-5 flex flex-col">
        <div className="flex mb-4 gap-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <div className="md:w-[21rem] space-x-[4px] space-y-[4px]">
          {skillBadgeIcon.map((item, index) => (
            <Badge key={index}>
              <Icon
                className="-ms-0.5 text-[16px]"
                icon={item.icon}
              />
              {item.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection