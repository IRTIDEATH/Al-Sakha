"use client";

import { Icon } from "@iconify/react";
import { toast } from "sonner";
import { colors } from "@/constants/color-palette";

const ColorPaletteSection = () => {
  const handleCopyColor = (name: string, hex: string) => {
    navigator.clipboard.writeText(hex);
    toast.success(`color ${name} to clipboard`, {
      description: `code: ${hex}`,
      duration: 3000,
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
      <ul className="mt-5 w-full text-start text-lg">
        {colors.map((item, index) => (
          <li className="flex items-center gap-2" key={index}>
            <span className={`text-2xl ${item.class}`}>{"-->"}</span>
            <button
              onClick={() => handleCopyColor(item.name, item.hex)}
              className="cursor-pointer text-start decoration-2 hover:underline"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ColorPaletteSection;
