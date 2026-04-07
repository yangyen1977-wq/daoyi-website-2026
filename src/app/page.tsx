import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      description: siteConfig.description,
    },
    {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
      serviceType: ["B2B website redesign", "AI enablement", "Knowledge platform", "DPP / Traceability"],
      areaServed: "Asia-Pacific",
    },
  ],
};

const executiveSignals = [
  { label: "Brand proposition", value: "把品牌、案例、流程與資料敘事整成能成交的商用官網" },
  { label: "Primary buyers", value: "B2B、製造業、研究型組織、永續與數位轉型團隊" },
  { label: "Start format", value: "首頁重構、案例系統、AI / DPP 說服架構、Contact flow" },
  { label: "Response", value: "24h 內回覆具體切入點與下一步" },
];

const homepagePillars = [
  {
    label: "01 / Strategy-led site system",
    title: "不是把舊站修順，而是重建一套更成熟的官網敘事系統。",
    detail: "首頁先服務高意圖買方，內頁再支撐評估、比較與提案流程。先重做訊息結構，再決定每個模組與頁面該做什麼。",
  },
  {
    label: "02 / Proof-led conversion",
    title: "案例要像商務證據，不像作品集縮圖。",
    detail: "把案例摘要、交付內容、適用情境與下一步靠近 CTA，讓決策者不必自己拼湊你到底做過什麼。",
  },
  {
    label: "03 / Complex offer, simple UX",
    title: "AI、知識平台與 DPP 很複雜，但網站體驗要更簡單。",
    detail: "用短路徑、低摩擦入口與可掃讀模組，讓複雜能力也能在 1 分鐘內被理解，降低第一次接洽的認知成本。",
  },
];

const serviceArchitecture = [
  {
    title: "官網重設與成長架構",
    bullets: ["品牌主張重寫", "首頁與內頁模組系統", "CTA / Contact flow", "手機版高意圖路徑"],
  },
  {
    title: "AI 與流程產品化敘事",
    bullets: ["把模型能力寫成業務能理解的價值", "整理角色、欄位、SOP", "把 PoC 說成可採購的方案", "降低『看不懂怎麼落地』的阻力"],
  },
  {
    title: "知識平台與 DPP 體驗設計",
    bullets: ["資訊架構", "搜尋與瀏覽路徑", "資料透明化", "合規與對外展示的雙重敘事"],
  },
];

const buyerJourneys = [
  {
    label: "For marketing leaders",
    title: "流量進來了，但首頁還撐不起高品質詢問。",
    detail: "先重做價值主張、案例排序、信任訊號與 CTA 節奏，讓官網變成 shortlist 工具，不只是公司介紹。",
  },
  {
    label: "For operations / IT",
    title: "方向有了，但外部網站還講不清楚 AI 與資料流程的可交付性。",
    detail: "把 AI、資料 contract、角色分工與驗收節點轉成買方看得懂的方案語言。",
  },
  {
    label: "For ESG / compliance",
    title: "DPP / traceability 正在逼近，但對內對外都缺一個可信的第一版說法。",
    detail: "把欄位藍圖、履歷體驗與審查輸出轉成可被管理層、客戶與供應鏈理解的商用界面。",
  },
];

const proofModules = [
  {
    title: "Proof snapshot",
    detail: "每個案例先講客戶情境、阻力與交付，不把訪客丟進長文案例才開始理解。",
  },
  {
    title: "Buying guide modules",
    detail: "Solutions page 不只列服務，而是先幫買方判斷自己目前卡在哪一段。",
  },
  {
    title: "Executive homepage",
    detail: "首頁像一頁式 decision deck，先讓主管知道值不值得談，再往下看細節。",
  },
  {
    title: "Low-friction contact",
    detail: "Quick Brief、Email、NDA 三條路並存，讓敏感專案也能順利開始。",
  },
];

const innerPageBlueprint = [
  {
    page: "首頁 / Home",
    purpose: "建立 5 秒定位、1 分鐘 shortlist 判斷、3 分鐘 contact 意願",
  },
  {
    page: "定位 / About",
    purpose: "把 DaoYi 講成一間能處理複雜 B2B 與資料型專案的策略設計夥伴",
  },
  {
    page: "能力 / Solutions",
    purpose: "依買方情境切三條主軸，不再只是平鋪服務清單",
  },
  {
    page: "案例 / Proof",
    purpose: "把案例變成可複述的證據系統，支撐提案、比較與採購說服",
  },
  {
    page: "啟動 / Contact",
    purpose: "降低首次接洽摩擦，清楚揭露回覆節奏與合作起點",
  },
];

const homepageRoadmap = [
  "首屏先講『為誰、解什麼、怎麼開始』，不用抽象形容詞當主角。",
  "案例與 solution 模組前置，讓買方更快看到可信理由。",
  "內頁改成 buying journey，不再像傳統公司網站的靜態目錄。",
  "CTA 從單一聯絡按鈕，升級成多入口 decision flow。",
];

export const metadata: Metadata = {
  title: "重設 B2B 官網、AI 敘事、知識平台與 DPP 商用體驗",
  description:
    "道易科技以重新設計與重建思維，協助 B2B 團隊重設官網、案例系統、AI / 資料流程敘事與 DPP 體驗，讓網站更像成熟商用版的成長引擎。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技｜重設 B2B 官網、AI 敘事、知識平台與 DPP 商用體驗",
    description: "不是沿用舊站優化思維，而是重建更成熟的品牌、Proof、UX 與轉換系統。",
    url: `${siteConfig.url}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "道易科技｜2026 商用版官網重設",
    description: "品牌、案例、AI / DPP 敘事與 Contact flow，一次重建。",
  },
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section">
        <div className="shell hero-grid" style={{ alignItems: "start" }}>
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Rebuild for 2026</span>
            <div className="hero-intro-badge">Reframe the site, not just the visuals</div>
            <h1>把道易科技官網，重建成更成熟的 B2B 商用版網站。</h1>
            <p>
              道易不是只會做網站，也不是只會談 AI。更精準的定位，是協助複雜型 B2B 團隊把品牌主張、案例證據、AI / 資料流程與 DPP 體驗，整成一套真的能對外成交、對內推動的網站系統。
            </p>

            <div className="contact-fast-facts" aria-label="首頁關鍵訊號">
              {executiveSignals.map((item) => (
                <div key={item.label} className="contact-fast-fact">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">
                開始規劃新官網
              </Link>
              <Link href="/cases" className="button-secondary button-large">
                先看案例證據架構
              </Link>
            </div>

            <div className="hero-priority-strip">
              <div>
                <span className="mini-label">New core message</span>
                <strong>讓網站不只看起來專業，而是真的能幫團隊拿到更高品質的下一步。</strong>
              </div>
              <div>
                <span className="mini-label">What changes now</span>
                <p>從舊站延伸思維，切換成品牌、資訊架構、案例系統與轉換路徑的整體重建。</p>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">2026 homepage roadmap</span>
              <strong>新首頁要像 B2B decision deck，不像傳統公司介紹頁。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                {homepageRoadmap.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
              {proofModules.map((item) => (
                <article key={item.title} className="hero-panel-card stat-card">
                  <span className="mini-label">{item.title}</span>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Brand platform"
        title="新的品牌主張，不再是『我們什麼都能做』，而是更清楚地說明道易擅長整合什麼。"
        description="參考成熟 B2B / SaaS / 設計公司常見做法，先完成定位，再展開頁面模組與轉換節奏。"
      >
        <div className="card-grid three-up">
          {homepagePillars.map((item) => (
            <article key={item.title} className="feature-surface">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Site architecture"
        title="先重做 sitemap 與頁面角色，讓每一頁都對應一個明確的 buying job。"
        description="這次不是沿用原本內容再加新文案，而是重新定義每一頁存在的理由。"
      >
        <div className="stack-list case-direction-stack">
          {innerPageBlueprint.map((item) => (
            <article key={item.page} className="stack-item feature-surface">
              <div>
                <span className="mini-label accent">{item.page}</span>
              </div>
              <div>
                <strong>{item.purpose}</strong>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Solution architecture"
        title="把能力重新包裝成三條商用敘事主軸，而不是散開的服務項目。"
        description="網站成熟感，很多時候不是視覺，而是訊息架構是否能幫客戶快速理解你的價值。"
      >
        <div className="card-grid three-up">
          {serviceArchitecture.map((item) => (
            <article key={item.title} className="card trust-card">
              <span className="mini-label accent">Capability track</span>
              <h3>{item.title}</h3>
              <ul className="bullet-list compact">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Buyer journeys"
        title="首頁與內頁都改成以買方情境出發，不再以公司自述出發。"
        description="高成熟 B2B 站的共同點，是會先幫訪客判斷自己在哪個情境，而不是先丟一長串能力。"
      >
        <div className="card-grid three-up">
          {buyerJourneys.map((item) => (
            <article key={item.title} className="card decision-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Start a project"
        title="新的轉換邏輯，是讓不同風險層級的案子都能開始。"
        description="不是只放一顆聯絡按鈕，而是提供能對應不同團隊狀態的起手式。"
      >
        <div className="feature-surface two-column">
          <div>
            <h3>適合直接送 Quick Brief 的情況</h3>
            <ul className="bullet-list compact">
              <li>已經確定今年要重做官網或整理對外敘事</li>
              <li>需要一個更成熟的首頁與案例系統方向</li>
              <li>想先拿到建議切入點與推薦 sprint</li>
            </ul>
          </div>
          <div>
            <h3>適合先走 Email / NDA 的情況</h3>
            <ul className="bullet-list compact">
              <li>專案涉及內部文件、採購、法遵或客戶資料</li>
              <li>需要先看保密安排與對焦方式</li>
              <li>想低風險確認 fit，再安排正式會議</li>
            </ul>
            <p style={{ marginTop: 16 }}>
              <a className="button-secondary inline-button" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi 2026 官網 / AI / DPP 專案討論")}`}>
                先用 Email 開始
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Quick Brief" title="先用低摩擦方式，啟動這次重建。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
