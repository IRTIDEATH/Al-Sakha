import type { MetadataRoute } from "next";
import { getBlogs } from "./writings/fetchers";

const BASE_URL = "https://irtideath.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();

  const blogRoutes = blogs
    .filter(
      (blog) =>
        blog && typeof blog.slug === "string" && !!blog.frontmatter?.date,
    )
    .map((blog) => ({
      url: `${BASE_URL}/writings/${blog.slug}`,
      lastModified: new Date(blog.frontmatter.date),
      changeFrequency: "daily" as const,
      priority: 0.9,
    }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/writings`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  return [...staticRoutes, ...blogRoutes];
}
