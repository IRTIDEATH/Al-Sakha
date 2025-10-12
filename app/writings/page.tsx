import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Divider } from "@/components/ui/divider";
import { getBlogs } from "./fetchers";

export const metadata: Metadata = {
  title: "Irtideath - Writings",
  description: "A collection of my thoughts and writings.",
};

export default async function Page() {
  const blogs = await getBlogs();
  return (
    <main className="mt-12 md:mt-14">
      <Divider className="my-0 hidden md:block" />
      <section className="mb-8 flex flex-row items-center justify-between gap-0 md:mb-0 md:gap-18">
        <div>
          <h1 className="mb-6 font-medium text-2xl">
            writing in my spare time
          </h1>
          <p className="text-start font-medium text-[16px] text-zeta">
            whether it&apos;s storytelling, crafting articles, or diving into
            research. just sharing what&apos;s on my mind.
          </p>
        </div>
        <div className="hidden h-40 w-44 border-[3px] border-suram border-t-0 border-b-0 md:block">
          <Image
            src={"/zetamycat.webp"}
            alt="Vestia Zeta My Mine"
            width={1400}
            height={2048}
            sizes="(max-width: 768px) 0px, 176px"
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>
      <Divider className="mt-0 mb-6" />
      <section className="w-full">
        {blogs.map((item, i) => (
          <div key={i}>
            <article>
              <Link
                href={`/writings/${item.slug}`}
                className="group inline-flex items-end gap-1 font-medium text-xl"
              >
                {item.frontmatter.title}
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
              <p className="mt-2.5 text-sm text-zeta">
                {item.frontmatter.description}
              </p>
              <div className="mt-4 flex flex-col items-start justify-between gap-2 font-medium sm:flex-row sm:items-center">
                <div className="flex flex-wrap items-center gap-2">
                  {item.frontmatter.category.map((category, index) => (
                    <Fragment key={index}>
                      <p className="text-[12px]">{category}</p>
                      {index < item.frontmatter.category.length - 1 && (
                        <span className="select-none text-[12px] text-zeta">
                          |
                        </span>
                      )}
                    </Fragment>
                  ))}
                </div>
                <time
                  className="text-nowrap text-[12px] text-zeta"
                  dateTime={item.frontmatter.date}
                >
                  {item.frontmatter.date}
                </time>
              </div>
            </article>
            <Divider className="my-6" />
          </div>
        ))}
      </section>
      <blockquote className="font-normal text-xs text-zeta italic">
        &ldquo;i&apos;m not a level 5 skibidi, because that&apos;s just a big
        mewing.&rdquo;
      </blockquote>
    </main>
  );
}

export const dynamic = "force-static";
