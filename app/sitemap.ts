import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { getAllBlogSlug } from "./writings/fetchers";

const BASE_URL = "https://irtideath.vercel.app";

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

function getLastModified(filePath: string): string {
  const stats = statSync(filePath);
  return stats.mtime.toISOString();
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const writings = getAllBlogSlug();

  const contentDir = join(process.cwd(), "app/writings/_mdx-content");

  const staticRoutes: SitemapEntry[] = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/writings`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...writings
      .filter(({ slug }) => existsSync(join(contentDir, `${slug}.mdx`)))
      .map(({ slug }) => {
        const filePath = join(contentDir, `${slug}.mdx`);
        return {
          url: `${BASE_URL}/writings/${slug}`,
          lastModified: getLastModified(filePath),
          changeFrequency: "daily" as const,
          priority: 0.9,
        };
      }),
  ];

  return [...staticRoutes].map((entry) => ({
    ...entry,
    url: entry.url.replace(/\/$/, ""),
  }));
}

export const dynamic = "force-static";
