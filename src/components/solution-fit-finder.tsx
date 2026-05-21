"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const scenarios = [
  {
    id: "audit",
    label: "需要稽核",
    prompt: "我有資料，但不知道能不能支撐 ESG、DPP 或第三方查核。",
  },
  {
    id: "passport",
    label: "產品護照",
    prompt: "我想把產品、材料、碳資訊、維修或回收資料做成可查詢頁。",
  },
  {
    id: "knowledge",
    label: "知識平台",
    prompt: "我有大量文本、人物、作品、事件或研究資料，需要語意整理。",
  },
  {
    id: "field",
    label: "現場資料",
    prompt: "我需要串接設備、影像、感測器、回收或製程現場資料。",
  },
] as const;

const recommendations = {
  audit: {
    title: "數據信任鏈與高效稽核平台",
    route: "先做資料來源、稽核節點、Hash 範圍與第三方驗證流程盤點。",
    proof: "適合把流程紀錄升級成可抽驗、可佐證、可長期維護的證據鏈。",
  },
  passport: {
    title: "DPP 數位產品護照",
    route: "先挑一個產品或一條供應鏈流程，定義 QR 查詢、產品履歷與對外揭露欄位。",
    proof: "適合用最小 PoC 驗證產品身分、材料來源、維修與回收資料如何被查詢。",
  },
  knowledge: {
    title: "AI-Ontology 知識平台",
    route: "先做 Ontology 工作坊，確認資料類型、關係、角色權限與查詢場景。",
    proof: "適合政府、學研、文化與知識密集團隊，把資料庫變成可探索知識網絡。",
  },
  field: {
    title: "AIoT 與回收履歷整合",
    route: "先確認現場資料來源、影像辨識節點、設備串接方式與驗收欄位。",
    proof: "適合把人工紀錄、影像、設備或批次資料接回可信資料平台。",
  },
} satisfies Record<(typeof scenarios)[number]["id"], { title: string; route: string; proof: string }>;

export function SolutionFitFinder() {
  const [selectedId, setSelectedId] = useState<(typeof scenarios)[number]["id"]>("audit");
  const selected = useMemo(() => recommendations[selectedId], [selectedId]);

  return (
    <div className="fit-finder-panel">
      <div className="fit-finder-options" role="tablist" aria-label="選擇目前最接近的資料情境">
        {scenarios.map((scenario) => {
          const active = scenario.id === selectedId;

          return (
            <button
              key={scenario.id}
              type="button"
              className={`fit-finder-option ${active ? "is-active" : ""}`}
              onClick={() => setSelectedId(scenario.id)}
              role="tab"
              aria-selected={active}
              aria-controls="fit-finder-result"
            >
              <strong>{scenario.label}</strong>
              <span>{scenario.prompt}</span>
            </button>
          );
        })}
      </div>

      <article id="fit-finder-result" className="fit-finder-result" role="tabpanel" aria-live="polite">
        <span className="mini-label accent">Recommended path</span>
        <h3>{selected.title}</h3>
        <p>{selected.route}</p>
        <div className="fit-finder-proof">{selected.proof}</div>
        <div className="section-actions fit-finder-actions">
          <Link href="/contact#quick-brief" className="button-primary button-large">用這個方向填 Quick Brief</Link>
          <Link href="/solutions" className="button-secondary button-large">看完整解決方案</Link>
        </div>
      </article>
    </div>
  );
}
