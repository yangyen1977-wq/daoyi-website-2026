import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { SolutionCard } from "@/components/solution-card";
import { StartModeCard } from "@/components/start-mode-card";
import { SubpageHero } from "@/components/subpage-hero";
import { solutionDetails, solutionMap, solutionsHero, solutionStartModes } from "@/lib/content/solutions";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "解決方案｜數據信任鏈、DPP、ESG 稽核與 AI-Ontology",
  description: "道易科技以可信資料底座，提供數據信任鏈、DPP 數位產品護照、AI-Ontology 知識平台與 AIoT 回收履歷整合。",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <SubpageHero
        eyebrow={solutionsHero.eyebrow}
        title={solutionsHero.title}
        description={solutionsHero.description}
        actions={[
          { href: "/contact", label: "討論適合的方案" },
          { href: "/work", label: "查看案例實績", variant: "secondary" },
        ]}
      />

      <Section eyebrow="Solution map" title="先看你要解決哪一種資料信任問題。">
        <div className="card-grid four-up">
          {solutionMap.map((item) => (
            <SolutionCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Buying guide" title="每個方案都先說清楚適用對象與可驗收成果。">
        <div className="card-grid two-up">
          {solutionDetails.map((item) => (
            <article key={item.title} className="card offer-room-card">
              <span className="mini-label accent">{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>適合對象：</strong>{item.audience.join("、")}</p>
              <p><strong>解決問題：</strong>{item.problems.join("、")}</p>
              <ul className="bullet-list compact">
                {item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
              </ul>
              <p><strong>相關技術：</strong>{item.technologies}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Recommended start" title="若還不確定完整範圍，先用一條流程或一批資料做 PoC。">
        <div className="card-grid three-up">
          {solutionStartModes.map((item) => (
            <StartModeCard key={item.title} title={item.title} detail={item.detail} fit={item.fit} />
          ))}
        </div>
        <div className="section-actions">
          <Link href="/contact" className="button-primary button-large">討論啟動方式</Link>
          <a href={`mailto:${siteConfig.email}`} className="button-secondary button-large">寄信給道易</a>
        </div>
      </Section>
    </main>
  );
}
