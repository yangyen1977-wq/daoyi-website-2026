import Link from "next/link";
import { heroContactLadder, heroDecisionMetrics, heroFitSignals, heroQuickSignals, siteConfig, stats, homepageContactProof, contactFastFacts } from "@/lib/site";
import { HeroProofBar } from "@/components/hero-proof-bar";
import { HeroProductPreview } from "@/components/hero-product-preview";
import { HeroClarityChecklist } from "@/components/hero-clarity-checklist";

const heroHighlights = [
  "先回答買方 5 秒內最在意的事：你們是誰、做給誰、怎麼開始",
  "把案例證據、AI / 資料流程與品牌敘事整成同一個成交節奏",
  "兼顧品牌說服力、RWD / 手機轉換與後續維運",
];

const heroMicroProof = [
  {
    label: "適合案型",
    value: "B2B 官網升級 / AI 導入 / 知識平台 / DPP",
  },
  {
    label: "起手方式",
    value: "Quick Brief 3 欄或直接 Email / NDA",
  },
  {
    label: "回覆節奏",
    value: "24h 內回覆具體下一步",
  },
];

const heroDecisionQuestions = [
  "這是不是同時卡在品牌訊息、案例證據與 Contact 轉換的案子？",
  "如果牽涉 AI、資料欄位或 DPP，首頁能不能先講清楚交付能力？",
  "第一次接洽後，對方能不能很快知道下一步而不是等報價？",
];

const heroBuyerAssurance = [
  {
    label: "Clarity-first",
    title: "先用一句話講清楚誰適合、會得到什麼、怎麼開始。",
    detail: "參考 Webflow、Stan Vision 與 Veza Digital 的 2026 B2B / SaaS pattern，把抽象能力收斂成短句，減少第一屏思考成本。",
  },
  {
    label: "Proof near CTA",
    title: "把案例樣態、回覆承諾與 Contact 路徑放在同一輪掃讀內。",
    detail: "高意圖買方通常不想先翻完整案例頁；這版首屏直接補齊信任與下一步，讓 shortlist 判斷更快。",
  },
  {
    label: "Mobile reassurance",
    title: "手機版先保留拇指可達 CTA、Email / NDA 備援與 24h 回覆。",
    detail: "不是把桌機長頁縮小，而是先讓行動訪客敢開始，之後再決定要不要繼續深讀。",
  },
];

export function Hero() {
  return (
    <section className="hero-section">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">DaoYi Technology 2026 / AI / Data / Knowledge Platform / DPP</span>
          <div className="hero-intro-badge">從研究脈絡走到產業落地，把複雜需求整理成可成交、可維運的數位系統</div>
          <h1>{siteConfig.heroTitle}</h1>
          <p>{siteConfig.heroDescription}</p>

          <HeroProofBar />

          <div className="hero-inline-proof-grid" aria-label="首屏快速證據">
            {heroMicroProof.map((item) => (
              <article key={item.label} className="hero-inline-proof-card">
                <span className="mini-label accent">{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>

          <HeroClarityChecklist />

          <div className="hero-buyer-assurance-grid" aria-label="競品學習後內化的首頁原則">
            {heroBuyerAssurance.map((item) => (
              <article key={item.title} className="hero-buyer-assurance-card">
                <span className="mini-label accent">{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="hero-quick-signals" aria-label="首輪決策摘要">
            {heroQuickSignals.map((item) => (
              <article key={item.label} className="hero-quick-signal-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>

          <div className="hero-priority-strip" aria-label="品牌重點">
            <div>
              <span className="mini-label">核心定位</span>
              <strong>把複雜內容、資料流程與品牌體驗，整理成客戶看得懂也願意開始的系統。</strong>
            </div>
            <div>
              <span className="mini-label">這一版的重點</span>
              <p>首屏先收斂成定位、證據與下一步，不再讓訪客在第一屏做太多閱讀負擔。</p>
            </div>
          </div>

          <div className="hero-decision-question-strip" aria-label="買方快速判斷問題">
            {heroDecisionQuestions.map((item) => (
              <p key={item} className="hero-decision-question-pill">{item}</p>
            ))}
          </div>

          <div className="hero-actions">
            <Link href="/#quick-brief" className="button-primary button-large">
              立即送出 Quick Brief
            </Link>
            <a className="button-secondary button-large" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("想先和道易討論 2026 新專案")}`}>
              先用 Email 開始
            </a>
          </div>

          <div className="hero-inline-proof-grid" aria-label="首次接洽重點">
            {heroDecisionMetrics.map((item) => (
              <article key={item.label} className="hero-inline-proof-card">
                <span className="mini-label accent">{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="hero-decision-rail" aria-label="聯絡路徑選擇">
            {heroContactLadder.map((item) => {
              const isExternal = item.href.startsWith("mailto:");

              return (
                <article key={item.title} className="hero-route-card">
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

          <div className="hero-cta-note">適合想在 2026 年重做 B2B 官網、資料平台、DPP 或 AI 專案的企業與機構；若案子敏感，也可先 NDA 再往下談。</div>

          <div className="hero-contact-reassurance" aria-label="第一次聯絡前的 reassurance">
            <div className="hero-contact-reassurance-head">
              <span className="mini-label accent">Before you contact</span>
              <h3>先知道送出後會發生什麼，聯絡門檻就會低很多。</h3>
            </div>
            <div className="hero-contact-fastfacts">
              {contactFastFacts.map((item) => (
                <article key={item.label} className="hero-contact-fastfact-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
            <div className="hero-contact-proof-list">
              {homepageContactProof.map((item) => (
                <p key={item} className="hero-contact-proof-pill">{item}</p>
              ))}
            </div>
          </div>

          <div className="hero-tags">
            <span>AI 智慧應用</span>
            <span>知識平台建置</span>
            <span>數位產品護照 DPP</span>
            <span>客製化網站與系統整合</span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-card spotlight">
            <span className="mini-label">2026 Brand Positioning</span>
            <strong>道易科技不只做網站，也不只做 AI；而是把策略、資料、介面與交付節奏一起做對。</strong>
            <ul className="bullet-list compact hero-highlight-list">
              {heroHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="hero-panel-card fit-card">
            <span className="mini-label accent">Project fit check</span>
            <h3>如果你符合下面任兩項，通常就值得先談。</h3>
            <ul className="bullet-list compact hero-fit-list">
              {heroFitSignals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="stats-grid">
            {stats.map((item) => (
              <article key={item.label} className="hero-panel-card stat-card">
                <span className="mini-label">{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
          <HeroProductPreview />
        </div>
      </div>
    </section>
  );
}
