"use client";

import { useMemo, useState } from "react";
import { quickBriefAssistPoints } from "@/lib/content/contact";
import { siteConfig } from "@/lib/site";

const projectFocusOptions = [
  {
    value: "數據信任鏈 / ESG 稽核",
    label: "數據信任鏈 / ESG 稽核",
    detail: "適合需要讓回收、碳、供應鏈或流程資料可被第三方查核的團隊。",
  },
  {
    value: "DPP 數位產品護照",
    label: "DPP 數位產品護照",
    detail: "適合想先做產品履歷、QR 查詢、材料欄位與供應鏈透明化的專案。",
  },
  {
    value: "AI-Ontology 知識平台",
    label: "AI-Ontology 知識平台",
    detail: "整理人物、文本、事件、地點、資料庫與語意搜尋的整體平台規劃。",
  },
  {
    value: "AIoT / 回收履歷整合",
    label: "AIoT / 回收履歷整合",
    detail: "適合要串接現場設備、影像辨識、感測資料與回收流程的情境。",
  },
  {
    value: "資料平台 / 系統整合",
    label: "資料平台 / 系統整合",
    detail: "已有資料庫或系統，需要重新規劃 API、權限、Dashboard 或資料流程。",
  },
  {
    value: "先做資料盤點",
    label: "先做資料盤點",
    detail: "還不確定要從 DPP、ESG、AI 還是知識平台開始，先盤點資料與風險。",
  },
] as const;

type FormState = {
  name: string;
  company: string;
  focus: (typeof projectFocusOptions)[number]["value"];
};

export function QuickBriefForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    focus: projectFocusOptions[0].value,
  });

  const selectedFocus = useMemo(
    () => projectFocusOptions.find((option) => option.value === form.focus) ?? projectFocusOptions[0],
    [form.focus]
  );

  const recommendedStart = useMemo(() => {
    if (form.focus.includes("信任鏈") || form.focus.includes("ESG")) {
      return "建議先盤點資料來源、稽核節點、Hash 範圍與第三方驗證流程。";
    }

    if (form.focus.includes("AI") || form.focus.includes("流程")) {
      return "建議先釐清現場資料來源、影像辨識節點、設備串接與可驗收資料欄位。";
    }

    if (form.focus.includes("知識平台")) {
      return "建議先整理 Ontology 草案、檢索場景、角色權限與內容治理優先順序。";
    }

    if (form.focus.includes("DPP")) {
      return "建議先盤點 traceability 欄位藍圖、法規脈絡、QR 查詢與產品履歷體驗。";
    }

    return "建議先做資料盤點，確認來源、權限、對外揭露範圍與第一個 PoC 流程。";
  }, [form.focus]);

  const isDisabled = useMemo(() => !form.name || !form.company, [form.name, form.company]);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`道易科技可信資料專案討論 - ${form.company}`);
    const body = encodeURIComponent(
      `姓名：${form.name}\n公司 / 單位：${form.company}\n主要關注：${form.focus}\n\n目前資料來源或流程：\n希望解決的問題：DPP / ESG 稽核 / 回收履歷 / 知識平台 / 系統整合\n是否需要 NDA：\n希望時程：\n補充網址或文件：\n\n請協助安排 30 分鐘會議，了解道易科技的建議。`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form id="quick-brief-form" className="quick-brief-form feature-surface" onSubmit={handleSubmit}>
      <span className="mini-label accent">Low-friction intake / 3 欄先開始</span>
      <h3>先用 3 欄確認資料信任專案的起點</h3>
      <p>這裡只問姓名、公司與本次焦點。重點不是第一次就填滿所有規格，而是先讓道易判斷更適合從資料盤點、DPP PoC、AI-Ontology 工作坊或 NDA 路徑開始。</p>
      <div className="quick-brief-priority-note">
        <strong>送出後 24h 內，你會先拿到什麼？</strong>
        <p>不是只有收到回信，而是先拿到建議切入點、第一次會議需準備的資料、PoC 是否可行，以及目前是否適合先走 NDA。</p>
      </div>

      <div className="quick-brief-start-recommendation" aria-live="polite">
        <span className="mini-label accent">Recommended start</span>
        <strong>{selectedFocus.label}</strong>
        <p>{recommendedStart}</p>
      </div>

      <label className="form-field">
        <span>姓名</span>
        <input
          type="text"
          value={form.name}
          onChange={(event) => handleChange("name", event.target.value)}
          placeholder="王小明"
          autoComplete="name"
          required
        />
      </label>

      <label className="form-field">
        <span>公司 / 單位</span>
        <input
          type="text"
          value={form.company}
          onChange={(event) => handleChange("company", event.target.value)}
          placeholder="例如：回收業者 / 製造品牌 / 研究單位 / 文化機構"
          autoComplete="organization"
          required
        />
      </label>

      <fieldset className="form-field quick-brief-focus-fieldset">
        <legend>這次最需要什麼？</legend>
        <p className="quick-brief-field-hint">直接點選最接近的起點即可，手機上比傳統下拉更快，也更不容易選錯。</p>
        <div className="quick-brief-focus-grid" role="radiogroup" aria-label="專案焦點">
          {projectFocusOptions.map((option) => {
            const checked = form.focus === option.value;

            return (
              <label key={option.value} className={`quick-brief-focus-card ${checked ? "is-selected" : ""}`}>
                <input
                  type="radio"
                  name="focus"
                  value={option.value}
                  checked={checked}
                  onChange={() => handleChange("focus", option.value)}
                />
                <span className="quick-brief-focus-title">{option.label}</span>
                <small>{option.detail}</small>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="quick-brief-action-group">
        <button type="submit" className="button-primary button-large" disabled={isDisabled} aria-label="開啟已填好的道易科技專案詢問郵件">
          開啟已填好詢問信
        </button>
        <a className="button-secondary inline-button" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("想先和道易科技討論資料信任專案 / NDA")}&body=${encodeURIComponent("目前資料或流程：\n希望先聊的範圍：\n是否需要 NDA：\n補充說明：")}`}>
          先寄資料 / NDA
        </a>
      </div>
      <div className="quick-brief-assist-list" aria-label="聯絡輔助說明">
        {quickBriefAssistPoints.map((item) => (
          <p key={item} className="quick-brief-assist-pill">{item}</p>
        ))}
      </div>
      <div className="quick-brief-reassurance">
        <strong>送出後會發生什麼？</strong>
        <ul className="bullet-list compact">
          <li>會先開啟已填好的 Email，方便補流程、資料來源或 NDA 需求。</li>
          <li>24 小時內會回覆建議切入點、會議時段與需要補充的資料。</li>
          <li>如果涉及採購、商業機密或研發細節，也可以直接改走 Email + NDA。</li>
        </ul>
      </div>
      <small className="quick-brief-hint">表單刻意維持低摩擦：先確認資料場景與專案方向，再於第一次會議補齊技術、合規與系統邊界。</small>
      <small className="quick-brief-hint">提交後會開啟郵件，預先填好主旨與內容；若不想先填表，也可直接用 Email 開始。</small>
    </form>
  );
}
