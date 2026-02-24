"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useCallback, useMemo, useTransition } from "react";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from "@/components/animate/morphing-dialog";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Divider } from "@/components/ui/divider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/constants/project";

type Category = string | "all";

interface CardProjectSectionProps {
  initialCategory: Category;
}

const CardProjectSecton = ({ initialCategory }: CardProjectSectionProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleTabClick = useCallback(
    (category: Category) => {
      const params = new URLSearchParams(window.location.search);
      if (category === "all") {
        params.delete("category");
      } else {
        params.set("category", category);
      }

      const queryString = params.toString();
      const newUrl = queryString
        ? `${window.location.pathname}?${queryString}`
        : window.location.pathname;

      startTransition(() => {
        router.replace(newUrl, {
          scroll: false,
        });
      });
    },
    [router],
  );

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(projects.map((item) => item.about))];
    return uniqueCategories.sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (initialCategory === "all") return projects;
    return projects.filter((item) => item.about === initialCategory);
  }, [initialCategory]);
  return (
    <TooltipProvider delayDuration={100}>
      <section>
        <Carousel
          opts={{
            dragFree: true,
            duration: 15,
            dragThreshold: 8,
          }}
          className="mb-6 w-full"
        >
          <div className="flex items-center gap-2">
            <CarouselPrevious className="static h-[31px] w-9 translate-y-0 border-none bg-foreground text-background" />
            <div className="flex-1 overflow-hidden">
              <CarouselContent className="-ml-2">
                <CarouselItem className="basis-auto pl-2">
                  <button
                    onClick={() => handleTabClick("all")}
                    className={`cursor-pointer select-none px-4 py-[5px] font-roboto text-[14px] transition-colors duration-150 ease-in-out ${
                      initialCategory === "all"
                        ? "bg-foreground text-background"
                        : "bg-suram text-foreground hover:bg-foreground hover:text-background"
                    }`}
                  >
                    all
                  </button>
                </CarouselItem>
                {categories.map((category) => {
                  return (
                    <CarouselItem key={category} className="basis-auto pl-4">
                      <button
                        onClick={() => handleTabClick(category)}
                        className={`cursor-pointer select-none px-4 py-[5px] font-roboto text-[14px] transition-colors duration-150 ease-in-out ${
                          initialCategory === category
                            ? "bg-foreground text-background"
                            : "bg-suram text-foreground hover:bg-foreground hover:text-background"
                        }`}
                      >
                        {category}
                      </button>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </div>
            <CarouselNext className="static h-[31px] w-9 translate-y-0 border-none bg-foreground text-background" />
          </div>
        </Carousel>
        {filteredProjects.map((item) => (
          <Fragment key={item.name}>
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
                          aria-label={`view ${item.name} live demo`}
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
                          aria-label={`view ${item.name} source code on github`}
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
                    {item.technologies.map((items) => (
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
              </article>
            </div>
            <Divider />
          </Fragment>
        ))}
      </section>
    </TooltipProvider>
  );
};

export default CardProjectSecton;
