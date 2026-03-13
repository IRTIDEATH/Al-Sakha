export interface NavigationInterface {
  name: string;
  href: string;
}

export const navigationItems: NavigationInterface[] = [
  { name: "home", href: "/" },
  { name: "projects", href: "/projects" },
  { name: "services", href: "/all-services" },
  { name: "writings", href: "/writings" },
];
