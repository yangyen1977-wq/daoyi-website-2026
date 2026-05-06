import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { siteConfig, solutionTracks, thirdPartyScorecard } from "@/lib/site";

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

const benchmarkPatterns = [
  {
    source: "Stripe / Ramp / Workday 類型",
    title: "Outcome-first category entry",
    detail: "首屏先講商務結果、適合對象與切入時機，不先從公司背景開始。",
  },
  {
    source: "Linear / Vercel / Notion 類型",
    title: "Dense but scannable structure",
    detail: "資訊密度可以高，但模組任務、標題節奏與掃讀路徑必須很穩。",
  },
  {
    source: "Webstacks / Ramotion / instrument 類型",
    title: "Offer as commercial packaging",
    detail: "不是列服務，而是把合作方式、交付、週期與邊界包成可購買路徑。",
  },
  {
    source: "Top SaaS case-study flows",
    title: "Proof before persuasion",
    detail: "案例先給 executive summary、結果訊號與適用情境，再展開方法。",
  },
];

const siteAuditTriggers = [
  {
    title: "流量與介紹都有，但對話品質沒有跟著升級",
    detail: "通常不是投放問題，而是首頁沒先完成價值理解、可信度建立與 next step 設計。",
  },
  {
    title: "公司能力很多，但外部還是說不清你到底賣什麼",
    detail: "這代表 category framing 和 offer packaging 還沒有被重建。",
  },
  {
    title: "案例不少，卻撐不起 shortlist 與內部共識",
    detail: "作品展示不等於 decision proof，案例需要先能被主管與採購複述。",
  },
];

const homepageSystem = [
  {
    title: "Category clarity",
    detail: "5 秒內講清楚你幫誰、補哪個商務落差、為什麼不是別的 agency。",
  },
  {
    title: "Trust surface",
    detail: "把 buyer fit、proof cue、回覆節奏與合作模式前置，不讓信任建立太晚。",
  },
  {
    title: "Offer packaging",
    detail: "把專案切成可理解、可採購、可驗收的起手方案，而不是抽象能力清單。",
  },
  {
    title: "Proof system",
    detail: "案例先成為可轉傳的 executive asset，再展開細節。",
  },
  {
    title: "Decision-room sitemap",
    detail: "讓首頁、方法、方案、案例、Contact 各自承接一個 buying job。",
  },
  {
    title: "Conversion ladder",
    detail: "用 Quick Brief、Workshop、NDA 三條路徑承接不同成熟度訪客。",
  },
];

const rebuildOutputs = [
  "重寫 brand thesis、buyer fit 與首頁主張，不延續舊站語氣。",
  "重排 sitemap 與頁面角色，讓每一頁都有清楚的商務任務。",
  "把服務改寫成 starter sprint 與 buying path，而不是能力詞庫。",
  "把案例格式改成 context → shift → proof → fit 的 proof library。",
  "把 Contact 頁做成啟動系統，不只是聯絡表單。",
];

const audienceRoutes = [
  ["Founder / GM", "先看首頁與重建方法，快速判斷 category、差異化與值不值得現在談。"],
  ["Marketing / Growth", "看首頁模組與案例證據，判斷 message、proof、CTA 是否更有機會帶來高品質對話。"],
  ["Sales / PM", "直接看商務方案，確認交付、週期、邊界與提案轉述性。"],
  ["Procurement / Compliance", "走 Contact 的 NDA / Email 路徑，先低風險確認 fit 與合作邊界。"],
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, serviceType: ["commercial website rebuild", "offer architecture", "proof system design"] },
  ],
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Commercial Website Rebuild Partner</span>
            <div className="hero-intro-badge">把企業官網重建成能服務 shortlist、內部共識、採購推進與商務成交的 commercial website system</div>
            <h1>不是優化舊站，而是直接把網站重建成更成熟、更 buyer-ready 的商務前台。</h1>
            <p>道易科技替 B2B、科技、SaaS、製造與 AI 團隊，重做品牌主張、網站地圖、方案包裝、案例證據與 contact flow。交付的不是比較新的首頁，而是一套更能支撐 buying committee 判斷的 commercial frontstage。</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/solutions" className="button-secondary button-large">先看重建路徑</Link>
            </div>

            <div className="hero-outcome-board">
              <article className="hero-outcome-card">
                <span className="mini-label accent">For</span>
                <strong>B2B / 科技 / SaaS / 製造 / AI 團隊</strong>
                <p>適合商業成熟度已升級，但官網還停在舊版公司介紹邏輯的團隊。</p>
              </article>
              <article className="hero-outcome-card">
                <span className="mini-label accent">Rebuild</span>
                <strong>Positioning × Offer × Proof × Conversion</strong>
                <p>不是改視覺感覺，而是重做整個 commercial website system。</p>
              </article>
              <article className="hero-outcome-card">
                <span className="mini-label accent">Output</span>
                <strong>Buyer-ready commercial frontstage</strong>
                <p>讓品牌敘事、案例證據、方案包裝與 contact model 一起成立。</p>
              </article>
            </div>
          </div>

          <div className="hero-rebuild-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">2026 rebuild thesis</span>
              <strong>成熟 B2B 官網的工作，不只是介紹公司，而是加速理解、建立信任、支撐內部對齊，並把下一步設計得更容易開始。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>主張先講商務結果，不先掉進自我介紹。</li>
                <li>首頁先服務 shortlist，不先服務內容完整性。</li>
                <li>案例先當 proof asset，再當展示素材。</li>
                <li>Contact flow 直接產品化，不停在一般聯絡頁。</li>
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {solutionTracks.map((item, index) => (
                <article key={item.title} className="hero-panel-card stat-card">
                  <span className="mini-label">Layer 0{index + 1}</span>
                  <strong>{item.title}</strong>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Benchmark synthesis" title="這輪重製吸收的是成熟 B2B / SaaS / 設計公司官網真正有效的規律。" description="重點不是抄畫面，而是把高表現官網共同在做的 category、UX、proof 與 conversion pattern，轉成道易自己的商務語言。">
        <div className="card-grid four-up">
          {benchmarkPatterns.map((item) => (
            <article key={item.title} className="card homepage-benchmark-card">
              <span className="mini-label accent">{item.source}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Rebuild triggers" title="這些狀況，通常不是持續優化舊站就能解。">
        <div className="card-grid three-up">
          {siteAuditTriggers.map((item) => (
            <article key={item.title} className="card decision-card homepage-shortlist-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage system" title="新版首頁更像可以拿去商用的 decision interface。">
        <div className="card-grid three-up">
          {homepageSystem.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Sitemap by buying job" title="整站直接重做頁面架構，不再讓每一頁都講一點同樣的事。">
        <div className="card-grid three-up">
          <article className="card rebuild-module-card"><h3>首頁</h3><p>完成 category clarity、buyer fit、proof cue 與 CTA 判斷。</p></article>
          <article className="card rebuild-module-card"><h3>重建方法</h3><p>交代什麼情況該直接重建，而不是再做局部優化。</p></article>
          <article className="card rebuild-module-card"><h3>商務方案</h3><p>把能力重組成可購買、可啟動、可驗收的 sprint 與合作模型。</p></article>
          <article className="card rebuild-module-card"><h3>案例證據</h3><p>把案例改寫成可被轉傳、可被主管引用、可支撐 shortlist 的 proof library。</p></article>
          <article className="card rebuild-module-card"><h3>啟動專案</h3><p>提供 Quick Brief、Workshop、NDA 等不同 friction 的起手方式。</p></article>
        </div>
      </Section>

      <Section eyebrow="What gets rebuilt" title="這次不是修文案，而是重做整套網站商務結構。">
        <div className="feature-surface">
          <ul className="bullet-list compact">
            {rebuildOutputs.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Audience routes" title="成熟 B2B 官網要讓不同角色都能找到自己的判斷入口。">
        <div className="card-grid four-up">
          {audienceRoutes.map(([title, detail]) => (
            <article key={title} className="card trust-card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Starter sprints" title="如果不想一開始就做整站，可以先從最卡的一層切進去。">
        <div className="card-grid two-up">
          {solutionTracks.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.outputs.map((output) => <li key={output}>{output}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Third-party quick review" title="從第三方角度看，這版已更接近成熟商用站，而不是策略感很重的概念頁。">
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

      <Section id="quick-brief" eyebrow="Quick Brief" title="如果網站已跟不上現在的商業階段，可以直接從這裡開始。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
