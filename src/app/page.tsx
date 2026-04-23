import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import {
  executiveScorecards,
  homepageBenchmarks,
  homepageDecisionLayers,
  homepageExecutiveAgenda,
  homepageModules,
  homepageRolePaths,
  homepageSitemap,
  rebuildPrinciples,
  siteConfig,
  solutionBlueprints,
  thirdPartyScorecard,
} from "@/lib/site";

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
    value: "Positioning × Offer × Proof × Conversion",
    detail: "不是只重寫首頁，而是直接重做整套 buyer journey 與 decision flow。",
  },
  {
    label: "Start",
    value: "Quick Brief / Workshop / NDA",
    detail: "依專案成熟度與敏感度，提供不同 friction 的啟動路徑。",
  },
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
            <span className="hero-eyebrow">DaoYi Technology / Enterprise Website Rebuild</span>
            <div className="hero-intro-badge">把官網重建成真正能服務商務判斷、shortlist 與啟動流程的 decision interface</div>
            <h1>{siteConfig.heroTitle}</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/solutions" className="button-secondary button-large">看重建藍圖</Link>
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
              <strong>成熟的 B2B 官網，應該讓買方更快理解價值、建立信任、形成內部共識，並自然走向下一步。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>先重定 category 與 buyer fit，再談視覺與文案。</li>
                <li>讓首頁、Offer、案例、Contact 各自承接明確商務任務。</li>
                <li>案例先變成 proof asset，再變成展示內容。</li>
                <li>CTA 設計成 ladder，而不是只留一顆聯絡按鈕。</li>
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {homepageExecutiveAgenda.map((item) => (
                <article key={item.title} className="hero-panel-card stat-card">
                  <span className="mini-label">Agenda {item.label}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Benchmark patterns" title="這輪重建吸收的是成熟 B2B / SaaS / 設計公司官網的上層規律。" description="參考脈絡包含 Stripe、Ramp、Linear、Vercel、Notion 與高表現設計公司站點，重點不是抄畫面，而是學它們怎麼處理 positioning、掃讀、proof 與轉換。">
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

      <Section eyebrow="Rebuild principles" title="這次不是 polishing，而是依成熟商用站的規律重建整套系統。">
        <div className="card-grid four-up">
          {rebuildPrinciples.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Decision architecture" title="新版 IA 先服務商務決策，不再服務舊站慣性。">
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

      <Section eyebrow="Homepage system" title="首頁像一份 executive decision deck，而不是公司簡介。">
        <div className="card-grid two-up rebuild-module-grid">
          {homepageModules.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.evidence}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Role-based reading" title="同一個網站，要同時回答不同 buying committee 成員的問題。">
        <div className="card-grid two-up">
          {homepageRolePaths.map((item) => (
            <article key={item.role} className="card decision-card">
              <span className="mini-label accent">{item.role}</span>
              <h3>{item.ask}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Rebuild blueprint" title="這輪直接把網站重做成更成熟的商務前台。">
        <div className="card-grid three-up">
          {solutionBlueprints.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
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

      <Section eyebrow="Third-party quick review" title="用第三方角度快看目前 live site，方向是對的，但還能更成熟。">
        <div className="card-grid four-up">
          {thirdPartyScorecard.map(([title, score, detail]) => (
            <article key={title} className="card decision-card">
              <span className="mini-label accent">{score}</span>
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

      <Section id="quick-brief" eyebrow="Start the rebuild" title="如果你的網站已經跟不上現在的商業階段，可以直接從這裡開始。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
