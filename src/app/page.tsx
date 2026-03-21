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
  evidenceMatrix,
  engagementPackages,
  engagementSteps,
  homepageTrustStrip,
  homepageResponseTimeline,
  homepageCompactCaseEvidence,
  homepageBuyerFitCards,
  homepageContactCompare,
  heroClients,
  homepageDecisionBoard,
  homepageBeforeAfterRows,
  homepageSignalStack,
  homepageContactMicrocopy,
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

const homepageFrictionRemovalCards = [
  {
    label: "Clarity within 5 seconds",
    title: "先回答『是不是給我看的』，再談服務內容。",
    detail: "綜合 ALM、Amply、Veza Digital 對高轉換 B2B / SaaS 首頁的共通觀察：第一屏要先講清楚對象、成果與下一步。",
    points: ["一句話講清楚 B2B 官網 / AI / DPP", "首屏直接出現聯絡起點", "案例與信任訊號前置"],
  },
  {
    label: "Show, don’t just tell",
    title: "把代表交付樣態壓成可掃讀證據，而不是抽象能力。",
    detail: "參考 Pixeto 與 JoinAmply 對 SaaS / agency 首頁的整理，成熟站點會把實際畫面、成果與場景貼近 CTA，減少買方自己腦補。",
    points: ["案例先講 challenge / delivery / outcome", "結果訊號緊貼 CTA", "降低作品集式跳出"],
  },
  {
    label: "Mobile-first reassurance",
    title: "手機版先保留 response promise，讓第一次詢問更放心。",
    detail: "行動流量通常是第一次篩選現場，因此這輪刻意把 24h 回覆、NDA-friendly 路徑與 Quick Brief 留在前段可見範圍。",
    points: ["thumb-zone CTA", "短句 reassurance", "Email fallback 同步可見"],
  },
];

const homepageConversionChecklist = [
  "主 CTA 與次 CTA 同時可見，不必回頭找入口",
  "案例證據在首頁前半段就出現，而非埋在後段",
  "手機第一次滾動內就能知道回覆速度與聯絡方式",
  "敏感專案可直接走 Email + NDA 路徑，降低心理阻力",
];

export const metadata: Metadata = {
  title: "B2B 官網改版、AI 導入、知識平台與 DPP 首頁",
  description:
    "道易科技協助 B2B 品牌、製造業與研究型組織，把官網改版、AI 導入、知識平台與 DPP / Traceability 整成同一套可交付系統；首頁直接提供案例證據、24h 回覆承諾與低摩擦 contact 起點。",
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

const homepageShortlistCards = [
  {
    label: "30-second shortlist",
    title: "先看見適配對象與起手式，讓第一次進站不必自己拼圖。",
    detail: "參考 Databox、Wynter、Blend 一類首頁做法，先在前段交代 ICP、代表成果與 next step，比先講完整公司故事更容易留下合格詢問。",
    bullets: ["B2B 品牌 / 製造業 / 研究型組織", "官網、AI、知識平台、DPP 四條路線", "Quick Brief 與 Email fallback 同時可見"],
  },
  {
    label: "Evidence near CTA",
    title: "把交付樣態與回覆承諾放在 CTA 附近，而不是藏到深頁。",
    detail: "吸收 Pixeto、ALM、Proofmap 對 SaaS / agency 首頁的觀察後，這輪持續把案例 snapshot、response SLA 與 contact reassurance 綁在同一段。",
    bullets: ["交付樣態比抽象形容詞更前面", "24h 回覆與 NDA-friendly path 前置", "降低『留資料後會怎樣』的不確定感"],
  },
  {
    label: "Mobile buyer flow",
    title: "手機版先保住 thumb-zone CTA、短句 reassurance 與低摩擦表單。",
    detail: "行動版不是把桌機頁縮小，而是優先保留第一次詢問需要的資訊：怎麼開始、多久回覆、能不能先小步談。",
    bullets: ["sticky CTA 保留在拇指區", "3 欄 brief 維持低摩擦", "Email / NDA 路徑同步可見"],
  },
];

const homepageCompetitiveInsights = [
  {
    label: "2026 pattern 01",
    title: "5 秒內回答『你是誰、做給誰、現在怎麼開始』。",
    detail:
      "整理 Veza Digital 與 ALM 對高轉換 B2B / SaaS 首頁的共通觀察後，可以看到真正有效的 hero 不靠形容詞取勝，而是先把定位、對象與下一步說完。",
    applicationTitle: "套用到道易",
    application:
      "這輪把首頁前段的 benchmark 解釋更前置，讓價值主張、Buyer fit 與 Quick Brief / Email 路徑在更短滾動距離內一起被看見。",
  },
  {
    label: "2026 pattern 02",
    title: "證據要像業務材料，而不是作品集縮圖。",
    detail:
      "ALM 與 Pixeto 都反覆提到：高表現科技 / SaaS 官網會把實際畫面、交付樣態、成果訊號與 social proof 靠近 CTA，而不是藏在深層案例頁。",
    applicationTitle: "套用到道易",
    application:
      "首頁保留『交付樣態 + 結果訊號 + 聯絡 promise』的緊鄰關係，讓第一次進站的人不需要先翻完整案例頁才敢詢問。",
  },
  {
    label: "2026 pattern 03",
    title: "手機版先保住 CTA 與 reassurance，再談完整敘事。",
    detail:
      "從 SaaS / agency 首頁整理可見，mobile-first 不只是排版縮小，而是先把 sticky CTA、response SLA、短表單與 NDA-friendly fallback 留在拇指可達區。",
    applicationTitle: "套用到道易",
    application:
      "這輪把 header、mobile sticky CTA 與 Quick Brief 文案改成更像『先拿到建議』的語氣，降低第一次接洽的心理摩擦。",
  },
];

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

      <Section
        eyebrow="Shortlist in 30 seconds"
        title="把高轉換 B2B / SaaS 首頁常見的三個決策訊號，壓成更快讀完的 shortlist 區。"
        description="綜合 Databox、Wynter、Blend、Pixeto 在 2025-2026 的案例整理：前段最重要的是適配對象、證據貼近 CTA，以及手機版第一次詢問的安心感。"
      >
        <div className="card-grid three-up">
          {homepageShortlistCards.map((item) => (
            <article key={item.title} className="feature-surface homepage-friction-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ul className="bullet-list compact">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="homepage-conversion-band">
          <div className="homepage-conversion-band-copy">
            <span className="mini-label accent">Why this matters</span>
            <h3>首頁前 30 秒先完成 shortlist 判斷，後面的案例、方案與 FAQ 才真的會被看。</h3>
            <p>所以這輪不是再加更多花樣，而是把品牌主張、案例證據、回覆承諾與 contact 起點排得更像決策工具。</p>
          </div>
          <div className="homepage-conversion-band-list" aria-label="首頁前 30 秒需要回答的問題">
            <p className="homepage-conversion-pill">這是不是做給我們這類團隊看的？</p>
            <p className="homepage-conversion-pill">他們是否真的交付過相近型態的專案？</p>
            <p className="homepage-conversion-pill">如果我現在詢問，會多久收到具體下一步？</p>
            <p className="homepage-conversion-pill">若專案敏感，能不能先用 Email / NDA 小步開始？</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="2026 competitor learnings"
        title="把這輪競品學到的三個高轉換原則，直接翻成道易首頁可用做法。"
        description="這不是單純收集漂亮案例，而是把 Veza Digital、ALM、Pixeto 提到的 clarity、evidence-first、mobile-first 轉成更貼近道易的首頁 decision flow。"
      >
        <div className="card-grid three-up">
          {homepageCompetitiveInsights.map((item) => (
            <article key={item.title} className="feature-surface competitive-insight-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="competitive-insight-application">
                <strong>{item.applicationTitle}</strong>
                <p>{item.application}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Shortlist decision board"
        title="把買方第一次會問的問題，直接做成首頁前段的 shortlist 版面。"
        description="綜合 Databox、Wynter、Blend、Webstacks 等 2025-2026 B2B / SaaS 首頁共通做法：先講清楚定位與對象，再把 proof、CTA 與 reassurance 放在同一輪掃讀內。"
      >
        <div className="card-grid two-up">
          {homepageDecisionBoard.map((item) => (
            <article key={item.title} className="feature-surface">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ul className="bullet-list compact">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="card-grid two-up">
          {homepageBeforeAfterRows.map((item) => (
            <article key={item.topic} className="card">
              <span className="mini-label accent">{item.topic}</span>
              <div className="case-story-block">
                <strong>Before</strong>
                <p>{item.before}</p>
              </div>
              <div className="case-story-block">
                <strong>After</strong>
                <p>{item.after}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="card-grid three-up">
          {homepageSignalStack.map((item) => (
            <article key={item.title} className="card proof-narrative-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="feature-surface quick-brief-note">
          <span className="mini-label accent">Contact reassurance</span>
          <h3>先把第一次聯絡的不確定感拆掉，轉換通常就會更自然。</h3>
          <ul className="bullet-list compact">
            {homepageContactMicrocopy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="quick-brief-meta">這段刻意參考高轉換 B2B / agency contact page 的 reassurance copy 寫法，讓首頁前段就能回答「送出後會怎樣」。</p>
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
        eyebrow="Why this homepage direction"
        title="這輪把成熟 B2B / SaaS 官網最常見的三個轉換原則，壓成首頁中前段的短決策區。"
        description="從 Veza Digital、ALM、Pixeto、Amply 近年的整理可以看到：真正有效的首頁，不是資訊更多，而是更快讓訪客確認適配性、看到證據、並放心採取下一步。"
      >
        <div className="card-grid three-up homepage-friction-grid">
          {homepageFrictionRemovalCards.map((item) => (
            <article key={item.title} className="feature-surface homepage-friction-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ul className="bullet-list compact">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="homepage-conversion-band">
          <div className="homepage-conversion-band-copy">
            <span className="mini-label accent">Homepage conversion checklist</span>
            <h3>這一版首頁刻意把「清楚、證據、放心開始」放在同一個滾動節奏裡。</h3>
            <p>目的不是讓首頁更長，而是讓第一次進站的 B2B 決策者能在更短時間內完成 shortlist 判斷。</p>
          </div>
          <div className="homepage-conversion-band-list" aria-label="首頁轉換檢查清單">
            {homepageConversionChecklist.map((item) => (
              <p key={item} className="homepage-conversion-pill">{item}</p>
            ))}
          </div>
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
      </Section>

      <Section
        eyebrow="First-response 設計"
        title="第一次接洽先拿到判斷依據，而不是只留下一封沒有下文的詢問。"
        description="這輪參考 Amply、ALM、Proofmap 常見做法：先把 response SLA、聯絡分流與起手交付提早講清楚，減少決策者第一次接洽的不確定感。"
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
        eyebrow="決策依據"
        title="把這個首頁的核心做法講清楚：清楚、證據、手機轉換。"
        description="這輪把 Veza Digital、ALM Corp 提到的高轉換原則濃縮成三個矩陣，讓訪客與內部團隊都更容易判斷現在的首頁到底在強化什麼。"
      >
        <div className="card-grid three-up evidence-matrix-grid">
          {evidenceMatrix.map((item) => (
            <article key={item.title} className="feature-surface evidence-matrix-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <strong>{item.metric}</strong>
              <p>{item.detail}</p>
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
