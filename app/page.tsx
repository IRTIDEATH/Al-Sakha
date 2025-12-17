import AboutSection from "@/components/pages/home/about-section";
import ChatmeSection from "@/components/pages/home/chatme-section";
import HeroSection from "@/components/pages/home/hero-section";
import ServiceSection from "@/components/pages/home/service-section";
import SkillSection from "@/components/pages/home/skill-section";
import WorkExperienceSection from "@/components/pages/home/work-section";
import { Divider } from "@/components/ui/divider";

const Page = () => {
  return (
    <>
      <main className="mt-12">
        <HeroSection />
        <div className="flex select-none items-center justify-between bg-suram py-1 font-roboto text-[8px] sm:text-[10px]">
          <span>
            <span className="inline-block rotate-90 font-geist">{"->"}</span>{" "}
            scroll for
          </span>
          <span>
            cool sh*t{" "}
            <span className="inline-block rotate-90 font-geist">{"->"}</span>
          </span>
        </div>
        <Divider />
        <AboutSection />
      </main>
      <Divider />
      <SkillSection />
      <Divider />
      <WorkExperienceSection />
      <Divider />
      <ServiceSection />
      <Divider />
      <ChatmeSection />
    </>
  );
};

export default Page;
