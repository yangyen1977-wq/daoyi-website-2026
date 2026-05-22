import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  aboutAudiences,
  aboutCapabilities,
  aboutCaseProofs,
  aboutHero,
  aboutHeroFlow,
  aboutProblems,
  aboutStartModes,
  aboutWhyDaoYi,
  aboutWorkflow,
} from "@/lib/content/about";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const aboutPageTitle = "關於道易科技｜可信資料平台、DPP、ESG 稽核與 AI-Ontology";
const aboutPageDescription =
  "道易科技協助企業、政府與研究機構，將產品履歷、ESG / 回收稽核、研究文本與既有系統資料，整理成可查詢、可驗證、可維護的可信資料平台。";

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
              <Link href="/contact#quick-brief" className="button-primary button-large">帶著資料問題來討論</Link>
              <Link href="/work" className="button-secondary button-large">查看案例實績</Link>
            </div>
            <div className="about-chip-row" aria-label="道易核心服務">
              {aboutHero.chips.map((chip) => <span key={chip}>{chip}</span>)}
            </div>
          </div>

          <aside className="about-trust-card" aria-label="從資料到可信平台">
            <h2>從資料到可信平台</h2>
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

      <Section
        eyebrow="道易解決的問題"
        title="你不是沒有資料，而是資料還不能被穩定使用與信任。"
        description="許多組織已經累積大量資料，但資料散在文件、表單、設備、舊系統與不同部門中。當資料要支撐 DPP、ESG 揭露、回收履歷、研究查詢或第三方稽核時，單純展示已經不夠。"
      >
        <div className="about-problem-grid">
          {aboutProblems.map((item) => (
            <article key={item.title} className="card about-problem-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="about-problem-summary">
          道易的工作，是把資料整理成能查詢、能驗證、能維護、也能被長期擴充的系統資產。
        </p>
      </Section>

      <Section
        eyebrow="我們做什麼"
        title="道易把資料建模、可信驗證與平台開發放在同一套方法裡。"
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
        eyebrow="適合哪些團隊"
        title="適合正在把資料產品化、公開化或稽核化的組織。"
      >
        <div className="about-audience-grid">
          {aboutAudiences.map((item) => (
            <article key={item.title} className="card about-audience-card">
              <h3>{item.title}</h3>
              <div>
                <strong>適合情境</strong>
                <p>{item.fit}</p>
              </div>
              <div>
                <strong>道易可以協助</strong>
                <p>{item.support}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="about-audience-note">
          如果你已經有資料，但缺少清楚的資料模型、API、後台或查詢介面，也可以從一次資料盤點開始。
        </p>
      </Section>

      <section className="section-block about-why-section">
        <div className="shell about-why-panel">
          <div>
            <span className="section-eyebrow">為什麼是道易</span>
            <h2>{aboutWhyDaoYi.title}</h2>
          </div>
          <div className="about-why-copy">
            {aboutWhyDaoYi.body.map((item) => <p key={item}>{item}</p>)}
            <div className="about-why-tags" aria-label="道易能力來源">
              {aboutWhyDaoYi.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="合作方式"
        title="先釐清資料，再設計平台；先驗證最小流程，再擴大導入。"
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
        eyebrow="案例證明"
        title="案例證明的不是畫面，而是資料處理能力。"
        description="道易的案例橫跨 DPP、ESG 與回收履歷、AI-Ontology、數位人文、研究資料庫與資料平台整合。共同核心，都是把分散資料整理成能查詢、能驗證、能維護、能長期擴充的平台。"
      >
        <div className="about-case-grid">
          {aboutCaseProofs.map((item) => (
            <article key={item.title} className="card about-case-card">
              <h3>{item.title}</h3>
              <strong>{item.example}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="section-actions about-centered-action">
          <Link href="/work" className="button-primary button-large">查看完整案例實績</Link>
        </div>
      </Section>

      <section className="section-block about-final-section">
        <div className="shell">
          <div className="about-final-cta">
            <div>
              <span className="section-eyebrow">Next Step</span>
              <h2>有一批資料、一條流程或一個平台想重新整理？</h2>
              <p>
                你不需要一開始就定義完整系統。只要先提供資料類型、目前保存方式、預計使用者與想解決的問題，道易就能協助判斷適合從資料盤點、PoC、工作坊或系統整合開始。
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
