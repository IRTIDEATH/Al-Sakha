import Link from "next/link";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  const allSlugs = getAllBlogSlug();
  const allBlogs = await Promise.all(
    allSlugs.map(({ slug }) => getBlogBySlug(slug))
  );
  const index = allSlugs.findIndex((item) => item.slug === slug);

  // Dapatkan slug dan title sebelumnya dan berikutnya
  const prevBlog = index > 0 ? allBlogs[index - 1] : null;
  const nextBlog = index < allBlogs.length - 1 ? allBlogs[index + 1] : null;
  return (
    <main className="mt-12 max-w-full prose prose-headings:text-foreground prose-p:text-zeta prose-ol:text-zeta prose-ul:text-zeta prose-li:text-zeta prose-a:text-foreground prose-strong:text-foreground">
      <article>{blog.content}</article>
      <nav
        className={
          `flex flex-col sm:flex-row justify-between mt-10` +
          (prevBlog && nextBlog ? " gap-4" : "")
        }
      >
        {prevBlog ? (
          <Link
            href={`/writings/${prevBlog.slug}`}
            className="flex flex-col items-start w-full border border-foreground p-4 no-underline group hover:bg-foreground duration-300 transition-colors"
          >
            <span className="text-xs text-zeta">{"<-"} Previous</span>
            <span className="text-lg mt-1 duration-300 transition-colors group-hover:text-background">
              {prevBlog.frontmatter.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {nextBlog ? (
          <Link
            href={`/writings/${nextBlog.slug}`}
            className="flex flex-col items-end w-full border border-foreground p-4 no-underline group hover:bg-foreground duration-300 transition-colors"
          >
            <span className="text-xs text-zeta">{"->"} Next</span>
            <span className="text-lg mt-1 duration-300 transition-colors group-hover:text-background">
              {nextBlog.frontmatter.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
