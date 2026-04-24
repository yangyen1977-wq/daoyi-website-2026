import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig, solutionTracks, solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "重建方案",
  description: "把品牌主張、頁面架構、offer packaging、proof system 與 conversion design 重組成三條成熟商用路徑。",
  alternates: { canonical: "/solutions" },
};

const buyingGuide = [
  ["網站看起來不差，但高意圖訪客還是很難快速判斷 fit", "先從 Positioning and Homepage Sprint 開始，解首頁與 sitemap 問題。"],
  ["能力很多，但業務、主管與外部買方都很難一句話說清你到底賣什麼", "先從 Offer Architecture Sprint 開始，重做 package 與 buying logic。"],
  ["案例不少，卻還無法支撐 shortlist、提案或採購內部共識", "先從 Proof and Conversion Sprint 開始，讓 evidence 更能被引用。"],
];

const packagingLayers = [
  {
    title: "Category framing",
    detail: "先回答你是什麼類型的 partner，不讓訪客在服務名稱裡自行猜測。",
  },
  {
    title: "Buyer question map",
    detail: "依 Founder、Marketing、Sales、Procurement 常見問題安排敘事，不平均分配資訊。",
  },
  {
    title: "Delivery model",
    detail: "把合作方式、週期、輸出、邊界與驗收寫成可採購的 path。",
  },
  {
    title: "Starter sprint",
    detail: "提供低風險起手方式，讓重建專案更容易先開始再擴大。",
  },
];

const decisionFaq = [
  {
    title: "為什麼不直接列所有服務？",
    detail: "因為成熟 B2B 買方不是在找能力名詞，而是在找適合自己現況的起手方案與可信交付方式。",
  },
  {
    title: "為什麼方案要做成 sprint？",
    detail: "因為這能降低第一次合作門檻，也讓網站重建從大案變成可啟動、可評估、可擴充的流程。",
  },
  {
    title: "為什麼方案頁要接案例與 Contact？",
    detail: "因為 buying guide 若不能直接接 proof 與下一步，就只是另一頁介紹文案。",
  },
];

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Offer Architecture</span>
          <h1>方案頁的任務不是列能力，而是把複雜服務包成可理解、可採購、可啟動的路徑。</h1>
          <p>新版方案頁像 enterprise buying guide。它幫買方快速判斷該從哪個 sprint 開始、會拿到什麼、邊界在哪裡，以及下一步怎麼走。</p>
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

      <Section eyebrow="Buying guide" title="先判斷卡點在哪一層，再決定從哪條方案進去。">
        <div className="card-grid three-up">
          {buyingGuide.map(([title, detail]) => (
            <article key={title} className="feature-surface">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Packaging layers" title="成熟商用方案，要同時處理 category、購買理解與交付信心。">
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

      <Section eyebrow="Decision FAQ" title="讓方案頁更像 buying guide，而不是靜態服務頁。">
        <div className="card-grid three-up">
          {decisionFaq.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next step" title="如果不想一次做太大，可以先用一個短 sprint 把最卡的地方拆開。">
        <div className="feature-surface two-column">
          <div>
            <h3>適合先做的短 sprint</h3>
            <p>通常是首頁、Offer 頁、案例摘要格式，或 contact flow。先把最直接影響高品質對話的模組重建起來。</p>
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
