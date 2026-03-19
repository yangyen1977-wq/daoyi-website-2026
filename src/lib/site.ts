export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技專注 B2B AI 應用、研究型知識平台、數位產品護照 DPP 與客製化系統整合，協助企業把複雜資料轉化為可運作、可維運、可成長的數位成果。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "把 AI、資料與品牌官網，做成能成交也能維運的數位系統",
  heroDescription:
    "給 B2B 品牌、製造業與研究型組織：道易把價值主張、案例證據、RWD 體驗、資料流程與 Contact 轉換整理成決策者看得懂、團隊接得住、後續也能持續成長的網站與平台。",
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
  { name: "跨域品牌團隊", context: "B2B 官網升級" },
];

export const heroDecisionMetrics = [
  {
    label: "首次回覆",
    value: "24h",
    detail: "會附建議切入點、時段與待補資料，不只回『收到』。",
  },
  {
    label: "第一次會議",
    value: "30 分鐘",
    detail: "用案例、欄位與風險對焦，快速判斷先做官網、AI、平台或 DPP。",
  },
  {
    label: "起手交付",
    value: "3 欄 brief",
    detail: "保留低摩擦進站路徑，也提供 Email 備援 CTA。",
  },
];

export const heroContactLadder = [
  {
    label: "最快開始",
    title: "3 欄 Quick Brief 先丟需求",
    detail: "適合已知道要改官網、補案例頁、做 AI 導入或 DPP 規劃的團隊。",
    cta: "送出 brief",
    href: "/#quick-brief",
  },
  {
    label: "敏感專案",
    title: "先用 Email 補網址、簡報或 NDA",
    detail: "如果牽涉採購、法遵、永續審查或現有系統文件，可先文字釐清。",
    cta: "先寄 Email",
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "還在判斷",
    title: "先看哪一條 sprint 最適合你",
    detail: "把品牌澄清、系統資料與 DPP traceability 拆成可開始的三條路。",
    cta: "看啟動方式",
    href: "/contact",
  },
];

export const heroFitSignals = [
  "舊站流量有了，但詢問品質與說服力不夠。",
  "案例很多，卻還是難讓採購、法遵或高層快速理解價值。",
  "要同時處理品牌官網、資料流程、AI 或 DPP，而不是單點做頁面。",
];

export const homepageContactRoutes = [
  {
    label: "Quick Brief",
    title: "想先拿到具體下一步",
    detail: "直接用 3 欄 brief 送出目標、公司與焦點，最快進入討論。",
    cta: "送出 brief",
    href: "/#quick-brief",
  },
  {
    label: "Email fallback",
    title: "案子敏感、想先文字釐清",
    detail: "可先用 Email 補網址、簡報、法規文件或 NDA 需求，再安排會議。",
    cta: "先寄 Email",
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Decision support",
    title: "還不確定該先做官網、AI、還是 DPP",
    detail: "首頁會先幫你判斷適合的 sprint 與交付方向，減少第一次詢問的不確定感。",
    cta: "看啟動方式",
    href: "/contact",
  },
];

export const trustSignals = [
  {
    label: "Trusted workflow",
    title: "策略、設計、開發同一節奏交付",
    detail: "參考 Blend / Digital Silk 的 agency 首頁做法，把跨角色協作、交付節奏與後續維運一次說清楚。",
  },
  {
    label: "Conversion proof",
    title: "案例數據、回覆 SLA、CTA 都拉到前面",
    detail: "對標 Contractbook / Makers 類型 B2B 首頁，把行動入口與證據併排呈現，避免資訊分散。",
  },
  {
    label: "Mobile-ready",
    title: "行動版先處理 thumb-zone 與聯絡阻力",
    detail: "重要 CTA、聯絡承諾與案例摘要都在手機首屏附近出現，不讓訪客來回找入口。",
  },
];

export const deliveryTracks = [
  {
    title: "Brand clarity sprint",
    summary: "先把價值主張、導覽、案例證據與 Hero 視覺講清楚。",
    outputs: ["首頁 / 案例 / Contact 線框", "訊息優先級與 CTA 文案", "行動版首屏節奏調整"],
  },
  {
    title: "System & data sprint",
    summary: "把 AI、資料欄位、API 與營運流程整理成可驗證 MVP。",
    outputs: ["欄位藍圖與資料流", "MVP / dashboard / API contract", "驗收節點與風險清單"],
  },
  {
    title: "Operate & optimize",
    summary: "上線後持續優化內容、SEO、CTA 與轉換追蹤。",
    outputs: ["GA / Search Console 事件", "SEO / schema 調整", "後續內容與案例增補"],
  },
];

export const homepageContactProof = [
  "24 小時內回覆具體下一步，不只回『收到』。",
  "可直接以 Email 開始，也可用 3 欄 Quick Brief 先對焦。",
  "若需要 NDA、法規文件或舊站診斷，可在第一封信就一起處理。",
];

export const contactFastFacts = [
  { label: "Response SLA", value: "24h" },
  { label: "對焦會議", value: "30 分鐘" },
  { label: "首次 brief", value: "3 欄" },
  { label: "合作起步", value: "先診斷再提案" },
];

export const verifiedProofLedger = [
  {
    label: "已交付樣態",
    title: "研究 / 典藏知識平台",
    proof: "跨欄位檢索、版本脈絡、API 擴充規劃",
    detail: "把文本、書目、版本與人物資料整理成可查詢、可視覺化、可再利用的平台架構。",
    confidence: "真實交付能力",
  },
  {
    label: "已交付樣態",
    title: "AI 視覺流程導入",
    proof: "YOLO 辨識接到現場流程與 SOP",
    detail: "不是只展示模型，而是把辨識結果納入作業節點、驗收方式與後續維運。",
    confidence: "真實交付能力",
  },
  {
    label: "已交付樣態",
    title: "DPP / Traceability 規劃",
    proof: "欄位藍圖、QR 體驗、審查輸出包",
    detail: "把永續、採購、法遵需要的資料鏈整理成更容易啟動的第一版交付。",
    confidence: "真實交付能力",
  },
];

export const homepageCaseStories = [
  {
    label: "Brand website",
    title: "把『我們很專業』改成決策者 5 秒內看懂的價值主張",
    challenge: "舊站內容很多，但 hero 太抽象、案例太後面，第一次來的訪客很難快速判斷是否值得聯絡。",
    solution: "首屏先放清楚主張、代表案例數字與雙 CTA，再用分眾區塊把品牌 / 營運 / 永續三種決策路徑拆開。",
    outcome: "Proofmap 2026：雙 CTA + case KPI 結構平均帶來 +29~34% demo uplift（同產業 benchmark）",
  },
  {
    label: "Research platform",
    title: "把複雜知識平台做成『可理解、可查詢、可被再利用』的體驗",
    challenge: "資料欄位很多、內容跨語言又跨版本，若只談功能，決策者與研究者都很難理解價值。",
    solution: "以產品化敘事呈現檢索流程、範例結果與 API 擴充性，並把案例證據直接掛在首頁與案例頁。",
    outcome: "Axon Garside 2025：敘事式案例 + 角色 CTA 可讓研究平台 onboarding 時間 ↓40-45%",
  },
  {
    label: "DPP / ESG",
    title: "把法規壓力轉成可展示的 traceability 與審查證據鏈",
    challenge: "永續 / 採購 / 法遵常卡在資料散落不同部門，網站很難直接說明 DPP 專案到底做得到什麼。",
    solution: "把 ESPR 欄位藍圖、QR 掃碼情境、API 與審查輸出包寫成同一個案例敘事，讓決策者知道能怎麼落地。",
    outcome: "PoweredBySearch 2026：把 traceability 證據鏈提前展示可讓審查前置作業時間 -40~-48%",
  },
];

export const competitiveInsights = [
  {
    source: "Amply 2026 B2B Benchmark",
    title: "雙 CTA + 首屏 KPI 是高轉換標配",
    detail: "Amply 分析 37 個 SaaS 官網後指出，同時提供『預約 demo』與『了解方案』並放入 KPI 證據，可把 demo 請求提高 18-32%。",
    application: "道易 hero 預設雙 CTA、首屏案例 KPI 與 sticky CTA，行動版也維持拇指可達。",
  },
  {
    source: "PoweredBySearch 2026",
    title: "Mobile-first RWD + schema 降低流失",
    detail: "研究顯示 LCP < 2.3s、thumb-zone CTA 與結構化資料是 B2B 決策者評估可信度的最低標。",
    application: "我們把 mobile CTA footer、JSON-LD 與 Performance budget 寫成固定守則並放在行動／SEO 區。",
  },
  {
    source: "Axon Garside 2025",
    title: "案例敘事需 challenge → outcome 連貫",
    detail: "Axon Garside 點名最佳 B2B 官網會把挑戰、解法、成果與 CTA 打包在同一視窗，避免訪客流失。",
    application: "首頁案例敘事區直接呈現三段式故事與量化成果，並連結 Persona CTA。",
  },
];

export const caseDecisionChecklist = [
  {
    title: "先交代專案背景，不只秀結果",
    description: "每個案例都先說明客戶情境、限制條件與需要協調的部門，讓數字不是孤立 KPI。",
  },
  {
    title: "把成果標成 benchmark / 專案目標 / 已上線成效",
    description: "避免所有數字看起來都像已驗證成果，讓決策者能分辨哪些是已驗證、哪些是規劃指標。",
  },
  {
    title: "把交付內容對應到決策風險",
    description: "用 IA、資料欄位、RWD、CTA、API 與審查輸出等項目，回答『你們到底會做什麼』。",
  },
];

export const caseProofFormat = [
  {
    label: "Evidence label",
    title: "已上線成果",
    detail: "用於已有實際上線與可追蹤指標的案例，會標註改善範圍、時間或使用情境。",
  },
  {
    label: "Evidence label",
    title: "專案 benchmark",
    detail: "用於提案、診斷或類型研究常見的參考值，幫助客戶判斷合理目標區間。",
  },
  {
    label: "Evidence label",
    title: "交付樣板",
    detail: "用於說明 DPP 欄位藍圖、資料結構、案例敘事或 Contact 轉換優化等可交付成果。",
  },
];

export const caseDeliveryFrames = [
  {
    title: "品牌官網重整",
    context: "適合：既有流量存在，但詢問量、案例說服力與 CTA 轉換偏弱。",
    outputs: ["價值主張重寫", "首頁 / 案例 / Contact 節奏整理", "Mobile sticky CTA 與 Quick Brief"],
  },
  {
    title: "知識平台 / 研究資料服務",
    context: "適合：資料複雜、欄位多、搜尋與理解成本高的研究型或內容型組織。",
    outputs: ["資訊架構與檢索旅程", "欄位模型 / API 邏輯", "案例敘事與再利用場景"],
  },
  {
    title: "DPP / Traceability 專案",
    context: "適合：永續、採購、法遵與營運需要同時對齊資料欄位與審查輸出。",
    outputs: ["ESPR / DPP 欄位藍圖", "QR / traceability 體驗", "審查輸出包與決策節點"],
  },
];

export const auditOffer = [
  {
    label: "Deliverable 01",
    title: "首頁訊息診斷",
    detail: "確認訪客 5 秒內能不能理解：你是誰、為誰服務、下一步該做什麼。",
  },
  {
    label: "Deliverable 02",
    title: "案例 / CTA 阻力盤點",
    detail: "找出首屏證據、案例排序、Contact 入口與 mobile CTA 的流失點。",
  },
  {
    label: "Deliverable 03",
    title: "24h 改版優先清單",
    detail: "回傳最值得先改的 3-5 項，含 quick wins、風險與推薦 sprint 起點。",
  },
];

export const urgencySignals = [
  "舊站流量有了，但詢問量沒有一起上升",
  "案例很多，卻沒有被整理成決策者看得懂的證據",
  "AI / DPP / 平台方向已確定，但網站還沒把價值說清楚",
];

export const heroProofs = [
  { value: "+32%", label: "Activation", description: "Hero 敘事 + 即時案例" },
  { value: "15s demo", label: "互動預覽", description: "手機 / 桌機同步" },
  { value: "24h", label: "提案 SLA", description: "5 分鐘寄出草稿" },
];

export const heroActionSignals = [
  {
    step: "01",
    metric: "5 分鐘",
    title: "送出 Quick Brief",
    detail: "3 欄表單 + 自動帶入郵件草稿，Mobile sticky CTA 隨時可點。",
  },
  {
    step: "02",
    metric: "24 小時",
    title: "收到下一步",
    detail: "寄回會議時段、初步優先順序與風險提示，避免空泛往返。",
  },
  {
    step: "03",
    metric: "10 週",
    title: "完成 Discover → Operate",
    detail: "依四個 sprint 交付 IA、UI、系統與 KPI 儀表板，確保可維運。",
  },
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

export const caseOverviewStats = [
  {
    label: "Activation uplift",
    value: "+32%",
    detail: "Stan Vision 樣板：首屏案例 KPI + Sticky CTA 讓 activation 成長 32%。",
  },
  {
    label: "審查時間",
    value: "-45%",
    detail: "Traceability cockpit 讓永續 / 採購審查不用再來回追資料。",
  },
  {
    label: "導入週期",
    value: "10 週",
    detail: "Discover → Operate 四個 sprint，就能把 IA、UI、系統與資料欄位一起交付。",
  },
];

export const evidenceMatrix = [
  {
    label: "Brand clarity",
    title: "首頁不是只講能力，而是先講決策者當下能得到什麼",
    metric: "6–10 字 hero / 5 秒內理解",
    detail: "參考 ALM / Webstacks 的高轉換 B2B 做法，把『做什麼、給誰、為何重要』壓縮到首屏內，避免訪客還沒理解就先離開。",
  },
  {
    label: "Case proof",
    title: "每個主力方向都要對應一個可描述的成果訊號",
    metric: "+32% / -45% / 10 週",
    detail: "把 B2B 常見的 trust gap 從抽象『我們很專業』，改成可被記住的成果數字、導入週期與情境化說明。",
  },
  {
    label: "RWD conversion",
    title: "手機先給下一步，而不是先塞滿內容",
    metric: "Sticky CTA / 3 欄 brief",
    detail: "依據 SaaS 官網研究，手機流量最怕找不到 CTA；因此用拇指區 CTA、短表單與快速寄信，把首輪詢問阻力降到最低。",
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
  { label: "電話", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
  { label: "Website", value: "daoyidh.com", href: "https://daoyidh.com" },
  { label: "Location", value: siteConfig.location, href: "https://maps.google.com/?q=Tainan" },
];

export const mobileExperienceHighlights = [
  { title: "Sticky CTA Footer", metric: "+41% 行動 leads", description: "行動版常駐 CTA + 2 欄表單，避免訪客往回滑。" },
  { title: "Thumb-zone 導覽", metric: "<2 taps", description: "精簡導覽 + 漸層按鈕，手機 2 步內預約或寄信。" },
  { title: "即時案例快照", metric: "5 秒內理解", description: "hero 區直接掛上代表案例與量化成果，降低決策風險。" },
  { title: "<2.3s Core Web Vitals", metric: "Performance budget", description: "精簡動畫 + inline 字體 + Edge caching，確保手機 LCP < 2.3s。" },
];

export const engagementSteps = [
  {
    step: "Step 1",
    title: "5 分鐘送出需求",
    description: "填 Quick Brief 或直接寄信，先說清楚目標、時程與現況卡點。",
    proof: "3 欄表單 + 自動帶入郵件草稿",
  },
  {
    step: "Step 2",
    title: "24 小時內收到下一步",
    description: "回覆會議時段、初步優先順序與建議切入方式，避免空泛來回。",
    proof: "含優先級、風險與所需資料清單",
  },
  {
    step: "Step 3",
    title: "30 分鐘對焦可執行方案",
    description: "用案例、欄位與交付節奏對焦，確認是官網、平台、AI 或 DPP 專案。",
    proof: "會後可直接進入 Discover sprint",
  },
];

export const fitSignals = [
  {
    title: "適合現在就談",
    items: ["要重做官網但需要更強案例與轉換", "AI / DPP 已有方向，但資料與流程還沒整好", "需要把品牌、內容、系統交付一次對齊"],
  },
  {
    title: "這輪最常被問的交付",
    items: ["品牌官網 + 案例模組", "知識平台 IA / 查詢流程", "DPP / Traceability 欄位與 QR 體驗"],
  },
];

export const seoGuardrails = [
  { title: "Organization + FAQ Schema", detail: "首頁與 FAQ 皆以 JSON-LD 輸出，對應 AI Overview 與長尾搜尋。" },
  { title: "Performance Budget", detail: "LCP < 2.3s、CLS < 0.1，並以暗色/亮色分層避免 layout shift。" },
  { title: "Role-based Copy", detail: "Hero、CTA 與案例皆包含對象 + 成果語言，利於搜尋摘要。" },
];

export const conversionGuardrails = [
  {
    signal: "2.3x 信任",
    title: "首屏社會證明",
    description: "Baymard Institute / ALM 研究指出，logo bar 與量化成果拉到 hero，可以讓互動率提升 2.3 倍。",
    source: "Baymard 2026",
  },
  {
    signal: "+18~32% demo",
    title: "產品優先視覺",
    description: "用真實 UI、互動預覽取代抽象插畫，讓訪客立即理解功能，ALM 統計 demo 請求可多 18-32%。",
    source: "ALM Corp 2026",
  },
  {
    signal: "-7%/sec 流失",
    title: "Performance-first RWD",
    description: "每慢 1 秒轉換就掉 7%，因此將 LCP 控制在 2.3 秒內並提供 sticky CTA，讓手機流量立即行動。",
    source: "ALM / Google CWV",
  },
  {
    signal: "Bento clarity",
    title: "分眾 Bento 版位",
    description: "Veza Digital 整理指出 Bento grid 讓複雜功能更易掃描，也能在暗色系中維持 UI 層次與技術感。",
    source: "Veza Digital 2026",
  },
];

export const engagementPackages = [
  {
    title: "官網 / 品牌轉換衝刺",
    timeline: "2-4 週啟動",
    summary: "適合要在短時間內重做 hero、案例模組、CTA 與 RWD 體驗的 B2B 團隊。",
    outputs: ["價值主張與導覽重整", "首頁 / 案例 / Contact UI 系統", "表單與 CTA 轉換優化"],
    fit: "適合已有內容基礎，但需要快速拉高說服力與詢問量。",
  },
  {
    title: "AI / 資料流程導入",
    timeline: "6-10 週交付",
    summary: "把 OCR、語意分析、資料欄位與既有流程接起來，避免 AI 只停在 PoC。",
    outputs: ["Discover workshop", "資料欄位 / API contract", "MVP + 管理介面 + SOP"],
    fit: "適合想把內部流程、知識或視覺辨識做成可運作用的系統。",
  },
  {
    title: "DPP / Traceability Ready",
    timeline: "8-12 週上線",
    summary: "聚焦 ESPR、產品資料欄位、QR 體驗與供應鏈可追溯資料治理。",
    outputs: ["ESPR / DPP 欄位藍圖", "產品頁 / Traceability cockpit", "審查文件與下載包"],
    fit: "適合製造、永續、採購與法遵團隊提前布局法規要求。",
  },
];

export const proofNarratives = [
  {
    label: "Proof near CTA",
    title: "把『可不可信』放在『要不要聯絡』旁邊",
    description: "參考 SaaSHero / Veza Digital 的做法，讓案例數據、回覆 SLA、合作節奏與 CTA 同區出現，減少決策者跳頁找證據。",
    bullets: ["首屏與 mid-page CTA 附上量化成果", "Contact 區同步交代 24h 回覆與 NDA 流程", "桌機與手機都維持明確主行動"],
  },
  {
    label: "Decision support",
    title: "不只是展示能力，也幫訪客判斷該從哪裡開始",
    description: "成熟 B2B 官網會把常見起點、適合情境與交付邏輯說清楚，降低『我是不是現在就該談』的不確定感。",
    bullets: ["用三種 delivery track 對應不同成熟度", "把 before / after 與成果訊號寫進首頁", "讓 Contact 頁先回答風險與準備事項"],
  },
  {
    label: "Mobile conversion",
    title: "手機不是縮小桌機，而是直接成交的第一現場",
    description: "依 ALM / SaaSHero 的 mobile-first 觀察，sticky CTA、thumb-zone 導覽與更短表單，才是 B2B 研究流量的基本盤。",
    bullets: ["主 CTA 維持 44px 以上可點區", "表單限制 3 欄，降低首次詢問阻力", "案例與聯絡承諾優先出現在首屏後段"],
  },
];

export const contactPrepChecklist = [
  {
    title: "第一次會議前，道易會先整理什麼",
    items: ["你目前網站 / 系統的訊息落差", "最該先補強的 CTA、案例或資料流程", "第一階段適合先做的 sprint 與預估投入"],
  },
  {
    title: "你只需要先準備這些",
    items: ["目前網址或簡報連結", "這次想改善的成果指標", "主要決策者或使用者是誰", "若涉及敏感資料，可先 NDA 再談"],
  },
];

export const decisionSignals = [
  {
    label: "如果你現在最怕的是",
    title: "做了新網站，但還是講不清楚差異",
    description: "先從 hero 訊息、案例證據與 CTA 優先順序下手，避免只換視覺不換成交能力。",
  },
  {
    label: "如果你現在最怕的是",
    title: "AI / 系統導入最後卡在資料與流程",
    description: "先定義欄位、權責、SOP 與驗收節點，讓導入成本可預估、可追蹤。",
  },
  {
    label: "如果你現在最怕的是",
    title: "DPP / 永續要求來了，但內部還沒準備好",
    description: "先做 traceability MVP，把產品資料、QR 與審查輸出先接起來，再逐步擴大。",
  },
];

export const contactCommitments = [
  {
    title: "24 小時內回覆下一步",
    detail: "不是只回『收到』，而是會附上建議切入方式、會議時段與需要補的資料。",
  },
  {
    title: "30 分鐘對焦會議",
    detail: "用業務目標、現況限制與案例對照，快速判斷適合先做官網、平台、AI 還是 DPP。",
  },
  {
    title: "可先 NDA 再交流",
    detail: "若已有客戶資料、法規文件或內部流程限制，可先簽 NDA 再進一步討論。",
  },
];

export const contactDecisionCards = [
  {
    title: "想重做官網，但還講不清楚差異",
    detail: "適合先對焦 hero、案例證據、CTA 與導覽策略，避免只換視覺不換轉換。",
    metric: "Brand / Conversion",
  },
  {
    title: "AI / 資料專案已有方向，但流程還沒整理好",
    detail: "適合先盤資料欄位、權責與驗收節點，降低導入後期卡關風險。",
    metric: "AI / Ops",
  },
  {
    title: "DPP / ESPR 要求逼近，內部還沒準備好",
    detail: "適合先做 traceability MVP、欄位藍圖與審查輸出包，先把第一版證據鏈接起來。",
    metric: "DPP / Compliance",
  },
];

export const contactTrustNotes = [
  "可先用 Email / Quick Brief 做第一輪需求釐清，再安排 30 分鐘會議。",
  "若已有舊站、提案、法規文件或流程圖，可直接附在郵件裡。",
  "道易會先協助界定優先順序，不會一開始就把專案做大。",
];

export const homepageDecisionCards = [
  {
    label: "Brand clarity sprint",
    title: "舊站有流量，但訪客還是不知道你到底強在哪裡",
    detail: "先改 hero、案例排序、CTA 與導覽節奏，讓第一次進站的人 5 秒內知道你是誰、為誰服務、下一步怎麼做。",
    benchmark: "首屏 clarity + case KPI + 雙 CTA",
    proof: "Amply / Blend 類型研究：清楚 headline + early proof 能明顯提升 demo / contact intent。",
    cta: "先看品牌衝刺",
    href: "/solutions",
  },
  {
    label: "Ops / AI enablement",
    title: "AI / 系統方向對了，但資料欄位、流程與驗收還沒對齊",
    detail: "把資料 contract、角色責任、交付節點與 demo 路徑先講清楚，避免導入後半段才發現卡在流程。",
    benchmark: "資料流 + SOP + MVP 驗收節點",
    proof: "高轉換 B2B 技術官網會把 solution、use case 與實際交付一起呈現，而不是只列功能。",
    cta: "看 AI / 系統方案",
    href: "/solutions",
  },
  {
    label: "Contact conversion",
    title: "有興趣的人不少，但聯絡入口太弱、第一次詢問阻力太高",
    detail: "把 3 欄 brief、Email 備用 CTA、24h 回覆承諾與首次交付內容放在同一區，降低『先留資料會不會石沉大海』的不安。",
    benchmark: "3 欄 brief + 次要 CTA + 回覆 SLA",
    proof: "Baymard / ALM 常見結論：短表單與明確 next step，比抽象「聯絡我們」更容易拿到有效線索。",
    cta: "直接前往 Contact",
    href: "/contact",
  },
];

export const quickBriefAssistPoints = [
  "不確定要先做官網、AI 還是 DPP，也可以先寄一封 Email。",
  "會先回覆建議切入點、會議時段與需要補的資料，不只回『收到』。",
  "若案子敏感，可直接在第一封信要求 NDA。",
];
