import { heroClarityChecklist } from "@/lib/site";

export function HeroClarityChecklist() {
  if (!heroClarityChecklist.length) return null;

  return (
    <div className="hero-clarity-checklist" aria-label="5 秒清晰檢查">
      {heroClarityChecklist.map((item) => (
        <article key={item.label} className="hero-clarity-item">
          <span className="mini-label">{item.label}</span>
          <strong>{item.answer}</strong>
          <p>{item.detail}</p>
          {item.metric ? <small>{item.metric}</small> : null}
        </article>
      ))}
    </div>
  );
}
