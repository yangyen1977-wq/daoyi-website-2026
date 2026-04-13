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
  title: "道易科技 2026｜重建成熟商用官網",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜重建成熟商用官網",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      description: siteConfig.description,
    },
    {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
      serviceType: ["B2B website rebuild", "AI offer framing", "Trust / DPP experience"],
      areaServed: "Asia-Pacific",
    },
  ],
};

const strategicSitemap = [
  ["首頁", "先完成 fit、value、proof、risk 與 next step 的第一輪判斷。"],
  ["品牌定位", "說清楚為何不是一般網站公司，以及道易的工作方法。"],
  ["解決方案", "把 B2B 官網、AI 敘事與 trust experience 拆成 buyer-ready tracks。"],
  ["案例系統", "把案例做成可轉傳、可提案、可 shortlist 的 evidence library。"],
  ["啟動專案", "用 Quick Brief、Call、NDA 三種方式降低開始門檻。"],
];

const rebuildModules = [
  {
    label: "Brand thesis",
    title: "先回答你們為什麼值得談，而不是只說你們會做什麼",
    detail: "成熟 B2B 首頁不是能力羅列，而是用一句主張對齊 buyer、問題與差異。",
  },
  {
    label: "Decision UX",
    title: "每個模組都對應一個決策問題，而不是平均分配內容",
    detail: "首頁先處理 fit、proof、delivery 與 risk，內頁再各自負責更深入的說服。",
  },
  {
    label: "Case evidence",
    title: "案例要先像證據，再像作品",
    detail: "先講情境、範圍、結果訊號與適用對象，讓訪客能快速決定要不要往下看。",
  },
  {
    label: "Conversion system",
    title: "CTA 要對應不同成熟度，而不是只留一個聯絡我們",
    detail: "Quick Brief、Strategy Call、Email / NDA 同時存在，減少高意圖流失。",
  },
];

const scorecards = [
  {
    title: "對外訊息成熟度",
    detail: "主張是否一句話就能讓買方知道你做哪一類難題、適合哪一類團隊。",
  },
  {
    title: "頁面任務清晰度",
    detail: "首頁、方案頁、案例頁與 contact 頁是否各自承擔不同任務，而非互相重複。",
  },
  {
    title: "案例可引用程度",
    detail: "案例是否能被業務、提案或主管直接拿去轉傳，而不只是視覺展示。",
  },
  {
    title: "轉換阻力控制",
    detail: "是否提供不同風險層級的開始方式，避免只有單一路徑造成流失。",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Website Rebuild 2026</span>
            <div className="hero-intro-badge">{siteConfig.heroTitle}</div>
            <h1>把官網重做成 buyer 看得懂、業務拿得去談、團隊內部也能直接轉傳的商務系統。</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">
                開始這次重建
              </Link>
              <Link href="/work" className="button-secondary button-large">
                先看案例系統
              </Link>
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
              <strong>適合把網站當成成長資產、提案介面與信任基礎設施的 B2B 團隊。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                {heroFitSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {stats.map((item) => (
                <article key={item.label} className="hero-panel-card stat-card">
                  <span className="mini-label">{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>
                    {item.label === "Fit clarity"
                      ? "首屏先處理是不是你的案子。"
                      : item.label === "Core decision flow"
                        ? "首頁、定位、方案、案例與啟動頁各自有明確任務。"
                        : item.label === "Start modes"
                          ? "依成熟度與風險選擇最適合的開始方式。"
                          : "案例先作為 evidence system，再作為展示內容。"}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Decision signal" title="新首頁先讓買方完成三件事。" description="一，知道自己適不適合。二，知道你們真正提供什麼價值。三，知道下一步怎麼開始。">
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

      <Section eyebrow="Buyer fit" title="不同類型的高複雜度團隊，都需要不同角度的說服。" description="不是所有訪客都吃同一句話，而是要讓對的人很快找到自己的入口。">
        <div className="card-grid four-up">
          {heroClients.map((item) => (
            <article key={item.name} className="card trust-card">
              <h3>{item.name}</h3>
              <p>{item.context}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Rebuild principles" title="這輪不是微調，而是從商務邏輯回推整個網站。" description="借鏡成熟 SaaS、B2B 與設計公司官網，把品牌、UI、UX、proof 與 conversion 一起重做。">
        <div className="card-grid two-up rebuild-module-grid">
          {rebuildModules.map((item) => (
            <article key={item.label} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="New sitemap" title="新版網站不是多頁而已，而是頁面角色完全重分工。" description="每頁都服務 buying flow，不再只是平均分攤內容。">
        <div className="card-grid three-up">
          {strategicSitemap.map(([title, detail]) => (
            <article key={title} className="card trust-card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Commercial scorecard" title="重建後的網站，至少要通過這四個商用標準。" description="這些標準來自高表現 B2B / SaaS 官網常見的共同結構。">
        <div className="card-grid four-up">
          {scorecards.map((item) => (
            <article key={item.title} className="card process-card">
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage modules" title="首頁依照 buying committee 的閱讀順序重排。" description="先有品牌清晰度，再有方案與案例，最後接低摩擦轉換。">
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
            <h3>讓不同成熟度的買方，都能找到合適的開始方式</h3>
            <ul className="bullet-list compact">
              {heroContactLadder.map((item) => (
                <li key={item.label}>
                  <strong>{item.title}</strong>，{item.detail}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section eyebrow="How we work" title="合作流程也改成更像成熟商務流程。" description="每一步都回答買方最在意的問題，避免第一次接觸就卡住。">
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

      <Section eyebrow="Research lens" title="本輪借鑑的是成熟 B2B / SaaS 官網的共通規律。" description="參考 Stripe、Ramp、Vercel、Linear、Notion 與高品質設計公司官網常見的清晰度、分層與證據節奏。">
        <div className="card-grid three-up">
          {heroPreviews.map((item) => (
            <article key={item.id} className="card trust-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.metric}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.checklist.map((check) => (
                  <li key={check}>{check}</li>
                ))}
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
