import type { Metadata } from "next";
import { Section } from "@/components/section";
import { contactChannels, siteConfig } from "@/lib/site";

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

      <Section eyebrow="合作前常見需求" title="這些題目，特別適合在一開始就一起釐清。">
        <div className="feature-surface two-column">
          <ul className="bullet-list compact">
            <li>現有網站該怎麼重整價值主張與導覽</li>
            <li>研究型或內容型資料如何整理成平台</li>
            <li>AI 可以放進哪些真實工作流程</li>
            <li>DPP / Traceability 該如何先做 MVP</li>
          </ul>
          <div className="contact-callout">
            <span className="mini-label">Suggested brief</span>
            <strong>建議來信附上目前網站、專案目標、使用者對象與預計時程。</strong>
            <p>如果需求還不完整也沒關係，先把你目前最卡的地方講清楚就好。</p>
            <a className="button-primary inline-button" href={`mailto:${siteConfig.email}`}>
              寄信到 {siteConfig.email}
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
