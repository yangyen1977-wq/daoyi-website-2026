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

const benchmarkNotes = [
  {
    source: "Top B2B / SaaS pattern",
    title: "首屏先完成買方的三個判斷",
    detail: "你是誰、適合誰、現在怎麼開始，必須在第一輪掃讀內講完。",
  },
  {
    source: "Agency / consulting pattern",
    title: "案例要像決策材料，不像作品集目錄",
    detail: "先給 challenge、delivery、outcome，再讓人決定要不要深看。",
  },
  {
    source: "Conversion pattern",
    title: "Contact flow 必須前置且低摩擦",
    detail: "Quick Brief、Email、NDA 路徑同時可見，讓高意圖流量不會卡住。",
  },
];

const rebuiltModules = [
  {
    label: "Homepage as decision deck",
    title: "首頁從公司介紹頁，改成 shortlist 工具",
    detail: "用 executive summary、案例證據、買方分流與 contact promise，讓第一次來的人更快做決定。",
  },
  {
    label: "Offer architecture",
    title: "服務清單改成三條 buying tracks",
    detail: "官網重建、AI / 資料流程敘事、DPP / 知識平台，讓不同角色更快找到自己的入口。",
  },
  {
    label: "Proof-led pages",
    title: "案例頁重做成證據庫與案例敘事系統",
    detail: "每個案例都先講情境、交付與結果訊號，不再只放抽象成果圖或短描述。",
  },
  {
    label: "Contact system",
    title: "啟動頁從表單頁，改成風險分級的起手頁",
    detail: "讓 quick brief、Email / NDA、first-week deliverables 一次講清楚。",
  },
];

const buyerTracks = [
  {
    role: "Brand / Marketing",
    tension: "舊站流量有了，但首頁還講不清楚差異，也撐不起高品質詢問。",
    outcome: "先重做 hero、proof、CTA 與 case ordering，讓網站變成 shortlist 工具。",
  },
  {
    role: "Operations / IT",
    tension: "AI 或系統方向明明存在，對外卻還說不清楚資料流程怎麼落地。",
    outcome: "把模型、欄位、SOP、驗收與 MVP 節點翻成可採購的方案語言。",
  },
  {
    role: "ESG / Compliance",
    tension: "DPP / traceability 已經逼近，但內外部都還看不到可信的第一版說法。",
    outcome: "先做欄位藍圖、掃碼體驗與審查輸出框架，讓專案更容易啟動。",
  },
];

const proofLedger = [
  {
    label: "Knowledge platform",
    title: "研究 / 典藏型平台",
    detail: "把多來源內容整理成可查詢、可理解、可擴充的知識產品，而不是靜態內容堆疊。",
  },
  {
    label: "AI workflow",
    title: "AI 與流程導入型專案",
    detail: "真正的 proof 是角色流程、欄位與 SOP 被講清楚，而不是只展示模型成果。",
  },
  {
    label: "DPP / Traceability",
    title: "產品履歷與合規展示",
    detail: "把資料透明、QR 體驗與審查輸出整理成能對內對外成立的數位介面。",
  },
];

const startPaths = [
  "Quick Brief，適合已知道大方向，想先拿建議切入點與推薦 sprint。",
  "Email / NDA，適合涉及採購、法遵、客戶資料或內部文件的敏感專案。",
  "24h 內先回覆具體下一步，不只回『收到』。",
];

export const metadata: Metadata = {
  title: "道易科技 2026｜重新設計與重建 B2B 商用官網",
  description: "以重新設計與重建思維，重做道易科技的品牌主張、網站架構、案例證據與 Contact flow，打造更成熟的 B2B / SaaS 商用官網。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技｜2026 B2B 商用版官網重建",
    description: "不是舊站延伸優化，而是從定位、架構、Proof、UI/UX 到轉換路徑的整體重建。",
    url: `${siteConfig.url}/`,
  },
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Rebuilt for 2026</span>
            <div className="hero-intro-badge">Rebuild the business website, not just refresh the old one</div>
            <h1>把道易科技重建成，值得被 shortlist 的成熟 B2B 商用官網。</h1>
            <p>
              這不是在原有文案上持續微調，而是直接重做品牌主張、sitemap、頁面架構、案例證據、UI/UX 與
              contact flow，讓網站更像一套能支撐商務對話、提案與採購判斷的數位系統。
            </p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">
                開始規劃重建版官網
              </Link>
              <Link href="/cases" className="button-secondary button-large">
                看新版案例證據系統
              </Link>
            </div>

            <div className="hero-outcome-board">
              <article className="hero-outcome-card">
                <span className="mini-label accent">New role</span>
                <strong>道易不是只做網站，而是把品牌、證據、資料流程與 DPP 體驗整成可成交網站系統的夥伴。</strong>
              </article>
              <article className="hero-outcome-card">
                <span className="mini-label accent">What changes now</span>
                <strong>首頁不再像公司介紹頁，而像一頁式 decision deck，先幫高意圖買方完成判斷。</strong>
              </article>
            </div>
          </div>

          <div className="hero-rebuild-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">2026 rebuild criteria</span>
              <strong>成熟 B2B / 科技 / SaaS 官網的差別，不是更炫，而是更快建立「懂我、可信、可開始」的感覺。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>第一屏先講清楚對象、結果與 next step</li>
                <li>案例與成果訊號在前段就出現</li>
                <li>Contact promise 早於公司介紹</li>
                <li>手機版也保留 CTA、proof 與 reassurance</li>
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {benchmarkNotes.map((item) => (
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
        eyebrow="Rebuilt architecture"
        title="新的 sitemap 與頁面分工，先從 buying job 重新定義。"
        description="每一頁都要對應明確決策任務，不再只是把舊內容換一個新版面。"
      >
        <div className="card-grid two-up rebuild-module-grid">
          {rebuiltModules.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Buyer journeys"
        title="首頁與內頁都從買方情境出發，而不是從公司自述出發。"
        description="讓品牌、營運、永續三種決策者更快知道自己該看什麼、該怎麼開始。"
      >
        <div className="card-grid three-up">
          {buyerTracks.map((item) => (
            <article key={item.role} className="card buyer-track-card">
              <span className="mini-label accent">{item.role}</span>
              <h3>{item.tension}</h3>
              <p>{item.outcome}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proof system"
        title="案例先變成可掃讀證據，再延伸成完整案例敘事。"
        description="首頁前段就要讓人知道，道易處理過哪些複雜題型、怎麼做、值不值得往下談。"
      >
        <div className="card-grid three-up">
          {proofLedger.map((item) => (
            <article key={item.title} className="card case-proof-snapshot-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Start a project"
        title="新的轉換方式，是讓不同風險層級的案子都能開始。"
        description="不是只留一顆聯絡按鈕，而是把第一步設計清楚。"
      >
        <div className="feature-surface rebuild-start-surface">
          <ul className="bullet-list compact">
            {startPaths.map((item) => (
              <li key={item}>{item}</li>
            ))}
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
