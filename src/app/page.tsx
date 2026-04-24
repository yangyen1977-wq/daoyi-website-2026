import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { siteConfig, thirdPartyScorecard } from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜Enterprise Website Rebuild System",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Enterprise Website Rebuild System",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const heroSignals = [
  {
    label: "Best fit",
    value: "B2B / 科技 / SaaS / 製造 / AI 團隊",
    detail: "適合商業複雜度已經升級，但網站仍停在舊版公司介紹邏輯的團隊。",
  },
  {
    label: "Core job",
    value: "Positioning × Offer × Proof × Conversion",
    detail: "不是美化首頁，而是重做買方理解、內部共識與啟動流程。",
  },
  {
    label: "Start paths",
    value: "Quick Brief / Workshop / NDA",
    detail: "依採購成熟度與敏感程度，安排不同 friction 的開始方式。",
  },
];

const benchmarkPatterns = [
  {
    source: "Stripe / Ramp / Clay 脈絡",
    title: "Outcome-first framing",
    detail: "高表現 B2B 首頁都先講商業結果、適合對象與下一步，不讓訪客先猜。",
    application: "道易首頁前兩屏直接處理 buyer fit、proof cue 與起手方式。",
  },
  {
    source: "Linear / Vercel / Notion 脈絡",
    title: "Dense but controlled scanning",
    detail: "資訊可以密，但模組邊界、標題節奏與視覺層級要非常穩。",
    application: "首頁改成 executive blocks，讓高意圖訪客能快速掃到自己在意的問題。",
  },
  {
    source: "SaaS / Agency case study 脈絡",
    title: "Proof above persuasion",
    detail: "不是先說自己多厲害，而是先給數字、情境、結果與適用對象。",
    application: "案例頁與首頁 proof 模組都往 executive summary first 調整。",
  },
  {
    source: "2026 SaaS CRO 脈絡",
    title: "Friction reduction beats decoration",
    detail: "真正拉動轉換的往往是 clarity、proof 與 CTA 節奏，而不是更花俏的設計。",
    application: "Contact flow 持續做成 ladder，而不是單一路徑表單。",
  },
];

const rebuildStack = [
  {
    label: "Layer 01",
    title: "Brand proposition",
    detail: "把道易從『做網站的人』重定義成『替企業重建商務前台與決策介面的團隊』。",
  },
  {
    label: "Layer 02",
    title: "Sitemap as buyer journey",
    detail: "首頁、觀點、方案、證據、Contact 不再平均分配內容，而是各自承接不同購買任務。",
  },
  {
    label: "Layer 03",
    title: "Proof packaging",
    detail: "案例與 trust content 先變成可轉傳的 proof asset，再變成網站內容。",
  },
  {
    label: "Layer 04",
    title: "Conversion ladder",
    detail: "讓陌生訪客、內部評估者、敏感專案窗口都能找到合適入口。",
  },
];

const pageModules = [
  {
    page: "首頁",
    role: "先完成 5 秒理解與 shortlist 判斷",
    modules: ["buyer fit + business outcome", "proof cue + trust signal", "offer snapshot", "CTA ladder"],
  },
  {
    page: "重建觀點",
    role: "教育市場何時該重建，不該再沿用舊站優化思維",
    modules: ["fit signals", "rebuild principles", "適用產業", "合作模式"],
  },
  {
    page: "重建方案",
    role: "把複雜能力包成可購買、可理解、可內部對齊的路徑",
    modules: ["solution tracks", "delivery model", "decision FAQ", "starter sprint"],
  },
  {
    page: "案例證據",
    role: "把案例從作品展示改成 executive proof system",
    modules: ["snapshot cards", "result signal", "fit cue", "next-step CTA"],
  },
  {
    page: "啟動重建",
    role: "降低第一次接洽摩擦，讓對話更容易開始",
    modules: ["response expectation", "mode selection", "input checklist", "quick brief"],
  },
];

const idealClients = [
  {
    title: "B2B SaaS / Platform",
    detail: "需要把產品價值、導入流程、角色權限、整合情境與 enterprise 信任訊號講成熟。",
  },
  {
    title: "製造 / 工業 / 出口品牌",
    detail: "需要把技術、認證、供應能力、合作流程與國際可信度整理成買方易懂結構。",
  },
  {
    title: "AI / 顧問 / 自動化團隊",
    detail: "能力很多但容易抽象，最需要 offer packaging 與 proof framing。",
  },
  {
    title: "研究 / 永續 / 高知識密度平台",
    detail: "內容很多不是問題，問題是有沒有被整理成可信、好掃讀、可引用的體驗。",
  },
];

const homepageModules = [
  {
    title: "先給買方一個能立即複述的品牌主張",
    detail: "首頁主張直接指向『企業級網站重建系統』，而不是泛稱數位服務或網站設計。",
  },
  {
    title: "把首頁做成 multi-section decision deck",
    detail: "每一段都服務不同判斷任務，讓 Founder、Marketing、Sales、Procurement 都能快速找到答案。",
  },
  {
    title: "先放 proof cue，再放大量說服文案",
    detail: "案例與結果訊號前置，減少訪客在前段的認知負擔與懷疑。",
  },
  {
    title: "把 Contact 當成產品化流程，不只是表單",
    detail: "明講回覆內容、節奏與開始方式，讓第一次接洽更有安全感。",
  },
];

const rolePaths = [
  {
    role: "Founder / GM",
    ask: "這家公司能不能把我們的外部商務前台升級到下一階段？",
    answer: "首頁與觀點頁先回答 category、差異化、買方理解效率與值得現在啟動的原因。",
  },
  {
    role: "Marketing / Growth",
    ask: "流量進站後，能否更快理解價值並進入高品質對話？",
    answer: "首頁與案例頁強化 clarity、proof 與 CTA 節奏，讓詢問品質更成熟。",
  },
  {
    role: "Sales / PM",
    ask: "方案、流程、交付與邊界，能不能更容易對內外部轉述？",
    answer: "方案頁直接做成 buying guide，不讓能力資訊散落在各頁。",
  },
  {
    role: "Procurement / Compliance",
    ask: "敏感專案可否先用低風險方式確認 fit、流程與保密邊界？",
    answer: "Contact 頁保留 NDA / Email 路徑，降低首次接洽阻力。",
  },
];

const executiveChecks = [
  {
    title: "5-second clarity",
    detail: "陌生訪客能不能在幾秒內理解你幫誰、解什麼問題、下一步是什麼。",
  },
  {
    title: "Offer readability",
    detail: "跨部門利害關係人能不能快速理解合作方式、輸出與起手範圍。",
  },
  {
    title: "Proof portability",
    detail: "你的案例與結果訊號能不能被直接轉傳、引用、複述。",
  },
  {
    title: "Conversion readiness",
    detail: "網站是否提供不同阻力等級的啟動方式，而不是只剩聯絡我們。",
  },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, serviceType: ["enterprise website rebuild", "offer architecture", "proof and conversion system"] },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Enterprise Website Rebuild</span>
            <div className="hero-intro-badge">把企業官網重建成真正能服務品牌敘事、商務成交、shortlist 與 buying committee 的 decision interface</div>
            <h1>{siteConfig.heroTitle}</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/solutions" className="button-secondary button-large">看重建方案</Link>
            </div>

            <div className="hero-outcome-board">
              {heroSignals.map((item) => (
                <article key={item.label} className="hero-outcome-card">
                  <span className="mini-label accent">{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-rebuild-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">2026 rebuild thesis</span>
              <strong>成熟 B2B 官網的任務，不只是介紹公司，而是幫買方更快建立理解、信任、內部共識與下一步。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>品牌主張先指向商業結果，不先落入泛稱服務介紹。</li>
                <li>網站地圖依 buyer journey 重排，不延續舊站資訊分配。</li>
                <li>案例先當 decision proof asset，再當作品展示。</li>
                <li>Contact flow 產品化，讓第一次接觸更低摩擦。</li>
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {rebuildStack.map((item) => (
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

      <Section eyebrow="Benchmark patterns" title="這輪重製吸收的是成熟 B2B / SaaS / 設計公司官網的上層規律。" description="不是抄畫面，而是抽出 2026 高表現商用站共同在做的幾件事：更快 clarity、更早 proof、更低 friction。">
        <div className="card-grid four-up">
          {benchmarkPatterns.map((item) => (
            <article key={item.title} className="card trust-card">
              <span className="mini-label accent">{item.source}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.application}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Brand proposition" title="新版品牌主張，不再只是做網站，而是替企業重建商務前台。">
        <div className="feature-surface two-column">
          <div>
            <h3>新的主張</h3>
            <p>道易科技不是沿著舊站繼續微調，而是直接重建品牌主張、offer architecture、proof system 與 conversion flow，讓官網能真正服務商務開發與採購前進。</p>
          </div>
          <div>
            <h3>為什麼更成熟</h3>
            <p>因為它把網站視為 revenue-facing system，而不是設計專案或內容整理工作。這個 framing 會直接影響 sitemap、頁面角色與 CTA 設計。</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Sitemap as buyer journey" title="新版 sitemap 先對齊購買流程，再對齊內容分類。">
        <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {pageModules.map((item) => (
            <article key={item.page} className="card rebuild-module-card">
              <span className="mini-label accent">{item.page}</span>
              <h3>{item.role}</h3>
              <ul className="bullet-list compact">
                {item.modules.map((module) => <li key={module}>{module}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Who this rebuild is for" title="這些類型的團隊，最值得直接重建而不是持續修舊站。">
        <div className="card-grid four-up">
          {idealClients.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage module system" title="首頁模組這輪往更成熟的商用敘事推進。">
        <div className="card-grid four-up">
          {homepageModules.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Role-based reading" title="同一個網站，要同時回答 buying committee 不同角色的問題。">
        <div className="card-grid two-up">
          {rolePaths.map((item) => (
            <article key={item.role} className="card decision-card">
              <span className="mini-label accent">{item.role}</span>
              <h3>{item.ask}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Third-party quick review" title="第三方快速總評：方向對，但這輪仍有幾個成熟化空間。">
        <div className="card-grid four-up">
          {thirdPartyScorecard.map(([title, score, detail]) => (
            <article key={title} className="card trust-card">
              <span className="mini-label accent">{score}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Executive scorecard" title="成熟官網應該用商務標準檢查，而不是只看視覺感。">
        <div className="card-grid four-up">
          {executiveChecks.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Start the rebuild" title="如果網站已經跟不上現在的商業階段，可以直接從這裡開始。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
