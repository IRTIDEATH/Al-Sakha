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
    siteName: "irtideath.engineer",
    type: "website",
    locale: "en_US",
  },
  keywords: [
    "hire irtideath",
    "irtideath service",
    "irtideath services",
    "irtideath all services",
    "freelance web developer",
    "freelance web designer",
    "freelance software engineer",
    "freelance design engineer",
    "web development services",
    "hire frontend developer",
    "design engineering services",
    "creative web development",
    "ui engineering",
    "interactive interfaces",
    "custom website development",
  ],
};

export default function Page() {
  return (
    <main className="mt-12">
      <TitleSection />
      <ServicesGridSection />
    </main>
  );
}
