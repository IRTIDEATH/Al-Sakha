import type { Metadata } from "next";
import ServicesGridSection from "@/components/pages/all-service/services-grid-section";
import TitleSection from "@/components/pages/all-service/title-section";

export const metadata: Metadata = {
  title: "Irtideath | Services",
  description:
    "available for freelance projects—turning ideas into interfaces that feel alive: calm in motion, clear in purpose, and memorable in detail.",
  openGraph: {
    title: "Irtideath | Services",
    description: "available for freelance projects",
    url: "https://irtideath.engineer/all-services",
    images: ["/opengraph-image.png"],
  },
};

export default function Page() {
  return (
    <main className="mt-12">
      <TitleSection />
      <ServicesGridSection />
    </main>
  );
}
