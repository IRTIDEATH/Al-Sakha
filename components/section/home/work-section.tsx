import { internships } from "@/constants";
import Link from "next/link";
import CoffeeText from "@/components/ui/coffee-text";

const WorkExperienceSection = () => {
  return (
    <section>
      <h1 className="text-2xl mb-6 font-medium">work experience</h1>
      <p className="w-full mb-8 text-zeta font-medium text-[16px] text-start">
        professional work experience that has contributed to the development of
        my skills and career, able to work on projects{" "}
        <CoffeeText>independently</CoffeeText> or collaboratively in a team.
      </p>
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
                className="text-xl font-medium font-roboto inline-flex items-end gap-1 group w-fit"
              >
                {item.company}
                <span className="inline-block relative overflow-hidden h-5 w-5">
                  <svg
                    className="mb-0.5 transition-transform duration-150 group-hover:-translate-y-5 group-hover:translate-x-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                  <svg
                    className="absolute top-0 left-0 mb-0.5 transition-transform duration-150 -translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </Link>
              <p className="text-lg font-medium text-zeta">{item.position}</p>
            </div>
            <span className="text-[14px] font-medium text-zeta mt-2">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
