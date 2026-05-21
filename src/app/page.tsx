import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/hero-banner";
import { InteractiveTrustFlow } from "@/components/interactive-trust-flow";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { SolutionFitFinder } from "@/components/solution-fit-finder";
import {
  homeBuyerRoutes,
  homeConversionPaths,
  homeDecisionSignals,
  homeFeaturedCases,
  homeHero,
  homeHeroCards,
  homePainPoints,
  homeProofArchitecture,
  homeProcessSteps,
  homeSolutions,
  homeSitemapStrategy,
  homeThirdPartyReview,
  homeTrustFlow,
  homeTrustMetrics,
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
              <Link href="/solutions" className="button-primary button-large">查看解決方案</Link>
              <Link href="/contact" className="button-secondary button-large">預約需求討論</Link>
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

      <Section eyebrow="Decision signals" title="道易的新品牌主張：不是做更多資料系統，而是讓關鍵資料能被相信。">
        <div className="card-grid three-up">
          {homeDecisionSignals.map((item) => (
            <article key={item.title} className="card homepage-decision-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why now" title="當資料不能被信任，合規、稽核與碳價值都無法成立。">
        <div className="card-grid three-up">
          {homePainPoints.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buyer routes" title="不同角色進站時，應該立刻找到自己的判斷入口。">
        <div className="card-grid four-up">
          {homeBuyerRoutes.map((item) => (
            <article key={item.role} className="card trust-card">
              <span className="mini-label accent">{item.role}</span>
              <h3>{item.question}</h3>
              <p>{item.route}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Site architecture"
        title="新版 sitemap 不是頁面清單，而是把買方決策拆成五個可前進的步驟。"
        description="首頁負責定位，解決方案負責選路，技術核心負責降低風險，案例負責建立信任，聯絡頁負責收斂第一步。"
      >
        <div className="homepage-sitemap-grid">
          {homeSitemapStrategy.map((item) => (
            <article key={item.page} className="homepage-sitemap-card">
              <span className="mini-label accent">{item.page}</span>
              <h3>{item.role}</h3>
              <p>{item.cta}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Solutions" title="四條解決方案，共用同一套可信任資料底座。">
        <div className="card-grid four-up">
          {homeSolutions.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Interactive fit finder"
        title="先選現在最像的情境，快速判斷適合從哪條方案切入。"
        description="訪客不用先理解所有技術名詞，也能用自己的資料狀態找到第一步。"
      >
        <SolutionFitFinder />
      </Section>

      <Section eyebrow="Proof architecture" title="成熟的信任平台不是先做畫面，而是先設計什麼能被證明。">
        <div className="card-grid four-up">
          {homeProofArchitecture.map((item) => (
            <article key={item.layer} className="card proof-narrative-card">
              <span className="mini-label accent">{item.layer}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Trust flow" title="可信資料如何被建立：從產生、標準化、封存到第三方稽核。">
        <InteractiveTrustFlow items={homeTrustFlow} />
      </Section>

      <Section eyebrow="Featured proof" title="案例不再只是作品展示，而是對應 DPP、ESG、知識平台與國際研究的證據。">
        <div className="card-grid three-up">
          {homeFeaturedCases.map((item) => (
            <article key={item.title} className="card evidence-matrix-card">
              <span className="mini-label accent">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
              <strong>{item.tags.join(" / ")}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Conversion ladder" title="第一次接觸不用直接進大型專案，可以從最能降低風險的一層開始。">
        <div className="card-grid three-up">
          {homeConversionPaths.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <Link href={item.href} className="case-link button-secondary button-small">{item.cta}</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="從資料盤點開始，最後交付可上線、可稽核、可維運的平台。">
        <div className="card-grid five-up">
          {homeProcessSteps.map((item, index) => (
            <article key={item.title} className="card process-card">
              <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Third-party quick review" title="以第三方商用官網標準快評：這版更像可信任資料平台公司，而不是一般系統開發商。">
        <div className="card-grid four-up">
          {homeThirdPartyReview.map((item) => (
            <article key={item.metric} className="card trust-card">
              <span className="mini-label accent">{item.score}</span>
              <h3>{item.metric}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Start" title="讓你的資料成為可被信任、可被稽核、可被運用的資產。">
        <QuickBriefForm />
      </Section>
    </main>
  );
}
