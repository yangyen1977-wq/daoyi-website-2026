import type { Metadata } from "next";
import { Section } from "@/components/section";
import { differentiators, processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "關於道易",
  description: "了解道易科技的背景、方法論與跨研究到產業應用的整合能力。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">About DaoYi</span>
          <h1>道易科技擅長把資料脈絡、技術能力與品牌需求，整理成真正能運作的系統。</h1>
          <p>
            我們的工作不是單點式開發，而是協助客戶把複雜內容、流程與數位需求，轉化成有結構、有節奏、能持續成長的服務體驗。
          </p>
        </div>
      </section>

      <Section eyebrow="我們的起點" title="從數位人文出發，延伸到 AI、平台與永續應用。">
        <div className="feature-surface two-column">
          <p>
            道易科技長期投入文本、知識、資料與平台之間的關係整理。這讓我們在面對研究典藏、內容治理、檢索體驗、AI 導入與 DPP 規劃時，能先理解問題結構，再決定技術解法。
          </p>
          <p>
            這樣的背景很實用：因為真正的數位專案，多半不是缺一個畫面，而是缺一套清楚的整理方式。這正是道易擅長的事。
          </p>
        </div>
      </Section>

      <Section eyebrow="我們重視的事" title="好的專案，不只是做完，而是後續還能繼續長。">
        <div className="card-grid three-up">
          {differentiators.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="合作方式" title="我們通常用四個階段，把模糊需求整理成穩定交付。">
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
    </main>
  );
}
