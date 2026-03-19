import Link from "next/link";
import { heroContactLadder, heroDecisionMetrics, heroFitSignals, siteConfig, stats } from "@/lib/site";
import { HeroProofBar } from "@/components/hero-proof-bar";
import { HeroProductPreview } from "@/components/hero-product-preview";
import { HeroClarityChecklist } from "@/components/hero-clarity-checklist";
import { HeroActionPlan } from "@/components/hero-action-plan";

const heroHighlights = [
  "先把價值主張與案例證據講清楚",
  "把 AI、資料與流程整理成可交付系統",
  "兼顧品牌說服力、RWD 與後續維運",
];

export function Hero() {
  return (
    <section className="hero-section">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">DaoYi Technology 2026 / AI / Data / Knowledge Platform / DPP</span>
          <div className="hero-intro-badge">從研究脈絡走到產業落地的數位整合團隊</div>
          <h1>{siteConfig.heroTitle}</h1>
          <p>{siteConfig.heroDescription}</p>
          <HeroClarityChecklist />

          <div className="hero-priority-strip" aria-label="品牌重點">
            <div>
              <span className="mini-label">核心定位</span>
              <strong>把複雜內容、資料流程與品牌體驗，整理成客戶看得懂也用得起來的系統。</strong>
            </div>
            <div>
              <span className="mini-label">適合專案</span>
              <p>品牌官網重整、AI 導入、知識平台、DPP / Traceability 與資料治理升級。</p>
            </div>
          </div>

          <div className="hero-story">
            <article className="hero-story-card">
              <span className="mini-label">Before</span>
              <h3>舊站常見的三個阻力</h3>
              <ul>
                <li>價值主張太晚出現，第一次進站看不懂重點。</li>
                <li>案例與成果分散，難以快速建立信任。</li>
                <li>聯絡入口太深，手機上更容易中途離開。</li>
              </ul>
            </article>
            <article className="hero-story-card hero-story-card--after">
              <span className="mini-label accent">After</span>
              <h3>道易想交付的首頁狀態</h3>
              <ul>
                <li>第一視窗先說清楚你是誰、做什麼、為何值得談。</li>
                <li>代表案例與成果緊貼 CTA，降低決策不確定感。</li>
                <li>桌機與手機都能在最少步驟內進入聯絡或提案流程。</li>
              </ul>
            </article>
          </div>

          <HeroActionPlan />

          <div className="hero-actions">
            <Link href="/contact" className="button-primary button-large">
              立即預約專案討論
            </Link>
            <Link href="/solutions" className="button-secondary button-large">
              先看解決方案
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

          <div className="hero-cta-note">適合想在 2026 年重做 B2B 官網、資料平台、DPP 或 AI 專案的企業與機構。</div>

          <HeroProofBar />

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
