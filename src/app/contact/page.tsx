import type { Metadata } from "next";
import { Section } from "@/components/section";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "啟動專案",
  description: "用更低摩擦的方式，和道易科技啟動 2026 官網、AI、知識平台或 DPP 專案。支援 Quick Brief、Email 與 NDA 流程。",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "啟動道易專案｜2026 官網、AI、知識平台、DPP",
    description: "把第一次接洽設計成真正能往前走的 decision flow。",
    url: `${siteConfig.url}/contact`,
  },
};

const startModes = [
  {
    label: "Quick Brief",
    title: "已大致知道要談什麼，想快速拿到切入點。",
    detail: "適合要重做官網、案例或 solution page 的團隊。",
  },
  {
    label: "Email / NDA",
    title: "專案偏敏感，想先低風險確認 fit。",
    detail: "適合涉及採購、法遵、既有客戶資料或內部文件的團隊。",
  },
  {
    label: "24h response",
    title: "第一次回覆會先附具體下一步。",
    detail: "不是只回收到，而是回覆切入方向、待補資料與建議流程。",
  },
];

const checklist = [
  "目前網站或專案最大的溝通阻力是什麼",
  "是品牌訊息、案例、AI 敘事，還是 DPP / 資料透明出了問題",
  "目前想先做短 sprint，還是已準備進入完整重建",
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Start a Project</span>
          <h1>把第一次接洽設計得更清楚，專案就更容易開始。</h1>
          <p>這一頁不只是聯絡表單，而是讓不同風險層級、不同成熟度的團隊，都能找到適合自己的啟動方式。</p>
          <div className="contact-hero-actions">
            <a className="button-primary button-large" href="#quick-brief">直接送出 Quick Brief</a>
            <a className="button-secondary button-large" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi 2026 專案討論 / NDA")}`}>先用 Email / NDA 開始</a>
          </div>
        </div>
      </section>

      <Section eyebrow="Start modes" title="三種起手方式，對應三種常見專案狀態。">
        <div className="card-grid three-up">
          {startModes.map((item) => (
            <article key={item.title} className="card decision-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Before you send" title="送出前，先想清楚這三件事，第一次對話會更有效。">
        <div className="feature-surface">
          <ul className="bullet-list compact">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Quick Brief" title="用最短路徑，開始這次重建。">
        <QuickBriefForm />
      </Section>
    </main>
  );
}
