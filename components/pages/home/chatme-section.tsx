import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { chatLink } from "@/constants/chat-link";

const ChatmeSection = () => {
  return (
    <section className="flex w-full flex-col justify-between gap-6 md:flex-row md:items-end md:gap-22">
      <div>
        <h2 className="mb-4 font-medium text-2xl">wanna talk?</h2>
        <p className="w-full text-start text-[16px] text-zeta">
          need help, consultation, talk about random things, and connect with
          me.
        </p>
      </div>
      <ul className="flex flex-row gap-3 font-medium text-lg">
        {chatLink.map((item, index) => {
          const content = (
            <Link
              aria-label={item.label}
              rel="noopener noreferrer"
              target="_blank"
              href={item.href}
              className="p-1 text-foreground"
            >
              <Icon className="text-[22px]" icon={item.icon} />
            </Link>
          );

          if (item.title === "Holopin") {
            return (
              <li className="flex" key={index}>
                <TooltipProvider delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger asChild>{content}</TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          }

          return (
            <li className="flex" key={index}>
              {content}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ChatmeSection;
