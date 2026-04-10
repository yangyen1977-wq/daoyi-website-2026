export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技以重新設計與重建思維，為 B2B、科技、製造與研究型團隊重做品牌網站、案例證據系統、AI / 資料流程敘事與 DPP 體驗。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "把複雜能力，重建成能被 shortlist 的成熟商用官網。",
  heroDescription:
    "不是在舊站上繼續補丁，而是重做品牌主張、頁面架構、案例敘事、轉換流程與手機體驗，讓網站更像一套可成交的商務介面。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "品牌定位" },
  { href: "/solutions", label: "方案架構" },
  { href: "/work", label: "案例證據" },
  { href: "/contact", label: "啟動專案" },
];

export const headerReassuranceSignals = [
  "重新設計與重建，不做舊站微調",
  "首頁先做 shortlist 判斷",
  "Quick Brief / Email / NDA 同時可開始",
];

export const solutions = [
  {
    title: "Website Rebuild System",
    description: "重做官網定位、首頁架構、案例證據與 contact flow，讓網站回到商務決策核心。",
  },
  {
    title: "AI / Data Commercial Narrative",
    description: "把 AI、資料、角色與 SOP 轉成主管、買方與合作方都看得懂的方案語言。",
  },
  {
    title: "Knowledge / DPP Experience",
    description: "把知識平台、透明資料與 DPP 體驗做成可展示、可採購、可延伸的成熟數位介面。",
  },
];

export const contactChannels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { label: "Location", value: siteConfig.location, href: siteConfig.url },
];

export const quickBriefAssistPoints = [
  "低摩擦起手，不用先寫完整需求書",
  "24h 內收到建議切入點與推薦 sprint",
  "敏感專案可直接切換 Email / NDA 路徑",
];

export const stats = [
  { value: "24h", label: "Response promise" },
  { value: "3 tracks", label: "Buying paths" },
  { value: "5 pages", label: "Rebuilt sitemap" },
  { value: "Proof-led", label: "Case structure" },
];

export const heroClients = [
  { name: "研究與典藏平台團隊", context: "Knowledge UX" },
  { name: "製造與品牌團隊", context: "DPP / Traceability" },
  { name: "科技與 SaaS 公司", context: "B2B Website" },
  { name: "跨部門流程專案", context: "AI / Workflow" },
];

export const heroProofs = [
  { label: "首屏任務", value: "5 秒", description: "先看懂適不適合、做過什麼、怎麼開始" },
  { label: "案例方式", value: "Proof-led", description: "先講情境、交付、結果，再展開細節" },
  { label: "聯絡設計", value: "3 路徑", description: "Quick Brief、Email、NDA 同時可見" },
];

export const heroQuickSignals = [
  { label: "適合案型", value: "B2B / 科技 / 製造 / 研究" },
  { label: "本次重建", value: "定位、結構、案例、轉換" },
  { label: "起手方式", value: "Quick Brief / Email / NDA" },
];

export const heroFitSignals = [
  "舊站看起來完整，但無法支撐高品質詢問、提案或 shortlist",
  "內部能力其實很強，對外卻說不清楚 AI、流程或資料價值",
  "案例很多，但還停留在作品集陳列，沒有形成信任證據",
  "需要一起處理品牌、資訊架構、UI/UX、案例與聯絡流程",
];

export const heroContactLadder = [
  {
    label: "Path 01",
    title: "Quick Brief",
    detail: "適合已知道方向，想先拿推薦 sprint 與下一步。",
    cta: "3 欄開始",
    href: "/#quick-brief",
  },
  {
    label: "Path 02",
    title: "Email / NDA",
    detail: "適合牽涉採購、敏感資料或需要先保密的專案。",
    cta: "先寄 Email",
    href: `mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi 專案討論 / NDA")}`,
  },
  {
    label: "Path 03",
    title: "Sprint fit",
    detail: "還不確定做多大時，先從首頁、案例或 solution framing sprint 開始。",
    cta: "看啟動方式",
    href: "/contact",
  },
];

export const homepageContactProof = [
  "先回覆建議切入點，不只回收到",
  "會告訴你適合先跑哪個 sprint",
  "敏感案可直接改走 NDA 路徑",
];

export const contactFastFacts = [
  { label: "First reply", value: "24h 內" },
  { label: "Kickoff", value: "30 分鐘對焦" },
  { label: "Decision output", value: "推薦切口 + 待補資料" },
];

export const homepageCompactCaseEvidence = [
  {
    label: "Website rebuild",
    title: "把首頁從介紹頁改成 decision deck",
    evidence: "先講 ICP、結果、證據與 next step。",
  },
  {
    label: "AI narrative",
    title: "把技術能力翻成可採購的方案語言",
    evidence: "把流程、欄位與驗收節點對外說清楚。",
  },
  {
    label: "DPP experience",
    title: "把合規資料做成能理解的數位體驗",
    evidence: "從欄位藍圖到掃碼介面一次整理。",
  },
];

export const heroActionSignals = [
  { step: "Step 1", metric: "5 分鐘", title: "送出 Quick Brief", detail: "先留下公司、現況與這次最想重建的部分。" },
  { step: "Step 2", metric: "24h", title: "收到建議切入點", detail: "直接回你建議先做首頁、案例或 solution framing。" },
  { step: "Step 3", metric: "30 分鐘", title: "對焦會議", detail: "聚焦目標頁面、證據與轉換阻力。" },
];

export const heroPreviews = [
  {
    id: "rebuild",
    label: "Website rebuild",
    metric: "Decision flow",
    summary: "重做 sitemap、首頁訊息優先序、案例前置與 CTA 節奏。",
    checklist: ["首頁 decision deck", "內頁分工", "Proof module", "Contact path"],
  },
  {
    id: "ai",
    label: "AI / Data",
    metric: "Commercial framing",
    summary: "把模型、欄位、流程與 SOP 轉成買方聽得懂的交付。",
    checklist: ["角色流程", "欄位設計", "MVP 節點", "驗收說法"],
  },
  {
    id: "dpp",
    label: "DPP / Knowledge",
    metric: "Trustable UX",
    summary: "把資料透明、知識檢索與合規敘事整成成熟體驗。",
    checklist: ["資訊架構", "查找路徑", "欄位藍圖", "外部展示"],
  },
];

export const heroClarityChecklist = [
  { label: "Who", answer: "這站是為高複雜度 B2B 專案而設計", detail: "不是通用型形象站。" },
  { label: "Why now", answer: "因為舊站無法支撐下一階段成交", detail: "要先修正訊息、證據與入口。" },
  { label: "What next", answer: "可以直接用 Quick Brief 開始", detail: "不必先準備完整需求書。", metric: "Low friction" },
];

export const caseSnapshots = [
  {
    id: "research",
    label: "研究平台",
    context: "Knowledge UX",
    title: "把複雜內容重構成可檢索、可理解、可持續擴充的平台",
    summary: "重點不是頁面數，而是資訊架構與查找路徑是否支撐使用任務。",
    metrics: [
      { label: "Challenge", value: "內容密度高", detail: "先釐清知識分類與查找場景" },
      { label: "Delivery", value: "IA + narrative", detail: "讓平台角色與價值能被快速理解" },
    ],
    highlights: ["重整內容階層", "建立搜尋 / 瀏覽雙路徑", "把案例寫成問題解法"],
    href: "/work",
  },
  {
    id: "ai",
    label: "AI 流程",
    context: "Workflow design",
    title: "把 AI 能力從炫技，改寫成真正可採購的流程方案",
    summary: "讓主管與執行團隊都知道系統怎麼接、怎麼驗收。",
    metrics: [
      { label: "Challenge", value: "難以理解", detail: "外部聽得懂功能，卻聽不懂導入價值" },
      { label: "Delivery", value: "Buyer-ready framing", detail: "角色、資料與節點都能對外說明" },
    ],
    highlights: ["整理 SOP 節點", "定義資料欄位", "把結果講成人話"],
    href: "/work",
  },
  {
    id: "dpp",
    label: "DPP 體驗",
    context: "Compliance UX",
    title: "把產品履歷與透明資料做成可信、可理解的介面",
    summary: "不只談法規，而是把資料展示、QR 體驗與供應鏈語境整合。",
    metrics: [
      { label: "Challenge", value: "信任門檻高", detail: "先建立資料可信與理解門檻" },
      { label: "Delivery", value: "Field blueprint", detail: "讓第一版可討論、可延伸" },
    ],
    highlights: ["欄位藍圖", "掃碼場景", "內外部說明頁"],
    href: "/work",
  },
];

export const personaPlaybooks = [
  {
    id: "brand",
    title: "Brand / Marketing",
    headline: "想把舊站流量變成更高品質詢問",
    challenge: "現在首頁像介紹頁，不像決策頁。",
    win: "先重做 hero、proof 與 CTA 節奏，讓訪客更快 shortlist。",
    metric: { label: "First step", value: "Homepage sprint" },
    checklist: ["價值主張收斂", "案例前置", "CTA 減摩擦"],
    ctaHref: "/contact",
    ctaLabel: "安排首頁重建討論",
    helperText: "適合已有流量、但轉換與說服力不足的團隊",
  },
  {
    id: "ops",
    title: "Operations / IT",
    headline: "想把 AI / 流程能力說到能被採納",
    challenge: "外部聽得懂功能，卻聽不懂導入價值。",
    win: "把資料、流程與驗收節點翻成商業語言。",
    metric: { label: "First step", value: "Solution framing sprint" },
    checklist: ["角色流程", "欄位說法", "導入節點"],
    ctaHref: "/contact",
    ctaLabel: "開始流程敘事重建",
    helperText: "適合有技術能力，但網站與提案說不清楚的團隊",
  },
  {
    id: "esg",
    title: "ESG / Compliance",
    headline: "想把 DPP / traceability 做成能理解的第一版",
    challenge: "大家知道有壓力，但還沒有可展示的共識介面。",
    win: "先做欄位藍圖與體驗框架，讓專案更容易啟動。",
    metric: { label: "First step", value: "DPP blueprint sprint" },
    checklist: ["欄位定義", "掃碼體驗", "審查輸出"],
    ctaHref: "/contact",
    ctaLabel: "討論 DPP 體驗",
    helperText: "適合準備合規、透明資料或供應鏈溝通的案型",
  },
];

export const caseOverviewStats = [
  { label: "Case framing", value: "Challenge → Delivery → Outcome", detail: "案例先講問題、怎麼做、看到什麼結果。" },
  { label: "Homepage role", value: "Shortlist tool", detail: "案例摘要要前置到首頁，不埋在作品集深處。" },
  { label: "Trust style", value: "Proof-led", detail: "即使 NDA 案，也能講清楚交付方法與決策價值。" },
];
