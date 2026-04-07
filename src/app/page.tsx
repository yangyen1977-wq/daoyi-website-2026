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
      serviceType: ["B2B website redesign", "AI solution framing", "Knowledge platform", "DPP / Traceability"],
      areaServed: "Asia-Pacific",
    },
  ],
};

const decisionSignals = [
  { label: "Ideal clients", value: "複雜型 B2B、製造業、研究平台、ESG / 合規團隊" },
  { label: "What we rebuild", value: "品牌主張、案例證據、頁面架構、Contact flow" },
  { label: "Start options", value: "Quick Brief、Email、NDA-friendly 專案起手" },
  { label: "Response", value: "24h 內回覆切入點與推薦 sprint" },
];

const benchmarkInsights = [
  {
    label: "Brand",
    title: "成熟 B2B 首頁先說清楚適合誰，不先堆抽象形容詞。",
    detail: "參考近期 SaaS / agency 高表現官網，共通點是把 ICP、結果與 next step 壓在第一屏完成。",
  },
  {
    label: "Proof",
    title: "案例證據要前置，而且要像商務材料，不像作品集。",
    detail: "首頁先給 challenge、交付與結果訊號，再讓訪客決定是否深入看完整案例。",
  },
  {
    label: "Conversion",
    title: "CTA 不是最後一顆按鈕，而是一套低摩擦 decision flow。",
    detail: "Quick Brief、Email 與 NDA 路徑同時可見，能明顯降低第一次接洽阻力。",
  },
];

const sitemapModules = [
  {
    page: "首頁 Home",
    purpose: "5 秒定位，1 分鐘 shortlist，3 分鐘決定要不要聯絡",
  },
  {
    page: "定位 Positioning",
    purpose: "把 DaoYi 從『會做網站』升級成能重建複雜商用敘事的策略設計夥伴",
  },
  {
    page: "方案 Solutions",
    purpose: "依買方卡點切成官網重設、AI 敘事、DPP / 知識平台三條 buying tracks",
  },
  {
    page: "案例 Proof",
    purpose: "把案例寫成可複述證據，支撐提案、採購與高層簡報",
  },
  {
    page: "啟動 Contact",
    purpose: "揭露回覆節奏、保密路徑與第一週會拿到什麼",
  },
];

const offerTracks = [
  {
    title: "網站重建與轉換系統",
    bullets: ["品牌主張重寫", "首頁 / 內頁模組系統", "案例與 CTA 重新排序", "手機版高意圖路徑"],
  },
  {
    title: "AI / 資料流程商業化敘事",
    bullets: ["把複雜能力翻成買方語言", "角色、欄位、SOP 可視化", "PoC 轉方案", "降低採購不確定性"],
  },
  {
    title: "知識平台與 DPP 體驗",
    bullets: ["資訊架構重整", "搜尋與瀏覽體驗", "可追溯資料展示", "品牌與合規雙敘事"],
  },
];

const proofSnapshots = [
  {
    label: "Knowledge platform",
    title: "研究 / 典藏型平台",
    detail: "重點是把大量內容整理成可理解、可查找、可持續擴充的知識產品。",
  },
  {
    label: "AI workflow",
    title: "AI 與流程導入型專案",
    detail: "買方真正想看的，是角色流程、欄位、驗收與實際工作節點。",
  },
  {
    label: "DPP / Traceability",
    title: "產品履歷與合規展示",
    detail: "把資料透明、QR 體驗與審查輸出整理成能對內對外都成立的介面。",
  },
];

const buyerCards = [
  {
    label: "Marketing / Brand",
    title: "流量有了，但首頁還撐不起高品質詢問。",
    detail: "先重做 hero、proof、模組節奏與 CTA，讓官網變成 shortlist 工具。",
  },
  {
    label: "Operations / IT",
    title: "方向有了，但對外網站還說不清楚 AI 與資料流程怎麼落地。",
    detail: "把模型、資料欄位、流程節點與驗收翻成可採購的方案語言。",
  },
  {
    label: "ESG / Compliance",
    title: "DPP / traceability 要開始了，但還沒有一個可信的第一版說法。",
    detail: "先做欄位藍圖、掃碼體驗與審查輸出框架，讓內外部都更容易理解。",
  },
];

const startModes = [
  "Quick Brief，適合已經知道要重建官網或案例系統的團隊。",
  "Email / NDA，適合涉及採購、法遵、客戶資料或內部文件的敏感專案。",
  "24h 回覆切入點，不只回收到，而是先給建議方向與下一步。",
];

export const metadata: Metadata = {
  title: "重建 B2B 官網、AI 敘事、知識平台與 DPP 商用體驗",
  description: "道易科技以重新設計與重建思維，協助複雜型 B2B 團隊重建品牌主張、案例證據、AI / 資料流程敘事與 DPP 體驗，做出更成熟的商用版官網。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技｜2026 B2B 商用版官網重建",
    description: "不是舊站優化，而是從定位、Proof、UI/UX 到轉換路徑的整體重建。",
    url: `${siteConfig.url}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "道易科技｜2026 B2B 商用版官網重建",
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
            <div className="hero-intro-badge">Rebuild the system, not just the homepage</div>
            <h1>把道易科技重建成，值得被 shortlist 的成熟 B2B 官網。</h1>
            <p>
              這次不再沿用舊站延伸優化的思維，而是直接重做定位、sitemap、案例證據、頁面模組與 contact flow，
              讓網站更像一套能支撐商務對話、提案與採購評估的數位系統。
            </p>

            <div className="contact-fast-facts" aria-label="首頁關鍵訊號">
              {decisionSignals.map((item) => (
                <div key={item.label} className="contact-fast-fact">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">
                開始規劃重建版官網
              </Link>
              <Link href="/cases" className="button-secondary button-large">
                先看案例證據系統
              </Link>
            </div>

            <div className="hero-priority-strip">
              <div>
                <span className="mini-label">New positioning</span>
                <strong>DaoYi 是把品牌、證據、資料流程與 DPP 體驗整成可成交網站系統的夥伴。</strong>
              </div>
              <div>
                <span className="mini-label">What changed</span>
                <p>首頁不再像公司介紹頁，而像一頁式 decision deck，先幫高意圖買方完成判斷。</p>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">What top B2B sites do better</span>
              <strong>成熟 B2B / SaaS 官網的共通點，不是更炫，而是更快建立「懂我、可信、可開始」的感覺。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>第一屏先講清楚對象、結果與 next step</li>
                <li>案例摘要與成果訊號提早出現</li>
                <li>Contact flow 前置，不讓訪客自己找入口</li>
                <li>手機版優先保留 CTA 與 reassurance</li>
              </ul>
            </div>
            <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
              {benchmarkInsights.map((item) => (
                <article key={item.title} className="hero-panel-card stat-card">
                  <span className="mini-label">{item.label}</span>
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
        title="先重做網站角色分工，讓每一頁都對應明確 buying job。"
        description="這不是在原有文案上加幾段新字，而是重新定義每一頁存在的理由。"
      >
        <div className="stack-list case-direction-stack">
          {sitemapModules.map((item) => (
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
        eyebrow="Offer architecture"
        title="把能力重組成三條商用敘事主軸，不再只是服務清單。"
        description="更成熟的網站，差別常在訊息架構，而不只是視覺。"
      >
        <div className="card-grid three-up">
          {offerTracks.map((item) => (
            <article key={item.title} className="card trust-card">
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
        eyebrow="Proof system"
        title="案例先變成可掃讀證據，再延伸成完整案例內容。"
        description="首頁前段就要讓人知道，道易做過哪些複雜題型、怎麼做、值不值得往下談。"
      >
        <div className="card-grid three-up">
          {proofSnapshots.map((item) => (
            <article key={item.title} className="card case-proof-snapshot-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Buyer journeys"
        title="首頁與內頁都從買方情境出發，不再從公司自述出發。"
        description="讓不同角色更快知道自己該看什麼、該怎麼開始。"
      >
        <div className="card-grid three-up">
          {buyerCards.map((item) => (
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
        title="新的轉換方式，是讓不同風險層級的案子都能開始。"
        description="不是只留一顆聯絡按鈕，而是把第一步設計清楚。"
      >
        <div className="feature-surface">
          <ul className="bullet-list compact">
            {startModes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Quick Brief" title="先用低摩擦方式，啟動這次重建。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
