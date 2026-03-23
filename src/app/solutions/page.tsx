import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig, solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "解決方案",
  description: "查看道易科技如何把 B2B 官網改版、AI 導入、知識平台與 DPP / traceability 規劃成真正可交付、可驗收、可擴充的解決方案。",
  keywords: [
    "道易科技解決方案",
    "B2B 官網改版",
    "AI 導入顧問",
    "知識平台建置",
    "DPP 規劃",
    "traceability website",
    "數位產品護照顧問",
  ],
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "道易科技解決方案｜B2B 官網、AI、知識平台、DPP",
    description: "不是只列服務清單，而是直接說清楚每一類專案會處理哪些阻力、交付哪些成果，以及適合怎麼開始。",
    url: `${siteConfig.url}/solutions`,
  },
  twitter: {
    card: "summary_large_image",
    title: "道易科技解決方案｜B2B 官網、AI、知識平台、DPP",
    description: "把策略、資料、介面與交付節奏整成可執行的 project track。",
  },
};

const solutionFastFacts = [
  { label: "適合專案", value: "官網改版 / AI 導入 / 知識平台 / DPP" },
  { label: "第一次回覆", value: "24h 內附建議切入點" },
  { label: "開始方式", value: "Quick Brief / Email / NDA" },
];

const buyerSituations = [
  {
    label: "Brand / Marketing",
    title: "網站已經有內容，但還講不清楚差異、案例證據與 CTA。",
    detail: "這類型通常先從首頁主張、案例排序、Contact friction 與手機版掃讀節奏開始，最快補出 shortlist 需要的說服力。",
  },
  {
    label: "Operations / IT",
    title: "AI 或資料整合方向有了，但流程、欄位與驗收還沒被講成可執行方案。",
    detail: "重點不是再多做一個 demo，而是把角色分工、資料 contract、前台體驗與後續維運一起整理清楚。",
  },
  {
    label: "ESG / Compliance",
    title: "已開始談 traceability / DPP，但缺少能對內對外說明的第一版系統敘事。",
    detail: "這類型通常要把法規脈絡、欄位藍圖、QR 體驗與審查輸出整合成能被理解與驗證的交付。",
  },
];

const deliveryFrames = [
  {
    label: "Strategy + message",
    title: "先把『誰適合、為何可信、現在怎麼開始』講清楚。",
    detail: "參考近期高表現 B2B / SaaS 網站，服務頁不只列能力，而是先回答買方會不會 shortlist 你的三個核心問題。",
  },
  {
    label: "Proof + structure",
    title: "案例、資料、流程與介面要能彼此對得起來。",
    detail: "不讓案例像作品集縮圖，也不讓 AI / DPP 只剩抽象名詞；每條 solution 都要對應到場景、輸出與驗收方式。",
  },
  {
    label: "Contact + next step",
    title: "讓高意圖訪客知道送出後真的會拿到什麼。",
    detail: "把 24h 回覆、Quick Brief、Email / NDA 與推薦 sprint 前置，通常比再多一段品牌形容詞更能促進轉換。",
  },
];

const proofSystem = [
  {
    title: "問題定義先行",
    detail: "先定義阻力點、角色與成功條件，再決定要做網站、平台、AI flow 還是 DPP 體驗。",
  },
  {
    title: "交付物可被驗收",
    detail: "每個 solution 都對應可描述的輸出，例如首頁結構、案例證據格式、欄位藍圖、SOP 節點或管理後台需求。",
  },
  {
    title: "可維運而非一次性展示",
    detail: "不只看 launch moment，也會考慮後續資料擴充、內容治理、RWD 與跨部門使用情境。",
  },
];

const engagementTracks = [
  {
    title: "Homepage / Contact Sprint",
    detail: "適合想先提升品牌主張、案例證據、CTA 與手機版轉換的團隊。",
    outputs: ["首頁訊息優先序", "CTA / Contact friction audit", "手機版重點區塊調整"],
  },
  {
    title: "AI / Workflow Sprint",
    detail: "適合已經有模型或資料方向，但需要整理欄位、角色與可驗收流程的團隊。",
    outputs: ["資料 contract 與欄位盤點", "角色 / SOP 節點設計", "前台與內部流程銜接建議"],
  },
  {
    title: "DPP / Traceability Sprint",
    detail: "適合想先把法規脈絡、產品履歷與對外體驗整成第一版方案的團隊。",
    outputs: ["欄位藍圖", "QR / 履歷體驗方向", "審查與對外溝通輸出框架"],
  },
];

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Solutions</span>
          <h1>不是把服務一項項列出來，而是把專案真正要往前推的阻力拆清楚。</h1>
          <p>
            道易的解決方案頁，重點不是展示我們會哪些技術，而是讓你更快判斷：目前最該先補的是官網、案例證據、AI / 資料流程，還是 DPP / traceability 的第一版系統敘事。
          </p>
          <div className="contact-fast-facts" aria-label="解決方案重點摘要">
            {solutionFastFacts.map((item) => (
              <div key={item.label} className="contact-fast-fact">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="contact-hero-actions">
            <Link href="/#quick-brief" className="button-primary button-large">
              先用 Quick Brief 判斷 fit
            </Link>
            <Link href="/contact" className="button-secondary button-large">
              看 Contact / NDA 起手方式
            </Link>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Decision fit"
        title="三種最常見的專案起點，先找到你現在最像哪一種。"
        description="吸收 Brightscout、Clay 與 Huemor 這類成熟 B2B / agency 網站的共同模式：solution page 要先幫買方定位情境，而不是先丟一堆能力名詞。"
      >
        <div className="card-grid three-up">
          {buyerSituations.map((item) => (
            <article key={item.title} className="feature-surface">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Core solution tracks"
        title="三大主軸，對應品牌說服、流程落地與資料透明化三種升級需求。"
        description="每一類解法都不是單點產出，而是會連動到訊息、資料、介面、維運與下一步轉換。"
      >
        <div className="card-grid three-up">
          {solutions.map((solution) => (
            <article key={solution.title} className="card trust-card">
              <span className="mini-label accent">Solution track</span>
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

      <Section
        eyebrow="How DaoYi structures the work"
        title="不是只做畫面或功能，而是把決策者真正要看的東西排進同一套節奏。"
        description="這輪直接吸收競品常見強項：更早的 proof、更清楚的買方情境、更低摩擦的下一步。"
      >
        <div className="card-grid three-up">
          {deliveryFrames.map((item) => (
            <article key={item.title} className="feature-surface">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proof standard"
        title="每一類 solution 都要能被說明、被驗收，也能持續長。"
        description="B2B 官網真正有說服力的地方，往往不是寫得多，而是交付邏輯夠清楚。"
      >
        <div className="card-grid three-up">
          {proofSystem.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Suggested starting sprint"
        title="如果你不想一次做很大，可以先從最接近成果的那條 sprint 開始。"
        description="把 solution page 補成像 buying guide，能降低第一次接洽的不確定感，也更符合高轉換 B2B 網站的 decision flow。"
      >
        <div className="card-grid three-up">
          {engagementTracks.map((item) => (
            <article key={item.title} className="card decision-card">
              <span className="mini-label accent">Recommended sprint</span>
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

      <Section
        eyebrow="Next step"
        title="如果你已經知道大方向，下一步不一定是先拿完整提案，也可以先拿一輪判斷。"
        description="讓 solution page 的結尾直接承接 contact 轉換：先判斷 fit，再決定 Quick Brief、Email 或 NDA-friendly flow。"
      >
        <div className="feature-surface two-column">
          <div>
            <h3>你通常會先拿到什麼</h3>
            <ul className="bullet-list compact">
              <li>目前最值得先補的頁面、流程或證據段落</li>
              <li>建議從哪條 sprint 開始較有性價比</li>
              <li>第一次會議需要補哪些網址、文件或內部脈絡</li>
            </ul>
          </div>
          <div>
            <h3>低摩擦開始方式</h3>
            <p>如果想先小步開始，可先送出 Quick Brief；若專案較敏感、涉及採購或既有資料，也可以直接改走 Email / NDA 路徑。</p>
            <div className="hero-actions" style={{ marginTop: 16 }}>
              <Link href="/#quick-brief" className="button-primary button-large">
                先拿建議切入點
              </Link>
              <Link href="/contact" className="button-secondary button-large">
                查看 Contact / NDA
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
