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
  const primaryLabel = pathname === "/" ? "3 欄拿建議" : "24h 內拿建議";
  const secondaryHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想先和道易討論新專案")}`;

  if (hiddenRoutes.includes(pathname) || dismissed) {
    return null;
  }

  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="快速行動">
      <div className="mobile-cta-content">
        <div className="mobile-cta-copy">
          <strong>先用 3 欄拿 24h 建議，不必先講完整個專案</strong>
          <span>Quick Brief 主 CTA，Email / NDA 當備援路徑</span>
        </div>
        <div className="mobile-cta-actions">
          <Link href={primaryHref} className="mobile-cta-button primary">
            {primaryLabel}
          </Link>
          <a className="mobile-cta-button secondary" href={secondaryHref}>
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
