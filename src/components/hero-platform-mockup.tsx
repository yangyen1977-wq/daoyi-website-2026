type HeroMockup = {
  platformLabel: string;
  status: string;
  navItems: string[];
  productPassport: {
    title: string;
    productId: string;
    status: string;
    fields: string[];
  };
  auditEvidence: {
    title: string;
    status: string;
    fields: string[];
  };
  flow: string[];
};

type HeroPlatformMockupProps = {
  mockup: HeroMockup;
  metrics: { value: string; label: string }[];
};

export function HeroPlatformMockup({ mockup, metrics }: HeroPlatformMockupProps) {
  return (
    <div className="hero-platform-mockup" aria-label="DaoYi Trust Platform preview">
      <div className="hero-platform-topbar">
        <div>
          <span className="mockup-window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <strong>{mockup.platformLabel}</strong>
        </div>
        <span className="mockup-status-badge">{mockup.status}</span>
      </div>

      <div className="hero-platform-body">
        <nav className="hero-platform-nav" aria-label="Platform preview sections">
          {mockup.navItems.map((item, index) => (
            <span key={item} className={index === 0 ? "active" : undefined}>
              {item}
            </span>
          ))}
        </nav>

        <div className="hero-platform-content">
          <article className="mockup-card dpp-card">
            <div>
              <span className="mini-label accent">{mockup.productPassport.title}</span>
              <strong>{mockup.productPassport.productId}</strong>
              <p>{mockup.productPassport.status}</p>
            </div>
            <div className="mockup-qr" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, index) => (
                <span key={index} className={index % 3 === 0 || index === 5 || index === 14 ? "filled" : undefined} />
              ))}
            </div>
            <ul>
              {mockup.productPassport.fields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </article>

          <article className="mockup-card audit-card">
            <div className="mockup-card-heading">
              <span className="mini-label accent">{mockup.auditEvidence.title}</span>
              <span className="mockup-pass-pill">{mockup.auditEvidence.status}</span>
            </div>
            <ul className="mockup-evidence-list">
              {mockup.auditEvidence.fields.map((field) => (
                <li key={field}>
                  <span>{field}</span>
                  <strong>Verified</strong>
                </li>
              ))}
            </ul>
          </article>

          <div className="mockup-flow" aria-label="Trust Flow">
            {mockup.flow.map((item, index) => (
              <div key={item} className={index === mockup.flow.length - 1 ? "flow-node active" : "flow-node"}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <span className="mockup-flow-hint">Swipe to inspect the trust flow</span>
        </div>
      </div>

      <div className="mockup-metric-strip">
        {metrics.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
