"use client";

import { toast } from "sonner";

interface Icolors {
  name: string;
  class: string;
  hex: string;
}

const ColorPaletteSection = () => {
  const colors: Icolors[] = [
    { name: "background", class: "text-background", hex: "#F2F2F4" },
    { name: "foreground", class: "text-foreground", hex: "#2E2E2E" },
    { name: "coffee", class: "text-coffee", hex: "#8C6053" },
    { name: "zeta", class: "text-zeta", hex: "#686C6F" },
    { name: "suram", class: "text-suram", hex: "#E6E8ED" },
  ];

  const handleCopyColor = (name: string, hex: string) => {
    navigator.clipboard.writeText(hex);
    toast.success(`Color ${name} to clipboard`, {
      description: `Color ${hex} copied to clipboard`,
      duration: 3000,
    });
  };
  return (
    <section>
      <h1 className="mb-4 font-medium text-2xl">color palettes</h1>
      <p className="w-full text-start font-medium text-[16px] text-zeta">
        little and convenient. click to copy the color code.
      </p>
      <ul className="mt-4 w-full text-start font-medium text-lg text-zeta">
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
