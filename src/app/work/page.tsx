import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { CaseOverviewStats } from "@/components/case-overview-stats";
import { CaseSnapshots } from "@/components/case-snapshots";
import { PersonaPlaybook } from "@/components/persona-playbook";
import { siteConfig, thirdPartyScorecard } from "@/lib/site";

export const metadata: Metadata = {
  title: "證據系統",
  description: "把案例、proof 與 trust content 當成能支撐 shortlist、採購與提案決策的證據系統。",
  alternates: { canonical: "/work" },
};

const proofLayers = [
  {
    title: "Executive summary first",
    detail: "先讓高層與業務看到情境、改變、結果訊號與適用對象，再決定要不要深入。",
  },
  {
    title: "Portable evidence",
    detail: "案例內容要能被複述與轉傳，不該只是在網站上漂亮展示。",
  },
  {
    title: "Decision-oriented detail",
    detail: "方法、流程、交付與信任訊號要接在摘要後面，支援後續提問。",
  },
  {
    title: "Commercial fit cue",
    detail: "每個案例都要讓讀者很快知道這是誰該看、什麼情境最值得參考。",
  },
  {
    title: "CTA after proof",
    detail: "每個案例看完都應該接得上下一步，不讓信任停在閱讀階段。",
  },
];

const proofChecklist = [
  "先說明案子原本卡在哪個商務或理解問題。",
  "明講這次網站、訊息或資料體驗到底改變了什麼。",
  "優先給能被引用的結果訊號，而不是冗長過程敘述。",
  "每個案例都要指出適合哪一類團隊參考。",
];

const proofLibraryRules = [
  {
    title: "Before / after 要被一句話說清楚",
    detail: "不是只說做了什麼，而是要先說網站或敘事從什麼狀態被重建成什麼狀態。",
  },
  {
    title: "結果訊號要先於方法細節",
    detail: "像 conversion uplift、shortlist quality、sales clarity、buyer trust 這類訊號應先被看見。",
  },
  {
    title: "案例摘要要能被主管直接轉傳",
    detail: "讀完第一屏就應該能複述這案子為什麼值得內部討論。",
  },
  {
    title: "每個案例要接回對應方案",
    detail: "不要讓案例獨立存在，而是清楚告訴讀者這屬於哪種重建切口。",
  },
];

const proofMaturityChecks = [
  {
    title: "不是作品牆，而是 shortlist asset",
    detail: "每則案例都要先回答這案子解了什麼商務問題、為什麼值得參考、結果訊號是什麼。",
  },
  {
    title: "先可引用，再求完整",
    detail: "成熟案例會先給主管可複述的版本，再往下展開方法、流程與實作細節。",
  },
  {
    title: "每個案例都要有 fit cue",
    detail: "讓訪客快速知道這是 SaaS、製造、AI 顧問，還是高知識密度網站最值得參考。",
  },
];

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Proof System</span>
          <h1>案例頁重做成 executive proof layer，不再只是作品集清單。</h1>
          <p>新的案例系統先讓訪客看懂情境、交付、結果訊號與適用對象，再往下看完整專案，這樣案例才真的能支撐 shortlist 與 buying committee 對話。</p>
        </div>
      </section>

      <Section eyebrow="Case structure" title="案例採用 context → shift → proof → fit 的重述方式。">
        <CaseOverviewStats />
      </Section>

      <Section eyebrow="Proof design" title="成熟的案例頁，不是更長，而是更可引用、更可判斷。">
        <div className="card-grid five-up">
          {proofLayers.map((item) => (
            <article key={item.title} className="card decision-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Proof checklist" title="案例是否真的具備商務證據力，可以先用這四點檢查。">
        <div className="feature-surface">
          <ul className="bullet-list compact">
            {proofChecklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Proof library rules" title="新版案例頁不是作品牆，而是一個可被拿去討論、轉傳與支撐採購的 proof library。">
        <div className="card-grid two-up">
          {proofLibraryRules.map((item) => (
            <article key={item.title} className="card trust-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Maturity check" title="這輪案例頁更往商務證據系統走，而不是純展示頁。">
        <div className="card-grid three-up">
          {proofMaturityChecks.map((item) => (
            <article key={item.title} className="card rebuild-module-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Snapshot first" title="先給可掃讀摘要，再展開完整案例。">
        <CaseSnapshots />
      </Section>

      <Section eyebrow="Third-party quick review" title="從第三方觀點看，目前案例系統方向正確，已更接近成熟 B2B 商務資產。">
        <div className="card-grid four-up">
          {thirdPartyScorecard.slice(0, 3).map(([title, score, detail]) => (
            <article key={title} className="card trust-card">
              <span className="mini-label accent">{score}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Audience guide" title="不同角色看案例的重點不同，路徑也該不同。">
        <PersonaPlaybook />
      </Section>

      <Section eyebrow="CTA" title="如果你想把現有案例改成更能成交的版本，可以直接開始。">
        <div className="feature-surface two-column">
          <div>
            <h3>你會先拿到</h3>
            <ul className="bullet-list compact">
              <li>首頁該前置哪些 proof</li>
              <li>每個案例摘要怎麼重寫</li>
              <li>案例與 CTA 如何排成 shortlist flow</li>
            </ul>
          </div>
          <div>
            <h3>立即啟動</h3>
            <p><Link href="/contact" className="button-primary inline-button">預約案例系統重構</Link></p>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", name: "DaoYi case system", url: `${siteConfig.url}/work` }) }} />
    </main>
  );
}
