export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技專注為複雜型 B2B、科技、製造與知識型團隊，重建 revenue-grade 官網。從品牌主張、資訊架構、案例證據到轉換流程，一次做成可支援 shortlist、提案、採購與商務對話的成熟系統。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "把複雜能力重做成 buyer 一看就懂、業務拿去談也不虛的 revenue-grade 官網。",
  heroDescription:
    "我們不是延長舊站壽命，而是從品牌敘事、頁面角色、案例格式、UI 模組到 CTA 節奏重新設計，讓網站從公司簡介升級成商務前台。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "定位系統" },
  { href: "/solutions", label: "方案架構" },
  { href: "/work", label: "案例證據" },
  { href: "/contact", label: "啟動重建" },
];

export const headerReassuranceSignals = [
  "以重建思維取代舊站優化",
  "首頁先服務 fit、proof、risk 與 next step",
  "Quick Brief / Strategy Call / NDA 三路啟動",
];

export const solutions = [
  {
    title: "Revenue-grade Website Rebuild",
    description: "重做品牌主張、首頁架構、內頁角色、案例證據與轉換節奏，讓網站可真正支撐商機推進。",
  },
  {
    title: "AI Offer System",
    description: "把 AI、自動化、資料流程與導入方式重組成主管、PM、採購都能理解的商業方案與頁面敘事。",
  },
  {
    title: "Trust / Knowledge Experience",
    description: "把 DPP、traceability、知識內容與高密度資訊做成可信、好找、好解釋的外部體驗系統。",
  },
];

export const contactChannels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { label: "Location", value: siteConfig.location, href: siteConfig.url },
];

export const quickBriefAssistPoints = [
  "24h 內先回一版重建方向，不是制式收件回覆",
  "可直接指出首頁、案例頁與 CTA 的主要斷點",
  "敏感專案可改走 Email / NDA，不需先公開全部資料",
];

export const stats = [
  { value: "5 秒", label: "Buyer fit" },
  { value: "4 層", label: "Decision stack" },
  { value: "3 路", label: "Start modes" },
  { value: "Proof-led", label: "Case system" },
];

export const heroClients = [
  { name: "B2B SaaS / 平台公司", context: "需要把產品價值、導入方式與差異，講得更像商用資產而非功能清單。" },
  { name: "製造 / 出口 / 工業品牌", context: "需要把技術、供應鏈、驗證與可信度整理成外部看得懂的說服路徑。" },
  { name: "研究 / 協會 / 知識平台", context: "需要承接大量內容與高理解門檻，同時維持專業感與可查找性。" },
  { name: "高客單服務團隊", context: "需要把抽象能力翻成提案、採購與決策者能快速判斷的商業語言。" },
];

export const heroProofs = [
  { label: "Message", value: "Outcome first", description: "先說你替哪一類團隊解哪一類高價值問題。" },
  { label: "Proof", value: "Evidence before portfolio", description: "案例先交代情境、決策價值與成果訊號。" },
  { label: "CTA", value: "Low-friction ladder", description: "讓不同成熟度的買方都找得到下一步。" },
];

export const heroQuickSignals = [
  { label: "適合對象", value: "複雜型 B2B / 科技 / 製造 / 知識團隊" },
  { label: "重建範圍", value: "品牌、架構、案例、方案、轉換" },
  { label: "起手方式", value: "Quick Brief / Strategy Call / NDA" },
];

export const heroFitSignals = [
  "你們的能力很多，但外部仍無法在 10 秒內理解為何值得談。",
  "舊站像資訊倉庫，不像能幫業務推進 shortlist 的前台。",
  "案例偏展示，不夠像可被主管、業務、採購轉傳的證據材料。",
  "你們需要的不是再修首頁，而是整個 buying journey 的重新定義。",
];

export const heroContactLadder = [
  {
    label: "Path 01",
    title: "Quick Brief",
    detail: "適合已知道大致方向，想先拿到首頁切口、頁面優先序與第一輪重建建議。",
    cta: "3 分鐘開始",
    href: "/#quick-brief",
  },
  {
    label: "Path 02",
    title: "Strategy Call",
    detail: "適合已有內部共識，需要一起釐清 buying blockers、sprint 邊界與時程。",
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
  "第一封回覆就會先指出網站最該重做的頁面與訊息斷點。",
  "會明確建議先從首頁、方案頁、案例頁，還是 trust content 先下手。",
  "若專案偏敏感，可直接切 NDA 流程，不必先暴露全部背景。",
];

export const contactFastFacts = [
  { label: "First response", value: "24h 內" },
  { label: "Working session", value: "30 分鐘" },
  { label: "First sprint", value: "3-5 天成形" },
  { label: "Start paths", value: "Quick Brief / Call / NDA" },
];

export const homepageCompactCaseEvidence = [
  {
    label: "Positioning",
    title: "一句主張就先把 buyer、問題與價值對齊",
    evidence: "借鏡 Stripe、Ramp 類型首頁，先講商業結果與適合對象，不先講公司背景。",
  },
  {
    label: "Information architecture",
    title: "每一頁各自負責一個決策問題，而不是平均分攤內容",
    evidence: "首頁處理 fit 與 proof，方案頁處理切入方式，案例頁處理證據，Contact 頁處理低摩擦啟動。",
  },
  {
    label: "Evidence system",
    title: "案例改寫成可被轉傳、可被引用、可支撐 shortlist 的材料",
    evidence: "先說情境、交付、成果與適用條件，再放視覺與細節。",
  },
];

export const heroActionSignals = [
  { step: "01", metric: "3 分鐘", title: "送出 Quick Brief", detail: "留下公司現況、主要卡點與本次最想重做的頁面或主張。" },
  { step: "02", metric: "24h", title: "收到重建方向", detail: "先回一版建議 sitemap、首頁切口、案例策略與推薦 sprint。" },
  { step: "03", metric: "30 分鐘", title: "對焦決策問題", detail: "一起確認 buyer、proof 缺口、內容來源與合作邊界。" },
  { step: "04", metric: "Sprint-ready", title: "開始第一輪重建", detail: "從首頁、方案架構、案例證據或 trust UX 先落第一版。" },
];

export const heroPreviews = [
  {
    id: "clarity",
    label: "Stripe / Ramp 類型",
    metric: "Commercial clarity",
    summary: "強站會先把 outcome、category 與 value upfront，不讓訪客先猜你在做什麼。",
    checklist: ["主張先講結果", "數字或證據前置", "內容可內部轉傳", "CTA 至少雙軌"],
  },
  {
    id: "structure",
    label: "Vercel / Linear 類型",
    metric: "Structured UX",
    summary: "複雜能力也能被快速掃讀，關鍵在於模組穩定、視覺節奏清楚、每段只處理一件事。",
    checklist: ["模組任務清楚", "一眼可掃讀", "層級穩定", "資訊密度高但不亂"],
  },
  {
    id: "proof",
    label: "高品質 design agency 類型",
    metric: "Proof-led story",
    summary: "案例不是作品牆，而是商務證據。先講 business context，再講做法與結果。",
    checklist: ["情境先行", "結果可引用", "適用對象清楚", "CTA 接得上"],
  },
];

export const heroClarityChecklist = [
  { label: "Who", answer: "高複雜度 B2B、科技、製造與知識型團隊", detail: "適合需要支撐業務、採購、提案與信任建立的網站重建專案。" },
  { label: "What", answer: "重建 revenue-grade 官網與案例證據系統", detail: "不是單換視覺，而是把品牌主張、頁面角色、proof 與 CTA 全部重排。", metric: "System first" },
  { label: "How", answer: "從 Quick Brief 或 strategy call 啟動第一個 sprint", detail: "讓第一次接洽就能落到具體頁面與決策問題，不空談。" },
];

export const caseSnapshots = [
  {
    id: "website-rebuild",
    label: "Revenue-grade 官網重建",
    context: "Website system",
    title: "把首頁從品牌自述，改成 buying committee 能快速 shortlist 的 decision layer",
    summary: "核心成果不是頁面更漂亮，而是更快對齊 buyer、proof 與下一步。",
    metrics: [
      { label: "Challenge", value: "主張模糊", detail: "有能力也有內容，但高意圖流量無法快速判斷 fit 與可信度" },
      { label: "Delivery", value: "Message + IA + CTA", detail: "同步重做品牌主張、頁面架構、案例格式與啟動節奏" },
    ],
    highlights: ["首頁像 decision deck", "內頁角色重新分工", "CTA 依成熟度分層"],
    href: "/work",
  },
  {
    id: "ai-workflow",
    label: "AI Offer 系統化",
    context: "Commercial framing",
    title: "把 AI 能力從技術名詞，重構成可提案、可採購、可驗收的網站敘事",
    summary: "讓主管、PM、採購都能在短時間內看懂適用場景、導入方式與風險邊界。",
    metrics: [
      { label: "Challenge", value: "能力抽象", detail: "客戶知道你們做 AI，卻不知道這跟自己有什麼直接價值" },
      { label: "Delivery", value: "Buyer-ready framing", detail: "重新整理角色、資料、流程、輸出與驗收節點" },
    ],
    highlights: ["角色與流程說清楚", "方案可被業務轉述", "導入步驟與風險前置"],
    href: "/work",
  },
  {
    id: "dpp-trust",
    label: "Trust / DPP 體驗",
    context: "Trust architecture",
    title: "把高內容密度與透明資料做成值得信任、也真的看得懂的外部體驗",
    summary: "從欄位、查找路徑到解釋方式都一起設計，不讓資料只停在堆疊。",
    metrics: [
      { label: "Challenge", value: "理解門檻高", detail: "資料很多，但外部看不懂結構、意義與可驗證性" },
      { label: "Delivery", value: "IA + trust UX", detail: "整理欄位藍圖、理解路徑、證據模組與說明節奏" },
    ],
    highlights: ["欄位藍圖", "理解與查找路徑", "可信內容模組"],
    href: "/work",
  },
];

export const personaPlaybooks = [
  {
    id: "marketing",
    title: "品牌 / 行銷 / Growth",
    headline: "網站要能先講清楚價值，不然再多流量都很難變成高品質對話。",
    challenge: "流量、素材、案例都有，但主張與 proof 沒有被整理成 buyer 容易判斷的順序。",
    win: "重做 hero、價值主張、案例摘要與 CTA，讓網站先像一個商務入口。",
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
    challenge: "現有網站只有能力清單，沒有把真正的合作方式與決策路徑說清楚。",
    win: "把方案頁與 contact flow 做成 buying guide，降低第一次溝通成本。",
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
    win: "重做 IA、proof modules 與對外說明節奏，讓 trust content 真正發揮作用。",
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
