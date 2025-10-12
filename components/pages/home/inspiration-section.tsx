import Link from "next/link";
import CoffeeText from "@/components/ui/coffee-text";
import { inspirationLink } from "@/constants";

const InspirationSection = () => {
  return (
    <section>
      <h1 className="mb-4 font-medium text-2xl">reference & inspiration</h1>
      <p className="w-full text-start font-medium text-[16px] text-zeta">
        these are <CoffeeText>cool</CoffeeText> portfolios and stuff that i use
        as references and inspiration.
      </p>
      <ul className="mt-4 w-full text-start font-medium text-lg text-zeta">
        {inspirationLink.map((item, index) => (
          <li className="flex items-center gap-2" key={index}>
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label={item.label}
              href={item.href}
              className="decoration-2 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InspirationSection;
