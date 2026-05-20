export const solutionsHero = {
  eyebrow: "Solutions",
  title: "不是單點系統開發，而是把資料、證據、稽核與前台體驗接成可驗證平台。",
  description:
    "道易科技以數據信任鏈為底座，提供 DPP 數位產品護照、ESG 高效稽核、AI-Ontology 知識平台與 AIoT 回收履歷整合，協助企業、政府與研究機構把分散資料轉化為可追溯、可查核、可運用的可信任資產。",
};

export const solutionMap = [
  {
    title: "數據信任鏈與高效稽核平台",
    description: "將流程紀錄、產品資料、回收履歷與 ESG 數據轉化為可驗證證據。",
    bestFor: "需要第三方稽核、外部查核、供應鏈追溯或 ESG 資料佐證的團隊。",
    outcomes: ["可追溯資料流程", "Hash / Merkle 驗證機制", "Root Hash 與時間證明", "稽核 Dashboard", "API 查核接口"],
  },
  {
    title: "DPP 數位產品護照",
    description: "為產品建立可查詢、可追溯、可合規的數位身分。",
    bestFor: "需要整理產品材料、製程、碳足跡、回收資訊或 QR Code 對外揭露的團隊。",
    outcomes: ["產品資料欄位藍圖", "DPP QR 查詢頁", "產品生命週期資料模型", "後台資料管理", "API 串接規劃"],
  },
  {
    title: "AI-Ontology 知識平台",
    description: "將文本、人物、事件、地點與資料庫轉化為可搜尋、可分析的知識網絡。",
    bestFor: "研究、文化、人物、作品或文本資料龐雜，需要語意搜尋、知識圖譜、OCR 或 AI 擷取流程的團隊。",
    outcomes: ["Ontology 草案", "資料欄位與關係設計", "語意搜尋流程", "知識圖譜或關聯視覺", "前台展示與後台維護介面"],
  },
  {
    title: "AIoT 回收履歷整合",
    description: "串接設備、影像辨識、感測資料與回收流程，讓現場資料可以被追蹤與驗證。",
    bestFor: "現場資料仍以人工紀錄或單點設備資料為主，需要接回 ESG、DPP 或稽核平台的團隊。",
    outcomes: ["現場資料採集設計", "影像辨識或 AIoT 串接", "回收履歷資料模型", "異常偵測與一致性校驗", "稽核資料輸出"],
  },
];

export const solutionDetails = [
  {
    eyebrow: "Data Trust Chain",
    title: "從資料紀錄到可信證據，打造可稽核的數據信任鏈。",
    description:
      "許多企業已經有資料，但資料若缺乏來源、版本、時間、權限與驗證機制，到了 ESG 揭露、第三方查核、供應鏈透明或爭議處理時，仍然難以被信任。",
    audience: ["回收處理與再生資源業者", "ESG、碳盤查與驗證單位", "綠色金融與需要可信一手資料的機構", "需要供應鏈追溯的製造與品牌企業"],
    problems: ["資料來源分散，難以追溯", "資料修改紀錄不清楚，難以證明完整性", "外部查核者無法快速驗證單筆或批次資料"],
    deliverables: ["資料信任鏈架構圖", "資料模型與證據模型", "Hash / Merkle 驗證流程", "稽核 Dashboard 原型", "API 查核接口規劃"],
    technologies: "Ontology、Hash、Merkle Tree、IPFS、TSA、Root Hash、API、Audit Trail、Dashboard",
  },
  {
    eyebrow: "Digital Product Passport",
    title: "為產品建立可查詢、可追溯、可合規的數位身分。",
    description:
      "DPP 不只是做一個產品介紹頁，而是要把材料、製程、環境資訊、維修與回收資料整理成一致的資料結構。",
    audience: ["製造品牌與出口企業", "材料供應鏈與零組件廠商", "循環經濟與回收相關團隊", "想先用 PoC 驗證 DPP 可行性的團隊"],
    problems: ["產品資料分散在不同部門、供應商或檔案中", "對外揭露缺乏一致格式", "QR Code 查詢頁有了，但後台資料治理不足"],
    deliverables: ["DPP 欄位藍圖", "產品生命週期資料模型", "QR Code 查詢頁原型", "DPP 後台資料管理流程", "DPP PoC 或 MVP"],
    technologies: "DPP、QR Code、Product Data Model、API、Ontology、Traceability、Dashboard",
  },
  {
    eyebrow: "AI-Ontology Knowledge Platform",
    title: "讓龐雜資料變成可搜尋、可分析、可理解的知識網絡。",
    description:
      "研究、文化、人物、文本、作品與事件資料通常不是單純的表格資料。它們有脈絡、關係、時序、來源與詮釋。",
    audience: ["博物館、圖書館、文化館所", "大學與研究中心", "政府資料平台", "國際研究合作計畫"],
    problems: ["資料量很大，但使用者找不到真正需要的內容", "人物、作品、事件、地點之間的關係無法被呈現", "前台展示與後台資料治理沒有接在一起"],
    deliverables: ["Ontology 草案", "資料欄位與關係設計", "OCR / 語意擷取流程", "知識圖譜或關係視覺化", "研究資料庫或文化資料平台"],
    technologies: "Ontology、OCR、NLP、Semantic Search、Knowledge Graph、Data Platform、Visualization",
  },
  {
    eyebrow: "AIoT Traceability",
    title: "從設備現場開始，建立真實可驗證的回收資料。",
    description:
      "回收與現場作業的資料如果只靠人工輸入，很難支撐後續稽核、ESG 揭露或 DPP 延伸。",
    audience: ["太陽能板回收與再生資源處理業者", "需要現場流程資料化的設備商", "需要影像辨識或感測資料串接的團隊"],
    problems: ["現場作業資料與管理系統斷裂", "影像、設備、感測器與人工紀錄無法互相驗證", "回收流程缺乏可追溯履歷"],
    deliverables: ["現場資料流程圖", "回收履歷欄位設計", "AIoT / 影像辨識串接規劃", "異常偵測與一致性校驗規則", "回收履歷 Dashboard 原型"],
    technologies: "AIoT、YOLO、Sensor Data、API、Traceability、Dashboard、Data Validation、ESG Audit",
  },
];

export const solutionStartModes = [
  {
    title: "DPP / ESG PoC",
    detail: "適合想先驗證 DPP 或 ESG 稽核可行性的企業，或已有產品資料與回收流程但還沒有統一資料模型的團隊。",
    fit: "輸出：資料欄位藍圖、QR 查詢頁或 Dashboard 原型、Hash / Merkle 驗證流程草案、MVP 範圍建議。",
  },
  {
    title: "AI-Ontology Workshop",
    detail: "適合有大量文本、人物、作品、事件或研究資料，想導入語意搜尋、知識圖譜或 AI 輔助查詢的組織。",
    fit: "輸出：核心實體與關係草案、查詢場景與使用角色盤點、前台展示與後台維護模組建議。",
  },
  {
    title: "資料信任鏈盤點",
    detail: "適合已有資料平台，但資料可信度、版本、時間證明或稽核流程不足的團隊。",
    fit: "輸出：資料來源與稽核節點盤點、風險與缺口分析、證據模型草案、信任鏈導入路線。",
  },
];
