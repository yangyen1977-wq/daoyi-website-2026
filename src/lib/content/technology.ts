export const technologyHero = {
  eyebrow: "Technology Core",
  title: "把資料變成可被查核的證據鏈",
  lead:
    "可信資料不是把資料存起來而已，而是要能回答：資料從哪裡來、誰更新過、是否被修改、何時存在、能不能被第三方查核。",
  body:
    "道易科技以 Ontology 語義建模為起點，結合 Hash、Merkle Tree、IPFS、TSA 時戳、API、Audit Trail 與 AI / AIoT 校驗，建立資料從產生、標準化、封存、驗證到稽核查詢的完整信任鏈。",
  signals: ["資料語意一致", "完整性可驗證", "時間版本可追溯", "稽核查詢可落地"],
};

export const technologyHeroFlow = [
  { title: "Data Sources", detail: "設備 / 文件 / 表單 / API / 影像" },
  { title: "Ontology Model", detail: "實體 / 欄位 / 關係 / 規則" },
  { title: "Hash / Merkle Proof", detail: "資料指紋 / 批次驗證 / Root Hash" },
  { title: "Time & Evidence", detail: "IPFS / TSA / Audit Trail" },
  { title: "Audit Query", detail: "Dashboard / DPP Page / API / Audit View" },
];

export const dataToEvidencePrinciples = [
  {
    title: "讓資料被理解",
    problem: "不同部門、系統或供應商使用不同欄位與語言，資料很難被整合與長期維護。",
    method: "以 Ontology 定義實體、欄位、關係、角色與規則，讓資料用同一套語意被管理。",
    value: "資料可以被交換、搜尋、擴充，也能支撐後續 AI、API 與知識圖譜應用。",
  },
  {
    title: "讓資料被驗證",
    problem: "只保存資料，無法證明資料是否被修改，也難以快速驗證大量批次資料。",
    method: "為資料建立 Hash 指紋，並透過 Merkle Tree 將大量資料聚合成 Root Hash。",
    value: "不用公開原始資料，也能驗證資料完整性，並支援批次抽驗與第三方查核。",
  },
  {
    title: "讓資料有時間證明",
    problem: "稽核時常需要證明某筆資料在某個時間點已經存在，而不是事後補登。",
    method: "透過 TSA 時戳、Root Hash 錨定與證據保存，建立資料存在時間與封存紀錄。",
    value: "資料版本、時間邊界與爭議處理更清楚。",
  },
  {
    title: "讓資料被稽核與運用",
    problem: "資料即使被整理，也需要讓管理者、合作方、稽核者或前台使用者在正確權限下查詢。",
    method: "透過 API、Dashboard、DPP 查詢頁、Audit Trail 與角色權限，設計查詢與驗證流程。",
    value: "資料不只是存在後台，而是能成為對外揭露、內部治理與第三方查核的系統能力。",
  },
];

export const technologyTrustFlow = [
  { title: "資料產生", detail: "設備、文件、影像、表單、產品履歷、研究資料或既有系統資料進入平台。" },
  { title: "Ontology 標準化", detail: "定義實體、欄位、關係、角色權限與驗證規則，讓資料能被理解、交換與長期維護。" },
  { title: "資料校驗", detail: "檢查欄位完整性、格式一致性、來源關係與必要規則，降低錯誤資料進入信任鏈。" },
  { title: "Hash 指紋", detail: "為單筆資料或批次資料建立不可逆的完整性指紋，不公開原始資料也能進行驗證。" },
  { title: "Merkle Tree 聚合", detail: "將多筆資料指紋聚合成 Root Hash，支援大量資料的批次驗證與單筆抽驗。" },
  { title: "證據保存", detail: "保存關鍵檔案、內容指紋、附件與資料關聯，形成可追溯的外部驗證線索。" },
  { title: "TSA 時戳與 Root Hash 錨定", detail: "為 Root Hash 或關鍵證據加上可信時間證明，讓資料封存時間與版本邊界更清楚。" },
  { title: "API 與稽核查詢", detail: "透過 API、Dashboard、DPP 查詢頁或稽核介面，提供資料查詢與驗證結果。" },
  { title: "Audit Trail 與權限", detail: "記錄資料建立、修改、簽核、查詢與驗證行為，並依角色控制可見範圍。" },
];

export const technologyModules = [
  {
    title: "Ontology 語義建模",
    question: "這筆資料是什麼？欄位代表什麼？不同系統的資料能不能用同一套語言理解？",
    usage: "定義產品、材料、設備、批次、人物、作品、事件、地點、組織與文件等核心實體，再定義欄位、關係、驗證規則與角色權限。",
    deliverables: ["資料模型", "欄位藍圖", "實體關係圖", "查詢場景設計", "資料治理規則"],
  },
  {
    title: "Hash / Merkle Tree",
    question: "資料有沒有被改過？某筆資料是否屬於某一批可信紀錄？",
    usage: "為單筆資料建立 Hash 指紋，再用 Merkle Tree 聚合大量資料，形成可驗證的 Root Hash。",
    deliverables: ["Hash 規則", "Merkle 驗證流程", "批次封存機制", "抽驗流程設計"],
  },
  {
    title: "IPFS 與證據保存",
    question: "檔案、影像、附件與原始證據如何被保存、對應與追溯？",
    usage: "將關鍵證據、檔案或內容指紋保存於可追溯架構，並記錄資料與證據之間的關聯。",
    deliverables: ["證據保存架構", "附件關聯規則", "內容指紋設計", "外部查核線索"],
  },
  {
    title: "TSA 時戳與 Root Hash 錨定",
    question: "資料在什麼時間點已經存在？後續是否可能事後補登或替換？",
    usage: "將 Root Hash 或關鍵證據送出時間戳驗證，保留可查核的時間證明與錨定紀錄。",
    deliverables: ["時間戳流程", "Root Hash 錨定紀錄", "批次封存規則", "稽核佐證文件"],
  },
  {
    title: "API 與異質系統整合",
    question: "既有 ERP、MES、IoT、資料庫、前台網站或第三方系統，如何接入可信資料流程？",
    usage: "依資料來源、角色權限與查詢場景設計 API，串接既有系統、設備資料、DPP 查詢頁與稽核流程。",
    deliverables: ["API 規格", "資料交換流程", "系統串接規劃", "Dashboard 或查詢頁介面"],
  },
  {
    title: "AI / AIoT 校驗",
    question: "現場資料、影像、文本與感測資料在進入平台前，如何降低人工輸入與資料錯誤？",
    usage: "依場景導入 OCR、語意擷取、影像辨識、設備資料串接或異常偵測，協助資料先被整理與初步校驗。",
    deliverables: ["OCR / NLP 流程", "影像辨識串接", "感測資料接入", "異常偵測規則"],
  },
  {
    title: "Audit Trail 與角色權限",
    question: "誰建立資料？誰修改資料？誰查詢資料？誰驗證資料？不同角色可以看到哪些內容？",
    usage: "建立操作紀錄、角色權限、查核結果與資料狀態，支援內控、外部稽核與長期維運。",
    deliverables: ["權限設計", "操作紀錄", "查核紀錄", "角色流程", "稽核後台"],
  },
];

export const technologySolutionMap = [
  {
    title: "數據信任鏈與高效稽核平台",
    fit: "ESG、回收、供應鏈或第三方查核資料，需要被追溯、驗證與對外說明。",
    support: "Ontology 建立資料模型與稽核規則；Hash / Merkle Tree 建立完整性證明；TSA、Root Hash、Dashboard 與 API 支援快速抽驗與對外佐證。",
    href: "/solutions#data-trust-chain",
    cta: "看數據信任鏈方案",
  },
  {
    title: "DPP 數位產品護照",
    fit: "產品資料、材料、製程、碳資訊、供應鏈與回收資訊，需要被掃描、查詢與揭露。",
    support: "Ontology 定義產品生命週期欄位；API 串接後台資料；QR 查詢頁呈現對外資訊；必要時保留資料完整性與時間證明。",
    href: "/solutions#dpp-product-passport",
    cta: "看 DPP 方案",
  },
  {
    title: "AI-Ontology 知識平台",
    fit: "人物、文本、作品、事件、地點、研究資料或典藏資料，需要被搜尋、關聯與長期維護。",
    support: "Ontology 建立知識模型；OCR / NLP 輔助資料整理；Knowledge Graph 呈現關係；後台治理資料品質與版本。",
    href: "/solutions#ai-ontology-platform",
    cta: "看 AI-Ontology 方案",
  },
  {
    title: "AIoT 回收履歷整合",
    fit: "設備、感測器、影像辨識與現場作業資料，需要接回管理平台形成可追蹤履歷。",
    support: "AIoT 串接現場資料；影像辨識與異常偵測輔助校驗；數據信任鏈保留後續 ESG、DPP 或稽核證據。",
    href: "/solutions#aiot-traceability",
    cta: "看 AIoT 回收履歷方案",
  },
];

export const technologyDeliverables = [
  { title: "資料模型與欄位藍圖", detail: "整理資料來源、核心實體、欄位、關係、角色與更新規則。" },
  { title: "資料信任鏈流程圖", detail: "標示哪些資料節點需要驗證、封存、時間證明、查詢或稽核。" },
  { title: "Hash / Merkle / TSA 驗證流程", detail: "設計資料完整性、批次驗證、時間證明與第三方抽驗方式。" },
  { title: "Dashboard / DPP 查詢頁原型", detail: "讓管理者、稽核者、供應鏈或使用者能看見資料狀態與驗證結果。" },
  { title: "API 與系統串接規劃", detail: "整理既有系統如何接入，降低重複輸入與資料斷裂。" },
  { title: "Audit Trail 與權限設計", detail: "定義誰能建立、修改、查詢、驗證資料，以及哪些紀錄需要被保存。" },
  { title: "PoC / MVP 導入路線", detail: "用一個產品、一條流程、一批資料或一個知識主題先驗證可行性。" },
];

export const technologyStartModes = [
  {
    title: "資料信任鏈健檢",
    fit: "已有資料平台、Dashboard、後台或資料庫，但缺少驗證、時間證明、稽核流程或權限治理的團隊。",
    deliverables: ["資料來源盤點", "稽核節點盤點", "信任缺口分析", "技術導入優先序", "PoC 或 MVP 建議範圍"],
    cta: "我想做資料信任鏈健檢",
  },
  {
    title: "DPP / ESG PoC",
    fit: "想用一個產品、一條流程或一批資料，先驗證 DPP、ESG 揭露、回收履歷或供應鏈查核可行性的團隊。",
    deliverables: ["DPP / ESG 欄位藍圖", "QR 查詢頁或 Dashboard 原型", "Hash / Merkle 驗證流程草案", "後台資料管理流程", "MVP 範圍建議"],
    cta: "我想做 DPP / ESG PoC",
  },
  {
    title: "AI-Ontology Workshop",
    fit: "有大量文本、人物、作品、事件、地點、研究資料或典藏資料，需要整理成知識平台的團隊。",
    deliverables: ["核心實體與關係草案", "查詢場景盤點", "OCR / 語意擷取流程建議", "知識圖譜或關係視覺化方向", "平台模組優先序"],
    cta: "我想安排 AI-Ontology Workshop",
  },
];

export const technologyFaqs = [
  {
    question: "一定要把所有資料公開嗎？",
    answer: "不需要。多數情境下，可以透過 Hash、Merkle Tree 與時間證明來驗證資料完整性，不必公開原始資料內容。真正要公開的是查詢結果、驗證狀態或必要揭露欄位。",
  },
  {
    question: "我們已經有 ERP、MES、IoT 或資料庫，還需要重做系統嗎？",
    answer: "不一定。道易通常會先盤點既有資料來源與更新流程，再判斷哪些資料需要接入 API、Dashboard、DPP 查詢頁或稽核流程。目標是降低重複輸入，而不是強迫組織推翻既有系統。",
  },
  {
    question: "AI 在這套技術裡扮演什麼角色？",
    answer: "AI 適合協助資料擷取、OCR、語意整理、影像辨識、異常偵測與初步校驗。但可信資料的核心仍然是資料模型、證據鏈、版本紀錄、時間證明與稽核流程。",
  },
  {
    question: "DPP、ESG、回收履歷與知識平台可以共用同一套底層技術嗎？",
    answer: "可以共用資料模型、API、權限、Audit Trail 與驗證流程，但不同情境會有不同欄位、角色、揭露範圍與查詢介面。建議先從一個產品、一條流程或一批資料開始。",
  },
  {
    question: "第一次討論前需要準備什麼？",
    answer: "建議準備四件事：目前資料來源、資料更新方式、誰會查詢資料、資料未來要支撐的用途。例如 DPP、ESG 查核、供應鏈揭露、研究查詢、內部管理或第三方稽核。",
  },
];
