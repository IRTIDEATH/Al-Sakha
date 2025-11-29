import { Icon } from "@iconify/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import CoffeeText from "@/components/ui/coffee-text";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { onGithubs } from "@/constants/on-github";

const MoreOnGithubSection = () => {
  return (
    <section className="flex w-full flex-col justify-between">
      <h2 className="mb-2 font-medium text-[20px]">more on Github!</h2>
      <p className="font-medium text-[16px] text-zeta">
        explore more projects on my github. if you are interested, you can
        contribute in any of my repositories. give a{" "}
        <CoffeeText>star</CoffeeText> if there is a repo you like.
      </p>
      <div className="mt-6 flex w-full flex-col-reverse items-start justify-start gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="flex items-center gap-3">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/IRTIDEATH?tab=repositories"
            className="font-medium text-foreground text-sm decoration-2 hover:underline"
          >
            view
          </Link>
          <span className="select-none text-zeta">|</span>
          <Badge>list</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {onGithubs.map((items, index) => (
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
