import type { Metadata } from "next";
import CardProjectSecton from "@/components/pages/project/card-project-section";
import MoreOnGithubSection from "@/components/pages/project/more-on-github-section";
import TitleSection from "@/components/pages/project/title-section";

export const metadata: Metadata = {
  title: "Irtideath - Projects",
  description:
    "chasing something until lose all feeling and forget the real world.",
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
