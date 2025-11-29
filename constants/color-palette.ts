export interface ColorInterface {
  name: string;
  class: string;
  hex: string;
}

export const colors: ColorInterface[] = [
  { name: "background", class: "text-background", hex: "#F2F2F4" },
  { name: "foreground", class: "text-foreground", hex: "#2E2E2E" },
  { name: "coffee", class: "text-coffee", hex: "#8C6053" },
  { name: "zeta", class: "text-zeta", hex: "#686C6F" },
  { name: "suram", class: "text-suram", hex: "#E6E8ED" },
];
