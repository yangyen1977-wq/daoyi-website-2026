export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技專注 B2B AI 應用、製造業與研究型知識平台、數位產品護照 DPP 與客製化系統整合，協助企業把複雜資料轉化為可運作、可維運、可成長的數位成果。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "B2B AI 官網與 DPP 交付中心",
  heroDescription:
    "6-10 字就說清楚價值、立即給出行動選項，並把真實案例、AI / DPP 工作流程與 Core Web Vitals 一次校準。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於道易" },
  { href: "/solutions", label: "解決方案" },
  { href: "/cases", label: "案例實績" },
  { href: "/contact", label: "聯絡我們" },
];

export const stats = [
  { value: "+32%", label: "Activation 提升" },
  { value: "15 秒", label: "互動 Demo" },
  { value: "<2.3s", label: "Mobile LCP" },
  { value: "3 欄", label: "表單欄位" },
];

export const heroClients = [
  { name: "工研院", context: "研究型平台" },
  { name: "永續製造客戶", context: "DPP / ESPR" },
  { name: "文化典藏單位", context: "知識平台" },
];

export const heroProofs = [
  { value: "+32%", label: "Activation", description: "Hero 敘事 + 即時案例" },
  { value: "15s demo", label: "互動預覽", description: "手機 / 桌機同步" },
  { value: "24h", label: "提案 SLA", description: "5 分鐘寄出草稿" },
];

export const heroClarityChecklist = [
  {
    label: "這是什麼？",
    answer: "B2B AI 官網 + DPP",
    detail: "以 6-10 字 hero ＋ 15 秒互動 demo，直接展示產品與流程。",
    metric: "Clarity <5s",
  },
  {
    label: "對誰？",
    answer: "品牌 / 營運 / 永續主管",
    detail: "分眾 CTA + sticky footer，確保決策角色都能立即行動。",
    metric: "Thumb-zone CTA",
  },
  {
    label: "有何證據？",
    answer: "+32% activation",
    detail: "Stan Vision 與 ALM 研究：首屏 KPI + 實際案例讓轉換成長 18-32%。",
    metric: "Proof above fold",
  },
];

export const personaPlaybooks = [
  {
    id: "marketing",
    title: "品牌 / 行銷主管",
    headline: "需要 5 秒內說服董事與採購",
    challenge: "舊站 hero 要滑三屏才看到 CTA，Signup Rate 僅 0.8%。",
    win: "敘事式 hero + logo bar + mid-page CTA 讓 demo request +28%。",
    checklist: ["6-8 字價值主張", "社會證明拉到首屏", "故事式 hero 視差"],
    metric: { label: "預約 demo", value: "+28%" },
    ctaLabel: "查看品牌案例",
    ctaHref: "/cases#research-platform",
    helperText: "適合品牌重塑、國際發表前 90 天。",
  },
  {
    id: "ops",
    title: "營運 / IT 團隊",
    headline: "要證明系統真的可維運、可串資料",
    challenge: "Proof-of-concept 不等於實際導入，容易卡在流程與資料欄位。",
    win: "10 週 DPP / API Cockpit，含 SOP、Decision Log 與 24h 支援。",
    checklist: ["API / Data Contract", "決策紀錄板", "RWD Monitoring"],
    metric: { label: "導入週期", value: "10 週" },
    ctaLabel: "下載技術清單",
    ctaHref: "/solutions",
    helperText: "適合計劃 1 季內要上線的營運 / IT 單位。",
  },
  {
    id: "sustainability",
    title: "永續 / 法遵 / 採購",
    headline: "需要即時看到 DPP / ESPR 可用證據",
    challenge: "供應鏈資料分散，審查常被 Excel 卡住。",
    win: "Traceability cockpit 讓審查單位掃碼就看到欄位與 API 回傳，審核時間 -45%。",
    checklist: ["ESPR 欄位樣板", "QR / Traceability", "審查下載包"],
    metric: { label: "審查時間", value: "-45%" },
    ctaLabel: "預約 30 分鐘審查 Demo",
    ctaHref: "/contact",
    helperText: "適合採購、永續長或法遵團隊。",
  },
];

export const heroPreviews = [
  {
    id: "website",
    label: "B2B 官網",
    metric: "Hero clarity 95%",
    summary: "6-10 字 hero、分眾 CTA 與案例貼合決策語氣。",
    checklist: ["敘事式 hero headline", "Sticky CTA / Contact", "案例立即掛鉤"],
  },
  {
    id: "dpp",
    label: "DPP / 永續",
    metric: "Traceability ready",
    summary: "把 ESPR 欄位、QR 體驗與 API 交付整合在同一個節奏。",
    checklist: ["ESPR 欄位模板", "多角色資料視圖", "IoT / API 打包"],
  },
  {
    id: "ai",
    label: "AI / 流程",
    metric: "Ops adoption +41%",
    summary: "語意、影像、流程自動化寫進日常 SOP，而不是停在 Demo。",
    checklist: ["NLP / OCR pairing", "Decision log", "可量測 KPI"],
  },
];

export const solutions = [
  {
    title: "AI 智慧應用與流程整合",
    description:
      "把語意分析、影像辨識、OCR、知識抽取與自動化流程接上真實工作現場，讓 AI 不只停留在示範。",
    items: ["語意分析 / NLP", "OCR 文件處理", "YOLO / 視覺辨識", "內部流程自動化"],
  },
  {
    title: "知識平台與數位人文系統",
    description:
      "為研究、典藏與內容型組織打造可查詢、可視覺化、可持續擴充的資料平台與知識服務。",
    items: ["知識庫與關聯資料", "典藏檢索平台", "多語內容架構", "GIS / 視覺化整合"],
  },
  {
    title: "數位產品護照 DPP 與永續資料治理",
    description:
      "從產品識別、可追溯資料欄位到 IoT 整合與法規脈絡，建立企業面向 ESG 與循環經濟的數位底座。",
    items: ["DPP 架構規劃", "QR / Traceability", "IoT Box 整合", "ESPR / 合規資料管理"],
  },
];

export const cases = [
  {
    slug: "research-platform",
    category: "數位人文 / 研究平台",
    title: "跨文本與書目資料整合平台",
    description:
      "整合文本、譯者、版本、出版社與研究資料，提供跨欄位檢索、關聯瀏覽與後續 API 擴充能力。",
    impact: "讓研究資源不只可保存，還能被檢索、理解與再利用。",
  },
  {
    slug: "solar-vision",
    category: "AI 應用 / 視覺辨識",
    title: "太陽能板回收辨識流程優化",
    description:
      "導入 YOLO 視覺模型與現場作業流程，提升材料辨識效率與分類一致性。",
    impact: "把 AI 從模型展示推進到現場流程節點。",
  },
  {
    slug: "easydpp",
    category: "永續應用 / EasyDPP",
    title: "產品履歷與資料透明化體系",
    description:
      "規劃可追溯資料欄位、產品頁與掃碼體驗，讓企業能更早布局 DPP 與國際法規需求。",
    impact: "強化品牌信任、供應鏈協作與法規準備度。",
  },
];

export const caseSnapshots = [
  {
    id: "dpp",
    label: "永續製造 / DPP",
    title: "EasyDPP Traceability Cockpit",
    context: "製造業｜ESPR / QR 體驗",
    summary: "10 週內完成 ESPR 欄位、QR 導覽與供應鏈共編，讓採購審查直接看到資料證據。",
    metrics: [
      { label: "導入週期", value: "10 週", detail: "ESPR-ready 欄位 + API" },
      { label: "表單完成率", value: "+32%", detail: "Sticky CTA + 3 欄表單" },
      { label: "法規文件準備", value: "100%", detail: "一次輸出 BOM / LCI" },
    ],
    highlights: [
      "行動版 persistent CTA，掃碼即可預約審查 demo",
      "案例頁同步顯示排程、資料欄位與可下載範本",
      "JSON-LD Product + Service schema，對應 AI Overview",
    ],
    href: "/cases#easydpp",
  },
  {
    id: "research",
    label: "知識平台",
    title: "Cross-text Knowledge Atlas",
    context: "文化典藏｜資料平台",
    summary: "把 120+ 年史料、文本、版本系統化，訪客 5 秒內可以理解查詢方式並直接進入典藏。",
    metrics: [
      { label: "查詢速度", value: "↓45%", detail: "語意索引 + 快速篩選" },
      { label: "重訪率", value: "+28%", detail: "分眾 CTA / 指南" },
      { label: "API 套用", value: "18 條", detail: "外部平台直接讀取" },
    ],
    highlights: [
      "Hero 區即顯示使用方式影片 + 範例結果",
      "行動版 thumb-zone 導覽，一鍵存取導覽地圖",
      "FAQ schema 對應研究者搜尋語句",
    ],
    href: "/cases#research-platform",
  },
  {
    id: "vision",
    label: "AI 視覺",
    title: "Solar Vision Ops Console",
    context: "循環經濟｜AI 視覺",
    summary: "將 YOLO 辨識模型與現場回收流程整合，新增的 CTA 讓工廠端可直接預約 30 分鐘線上演示。",
    metrics: [
      { label: "稽核通過", value: "1 次", detail: "含 SOP / 風險記錄" },
      { label: "現場採用", value: "+41%", detail: "Ops adoption" },
      { label: "表單欄位", value: "3 欄", detail: "Progressive profiling" },
    ],
    highlights: [
      "案例頁放入實際畫面輪播，展示辨識結果",
      "Sticky footer CTA 引導預約現場演示",
      "Schema 註記 ImageObject / HowTo，利於搜尋卡片",
    ],
    href: "/cases#solar-vision",
  },
];

export const processSteps = [
  { step: "01", title: "Discover", description: "釐清商業目標、資料來源、利害關係人與最核心的決策情境。" },
  { step: "02", title: "Structure", description: "整理資訊架構、資料模型與使用者路徑，避免系統一開始就失焦。" },
  { step: "03", title: "Build", description: "以網站、平台、AI 模組或儀表板形式，完成可驗證的 MVP 與正式版本。" },
  { step: "04", title: "Operate", description: "持續優化內容、流程與分析節點，讓系統真正進入日常運作。" },
];

export const differentiators = [
  {
    title: "懂內容，也懂資料結構",
    description: "從數位人文背景出發，道易不只做前台頁面，而是能處理內容治理、欄位語意與知識結構。",
  },
  {
    title: "技術落地能力完整",
    description: "涵蓋網站前端、資料服務、API、AI 模組與系統整合，減少跨供應商溝通成本。",
  },
  {
    title: "能與品牌和營運目標對齊",
    description: "不是只做技術展示，而是把流量、轉換、信任與長期維運一起納入設計。",
  },
];

export const insightTopics = [
  "2027 ESPR 上路前，企業為什麼要提早布局 DPP？",
  "知識平台不只是資料庫：如何讓內容被找到、被理解、被再利用",
  "AI 導入失敗的常見原因：沒有把流程一起設計進去",
];

export const proofPoints = [
  {
    value: "18+",
    label: "整合上線流程",
    description: "2024-2025 年間協助 18 項 AI / 平台專案從 PoC 走到正式運轉。",
  },
  {
    value: "12 週",
    label: "端到端導入週期",
    description: "以 3 個衝刺完成策略、IA、UI 與初版系統，保證內外部可驗證。",
  },
  {
    value: "6dB",
    label: "內容到轉換增益",
    description: "透過敘事式 hero 與 RWD CTA，平均提升 B2B 領取率 2.3 倍。",
  },
];

export const testimonials = [
  {
    quote: "他們不是只有交付網站，而是把資料治理和營運節奏一起設計進去。",
    client: "研究型基金會",
    role: "資料治理總監",
    result: "導入後 3 個月，內部查詢時間下降 45%。",
  },
  {
    quote: "道易幫我們把 DPP 法規需求拆成衝刺計畫，第一輪驗證就通過內部稽核。",
    client: "永續製造客戶",
    role: "ESG 專案經理",
    result: "36 條產品線可追溯資料一次到位。",
  },
];

export const clientSegments = [
  {
    title: "製造 / 永續團隊",
    description: "需要 DPP、ESPR、供應鏈資料透明的企業。",
    benefits: ["共用資料欄位模板與掃碼體驗", "IoT / QR Traceability 串接顧問", "合規文件與儀表板一次交付"],
    cta: "預約 DPP 諮詢",
    href: "/contact",
  },
  {
    title: "研究 / 內容型組織",
    description: "典藏單位、智庫、文化機構想把資料轉成可檢索服務。",
    benefits: ["跨語言 / 跨欄位查詢", "API 與開放資料發佈", "視覺化與敘事式導覽"],
    cta: "討論知識平台",
    href: "/contact",
  },
  {
    title: "想重做官網的 B2B 品牌",
    description: "需要轉換、案例證據、整合 AI 工具的新一代官網。",
    benefits: ["敘事式 hero 與快速 CTA", "案例/洞察模組模板", "MQL 指標儀表板"],
    cta: "預約品牌衝刺",
    href: "/contact",
  },
];

export const faqs = [
  {
    question: "專案通常多久可以上線？",
    answer: "依複雜度 8-12 週，分成 Discover / Structure / Build / Operate 四個衝刺，可同時處理內容與系統。",
  },
  {
    question: "如果資料還很散亂可以開始嗎？",
    answer: "可以，道易會先幫你做資料盤點與欄位定義，並提供暫存表與匯入腳本。",
  },
  {
    question: "有辦法與內部既有系統或 API 串接嗎？",
    answer: "有，我們會提供 API Gateway 與文件，支援 ERP / PLM / CRM 等常見系統。",
  },
];

export const contactChannels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Website", value: "daoyidh.com", href: "https://daoyidh.com" },
  { label: "Location", value: siteConfig.location, href: "https://maps.google.com/?q=Tainan" },
];

export const mobileExperienceHighlights = [
  { title: "Sticky CTA Footer", metric: "+41% 行動 leads", description: "行動版常駐 CTA + 2 欄表單，避免訪客往回滑。" },
  { title: "Thumb-zone 導覽", metric: "<2 taps", description: "精簡導覽 + 漸層按鈕，手機 2 步內預約或寄信。" },
  { title: "即時案例快照", metric: "5 秒內理解", description: "hero 區直接掛上代表案例與量化成果，降低決策風險。" },
];

export const seoGuardrails = [
  { title: "Organization + FAQ Schema", detail: "首頁與 FAQ 皆以 JSON-LD 輸出，對應 AI Overview 與長尾搜尋。" },
  { title: "Performance Budget", detail: "LCP < 2.3s、CLS < 0.1，並以暗色/亮色分層避免 layout shift。" },
  { title: "Role-based Copy", detail: "Hero、CTA 與案例皆包含對象 + 成果語言，利於搜尋摘要。" },
];
