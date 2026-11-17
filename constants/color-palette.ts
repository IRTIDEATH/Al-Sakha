interface ColorInterface {
  name: string;
  bg: string;
  hex: string;
  text: string;
}

export const colors: ColorInterface[] = [
  {
    name: "background",
    bg: "bg-background",
    hex: "#F2F2F4",
    text: "#2E2E2E",
  },
  {
    name: "foreground",
    bg: "bg-foreground",
    hex: "#2E2E2E",
    text: "#F2F2F4",
  },
  { name: "coffee", bg: "bg-coffee", hex: "#8C6053", text: "#F2F2F4" },
  { name: "zeta", bg: "bg-zeta", hex: "#686C6F", text: "#F2F2F4" },
  { name: "suram", bg: "bg-suram", hex: "#E6E8ED", text: "#2E2E2E" },
];
