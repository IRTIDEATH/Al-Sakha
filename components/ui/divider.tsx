"use client";

import React from "react";
import { cn } from "@/lib/utils";

const Divider = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("bg-suram py-[1.3px] w-full my-10", className)} />;
};

export default Divider;