import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig, solutionBlueprints, solutionTracks, solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "重建方案",
  description: "把 B2B 官網、offer packaging、proof system 與 conversion design 重組成三條成熟商用路徑。",
  alternates: { canonical: "/solutions" },
};

const buyingGuide = [
  ["網站看起來還行，但高意圖訪客無法快速判斷 fit", "先從 Positioning and Homepage Sprint 開始。"],
  ["能力很多，業務與買方都不容易說清楚你們到底賣什麼", "先從 Offer Architecture Sprint 開始。"],
  ["案例很多卻很難支撐 shortlist、提案或採購對話", "先從 Proof and Conversion Sprint 開始。"],
];

const packagingLayers = [
  {
    title: "Buyer question map",
    detail: "先整理 buying committee 在不同階段會問什麼，而不是先堆能力名詞。",
  },
  {
    title: "Delivery model",
    detail: "把合作方式、週期、輸出、風險邊界與驗收方式寫成可購買的 path。",
  },
  {
    title: "Proof system",
    detail: "把案例、流程、FAQ、信任訊號與 CTA 排成更能成交的順序。",
  },
  {
    title: "Starter sprint",
    detail: "降低第一次合作門檻，讓團隊能先從一輪短 sprint 看見方向與成果。",
  },
];

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Offer Architecture</span>
          <h1>方案頁的任務不是列能力，而是把複雜服務包成可理解、可採購、可啟動的路徑。</h1>
          <p>這一頁像 enterprise buying guide。它幫買方快速判斷該從哪個 sprint 開始、會拿到什麼、風險邊界在哪裡，以及下一步怎麼走。</p>
        </div>
      </section>

      <Section eyebrow="Core tracks" title="三條能力主軸，對應三種最常見的商業問題。">
        <div className="card-grid three-up">
          {solutions.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Blueprint" title="這輪的方案設計，直接對齊成熟 B2B 官網的商務規律。">
        <div className="card-grid three-up">
          {solutionBlueprints.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buying guide" title="先判斷你現在卡在哪一層，再決定從哪條方案進去。">
        <div className="card-grid three-up">
          {buyingGuide.map(([title, detail]) => (
            <article key={title} className="feature-surface">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Packaging layers" title="成熟的商用方案，不只講能做什麼，還要講清楚怎麼買、怎麼開始。">
        <div className="card-grid four-up">
          {packagingLayers.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Delivery model" title="三個 starter sprint，對應三種常見的重建切入點。">
        <div className="card-grid three-up">
          {solutionTracks.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.outputs.map((output) => <li key={output}>{output}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="如果不想一次做太大，可以先用一個短 sprint 把最卡的地方拆開。">
        <div className="feature-surface two-column">
          <div>
            <h3>適合先做的短 sprint</h3>
            <p>通常是首頁、Offer 頁、案例摘要格式，或 contact flow。先把最直接影響對話品質的模組重建起來。</p>
          </div>
          <div>
            <h3>下一步</h3>
            <p><Link href="/contact" className="button-primary inline-button">描述你的專案狀態</Link></p>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "DaoYi rebuild tracks", url: `${siteConfig.url}/solutions` }) }} />
    </main>
  );
}
