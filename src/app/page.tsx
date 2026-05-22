import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  homeBuyerPaths,
  homeCaseSignals,
  homeHero,
  homeProofArchitecture,
  homeSitemapRebuild,
  homeTargetAudiences,
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
              <Link href="/contact" className="button-primary button-large">了解更多 / 聯絡我們</Link>
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
        eyebrow="Choose your path"
        title="不同角色進站時，先找到最接近自己的資料問題。"
        description="成熟的 B2B 官網不只展示能力，而是讓訪客快速判斷下一步。道易首頁改成以買方情境作為入口。"
      >
        <div className="home-path-grid">
          {homeBuyerPaths.map((item) => (
            <article key={item.role} className="card home-path-card">
              <span className="mini-label accent">{item.role}</span>
              <p>{item.need}</p>
              <Link href={item.href} className="inline-button">{item.next}</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="System method"
        title="從資料盤點到查核證據，用同一套方法落地。"
        description="這輪重建把品牌主張從「會做哪些技術」改成「如何把資料變成可信系統」。"
      >
        <div className="home-architecture-grid">
          {homeProofArchitecture.map((item) => (
            <article key={item.step} className="home-architecture-step">
              <span>{item.step}</span>
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
        eyebrow="Proof"
        title="案例呈現改成讓買方判斷：問題、做法、結果是否相近。"
        description="案例不只列作品名稱，而要讓決策者快速對照自己的資料情境。"
      >
        <div className="card-grid three-up">
          {homeCaseSignals.map((item) => (
            <article key={item.title} className="card home-proof-card">
              <span className="mini-label accent">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.result}</p>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <Link href="/work" className="button-secondary">查看完整案例實績</Link>
        </div>
      </Section>

      <Section
        eyebrow="2026 Sitemap"
        title="新版 sitemap 以買方決策旅程重排，而不是只列頁面。"
        description="首頁負責定位與分流，解決方案負責選型，技術頁降低風險，案例頁建立信任，聯絡頁收斂下一步。"
      >
        <div className="home-sitemap-list">
          {homeSitemapRebuild.map((item) => (
            <article key={item.page} className="home-sitemap-item">
              <strong>{item.page}</strong>
              <p>{item.job}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Third-party quick review"
        title="本輪快速總評"
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
