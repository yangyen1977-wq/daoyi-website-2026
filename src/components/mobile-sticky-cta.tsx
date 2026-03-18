"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

export function MobileStickyCTA() {
  const pathname = usePathname();
  const hiddenRoutes = ["/contact"];

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="快速行動">
      <Link href="/contact" className="mobile-cta-button primary">
        預約專案討論
      </Link>
      <a className="mobile-cta-button secondary" href={`mailto:${siteConfig.email}?subject=DaoYi%20Quick%20Brief`}>
        快速寄信
      </a>
    </div>
  );
}
