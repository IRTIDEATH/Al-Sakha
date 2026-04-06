import CoffeeText from "@/components/ui/coffee-text";
import { Divider } from "@/components/ui/divider";

const TitleSection = () => {
  return (
    <header>
      <h1 className="mb-6 font-medium text-3xl">coding result</h1>
      <p className="mb-6 w-full text-start text-[16px] text-zeta">
        echoes of my keyboard. a collection of logic created to define my
        perspective. it dawned on me that i <CoffeeText>might</CoffeeText> be
        useful, even just a little...
      </p>
      <Divider className="md:mb-0" />
      <div
        className="my-6 hidden select-none items-center justify-between font-geist text-[10px] md:flex"
        aria-hidden="true"
      >
        <span>click</span>
        <span>the</span>
        <span>image</span>
      </div>
    </header>
  );
};

export default TitleSection;
