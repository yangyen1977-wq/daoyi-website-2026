import type { Metadata } from "next";
import { Section } from "@/components/section";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { contactFastFacts, homepageContactProof, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "啟動方式",
  description: "用更低摩擦的方式，和道易科技啟動 2026 官網、AI、知識平台或 trust 專案。支援 Quick Brief、Strategy Call 與 NDA 流程。",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "啟動道易重建專案",
    description: "把第一次接洽設計成真正能往前走的 decision flow。",
    url: `${siteConfig.url}/contact`,
  },
};

const startModes = [
  ["Quick Brief", "已大致知道方向，想快速拿到切入點。"],
  ["Strategy Call", "需要一起對焦網站角色、sprint 範圍與 buying blockers。"],
  ["Email / NDA", "專案偏敏感，想先低風險確認 fit。"],
];

const checklist = [
  "目前網站或專案最大的溝通阻力是什麼",
  "是品牌訊息、案例、AI 敘事，還是 trust / 資料透明出了問題",
  "目前想先做短 sprint，還是已準備進入完整重建",
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Start a Project</span>
          <h1>把第一次接洽設計得更清楚，專案就更容易開始。</h1>
          <p>這一頁不是只放聯絡表單，而是讓不同風險層級、不同成熟度的團隊，都能找到適合自己的啟動方式。</p>
          <div className="contact-hero-actions">
            <a className="button-primary button-large" href="#quick-brief">直接送出 Quick Brief</a>
            <a className="button-secondary button-large" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi 2026 專案討論 / NDA")}`}>先用 Email / NDA 開始</a>
          </div>
        </div>
      </section>

      <Section eyebrow="Fast facts" title="先知道回覆節奏與下一步，對話會更順。">
        <div className="card-grid four-up">
          {contactFastFacts.map((item) => (
            <article key={item.label} className="card trust-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.value}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Proof" title="讓對話更快進入正題的原因，是先把期待說清楚。">
        <div className="card-grid three-up">
          {homepageContactProof.map((item) => (
            <article key={item} className="card rebuild-module-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Start modes" title="三種起手方式，對應三種常見專案狀態。">
        <div className="card-grid three-up">
          {startModes.map(([title, detail]) => (
            <article key={title} className="card decision-card">
              <span className="mini-label accent">{title}</span>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Before you send" title="送出前，先想清楚這三件事，第一次對話會更有效。">
        <div className="feature-surface">
          <ul className="bullet-list compact">{checklist.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Quick Brief" title="用最短路徑，開始這次重建。">
        <QuickBriefForm />
      </Section>
    </main>
  );
}
