import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <Link href="/" className="brand-mark" aria-label={siteConfig.name}>
          <span className="brand-mark-badge">DY</span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>AI / Knowledge / DPP</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="主要導覽">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="header-cta">
          預約專案討論
        </Link>
      </div>
    </header>
  );
}
