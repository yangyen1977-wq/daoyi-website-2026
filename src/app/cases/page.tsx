import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import {
  cases,
  caseDecisionChecklist,
  caseProofFormat,
  caseDeliveryFrames,
  caseProofSnapshots,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "案例實績",
  description: "查看道易科技在研究平台、AI 視覺辨識與產品資料透明化方面的案例方向。",
  keywords: ["B2B 案例頁設計", "案例研究頁", "AI 導入案例", "知識平台案例", "DPP 案例"],
  alternates: { canonical: "/cases" },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@graph": caseProofSnapshots.map((item) => ({
    "@type": "CreativeWork",
    name: item.title,
    about: item.facts.join("；"),
    abstract: item.summary,
    url: `${siteConfig.url}/cases#${item.slug}`,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  })),
};

const deliveryNotes = [
  "跨領域資料整合與檢索架構整理",
  "結合 AI 模型與實際作業節點的流程設計",
  "兼顧對外展示、對內管理與後續資料擴充",
];

const caseProofNotes = [
  "若案例為已上線成果，會優先描述改善範圍、時間區段與使用情境。",
  "若數值屬於 benchmark 或提案目標，會直接標示，避免與實績混淆。",
  "若因 NDA 無法公開品牌名稱，會改用產業角色、問題結構與交付內容呈現。",
];

export default function CasesPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Selected Cases</span>
          <h1>道易的案例特色，不是炫技，而是把複雜任務整理成可以真的用的成果。</h1>
          <p>從學術研究到產業應用，我們看重的是資料脈絡與系統價值能不能被放大。</p>
        </div>
      </section>

      <Section
        eyebrow="案例方向"
        title="三種代表性實作，對應道易目前最有辨識度的能力版圖。"
        description="這輪吸收 Proofmap、Amply 與近期 B2B case-study best practice：案例頁要先給 snapshot box、proof pack 與 time-to-value，而不是只列一段簡介。"
      >
        <div className="card-grid three-up case-proof-snapshot-grid">
          {caseProofSnapshots.map((item) => (
            <article key={item.title} id={item.slug} className="card case-proof-snapshot-card">
              <div className="case-proof-snapshot-head">
                <span className="mini-label accent">{item.label}</span>
                <span className="case-evidence-badge">{item.evidenceLabel}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="case-proof-snapshot-box">
                <strong>Snapshot box</strong>
                <ul className="bullet-list compact">
                  {item.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </div>
              <div className="case-proof-pack">
                <strong>Proof pack</strong>
                <ul className="bullet-list compact">
                  {item.proofPack.map((proof) => (
                    <li key={proof}>{proof}</li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="button-secondary inline-button">
                {item.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="stack-list case-direction-stack">
          {cases.map((item) => (
            <article key={item.title} className="stack-item feature-surface">
              <div>
                <span className="mini-label accent">{item.category}</span>
                <h3>{item.title}</h3>
              </div>
              <div>
                <p>{item.description}</p>
                <strong>{item.impact}</strong>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proof system"
        title="先告訴你我們怎麼呈現證據，減少『這些數字是真的嗎？』的疑慮。"
        description="參考高轉換 B2B / SaaS 案例頁做法，把 evidence label 寫清楚，比堆更多華麗 KPI 更有信任感。"
      >
        <div className="card-grid three-up">
          {caseProofFormat.map((item) => (
            <article key={item.title} className="card trust-card">
              <span className="mini-label accent">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="feature-surface" style={{ marginTop: 24 }}>
          <ul className="bullet-list compact">
            {caseProofNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Decision support"
        title="決策者通常不是只想看成果，而是想知道這類專案到底怎麼做、風險在哪。"
        description="把案例頁補成決策支援頁，是近年不少 B2B agency / SaaS 官網的共同方向。"
      >
        <div className="card-grid three-up">
          {caseDecisionChecklist.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="交付樣板"
        title="不同類型專案，實際會拿到的東西也不一樣。"
        description="這裡把 deliverables 直接寫出來，讓品牌、營運與永續團隊更快對焦。"
      >
        <div className="card-grid three-up">
          {caseDeliveryFrames.map((item) => (
            <article key={item.title} className="card">
              <span className="mini-label accent">Delivery frame</span>
              <h3>{item.title}</h3>
              <p>{item.context}</p>
              <ul className="bullet-list compact">
                {item.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="共同特徵" title="這些專案背後，都需要同時處理內容、資料、介面與維運邏輯。">
        <div className="feature-surface">
          <ul className="bullet-list compact">
            {deliveryNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Next step"
        title="如果你想知道自己的專案比較像哪一類，最快的方法是先做一輪診斷。"
        description="不是先進大提案，而是先確認：你的案例、CTA、資料結構或 DPP 敘事，哪一段最值得先修。"
      >
        <div className="feature-surface two-column">
          <div>
            <h3>你會先拿到什麼</h3>
            <ul className="bullet-list compact">
              <li>目前網站 / 系統最影響轉換或理解的 3–5 個阻力點</li>
              <li>案例頁與首頁應先補哪種證據格式</li>
              <li>適合從品牌、平台或 DPP 哪一條 sprint 開始</li>
            </ul>
          </div>
          <div>
            <h3>適合現在就開始的情況</h3>
            <p>已經準備改版、要對外提案、要面對採購 / 法遵審查，或明明內容很多卻還是難以說服決策者時，通常就值得先談。</p>
            <Link href="/contact" className="button-primary button-large case-link">
              預約 30 分鐘案例診斷
            </Link>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
    </main>
  );
}
