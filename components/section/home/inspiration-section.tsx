"use client"

import CoffeeText from "@/components/ui/coffee-text";
import Link from "next/link";

const InspirationSection = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl mb-6 font-medium">inspiration</h1>
        <p className="w-full text-zeta font-medium text-lg text-start">
          This is a <CoffeeText>cool</CoffeeText> portfolio website
          that i use as my reference and inspiration.
        </p>
        <ul className="w-full text-zeta font-medium text-lg text-start mt-4">
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              href="https://pow.kim/"
              className="hover:underline decoration-2"
            >
              pow.kim
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              href="https://www.byanrkh.my.id/"
              className="hover:underline decoration-2"
            >
              byanrkh.my.id
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              href="https://edqe.me/"
              className="hover:underline decoration-2"
            >
              edqe.me
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default InspirationSection