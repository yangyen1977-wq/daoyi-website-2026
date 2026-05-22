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
    asset: "/assets/solutions-icon-data-trust-chain.webp",
    alt: "Data Trust Chain 數據信任鏈 3D 概念圖示",
    accent: "mint",
  },
  "dpp-product-passport": {
    label: "Product passport",
    asset: "/assets/solutions-icon-dpp.webp",
    alt: "Digital Product Passport 數位產品護照 3D 概念圖示",
    accent: "blue",
  },
  "ai-ontology-platform": {
    label: "Knowledge graph",
    asset: "/assets/solutions-icon-ai-ontology.webp",
    alt: "AI-Ontology 知識平台 3D 概念圖示",
    accent: "teal",
  },
  "aiot-traceability": {
    label: "AIoT traceability",
    asset: "/assets/solutions-icon-aiot-traceability.webp",
    alt: "AIoT Traceability 回收履歷整合 3D 概念圖示",
    accent: "green",
  },
} as const;

const solutionCardMarks = {
  "data-trust-chain": "TRUST",
  "dpp-product-passport": "DPP",
  "ai-ontology-platform": "ONTO",
  "aiot-traceability": "AIoT",
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
    <div className={`solution-concept-icon solution-concept-icon-${visual.accent}`}>
      <Image
        src={publicAssetPath(visual.asset)}
        alt={visual.alt}
        width={768}
        height={768}
        sizes="(max-width: 760px) 184px, 220px"
      />
    </div>
  );
}

function ProcessIcon({ index }: { index: number }) {
  const icons = [
    {
      src: "/assets/solution-process-data-discovery.webp",
      alt: "盤點資料來源等角立體圖示",
    },
    {
      src: "/assets/solution-process-data-modeling.webp",
      alt: "建立資料模型與證據模型等角立體圖示",
    },
    {
      src: "/assets/solution-process-prototyping.webp",
      alt: "PoC Prototype 等角立體圖示",
    },
    {
      src: "/assets/solution-process-system-integration.webp",
      alt: "串接使用介面與查核流程等角立體圖示",
    },
  ];
  const icon = icons[index];

  return (
    <div className="solution-process-icon">
      <Image
        src={publicAssetPath(icon.src)}
        alt={icon.alt}
        width={640}
        height={640}
        sizes="(max-width: 760px) 104px, 118px"
      />
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
        title="道易把資料建模、可信驗證、AI 輔助與平台整合，轉換成企業決策者看得懂的導入選項。"
        description="你可以依照產品揭露、ESG 稽核、知識平台或現場履歷需求，快速判斷哪一個方案最適合先做 PoC、盤點或完整平台。"
      >
        <div className="solution-detail-grid-cards">
          {solutionDetails.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className="card solution-detail-card"
              data-index={String(index + 1).padStart(2, "0")}
              data-mark={solutionCardMarks[item.id as keyof typeof solutionCardMarks]}
            >
              <div className="solution-card-visual" aria-hidden="true">
                <div className="solution-card-visual-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{solutionCardMarks[item.id as keyof typeof solutionCardMarks]}</strong>
                </div>
                <div className="solution-card-visual-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <SolutionConceptIcon id={item.id as keyof typeof solutionVisuals} />
              </div>
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
