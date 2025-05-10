interface NavigationItemProps {
    name: string;
    href: string;
};

interface IskillBadgeIcon {
    name: string;
    icon: string;
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