import Link from "next/link";
import { contactChannels, navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <p className="footer-eyebrow">DaoYi Technology / 2026</p>
          <h2>{siteConfig.name}</h2>
          <p>{siteConfig.description}</p>
        </div>

        <div>
          <h3>網站導覽</h3>
          <ul className="footer-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>聯絡資訊</h3>
          <ul className="footer-list">
            {contactChannels.map((item) => (
              <li key={item.label}>
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 DaoYi Technology. Built with Next.js.</span>
        <span>Strategy × Design × Delivery</span>
      </div>
    </footer>
  );
}
