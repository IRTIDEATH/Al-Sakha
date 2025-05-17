import CardProjectSecton from "@/components/section/projects/card-project-section";
import TitleSection from "@/components/section/projects/title-section";
import Divider from "@/components/ui/divider";

const Page = () => {
  return (
    <>
      <TitleSection />
      <Divider />
      <CardProjectSecton />
    </>
  );
};

export default Page;

export const dynamic = "force-static";
