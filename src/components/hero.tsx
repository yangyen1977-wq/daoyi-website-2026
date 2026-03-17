import Link from "next/link";
import { siteConfig, stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">AI / Data / Knowledge Platform / DPP</span>
          <h1>{siteConfig.heroTitle}</h1>
          <p>{siteConfig.heroDescription}</p>
          <div className="hero-actions">
            <Link href="/solutions" className="button-primary">
              了解解決方案
            </Link>
            <Link href="/contact" className="button-secondary">
              預約討論專案
            </Link>
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
            <strong>從研究型資料能力，延伸到產業可落地的數位轉型方案。</strong>
            <p>道易科技不只是做網站，也不只是做 AI；而是把資料、流程、內容與品牌一起做對。</p>
          </div>
          <div className="stats-grid">
            {stats.map((item) => (
              <article key={item.label} className="hero-panel-card">
                <span className="mini-label">{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
