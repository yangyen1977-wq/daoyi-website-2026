import { caseOverviewStats } from "@/lib/site";

export function CaseOverviewStats() {
  if (!caseOverviewStats.length) return null;

  return (
    <div className="case-overview-stats" aria-label="案例成效摘要">
      {caseOverviewStats.map((stat) => (
        <article key={stat.label} className="case-overview-card">
          <span className="mini-label">{stat.label}</span>
          <strong>{stat.value}</strong>
          <p>{stat.detail}</p>
        </article>
      ))}
    </div>
  );
}
