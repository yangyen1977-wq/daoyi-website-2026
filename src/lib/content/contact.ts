export const contactHero = {
  eyebrow: "Contact DaoYi Technology",
  title: "用一批資料，判斷可信資料平台的第一步。",
  description:
    "不需要一開始就定完整系統。先提供資料類型、目前保存方式、使用者與想解決的問題，道易會協助判斷適合從 DPP、ESG / 資料信任鏈、AI-Ontology、AIoT 回收履歷或系統整合哪裡開始。",
  note: "24 小時內回覆初步建議。涉及未公開產品、供應鏈、採購、研發或客戶資料時，請先走 Email / NDA。",
};

export const contactDecisionRoutes = [
  {
    label: "Quick Brief",
    title: "我想先快速確認方向",
    detail: "用 5 個問題說明資料現況，道易回覆建議切入點、第一次會議準備資料，以及是否適合先做 PoC。",
    cta: "填寫 5 問 Quick Brief",
    href: "#quick-brief",
  },
  {
    label: "Email / NDA",
    title: "需求涉及保密資料",
    detail: "若資料涉及未公開產品、供應鏈、研發、採購、客戶資料或內部系統架構，先用 Email 確認討論邊界。",
    cta: "先用 Email / NDA 聯絡",
    href: "#email-nda",
  },
];

export const contactMeetingSteps = [
  {
    step: "01",
    title: "看資料",
    detail: "確認資料來源、保存方式、欄位狀態與既有系統，先判斷資料基礎是否足夠啟動。",
  },
  {
    step: "02",
    title: "看使用者與揭露範圍",
    detail: "釐清誰會使用資料、哪些內容可公開、哪些只給內部、合作方、稽核者或特定角色查看。",
  },
  {
    step: "03",
    title: "建議第一步",
    detail: "判斷適合先做資料盤點、DPP / ESG PoC、AI-Ontology Workshop、系統整合規劃，或 Email / NDA 溝通。",
  },
];

export const contactEmailTemplate = {
  title: "如果資料涉及商業機密，請先用 Email 說明高階情境。",
  description:
    "請不要在表單填寫機密細節。你可以先用 Email 說明專案方向、資料類型、希望解決的問題與保密需求，道易會先協助確認討論範圍與後續方式。",
  subject: "想與道易討論可信資料平台 / DPP / ESG / AI-Ontology 專案",
  body: "您好，我想與道易討論資料平台專案。\n\n公司 / 單位：\n專案方向：\n目前資料類型：\n使用者 / 揭露範圍：\n希望解決的問題：\n是否涉及保密資料：\n希望安排會議時間：\n\n補充說明：\n",
};
