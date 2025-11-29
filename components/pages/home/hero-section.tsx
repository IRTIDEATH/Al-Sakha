"use client";

import Image from "next/image";

const Cursor = dynamic(() => import("@/components/animate-cursor"), {
  ssr: false,
});

import dynamic from "next/dynamic";

const HeroSection = () => {
  return (
    <section className="bg-foreground px-6 py-8">
      <div className="flex items-center justify-between">
        <div className="flex max-w-lg flex-col items-start gap-3">
          <h1 className="font-semibold text-5xl text-background">
            <Cursor
              attachToParent
              variants={{
                initial: { height: 0, opacity: 0, scale: 0.3 },
                animate: { height: "auto", opacity: 1, scale: 1 },
                exit: { height: 0, opacity: 0, scale: 0.3 },
              }}
              transition={{
                type: "spring",
                duration: 0.3,
                bounce: 0.1,
              }}
              className="overflow-hidden"
              springConfig={{
                bounce: 0.01,
              }}
            >
              <div className="h-34 w-58">
                <Image src="/zetaagent.png" alt="Vestia Zeta" fill priority />
              </div>
            </Cursor>
            Gray
          </h1>
          <p className="font-medium text-background text-xl">
            cozy as a cat taking a nap
          </p>
        </div>
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden size-22 sm:flex"
        >
          <g clip-path="url(#clip0_98_8)">
            <mask
              id="mask0_98_8"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="96"
              height="96"
            >
              <path d="M0 0H96V96H0V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_98_8)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 6C8.20435 6 7.44129 6.31607 6.87868 6.87868C6.31607 7.44129 6 8.20435 6 9V75H0V9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0L89.379 0C93.388 0 95.395 4.847 92.561 7.682L43.055 57.187H57V51H63V58.688C63 59.8815 62.5259 61.0261 61.682 61.87C60.8381 62.7139 59.6935 63.188 58.5 63.188H37.055L26.743 73.5H73.5V36H79.5V73.5C79.5 75.0913 78.8679 76.6174 77.7426 77.7426C76.6174 78.8679 75.0913 79.5 73.5 79.5H20.743L10.243 90H87C87.7956 90 88.5587 89.6839 89.1213 89.1213C89.6839 88.5587 90 87.7956 90 87V21H96V87C96 89.3869 95.0518 91.6761 93.364 93.364C91.6761 95.0518 89.3869 96 87 96H6.621C2.612 96 0.605 91.153 3.439 88.318L52.757 39H39V45H33V37.5C33 36.3065 33.4741 35.1619 34.318 34.318C35.1619 33.4741 36.3065 33 37.5 33H58.757L69.257 22.5H22.5V60H16.5V22.5C16.5 20.9087 17.1321 19.3826 18.2574 18.2574C19.3826 17.1321 20.9087 16.5 22.5 16.5H75.257L85.757 6H9Z"
                fill="#F2F2F4"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_98_8">
              <rect width="96" height="96" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
