import type { Metadata } from "next";
import StepConsultation from "@/components/pages/all-service/order/step-consultation";
import StepContact from "@/components/pages/all-service/order/step-contact";
import StepSelect from "@/components/pages/all-service/order/step-select";
import TitleSection from "@/components/pages/all-service/order/title-section";

export const metadata: Metadata = {
  title: "Irtideath | Order",
  description:
    "a step-by-step guide to ordering my services and getting your project started.",
  openGraph: {
    title: "Irtideath | Order",
    description: "a step-by-step guide to ordering my services.",
    url: "https://irtideath.engineer/all-services/order",
    images: ["/opengraph-image.png"],
    siteName: "irtideath.engineer",
    type: "website",
    locale: "en_US",
  },
};

export default function Page() {
  return (
    <main className="mt-12">
      <TitleSection />
      <StepSelect />
      <StepContact />
      <StepConsultation />
    </main>
  );
}
