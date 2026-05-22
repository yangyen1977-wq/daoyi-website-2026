import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  aboutAudiences,
  aboutCapabilities,
  aboutHero,
  aboutHeroFlow,
  aboutProblems,
  aboutWhyDaoYi,
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
        description="當資料要支撐 DPP、ESG 揭露、回收履歷、研究查詢或第三方稽核時，單純展示已經不夠。"
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
          道易把資料整理成能查詢、能驗證、能維護的系統資產。
        </p>
      </Section>

      <Section
        eyebrow="我們做什麼"
        title="資料建模、可信驗證與平台開發，放在同一套方法裡。"
      >
        <div className="about-capability-grid">
          {aboutCapabilities.map((item) => (
            <article key={item.title} className="card about-capability-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="適合哪些團隊"
        title="適合正在把資料產品化、公開化或稽核化的組織。"
      >
        <div className="about-audience-tags">
          {aboutAudiences.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
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

      <section className="section-block about-final-section">
        <div className="shell">
          <div className="about-final-cta">
            <div>
              <span className="section-eyebrow">Next Step</span>
              <h2>有一批資料、一條流程或一個平台想重新整理？</h2>
              <p>
                先提供資料類型、保存方式、預計使用者與想解決的問題，道易會協助判斷下一步。
              </p>
              <div className="section-actions">
                <Link href="/contact#quick-brief" className="button-primary button-large">24h 內拿初步建議</Link>
                <a href={aboutMailHref} className="button-secondary button-large">Email / NDA 聯絡</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
