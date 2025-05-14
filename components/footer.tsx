"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const Footer = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hanyaakunzs@gmail.com")
    toast.success("Email copied to clipboard", {
          duration: 2000,
        });
  }
  return (
    <>
      <footer className="w-full bg-suram flex items-center justify-between h-12 mb-8 mt-16">
        <div className="flex items-center gap-6">
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://github.com/IRTIDEATH"
                  className="text-suram bg-foreground h-12 w-12 flex items-center justify-center border border-foreground hover:text-foreground hover:bg-suram transition-colors duration-300"
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
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>follow me</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger
                className="text-foreground h-12 w-12 cursor-pointer"
                onClick={handleCopyEmail}
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
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>hanyaakunzs@gmail.com</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="text-sm text-zeta mr-4 font-medium">
          © 2025 - Present
        </div>
      </footer>
    </>
  );
};

export default Footer;
