export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技打造可追溯、可稽核、可驗證的數據信任鏈平台，協助企業、政府與研究機構完成 DPP、ESG 高效稽核、AI-Ontology 知識平台與資料系統整合。",
  url: "https://daoyidh.com",
  email: "service@daoyidh.com",
  phone: "+886-6-000-0000",
  gaMeasurementId: "G-5Z6E62SWN9",
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
