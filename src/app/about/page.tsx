import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "重建觀點",
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
    detail: "主管、業務與採購需要的是可快速理解的 proof format，而不是作品牆。",
  },
  {
    title: "內部成熟度已升級，對外敘事卻還停在舊版本",
    detail: "當商業階段變了，網站也要跟著重定 category、頁面角色與 CTA。",
  },
];

const principles = [
  {
    title: "Outcome before introduction",
    detail: "首頁前 1 到 2 屏先講清楚 buyer fit、商業結果與下一步，再補公司介紹。",
  },
  {
    title: "One page, one decision job",
    detail: "首頁負責 shortlist 判斷，方案頁負責購買理解，案例頁負責 proof，Contact 頁負責啟動。",
  },
  {
    title: "Evidence must travel",
    detail: "案例摘要要能被主管、業務與採購直接複述、轉傳與引用。",
  },
  {
    title: "Conversion is designed",
    detail: "第一次接洽的 friction、回覆節奏與安全感，也屬於官網系統的一部分。",
  },
];

const personas = [
  ["B2B SaaS / 平台", "把產品能力、導入方式、角色權限與 enterprise 信任訊號講成熟。"],
  ["製造 / 工業 / 出口", "把驗證、產能、供應鏈與合作方式整理成買方易懂的說服路徑。"],
  ["AI / 顧問 / 自動化", "把抽象能力翻成可提案、可採購、可驗收的 offer framing。"],
  ["研究 / 永續 / 知識平台", "在高內容密度下維持清晰、權威、可引用與可信任。"],
];

const operatingModel = [
  {
    label: "01",
    title: "Reframe",
    detail: "先重定 category、buyer fit、競爭脈絡與為什麼現在值得談。",
  },
  {
    label: "02",
    title: "Re-architect",
    detail: "重排 sitemap、首頁與內頁角色，讓網站開始服務購買流程。",
  },
  {
    label: "03",
    title: "Proof",
    detail: "把案例、流程、資料與 trust content 做成更可引用的外部證據。",
  },
  {
    label: "04",
    title: "Launch",
    detail: "用更低摩擦的 contact path 與 sprint 方式，把對話真正啟動起來。",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Rebuild Thesis</span>
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

      <Section eyebrow="Principles" title="這次重建遵循的是成熟 B2B 商務站的底層原則。">
        <div className="card-grid four-up">
          {principles.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
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

      <Section eyebrow="Operating model" title="2026 版本的合作方式，核心是先重設，再落地。">
        <div className="card-grid four-up">
          {operatingModel.map((item) => (
            <article key={item.label} className="card process-card">
              <span className="step-index">{item.label}</span>
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
            <p>你已經有能力與案例，但外部敘事還不夠成熟、可信、好理解，導致高意圖流量與介紹流量沒有真正發揮價值。</p>
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
