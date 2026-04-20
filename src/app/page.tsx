import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜Revenue Website System Rebuild",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Revenue Website System Rebuild",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const benchmarkPatterns = [
  {
    source: "Stripe / Ramp",
    title: "Category clarity before company intro",
    detail: "首頁前段先處理服務誰、創造什麼商業結果、下一步怎麼開始，讓高意圖買方先判斷 fit。",
    application: "道易首頁把 category、buyer fit、proof 與 CTA 放在前段，不再先講公司背景。",
  },
  {
    source: "Linear / Vercel",
    title: "High density with strong hierarchy",
    detail: "資訊量可以高，但每個模組只服務一個判斷任務，所以讀起來仍然俐落。",
    application: "新版模組改成 decision blocks，讓 buying committee 能快速掃讀與轉傳。",
  },
  {
    source: "Top design firms",
    title: "Case studies as portable proof",
    detail: "案例不是先展示美感，而是先講 context、shift、proof、fit，讓證據可以被拿去說服別人。",
    application: "道易的案例頁重做成 shortlist-ready evidence system，而不是作品牆。",
  },
];

const decisionLayers = [
  {
    label: "01",
    title: "Category framing",
    detail: "先講你幫哪種團隊解什麼高價值問題，不讓陌生流量先猜。",
  },
  {
    label: "02",
    title: "Offer packaging",
    detail: "把複雜能力打包成買方、主管、業務與採購都能理解的商務語言。",
  },
  {
    label: "03",
    title: "Proof architecture",
    detail: "讓案例、數據與方法先支援 shortlist、提案與採購，不只是展示。",
  },
  {
    label: "04",
    title: "Conversion choreography",
    detail: "依專案成熟度提供不同 friction 的入口，讓第一次接觸更容易開始。",
  },
];

const rebuildTracks = [
  {
    title: "Homepage as commercial front door",
    detail: "首頁重做成先判斷 fit、理解 category、看見 proof、知道下一步的商務介面。",
    proof: "Hero、fit blocks、proof strip、start paths 與 CTA 節奏同步重做。",
  },
  {
    title: "Service pages as buying guides",
    detail: "內頁不再只是列能力，而是幫不同專案狀態找到正確起手式與第一輪 sprint。",
    proof: "把 Revenue Website、Offer Packaging、Evidence System 做成清楚的 route。",
  },
  {
    title: "Cases as evidence assets",
    detail: "案例頁先回答商業情境、改變了什麼、可引用訊號與適用對象，再延伸完整敘事。",
    proof: "讓案例能被主管、業務、採購與合作窗口直接轉傳。",
  },
  {
    title: "Contact as momentum system",
    detail: "Contact 頁不只是表單，而是讓第一次接洽就有節奏、邊界與預期的啟動系統。",
    proof: "Quick Brief、Workshop、NDA 對應不同風險與成熟度。",
  },
];

const buyerScenarios = [
  {
    title: "B2B SaaS / 平台型公司",
    detail: "需要把產品能力、導入方式、整合流程與 enterprise 信任訊號講得更成熟。",
  },
  {
    title: "製造 / 工業 / 出口品牌",
    detail: "需要把技術、驗證、供應鏈與國際合作能力整理成買方更容易理解的敘事。",
  },
  {
    title: "AI / 自動化 / 顧問團隊",
    detail: "能力很多，但若沒有 offer packaging，外部會只覺得抽象，難以採購。",
  },
  {
    title: "研究 / 永續 / 知識平台",
    detail: "高內容密度沒有錯，關鍵是內容有沒有被整理成可信、可查找、可引用的體驗。",
  },
];

const newSitemap = [
  ["首頁", "先完成 buyer fit 判斷、理解 category、看到 proof、選擇起手式。"],
  ["買方情境", "讓不同產業與角色判斷自己現在最該重建哪一層。"],
  ["重建方案", "把 sprint、範圍、輸出與進場方式包成清楚的 buying guide。"],
  ["證據系統", "案例先當 evidence asset，再延伸成完整專案敘事。"],
  ["啟動專案", "讓 Quick Brief、Workshop、NDA 對應不同 friction 與風險等級。"],
];

const scorecard = [
  "訪客能否在 5 秒內理解你服務誰、解什麼問題、為何值得往下談。",
  "每個頁面是否各自負責一種決策，而不是平均分攤資訊。",
  "案例與 proof 是否能被主管、業務與採購直接引用與轉傳。",
  "第一次接觸是否提供低摩擦、可信、可預期的下一步。",
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, serviceType: ["revenue website rebuild", "offer packaging", "evidence architecture"] },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Revenue Website System Rebuild</span>
            <div className="hero-intro-badge">不是優化舊站，是把官網重建成更成熟的 buying system</div>
            <h1>把網站做成買方判斷更快、內部拿得去賣、採購也接得住的 revenue website system.</h1>
            <p>道易科技用重新設計與重建思維，直接重做 category framing、offer packaging、proof architecture、頁面角色與 conversion choreography，讓官網不再只是介紹頁，而是真的能支撐 shortlist、提案與成交前進的 commercial front door。</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/solutions" className="button-secondary button-large">看重建方案</Link>
            </div>

            <div className="hero-outcome-board">
              {[
                ["Buyer clarity", "5 秒", "先判斷 fit，不先讀公司自介。"],
                ["Decision stack", "4 層同步", "category、offer、proof、conversion 一起重做。"],
                ["Start paths", "3 種入口", "Quick Brief、Workshop、NDA 對應不同成熟度。"],
              ].map(([label, value, description]) => (
                <article key={label} className="hero-outcome-card">
                  <span className="mini-label accent">{label}</span>
                  <strong>{value}</strong>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-rebuild-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">Who this is for</span>
              <strong>適合高複雜度 B2B、科技、製造、AI、研究與知識型團隊，特別是網站已經跟不上商業成熟度的人。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>商業成熟度已經升級，但網站還停在舊版介紹邏輯。</li>
                <li>能力很多，陌生買方卻還看不懂你真正賣的是什麼。</li>
                <li>案例有料，卻還不能被主管、業務與採購直接轉傳。</li>
                <li>真正需要的不是再修 hero，而是重做整個 buying journey。</li>
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {[
                ["Brand thesis", "Outcome before intro", "先講商業前進，再講你是誰。"],
                ["UI / UX", "One page, one decision", "每頁只處理一種判斷工作。"],
                ["Proof system", "Shortlist-ready", "證據先服務決策，再服務展示。"],
              ].map(([label, value, text]) => (
                <article key={label} className="hero-panel-card stat-card">
                  <span className="mini-label">{label}</span>
                  <strong>{value}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Research lens" title="這輪重建借鏡成熟 B2B、SaaS 與設計公司官網的共同規律。" description="不是模仿畫面，而是吸收真正能提升 category 清晰度、UI 層級、UX 掃讀、proof 結構與 conversion readiness 的做法。">
        <div className="card-grid three-up">
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

      <Section eyebrow="Decision architecture" title="成熟商用官網，核心不是內容變多，而是 buying flow 變清楚。" description="新版首頁與內頁都圍繞 buying committee 的真實問題重排。">
        <div className="card-grid four-up">
          {decisionLayers.map((item) => (
            <article key={item.label} className="card rebuild-module-card">
              <span className="mini-label accent">Layer {item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Rebuild scope" title="這輪直接重做商務關鍵層，不再停在微調文案或換皮。" description="網站要像成熟商務前台，品牌、頁面、案例與轉換要一起成立。">
        <div className="card-grid two-up rebuild-module-grid">
          {rebuildTracks.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.proof}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buyer fit" title="不同團隊需要不同入口，不該全部先讀完同一套公司介紹。" description="新版官網依 buyer context 分流，讓理解路徑更短。">
        <div className="card-grid four-up">
          {buyerScenarios.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="New sitemap" title="新版網站不是頁數變多，而是每一頁真的有自己的任務。" description="每一頁都對應 buying flow 的一個階段。">
        <div className="card-grid three-up">
          {newSitemap.map(([title, detail]) => (
            <article key={title} className="card trust-card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Commercial scorecard" title="這輪重建的標準，是能不能更像成熟商用版官網。" description="至少要通過這四個檢查。">
        <div className="card-grid two-up">
          {scorecard.map((item) => (
            <article key={item} className="card process-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Quick Brief" title="先用最低摩擦的方式，啟動這次重建。" description="第一次接洽就先把 category 切口、頁面優先序、proof 缺口與推薦 sprint 講清楚。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
