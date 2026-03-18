import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI・知識平台・DPP 數位解決方案`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "道易科技",
    "DaoYi Technology",
    "AI 應用",
    "知識平台",
    "數位產品護照",
    "DPP",
    "數位人文",
    "系統整合",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteConfig.url,
    title: `${siteConfig.name} | AI・知識平台・DPP 數位解決方案`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI・知識平台・DPP 數位解決方案`,
    description: siteConfig.description,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={geistSans.variable}>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
          <MobileStickyCTA />
        </div>
      </body>
    </html>
  );
}
