import type { Metadata } from "next";
import AboutSection from "@/components/pages/home/about-section";
import ChatmeSection from "@/components/pages/home/chatme-section";
import HeroSection from "@/components/pages/home/hero-section";
import ServiceSection from "@/components/pages/home/service-section";
import SkillSection from "@/components/pages/home/skill-section";
import WorkExperienceSection from "@/components/pages/home/work-section";
import { Divider } from "@/components/ui/divider";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Irtideath",
  url: "https://irtideath.engineer",
  jobTitle: "Design Engineer",
  image: "https://irtideath.engineer/opengraph-image.png",
  description:
    "just an ordinary npc and dumb in math. i never imagined myself in the field of programming, but now focusing on website development. unemployed and not in college. i hope to stick with this career in the future.",
  knowsAbout: ["Web Development", "Graphic Design", "Video Editing", "Writing"],
  sameAs: ["https://github.com/IRTIDEATH"],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
