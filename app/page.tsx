import HeroSection from "@/components/section/home/hero-section";
import AboutSection from "@/components/section/home/about-section";
import Divider from "@/components/ui/divider";
import InspirationSection from "@/components/section/home/inspiration-section";
import ChatmeSection from "@/components/section/home/chatme-section";
import ServiceSection from "@/components/section/home/service-section";
import InternshipSection from "@/components/section/home/internship-section";
import SkillSection from "@/components/section/home/skill-section";
import ColorPaletteSection from "@/components/section/home/color-palette-section";
import CommunitySection from "@/components/section/home/community-section";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <SkillSection />
      <Divider />
      <InternshipSection />
      <Divider />
      <ServiceSection />
      <Divider />
      <ColorPaletteSection/>
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