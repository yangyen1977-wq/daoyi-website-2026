import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜Revenue-grade Website Rebuild",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Revenue-grade Website Rebuild",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const benchmarkPatterns = [
  {
    source: "Stripe / Ramp",
    title: "Outcome before features",
    detail: "首頁前段先回答商業結果、適合對象、可信規模與下一步，不讓訪客先掉進公司自介。",
    application: "道易首頁改成先處理 buyer fit、決策問題、證據類型與啟動入口。",
  },
  {
    source: "Linear / Vercel",
    title: "Dense but scannable",
    detail: "資訊密度高，但每個模組只處理一種判斷任務，所以依然好掃讀。",
    application: "新版模組用 clearer hierarchy，把複雜能力拆成 shortlist-ready blocks。",
  },
  {
    source: "High-end design firms",
    title: "Proof-led case architecture",
    detail: "案例先給 context、scope、proof、business shift，再延伸到方法與畫面。",
    application: "道易案例系統先服務轉傳、提案與採購，而不是先當作品牆。",
  },
];

const executiveLenses = [
  {
    label: "01",
    title: "Category clarity",
    detail: "五秒內說清楚這是替哪種 B2B 團隊，解哪種高價值溝通問題。",
  },
  {
    label: "02",
    title: "Offer packaging",
    detail: "把官網重建、能力敘事、案例證據與 trust UX 包成可理解的購買路徑。",
  },
  {
    label: "03",
    title: "Proof portability",
    detail: "讓主管、業務、採購與合作窗口可以直接引用，不必重新翻譯你的能力。",
  },
  {
    label: "04",
    title: "Conversion ladder",
    detail: "不同成熟度走不同入口，降低第一次接觸的心理阻力與資訊摩擦。",
  },
];

const rebuildTracks = [
  {
    title: "Homepage as decision interface",
    detail: "首頁重做成判斷 fit、理解價值、看見 proof、知道下一步的商業介面。",
    proof: "Hero、proof strip、entry CTA、shortlist sections 一起重做。",
  },
  {
    title: "Service pages as buying guides",
    detail: "方案頁不再列能力清單，而是把不同情境對應到不同起手式與交付方式。",
    proof: "把 Website Rebuild、Evidence System、Trust Architecture 做成清楚的路線。",
  },
  {
    title: "Cases as evidence assets",
    detail: "案例先回答商業情境、改變了什麼、適合誰、可帶走哪些信號。",
    proof: "讓案例能被轉傳，不只被欣賞。",
  },
  {
    title: "Contact as momentum layer",
    detail: "Contact 頁不只是表單，而是讓專案在第一次接觸就有結構、節奏與安心感。",
    proof: "Quick Brief、Workshop、NDA 三種入口並存。",
  },
];

const buyerScenarios = [
  {
    title: "B2B SaaS / 平台型公司",
    detail: "需要把產品能力、整合流程、導入價值與 enterprise 信任訊號講得更成熟。",
  },
  {
    title: "製造 / 工業 / 出口品牌",
    detail: "需要把技術、供應鏈、驗證與國際合作能力整理成買方容易理解的結構。",
  },
  {
    title: "AI / 自動化 / 顧問型團隊",
    detail: "能力很多，但若沒有 capability framing，外部只會覺得抽象又難採購。",
  },
  {
    title: "永續 / 研究 / 知識平台",
    detail: "資訊量高沒問題，真正關鍵是有沒有把可信內容做成查找、理解、引用都順的體驗。",
  },
];

const newSitemap = [
  ["首頁", "先完成 fit 判斷、理解 category、看見 proof、選擇起手式。"],
  ["適合對象", "讓不同產業與角色判斷自己目前最該重建哪一層。"],
  ["重建藍圖", "把 sprint、交付形式、範圍與進入方式包成明確 buying guide。"],
  ["案例系統", "案例先當 evidence asset，再延伸成完整專案敘事。"],
  ["啟動方式", "讓 Quick Brief、Workshop、NDA 對應不同 friction level。"],
];

const scorecard = [
  "訪客能否在 5 秒內理解你服務誰、解什麼問題、為何值得談。",
  "每個頁面是否各自負責一種決策，而不是平均分攤資訊。",
  "案例與 proof 是否可被主管、業務與採購直接引用。",
  "第一次接觸是否提供低摩擦、可預期、可信的下一步。",
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, serviceType: ["B2B website rebuild", "evidence architecture", "trust UX"] },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Revenue-grade Website Rebuild</span>
            <div className="hero-intro-badge">不是舊站優化，是把官網重建成更成熟的商用決策系統</div>
            <h1>把網站做成買方看得懂、主管拿得去轉傳、採購願意往下走的 commercial front door.</h1>
            <p>道易科技用重新設計與重建思維，直接重做品牌主張、網站架構、案例證據、方案包裝與 CTA 節奏，讓官網不再只是介紹頁，而是能支撐 shortlist、提案與成交前進的 revenue-grade website system。</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/work" className="button-secondary button-large">看案例證據系統</Link>
            </div>

            <div className="hero-outcome-board">
              {[
                ["Buyer clarity", "5 秒", "先判斷 fit，不先看公司自介。"],
                ["Rebuild scope", "4 層同步", "品牌、頁面、案例、轉換一起重做。"],
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
                <li>能力很多，但陌生買方還看不懂你真正賣的是什麼。</li>
                <li>網站像資訊倉庫，不像能推動 shortlist 的商業介面。</li>
                <li>案例有料，卻還不能被主管、業務與採購拿去直接轉傳。</li>
                <li>真正需要的不是再修 hero，而是重定義 buying journey。</li>
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {[
                ["Brand thesis", "Outcome-first", "先講商業結果，再講你是誰。"],
                ["UI / UX", "One page, one job", "每頁只回答一種決策問題。"],
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

      <Section eyebrow="Research lens" title="這輪重建借鏡成熟 B2B、SaaS 與設計公司官網的共同規律。" description="不是模仿畫面，而是吸收真正能提升品牌清晰度、UI 層級、UX 掃讀、proof 架構與 conversion readiness 的做法。">
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

      <Section eyebrow="Executive architecture" title="成熟商用官網，核心不是內容變多，而是決策結構變清楚。" description="新版首頁與內頁都圍繞 buying committee 的真實問題重排。">
        <div className="card-grid four-up">
          {executiveLenses.map((item) => (
            <article key={item.label} className="card rebuild-module-card">
              <span className="mini-label accent">Layer {item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Rebuild scope" title="這輪直接重做四個商務關鍵層，不再停在微調文案。" description="網站要像成熟商務前台，品牌、頁面、案例與轉換要一起成立。">
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

      <Section eyebrow="New sitemap" title="新版網站不是頁數變多，而是頁面角色真的重新分工。" description="每一頁都對應 buying flow 的一個階段。">
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

      <Section id="quick-brief" eyebrow="Quick Brief" title="先用最低摩擦的方式，啟動這次官網重建。" description="第一次接洽就先把首頁切口、頁面優先序、案例缺口與推薦 sprint 講清楚。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
