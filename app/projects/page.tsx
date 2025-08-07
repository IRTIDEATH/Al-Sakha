import CardProjectSecton from "@/components/section/projects/card-project-section";
import MoreOnGithubSection from "@/components/section/projects/more-on-github-section";
import TitleSection from "@/components/section/projects/title-section";
import Divider from "@/components/ui/divider";

const Page = () => {
  return (
    <main className="mt-12">
      <TitleSection />
      <Divider />
      <CardProjectSecton />
      <MoreOnGithubSection />
    </main>
  );
};

export default Page;

export const dynamic = "force-static";
