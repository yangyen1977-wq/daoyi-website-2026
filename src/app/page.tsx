import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { siteConfig, homepageBenchmarks, homepageDecisionLayers, homepageModules, homepageSitemap, executiveScorecards } from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜Growth Website System Rebuild",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Growth Website System Rebuild",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const heroSignals = [
  {
    label: "For",
    value: "B2B / 科技 / SaaS / 製造 / AI 團隊",
    detail: "適合能力成熟、案型複雜、需要更成熟商務前台的公司。",
  },
  {
    label: "Rebuild",
    value: "品牌主張 × Offer × 案例證據",
    detail: "不只重寫首頁，而是重做整套商務敘事與 decision flow。",
  },
  {
    label: "Start",
    value: "Brief / Workshop / NDA",
    detail: "依專案成熟度與敏感度，提供不同 friction 的起手方式。",
  },
];

const homepageBlueprint = [
  {
    title: "Hero = category clarity + proof + CTA",
    detail: "首屏先讓買方判斷『你是不是正在解我這種問題的人』，而不是先介紹公司歷史。",
  },
  {
    title: "Offer = three productized paths",
    detail: "把網站重建、offer packaging、proof conversion 做成三條清楚路徑，降低理解成本。",
  },
  {
    title: "Proof = executive summary first",
    detail: "案例先給 context、shift、evidence、fit，讓主管與業務可以直接轉傳。",
  },
  {
    title: "CTA = ladder, not single button",
    detail: "同時保留 Quick Brief、決策工作坊與 NDA 路徑，對應不同購買成熟度。",
  },
];

const rebuildOutcomes = [
  ["舊站思維", "介紹自己、平均配字、頁面彼此重複"],
  ["新版思維", "服務買方判斷、推進 shortlist、降低啟動阻力"],
  ["首頁任務", "完成 buyer fit、價值理解、信任建立、下一步引導"],
  ["內頁任務", "Offer 頁負責購買理解，案例頁負責 proof，Contact 頁負責啟動"],
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, serviceType: ["growth website rebuild", "offer architecture", "proof and conversion system"] },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Growth Website Rebuild</span>
            <div className="hero-intro-badge">把公司網站重建成真正能推進商機的商務介面</div>
            <h1>{siteConfig.heroTitle}</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/solutions" className="button-secondary button-large">看 Offer 架構</Link>
            </div>

            <div className="hero-outcome-board">
              {heroSignals.map((item) => (
                <article key={item.label} className="hero-outcome-card">
                  <span className="mini-label accent">{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-rebuild-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">2026 rebuild thesis</span>
              <strong>成熟的 B2B 官網，不是更會介紹自己，而是更會幫買方快速理解價值、建立信任、形成內部共識，並走向下一步。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>先重定 category 與 buyer fit，再談視覺與文案。</li>
                <li>把首頁、Offer、案例、Contact 排成可成交的商務路徑。</li>
                <li>讓主管、業務、PM 與採購都能在站上拿到自己需要的判斷材料。</li>
                <li>案例先變成 proof asset，再變成展示內容。</li>
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {homepageBlueprint.map((item) => (
                <article key={item.title} className="hero-panel-card stat-card">
                  <span className="mini-label">Blueprint</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Benchmark patterns" title="這輪重建吸收的是高表現 B2B / SaaS / 設計公司站點的上層規律。" description="不是複製畫面，而是吸收它們怎麼處理品牌主張、掃讀效率、proof 與轉換。">
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

      <Section eyebrow="Rebuild architecture" title="新版 IA 先服務商務決策，不再服務舊站慣性。" description="每一頁都被重新指定任務，避免整站都在重複介紹同一件事。">
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

      <Section eyebrow="Homepage blueprint" title="首頁被重做成像商務決策 deck，而不是公司簡介。">
        <div className="card-grid two-up rebuild-module-grid">
          {homepageModules.concat([
            { label: "Conversion ladder", title: "CTA 不只一個按鈕，而是依成熟度分層的啟動梯", evidence: "讓初步探索、內部討論、敏感案型都能找到對應入口。" },
          ]).map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.evidence}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Page roles" title="新版 sitemap 不是公司導覽表，而是 buyer journey map。">
        <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}>
          {homepageSitemap.map(([title, detail]) => (
            <article key={title} className="card process-card">
              <strong>{title}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="From old to new" title="這次不是把舊站 polish 得更漂亮，而是把網站角色整個換掉。">
        <div className="card-grid four-up">
          {rebuildOutcomes.map(([title, detail]) => (
            <article key={title} className="card decision-card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Executive scorecard" title="成熟官網應該用商務標準檢查，而不是只看設計感。">
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
