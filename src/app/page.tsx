import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  homeBuyerPaths,
  homeCaseSignals,
  homeHero,
  homeProofArchitecture,
  homeStartModes,
  homeTrustQuestions,
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
              <Link href="/contact#quick-brief" className="button-primary button-large">帶一批資料來討論</Link>
              <Link href="#decision-paths" className="button-secondary button-large">先判斷適合哪種方案</Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="decision-paths"
        eyebrow="Decision Paths"
        title="先從資料問題，選最接近的路徑。"
        description="不需要一開始就定完整系統。先用資料情境判斷：要對外揭露、要被稽核、要被搜尋，還是要把現場資料接回平台。"
      >
        <div className="home-path-grid">
          {homeBuyerPaths.map((item) => (
            <article key={item.role} className="card home-path-card">
              <span className="mini-label accent">{item.next}</span>
              <h3>{item.role}</h3>
              <p>{item.need}</p>
              <Link href={item.href} className="inline-button">看這個方案</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proof Cases"
        title="用案例看道易如何整理複雜資料。"
        description="每個案例聚焦三件事：資料問題是什麼、道易怎麼整理、第一階段交付什麼。"
      >
        <div className="card-grid three-up">
          {homeCaseSignals.map((item) => (
            <article key={item.title} className="card home-proof-card">
              <span className="mini-label accent">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.result}</p>
              <strong className="home-proof-outcome">{item.proof}</strong>
              <dl className="home-proof-list">
                <div>
                  <dt>適合情境</dt>
                  <dd>{item.fit}</dd>
                </div>
                <div>
                  <dt>整理方式</dt>
                  <dd>{item.approach}</dd>
                </div>
                <div>
                  <dt>可交付成果</dt>
                  <dd>{item.deliverables}</dd>
                </div>
              </dl>
              <Link href={item.href} className="inline-button">對照這類案例</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Data Method"
        title="先把資料做成能長期運作的系統。"
        description="從一批資料、一條流程或一個產品開始，先釐清資料在哪裡、誰會更新、誰要查詢、哪些節點需要留下證據。"
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
        eyebrow="Trust Questions"
        title="可信資料平台，要能回答五個查核問題。"
        description="Ontology、Hash、Merkle Tree、TSA、API 與 Audit Trail 都不是裝飾名詞，而是用來回答資料查核時會遇到的問題。"
      >
        <div className="home-trust-question-grid">
          {homeTrustQuestions.map((item) => (
            <article key={item.question} className="card home-trust-question-card">
              <span className="mini-label accent">{item.answer}</span>
              <h3>{item.question}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Start Modes"
        title="不用先定完整系統，先從一批資料開始。"
        description="依照資料成熟度、保密需求與目標情境，先選一種低門檻起點。"
      >
        <div className="card-grid four-up">
          {homeStartModes.map((item) => (
            <article key={item.title} className="card home-start-card">
              <h3>{item.title}</h3>
              <p>{item.fit}</p>
              <strong>第一階段輸出</strong>
              <p>{item.output}</p>
              <Link href={item.href} className="inline-button">{item.cta}</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Next step"
        title="帶著一批資料、一條流程或一個產品來討論。"
        description="告訴我們資料類型、目前保存方式、預計使用者與想解決的問題，道易會協助判斷適合從資料盤點、PoC、工作坊或 Email / NDA 開始。"
      >
        <div className="hero-actions">
          <Link href="/contact#quick-brief" className="button-primary button-large">帶資料拿初步建議</Link>
          <Link href="/contact" className="button-secondary button-large">Email / NDA 聯絡</Link>
        </div>
      </Section>
    </main>
  );
}
