"use client";

import { useMemo, useState } from "react";
import { quickBriefAssistPoints, siteConfig } from "@/lib/site";

const projectFocusOptions = [
  "品牌官網重構 / 提升詢問量",
  "AI / 流程整合",
  "知識平台 / 內容治理",
  "DPP / 永續資料",
  "案例頁 / Contact 轉換優化",
  "先做首頁 / Contact 快速診斷",
];

type FormState = {
  name: string;
  company: string;
  focus: string;
};

export function QuickBriefForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    focus: projectFocusOptions[0],
  });

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
      <h3>快速丟出專案重點</h3>
      <p>這裡只問姓名、公司與本次焦點，讓第一次聯絡維持低摩擦。若你要談品牌官網、案例頁強化、AI 導入、DPP，或只是先想做一輪首頁 / Contact 診斷，這份 brief 都能直接開始。</p>
      <div className="quick-brief-priority-note">
        <strong>最適合現在就送出的情況</strong>
        <p>舊站有流量但價值主張不清、案例證據太散、或聯絡入口太弱。先用 3 欄起步，通常比整理一大份需求書更快進入有效討論。</p>
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

      <label className="form-field">
        <span>這次最需要什麼？</span>
        <select value={form.focus} onChange={(event) => handleChange("focus", event.target.value)}>
          {projectFocusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <div className="quick-brief-action-group">
        <button type="submit" className="button-primary button-large" disabled={isDisabled} aria-label="開啟已填好的 DaoYi 專案詢問郵件">
          開啟已填好的專案郵件
        </button>
        <a className="button-secondary inline-button" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("想先和道易討論專案方向")}`}>
          先用 Email 問問題
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
      <small className="quick-brief-hint">ALM Corp 追蹤 200+ SaaS 官網後指出，表單少於 4 欄且有次要 CTA，可把 Qualified Leads 提升 18-32%。</small>
      <small className="quick-brief-hint">提交後會開啟郵件，預先填好主旨與內容；若不想先填表，也可直接用 Email 開始。</small>
    </form>
  );
}
