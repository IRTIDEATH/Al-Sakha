"use client";

import { chatLink } from "@/constants";
import Link from "next/link";
import { toast } from "sonner";

const ChatmeSection = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alsakhafatthariq@gmail.com");
    toast.success("Email copied to clipboard", {
      duration: 3000,
    });
  };
  return (
    <section>
      <h1 className="text-2xl mb-4 font-medium">wanna talk?</h1>
      <p className="w-full text-zeta font-medium text-[16px] text-start">
        need help, talk about random things, and connect with me.
      </p>
      <ul className="w-full text-zeta font-medium text-lg text-start mt-4">
        {chatLink.map((item, index) => (
          <li className="flex items-center gap-2" key={index}>
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label={item.label}
              rel="noopener noreferrer"
              target="_blank"
              href={item.href}
              className="hover:underline decoration-2"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-zeta font-medium text-lg flex items-start gap-2">
        <span className="text-2xl text-foreground">{"-->"}</span>
        <button
          onClick={handleCopyEmail}
          aria-label="Copy gmail"
          className="hover:underline decoration-2 text-start cursor-pointer"
        >
          alsakhafatthariq
          <br />
          @gmail.com
        </button>
      </div>
    </section>
  );
};

export default ChatmeSection;
