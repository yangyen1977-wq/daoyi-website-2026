type SolutionCardProps = {
  title: string;
  description?: string;
  bestFor?: string;
  outcomes?: string[];
};

export function SolutionCard({ title, description, bestFor, outcomes }: SolutionCardProps) {
  return (
    <article className={outcomes?.length ? "card offer-room-card" : "card trust-card"}>
      {bestFor ? <span className="mini-label accent">{bestFor}</span> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {outcomes?.length ? (
        <ul className="bullet-list compact">
          {outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
        </ul>
      ) : null}
    </article>
  );
}
