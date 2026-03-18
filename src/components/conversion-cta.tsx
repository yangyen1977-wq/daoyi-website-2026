import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ConversionCTA() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想複製 DaoYi 案例成果")}`;

  return (
    <div className="conversion-panel">
      <div>
        <span className="mini-label accent">Ready in 5 minutes</span>
        <h3>想把官網、案例或 DPP 專案講得更有說服力？先丟需求，我們 24 小時內回覆下一步。</h3>
        <p>這不是泛泛的「歡迎洽詢」：你會先拿到可執行的切入建議、建議 sprint 起點，以及第一次會議該看的重點。</p>
      </div>
      <div className="conversion-actions">
        <Link href="/contact" className="button-primary button-large">
          預約 30 分鐘討論
        </Link>
        <a href={mailto} className="button-secondary button-large">
          直接寄信給道易
        </a>
        <small>行動端也會顯示 Quick Brief 表單，方便隨時提交。</small>
      </div>
    </div>
  );
}
