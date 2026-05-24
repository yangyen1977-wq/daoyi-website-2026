import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  homeCaseEvidence,
  homeConversionSystem,
  homeDecisionMatrix,
  homeHero,
  homeOperatingModel,
  homePositioning,
  homeSitemapRebuild,
  homeThirdPartyReview,
} from "@/lib/content/home";
import { publicAssetPath, siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "道易科技 2026｜可信資料平台、DPP、ESG 稽核與 AI-Ontology",
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
              <Link href="/work" className="button-secondary button-large">查看案例證據</Link>
            </div>
          </div>
          <aside className="home-hero-proof" aria-label="道易 2026 官網重製方向">
            <strong>Trusted data systems, not one-off websites.</strong>
            <div>
              <span>DPP</span>
              <span>ESG / Audit</span>
              <span>AI-Ontology</span>
              <span>Traceability</span>
            </div>
          </aside>
        </div>
      </section>

      <Section
        eyebrow="Brand Position"
        title="道易的新版定位：幫組織把資料重建成可營運的可信系統。"
        description="參考成熟 B2B / SaaS 官網後，本輪不再把首頁當服務型錄，而是當買方決策介面：先說清楚價值，再用情境、方法與證據讓對方判斷下一步。"
      >
        <div className="home-position-grid">
          {homePositioning.map((item) => (
            <article key={item.title} className="card home-position-card">
              <span className="card-kicker">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Decision Matrix"
        title="讓不同買方不用先懂技術名詞，也能找到自己的資料問題。"
        description="高單價科技服務的首頁要縮短判斷時間。新版用角色、觸發情境、道易提供什麼與第一階段如何驗證來分流。"
      >
        <div className="home-decision-table-wrap">
          <table className="home-decision-table">
            <thead>
              <tr>
                <th>買方角色</th>
                <th>現在卡在哪裡</th>
                <th>道易切入方式</th>
                <th>第一階段證據</th>
              </tr>
            </thead>
            <tbody>
              {homeDecisionMatrix.map((item) => (
                <tr key={item.role}>
                  <th scope="row">{item.role}</th>
                  <td>{item.trigger}</td>
                  <td>
                    <Link href={item.href}>{item.offer}</Link>
                  </td>
                  <td>{item.proof}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="home-decision-cards">
          {homeDecisionMatrix.map((item) => (
            <article key={item.role} className="card home-decision-card">
              <span className="card-kicker">{item.role}</span>
              <h3>{item.offer}</h3>
              <p>{item.trigger}</p>
              <p>{item.proof}</p>
              <Link href={item.href} className="inline-button">看適合方案</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="90-Day Build Logic"
        title="從資料決策地圖到可信平台，用一條可落地的導入路徑取代抽象顧問詞。"
        description="新版把道易的方法呈現成可採購、可驗收、可擴充的工作流，讓買方知道第一階段會發生什麼。"
      >
        <div className="home-operating-grid">
          {homeOperatingModel.map((step) => (
            <article key={step.phase} className="home-operating-step">
              <span>{step.phase}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Evidence"
        title="案例不只展示作品，而是回答買方會問的決策問題。"
        description="B2B 官網的案例要替採購、主管與技術窗口建立共識。新版首頁將代表案例改成問題與成果對照。"
      >
        <div className="card-grid three-up">
          {homeCaseEvidence.map((item) => (
            <article key={item.title} className="card home-evidence-card">
              <span className="card-kicker">{item.title}</span>
              <h3>{item.decision}</h3>
              <p>{item.outcome}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Conversion Paths"
        title="把首次接洽設計成三種低摩擦入口。"
        description="不是要求買方一開始就定完整系統，而是讓對方用現有資料狀態選擇最合適的第一步。"
      >
        <div className="home-conversion-grid">
          {homeConversionSystem.map((item) => (
            <article key={item.mode} className="card home-conversion-card">
              <h3>{item.mode}</h3>
              <p>{item.fit}</p>
              <strong>{item.deliverable}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="2026 Sitemap"
        title="整站架構改以買方決策路徑重排。"
        description="首頁說清楚定位與分流；解決方案負責選型；技術核心建立信任；案例實績提供證據；聯絡頁降低第一步成本。"
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
        eyebrow="Third-party Quick Review"
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
        eyebrow="Next Step"
        title="帶一批真實資料來，道易會協助判斷最小可行的第一階段。"
        description="提供資料類型、保存方式、預計使用者與查核需求，即可先討論適合做盤點、PoC、工作坊、Dashboard、DPP 或知識平台。"
      >
        <div className="hero-actions">
          <Link href="/contact#quick-brief" className="button-primary button-large">24h 內取得初步建議</Link>
          <Link href="/solutions" className="button-secondary button-large">查看解決方案</Link>
        </div>
      </Section>
    </main>
  );
}
