export const contactHero = {
  eyebrow: "Start a Trust Data Project",
  title: "先用一條流程、一批資料或一個知識場景，驗證可信資料平台怎麼落地。",
  description:
    "高複雜度資料專案不必一次談完整系統。可以先從資料盤點、PoC、工作坊或 NDA 路徑開始，確認資料來源、風險、稽核需求、對外揭露範圍與技術邊界。",
};

export const contactFastFacts = [
  { label: "初步回覆", value: "24h 內", detail: "回覆建議切入點，並確認是否需要先簽 NDA 或改用 Email 溝通。" },
  { label: "第一次會議", value: "30-45 分鐘", detail: "聚焦資料來源、使用者角色、對外揭露範圍、既有系統與第一階段目標。" },
  { label: "PoC 起手", value: "2-4 週", detail: "可先驗證一個產品、一條流程、一批資料或一個知識主題。" },
  { label: "啟動方式", value: "盤點 / PoC / NDA", detail: "從資料盤點、PoC、工作坊或 Email / NDA 路徑開始。" },
];

export const contactModes = [
  {
    title: "資料信任鏈盤點",
    detail: "適合已有流程與資料，但還不確定如何建立證據鏈、稽核節點與對外揭露方式。",
    fit: "輸出：資料來源清單、信任風險、初版資料流程圖與技術路徑。",
  },
  {
    title: "DPP / ESG PoC",
    detail: "適合想先用一個產品、一條回收流程或一批資料驗證 DPP 與稽核可行性。",
    fit: "輸出：欄位藍圖、QR 查詢原型、Hash / Merkle 驗證流程。",
  },
  {
    title: "AI-Ontology 工作坊",
    detail: "適合政府、學研、文化或知識密集團隊，先釐清資料模型、語意關係與平台架構。",
    fit: "輸出：Ontology 草案、查詢場景、平台模組優先序與 AI 導入節點。",
  },
  {
    title: "Email / NDA 路徑",
    detail: "適合需求涉及商業機密、採購、研發資料、供應鏈資訊、未公開產品或內部流程的團隊。",
    fit: "輸出：初步會議範圍、資料提供邊界、保密溝通路徑與下一步安排。",
  },
];

export const contactChecklist = [
  "目前有哪些資料來源、表單、檔案或既有系統需要串接。",
  "哪些資料需要對外揭露，哪些只供內部、合作夥伴或第三方查核。",
  "這次目標更偏 DPP、ESG 稽核、回收履歷、知識平台，還是資料系統整合。",
];

export const quickBriefAssistPoints = [
  "24 小時內回覆建議切入點與第一次會議需準備的資料。",
  "若涉及商業機密、採購或研發細節，可先走 Email / NDA。",
  "初期可先用 PoC 驗證一條流程，不必一次重建整套系統。",
];

export const contactScenarios = [
  {
    title: "我還不知道要做 DPP 還是 ESG 稽核平台",
    detail: "可以先從資料信任鏈盤點開始，釐清資料來源、對外揭露需求、查核節點與使用角色。",
  },
  {
    title: "我們只有一批資料，還沒有完整系統",
    detail: "這很適合先做 PoC，用一個產品、一條流程或一批資料驗證欄位、查詢頁與資料維護方式。",
  },
  {
    title: "我們已有網站或資料庫，但資料關係很複雜",
    detail: "可以先做 AI-Ontology 工作坊，整理資料類型、關係、查詢場景與平台模組。",
  },
  {
    title: "我們不確定哪些資料可以公開",
    detail: "可以先走 Email / NDA 路徑。第一次只需要描述高階情境、目標與限制。",
  },
];

export const contactEmailTemplate = {
  title: "比較適合先用 Email 說明？",
  description:
    "如果需求涉及未公開產品、供應鏈資料、內部流程、研發資訊或客戶資料，可以先寄 Email 給道易。我們可以先確認討論範圍與保密方式，再安排會議。",
  subject: "想與道易討論可信資料平台 / DPP / ESG / AI-Ontology 專案",
  body: "您好，我想與道易討論一個資料平台或可信資料專案。\n\n目前初步情境：\n\n- 專案類型：\n- 目前資料來源：\n- 希望解決的問題：\n- 是否需要 NDA：\n- 希望討論時間：\n\n謝謝。",
};
