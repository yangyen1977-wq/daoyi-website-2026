import type { Metadata } from "next";
import Link from "next/link";
import { CaseLibraryFilter } from "@/components/case-library-filter";
import { Section } from "@/components/section";
import {
  caseCategories,
  caseStudies,
  workHero,
  workMethodSteps,
} from "@/lib/content/cases";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const workPageTitle = "案例實績｜DPP、ESG 稽核、AI-Ontology 與知識平台案例｜道易科技";
const workPageDescription =
  "道易科技案例涵蓋 DPP 數位產品護照、ESG 與回收履歷、AI-Ontology、數位人文、研究資料庫、圖書館資料平台與資料系統整合，協助組織把分散資料整理成可查詢、可驗證、可維護的平台。";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: workPageTitle,
    description: workPageDescription,
    path: "/work",
  }),
  title: { absolute: workPageTitle },
};

const workMailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想與道易對照案例 / 討論資料情境")}&body=${encodeURIComponent("您好，我想與道易討論類似案例與資料平台需求。\n\n資料類型：\n目前保存方式：\n預計使用者：\n想解決的問題：\n是否需要 NDA：\n\n謝謝。")}`;

export default function WorkPage() {
  return (
    <main id="main-content" className="work-page work-decision-page">
      <section className="work-hero">
        <div className="shell work-hero-grid">
          <div className="work-hero-copy">
            <span className="section-eyebrow">{workHero.eyebrow}</span>
            <h1>{workHero.title}</h1>
            <p>{workHero.description}</p>
            <div className="section-actions">
              <Link href="/contact?topic=case-fit" className="button-primary button-large">拿我的資料情境對照案例</Link>
              <Link href="/solutions" className="button-secondary button-large">查看解決方案</Link>
            </div>
          </div>

          <aside className="work-hero-proof-card" aria-label="案例能力摘要">
            <h2>案例用來判斷三件事</h2>
            <p>資料問題是什麼、道易怎麼整理、第一階段會交付什麼。</p>
          </aside>
        </div>
      </section>

      <Section
        id="case-routes"
        eyebrow="Find a Match"
        title="先看哪一類案例最接近你的資料問題？"
        description="用資料類型先判斷，再看相近案例怎麼落地。"
      >
        <div className="work-route-grid">
          {caseCategories.map((item) => (
            <article key={item.id} className="card work-route-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div>
                <strong>看這類案例</strong>
                <ul className="bullet-list compact">
                  {item.examples.map((example) => <li key={example}>{example}</li>)}
                </ul>
              </div>
              <Link href={item.href} className="inline-button">{item.cta}</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="featured-cases"
        eyebrow="Featured Cases"
        title="代表案例"
        description="每個案例只保留資料問題、道易做法、交付成果與適合延伸方向。"
      >
        <CaseLibraryFilter cases={caseStudies} />
      </Section>

      <Section
        id="work-method"
        eyebrow="Data Method"
        title="不同案例背後，是同一套資料落地方法"
        description="道易不是只做畫面，而是先把資料來源、模型、介面與可信脈絡整理清楚。"
      >
        <div className="work-method-grid">
          <div className="work-method-steps">
            {workMethodSteps.map((item) => (
              <article key={item.step} className="work-method-step">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <aside className="work-method-flow" aria-label="資料從分散到可信平台流程">
            {["資料來源", "資料模型", "管理後台", "查詢 / Dashboard / API", "驗證與稽核"].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </aside>
        </div>
      </Section>

      <section className="section-block work-final-section">
        <div className="shell">
          <div className="work-final-cta">
            <div>
              <span className="section-eyebrow">Next Step</span>
              <h2>有類似資料情境？先不用定完整系統。</h2>
              <p>
                先提供資料類型、保存方式、預計使用者與想解決的問題，道易會協助判斷適合從盤點、PoC、工作坊或 Email / NDA 開始。
              </p>
            </div>
            <div className="work-final-actions">
              <Link href="/contact#quick-brief" className="button-primary button-large">24h 內拿初步建議</Link>
              <a href={workMailHref} className="button-secondary button-large">先用 Email / NDA 聯絡</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
