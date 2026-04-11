export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技協助 B2B、科技、製造與研究型團隊，重建品牌官網、案例證據系統、AI / 資料流程敘事與 DPP 體驗，讓網站變成真正可支撐 shortlist、提案與採購判斷的商務介面。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "把複雜能力, 重建成買方看得懂也願意往下談的商務網站。",
  heroDescription:
    "不是舊站優化, 而是重新定義品牌主張、頁面分工、案例證據、轉換節奏與啟動方式, 讓網站能同時服務行銷、業務、提案與採購判斷。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "品牌策略" },
  { href: "/solutions", label: "解決方案" },
  { href: "/work", label: "案例系統" },
  { href: "/contact", label: "啟動合作" },
];

export const headerReassuranceSignals = [
  "從品牌到轉換整體重建",
  "先讓買方完成 fit 判斷",
  "Quick Brief / Email / NDA 三路啟動",
];

export const solutions = [
  {
    title: "Commercial Website Rebuild",
    description: "重做定位、首頁、內頁、案例證據與 CTA 流程, 讓官網真正支撐高品質詢問與商務判斷。",
  },
  {
    title: "AI / Workflow Framing",
    description: "把 AI、資料欄位、角色分工與 SOP 整成買方、主管與採購能理解的導入方案。",
  },
  {
    title: "Knowledge / DPP Experience",
    description: "把知識平台、透明資料、產品履歷與 DPP 需求整成可信、可查找、可延伸的數位體驗。",
  },
];

export const contactChannels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { label: "Location", value: siteConfig.location, href: siteConfig.url },
];

export const quickBriefAssistPoints = [
  "先用低摩擦方式判斷 fit, 不用先寫完整需求書",
  "24h 內回覆建議切入頁面、推薦 sprint 與待補資料",
  "敏感專案可直接切換 Email / NDA 路徑",
];

export const stats = [
  { value: "24h", label: "First response" },
  { value: "4-page", label: "Core buying flow" },
  { value: "3 tracks", label: "Decision paths" },
  { value: "Proof-led", label: "Case system" },
];

export const heroClients = [
  { name: "B2B 科技團隊", context: "Website / GTM" },
  { name: "製造品牌", context: "DPP / Traceability" },
  { name: "研究與知識平台", context: "IA / Search" },
  { name: "流程導向專案", context: "AI / Workflow" },
];

export const heroProofs = [
  { label: "首屏任務", value: "5 秒", description: "先讓訪客知道適不適合、可信不可信、怎麼開始" },
  { label: "案例格式", value: "Decision-first", description: "先看情境、交付、結果訊號, 再看細節" },
  { label: "聯絡設計", value: "3 路徑", description: "Quick Brief、Email、NDA 同時前置" },
];

export const heroQuickSignals = [
  { label: "適合對象", value: "B2B / 科技 / 製造 / 研究" },
  { label: "重建內容", value: "定位、結構、證據、轉換" },
  { label: "啟動方式", value: "Quick Brief / Email / NDA" },
];

export const heroFitSignals = [
  "舊站資訊不少, 但無法支撐 shortlist、提案或高品質詢問",
  "團隊有 AI、流程或技術能力, 對外卻還講得太抽象",
  "案例很多, 但還像作品集, 沒有形成採購前可掃讀的證據",
  "需要把品牌、內容、資訊架構、UI/UX 與 contact path 一起重做",
];

export const heroContactLadder = [
  {
    label: "Path 01",
    title: "Quick Brief",
    detail: "適合已知道方向, 想先拿建議切口、推薦 sprint 與下一步。",
    cta: "3 欄開始",
    href: "/#quick-brief",
  },
  {
    label: "Path 02",
    title: "Email / NDA",
    detail: "適合牽涉採購、敏感資料、法遵或內部文件的專案。",
    cta: "先寄 Email",
    href: `mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi 專案討論 / NDA")}`,
  },
  {
    label: "Path 03",
    title: "Sprint Fit",
    detail: "如果不確定先做多大, 可先從首頁、案例系統或 AI framing sprint 開始。",
    cta: "看啟動方式",
    href: "/contact",
  },
];

export const homepageContactProof = [
  "第一封回覆就會給具體下一步",
  "會說明建議先做哪個頁面或 sprint",
  "敏感案可改走 NDA, 不必重填一堆資料",
];

export const contactFastFacts = [
  { label: "First reply", value: "24h 內" },
  { label: "Fit call", value: "30 分鐘" },
  { label: "Output", value: "建議切口 + 待補資料" },
];

export const homepageCompactCaseEvidence = [
  {
    label: "Decision deck",
    title: "把首頁做成高意圖買方的 shortlist 入口",
    evidence: "先處理 who、value、proof、risk 與 next step。",
  },
  {
    label: "Buyer-ready AI",
    title: "把 AI / 流程能力翻成可採購的說法",
    evidence: "把角色、欄位、交付與驗收節點講清楚。",
  },
  {
    label: "Trustable data UX",
    title: "把 DPP / traceability 做成可信體驗",
    evidence: "從欄位藍圖到掃碼頁面都能對外說服。",
  },
];

export const heroActionSignals = [
  { step: "Step 1", metric: "5 分鐘", title: "送出 Quick Brief", detail: "留下公司、現況與最想重建的部分。" },
  { step: "Step 2", metric: "24h", title: "收到建議起手式", detail: "先回覆建議頁面、推薦 sprint 與待補資料。" },
  { step: "Step 3", metric: "30 分鐘", title: "對焦會議", detail: "聚焦 buying blockers、內容缺口與第一階段產出。" },
];

export const heroPreviews = [
  {
    id: "rebuild",
    label: "Website rebuild",
    metric: "Commercial clarity",
    summary: "重做首頁 decision flow、內頁分工、案例格式與 CTA 節奏。",
    checklist: ["品牌主張", "頁面架構", "證據模組", "轉換流程"],
  },
  {
    id: "ai",
    label: "AI / Workflow",
    metric: "Buyer-ready framing",
    summary: "把模型、資料、角色與 SOP 轉成主管也聽得懂的交付。",
    checklist: ["角色流程", "資料欄位", "MVP 節點", "驗收說法"],
  },
  {
    id: "dpp",
    label: "DPP / Knowledge",
    metric: "Trustable UX",
    summary: "把資訊透明、知識查找與合規需求整成成熟介面。",
    checklist: ["資訊架構", "查找路徑", "欄位藍圖", "外部展示"],
  },
];

export const heroClarityChecklist = [
  { label: "Who", answer: "高複雜度 B2B 團隊", detail: "不是通用型形象站需求。" },
  { label: "What", answer: "重建可成交的網站與證據系統", detail: "不只是換版或補文案。" },
  { label: "Next step", answer: "可直接 Quick Brief 啟動", detail: "不必先備好完整需求書。", metric: "Low friction" },
];

export const caseSnapshots = [
  {
    id: "research",
    label: "研究平台",
    context: "Knowledge UX",
    title: "把高內容密度網站重構成可查找、可引用、可持續擴充的平台",
    summary: "核心不是頁數, 而是資訊架構是否能支撐研究任務、內容理解與後續治理。",
    metrics: [
      { label: "Challenge", value: "內容密度高", detail: "先釐清分類、任務與查找路徑" },
      { label: "Delivery", value: "IA + proof", detail: "讓平台價值能被快速理解與採信" },
    ],
    highlights: ["重整內容階層", "建立搜尋 / 瀏覽雙路徑", "讓案例與研究輸出更好引用"],
    href: "/work",
  },
  {
    id: "ai",
    label: "AI 流程",
    context: "Workflow design",
    title: "把 AI 專案從技術展示, 改寫成能提案、能採購、能驗收的流程方案",
    summary: "不是只說用了什麼模型, 而是讓主管知道導入位置、資料欄位、風險與階段成果。",
    metrics: [
      { label: "Challenge", value: "價值太抽象", detail: "買方看懂功能, 卻看不懂商務意義" },
      { label: "Delivery", value: "Commercial framing", detail: "把角色、資料與驗收點對外說清楚" },
    ],
    highlights: ["整理 SOP 節點", "定義資料欄位", "讓價值主張更接近採購語言"],
    href: "/work",
  },
  {
    id: "dpp",
    label: "DPP 體驗",
    context: "Compliance UX",
    title: "把產品履歷與透明資料做成可信、可理解、可延伸的對外體驗",
    summary: "讓合規與 traceability 不只停在內部欄位, 而是變成外部也看得懂的數位介面。",
    metrics: [
      { label: "Challenge", value: "信任門檻高", detail: "先建立資料可信度與理解門檻" },
      { label: "Delivery", value: "Field blueprint", detail: "第一版就可討論、可驗證、可延伸" },
    ],
    highlights: ["欄位藍圖", "掃碼情境", "內外部說明頁"],
    href: "/work",
  },
];

export const personaPlaybooks = [
  {
    id: "marketing",
    title: "品牌 / 行銷",
    headline: "需要讓網站更像 business case, 而不是公司簡介。",
    challenge: "流量有了, 但訪客看完還是不知道為何值得談。",
    win: "把首頁主張、案例證據與 CTA 排成更能支撐詢問的決策流。",
    metric: { label: "優先處理", value: "訊息清晰度 + 證據密度" },
    checklist: ["重寫 hero 與 proof bar", "前置 buyer fit", "案例先看摘要再深讀"],
    ctaHref: "/contact",
    ctaLabel: "啟動官網重建討論",
    helperText: "適合網站看起來完整, 但詢問品質不穩的團隊。",
  },
  {
    id: "operations",
    title: "營運 / 專案",
    headline: "需要讓服務、流程與交付說法更好理解。",
    challenge: "外部常常只看見功能, 看不懂導入範圍、節點與交付方式。",
    win: "把解決方案頁與啟動頁做成 buying guide, 降低第一次溝通成本。",
    metric: { label: "優先處理", value: "方案架構 + 啟動流程" },
    checklist: ["定義三條 solution tracks", "把 sprint 做成起手式", "前置回覆承諾"],
    ctaHref: "/contact",
    ctaLabel: "規劃 solution sprint",
    helperText: "適合案型複雜、跨部門利害關係人多的專案。",
  },
  {
    id: "sustainability",
    title: "永續 / 法遵 / 研發",
    headline: "需要讓 DPP、資料透明或研究輸出被外部理解與採信。",
    challenge: "內容很多, 但目前站點無法把資料、背景與價值說清楚。",
    win: "把資訊架構、欄位藍圖與外部展示方式整成可信介面。",
    metric: { label: "優先處理", value: "IA + Traceability UX" },
    checklist: ["重做資料展示邏輯", "建立 evidence modules", "設計對外理解路徑"],
    ctaHref: "/contact",
    ctaLabel: "討論 DPP / 知識平台",
    helperText: "適合透明資料、合規敘事與高內容密度網站。",
  },
];

export const caseOverviewStats = [
  { label: "Case format", value: "Challenge → Delivery → Outcome", detail: "不再只放漂亮截圖或零碎敘述" },
  { label: "Decision use", value: "Shortlist-ready", detail: "適合業務、提案與採購前的快速判斷" },
  { label: "Proof style", value: "摘要先行", detail: "前段先給題型、交付與結果訊號" },
];
