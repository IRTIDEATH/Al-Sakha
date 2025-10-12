import type { Metadata } from "next";
import CardProjectSecton from "@/components/pages/project/card-project-section";
import MoreOnGithubSection from "@/components/pages/project/more-on-github-section";
import TitleSection from "@/components/pages/project/title-section";

export const metadata: Metadata = {
  title: "Irtideath - Projects",
  description: "A collection of projects I've worked on.",
};

export default function Page() {
  return (
    <main className="mt-12">
      <TitleSection />
      <CardProjectSecton />
      <MoreOnGithubSection />
    </main>
  );
}
