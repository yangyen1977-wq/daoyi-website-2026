import { publicAssetPath } from "@/lib/site";

export const workHero = {
  eyebrow: "Case Proof",
  title: "案例不只展示做過什麼，而是證明道易能處理高複雜度資料與信任問題。",
  description:
    "道易科技的經驗橫跨 DPP、回收履歷、AI 語意分析、數位人文、國際研究資料庫與知識平台。新版案例以問題、解法、技術標籤與價值呈現，讓循環經濟、政府學研、文化機構與資料平台客戶能快速判斷適配度。",
};

export const caseCategories = [
  {
    title: "ESG / 循環經濟",
    detail: "適合想看 DPP 數位產品護照、回收履歷、AIoT 現場資料、ESG 與稽核資料的團隊。",
    examples: ["Easy DPP 數位產品護照", "太陽能板回收 YOLO 辨識與履歷"],
  },
  {
    title: "AI-Ontology / 數位人文",
    detail: "適合想看語意擷取、OCR、人物作品事件資料、知識圖譜與語意搜尋的團隊。",
    examples: ["國立臺灣文學館數位人文平台", "社會網絡分析平台", "台灣傳記知識本體"],
  },
  {
    title: "國際研究 / 知識平台",
    detail: "適合想看國際研究資料庫、多語系資料展示、學術資料整理與長期維護型資料平台的團隊。",
    examples: ["Taiwan Biographical Ontology", "ORIENT Card Catalog", "TLiT"],
  },
  {
    title: "資料平台 / 系統整合",
    detail: "適合想看後台資料管理、前台查詢展示、資料庫平台與跨系統整合的團隊。",
    examples: ["香港中文大學圖書館傳記資料庫", "土地台帳建檔輔助系統"],
  },
];

export const caseStudies = [
  {
    title: "Easy DPP 數位產品護照",
    category: "DPP / 供應鏈透明 / 循環經濟",
    image: {
      src: publicAssetPath("/assets/cases/dpp-qr-query-demo.svg"),
      alt: "DPP QR 查詢頁公開重繪圖",
      caption: "公開重繪圖：DPP QR 查詢頁 demo",
    },
    problem: "產品材料、來源、製程、環保資訊與回收指引常分散在不同部門、供應商或文件中，無法支撐後續 DPP、供應鏈透明或稽核資料管理需求。",
    solution: "將產品資料整理成可管理的 DPP 架構，讓材料、製程、環境資訊、回收指引與查詢體驗能接在一起。",
    value: "讓產品資料從靜態介紹升級為可維護的數位身分，為 DPP、ESG 與供應鏈透明化打底。",
    tags: ["DPP", "QR Code", "Product Data Model", "Traceability", "Supply Chain", "ESG"],
    proofStatus: "公開素材：DPP QR 查詢頁重繪圖，呈現產品身分、材料資訊、回收指引與驗證狀態。",
  },
  {
    title: "太陽能板回收 YOLO 辨識與履歷",
    category: "AIoT / 回收履歷 / ESG 稽核",
    image: {
      src: publicAssetPath("/assets/cases/recycling-traceability-dashboard.svg"),
      alt: "AIoT 回收履歷查核結果 dashboard 公開重繪圖",
      caption: "公開重繪圖：AIoT 回收履歷 dashboard",
    },
    problem: "回收流程涉及設備、影像、拆解、材料、批次與後續稽核資料；若只靠人工輸入或單點系統保存，後續難以證明資料來源與流程完整性。",
    solution: "將 AI / AIoT 應用於太陽能板回收場景，透過 YOLO 影像辨識、設備資料與流程紀錄整合，接回回收履歷與可信資料平台。",
    value: "降低現場資料只靠人工紀錄的風險，為 ESG 稽核、DPP 延伸與資料信任鏈建立資料來源。",
    tags: ["AIoT", "YOLO", "Image Recognition", "Traceability", "ESG Audit", "Data Trust Chain"],
    proofStatus: "公開素材：回收履歷 dashboard mockup，呈現 AI 影像證據、批次狀態、材料回收與信任鏈查核。",
  },
  {
    title: "國立臺灣文學館數位人文平台",
    category: "數位人文 / AI-Ontology / 知識平台",
    image: {
      src: publicAssetPath("/assets/cases/tlsg-nmtl-card.jpg"),
      alt: "文學好臺誌公開網站截圖",
      caption: "公開候選圖：文學好臺誌 / NMTL",
    },
    problem: "文學資料包含人物、作品、地點、主題、歷史脈絡與文本內容，若只用一般網站展示，使用者難以探索資料關係，管理端也不容易長期維護。",
    solution: "建置數位人文資料平台，將文學與文化資料整理成可查詢、可展示、可維護的資料結構。",
    value: "將文化資料轉化為可查詢與可探索的知識平台，提升研究資料、館藏資料與公共展示的使用價值。",
    tags: ["Digital Humanities", "Knowledge Platform", "Semantic Search", "Metadata", "Data Platform"],
    proofStatus: "公開素材：文學好臺誌公開網站截圖，呈現文學資料如何被整理、查詢與展示。",
  },
  {
    title: "Taiwan Biographical Ontology",
    category: "國際研究 / 人物本體 / 知識平台",
    image: {
      src: publicAssetPath("/assets/cases/tbio-card.png"),
      alt: "Taiwan Biographical Ontology 公開網站截圖",
      caption: "公開候選圖：Taiwan Biographical Ontology / Oriental Institute, Czech Academy of Sciences",
    },
    problem: "台灣人物、組織、職位與生命歷程資料橫跨多個來源；若缺乏本體與 linked data 結構，研究者難以系統性比較人物群體、查詢關係與重用資料。",
    solution: "以 Taiwan Biographical Ontology 整理人物、組織、地點、職位與資料來源，支援瀏覽、語意查詢、資料下載與研究資料集貢獻。",
    value: "讓傳記資料從分散紀錄升級為可探索、可分析、可擴充的研究知識平台，支援台灣社會群體與職涯路徑研究。",
    tags: ["Taiwan Biographical Ontology", "Prosopography", "Linked Data", "Knowledge Graph", "Research Database"],
    proofStatus: "公開素材：TBIO 公開首頁截圖。公開頁面顯示資料涵蓋人物、組織與職位，並提供 Browse、Query、Sources 與資料下載路徑。",
  },
  {
    title: "香港中文大學圖書館傳記資料庫",
    category: "圖書館 / 人物資料 / 知識平台",
    image: {
      src: publicAssetPath("/assets/cases/biography-database-search.svg"),
      alt: "人物資料庫搜尋與詳情頁公開重繪圖",
      caption: "公開重繪圖：人物資料庫搜尋與詳情頁",
    },
    problem: "人物資料需要兼顧權威性、檢索效率與關聯呈現；若缺乏結構化設計，新增、查詢、分類與展示都會變得困難。",
    solution: "以人物資料結構、分類與前台查詢設計支援資料管理與使用者探索，讓傳記資料能以更清楚的方式被維護與使用。",
    value: "提升傳記資料的可查詢性與可維護性，讓圖書館資料更容易被研究者與公眾使用。",
    tags: ["Biography Database", "Library", "Knowledge Graph", "Metadata", "Search"],
    proofStatus: "公開素材：人物資料庫搜尋與詳情頁重繪圖，呈現搜尋、人物 profile、source records 與關係脈絡。",
  },
  {
    title: "社會網絡分析與人物知識本體",
    category: "Ontology / 分析平台 / 知識圖譜",
    image: {
      src: publicAssetPath("/assets/cases/lxt-sna-card.jpg"),
      alt: "社會網絡分析平台公開網站截圖",
      caption: "公開候選圖：社會網絡分析平台",
    },
    problem: "人物、事件、組織與地點資料如果沒有本體模型，難以做關聯分析、社會網絡分析與視覺化呈現。",
    solution: "建立人物、事件、組織、地點等語意模型，支援關係查詢、社會網絡分析與資料視覺化。",
    value: "讓資料關係視覺化，支援人物與事件脈絡分析，將研究資料從資料庫升級為可探索知識網絡。",
    tags: ["Ontology", "SNA", "Knowledge Graph", "Semantic Model", "Visualization"],
    proofStatus: "公開素材：社會網絡分析平台截圖，呈現人物、事件、組織與地點關係如何轉成可探索的知識網絡。",
  },
];

export const caseProofNeeds = [
  {
    title: "視覺證據",
    items: ["DPP QR demo 截圖", "資料流儀表板", "Merkle proof 或驗證結果視覺", "回收履歷流程圖", "知識圖譜或社會網絡分析截圖", "數位人文與國際研究子站截圖"],
  },
  {
    title: "商務證據",
    items: ["客戶可公開名稱與 logo", "可公開成果數字", "客戶引用語", "稽核前後工時或流程改善描述", "資料筆數、維運年限或國際合作成果"],
  },
  {
    title: "內容證據",
    items: ["每個案例 1-2 句客戶背景", "每個案例 1 張代表截圖", "每個案例 3-5 個技術標籤", "每個案例 1 句可公開成果"],
  },
];
