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
          <strong>先判斷值不值得談，再選 Quick Brief 或 Email / NDA</strong>
          <span>手機版先把主 CTA、24h 回覆承諾與敏感專案備援路徑放在拇指可達區。</span>
          <small>通常會先回覆建議切入點、推薦 sprint、需要補的資料，以及第一次會議怎麼更有效率。</small>
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
