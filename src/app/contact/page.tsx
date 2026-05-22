import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import {
  contactDecisionRoutes,
  contactEmailTemplate,
  contactHero,
  contactMeetingSteps,
} from "@/lib/content/contact";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const contactPageTitle = "聯絡道易｜DPP、ESG 稽核、AI-Ontology 與可信資料平台諮詢";
const contactPageDescription =
  "用一批資料判斷可信資料平台第一步。可填寫 5 問 Quick Brief，或透過 Email / NDA 討論 DPP、ESG、AI-Ontology、資料信任鏈與系統整合需求。";

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
    <main id="main-content" className="contact-page contact-rebuild-page contact-compact-page">
      <section className="contact-hero">
        <div className="shell contact-hero-grid contact-compact-hero-grid">
          <div className="contact-hero-copy">
            <span className="section-eyebrow">{contactHero.eyebrow}</span>
            <h1>{contactHero.title}</h1>
            <p>{contactHero.description}</p>
            <div className="section-actions">
              <Link href="#quick-brief" className="button-primary button-large">填寫 5 問 Quick Brief</Link>
              <Link href="#email-nda" className="button-secondary button-large">先用 Email / NDA 聯絡</Link>
            </div>
            <p className="contact-hero-note">{contactHero.note}</p>
          </div>

          <div className="contact-decision-panel" aria-label="選擇接洽路徑">
            {contactDecisionRoutes.map((item) => (
              <article key={item.label} className="contact-decision-card">
                <span className="mini-label accent">{item.label}</span>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
                <Link href={item.href} className="inline-button">{item.cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="quick-brief"
        eyebrow="Quick Brief"
        title="填寫 5 問 Quick Brief，先判斷第一步。"
        description="表單會開啟你的 Email 軟體並帶入內容；若涉及機密細節，請改走 Email / NDA。"
      >
        <QuickBriefForm />
      </Section>

      <Section
        eyebrow="First Meeting"
        title="第一次會議只先對齊三件事。"
        description="道易會先看資料基礎、使用者與揭露範圍，再建議 DPP、ESG / 資料信任鏈、AI-Ontology、AIoT 或系統整合的第一步。"
      >
        <div className="contact-meeting-grid contact-compact-meeting-grid">
          {contactMeetingSteps.map((item) => (
            <article key={item.step} className="contact-meeting-step">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="email-nda" eyebrow="Email / NDA" title={contactEmailTemplate.title}>
        <div className="contact-email-panel contact-compact-email-panel">
          <div>
            <p>{contactEmailTemplate.description}</p>
            <p className="contact-email-address">
              <strong>官方 Email：</strong>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <div className="section-actions">
              <a className="button-primary button-large" href={emailHref}>先用 Email / NDA 聯絡</a>
              <Link href="/work" className="button-secondary button-large">查看案例實績</Link>
            </div>
          </div>
          <div className="contact-email-template">
            <h3>Email 內容建議</h3>
            <p><strong>主旨：</strong>{contactEmailTemplate.subject}</p>
            <pre>{contactEmailTemplate.body}</pre>
          </div>
        </div>
      </Section>

      <nav className="contact-mobile-sticky" aria-label="聯絡頁快速行動">
        <Link href="#quick-brief">填寫 5 問 Quick Brief</Link>
        <Link href="#email-nda">先用 Email / NDA 聯絡</Link>
      </nav>
    </main>
  );
}
