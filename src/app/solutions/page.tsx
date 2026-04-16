import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig, solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "重建藍圖",
  description: "道易科技 2026 重建藍圖頁，把 B2B 官網、AI 敘事、知識平台與 trust UX 重組成三條成熟商用路徑。",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "道易科技重建藍圖",
    description: "不是服務清單，而是三條能支撐商用官網與複雜專案溝通的起手式。",
    url: `${siteConfig.url}/solutions`,
  },
};

const buyingGuide = [
  ["如果你最在意詢問品質", "先從官網重設與案例證據系統開始。"],
  ["如果你最在意 AI 能不能被理解", "先從 AI framing、流程與驗收節點開始。"],
  ["如果你最在意資料透明與合規", "先從 trust UX 與欄位藍圖開始。"],
];

const deliverables = [
  "重新定義品牌主張與 sitemap",
  "重做首頁、方案頁、案例頁與 contact flow",
  "把 AI / trust / knowledge 內容翻成買方語言",
  "建立可持續擴充的 evidence modules",
];

const sprintOptions = [
  ["首頁重構 sprint", "適合先把首屏主張、證據與 CTA 重新排版。"],
  ["案例系統 sprint", "適合把作品牆改成能支援 shortlist 的 evidence assets。"],
  ["Offer framing sprint", "適合把 AI、顧問能力或複雜服務說得更成熟。"],
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

      <Section eyebrow="Deliverables" title="這不是打包型服務清單，而是重建官網時會一起完成的核心交付。">
        <div className="card-grid two-up">
          {deliverables.map((item) => (
            <article key={item} className="card rebuild-module-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Start small" title="如果不想一次做太大，可以先從一個短 sprint 開始。">
        <div className="feature-surface two-column">
          <div>
            <h3>適合先做的短 sprint</h3>
            <ul className="bullet-list compact">
              {sprintOptions.map(([title, detail]) => (
                <li key={title}><strong>{title}</strong>，{detail}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>下一步</h3>
            <p><Link href="/contact" className="button-primary inline-button">描述你的專案狀態</Link></p>
          </div>
        </div>
      </Section>
    </main>
  );
}
