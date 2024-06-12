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
  title: "GhostDAG - Leading the Future of Crypto Mining",
  description:
    "Explore GhostDAG, your premier destination for state-of-the-art crypto miners. Harness the power of cutting-edge technology to maximize your mining efficiency and profits.",
  icons: {
    icon: "/assets/images/logo.png",
  },
  generator: "Next.js",
  applicationName: "GhostDAG",
  referrer: "origin-when-cross-origin",
  keywords: [
    "GhostDAG",
    "crypto miners",
    "cryptocurrency mining",
    "mining hardware",
    "crypto mining solutions",
    "mining efficiency",
    "crypto technology",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    title: "GhostDAG - Leading the Future of Crypto Mining",
    description:
      "Explore GhostDAG, your premier destination for state-of-the-art crypto miners. Harness the power of cutting-edge technology to maximize your mining efficiency and profits.",
    url: "https://ghostdag.network",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostDAG - Leading the Future of Crypto Mining",
    description:
      "Explore GhostDAG, your premier destination for state-of-the-art crypto miners. Harness the power of cutting-edge technology to maximize your mining efficiency and profits.",
    images: [
      {
        url: "/assets/images/logo.png",
        alt: "GhostDAG",
      },
    ],
  },
  authors: [
    { name: "GhostDAG" },
    { name: "GhostDAG", url: "https://ghostdag.network" },
  ],
  creator: "GhostDAG",
  publisher: "GhostDAG",
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
