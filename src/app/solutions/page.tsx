import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "能力架構",
  description: "道易科技 2026 能力架構，將 B2B 官網重設、AI / 流程敘事、知識平台與 DPP 體驗重新整理成三條成熟商用方案。",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "道易科技能力架構｜B2B 官網、AI、知識平台、DPP",
    description: "不是服務清單，而是三條能支撐商用官網與複雜專案溝通的解決方案主軸。",
    url: `${siteConfig.url}/solutions`,
  },
};

const tracks = [
  {
    label: "Track 01",
    title: "B2B 官網重設與轉換系統",
    detail: "針對品牌主張不清、案例證據偏弱、CTA 路徑鬆散的團隊，重做首頁、內頁與 contact flow。",
    outputs: ["sitemap 重整", "首頁與內頁模組", "案例摘要框架", "CTA / contact path"],
  },
  {
    label: "Track 02",
    title: "AI 與資料流程的商業化敘事",
    detail: "把模型、資料、角色與 SOP 說成買方與主管都能理解的方案，讓技術能力更容易被接受與採購。",
    outputs: ["solution framing", "流程與欄位說明", "驗收節點", "對外說服內容"],
  },
  {
    label: "Track 03",
    title: "知識平台與 DPP 體驗設計",
    detail: "面對大量內容、產品履歷、透明化與合規需求時，重做資訊架構與對外體驗。",
    outputs: ["資訊架構", "搜尋 / 瀏覽路徑", "DPP / traceability 敘事", "對外展示模組"],
  },
];

const buyingGuide = [
  {
    title: "如果你最在意詢問品質",
    detail: "先從官網重設與案例證據系統開始。",
  },
  {
    title: "如果你最在意 AI 能不能被理解",
    detail: "先從 solution framing、流程與驗收節點開始。",
  },
  {
    title: "如果你最在意資料透明與合規",
    detail: "先從 DPP / traceability 體驗與欄位藍圖開始。",
  },
];

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Capabilities</span>
          <h1>能力架構不是把服務排開，而是把不同買方情境導向正確的起手式。</h1>
          <p>新的 solutions page 應該像 buying guide，幫訪客判斷自己該先從哪條路開始，而不是看完一串能力名詞還是不知道下一步。</p>
        </div>
      </section>

      <Section eyebrow="Core tracks" title="三條能力主軸，對應三種最常見的商用需求。">
        <div className="card-grid three-up">
          {tracks.map((item) => (
            <article key={item.title} className="card trust-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ul className="bullet-list compact">
                {item.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buying guide" title="先看自己比較像哪一種狀態，再決定要進哪條方案。">
        <div className="card-grid three-up">
          {buyingGuide.map((item) => (
            <article key={item.title} className="feature-surface">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Start small" title="如果不想一次做太大，可以先從一個短 sprint 開始。">
        <div className="feature-surface two-column">
          <div>
            <h3>適合先做的短 sprint</h3>
            <ul className="bullet-list compact">
              <li>首頁重構 sprint</li>
              <li>案例證據系統 sprint</li>
              <li>AI / DPP solution framing sprint</li>
            </ul>
          </div>
          <div>
            <h3>下一步</h3>
            <p>
              <Link href="/contact" className="button-primary inline-button">描述你的專案狀態</Link>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
