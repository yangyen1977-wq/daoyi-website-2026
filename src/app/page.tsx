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
      serviceType: ["B2B website rebuild", "AI narrative design", "Knowledge platform", "DPP / Traceability"],
      areaServed: "Asia-Pacific",
    },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Commercial Rebuild 2026</span>
            <div className="hero-intro-badge">{siteConfig.heroTitle}</div>
            <h1>把官網做成買方會拿來判斷 fit、信任與下一步的決策頁面。</h1>
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
              <strong>適合把網站當成商務入口，而不是作品展示牆的 B2B 團隊。</strong>
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
                  <p>{item.label === "24h" ? "第一封回覆先給具體下一步。" : item.label === "4-page" ? "首頁、品牌、案例、啟動四段成流。" : item.label === "3 tracks" ? "對應官網重設、AI framing、DPP / knowledge。" : "以案例摘要與決策證據為核心。"}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Decision signal" title="先讓買方完成三件事，再談更深的合作。" description="首頁不是公司介紹，而是把 who, why, proof, next step 排到最前面。">
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

      <Section eyebrow="Buyer fit" title="一眼判斷這是不是你的案子。" description="不同角色進站時，應該都能快速找到自己關心的那一塊。">
        <div className="card-grid four-up">
          {heroClients.map((item) => (
            <article key={item.name} className="card trust-card">
              <h3>{item.name}</h3>
              <p>{item.context}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage modules" title="首頁模組以商務判斷順序重排。" description="不是舊文案換詞，而是把資訊優先序整個翻掉。">
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
            <h3>Quick Brief / Email / NDA 三路並存</h3>
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

      <Section eyebrow="How we work" title="重建流程不是簡報式宣言，而是能執行的四步。">
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

      <Section eyebrow="Case library" title="案例要先像證據庫，再像作品集。" description="每個案例都先告訴你，這是什麼情境、交付了什麼、解決了什麼。">
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

      <Section eyebrow="Research lens" title="這次重製借鑑的不是單一風格，而是成熟 B2B 官網的共同特徵。">
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

      <Section id="quick-brief" eyebrow="Quick Brief" title="先用低摩擦方式開始。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
