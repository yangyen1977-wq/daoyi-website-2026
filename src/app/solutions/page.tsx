import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  solutionDetails,
  solutionImplementationSteps,
  solutionScenarios,
  solutionStartModes,
  solutionsHero,
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
        title="先用資料情境判斷，不必先理解所有技術名詞。"
        description="如果你還不確定該做 DPP、ESG 稽核、知識平台或回收履歷，先從最接近的資料問題開始。"
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
        title="四個方案對應四種資料問題：產品揭露、稽核證據、知識整理、現場履歷。"
        description="每張卡片只保留判斷需要的資訊：適合誰、卡在哪裡、道易怎麼做、第一階段交付什麼。"
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
                <div className="solution-cta-row">
                  <Link href={`/contact?topic=${encodeURIComponent(item.cta)}`} className="button-primary">
                    {item.cta}
                  </Link>
                </div>
              </div>

              <div className="solution-detail-grid">
                <div className="solution-mini-field">
                  <strong>適合誰</strong>
                  <p>{item.audience.slice(0, 2).join("、")}</p>
                </div>
                <div className="solution-mini-field">
                  <strong>卡在哪裡</strong>
                  <p>{item.problems.slice(0, 2).join("、")}</p>
                </div>
                <div className="solution-mini-field">
                  <strong>道易怎麼做</strong>
                  <p>{item.approach}</p>
                </div>
                <div className="solution-deliverable-box solution-mini-field">
                  <strong>第一階段交付什麼</strong>
                  <p>{item.deliverables.slice(0, 3).join("、")}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="solution-flow"
        eyebrow="落地流程"
        title="從一批資料開始，把可信資料平台做成可驗證的導入路徑。"
        description="先跑通最小資料流程，再決定是否擴大成完整平台。"
      >
        <div className="solution-process-board">
          <div className="solution-process-brief">
            <span className="mini-label accent">Implementation blueprint</span>
            <h3>每一步都要產生可討論、可開發、可驗證的成果。</h3>
            <p>從資料盤點到系統串接，流程重點不是把功能列滿，而是確認哪些資料值得先做、哪些證據節點需要補強，以及第一階段如何交付可用成果。</p>
          </div>
          {solutionImplementationSteps.map((step, index) => (
            <article key={step.title} className="card process-card solution-process-step">
              <div className="solution-process-step-head">
                <div>
                  <span className="solution-process-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                </div>
                <ProcessIcon index={index} />
              </div>
              <p>{step.detail}</p>
              <div className="solution-process-meta">
                <div>
                  <strong>階段輸出</strong>
                  <span>{step.output}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="solution-start"
        eyebrow="Recommended start"
        title="不確定完整範圍？先從 PoC、資料盤點或工作坊開始。"
        description="把第一批資料跑通，比一次規劃完整系統更容易降低風險。"
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

      <section id="solution-contact" className="section-block">
        <div className="shell">
          <div className="solution-final-cta">
            <span className="section-eyebrow">Next step</span>
            <h2>有一批資料、產品履歷或知識內容要整理？先確認第一步。</h2>
            <p>填寫 Quick Brief，或在涉及商業機密時先走 Email / NDA。道易會先判斷適合的起手方式與第一次會議要準備的資料。</p>
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
