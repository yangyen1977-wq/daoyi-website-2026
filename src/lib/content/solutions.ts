export const solutionsHero = {
  eyebrow: "Solutions for Trusted Data Platforms",
  title: "把分散資料整理成可查詢、可查核、可對外揭露的可信資料平台",
  description:
    "道易協助企業、政府、研究機構與循環經濟團隊，把產品、ESG、回收、研究與知識資料整理成可管理、可驗證、可長期維護的平台。",
  points: [
    "從 DPP、ESG 稽核、回收履歷、知識平台或系統整合切入",
    "可先用一個產品、一條流程、一批資料或一個主題驗證",
    "第一階段聚焦資料模型、PoC、Dashboard、查詢頁或 API",
  ],
};

export const solutionScenarios = [
  {
    need: "產品資料要被掃描、查詢與對外揭露",
    solution: "DPP 數位產品護照",
    plain: "把產品資料變成可更新、可揭露的數位身分。",
    href: "#dpp-product-passport",
  },
  {
    need: "ESG、回收或供應鏈資料需要被查核",
    solution: "數據信任鏈與高效稽核平台",
    plain: "讓來源、版本、時間與修改紀錄有證據可查。",
    href: "#data-trust-chain",
  },
  {
    need: "人物、文本、事件或研究資料需要被搜尋",
    solution: "AI-Ontology 知識平台",
    plain: "把複雜資料整理成可搜尋、可探索的知識網絡。",
    href: "#ai-ontology-platform",
  },
  {
    need: "設備、影像辨識與現場流程要接回平台",
    solution: "AIoT 回收履歷整合",
    plain: "把現場資料轉成可追蹤、可管理的回收履歷。",
    href: "#aiot-traceability",
  },
];

export const solutionDetails = [
  {
    id: "data-trust-chain",
    eyebrow: "Data Trust Chain",
    title: "讓 ESG、回收與供應鏈資料變成可查核證據",
    summary: "適合已有資料，但來源、版本、時間與查核流程還不夠清楚的組織。",
    audience: ["ESG、碳盤查、回收履歷或供應鏈透明團隊", "已有資料平台但缺少稽核證據的組織"],
    problems: ["資料散在 Excel、表單、設備或不同系統", "稽核時需要大量人工補件與整理"],
    approach: "盤點資料來源與稽核節點，建立資料模型、證據模型、驗證流程與查核介面。",
    deliverables: ["資料來源盤點", "證據模型與流程圖", "Dashboard / API 查核原型"],
    technologies: ["Ontology", "Hash", "Merkle Tree", "TSA", "Audit Trail", "API"],
    cases: ["太陽能板回收 YOLO 辨識與履歷"],
    cta: "我想盤點資料信任鏈",
  },
  {
    id: "dpp-product-passport",
    eyebrow: "Digital Product Passport",
    title: "為產品建立可掃描、可更新、可揭露的數位身分",
    summary: "適合想推動 DPP、QR 查詢、產品履歷、供應鏈透明或 ESG 揭露的團隊。",
    audience: ["製造品牌、出口企業、材料供應商", "想用一個產品或 SKU 先做 DPP PoC 的團隊"],
    problems: ["產品資料分散在部門、供應商與文件中", "前台查詢頁已有，但後台資料治理不足"],
    approach: "建立 DPP 欄位藍圖、產品生命週期資料模型、QR 查詢頁與後台維護流程。",
    deliverables: ["DPP 欄位藍圖", "產品資料模型", "QR 查詢頁與後台流程"],
    technologies: ["DPP", "QR Code", "Product Data Model", "API", "Traceability"],
    cases: ["Easy DPP 數位產品護照"],
    cta: "我想做 DPP PoC",
  },
  {
    id: "ai-ontology-platform",
    eyebrow: "AI-Ontology Knowledge Platform",
    title: "把人物、文本、事件與研究資料整理成知識網絡",
    summary: "適合政府、學研、文化館所與研究團隊，處理大量文本、人物、作品或事件資料。",
    audience: ["政府、學研、文化館所、博物館、圖書館", "想導入語意搜尋、知識圖譜或 AI 輔助整理的團隊"],
    problems: ["資料量大，但使用者找不到真正需要的內容", "人物、作品、事件與地點關係難呈現"],
    approach: "以 Ontology 定義核心實體、關係與查詢場景，再串接語意擷取、搜尋與後台治理流程。",
    deliverables: ["Ontology 草案", "核心實體與關係設計", "知識平台或視覺化原型"],
    technologies: ["Ontology", "OCR", "NLP", "Semantic Search", "Knowledge Graph"],
    cases: ["國立臺灣文學館好臺誌、外譯房", "Taiwan Biographical Ontology"],
    cta: "我想規劃 AI-Ontology 工作坊",
  },
  {
    id: "aiot-traceability",
    eyebrow: "AIoT Traceability",
    title: "把設備、影像與現場流程串成可追溯履歷",
    summary: "適合回收、再生資源、循環經濟與 ESG 團隊，把現場資料接回管理平台。",
    audience: ["回收處理、再生資源、循環經濟與 ESG 團隊", "需要串接設備、感測器、影像辨識與後台的組織"],
    problems: ["現場作業資料與管理系統斷裂", "回收流程缺少批次、來源、時間與狀態追蹤"],
    approach: "整理現場流程與資料節點，規劃 AIoT 串接、影像辨識、異常校驗與 Dashboard。",
    deliverables: ["現場資料流程圖", "回收履歷欄位設計", "AIoT / Dashboard 原型"],
    technologies: ["AIoT", "YOLO", "Sensor Data", "API", "Traceability"],
    cases: ["太陽能板回收 YOLO 辨識與履歷"],
    cta: "我想規劃回收履歷整合",
  },
];

export const solutionImplementationSteps = [
  {
    title: "盤點資料來源",
    detail: "釐清資料在哪裡、誰會更新、誰要查詢，以及哪些節點需要留下紀錄。",
    output: "資料來源圖、角色盤點、信任缺口清單",
  },
  {
    title: "建立資料與證據模型",
    detail: "把欄位、關係、版本、來源與查核需求整理成可實作結構。",
    output: "資料模型、證據模型、欄位與驗證規則",
  },
  {
    title: "做 PoC / Prototype",
    detail: "用一個產品、一條流程、一批資料或一個主題先驗證。",
    output: "Dashboard、QR 查詢頁、API 或知識平台原型",
  },
  {
    title: "串接平台與查核流程",
    detail: "把資料流程接到 Dashboard、API、查詢頁、後台或稽核介面。",
    output: "可上線平台、操作流程、維運與擴充路線",
  },
];

export const solutionStartModes = [
  {
    title: "資料信任鏈盤點",
    fit: "已有資料平台或 ESG 資料，但缺少版本、時間證明或稽核流程。",
    deliverables: ["資料來源盤點", "風險缺口分析", "導入路線"],
    cta: "我想先做資料盤點",
  },
  {
    title: "DPP / ESG PoC",
    fit: "已有產品資料、回收流程或 ESG 資料，想先驗證可行性。",
    deliverables: ["欄位藍圖", "QR 查詢頁", "Dashboard 原型"],
    cta: "我想先做 PoC",
  },
  {
    title: "AI-Ontology Workshop",
    fit: "有大量文本、人物、事件或研究資料，想導入語意搜尋或知識圖譜。",
    deliverables: ["核心實體與關係草案", "查詢場景", "平台模組建議"],
    cta: "我想先安排工作坊",
  },
  {
    title: "Email / NDA 路徑",
    fit: "需求涉及未公開產品、供應鏈、採購、研發或內部流程。",
    deliverables: ["保密溝通邊界", "初步會議範圍", "可提供資料清單"],
    cta: "我想先用 Email / NDA",
  },
];
