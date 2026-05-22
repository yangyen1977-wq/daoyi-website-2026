import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  aboutAudiences,
  aboutCapabilities,
  aboutCaseProofs,
  aboutHero,
  aboutHeroFlow,
  aboutHistory,
  aboutPositioning,
  aboutPrinciples,
  aboutProblems,
  aboutStartModes,
  aboutWorkflow,
} from "@/lib/content/about";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const aboutPageTitle = "關於道易科技｜可信資料平台、DPP、ESG 稽核與 AI-Ontology 團隊";
const aboutPageDescription =
  "道易科技協助企業、政府、研究與文化機構，將產品履歷、ESG 與回收稽核資料、人物文本與研究資料，整理成可查詢、可驗證、可長期維運的可信資料平台。";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: aboutPageTitle,
    description: aboutPageDescription,
    path: "/about",
  }),
  title: { absolute: aboutPageTitle },
};

const aboutMailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想與道易討論可信資料平台 / NDA")}&body=${encodeURIComponent("您好，我想與道易討論可信資料平台或資料盤點。\n\n資料類型：\n目前保存方式：\n預計使用者：\n想解決的問題：\n是否需要 NDA：\n\n謝謝。")}`;

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page about-rebuild-page">
      <section className="about-hero">
        <div className="shell about-hero-grid">
          <div className="about-hero-copy">
            <span className="section-eyebrow">{aboutHero.eyebrow}</span>
            <h1>{aboutHero.title}</h1>
            <p className="about-hero-lead">{aboutHero.lead}</p>
            <p>{aboutHero.body}</p>
            <div className="section-actions">
              <Link href="/contact?topic=data-problem" className="button-primary button-large">帶著資料問題來討論</Link>
              <Link href="/work" className="button-secondary button-large">查看案例實績</Link>
            </div>
            <div className="about-chip-row" aria-label="道易核心服務">
              {aboutHero.chips.map((chip) => <span key={chip}>{chip}</span>)}
            </div>
          </div>

          <aside className="about-trust-card" aria-label="資料信任鏈示意卡">
            <h2>資料如何變成可信資產</h2>
            <div className="about-trust-flow">
              {aboutHeroFlow.map((item) => (
                <div key={item.step} className="about-trust-node">
                  <span>{item.step}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="about-positioning-band">
        <div className="shell">
          <span className="section-eyebrow">Positioning</span>
          <h2>{aboutPositioning.title}</h2>
          <div className="about-positioning-copy">
            {aboutPositioning.body.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Why It Matters"
        title="你的資料已經很重要，但可能還不能被信任。"
        description="許多組織不是沒有資料，而是資料分散、格式不一致、來源難說明、版本難追蹤，最後導致查詢、揭露、稽核與維運成本越來越高。"
      >
        <div className="about-problem-grid">
          {aboutProblems.map((item) => (
            <article key={item.title} className="card about-problem-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div>
                <strong>道易介入點</strong>
                <p>{item.intervention}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Core Capabilities"
        title="我們把資料整理、平台開發與可信驗證放在同一套方法裡。"
      >
        <div className="about-capability-grid">
          {aboutCapabilities.map((item) => (
            <article key={item.title} className="card about-capability-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div>
                <strong>你會拿到</strong>
                <ul className="bullet-list compact">
                  {item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How We Got Here"
        title="從數位人文到數據信任鏈，道易累積的是處理複雜資料的能力。"
      >
        <div className="about-history-timeline">
          {aboutHistory.map((item) => (
            <article key={item.step} className="about-history-item">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Who We Work With"
        title="適合正在把資料產品化、公開化或稽核化的組織。"
      >
        <div className="about-audience-grid">
          {aboutAudiences.map((item) => (
            <article key={item.title} className="card about-audience-card">
              <h3>{item.title}</h3>
              <div>
                <strong>你可能正在面對</strong>
                <ul className="bullet-list compact">
                  {item.facing.map((facing) => <li key={facing}>{facing}</li>)}
                </ul>
              </div>
              <div>
                <strong>道易可以協助</strong>
                <p>{item.support}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How We Work"
        title="先釐清資料，再設計平台；先驗證最小可行流程，再擴大導入。"
      >
        <div className="about-workflow">
          {aboutWorkflow.map((item) => (
            <article key={item.step} className="about-workflow-step">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Case Proof"
        title="案例證明的不是畫面，而是資料處理能力。"
        description="道易的案例橫跨 DPP、ESG 與回收履歷、AI-Ontology、數位人文、研究資料庫與資料平台整合。每個案例背後的共同核心，都是把分散資料整理成能查詢、能驗證、能維護、能長期擴充的系統資產。"
      >
        <div className="about-case-grid">
          {aboutCaseProofs.map((item) => (
            <article key={item.title} className="card about-case-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div>
                <strong>適合延伸</strong>
                <p>{item.extension}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="section-actions about-centered-action">
          <Link href="/work" className="button-primary button-large">查看完整案例實績</Link>
        </div>
      </Section>

      <Section eyebrow="Principles" title="我們做資料平台時，最在意三件事。">
        <div className="about-principle-grid">
          {aboutPrinciples.map((item) => (
            <article key={item.step} className="card about-principle-card">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-block about-final-section">
        <div className="shell">
          <div className="about-final-cta">
            <div>
              <span className="section-eyebrow">Next Step</span>
              <h2>帶著一批資料、一條流程或一個知識主題，先和道易討論第一步。</h2>
              <p>
                無論你正在規劃 DPP、ESG 稽核、循環經濟資料平台、AI-Ontology 知識平台，或想把既有系統升級成可信資料平台，都可以先從一次資料盤點開始。
              </p>
              <p>
                你不需要一開始就定義完整系統。只要先提供資料類型、目前保存方式、預計使用者與想解決的問題，道易就能協助判斷適合從資料盤點、PoC、工作坊、系統整合或 Email / NDA 路徑開始。
              </p>
              <div className="section-actions">
                <Link href="/contact#quick-brief" className="button-primary button-large">24h 內拿初步建議</Link>
                <a href={aboutMailHref} className="button-secondary button-large">Email / NDA 聯絡</a>
              </div>
            </div>
            <div className="about-start-grid">
              {aboutStartModes.map((item) => (
                <article key={item.title} className="about-start-card">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
