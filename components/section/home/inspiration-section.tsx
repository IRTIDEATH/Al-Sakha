import CoffeeText from "@/components/ui/coffee-text";
import { inspirationLink } from "@/constants";
import Link from "next/link";

const InspirationSection = () => {
  return (
    <section>
      <h1 className="text-2xl mb-4 font-medium">reference & inspiration</h1>
      <p className="w-full text-zeta font-medium text-[16px] text-start">
        these are <CoffeeText>cool</CoffeeText> portfolios and stuff that i use
        as references and inspiration.
      </p>
      <ul className="w-full text-zeta font-medium text-lg text-start mt-4">
        {inspirationLink.map((item, index) => (
          <li className="flex items-center gap-2" key={index}>
            <span className="text-2xl text-foreground">{"-->"}</span>
            <Link
              aria-label={item.label}
              href={item.href}
              className="hover:underline decoration-2"
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
