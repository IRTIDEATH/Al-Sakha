import { Icon } from "@iconify/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const StepContact = () => {
  const contacts = [
    {
      id: 1,
      icon: "simple-icons:whatsapp",
      title: "whatsapp",
      value:
        "to get the whatsapp number, please send a message via email/treads first.",
      href: "#",
    },
    {
      id: 2,
      icon: "lucide:mail",
      title: "email",
      value: "alsakhafatthariq@gmail.com",
      href: "mailto:alsakhafatthariq@gmail.com",
    },
    {
      id: 3,
      icon: "simple-icons:threads",
      title: "threads",
      value: "@enderjhass",
      href: "https://www.threads.com/@enderjhass",
    },
  ];

  return (
    <section className="mt-8">
      <span className="font-medium font-satoshi text-[32px] leading-none">
        02
      </span>
      <h2 className="font-medium text-[24px]">contact me</h2>
      <p className="mt-4 text-[16px] text-zeta">
        reach out through your preferred channel. i&apos;m responsive and ready
        to discuss your project.
      </p>

      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12">
        {contacts.map((contact) => {
          const isFirst = contact.id === 1;
          return (
            <li
              key={contact.id}
              className={cn(
                "md:col-span-7 lg:col-span-8",
                isFirst && "md:col-span-5 md:row-span-2 lg:col-span-4",
              )}
            >
              <Link
                href={contact.href}
                aria-label={`Contact me via ${contact.title}`}
                className="block h-full"
              >
                <div
                  className={cn(
                    "group flex h-full flex-col gap-3 bg-foreground p-4 text-background",
                    isFirst && "justify-between md:min-h-[160px]",
                  )}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="skill" className="bg-suram">
                        <Icon
                          icon={contact.icon}
                          className="size-4"
                          aria-hidden="true"
                        />
                      </Badge>
                      <span className="font-medium text-[14px] text-background">
                        {contact.title}
                      </span>
                    </div>
                    <p className="font-roboto text-[12px] text-suram">
                      {contact.value}
                    </p>
                  </div>
                  <span
                    className="inline-block rotate-90 self-start font-geist text-[10px] text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    {"->"}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default StepContact;
