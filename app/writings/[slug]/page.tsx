import type { Metadata } from "next";
import Link from "next/link";
import ScrollUpButton from "@/components/layouts/writing-layout/scroll-up-button";
import ShareButton from "@/components/layouts/writing-layout/share-button";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { getAllBlogSlug, getBlogBySlug } from "../fetchers";

export async function generateStaticParams() {
  const allSlugs = getAllBlogSlug();

  return allSlugs.map(({ slug }) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  return {
    title: `${blog.frontmatter.title} | Irtideath`,
    description: blog.frontmatter.description,
    keywords: blog.frontmatter.tags,
    authors: [
      {
        name: "Irtideath",
        url: "https://github.com/IRTIDEATH",
      },
    ],
    openGraph: {
      title: blog.frontmatter.title,
      description: blog.frontmatter.description,
      type: "article",
      publishedTime: blog.frontmatter.date,
      tags: blog.frontmatter.tags,
      images: [
        {
          url: blog.frontmatter.thumbnail,
          width: 900,
          height: 300,
          alt: blog.frontmatter.title,
        },
      ],
    },
    alternates: {
      canonical: `/writings/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  const allSlugs = getAllBlogSlug();
  const allBlogs = await Promise.all(
    allSlugs.map(({ slug }) => getBlogBySlug(slug)),
  );
  const index = allSlugs.findIndex((item) => item.slug === slug);

  const prevBlog = index > 0 ? allBlogs[index - 1] : null;
  const nextBlog = index < allBlogs.length - 1 ? allBlogs[index + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: blog.frontmatter.title,
    description: blog.frontmatter.description,
    image: blog.frontmatter.thumbnail,
    datePublished: blog.frontmatter.date,
    author: {
      "@type": "Person",
      name: "Irtideath",
      url: "https://github.com/IRTIDEATH",
    },
    keywords: blog.frontmatter.tags.join(", "),
    url: `/writings/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="style-prose font-source">
        <article>{blog.content}</article>
        <ul className="not-prose mt-15 flex list-none flex-wrap items-center gap-2.5">
          {blog.frontmatter.tags.map((item, index) => (
            <li key={index}>
              <Badge className="font-satoshi" variant={"tag"}>
                {item}
              </Badge>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex items-center justify-between">
          <Divider className="my-0 w-34 bg-foreground" />

          <div className="flex items-center gap-6">
            <ShareButton />
            <ScrollUpButton />
          </div>
        </div>
        <nav
          className={
            `mt-10 flex flex-col justify-between sm:flex-row` +
            (prevBlog && nextBlog ? "gap-4" : "")
          }
        >
          {prevBlog ? (
            <Link
              href={`/writings/${prevBlog.slug}`}
              className="group flex w-full flex-col items-start border border-foreground p-4 no-underline transition-colors duration-300 hover:bg-foreground active:bg-foreground active:text-background"
            >
              <span className="text-xs text-zeta">{"<-"} Previous</span>
              <span className="mt-1 text-lg transition-colors ease-in-out group-hover:text-background">
                {prevBlog.frontmatter.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {nextBlog ? (
            <Link
              href={`/writings/${nextBlog.slug}`}
              className="group flex w-full flex-col items-end border border-foreground p-4 no-underline transition-colors duration-300 hover:bg-foreground active:bg-foreground active:text-background"
            >
              <span className="text-xs text-zeta">Next {"->"}</span>
              <span className="mt-1 text-lg transition-colors ease-in-out group-hover:text-background">
                {nextBlog.frontmatter.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </>
  );
}
