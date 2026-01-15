import type { SkillBadgeIconInterface } from "./skill-badge";

export interface ProjectInterface {
  image: string;
  name: string;
  description: string;
  view?: string;
  github?: string;
  about: string;
  technologies: SkillBadgeIconInterface[];
}

export const projects: ProjectInterface[] = [
  {
    image: "/project/pancarimaimg.webp",
    name: "Pancarima",
    description:
      "pancarima is a website that provides information related to tourist attractions in indonesia. created during the sagasitas february 2024 competition.",
    view: "https://pancarima.vercel.app/",
    about: "competition",
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
  },
  {
    image: "/project/inditechimg.webp",
    name: "INDI Technology",
    description:
      "indi tech is a unique and interactive 3D-based company profile website of pt indi technology. created during pre-internship activities.",
    view: "https://web.indi.tech/",
    about: "internship",
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
  },
  {
    image: "/project/zentraimg.webp",
    name: "ZentraHealth",
    description:
      "zentrahealth is a website that provides information related to a healthy lifestyle. created during the sagasitas august 2024 competition.",
    view: "https://zentrahealth.vercel.app/",
    github: "https://github.com/IRTIDEATH/ZentraHealth",
    about: "competition",
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
      {
        name: "Shadcn/ui",
        icon: "simple-icons:shadcnui",
      },
    ],
  },
  {
    image: "/project/geoporimg.webp",
    name: "Geoportal Laut Berkah",
    description:
      "an interactive 3D-based platform related to the licensing of marine space utilization in central kalimantan province. created during internship activities.",
    view: "https://web.geoportal-lautberkah.kalteng.go.id/",
    about: "internship",
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
  },
  {
    image: "/project/zectimg.webp",
    name: "Zect Portfolio",
    description:
      "a small organization owned by al sakha, colored by the nord theme, and a layout style similar to the nord theme.",
    view: "https://zect.vercel.app/",
    github: "https://github.com/IRTIDEATH/Zect",
    about: "personal",
    technologies: [
      {
        name: "Javascript",
        icon: "simple-icons:javascript",
      },
      {
        name: "Next.js",
        icon: "simple-icons:nextdotjs",
      },
      {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
      },
      {
        name: "Shadcn/ui",
        icon: "simple-icons:shadcnui",
      },
    ],
  },
  {
    image: "/project/gamecommimg.png",
    name: "GAMECOMM Indonesia",
    description:
      "a company profile website of pt gamecomm indonesia. created during internship activities. please note that this project was not fully completed during the internship period.",
    view: "https://gamecomm.vercel.app/",
    about: "internship",
    technologies: [
      {
        name: "Vue.js",
        icon: "simple-icons:vuedotjs",
      },
      {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
      },
    ],
  },
  {
    image: "/project/hadirinimg.webp",
    name: "Hadirin",
    description:
      "simple student attendance app for schools, created at the time of the exam. attendance recorded, learning monitored.",
    github: "https://github.com/IRTIDEATH/Absensi-Sederhana",
    about: "personal",
    technologies: [
      {
        name: "Typescript",
        icon: "simple-icons:typescript",
      },
      {
        name: "Next.js",
        icon: "simple-icons:nextdotjs",
      },
      {
        name: "Tanstack Query",
        icon: "simple-icons:reactquery",
      },
      {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
      },
      {
        name: "Shadcn/ui",
        icon: "simple-icons:shadcnui",
      },
      {
        name: "PostgreSQL",
        icon: "simple-icons:postgresql",
      },
      {
        name: "PrismaORM",
        icon: "simple-icons:prisma",
      },
    ],
  },
];
