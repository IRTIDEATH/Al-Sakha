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