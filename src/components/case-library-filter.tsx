"use client";

import { useMemo, useState } from "react";
import { CaseStudyCard } from "@/components/case-study-card";

type CaseStudy = {
  id: string;
  title: string;
  category: string;
  filterGroup: string;
  summary: string;
  problem: string;
  solution: string;
  deliverables: string[];
  extension: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
  proofStatus: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

type CaseLibraryFilterProps = {
  cases: CaseStudy[];
};

const filters = [
  { id: "all", label: "全部", match: () => true },
  { id: "dpp", label: "DPP / ESG", match: (item: CaseStudy) => hasAny(item, ["DPP", "ESG", "循環", "回收"]) },
  { id: "ontology", label: "AI-Ontology", match: (item: CaseStudy) => hasAny(item, ["AI-Ontology", "Ontology", "Knowledge", "知識", "數位人文"]) },
  { id: "research", label: "研究資料庫", match: (item: CaseStudy) => hasAny(item, ["研究", "Research", "Biographical", "Prosopography"]) },
  { id: "platform", label: "圖書館 / 資料平台", match: (item: CaseStudy) => hasAny(item, ["圖書館", "Library", "平台", "Database"]) },
] as const;

function hasAny(item: CaseStudy, keywords: string[]) {
  const haystack = `${item.title} ${item.category} ${item.filterGroup} ${item.tags.join(" ")}`;
  return keywords.some((keyword) => haystack.includes(keyword));
}

export function CaseLibraryFilter({ cases }: CaseLibraryFilterProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["id"]>("all");
  const selectedFilter = filters.find((filter) => filter.id === activeFilter) ?? filters[0];
  const visibleCases = useMemo(() => cases.filter(selectedFilter.match), [cases, selectedFilter]);

  return (
    <div className="case-filter-panel">
      <div className="case-filter-toolbar" role="tablist" aria-label="案例類型篩選">
        {filters.map((filter) => {
          const active = filter.id === activeFilter;

          return (
            <button
              key={filter.id}
              type="button"
              className={`case-filter-button ${active ? "is-active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
              role="tab"
              aria-selected={active}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="case-filter-count" aria-live="polite">
        目前顯示 {visibleCases.length} / {cases.length} 個案例
      </p>

      <div className="work-featured-grid">
        {visibleCases.map((item) => (
          <div className="case-study-proof-block" key={item.title}>
            <CaseStudyCard {...item} />
            <p className="case-study-proof-status">{item.proofStatus}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
