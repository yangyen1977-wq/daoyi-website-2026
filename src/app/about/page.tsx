import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig, homepageDecisionLayers, homepageRolePaths, rebuildPrinciples } from "@/lib/site";

export const metadata: Metadata = {
  title: "重建方法",
  description: "道易科技如何用重新設計與重建思維，重做 B2B 官網的品牌、架構、證據與轉換。",
  alternates: { canonical: "/about" },
};

const fitCards = [
  { title: "能力很多，但網站像資訊倉庫", detail: "買方看完還是不知道你真正賣的是什麼，也不知道該不該往下談。" },
  { title: "案例有料，但不能直接轉傳", detail: "主管、業務與採購需要的是可快速理解的 proof format，而不是作品牆。" },
  { title: "內部成熟度已升級，對外敘事卻還停在舊版本", detail: "當商業階段變了，網站也要跟著重定 category、頁面角色與 CTA。" },
];

const operatingModel = [
  { label: "01", title: "Reframe", detail: "先重定 category、buyer fit、競爭脈絡與為什麼現在值得談。" },
  { label: "02", title: "Re-architect", detail: "重排 sitemap、首頁與內頁角色，讓網站開始服務購買流程。" },
  { label: "03", title: "Proof", detail: "把案例、流程、資料與 trust content 做成更可引用的外部證據。" },
  { label: "04", title: "Launch", detail: "用更低摩擦的 contact path 與 sprint 方式，把對話真正啟動起來。" },
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

      <Section eyebrow="Fit signals" title="如果你有這些狀況，通常就不是微調能解。">
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
          {rebuildPrinciples.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Decision layers" title="成熟的官網，應該先讓不同角色快速找到自己的判斷入口。">
        <div className="card-grid four-up">
          {homepageDecisionLayers.map((item) => (
            <article key={item.label} className="card decision-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Who it fits" title="這些團隊最適合用重建方式，而不是持續優化。">
        <div className="card-grid four-up">
          {homepageRolePaths.map((item) => (
            <article key={item.role} className="card rebuild-module-card">
              <h3>{item.role}</h3>
              <p>{item.ask}</p>
              <strong>{item.answer}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Operating model" title="2026 版本的合作方式，核心不是修補，而是先重設商務結構，再快速落地。">
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

      <Section eyebrow="Why now" title="如果網站已經跟不上業務階段，現在就值得直接重建，不值得再拖在舊結構上。">
        <div className="feature-surface two-column">
          <div>
            <h3>適合現在談的情況</h3>
            <p>你已經有能力與案例，但外部敘事還不夠成熟、可信、好理解，導致高意圖流量與介紹流量沒有真正發揮價值。</p>
          </div>
          <div>
            <h3>下一步</h3>
            <p><Link href="/contact" className="button-primary inline-button">前往啟動重建</Link></p>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "AboutPage", name: "DaoYi positioning", url: `${siteConfig.url}/about` }) }} />
    </main>
  );
}
