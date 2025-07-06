"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-base transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-transparent border-[1.5px] border-foreground text-foreground relative z-10 font-roboto font-medium",
        link: "text-primary underline-offset-4 hover:underline",
        ghost: "hover:text-background",
        classic:
          "w-full bg-foreground border border-foreground focus:bg-transparent focus:text-foreground text-center text-background",
        active:
          "w-full border border-foreground bg-transparent text-foreground text-center",
      },
      size: {
        default: "px-6 py-1",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        classic: "text-xl py-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const AnimatedButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { children: React.ReactNode }
>(({ children, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative inline-block overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        ref={ref}
        style={{ color: isHovered ? "#F2F2F4" : "#2E2E2E" }}
        {...props}
      >
        {children}
      </Button>

      <motion.div
        className="absolute inset-0 bg-foreground"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          originX: 0,
        }}
      />
    </div>
  );
});
AnimatedButton.displayName = "AnimatedButton";

export { Button, buttonVariants, AnimatedButton };
