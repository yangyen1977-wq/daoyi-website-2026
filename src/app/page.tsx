import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { siteConfig, homepageBenchmarks, homepageDecisionLayers, homepageModules, homepageSitemap, executiveScorecards } from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜Enterprise Revenue Website Rebuild",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Enterprise Revenue Website Rebuild",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const operatingPrinciples = [
  {
    title: "Position before promotion",
    detail: "先定義市場角色、買方問題與價值主張，再談行銷素材與流量承接。",
  },
  {
    title: "System before pages",
    detail: "首頁、方案頁、案例頁與 Contact 不是各做各的，而是同一套商務系統的四個節點。",
  },
  {
    title: "Proof before polish",
    detail: "先把證據、案例摘要與可信訊號建立起來，再談視覺細節與動畫表現。",
  },
  {
    title: "Momentum before formality",
    detail: "讓第一次接觸更低摩擦，但同時保留對採購、法遵與 NDA 友善的正式路徑。",
  },
];

const rebuildDeliverables = [
  {
    title: "Sitemap rebuilt around buyer jobs",
    detail: "整站導覽改以買方任務與決策順序為核心，不再照公司內部部門或能力列表編排。",
  },
  {
    title: "Homepage rebuilt as a commercial front door",
    detail: "首屏先處理 fit、價值、proof 與 CTA，而不是先從公司介紹或口號開始。",
  },
  {
    title: "Solution pages rebuilt as buying guides",
    detail: "把複雜能力轉成可理解的方案、邊界、流程、風險與進場方式。",
  },
  {
    title: "Evidence pages rebuilt as shortlist assets",
    detail: "案例頁先交付 executive summary、適用情境與 proof，而不是單純展示作品。",
  },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, serviceType: ["enterprise revenue website rebuild", "solution packaging", "evidence system"] },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Enterprise Revenue Website Rebuild</span>
            <div className="hero-intro-badge">不是延續舊站優化，是重新設計與重建整個商務前台</div>
            <h1>{siteConfig.heroTitle}</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/solutions" className="button-secondary button-large">看重建方案</Link>
            </div>

            <div className="hero-outcome-board">
              {[
                ["Positioning", "5 秒", "先讓高意圖買方判斷 fit 與價值。"],
                ["Proof", "Shortlist-ready", "案例先變證據，再變展示。"],
                ["Conversion", "3 條入口", "Quick Brief、Strategy Call、NDA 對應不同成熟度。"],
              ].map(([label, value, description]) => (
                <article key={label} className="hero-outcome-card">
                  <span className="mini-label accent">{label}</span>
                  <strong>{value}</strong>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-rebuild-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">2026 rebuild thesis</span>
              <strong>成熟的 B2B 官網不是更會介紹自己，而是更會幫買方快速理解價值、建立信任，並推進下一步。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>先重定義 category 與 buyer fit，不再沿用舊站自介邏輯。</li>
                <li>把 solution、proof 與 CTA 重新編排成 enterprise buying flow。</li>
                <li>讓主管、業務、PM 與採購都能從站上拿到自己需要的判斷材料。</li>
                <li>Contact 不只是一張表單，而是帶有節奏與邊界的啟動系統。</li>
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {operatingPrinciples.map((item) => (
                <article key={item.title} className="hero-panel-card stat-card">
                  <span className="mini-label">{item.title}</span>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Benchmark patterns" title="這輪重建採用成熟 B2B / SaaS / 設計公司官網的共同規律。" description="吸收的是品牌、UI、UX、轉換與案例呈現的高層邏輯，不是複製表面畫面。">
        <div className="card-grid three-up">
          {homepageBenchmarks.map((item) => (
            <article key={item.title} className="card trust-card">
              <span className="mini-label accent">{item.source}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.application}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Decision architecture" title="新版 IA 先服務商務決策，不再服務舊站慣性。" description="每一頁都被重新指定商務任務，避免所有頁面都在重複介紹同一件事。">
        <div className="card-grid four-up">
          {homepageDecisionLayers.map((item) => (
            <article key={item.label} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What got rebuilt" title="本輪固定重做的核心，不是字句微調，而是商用結構升級。">
        <div className="card-grid two-up rebuild-module-grid">
          {rebuildDeliverables.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage system" title="首頁模組改成真正能支撐買方判斷的前台結構。">
        <div className="card-grid three-up">
          {homepageModules.map((item) => (
            <article key={item.title} className="card trust-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.evidence}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="New sitemap" title="新版 sitemap 不是公司導覽表，而是 buyer journey map。">
        <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}>
          {homepageSitemap.map(([title, detail]) => (
            <article key={title} className="card process-card">
              <strong>{title}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Executive scorecard" title="這種官網成熟度，應該用商務標準檢查，而不是只看有沒有設計感。">
        <div className="card-grid four-up">
          {executiveScorecards.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Start the rebuild" title="如果你的網站已經跟不上現在的商業階段，可以直接從這裡開始。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
