import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { services } from "@/constants/services";

const ServicesGridSection = () => {
  return (
    <section className="w-full">
      {services.map((item, index) => (
        <div key={item.number}>
          <div className="bg-foreground p-4 text-background">
            <div className="flex flex-col items-start gap-4">
              <span className="font-medium font-roboto text-[32px] text-zeta leading-none">
                {item.number}
              </span>
              <h2 className="font-medium text-[20px]">{item.name}</h2>
            </div>

            <div className="mt-6">
              <p className="mb-6 text-[16px] text-suram">{item.description}</p>

              <div className="mb-6">
                <h3 className="mb-3 font-medium text-sm">Features</h3>
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-[14px] text-suram"
                    >
                      <span className="mt-1 inline-block rotate-90 whitespace-nowrap font-geist text-[10px]">
                        {"->"}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="font-roboto text-[13px] text-suram">
                  Available
                </span>
                <Divider className="my-0" />
                <div className="flex gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <TooltipProvider delayDuration={100} key={techIndex}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge
                            variant="skill"
                            className="bg-suram text-foreground"
                            aria-label={`Technology: ${tech.name}`}
                          >
                            <Icon icon={tech.icon} aria-hidden="true" />
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="bg-suram text-foreground">
                          <p>{tech.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {index < services.length - 1 && <Divider className="my-4" />}
        </div>
      ))}
    </section>
  );
};

export default ServicesGridSection;
