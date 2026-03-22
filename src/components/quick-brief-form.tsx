"use client";

import { useMemo, useState } from "react";
import { quickBriefAssistPoints, siteConfig } from "@/lib/site";

const projectFocusOptions = [
  {
    value: "品牌官網重構 / 提升詢問量",
    label: "品牌官網重構 / 提升詢問量",
    detail: "適合舊站有流量，但主張、案例與 CTA 還不夠強的團隊。",
  },
  {
    value: "AI / 流程整合",
    label: "AI / 流程整合",
    detail: "把模型、資料欄位、SOP 與前台體驗接成可採用流程。",
  },
  {
    value: "知識平台 / 內容治理",
    label: "知識平台 / 內容治理",
    detail: "整理檢索、權限、內容結構與後續維運的整體規劃。",
  },
  {
    value: "DPP / 永續資料",
    label: "DPP / 永續資料",
    detail: "適合要先做 traceability、欄位藍圖或產品履歷體驗的專案。",
  },
  {
    value: "案例頁 / Contact 轉換優化",
    label: "案例頁 / Contact 轉換優化",
    detail: "想先強化詢問率、證據密度與第一次接洽的安心感。",
  },
  {
    value: "先做首頁 / Contact 快速診斷",
    label: "先做首頁 / Contact 快速診斷",
    detail: "還不確定要怎麼開始，先拿一份可執行的診斷方向。",
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
    if (form.focus.includes("首頁") || form.focus.includes("Contact") || form.focus.includes("官網")) {
      return "建議先從首頁訊息、案例證據與 CTA / Contact friction audit 開始。";
    }

    if (form.focus.includes("AI") || form.focus.includes("流程")) {
      return "建議先釐清資料欄位、角色分工與可驗收的 AI / SOP 節點。";
    }

    if (form.focus.includes("知識平台")) {
      return "建議先整理資訊架構、檢索場景與內容治理優先順序。";
    }

    if (form.focus.includes("DPP")) {
      return "建議先盤點 traceability 欄位藍圖、法規脈絡與 QR / 履歷體驗。";
    }

    return "建議先釐清最接近成交的切口，再決定 sprint 起點。";
  }, [form.focus]);

  const isDisabled = useMemo(() => !form.name || !form.company, [form.name, form.company]);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`DaoYi 專案簡報 - ${form.company}`);
    const body = encodeURIComponent(
      `姓名：${form.name}\n公司 / 團隊：${form.company}\n主要關注：${form.focus}\n\n目前最想改善的成果（可直接改寫）：詢問量 / 線索品質 / 內容理解度 / 流程效率 / DPP 合規準備\n希望時程：\n補充網址或文件：\n\n請協助安排 30 分鐘會議，了解道易科技的建議。`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form id="quick-brief-form" className="quick-brief-form feature-surface" onSubmit={handleSubmit}>
      <span className="mini-label accent">Low-friction intake / 3 欄先開始</span>
      <h3>先用 3 欄拿到具體下一步</h3>
      <p>這裡只問姓名、公司與本次焦點，維持高轉換 SaaS / agency 常見的低摩擦起手式。重點不是把資料填很滿，而是先讓你在 24 小時內拿到建議切入點、推薦 sprint 與第一次會議該對焦的阻力。</p>
      <div className="quick-brief-priority-note">
        <strong>送出後 24h 內，你會先拿到什麼？</strong>
        <p>不是只有收到回信，而是先拿到首頁 / Contact 可先補哪裡、建議從哪個 sprint 開始，以及第一次會議該對焦的阻力點。</p>
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
          placeholder="例如：製造品牌 / 研究單位 / 內容平台團隊"
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
        <button type="submit" className="button-primary button-large" disabled={isDisabled} aria-label="開啟已填好的 DaoYi 專案詢問郵件">
          開啟已填好詢問信，拿 24h 建議
        </button>
        <a className="button-secondary inline-button" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("想先和道易討論專案方向 / NDA")}&body=${encodeURIComponent("目前網址或資料：\n希望先聊的範圍：\n是否需要 NDA：\n補充說明：")}`}>
          先寄網址 / NDA
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
          <li>會先開啟已填好的 Email，方便補網址、簡報或 NDA 需求。</li>
          <li>24 小時內會回覆建議切入點、會議時段與待補資料。</li>
          <li>如果案子偏敏感，也可以直接改走 Email + NDA，不必重填。</li>
        </ul>
      </div>
      <small className="quick-brief-hint">競品研究重點：ALM 指出表單少於 4 欄且保留次要 CTA，能提升 Qualified Leads；Proofmap / Webstacks 也都強調先給可理解的 next step，比要求第一次就填滿所有資訊更容易成交。</small>
      <small className="quick-brief-hint">提交後會開啟郵件，預先填好主旨與內容；若不想先填表，也可直接用 Email 開始。</small>
    </form>
  );
}
