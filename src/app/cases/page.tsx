import type { Metadata } from "next";
import { Section } from "@/components/section";
import { cases } from "@/lib/site";

export const metadata: Metadata = {
  title: "案例實績",
  description: "查看道易科技在研究平台、AI 視覺辨識與產品資料透明化方面的案例方向。",
  alternates: { canonical: "/cases" },
};

const deliveryNotes = [
  "跨領域資料整合與檢索架構整理",
  "結合 AI 模型與實際作業節點的流程設計",
  "兼顧對外展示、對內管理與後續資料擴充",
];

export default function CasesPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Selected Cases</span>
          <h1>道易的案例特色，不是炫技，而是把複雜任務整理成可以真的用的成果。</h1>
          <p>從學術研究到產業應用，我們看重的是資料脈絡與系統價值能不能被放大。</p>
        </div>
      </section>

      <Section eyebrow="案例方向" title="三種代表性實作，對應道易目前最有辨識度的能力版圖。">
        <div className="stack-list">
          {cases.map((item) => (
            <article key={item.title} id={item.slug} className="stack-item feature-surface">
              <div>
                <span className="mini-label accent">{item.category}</span>
                <h3>{item.title}</h3>
              </div>
              <div>
                <p>{item.description}</p>
                <strong>{item.impact}</strong>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="共同特徵" title="這些專案背後，都需要同時處理內容、資料、介面與維運邏輯。">
        <div className="feature-surface">
          <ul className="bullet-list compact">
            {deliveryNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>
    </main>
  );
}
