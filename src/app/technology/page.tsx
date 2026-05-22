import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  technologyHero,
  technologyHeroFlow,
  technologyModules,
  technologySolutionMap,
  technologyStartModes,
  technologyTrustFlow,
} from "@/lib/content/technology";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const technologyPageTitle = "技術核心｜資料信任鏈、DPP、ESG 稽核與 AI-Ontology 技術架構｜道易科技";

export const metadata: Metadata = {
  ...createPageMetadata({
  title: technologyPageTitle,
  description:
    "道易科技以 Ontology 語義建模、Hash、Merkle Tree、IPFS、TSA 時戳、API、Audit Trail 與 AI / AIoT 校驗，協助企業、政府與研究機構建立可追溯、可驗證、可稽核的可信資料平台。",
  path: "/technology",
  }),
  title: { absolute: technologyPageTitle },
};

const technologyMailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想與道易討論技術導入 / 資料信任鏈")}&body=${encodeURIComponent("您好，我想與道易討論資料信任鏈或可信資料平台技術導入。\n\n目前資料來源：\n目前流程或系統：\n希望支撐的用途：DPP / ESG 稽核 / 回收履歷 / AI-Ontology / 其他\n是否需要 NDA：\n\n謝謝。")}`;

export default function TechnologyPage() {
  return (
    <main id="main-content" className="technology-page">
      <section className="technology-hero">
        <div className="shell technology-hero-grid">
          <div className="technology-hero-copy">
            <span className="section-eyebrow">{technologyHero.eyebrow}</span>
            <h1>{technologyHero.title}</h1>
            <p className="technology-hero-lead">{technologyHero.lead}</p>
            <p>{technologyHero.body}</p>
            <div className="section-actions">
              <Link href="/contact?topic=technology" className="button-primary button-large">帶著資料流程來討論</Link>
              <Link href="#trust-flow" className="button-secondary button-large">看信任資料流程</Link>
            </div>
            <div className="technology-signal-strip" aria-label="技術價值重點">
              {technologyHero.signals.map((signal) => <span key={signal}>{signal}</span>)}
            </div>
          </div>

          <aside className="technology-hero-diagram" aria-label="資料信任鏈示意圖">
            {technologyHeroFlow.map((node, index) => (
              <div key={node.title} className="technology-hero-node">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{node.title}</strong>
                <p>{node.detail}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <Section
        id="trust-flow"
        eyebrow="Trust Flow"
        title="從資料進入到查詢稽核，保留必要證據節點"
      >
        <div className="technology-flow">
          {technologyTrustFlow.map((step, index) => (
            <article key={step.title} className="technology-flow-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Core Modules"
        title="每個技術模組，都對應一段資料信任缺口"
        description="不把技術當展示名詞，而是說清楚它回答哪個查核問題、如何使用、會交付什麼。"
      >
        <div className="technology-module-grid">
          {technologyModules.map((item, index) => (
            <details key={item.title} className="technology-module-card" open={index === 0}>
              <summary>
                <span className="mini-label accent">Module {String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
              </summary>
              <div className="technology-module-body">
                <div>
                  <h3>回答的問題</h3>
                  <p>{item.question}</p>
                </div>
                <div>
                  <h3>道易如何使用</h3>
                  <p>{item.usage}</p>
                </div>
                <div>
                  <h3>可交付內容</h3>
                  <ul className="bullet-list compact">
                    {item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Technology to Solutions"
        title="同一套可信資料底座，支撐四種解決方案"
      >
        <div className="card-grid four-up">
          {technologySolutionMap.map((item) => (
            <article key={item.title} className="card technology-solution-card">
              <h3>{item.title}</h3>
              <strong>適合情境</strong>
              <p>{item.fit}</p>
              <strong>技術如何支撐</strong>
              <p>{item.support}</p>
              <Link href={item.href} className="inline-button">{item.cta}</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Recommended Start"
        title="先找出資料信任鏈最需要補強的一段"
        description="不需要一開始就規劃完整平台。先用一批資料、一條流程、一個產品或一個知識主題，確認第一階段。"
      >
        <div className="card-grid three-up">
          {technologyStartModes.map((item) => (
            <article key={item.title} className="card technology-start-card">
              <span className="mini-label accent">{item.title}</span>
              <p>{item.fit}</p>
              <strong>第一階段輸出</strong>
              <ul className="bullet-list compact">
                {item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
              </ul>
              <Link href={`/contact?topic=${encodeURIComponent(item.cta)}`} className="inline-button">{item.cta}</Link>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-block">
        <div className="shell">
          <div className="technology-final-cta">
            <div>
              <span className="section-eyebrow">Next step</span>
              <h2>帶著一批資料、一條流程或一個產品來討論</h2>
              <p>道易會先協助判斷哪些資料需要被驗證、哪些節點需要保留證據，以及是否適合從 PoC、健檢或工作坊開始。</p>
            </div>
            <div className="technology-final-actions">
              <Link href="/contact?topic=technology" className="button-primary button-large">討論技術導入</Link>
              <a href={technologyMailHref} className="button-secondary button-large">Email / NDA 聯繫</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
