import React from "react";
import { cn } from "@/lib/utils";

export const Divider = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("bg-suram py-[1.3px] w-full my-10 select-none", className)} />;
};

export const DotDivider = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("w-full my-18 flex items-center justify-center gap-4 select-none", className)}>
      <span className="p-0.5 bg-foreground" />
      <span className="p-[2.5px] bg-foreground" />
      <span className="p-0.5 bg-foreground" />
    </div>
  );
};

export const DividerVertical = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("absolute top-10 bottom-[-3rem] left-5 w-[2px] bg-suram my-4 select-none", className)} />;
};