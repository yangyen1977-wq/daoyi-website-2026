export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技專注把複雜型 B2B、科技、製造與知識型團隊的官網，重建成能支撐 shortlist、提案、採購與商務對話的成熟成長資產。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "把複雜能力重建成客戶看得懂、團隊拿得去提案、採購願意往下談的 B2B 官網。",
  heroDescription:
    "我們不是延長舊站壽命，而是重做品牌主張、頁面角色、案例證據、方案敘事與轉換節奏，讓官網從形象展示頁升級成真正的商務系統。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "品牌定位" },
  { href: "/solutions", label: "解決方案" },
  { href: "/work", label: "案例系統" },
  { href: "/contact", label: "啟動專案" },
];

export const headerReassuranceSignals = [
  "以重設與重建思維取代舊站優化",
  "首頁先服務 buyer fit、proof 與 shortlist",
  "Quick Brief / Strategy Call / NDA 三路啟動",
];

export const solutions = [
  {
    title: "B2B Website Rebuild",
    description: "從品牌主張、資訊架構、首頁節奏、案例格式到 CTA 機制整體重做，讓官網變成能支撐業務與提案的成長資產。",
  },
  {
    title: "AI Offer Framing",
    description: "把 AI、workflow、自動化與資料整合，翻成主管、採購與 PM 都能理解的提案語言、交付邊界與驗收節點。",
  },
  {
    title: "Trust / DPP Experience",
    description: "把 traceability、知識內容、透明資料與 DPP 需求，設計成可信、好找、可展示也可驗收的外部體驗。",
  },
];

export const contactChannels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { label: "Location", value: siteConfig.location, href: siteConfig.url },
];

export const quickBriefAssistPoints = [
  "先判斷 fit 與切入點，不必先寫完整 RFP",
  "24h 內回覆建議 sitemap、推薦 sprint 與待補資料",
  "若涉及敏感內容，可直接改走 Email / NDA",
];

export const stats = [
  { value: "5 秒", label: "Fit clarity" },
  { value: "4 pages", label: "Core decision flow" },
  { value: "3 paths", label: "Start modes" },
  { value: "Proof-led", label: "Case system" },
];

export const heroClients = [
  { name: "B2B SaaS / 軟體平台", context: "需要把產品價值、差異與導入方式講得更像 GTM asset。" },
  { name: "製造 / 出口 / 工業品牌", context: "需要把解決方案、資料透明與信任證據講清楚。" },
  { name: "研究 / 協會 / 知識平台", context: "需要承接高內容密度，又維持良好查找與說服體驗。" },
  { name: "專案導向服務團隊", context: "需要把複雜能力翻成外部聽得懂、能採購的方案敘事。" },
];

export const heroProofs = [
  { label: "Hero 任務", value: "先判斷 fit", description: "5 秒內回答適不適合、值不值得談、下一步怎麼開始。" },
  { label: "案例格式", value: "Proof before polish", description: "先看情境、交付、成果與風險控制，再決定要不要深讀。" },
  { label: "轉換設計", value: "三路並存", description: "Quick Brief、Strategy Call、Email / NDA 同時存在，降低流失。" },
];

export const heroQuickSignals = [
  { label: "適合對象", value: "B2B / 科技 / 製造 / 知識型團隊" },
  { label: "重建內容", value: "品牌、頁面、證據、方案、轉換" },
  { label: "啟動方式", value: "Quick Brief / Strategy Call / NDA" },
];

export const heroFitSignals = [
  "舊站看起來完整，但高意圖訪客仍難以快速判斷 fit。",
  "能力很多，對外卻仍停留在抽象關鍵字與服務清單。",
  "案例像作品集，不像可支援提案、業務與採購的證據庫。",
  "需要一次把品牌、內容架構、UI、UX 與 contact path 重新定義。",
];

export const heroContactLadder = [
  {
    label: "Path 01",
    title: "Quick Brief",
    detail: "適合已知道痛點，想先拿首頁切口、案例方向與第一階段建議。",
    cta: "3 分鐘開始",
    href: "/#quick-brief",
  },
  {
    label: "Path 02",
    title: "Strategy Call",
    detail: "適合已有內部共識，需要一起對焦 buying blockers、sprint 範圍與時程。",
    cta: "看啟動方式",
    href: "/contact",
  },
  {
    label: "Path 03",
    title: "Email / NDA",
    detail: "適合涉及採購、敏感資料或法遵限制，想先低風險確認 fit。",
    cta: "先寄 Email",
    href: `mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi 專案討論 / NDA")}`,
  },
];

export const homepageContactProof = [
  "第一封回覆就先給建議切口、頁面優先序與建議 sprint。",
  "會直接指出目前網站最影響轉換、理解與信任的斷點。",
  "敏感專案可走 NDA 路徑，不必先公開完整內容。",
];

export const contactFastFacts = [
  { label: "First reply", value: "24h 內" },
  { label: "Strategy call", value: "30 分鐘" },
  { label: "Sprint draft", value: "3-5 個工作天" },
  { label: "Start paths", value: "Quick Brief / Call / NDA" },
];

export const homepageCompactCaseEvidence = [
  {
    label: "Homepage architecture",
    title: "把首頁做成 buying committee 也看得懂的 decision deck",
    evidence: "依序處理 fit、value、proof、delivery、risk 與 next step。",
  },
  {
    label: "Offer framing",
    title: "把 AI、流程與 DPP 能力翻成可提案、可採購的方案語言",
    evidence: "把角色、資料、交付、驗收與風險節點講清楚。",
  },
  {
    label: "Case evidence",
    title: "把案例從作品展示改成可掃讀、可引用的信任證據",
    evidence: "先給商業情境、範圍、成果訊號與適用對象。",
  },
];

export const heroActionSignals = [
  { step: "Step 1", metric: "3-5 分鐘", title: "送出 Quick Brief", detail: "留下公司現況、目標與最想重做的頁面或訊息。" },
  { step: "Step 2", metric: "24h", title: "收到重建起手式", detail: "先回覆建議 sitemap、推薦 sprint 與第一階段優先序。" },
  { step: "Step 3", metric: "30 分鐘", title: "對焦 strategy call", detail: "聚焦 buying blockers、內容缺口與決策角色。" },
  { step: "Step 4", metric: "Sprint-ready", title: "開始第一階段重建", detail: "從首頁、案例系統或 offer framing 先落地。" },
];

export const heroPreviews = [
  {
    id: "clarity",
    label: "Stripe / Ramp / Vercel 類型啟發",
    metric: "Commercial clarity",
    summary: "成熟 B2B 首頁會先講 outcome、適用對象、proof 與下一步，而不是先談自己是誰。",
    checklist: ["首屏先講商業價值", "證據前置", "CTA 至少雙軌", "內容可支援內部轉傳"],
  },
  {
    id: "structure",
    label: "Linear / Notion 類型啟發",
    metric: "Structured UX",
    summary: "複雜能力也能被快速掃讀，關鍵是清楚分層、穩定模組與內頁角色分工。",
    checklist: ["頁面任務清楚", "模組節奏穩定", "先掃再讀", "文字與 UI 一起服務理解"],
  },
  {
    id: "proof",
    label: "設計公司 / SaaS 案例啟發",
    metric: "Proof-led storytelling",
    summary: "案例要先交代商業背景、解法、輸出與成果，再展開美術與細節。",
    checklist: ["情境先行", "交付清楚", "結果可引用", "CTA 要接得上"],
  },
];

export const heroClarityChecklist = [
  { label: "Who", answer: "高複雜度 B2B、科技與知識型團隊", detail: "不是通用形象站需求，而是需要支撐真實商務對話與內部決策。" },
  { label: "What", answer: "重建可成交的網站與證據系統", detail: "不只換視覺或補文案，而是重做品牌、架構、案例與轉換。" },
  { label: "Next step", answer: "先從 Quick Brief 或 strategy call 開始", detail: "不必先備齊完整需求書，也能先拿到切入方向與優先序。", metric: "Low friction" },
];

export const caseSnapshots = [
  {
    id: "website-rebuild",
    label: "商用官網重建",
    context: "B2B website system",
    title: "把企業網站從資訊陳列頁，重做成 buyer 能快速 shortlist 的決策入口",
    summary: "核心不是頁面變漂亮，而是首頁、方案頁、案例頁與 contact flow 能否一起推動成交與提案。",
    metrics: [
      { label: "Challenge", value: "定位不夠聚焦", detail: "有流量也有能力，但高意圖訪客仍抓不到 fit 與差異" },
      { label: "Delivery", value: "Brand + IA + CTA", detail: "同步重做訊息架構、頁面角色、proof 模組與啟動機制" },
    ],
    highlights: ["重寫品牌主張", "重組 sitemap", "把首頁做成 decision deck"],
    href: "/work",
  },
  {
    id: "ai-workflow",
    label: "AI / Offer 重構",
    context: "Workflow commercialization",
    title: "把 AI 專案從技術展示，重構成可提案、可採購、可驗收的商業方案",
    summary: "不只講模型與功能，而是交代角色、資料、流程、風險與導入方式。",
    metrics: [
      { label: "Challenge", value: "能力太抽象", detail: "客戶知道你會 AI，卻不知道適不適合自己的場景" },
      { label: "Delivery", value: "Buyer-ready framing", detail: "讓主管、PM、採購都能快速抓到輪廓與風險" },
    ],
    highlights: ["定義角色與 SOP", "拆出導入路徑", "建立驗收與階段成果說法"],
    href: "/work",
  },
  {
    id: "dpp-trust",
    label: "DPP / Trust Experience",
    context: "Trust architecture",
    title: "把 traceability、透明資料與法遵需求整成可信、可理解、可展示的外部體驗",
    summary: "讓資料不只是被看見，而是真正降低理解門檻、信任門檻與採購疑慮。",
    metrics: [
      { label: "Challenge", value: "可信度門檻高", detail: "資料很多，但外部看不懂結構、意義與可驗證性" },
      { label: "Delivery", value: "Field blueprint + UX", detail: "從欄位設計到查找路徑，都能被說明、討論與驗收" },
    ],
    highlights: ["欄位藍圖", "查找與掃碼路徑", "內外部敘事拆分"],
    href: "/work",
  },
];

export const personaPlaybooks = [
  {
    id: "marketing",
    title: "品牌 / 行銷 / Growth",
    headline: "網站要先像能推進商機的成長資產，而不是只是一個完成版公司簡介。",
    challenge: "流量有了、素材有了，但訪客仍然無法快速理解為何值得談。",
    win: "把首頁主張、proof、案例與 CTA 排成更像 shortlist flow 的內容系統。",
    metric: { label: "優先處理", value: "訊息清晰度 + proof 密度" },
    checklist: ["重寫 hero 與 supporting proof", "建立 buyer fit 區塊", "把案例摘要前置"],
    ctaHref: "/contact",
    ctaLabel: "啟動官網重建討論",
    helperText: "適合網站看似完整，但詢問品質與轉換效率不穩的團隊。",
  },
  {
    id: "operations",
    title: "營運 / PM / 業務",
    headline: "需要讓服務、流程、交付方式與時程更容易被外部理解與內部對齊。",
    challenge: "外部只看見功能名詞，看不懂導入方式、責任分工與交付節點。",
    win: "把 solutions 頁與 contact flow 做成 buying guide，降低第一次溝通成本。",
    metric: { label: "優先處理", value: "方案結構 + 啟動節奏" },
    checklist: ["定義三條 solution tracks", "把 sprint 做成產品化起手式", "前置時程與回覆承諾"],
    ctaHref: "/contact",
    ctaLabel: "規劃 solution sprint",
    helperText: "適合案型複雜、跨部門利害關係人多的專案。",
  },
  {
    id: "trust",
    title: "永續 / 法遵 / 知識治理",
    headline: "需要把高內容密度與透明資料，整理成外部也看得懂的信任介面。",
    challenge: "內容很多，但目前站點沒有把資料、背景與價值翻成易理解路徑。",
    win: "把資訊架構、欄位藍圖與 evidence modules 整成成熟的查找與說服體驗。",
    metric: { label: "優先處理", value: "IA + Trust UX" },
    checklist: ["重做內容層級", "建立 proof modules", "設計外部理解路徑"],
    ctaHref: "/contact",
    ctaLabel: "討論 DPP / 知識平台",
    helperText: "適合透明資料、合規敘事與高內容密度網站。",
  },
];

export const caseOverviewStats = [
  { label: "Case format", value: "Context → Delivery → Proof → Next", detail: "不是只放截圖，而是讓案例能支撐 shortlist 與採購前判斷。" },
  { label: "Decision use", value: "Shortlist-ready", detail: "適合業務、提案、主管與 buying committee 快速轉傳。" },
  { label: "Proof style", value: "摘要先行", detail: "先講適用情境、解法與結果訊號，再展開細節。" },
];
