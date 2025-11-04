import CoffeeText from "@/components/ui/coffee-text";

const TitleSection = () => {
  return (
    <article className="text-start font-medium">
      <h1 className="mb-6 text-3xl">philosophy</h1>
      <div className="space-y-4 font-normal text-[16px] text-zeta">
        <p>
          embraces a philosophy of warm minimalism, inspired by the quiet
          comfort of a <CoffeeText>cat</CoffeeText> taking a nap. its calm color
          palette—soft grays with coffee-toned accents—creates a soothing,
          welcoming atmosphere.
        </p>
        <p>
          simple typography and generous white space offer visual breathing
          room, reflecting clarity and peace. the casual,{" "}
          <CoffeeText>honest</CoffeeText> writing style builds a sincere
          connection between the creator and the visitor.
        </p>
        <p>
          every element—from color to layout to words—embodies a personality
          that is humble, open, and introspective. this isn&apos;t just a
          portfolio—it&apos;s an invitation to <CoffeeText>quietly</CoffeeText>{" "}
          get to know someone through design that speaks without shouting.
        </p>
      </div>
    </article>
  );
};

export default TitleSection;
