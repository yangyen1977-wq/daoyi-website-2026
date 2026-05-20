import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { SubpageHero } from "@/components/subpage-hero";
import { TrustFlowTimeline } from "@/components/trust-flow-timeline";
import {
  aboutAudiences,
  aboutCapabilities,
  aboutExperience,
  aboutHero,
  aboutPositioning,
  aboutPrinciples,
  aboutWorkflow,
} from "@/lib/content/about";

export const metadata: Metadata = {
  title: "關於道易｜可信資料平台與 AI-Ontology 團隊",
  description: "道易科技從數位人文、AI 語意分析與資料平台出發，協助政府、學研、文化機構與企業建立可追溯、可查核、可維運的可信資料平台。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <SubpageHero eyebrow={aboutHero.eyebrow} title={aboutHero.title} description={aboutHero.description} />

      <Section eyebrow="Positioning" title="道易不是只做網站，而是協助資料被整理、被查詢、被驗證、被運用。">
        <div className="feature-surface">
          <ul className="bullet-list compact">
            {aboutPositioning.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </Section>

      <Section eyebrow="How we got here" title="從數位人文到數據信任鏈，道易累積的是處理複雜資料的能力。">
        <div className="card-grid four-up">
          {aboutCapabilities.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ul className="bullet-list compact">
                {item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Who we work with" title="如果你的資料需要被追溯、查詢、稽核或對外揭露，道易就適合加入。">
        <div className="card-grid two-up">
          {aboutAudiences.map((item) => (
            <article key={item.title} className="card evidence-matrix-card">
              <span className="mini-label accent">Fit</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ul className="bullet-list compact">
                {item.solutions.map((solution) => <li key={solution}>{solution}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="How we work" title="先釐清資料，再設計平台；先驗證最小可行流程，再擴大導入。">
        <TrustFlowTimeline steps={aboutWorkflow} />
      </Section>

      <Section eyebrow="Principles" title="我們做資料平台時，最在意三件事。">
        <div className="card-grid three-up">
          {aboutPrinciples.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Experience" title="道易的案例橫跨循環經濟、數位產品護照、數位人文與國際研究平台。">
        <div className="card-grid three-up">
          {aboutExperience.map((item) => (
            <article key={item.title} className="card evidence-matrix-card">
              <span className="mini-label accent">Experience</span>
              <h3>{item.title}</h3>
              <p><strong>代表案例：</strong>{item.examples.join("、")}</p>
              <ul className="bullet-list compact">
                {item.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next Step" title="帶著你的資料、流程或平台問題，先和道易討論第一步。">
        <div className="feature-surface two-column">
          <div>
            <p>無論你正在規劃 DPP、ESG 稽核、循環經濟資料平台、AI-Ontology 知識平台，或想把既有系統升級成可信資料平台，都可以先從一次資料盤點開始。</p>
          </div>
          <div>
            <h3>下一步</h3>
            <p>如果你的資料已經進入 DPP、ESG 稽核、回收履歷、知識平台或系統整合需求，可以先用一條流程或一批資料開始討論。</p>
            <div className="section-actions">
              <Link href="/contact" className="button-primary">聯絡道易</Link>
              <Link href="/work" className="button-secondary">查看案例</Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
