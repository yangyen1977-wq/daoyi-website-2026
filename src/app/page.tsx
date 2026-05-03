import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import { siteConfig, solutionTracks, thirdPartyScorecard } from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜Revenue Website Rebuild Studio",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜Revenue Website Rebuild Studio",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const heroProof = [
  { label: "For", value: "B2B / 科技 / SaaS / 製造 / AI 團隊", detail: "適合商業成熟度已升級，但官網仍停在舊版公司介紹邏輯的團隊。" },
  { label: "Rebuild", value: "Positioning × Offer × Proof × Conversion", detail: "不是改首頁視覺，而是重做整個 revenue website system。" },
  { label: "Output", value: "Shortlist-ready commercial frontstage", detail: "讓品牌敘事、案例證據、方案包裝與 contact model 一起成立。" },
];

const benchmarkPatterns = [
  { source: "Stripe / Ramp / Segment 類型", title: "Outcome-led category entry", detail: "首屏先講商務結果、適合對象與切入時機，不先從公司沿革開始。" },
  { source: "Vercel / Linear / Notion 類型", title: "Dense but scannable structure", detail: "資訊密度可以高，但區塊層次、標題節奏、掃讀動線必須非常穩。" },
  { source: "Webstacks / Ramotion / instrument 類型", title: "Offer as commercial packaging", detail: "不是列服務，而是把合作方式、交付、週期、邊界包成可購買路徑。" },
  { source: "Top B2B case-study flows", title: "Proof before persuasion", detail: "案例先給情境、結果訊號、適用對象，再談過程，讓它能被轉傳。" },
  { source: "Clay / Persona / enterprise AI 類型", title: "Signal-rich trust layer", detail: "成熟科技站會把 buyer fit、交付速度、合作模式與風險控制訊號一起前置。" },
  { source: "Top design studio rethink 類型", title: "Homepage as decision room", detail: "首頁不只是品牌展示，而是讓 founder、marketing、sales、procurement 都能找到自己的判斷線索。" },
];

const rebuildFrames = [
  { title: "Brand thesis", detail: "先重定你到底是哪一類 partner，解什麼 business problem，為何現在值得談。" },
  { title: "Sitemap by buyer journey", detail: "首頁、方法、方案、案例、Contact 各自處理一個不同的決策工作。" },
  { title: "Offer architecture", detail: "把複雜能力變成 starter sprint、decision workshop、proof rebuild 等可啟動產品。" },
  { title: "Conversion model", detail: "用 Quick Brief、Workshop、NDA 三層 friction 設計第一次接觸。" },
];

const homepageModules = [
  { title: "01. Category clarity", copy: "5 秒內講清楚你幫誰、解決哪種商務落差、為什麼不是別的 agency。" },
  { title: "02. Trust surface", copy: "把 buyer fit、proof cues、回覆承諾與合作模式前置，不讓信任建立太晚。" },
  { title: "03. Offer packaging", copy: "把專案切成可理解、可採購、可驗收的起手方案，而不是抽象能力清單。" },
  { title: "04. Proof system", copy: "案例先成為 executive summary 和 shortlist asset，再展開細節。" },
  { title: "05. Decision-room sitemap", copy: "讓首頁、方法、方案、案例、Contact 各自承接一個 buying job，不再互相重複。" },
  { title: "06. Contact model", copy: "用低摩擦入口讓高意圖訪客更容易開始，不讓 CTA 停在『歡迎洽詢』。" },
];

const decisionStrip = [
  { title: "流量進來了，但對話品質沒有一起上升", answer: "通常不是投放問題，而是首頁沒先完成價值理解、可信度建立與 next step 設計。" },
  { title: "公司能力很多，但外部仍說不出你到底賣什麼", answer: "這代表 category framing 和 offer packaging 還沒有被重建。" },
  { title: "案例不少，卻撐不起 shortlist 與內部共識", answer: "作品展示不等於 decision proof，案例需要先能被主管與採購複述。" },
];

const engagementModels = [
  { title: "Commercial Positioning Sprint", detail: "先重定 category thesis、首頁敘事與 sitemap，適合網站已跟不上商業成熟度。", output: "Hero、homepage flow、page roles" },
  { title: "Offer Packaging Sprint", detail: "把服務與能力改寫成 buying path，適合能力強但難賣、難轉述的團隊。", output: "Offer map、objection handling、starter packages" },
  { title: "Proof and Conversion Sprint", detail: "把案例、trust blocks、CTA 與 contact model 做成熟，適合已有流量但詢問品質不穩。", output: "Case summaries、trust UX、contact ladder" },
  { title: "Decision Journey Sprint", detail: "重做整站 sitemap、跨頁導流與 buyer path，適合內容很多但導覽與頁面任務互相打架的團隊。", output: "Page hierarchy、CTA choreography、route logic" },
];

const proofAssets = [
  "首頁前兩屏就前置 buyer fit、rebuild trigger、proof cue 與 CTA ladder。",
  "方案頁寫成 buying guide，不再只是能力與服務名稱堆疊。",
  "案例頁先給 executive summary、result signal、fit cue，再展開完整內容。",
  "新增 sitemap by buying job，讓每頁各自扮演一個清楚的決策角色。",
  "Contact 頁把回覆節奏、交付預期、保密路徑講清楚，降低第一次接觸的不確定。",
];

const rebuiltSitemap = [
  ["首頁", "完成 category clarity、buyer fit、proof cue 與 CTA 判斷，像一個給高意圖買方的商務前台首頁。"],
  ["重建方法", "交代什麼情況該直接重建，而不是再做局部優化，並說明重建框架與工作方式。"],
  ["商務方案", "把能力重組成可購買、可啟動、可驗收的 sprint 與合作模型。"],
  ["案例證據", "把案例改寫成可被轉傳、可被主管引用、可支撐 shortlist 的 proof library。"],
  ["啟動專案", "提供 Quick Brief、Workshop、NDA 等不同 friction 的起手方式。"],
];

const audiencePaths = [
  { role: "Founder / GM", question: "這家公司是否真的能把我們的外部商務前台升級到下一階段？", route: "先看首頁主張與重建方法，確認 category 與差異化。" },
  { role: "Marketing / Growth", question: "流量進站後，能否更快理解價值、建立信任並進入高品質對話？", route: "看首頁模組與案例證據，判斷 message、proof、CTA 是否成立。" },
  { role: "Sales / PM", question: "方案、週期、交付與邊界，是否足夠好轉述給內外部？", route: "直接進商務方案頁，確認 offer packaging 與 sprint 模型。" },
  { role: "Procurement / Compliance", question: "敏感專案能否先低風險確認 fit、流程與合作邊界？", route: "走 Contact 頁的 NDA / Email 路徑，降低第一次接觸風險。" },
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
            <span className="hero-eyebrow">DaoYi Technology / Revenue Website Rebuild Studio</span>
            <div className="hero-intro-badge">把企業官網重建成能服務理解、shortlist、內部共識與商務成交的 revenue website system</div>
            <h1>不是優化舊站，而是把整個商務前台重新設計成更容易成交的版本。</h1>
            <p>道易科技替 B2B、科技、SaaS、製造與 AI 團隊重做品牌命題、網站地圖、方案包裝、案例證據與 contact flow。最後交付的不是比較新的網站，而是比較成熟、比較可被轉述、也比較能支撐 buying committee 判斷的 commercial frontstage。</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/solutions" className="button-secondary button-large">先看重建路徑</Link>
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
              <strong>成熟 B2B 官網不只是介紹公司，而是加速理解、建立信任、支撐內部對齊，並把下一步設計得更好開始。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                <li>主張先講商務結果，不先掉進自我介紹。</li>
                <li>首頁先服務 shortlist，不先服務內容完整性。</li>
                <li>案例先當 proof asset，再當展示素材。</li>
                <li>Contact flow 直接產品化，不停在一般聯絡頁。</li>
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {rebuildFrames.map((item, index) => (
                <article key={item.title} className="hero-panel-card stat-card">
                  <span className="mini-label">Layer 0{index + 1}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Benchmark synthesis" title="這輪重製吸收的是成熟 B2B / SaaS / 設計公司官網真正有用的規律。" description="重點不是抄畫面，而是把高表現官網共同在做的 category、UX、proof 與 conversion pattern 轉成道易自己的商務語言。">
        <div className="card-grid three-up homepage-benchmark-grid">
          {benchmarkPatterns.map((item) => (
            <article key={item.title} className="card homepage-benchmark-card">
              <span className="mini-label accent">{item.source}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why rebuild" title="這些狀況，通常不是持續優化舊站就能解。">
        <div className="card-grid three-up">
          {decisionStrip.map((item) => (
            <article key={item.title} className="card decision-card homepage-shortlist-card">
              <h3>{item.title}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage system" title="新版首頁不再像策略備忘錄，而是更像可以拿去商用的 decision interface。">
        <div className="card-grid three-up">
          {homepageModules.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Sitemap by buying job" title="這輪直接重做頁面架構，不再讓每一頁都講一點同樣的事。">
        <div className="card-grid three-up">
          {rebuiltSitemap.map(([title, detail]) => (
            <article key={title} className="card rebuild-module-card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Audience routes" title="成熟 B2B 官網要讓不同角色都能找到自己的判斷線索。">
        <div className="card-grid two-up">
          {audiencePaths.map((item) => (
            <article key={item.role} className="card trust-card">
              <span className="mini-label accent">{item.role}</span>
              <h3>{item.question}</h3>
              <p>{item.route}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What gets rebuilt" title="這次不是修文案，而是重做一整套網站商務結構。">
        <div className="feature-surface">
          <ul className="bullet-list compact">
            {proofAssets.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Commercial offers" title="先從最卡的一層切進去，不一定要一開始就做整站。">
        <div className="card-grid four-up">
          {engagementModels.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.output}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Starter sprints" title="如果要更具體啟動，現在的三條起手方案長這樣。">
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

      <Section eyebrow="Third-party quick review" title="從第三方角度看，這版已更接近成熟商用站，而不是『懂策略但不像真的官網』。">
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

      <Section id="quick-brief" eyebrow="Start the rebuild" title="如果網站已跟不上現在的商業階段，可以直接從這裡開始。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
