interface NavigationItemProps {
    name: string;
    href: string;
}

export const navigationItems: NavigationItemProps[] = [
    { name: "home", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "writings", href: "/writings" },
];