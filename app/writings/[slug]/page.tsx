import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  return (
    <main className="mt-12 max-w-full prose prose-headings:text-foreground prose-p:text-zeta prose-ol:text-zeta prose-ul:text-zeta prose-li:text-zeta prose-a:text-foreground prose-strong:text-foreground">
      <article>{blog.content}</article>
    </main>
  );
}
