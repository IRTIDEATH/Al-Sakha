import type { Metadata } from "next";
import { Suspense } from "react";
import CardProjectSecton from "@/components/pages/project/card-project-section";
import MoreOnGithubSection from "@/components/pages/project/more-on-github-section";
import TitleSection from "@/components/pages/project/title-section";

export const metadata: Metadata = {
  title: "Irtideath | Projects",
  description:
    "chasing something until lose all feeling and forget the real world.",
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
