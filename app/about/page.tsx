import type { Metadata } from "next";
import ColorPaletteSection from "@/components/pages/about/color-palette-section";
import InspirationSection from "@/components/pages/about/inspiration-section";
import TitleSection from "@/components/pages/about/title-section";
import { Divider } from "@/components/ui/divider";

export const metadata: Metadata = {
  title: "Irtideath | About",
  description:
    "this site, and all that it contains. embraces a philosophy of warm minimalism, inspired by the quiet comfort of a cat taking a nap.",
  openGraph: {
    title: "Irtideath | About",
    description: "this site, and all that it contains.",
    url: "https://irtideath.engineer/about",
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
      <Divider />
      <ColorPaletteSection />
      <Divider />
      <InspirationSection />
    </main>
  );
}
