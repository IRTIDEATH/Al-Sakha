import type { Metadata } from "next";
import { Geist_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/layouts/app-layout/wrapper";
import { Toaster } from "@/components/ui/sonner";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Irtideath | npc developer",
  description: "free to take a look.",
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
    "cat",
    "iya, when yh",
    "yasudahlah"
  ],
  authors: [
    {
      name: "IRTIDEATH",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="XRsOgHAwdi2D8vg2NvkPbl4v8fGIGvEEG6I9-g7Pduo"
        />
      </head>
      <body
        className={`${geistMono.variable} ${robotoMono.variable} font-geist font-normal text-foreground antialiased`}
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
