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
  title: "道易科技 2026｜Commercial Website Rebuild",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Commercial Website Rebuild",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const heroProof = [
  {
    label: "Best fit",
    value: "B2B / 科技 / SaaS / 製造 / AI 團隊",
    detail: "商業成熟度已升級，但網站仍停在舊版公司介紹邏輯。",
  },
  {
    label: "Core rebuild",
    value: "Positioning × Offer × Proof × Conversion",
    detail: "不是美化首頁，而是重建買方理解、內部共識與啟動流程。",
  },
  {
    label: "Start paths",
    value: "Quick Brief / Workshop / NDA",
    detail: "依專案成熟度安排不同 friction 的第一步。",
  },
];

const maturityGaps = [
  {
    title: "網站還在介紹自己，沒有幫買方做決策",
    detail: "成熟 B2B 官網要先讓訪客知道你幫誰、解什麼問題、值不值得 shortlist。",
    outcome: "把首頁改成可快速理解與內部轉述的 commercial landing system。",
  },
  {
    title: "能力很多，但外部還是很難一句話理解你賣什麼",
    detail: "這通常不是文案細修問題，而是 category framing 與 offer packaging 沒重做。",
    outcome: "把方案頁從能力清單改成 buying guide。",
  },
  {
    title: "案例有料，卻無法支撐主管、業務與採購對齊",
    detail: "作品展示不等於 proof system，案例必須先可引用、可轉傳、可比較。",
    outcome: "把案例重做成 executive proof layer。",
  },
];

const operatingBlocks = [
  {
    title: "先重定品牌命題",
    detail: "把道易從做網站的人，重定義成替企業重建商務前台與 decision interface 的團隊。",
  },
  {
    title: "再重排頁面角色",
    detail: "首頁負責 shortlist，方案頁負責購買理解，案例頁負責 proof，Contact 頁負責啟動。",
  },
  {
    title: "最後把轉換流程產品化",
    detail: "不只給聯絡我們，而是讓 Brief、Workshop、NDA 對應不同採購情境。",
  },
];

const proofAssets = [
  {
    title: "首頁前兩屏先給 clarity 與 proof cue",
    detail: "借鏡 Stripe、Ramp、Clay 這類高表現 B2B 首頁，把結果、fit、下一步放前面。",
  },
  {
    title: "高資訊密度，但掃讀成本要低",
    detail: "借鏡 Linear、Vercel、Notion 的 controlled scanning，讓高意圖訪客很快找到自己的答案。",
  },
  {
    title: "案例先當 decision proof asset",
    detail: "借鏡成熟 SaaS / Agency case study，先給摘要、結果訊號、適用對象，再展開方法。",
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
            <span className="hero-eyebrow">DaoYi Technology / Commercial Website Rebuild</span>
            <div className="hero-intro-badge">把企業官網重建成能服務品牌敘事、商務成交、shortlist 與 buying committee 的商務前台</div>
            <h1>{siteConfig.heroTitle}</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/work" className="button-secondary button-large">先看證據系統</Link>
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
              <strong>成熟 B2B 官網的任務，不只是介紹公司，而是幫買方更快建立理解、信任、內部共識與下一步。</strong>
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
          {maturityGaps.map((item) => (
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

      <Section eyebrow="New sitemap" title="新版 sitemap 先對齊 buying journey，再對齊內容分類。">
        <div className="homepage-before-after-table">
          <div className="homepage-before-after-header">
            <span>頁面</span>
            <span>任務</span>
            <span>重建方向</span>
          </div>
          {homepageSitemap.map(([page, detail], index) => (
            <div key={page} className="homepage-before-after-row">
              <strong>{page}</strong>
              <p>{detail}</p>
              <p>{index === 0 ? "5 秒完成理解與 shortlist 判斷" : index === 1 ? "教育市場何時該直接重建" : index === 2 ? "把能力包成可購買方案" : index === 3 ? "把案例改成可引用證據" : "把第一次接觸設計成低摩擦啟動"}</p>
            </div>
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
