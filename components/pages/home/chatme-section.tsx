import { chatLink } from "@/constants";
import Link from "next/link";
import { Icon } from "@iconify/react";

const ChatmeSection = () => {  
  return (
    <section className="flex flex-col gap-4 md:gap-11 md:flex-row w-full justify-between md:items-end">
      <div>
        <h1 className="text-2xl mb-4 font-medium">wanna talk?</h1>
        <p className="w-full text-zeta font-medium text-[16px] text-start">
          need help, consultation, talk about random things, playing games, and connect with me.
        </p>
      </div>
      <ul className="flex flex-row gap-2 font-medium text-lg">
        {chatLink.map((item, index) => (
          <li className="flex" key={index}>
            <Link
              aria-label={item.label}
              rel="noopener noreferrer"
              target="_blank"
              href={item.href}
              className="py-1.5 px-4 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors duration-150 ease-in-out"
            >
              <Icon className="text-[22px]" icon={item.icon} />
            </Link>
          </li>
        ))}
      </ul>      
    </section>
  );
};

export default ChatmeSection;
