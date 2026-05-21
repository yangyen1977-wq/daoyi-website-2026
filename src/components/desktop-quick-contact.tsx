"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function DesktopQuickContact() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const primaryHref = "/#quick-brief";
  const secondaryHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想先和道易討論新專案 / NDA")}&body=${encodeURIComponent("目前網址或資料：\n希望先聊的範圍：\n是否需要 NDA：\n補充說明：")}`;

  if (pathname !== "/" || dismissed) {
    return null;
  }

  return (
    <aside className={`desktop-quick-contact ${isOpen ? "is-open" : "is-collapsed"}`} aria-label="首頁快速聯絡浮動視窗">
      {isOpen ? (
        <>
          <div className="desktop-quick-contact-head">
            <span className="mini-label accent">Quick contact</span>
            <div className="desktop-quick-contact-controls">
              <button type="button" onClick={() => setIsOpen(false)} aria-label="收合 Quick contact">
                −
              </button>
              <button type="button" onClick={() => setDismissed(true)} aria-label="關閉 Quick contact">
                ×
              </button>
            </div>
          </div>
          <strong>24h 內拿到可執行下一步</strong>
          <p>不想先滑完整頁也沒關係，先用 Quick Brief 判斷 fit，或直接從 Email / NDA 低風險開始。</p>
          <div className="desktop-quick-contact-paths" aria-label="快速聯絡路徑">
            <span>3 欄</span>
            <span>先拿建議</span>
            <span>Email / NDA</span>
          </div>
          <div className="desktop-quick-contact-actions">
            <Link href={primaryHref} className="button-primary button-small">
              3 欄先拿建議
            </Link>
            <a href={secondaryHref} className="button-secondary button-small">
              Email / NDA
            </a>
          </div>
        </>
      ) : (
        <button type="button" className="desktop-quick-contact-tab" onClick={() => setIsOpen(true)} aria-label="展開 Quick contact">
          <span>Quick contact</span>
          <strong>24h</strong>
        </button>
      )}
    </aside>
  );
}
