"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const ctaHref = pathname === "/" ? "/#quick-brief" : "/contact";
  const ctaLabel = pathname === "/" ? "立即送出 Quick Brief" : "24h 內取得下一步";

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1100) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <div className="site-header-topRow">
          <Link href="/" className="brand-mark" aria-label={siteConfig.name} onClick={() => setMenuOpen(false)}>
            <span className="brand-mark-logoWrap">
              <Image src="/assets/daoyi-logo.png" alt="DaoYi Technology logo" width={44} height={44} className="brand-mark-logo" priority />
            </span>
            <span>
              <strong>{siteConfig.name}</strong>
              <small>AI / Knowledge Platform / DPP</small>
            </span>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "關閉選單" : "開啟選單"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`site-header-navWrap ${menuOpen ? "is-open" : ""}`}>
          <nav id="site-navigation" className="site-nav" aria-label="主要導覽">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href={ctaHref} className="header-cta" onClick={() => setMenuOpen(false)}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
