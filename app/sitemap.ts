import { existsSync, statSync } from "fs";
import { getAllBlogSlug } from "./writings/fetchers";
import { join } from 'path';

const BASE_URL = "https://irtideath.vercel.app";

type SitemapEntry = {
    url: string;
    lastModified: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
};

function getLastModified(filePath: string): string {
    const stats = statSync(filePath);
    return stats.mtime.toISOString();
}

export default async function sitemap(): Promise<SitemapEntry[]> {
    const writings = getAllBlogSlug();

    const staticRoutes: SitemapEntry[] = [
        {
            url: BASE_URL,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1.0
        },
        ...writings
            .filter(({ slug }) => existsSync(join(process.cwd(), "writings", `${slug}.mdx`)))
            .map(({ slug }) => {
                const filePath = join(process.cwd(), "writings", `${slug}.mdx`);
                return {
                    url: `${BASE_URL}/writings/${slug}`,
                    lastModified: getLastModified(filePath),
                    changeFrequency: 'daily' as const,
                    priority: 0.9,
                }
            })
    ];

    return [...staticRoutes].map((entry) => ({
        ...entry,
        url: entry.url.replace(/\/$/, ''),
    }));
}

export const dynamic = 'force-static';