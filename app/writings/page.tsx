import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { Divider } from "@/components/ui/divider";
import { getBlogs } from "./fetchers";

export const metadata: Metadata = {
  title: "Irtideath | Writings",
  description: "you are free to compose the meaning.",
  openGraph: {
    title: "Irtideath | Writings",
    description: "you are free to compose the meaning.",
    url: "https://irtideath.engineer/writings",
  },
};

export default async function Page() {
  const blogs = await getBlogs();
  return (
    <main className="mt-14">
      <section className="space-y-6 font-medium">
        <h1 className="text-2xl">writing in my spare time</h1>
        <p className="text-start text-[16px] text-zeta">
          whether it&apos;s storytelling, crafting articles, or diving into
          research. just sharing what&apos;s on my mind.
        </p>
      </section>
      <Divider />
      <section className="w-full">
        {blogs.map((item, i) => (
          <Fragment key={i}>
            <article>
              <h2 className="font-medium text-xl">
                <Link
                  href={`/writings/${item.slug}`}
                  className="group inline-flex items-end gap-1"
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
              </h2>
              <p className="mt-2.5 line-clamp-2 text-sm text-zeta">
                {item.frontmatter.description}
              </p>
              <div className="mt-4 flex flex-col items-start justify-between gap-2 font-medium sm:flex-row sm:items-center">
                <div className="flex flex-wrap items-center gap-2">
                  {item.frontmatter.category.map((category, index) => (
                    <Fragment key={index}>
                      <span className="text-[12px]">{category}</span>
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
          </Fragment>
        ))}
      </section>
      <blockquote className="font-normal font-schoolbell text-xs text-zeta italic">
        &ldquo;i&apos;m not a level 5 skibidi, because that&apos;s just a big
        mewing.&rdquo;
      </blockquote>
    </main>
  );
}

export const dynamic = "force-static";
