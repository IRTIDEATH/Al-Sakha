"use client";

import CardProjectSecton from "@/components/section/projects/card-project-section";
import TechStackSection from "@/components/section/projects/tech-stack-section";
import TitleSection from "@/components/section/projects/title-section";
import Divider from "@/components/ui/divider";

const ProjectPage = () => {
  return (
    <>
      <TitleSection />
      <TechStackSection />
      <Divider />
      <CardProjectSecton />
    </>
  );
};

export default ProjectPage;
