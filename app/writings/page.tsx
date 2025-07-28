import Link from "next/link";
import { getBlogs } from "./fetchers";
import Divider from "@/components/ui/divider";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main className="mt-12">
      <h2 className="text-2xl mb-6 font-medium">writing in my spare time</h2>
      <p className="text-zeta font-medium text-[16px] text-start mb-6">
        whether it{"'"}s storytelling, crafting articles, or diving into
        research.
      </p>
      <Divider className="mt-8 mb-6" />
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
