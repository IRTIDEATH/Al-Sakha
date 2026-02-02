import Link from "next/link";
import CoffeeText from "@/components/ui/coffee-text";
import { Divider } from "@/components/ui/divider";

const TitleSection = () => {
  return (
    <section>
      <h1 className="mb-6 flex items-center gap-2 font-medium text-2xl">
        turn your idea here
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8C6053"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-lightbulb-icon lucide-lightbulb"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      </h1>
      <p className="mb-4 w-full text-start font-medium text-[16px] text-zeta">
        available for freelance work. here are the things i{" "}
        <CoffeeText>can</CoffeeText> do to help bring your ideas to life.
      </p>
      <p className="w-full text-start font-medium text-[16px] text-zeta">
        interested in working together?{" "}
        <Link
          href="/all-services/order"
          className="group inline-flex items-center text-foreground decoration-2 hover:underline"
        >
          learn how to order
        </Link>
        <span className="inline-block translate-x-2 font-geist text-foreground text-lg">
          {"<-"}
        </span>
      </p>
      <Divider />
    </section>
  );
};

export default TitleSection;
