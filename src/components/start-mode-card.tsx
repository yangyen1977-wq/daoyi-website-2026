type StartModeCardProps = {
  title: string;
  detail: string;
  fit?: string;
};

export function StartModeCard({ title, detail, fit }: StartModeCardProps) {
  return (
    <article className="card decision-card">
      <span className="mini-label accent">{title}</span>
      <p>{detail}</p>
      {fit ? <strong>{fit}</strong> : null}
    </article>
  );
}
