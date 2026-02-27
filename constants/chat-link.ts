export interface ChatLinkInterface {
  label: string;
  icon: string;
  href: string;
  title: string;
}

export const chatLink: ChatLinkInterface[] = [
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
  },
];
