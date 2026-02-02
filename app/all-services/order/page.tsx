import type { Metadata } from "next";
import StepConsultation from "@/components/pages/all-service/order/step-consultation";
import StepContact from "@/components/pages/all-service/order/step-contact";
import StepSelect from "@/components/pages/all-service/order/step-select";
import TitleSection from "@/components/pages/all-service/order/title-section";

export const metadata: Metadata = {
  title: "How to Order",
  description:
    "A step-by-step guide on how to order my services. Select a service, contact me through your preferred channel, and we'll schedule a consultation.",
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
