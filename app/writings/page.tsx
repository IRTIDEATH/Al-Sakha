import Link from "next/link";
import { getBlogs } from "./fetchers";
import Divider from "@/components/ui/divider";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main className="mt-12">
      <h2 className="text-2xl mb-6 font-medium">writing in spare time</h2>
      <p className="text-zeta font-medium text-lg text-start mb-6">
        whatever story it is, the article i made, and researching something.
      </p>
      <Divider className="mt-12 mb-6" />
      <div className="w-full">
        {blogs.map((item, i) => (
          <div key={i}>
            <article>
              <Link
                href={`/writings/${item.slug}`}
                className="text-xl font-medium underline decoration-2"
              >
                {item.frontmatter.title}
              </Link>
              <p className="text-sm text-zeta mt-2.5">
                {item.frontmatter.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-medium mt-4 gap-2">
                <p className="text-[12px]">{item.frontmatter.category}</p>
                <span className="text-[12px] text-nowrap text-zeta">
                  {item.frontmatter.date}
                </span>
              </div>
            </article>
            <Divider className="my-6" />
          </div>
        ))}
      </div>
    </main>
  );
}
