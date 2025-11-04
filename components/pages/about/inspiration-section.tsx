import Link from "next/link";
import CoffeeText from "@/components/ui/coffee-text";
import { inspirationLink } from "@/constants";

const InspirationSection = () => {
  return (
    <section className="font-medium text-zeta">
      <h2 className="mb-3 text-2xl text-foreground">reference & inspiration</h2>
      <p className="w-full text-start text-[16px] text-zeta">
        these are <CoffeeText>cool</CoffeeText> portfolios and stuff that i'm
        using.
      </p>
      <ul className="mt-5 w-full text-start text-lg text-zeta">
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
