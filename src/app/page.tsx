import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { cases, differentiators, insightTopics, processSteps, solutions } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section
        eyebrow="品牌摘要"
        title="不只是做網站或導入 AI，而是把技術落地成可運作、可維運、可成長的成果。"
        description="道易科技的核心優勢，在於能同時理解內容、資料、流程與品牌表達。"
      >
        <div className="homepage-priority-grid">
          <div className="feature-surface priority-summary-card">
            <span className="mini-label accent">Why DaoYi</span>
            <h3>先把問題結構整理清楚，再決定最適合的網站、平台或 AI 解法。</h3>
            <p>
              道易科技從數位人文與知識資料處理出發，長期累積語意分析、資料整合、平台建置與跨領域系統設計經驗。從研究型知識平台，到產業 AI 應用與數位產品護照，我們擅長把複雜需求整理成清楚、可靠、可擴充的數位方案。
            </p>
          </div>
          <div className="feature-surface priority-list-card">
            <span className="mini-label accent">你會得到什麼</span>
            <ul className="bullet-list">
              <li>從資訊結構與資料脈絡出發，而不是只堆疊功能</li>
              <li>兼具研究型資料理解與商業導向的落地能力</li>
              <li>重視長期維運、可擴充性與轉換效率</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="解決方案"
        title="聚焦三種高價值數位解法，對應品牌、流程與永續升級需求。"
      >
        <div className="card-grid three-up">
          {solutions.map((solution) => (
            <article key={solution.title} className="card">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <ul className="bullet-list compact">
                {solution.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="案例實績"
        title="從研究平台到產業場域，成果可以被看見，也能被驗證。"
      >
        <div className="card-grid three-up">
          {cases.map((item) => (
            <article key={item.title} className="card case-card">
              <span className="mini-label accent">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.impact}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="方法論"
        title="讓系統真正上線並持續運作，需要比開發更完整的節奏。"
      >
        <div className="card-grid four-up">
          {processSteps.map((step) => (
            <article key={step.step} className="card process-card">
              <span className="step-index">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="為什麼是道易"
        title="我們擅長的，不只是做出東西，而是把方向、結構與交付一起校準。"
      >
        <div className="card-grid three-up">
          {differentiators.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="洞察內容"
        title="未來可延伸成 SEO 與專業信任兼具的內容欄位。"
      >
        <div className="stack-list">
          {insightTopics.map((topic) => (
            <article key={topic} className="stack-item">
              <h3>{topic}</h3>
              <p>適合延伸為品牌觀點、客戶教育與搜尋流量入口內容。</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-block cta-band">
        <div className="shell cta-panel">
          <div>
            <span className="section-eyebrow">Let’s build it right</span>
            <h2>如果你正在規劃 AI、知識平台、DPP 或品牌官網，道易可以一起把它做對。</h2>
            <p>從需求釐清、資訊架構到系統落地與內容維運，這會是一個能長期運作的數位方案。</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="button-primary button-large cta-primary">
              立即聯絡我們
            </Link>
            <a className="button-secondary button-large" href="https://daoyidh.com" target="_blank" rel="noreferrer">
              查看現有官網
            </a>
            <p className="cta-helper-text">手機上可直接先點「立即聯絡我們」，再補看方案內容。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
