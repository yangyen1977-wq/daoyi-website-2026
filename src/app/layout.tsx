import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { SiteHeader } from "@/components/site-header";
import { siteConfig, solutions, navItems } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const breadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": navItems.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `${siteConfig.url}${item.href === "/" ? "" : item.href}`
  }))
};

const serviceStructuredData = solutions.map((solution) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": solution.title,
  "serviceType": solution.title,
  "description": solution.description,
  "provider": {
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "email": siteConfig.email,
  },
  "areaServed": "Asia-Pacific",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0",
    "priceCurrency": "TWD"
  }
}));

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "email": siteConfig.email,
    "logo": `${siteConfig.url}/assets/daoyi-logo.png`,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": siteConfig.email,
        "areaServed": "TW",
        "availableLanguage": ["zh-Hant", "en"]
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.shortName,
    "url": siteConfig.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteConfig.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
  ...serviceStructuredData,
  breadcrumbList
];

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
    "品牌官網設計",
    "B2B 官網改版",
    "DPP 顧問",
    "AI 網站開發",
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </div>
      </body>
    </html>
  );
}
