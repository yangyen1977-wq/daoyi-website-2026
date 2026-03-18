"use client";

import { useState } from "react";
import Link from "next/link";
import { personaPlaybooks } from "@/lib/site";

export function PersonaPlaybook() {
  const [activeId, setActiveId] = useState(personaPlaybooks[0]?.id ?? "");
  const active = personaPlaybooks.find((persona) => persona.id === activeId) ?? personaPlaybooks[0];

  if (!active) {
    return null;
  }

  return (
    <div className="persona-playbook" aria-label="分眾 CTA 區塊">
      <div className="persona-tablist" role="tablist" aria-label="決策角色切換">
        {personaPlaybooks.map((persona) => (
          <button
            key={persona.id}
            type="button"
            role="tab"
            aria-selected={persona.id === activeId}
            className={`persona-tab ${persona.id === activeId ? "is-active" : ""}`}
            onClick={() => setActiveId(persona.id)}
          >
            <strong>{persona.title}</strong>
            <span>{persona.headline}</span>
          </button>
        ))}
      </div>

      <article className="persona-panel" role="tabpanel" aria-live="polite">
        <span className="mini-label accent">{active.title}</span>
        <h3>{active.headline}</h3>
        <p className="persona-challenge">{active.challenge}</p>
        <p className="persona-win">{active.win}</p>

        <div className="persona-metrics">
          <div className="persona-metric-card">
            <span className="mini-label">{active.metric.label}</span>
            <strong>{active.metric.value}</strong>
          </div>
          <div className="persona-checklist">
            <span className="mini-label">我們的做法</span>
            <ul>
              {active.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="persona-actions">
          <Link href={active.ctaHref} className="button-primary button-large">
            {active.ctaLabel}
          </Link>
          <span className="persona-helper">{active.helperText}</span>
        </div>
      </article>
    </div>
  );
}
