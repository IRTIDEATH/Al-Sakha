import { Icon } from "@iconify/react";
import Link from "next/link";
import { chatLink } from "@/constants/chat-link";

const ChatmeSection = () => {
  return (
    <section className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-end md:gap-11">
      <div>
        <h2 className="mb-4 font-medium text-2xl">wanna talk?</h2>
        <p className="w-full text-start font-medium text-[16px] text-zeta">
          need help, consultation, talk about random things, playing games, and
          connect with me.
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
              className="border border-foreground bg-foreground px-4 py-1.5 text-background transition-colors duration-150 ease-in-out hover:bg-transparent hover:text-foreground"
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
