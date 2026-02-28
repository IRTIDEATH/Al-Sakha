import type { Metadata } from "next";
import {
  Geist_Mono,
  Roboto_Mono,
  Schoolbell,
  Source_Serif_4,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Wrapper from "@/components/layouts/app-layout/wrapper";
import { Toaster } from "@/components/ui/sonner";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
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

const satoshi = localFont({
  src: [
    {
      path: "../public/font/satoshi/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../public/font/satoshi/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irtideath.engineer"),
  title: "Irtideath | npc",
  description: "gray, cozy as a cat taking a nap.",
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
    "article",
    "design engineer",
    "npc",
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
        className={`${geistMono.variable} ${robotoMono.variable} ${schoolBell.variable} ${sourceSerif.variable} ${satoshi.variable} font-geist font-normal text-foreground antialiased`}
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
            },
          }}
        />
      </body>
    </html>
  );
}
