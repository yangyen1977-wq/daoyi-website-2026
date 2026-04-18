import type { Metadata } from "next";
import { Section } from "@/components/section";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { contactFastFacts, contactModes, contactChecklist, homepageContactProof, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "啟動方式",
  description: "用更低摩擦的方式，和道易科技啟動 2026 官網、AI、知識平台或 trust 專案。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Start a Project</span>
          <h1>把第一次接洽設計得更清楚，專案就更容易開始。</h1>
          <p>這一頁不是只放聯絡表單，而是讓不同風險層級、不同成熟度的團隊，都能找到適合自己的啟動方式。</p>
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
          {contactModes.map((item) => (
            <article key={item.title} className="card decision-card">
              <span className="mini-label accent">{item.title}</span>
              <p>{item.detail}</p>
              <strong>{item.fit}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Before you send" title="送出前，先想清楚這三件事，第一次對話會更有效。">
        <div className="feature-surface two-column">
          <div>
            <ul className="bullet-list compact">{contactChecklist.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h3>聯絡方式</h3>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Quick Brief" title="用最短路徑，開始這次重建。">
        <QuickBriefForm />
      </Section>
    </main>
  );
}
