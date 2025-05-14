import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const CoffeeText = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <span className={cn("text-coffee", className)}>{children}</span>
  );
};

export default CoffeeText;
