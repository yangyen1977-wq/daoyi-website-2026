import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import {
  homepageBenchmarks,
  homepageDecisionLayers,
  homepageRolePaths,
  homepageSitemap,
  siteConfig,
  solutionTracks,
  thirdPartyScorecard,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜Commercial Website Platform Rebuild",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Commercial Website Platform Rebuild",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const heroProof = [
  {
    label: "Best fit",
    value: "B2B / 科技 / SaaS / 製造 / AI 團隊",
    detail: "商業成熟度已升級，但網站仍停在舊版公司介紹與服務列表邏輯。",
  },
  {
    label: "Core rebuild",
    value: "Category × Offer × Proof × Conversion",
    detail: "不是美化首頁，而是重做買方理解、內部共識與商務啟動結構。",
  },
  {
    label: "Primary output",
    value: "Commercial website platform",
    detail: "讓首頁、方案、案例與 Contact 各自承接一個明確 buying job。",
  },
];

const rebuildSignals = [
  {
    title: "舊站邏輯還在介紹自己，沒有幫買方做判斷",
    detail: "成熟 B2B 官網要先讓訪客知道你幫誰、解什麼問題、值不值得 shortlist。",
    outcome: "把首頁改成 decision-ready executive brief。",
  },
  {
    title: "能力很多，但外部仍難一句話理解你賣什麼",
    detail: "這通常不是文案微調問題，而是 category framing 與 offer packaging 沒重做。",
    outcome: "把方案頁從能力名詞表改成 buying guide。",
  },
  {
    title: "案例有料，卻還不夠支撐內部對齊與轉傳",
    detail: "作品展示不等於 proof system，案例必須先可引用、可比較、可複述。",
    outcome: "把案例重做成 shortlist-ready proof asset。",
  },
];

const homepageModules = [
  {
    title: "Hero 先交付商務理解，不先交付公司自介",
    detail: "首屏先完成 buyer fit、商務命題、可信度與下一步，不讓高意圖流量先做猜題。",
  },
  {
    title: "首頁中段像 board memo，而不是一般形象頁",
    detail: "用高密度但可掃讀的模組，把重建理由、頁面角色、方案路徑與 proof cue 排清楚。",
  },
  {
    title: "內頁各自有任務，不再每頁都講一點",
    detail: "方法頁負責教育市場，方案頁負責購買理解，案例頁負責證據，Contact 頁負責低摩擦啟動。",
  },
];

const architectureMap = [
  {
    page: "首頁",
    mission: "完成理解、shortlist 與下一步判斷",
    module: "Outcome-led hero、fit signal、benchmark logic、CTA ladder",
  },
  {
    page: "重建方法",
    mission: "教育為什麼該重建，不該只優化",
    module: "Rebuild triggers、operating model、decision map",
  },
  {
    page: "商務方案",
    mission: "把能力包成可採購、可驗收的起手方案",
    module: "Offer tracks、delivery model、objection handling",
  },
  {
    page: "案例證據",
    mission: "把案例變成 buying committee 可引用的證據",
    module: "Executive summaries、proof blocks、fit cues",
  },
  {
    page: "啟動專案",
    mission: "降低第一次接觸 friction，明講回覆模型",
    module: "Quick Brief、Workshop、NDA、response promise",
  },
];

const operatingBlocks = [
  {
    title: "先重定 category thesis",
    detail: "把道易從做網站的人，重新定義成替企業重建 commercial website platform 的團隊。",
  },
  {
    title: "再重排頁面角色",
    detail: "依 buyer journey 重做 sitemap 與每頁任務，不延用舊站內容分配。",
  },
  {
    title: "最後把轉換與證據系統產品化",
    detail: "讓 proof、FAQ、contact flow、starter sprint 一起支撐商務前進。",
  },
];

const proofAssets = [
  {
    title: "Outcome first",
    detail: "借鏡 Stripe、Ramp、Clay 類型站點，把結果、適合對象與下一步放在前段。",
  },
  {
    title: "Dense but scannable",
    detail: "借鏡 Linear、Vercel、Notion 的 controlled scanning，讓資訊密但不亂。",
  },
  {
    title: "Proof above persuasion",
    detail: "借鏡成熟 SaaS / agency case study，把證據先於說服，把摘要先於故事。",
  },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, serviceType: ["commercial website rebuild", "offer architecture", "proof and conversion system"] },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Commercial Website Platform Rebuild</span>
            <div className="hero-intro-badge">把企業官網重建成能服務品牌敘事、商務成交、shortlist 與 buying committee 的商務前台</div>
            <h1>{siteConfig.heroTitle}</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/solutions" className="button-secondary button-large">先看起手方案</Link>
            </div>

            <div className="hero-outcome-board">
              {heroProof.map((item) => (
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
              <strong>成熟 B2B 官網的任務，不是介紹公司而已，而是加速理解、信任、內部共識與下一步。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>品牌主張先指向商業結果，不先掉進泛稱服務介紹。</li>
                <li>網站地圖依 buyer journey 重排，不延續舊站資訊分配。</li>
                <li>案例先當 decision proof asset，再當作品展示。</li>
                <li>Contact flow 產品化，讓第一次接觸更低摩擦。</li>
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {homepageDecisionLayers.map((item) => (
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

      <Section eyebrow="Why rebuild" title="這些狀況，通常不是舊站持續優化就能解。">
        <div className="card-grid three-up">
          {rebuildSignals.map((item) => (
            <article key={item.title} className="card decision-card homepage-shortlist-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.outcome}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Benchmark patterns" title="這輪重製吸收的是成熟 B2B / SaaS / 設計公司官網的上層規律。" description="不是抄畫面，而是抽出高表現商用站共同在做的事：更快 clarity、更早 proof、更低 friction。">
        <div className="card-grid four-up homepage-benchmark-grid">
          {homepageBenchmarks.map((item) => (
            <article key={item.title} className="card homepage-benchmark-card">
              <span className="mini-label accent">{item.source}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.application}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage architecture" title="新版首頁不是一張形象頁，而是一個 decision-ready commercial brief。">
        <div className="card-grid three-up">
          {homepageModules.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Sitemap rebuild" title="新版 sitemap 先對齊 buying journey，再對齊內容分類。">
        <div className="homepage-before-after-table">
          <div className="homepage-before-after-header">
            <span>頁面</span>
            <span>任務</span>
            <span>重建方向</span>
          </div>
          {architectureMap.map((item) => (
            <div key={item.page} className="homepage-before-after-row">
              <strong>{item.page}</strong>
              <p>{item.mission}</p>
              <p>{item.module}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Operating model" title="道易不是沿著原站小修，而是直接重做這三層。">
        <div className="card-grid three-up">
          {operatingBlocks.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Offer tracks" title="先從最卡的一層切進去，不必一開始就做整站大案。">
        <div className="card-grid three-up">
          {solutionTracks.map((item) => (
            <article key={item.title} className="card rebuild-module-card delivery-track-card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.outputs.map((output) => <li key={output}>{output}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Proof system" title="成熟官網不是更會說，而是更早拿出可被引用的證據。">
        <div className="card-grid three-up">
          {proofAssets.map((item) => (
            <article key={item.title} className="card proof-narrative-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buying committee" title="同一個網站，要同時回答不同角色的決策問題。">
        <div className="card-grid two-up">
          {homepageRolePaths.map((item) => (
            <article key={item.role} className="card decision-card">
              <span className="mini-label accent">{item.role}</span>
              <h3>{item.ask}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Page map" title="這輪內頁模組也同步改成更明確的商務分工。">
        <div className="homepage-before-after-table">
          <div className="homepage-before-after-header">
            <span>頁面</span>
            <span>現在任務</span>
            <span>模組焦點</span>
          </div>
          {homepageSitemap.map(([page, detail]) => (
            <div key={page} className="homepage-before-after-row">
              <strong>{page}</strong>
              <p>{detail}</p>
              <p>{page === "首頁" ? "Clarity + shortlist + CTA" : page === "重建方法" ? "Rebuild thesis + process" : page === "商務方案" ? "Buying guide + tracks" : page === "案例證據" ? "Executive proof + summaries" : "Response promise + low-friction start"}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Third-party quick review" title="第三方快速總評：新版方向已更像成熟商用站，而不是策略備忘錄。">
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

      <Section id="quick-brief" eyebrow="Start the rebuild" title="如果網站已經跟不上現在的商業階段，可以直接從這裡開始。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
