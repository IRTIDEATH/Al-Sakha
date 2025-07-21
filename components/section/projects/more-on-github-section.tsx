import { Badge } from "@/components/ui/skill-badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const MoreOnGtihubSection = () => {
  return (
    <section className="w-full flex flex-col justify-between">
      <h1 className="mb-2 text-[20px] font-medium">more on Github!</h1>
      <p className="text-zeta text-[16px] font-medium">
        explore more projects on my github. if you are interested, you can
        contribute in any of my repositories. give a star if there is a repo you
        like.
      </p>
      <div className="w-full mt-6 flex flex-col-reverse md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/IRTIDEATH?tab=repositories"
            className="text-sm font-medium text-foreground hover:underline decoration-2"
          >
            view
          </Link>
          <span className="text-zeta">|</span>
          <span className="bg-foreground px-2.5 py-0.5 text-[13px] text-background font-roboto">
            list
          </span>
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span role="img">
                  <Badge>
                    <Icon
                      className="-ms-0.5 text-[16px]"
                      icon="simple-icons:git"
                    />
                  </Badge>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Git</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default MoreOnGtihubSection;
