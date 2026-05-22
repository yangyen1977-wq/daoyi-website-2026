"use client";

import { useMemo, useState } from "react";
import { quickBriefAssistPoints } from "@/lib/content/contact";
import { siteConfig } from "@/lib/site";

const projectFocusOptions = [
  {
    value: "DPP 數位產品護照",
    label: "DPP 數位產品護照",
    detail: "產品資料、材料、製程、QR 查詢、供應鏈揭露。",
  },
  {
    value: "ESG / 資料信任鏈稽核",
    label: "ESG / 資料信任鏈稽核",
    detail: "回收、碳、供應鏈、第三方查核、資料來源追溯。",
  },
  {
    value: "AI-Ontology 知識平台",
    label: "AI-Ontology 知識平台",
    detail: "人物、文本、事件、地點、研究資料、語意搜尋。",
  },
  {
    value: "AIoT / 回收履歷整合",
    label: "AIoT / 回收履歷整合",
    detail: "設備、影像辨識、感測資料、現場流程與回收批次。",
  },
  {
    value: "資料平台 / 系統整合",
    label: "資料平台 / 系統整合",
    detail: "已有資料庫、網站、後台、ERP、MES 或 API 需要整合。",
  },
  {
    value: "還不確定，想先盤點",
    label: "還不確定，想先盤點",
    detail: "目前只知道資料很多、流程複雜，需要先釐清方向。",
  },
] as const;

const sourceOptions = [
  "Excel / Google Sheet",
  "PDF / Word / 文件檔",
  "既有網站或 CMS",
  "內部資料庫",
  "ERP / MES / CRM",
  "API / 外部系統",
  "設備 / 感測器 / 影像",
  "還沒整理，只有人工流程",
];

const confidentialityOptions = [
  "不涉及，可以先用表單簡述",
  "可能涉及，希望先 Email 確認",
  "涉及商業機密，建議先 NDA",
] as const;

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  focus: (typeof projectFocusOptions)[number]["value"];
  sources: string[];
  problem: string;
  confidentiality: (typeof confidentialityOptions)[number];
};

export function QuickBriefForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    focus: projectFocusOptions[0].value,
    sources: [],
    problem: "",
    confidentiality: confidentialityOptions[0],
  });

  const selectedFocus = useMemo(
    () => projectFocusOptions.find((option) => option.value === form.focus) ?? projectFocusOptions[0],
    [form.focus]
  );

  const isDisabled = useMemo(() => !form.name || !form.company || !form.email, [form.name, form.company, form.email]);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleSource(source: string) {
    setForm((prev) => ({
      ...prev,
      sources: prev.sources.includes(source)
        ? prev.sources.filter((item) => item !== source)
        : [...prev.sources, source],
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Quick Brief｜${form.company}｜${form.focus}`);
    const body = encodeURIComponent(
      `您好，我想與道易討論可信資料平台專案。\n\n姓名：${form.name}\n公司 / 單位：${form.company}\nEmail：${form.email}\n聯絡電話：${form.phone || "未提供"}\n\n這次最接近的需求：${form.focus}\n目前資料主要在哪裡：${form.sources.length ? form.sources.join("、") : "尚未選擇"}\n想先解決的問題：\n${form.problem || "尚未填寫"}\n\n是否涉及敏感或未公開資料：${form.confidentiality}\n\n請協助回覆建議切入點、第一次會議需準備的資料，以及是否適合先做 PoC 或 Email / NDA。\n`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form id="quick-brief-form" className="quick-brief-form contact-brief-form" onSubmit={handleSubmit}>
      <div className="contact-brief-intro">
        <span className="mini-label accent">Quick Brief</span>
        <h3>用 5 個問題，讓道易判斷你的資料專案第一步。</h3>
        <p>這不是正式規格書，只是快速確認資料現況。請避免在表單中填寫機密細節；如果內容涉及供應鏈、研發、採購或未公開產品，請改用 Email / NDA 路徑。</p>
      </div>

      <div className="quick-brief-assist-list" aria-label="填寫說明">
        {quickBriefAssistPoints.map((item) => (
          <p key={item} className="quick-brief-assist-pill">{item}</p>
        ))}
      </div>

      <div className="contact-form-grid">
        <label className="form-field">
          <span>姓名</span>
          <input type="text" value={form.name} onChange={(event) => handleChange("name", event.target.value)} placeholder="請輸入姓名" autoComplete="name" required />
        </label>
        <label className="form-field">
          <span>公司 / 單位</span>
          <input type="text" value={form.company} onChange={(event) => handleChange("company", event.target.value)} placeholder="請輸入公司或單位名稱" autoComplete="organization" required />
        </label>
        <label className="form-field">
          <span>Email</span>
          <input type="email" value={form.email} onChange={(event) => handleChange("email", event.target.value)} placeholder="請輸入可聯絡信箱" autoComplete="email" required />
        </label>
        <label className="form-field">
          <span>聯絡電話，選填</span>
          <input type="tel" value={form.phone} onChange={(event) => handleChange("phone", event.target.value)} placeholder="方便安排會議時使用" autoComplete="tel" />
        </label>
      </div>

      <fieldset className="form-field quick-brief-focus-fieldset">
        <legend>這次最接近哪一種需求？</legend>
        <div className="quick-brief-focus-grid" role="radiogroup" aria-label="專案焦點">
          {projectFocusOptions.map((option) => {
            const checked = form.focus === option.value;

            return (
              <label key={option.value} className={`quick-brief-focus-card ${checked ? "is-selected" : ""}`}>
                <input type="radio" name="focus" value={option.value} checked={checked} onChange={() => handleChange("focus", option.value)} />
                <span className="quick-brief-focus-title">{option.label}</span>
                <small>{option.detail}</small>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="quick-brief-start-recommendation" aria-live="polite">
        <span className="mini-label accent">目前選擇</span>
        <strong>{selectedFocus.label}</strong>
        <p>{selectedFocus.detail}</p>
      </div>

      <fieldset className="form-field contact-checkbox-fieldset">
        <legend>目前資料主要在哪裡？</legend>
        <div className="contact-checkbox-grid">
          {sourceOptions.map((source) => (
            <label key={source} className="contact-checkbox-card">
              <input type="checkbox" checked={form.sources.includes(source)} onChange={() => toggleSource(source)} />
              <span>{source}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="form-field">
        <span>你最想先解決什麼？</span>
        <textarea
          value={form.problem}
          onChange={(event) => handleChange("problem", event.target.value)}
          placeholder="例如：產品資料想做 QR 查詢、回收流程需要被稽核、人物資料需要做成知識平台、既有資料庫難以維護、資料要對外揭露但不知道哪些能公開。"
          rows={5}
        />
      </label>

      <fieldset className="form-field contact-radio-fieldset">
        <legend>是否涉及敏感或未公開資料？</legend>
        <div className="contact-radio-grid">
          {confidentialityOptions.map((option) => (
            <label key={option} className={`contact-radio-card ${form.confidentiality === option ? "is-selected" : ""}`}>
              <input type="radio" name="confidentiality" value={option} checked={form.confidentiality === option} onChange={() => handleChange("confidentiality", option)} />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="quick-brief-action-group">
        <button type="submit" className="button-primary button-large" disabled={isDisabled} aria-label="開啟預填 Email">
          開啟預填 Email
        </button>
        <small>系統會開啟你的 Email 軟體，並自動帶入表單內容。你可以再補充資料或附檔後寄出。</small>
      </div>
    </form>
  );
}
