import type { Metadata } from "next";
import Link from "next/link";
import { QuickBriefForm } from "@/components/quick-brief-form";
import { Section } from "@/components/section";
import {
  heroActionSignals,
  heroClients,
  heroClarityChecklist,
  heroContactLadder,
  heroFitSignals,
  heroPreviews,
  heroProofs,
  homepageCompactCaseEvidence,
  siteConfig,
  stats,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "道易科技 2026｜重新設計與重建官網",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "道易科技 2026｜重新設計與重建官網",
    description: siteConfig.heroDescription,
    url: `${siteConfig.url}/`,
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, description: siteConfig.description },
    { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, serviceType: ["B2B website rebuild", "offer framing", "trust UX"], areaServed: "Asia-Pacific" },
  ],
};

const strategicSitemap = [
  ["首頁", "先回答是不是你的案子、值不值得談、下一步怎麼開始。"],
  ["適合對象", "讓不同行業與決策角色快速判斷 fit 與 buying blockers。"],
  ["重建路徑", "把 Website Rebuild、Offer Framing、Trust System 做成三條清楚起手式。"],
  ["案例系統", "案例不是作品牆，而是可被轉傳與提案的證據材料。"],
  ["啟動方式", "用 Quick Brief、Call、NDA 降低開始門檻與風險。"],
];

const decisionLayers = [
  { label: "Layer 01", title: "Commercial clarity", detail: "首屏先讓買方知道你替誰解什麼問題，值不值得繼續看。" },
  { label: "Layer 02", title: "Decision architecture", detail: "每個頁面只處理一種決策問題，避免訊息彼此稀釋。" },
  { label: "Layer 03", title: "Proof system", detail: "案例與證據模組先支援 shortlist，再補完整專案細節。" },
  { label: "Layer 04", title: "Conversion ladder", detail: "依專案成熟度安排不同 friction level 的 CTA 與接觸方式。" },
];

const scorecards = [
  { title: "對外訊息成熟度", detail: "買方能否在短時間內理解你解哪種問題、為何值得談。" },
  { title: "頁面任務清晰度", detail: "首頁、方案、案例、Contact 是否各司其職，而不是全部都講一點。" },
  { title: "案例可引用程度", detail: "案例能否直接被主管、業務或採購拿去轉傳與內部討論。" },
  { title: "轉換阻力控制", detail: "是否提供不同成熟度與風險承受度的開始方式。" },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section hero-rebuild">
        <div className="shell hero-rebuild-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">DaoYi Technology / Revenue-grade Website Rebuild</span>
            <div className="hero-intro-badge">不是舊站優化，是整體重建</div>
            <h1>{siteConfig.heroTitle}</h1>
            <p>{siteConfig.heroDescription}</p>

            <div className="hero-actions">
              <Link href="/#quick-brief" className="button-primary button-large">開始這次重建</Link>
              <Link href="/work" className="button-secondary button-large">先看案例系統</Link>
            </div>

            <div className="hero-outcome-board">
              {heroProofs.map((item) => (
                <article key={item.label} className="hero-outcome-card">
                  <span className="mini-label accent">{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-rebuild-panel">
            <div className="hero-panel-card spotlight">
              <span className="mini-label accent">Who this is for</span>
              <strong>適合把網站當成商務前台、提案介面與信任基礎設施的高複雜度 B2B 團隊。</strong>
              <ul className="bullet-list compact hero-highlight-list">
                {heroFitSignals.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="rebuild-note-stack">
              {stats.map((item) => (
                <article key={item.label} className="hero-panel-card stat-card">
                  <span className="mini-label">{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.label === "Buyer clarity" ? "首屏先處理這是不是值得談的案子。" : item.label === "Decision journey" ? "首頁、適合對象、重建路徑、案例與啟動頁各自有任務。" : item.label === "Start modes" ? "依成熟度與風險選擇最合適的開始方式。" : "案例先作為證據系統，再作為展示內容。"}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Decision signal" title="成熟 B2B 首頁，先讓買方完成三件事。" description="一，快速判斷 fit。二，理解你真正賣的是什麼。三，知道下一步如何低風險開始。">
        <div className="card-grid three-up">
          {heroClarityChecklist.map((item) => (
            <article key={item.label} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.answer}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buyer fit" title="不是所有團隊都需要同一種說法，入口也不該只有一個。" description="網站要讓對的人快速找到自己的情境，而不是要求所有訪客都先讀完品牌自我介紹。">
        <div className="card-grid four-up">
          {heroClients.map((item) => (
            <article key={item.name} className="card trust-card">
              <h3>{item.name}</h3>
              <p>{item.context}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Decision architecture" title="這輪重建，核心是把整站做成更成熟的決策介面。" description="借鏡 Stripe、Ramp、Vercel、Linear 與高品質設計公司官網的共通規律，把品牌、UI、UX、proof 與 conversion 一起重做。">
        <div className="card-grid two-up rebuild-module-grid">
          {decisionLayers.map((item) => (
            <article key={item.label} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="New sitemap" title="新版網站不是頁面變多，而是頁面角色真正重新分工。" description="每一頁都服務 buying flow，不再只是平均分攤內容。">
        <div className="card-grid three-up">
          {strategicSitemap.map(([title, detail]) => (
            <article key={title} className="card trust-card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Commercial scorecard" title="重建後的網站，至少要通過這四個商用標準。" description="這些標準來自高表現 B2B / SaaS 官網常見的共同結構。">
        <div className="card-grid four-up">
          {scorecards.map((item) => (
            <article key={item.title} className="card process-card">
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Homepage modules" title="首頁依 buying committee 的閱讀順序重排。" description="先有商業清晰度，再有重建路徑與案例證據，最後接低摩擦轉換。">
        <div className="card-grid two-up rebuild-module-grid">
          {homepageCompactCaseEvidence.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.evidence}</p>
            </article>
          ))}
          <article className="card rebuild-module-card">
            <span className="mini-label accent">Conversion ladder</span>
            <h3>讓不同成熟度的買方，都找得到適合自己的開始方式</h3>
            <ul className="bullet-list compact">
              {heroContactLadder.map((item) => (
                <li key={item.label}><strong>{item.title}</strong>，{item.detail}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section eyebrow="How we work" title="合作流程也要像成熟商務流程，而不是單純留下資料等回覆。" description="每一步都回答買方最在意的問題，避免第一次接觸就卡住。">
        <div className="card-grid four-up">
          {heroActionSignals.map((item) => (
            <article key={item.step} className="card process-card">
              <span className="step-index">{item.step}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Research lens" title="本輪借鏡的是成熟 B2B / SaaS / 設計官網的共通規律。" description="不是模仿單一風格，而是吸收真正提升商務表現的高階結構。">
        <div className="card-grid three-up">
          {heroPreviews.map((item) => (
            <article key={item.id} className="card trust-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.metric}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.checklist.map((check) => <li key={check}>{check}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="quick-brief" eyebrow="Quick Brief" title="先用最低摩擦的方式，啟動這次重建。">
        <QuickBriefForm />
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
    </main>
  );
}
