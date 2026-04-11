import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "品牌策略",
  description: "道易科技 2026 品牌策略頁，說清楚我們如何把複雜 B2B 能力重建成成熟商務網站。",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "道易科技品牌策略",
    description: "把品牌、證據、流程與轉換整成可成交的商用官網系統。",
    url: `${siteConfig.url}/about`,
  },
};

const positioningCards = [
  {
    title: "不是單純網站公司",
    detail: "真正的工作不是做頁面，而是把複雜能力翻成買方願意往下談的商業敘事。",
  },
  {
    title: "不是抽象顧問話術",
    detail: "我們會把定位轉成 sitemap、模組、案例格式與 contact flow。",
  },
  {
    title: "是能處理複雜型 B2B 專案的數位夥伴",
    detail: "特別適合品牌、資料、流程、合規與對外說明都很重要的案子。",
  },
];

const workingModel = [
  ["Reframe", "先重定義市場定位、買方問題與網站角色。"],
  ["Restructure", "重做 sitemap、首頁與內頁模組。"],
  ["Prove", "把案例、輸出與方法寫成可複述的 proof。"],
  ["Convert", "把 Contact flow 做成真正的啟動入口。"],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Positioning</span>
          <h1>我們把官網看成決策介面，不是公司簡介。這是整個重建的起點。</h1>
          <p>道易科技的定位不是「我們也會網站、也會 AI」，而是把品牌、資料、流程與對外溝通整成能成交、能推動專案的系統。</p>
        </div>
      </section>

      <Section eyebrow="Brand position" title="新的品牌主張，要讓對的人一眼知道這是不是自己的案子。">
        <div className="card-grid three-up">
          {positioningCards.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Working model" title="2026 版本的合作方式，核心是重設，不是修補。">
        <div className="card-grid four-up">
          {workingModel.map(([step, detail]) => (
            <article key={step} className="card process-card">
              <span className="step-index">{step}</span>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why now" title="如果你要重做官網、案例系統，或把 AI / DPP 講得更成熟，現在就值得開始。">
        <div className="feature-surface two-column">
          <div>
            <h3>適合現在談的情況</h3>
            <p>網站已經跟不上業務階段，或內部能力很強，但對外說法還不夠成熟、可信、好理解。</p>
          </div>
          <div>
            <h3>最快的起手方式</h3>
            <p><Link href="/contact" className="button-primary inline-button">前往啟動專案</Link></p>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "AboutPage", name: "DaoYi positioning", url: `${siteConfig.url}/about` }) }} />
    </main>
  );
}
