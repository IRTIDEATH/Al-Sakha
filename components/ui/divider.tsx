import type React from "react";
import { cn } from "@/lib/utils";

export const Divider = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("my-10 w-full select-none bg-suram py-[1.3px]", className)}
    />
  );
};

export const DotDivider = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "my-18 flex w-full select-none items-center justify-center gap-4",
        className,
      )}
    >
      <span className="bg-foreground p-0.5" />
      <span className="bg-foreground p-[2.5px]" />
      <span className="bg-foreground p-0.5" />
    </div>
  );
};

export const DividerVertical = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute top-10 bottom-[-3rem] left-5 my-4 w-[2px] select-none bg-suram",
        className,
      )}
    />
  );
};
