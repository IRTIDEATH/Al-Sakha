"use client";

import CoffeeText from "@/components/ui/coffee-text";
import { Badge } from "@/components/ui/skill-badge";
import { techcollections } from "@/constants";
import { Icon } from "@iconify/react";

const TechStackSection = () => {
  return (
    <>
      <section className="mt-6">
        <p className="w-full text-zeta font-medium text-lg text-start">
          here are some <CoffeeText>tech stacks</CoffeeText> that i
          often use to create personal projects:
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          {techcollections.map((item, index) => (
            <Badge key={index}>
              <Icon className="-ms-0.5 text-[16px]" icon={item.icon} />
              {item.name}
            </Badge>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechStackSection;
