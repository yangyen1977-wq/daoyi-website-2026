type TrustFlowStep = {
  title: string;
  detail: string;
};

type TrustFlowTimelineProps = {
  steps: TrustFlowStep[];
  columns?: "four" | "five";
};

export function TrustFlowTimeline({ steps, columns = "five" }: TrustFlowTimelineProps) {
  return (
    <div className={`card-grid ${columns === "four" ? "four-up" : "five-up"}`}>
      {steps.map((item, index) => (
        <article key={item.title} className="card process-card">
          <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
          <strong>{item.title}</strong>
          <p>{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
