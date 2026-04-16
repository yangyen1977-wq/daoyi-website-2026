import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import {
  heroActionSignals,
  heroClients,
  heroClarityChecklist,
  heroContactLadder,
  heroFitSignals,
  heroPreviews,
  heroProofs,
  homepageCompactCaseEvidence,
  siteConfig,
  stats,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜Revenue-grade Website Rebuild",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Revenue-grade Website Rebuild",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, serviceType: ["B2B website rebuild", "offer framing", "trust UX"], areaServed: "Asia-Pacific" },
  ],
};

const sitemapRebuild = [
  ["首頁", "先回答這是不是值得談的案子，並讓買方知道下一步怎麼開始。"],
  ["適合對象", "幫不同行業、不同決策角色快速判斷 fit、風險與購買時機。"],
  ["重建藍圖", "把 Website Rebuild、Capability Framing、Trust Architecture 做成三條清楚起手式。"],
  ["案例系統", "案例先作為可引用證據，再作為作品展示，支援 shortlist 與提案。"],
  ["啟動方式", "用 Quick Brief、Strategy Call、Email / NDA 降低開始阻力與不確定性。"],
];

const decisionSystem = [
  { label: "Layer 01", title: "Category clarity", detail: "首屏先講替誰解什麼高價值問題，不把訪客丟進自我介紹。" },
  { label: "Layer 02", title: "Page roles", detail: "每一頁只負責一種決策問題，讓 buying flow 更快往前。" },
  { label: "Layer 03", title: "Evidence assets", detail: "案例與 proof 模組先支援轉傳與 shortlist，再延伸到完整案例。" },
  { label: "Layer 04", title: "Conversion ladder", detail: "依不同專案成熟度與風險承受度，安排不同 friction 的 CTA。" },
];

const executiveScorecards = [
  { title: "Value proposition clarity", detail: "買方能否在幾秒內理解你服務誰、解什麼問題、為何值得談。" },
  { title: "Information architecture", detail: "首頁、方案、案例、Contact 是否各司其職，而不是都講一點。" },
  { title: "Proof portability", detail: "案例能否被主管、業務與採購直接轉傳，而不是只能自己看得懂。" },
  { title: "Conversion readiness", detail: "是否提供 Quick Brief、Call、NDA 等不同阻力等級的開始方式。" },
];

const whyNowCards = [
  {
    title: "AI 與複雜能力越多，越需要清楚 category",
    detail: "如果外部第一眼看不懂你真正賣的是什麼，能力越多反而越難成交。",
  },
  {
    title: "成熟 B2B 網站在賣的是決策效率",
    detail: "高品質官網不是內容越多越好，而是讓對的人更快做出往下談的決定。",
  },
  {
    title: "案例與證據才是高單價對話的加速器",
    detail: "作品牆只能展示，evidence system 才能幫主管、採購與業務內部溝通。",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Revenue-grade Website Rebuild</span>
            <div className="hero-intro-badge">這不是優化舊站，是整體重建</div>
            <h1>{siteConfig.heroTitle}</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/work" className="button-secondary button-large">先看案例系統</Link>
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
                  <p>{item.label === "Buyer clarity" ? "首屏先處理是不是你的案子。" : item.label === "Decision stack" ? "把 category、頁面角色、證據與 CTA 一起重做。" : item.label === "Start modes" ? "不同成熟度有不同開始方式。" : "案例先像證據系統，再像展示內容。"}</p>
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

      <Section eyebrow="Why rebuild now" title="2026 的官網，應該像決策介面，不該只是更新過的舊網站。" description="這輪借鏡 Stripe、Ramp、Linear、Vercel 與高品質設計公司官網的共同規律。">
        <div className="card-grid three-up">
          {whyNowCards.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Decision architecture" title="這一輪重建，核心是把整站重做成更成熟的商業決策系統。" description="不是重新修文案，而是一起重做品牌主張、頁面分工、proof 呈現與轉換節奏。">
        <div className="card-grid two-up rebuild-module-grid">
          {decisionSystem.map((item) => (
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
          {sitemapRebuild.map(([title, detail]) => (
            <article key={title} className="card trust-card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage modules" title="首頁依 buying committee 的閱讀順序重排。" description="先有商業清晰度，再有重建藍圖與案例證據，最後接低摩擦轉換。">
        <div className="card-grid two-up rebuild-module-grid">
          {homepageCompactCaseEvidence.map((item) => (
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

      <Section eyebrow="How we work" title="合作流程也要像成熟商務流程，而不是只留下資料等回覆。" description="每一步都回答買方最在意的問題，避免第一次接觸就卡住。">
        <div className="card-grid four-up">
          {heroActionSignals.map((item) => (
            <article key={item.step} className="card process-card">
              <span className="step-index">{item.step}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Research lens" title="本輪借鏡的是成熟 B2B / SaaS / 設計官網的高階規律。" description="不是模仿單一視覺，而是吸收真正提升商務表現的品牌、UI、UX、proof 與 conversion 結構。">
        <div className="card-grid three-up">
          {heroPreviews.map((item) => (
            <article key={item.id} className="card trust-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.metric}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.checklist.map((check) => <li key={check}>{check}</li>)}
              </ul>
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
