import CardProjectSecton from "@/components/section/projects/card-project-section";
import TitleSection from "@/components/section/projects/title-section";
import Divider from "@/components/ui/divider";

const Page = () => {
  return (
    <main>
      <TitleSection />
      <Divider />
      <CardProjectSecton />
    </main>
  );
};

export default Page;

export const dynamic = "force-static";
