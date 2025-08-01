import { TchatLink, TcommunityLink, TinspirationLink, Tinternship, TnavigationItem, Tproject, TskillBadgeIcon } from "@/lib/type";

export const navigationItems: TnavigationItem[] = [
    { name: "home", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "writings", href: "/writings" },
];

export const skillBadgeIcon: TskillBadgeIcon[] = [
    {
        name: "Typescript",
        icon: "simple-icons:typescript",
        link: "https://www.typescriptlang.org"
    },
    {
        name: "Node.js",
        icon: "simple-icons:nodedotjs",
        link: "https://nodejs.org/en"
    },
    {
        name: "Git",
        icon: "simple-icons:git",
        link: "https://git-scm.com/"
    },
    {
        name: "Vite",
        icon: "simple-icons:vite",
        link: "https://vite.dev"
    },
    {
        name: "Three.js",
        icon: "simple-icons:threedotjs",
        link: "https://threejs.org"
    },
    {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
        link: "https://tailwindcss.com"
    },
    {
        name: "Notion",
        icon: "simple-icons:notion",
        link: "https://www.notion.com"
    },
    {
        name: "Figma",
        icon: "simple-icons:figma",
        link: "https://www.figma.com"
    },
];

export const internships: Tinternship[] = [
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

export const projects: Tproject[] = [
    {
        image: "/project/pancarimaimg.webp",
        name: "Pancarima",
        description: "pancarima is a website that provides information related to tourist attractions in indonesia. created during the sagasitas february 2024 competition.",
        view: "https://pancarima.vercel.app/",
        status: "completed",
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
        image: "/project/inditechimg.webp",
        name: "INDI Technology",
        description: "indi tech is a unique and interactive 3D-based company profile website of pt indi technology. created during pre-internship activities.",
        view: "https://web.indi.tech/",
        status: "completed",
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
        status: "completed",
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
        description: "an interactive 3D-based platform related to the licensing of marine space utilization in central kalimantan province. created during internship activities.",
        view: "https://web.geoportal-lautberkah.kalteng.go.id/",
        status: "completed",
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
        status: "completed",
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
        status: "completed",
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

export const techcollections: TskillBadgeIcon[] = [
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

export const chatLink: TchatLink[] = [
    {
        label: "Talk with me on Discord",
        icon: "simple-icons:discord",
        href: "https://discord.com/users/yasudahlah",
        title: "Discord",
    },
    {
        label: "Talk with me on Threads",
        icon: "simple-icons:threads",
        href: "https://www.threads.com/@enderjhass",
        title: "Threads",
    },
    {
        label: "Talk with me on Linkedin",
        icon: "ion:social-linkedin",
        href: "https://www.linkedin.com/in/al-sakha",
        title: "Linkedin",
    },
    {
        label: "Talk with me on Email",
        icon: "lucide:mail",
        href: "mailto:alsakhafatthariq@gmail.com",
        title: "Email",
    }
]

export const inspirationLink: TinspirationLink[] = [
    {
        label: "Portfolio pow",
        href: "https://pow.kim",
        title: "pow.kim",
    },
    {
        label: "Portfolio byanrkh",
        href: "https://www.byanrkh.my.id",
        title: "byanrkh.my.id",
    },
    {
        label: "Portfolio edqe",
        href: "https://edqe.me",
        title: "edqe.me",
    },
    {
        label: "Zetamin art",
        href: "https://www.pixiv.net/en/artworks/112555482",
        title: "Zetamin",
    },
    {
        label: "Growtopia fandom wiki samille's soul",
        href: "https://growtopia.fandom.com/wiki/Samille%27s_Soul_Abductor",
        title: "Samille's Soul",
    },
    {
        label: "Zeta my cat kkkk81115",
        href: "https://x.com/kkkk8115/status/1891482869987475896?s=19",
        title: "@kkkk8115",
    }
]

export const ongithub: TskillBadgeIcon[] = [
    {
        name: "Git",
        icon: "simple-icons:git"
    },
    {
        name: "Gitlab",
        icon: "simple-icons:gitlab"
    },
    {
        name: "Github Actions",
        icon: "simple-icons:githubactions"
    },
    {
        name: "Markdown",
        icon: "simple-icons:markdown"
    },
]

export const communityLink: TcommunityLink[] = [
    {
        label: "WPU Community",
        href: "https://discord.gg/wpu",
        title: "discord/wpu",
    },
    {
        label: "Compile Cafe",
        href: "https://discord.gg/ExCvJtVTu6",
        title: "discord/compile-cafe",
    },
    {
        label: "TI POLNES",
        href: "https://discord.gg/59dsBb2GnD",
        title: "discord/ti-polnes",
    },
    {
        label: "Fireship",
        href: "https://discord.gg/fireship",
        title: "discord/fireship",
    }
]