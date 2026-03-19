import Link from "next/link";
import {
  cases,
  caseSnapshots,
  clientSegments,
  evidenceMatrix,
  differentiators,
  faqs,
  insightTopics,
  processSteps,
  proofPoints,
  siteConfig,
  heroClients,
  solutions,
  testimonials,
  mobileExperienceHighlights,
  engagementSteps,
  fitSignals,
  seoGuardrails,
  conversionGuardrails,
  competitiveInsights,
  engagementPackages,
  decisionSignals,
  trustSignals,
  deliveryTracks,
  homepageContactProof,
  proofNarratives,
  auditOffer,
  urgencySignals,
  homepageCaseStories,
  homepageDecisionCards,
  caseProofFormat,
  contactFastFacts,
  contactCommitments,
  contactPrepChecklist,
  homepageContactRoutes,
  heroDecisionMetrics,
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

export default function Home() {
  return (
    <main>
      <Hero />

      <Section
        eyebrow="First-response 設計"
        title="讓第一次接洽更像拿到判斷依據，而不是丟一封沒有下文的詢問。"
        description="這輪參考 Amply、Webstacks、Proofmap 常見做法：把 response SLA、聯絡分流與 first deliverable 提前放在 hero 後面，讓高考量 B2B 專案更容易開始。"
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
        eyebrow="首頁該先說清楚什麼"
        title="先把成交真正需要的三件事拉到前面。"
        description="本輪把競品學習濃縮成更直接的首頁原則：先清楚定位，再提供證據，最後把下一步講明白。"
      >
        <div className="card-grid three-up">
          {competitiveInsights.map((insight) => (
            <article key={insight.source} className="card competitive-card">
              <span className="mini-label accent">{insight.source}</span>
              <h3>{insight.title}</h3>
              <p>{insight.application}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="B2B 信任結構"
        title="把優秀 agency / SaaS 官網常見的信任訊號，濃縮成更容易下判斷的首屏後段。"
        description="這一段參考 Makers、Contractbook、Blend 與 Digital Silk 的共通模式：把交付方式、轉換證據與 mobile-ready 承諾拉到訪客還沒流失前。"
      >
        <div className="card-grid three-up trust-grid">
          {trustSignals.map((item) => (
            <article key={item.title} className="card trust-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="logo-chip-row" aria-label="代表合作情境">
          {heroClients.map((client) => (
            <div key={client.name} className="logo-chip">
              <strong>{client.name}</strong>
              <span>{client.context}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
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
        eyebrow="代表案例敘事"
        title="把 challenge → solution → outcome 寫在首頁，讓訪客不用先跳去案例頁才看到證據。"
        description="這輪參考 JoinAmply、Insaim 與 Vev 整理的高轉換做法：首屏後盡快出現案例敘事、量化成果與可行下一步。"
      >
        <div className="case-story-grid">
          {homepageCaseStories.map((item) => (
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
        eyebrow="啟動節奏"
        title="先讓潛在客戶知道：現在聯絡道易，接下來會發生什麼。"
        description="參考 Stan Vision 對 first-use friction 的整理，把接洽流程寫得更具體，降低第一次詢問的猶豫。"
      >
        <div className="engagement-grid">
          {engagementSteps.map((item) => (
            <article key={item.title} className="feature-surface engagement-card">
              <span className="mini-label accent">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.proof}</strong>
            </article>
          ))}
        </div>
        <div className="fit-grid">
          {fitSignals.map((group) => (
            <article key={group.title} className="fit-card">
              <span className="mini-label">{group.title}</span>
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

      <Section
        eyebrow="案例證據怎麼讀"
        title="把成果分清楚，首頁證據才會更可信。"
        description="這輪把 proof 不再混成一團，而是明確標示已上線成果、benchmark 與交付樣板，幫決策者更快判斷內容可信度。"
      >
        <div className="card-grid three-up">
          {caseProofFormat.map((item) => (
            <article key={item.title} className="card proof-narrative-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
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

      <Section eyebrow="合作場景" title="依你所在的產業與任務，給出最適合的下一步。">
        <div className="card-grid three-up">
          {clientSegments.map((segment) => (
            <article key={segment.title} className="card segment-card">
              <span className="mini-label accent">{segment.title}</span>
              <h3>{segment.description}</h3>
              <ul className="bullet-list compact">
                {segment.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <Link href={segment.href} className="button-secondary segment-cta">
                {segment.cta}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Engagement packages"
        title="把服務講清楚：不同階段的客戶，應該怎麼開始合作。"
        description="參考 Blend / Webflow 對 agency 首頁的共通做法，把可購買的起點、交付內容與適合情境寫清楚，降低第一次接洽的不確定感。"
      >
        <div className="card-grid three-up">
          {engagementPackages.map((pkg) => (
            <article key={pkg.title} className="card package-card">
              <span className="mini-label accent">{pkg.timeline}</span>
              <h3>{pkg.title}</h3>
              <p>{pkg.summary}</p>
              <ul className="bullet-list compact">
                {pkg.outputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <strong>{pkg.fit}</strong>
            </article>
          ))}
        </div>
      </Section>


      <Section
        eyebrow="Delivery tracks"
        title="先決定這次合作是要補清楚品牌說服、系統導入，還是上線後優化。"
        description="參考成熟 B2B agency 首頁常見的 service packaging，把交付切成三種容易理解的起點，讓潛在客戶更快判斷要從哪裡開始。"
      >
        <div className="card-grid three-up">
          {deliveryTracks.map((track) => (
            <article key={track.title} className="card package-card delivery-track-card">
              <h3>{track.title}</h3>
              <p>{track.summary}</p>
              <ul className="bullet-list compact">
                {track.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="方法論" title="讓系統真正上線並持續運作，需要比開發更完整的節奏。">
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

      <Section eyebrow="為什麼是道易" title="我們擅長的，不只是做出東西，而是把方向、結構與交付一起校準。">
        <div className="card-grid three-up">
          {differentiators.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="洞察內容" title="未來可延伸成 SEO 與專業信任兼具的內容欄位。">
        <div className="stack-list">
          {insightTopics.map((topic) => (
            <article key={topic} className="stack-item">
              <h3>{topic}</h3>
              <p>適合延伸為品牌觀點、客戶教育與搜尋流量入口內容。</p>
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

      <Section id="quick-brief" eyebrow="快速提案" title="用三個欄位交出專案簡報，5 分鐘內收到回覆。">
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
