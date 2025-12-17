import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap px-2 py-0.5 font-geist text-xs transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-foreground px-2.5 py-0.5 font-roboto text-[13px] text-background",
        skill: "bg-suram px-3 py-1 text-[16px] text-foreground",
        tag: "rounded-sm bg-suram px-3.5 py-1.5 font-medium font-roboto text-[13px] text-foreground",
        outline:
          "border border-foreground px-2.5 py-0.5 font-roboto text-[14px] text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
