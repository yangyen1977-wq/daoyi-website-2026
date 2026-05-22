import type { Metadata } from "next";
import Link from "next/link";
import { CaseLibraryFilter } from "@/components/case-library-filter";
import { Section } from "@/components/section";
import {
  caseCategories,
  caseStudies,
  moreCaseScenarios,
  workComparisonRows,
  workCtaPrompts,
  workHero,
  workHeroStats,
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
            <h2>案例證明的不是畫面，而是資料處理能力</h2>
            <div className="work-hero-stat-grid">
              {workHeroStats.map((item) => (
                <div key={item.label} className="work-hero-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Section
        id="case-routes"
        eyebrow="Find a Match"
        title="先看哪一類案例最接近你的資料問題？"
        description="不確定要從 DPP、ESG、知識平台還是資料系統整合開始，可以先用資料類型判斷。每個案例都會說明問題、做法、交付成果與適合延伸的合作方向。"
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
        description="每個案例都用同一個結構呈現：客戶遇到的資料問題、道易如何整理資料與系統、最後產生什麼可維護的成果。若案例涉及保密資訊，本頁只呈現公開截圖、公開重繪示意圖或概念化介面。"
      >
        <CaseLibraryFilter cases={caseStudies} />
      </Section>

      <Section
        id="more-cases"
        eyebrow="More Scenarios"
        title="更多可延伸的資料場景"
        description="以下案例可作為相近需求的參考。如果你的資料類型不同，也可以先用資料來源、使用者角色、查詢需求、維護流程來對照，道易會協助判斷適合從資料盤點、PoC、工作坊或完整平台開始。"
      >
        <div className="work-more-grid">
          {moreCaseScenarios.map((item) => (
            <article key={item.title} className="card work-more-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="hero-tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="work-method"
        eyebrow="Data Method"
        title="不同案例背後，是同一套資料落地方法"
        description="案例頁不只展示做過什麼，也要讓你看懂道易如何把分散資料整理成可開發、可查詢、可維護的系統。"
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

      <Section id="case-comparison" eyebrow="Compare" title="快速比較：哪個案例最接近你的需求？">
        <div className="work-comparison-table-wrap" aria-label="案例比較表">
          <table className="work-comparison-table">
            <thead>
              <tr>
                <th>案例</th>
                <th>適合對象</th>
                <th>資料類型</th>
                <th>主要交付</th>
                <th>可延伸方向</th>
              </tr>
            </thead>
            <tbody>
              {workComparisonRows.map((row) => (
                <tr key={row.caseName}>
                  <th scope="row"><Link href={row.href}>{row.caseName}</Link></th>
                  <td>{row.audience}</td>
                  <td>{row.dataType}</td>
                  <td>{row.delivery}</td>
                  <td>{row.extension}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="work-comparison-accordion" aria-label="案例比較手機版">
          {workComparisonRows.map((row, index) => (
            <details key={row.caseName} className="work-comparison-item" open={index === 0}>
              <summary>{row.caseName}</summary>
              <dl>
                <dt>適合對象</dt>
                <dd>{row.audience}</dd>
                <dt>資料類型</dt>
                <dd>{row.dataType}</dd>
                <dt>主要交付</dt>
                <dd>{row.delivery}</dd>
                <dt>可延伸方向</dt>
                <dd>{row.extension}</dd>
              </dl>
              <Link href={row.href} className="inline-button">看案例</Link>
            </details>
          ))}
        </div>
      </Section>

      <section className="section-block work-final-section">
        <div className="shell">
          <div className="work-final-cta">
            <div>
              <span className="section-eyebrow">Next Step</span>
              <h2>有類似資料情境？先不用定完整系統。</h2>
              <p>
                你可以先提供資料類型、目前保存方式、預計使用者與想解決的問題。道易會協助判斷更適合從資料盤點、DPP PoC、AI-Ontology 工作坊、回收履歷整合，或 Email / NDA 路徑開始。
              </p>
              <ul className="work-final-prompts">
                {workCtaPrompts.map((item) => <li key={item}>{item}</li>)}
              </ul>
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
