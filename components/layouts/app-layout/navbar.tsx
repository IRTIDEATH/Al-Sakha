"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navigationItems } from "@/constants/navigation";

const SparkleGroup = dynamic(
  () => import("@/components/animate/sparkle-effect"),
  {
    ssr: false,
  },
);

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex h-24 w-full items-center justify-between text-foreground">
      <div className="relative">
        <span className="font-medium text-[16px]">Irtideath</span>
        <SparkleGroup />
      </div>
      <div className="hidden items-center md:flex">
        <ul className="flex items-center gap-6 pr-4 font-medium font-roboto text-[16px]">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link
                aria-label="Nav link"
                className="inline-block align-middle text-zeta decoration-2 hover:underline"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <span className="bg-foreground px-2 font-bold text-background text-xl shadow-shadow">
          {"<--"}
        </span>
      </div>
      <div className="flex items-center bg-suram font-roboto md:hidden">
        <span className="px-4 font-medium text-lg">menu</span>
        <Drawer>
          <DrawerTrigger aria-label="Menu button" role="button" asChild>
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
              className="border border-foreground bg-foreground p-1.5 text-background active:bg-background active:text-foreground"
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
            <DrawerFooter className="flex w-full flex-col items-center gap-2">
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
