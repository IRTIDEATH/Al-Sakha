import type { Metadata } from "next";
import { Suspense } from "react";
import CardProjectSecton from "@/components/pages/project/card-project-section";
import MoreOnGithubSection from "@/components/pages/project/more-on-github-section";
import TitleSection from "@/components/pages/project/title-section";

export const metadata: Metadata = {
  title: "Irtideath | Projects",
  description:
    "echoes of my keyboard. a collection of logic created to define my perspective. it dawned on me that i might be useful, even just a little...",
  openGraph: {
    title: "Irtideath | Projects",
    description:
      "perhaps it is the kind of thing that quietly erases sensation, until the world feels like a rumor you once believed. yet even now, i cannot name it.",
    url: "https://irtideath.engineer/projects",
    images: ["/opengraph-image.png"],
    siteName: "irtideath.engineer",
    type: "website",
    locale: "en_US",
  },
};

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const initialCategory = params.category || "all";

  return (
    <main className="mt-12">
      <TitleSection />
      <Suspense fallback={<div className="h-20 animate-pulse bg-suram/50" />}>
        <CardProjectSecton initialCategory={initialCategory} />
      </Suspense>
      <MoreOnGithubSection />
    </main>
  );
}
