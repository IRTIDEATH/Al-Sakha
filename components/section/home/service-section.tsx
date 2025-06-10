"use client";

import CoffeeText from "@/components/ui/coffee-text";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <>
      <section className="w-full mx-auto">
        <h1 className="text-2xl mb-6 font-medium">service</h1>
        <p className="w-full text-zeta font-medium text-lg text-start">
          i provide services that reflect my current capabilities, with a focus
          on delivering effective and thoughtful solutions. feel free to view my
          work on the{" "}
          <CoffeeText className="underline decoration-2">
            <Link aria-label="Navigate to projects page" href={"/projects"}>
              projects
            </Link>
          </CoffeeText>{" "}
          page.
        </p>
        <div className="mt-8 flex flex-col gap-12">
          <div className="flex flex-row-reverse items-start justify-between gap-4">
            <div className="space-y-2.5">
              <h2 className="text-lg font-medium">Frontend</h2>
              <p className="text-zeta">
                transforming designs into functional and responsive user
                interfaces. i create web experiences that are interactive, fast
                to load, seo friendly and optimized across multiple devices,
                from desktop to mobile.
              </p>
            </div>
            <div>
              <svg
                width="196"
                height="218"
                viewBox="0 0 196 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-full"
              >
                <path
                  d="M32.626 1L32.9189 1.29297L166.384 134.757L167.091 135.464L158.492 144.062L157.785 143.355L27.5898 13.1592H13.1592V169.391H122.083V181.55H1V1H32.626Z"
                  fill="#2E2E2E"
                  stroke="#2E2E2E"
                  strokeWidth="2"
                />
                <path
                  d="M193.294 213.135L118.811 138.486L118.104 137.778L118.812 137.072L126.004 129.896L126.711 129.189L127.418 129.897L182.843 185.446V13.1592H75.6475V1H195.002V214.847L193.294 213.135Z"
                  fill="#2E2E2E"
                  stroke="#2E2E2E"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start justify-between gap-4">
            <div className="space-y-2.5">
              <h2 className="text-lg font-medium">Backend</h2>
              <p className="text-zeta">
                i built a secure API that allows seamless integration,
                scalability across the system. with a focus on efficiency and
                reliability, ensuring clean and well-structured code, making
                future development easy.
              </p>
            </div>
            <div>
              <svg
                width="165"
                height="221"
                viewBox="0 0 165 221"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-full"
              >
                <path
                  d="M3 177.834L4.01178 175.875L66.6433 57.9231L38.8114 5.69451C36.4985 1.38295 30.6245 2.48227 29.8655 7.30877L3 177.834Z"
                  stroke="#2E2E2E"
                  strokeWidth="6"
                />
                <path
                  d="M82.3311 36.1733C83.15 34.6056 85.592 34.5703 86.4502 36.1851V36.186L106.207 73.6187L89.8066 90.2886L71.5684 56.8257V56.5435L82.3242 36.187L82.3271 36.1802L82.3311 36.1733Z"
                  stroke="#2E2E2E"
                  strokeWidth="6"
                />
                <path
                  d="M4 178.253L4.60644 177.648L6.81029 176.759L87.8014 96.6722L88.8277 93.8998L68.6235 55.687L4 178.253Z"
                  fill="#2E2E2E"
                />
                <path
                  d="M91.701 218.642L165 178.068L144.068 50.1198C143.413 46.1167 138.465 44.5343 135.578 47.4043L4 178.252L76.8785 218.638C79.1438 219.894 81.695 220.553 84.2894 220.553C86.8838 220.554 89.4352 219.896 91.701 218.642Z"
                  fill="#2E2E2E"
                />
                <path
                  d="M91.6997 217.445C89.434 218.699 86.8827 219.357 84.2884 219.356C81.6941 219.356 79.1431 218.697 76.8779 217.442L4.58627 177.636L4 178.251L76.8779 218.637C79.1432 219.892 81.6943 220.552 84.2887 220.552C86.8831 220.553 89.4346 219.895 91.7004 218.64L164.999 178.067L164.82 176.971L91.7004 217.445L91.6997 217.445Z"
                  fill="#2E2E2E"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
