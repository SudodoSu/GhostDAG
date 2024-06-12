import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navbar from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ZkSync.ai - Powering the Future with AI",
  description:
    "Discover the power of ZkSync.ai, the ultimate platform fueled by AI innovation, reshaping the digital finance landscape. Start building tomorrow's crypto solutions today.",
  icons: {
    icon: "/assets/images/logo.png",
  },
  generator: "Next.js",
  applicationName: "ZkSync.ai",
  referrer: "origin-when-cross-origin",
  keywords: [
    "ZkSync.ai",
    "cryptocurrency platform",
    "AI-powered solutions",
    "crypto innovation",
    "digital finance",
    "AI-driven technology",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    title: "ZkSync.ai - Powering the Future with AI",
    description:
      "Discover the power of ZkSync.ai, the ultimate platform fueled by AI innovation, reshaping the digital finance landscape. Start building tomorrow's crypto solutions today.",
    url: "https://zksync.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZkSync.ai - Powering the Future with AI",
    description:
      "Discover the power of ZkSync.ai, the ultimate platform fueled by AI innovation, reshaping the digital finance landscape. Start building tomorrow's crypto solutions today.",
    images: [
      {
        url: "/assets/images/logo.png",
        alt: "ZkSync.ai",
      },
    ],
  },
  authors: [
    { name: "ZkSync.ai" },
    { name: "ZkSync.ai", url: "https://zksync.ai" },
  ],
  creator: "ZkSync.ai",
  publisher: "ZkSync.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <html lang={locale}>
        <body className={`${inter.variable} font-inter`}>
          <AppRouterCacheProvider>
            <Navbar />
            {children}
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
