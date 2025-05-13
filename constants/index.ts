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
        link: "https://web.indi.tech/",
    },
    {
        company: "Hexagon",
        position: "Frontend Developer",
        date: "Aug - Nov 2024",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
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
        link: "#",
    },
    {
        company: "GAMECOMM",
        position: "Frontend Engineer",
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
        link: "https://gamecomm.vercel.app/",
    },
];

export const projects: Iproject[] = [
    {
        image: "/project/pancarimaimg.webp",
        name: "Pancarima",
        description: "Pancarima is a website that provides information related to tourist attractions in Indonesia. Created during the Sagasitas February 2024 competition.",
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
        description: "Zabod is a keyboard online store platform where buyers can customize the keyboard as desired.",
        status: "Development",
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
        description: "INDI Tech is a unique and interactive 3D-based company profile website of PT Indi Technology. Created during pre-internship activities.",
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
        description: "ZentraHealth is a website that provides information related to a healthy lifestyle. Created during the Sagasitas August 2024 competition.",
        view: "https://zentrahealth.vercel.app/",
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
        description: "An interactive 3D-based platform related to the licensing of marine space utilization letters for Central Kalimantan province. Created during internship activities.",
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
        status: "Pending",
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
]