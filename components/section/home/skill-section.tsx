"use client";

import { skillBadgeIcon } from "@/constants";
import { Badge } from "@/components/ui/skill-badge";
import { Icon } from "@iconify/react";

const SkillSection = () => {
  return (
    <>
      <section className="w-full mx-auto">
        <div className="bg-foreground p-5 flex flex-col">
          <div className="w-full flex items-center justify-between">
            <ul className="flex mb-6 gap-2">
              <li className="w-3 h-3 bg-background"></li>
              <li className="w-3 h-3 bg-background"></li>
              <li className="w-3 h-3 bg-background"></li>
            </ul>
            <ul className="hidden sm:flex mb-6 gap-2">
              <li className="w-2 h-3 bg-background"></li>
              <li className="w-12 h-3 bg-background"></li>
            </ul>
          </div>
          <div className="space-x-[4px] space-y-[4px]">
            {skillBadgeIcon.map((item, index) => (
              <Badge className="text-[10px] sm:text-[12px] 2xl:text-[13px]" key={index}>
                <Icon
                  className="-ms-0.5 text-[12px] sm:text-[14px] 2xl:text-[15px]"
                  icon={item.icon}
                />
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillSection;
