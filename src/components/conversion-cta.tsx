import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ConversionCTA() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想複製 DaoYi 案例成果")}`;

  return (
    <div className="conversion-panel">
      <div>
        <span className="mini-label accent">Ready in 5 minutes</span>
        <h3>想先判斷這案子值不值得談？先送出 Quick Brief，24 小時內拿到下一步。</h3>
        <p>這不是泛泛的「歡迎洽詢」：你會先拿到可執行的切入建議、建議 sprint 起點，以及第一次會議該看的重點；若案子敏感，也可直接走 Email + NDA。</p>
      </div>
      <div className="conversion-actions">
        <Link href="/#quick-brief" className="button-primary button-large">
          先送出 3 欄 Quick Brief
        </Link>
        <a href={mailto} className="button-secondary button-large">
          敏感專案先寄 Email
        </a>
        <small>把主要 CTA 直接對齊首頁表單，減少再跳頁一次的流失。</small>
      </div>
    </div>
  );
}
