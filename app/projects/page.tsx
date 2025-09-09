import CardProjectSecton from "@/components/pages/project/card-project-section";
import MoreOnGithubSection from "@/components/pages/project/more-on-github-section";
import TitleSection from "@/components/pages/project/title-section";
import { Divider } from "@/components/ui/divider";

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