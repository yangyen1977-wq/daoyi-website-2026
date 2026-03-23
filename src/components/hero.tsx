import Link from "next/link";
import { heroContactLadder, heroDecisionMetrics, heroFitSignals, heroQuickSignals, siteConfig, stats, homepageContactProof, contactFastFacts } from "@/lib/site";
import { HeroProofBar } from "@/components/hero-proof-bar";
import { HeroProductPreview } from "@/components/hero-product-preview";
import { HeroClarityChecklist } from "@/components/hero-clarity-checklist";

const heroHighlights = [
  "先用一句話講清楚：誰適合、先補哪段、值不值得現在談",
  "把案例證據、交付樣態、AI / 資料流程與 Contact reassurance 放進同一輪掃讀",
  "競品共通高轉換做法是先回答『是不是適合我』，再用視覺成熟度加分",
];

const heroMicroProof = [
  {
    label: "適合案型",
    value: "官網升級 / AI 導入 / 知識平台 / DPP",
  },
  {
    label: "首次回覆",
    value: "24h 內附建議切入點與下一步",
  },
  {
    label: "開始方式",
    value: "3 欄 Quick Brief / Email / NDA",
  },
];


export function Hero() {
  return (
    <section className="hero-section">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">DaoYi Technology 2026 / B2B Website / AI / Knowledge Platform / DPP</span>
          <div className="hero-intro-badge">讓決策者先看懂價值、團隊更容易啟動、網站上線後也更容易持續成長</div>
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
              <strong>把首頁訊息、案例證據、CTA、AI / 資料流程與交付方式，一次整理成更容易成交的系統。</strong>
            </div>
            <div>
              <span className="mini-label">這一版的重點</span>
              <p>首屏先完成 3 件事：誰適合、做過什麼、現在怎麼低風險開始。</p>
            </div>
          </div>

          <div className="hero-actions">
            <Link href="/#quick-brief" className="button-primary button-large">
              3 欄送出 Quick Brief
            </Link>
            <Link href="/#proof-ledger" className="button-secondary button-large">
              先看案例證據
            </Link>
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

          <div className="hero-cta-note">適合正在重做 B2B 官網、補強案例說服力、整理 AI / 資料流程或啟動 DPP 的團隊；若案子敏感，也可先 Email / NDA 再往下談。</div>

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
