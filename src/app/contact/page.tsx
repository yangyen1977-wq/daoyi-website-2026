import type { Metadata } from "next";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { StartModeCard } from "@/components/start-mode-card";
import { SubpageHero } from "@/components/subpage-hero";
import {
  contactChecklist,
  contactEmailTemplate,
  contactFastFacts,
  contactHero,
  contactModes,
  contactScenarios,
} from "@/lib/content/contact";
import { siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "聯絡我們｜啟動 DPP、ESG 稽核或 AI-Ontology 專案",
  description: "與道易科技討論數據信任鏈、DPP 數位產品護照、ESG 高效稽核、AI-Ontology 知識平台與資料系統整合。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content">
      <SubpageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        description={contactHero.description}
        actions={[
          { href: "#quick-brief", label: "填寫 Quick Brief" },
          { href: `mailto:${siteConfig.email}`, label: "直接 Email 聯絡", variant: "secondary" },
        ]}
      />

      <Section eyebrow="Fast facts" title="第一次接洽會先對齊資料與風險，不只聊功能清單。">
        <div className="card-grid four-up">
          {contactFastFacts.map((item) => (
            <article key={item.label} className="card trust-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.value}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Start modes" title="不用一開始就定完整系統，先選一種最接近現況的起手方式。">
        <div className="card-grid four-up">
          {contactModes.map((item) => (
            <StartModeCard key={item.title} title={item.title} detail={item.detail} fit={item.fit} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Before you send" title="如果能先準備這三件事，第一次會議會更有效。">
        <div className="feature-surface two-column">
          <div>
            <ul className="bullet-list compact">
              {contactChecklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3>聯絡方式</h3>
            <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Quick Brief" title="用最短路徑，開始可信資料平台討論。">
        <QuickBriefForm />
      </Section>

      <Section eyebrow="Email / NDA" title={contactEmailTemplate.title}>
        <div className="feature-surface two-column">
          <div>
            <p>{contactEmailTemplate.description}</p>
            <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
          </div>
          <div>
            <h3>Email 預填內容</h3>
            <p><strong>主旨：</strong>{contactEmailTemplate.subject}</p>
            <a
              className="button-secondary button-large"
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(contactEmailTemplate.subject)}&body=${encodeURIComponent(contactEmailTemplate.body)}`}
            >
              直接寄信給道易
            </a>
          </div>
        </div>
      </Section>

      <Section eyebrow="Common situations" title="常見接洽情境。">
        <div className="card-grid two-up">
          {contactScenarios.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
