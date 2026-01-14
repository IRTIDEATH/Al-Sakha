import CoffeeText from "@/components/ui/coffee-text";
import { Divider } from "@/components/ui/divider";

const TitleSection = () => {
  return (
    <section>
      <h1 className="mb-6 font-medium text-3xl">coding result</h1>
      <p className="mb-6 w-full text-start font-medium text-[16px] text-zeta">
        echoes of my keyboard. a collection of logic created to define my
        perspective. it dawned on me that i <CoffeeText>might</CoffeeText> be
        useful, even just a little...
      </p>

      <Divider className="md:mb-0" />
      <ul className="my-6 hidden select-none items-center justify-between font-roboto text-[10px] md:flex">
        <li>click</li>
        <li>the</li>
        <li>image</li>
      </ul>
    </section>
  );
};

export default TitleSection;
