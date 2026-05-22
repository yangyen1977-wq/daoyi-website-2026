import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  homeBuyerPaths,
  homeHero,
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
