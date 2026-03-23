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
  homepageResponsePromiseCards,
  contactIntentCards,
  deliveryTracks,
  homepageDecisionStripCards,
  homepageHeuristicScorecard,
  homepageExecutiveScorecards,
} from "@/lib/site";
import { Hero } from "@/components/hero";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { CaseSnapshots } from "@/components/case-snapshots";
import { CaseOverviewStats } from "@/components/case-overview-stats";
import { ConversionCTA } from "@/components/conversion-cta";
import { MobileCtaPreview } from "@/components/mobile-cta-preview";
import { PersonaPlaybook } from "@/components/persona-playbook";

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

export const metadata: Metadata = {
  title: "B2B 成長官網、AI 導入、知識平台與 DPP 首頁",
  description:
    "道易科技協助 B2B 品牌、製造業與研究型組織，把品牌官網升級、案例證據、AI 導入、知識平台與 DPP / Traceability 整成同一套可交付系統；首頁直接提供 shortlist 級價值主張、案例證據、24h 回覆承諾、Email / NDA 備援與低摩擦 contact 起點。",
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

      <section className="homepage-decision-strip" aria-label="首頁快速決策摘要">
        <div className="shell">
          <div className="homepage-decision-strip-grid">
            {homepageDecisionStripCards.map((item) => (
              <article key={item.title} className="feature-surface homepage-decision-strip-card">
                <span className="mini-label accent">{item.label}</span>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
                <ul className="bullet-list compact homepage-decision-strip-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link href={item.href} className="button-secondary inline-button homepage-decision-strip-button">
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block homepage-executive-scorecards" aria-label="首頁執行級判斷摘要">
        <div className="shell">
          <div className="section-heading">
            <span className="section-eyebrow">Executive scorecard</span>
            <h2>把成熟 B2B / SaaS 官網常見的高轉換結構，壓成決策者一眼看得懂的三張卡。</h2>
            <p>這輪依照 Veza Digital、ALM 等整理出的共通原則，補強「5 秒內定位、證據要能被複述、手機也要先看到下一步」三件事。</p>
          </div>
          <div className="card-grid three-up homepage-executive-scorecard-grid">
            {homepageExecutiveScorecards.map((item) => (
              <article key={item.title} className="card homepage-executive-scorecard-card">
                <span className="mini-label accent">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <strong>{item.proof}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="homepage-benchmark-band" aria-label="首頁決策基準與競品啟發">
        <div className="shell">
          <div className="homepage-benchmark-head">
            <div>
              <span className="mini-label accent">What strong B2B sites do</span>
              <h2>先把競品有效的轉換邏輯翻成道易買方看得懂的判斷基準。</h2>
              <p>綜合本輪參考的 SaaS / consulting / B2B agency 官網做法：高表現首頁不是只更漂亮，而是更快回答「是不是適合我、做過什麼、現在怎麼低風險開始」。</p>
            </div>
          </div>
          <div className="card-grid four-up homepage-heuristic-grid">
            {homepageHeuristicScorecard.map((item) => (
              <article key={item.title} className="card homepage-heuristic-card">
                <span className="mini-label accent">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <strong>{item.action}</strong>
              </article>
            ))}
          </div>
          <div className="homepage-before-after-table" aria-label="道易首頁優化前後判斷差異">
            <div className="homepage-before-after-header">
              <span>題目</span>
              <span>常見弱訊號</span>
              <span>本版優化方向</span>
            </div>
            {homepageBeforeAfterRows.map((item) => (
              <article key={item.topic} className="homepage-before-after-row">
                <strong>{item.topic}</strong>
                <p>{item.before}</p>
                <p>{item.after}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="homepage-evidence-snapshot" aria-label="首頁快速案例證據">
        <div className="shell">
          <div className="homepage-evidence-snapshot-head">
            <div>
              <span className="mini-label accent">Evidence snapshot</span>
              <h2>首屏下方直接補三種代表交付，讓買方更快 shortlist。</h2>
              <p>吸收 Directive 與近期 B2B / SaaS 官網共通做法：不要先塞更多解釋，先把買方最容易複述的案例型態、交付樣態與適合團隊放到前 2 屏。</p>
            </div>
            <Link href="/#proof-ledger" className="button-secondary inline-button homepage-evidence-snapshot-link">
              看完整案例證據
            </Link>
          </div>

          <div className="homepage-trust-strip-grid homepage-context-chip-grid">
            {heroClients.map((item) => (
              <article key={item.name} className="homepage-trust-chip">
                <span>{item.context}</span>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>

          <div className="card-grid three-up homepage-evidence-snapshot-grid">
            {homepageCompactCaseEvidence.map((item) => (
              <article key={item.title} className="card homepage-evidence-snapshot-card">
                <span className="mini-label accent">{item.label}</span>
                <h3>{item.title}</h3>
                <strong>{item.evidence}</strong>
                <p>{item.detail}</p>
                <small>{item.outcome}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="why-now"
        eyebrow="Start without friction"
        title="如果你現在就要判斷值不值得談，先看這三件事就夠。"
        description="首頁中前段保留一個主要 CTA、明確 reassurance，以及敏感專案也能接受的次要路徑，讓高意圖訪客能直接開始。"
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
        <div className="proof-ledger-intro">
          <p>把案例證據拆成三種買方更容易判斷的標示：<strong>Verified delivery</strong> 代表已有真實交付能力，<strong>Delivery blueprint</strong> 代表已可明確定義輸出內容，<strong>Best-fit teams</strong> 則幫助訪客快速對位自己的專案類型。</p>
        </div>
        <div className="card-grid three-up proof-ledger-grid">
          {verifiedProofLedger.map((item) => (
            <article key={item.title} className="card proof-ledger-card">
              <div className="proof-ledger-card-topline">
                <span className="mini-label accent">{item.label}</span>
                <span className="proof-ledger-status">{item.status}</span>
              </div>
              <h3>{item.title}</h3>
              <div className="proof-ledger-meta-row">
                <strong>{item.proof}</strong>
                <span className="proof-ledger-source">{item.source}</span>
              </div>
              <p>{item.detail}</p>
              <ul className="bullet-list compact proof-ledger-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="proof-ledger-footer">
                <small>{item.confidence}</small>
                <span>{item.bestFit}</span>
              </div>
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

        <div className="card-grid three-up" style={{ marginTop: 20 }}>
          {homepageRoleDecisionCards.map((item) => (
            <article key={item.title} className="card homepage-shortlist-scenario-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.outcome}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Buyer playbooks"
        title="讓品牌、營運、永續三種買方，用自己的語言更快判斷要不要找道易。"
        description="這一段吸收 2026 SaaS / agency 常見的 role-based messaging：不是只說服務，而是直接對應不同決策角色的阻力、預期成果與最適合的下一步。"
      >
        <PersonaPlaybook />
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
        description="首頁只留兩個代表情境，讓案例敘事更快被讀完，也更容易記住道易擅長處理的案型。"
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
        description="成熟 B2B 站不只給一個 CTA，而是同時保留低摩擦 brief、敏感案 Email / NDA，以及先看交付節奏的入口。"
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
            <h2>提前回答採購、資訊、品牌與營運團隊最常卡住的問題。</h2>
            <p>這一段刻意把「能不能先開始、敏感案怎麼處理、第一次需要準備什麼」一起寫進來，兼顧 SEO 長尾查詢與實際轉換前疑慮。</p>
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
