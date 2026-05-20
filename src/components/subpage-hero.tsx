import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type SubpageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: HeroAction[];
};

export function SubpageHero({ eyebrow, title, description, actions }: SubpageHeroProps) {
  return (
    <section className="subpage-hero">
      <div className="shell narrow">
        <span className="section-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions?.length ? (
          <div className="section-actions">
            {actions.map((action) => {
              const className = action.variant === "secondary" ? "button-secondary button-large" : "button-primary button-large";
              const isExternalAction = action.href.startsWith("mailto:") || action.href.startsWith("http://") || action.href.startsWith("https://");

              if (isExternalAction) {
                return (
                  <a key={`${action.href}-${action.label}`} href={action.href} className={className}>
                    {action.label}
                  </a>
                );
              }

              return (
                <Link key={`${action.href}-${action.label}`} href={action.href} className={className}>
                  {action.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
