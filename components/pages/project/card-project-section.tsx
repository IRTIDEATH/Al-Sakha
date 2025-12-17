"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from "@/components/animate/morphing-dialog";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/constants/project";

const CardProjectSecton = () => {
  return (
    <>
      {projects.map((item, index) => (
        <section key={index}>
          <div className="flex w-full items-start gap-0 md:gap-5">
            <div className="relative hidden md:block">
              <MorphingDialog
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <MorphingDialogTrigger>
                  <div className="relative h-40 w-28">
                    <div className="absolute z-10 h-full w-full bg-foreground transition-all duration-400 ease-in-out hover:bg-transparent hover:shadow-shadow" />
                    <MorphingDialogImage
                      src={item.image}
                      alt={item.name}
                      className="object-cover"
                    />
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent className="relative">
                    <div className="relative h-[90vh] w-[90vw]">
                      <MorphingDialogImage
                        src={item.image}
                        alt={item.name}
                        className="object-contain"
                      />
                    </div>
                  </MorphingDialogContent>
                  <MorphingDialogClose
                    className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
                    variants={{
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { delay: 0.3, duration: 0.1 },
                      },
                      exit: { opacity: 0, transition: { duration: 0 } },
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </MorphingDialogClose>
                </MorphingDialogContainer>
              </MorphingDialog>
            </div>
            <article className="w-full">
              <h2 className="mb-2 font-medium text-[24px]">{item.name}</h2>
              <p className="mb-6 text-[16px] text-zeta">{item.description}</p>
              <div className="mt-6 flex w-full flex-col-reverse items-start justify-start gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
                <div className="flex items-center gap-3">
                  {item.view ? (
                    <>
                      <Link
                        href={item.view ?? ""}
                        className="text-foreground text-sm decoration-2 hover:underline"
                      >
                        view
                      </Link>
                      <span className="select-none text-zeta">|</span>
                    </>
                  ) : null}
                  {item.github ? (
                    <>
                      <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href={item.github ?? ""}
                        className="text-foreground text-sm decoration-2 hover:underline"
                      >
                        github
                      </Link>
                      <span className="select-none text-zeta">|</span>
                    </>
                  ) : null}
                  <Badge>{item.about}</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((items, index) => (
                    <TooltipProvider delayDuration={100} key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge
                            variant={"skill"}
                            role="img"
                            aria-label={items.name}
                          >
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
            </article>
          </div>
          <Divider />
        </section>
      ))}
    </>
  );
};

export default CardProjectSecton;
