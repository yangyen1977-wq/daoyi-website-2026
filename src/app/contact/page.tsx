import type { Metadata } from "next";
import { Section } from "@/components/section";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { contactChannels, siteConfig, contactCommitments, contactDecisionCards, contactTrustNotes, trustSignals, homepageContactProof, contactPrepChecklist, auditOffer, contactFastFacts, contactIntentCards, contactFaqs, homepageResponseTimeline } from "@/lib/site";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "聯絡道易科技，討論 AI、知識平台、DPP 與品牌官網等數位專案需求。24 小時內提供下一步建議與會議安排。",
  alternates: { canonical: "/contact" },
};

const contactFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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
          <div className="contact-fast-facts" aria-label="聯絡重點">
            {contactFastFacts.map((item) => (
              <div key={item.label} className="contact-fast-fact">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
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
        eyebrow="Fast entry"
        title="如果你知道要談哪一類專案，可以直接用對應主旨開始。"
        description="參考高轉換 B2B contact 頁常見做法，把『如何開口』也一起設計掉，降低第一次寄信阻力。"
      >
        <div className="card-grid three-up">
          {contactIntentCards.map((item) => (
            <article key={item.title} className="feature-surface contact-intent-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <a href={item.href} className="button-secondary inline-button">{item.cta}</a>
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
        <div className="card-grid three-up homepage-response-grid contact-response-grid">
          {homepageResponseTimeline.map((item) => (
            <article key={item.step} className="feature-surface homepage-response-card">
              <span className="mini-label accent">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Before you contact"
        title="在真正填表前，先把決策者最在意的 reassurance 放到前面。"
        description="參考高轉換 B2B contact page 的寫法，先降低風險感，再請對方留下聯絡資訊。"
      >
        <div className="card-grid three-up trust-grid">
          {trustSignals.map((item) => (
            <article key={item.title} className="card trust-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="contact-proof-list">
          {homepageContactProof.map((item) => (
            <p key={item} className="contact-proof-pill">{item}</p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="適合直接來談的情境"
        title="如果你卡在這三種情況，通常已經值得安排第一次會議。"
        description="把決策焦慮具體化，會比單純放聯絡表單更容易促成有效詢問。"
      >
        <div className="card-grid three-up">
          {contactDecisionCards.map((item) => (
            <article key={item.title} className="card decision-card">
              <span className="mini-label accent">{item.metric}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="First response kit"
        title="不是只有留資料，而是先知道你會拿到什麼。"
        description="參考成熟 B2B agency Contact 頁常見做法，把第一次接洽可交付內容寫清楚，降低『留了資料也不知道接下來會怎樣』的不安。"
      >
        <div className="card-grid three-up">
          {auditOffer.map((item) => (
            <article key={item.title} className="card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Meeting prep"
        title="先把第一次接洽的資訊不對稱拿掉，訪客更敢留下資料。"
        description="這是從近期 B2B / SaaS Contact 頁研究抽出的重點：先說清楚雙方各自要準備什麼，比單純催填表更有效。"
      >
        <div className="card-grid two-up">
          {contactPrepChecklist.map((group) => (
            <article key={group.title} className="feature-surface prep-card">
              <span className="mini-label accent">Contact enablement</span>
              <h3>{group.title}</h3>
              <ul className="bullet-list compact">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
            <div className="contact-trust-note-list">
              {contactTrustNotes.map((note) => (
                <p key={note} className="contact-trust-note">{note}</p>
              ))}
            </div>
            <p className="quick-brief-meta">不確定需求也沒關係，先把現況限制說清楚，道易會協助你切出第一步。</p>
            <a className="button-primary inline-button" href={`mailto:${siteConfig.email}`}>
              直接寄信到 {siteConfig.email}
            </a>
          </div>
        </div>
      </Section>

      <section className="section-block faq-block">
        <div className="shell narrow">
          <div className="section-heading">
            <span className="section-eyebrow">Contact FAQ</span>
            <h2>第一次聯絡前，決策者最常問的三個問題。</h2>
            <p>把回覆速度、保密流程與專案起點先說清楚，通常能讓有效詢問更快發生。</p>
          </div>
          <div className="faq-list">
            {contactFaqs.map((item) => (
              <article key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }} />
      </section>
    </main>
  );
}
