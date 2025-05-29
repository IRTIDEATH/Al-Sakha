import HeroSection from "@/components/section/home/hero-section";
import AboutSection from "@/components/section/home/about-section";
import Divider from "@/components/ui/divider";
import ColorPaletteSection from "@/components/section/home/color-palette-section";
import InspirationSection from "@/components/section/home/inspiration-section";
import dynamic from "next/dynamic";
import ChatmeSection from "@/components/section/home/chatme-section";
import SkillSection from "@/components/section/home/skill-section";

const InternshipSection = dynamic(() => import("@/components/section/home/internship-section"));

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
      <ColorPaletteSection />
      <Divider />
      <InspirationSection />
      <Divider />
      <ChatmeSection />
    </main>
  );
};

export default Page;