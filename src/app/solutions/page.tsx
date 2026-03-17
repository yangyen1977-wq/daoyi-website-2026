import type { Metadata } from "next";
import { Section } from "@/components/section";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "解決方案",
  description: "查看道易科技在 AI 應用、知識平台與數位產品護照 DPP 的解決方案版圖。",
  alternates: { canonical: "/solutions" },
};

const outcomeBlocks = [
  {
    title: "品牌官網與轉換型體驗",
    description: "釐清價值主張、重整導覽與頁面節奏，讓網站同時能說服、被搜尋，也能承接商機。",
  },
  {
    title: "資料服務與 API 能力",
    description: "把資料模型、查詢邏輯與外部介接方式整理清楚，為平台成長留下彈性。",
  },
  {
    title: "內部流程自動化與決策輔助",
    description: "讓 AI 進入文件、知識、檢索與作業流程，而不是停留在單次 Demo。",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Solutions</span>
          <h1>從 AI 到資料治理，再到 DPP，道易聚焦的是可被使用、可被維運的解決方案。</h1>
          <p>每一項能力都以實際流程整合為目標，而不是只有技術清單。</p>
        </div>
      </section>

      <Section eyebrow="核心解法" title="三大主軸，對應企業與組織最常遇到的升級需求。">
        <div className="card-grid three-up">
          {solutions.map((solution) => (
            <article key={solution.title} className="card">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <ul className="bullet-list compact">
                {solution.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="可交付成果" title="不只是一份規劃，而是能實際上線、被使用的系統與介面。">
        <div className="card-grid three-up">
          {outcomeBlocks.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
