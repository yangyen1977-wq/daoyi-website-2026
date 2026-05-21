"use client";

import { useMemo, useState } from "react";

type TrustFlowItem = {
  title: string;
  detail: string;
};

type InteractiveTrustFlowProps = {
  items: TrustFlowItem[];
};

const stageMeta = [
  { label: "Input", action: "確認資料來源與責任邊界" },
  { label: "Model", action: "整理欄位、實體、關係與權限" },
  { label: "Fingerprint", action: "建立不可逆完整性指紋" },
  { label: "Batch proof", action: "支援大量紀錄快速抽驗" },
  { label: "Evidence store", action: "保存關鍵證據與內容指紋" },
  { label: "Time proof", action: "證明資料在特定時間已存在" },
  { label: "Trust anchor", action: "建立第三方驗證信任錨點" },
  { label: "Decision", action: "交付查詢、稽核與展示介面" },
];

export function InteractiveTrustFlow({ items }: InteractiveTrustFlowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];
  const activeMeta = stageMeta[activeIndex] ?? stageMeta[0];

  const progress = useMemo(() => {
    if (items.length <= 1) return 100;
    return Math.round((activeIndex / (items.length - 1)) * 100);
  }, [activeIndex, items.length]);

  return (
    <div className="interactive-flow-panel" aria-label="互動式資料信任鏈導覽">
      <div className="interactive-flow-rail" role="tablist" aria-label="資料信任鏈步驟">
        {items.map((item, index) => {
          const selected = index === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              className={`interactive-flow-step ${selected ? "is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={selected}
              aria-controls="interactive-flow-detail"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
            </button>
          );
        })}
      </div>

      <article id="interactive-flow-detail" className="interactive-flow-detail" role="tabpanel">
        <span className="mini-label accent">{activeMeta.label}</span>
        <h3>{activeItem.title}</h3>
        <p>{activeItem.detail}</p>
        <div className="interactive-flow-action">
          <strong>此階段要完成的判斷</strong>
          <span>{activeMeta.action}</span>
        </div>
        <div className="interactive-flow-progress" aria-label={`信任鏈進度 ${progress}%`}>
          <span style={{ width: `${progress}%` }} />
        </div>
      </article>
    </div>
  );
}
