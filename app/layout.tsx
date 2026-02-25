import type { Metadata } from "next";
import { Geist_Mono, Roboto_Mono, Schoolbell } from "next/font/google";
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

const schoolBell = Schoolbell({
  weight: "400",
  variable: "--font-schoolbell",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irtideath.engineer"),
  title: {
    default: "Irtideath | gray, cozy as a cat taking a nap",
    template: "%s | Irtideath",
  },
  description:
    "just an ordinary npc and dumb in math. i never imagined myself in the field of programming, but now focusing on website development. unemployed and not in college. i hope to stick with this career in the future.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${robotoMono.variable} ${schoolBell.variable} font-geist font-normal text-foreground antialiased`}
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
