export type TnavigationItem = {
    name: string;
    href: string;
};

export type TskillBadgeIcon = {
    name: string;
    icon: string;
    link?: string;
};

export type Tinternship = {
    company: string;
    position: string;
    date: string;
    technologies: TskillBadgeIcon[];
    link: string;
};

export type Tproject = {
    image: string;
    name: string;
    description: string;
    view?: string;
    github?: string;
    status: string;
    technologies: TskillBadgeIcon[];
}

export type TchatLink = {
    label: string;
    icon: string;
    href: string;
    title: string;
}

export type TinspirationLink = {
    label: string;
    href: string;
    title: string;
}