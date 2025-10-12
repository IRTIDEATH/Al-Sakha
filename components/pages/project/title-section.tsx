import CoffeeText from "@/components/ui/coffee-text";
import { Divider } from "@/components/ui/divider";

const TitleSection = () => {
  return (
    <section>
      <h1 className="mb-6 font-medium text-3xl">coding result</h1>
      <p className="mb-6 w-full text-start font-medium text-[16px] text-zeta">
        these are some of my coding projects completed, under development, and
        pending. i often used my free time, especially when unemployed, to build
        things, learn new skills, and stay <CoffeeText>productive.</CoffeeText>
      </p>

      <Divider className="md:mb-0" />
      <ul className="my-6 hidden select-none items-center justify-between font-medium text-[10px] md:flex">
        <li>click</li>
        <li>the</li>
        <li>image</li>
      </ul>
    </section>
  );
};

export default TitleSection;
