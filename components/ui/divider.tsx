"use client";

import React from "react";
import { cn } from "@/lib/utils";

const Divider = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("bg-suram py-[1.5px] w-full my-12", className)} />;
};

export default Divider;