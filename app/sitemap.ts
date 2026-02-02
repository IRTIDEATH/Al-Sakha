import type { MetadataRoute } from "next";
import { getBlogs } from "./writings/fetchers";

const BASE_URL = "https://irtideath.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs = [];
  try {
    blogs = await getBlogs();
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
    return getStaticRoutes();
  }

  const blogRoutes = blogs
    .filter((blog) => {
      return (
        blog &&
        typeof blog.slug === "string" &&
        blog.slug.trim() !== "" &&
        blog.frontmatter &&
        blog.frontmatter.date
      );
    })
    .map((blog) => {
      const blogDate = new Date(blog.frontmatter.date);
      const isValidDate = !Number.isNaN(blogDate.getTime());

      return {
        url: `${BASE_URL}/writings/${blog.slug}`,
        lastModified: isValidDate ? blogDate : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });

  const staticRoutes = getStaticRoutes();

  return [...staticRoutes, ...blogRoutes];
}

function getStaticRoutes(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/writings`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
