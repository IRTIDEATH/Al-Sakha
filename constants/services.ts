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
    name: "Static Website Development",
    description:
      "Perfect for portfolios, landing pages, and small business sites. Built with modern web standards and optimized for performance.",
    features: [
      "Responsive design",
      "Modern and Aesthetic design",
      "Comfortable color palette",
      "Smooth animation and definitely not painful",
      "SEO friendly",
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
