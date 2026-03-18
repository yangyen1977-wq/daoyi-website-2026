import Link from "next/link";
import { heroActionSignals } from "@/lib/site";

export function HeroActionPlan() {
  if (!heroActionSignals.length) return null;

  return (
    <div className="hero-action-plan" aria-label="聯絡節奏與回應 SLA">
      <div className="hero-action-cards">
        {heroActionSignals.map((signal) => (
          <article key={signal.step} className="hero-action-card">
            <div className="hero-action-card-head">
              <span className="mini-label">{signal.step}</span>
              <span className="hero-action-metric">{signal.metric}</span>
            </div>
            <h3>{signal.title}</h3>
            <p>{signal.detail}</p>
          </article>
        ))}
      </div>
      <div className="hero-action-cta">
        <div>
          <strong>手機版 sticky CTA 會常駐底部，桌機則可直接跳到 Quick Brief。</strong>
          <p>依照 Webflow / Medium 統計，清楚的 3 步行動流程能讓 demo request 多 18-32%。</p>
        </div>
        <Link href="#quick-brief" className="button-secondary button-large hero-action-link">
          前往 Quick Brief
        </Link>
      </div>
    </div>
  );
}
