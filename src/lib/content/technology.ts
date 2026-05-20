export const technologyHero = {
  eyebrow: "Technology Core",
  title: "可信資料不是口號，而是一套可被查核的技術流程。",
  description:
    "道易科技以 Ontology 語義建模為起點，結合 Hash、Merkle Tree、IPFS、TSA 時戳、API、Audit Trail 與 AI/AIoT 校驗，建立資料從產生、標準化、封存、驗證到稽核查詢的完整信任鏈。",
};

export const dataToEvidencePrinciples = [
  {
    title: "先讓資料被理解",
    detail: "透過 Ontology 定義實體、欄位、關係與規則，讓不同來源的資料能用同一套語言被管理與交換。",
  },
  {
    title: "再讓資料被驗證",
    detail: "透過 Hash、Merkle Tree、IPFS 與 TSA，為資料建立完整性、批次驗證、內容追溯與時間證明。",
  },
  {
    title: "最後讓資料被稽核與運用",
    detail: "透過 API、Dashboard、Audit Trail 與角色權限，讓管理者、稽核者、供應鏈或使用者能在合適權限下查詢與驗證。",
  },
];

export const technologyTrustFlow = [
  { title: "資料產生", detail: "設備、文件、影像、表單、產品履歷、研究資料或既有系統資料進入平台。" },
  { title: "Ontology 標準化", detail: "定義實體、欄位、關係、角色權限與驗證規則，讓資料能被理解、交換與長期維護。" },
  { title: "Hash 指紋", detail: "為資料或批次資料建立不可逆的完整性指紋，不公開原始資料也能進行完整性驗證。" },
  { title: "Merkle Tree 聚合", detail: "將大量資料指紋聚合成 Root Hash，支援批次資料驗證與單筆抽驗。" },
  { title: "IPFS 與證據保存", detail: "保存關鍵證據、檔案與內容指紋，形成可追溯的外部驗證線索。" },
  { title: "TSA 時戳", detail: "為 Root Hash 或關鍵證據加上可信時間證明，避免資料事後補登卻難以辨識。" },
  { title: "Root Hash 錨定", detail: "將經過驗證與時間證明的 Root Hash 錨定為可供第三方查核的信任節點。" },
  { title: "API 與稽核查詢", detail: "透過 API、Dashboard、DPP 查詢頁或稽核介面提供資料查詢與驗證結果。" },
  { title: "Audit Trail 與權限", detail: "記錄資料建立、修改、簽核、查詢與驗證行為，並依角色控制可見範圍。" },
];

export const technologyModules = [
  {
    title: "Ontology 語義建模",
    problem: "資料來源不同、欄位名稱不同、使用者理解不同，導致後續查詢、交換、稽核與 AI 應用都容易失準。",
    usage: "先定義產品、材料、設備、批次、人物、作品、事件、地點、組織與文件等核心實體，再定義欄位、關係與規則。",
    capabilities: ["資料欄位有一致語意", "支援跨系統整合", "支援語意搜尋與知識圖譜", "支援資料驗證與規則檢查"],
  },
  {
    title: "Hash / Merkle Tree",
    problem: "大量資料若只靠人工比對，不但負擔高，也難以快速驗證特定資料是否被修改或是否屬於某批可信紀錄。",
    usage: "先為單筆資料建立 Hash 指紋，再透過 Merkle Tree 將多筆資料聚合成 Root Hash。",
    capabilities: ["單筆資料完整性驗證", "大批量資料快速抽驗", "降低人工查核負擔", "支援第三方稽核場景"],
  },
  {
    title: "IPFS 與證據保存",
    problem: "檔案、影像與附件若只存在單一系統，後續很難證明內容未被替換，也容易失去追溯線索。",
    usage: "將關鍵證據、檔案或內容指紋保存於可追溯架構，記錄資料與證據之間的關聯。",
    capabilities: ["內容指紋追溯", "降低單點竄改風險", "讓證據與資料紀錄可互相對應", "支援長期保存與外部查核"],
  },
  {
    title: "TSA 時間戳與 Root Hash 錨定",
    problem: "資料在什麼時間存在，是稽核與爭議處理中的關鍵；缺少可信時間證明時，資料容易被質疑。",
    usage: "將 Root Hash 或關鍵證據送出時間戳驗證，並保留可供查核的時間證明與錨定紀錄。",
    capabilities: ["證明資料在特定時間點已存在", "強化稽核與爭議處理能力", "讓批次資料有清楚時間邊界", "支援外部查核者驗證"],
  },
  {
    title: "API 與異質系統整合",
    problem: "企業與機構通常已有 ERP、MES、IoT、資料庫、前台網站或第三方系統，可信資料平台必須能串接既有流程。",
    usage: "依資料來源、角色權限與查詢場景設計 API，串接既有系統、設備資料、前台 DPP 頁面與稽核查詢流程。",
    capabilities: ["降低重複輸入", "串接既有營運流程", "提供查詢、驗證與資料交換接口", "支援 PoC 到正式平台擴充"],
  },
  {
    title: "AI / AIoT 校驗",
    problem: "現場資料、影像、文本與感測資料常需要先被擷取、辨識或檢查，否則進入平台時可能已不完整。",
    usage: "依場景導入 OCR、語意擷取、影像辨識、設備資料串接或異常偵測，協助資料先被整理與初步校驗。",
    capabilities: ["降低人工輸入負擔", "提升資料蒐集效率", "協助發現異常資料", "支援現場流程資料化"],
  },
  {
    title: "Audit Trail 與角色權限",
    problem: "可信資料不只需要證明資料內容，也需要知道誰建立、誰修改、誰查詢、誰驗證，以及不同角色能看到哪些資料。",
    usage: "建立操作紀錄、角色權限、查核結果與資料狀態，支援不同角色的查詢、驗證與治理需求。",
    capabilities: ["操作行為可追蹤", "權限邊界清楚", "查核結果可回溯", "支援內控、外部稽核與長期維運"],
  },
];

export const technologySolutionMap = [
  {
    title: "數據信任鏈與高效稽核平台",
    detail: "以 Ontology 建立資料模型與稽核規則，透過 Hash / Merkle Tree、TSA、Root Hash、Dashboard 與 API 建立快速抽驗與對外佐證能力。",
  },
  {
    title: "DPP 數位產品護照",
    detail: "以 Ontology 定義產品、材料、製程、碳資訊與回收欄位，串接後台與 QR 查詢頁，並視需求保留資料完整性證明。",
  },
  {
    title: "AI-Ontology 知識平台",
    detail: "以 Ontology 定義人物、作品、事件、地點、組織與文件關係，結合 OCR、語意擷取、Knowledge Graph 與後台治理。",
  },
  {
    title: "AIoT 回收履歷整合",
    detail: "串接設備、感測器與影像辨識，定義回收履歷流程節點，並以數據信任鏈保留後續稽核證據。",
  },
];

export const technologyStartModes = [
  {
    title: "資料信任鏈健檢",
    detail: "適合已有資料平台，但缺少驗證、時間證明或稽核流程的團隊。",
    fit: "輸出：資料來源盤點、稽核節點盤點、信任缺口分析、技術導入優先序。",
  },
  {
    title: "DPP / ESG PoC",
    detail: "適合想用一個產品、一條流程或一批資料先驗證 DPP / ESG 可行性的團隊。",
    fit: "輸出：欄位藍圖、查詢頁或 Dashboard 原型、Hash / Merkle 驗證流程草案、MVP 範圍建議。",
  },
  {
    title: "AI-Ontology Workshop",
    detail: "適合有大量文本、人物、作品、事件、地點或研究資料，需要整理成知識平台的團隊。",
    fit: "輸出：核心實體與關係草案、查詢場景盤點、OCR / 語意擷取流程建議、平台模組優先序。",
  },
];
