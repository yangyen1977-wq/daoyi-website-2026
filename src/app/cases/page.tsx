import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "案例證據",
  description: "道易科技案例頁的 2026 方向，不把案例當作品集，而是當成能支撐 shortlist、採購與提案溝通的證據系統。",
  alternates: { canonical: "/cases" },
};

const proofStories = [
  {
    label: "Knowledge platform",
    title: "研究與典藏型平台",
    summary: "重點不是頁面多，而是如何把複雜內容整理成可查詢、可理解、可維運的知識系統。",
    bullets: ["資訊架構", "內容治理", "搜尋與瀏覽體驗", "跨資料來源整合"],
  },
  {
    label: "AI workflow",
    title: "AI 視覺與流程型專案",
    summary: "買方真正想知道的，是 AI 怎麼嵌入實際流程、誰會用、怎麼驗收，而不只是模型多準。",
    bullets: ["角色流程", "欄位與 SOP", "前台與後台銜接", "商業化敘事"],
  },
  {
    label: "DPP / Traceability",
    title: "資料透明與產品履歷體驗",
    summary: "把法規壓力與資料複雜度，整理成更成熟的對外體驗與內部管理框架。",
    bullets: ["欄位藍圖", "掃碼體驗", "審查輸出", "品牌與合規並行"],
  },
];

const proofRules = [
  "案例先給 snapshot，再展開完整脈絡。",
  "案例要寫交付內容與情境，不只寫成果形容詞。",
  "若有 NDA，就用問題結構與交付方式維持可信度。",
  "案例頁要支撐銷售對話，而不是停留在設計展示。",
];

export default function CasesPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Proof System</span>
          <h1>新的案例頁，不應該像作品集，而應該像一套能支撐商務決策的證據系統。</h1>
          <p>成熟 B2B 官網的案例頁，重點是讓訪客快速理解你處理過哪些複雜問題、怎麼做、適不適合自己，而不是只看幾張成果圖。</p>
        </div>
      </section>

      <Section eyebrow="Selected proof formats" title="三種代表性案例型態，對應道易最有說服力的能力版圖。">
        <div className="card-grid three-up">
          {proofStories.map((item) => (
            <article key={item.title} className="card case-proof-snapshot-card">
              <div className="case-proof-snapshot-head">
                <span className="mini-label accent">{item.label}</span>
                <span className="case-evidence-badge">Proof snapshot</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list compact">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Proof rules" title="案例頁要遵守的四個原則。">
        <div className="feature-surface">
          <ul className="bullet-list compact">
            {proofRules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Next step" title="如果你想知道你的案例該怎麼重寫成更有說服力的版本，可以直接開始。">
        <div className="feature-surface two-column">
          <div>
            <h3>你會先拿到</h3>
            <ul className="bullet-list compact">
              <li>案例首頁摘要應該如何寫</li>
              <li>哪些 proof 應該前置到首頁</li>
              <li>案例與 CTA 怎麼排得更像成熟 B2B 官網</li>
            </ul>
          </div>
          <div>
            <h3>立即啟動</h3>
            <p>
              <Link href="/contact" className="button-primary inline-button">預約案例重構討論</Link>
            </p>
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "DaoYi proof system",
            url: `${siteConfig.url}/cases`,
          }),
        }}
      />
    </main>
  );
}
