import { Icon } from "@iconify/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ContactCardProps {
  icon: string;
  title: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon, title, value, href }: ContactCardProps) => {
  return (
    <Link href={href}>
      <div className="group flex h-full flex-col items-start gap-3 bg-foreground p-4 text-background">
        <div className="flex items-center gap-2">
          <Badge variant="skill" className="bg-suram text-foreground">
            <Icon icon={icon} className="size-4" />
          </Badge>
          <span className="font-medium text-[14px] text-background">
            {title}
          </span>
        </div>
        <span className="font-roboto text-[12px] text-suram">{value}</span>
        <span className="inline-block rotate-90 font-geist text-[10px] text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {"->"}
        </span>
      </div>
    </Link>
  );
};

export default ContactCard;
