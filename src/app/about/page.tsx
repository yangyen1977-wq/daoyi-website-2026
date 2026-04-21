import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "買方情境",
  description: "哪些 B2B、科技、製造與知識型團隊，最需要用 enterprise rebuild 思維重做官網。",
  alternates: { canonical: "/about" },
};

const fitCards = [
  {
    title: "能力很多，但網站像資訊倉庫",
    detail: "買方看完還是不知道你真正賣的是什麼，也不知道該不該往下談。",
  },
  {
    title: "案例有料，但不能直接轉傳",
    detail: "主管、業務與採購都需要能快速理解的 proof format，不只是作品圖。",
  },
  {
    title: "內部成熟度高，對外敘事卻還停在舊版本",
    detail: "當商業階段變了，網站也要跟著重定 category、頁面角色與 CTA。",
  },
];

const personas = [
  ["B2B SaaS / 平台", "把產品能力、導入方式與 enterprise 信任訊號講成熟。"],
  ["製造 / 工業 / 出口", "把驗證、供應鏈與合作方式整理成買方易懂的說服路徑。"],
  ["AI / 顧問 / 自動化", "把抽象能力翻成可提案、可採購、可驗收的 framing。"],
  ["研究 / 永續 / 知識平台", "在高內容密度下維持清晰、權威與可引用。"],
];

const operatingModel = [
  { step: "01", title: "Reframe", detail: "先重定義市場定位、買方問題與官網角色。" },
  { step: "02", title: "Restructure", detail: "重做 sitemap、首頁模組與內頁任務。" },
  { step: "03", title: "Prove", detail: "把案例與 proof 寫成可複述的商務材料。" },
  { step: "04", title: "Convert", detail: "把 Contact flow 做成低摩擦啟動入口。" },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Positioning</span>
          <h1>我們把官網看成 enterprise decision interface，不是公司簡介。</h1>
          <p>道易科技協助高複雜度團隊，把品牌、方案、案例、資料與轉換路徑重建成能支撐 shortlist、提案與採購前進的商務前台。</p>
        </div>
      </section>

      <Section eyebrow="Fit signals" title="如果你有這些狀況，通常就不是微調能解決。">
        <div className="card-grid three-up">
          {fitCards.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Who it fits" title="這些團隊最適合用重建方式，而不是持續優化。">
        <div className="card-grid four-up">
          {personas.map(([title, detail]) => (
            <article key={title} className="card rebuild-module-card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Working model" title="2026 版本的合作方式，核心是先重設，再落地。">
        <div className="card-grid four-up">
          {operatingModel.map((item) => (
            <article key={item.step} className="card process-card">
              <span className="step-index">{item.step}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why now" title="如果網站已經跟不上業務階段，現在就值得開始。">
        <div className="feature-surface two-column">
          <div>
            <h3>適合現在談的情況</h3>
            <p>你已經有能力與案例，但外部敘事還不夠成熟、可信、好理解。</p>
          </div>
          <div>
            <h3>最快的起手方式</h3>
            <p><Link href="/contact" className="button-primary inline-button">前往啟動重建</Link></p>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "AboutPage", name: "DaoYi positioning", url: `${siteConfig.url}/about` }) }} />
    </main>
  );
}
