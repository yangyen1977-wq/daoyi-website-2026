import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { SubpageHero } from "@/components/subpage-hero";
import {
  solutionDetails,
  solutionImplementationSteps,
  solutionScenarios,
  solutionStartModes,
  solutionsHero,
  solutionTechValues,
} from "@/lib/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "解決方案｜數據信任鏈、DPP、ESG 稽核與 AI-Ontology",
  description: "道易科技以可信資料底座，提供數據信任鏈、DPP 數位產品護照、AI-Ontology 知識平台與 AIoT 回收履歷整合。",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <main id="main-content" className="solutions-page">
      <SubpageHero
        eyebrow={solutionsHero.eyebrow}
        title={solutionsHero.title}
        description={solutionsHero.description}
        actions={[
          { href: "#solution-fit", label: "判斷適合哪個方案" },
          { href: "/work", label: "查看案例實績", variant: "secondary" },
        ]}
      />

      <section className="section-block solutions-hero-points">
        <div className="shell">
          <div className="card-grid three-up">
            {solutionsHero.points.map((point) => (
              <article key={point} className="card trust-card">
                <p>{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="solution-fit"
        eyebrow="30 秒選型"
        title="先看你是哪一種需求，再決定該看哪個方案。"
        description="這一區不是從技術名詞出發，而是用你手上的資料、流程與對外揭露情境，快速對應到可能的第一步。"
      >
        <div className="card-grid four-up">
          {solutionScenarios.map((item) => (
            <article key={item.need} className="card solution-scenario-card">
              <span className="mini-label accent">{item.solution}</span>
              <h3>{item.need}</h3>
              <p>{item.plain}</p>
              <Link href={item.href} className="inline-button">看這個方案</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="四大解決方案"
        title="每個方案都先講問題、適合對象與第一階段交付成果。"
        description="技術會保留在卡片底部，但優先讓決策者看懂：這個方案解決什麼、誰適合、合作後會拿到什麼。"
      >
        <div className="solution-detail-stack">
          {solutionDetails.map((item) => (
            <article key={item.id} id={item.id} className="card solution-detail-card">
              <div className="solution-detail-main">
                <span className="mini-label accent">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p className="solution-summary">{item.summary}</p>
                <div className="solution-cta-row">
                  <Link href={`/contact?topic=${encodeURIComponent(item.cta)}`} className="button-primary">
                    {item.cta}
                  </Link>
                  <Link href="/work" className="button-secondary">看相關案例</Link>
                </div>
              </div>

              <div className="solution-detail-grid">
                <div>
                  <strong>適合誰</strong>
                  <ul className="bullet-list compact">
                    {item.audience.map((audience) => <li key={audience}>{audience}</li>)}
                  </ul>
                </div>
                <div>
                  <strong>常見卡點</strong>
                  <ul className="bullet-list compact">
                    {item.problems.map((problem) => <li key={problem}>{problem}</li>)}
                  </ul>
                </div>
                <div>
                  <strong>道易怎麼做</strong>
                  <p>{item.approach}</p>
                </div>
                <div className="solution-deliverable-box">
                  <strong>第一階段會交付</strong>
                  <ul className="bullet-list compact">
                    {item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                  </ul>
                </div>
              </div>

              <div className="solution-card-footer">
                <div>
                  <strong>使用技術</strong>
                  <div className="tag-list">
                    {item.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <div>
                  <strong>相關案例</strong>
                  <p>{item.cases.join("、")}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="如何落地" title="先用小範圍驗證，再把可信資料平台擴出去。">
        <div className="card-grid four-up">
          {solutionImplementationSteps.map((step, index) => (
            <article key={step.title} className="card process-card">
              <span className="mini-label accent">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Recommended start"
        title="不確定完整範圍？先從 PoC、資料盤點或工作坊開始。"
        description="不用一開始就定義完整系統。先把第一批資料、第一條流程或第一個知識主題跑通，會更容易判斷後續投資。"
      >
        <div className="card-grid three-up">
          {solutionStartModes.map((item) => (
            <article key={item.title} className="card solution-start-card">
              <span className="mini-label accent">{item.title}</span>
              <h3>{item.cta}</h3>
              <p>{item.fit}</p>
              <strong>你會拿到</strong>
              <ul className="bullet-list compact">
                {item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
              </ul>
              <Link href={`/contact?topic=${encodeURIComponent(item.cta)}`} className="inline-button">從這裡開始</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="技術翻譯"
        title="保留專業技術，但用商務價值說明它解決什麼問題。"
      >
        <div className="solution-tech-grid">
          {solutionTechValues.map((item) => (
            <article key={item.term} className="card solution-tech-card">
              <strong>{item.term}</strong>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <Link href="/technology" className="button-secondary button-large">看技術核心</Link>
          <Link href="/contact" className="button-primary button-large">聯絡道易</Link>
        </div>
      </Section>
    </main>
  );
}
