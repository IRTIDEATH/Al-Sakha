interface NavigationInterface {
  name: string;
  href: string;
}

export const navigationItems: NavigationInterface[] = [
  { name: "home", href: "/" },
  { name: "projects", href: "/projects" },
  { name: "writings", href: "/writings" },
];
