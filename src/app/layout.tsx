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
    default: `${siteConfig.name} | B2B 官網改版、AI 導入、知識平台、DPP 與資料流程整合`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
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
    "製造業官網改版",
    "B2B SaaS 網站設計",
    "DPP 顧問",
    "AI 網站開發",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
    languages: {
      "zh-TW": "/",
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteConfig.url,
    title: `${siteConfig.name} | B2B 官網改版、AI 導入、知識平台、DPP 與資料流程整合`,
    description: "給需要同時處理品牌主張、案例證據、RWD 體驗、AI 導入與 DPP / Traceability 的 B2B 團隊：先看已交付樣態、shortlist 依據、回覆節奏、Quick Brief 與低摩擦 contact 起點。", 
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/daoyi-logo.png",
        width: 512,
        height: 512,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | B2B 官網、AI、知識平台與 DPP 數位解決方案`,
    description: "把品牌主張、案例證據、資料流程、RWD 與 Contact 轉換整成同一套可交付方案。",
    images: ["/assets/daoyi-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "theme-color": "#08111f",
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={geistSans.variable}>
        <a href="#main-content" className="skip-link">跳到主要內容</a>
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
