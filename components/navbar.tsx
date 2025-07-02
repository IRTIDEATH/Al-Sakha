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
import { Button } from "./ui/button";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

const SparkleGroup = dynamic(() => import("./sparkle-effect"), {
  ssr: false,
});

const Navbar = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <>
      <nav className="w-full h-24 text-foreground flex items-center justify-between">
        <div className="relative">
          <span className="font-medium text-[16px]">IrtiDeath</span>
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
          <h1 className="px-4 text-lg font-medium">menu</h1>
          <Drawer>
            <DrawerTrigger aria-label="Menu button" role="button" asChild>
              <svg
                className="bg-foreground p-1.5"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#F2F2F4"
                  d="M16 18v2H5v-2zm5-7v2H3v-2zm-2-7v2H8V4z"
                />
              </svg>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerTitle className="sr-only">Menu</DrawerTitle>
              <DrawerDescription className="sr-only">
                Navigation menu with links to different pages
              </DrawerDescription>
              <div className="mx-auto w-[300px]">
                <DrawerFooter className="flex flex-col items-center w-full gap-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={index}
                      transition={{
                        times: [0.4],
                        duration: 0.5,
                        delay: index * 0.12,
                        ease: "easeOut",
                      }}
                    >
                      <Button
                        aria-label="Nav button"
                        variant={"classic"}
                        size={"classic"}
                        asChild
                      >
                        <Link href={item.href} aria-label="Nav link">
                          {item.name}
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
