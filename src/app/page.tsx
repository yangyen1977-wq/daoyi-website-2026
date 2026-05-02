import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import {
  homepageBenchmarks,
  homepageDecisionLayers,
  homepageRolePaths,
  siteConfig,
  solutionTracks,
  thirdPartyScorecard,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜Commercial Website Rebuild Partner",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Commercial Website Rebuild Partner",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const heroProof = [
  {
    label: "Best fit",
    value: "B2B / 科技 / SaaS / 製造 / AI 團隊",
    detail: "商業成熟度已升級，但官網還停在舊版公司介紹與服務列表邏輯。",
  },
  {
    label: "Core rebuild",
    value: "Positioning × IA × Proof × Conversion",
    detail: "不是美化首頁，而是把整站重做成能幫 buying committee 做判斷的商務介面。",
  },
  {
    label: "Primary output",
    value: "Commercial website platform",
    detail: "讓首頁、方案、案例、Contact 各自承接一個清楚 buying job。",
  },
];

const executiveTriggers = [
  {
    title: "流量有了，但高品質對話沒有同步增加",
    detail: "問題通常不是投放，而是網站沒先完成價值理解、可信度建立與 next step 設計。",
    outcome: "先重做首頁敘事、proof cue 與 CTA ladder。",
  },
  {
    title: "能力很多，但外部仍難一句話理解你賣什麼",
    detail: "這多半是 category framing 與 offer packaging 沒重做，不是字句再修幾輪就會好。",
    outcome: "把方案頁改成 buying guide，而不是能力字典。",
  },
  {
    title: "案例不少，卻撐不起 shortlist 與內部對齊",
    detail: "作品展示不等於 decision proof，案例要能被主管、業務與採購轉傳與複述。",
    outcome: "把案例頁改成 executive summary first 的 proof system。",
  },
];

const maturityStack = [
  {
    title: "Category clarity",
    detail: "5 秒內說清楚你幫誰、改變什麼、為什麼值得現在談。",
  },
  {
    title: "Offer architecture",
    detail: "把複雜能力整理成更容易提案、採購、驗收的起手方案。",
  },
  {
    title: "Proof portability",
    detail: "案例與證據先服務 shortlist、轉傳與內部共識，不先服務展示。",
  },
  {
    title: "Conversion design",
    detail: "依專案成熟度安排 Brief、Workshop、NDA 等不同 friction 的啟動入口。",
  },
];

const homepageAgenda = [
  {
    page: "首頁",
    mission: "先完成理解、shortlist 與 next step 判斷",
    module: "Outcome-led hero、fit signal、proof cue、CTA ladder",
  },
  {
    page: "重建方法",
    mission: "教育為什麼這次該重建，而不是繼續修舊站",
    module: "Rebuild triggers、decision map、operating model",
  },
  {
    page: "商務方案",
    mission: "把能力重組成可購買、可驗收的 offer path",
    module: "Solution tracks、delivery model、objection handling",
  },
  {
    page: "案例證據",
    mission: "把案例變成 buying committee 可引用的 proof asset",
    module: "Executive summaries、result signal、fit cue",
  },
  {
    page: "啟動專案",
    mission: "降低第一次接觸 friction，並明講回覆模型",
    module: "Quick Brief、Workshop、NDA、response promise",
  },
];

const rebuildDeliverables = [
  {
    label: "01",
    title: "Brand thesis reset",
    detail: "重定 category、buyer fit、競爭脈絡與更成熟的品牌主張。",
  },
  {
    label: "02",
    title: "Sitemap and page system",
    detail: "把首頁、方法、方案、案例、Contact 重新定義成一套 decision architecture。",
  },
  {
    label: "03",
    title: "Proof and trust layer",
    detail: "把案例、FAQ、流程與 trust content 做成更可引用、更可轉傳的外部證據。",
  },
  {
    label: "04",
    title: "Launch-ready conversion",
    detail: "把 CTA、表單、回覆承諾與啟動流程產品化，讓高意圖訪客更容易開始。",
  },
];

const buildVsOptimize = [
  {
    side: "持續優化舊站",
    title: "沿用舊資訊架構，只在原文案與畫面上修修補補",
    bullets: ["hero 改寫", "服務文案微調", "案例多放幾張圖", "CTA 換字"],
  },
  {
    side: "重新設計與重建",
    title: "直接改寫買方理解路徑、頁面角色、證據系統與商務啟動方式",
    bullets: ["重定品牌命題", "重排 sitemap", "重做 offer packaging", "重建 proof 與 conversion path"],
  },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
      serviceType: ["commercial website rebuild", "offer architecture", "proof system design"],
    },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Commercial Website Rebuild Partner</span>
            <div className="hero-intro-badge">把企業官網重建成能服務品牌敘事、shortlist、內部共識與商務成交的 external revenue interface</div>
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
              <strong>成熟 B2B 官網的任務，不只是介紹公司，而是加速理解、信任、內部對齊與下一步。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>主張先講商務結果，不先掉進自我介紹。</li>
                <li>網站地圖依 buyer journey 重排，不延續舊站資訊分配。</li>
                <li>案例先當 decision proof，再當作品展示。</li>
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

      <Section eyebrow="Board-level triggers" title="這些狀況，通常不是舊站持續優化就能解。">
        <div className="card-grid three-up">
          {executiveTriggers.map((item) => (
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

      <Section eyebrow="Commercial maturity stack" title="新版首頁不是形象頁，而是 decision-ready commercial brief。">
        <div className="card-grid four-up">
          {maturityStack.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Rebuild mindset" title="這次不是延續舊站優化，而是改用重新設計與重建的工作方式。">
        <div className="card-grid two-up">
          {buildVsOptimize.map((item) => (
            <article key={item.side} className="feature-surface">
              <span className="mini-label accent">{item.side}</span>
              <h3>{item.title}</h3>
              <ul className="bullet-list compact">
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
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
          {homepageAgenda.map((item) => (
            <div key={item.page} className="homepage-before-after-row">
              <strong>{item.page}</strong>
              <p>{item.mission}</p>
              <p>{item.module}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="What gets rebuilt" title="道易不是沿著原站小修，而是直接重做這四層。">
        <div className="card-grid four-up">
          {rebuildDeliverables.map((item) => (
            <article key={item.label} className="card process-card">
              <span className="step-index">{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Offer tracks" title="先從最卡的一層切進去，不必一開始就做整站大案。">
        <div className="card-grid three-up">
          {solutionTracks.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.outputs.map((output) => <li key={output}>{output}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buying committee" title="同一個網站，要同時回答不同角色的決策問題。">
        <div className="card-grid three-up">
          {homepageRolePaths.map((item) => (
            <article key={item.role} className="card trust-card">
              <span className="mini-label accent">{item.role}</span>
              <h3>{item.ask}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Third-party quick review" title="從第三方角度看，這版方向更像成熟商用站，而不是策略備忘錄。">
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
