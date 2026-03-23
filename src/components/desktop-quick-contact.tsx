"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function DesktopQuickContact() {
  const pathname = usePathname();
  const hiddenRoutes = ["/contact"];
  const primaryHref = pathname === "/" ? "/#quick-brief" : "/contact";
  const primaryLabel = pathname === "/" ? "3 欄先拿建議" : "看 Contact 起手方式";
  const secondaryHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想先和道易討論新專案 / NDA")}&body=${encodeURIComponent("目前網址或資料：\n希望先聊的範圍：\n是否需要 NDA：\n補充說明：")}`;

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return (
    <aside className="desktop-quick-contact" aria-label="桌機快速聯絡">
      <span className="mini-label accent">Quick contact</span>
      <strong>24h 內拿到可執行下一步</strong>
      <p>不想先滑完整頁也沒關係，先用 Quick Brief 判斷 fit，或直接從 Email / NDA 低風險開始。</p>
      <div className="desktop-quick-contact-actions">
        <Link href={primaryHref} className="button-primary button-small">
          {primaryLabel}
        </Link>
        <a href={secondaryHref} className="button-secondary button-small">
          Email / NDA
        </a>
      </div>
    </aside>
  );
}
