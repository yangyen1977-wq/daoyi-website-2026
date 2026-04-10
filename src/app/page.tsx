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
      serviceType: ["B2B website rebuild", "AI narrative design", "Knowledge platform", "DPP / Traceability"],
      areaServed: "Asia-Pacific",
    },
  ],
};

const researchSignals = [
  {
    source: "B2B / SaaS benchmark",
    title: "首頁先完成 who, value, next step",
    detail: "成熟 SaaS 首屏不是炫技，而是 5 秒內讓買方知道你在處理哪種高價值問題。",
  },
  {
    source: "Agency benchmark",
    title: "案例先給決策摘要，不先丟作品圖",
    detail: "先講情境、交付、結果訊號，讓案例像採購前的 shortlist 材料。",
  },
  {
    source: "Conversion benchmark",
    title: "高意圖聯絡入口必須前置",
    detail: "Quick Brief、Email、NDA 與 first-week promise 要在前段就看得到。",
  },
];

const sitemapCards = [
  {
    label: "Homepage",
    title: "Decision deck 首頁",
    detail: "先處理定位、適配案型、證據、合作方式與 next step。",
  },
  {
    label: "Positioning",
    title: "品牌定位頁",
    detail: "把道易從做網站的人，拉高成能重構複雜商業溝通系統的夥伴。",
  },
  {
    label: "Solutions",
    title: "Buying tracks 方案頁",
    detail: "不列服務清單，改讓不同決策者找到自己該先啟動哪個 sprint。",
  },
  {
    label: "Work",
    title: "Proof library 案例頁",
    detail: "案例像證據庫，先看摘要再深看，不再像作品集目錄。",
  },
  {
    label: "Contact",
    title: "Start page 啟動頁",
    detail: "把不同風險層級的專案都設計成容易開始，而不是只留一顆聯絡鈕。",
  },
];

const valuePropositions = [
  {
    label: "Brand system",
    title: "把公司介紹頁，重建成 shortlist 工具",
    detail: "讓首頁像高階決策簡報，而不是只把資訊排整齊。",
  },
  {
    label: "Commercial clarity",
    title: "把 AI、流程、資料翻成能被採購的語言",
    detail: "主管看得懂範圍、風險、驗收與第一階段產出。",
  },
  {
    label: "Trust architecture",
    title: "把案例、模組與啟動流程做成可相信的系統",
    detail: "可信不是靠形容詞，而是靠清楚的結構、節奏與證據。",
  },
];

const modules = [
  {
    label: "Hero",
    title: "一句話講清楚對象、結果、啟動方式",
    detail: "道易協助高複雜度 B2B 團隊把網站重建成成熟商務入口。",
  },
  {
    label: "Proof bar",
    title: "前段就給案例類型與交付方式",
    detail: "研究平台、AI 流程、DPP / traceability 三類題型直接前置。",
  },
  {
    label: "Buyer fit",
    title: "讓品牌、營運、永續三種買方快速自我判斷",
    detail: "不再讓訪客自己猜這跟他有沒有關。",
  },
  {
    label: "CTA ladder",
    title: "Quick Brief / Email / NDA 三路並存",
    detail: "把 contact 變成起手流程，不是收件箱。",
  },
];

const proofCards = [
  {
    label: "Research / Knowledge",
    title: "把內容密度高的站，做成可查找、可說服、可擴充的平台",
    detail: "核心不是頁數，而是資訊架構能否支撐任務與理解。",
  },
  {
    label: "AI / Workflow",
    title: "把 AI 專案從技術展示，重寫成流程方案",
    detail: "角色、資料欄位、SOP 與驗收節點都能對外講清楚。",
  },
  {
    label: "DPP / Traceability",
    title: "把合規與透明資料，做成可信的數位體驗",
    detail: "從欄位藍圖到掃碼頁面，都要能讓外部理解與採信。",
  },
];

const scorecards = [
  ["適合案型", "B2B / 科技 / 製造 / 研究型團隊"],
  ["重建範圍", "品牌主張、頁面架構、案例系統、轉換流程"],
  ["聯絡承諾", "24h 內回具體下一步，不只回收到"],
  ["合作起手", "Quick Brief、Email、NDA、短 sprint"],
];

export const metadata: Metadata = {
  title: "道易科技 2026｜重建成成熟商用官網",
  description: "道易科技以重新設計與重建思維，重做品牌主張、sitemap、案例證據、UI/UX 與 contact flow，打造更成熟的 B2B 商用官網。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技｜2026 成熟商用版官網重建",
    description: "不是舊站優化，而是從定位、結構、案例、轉換到啟動流程的整體重建。",
    url: `${siteConfig.url}/`,
  },
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Commercial Rebuild 2026</span>
            <div className="hero-intro-badge">Rebuild the business website as a mature decision surface</div>
            <h1>把道易科技重建成，讓高意圖買方願意直接往下談的成熟商用官網。</h1>
            <p>
              道易不是在舊站上繼續補文案，而是從品牌主張、網站角色、頁面分工、案例證據、UI/UX 與 contact
              flow 全面重建，讓官網真的能支撐 shortlist、提案與採購判斷。
            </p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">
                開始這次官網重建
              </Link>
              <Link href="/work" className="button-secondary button-large">
                看新版案例證據庫
              </Link>
            </div>

            <div className="hero-outcome-board">
              {valuePropositions.map((item) => (
                <article key={item.title} className="hero-outcome-card">
                  <span className="mini-label accent">{item.label}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-rebuild-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">First-screen scorecard</span>
              <strong>成熟 B2B 官網的差別，不是更炫，而是更快讓人知道「適不適合、可信不可信、現在怎麼開始」。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                {scorecards.map(([label, value]) => (
                  <li key={label}>
                    <strong>{label}</strong>，{value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {researchSignals.map((item) => (
                <article key={item.title} className="hero-panel-card stat-card">
                  <span className="mini-label">{item.source}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Rebuilt sitemap"
        title="新的 sitemap，不是舊頁面換版，而是把 buying journey 重做一遍。"
        description="每個頁面都負責一個決策任務，首頁負責 shortlist，方案頁負責分流，案例頁負責證據，聯絡頁負責啟動。"
      >
        <div className="card-grid three-up">
          {sitemapCards.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Homepage modules"
        title="首頁模組重排，目標是讓第一次進站的人更快做判斷。"
        description="順序從品牌自述，改成決策資訊優先序。"
      >
        <div className="card-grid two-up rebuild-module-grid">
          {modules.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proof library"
        title="案例不是作品集，而是讓人快速建立信任的證據庫。"
        description="首頁前段就先露出題型、方法與結果訊號，讓高意圖訪客知道道易不是泛用型網站公司。"
      >
        <div className="card-grid three-up">
          {proofCards.map((item) => (
            <article key={item.title} className="card case-proof-snapshot-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Start path"
        title="轉換設計的重點，不是多一顆按鈕，而是把第一步說清楚。"
        description="不同成熟度、不同風險等級的案子，都要能找到可開始的方式。"
      >
        <div className="feature-surface rebuild-start-surface">
          <ul className="bullet-list compact">
            <li>Quick Brief，適合已知道大方向，想先拿建議切口與推薦 sprint。</li>
            <li>Email / NDA，適合牽涉採購、法遵、內部資料或需先保密的專案。</li>
            <li>24h 內先回具體下一步，包含建議起手頁面與待補資料。</li>
          </ul>
          <div className="inline-dual-cta">
            <Link href="/#quick-brief" className="button-primary inline-button">
              直接送出 Quick Brief
            </Link>
            <Link href="/contact" className="button-secondary inline-button">
              看完整啟動流程
            </Link>
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
