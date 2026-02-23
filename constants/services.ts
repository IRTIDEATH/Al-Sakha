import type { SkillBadgeIconInterface } from "./skill-badge";

export interface ServiceInterface {
  number: string;
  name: string;
  description: string;
  features: string[];
  technologies: SkillBadgeIconInterface[];
}

export const services: ServiceInterface[] = [
  {
    number: "01",
    name: "Web Design Services",
    description:
      "Perfect for portfolios, landing pages, and small business sites. Your site will feature a modern, visually appealing design with a comfortable color palette, smooth and non-intrusive animations, and is fully optimized for speed and SEO. Every website I build is responsive and accessible on all devices, ensuring you reach a wider audience and achieve your digital goals.",
    features: [
      "Responsive design",
      "Modern and aesthetic visuals",
      "Comfortable color palette for a pleasant user experience",
      "Smooth animation and definitely not painful",
      "SEO-friendly structure for better Google visibility",
      "Lightning-fast loading times",
    ],
    technologies: [
      {
        name: "Next.js",
        icon: "simple-icons:nextdotjs",
      },
      {
        name: "Svelte",
        icon: "simple-icons:svelte",
      },
    ],
  },
];
