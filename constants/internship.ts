import type { SkillBadgeIconInterface } from "./skill-badge";

export interface InternshipInterface {
  company: string;
  position: string;
  date: string;
  datetime: string;
  technologies: SkillBadgeIconInterface[];
  link: string;
}

export const internships: InternshipInterface[] = [
  {
    company: "INDI Technology",
    position: "Fullstack Developer",
    date: "Sep - Nov 2024",
    datetime: "2024-09",
    technologies: [
      {
        name: "Javascript",
        icon: "simple-icons:javascript",
      },
      {
        name: "React.js",
        icon: "simple-icons:react",
      },
      {
        name: "Three.js",
        icon: "simple-icons:threedotjs",
      },
      {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
      },
    ],
    link: "https://www.linkedin.com/company/inditechno/",
  },
  {
    company: "GAMECOMM",
    position: "Frontend Developer",
    date: "Jan - Mar 2025",
    datetime: "2025-01",
    technologies: [
      {
        name: "Typescript",
        icon: "simple-icons:typescript",
      },
      {
        name: "Vue.js",
        icon: "simple-icons:vuedotjs",
      },
      {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
      },
    ],
    link: "https://www.linkedin.com/company/gamecomm/",
  },
];
