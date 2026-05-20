import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { StartModeCard } from "@/components/start-mode-card";
import { SubpageHero } from "@/components/subpage-hero";
import { TrustFlowTimeline } from "@/components/trust-flow-timeline";
import {
  dataToEvidencePrinciples,
  technologyHero,
  technologyModules,
  technologySolutionMap,
  technologyStartModes,
  technologyTrustFlow,
} from "@/lib/content/technology";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "技術核心｜可信資料如何被建立",
  description: "道易科技以 Ontology、Hash、Merkle Tree、IPFS、TSA、API 與 AI/AIoT 校驗建立可信資料平台。",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <main id="main-content">
      <SubpageHero
        eyebrow={technologyHero.eyebrow}
        title={technologyHero.title}
        description={technologyHero.description}
        actions={[
          { href: "#trust-flow", label: "看信任資料流程" },
          { href: "/contact", label: "帶著資料流程來討論", variant: "secondary" },
        ]}
      />

      <Section eyebrow="From Data to Evidence" title="資料要被信任，不能只靠資料庫保存。">
        <div className="card-grid three-up">
          {dataToEvidencePrinciples.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="trust-flow" eyebrow="Trust Flow" title="從資料產生到第三方稽核，每一步都保留可驗證證據。">
        <TrustFlowTimeline steps={technologyTrustFlow} />
      </Section>

      <Section eyebrow="Core Modules" title="每一個技術選擇，都要能回答一個稽核問題。">
        <div className="card-grid three-up">
          {technologyModules.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p><strong>解決的問題：</strong>{item.problem}</p>
              <p><strong>道易怎麼用：</strong>{item.usage}</p>
              <ul className="bullet-list compact">
                {item.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Technology to Solutions" title="同一套可信資料底座，支撐不同產業場景。">
        <div className="card-grid four-up">
          {technologySolutionMap.map((item) => (
            <article key={item.title} className="card evidence-matrix-card">
              <span className="mini-label accent">Solution</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Recommended Start" title="先找出資料信任鏈最需要補強的一段。">
        <div className="card-grid three-up">
          {technologyStartModes.map((item) => (
            <StartModeCard key={item.title} title={item.title} detail={item.detail} fit={item.fit} />
          ))}
        </div>
        <div className="section-actions">
          <Link href="/contact" className="button-primary button-large">討論技術導入</Link>
          <a href={`mailto:${siteConfig.email}`} className="button-secondary button-large">寄信給道易</a>
        </div>
      </Section>
    </main>
  );
}
