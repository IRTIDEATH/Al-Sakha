import type { Metadata } from "next";
import { Roboto_Mono, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import Banner from "@/components/ui/banner";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Sakha | just random npc",
  description: "This is my personal portfolio website",
  keywords: [
    "software engineer",
    "web developer",
    "coding",
    "programming",
    "web development",
    "personal projects",
    "portfolio",
    "irtideath portfolio",
    "al sakha portfolio",
    "irtideath portfolio website",
    "al sakha portfolio website",
    "npc",
    "al sakha",
    "irtideath",
  ],
  authors: [
    {
      name: "Al Sakha",
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
      <head>
        <meta
          name="google-site-verification"
          content="XRsOgHAwdi2D8vg2NvkPbl4v8fGIGvEEG6I9-g7Pduo"
        />
      </head>
      <body
        className={`${geistMono.variable} ${robotoMono.variable} antialiased font-normal font-geist text-foreground`}
      >
        <Banner />
        <div className="mx-auto w-full max-w-[1024px] px-7">
          <Navbar />
          {children}
          <Footer />
        </div>
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
