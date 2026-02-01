import type { Metadata } from "next";
import ServicesGridSection from "@/components/pages/all-service/services-grid-section";
import TitleSection from "@/components/pages/all-service/title-section";

export const metadata: Metadata = {
  title: "Irtideath | Services",
  description:
    "available for freelance work. web development services to bring your ideas to life.",
};

export default function Page() {
  return (
    <main className="mt-12">
      <TitleSection />
      <ServicesGridSection />
    </main>
  );
}
