export const solutionsHero = {
  eyebrow: "Solutions for Trusted Data Platforms",
  title: "把分散資料整理成可查詢、可查核、可對外揭露的可信資料平台",
  description:
    "道易科技協助企業、政府、研究機構與循環經濟團隊，將產品資料、ESG 數據、回收履歷、研究資料與知識內容，整理成可追溯、可驗證、可維護的資料平台。",
  points: [
    "適合 DPP、ESG 稽核、回收履歷、知識平台與資料系統整合",
    "可從一個產品、一條流程、一批資料或一個知識主題開始",
    "交付資料模型、驗證流程、Dashboard、查詢頁、API 或 PoC 原型",
  ],
};

export const solutionScenarios = [
  {
    need: "我想讓產品資料可以被掃描、查詢與對外揭露",
    solution: "DPP 數位產品護照",
    plain: "把產品資料變成可查詢、可更新、可對外揭露的數位身分。",
    href: "#dpp-product-passport",
  },
  {
    need: "我想讓 ESG、回收或供應鏈資料可以被第三方查核",
    solution: "數據信任鏈與高效稽核平台",
    plain: "讓資料來源、時間、版本與修改紀錄都能被驗證。",
    href: "#data-trust-chain",
  },
  {
    need: "我想把人物、文本、事件、地點或研究資料變成可搜尋平台",
    solution: "AI-Ontology 知識平台",
    plain: "把複雜資料整理成可搜尋、可分析、可視覺化的知識網絡。",
    href: "#ai-ontology-platform",
  },
  {
    need: "我想串接設備、影像辨識、感測資料與現場流程",
    solution: "AIoT 回收履歷整合",
    plain: "把現場資料接回管理平台，形成可追蹤的回收履歷。",
    href: "#aiot-traceability",
  },
];

export const solutionDetails = [
  {
    id: "data-trust-chain",
    eyebrow: "Data Trust Chain",
    title: "讓 ESG、回收與供應鏈資料，變成可被查核的可信證據",
    summary: "不只是保存資料，而是讓資料的來源、時間、版本、修改紀錄與驗證方式都能被追溯。",
    audience: ["回收處理與再生資源業者", "ESG、碳盤查與第三方查核相關團隊", "需要供應鏈透明的製造商與品牌", "已有資料平台但缺少驗證、稽核與證據鏈的組織"],
    problems: ["資料散在 Excel、表單、設備、人工紀錄或不同系統中", "資料被修改後，無法清楚證明版本與責任", "稽核時需要大量人工整理，查核效率低", "對外揭露時，缺乏可信的資料證據"],
    approach: "盤點資料來源與稽核節點，建立證據模型，再把查核流程接到 Dashboard、API 或前台查詢體驗。",
    deliverables: ["資料來源與稽核節點盤點", "證據模型與資料流程圖", "Hash / Merkle 驗證流程草案", "稽核 Dashboard 原型", "API 查核接口規劃"],
    technologies: ["Ontology", "Hash", "Merkle Tree", "TSA", "Audit Trail", "API", "Dashboard"],
    cases: ["太陽能板回收 YOLO 辨識與履歷"],
    cta: "我想盤點資料信任鏈",
  },
  {
    id: "dpp-product-passport",
    eyebrow: "Digital Product Passport",
    title: "為產品建立可查詢、可追溯、可合規的數位身分",
    summary: "把產品材料、製程、供應鏈、環境資訊與回收指引，整理成可被管理、查詢與揭露的 DPP 架構。",
    audience: ["製造品牌與出口企業", "材料供應商與零組件廠商", "循環經濟、回收與再利用團隊", "想先用 PoC 驗證 DPP 可行性的團隊"],
    problems: ["產品資料散在不同部門、供應商或文件中", "QR Code 查詢頁已經有了，但後台資料治理不足", "缺乏一致欄位，未來難以擴充到更多產品", "對外揭露內容與內部管理資料沒有接起來"],
    approach: "先建立產品生命週期資料模型，再設計後台管理流程、QR Code 查詢頁與第一階段 PoC 範圍。",
    deliverables: ["DPP 欄位藍圖", "產品生命週期資料模型", "QR Code 查詢頁原型", "後台資料管理流程", "DPP PoC 或 MVP 範圍建議"],
    technologies: ["DPP", "QR Code", "Product Data Model", "API", "Ontology", "Traceability"],
    cases: ["Easy DPP 數位產品護照"],
    cta: "我想做 DPP PoC",
  },
  {
    id: "ai-ontology-platform",
    eyebrow: "AI-Ontology Knowledge Platform",
    title: "把人物、文本、事件與研究資料，整理成可搜尋的知識網絡",
    summary: "用 Ontology、語意模型與 AI 輔助流程，讓複雜知識資料能被搜尋、分析、視覺化與長期維護。",
    audience: ["博物館、圖書館、文化館所", "大學、研究中心與國際研究計畫", "政府資料平台", "擁有大量文本、人物、事件、地點或作品資料的單位"],
    problems: ["資料量很大，但使用者找不到真正需要的內容", "人物、作品、事件、地點之間的關係難以呈現", "前台展示與後台資料管理沒有接在一起", "AI 可以輔助整理，但缺少資料模型與品質控管流程"],
    approach: "以核心實體、關係與來源規則建立知識模型，再規劃 OCR / NLP / 語意擷取、查詢與視覺化流程。",
    deliverables: ["Ontology 草案", "核心實體與關係設計", "OCR / NLP / 語意擷取流程建議", "知識圖譜或關係視覺化原型", "研究資料庫或文化資料平台規劃"],
    technologies: ["Ontology", "OCR", "NLP", "Semantic Search", "Knowledge Graph", "Visualization"],
    cases: ["國立臺灣文學館好臺誌、外譯房", "Taiwan Biographical Ontology"],
    cta: "我想規劃 AI-Ontology 工作坊",
  },
  {
    id: "aiot-traceability",
    eyebrow: "AIoT Traceability",
    title: "從現場設備與影像資料開始，建立可追溯的回收履歷",
    summary: "把設備、感測器、影像辨識、人工紀錄與管理系統接在一起，讓回收流程不只被記錄，也能被查核。",
    audience: ["太陽能板回收與再生資源處理業者", "需要現場流程資料化的設備商", "想串接 AI 影像辨識、感測資料與回收流程的團隊", "需要把回收履歷延伸到 ESG 或 DPP 的組織"],
    problems: ["現場作業資料與管理系統斷裂", "影像、設備、感測器與人工紀錄無法互相驗證", "回收流程缺少批次、來源、時間與狀態追蹤", "後續 ESG 揭露或 DPP 延伸缺少可信資料來源"],
    approach: "先整理現場資料流與批次節點，再規劃 AIoT / 影像辨識串接、異常校驗與回收履歷 Dashboard。",
    deliverables: ["現場資料流程圖", "回收履歷欄位設計", "AIoT / 影像辨識串接規劃", "異常偵測與一致性校驗規則", "回收履歷 Dashboard 原型"],
    technologies: ["AIoT", "YOLO", "Sensor Data", "API", "Traceability", "Data Validation", "ESG Audit"],
    cases: ["太陽能板回收 YOLO 辨識與履歷"],
    cta: "我想規劃回收履歷整合",
  },
];

export const solutionImplementationSteps = [
  { title: "盤點資料來源", detail: "確認資料在哪裡、誰會更新、誰要查詢，以及哪些節點需要被驗證。" },
  { title: "建立資料模型與證據模型", detail: "把欄位、關係、版本、來源與查核需求整理成可實作的結構。" },
  { title: "做 PoC / Prototype", detail: "用一個產品、一條流程、一批資料或一個知識主題先驗證可行性。" },
  { title: "串接使用介面與查核流程", detail: "依需求落到 Dashboard、API、QR 查詢頁、後台管理或稽核流程。" },
];

export const solutionStartModes = [
  {
    title: "DPP / ESG PoC",
    fit: "已有產品資料、回收流程或 ESG 資料，想先驗證可行性。",
    deliverables: ["欄位藍圖", "QR 查詢頁", "Dashboard 原型", "Hash / Merkle 驗證流程草案"],
    cta: "我想先做 PoC",
  },
  {
    title: "AI-Ontology Workshop",
    fit: "有大量文本、人物、作品、事件或研究資料，想導入語意搜尋或知識圖譜。",
    deliverables: ["核心實體與關係草案", "查詢場景", "使用角色盤點", "平台模組建議"],
    cta: "我想先安排工作坊",
  },
  {
    title: "資料信任鏈盤點",
    fit: "已有資料平台，但可信度、版本、時間證明或稽核流程不足。",
    deliverables: ["資料來源盤點", "風險缺口分析", "證據模型草案", "導入路線"],
    cta: "我想先做資料盤點",
  },
];

export const solutionTechValues = [
  { term: "Ontology", value: "讓不同資料類型、欄位與關係有一致規則。" },
  { term: "Hash", value: "為資料建立不可逆的完整性指紋。" },
  { term: "Merkle Tree", value: "讓大量資料可以用一個 Root Hash 快速驗證。" },
  { term: "TSA", value: "證明資料在某個時間點已經存在。" },
  { term: "Audit Trail", value: "記錄誰在什麼時間修改了哪些資料。" },
  { term: "API", value: "讓前台、後台、查核端或外部系統能互相串接。" },
  { term: "Dashboard", value: "讓資料狀態、稽核結果與異常訊號可以被管理者掌握。" },
];
