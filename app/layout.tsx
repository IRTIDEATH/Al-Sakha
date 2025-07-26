import type { Metadata } from "next";
import { Roboto_Mono, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Wrapper from "@/components/ui/wrapper";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IrtiDeath",
  description: "Portfolio website of Al Sakha, npc developer",
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
    "npc",
    "al sakha",
    "irtideath",
    "vestia zeta",
    "cat",
  ],
  authors: [
    {
      name: "Al Sakha",
      url: "https://github.com/IRTIDEATH",
    },
  ],
  icons: {
    icon: "/irtilogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="XRsOgHAwdi2D8vg2NvkPbl4v8fGIGvEEG6I9-g7Pduo"
        />
      </head>
      <body
        className={`${geistMono.variable} ${robotoMono.variable} antialiased font-normal font-geist text-foreground`}
      >
        <Wrapper>{children}</Wrapper>
        <Toaster
          richColors
          toastOptions={{
            style: {
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
