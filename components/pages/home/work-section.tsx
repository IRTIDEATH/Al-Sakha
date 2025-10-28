import Link from "next/link";
import CoffeeText from "@/components/ui/coffee-text";
import { internships } from "@/constants";

const WorkExperienceSection = () => {
  return (
    <section>
      <h1 className="mb-6 font-medium text-2xl">work experience</h1>
      <p className="mb-8 w-full text-start font-normal text-[16px] text-zeta">
        professional work experience that has contributed to the development of
        my skills and career, able to work on projects{" "}
        <CoffeeText>independently</CoffeeText> or collaboratively in a team.
      </p>
      <div className="flex flex-col gap-6">
        {internships.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-start font-normal text-zeta sm:flex-row sm:items-end sm:justify-between"
          >
            <article className="flex flex-col gap-0.5">
              <h2 className="font-medium font-roboto text-foreground text-lg">
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={item.link}
                  className="group inline-flex w-fit items-end gap-1"
                >
                  {item.company}
                  <span className="relative inline-block h-5 w-5 overflow-hidden">
                    <svg
                      className="group-hover:-translate-y-5 mb-0.5 transition-transform duration-150 group-hover:translate-x-5"
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
                      className="-translate-x-5 absolute top-0 left-0 mb-0.5 translate-y-5 transition-transform duration-150 group-hover:translate-x-0 group-hover:translate-y-0"
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
              </h2>
              <p className="text-[16px]">{item.position}</p>
            </article>
            <time dateTime={item.datetime} className="mt-2 text-[14px]">{item.date}</time>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
