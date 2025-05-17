"use client";

import CoffeeText from "@/components/ui/coffee-text";
import { Badge } from "@/components/ui/skill-badge";
import { techcollections } from "@/constants";
import { Icon } from "@iconify/react";

const TitleSection = () => {
  return (
    <>
      <section className="mt-12">
        <h2 className="text-2xl mb-6 font-medium">coding result</h2>
        <p className="w-full text-zeta font-medium text-lg text-start mb-6">
          these are some of my coding projects. some are{" "}
          <CoffeeText>completed</CoffeeText>, still being{" "}
          <CoffeeText>development</CoffeeText>, and also{" "}
          <CoffeeText>pending</CoffeeText>. when i was unemployed, i would
          usually make a lot of projects.
        </p>

        <p className="w-full text-zeta font-medium text-lg text-start mb-6">
          and here are some <CoffeeText>tech stacks</CoffeeText> that i often use to
          create personal projects:
        </p>
        <div className="flex flex-wrap gap-4">
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

export default TitleSection;
