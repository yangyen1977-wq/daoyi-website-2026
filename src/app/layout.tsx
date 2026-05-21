import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@/components/google-analytics";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { SiteHeader } from "@/components/site-header";
import { siteConfig, solutions, navItems } from "@/lib/site";
import { absoluteUrl, socialPreviewImage } from "@/lib/metadata";
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
    item: absoluteUrl(item.href)
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
    "serviceType": ["數據信任鏈", "DPP 數位產品護照", "ESG 高效稽核", "AI-Ontology 知識平台", "AIoT 回收履歷"],
    "knowsAbout": ["Data Trust Chain", "Digital Product Passport", "ESG audit", "Ontology", "Merkle Tree", "IPFS", "TSA timestamp"],
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
      "name": "Request trust data project brief",
      "target": absoluteUrl("/#quick-brief")
    }
  },
  ...serviceStructuredData,
  breadcrumbList
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7fbfc",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | 數據信任鏈、DPP、ESG 稽核與 AI-Ontology 知識平台`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: ["道易科技", "DaoYi Technology", "數據信任鏈", "DPP", "數位產品護照", "ESG 稽核", "Ontology", "Merkle Tree", "IPFS", "知識平台"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: siteConfig.url, languages: { "zh-TW": siteConfig.url } },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteConfig.url,
    title: `${siteConfig.name} | 數據信任鏈、DPP、ESG 稽核與 AI-Ontology 知識平台`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    alternateLocale: ["zh_TW", "en_US"],
    images: [socialPreviewImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | 數據信任鏈、DPP、ESG 稽核與 AI-Ontology 知識平台`,
    description: siteConfig.description,
    images: [socialPreviewImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "technology",
  icons: { icon: `${siteConfig.url}/favicon.ico`, shortcut: `${siteConfig.url}/favicon.ico`, apple: `${siteConfig.url}/favicon.ico` },
  other: { "theme-color": "#f7fbfc" },
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
          <MobileStickyCTA />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
          <Suspense fallback={null}>
            <GoogleAnalytics measurementId={siteConfig.gaMeasurementId} />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
