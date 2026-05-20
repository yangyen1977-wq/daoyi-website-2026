import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyCard } from "@/components/case-study-card";
import { Section } from "@/components/section";
import { SubpageHero } from "@/components/subpage-hero";
import { caseCategories, caseProofNeeds, caseStudies, workHero } from "@/lib/content/cases";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "案例實績｜DPP、ESG、數位人文與知識平台",
  description: "道易科技案例涵蓋太陽能板回收履歷、Easy DPP、數位人文平台、國際研究資料庫與人物知識本體。",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <SubpageHero
        eyebrow={workHero.eyebrow}
        title={workHero.title}
        description={workHero.description}
        actions={[
          { href: "/contact", label: "討論類似案例" },
          { href: "/solutions", label: "了解解決方案", variant: "secondary" },
        ]}
      />

      <Section eyebrow="Case Library" title="用案例看道易如何把資料整理成可查詢、可驗證、可維護的平台。">
        <div className="card-grid four-up">
          {caseCategories.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ul className="bullet-list compact">
                {item.examples.map((example) => <li key={example}>{example}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Featured cases" title="六個代表案例類型，對應道易的核心技術與服務場景。">
        <div className="card-grid two-up">
          {caseStudies.map((item) => (
            <div key={item.title}>
              <CaseStudyCard {...item} />
              <p className="mini-label accent">{item.proofStatus}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next proof assets" title="下一輪最值得補的是能被買方直接查核的素材。">
        <div className="card-grid three-up">
          {caseProofNeeds.map((item) => (
            <article key={item.title} className="card offer-room-card">
              <h3>{item.title}</h3>
              <ul className="bullet-list compact">
                {item.items.map((proof) => <li key={proof}>{proof}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <Link href="/contact" className="button-primary button-large">討論類似案例</Link>
          <a href={`mailto:${siteConfig.email}`} className="button-secondary button-large">寄信給道易</a>
        </div>
      </Section>
    </main>
  );
}
