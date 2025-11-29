export interface SkillBadgeIconInterface {
  name: string;
  icon: string;
  link?: string;
}

export const skillBadgeIcon: SkillBadgeIconInterface[] = [
  {
    name: "Typescript",
    icon: "simple-icons:typescript",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "Bun",
    icon: "simple-icons:bun",
    link: "https://bun.sh/",
  },
  {
    name: "PostgreSQL",
    icon: "simple-icons:postgresql",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Git",
    icon: "simple-icons:git",
    link: "https://git-scm.com/",
  },
  {
    name: "Three.js",
    icon: "simple-icons:threedotjs",
    link: "https://threejs.org",
  },
  {
    name: "Tailwind CSS",
    icon: "simple-icons:tailwindcss",
    link: "https://tailwindcss.com",
  },
  {
    name: "Notion",
    icon: "simple-icons:notion",
    link: "https://www.notion.com",
  },
  {
    name: "Figma",
    icon: "simple-icons:figma",
    link: "https://www.figma.com",
  },
];
