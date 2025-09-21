import HeroSection from "@/components/pages/home/hero-section";
import AboutSection from "@/components/pages/home/about-section";
import { Divider } from "@/components/ui/divider";
import InspirationSection from "@/components/pages/home/inspiration-section";
import ChatmeSection from "@/components/pages/home/chatme-section";
import ServiceSection from "@/components/pages/home/service-section";
import SkillSection from "@/components/pages/home/skill-section";
import ColorPaletteSection from "@/components/pages/home/color-palette-section";
import WorkExperienceSection from "@/components/pages/home/work-section";

const Page = () => {
  return (
    <main className="mt-12">
      <HeroSection />
      <ul className="flex items-center justify-between text-[8px] sm:text-[10px] font-medium mt-4 select-none">
        <li><span className="inline-block rotate-90">{"->"}</span> scroll for</li>
        <li>cool sh*t <span className="inline-block rotate-90">{"->"}</span></li>
      </ul>
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
      <ChatmeSection />
    </main>
  );
};

export default Page;