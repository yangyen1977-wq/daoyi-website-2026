import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig, solutionTracks, solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "重建藍圖",
  description: "把 B2B 官網、AI 敘事、知識平台與 trust UX 重組成三條成熟商用路徑。",
  alternates: { canonical: "/solutions" },
};

const buyingGuide = [
  ["詢問品質最重要", "先從官網重設與案例證據系統開始。"],
  ["AI 能力需要被理解", "先從 capability framing、流程與驗收節點開始。"],
  ["資料透明與合規優先", "先從 trust UX 與欄位藍圖開始。"],
];

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Capabilities</span>
          <h1>方案頁的任務不是列服務，而是幫買方找到正確起手式。</h1>
          <p>這一頁像 buying guide，讓訪客判斷自己該先從哪條路開始，而不是看完一串能力名詞後仍然不知道下一步。</p>
        </div>
      </section>

      <Section eyebrow="Core tracks" title="三條能力主軸，對應三種最常見的商用需求。">
        <div className="card-grid three-up">
          {solutions.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buying guide" title="先看自己比較像哪一種狀態，再決定要進哪條方案。">
        <div className="card-grid three-up">
          {buyingGuide.map(([title, detail]) => (
            <article key={title} className="feature-surface">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Delivery model" title="三個 sprint 路徑，對應三種常見重建切入點。">
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

      <Section eyebrow="Start small" title="如果不想一次做太大，可以先從一個短 sprint 開始。">
        <div className="feature-surface two-column">
          <div>
            <h3>適合先做的短 sprint</h3>
            <p>先處理最卡成交的那個模組，通常是首頁、案例系統，或方案頁 framing。</p>
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
