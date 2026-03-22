import type { Metadata } from "next";
import Link from "next/link";
import {
  cases,
  caseSnapshots,
  differentiators,
  faqs,
  proofPoints,
  siteConfig,
  solutions,
  testimonials,
  mobileExperienceHighlights,
  seoGuardrails,
  auditOffer,
  homepageContactProof,
  urgencySignals,
  homepageCaseStories,
  homepageDecisionCards,
  contactFastFacts,
  contactCommitments,
  contactPrepChecklist,
  homepageContactRoutes,
  heroDecisionMetrics,
  verifiedProofLedger,
  engagementPackages,
  engagementSteps,
  homepageTrustStrip,
  homepageResponseTimeline,
  homepageCompactCaseEvidence,
  homepageBuyerFitCards,
  homepageContactCompare,
  heroClients,
  homepageBeforeAfterRows,
  homepageContactMicrocopy,
  homepageDecisionSnapshot,
  homepageResponsePromiseCards,
  homepageFirstScanEvidence,
  contactIntentCards,
  deliveryTracks,
  homepageShortlistScenarios,
  homepageFirstResponseKit,
} from "@/lib/site";
import { Hero } from "@/components/hero";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { CaseSnapshots } from "@/components/case-snapshots";
import { CaseOverviewStats } from "@/components/case-overview-stats";
import { ConversionCTA } from "@/components/conversion-cta";
import { MobileCtaPreview } from "@/components/mobile-cta-preview";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const caseSnapshotSchema = {
  "@context": "https://schema.org",
  "@graph": caseSnapshots.map((snapshot) => ({
    "@type": "CaseStudy",
    name: snapshot.title,
    description: snapshot.summary,
    url: `${siteConfig.url}${snapshot.href}`,
    audience: {
      "@type": "Audience",
      audienceType: snapshot.label,
    },
    industry: snapshot.context,
    measurementTechnique: snapshot.metrics.map((metric) => `${metric.label}: ${metric.value} (${metric.detail})`),
    abstract: snapshot.highlights.join("；"),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  })),
};

const contactHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "如何開始與道易科技討論 B2B 官網、AI 或 DPP 專案",
  description: "用 Quick Brief、Email 或推薦 sprint 三種低摩擦方式開始，並在 24 小時內收到具體下一步。",
  totalTime: "PT24H",
  step: homepageContactCompare.map((item, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: item.title,
    text: `${item.detail}（${item.meta}）`,
  })),
};

const homepageJumpLinks = [
  { label: "看現在適不適合談", href: "#why-now" },
  { label: "看案例證據", href: "#proof-ledger" },
  { label: "看合作起點", href: "#decision-paths" },
  { label: "直接送出 brief", href: "#quick-brief" },
];

const homepageStartNowCards = [
  {
    label: "適合誰先來談",
    title: "舊站有流量，但價值主張、案例證據或 CTA 還不夠強",
    detail: "這類型通常先從首頁訊息澄清、案例排序與 Contact 路徑優化開始，最快看出差異。",
  },
  {
    label: "第一次會拿到什麼",
    title: "不是只有報價，而是先拿到優先順序、阻力點與推薦 sprint",
    detail: "把買方常見的不確定感直接拆掉，讓第一次接洽就更接近真正合作流程。",
  },
  {
    label: "敏感專案也能開始",
    title: "如果牽涉 NDA、採購、法遵或既有系統文件，也可先用 Email 小步開始",
    detail: "保留低摩擦 contact flow，讓高敏感度專案不用一開始就填很長的表單。",
  },
];

const homepageRoleDecisionCards = [
  {
    label: "Brand / Marketing",
    title: "品牌與行銷團隊：先補清楚定位、案例證據與首屏 CTA。",
    detail: "如果你最在意的是『流量有了，但詢問品質不穩』，通常先從 hero、proof 與 Contact 路徑開始最有效。",
    outcome: "第一次接洽後可先拿到首頁訊息優先順序與 quick wins。",
  },
  {
    label: "Operations / IT",
    title: "營運與資訊團隊：先把 AI、資料欄位與 SOP 接成可採用流程。",
    detail: "如果 PoC 已有方向，但驗收、角色分工與資料 contract 還不夠清楚，首頁要先把這種交付能力講明白。",
    outcome: "第一次接洽後可先界定 MVP、欄位與流程節點。",
  },
  {
    label: "ESG / Compliance",
    title: "永續與法遵團隊：先講清楚 DPP / traceability 怎麼真正啟動。",
    detail: "如果內部已開始談法規、供應鏈透明或審查資料，但還沒有對外可理解的敘事與體驗，這會是優先切口。",
    outcome: "第一次接洽後可先拿到欄位藍圖、QR 體驗與審查輸出方向。",
  },
  {
    label: "Research / Knowledge",
    title: "研究與知識平台團隊：先把複雜內容整理成可被查詢、理解與再利用。",
    detail: "如果資料跨語言、跨版本、跨欄位，真正的價值不是頁面多，而是決策者與使用者都能快速看懂系統價值。",
    outcome: "第一次接洽後可先對焦資訊架構、檢索路徑與案例說服力。",
  },
];

const homepageBenchmarkLearnings = [
  {
    label: "Clarity within 5 seconds",
    title: "高表現 B2B / SaaS 首屏會先完成：對象、結果、下一步。",
    detail: "這輪把首頁前段再往『誰適合、先拿到什麼、怎麼低風險開始』收斂，避免訪客先被大量服務敘述淹沒。",
    action: "對應調整：補上首頁診斷摘要與 first-response kit。",
  },
  {
    label: "Proof near CTA",
    title: "案例證據、回覆承諾與 CTA 要在同一段掃讀內成立。",
    detail: "競品多半不是把 proof 放得更後面，而是把結果訊號、交付樣態與 contact reassurance 更早前置。",
    action: "對應調整：在 Quick Brief 前再補一層 evidence + reassurance。",
  },
  {
    label: "Mobile first reassurance",
    title: "手機版要先讓人敢點，而不是先讓人讀完整頁。",
    detail: "高轉換站常把 24h 回覆、短表單、Email / NDA 備援與適合對象放進拇指可達區附近。",
    action: "對應調整：新增手機友善的 project-start 區塊與更短的 contact microcopy。",
  },
];

const homepageExecutiveSummary = [
  "如果你是要重做 B2B 官網、整理案例說服力、補強 Contact 詢問品質，這一版首頁就是先為這類案型設計。",
  "如果專案牽涉 AI、資料欄位、DPP 或既有系統串接，首頁會先講清楚交付能力，而不是只講設計語氣。",
  "如果案子敏感，也可直接走 Email + NDA，不必先填長表單或把資訊一次說完。",
];

export const metadata: Metadata = {
  title: "B2B 成長官網、AI 導入、知識平台與 DPP 首頁",
  description:
    "道易科技協助 B2B 品牌、製造業與研究型組織，把品牌官網升級、案例證據、AI 導入、知識平台與 DPP / Traceability 整成同一套可交付系統；首頁直接提供案例證據、24h 回覆承諾與低摩擦 contact 起點。",
  keywords: [
    "B2B 官網改版",
    "AI 導入",
    "知識平台",
    "DPP",
    "Traceability",
    "製造業官網",
    "B2B 網站設計",
    "案例頁優化",
  ],
  alternates: { canonical: "/" },
};




export default function Home() {
  return (
    <main id="main-content">
      <Hero />

      <section className="homepage-jump-nav" aria-label="首頁快速導覽">
        <div className="shell">
          <div className="homepage-jump-nav-inner">
            <span className="mini-label accent">Quick path</span>
            <div className="homepage-jump-link-row">
              {homepageJumpLinks.map((item) => (
                <a key={item.href} href={item.href} className="homepage-jump-link">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="homepage-trust-strip" aria-label="道易合作信任條件">
        <div className="shell">
          <div className="homepage-trust-strip-grid">
            {homepageTrustStrip.map((item) => (
              <article key={item.label} className="homepage-trust-chip">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="homepage-trust-strip" aria-label="道易常見合作脈絡">
        <div className="shell">
          <div className="homepage-trust-strip-grid">
            {heroClients.map((item) => (
              <article key={item.name} className="homepage-trust-chip">
                <span>{item.context}</span>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="homepage-opening-band" aria-label="首頁前段成交摘要">
        <div className="shell">
          <div className="homepage-opening-band-inner">
            <div className="homepage-opening-band-copy">
              <span className="mini-label accent">Why teams contact DaoYi</span>
              <h2>先講清楚：適不適合你、做過哪些交付、現在怎麼低摩擦開始。</h2>
              <p>這輪依照 ALM 與 Veza Digital 提到的 clarity / proof / friction reduction 原則，把首頁前段收斂成更短的 decision flow，減少重複判斷卡。</p>
            </div>
            <div className="homepage-opening-band-pills" aria-label="首頁前段核心訊號">
              <p className="homepage-conversion-pill">一句話先說清楚 B2B 官網、AI、知識平台、DPP 四種主軸</p>
              <p className="homepage-conversion-pill">案例證據與交付樣態比品牌自述更早出現</p>
              <p className="homepage-conversion-pill">Quick Brief、Email / NDA、24h 回覆同步可見</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Shortlist scenarios"
        title="先讓三種最常見的高意圖專案，在前段就找到自己的切口。"
        description="這輪吸收 Linear 的 role-aware 首屏敘事、Intercom 的 system-first clarity，以及 Metajive case page 常見的『成果 / 起手方式 / mobile 簡化』做法：先讓品牌、營運、法遵型買方各自快速對號入座。"
      >
        <div className="card-grid three-up homepage-shortlist-scenario-grid">
          {homepageShortlistScenarios.map((item) => (
            <article key={item.title} className="card homepage-shortlist-scenario-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.outcome}</strong>
            </article>
          ))}
        </div>

        <div className="homepage-first-response-kit" aria-label="第一次接洽前的保證訊號">
          {homepageFirstResponseKit.map((item) => (
            <article key={item.title} className="feature-surface homepage-first-response-kit-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Decision snapshot"
        title="先用四張卡，把首頁最重要的判斷一次講完。"
        description="延續 ALM、Veza Digital 與 Genesys Growth 反覆提到的原則：高意圖買方通常只想先知道適不適合、做過什麼、怎麼開始，以及手機上會不會卡住。"
      >
        <div className="card-grid two-up homepage-decision-snapshot-grid">
          {homepageDecisionSnapshot.map((item) => (
            <article key={item.title} className="card homepage-decision-snapshot-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.proof}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Homepage decision flow"
        title="把成熟 B2B / SaaS 首頁最重要的 proof、fit 與 CTA，濃縮成一段就看懂。"
        description="這輪不再堆疊多組相似 scorecard，而是保留更像 shortlist 材料的核心區：先講 proof，再講適合誰，最後講怎麼開始。"
      >
        <div className="card-grid three-up homepage-first-scan-grid">
          {homepageFirstScanEvidence.map((item) => (
            <article key={item.title} className="card homepage-first-scan-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.proof}</strong>
            </article>
          ))}
        </div>

        <div className="homepage-before-after-table" aria-label="首頁優化前後差異" style={{ marginTop: 24 }}>
          <div className="homepage-before-after-header">
            <span>項目</span>
            <span>常見舊站狀態</span>
            <span>這版首頁做法</span>
          </div>
          {homepageBeforeAfterRows.map((item) => (
            <article key={item.topic} className="homepage-before-after-row">
              <strong>{item.topic}</strong>
              <p>{item.before}</p>
              <p>{item.after}</p>
            </article>
          ))}
        </div>

        <div className="feature-surface" style={{ marginTop: 20 }}>
          <span className="mini-label accent">Contact reassurance</span>
          <h3 style={{ marginTop: 10 }}>第一次詢問前先把顧慮講清楚，通常比再多一段公司介紹更能提高有效轉換。</h3>
          <ul className="bullet-list compact" style={{ marginTop: 14 }}>
            {homepageContactMicrocopy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Real delivery evidence"
        title="與其說很多服務，不如先用三種已交付樣態建立信任。"
        description="參考 Proofmap 對高成長 SaaS case study 的整理：買方更在意是否有真實場景、明確交付與可記住的結果訊號。"
      >
        <div className="card-grid three-up compact-case-evidence-grid">
          {homepageCompactCaseEvidence.map((item) => (
            <article key={item.title} className="card compact-case-evidence-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <strong>{item.evidence}</strong>
              <p>{item.detail}</p>
              <small>{item.outcome}</small>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="why-now"
        eyebrow="Start without friction"
        title="如果你現在就要判斷值不值得談，先看這三件事就夠。"
        description="這輪把 Directive 與近年高轉換 B2B landing page 常見做法內化成首頁中前段的『立即開始區』：一個主要 CTA、明確 reassurance、以及敏感專案也能接受的次要路徑。"
      >
        <div className="card-grid three-up homepage-start-now-grid">
          {homepageStartNowCards.map((item) => (
            <article key={item.title} className="feature-surface homepage-start-now-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>


      <Section
        eyebrow="Project fit in one scan"
        title="讓不同類型的買方，用一眼就知道自己比較像哪一種專案。"
        description="吸收 Veza Digital 的 clarity / friction reduction 與 Genesys Growth 提到的 outcome-first、mobile-first landing page 寫法後，這輪把『適合誰先談』做成更像篩選器的三張卡。"
      >
        <div className="card-grid three-up homepage-buyer-fit-grid">
          {homepageBuyerFitCards.map((item) => (
            <article key={item.title} className="feature-surface homepage-buyer-fit-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.cues.map((cue) => (
                  <li key={cue}>{cue}</li>
                ))}
              </ul>
              <Link href={item.href} className="button-secondary inline-button">
                {item.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="homepage-executive-summary feature-surface" style={{ marginTop: 20 }}>
          <div>
            <span className="mini-label accent">Executive summary</span>
            <h3 style={{ marginTop: 10 }}>給高意圖買方的一段話版本：先判斷值不值得談，再決定要不要往下看完整頁。</h3>
          </div>
          <ul className="bullet-list compact" style={{ marginTop: 14 }}>
            {homepageExecutiveSummary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="This round’s benchmark learnings"
        title="把競品值得學的 conversion pattern，直接轉成道易首頁可用的寫法。"
        description="本輪參考 ALM、Veza Digital、Webflow Consulting examples 的共通點：越成熟的 B2B 官網，越會把 clarity、proof、CTA 與 mobile reassurance 收在同一個 decision flow 裡。"
      >
        <div className="card-grid three-up homepage-benchmark-grid">
          {homepageBenchmarkLearnings.map((item) => (
            <article key={item.title} className="card homepage-benchmark-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.action}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Role-based decision flow"
        title="不只分專案類型，也讓不同角色一眼知道自己要先看哪個切口。"
        description="這輪參考 Databox、Boomi、Partful 一類成熟 B2B / SaaS 站常見的 role-aware messaging：讓品牌、營運、永續、研究型團隊更快對號入座，而不是讀完整站後才發現適不適合。"
      >
        <div className="card-grid two-up homepage-role-decision-grid">
          {homepageRoleDecisionCards.map((item) => (
            <article key={item.title} className="feature-surface homepage-role-decision-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.outcome}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="First-response 設計"
        title="第一次接洽先拿到判斷依據，而不是只留下一封沒有下文的詢問。"
        description="先把 response SLA、聯絡分流與起手交付提早講清楚，減少決策者第一次接洽的不確定感。"
      >
        <div className="card-grid three-up">
          {heroDecisionMetrics.map((item) => (
            <article key={item.label} className="card proof-narrative-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.value}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="card-grid three-up homepage-contact-route-grid">
          {homepageContactRoutes.map((item) => {
            const isExternal = item.href.startsWith("mailto:");

            return (
              <article key={item.title} className="feature-surface homepage-contact-route-card">
                <span className="mini-label accent">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                {isExternal ? (
                  <a href={item.href} className="button-secondary inline-button">
                    {item.cta}
                  </a>
                ) : (
                  <Link href={item.href} className="button-secondary inline-button">
                    {item.cta}
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </Section>

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
        id="proof-ledger"
        eyebrow="案例證據先講"
        title="先讓訪客看到道易到底交付過哪一類成果。"
        description="參考 ALM / Webflow / Axon Garside 常見做法，把抽象能力改成可辨識的『交付樣態 + 可驗證內容』，補強首頁的真實感。"
      >
        <div className="card-grid three-up proof-ledger-grid">
          {verifiedProofLedger.map((item) => (
            <article key={item.title} className="card proof-ledger-card">
              <div className="proof-ledger-card-topline">
                <span className="mini-label accent">{item.label}</span>
                <span className="proof-ledger-status">{item.status}</span>
              </div>
              <h3>{item.title}</h3>
              <strong>{item.proof}</strong>
              <p>{item.detail}</p>
              <ul className="bullet-list compact proof-ledger-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <small>{item.confidence}</small>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="decision-paths"
        eyebrow="下一步判斷"
        title="先幫訪客判斷：現在最該從哪個切口開始。"
        description="參考 Blend、Amply 與技術型 B2B 官網常見做法，把『適合誰、先做什麼、為什麼現在值得聯絡』濃縮成同一段，讓首頁更像決策輔助，而不是資訊陳列。"
      >
        <div className="card-grid three-up homepage-decision-grid">
          {homepageDecisionCards.map((item) => (
            <article key={item.title} className="feature-surface homepage-decision-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="decision-card-meta">
                <strong>{item.benchmark}</strong>
                <small>{item.proof}</small>
              </div>
              <Link href={item.href} className="button-secondary inline-button">
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Contact timeline"
        title="把第一次詢問到可執行下一步的節奏，直接在首頁說清楚。"
        description="參考 Stan Vision 與 2025-2026 多個高轉換 B2B / agency contact flow，買方最需要的不是更多形容詞，而是明確知道：送出後會發生什麼。"
      >
        <div className="card-grid three-up homepage-response-grid">
          {homepageResponseTimeline.map((item) => (
            <article key={item.step} className="feature-surface homepage-response-card">
              <span className="mini-label accent">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="card-grid three-up homepage-response-promise-grid">
          {homepageResponsePromiseCards.map((item) => (
            <article key={item.title} className="card homepage-response-promise-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="card-grid three-up homepage-contact-compare-grid">
          {homepageContactCompare.map((item) => (
            <article key={item.title} className="card homepage-contact-compare-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.meta}</strong>
            </article>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactHowToSchema) }} />
      </Section>

      <Section
        eyebrow="代表案例敘事"
        title="先用兩個代表場景看懂道易怎麼把 challenge 變成可交付結果。"
        description="這輪參考 JoinAmply、Proofmap 與高轉換 agency 首頁做法：首頁只留兩個代表情境，讓案例敘事更快被讀完。"
      >
        <div className="case-story-grid">
          {homepageCaseStories.slice(0, 2).map((item) => (
            <article key={item.title} className="case-story-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <div className="case-story-block">
                <strong>Challenge</strong>
                <p>{item.challenge}</p>
              </div>
              <div className="case-story-block">
                <strong>Solution</strong>
                <p>{item.solution}</p>
              </div>
              <div className="case-story-outcome">{item.outcome}</div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="合作方案 / Engagement"
        title="不必先想清楚全部需求，也能先找到最適合的啟動方式。"
        description="參考成熟 B2B / agency 官網常見的 package-first 寫法，把時程、交付與適合情境提前講清楚，讓第一次接洽更容易進入具體討論。"
      >
        <div className="card-grid three-up engagement-package-grid">
          {engagementPackages.map((item) => (
            <article key={item.title} className="card engagement-package-card">
              <span className="mini-label accent">{item.timeline}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
              <p className="engagement-package-fit">{item.fit}</p>
            </article>
          ))}
        </div>
        <div className="engagement-step-strip" aria-label="合作啟動節奏">
          {engagementSteps.map((item) => (
            <article key={item.step} className="feature-surface engagement-step-card">
              <span className="mini-label accent">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.proof}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="先做一輪診斷"
        title="對還在觀望的 B2B 決策者，先給一個低摩擦、可交付的起手式。"
        description="參考高轉換 agency / SaaS 首頁常見做法，把 first offer 寫清楚：不是抽象『聊聊』，而是先拿到一份可用的判斷依據。"
      >
        <div className="card-grid three-up">
          {auditOffer.map((item) => (
            <article key={item.title} className="card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="feature-surface quick-brief-note">
          <span className="mini-label accent">適合現在就開始的情況</span>
          <ul className="bullet-list compact">
            {urgencySignals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="quick-brief-meta">這種「先診斷、再提案」的起手式，通常比直接丟大而空的服務介紹，更能降低第一次詢問門檻。</p>
        </div>
      </Section>


      <Section
        eyebrow="How engagement starts"
        title="先把三種最常見的啟動方式擺在首頁，讓不同成熟度的買方都能直接開始。"
        description="這輪吸收 ALM、Veza Digital 與 Sitebuilder Report 的共通模式：成熟 B2B 站不只給一個 CTA，而是同時保留低摩擦 brief、敏感案 Email / NDA，以及先看交付節奏的入口。"
      >
        <div className="card-grid three-up">
          {contactIntentCards.map((item) => (
            <article key={item.title} className="feature-surface contact-intent-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <a href={item.href} className="button-secondary inline-button">{item.cta}</a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What you actually get"
        title="不只說服務名稱，而是直接揭露每條 sprint 會交付什麼。"
        description="競品研究顯示，當買方能更快看到 deliverables、風險控制與後續優化節奏，對第一次接洽的信任感會明顯提高。這段把道易的交付說法做得更像 decision pack。"
      >
        <div className="card-grid three-up">
          {deliveryTracks.map((track) => (
            <article key={track.title} className="card package-card">
              <span className="mini-label accent">Delivery track</span>
              <h3>{track.title}</h3>
              <p>{track.summary}</p>
              <ul className="bullet-list compact">
                {track.outputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="手機 / SEO 體驗"
        title="行動優先 CTA 與結構化資料，讓訪客 3 秒內找到下一步。"
        description="依據 2026 SaaS 官網統計配置 sticky CTA、拇指區導覽與 JSON-LD，確保手機流量與搜尋流量都能即時轉換。"
      >
        <div className="mobile-experience-grid">
          {mobileExperienceHighlights.map((item) => (
            <article key={item.title} className="feature-surface mobile-experience-card">
              <span className="mini-label accent">{item.metric}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="seo-guardrail-card">
          <span className="mini-label">SEO / AI Overview guardrails</span>
          <ul>
            {seoGuardrails.map((guardrail) => (
              <li key={guardrail.title}>
                <strong>{guardrail.title}</strong>
                <p>{guardrail.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <MobileCtaPreview />
      </Section>

      <Section eyebrow="解決方案" title="聚焦三種高價值數位解法，對應品牌、流程與永續升級需求。">
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

      <Section eyebrow="案例實績" title="從研究平台到產業場域，成果可以被看見，也能被驗證。">
        <CaseOverviewStats />
        <div className="card-grid three-up">
          {cases.map((item) => (
            <article key={item.title} className="card case-card">
              <span className="mini-label accent">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.impact}</strong>
              <Link href={`/cases#${item.slug}`} className="button-secondary button-small case-link">查看案例細節</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="3 秒看懂成果"
        title="互動式案例快照，讓訪客在首屏就理解流程、KPI 與 CTA。"
        description="參考 Stan Vision / Veza Digital 案例，把可被驗證的數據與行動提示直接結合案例，減少再往下找資料的時間。"
      >
        <CaseSnapshots />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSnapshotSchema) }} />
      </Section>

      <Section eyebrow="信任憑證" title="把成果具體化，用可被量測的證據與回饋降低決策風險。">
        <div className="proof-grid">
          {proofPoints.map((item) => (
            <article key={item.label} className="proof-card">
              <span className="proof-value">{item.value}</span>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="客戶評語" title="第三方視角：客戶怎麼看道易的交付方式？">
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.client} className="testimonial-card">
              <p className="quote">“{item.quote}”</p>
              <div className="testimonial-meta">
                <strong>{item.client}</strong>
                <span>{item.role}</span>
                <p className="result">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="CTA after proof"
        title="社會證明後立即提供行動入口，行動版也能隨時預約。"
        description="參考 LandingPageFlow 的 sticky footer / mid-page CTA 作法，讓剛看完案例與推薦的人不用再往回找表單。"
      >
        <ConversionCTA />
      </Section>

      <Section
        eyebrow="為什麼值得談"
        title="把差異講短一點，但更像決策資訊，而不是補充閱讀。"
        description="本輪刻意拿掉首頁後段重複的角色分眾 CTA，保留真正有助於成交判斷的差異資訊。"
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

      <section className="section-block faq-block">
        <div className="shell">
          <div className="section-heading">
            <span className="section-eyebrow">常見問題</span>
            <h2>提前回答採購、資訊與營運團隊最關心的問題。</h2>
            <p>這些問答同時對應 SEO 長尾查詢，減少往返溝通。</p>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <article key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </section>


      <Section
        eyebrow="先把風險講清楚"
        title="第一次聯絡前最在意的三件事，也直接在首頁回答。"
        description="參考 2026 高轉換 B2B / SaaS 官網的 friction-reduction 做法，把回覆速度、第一次會議準備與 NDA / 敏感資料顧慮寫清楚，降低第一次詢問門檻。"
      >
        <div className="contact-readiness-grid">
          <div className="contact-commitments-grid">
            {contactCommitments.map((item) => (
              <article key={item.title} className="feature-surface contact-commitment-card">
                <span className="mini-label accent">Risk removal</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="contact-prep-grid">
            {contactPrepChecklist.map((group) => (
              <article key={group.title} className="card prep-card">
                <span className="mini-label accent">Meeting readiness</span>
                <h3>{group.title}</h3>
                <ul className="bullet-list compact">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="快速提案" title="現在只給三個資訊，先拿到具體下一步。">
        <div className="feature-surface homepage-project-start-strip" style={{ marginBottom: 20 }}>
          <div>
            <span className="mini-label accent">Project start options</span>
            <h3 style={{ marginTop: 10 }}>不想先讀完整站也沒關係，直接選最適合你的起手方式。</h3>
            <p style={{ marginTop: 10 }}>這裡把成熟 B2B / agency 常見的低摩擦 contact flow 收斂成三句話：快速拿建議、敏感案可先 NDA、以及第一次回覆會附帶具體下一步。</p>
          </div>
          <div className="homepage-project-start-pills">
            <p className="homepage-conversion-pill">想先知道首頁 / Contact 怎麼補 → 直接送出 3 欄 Quick Brief</p>
            <p className="homepage-conversion-pill">案子偏敏感或已經有文件 → 先 Email，必要時先 NDA</p>
            <p className="homepage-conversion-pill">24h 內先回覆建議切入點、會議方向與待補材料</p>
          </div>
        </div>
        <div className="quick-brief-grid">
          <QuickBriefForm />
          <div className="feature-surface quick-brief-note">
            <span className="mini-label accent">What happens next</span>
            <h3>提交後 5 分鐘內寄出郵件草稿，24 小時內安排會議。</h3>
            <ul className="bullet-list compact">
              <li>系統會自動帶入郵件主旨與內容，可再補充檔案或說明。</li>
              <li>我們會回覆 30 分鐘線上討論時段或提供初步規劃重點。</li>
              <li>若需要 NDA，可在郵件內直接附上或索取模板。</li>
            </ul>
            <div className="contact-fast-facts" aria-label="聯絡重點">
              {contactFastFacts.map((item) => (
                <div key={item.label} className="contact-fast-fact">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <div className="contact-proof-list">
              {homepageContactProof.map((item) => (
                <p key={item} className="contact-proof-pill">{item}</p>
              ))}
            </div>
            <p className="quick-brief-meta">表單資料僅作為初步聯繫參考，不會被儲存於網站伺服器。</p>
          </div>
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
