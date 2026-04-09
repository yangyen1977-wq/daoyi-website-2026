import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { DesktopQuickContact } from "@/components/desktop-quick-contact";
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
    "sameAs": ["https://daoyidh.com"],
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
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description,
    "email": siteConfig.email,
    "telephone": siteConfig.phone,
    "areaServed": ["TW", "Asia-Pacific"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tainan / Taipei",
      "addressCountry": "TW"
    },
    "serviceType": ["B2B 官網改版", "AI 導入", "知識平台建置", "DPP / Traceability"],
    "knowsAbout": ["B2B website redesign", "AI workflow", "knowledge platform", "digital product passport"],
    "availableLanguage": ["zh-Hant", "en"]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.shortName,
    "url": siteConfig.url,
    "inLanguage": ["zh-Hant", "en"],
    "potentialAction": {
      "@type": "ContactAction",
      "name": "Request project brief",
      "target": `${siteConfig.url}/#quick-brief`
    }
  },
  ...serviceStructuredData,
  breadcrumbList
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08111f",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | B2B 官網改版、AI 導入、知識平台、DPP 與資料流程整合`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: "道易科技以重新設計與重建思維，協助 B2B、科技、製造與研究型團隊，把品牌主張、案例證據、資料流程、RWD / 手機 CTA 與 Contact 轉換整成同一套可交付系統。",
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: ["道易科技", "DaoYi Technology", "B2B 官網改版", "AI 導入", "知識平台", "DPP", "數位產品護照"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/", languages: { "zh-TW": "/" } },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteConfig.url,
    title: `${siteConfig.name} | B2B 官網改版、AI 導入、知識平台、DPP 與資料流程整合`,
    description: "把舊站持續優化，改成重新設計與重建。",
    siteName: siteConfig.name,
    alternateLocale: ["zh_TW", "en_US"],
    images: [{ url: "/assets/daoyi-logo.png", width: 512, height: 512, alt: `${siteConfig.name} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | B2B 官網、AI、知識平台與 DPP 數位解決方案`,
    description: "把品牌主張、案例證據、資料流程、RWD / 手機 CTA 與 Contact 轉換整成同一套可交付方案。",
    images: ["/assets/daoyi-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "technology",
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/favicon.ico" },
  other: { "theme-color": "#08111f" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body className={geistSans.variable}>
        <a href="#main-content" className="skip-link">跳到主要內容</a>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
          <DesktopQuickContact />
          <MobileStickyCTA />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </div>
      </body>
    </html>
  );
}
