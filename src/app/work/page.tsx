import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { CaseOverviewStats } from "@/components/case-overview-stats";
import { CaseSnapshots } from "@/components/case-snapshots";
import { PersonaPlaybook } from "@/components/persona-playbook";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "案例證據",
  description: "道易科技 2026 案例證據頁，不把案例當作品集，而是當成能支撐 shortlist、採購與提案決策的證據系統。",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Case System</span>
          <h1>案例頁重做成決策材料，不再是作品集清單。</h1>
          <p>新的案例系統先讓訪客看懂情境、交付與結果訊號，再決定要不要深入看完整專案。</p>
        </div>
      </section>

      <Section eyebrow="Case structure" title="案例採用 context / delivery / proof / next 的重述方式。">
        <CaseOverviewStats />
      </Section>

      <Section eyebrow="Snapshot first" title="先給可掃讀摘要，再展開完整案例。">
        <CaseSnapshots />
      </Section>

      <Section eyebrow="Audience guide" title="不同角色看案例的重點不同，路徑也該不同。">
        <PersonaPlaybook />
      </Section>

      <Section eyebrow="CTA" title="如果你想把現有案例改成更能成交的版本，可以直接開始。">
        <div className="feature-surface two-column">
          <div>
            <h3>你會先拿到</h3>
            <ul className="bullet-list compact">
              <li>首頁該前置哪些 proof</li>
              <li>每個案例摘要怎麼重寫</li>
              <li>案例與 CTA 如何排成 shortlist flow</li>
            </ul>
          </div>
          <div>
            <h3>立即啟動</h3>
            <p><Link href="/contact" className="button-primary inline-button">預約案例系統重構</Link></p>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", name: "DaoYi work system", url: `${siteConfig.url}/work` }) }} />
    </main>
  );
}
