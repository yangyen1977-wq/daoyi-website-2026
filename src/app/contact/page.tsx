import type { Metadata } from "next";
import { Section } from "@/components/section";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { contactChannels, siteConfig, contactCommitments } from "@/lib/site";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "聯絡道易科技，討論 AI、知識平台、DPP 與品牌官網等數位專案需求。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Contact</span>
          <h1>如果你正在規劃新的數位專案，現在就可以開始對話。</h1>
          <p>
            無論是官網重構、AI 導入、知識平台整理或 DPP 規劃，道易都適合在專案前期一起把方向定清楚。
          </p>
        </div>
      </section>

      <Section eyebrow="聯絡方式" title="先把需求說清楚，合作就會快很多。">
        <div className="card-grid three-up">
          {contactChannels.map((item) => (
            <article key={item.label} className="card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.value}</h3>
              <p>點擊即可直接聯繫或查看相關資訊。</p>
              <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                前往 {item.label}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Response promise"
        title="讓第一次接洽更放心：你會知道接下來真的會發生什麼。"
        description="參考優秀 agency / SaaS contact page 的做法，把回覆節奏、對焦方式與保密安排先講清楚。"
      >
        <div className="card-grid three-up">
          {contactCommitments.map((item) => (
            <article key={item.title} className="card">
              <span className="mini-label accent">Contact SLA</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="合作前常見需求" title="這些題目，特別適合在一開始就一起釐清。">
        <div className="quick-brief-grid">
          <QuickBriefForm />
          <div className="feature-surface quick-brief-note">
            <span className="mini-label accent">Suggested brief</span>
            <h3>如果你不知道從哪裡開始，先提供這四件事就夠。</h3>
            <ul className="bullet-list compact">
              <li>目前網站或系統連結，以及最卡的地方</li>
              <li>這次要面對的對象：客戶、採購、法遵或內部團隊</li>
              <li>希望改善的結果：詢問量、作業效率、資料透明或法規準備</li>
              <li>預計時程與是否需要 NDA</li>
            </ul>
            <p className="quick-brief-meta">不確定需求也沒關係，先把現況限制說清楚，道易會協助你切出第一步。</p>
            <a className="button-primary inline-button" href={`mailto:${siteConfig.email}`}>
              直接寄信到 {siteConfig.email}
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
