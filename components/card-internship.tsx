import { internships } from "@/constants";
import Link from "next/link";

const CardInternship = () => {
  return (
    <>
      <div className="flex flex-col space-y-6">
        {internships.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full flex-row items-center justify-between h-22 sm:h-18 relative inline-flex overflow-hidden`}
            >
              <div className="flex flex-row items-start h-full w-full">
                <div className="flex flex-col items-start sm:flex-row sm:justify-between w-full sm:items-end">
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
                    <p className="text-lg font-medium text-zeta">
                      {item.position}
                    </p>
                  </div>
                  <span className="text-[14px] font-medium text-zeta mt-2">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardInternship;
