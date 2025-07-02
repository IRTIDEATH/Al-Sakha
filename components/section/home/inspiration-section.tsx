"use client"

import CoffeeText from "@/components/ui/coffee-text";
import Link from "next/link";

const InspirationSection = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl mb-4 font-medium">reference & inspiration</h1>
        <p className="w-full text-zeta font-medium text-[16px] text-start">
          this is a <CoffeeText>cool</CoffeeText> portfolio and stuff that i use
          as my reference and inspiration.
        </p>
        <ul className="w-full text-zeta font-medium text-lg text-start mt-4">
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label="Portfolio pow"
              href="https://pow.kim/"
              className="hover:underline decoration-2"
            >
              pow.kim
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label="Portfolio byanrkh"
              href="https://www.byanrkh.my.id/"
              className="hover:underline decoration-2"
            >
              byanrkh.my.id
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label="Portfolio edqe"
              href="https://edqe.me/"
              className="hover:underline decoration-2"
            >
              edqe.me
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label="Zetamin art"
              href="https://www.pixiv.net/en/artworks/112555482"
              className="hover:underline decoration-2"
            >
              Zetamin
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label="Growtopia fandom wiki samille's"
              rel="noopener noreferrer"
              target="_blank"
              href="https://growtopia.fandom.com/wiki/Samille%27s_Soul_Abductor"
              className="hover:underline decoration-2"
            >
              Samille{"'"}s Soul Abductor
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default InspirationSection