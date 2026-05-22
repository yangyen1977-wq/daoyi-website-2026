export const technologyHero = {
  eyebrow: "Technology Core",
  title: "把資料變成可被查核的證據鏈",
  lead:
    "可信資料不只是把資料存起來，而是能說明來源、版本、時間、修改紀錄與查核方式。",
  body:
    "道易以 Ontology 語義建模為起點，結合 Hash、Merkle Tree、TSA、API、Audit Trail 與 AI / AIoT 校驗，協助資料從產生到稽核查詢都有清楚脈絡。",
  signals: ["語意一致", "完整性可驗證", "時間版本可追溯", "查核介面可落地"],
};

export const technologyHeroFlow = [
  { title: "Data Sources", detail: "設備 / 文件 / 表單 / API / 影像" },
  { title: "Ontology Model", detail: "實體 / 欄位 / 關係 / 規則" },
  { title: "Proof Layer", detail: "Hash / Merkle Tree / Root Hash" },
  { title: "Evidence Layer", detail: "TSA / Audit Trail / Evidence" },
  { title: "Query Layer", detail: "Dashboard / DPP Page / API" },
];

export const technologyTrustFlow = [
  { title: "資料進入", detail: "設備、文件、影像、表單、產品履歷或既有系統資料進入平台。" },
  { title: "Ontology 標準化", detail: "定義欄位、關係、角色與規則，讓資料能被理解與維護。" },
  { title: "資料校驗", detail: "檢查格式、來源、必填欄位與關聯，降低錯誤資料進入流程。" },
  { title: "Hash 指紋", detail: "為資料建立不可逆的完整性指紋，支援後續驗證。" },
  { title: "Merkle 聚合", detail: "把多筆資料聚合成 Root Hash，方便批次驗證與單筆抽驗。" },
  { title: "時間與證據", detail: "透過 TSA、證據保存與操作紀錄，留下版本與時間脈絡。" },
  { title: "查詢與稽核", detail: "透過 Dashboard、API、DPP 查詢頁或稽核介面呈現結果。" },
];

export const technologyModules = [
  {
    title: "Ontology 語義建模",
    question: "資料代表什麼？不同系統能不能用同一套語言理解？",
    usage: "定義產品、材料、設備、批次、人物、作品、事件、地點與文件等核心實體與關係。",
    deliverables: ["資料模型", "欄位藍圖", "實體關係圖", "資料治理規則"],
  },
  {
    title: "Hash / Merkle Tree",
    question: "資料有沒有被改過？某筆資料是否屬於可信批次？",
    usage: "為單筆資料建立 Hash 指紋，再用 Merkle Tree 聚合大量資料形成 Root Hash。",
    deliverables: ["Hash 規則", "Merkle 驗證流程", "批次封存機制"],
  },
  {
    title: "TSA 與證據保存",
    question: "資料在什麼時間點存在？附件與證據如何追溯？",
    usage: "保留時間戳、Root Hash 錨定紀錄、附件關聯與內容指紋。",
    deliverables: ["時間戳流程", "證據保存架構", "稽核佐證文件"],
  },
  {
    title: "API 與系統整合",
    question: "既有 ERP、MES、IoT、資料庫或前台如何接入？",
    usage: "依資料來源、權限與查詢場景設計 API，串接既有系統、查詢頁與稽核流程。",
    deliverables: ["API 規格", "資料交換流程", "Dashboard 或查詢頁"],
  },
  {
    title: "AI / AIoT 校驗",
    question: "影像、文本與感測資料如何降低人工輸入錯誤？",
    usage: "依場景導入 OCR、語意擷取、影像辨識、設備資料串接或異常偵測。",
    deliverables: ["OCR / NLP 流程", "影像辨識串接", "異常偵測規則"],
  },
  {
    title: "Audit Trail 與角色權限",
    question: "誰建立、修改、查詢、驗證資料？不同角色能看什麼？",
    usage: "建立操作紀錄、角色權限、查核結果與資料狀態，支援內控與外部稽核。",
    deliverables: ["權限設計", "操作紀錄", "查核紀錄"],
  },
];

export const technologySolutionMap = [
  {
    title: "數據信任鏈與高效稽核平台",
    fit: "ESG、回收、供應鏈或第三方查核資料，需要被追溯、驗證與對外說明。",
    support: "用資料模型、Hash / Merkle Tree、TSA、Dashboard 與 API 建立查核脈絡。",
    href: "/solutions#data-trust-chain",
    cta: "看數據信任鏈方案",
  },
  {
    title: "DPP 數位產品護照",
    fit: "產品、材料、製程、供應鏈與回收資訊需要被掃描、查詢與揭露。",
    support: "用產品資料模型、API、QR 查詢頁與必要的完整性證明支撐 DPP。",
    href: "/solutions#dpp-product-passport",
    cta: "看 DPP 方案",
  },
  {
    title: "AI-Ontology 知識平台",
    fit: "人物、文本、作品、事件、地點或研究資料需要被搜尋、關聯與維護。",
    support: "用 Ontology、OCR / NLP、Knowledge Graph 與後台治理支撐知識平台。",
    href: "/solutions#ai-ontology-platform",
    cta: "看 AI-Ontology 方案",
  },
  {
    title: "AIoT 回收履歷整合",
    fit: "設備、感測器、影像辨識與現場資料需要接回管理平台。",
    support: "用 AIoT、影像辨識、異常偵測與資料信任鏈建立可追蹤履歷。",
    href: "/solutions#aiot-traceability",
    cta: "看 AIoT 回收履歷方案",
  },
];

export const technologyStartModes = [
  {
    title: "資料信任鏈健檢",
    fit: "已有資料平台、Dashboard、後台或資料庫，但缺少驗證、時間證明或稽核流程。",
    deliverables: ["資料來源盤點", "信任缺口分析", "PoC 或 MVP 建議範圍"],
    cta: "我想做資料信任鏈健檢",
  },
  {
    title: "DPP / ESG PoC",
    fit: "想用一個產品、一條流程或一批資料，先驗證揭露或查核可行性。",
    deliverables: ["欄位藍圖", "QR 查詢頁或 Dashboard 原型", "驗證流程草案"],
    cta: "我想做 DPP / ESG PoC",
  },
  {
    title: "AI-Ontology Workshop",
    fit: "有大量文本、人物、作品、事件或研究資料，需要整理成知識平台。",
    deliverables: ["核心實體與關係草案", "查詢場景盤點", "平台模組優先序"],
    cta: "我想安排 AI-Ontology Workshop",
  },
];
