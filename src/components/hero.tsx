import Link from "next/link";
import { siteConfig, stats } from "@/lib/site";
import { HeroProofBar } from "@/components/hero-proof-bar";
import { HeroProductPreview } from "@/components/hero-product-preview";

const heroHighlights = [
  "釐清價值主張與導覽策略",
  "把 AI、資料與流程整合成可用系統",
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
              <span className="mini-label">Before 改版</span>
              <h3>6.4 秒載入、0.8% Signup</h3>
              <p>舊站 hero 沒講清楚，也沒有可點 CTA，訪客得滑到第三屏才知道如何聯絡。</p>
              <ul>
                <li>影片拖慢 LCP，42% 訪客沒看到 CTA。</li>
                <li>案例證明藏在頁尾，信任感不足。</li>
              </ul>
            </article>
            <article className="hero-story-card hero-story-card--after">
              <span className="mini-label accent">After 道易版本</span>
              <h3>15 秒互動 demo + 首屏證據</h3>
              <p>把敘事式 hero、真實 KPI 與互動預覽放在第一視窗，並加入 sticky CTA。</p>
              <ul>
                <li>首屏展示 +32% activation 的案例數據。</li>
                <li>行動版 thumb-zone CTA，永遠在拇指可及範圍。</li>
              </ul>
            </article>
          </div>

          <div className="hero-actions">
            <Link href="/contact" className="button-primary button-large">
              立即預約專案討論
            </Link>
            <Link href="/solutions" className="button-secondary button-large">
              先看解決方案
            </Link>
          </div>

          <div className="hero-cta-note">適合想在 2026 年重做品牌官網、資料平台或 AI 專案的企業與機構。</div>

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
