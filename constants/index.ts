interface NavigationItemProps {
    name: string;
    href: string;
};

interface IskillBadgeIcon {
    name: string;
    icon: string;
};

interface Iinternship {
    company: string;
    position: string;
    date: string;
    technologies: IskillBadgeIcon[];
    link: string;
};

interface Iproject {
    image: string;
    name: string;
    description: string;
    view?: string;
    github?: string;
    status: string;
    technologies: IskillBadgeIcon[];
}

export const navigationItems: NavigationItemProps[] = [
    { name: "home", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "writings", href: "/writings" },
];

export const skillBadgeIcon: IskillBadgeIcon[] = [
    {
        name: "Typescript",
        icon: "simple-icons:typescript"
    },
    {
        name: "Node.js",
        icon: "simple-icons:nodedotjs"
    },
    {
        name: "Nest.js",
        icon: "simple-icons:nestjs"
    },
    {
        name: "PostgreSQL",
        icon: "simple-icons:postgresql"
    },
    {
        name: "Next.js",
        icon: "simple-icons:nextdotjs"
    },
    {
        name: "Vue.js",
        icon: "simple-icons:vuedotjs"
    },
    {
        name: "Three.js",
        icon: "simple-icons:threedotjs"
    },
    {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss"
    },
    {
        name: "Notion",
        icon: "simple-icons:notion"
    },
    {
        name: "Figma",
        icon: "simple-icons:figma"
    },
];

export const internships: Iinternship[] = [
    {
        company: "INDI Technology",
        position: "Fullstack Developer",
        date: "Sep - Nov 2024",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
            },
            {
                name: "React.js",
                icon: "simple-icons:react"
            },
            {
                name: "Three.js",
                icon: "simple-icons:threedotjs"
            },
            {
                name: "Tailwind CSS",
                icon: "simple-icons:tailwindcss"
            },
        ],
        link: "https://www.linkedin.com/company/inditechno/",
    },
    {
        company: "GAMECOMM",
        position: "Frontend Developer",
        date: "Jan - Mar 2025",
        technologies: [
            {
                name: "Typescript",
                icon: "simple-icons:typescript"
            },
            {
                name: "Vue.js",
                icon: "simple-icons:vuedotjs"
            },
            {
                name: "Tailwind CSS",
                icon: "simple-icons:tailwindcss"
            },
        ],
        link: "https://www.linkedin.com/company/gamecomm/",
    },
];

export const projects: Iproject[] = [
    {
        image: "/project/pancarimaimg.webp",
        name: "Pancarima",
        description: "pancarima is a website that provides information related to tourist attractions in indonesia. created during the sagasitas february 2024 competition.",
        view: "https://pancarima.vercel.app/",
        status: "Completed",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
            },
            {
                name: "React.js",
                icon: "simple-icons:react"
            },
            {
                name: "Three.js",
                icon: "simple-icons:threedotjs"
            },
            {
                name: "Tailwind CSS",
                icon: "simple-icons:tailwindcss"
            },
        ],
    },
    {
        image: "/project/zabodimg.webp",
        name: "Zabod",
        description: "zabod is a keyboard online store platform where buyers can customize the keyboard as desired.",
        status: "Pending",
        technologies: [
            {
                name: "Typescript",
                icon: "simple-icons:typescript"
            },
            {
                name: "Next.js",
                icon: "simple-icons:nextdotjs"
            },
            {
                name: "Tanstack Query",
                icon: "simple-icons:reactquery"
            },
            {
                name: "Tailwind CSS",
                icon: "simple-icons:tailwindcss"
            },
            {
                name: "Shadcn/ui",
                icon: "simple-icons:shadcnui"
            },
            {
                name: "PostgreSQL",
                icon: "simple-icons:postgresql"
            },
            {
                name: "PrismaORM",
                icon: "simple-icons:prisma"
            },
        ],
    },
    {
        image: "/project/inditechimg.webp",
        name: "INDI Technology",
        description: "indi tech is a unique and interactive 3D-based company profile website of pt indi technology. created during pre-internship activities.",
        view: "https://web.indi.tech/",
        status: "Completed",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
            },
            {
                name: "React.js",
                icon: "simple-icons:react"
            },
            {
                name: "Three.js",
                icon: "simple-icons:threedotjs"
            },
            {
                name: "Tailwind CSS",
                icon: "simple-icons:tailwindcss"
            },
        ],
    },
    {
        image: "/project/zentraimg.webp",
        name: "ZentraHealth",
        description: "zentrahealth is a website that provides information related to a healthy lifestyle. created during the sagasitas august 2024 competition.",
        view: "https://zentrahealth.vercel.app/",
        github: "https://github.com/IRTIDEATH/ZentraHealth",
        status: "Completed",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
            },
            {
                name: "React.js",
                icon: "simple-icons:react"
            },
            {
                name: "Three.js",
                icon: "simple-icons:threedotjs"
            },
            {
                name: "Tailwind CSS",
                icon: "simple-icons:tailwindcss"
            },
            {
                name: "Shadcn/ui",
                icon: "simple-icons:shadcnui"
            },
        ],
    },
    {
        image: "/project/geoporimg.webp",
        name: "Geoportal Laut Berkah",
        description: "an interactive 3D-based platform related to the licensing of marine space utilization letters for central kalimantan province. created during internship activities.",
        view: "https://web.geoportal-lautberkah.kalteng.go.id/",
        status: "Completed",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
            },
            {
                name: "React.js",
                icon: "simple-icons:react"
            },
            {
                name: "Three.js",
                icon: "simple-icons:threedotjs"
            },
            {
                name: "Tailwind CSS",
                icon: "simple-icons:tailwindcss"
            },
        ],
    },
    {
        image: "/project/zectimg.webp",
        name: "Zect Portfolio",
        description: "a small organization owned by al sakha, colored by the nord theme, and a layout style similar to the nord theme.",
        view: "https://zect.vercel.app/",
        github: "https://github.com/IRTIDEATH/Zect",
        status: "Completed",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
            },
            {
                name: "Next.js",
                icon: "simple-icons:nextdotjs"
            },
            {
                name: "Tailwind CSS",
                icon: "simple-icons:tailwindcss"
            },
            {
                name: "Shadcn/ui",
                icon: "simple-icons:shadcnui"
            },
        ],
    },
    {
        image: "/project/hadirinimg.webp",
        name: "Hadirin",
        description: "simple student attendance app for schools, created at the time of the exam. attendance recorded, learning monitored.",
        github: "https://github.com/IRTIDEATH/Absensi-Sederhana",
        status: "Pending",
        technologies: [
            {
                name: "Typescript",
                icon: "simple-icons:typescript"
            },
            {
                name: "Next.js",
                icon: "simple-icons:nextdotjs"
            },
            {
                name: "Tanstack Query",
                icon: "simple-icons:reactquery"
            },
            {
                name: "Tailwind CSS",
                icon: "simple-icons:tailwindcss"
            },
            {
                name: "Shadcn/ui",
                icon: "simple-icons:shadcnui"
            },
            {
                name: "PostgreSQL",
                icon: "simple-icons:postgresql"
            },
            {
                name: "PrismaORM",
                icon: "simple-icons:prisma"
            },
        ],
    },
]

export const techcollections: IskillBadgeIcon[] = [
    {
        name: "Typescript",
        icon: "simple-icons:typescript"
    },
    {
        name: "Next.js",
        icon: "simple-icons:nextdotjs"
    },
    {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss"
    },
    {
        name: "Shadcn/ui",
        icon: "simple-icons:shadcnui"
    },
    {
        name: "Tanstack Query",
        icon: "simple-icons:reactquery"
    },
    {
        name: "PostgreSQL",
        icon: "simple-icons:postgresql"
    },
    {
        name: "PrismaORM",
        icon: "simple-icons:prisma"
    },
]