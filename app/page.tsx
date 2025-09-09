import HeroSection from "@/components/pages/home/hero-section";
import AboutSection from "@/components/pages/home/about-section";
import { Divider } from "@/components/ui/divider";
import InspirationSection from "@/components/pages/home/inspiration-section";
import ChatmeSection from "@/components/pages/home/chatme-section";
import ServiceSection from "@/components/pages/home/service-section";
import SkillSection from "@/components/pages/home/skill-section";
import ColorPaletteSection from "@/components/pages/home/color-palette-section";
import CommunitySection from "@/components/pages/home/community-section";
import WorkExperienceSection from "@/components/pages/home/work-section";

const Page = () => {
  return (
    <main className="mt-12">
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <SkillSection />
      <Divider />
      <WorkExperienceSection />
      <Divider />
      <ServiceSection />
      <Divider />
      <ColorPaletteSection />
      <Divider />
      <InspirationSection />
      <Divider />
      <CommunitySection />
      <Divider />
      <ChatmeSection />
    </main>
  );
};

export default Page;