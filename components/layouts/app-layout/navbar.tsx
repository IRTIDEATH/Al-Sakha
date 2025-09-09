"use client";

import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navigationItems } from "@/constants";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

const SparkleGroup = dynamic(() => import("@/components/sparkle-effect"), {
  ssr: false,
});

const Navbar = () => {
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  return (
    <nav className="w-full h-24 text-foreground flex items-center justify-between">
      <div className="relative">
        <span className="font-medium text-[16px]">Irtideath</span>
        {!prefersReducedMotion && <SparkleGroup />}
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex items-center gap-8 font-roboto font-medium text-[16px] pr-4">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link
                aria-label="Nav link"
                className="hover:underline decoration-2 text-zeta inline-block align-middle"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <span className="px-2 bg-foreground text-background text-xl font-bold shadow-shadow">
          {"<--"}
        </span>
      </div>
      <div className="md:hidden flex items-center font-roboto bg-suram">
        <span className="px-4 text-lg font-medium">menu</span>
        <Drawer>
          <DrawerTrigger
            aria-label="Menu button"
            role="button"
            asChild
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="bg-foreground border border-foreground p-1.5 text-background active:bg-background active:text-foreground"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="sr-only">Menu</DrawerTitle>
            <DrawerDescription className="sr-only">
              Navigation menu with links to different pages
            </DrawerDescription>
            <DrawerFooter className="flex flex-col items-center w-full gap-2">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    className="w-full max-w-[300px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={index}
                    transition={{
                      times: [0.6],
                      duration: 0.5,
                      delay: index * 0.12,
                      ease: "easeOut",
                    }}
                  >
                    <Button
                      aria-label="Nav button"
                      variant={isActive ? "active" : "classic"}
                      size={"classic"}
                      asChild
                    >
                      <Link href={item.href} aria-label="Nav link">
                        {item.name}
                      </Link>
                    </Button>
                  </motion.div>
                );
              })}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
