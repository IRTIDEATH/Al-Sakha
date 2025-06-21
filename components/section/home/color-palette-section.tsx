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

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    toast.success("Color copied to clipboard", {
      description: `Color ${hex} copied to clipboard`,
      duration: 3000,
    });
  };
  return (
    <>
      <section>
        <h1 className="text-2xl mb-4 font-medium">color palettes</h1>
        <p className="w-full text-zeta font-medium text-[16px] text-start">
          little and convenient. click to copy the color code.
        </p>
        <ul className="w-full text-zeta font-medium text-lg text-start mt-4">
          {colors.map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <span className={`text-2xl ${item.class}`}>
                {"-->"}
              </span>
              <p
                onClick={() => handleCopyColor(item.hex)}
                className="hover:underline decoration-2 cursor-pointer"
              >
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ColorPaletteSection;
