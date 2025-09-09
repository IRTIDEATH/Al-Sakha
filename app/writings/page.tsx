import Link from "next/link";
import { getBlogs } from "./fetchers";
import { Divider } from "@/components/ui/divider";
import Image from "next/image";
import { Fragment } from "react";

export default async function Page() {
  const blogs = await getBlogs();
  return (
    <main className="mt-12 md:mt-14">
      <Divider className="my-0 hidden md:block" />
      <section className="flex flex-row items-center justify-between gap-0 md:gap-18 mb-8 md:mb-0">
        <div>
          <h1 className="text-2xl mb-6 font-medium">
            writing in my spare time
          </h1>
          <p className="text-zeta font-medium text-[16px] text-start">
            whether it&apos;s storytelling, crafting articles, or diving into
            research. just sharing what&apos;s on my mind.
          </p>
        </div>
        <div className="w-44 h-40 hidden md:block border-[2px] border-b-0 border-t-0 border-suram">
          <Image
            src={"/zetamycat.webp"}
            alt="Vestia Zeta My Mine"
            width={1400}
            height={2048}
            sizes="(max-width: 768px) 0px, 176px"
            priority
            className="object-cover w-full h-full"
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
                className="text-xl font-medium inline-flex items-end gap-1 group"
              >
                {item.frontmatter.title}
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
              <p className="text-sm text-zeta mt-2.5">
                {item.frontmatter.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-medium mt-4 gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {item.frontmatter.category.map((category, index) => (
                    <Fragment key={index}>
                      <p className="text-[12px]">{category}</p>
                      {index < item.frontmatter.category.length - 1 && (
                        <span className="text-[12px] text-zeta select-none">|</span>
                      )}
                    </Fragment>
                  ))}
                </div>
                <time
                  className="text-[12px] text-nowrap text-zeta"
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
      <blockquote className="italic text-zeta font-normal text-xs">
        &ldquo;i&apos;m not a level 5 skibidi, because that&apos;s just a big
        mewing.&rdquo;
      </blockquote>
    </main>
  );
}

export const dynamic = "force-static";