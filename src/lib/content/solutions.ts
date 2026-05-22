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
    title: "讓 ESG、回收與供應鏈資料，從分散紀錄變成可查核證據",
    summary: "不只是保存資料，而是讓來源、時間、版本、修改紀錄與驗證方式，能在稽核與對外揭露時被清楚說明。",
    audience: ["ESG、碳盤查、回收履歷或供應鏈透明相關團隊", "已有資料平台但缺少版本、時間、來源與稽核證據的組織", "需要降低查核整理成本的管理者與技術窗口", "需要供應鏈透明的製造商與品牌"],
    problems: ["資料散在 Excel、表單、設備、人工紀錄或不同系統中", "資料被修改後，難以說明版本、時間與責任歸屬", "稽核時需要大量人工補件，查核效率低", "對外揭露時，缺少能被第三方理解的證據脈絡"],
    approach: "先盤點資料來源與稽核節點，再設計資料模型、證據模型、Hash / Merkle 驗證流程、Dashboard 與 API 查核介面，讓資料從保存進一步變成可被驗證。",
    deliverables: ["資料來源與稽核節點盤點", "證據模型與資料流程圖", "Hash / Merkle 驗證流程草案", "稽核 Dashboard 原型", "API 查核接口規劃"],
    technologies: ["Ontology", "Hash", "Merkle Tree", "TSA", "Audit Trail", "API", "Dashboard"],
    cases: ["太陽能板回收 YOLO 辨識與履歷"],
    cta: "我想盤點資料信任鏈",
  },
  {
    id: "dpp-product-passport",
    eyebrow: "Digital Product Passport",
    title: "為產品建立可掃描、可更新、可對外揭露的數位身分",
    summary: "把產品材料、製程、供應鏈、環境資訊與回收指引，整理成能被管理、查詢、更新與揭露的 DPP 架構。",
    audience: ["製造品牌、出口企業、材料供應商與零組件廠商", "想推動 DPP、QR 查詢、產品履歷或供應鏈透明的團隊", "希望先用一個產品或一組 SKU 驗證 DPP 可行性的組織", "循環經濟、回收與再利用團隊"],
    problems: ["產品資料分散在不同部門、供應商、文件或表單中", "已有產品介紹頁，但後台資料治理不足", "欄位規則不一致，難以擴充到更多產品", "對外揭露內容與內部管理資料沒有接起來"],
    approach: "協助建立 DPP 欄位藍圖、產品生命週期資料模型、QR Code 查詢頁與後台維護流程，讓產品資料不只是一次性展示，而是能長期更新、管理與揭露。",
    deliverables: ["DPP 欄位藍圖", "產品生命週期資料模型", "QR Code 查詢頁原型", "後台資料管理流程", "DPP PoC 或 MVP 範圍建議"],
    technologies: ["DPP", "QR Code", "Product Data Model", "API", "Ontology", "Traceability"],
    cases: ["Easy DPP 數位產品護照"],
    cta: "我想做 DPP PoC",
  },
  {
    id: "ai-ontology-platform",
    eyebrow: "AI-Ontology Knowledge Platform",
    title: "把人物、文本、事件與研究資料，整理成可搜尋、可分析的知識網絡",
    summary: "用 Ontology、語意模型與 AI 輔助流程，讓複雜知識資料能被搜尋、探索、分析與長期維護。",
    audience: ["政府、學研、文化館所、博物館、圖書館與研究中心", "擁有大量人物、作品、事件、地點、文本或館藏資料的單位", "想導入語意搜尋、知識圖譜或 AI 輔助整理的團隊", "大學、研究中心與國際研究計畫"],
    problems: ["資料量很大，但使用者找不到真正需要的內容", "人物、作品、事件、地點之間的關係難以呈現", "前台展示與後台資料管理沒有接在一起", "AI 可以輔助整理，但缺少資料模型與品質控管流程"],
    approach: "以 Ontology 定義核心實體、欄位、關係與查詢情境，再結合 OCR、NLP、語意擷取、知識圖譜與後台治理流程，讓複雜知識資料能被搜尋、探索與長期維護。",
    deliverables: ["Ontology 草案", "核心實體與關係設計", "OCR / NLP / 語意擷取流程建議", "知識圖譜或關係視覺化原型", "研究資料庫或文化資料平台規劃"],
    technologies: ["Ontology", "OCR", "NLP", "Semantic Search", "Knowledge Graph", "Visualization"],
    cases: ["國立臺灣文學館好臺誌、外譯房", "Taiwan Biographical Ontology"],
    cta: "我想規劃 AI-Ontology 工作坊",
  },
  {
    id: "aiot-traceability",
    eyebrow: "AIoT Traceability",
    title: "把設備、影像與現場流程資料，串成可追溯的回收履歷",
    summary: "把設備、感測器、影像辨識、人工紀錄與管理系統接在一起，讓回收流程能被查詢、追蹤與延伸查核。",
    audience: ["回收處理、再生資源、循環經濟與 ESG 團隊", "需要把現場設備、感測器、影像辨識與管理系統接起來的組織", "想將回收履歷延伸到 ESG 查核、DPP 或資料信任鏈的團隊", "需要現場流程資料化的設備商"],
    problems: ["現場作業資料與管理系統斷裂", "影像、設備、感測器與人工紀錄無法互相驗證", "回收流程缺少批次、來源、時間與狀態追蹤", "後續 ESG 揭露或 DPP 延伸缺少可信資料來源"],
    approach: "先整理現場流程與資料節點，再規劃 AIoT 串接、影像辨識、異常校驗、批次追蹤與 Dashboard，讓現場資料回到管理平台，形成可查詢、可追溯、可延伸的履歷資料。",
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
    title: "資料信任鏈盤點",
    fit: "已有資料平台、流程紀錄或 ESG 資料，但可信度、版本、時間證明或稽核流程不足。",
    deliverables: ["資料來源盤點", "風險缺口分析", "證據模型草案", "導入路線"],
    cta: "我想先做資料盤點",
  },
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
    title: "Email / NDA 路徑",
    fit: "需求涉及未公開產品、供應鏈資料、採購、研發資訊或內部流程，暫時不適合直接填完整需求。",
    deliverables: ["保密溝通邊界", "初步會議範圍", "可提供資料清單", "下一步安排"],
    cta: "我想先用 Email / NDA",
  },
];

export const solutionCaseEvidence = [
  {
    title: "Easy DPP 數位產品護照",
    solution: "DPP 數位產品護照",
    detail: "將產品材料、來源、製程、環境資訊與回收指引整理成可管理的 DPP 架構，讓產品資料從靜態介紹升級為可維護的數位身分。",
  },
  {
    title: "太陽能板回收 YOLO 辨識與履歷",
    solution: "數據信任鏈 / AIoT 回收履歷",
    detail: "把影像辨識、設備資料與回收流程紀錄接回履歷平台，支援 ESG 稽核、DPP 延伸與資料來源追蹤。",
  },
  {
    title: "國立臺灣文學館好臺誌、外譯房",
    solution: "AI-Ontology 知識平台",
    detail: "將文學與文化資料整理成可查詢、可展示、可維護的資料結構，支援公共展示與研究資料使用。",
  },
  {
    title: "Taiwan Biographical Ontology",
    solution: "國際研究 / 人物本體",
    detail: "以人物、組織、地點、職位與來源資料建立可探索、可分析、可擴充的研究知識平台。",
  },
  {
    title: "香港中文大學圖書館傳記資料庫",
    solution: "資料平台 / 系統整合",
    detail: "支援人物資料結構、分類與前台查詢設計，讓傳記資料更容易被研究者與公眾查找與使用。",
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
  { term: "Semantic Search", value: "讓使用者用概念、脈絡與關係找到資料，而不只依賴關鍵字。" },
];

export const solutionFaqs = [
  {
    question: "我不知道該做 DPP、ESG 稽核平台，還是資料信任鏈，怎麼開始？",
    answer: "可以先從資料信任鏈盤點開始。道易會協助整理資料來源、對外揭露需求、查核節點、使用角色與第一階段 PoC 範圍，再判斷適合走 DPP、ESG 稽核、AI-Ontology 或系統整合。",
  },
  {
    question: "資料還不完整，可以先做嗎？",
    answer: "可以。早期不一定要有完整資料庫，反而適合先用一個產品、一條流程、一批資料或一個知識主題做 PoC，確認欄位、維護流程、查詢方式與驗證需求。",
  },
  {
    question: "如果內容涉及供應鏈、採購或研發機密怎麼辦？",
    answer: "可以先走 Email / NDA 路徑。第一次只需要描述高階情境、目標與限制，等確認保密邊界後再提供較細的資料或流程內容。",
  },
  {
    question: "道易會直接替我們承諾合規或認證結果嗎？",
    answer: "不會誇大承諾。道易協助建立可追溯、可查核、可維護的資料平台與證據流程；實際認證、查核或合規判定仍需依第三方機構、法規與客戶資料狀態確認。",
  },
  {
    question: "第一階段通常會拿到什麼？",
    answer: "依起手方式不同，常見成果包含資料來源盤點、欄位藍圖、證據模型草案、QR 查詢頁或 Dashboard 原型、Ontology 草案、API 規劃與 PoC / MVP 範圍建議。",
  },
];
