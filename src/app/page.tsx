import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  homeHero,
  homeBuyerPaths,
  homeCaseSignals,
  homeProofArchitecture,
  homeSitemapRebuild,
  homeThirdPartyReview,
  homeWhatWeDo,
} from "@/lib/content/home";
import { publicAssetPath, siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "道易科技 2026｜數據信任鏈、DPP、ESG 稽核與 AI-Ontology 知識平台",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const heroStyle = {
    "--home-hero-image": `url("${publicAssetPath("/assets/home-hero-ai-network.png")}")`,
  } as CSSProperties;

  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild home-hero-visual" style={heroStyle}>
        <div className="home-hero-background" aria-hidden="true" />
        <div className="shell home-hero-content">
          <div className="hero-copy home-hero-copy">
            <span className="hero-eyebrow">{homeHero.eyebrow}</span>
            <div className="hero-intro-badge">{homeHero.badge}</div>
            <h1>{homeHero.title}</h1>
            <p>{homeHero.description}</p>
            <div className="hero-actions">
              <Link href="/contact#quick-brief" className="button-primary button-large">用一批資料討論第一步</Link>
              <Link href="/work" className="button-secondary button-large">查看案例實績</Link>
            </div>
          </div>
          <div className="home-hero-proof" aria-label="道易服務重點">
            <strong>From scattered data to trusted system assets</strong>
            <div>
              <span>DPP / ESG</span>
              <span>Ontology / AI</span>
              <span>Audit Trail</span>
            </div>
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
        eyebrow="Buyer paths"
        title="不用先懂技術名詞，先從你的資料情境進站。"
        description="成熟 B2B 官網的首頁要替買方減少判斷成本。道易新版首頁把需求分成四種入口，讓不同角色能快速找到下一頁。"
      >
        <div className="home-path-grid">
          {homeBuyerPaths.map((path) => (
            <article key={path.role} className="card home-path-card">
              <span className="card-kicker">{path.role}</span>
              <p>{path.need}</p>
              <Link href={path.href} className="inline-button">{path.next}</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="System method"
        title="道易交付的不是單頁展示，而是一條可維護的資料產品路徑。"
        description="從資料來源到查核證據，每一層都對應到後續維運、揭露、稽核與擴充。"
      >
        <div className="home-architecture-grid">
          {homeProofArchitecture.map((step) => (
            <article key={step.step} className="home-architecture-step">
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proof"
        title="案例呈現從作品清單，改成買方能判斷的資料問題與交付結果。"
        description="B2B 科技服務需要讓買方看到適用情境，而不是只展示漂亮頁面。"
      >
        <div className="card-grid three-up">
          {homeCaseSignals.map((item) => (
            <article key={item.title} className="card home-proof-card">
              <span className="card-kicker">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.result}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="2026 Sitemap"
        title="整站架構改以買方決策路徑重排，而不是公司內部服務分類。"
        description="首頁負責說清楚定位與分流；解決方案負責選型；技術核心建立信任；案例實績提供證據；聯絡頁降低第一步成本。"
      >
        <div className="home-sitemap-list">
          {homeSitemapRebuild.map((item) => (
            <div key={item.page} className="home-sitemap-item">
              <strong>{item.page}</strong>
              <p>{item.job}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="quick-brief"
        eyebrow="Third-party quick review"
        title="以 B2B / 科技 / SaaS 官網標準快速總評。"
        description={homeThirdPartyReview.summary}
      >
        <div className="home-review-panel">
          <strong>{homeThirdPartyReview.score}</strong>
          <div className="home-review-metrics">
            {homeThirdPartyReview.criteria.map((criterion) => (
              <span key={criterion}>{criterion}</span>
            ))}
          </div>
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
