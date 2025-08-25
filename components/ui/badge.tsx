import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium font-geist w-fit whitespace-nowrap shrink-0 gap-1.5 [&>svg]:pointer-events-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-foreground px-2.5 py-0.5 text-[13px] text-background font-roboto font-normal",
        skill: "bg-suram text-foreground text-[16px] px-3 py-1",
        tag: "bg-suram px-3.5 py-1.5 text-[13px] text-foreground font-roboto font-medium rounded-sm",
        outline:
          "border border-foreground px-2.5 py-0.5 text-[14px] text-foreground font-roboto font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
