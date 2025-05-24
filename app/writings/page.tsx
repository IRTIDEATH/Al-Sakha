import Link from "next/link";
import { getBlogs } from "./fetchers";
import Image from "next/image";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {blogs.map((item, i) => (
        <article key={i}>
          <div className="relative w-full h-[184px]">
            <Image
              priority
              src={item.frontmatter.thumbnail}
              alt={item.frontmatter.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="py-[1.5px] bg-zeta w-full mt-3.5" />
          <div className="mt-4.5">
            <Link
              href={`/writings/${item.slug}`}
              className="text-xl font-semibold hover:underline decoration-2"
            >
              {item.frontmatter.title}
            </Link>
            <div className="flex justify-between items-center font-medium mt-3 text-zeta">
              <p className="text-sm">{item.frontmatter.category}</p>
              <span className="text-[12px]">{item.frontmatter.date}</span>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}
