import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import {
  contactCaseEntrypoints,
  contactEmailTemplate,
  contactHero,
  contactHeroOutcomes,
  contactHeroStats,
  contactMeetingSteps,
  contactPrepCards,
  contactRoutes,
  contactSituationCards,
} from "@/lib/content/contact";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const contactPageTitle = "聯絡道易｜DPP、ESG 稽核、AI-Ontology 與可信資料平台諮詢";
const contactPageDescription =
  "帶著一批資料、一條流程或一個產品案例，和道易討論 DPP、ESG 稽核、AI-Ontology、回收履歷與資料平台整合的第一步。可先填寫 Quick Brief，或走 Email/NDA 保密溝通。";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: contactPageTitle,
    description: contactPageDescription,
    path: "/contact",
  }),
  title: { absolute: contactPageTitle },
};

const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(contactEmailTemplate.subject)}&body=${encodeURIComponent(contactEmailTemplate.body)}`;

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page contact-rebuild-page">
      <section className="contact-hero">
        <div className="shell contact-hero-grid">
          <div className="contact-hero-copy">
            <span className="section-eyebrow">{contactHero.eyebrow}</span>
            <h1>{contactHero.title}</h1>
            <p>{contactHero.description}</p>
            <div className="section-actions">
              <Link href="#quick-brief" className="button-primary button-large">填寫 Quick Brief</Link>
              <Link href="#email-nda" className="button-secondary button-large">先用 Email / NDA 聯絡</Link>
            </div>
            <p className="contact-hero-note">{contactHero.note}</p>
          </div>

          <aside className="contact-outcome-card" aria-label="送出後會先拿到什麼">
            <h2>送出後，你會先拿到什麼？</h2>
            <div className="contact-outcome-list">
              {contactHeroOutcomes.map((item, index) => (
                <div key={item.title} className="contact-outcome-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="contact-stat-strip">
              {contactHeroStats.map((item) => <span key={item}>{item}</span>)}
            </div>
          </aside>
        </div>
      </section>

      <Section
        eyebrow="Choose a Route"
        title="先選一種最適合現在狀態的接洽方式。"
        description="你不需要先準備完整規格書。只要先說明資料類型、目前保存方式、預計使用者與想解決的問題，道易就能協助判斷第一步。"
      >
        <div className="contact-route-grid">
          {contactRoutes.map((item) => (
            <article key={item.label} className="card contact-route-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <div>
                <strong>適合情境</strong>
                <p>{item.fit}</p>
              </div>
              <div>
                <strong>你會得到</strong>
                <p>{item.outcome}</p>
              </div>
              <Link href={item.href} className="inline-button">{item.cta}</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="quick-brief"
        eyebrow="Quick Brief"
        title="用 5 個問題，讓道易判斷你的資料專案第一步。"
        description="這不是正式規格書，只是快速確認資料現況。請避免在表單中填寫機密細節；如果內容涉及供應鏈、研發、採購或未公開產品，請改用 Email / NDA 路徑。"
      >
        <div className="contact-brief-layout">
          <aside className="contact-brief-side">
            <h3>為什麼只問這些？</h3>
            <p>第一次接洽的重點不是列完整功能，而是先知道資料在哪裡、誰會使用、是否需要被外部信任，以及適合從哪個小範圍開始。</p>
            <ul className="bullet-list compact">
              <li>資料類型與目前保存方式</li>
              <li>預計使用者與揭露範圍</li>
              <li>最想先解決的資料問題</li>
              <li>是否需要 Email / NDA 保密溝通</li>
            </ul>
          </aside>
          <QuickBriefForm />
        </div>
      </Section>

      <Section
        eyebrow="First Meeting"
        title="第一次會議不是直接談功能，而是先對齊資料、風險與第一階段目標。"
        description="道易處理的通常不是單純網站，而是需要被查詢、驗證、維護或對外揭露的資料平台。因此第一次會議會先聚焦資料現況，而不是直接列功能清單。"
      >
        <div className="contact-meeting-grid">
          {contactMeetingSteps.map((item) => (
            <article key={item.step} className="contact-meeting-step">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Before Meeting" title="如果能先準備這 3 件事，第一次討論會更有效率。">
        <div className="contact-prep-card-grid">
          {contactPrepCards.map((item, index) => (
            <article key={item.title} className="card contact-prep-card">
              <span>{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Situation Match" title="不知道該選哪一種？先用資料情境判斷。">
        <div className="contact-situation-grid">
          {contactSituationCards.map((item) => (
            <article key={item.title} className="card contact-situation-card">
              <h3>{item.title}</h3>
              <div>
                <strong>建議起手</strong>
                <p>{item.start}</p>
              </div>
              <div>
                <strong>適合先整理</strong>
                <p>{item.detail}</p>
              </div>
              <Link href={item.href} className="inline-button">{item.cta}</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section id="email-nda" eyebrow="Email / NDA" title={contactEmailTemplate.title}>
        <div className="contact-email-panel">
          <div>
            <p>{contactEmailTemplate.description}</p>
            <p className="contact-email-address">
              <strong>官方 Email：</strong>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <a className="button-primary button-large" href={emailHref}>直接寄信給道易</a>
          </div>
          <div className="contact-email-template">
            <h3>Email 內容建議</h3>
            <p><strong>主旨：</strong>{contactEmailTemplate.subject}</p>
            <pre>{contactEmailTemplate.body}</pre>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Case Reference"
        title="你也可以先用相近案例對照自己的資料情境。"
        description="道易的案例橫跨 DPP 數位產品護照、AIoT 回收履歷、AI-Ontology、數位人文、研究資料庫與資料平台整合。若你的資料類型不同，也可以先從資料來源、使用者角色、查詢需求與維護流程來對照。"
      >
        <div className="contact-case-grid">
          {contactCaseEntrypoints.map((item) => (
            <article key={item.title} className="card contact-case-card">
              <h3>{item.title}</h3>
              <p><strong>適合：</strong>{item.fit}</p>
              <p><strong>可對照：</strong>{item.compare}</p>
            </article>
          ))}
        </div>
        <div className="section-actions contact-centered-action">
          <Link href="/work" className="button-primary button-large">查看案例實績</Link>
        </div>
      </Section>

      <section className="section-block contact-final-section">
        <div className="shell">
          <div className="contact-final-cta">
            <div>
              <span className="section-eyebrow">Next Step</span>
              <h2>先不用定完整系統，從一批資料或一條流程開始。</h2>
              <p>告訴道易你的資料類型、目前保存方式、使用者與想解決的問題。道易會協助判斷更適合從資料盤點、DPP PoC、ESG 稽核流程、AI-Ontology 工作坊，還是 Email / NDA 路徑開始。</p>
            </div>
            <div className="contact-final-actions">
              <Link href="#quick-brief" className="button-primary button-large">填寫 Quick Brief</Link>
              <Link href="#email-nda" className="button-secondary button-large">Email / NDA 聯絡</Link>
            </div>
          </div>
        </div>
      </section>

      <nav className="contact-mobile-sticky" aria-label="聯絡頁快速行動">
        <Link href="#quick-brief">Quick Brief</Link>
        <Link href="#email-nda">Email</Link>
      </nav>
    </main>
  );
}
