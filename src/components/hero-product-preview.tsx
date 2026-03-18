"use client";

import { useState } from "react";
import { heroPreviews } from "@/lib/site";

export function HeroProductPreview() {
  const [activeId, setActiveId] = useState(heroPreviews[0]?.id ?? "");
  const active = heroPreviews.find((item) => item.id === activeId) ?? heroPreviews[0];

  if (!active) return null;

  return (
    <div className="hero-preview" aria-label="核心服務預覽">
      <div className="preview-tabs" role="tablist" aria-label="服務切換">
        {heroPreviews.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === activeId}
            className={`preview-tab ${item.id === activeId ? "is-active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            <span>{item.label}</span>
            <small>{item.metric}</small>
          </button>
        ))}
      </div>
      <div className="preview-card" role="tabpanel">
        <p className="preview-summary">{active.summary}</p>
        <ul>
          {active.checklist.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
