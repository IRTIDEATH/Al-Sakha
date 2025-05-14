"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/skill-badge";
import { Icon } from "@iconify/react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogImage,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Divider from "@/components/ui/divider";
import { projects } from "@/constants/index";
import { useReducedMotion } from "motion/react";

const CardProjectSecton = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <>
      {projects.map((item, index) => (
        <section key={index}>
          <div className="flex w-full">
            <div className="relative hidden md:block mr-5">
              {!prefersReducedMotion && (
                <MorphingDialog
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <MorphingDialogTrigger>
                    <div className="relative h-40 w-28">
                      <div className="w-full h-full bg-foreground/50 z-10 absolute hover:bg-transparent transition-colors duration-200"/>
                      <MorphingDialogImage
                        src={item.image}
                        alt="Image Project"
                        className="object-cover"
                      />
                    </div>
                  </MorphingDialogTrigger>
                  <MorphingDialogContainer>
                    <MorphingDialogContent className="relative">
                      <div className="relative h-[90vh] w-[90vw]">
                        <MorphingDialogImage
                          src={item.image}
                          alt="Image Project"
                          className="object-contain"
                        />
                      </div>
                    </MorphingDialogContent>
                    <MorphingDialogClose
                      className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
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
              )}
            </div>
            <div>
              <h1 className="mb-2 text-[26px] font-medium">{item.name}</h1>
              <p className="mb-6 text-zeta text-[16px] font-medium">
                {item.description}
              </p>
              <div className="w-full flex flex-col-reverse md:flex-row gap-4 md:gap-0 items-start justify-between">
                <div className="flex items-center gap-3">
                  {item.view ? (
                    <>
                      <Link
                        href={item.view ?? ""}
                        className="text-sm font-medium text-foreground hover:underline"
                      >
                        view
                      </Link>
                      <span className="text-zeta">|</span>
                    </>
                  ) : null}
                  {item.github ? (
                    <>
                      <Link
                        href={item.github ?? ""}
                        className="text-sm font-medium text-foreground hover:underline"
                      >
                        github
                      </Link>
                      <span className="text-zeta">|</span>
                    </>
                  ) : null}
                  <span className="bg-foreground px-3.5 py-1 text-sm text-background">
                    {item.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-2 h-full">
                  {item.technologies.map((items, index) => (
                    <TooltipProvider delayDuration={100} key={index}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge>
                            <Icon
                              className="-ms-0.5 text-[16px]"
                              icon={items.icon}
                            />
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
            </div>
          </div>
          <Divider />
        </section>
      ))}
    </>
  );
};

export default CardProjectSecton;
