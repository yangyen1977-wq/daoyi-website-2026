"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/site";

const projectFocusOptions = [
  "AI / 流程整合",
  "知識平台 / 內容治理",
  "DPP / 永續資料",
  "品牌官網重構",
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
      `姓名：${form.name}\n公司 / 團隊：${form.company}\n主要關注：${form.focus}\n\n請協助安排 30 分鐘會議，了解道易科技的建議。`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="quick-brief-form feature-surface" onSubmit={handleSubmit}>
      <span className="mini-label accent">5 分鐘內送出</span>
      <h3>快速丟出專案重點</h3>
      <p>留下三個欄位，道易即可回傳初步建議與討論時段。</p>

      <label className="form-field">
        <span>姓名</span>
        <input type="text" value={form.name} onChange={(event) => handleChange("name", event.target.value)} placeholder="王小明" required />
      </label>

      <label className="form-field">
        <span>公司 / 單位</span>
        <input type="text" value={form.company} onChange={(event) => handleChange("company", event.target.value)} placeholder="道易科技" required />
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

      <button type="submit" className="button-primary button-large" disabled={isDisabled}>
        送出 5 分鐘簡報
      </button>
      <small className="quick-brief-hint">提交後會開啟郵件，預先填好主旨與內容，可再補充細節。</small>
    </form>
  );
}
