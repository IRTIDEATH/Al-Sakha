import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Instrument_Sans, Schoolbell } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/layouts/app-layout/wrapper";
import { Toaster } from "@/components/ui/sonner";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const schoolBell = Schoolbell({
  weight: "400",
  variable: "--font-schoolbell",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irtideath.engineer"),
  title: "Irtideath | npc",
  description:
    "gray, cozy as a cat taking a nap. just an ordinary npc and dumb in math, you can call me al sakha. i never imagined myself in the field of programming.",
  keywords: [
    "software engineer",
    "web developer",
    "coding",
    "programming",
    "web development",
    "personal projects",
    "portfolio",
    "portfolio website",
    "irtideath portfolio",
    "al sakha portfolio",
    "irtideath portfolio website",
    "al sakha portfolio website",
    "personal blog",
    "articles",
    "design engineer",
    "npc",
    "hanya angin lewat",
    "al sakha",
    "irtideath",
    "vestia zeta",
    "vestia",
    "zeta",
    "cat",
    "iya, when yh",
    "gray",
    "cozy",
    "yasudahlah",
  ],
  authors: [
    {
      name: "Irtideath",
      url: "https://github.com/IRTIDEATH",
    },
  ],
  openGraph: {
    title: "Irtideath | npc",
    description: "gray, cozy as a cat taking a nap.",
    url: "https://irtideath.engineer",
    siteName: "irtideath.engineer",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${GeistMono.variable} ${schoolBell.variable} ${instrumentSans.variable} font-geist font-normal text-foreground antialiased`}
      >
        <Wrapper>{children}</Wrapper>
        <Toaster
          richColors
          toastOptions={{
            style: {
              borderRadius: 0,
              background: "#2E2E2E",
              border: "none",
              color: "#F2F2F4",
              fontFamily: "var(--font-geist-mono)",
              padding: "8px 12px",
            },
          }}
        />
      </body>
    </html>
  );
}
