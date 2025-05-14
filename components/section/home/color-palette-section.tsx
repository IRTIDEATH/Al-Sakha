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
    setTimeout(() => setCopiedIndex(null), 2000);
    toast.success("Color copied to clipboard", {
      description: `Color ${hex} copied to clipboard`,
      duration: 2000,
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
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-background drop-shadow-lg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white drop-shadow-lg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
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
