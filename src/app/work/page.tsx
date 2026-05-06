import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { CaseOverviewStats } from "@/components/case-overview-stats";
import { CaseSnapshots } from "@/components/case-snapshots";
import { PersonaPlaybook } from "@/components/persona-playbook";
import { siteConfig, thirdPartyScorecard } from "@/lib/site";

export const metadata: Metadata = {
  title: "案例證據",
  description: "把案例、proof 與 trust content 當成能支撐 shortlist、採購與提案決策的證據系統。",
  alternates: { canonical: "/work" },
};

const proofLayers = [
  { title: "Executive summary first", detail: "先讓高層與業務看到情境、改變、結果訊號與適用對象，再決定要不要深入。" },
  { title: "Portable evidence", detail: "案例內容要能被複述與轉傳，不該只是在網站上漂亮展示。" },
  { title: "Decision-oriented detail", detail: "方法、流程、交付與信任訊號要接在摘要後面，支援後續提問。" },
  { title: "Commercial fit cue", detail: "每個案例都要讓讀者很快知道這是誰該看、什麼情境最值得參考。" },
  { title: "CTA after proof", detail: "每個案例看完都應該接得上下一步，不讓信任停在閱讀階段。" },
];

const proofChecklist = [
  "先說明案子原本卡在哪個商務或理解問題。",
  "明講這次網站、訊息或資料體驗到底改變了什麼。",
  "優先給能被引用的結果訊號，而不是冗長過程敘述。",
  "每個案例都要指出適合哪一類團隊參考。",
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

      <Section eyebrow="Snapshot first" title="先給可掃讀摘要，再展開完整案例。">
        <CaseSnapshots />
      </Section>

      <Section eyebrow="Audience guide" title="不同角色看案例的重點不同，路徑也該不同。">
        <PersonaPlaybook />
      </Section>

      <Section eyebrow="Third-party quick review" title="從第三方觀點看，目前案例系統方向正確，已更接近成熟 B2B 商務資產。">
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
