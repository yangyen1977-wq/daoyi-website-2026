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
  homepageFitAssessment,
  homepageFirstWeekDeliverables,
  homepageOutcomeSignals,
  homepageBuyerSignals,
  competitiveInsights,
  homepageHeuristicScorecard,
  homepageResponseTimeline,
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

const homepageJumpLinks = [
  { label: "看現在適不適合談", href: "#why-now" },
  { label: "看案例證據", href: "#proof-ledger" },
  { label: "看合作起點", href: "#decision-paths" },
  { label: "直接送出 brief", href: "#quick-brief" },
];

const homepageWhyNowCards = [
  {
    label: "Clarity first",
    title: "先讓決策者 5 秒內知道：道易不是單點外包，而是把官網、資料與流程一起做對。",
    detail:
      "參考 2025-2026 B2B / SaaS 首頁共同做法，這版把 target buyer、可交付樣態與 first response 承諾都提早放到首頁前段，減少第一次接觸的不確定感。",
    bullets: ["Who + what + outcome 的 hero 結構", "Response SLA 與聯絡路徑提前揭露", "案例證據不再埋在後段"],
  },
  {
    label: "Proof before pitch",
    title: "把『會做什麼』改成『已交付哪些成果樣態』，首頁更像業務證據頁。",
    detail:
      "從 Axon Garside、Huemor、Marketer Milk 常提到的高轉換結構裡，最值得沿用的是 proof 先於長文：先看到案例型態、交付內容與成果訊號，再決定要不要深入讀。",
    bullets: ["Challenge → solution → outcome 敘事", "案例快照與 proof ledger 併排", "CTA 靠近社會證明與交付節奏"],
  },
  {
    label: "Mobile conversion",
    title: "手機版不是縮小桌機，而是第一次詢問最容易發生的現場。",
    detail:
      "因此這版持續強化 quick brief、sticky CTA、thumb-zone 導覽與 contact fast facts，讓使用者在手機上也能快速完成第一步，不必一直來回找入口。",
    bullets: ["主 CTA 保留在拇指區", "3 欄 brief 降低第一次詢問阻力", "Contact 承諾與 NDA 流程提前說清楚"],
  },
];

export default function Home() {
  return (
    <main>
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

      <Section
        eyebrow="Fit check"
        title="先幫訪客判斷：現在談，會不會太早？"
        description="參考 Directive、Axon Garside 與近年高轉換 B2B 首頁的 self-qualification 做法，把『適合現在談』與『還沒準備好也能怎麼開始』提早講清楚，降低猶豫與錯配。"
      >
        <div className="homepage-fit-grid">
          {homepageFitAssessment.map((group) => (
            <article key={group.title} className="feature-surface homepage-fit-card">
              <span className="mini-label accent">{group.label}</span>
              <h3>{group.title}</h3>
              <ul className="bullet-list compact">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="First 7 days"
        title="第一次接洽後的一週內，會拿到什麼？"
        description="把 contact promise 寫成可預期交付，延續 Proofmap 與 B2B SaaS case-study 常見的 persistent CTA / clear next step 原則，讓第一次詢問更像進入合作流程，而不是把資料丟進黑洞。"
      >
        <div className="card-grid three-up homepage-first-week-grid">
          {homepageFirstWeekDeliverables.map((item) => (
            <article key={item.title} className="card homepage-first-week-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What improves first"
        title="先把最影響 B2B 詢問品質的四件事講清楚。"
        description="綜合 Veza Digital、ALM Corp 與 ThunderClap 對 2026 B2B / SaaS 官網的觀察，首頁前段最值得優先強化的是：主張清晰度、證據密度、手機轉換與第一次接洽安心感。"
      >
        <div className="card-grid four-up homepage-outcome-grid">
          {homepageOutcomeSignals.map((item) => (
            <article key={item.title} className="feature-surface homepage-outcome-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="why-now"
        eyebrow="Why DaoYi / Why now"
        title="高轉換 B2B 官網的共同特徵，不是更花，而是更快讓人做出下一步判斷。"
        description="這輪把 Axon Garside、Huemor、Marketer Milk 提到的共通原則轉成道易首頁前段結構：先清楚、再證據、最後才是延伸閱讀。"
      >
        <div className="card-grid three-up homepage-why-now-grid">
          {homepageWhyNowCards.map((item) => (
            <article key={item.title} className="feature-surface homepage-why-now-card">
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
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <strong>{item.proof}</strong>
              <p>{item.detail}</p>
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
        eyebrow="決策者常見疑問"
        title="成熟 B2B 官網不是只展示，而是先快速解除決策疑慮。"
        description="這輪參考 Amply、Axon Garside 與多個技術型官網案例，補上 buyer-side 常見問題，讓首頁更像一個可快速判斷的業務入口。"
      >
        <div className="card-grid three-up buyer-signal-grid">
          {homepageBuyerSignals.map((item) => (
            <article key={item.title} className="feature-surface buyer-signal-card">
              <span className="mini-label accent">Buyer signal</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
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
      </Section>

      <Section
        eyebrow="Competitive learnings"
        title="這一版不是憑感覺堆內容，而是內化近年的 B2B / SaaS 官網共同做法。"
        description="本輪參考 Powered by Search、Amply、Axon Garside 等案例整理，把值得沿用的首頁原則直接轉成道易自己的設計守則。"
      >
        <div className="card-grid three-up competitive-insight-grid">
          {competitiveInsights.map((item) => (
            <article key={item.title} className="feature-surface competitive-insight-card">
              <span className="mini-label accent">{item.source}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="competitive-insight-application">
                <strong>如何用在道易</strong>
                <p>{item.application}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Homepage heuristic"
        title="把外部研究直接翻成一份 3 分鐘可判讀的首頁檢查表。"
        description="這段刻意做成 decision tool，而不是長段落介紹：讓第一次來的 B2B 決策者更快確認這個網站是否值得往下談。"
      >
        <div className="card-grid two-up homepage-heuristic-grid">
          {homepageHeuristicScorecard.map((item) => (
            <article key={item.title} className="feature-surface homepage-heuristic-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="competitive-insight-application">
                <strong>這版如何落地</strong>
                <p>{item.action}</p>
              </div>
            </article>
          ))}
        </div>
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
        eyebrow="分眾 CTA"
        title="依決策角色調整 CTA、語氣與可下載資源。"
        description="參考 SaaSFrame 2026 分眾趨勢，讓品牌、營運與永續團隊各自看到最相關的下一步，縮短猶豫時間。"
      >
        <PersonaPlaybook />
      </Section>

      <Section
        eyebrow="為什麼值得談"
        title="把差異講短一點，但更像決策資訊，而不是補充閱讀。"
        description="本輪刻意拿掉首頁後段多組重複服務敘事，把真正有助於決策的差異收斂成三點。"
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
