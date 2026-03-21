"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

export function MobileStickyCTA() {
  const pathname = usePathname();
  const hiddenRoutes = ["/contact"];
  const [dismissed, setDismissed] = useState(false);
  const primaryHref = pathname === "/" ? "/#quick-brief" : "/contact";
  const primaryLabel = pathname === "/" ? "3 欄先開始" : "24h 內取得建議";

  if (hiddenRoutes.includes(pathname) || dismissed) {
    return null;
  }

  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="快速行動">
      <div className="mobile-cta-content">
        <div className="mobile-cta-copy">
          <strong>先拿到下一步，不必先講完整個專案</strong>
          <span>Quick Brief / Email / NDA-friendly</span>
        </div>
        <div className="mobile-cta-actions">
          <Link href={primaryHref} className="mobile-cta-button primary">
            {primaryLabel}
          </Link>
          <a className="mobile-cta-button secondary" href={`mailto:${siteConfig.email}?subject=DaoYi%20Quick%20Brief`}>
            快速寄信
          </a>
        </div>
        <button type="button" className="mobile-cta-close" onClick={() => setDismissed(true)} aria-label="關閉行動按鈕">
          ×
        </button>
      </div>
    </div>
  );
}
