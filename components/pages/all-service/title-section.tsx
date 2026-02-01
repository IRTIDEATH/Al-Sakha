import Link from "next/link";
import CoffeeText from "@/components/ui/coffee-text";
import { Divider } from "@/components/ui/divider";

const TitleSection = () => {
  return (
    <section>
      <h1 className="mb-6 font-medium text-3xl">turn your idea here</h1>
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
