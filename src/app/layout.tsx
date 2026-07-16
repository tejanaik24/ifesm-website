import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IFESM | Cinematic Industrial Fire & Safety Management",
  description: "Established in 2001, IFESM is a unit of SSB Institute of Higher Studies and an ISO 9001:2015 certified leader in Fire & Industrial Safety training, audits, and turnkey systems. Serving over 55+ MNCs and government organisations.",
  keywords: "IFESM, NIFS Group, Fire Safety, Industrial Safety, Safety Training, Safety Audit, HSE, Visakhapatnam, safety management, B2B safety services",
  authors: [{ name: "IFESM" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#ffffff] text-[#1a1a1a]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
