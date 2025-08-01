import Link from "next/link";
import { getBlogs } from "./fetchers";
import Divider from "@/components/ui/divider";
import Image from "next/image";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main className="mt-12 md:mt-14">
      <Divider className="my-0 hidden md:block" />
      <div className="flex flex-row items-center justify-between gap-0 md:gap-18 mb-8 md:mb-0">
        <div>
          <h2 className="text-2xl mb-6 font-medium">
            writing in my spare time
          </h2>
          <p className="text-zeta font-medium text-[16px] text-start">
            whether it{"'"}s storytelling, crafting articles, or diving into
            research. just sharing what{"'"}s on my mind.
          </p>
        </div>
        <Image
          src={"/zetamycat.png"}
          alt="Vestia Zeta My Mine"
          width={500}
          height={500}
          className="object-cover w-28 h-auto hidden md:block border-[2px] border-b-0 border-t-0 border-suram"
        />
      </div>
      <Divider className="mt-0 mb-6" />
      <div className="w-full">
        {blogs.map((item, i) => (
          <div key={i}>
            <article>
              <Link
                href={`/writings/${item.slug}`}
                className="text-xl font-medium inline-flex items-end gap-1"
              >
                {item.frontmatter.title}
                <svg
                  className="mb-0.5"
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
              </Link>
              <p className="text-sm text-zeta mt-2.5">
                {item.frontmatter.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-medium mt-4 gap-2">
                <p className="text-[12px]">{item.frontmatter.category}</p>
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
      </div>
    </main>
  );
}
