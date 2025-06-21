"use client";

import { skillBadgeIcon } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";

const SkillSection = () => {
  return (
    <>
      <section className="w-full mx-auto">
        <article className="divide-y-2 divide-suram mb-4 sm:mb-0">
          {skillBadgeIcon.map((item, index) => (
            <Link
              aria-label="Navigate icon"
              href={`${item.link}`}
              rel="noopener noreferrer"
              target="_blank"
              className="block"
              key={index}
            >
              <div className="group flex items-center justify-between relative px-6 py-6 cursor-pointer after:z-[-1] after:absolute after:h-full after:inset-y-0 after:right-0 after:w-0 hover:after:left-0 after:bg-suram hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">
                <div className="flex items-center gap-8">
                  <Icon
                    className="text-3xl font-medium text-zeta group-hover:text-foreground tracking-tight"
                    icon={item.icon}
                  />

                  <span className="font-medium text-lg text-zeta group-hover:text-foreground tracking-tight">
                    {item.name}
                  </span>
                </div>

                <span className="font-bold text-xl text-zeta group-hover:text-foreground">
                  {"-->"}
                </span>
              </div>
            </Link>
          ))}
        </article>
      </section>
    </>
  );
};

export default SkillSection;
