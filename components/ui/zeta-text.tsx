import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const ZetaText = ({ children, className }: PropsWithChildren<Props>) => {
  return <span className={cn("text-zeta", className)}>{children}</span>;
};

export default ZetaText;
