"use client";

import Link from "next/link";

const ChatmeSection = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl mb-4 font-medium">wanna talk?</h1>
        <p className="w-full text-zeta font-medium text-[16px] text-start">
          need help, talk about random things, and connect with me.
        </p>
        <ul className="w-full text-zeta font-medium text-lg text-start mt-4">
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label="Talk with me on Discord"
              href="https://discord.com/users/yasudahlah"
              className="hover:underline decoration-2"
            >
              Discord
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label="Talk with me on Instagram"
              href="https://www.instagram.com/enderjhass/"
              className="hover:underline decoration-2"
            >
              Instagram
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label="Talk with me on Linkedin"
              href="https://www.linkedin.com/in/al-sakha/"
              className="hover:underline decoration-2"
            >
              Linkedin
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ChatmeSection;
