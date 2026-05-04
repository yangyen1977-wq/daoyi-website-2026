import type { Metadata } from "next";
import { Section } from "@/components/section";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { contactChecklist, contactDeliverables, contactFastFacts, contactModes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "啟動專案",
  description: "用更低摩擦但更成熟的方式，和道易科技啟動 enterprise website rebuild、offer 或 proof 專案。",
  alternates: { canonical: "/contact" },
};

const responseModel = [
  {
    title: "24h 內回覆",
    detail: "不是只回收到，而是會指出目前最大卡點更像 positioning、offer、proof 還是 conversion。",
  },
  {
    title: "建議起手 sprint",
    detail: "會根據網站成熟度與內部情境，建議首頁、方案頁、案例系統或 Contact flow 的優先序。",
  },
  {
    title: "低風險進場",
    detail: "若涉及保密、採購或法遵，可改走 NDA / Email 路徑，不強迫一次揭露全部資訊。",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Start a Rebuild</span>
          <h1>把第一次接洽設計成有節奏的啟動系統，專案就更容易開始。</h1>
          <p>這一頁不是只放聯絡表單，而是讓不同風險層級、不同成熟度的團隊，都能找到適合自己的起手方式、回覆預期與下一步節奏。</p>
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

      <Section eyebrow="Response model" title="新版 Contact 頁不只收資料，而是先明講你會拿到什麼。">
        <div className="card-grid three-up">
          {responseModel.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What you get" title="這不是填完表單等回覆，而是直接拿到可行的重建起點與商務判斷。">
        <div className="card-grid three-up">
          {contactDeliverables.map((item) => (
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

      <Section eyebrow="Before you send" title="送出前先想清楚這三件事，第一次對話會更有效。">
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
