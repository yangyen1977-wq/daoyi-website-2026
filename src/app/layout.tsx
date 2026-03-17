import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "道易科技 DaoYi Technology | 2026 Website Prototype",
  description:
    "DaoYi Technology 2026 website prototype focused on AI applications, knowledge platforms, digital product passports, and conversion-ready brand presentation.",
  keywords: [
    "道易科技",
    "DaoYi Technology",
    "AI 應用",
    "數位人文",
    "數位產品護照",
    "DPP",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
