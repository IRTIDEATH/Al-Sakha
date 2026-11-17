"use client";

import { Icon } from "@iconify/react";
import { toast } from "sonner";
import { colors } from "@/constants/color-palette";

const ColorPaletteSection = () => {
  const handleCopyColor = (name: string, hex: string, text: string) => {
    navigator.clipboard.writeText(hex);
    toast.success(`color ${name} to clipboard`, {
      description: `code: ${hex}`,
      duration: 3000,
      style: {
        background: hex,
        color: text,
      },
      icon: (
        <Icon
          icon="clarity:copy-line"
          className="text-[18px]"
          aria-hidden="true"
        />
      ),
    });
  };
  return (
    <section className="text-zeta">
      <h2 className="mb-3 font-medium text-2xl text-foreground">
        color palettes
      </h2>
      <p className="w-full text-start text-[16px]">
        little and convenient. click to copy the color code.
      </p>
      <div className="mt-5 grid grid-cols-5 overflow-hidden bg-foreground shadow-shadow">
        {colors.map((item, index) => (
          <button
            key={index}
            type="button"
            title={item.name}
            aria-label={`copy ${item.name} color`}
            onClick={() => handleCopyColor(item.name, item.hex, item.text)}
            className="group min-w-0 cursor-pointer"
          >
            <span className={`block h-12 w-full ${item.bg}`} />
            <span className="block truncate px-0.5 py-2 text-center font-schoolbell text-[12px] text-background sm:text-[16px]">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ColorPaletteSection;
