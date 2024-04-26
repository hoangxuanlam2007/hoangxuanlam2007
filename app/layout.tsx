import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Vercel
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://hoangxuanlam2007.vercel.app/"
  ),
  title: "Xuân Lâm",
  description: "Portfolio website using Next.js by Lâm",
  keywords: ["Coding", "Website", "Developer", "Xuân Lâm"],
  openGraph: {
    title: "Xuân Lâm",
    description: "Portfolio website using Next.js by Lâm",
    images: "/OpenGraph.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <StarsCanvas />
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
