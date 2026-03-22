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
  const secondaryHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想先和道易討論新專案 / NDA")}&body=${encodeURIComponent("目前網址或資料：\n希望先聊的範圍：\n是否需要 NDA：\n補充說明：")}`;

  if (hiddenRoutes.includes(pathname) || dismissed) {
    return null;
  }

  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="快速行動">
      <div className="mobile-cta-content">
        <div className="mobile-cta-copy">
          <strong>3 欄先拿建議，或直接 Email / NDA</strong>
          <span>手機版優先保留主 CTA、保密備援路徑與 24h 回覆承諾。</span>
        </div>
        <div className="mobile-cta-actions">
          <Link href={primaryHref} className="mobile-cta-button primary">
            {primaryLabel}
          </Link>
          <a className="mobile-cta-button secondary" href={secondaryHref}>
            Email / NDA
          </a>
        </div>
        <button type="button" className="mobile-cta-close" onClick={() => setDismissed(true)} aria-label="關閉行動按鈕">
          ×
        </button>
      </div>
    </div>
  );
}
