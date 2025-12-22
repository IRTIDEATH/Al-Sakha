import CoffeeText from "@/components/ui/coffee-text";

const AboutSection = () => {
  return (
    <section className="mx-auto w-full">
      <h1 className="mb-6 font-medium text-2xl">what about me?</h1>
      <p className="mb-6 w-full text-start text-[16px] text-zeta">
        yea, just an ordinary npc and dumb in math, you can call me al sakha. i{" "}
        never imagined myself in the field of programming, but now focusing on
        website development. unemployed and not in college. i hope to stick with
        this career in the future.
      </p>
      <p className="w-full text-start text-[16px] text-zeta">
        i&apos;m also learning editing, graphic design, and writing. loving cold
        or hot <CoffeeText>coffee</CoffeeText> while working and study. anyway,
        that&apos;s all about me and thank you.
      </p>
    </section>
  );
};

export default AboutSection;
