"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogImage,
  MorphingDialogContainer,
} from "@/components/morphing-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Divider } from "@/components/ui/divider";
import { projects } from "@/constants/index";
import { useReducedMotion } from "motion/react";
import Cursor from "@/components/animate-cursor";

const CardProjectSecton = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <>
      {projects.map((item, index) => (
        <section key={index}>
          <div className="flex w-full items-start gap-0 md:gap-5">
            <div className="relative hidden md:block">
              <Cursor
                attachToParent
                variants={{
                  initial: { scale: 0.3, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.3, opacity: 0 },
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.15,
                }}
                className='-left-10 -top-3'
              >
                <div className='ml-4 mt-1 bg-foreground px-1 py-0.5 text-[8px] text-background font-roboto'>
                  click image
                </div>
              </Cursor>
              {!prefersReducedMotion && (
                <MorphingDialog
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <MorphingDialogTrigger>
                    <div className="relative h-40 w-28">
                      <div className="w-full h-full bg-foreground hover:shadow-shadow z-10 absolute hover:bg-transparent ease-in-out transition-all duration-400" />
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
            <article className="w-full">
              <h2 className="mb-2 text-[24px] font-medium">{item.name}</h2>
              <p className="mb-6 text-zeta text-[16px] font-medium">
                {item.description}
              </p>
              <div className="w-full mt-6 flex flex-col-reverse md:flex-row gap-4 md:gap-0 items-start md:items-center justify-start md:justify-between">
                <div className="flex items-center gap-3">
                  {item.view ? (
                    <>
                      <Link
                        href={item.view ?? ""}
                        className="text-sm font-medium text-foreground hover:underline decoration-2"
                      >
                        view
                      </Link>
                      <span className="text-zeta">|</span>
                    </>
                  ) : null}
                  {item.github ? (
                    <>
                      <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href={item.github ?? ""}
                        className="text-sm font-medium text-foreground hover:underline decoration-2"
                      >
                        github
                      </Link>
                      <span className="text-zeta">|</span>
                    </>
                  ) : null}
                  <Badge>
                    {item.status}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((items, index) => (
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
            </article>
          </div>
          <Divider />
        </section>
      ))}
    </>
  );
};

export default CardProjectSecton;
