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
  title: "道易科技 2026｜重建成成熟商用官網",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜重建成成熟商用官網",
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
      serviceType: ["B2B website rebuild", "AI commercialization", "Knowledge platform", "DPP / Traceability"],
      areaServed: "Asia-Pacific",
    },
  ],
};

const homepageSitemap = [
  ["首頁", "先做 fit、value、proof、CTA 的 decision flow"],
  ["品牌系統", "講清楚定位、方法與為何不是一般網站公司"],
  ["商用方案", "把官網重建、AI 商業化、DPP 體驗拆成三條 buying tracks"],
  ["案例證據", "讓案例成為 shortlist 與提案可引用的證據庫"],
  ["啟動合作", "用 Quick Brief、Call、NDA 三種方式降低開始門檻"],
];

const moduleBlueprint = [
  {
    label: "Hero",
    title: "先講適合誰、能解什麼、為何值得談",
    detail: "借鏡 Stripe、Ramp、Vercel 類型首頁，首屏先回答商業問題，而不是公司歷史。",
  },
  {
    label: "Proof",
    title: "在首頁前段就放案例訊號與決策證據",
    detail: "不是等訪客自己找到作品集，而是讓 proof 在 1-2 個捲動內就出現。",
  },
  {
    label: "Solutions",
    title: "把複雜能力拆成可理解的 buying tracks",
    detail: "每條方案都能獨立成立，不再只是名詞清單。",
  },
  {
    label: "Conversion",
    title: "讓 CTA 對應不同成熟度與風險層級",
    detail: "Quick Brief、Strategy Call、Email / NDA 同時存在，減少流失。",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Commercial Website Rebuild 2026</span>
            <div className="hero-intro-badge">{siteConfig.heroTitle}</div>
            <h1>把官網從公司介紹頁，重做成買方會拿去 shortlist、提案與內部轉傳的決策介面。</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">
                直接開始重建
              </Link>
              <Link href="/work" className="button-secondary button-large">
                先看案例證據
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
              <strong>適合把網站當成商務資產，而不是形象展示牆的 B2B 團隊。</strong>
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
                      ? "首頁先處理對不對的人與案型。"
                      : item.label === "Buying flow"
                        ? "品牌、方案、案例、聯絡四頁各自有明確任務。"
                        : item.label === "Start modes"
                          ? "依成熟度與風險選擇啟動方式。"
                          : "案例先作為 proof system，再作為作品展示。"}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Decision signal" title="先讓買方在短時間內完成三件事。" description="一，看自己適不適合。二，理解你到底做什麼。三，知道下一步怎麼開始。">
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

      <Section eyebrow="Buyer fit" title="首頁要先讓不同角色都能找到自己的切入點。" description="不是所有訪客都要被同一句話說服，而是要快速知道自己該從哪個問題進站。">
        <div className="card-grid four-up">
          {heroClients.map((item) => (
            <article key={item.name} className="card trust-card">
              <h3>{item.name}</h3>
              <p>{item.context}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Rebuild blueprint" title="這輪重建不是調字句，而是把頁面架構整個翻新。" description="重做 sitemap、模組節奏與頁面角色，讓每一頁都服務 buying flow。">
        <div className="card-grid two-up rebuild-module-grid">
          {moduleBlueprint.map((item) => (
            <article key={item.label} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="New sitemap" title="2026 版網站分成五個清楚頁面角色。" description="不是把內容平均分散，而是讓每頁都有明確任務與 CTA。">
        <div className="card-grid three-up">
          {homepageSitemap.map(([title, detail]) => (
            <article key={title} className="card trust-card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage modules" title="首頁內容依買方判斷順序重排。" description="先有品牌清晰度，再有方案與案例，再接低摩擦轉換。">
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
            <h3>Quick Brief / Strategy Call / Email / NDA 三路並存</h3>
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

      <Section eyebrow="How we work" title="合作流程也重做成更像成熟商務流程。" description="每一步都回答買方最在意的問題，避免第一次接觸就卡在抽象溝通。">
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

      <Section eyebrow="Case library" title="案例先像證據庫，再像作品集。" description="每個案例先讓人知道題型、交付與成果訊號，再決定要不要深讀。">
        <div className="card-grid three-up">
          {homepageCompactCaseEvidence.map((item) => (
            <article key={item.title} className="card case-proof-snapshot-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.evidence}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Research lens" title="本輪借鑑的是成熟 B2B / SaaS 官網的共同結構。" description="包含 Stripe、Ramp、Vercel、Linear、Notion 類型網站常見的清晰度、分層與 proof 節奏。">
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

      <Section id="quick-brief" eyebrow="Quick Brief" title="先用低摩擦方式開始這次重建。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
