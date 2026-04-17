import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import {
  executiveScorecards,
  heroClarityChecklist,
  heroClients,
  heroContactLadder,
  heroFitSignals,
  heroProofs,
  homepageBenchmarks,
  homepageDecisionLayers,
  homepageModules,
  homepageSitemap,
  siteConfig,
  stats,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜Commercial Website Rebuild",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Commercial Website Rebuild",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const whyRebuildNow = [
  {
    title: "AI 與複雜能力越多，越需要 category clarity",
    detail: "如果外部第一眼看不懂你真正賣的是什麼，能力越多反而越難成交。",
  },
  {
    title: "成熟 B2B 網站賣的是決策效率，不是內容數量",
    detail: "高品質官網的價值，在於讓對的人更快判斷 fit、風險與下一步。",
  },
  {
    title: "案例與 proof 是高單價對話的加速器",
    detail: "作品牆只能展示，evidence system 才能幫主管、業務與採購內部推動。",
  },
];

const outcomePanels = [
  {
    title: "Brand thesis",
    detail: "把『我們是誰』改成『我們替誰解什麼高價值問題，怎麼讓決策更快往前走』。",
  },
  {
    title: "Decision architecture",
    detail: "重排首頁、內頁與 CTA 的任務，讓整站像 buying flow，而不是平均分攤內容。",
  },
  {
    title: "Proof system",
    detail: "案例先做成可轉傳、可引用、可被主管與採購理解的決策材料。",
  },
];

const launchSequence = [
  {
    step: "01",
    title: "Quick scan",
    detail: "先指出現況最卡的是定位、IA、案例還是啟動流程。",
  },
  {
    step: "02",
    title: "Rebuild blueprint",
    detail: "直接重做 sitemap、首頁切口、內頁角色與第一輪內容模組。",
  },
  {
    step: "03",
    title: "Sprint build",
    detail: "把新架構落進正式網站，不停留在策略文件。",
  },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, serviceType: ["B2B website rebuild", "capability framing", "trust and evidence architecture"], areaServed: "Asia-Pacific" },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Commercial Website Rebuild</span>
            <div className="hero-intro-badge">這不是舊站優化，而是重新設計與重建</div>
            <h1>{siteConfig.heroTitle}</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/solutions" className="button-secondary button-large">看重建藍圖</Link>
            </div>

            <div className="hero-outcome-board">
              {heroProofs.map((item) => (
                <article key={item.label} className="hero-outcome-card">
                  <span className="mini-label accent">{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-rebuild-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">Who this is for</span>
              <strong>適合把網站當成商務前台、提案介面、shortlist 工具與信任基礎設施的高複雜度 B2B 團隊。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                {heroFitSignals.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {stats.map((item) => (
                <article key={item.label} className="hero-panel-card stat-card">
                  <span className="mini-label">{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.label === "Buyer clarity" ? "首屏先處理是不是你的案子。" : item.label === "Decision stack" ? "品牌、架構、案例與 CTA 一起重做。" : item.label === "Entry paths" ? "不同成熟度有不同開始方式。" : "案例先像證據系統，再像展示內容。"}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="5-second test" title="成熟 B2B 首頁，先讓買方完成三件事。" description="快速判斷 fit、理解你真正賣的是什麼、知道下一步如何低風險開始。">
        <div className="card-grid three-up">
          {heroClarityChecklist.map((item) => (
            <article key={item.label} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.answer}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Research lens" title="本輪重建借鏡成熟 B2B / SaaS / 設計公司官網的高階規律。" description="不是模仿單一視覺，而是吸收真正提升商務表現的品牌、UI、UX、proof 與 conversion 結構。">
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

      <Section eyebrow="Buyer fit" title="不是所有團隊都需要同一種說法，網站入口也不該只有一個。" description="新版官網要讓不同買方角色快速找到自己的情境，而不是先被迫讀完公司介紹。">
        <div className="card-grid four-up">
          {heroClients.map((item) => (
            <article key={item.name} className="card trust-card">
              <h3>{item.name}</h3>
              <p>{item.context}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why rebuild now" title="2026 的官網，應該像決策介面，不該只是更新過的舊網站。" description="這一輪不是延伸舊站，而是重做 category、頁面角色、證據形式與轉換節奏。">
        <div className="card-grid three-up">
          {whyRebuildNow.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Decision architecture" title="這一輪重建，核心是把整站做成更成熟的商業決策系統。" description="不是重新修文案，而是一起重做品牌主張、頁面分工、proof 呈現與轉換節奏。">
        <div className="card-grid two-up rebuild-module-grid">
          {homepageDecisionLayers.map((item) => (
            <article key={item.label} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="New sitemap" title="新版網站不是頁面變多，而是頁面角色真正重新分工。" description="每一頁都服務 buying flow，不再只是平均分攤內容。">
        <div className="card-grid three-up">
          {homepageSitemap.map(([title, detail]) => (
            <article key={title} className="card trust-card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage modules" title="首頁依 buying committee 的閱讀順序重排。" description="先有商業清晰度，再有重建藍圖與案例證據，最後接低摩擦轉換。">
        <div className="card-grid two-up rebuild-module-grid">
          {homepageModules.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.evidence}</p>
            </article>
          ))}
          <article className="card rebuild-module-card">
            <span className="mini-label accent">Conversion ladder</span>
            <h3>讓不同成熟度的買方，都找得到適合自己的開始方式</h3>
            <ul className="bullet-list compact">
              {heroContactLadder.map((item) => (
                <li key={item.label}><strong>{item.title}</strong>，{item.detail}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section eyebrow="What gets rebuilt" title="我們重做的不只是頁面，而是網站背後的商務邏輯。" description="品牌主張、決策架構與案例證據要一起成立，網站才會更像成熟商用版。">
        <div className="card-grid three-up">
          {outcomePanels.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Commercial scorecard" title="重建後的網站，至少要通過這四個商用標準。" description="這些標準來自高表現 B2B / SaaS 官網常見的共同結構。">
        <div className="card-grid four-up">
          {executiveScorecards.map((item) => (
            <article key={item.title} className="card process-card">
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Launch sequence" title="這次重建不是停在策略，而是直接走向網站落地。" description="每次合作都先把最阻礙成交的那一層拆出來，先做成可上線的版本。">
        <div className="card-grid three-up">
          {launchSequence.map((item) => (
            <article key={item.step} className="card process-card">
              <span className="step-index">{item.step}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Quick Brief" title="先用最低摩擦的方式，啟動這次重建。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
