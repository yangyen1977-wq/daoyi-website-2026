import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ConversionCTA() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent("想複製 DaoYi 案例成果")}`;

  return (
    <div className="conversion-panel">
      <div>
        <span className="mini-label accent">Ready in 5 minutes</span>
        <h3>想複製上面的成果？把需求丟進來，我們 24 小時內回覆下一步。</h3>
        <p>行動版 sticky CTA、案例快照與 JSON-LD 都已經準備好，下一步只差 30 分鐘的同步會議。</p>
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
