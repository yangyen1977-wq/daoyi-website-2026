export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技打造可追溯、可稽核、可驗證的數據信任鏈平台，協助企業、政府與研究機構完成 DPP、ESG 高效稽核、AI-Ontology 知識平台與資料系統整合。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "service@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taiwan",
  heroTitle: "讓循環經濟、ESG 與知識資產，有一條可被驗證的數據信任鏈。",
  heroDescription:
    "道易科技以 Ontology 語義建模、AI、Merkle Tree、IPFS 與 TSA 時戳驗證技術，將分散且難以查核的資料轉化為可追溯、不可竄改、可高效稽核的可信任數據平台。",
};

export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function publicAssetPath(path: string) {
  return `${siteBasePath}${path}`;
}

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/solutions", label: "解決方案" },
  { href: "/technology", label: "技術核心" },
  { href: "/work", label: "案例實績" },
  { href: "/about", label: "關於道易" },
  { href: "/contact", label: "聯絡我們" },
];

export const headerReassuranceSignals = [
  "Data Trust Chain / DPP / ESG Audit",
  "Ontology × AI × Merkle Proof",
  "政府、學研、循環經濟與知識平台經驗",
];

export const trustMetrics = [
  { value: "4", label: "核心解決方案" },
  { value: "8+", label: "代表案例類型" },
  { value: "24h", label: "初步需求回覆" },
  { value: "1", label: "可信任資料底座" },
];

export const benchmarkSynthesis20260519 = [
  {
    pattern: "Outcome before technology",
    learnedFrom: "2026 B2B / SaaS 官網案例",
    application: "首頁先講 DPP、ESG 稽核與知識平台能替買方降低什麼風險，再展開 Merkle、IPFS、TSA 等技術。",
  },
  {
    pattern: "Product experience layer",
    learnedFrom: "高轉換 SaaS 首頁",
    application: "用流程視覺呈現資料從產生、封存、驗證到稽核的路徑，讓訪客先理解平台如何運作。",
  },
  {
    pattern: "Proof-dense case modules",
    learnedFrom: "成熟科技服務與設計公司案例頁",
    application: "案例不再只是作品清單，而是用問題、道易解法、技術標籤與可被信任的成果來呈現。",
  },
  {
    pattern: "Low-risk buying start",
    learnedFrom: "B2B demo / contact flow",
    application: "聯絡頁提供資料盤點、DPP PoC、知識平台工作坊與 NDA 路徑，降低第一次接洽阻力。",
  },
];

export const sitemap2026 = [
  {
    page: "首頁",
    primaryJob: "30 秒內說清楚道易是數據信任鏈、DPP、ESG 稽核與 AI-Ontology 知識平台公司。",
    modules: ["品牌主張", "痛點", "四大方案", "信任技術流程", "精選案例", "合作流程", "CTA"],
  },
  {
    page: "解決方案",
    primaryJob: "依客戶情境拆出可採購、可啟動、可驗收的四條解決方案。",
    modules: ["數據信任鏈", "DPP", "AI-Ontology", "AIoT 回收履歷"],
  },
  {
    page: "技術核心",
    primaryJob: "讓技術買方與決策者理解可信資料如何被建立、封存、驗證與稽核。",
    modules: ["Ontology", "Hash / Merkle", "IPFS", "TSA", "API", "AI 校驗", "Audit Trail"],
  },
  {
    page: "案例實績",
    primaryJob: "把政府、學研、循環經濟與國際案例整理成可驗證的信任證據。",
    modules: ["案例摘要", "問題", "解法", "技術標籤", "價值"],
  },
  {
    page: "聯絡我們",
    primaryJob: "用資料盤點與 PoC 起手方式，讓高複雜度專案能低風險開始。",
    modules: ["適合對象", "啟動方式", "需求表單", "Email / NDA"],
  },
];

export const painPoints = [
  {
    title: "循環經濟資料難以被信任",
    detail: "回收、再利用、碳足跡與產品履歷常分散在不同系統與單據中，人工彙整後仍難以支撐第三方查核。",
  },
  {
    title: "ESG 與 DPP 需要可驗證證據",
    detail: "供應鏈透明化與合規要求提高，企業需要的不只是資料庫，而是可追溯、不可竄改、可被稽核的證據鏈。",
  },
  {
    title: "知識資產缺乏語意結構",
    detail: "研究、文化、人物、文本與事件資料若沒有 Ontology 與語意關聯，查詢、分析與展示都會停留在資料堆積。",
  },
];

export const solutions = [
  {
    title: "數據信任鏈與高效稽核平台",
    description:
      "以標準化資料模型、Hash 指紋、Merkle Tree、IPFS 與 TSA 時戳，建立資料從產生到第三方查核的完整證據鏈。",
  },
  {
    title: "DPP 數位產品護照",
    description:
      "將產品材料、製程、碳資訊、維修與回收履歷轉化為可查詢的數位身分，支援 QR Code、供應鏈透明與合規準備。",
  },
  {
    title: "AI 與 Ontology 知識平台",
    description:
      "把文本、人物、事件、地點與資料庫建模成知識網絡，支援 OCR、語意擷取、語意搜尋、研究資料庫與視覺化展示。",
  },
  {
    title: "AIoT 與回收履歷整合",
    description:
      "串接設備、感測器、影像辨識與現場流程，讓回收、拆解、檢測與入庫資料能被即時蒐集、校驗與追蹤。",
  },
];

export const solutionDetails = [
  {
    title: "數據信任鏈與高效稽核平台",
    bestFor: "太陽能板回收、再生資源、ESG 驗證、綠色金融與需要 D-MRV 的組織。",
    outcomes: ["資料不可竄改證據鏈", "第三方快速抽驗", "Root Hash 與時間戳錨定", "稽核成本下降"],
  },
  {
    title: "DPP 數位產品護照",
    bestFor: "製造、出口、循環經濟、材料供應鏈與需要產品履歷透明化的團隊。",
    outcomes: ["產品數位身分", "QR Code 查詢體驗", "材料與碳資訊欄位藍圖", "ESPR / DPP 合規準備"],
  },
  {
    title: "AI 與 Ontology 知識平台",
    bestFor: "政府、學研、文化館所、資料庫平台與高知識密度內容團隊。",
    outcomes: ["Ontology 語義模型", "語意搜尋與資料關聯", "OCR / NLP 流程", "人物事件地點知識圖譜"],
  },
  {
    title: "AIoT 與回收履歷整合",
    bestFor: "現場流程資料化、影像辨識、設備資料串接與回收履歷自動化情境。",
    outcomes: ["YOLO / 影像辨識整合", "現場資料採集", "異常偵測", "物理流程與數據一致性校驗"],
  },
];

export const trustFlow = [
  { title: "資料產生", detail: "從產品、設備、表單、OCR、影像或既有系統取得原始資料。" },
  { title: "Ontology 標準化", detail: "定義欄位、關係、權限與查詢語意，讓資料能被理解與交換。" },
  { title: "Hash 指紋", detail: "替資料或批次產生不可逆指紋，作為後續驗證基礎。" },
  { title: "Merkle 聚合", detail: "將多筆資料聚合為 Root Hash，支援高效率抽驗與批次稽核。" },
  { title: "IPFS / 儲存", detail: "將證據與檔案以可追溯方式保存，降低單點竄改風險。" },
  { title: "TSA 時戳", detail: "用第三方時間戳證明資料在特定時間點已存在且未被改動。" },
  { title: "稽核與展示", detail: "透過 API、Dashboard 或 DPP 頁面提供查詢、驗證與對外揭露。" },
];

export const coreTechnologies = [
  { title: "Ontology 語義建模", detail: "把資料欄位、實體、事件與關係定義清楚，支撐後續查詢、驗證與 AI 應用。" },
  { title: "Hash / Merkle Tree", detail: "建立資料完整性證明，讓大量紀錄能被快速驗證，不必逐筆人工比對。" },
  { title: "IPFS 與證據保存", detail: "保存證據檔、附件與批次資料，形成可追溯的外部驗證線索。" },
  { title: "TSA 時間戳", detail: "替 Root Hash 或關鍵證據加上可信時間，強化稽核與爭議處理能力。" },
  { title: "API 與異質系統整合", detail: "串接 ERP、MES、IoT、資料庫、前台 DPP 與第三方稽核流程。" },
  { title: "AI / AIoT 校驗", detail: "以 OCR、NLP、影像辨識與異常偵測協助資料擷取與現場一致性檢查。" },
  { title: "Audit Trail 與權限", detail: "記錄資料異動、簽核、角色權限與查核結果，讓責任與證據可追蹤。" },
];

export const caseStudies = [
  {
    title: "太陽能板回收履歷與數據信任鏈",
    category: "ESG / 循環經濟",
    problem: "回收流程涉及拆解、檢測、材料與碳資訊，若只靠人工表單難以支撐查核與碳價值認列。",
    solution: "以 AIoT、影像辨識、資料模型與 Hash/Merkle 證據鏈建立可追溯履歷。",
    value: "讓回收資料從流程紀錄升級為可被驗證、可抽驗、可供 ESG 與 DPP 使用的證據。",
    tags: ["Data Trust Chain", "AIoT", "YOLO", "ESG Audit"],
  },
  {
    title: "Easy DPP 數位產品護照",
    category: "DPP / 供應鏈透明",
    problem: "產品材料、來源、製程與回收資訊分散，對外揭露與內部管理都缺乏一致格式。",
    solution: "建立產品數位身分、QR Code 查詢頁、資料欄位藍圖與可擴充的 DPP 架構。",
    value: "協助企業提前準備供應鏈透明、ESPR / DPP 與永續揭露需求。",
    tags: ["DPP", "QR Code", "Traceability", "Supply Chain"],
  },
  {
    title: "國立臺灣文學館數位人文平台",
    category: "數位人文 / 知識平台",
    problem: "文學、人物、作品、地理與歷史資料龐雜，傳統網站難以呈現知識關係。",
    solution: "透過資料庫、語意關聯與前台展示，讓研究資料能被查詢、閱讀與探索。",
    value: "將文化資料轉化為可持續維護與對外展示的知識平台。",
    tags: ["Digital Humanities", "Knowledge Platform", "Semantic Search"],
  },
  {
    title: "Taiwan Biographical Ontology",
    category: "國際學研 / 人物本體",
    problem: "台灣人物、組織、職位與生命歷程資料需要跨資料集整理，才能支援人物群體與職涯路徑研究。",
    solution: "建立人物、組織、地點、職位與資料來源的本體資料平台，支援瀏覽、語意查詢與資料重用。",
    value: "讓傳記資料成為可探索、可分析、可擴充的研究知識平台。",
    tags: ["Taiwan Biographical Ontology", "Prosopography", "Linked Data"],
  },
  {
    title: "香港中文大學圖書館傳記資料庫",
    category: "圖書館 / 人物資料",
    problem: "作家及藝術家資料需要兼顧權威性、檢索效率與關聯呈現。",
    solution: "以人物資料結構、分類與前台查詢設計支援資料管理與使用者探索。",
    value: "提升傳記資料的可查詢性、可維護性與公共使用價值。",
    tags: ["Biography Database", "Library", "Knowledge Graph"],
  },
  {
    title: "社會網絡分析與人物知識本體",
    category: "Ontology / 分析平台",
    problem: "人物、事件與關係資料若沒有本體模型，難以做關聯分析與視覺化。",
    solution: "建立人物、事件、組織、地點等語意模型，支援關係查詢與網絡分析。",
    value: "讓資料從靜態列表變成可分析、可推論、可展示的知識網絡。",
    tags: ["Ontology", "SNA", "Knowledge Graph"],
  },
];

export const processSteps = [
  { title: "需求訪談與資料盤點", detail: "釐清對象、流程、資料來源、合規需求與目前系統邊界。" },
  { title: "資料模型與證據模型設計", detail: "定義 Ontology、欄位、Hash 範圍、稽核節點與對外揭露層級。" },
  { title: "平台原型與 API 規劃", detail: "確認 DPP 頁面、Dashboard、管理後台、資料交換與第三方驗證路徑。" },
  { title: "系統開發與資料串接", detail: "實作前後台、資料流程、自動化驗證、權限與部署架構。" },
  { title: "稽核測試、上線與維運", detail: "用實際資料測試驗證流程、修正權限與查詢體驗，建立後續維運節奏。" },
];

export const contactFastFacts = [
  { label: "初步回覆", value: "24h 內" },
  { label: "第一次會議", value: "30-45 分鐘" },
  { label: "PoC 起手", value: "2-4 週" },
  { label: "啟動方式", value: "盤點 / PoC / NDA" },
];

export const contactModes = [
  {
    title: "資料信任鏈盤點",
    detail: "適合已有流程與資料，但還不確定如何建立證據鏈、稽核節點與對外揭露方式。",
    fit: "輸出：資料來源清單、信任風險、初版技術路徑。",
  },
  {
    title: "DPP / ESG PoC",
    detail: "適合想先用一個產品、一條回收流程或一批資料驗證 DPP 與稽核可行性。",
    fit: "輸出：欄位藍圖、QR 查詢原型、Hash / Merkle 驗證流程。",
  },
  {
    title: "AI-Ontology 工作坊",
    detail: "適合政府、學研、文化或知識密集團隊，先釐清資料模型、語意關係與平台架構。",
    fit: "輸出：Ontology 草案、查詢場景、平台模組優先序。",
  },
];

export const contactChecklist = [
  "目前有哪些資料來源、表單、檔案或既有系統需要串接。",
  "哪些資料需要對外揭露，哪些只供內部或第三方稽核。",
  "這次目標更偏 DPP、ESG 稽核、回收履歷，還是知識平台。",
];

export const quickBriefAssistPoints = [
  "24 小時內回覆建議切入點與第一次會議需準備的資料。",
  "若涉及商業機密、採購或研發細節，可先走 Email / NDA。",
  "初期可先用 PoC 驗證一條流程，不必一次重建整套系統。",
];

export const thirdPartyScorecard = [
  ["品牌定位", "8.6 / 10", "主軸已從一般技術服務轉向數據信任鏈、DPP 與 ESG 稽核，差異化更明確。"],
  ["UX 架構", "8.3 / 10", "首頁以痛點、方案、技術流程、案例與 CTA 串起，符合 B2B 評估順序。"],
  ["信任證據", "8.1 / 10", "案例分類與技術標籤清楚，但後續仍需補更多真實截圖、客戶引言與量化成果。"],
  ["轉換設計", "8.4 / 10", "Contact 從一般表單升級為盤點、PoC、工作坊與 NDA 起手，較符合高複雜度專案。"],
];

export const liveSiteQuickReview = [
  {
    title: "總評",
    score: "8.35 / 10",
    detail: "以第三方角度看，新版已更像成熟商用科技官網：定位、資訊架構與案例證據明顯比舊站型服務介紹更清楚。",
  },
  {
    title: "優先補強",
    score: "Next",
    detail: "建議下一輪補上產品介面截圖、DPP QR demo、平台資料流示意圖與客戶成果數字，讓信任感從文案進一步變成證據。",
  },
];

// Compatibility data for reusable components that remain in the codebase.
export const stats = trustMetrics;

export const heroClients = [
  { name: "循環經濟 / 回收", context: "回收履歷、ESG 證據鏈、D-MRV" },
  { name: "製造 / 供應鏈", context: "DPP、產品履歷、材料透明化" },
  { name: "政府 / 學研 / 文化", context: "Ontology、知識平台、資料庫" },
];

export const heroProofs = [
  { label: "Trust", value: "Merkle", description: "批次資料完整性驗證。" },
  { label: "Passport", value: "DPP", description: "產品履歷與 QR 查詢。" },
  { label: "Knowledge", value: "Ontology", description: "語意建模與知識圖譜。" },
];

export const heroQuickSignals = [
  { label: "主軸", value: "數據信任鏈 / DPP / ESG" },
  { label: "技術", value: "Ontology / AI / Merkle / IPFS / TSA" },
  { label: "起手", value: "資料盤點 / PoC / NDA" },
];

export const heroFitSignals = [
  "需要把回收、產品、碳或供應鏈資料變成可查核證據。",
  "需要建立 DPP、QR 查詢或產品履歷資料欄位。",
  "需要將人物、文本、事件與資料庫整理成知識平台。",
  "需要串接現場設備、影像辨識或既有系統資料。",
];

export const heroContactLadder = [
  { label: "Path 01", title: "資料盤點", detail: "先確認資料來源、權限、稽核節點與對外揭露範圍。", cta: "開始盤點", href: "/#quick-brief" },
  { label: "Path 02", title: "PoC 驗證", detail: "用一條流程或一批資料先驗證 DPP / ESG / 信任鏈可行性。", cta: "看方案", href: "/solutions" },
  { label: "Path 03", title: "Email / NDA", detail: "涉及採購、商業機密或研發資料時，先用保密路徑開始。", cta: "先寄 Email", href: `mailto:${siteConfig.email}` },
];

export const homepageContactProof = quickBriefAssistPoints;

export const homepageCompactCaseEvidence = caseStudies.slice(0, 3).map((item) => ({
  label: item.category,
  title: item.title,
  evidence: item.value,
}));

export const heroClarityChecklist = [
  { label: "Who", answer: "循環經濟、製造、政府、學研與高知識密度團隊", detail: "資料需要被追溯、稽核、查詢或對外揭露。", metric: "30 秒定位" },
  { label: "What", answer: "可信任資料平台", detail: "以 DPP、ESG 稽核、AI-Ontology 與系統整合落地。", metric: "4 條方案" },
  { label: "How", answer: "Ontology + Hash/Merkle + IPFS + TSA", detail: "從資料模型到第三方驗證建立完整信任鏈。", metric: "7 節點流程" },
];

export const heroActionSignals = [
  { step: "01", metric: "24h", title: "初步回覆", detail: "先判斷適合資料盤點、PoC、工作坊或 NDA。" },
  { step: "02", metric: "30-45m", title: "需求討論", detail: "對齊資料來源、稽核問題、角色權限與第一階段範圍。" },
  { step: "03", metric: "2-4w", title: "PoC 起手", detail: "用一條流程或一批資料驗證可行性。" },
];

export const heroPreviews = solutions.map((item, index) => ({
  id: `solution-${index + 1}`,
  label: item.title,
  metric: index === 0 ? "Audit" : index === 1 ? "DPP" : index === 2 ? "Ontology" : "AIoT",
  summary: item.description,
  checklist: solutionDetails[index]?.outcomes ?? [],
}));

export const caseOverviewStats = [
  { label: "ESG / DPP", value: "2", detail: "回收履歷與數位產品護照。" },
  { label: "Knowledge", value: "4+", detail: "數位人文、國際研究與人物資料庫。" },
  { label: "Core tags", value: "10+", detail: "Ontology、AIoT、Traceability、Knowledge Graph。" },
];

export const caseSnapshots = caseStudies.slice(0, 4).map((item, index) => ({
  id: `case-${index + 1}`,
  label: item.category,
  context: item.tags[0],
  title: item.title,
  summary: item.value,
  metrics: [
    { label: "Problem", value: "Before", detail: item.problem },
    { label: "Solution", value: "DaoYi", detail: item.solution },
  ],
  highlights: item.tags,
  href: "/work",
}));

export const personaPlaybooks = [
  {
    id: "esg",
    title: "ESG / 永續負責人",
    headline: "需要可信的一手資料支撐稽核與揭露。",
    challenge: "資料分散且難以證明未被修改。",
    win: "建立可追溯證據鏈與第三方驗證路徑。",
    metric: { label: "Priority", value: "Audit-ready" },
    checklist: ["資料來源盤點", "Hash / Merkle 驗證", "稽核 Dashboard"],
    ctaHref: "/contact",
    ctaLabel: "討論 ESG 稽核",
    helperText: "可先從一條流程做 PoC。",
  },
  {
    id: "research",
    title: "學研 / 文化機構",
    headline: "需要把資料庫變成可探索的知識平台。",
    challenge: "人物、文本、事件與地點缺乏語意關聯。",
    win: "用 Ontology 與語意搜尋提升資料使用價值。",
    metric: { label: "Priority", value: "Knowledge graph" },
    checklist: ["Ontology 草案", "檢索場景", "前台展示"],
    ctaHref: "/contact",
    ctaLabel: "討論知識平台",
    helperText: "可先從資料模型工作坊開始。",
  },
];

export const aboutHero = {
  eyebrow: "About DaoYi",
  title: "道易科技協助高複雜度資料，成為可理解、可驗證、可長期維運的平台。",
  description:
    "道易科技從數位人文與 AI 語意分析出發，長期協助政府、學研、文化機構與企業整理高知識密度資料。現在，我們將資料建模、AI、系統整合與可驗證技術整合成數據信任鏈，支援 DPP、ESG 稽核、回收履歷與 AI-Ontology 知識平台。",
};

export const aboutPositioning = [
  "道易科技是專注於數據信任鏈、DPP、ESG 高效稽核與 AI-Ontology 知識平台的技術服務公司。",
  "我們以 Ontology 語義建模、AI、資料平台開發與可驗證資料流程，協助客戶處理高複雜度資料。",
  "我們的目標，是讓資料成為可追溯、可查核、可展示、可維運的可信任資產。",
];

export const aboutCapabilities = [
  {
    title: "數位人文與知識平台",
    detail: "長期處理人物、作品、事件、地點、文本、翻譯、書目與文化資料，建立可查詢、可維護、可展示的知識平台。",
  },
  {
    title: "AI 語意分析與資料擷取",
    detail: "將 OCR、語意擷取、AI 查詢與影像辨識導入不同場景，協助資料從文本、影像或現場流程中被整理與驗證。",
  },
  {
    title: "資料平台與系統整合",
    detail: "處理後台資料、API、權限、資料流程與維運需求，讓資料平台成為可長期使用的系統。",
  },
  {
    title: "可信資料與稽核流程",
    detail: "將資料模型、Hash、Merkle Tree、IPFS、TSA、Audit Trail 與 API 整合成可驗證資料流程。",
  },
];

export const aboutAudiences = [
  {
    title: "循環經濟與回收產業",
    detail: "適合需要回收履歷數位化、現場資料串接、ESG 或 DPP 延伸資料整理的團隊。",
  },
  {
    title: "製造品牌與供應鏈",
    detail: "適合需要產品履歷透明化、材料與製程資料整理、QR 查詢與 DPP PoC 的團隊。",
  },
  {
    title: "政府、學研與文化機構",
    detail: "適合需要人物、文本、作品、事件與地點資料整理，並建立研究資料庫或知識平台的團隊。",
  },
  {
    title: "資料治理與系統整合團隊",
    detail: "適合需要多系統資料整合、後台資料管理、權限、稽核紀錄與 API 串接的組織。",
  },
];

export const aboutPrinciples = [
  "先釐清資料，再設計平台。",
  "先驗證最小可行流程，再擴大導入。",
  "讓技術支撐查核、維運與對外揭露，而不是只停留在展示。",
  "把每個案例整理成問題、解法、技術與價值，讓決策者能判斷適配度。",
];
