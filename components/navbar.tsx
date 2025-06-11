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
        <svg
          width="831"
          height="590"
          viewBox="0 0 831 590"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-full"
        >
          <path
            d="M495.4 589.24V0H594V497.92H735.93V403.93H830.06V588.92H825.72L495.4 589.24Z"
            fill="#2E2E2E"
          />
          <path
            d="M0 589.07L306.08 0.109863H453.98V589.12H356.99V494.99H349.63H233.39C233.39 494.99 230.18 495.31 233.54 489.2C236.9 483.09 280.6 403.96 280.6 403.96H284.73H356.98V127.49H355.1L113.62 589.07H0Z"
            fill="#2E2E2E"
          />
        </svg>
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-8 font-roboto font-medium px-4 text-lg text-zeta">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  aria-label="Nav link"
                  className="hover:underline decoration-2"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <span className="px-2 py-[4px] bg-foreground text-suram inline-flex text-lg font-bold">
            {"<--"}
          </span>
        </div>
        <div className="md:hidden flex items-center font-roboto bg-suram">
          <h1 className="px-4 text-lg font-medium">menu</h1>
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
