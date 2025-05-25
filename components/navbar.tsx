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

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-24 text-foreground flex items-center justify-between">
        <span className="font-roboto font-medium text-lg">Al Sakha.</span>
        <div className="flex items-center font-geist bg-suram z-50 overflow-hidden ml-auto whitespace-pre group relative transition-all duration-300 ease-out">
          <h1 className="px-4 text-lg font-medium">menu</h1>
          <span className="-z-10 absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-zeta/90 opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-24" />
          <Drawer>
            <DrawerTrigger
              aria-label="Menu button"
              role="button"
              className="cursor-pointer"
              asChild
            >
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
