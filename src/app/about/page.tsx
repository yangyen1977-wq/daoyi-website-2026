import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "定位",
  description: "道易科技的 2026 品牌定位：一間能把複雜 B2B、AI、知識平台與 DPP 專案整理成成熟商用網站與數位體驗的團隊。",
  alternates: { canonical: "/about" },
};

const positioningCards = [
  {
    title: "不是單純網站公司",
    detail: "道易的差異，不在於會不會做頁面，而在於能不能把複雜能力講成買方願意往下談的商業敘事。",
  },
  {
    title: "不是抽象策略顧問",
    detail: "我們不是只給方向，也會把方向轉成頁面架構、模組、案例格式與啟動路徑。",
  },
  {
    title: "是能處理複雜型 B2B 專案的數位夥伴",
    detail: "特別適合橫跨品牌、資料、流程、合規與對外說明的案型。",
  },
];

const strengths = [
  "把複雜能力重新包裝成更好理解的品牌主張",
  "把案例重寫成對商務決策有幫助的證據系統",
  "把 AI / 資料流程 / DPP 這類複雜題目翻成更可採購的語言",
  "把網站從靜態展示，升級成能支撐詢問與提案的商用資產",
];

const workingStyle = [
  {
    step: "01",
    title: "Reframe",
    detail: "先重定義市場定位、買方問題與網站角色，不急著在原站架構上貼新文案。",
  },
  {
    step: "02",
    title: "Restructure",
    detail: "重做 sitemap、首頁與內頁模組，讓每一頁都服務一個明確的 buying job。",
  },
  {
    step: "03",
    title: "Prove",
    detail: "把案例、輸出與方法寫成可複述的 proof，支撐 shortlist 與會議決策。",
  },
  {
    step: "04",
    title: "Convert",
    detail: "把 Contact flow 做得更像決策入口，而不是被動收件箱。",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Positioning</span>
          <h1>道易科技的定位，應該是一間能把複雜專案整理成成熟商用體驗的團隊。</h1>
          <p>
            這不是傳統「我們會網站、也會 AI」的並列式介紹，而是更高一層的品牌說法：道易擅長把品牌、資料、流程與對外溝通整成真正能成交、能推動專案的數位系統。
          </p>
        </div>
      </section>

      <Section eyebrow="Brand position" title="新的品牌描述，要能讓對的人一眼就知道這是不是自己的案子。">
        <div className="card-grid three-up">
          {positioningCards.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What DaoYi is really good at" title="真正該被前置的，不只是能力清單，而是這些整合能力。">
        <div className="feature-surface">
          <ul className="bullet-list compact">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Working model" title="2026 版本的合作方式，核心是重設，不是修補。">
        <div className="card-grid four-up">
          {workingStyle.map((item) => (
            <article key={item.step} className="card process-card">
              <span className="step-index">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next" title="如果你正在規劃新站、重做案例系統，或要把 AI / DPP 講得更成熟，現在就值得開始。">
        <div className="feature-surface two-column">
          <div>
            <h3>適合現在談的情況</h3>
            <p>網站已經跟不上業務階段，或內部能力很強，但對外說法還不夠成熟、可信、好理解。</p>
          </div>
          <div>
            <h3>最快的起手方式</h3>
            <p>
              <Link href="/contact" className="button-primary inline-button">前往啟動專案</Link>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
