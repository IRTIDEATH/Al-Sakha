import CoffeeText from "@/components/ui/coffee-text";
import { communityLink } from "@/constants";
import Link from "next/link";

const CommunitySection = () => {
  return (
    <section>
      <h1 className="text-2xl mb-4 font-medium">community</h1>
      <p className="w-full text-zeta font-medium text-[16px] text-start">
        start joining communities. meet other people and sharing.
      </p>
      <ul className="w-full text-zeta font-medium text-lg text-start mt-4">
        {communityLink.map((item, index) => (
          <li className="flex items-center gap-2" key={index}>
            <span className="text-2xl text-coffee">{"-->"}</span>
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

export default CommunitySection;
