import { heroClients, heroProofs } from "@/lib/site";

export function HeroProofBar() {
  return (
    <div className="hero-proof-bar" aria-label="客戶信任與成效">
      <div className="hero-proof-clients" aria-label="合作客戶">
        <span className="mini-label">Client snapshot</span>
        <div className="hero-proof-clientTokens">
          {heroClients.map((client) => (
            <span key={client.name} className="client-token">
              {client.name}
              <small>{client.context}</small>
            </span>
          ))}
        </div>
      </div>
      <div className="hero-proof-metrics">
        {heroProofs.map((item) => (
          <div key={item.label} className="hero-proof-metric">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <small>{item.description}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
