"use client";

import { useState } from "react";
import { toast } from "sonner";

interface Icolors {
  name: string;
  class: string;
  hex: string;
}

const ColorPaletteSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const colors: Icolors[] = [
    { name: "Background", class: "bg-[#F2F2F4]", hex: "#F2F2F4" },
    { name: "Foreground", class: "bg-[#2E2E2E]", hex: "#2E2E2E" },
    { name: "Coffee", class: "bg-coffee", hex: "#8C6053" },
    { name: "Zeta", class: "bg-zeta", hex: "#686C6F" },
    { name: "Suram", class: "bg-suram", hex: "#E6E8ED" },
  ];

  const handleCopyColor = (hex: string, index: number) => {
    navigator.clipboard.writeText(hex);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 3000);
    toast.success("Color copied to clipboard", {
      description: `Color ${hex} copied to clipboard`,
      duration: 3000,
    });
  };

  return (
    <>
      <section>
        <h1 className="text-2xl mb-6 font-medium">color palettes</h1>
        <ul className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {colors.map((color, index) => (
            <li key={index} className="p-2 group">
              <div className="relative">
                <div
                  onClick={() => handleCopyColor(color.hex, index)}
                  className={`${color.class} w-full h-20 mb-2 rounded cursor-pointer transition-all duration-300`}
                >
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {copiedIndex === index ? (
                      <svg
                        className="h-5 w-5 text-background"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-background"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium">{color.name}</p>
              <p className="text-xs text-zeta">{color.hex}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ColorPaletteSection;