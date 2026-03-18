"use client";

import { useState } from "react";
import Link from "next/link";
import { caseSnapshots } from "@/lib/site";

export function CaseSnapshots() {
  const [activeId, setActiveId] = useState(caseSnapshots[0]?.id ?? "");
  const active = caseSnapshots.find((item) => item.id === activeId) ?? caseSnapshots[0];

  if (!active) return null;

  return (
    <div className="snapshot-shell">
      <div className="snapshot-tabs" role="tablist" aria-label="案例切換">
        {caseSnapshots.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === activeId}
            className={`snapshot-tab ${item.id === activeId ? "is-active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            <span>{item.label}</span>
            <small>{item.context}</small>
          </button>
        ))}
      </div>

      <article className="snapshot-card" role="tabpanel">
        <div className="snapshot-header">
          <span className="mini-label accent">{active.context}</span>
          <h3>{active.title}</h3>
          <p>{active.summary}</p>
        </div>

        <div className="snapshot-grid">
          <div className="snapshot-metrics" aria-label="關鍵指標">
            {active.metrics.map((metric) => (
              <article key={metric.label} className="snapshot-metric-card">
                <span className="mini-label">{metric.label}</span>
                <strong>{metric.value}</strong>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>

          <div className="snapshot-highlights" aria-label="實作亮點與 CTA">
            <h4>這輪如何做到</h4>
            <ul>
              {active.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <Link href={active.href} className="button-secondary button-small snapshot-link">
              查看案例細節
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
