import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { ongithub } from "@/constants";
import { Badge } from "@/components/ui/badge";
import CoffeeText from "@/components/ui/coffee-text";

const MoreOnGithubSection = () => {
  return (
    <section className="w-full flex flex-col justify-between">
      <h2 className="mb-2 text-[20px] font-medium">more on Github!</h2>
      <p className="text-zeta text-[16px] font-medium">
        explore more projects on my github. if you are interested, you can
        contribute in any of my repositories. give a{" "}
        <CoffeeText>star</CoffeeText> if there is a repo you like.
      </p>
      <div className="w-full mt-6 flex flex-col-reverse md:flex-row gap-4 md:gap-0 items-start md:items-center justify-start md:justify-between">
        <div className="flex items-center gap-3">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/IRTIDEATH?tab=repositories"
            className="text-sm font-medium text-foreground hover:underline decoration-2"
          >
            view
          </Link>
          <span className="text-zeta select-none">|</span>
          <Badge>list</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {ongithub.map((items, index) => (
            <TooltipProvider delayDuration={100} key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant={"skill"} role="img" aria-label={items.name}>
                    <Icon icon={items.icon} />
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{items.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreOnGithubSection;
