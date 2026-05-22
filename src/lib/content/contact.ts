export const contactHero = {
  eyebrow: "Contact DaoYi Technology",
  title: "帶著一批資料、一條流程或一個產品案例，先確認可信資料平台的第一步。",
  description:
    "不需要一開始就定完整系統。道易會先協助你釐清資料來源、使用者角色、對外揭露範圍、稽核需求與技術邊界，再判斷適合從資料盤點、DPP PoC、ESG 稽核流程、AI-Ontology 工作坊或 Email/NDA 路徑開始。",
  note: "24 小時內回覆初步建議。若涉及未公開產品、供應鏈、採購或研發資料，建議先走 Email / NDA。",
};

export const contactHeroOutcomes = [
  { title: "建議切入點", detail: "判斷適合先做資料盤點、PoC、工作坊，還是 NDA 溝通。" },
  { title: "第一次會議準備清單", detail: "告訴你需要補哪些資料來源、流程、角色或既有系統資訊。" },
  { title: "PoC 可行性初判", detail: "評估是否能先用一個產品、一條流程、一批資料或一個知識主題驗證。" },
  { title: "保密溝通建議", detail: "若涉及商業機密、供應鏈、研發或採購資料，先確認哪些內容不適合在表單揭露。" },
];

export const contactHeroStats = ["24h 初步回覆", "30-45 min 第一次會議", "1 批資料即可開始"];

export const contactRoutes = [
  {
    title: "我想先快速確認方向",
    label: "Quick Brief",
    fit: "你手上已有產品資料、ESG 資料、回收流程、研究資料、舊系統或 Excel，但還不確定該先做 DPP、資料信任鏈、AI-Ontology 還是系統整合。",
    outcome: "24 小時內回覆建議切入點、第一次會議需準備的資料，以及是否適合先做 PoC。",
    cta: "填寫 Quick Brief",
    href: "#quick-brief",
  },
  {
    title: "需求涉及保密資料",
    label: "Email / NDA",
    fit: "未公開產品、供應鏈資訊、採購資料、研發流程、客戶資料、內部系統架構，暫時不適合直接填在表單中。",
    outcome: "先確認討論範圍、保密邊界與可提供資料清單，再安排後續會議。",
    cta: "先用 Email / NDA 聯絡",
    href: "#email-nda",
  },
  {
    title: "我已經有一批資料想驗證",
    label: "資料盤點 / PoC",
    fit: "你想先用一個產品、一條回收流程、一批 ESG 資料、一組人物文本資料或一個既有資料庫，驗證是否能做成查詢頁、Dashboard、API 或可信資料流程。",
    outcome: "資料來源盤點、欄位藍圖、PoC 範圍建議，以及第一階段交付物初步判斷。",
    cta: "描述我的資料情境",
    href: "#quick-brief",
  },
];

export const quickBriefAssistPoints = [
  "表單只用來快速確認資料現況，不是正式規格書。",
  "請避免填寫機密細節；涉及供應鏈、研發、採購或未公開產品時，請改用 Email / NDA。",
  "系統會開啟你的 Email 軟體，並自動帶入表單內容。",
];

export const contactMeetingSteps = [
  {
    step: "01",
    title: "確認目標",
    detail: "你希望資料被誰使用？是給客戶、合作夥伴、第三方稽核者、研究者、內部管理者，還是一般大眾？",
  },
  {
    step: "02",
    title: "盤點資料來源",
    detail: "資料目前在哪裡？是 Excel、文件、資料庫、設備、影像、API、既有網站，還是人工流程？",
  },
  {
    step: "03",
    title: "找出信任缺口",
    detail: "哪些資料需要被驗證？哪些需要留下版本、時間、來源、操作紀錄或第三方查核證據？",
  },
  {
    step: "04",
    title: "建議第一階段",
    detail: "判斷適合先做資料盤點、DPP / ESG PoC、AI-Ontology 工作坊、系統整合規劃，或 Email / NDA 溝通。",
  },
];

export const contactPrepCards = [
  {
    title: "資料來源",
    detail: "目前有哪些資料、表單、檔案、系統、設備或人工紀錄？資料是否已經有固定欄位、更新者與保存位置？",
  },
  {
    title: "使用者與揭露範圍",
    detail: "誰需要看這些資料？哪些內容可以公開？哪些只能給內部、合作夥伴、稽核者或特定角色查看？",
  },
  {
    title: "目前最卡的地方",
    detail: "是資料太散、難以查詢、無法證明來源、缺少後台、維護困難，還是需要對外揭露但不確定怎麼做？",
  },
];

export const contactSituationCards = [
  {
    title: "我想讓產品資料可以被掃描、查詢與對外揭露",
    start: "DPP 數位產品護照 PoC",
    detail: "產品身分、材料資料、製程資訊、回收指引、QR 查詢頁、後台維護流程。",
    cta: "討論 DPP PoC",
    href: "/contact?topic=dpp-poc#quick-brief",
  },
  {
    title: "我需要讓 ESG、回收或供應鏈資料可以被第三方查核",
    start: "資料信任鏈盤點",
    detail: "資料來源、稽核節點、Hash / Merkle 驗證流程、Dashboard、API 查核流程。",
    cta: "盤點資料信任鏈",
    href: "/contact?topic=data-trust-chain#quick-brief",
  },
  {
    title: "我有大量人物、文本、事件、地點或研究資料",
    start: "AI-Ontology 工作坊",
    detail: "核心實體、資料關係、查詢場景、語意搜尋、知識圖譜或資料平台架構。",
    cta: "規劃 AI-Ontology",
    href: "/contact?topic=ai-ontology#quick-brief",
  },
  {
    title: "我已有網站、資料庫或後台，但資料很難維護或整合",
    start: "資料平台 / 系統整合盤點",
    detail: "資料模型、角色權限、API、後台維護流程、Dashboard 與查詢頁。",
    cta: "討論系統整合",
    href: "/contact?topic=system-integration#quick-brief",
  },
];

export const contactEmailTemplate = {
  title: "如果資料涉及商業機密，請先用 Email 說明高階情境。",
  description:
    "若需求包含未公開產品、供應鏈資訊、採購資料、研發流程、客戶資料或內部系統架構，請不要直接在表單填寫細節。你可以先用 Email 說明專案目標、資料類型與希望解決的問題，道易會先協助確認討論範圍與保密方式。",
  subject: "想與道易討論可信資料平台 / DPP / ESG / AI-Ontology 專案",
  body: "您好，我想與道易討論資料平台專案。\n\n公司 / 單位：\n專案方向：\n目前資料類型：\n希望解決的問題：\n是否涉及保密資料：\n希望安排會議時間：\n\n補充說明：\n",
};

export const contactCaseEntrypoints = [
  {
    title: "Easy DPP 數位產品護照",
    fit: "製造、品牌、材料、循環經濟團隊。",
    compare: "產品資料、材料、製程、QR 查詢頁、供應鏈透明。",
  },
  {
    title: "太陽能板回收 YOLO 辨識與履歷",
    fit: "回收處理、再生資源、ESG 團隊。",
    compare: "影像、設備、批次、材料、流程、Dashboard、資料信任鏈。",
  },
  {
    title: "AI-Ontology / 數位人文平台",
    fit: "政府、學研、文化機構、研究團隊。",
    compare: "人物、作品、文本、事件、地點、語意搜尋、知識圖譜。",
  },
  {
    title: "資料平台 / 系統整合",
    fit: "已有資料庫、舊系統、Excel 或內部流程，但缺少清楚後台與查詢介面的組織。",
    compare: "資料模型、搜尋、權限、API、後台維護流程。",
  },
];
