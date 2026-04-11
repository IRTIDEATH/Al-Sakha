import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const MdxImage = ({
  src,
  alt,
  className,
  ...props
}: ComponentProps<"img">) => {
  const showCaption = alt && typeof alt === "string" && !alt.startsWith("_");
  const captionText =
    typeof alt === "string" && alt.startsWith("_") ? alt.slice(1) : alt;

  return (
    <span className="my-8 block w-full md:my-11">
      {/* biome-ignore lint/a11y/useAltText: <explanation> */}
      <img
        src={src}
        alt={typeof captionText === "string" ? captionText : ""}
        {...props}
        className={cn("", className)}
      />
      {showCaption && (
        <span className="mt-4 block whitespace-pre-line text-center font-medium font-satoshi text-base text-zeta">
          {captionText}
        </span>
      )}
    </span>
  );
};
