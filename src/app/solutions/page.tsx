import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  solutionDetails,
  solutionCaseEvidence,
  solutionFaqs,
  solutionImplementationSteps,
  solutionScenarios,
  solutionStartModes,
  solutionsHero,
  solutionTechValues,
} from "@/lib/content/solutions";
import { createPageMetadata } from "@/lib/metadata";
import { publicAssetPath, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "解決方案選型｜DPP、ESG 稽核、AI-Ontology 與 AIoT 回收履歷",
  description: "用 30 秒情境選型，判斷道易科技的數據信任鏈、DPP 數位產品護照、AI-Ontology 知識平台與 AIoT 回收履歷整合適合從哪裡開始。",
  path: "/solutions",
});

const emailNdaHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想先用 Email / NDA 討論可信資料平台")}&body=${encodeURIComponent("您好，我想先與道易討論可信資料平台需求。\n\n目前情境：\n可能涉及的資料：\n希望先確認的範圍：\n是否需要 NDA：\n\n謝謝。")}`;

const solutionVisuals = {
  "data-trust-chain": {
    label: "Audit proof",
    nodes: ["Source", "Hash", "Root", "Audit"],
    accent: "mint",
  },
  "dpp-product-passport": {
    label: "Product passport",
    nodes: ["Product", "QR", "Lifecycle", "Disclosure"],
    accent: "blue",
  },
  "ai-ontology-platform": {
    label: "Knowledge graph",
    nodes: ["Text", "Entity", "Relation", "Search"],
    accent: "teal",
  },
  "aiot-traceability": {
    label: "AIoT traceability",
    nodes: ["Device", "Vision", "Batch", "Record"],
    accent: "green",
  },
} as const;

function SolutionHeroVisual() {
  return (
    <div className="solutions-hero-art" aria-label="可信資料平台 3D 示意圖">
      <Image
        src={publicAssetPath("/assets/solutions-hero-data-crystal.png")}
        alt="分散資料透過安全管道匯聚成透明可信資料晶體"
        width={1024}
        height={572}
        priority
        sizes="(max-width: 1100px) 100vw, 52vw"
      />
    </div>
  );
}

function SolutionConceptIcon({ id }: { id: keyof typeof solutionVisuals }) {
  const visual = solutionVisuals[id];

  return (
    <div className={`solution-concept-icon solution-concept-icon-${visual.accent}`} aria-hidden="true">
      <svg viewBox="0 0 320 320">
        <defs>
          <linearGradient id={`iconBase-${id}`} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e7f7f4" />
          </linearGradient>
          <linearGradient id={`iconAccent-${id}`} x1="0%" x2="100%">
            <stop offset="0%" stopColor="#2a9d8f" />
            <stop offset="100%" stopColor="#2f80ed" />
          </linearGradient>
        </defs>
        <path d="M68 188L160 138L252 188L160 238Z" fill={`url(#iconBase-${id})`} stroke="#bce4df" strokeWidth="2" />
        <path d="M68 188L160 238V270L68 220Z" fill="#d3edf2" />
        <path d="M252 188L160 238V270L252 220Z" fill="#bfdee8" />
        <path d="M112 144L160 118L208 144L160 170Z" fill={`url(#iconAccent-${id})`} opacity="0.96" />
        <path d="M112 144V184L160 212V170Z" fill="#258f86" opacity="0.86" />
        <path d="M208 144V184L160 212V170Z" fill="#236fb7" opacity="0.82" />
        {visual.nodes.map((node, index) => {
          const coords = [
            [76, 84],
            [244, 84],
            [76, 254],
            [244, 254],
          ][index];
          return (
            <g key={node}>
              <circle cx={coords[0]} cy={coords[1]} r="24" fill="#ffffff" stroke="#aadbd8" strokeWidth="2" />
              <circle cx={coords[0]} cy={coords[1]} r="9" fill="#2a9d8f" opacity="0.2" />
              <path d={`M${coords[0]} ${coords[1]}C130 124 190 124 160 170`} fill="none" stroke="#73c7c3" strokeWidth="3" strokeLinecap="round" opacity="0.62" />
            </g>
          );
        })}
        <text x="160" y="50" textAnchor="middle" fill="#17364d" fontSize="19" fontWeight="900">{visual.label}</text>
      </svg>
    </div>
  );
}

function ProcessIcon({ index }: { index: number }) {
  const labels = ["Source", "Model", "PoC", "Run"];

  return (
    <div className="solution-process-icon" aria-hidden="true">
      <svg viewBox="0 0 180 180">
        <path d="M34 106L90 74L146 106L90 138Z" fill="#ffffff" stroke="#b8e4df" strokeWidth="2" />
        <path d="M34 106L90 138V154L34 122Z" fill="#d6eef1" />
        <path d="M146 106L90 138V154L146 122Z" fill="#c3e2e9" />
        <circle cx="90" cy="78" r="30" fill="#2a9d8f" opacity="0.16" />
        <circle cx="90" cy="78" r="18" fill="#2a9d8f" />
        <path d="M62 42C78 24 110 24 126 42" fill="none" stroke="#2f80ed" strokeWidth="6" strokeLinecap="round" opacity="0.52" />
        <text x="90" y="84" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="900">{index + 1}</text>
        <text x="90" y="128" textAnchor="middle" fill="#17364d" fontSize="17" fontWeight="900">{labels[index]}</text>
      </svg>
    </div>
  );
}

function startModeHref(label: string) {
  if (label.includes("Email")) {
    return emailNdaHref;
  }

  return `/contact?topic=${encodeURIComponent(label)}`;
}

export default function SolutionsPage() {
  return (
    <main id="main-content" className="solutions-page">
      <section className="solutions-hero">
        <div className="shell solutions-hero-grid">
          <div className="solutions-hero-copy">
            <span className="hero-eyebrow">{solutionsHero.eyebrow}</span>
            <h1>{solutionsHero.title}</h1>
            <p>{solutionsHero.description}</p>
            <div className="hero-actions">
              <Link href="#solution-fit" className="button-primary button-large">判斷適合哪個方案</Link>
              <Link href="/work" className="button-secondary button-large">查看案例實績</Link>
            </div>
          </div>
          <SolutionHeroVisual />
        </div>
      </section>

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
        <div className="solution-detail-grid-cards">
          {solutionDetails.map((item) => (
            <article key={item.id} id={item.id} className="card solution-detail-card">
              <SolutionConceptIcon id={item.id as keyof typeof solutionVisuals} />
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
                <div className="solution-mini-field">
                  <strong>適合誰</strong>
                  <p>{item.audience.slice(0, 2).join("、")}</p>
                </div>
                <div className="solution-mini-field">
                  <strong>常見卡點</strong>
                  <p>{item.problems.slice(0, 2).join("、")}</p>
                </div>
                <div className="solution-mini-field">
                  <strong>道易怎麼做</strong>
                  <p>{item.approach}</p>
                </div>
                <div className="solution-deliverable-box solution-mini-field">
                  <strong>第一階段會交付</strong>
                  <p>{item.deliverables.slice(0, 3).join("、")}</p>
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

      <Section id="solution-flow" eyebrow="落地流程" title="先用小範圍驗證，再把可信資料平台擴出去。">
        <div className="solution-process-timeline">
          {solutionImplementationSteps.map((step, index) => (
            <article key={step.title} className="card process-card solution-process-step">
              <ProcessIcon index={index} />
              <span className="mini-label accent">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="solution-start"
        eyebrow="Recommended start"
        title="不確定完整範圍？先從 PoC、資料盤點或工作坊開始。"
        description="不用一開始就定義完整系統。先把第一批資料、第一條流程或第一個知識主題跑通，會更容易判斷後續投資。"
      >
        <div className="card-grid four-up">
          {solutionStartModes.map((item) => (
            <article key={item.title} className="card solution-start-card">
              <span className="mini-label accent">{item.title}</span>
              <h3>{item.cta}</h3>
              <p>{item.fit}</p>
              <strong>你會拿到</strong>
              <ul className="bullet-list compact">
                {item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
              </ul>
              {item.cta.includes("Email") ? (
                <a href={startModeHref(item.cta)} className="inline-button">從這裡開始</a>
              ) : (
                <Link href={startModeHref(item.cta)} className="inline-button">從這裡開始</Link>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="solution-evidence"
        eyebrow="案例證據"
        title="用已公開案例，看四大方案如何落到實際資料場景。"
        description="這裡只串接目前可公開說明的案例，不新增不存在的客戶、認證或成果承諾。"
      >
        <div className="solution-evidence-grid">
          {solutionCaseEvidence.map((item) => (
            <article key={item.title} className="card solution-evidence-card">
              <span className="mini-label accent">{item.solution}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <Link href="/work" className="button-secondary button-large">查看完整案例</Link>
        </div>
      </Section>

      <Section
        id="solution-tech-value"
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

      <Section
        id="solution-faq"
        eyebrow="FAQ"
        title="常見問題先說清楚，降低第一次接洽的判斷成本。"
      >
        <div className="solution-faq-list">
          {solutionFaqs.map((item) => (
            <article key={item.question} className="card solution-faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <section id="solution-contact" className="section-block">
        <div className="shell">
          <div className="solution-final-cta">
            <span className="section-eyebrow">Next step</span>
            <h2>如果你有一批資料、產品履歷或知識內容需要整理，可以先用最短路徑開始。</h2>
            <p>填寫 Quick Brief，或在涉及商業機密、供應鏈、採購、研發資料時先走 Email / NDA。道易會先協助判斷適合的起手方式與第一次會議需要準備的資料。</p>
            <div className="section-actions">
              <Link href="/contact#quick-brief" className="button-primary button-large">填寫 Quick Brief</Link>
              <a href={emailNdaHref} className="button-secondary button-large">Email / NDA 聯絡</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
