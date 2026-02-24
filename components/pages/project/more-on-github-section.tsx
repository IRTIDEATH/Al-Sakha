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
    <TooltipProvider delayDuration={100}>
      <section className="flex w-full flex-col justify-between">
        <h2 className="mb-2 font-medium text-[20px]">more on Github!</h2>
        <p className="font-medium text-[16px] text-zeta">
          explore more projects on my gitHub! feel free to contribute, or drop a{" "}
          <CoffeeText>star</CoffeeText> if you find something useful.
        </p>
        <div className="mt-6 flex w-full flex-col-reverse items-start justify-start gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="flex items-center gap-3">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/IRTIDEATH?tab=repositories"
              className="text-foreground text-sm decoration-2 hover:underline"
            >
              view
            </Link>
            <span className="select-none text-zeta">|</span>
            <Badge>list</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {onGithubs.map((items) => (
              <Tooltip key={items.name}>
                <TooltipTrigger asChild>
                  <Badge variant={"skill"}>
                    <Icon icon={items.icon} aria-label={items.name} />
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{items.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default MoreOnGithubSection;
