export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技協助 B2B、科技、製造與研究型團隊，從品牌主張、資訊架構、案例證據、AI / 資料敘事到轉換路徑，重建成能支撐 shortlist、提案、採購與業務對話的成熟商用官網。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "把複雜能力重建成買方願意 shortlist、內部願意拿去提案的商務網站。",
  heroDescription:
    "這不是舊站優化，而是重新定義品牌主張、頁面分工、案例證據、方案說法與 contact flow，讓網站同時服務行銷、業務、提案與採購判斷。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "品牌系統" },
  { href: "/solutions", label: "商用方案" },
  { href: "/work", label: "案例證據" },
  { href: "/contact", label: "啟動合作" },
];

export const headerReassuranceSignals = [
  "重新設計與重建，不是舊站微調",
  "首頁先服務 shortlist 與 buying committee",
  "Quick Brief / Strategy Call / NDA 三路啟動",
];

export const solutions = [
  {
    title: "Commercial Website Rebuild",
    description: "從品牌主張、sitemap、首頁 decision flow、內頁模組到 CTA 機制整體重做，讓網站變成真正可成交的商務入口。",
  },
  {
    title: "AI / Workflow Commercialization",
    description: "把 AI、資料、角色分工與 SOP，翻成主管、採購與跨部門都能理解的導入說法與交付藍圖。",
  },
  {
    title: "Knowledge / DPP Trust Experience",
    description: "把知識平台、透明資料、traceability 與 DPP 需求做成可信、可查找、可展示、可驗收的對外體驗。",
  },
];

export const contactChannels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { label: "Location", value: siteConfig.location, href: siteConfig.url },
];

export const quickBriefAssistPoints = [
  "先判斷 fit，不用先寫完整 RFP",
  "24h 內回覆建議切口、推薦 sprint 與必要資料",
  "若涉及敏感內容，可直接切 Email / NDA 路徑",
];

export const stats = [
  { value: "5s", label: "Fit clarity" },
  { value: "4 pages", label: "Buying flow" },
  { value: "3 paths", label: "Start modes" },
  { value: "Proof-led", label: "Case system" },
];

export const heroClients = [
  { name: "B2B SaaS / 科技團隊", context: "需要更像 GTM asset，而不是公司簡介" },
  { name: "製造 / 出口品牌", context: "需要把 traceability 與 DPP 說清楚" },
  { name: "研究 / 知識平台", context: "需要處理高內容密度與查找體驗" },
  { name: "流程導向專案型團隊", context: "需要把 AI / Workflow 講成人能決策的方案" },
];

export const heroProofs = [
  { label: "Hero 任務", value: "5 秒內判斷 fit", description: "先回答是不是你的案子、值不值得談、怎麼開始。" },
  { label: "案例格式", value: "Decision-first", description: "先看情境、交付、結果訊號，再決定要不要深讀。" },
  { label: "轉換設計", value: "3 路徑並存", description: "Quick Brief、Strategy Call、Email / NDA 同時前置。" },
];

export const heroQuickSignals = [
  { label: "適合對象", value: "B2B / 科技 / 製造 / 研究型團隊" },
  { label: "重建內容", value: "品牌、頁面、證據、方案、CTA" },
  { label: "啟動方式", value: "Quick Brief / Strategy Call / NDA" },
];

export const heroFitSignals = [
  "舊站資訊很多，但無法讓高意圖訪客快速完成 fit 判斷",
  "服務與技術能力其實不弱，對外卻仍停留在抽象名詞",
  "案例像作品集，不像業務、提案與採購可直接使用的證據庫",
  "需要連品牌、內容架構、UI、UX 與 contact path 一起重建",
];

export const heroContactLadder = [
  {
    label: "Path 01",
    title: "Quick Brief",
    detail: "適合已知道痛點，想先拿頁面切口、案例策略與下一步建議。",
    cta: "3 分鐘開始",
    href: "/#quick-brief",
  },
  {
    label: "Path 02",
    title: "Strategy Call",
    detail: "適合已有內部共識，需要一起對焦網站角色、sprint 範圍與 buying blockers。",
    cta: "看合作方式",
    href: "/contact",
  },
  {
    label: "Path 03",
    title: "Email / NDA",
    detail: "適合牽涉採購、法遵、敏感資料或需先交換保密資訊的專案。",
    cta: "先寄 Email",
    href: `mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi 專案討論 / NDA")}`,
  },
];

export const homepageContactProof = [
  "第一封回覆先給建議頁面與建議 sprint，不只回一句收到",
  "會直接指出目前網站最影響轉換與信任的斷點",
  "敏感案可走 NDA，不必先公開講完整內部內容",
];

export const contactFastFacts = [
  { label: "First reply", value: "24h 內" },
  { label: "Discovery call", value: "30 分鐘" },
  { label: "Sprint proposal", value: "3-5 個工作天" },
  { label: "Start paths", value: "Quick Brief / Call / NDA" },
];

export const homepageCompactCaseEvidence = [
  {
    label: "Homepage architecture",
    title: "把首頁做成 buying committee 都看得懂的 decision deck",
    evidence: "依序處理 fit、value、proof、delivery、risk 與 next step。",
  },
  {
    label: "Solution framing",
    title: "把 AI / 流程 / DPP 能力翻成可提案、可採購的方案敘事",
    evidence: "把角色、資料、交付、驗收與風險節點講清楚。",
  },
  {
    label: "Case evidence system",
    title: "把案例從作品展示改成可掃讀的信任證據",
    evidence: "先給情境、關鍵模組、成果訊號與適用對象。",
  },
];

export const heroActionSignals = [
  { step: "Step 1", metric: "3-5 分鐘", title: "送出 Quick Brief", detail: "留下公司現況、目標與你最想重建的頁面或訊息。" },
  { step: "Step 2", metric: "24h", title: "收到重建起手式", detail: "先回覆建議 sitemap、推薦 sprint 與第一階段優先順序。" },
  { step: "Step 3", metric: "30 分鐘", title: "對焦 strategy call", detail: "聚焦 buying blockers、內容缺口與決策角色。" },
  { step: "Step 4", metric: "Sprint-ready", title: "開始第一階段重建", detail: "從首頁、案例系統或 solution framing 先落地。" },
];

export const heroPreviews = [
  {
    id: "clarity",
    label: "Stripe / Ramp / Vercel 類型啟發",
    metric: "Commercial clarity",
    summary: "成熟 B2B 首頁會先回答價值、適用對象、風險與下一步，而不是先堆公司介紹。",
    checklist: ["首屏先講 outcome", "證據模組前置", "CTA 不只一個", "內容能支援內部轉傳"],
  },
  {
    id: "structure",
    label: "Linear / Notion 類型啟發",
    metric: "Structured UX",
    summary: "資訊架構清楚、內容分層明確，讓複雜能力也能被快速掃讀與理解。",
    checklist: ["清楚頁面角色", "模組節奏穩定", "內頁不只是補充", "內容能先掃後讀"],
  },
  {
    id: "proof",
    label: "設計公司 / SaaS 案例啟發",
    metric: "Proof-led storytelling",
    summary: "案例會先交代商業情境、交付範圍與成果訊號，再展開設計細節。",
    checklist: ["情境先行", "交付清楚", "結果可引用", "CTA 接得上"],
  },
];

export const heroClarityChecklist = [
  { label: "Who", answer: "高複雜度 B2B 與科技團隊", detail: "不是通用型形象站需求，而是需要支撐真實商務對話。" },
  { label: "What", answer: "重建可成交的網站與證據系統", detail: "不只換視覺或補文案，而是重做品牌、架構、案例與轉換。" },
  { label: "Next step", answer: "從 Quick Brief 或 strategy call 開始", detail: "不必先備好完整需求書，也能先拿到建議切口。", metric: "Low friction" },
];

export const caseSnapshots = [
  {
    id: "website-rebuild",
    label: "商用官網重建",
    context: "B2B website system",
    title: "把公司網站從資訊陳列，重做成買方能快速 shortlist 的商務入口",
    summary: "核心不是頁面變漂亮，而是首頁、方案頁、案例頁與 contact flow 能否一起支撐內外部決策。",
    metrics: [
      { label: "Challenge", value: "價值不夠聚焦", detail: "流量來了，但高意圖訪客仍抓不到 fit 與差異" },
      { label: "Delivery", value: "Brand + IA + CTA", detail: "同步重做訊息架構、頁面角色與啟動機制" },
    ],
    highlights: ["重寫品牌主張", "重組 sitemap", "將首頁做成 decision deck"],
    href: "/work",
  },
  {
    id: "ai-workflow",
    label: "AI / 流程商業化",
    context: "Workflow commercialization",
    title: "把 AI 專案從技術展示，重構成能提案、能採購、能驗收的方案頁",
    summary: "不只講模型與功能，而是交代角色、資料、風險、輸出與導入路徑。",
    metrics: [
      { label: "Challenge", value: "能力太抽象", detail: "買方知道你會 AI，卻不知道適不適合自己" },
      { label: "Delivery", value: "Buyer-ready framing", detail: "讓主管、採購、PM 都能快速抓到專案輪廓" },
    ],
    highlights: ["定義角色與 SOP", "整理資料欄位", "建立驗收與階段成果說法"],
    href: "/work",
  },
  {
    id: "dpp-trust",
    label: "DPP / Traceability",
    context: "Trust experience",
    title: "把履歷、透明資料與法遵需求整成可信、可理解、可展示的數位體驗",
    summary: "讓對外頁面不只顯示資料，而是真正降低理解門檻與信任門檻。",
    metrics: [
      { label: "Challenge", value: "可信度門檻高", detail: "資料很多，但外部看不懂結構與意義" },
      { label: "Delivery", value: "Field blueprint + UX", detail: "從欄位到查找路徑都能被討論與驗收" },
    ],
    highlights: ["欄位藍圖", "掃碼與查找路徑", "內外部敘事拆分"],
    href: "/work",
  },
];

export const personaPlaybooks = [
  {
    id: "marketing",
    title: "品牌 / 行銷 / Growth",
    headline: "網站要先像一個能幫忙成交的 asset，而不是只是看起來完整。",
    challenge: "流量有了、素材有了，但訪客還是無法快速理解為何值得談。",
    win: "把首頁主張、proof、案例與 CTA 排成更像 shortlist flow 的內容系統。",
    metric: { label: "優先處理", value: "訊息清晰度 + proof 密度" },
    checklist: ["重寫 hero 與 proof", "建立 buyer fit 區塊", "案例摘要前置"],
    ctaHref: "/contact",
    ctaLabel: "啟動官網重建討論",
    helperText: "適合網站看起來完整，但詢問品質與轉換效率不穩的團隊。",
  },
  {
    id: "operations",
    title: "營運 / PM / 業務",
    headline: "需要讓服務、流程、交付方式與時程更容易被外部理解。",
    challenge: "外部只看見功能與名詞，看不懂導入方式、責任分工與交付節點。",
    win: "把 solution 頁與 contact flow 做成 buying guide，降低第一次溝通成本。",
    metric: { label: "優先處理", value: "方案結構 + 啟動節奏" },
    checklist: ["定義三條 solution tracks", "把 sprint 做成產品化起手式", "前置回覆與時程承諾"],
    ctaHref: "/contact",
    ctaLabel: "規劃 solution sprint",
    helperText: "適合案型複雜、跨部門利害關係人多的專案。",
  },
  {
    id: "trust",
    title: "永續 / 法遵 / 研究 / 知識管理",
    headline: "需要把高內容密度與透明資料，整理成外部也看得懂的信任介面。",
    challenge: "內容很多，但目前站點沒有把資料、背景與價值翻成易懂路徑。",
    win: "把資訊架構、欄位藍圖與 evidence modules 整成成熟的查找與說服體驗。",
    metric: { label: "優先處理", value: "IA + Trust UX" },
    checklist: ["重做內容層級", "建立 proof modules", "設計外部理解路徑"],
    ctaHref: "/contact",
    ctaLabel: "討論 DPP / 知識平台",
    helperText: "適合透明資料、合規敘事與高內容密度網站。",
  },
];

export const caseOverviewStats = [
  { label: "Case format", value: "Context → Delivery → Proof → Next", detail: "不是只放截圖，而是讓案例能支撐採購前判斷。" },
  { label: "Decision use", value: "Shortlist-ready", detail: "適合業務、提案、主管與 buying committee 快速轉傳。" },
  { label: "Proof style", value: "摘要先行", detail: "先講適用情境、解法與訊號，再展開細節。" },
];
