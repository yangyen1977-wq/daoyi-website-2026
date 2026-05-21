import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/hero-banner";
import { Section } from "@/components/section";
import {
  homeHero,
  homeHeroCards,
  homeTargetAudiences,
  homeTrustMetrics,
  homeWhatWeDo,
} from "@/lib/content/home";
import { siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "道易科技 2026｜數據信任鏈、DPP、ESG 稽核與 AI-Ontology 知識平台",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">{homeHero.eyebrow}</span>
            <div className="hero-intro-badge">{homeHero.badge}</div>
            <h1>{homeHero.title}</h1>
            <p>{homeHero.description}</p>
            <div className="hero-actions">
              <Link href="/contact" className="button-primary button-large">預約需求討論</Link>
              <Link href="/work" className="button-secondary button-large">查看案例</Link>
            </div>
          </div>

          <div className="hero-rebuild-panel">
            <HeroBanner metrics={homeTrustMetrics} />
          </div>

          <div className="hero-outcome-board">
            {homeHeroCards.map((item) => (
              <article key={item.label} className="hero-outcome-card">
                <span className="mini-label accent">{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="What we do"
        title="道易把分散的資料，整理成能查、能驗證、能長期維護的平台。"
        description="我們不是只做網站或後台，而是從資料來源、欄位結構、查詢情境到維運方式一起設計，讓資料真的能被組織使用。"
      >
        <div className="card-grid three-up">
          {homeWhatWeDo.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="TA"
        title="適合正在把重要資料產品化、公開化或稽核化的團隊。"
        description="如果你的資料已經影響客戶信任、內部決策、研究整理或永續揭露，道易可以協助把它變成清楚可用的系統。"
      >
        <div className="card-grid four-up">
          {homeTargetAudiences.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Next step"
        title="如果你有一批重要資料需要整理、展示或驗證，可以先從一次需求討論開始。"
        description="告訴我們資料類型、目前保存方式、預計給誰使用，道易會協助判斷適合先做平台、DPP、Dashboard、API 或知識資料整理。"
      >
        <div className="hero-actions">
          <Link href="/contact" className="button-primary button-large">聯絡道易</Link>
          <Link href="/solutions" className="button-secondary button-large">看服務方向</Link>
        </div>
      </Section>
    </main>
  );
}
