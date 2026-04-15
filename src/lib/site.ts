export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技專注為 B2B、科技、製造與高知識密度團隊，重建真正能支撐詢價、shortlist、提案與採購對話的 revenue-grade 官網。從品牌主張、頁面架構、案例證據到轉換節奏，整成一套更成熟的商務前台。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "把複雜能力重做成 buyer 看得懂、主管願意轉傳、業務拿得去談的 revenue-grade 官網。",
  heroDescription:
    "我們不是延長舊站壽命，而是從定位、資訊架構、案例證據、方案包裝與 CTA 梯度整體重建，讓網站從公司簡介升級成商務決策介面。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "適合對象" },
  { href: "/solutions", label: "重建路徑" },
  { href: "/work", label: "案例系統" },
  { href: "/contact", label: "啟動方式" },
];

export const headerReassuranceSignals = [
  "不是舊站優化，而是重新設計與重建",
  "首頁、方案、案例、Contact 各自負責不同決策任務",
  "Quick Brief / Strategy Call / NDA 三層低摩擦啟動",
];

export const solutions = [
  {
    title: "Website Rebuild System",
    description: "從品牌主張、首頁架構、內頁角色、案例證據到 CTA 節奏，重做成能支撐高單價 B2B 對話的商用官網。",
  },
  {
    title: "Offer / Capability Framing",
    description: "把 AI、自動化、資料流程、顧問能力或複雜服務，重寫成主管、業務、採購都看得懂的方案敘事。",
  },
  {
    title: "Trust / Evidence Experience",
    description: "把案例、驗證、透明資料、DPP 或知識內容整理成可信、可引用、可轉傳的外部證據系統。",
  },
];

export const contactChannels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { label: "Location", value: siteConfig.location, href: siteConfig.url },
];

export const quickBriefAssistPoints = [
  "先回一版首頁切口、頁面優先序與建議 sprint，不是制式收件回覆",
  "會直接指出目前最該先重做的是定位、案例、方案，還是 CTA",
  "敏感專案可切 Email / NDA 路徑，先確認 fit 與合作邊界",
];

export const stats = [
  { value: "5 秒", label: "Buyer clarity" },
  { value: "4 頁", label: "Decision journey" },
  { value: "3 路", label: "Start modes" },
  { value: "Proof-led", label: "Case system" },
];

export const heroClients = [
  { name: "B2B SaaS / 平台型公司", context: "需要把產品價值、導入方式與差異，講得更像成熟商務方案，而不是功能總覽。" },
  { name: "製造 / 出口 / 工業品牌", context: "需要把技術、供應鏈、驗證能力與可信度，整理成國際買方看得懂的說服路徑。" },
  { name: "高單價專業服務團隊", context: "需要把抽象能力翻成決策者、採購與合作窗口都能快速判斷的商業語言。" },
  { name: "研究 / 協會 / 知識平台", context: "需要在高內容密度下仍維持清晰、權威、好查找與可引用的外部體驗。" },
];

export const heroProofs = [
  { label: "Positioning", value: "Outcome before intro", description: "先講你替誰解什麼高價值問題，而不是先介紹自己。" },
  { label: "Evidence", value: "Proof before portfolio", description: "案例先說商業情境、交付範圍與成果訊號，再談畫面。" },
  { label: "Conversion", value: "Low-friction ladder", description: "讓不同成熟度、不同風險承受度的買方都找得到下一步。" },
];

export const heroQuickSignals = [
  { label: "適合客群", value: "B2B / 科技 / 製造 / 高知識密度團隊" },
  { label: "重建範圍", value: "品牌、頁面、案例、方案、轉換系統" },
  { label: "啟動方式", value: "Quick Brief / Strategy Call / NDA" },
];

export const heroFitSignals = [
  "能力很多，但網站仍無法讓陌生買方在 10 秒內理解為何值得談。",
  "舊站更像資訊倉庫，而不是能幫業務推進 shortlist 的商務前台。",
  "案例有內容，卻還不足以被主管、業務或採購直接轉傳引用。",
  "真正需要的不是再修首頁，而是重定義整個 buying journey。",
];

export const heroContactLadder = [
  {
    label: "Path 01",
    title: "Quick Brief",
    detail: "適合已知道方向，想先拿到首頁切口、頁面優先序與第一輪重建建議。",
    cta: "3 分鐘開始",
    href: "/#quick-brief",
  },
  {
    label: "Path 02",
    title: "Strategy Call",
    detail: "適合已有內部共識，需要一起對焦 buying blockers、頁面角色與 sprint 邊界。",
    cta: "看啟動方式",
    href: "/contact",
  },
  {
    label: "Path 03",
    title: "Email / NDA",
    detail: "適合涉及採購、法遵或敏感資料，想先低風險確認 fit 與合作方式。",
    cta: "先寄 Email",
    href: `mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi 專案討論 / NDA")}`,
  },
];

export const homepageContactProof = [
  "第一次回覆就會先指出網站最該優先重做的頁面與訊息斷點。",
  "會建議先從首頁、方案頁、案例頁，或 trust content 哪一塊先切。",
  "若專案敏感，可直接切 NDA 流程，不必先公開全部背景。",
];

export const contactFastFacts = [
  { label: "First response", value: "24h 內" },
  { label: "Working session", value: "30-45 分鐘" },
  { label: "First sprint", value: "3-7 天" },
  { label: "Start paths", value: "Quick Brief / Call / NDA" },
];

export const homepageCompactCaseEvidence = [
  {
    label: "Commercial clarity",
    title: "一句主張就先把 buyer、問題、價值與差異對齊",
    evidence: "借鏡 Stripe、Ramp、Webflow enterprise 類型首頁，先講 business outcome 與適合對象，不先講公司背景。",
  },
  {
    label: "Decision architecture",
    title: "每一頁各自負責一個決策問題，而不是把所有內容平均分散",
    evidence: "首頁處理 fit 與 proof，方案頁處理切入方式，案例頁處理證據，Contact 頁處理啟動阻力。",
  },
  {
    label: "Transferable proof",
    title: "案例改寫成能被主管、業務與採購直接引用的 evidence assets",
    evidence: "先說情境、交付、成果與適用條件，再補畫面與細節，讓案例更像提案材料而不是作品牆。",
  },
];

export const heroActionSignals = [
  { step: "01", metric: "3 分鐘", title: "送出 Quick Brief", detail: "留下公司現況、主要卡點、最想重做的頁面與當前商務目標。" },
  { step: "02", metric: "24h", title: "收到重建方向", detail: "先回一版首頁切口、建議 sitemap、案例策略與推薦 sprint。" },
  { step: "03", metric: "30-45 分鐘", title: "對焦決策問題", detail: "一起確認 buyer、proof 缺口、素材來源與合作邊界。" },
  { step: "04", metric: "Sprint-ready", title: "開始第一輪重建", detail: "從首頁、方案架構、案例系統或 trust UX 先落出可討論版本。" },
];

export const heroPreviews = [
  {
    id: "clarity",
    label: "Stripe / Ramp 類型",
    metric: "Commercial clarity",
    summary: "強站會先把 outcome、category 與 value upfront，不讓訪客先猜你在做什麼。",
    checklist: ["主張先講結果", "適合對象清楚", "proof 先於自我介紹", "CTA 至少雙軌"],
  },
  {
    id: "structure",
    label: "Vercel / Linear 類型",
    metric: "Structured UX",
    summary: "複雜能力也能被快速掃讀，關鍵在模組任務清楚、視覺節奏穩定、層級一眼可懂。",
    checklist: ["模組任務清楚", "掃讀效率高", "資訊密度高但不亂", "頁面之間角色分明"],
  },
  {
    id: "proof",
    label: "高品質 design agency 類型",
    metric: "Proof-led story",
    summary: "案例不是作品牆，而是商務證據。先講情境、決策價值與成果訊號，再講做法。",
    checklist: ["情境先行", "結果可引用", "適用對象清楚", "CTA 接得上"],
  },
];

export const heroClarityChecklist = [
  { label: "Who", answer: "高複雜度 B2B、科技、製造與知識型團隊", detail: "適合需要支撐業務、採購、提案與信任建立的網站重建專案。" },
  { label: "What", answer: "重建 revenue-grade 官網與案例證據系統", detail: "不是換視覺而已，而是重排品牌主張、頁面角色、proof 與 CTA。", metric: "System first" },
  { label: "How", answer: "從 Quick Brief 或 strategy call 啟動第一個 sprint", detail: "讓第一次接洽就能落到具體頁面與決策問題，不空談。" },
];

export const caseSnapshots = [
  {
    id: "website-rebuild",
    label: "Website rebuild",
    context: "Decision architecture",
    title: "把首頁從公司自述，重構成 buying committee 能快速 shortlist 的 decision layer",
    summary: "核心成果不是頁面更漂亮，而是更快對齊 buyer、proof、風險與下一步。",
    metrics: [
      { label: "Challenge", value: "主張模糊", detail: "有能力也有內容，但高意圖流量無法快速判斷 fit 與可信度" },
      { label: "Delivery", value: "Message + IA + CTA", detail: "同步重做品牌主張、頁面架構、案例格式與啟動節奏" },
    ],
    highlights: ["首頁像 decision deck", "內頁角色重新分工", "CTA 依成熟度分層"],
    href: "/work",
  },
  {
    id: "offer-framing",
    label: "Offer framing",
    context: "Commercial packaging",
    title: "把 AI、顧問或複雜服務能力，重構成可提案、可採購、可驗收的網站敘事",
    summary: "讓主管、PM、採購與合作窗口在短時間內看懂適用場景、範圍、流程與風險邊界。",
    metrics: [
      { label: "Challenge", value: "能力抽象", detail: "客戶知道你們能做很多，但不知道這跟自己的業務有什麼直接價值" },
      { label: "Delivery", value: "Buyer-ready framing", detail: "重新整理角色、問題、流程、輸出、proof 與驗收節點" },
    ],
    highlights: ["角色與流程講清楚", "方案可被業務轉述", "導入步驟與風險前置"],
    href: "/work",
  },
  {
    id: "trust-evidence",
    label: "Trust system",
    context: "Evidence experience",
    title: "把高內容密度與透明資料，做成值得信任、也真的看得懂的外部證據系統",
    summary: "從欄位、查找路徑、說明節奏到 CTA 都一起設計，不讓資料只停在堆疊。",
    metrics: [
      { label: "Challenge", value: "理解門檻高", detail: "資料很多，但外部看不懂結構、意義與可驗證性" },
      { label: "Delivery", value: "IA + trust UX", detail: "整理欄位藍圖、理解路徑、證據模組與對外解釋方式" },
    ],
    highlights: ["欄位藍圖", "理解與查找路徑", "可信內容模組"],
    href: "/work",
  },
];

export const personaPlaybooks = [
  {
    id: "marketing",
    title: "品牌 / 行銷 / Growth",
    headline: "網站要先講清楚價值，不然再多流量也很難變成高品質對話。",
    challenge: "流量、素材、案例都有，但主張與 proof 沒被整理成 buyer 容易判斷的順序。",
    win: "重做 hero、價值主張、案例摘要與 CTA，讓網站先像商務入口，不只是品牌門面。",
    metric: { label: "優先處理", value: "訊息清晰度 + proof 密度" },
    checklist: ["重寫主張", "建立 fit 區塊", "把案例摘要與 CTA 前置"],
    ctaHref: "/contact",
    ctaLabel: "討論首頁重建",
    helperText: "適合網站看似完整，但詢問品質與轉換效率不穩的團隊。",
  },
  {
    id: "operations",
    title: "營運 / PM / 業務",
    headline: "需要讓服務、流程、時程與交付方式，被外部與內部都更容易理解。",
    challenge: "現有網站只有能力清單，沒有把真正的合作方式與決策路徑講清楚。",
    win: "把方案頁與 contact flow 做成 buying guide，降低第一次溝通成本與理解落差。",
    metric: { label: "優先處理", value: "方案結構 + 啟動節奏" },
    checklist: ["定義 solution tracks", "把第一輪 sprint 產品化", "前置回覆節奏"],
    ctaHref: "/contact",
    ctaLabel: "規劃 solution sprint",
    helperText: "適合案型複雜、跨部門利害關係人多的專案。",
  },
  {
    id: "trust",
    title: "永續 / 法遵 / 知識治理",
    headline: "高密度資訊不是問題，問題是網站有沒有把它整理成可信又好懂的體驗。",
    challenge: "內容很多，但目前站點沒有把資料、背景與價值翻成外部可理解的路徑。",
    win: "重做 IA、proof modules 與對外說明節奏，讓 trust content 真正發揮商務作用。",
    metric: { label: "優先處理", value: "IA + Trust UX" },
    checklist: ["重做內容層級", "建立 trust modules", "設計外部理解路徑"],
    ctaHref: "/contact",
    ctaLabel: "討論 trust experience",
    helperText: "適合透明資料、合規敘事與高內容密度網站。",
  },
];

export const caseOverviewStats = [
  { label: "Case format", value: "Context → Delivery → Proof → Fit", detail: "案例先回答商業情境、交付方式、成果訊號與適用對象。" },
  { label: "Decision use", value: "Shortlist-ready", detail: "能被業務、主管與 buying committee 快速轉傳。" },
  { label: "Proof style", value: "摘要先行", detail: "先講可引用訊號，再延伸到細節與畫面。" },
];
