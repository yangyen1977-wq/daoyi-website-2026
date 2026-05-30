export const homeHero = {
  eyebrow: "DaoYi Technology",
  badge: "Trusted Data Systems for DPP, ESG, AI-Ontology",
  title: "把分散資料整理成可查、可驗、可維護的可信平台",
  description:
    "道易協助企業、政府、研究與循環經濟團隊，把產品、ESG、回收、研究與知識資料，整理成能管理、能查核、能對外說明的系統資產。",
};

export const homeHeroCards = [
  {
    label: "資料整理",
    title: "把分散資料整理成清楚的欄位、關係與流程。",
    detail: "先釐清資料來源、使用角色與更新方式，再規劃適合的平台結構。",
  },
  {
    label: "平台建置",
    title: "把資料做成可查詢、可管理、可串接的系統。",
    detail: "包含前後台、查詢頁、Dashboard、API、權限與必要的資料匯入流程。",
  },
  {
    label: "可信脈絡",
    title: "讓重要資料能被驗證、追溯與說明。",
    detail: "適合產品履歷、稽核證據、研究資料與需要長期維護的知識資料庫。",
  },
];

export const homeTrustMetrics = [
  { value: "3", label: "主要服務" },
  { value: "4", label: "適合 TA" },
  { value: "24h", label: "初步回覆" },
  { value: "1", label: "明確切入點" },
];

export const homeWhatWeDo = [
  {
    title: "資料平台與後台系統",
    detail: "協助企業或組織把原本散在 Excel、文件、現場紀錄或舊系統中的資料，整理成可以查詢、管理、更新與維運的平台。",
  },
  {
    title: "數位產品護照與履歷",
    detail: "為產品、材料、回收流程或供應鏈資料建立可展示的數位身分，讓客戶、合作方或稽核者能理解資料脈絡。",
  },
  {
    title: "研究與知識資料整理",
    detail: "把人物、作品、文本、事件、地點或研究資料整理成可搜尋、可關聯、可視覺化的知識平台。",
  },
];

export const homeBuyerPaths = [
  {
    role: "產品資料要被掃描、查詢與對外揭露",
    need: "把產品資料、材料、製程、供應鏈與回收資訊整理成可更新、可揭露的數位身分。",
    next: "DPP 數位產品護照",
    href: "/solutions#dpp-product-passport",
  },
  {
    role: "ESG、回收或供應鏈資料需要被查核",
    need: "讓資料來源、版本、時間、修改紀錄與稽核證據有脈絡可查。",
    next: "數據信任鏈與高效稽核平台",
    href: "/solutions#data-trust-chain",
  },
  {
    role: "人物、文本、事件或研究資料需要被搜尋",
    need: "把複雜資料整理成可搜尋、可關聯、可視覺化的知識網絡。",
    next: "AI-Ontology 知識平台",
    href: "/solutions#ai-ontology-platform",
  },
  {
    role: "設備、影像辨識與現場流程要接回平台",
    need: "把現場設備、影像、批次與流程資料串成可追蹤、可管理的回收履歷。",
    next: "AIoT 回收履歷整合",
    href: "/solutions#aiot-traceability",
  },
];

export const homeProofArchitecture = [
  {
    step: "01",
    title: "資料來源盤點",
    detail: "確認資料來自文件、Excel、設備、影像、API、舊系統或研究資料庫。",
  },
  {
    step: "02",
    title: "模型與欄位治理",
    detail: "定義實體、關係、版本、權限與更新責任，讓資料可以維護。",
  },
  {
    step: "03",
    title: "平台與查詢介面",
    detail: "依需求建立後台、Dashboard、DPP QR 查詢頁、研究平台或 API。",
  },
  {
    step: "04",
    title: "查核與可信脈絡",
    detail: "在需要時加入 Hash、Merkle Tree、TSA、Audit Trail 與證據保存流程。",
  },
];

export const homeCaseSignals = [
  {
    title: "Easy DPP 數位產品護照",
    type: "產品揭露 / 供應鏈透明",
    result: "把產品資料整理成可掃描、可維護的數位身分。",
    proof: "從產品欄位到 QR 查詢頁，先跑通可揭露的 DPP 原型。",
    fit: "材料、來源、製程與回收指引分散在部門、供應商與文件中。",
    approach: "整理 DPP 欄位架構、公開查詢頁與後台維護邏輯。",
    deliverables: "欄位藍圖、QR Code 查詢頁、後台資料維護流程。",
    href: "/work#featured-cases",
  },
  {
    title: "太陽能板回收 YOLO 辨識與履歷",
    type: "AIoT / 回收履歷 / ESG",
    result: "把影像、設備、批次與回收流程整合成可追溯資料。",
    proof: "把現場影像、批次與回收節點整理成可查核 Dashboard 脈絡。",
    fit: "回收資料分散在影像、設備、批次與人工紀錄中。",
    approach: "整合 YOLO、現場資料與回收履歷，規劃可查核資料結構。",
    deliverables: "影像辨識資料整合、回收批次資料模型、Dashboard 規劃。",
    href: "/work#featured-cases",
  },
  {
    title: "國立臺灣文學館好臺誌、外譯房",
    type: "數位人文 / 知識平台",
    result: "把文學資料、人物、作品與歷史脈絡整理成可探索平台。",
    proof: "把人物、作品、主題與年代關係轉成可搜尋、可維護的平台。",
    fit: "人物、作品、地點、主題與年代關係不易用一般網站呈現。",
    approach: "建置可查詢、可維護的數位人文資料平台。",
    deliverables: "資料結構設計、前台查詢展示、後台內容維護流程。",
    href: "/work#featured-cases",
  },
];

export const homeTrustQuestions = [
  {
    question: "這筆資料代表什麼？",
    answer: "Ontology 語義建模",
    detail: "定義產品、材料、設備、批次、人物、作品、事件、地點與文件等核心實體與關係。",
  },
  {
    question: "這筆資料有沒有被改過？",
    answer: "Hash / Merkle Tree",
    detail: "為資料建立完整性指紋，支援批次驗證與單筆抽驗。",
  },
  {
    question: "這筆資料在什麼時間點存在？",
    answer: "TSA 與證據保存",
    detail: "保留時間戳、Root Hash 錨定紀錄、附件關聯與內容指紋。",
  },
  {
    question: "既有系統與現場資料如何接入？",
    answer: "API / AIoT / 系統整合",
    detail: "串接 ERP、MES、IoT、資料庫、影像辨識、查詢頁與稽核流程。",
  },
  {
    question: "誰建立、修改、查詢或驗證資料？",
    answer: "Audit Trail 與角色權限",
    detail: "建立操作紀錄、角色權限、查核結果與資料狀態。",
  },
];

export const homeStartModes = [
  {
    title: "資料信任鏈盤點",
    fit: "已有資料平台或 ESG 資料，但缺少版本、時間證明或稽核流程。",
    output: "資料來源盤點、風險缺口分析、導入路線。",
    cta: "開始資料盤點",
    href: "/contact?topic=data-trust-audit",
  },
  {
    title: "DPP / ESG PoC",
    fit: "已有產品資料、回收流程或 ESG 資料，想先驗證可行性。",
    output: "欄位藍圖、QR 查詢頁、Dashboard 原型。",
    cta: "規劃 PoC",
    href: "/contact?topic=dpp-esg-poc",
  },
  {
    title: "AI-Ontology Workshop",
    fit: "有大量文本、人物、事件或研究資料，想導入語意搜尋或知識圖譜。",
    output: "核心實體與關係草案、查詢場景、平台模組建議。",
    cta: "安排工作坊",
    href: "/contact?topic=ai-ontology-workshop",
  },
  {
    title: "Email / NDA 路徑",
    fit: "需求涉及未公開產品、供應鏈、採購、研發或內部流程。",
    output: "保密溝通邊界、初步會議範圍、可提供資料清單。",
    cta: "先走保密聯繫",
    href: "/contact#quick-brief",
  },
];

export const homeSitemapRebuild = [
  {
    page: "首頁",
    job: "一句話看懂道易與四種進站路徑。",
  },
  {
    page: "解決方案",
    job: "用資料情境選 DPP、資料信任鏈、AI-Ontology 或 AIoT。",
  },
  {
    page: "技術核心",
    job: "把 Ontology、Hash、Merkle、TSA 與 API 翻成查核問題。",
  },
  {
    page: "案例實績",
    job: "用案例判斷資料問題、交付成果與合作適配。",
  },
  {
    page: "聯絡我們",
    job: "用 Quick Brief 或 Email / NDA 收斂第一步。",
  },
];

export const homeThirdPartyReview = {
  score: "8.4 / 10",
  summary:
    "新版資訊架構已具備成熟 B2B 官網需要的清楚定位、角色入口、方法說明、案例證據與低摩擦 CTA。下一輪最值得補強的是更多可公開量化成果與客戶證言。",
  criteria: [
    "品牌定位清楚度 9.0",
    "買方決策路徑 8.5",
    "案例證據完整度 7.8",
    "技術可信度 8.6",
    "轉換 CTA 清楚度 8.2",
  ],
};

export const homeTargetAudiences = [
  {
    title: "製造與供應鏈團隊",
    detail: "需要整理產品資料、材料來源、批次紀錄、供應鏈資訊或對外查詢頁的企業。",
  },
  {
    title: "循環經濟與 ESG 團隊",
    detail: "需要把回收、碳資訊、永續揭露或稽核佐證資料整理成可追溯流程的團隊。",
  },
  {
    title: "政府、學研與文化單位",
    detail: "需要整理研究資料、典藏資料、人物關係、文本資料或數位人文平台的單位。",
  },
  {
    title: "已有資料但缺平台的組織",
    detail: "資料已經累積，但還缺少清楚的資料模型、管理後台、查詢介面或系統整合方式。",
  },
];
