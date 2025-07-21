import { internships } from "@/constants";
import Link from "next/link";

const CardInternship = () => {
  return (
    <div className="flex flex-col gap-6">
      {internships.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start sm:flex-row sm:justify-between w-full sm:items-end"
        >
          <div className="flex flex-col gap-0.5">
            <Link
              aria-label="company link"
              rel="noopener noreferrer"
              target="_blank"
              href={item.link}
              className="text-xl font-medium font-roboto underline decoration-2"
            >
              {item.company}
            </Link>
            <p className="text-lg font-medium text-zeta">{item.position}</p>
          </div>
          <span className="text-[14px] font-medium text-zeta mt-2">
            {item.date}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CardInternship;
