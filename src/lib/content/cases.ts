import { publicAssetPath } from "@/lib/site";

export const workHero = {
  eyebrow: "Case Proof Library",
  title: "用實績看道易如何把複雜資料做成可查、可驗、可維護的平台",
  description:
    "道易科技的案例橫跨 DPP 數位產品護照、ESG 與回收履歷、AI-Ontology、數位人文、研究資料庫與知識平台。我們不是只做網站介面，而是協助組織把分散資料整理成資料模型、查詢流程、管理後台、Dashboard、API 與可信驗證脈絡。",
};

export const workHeroStats = [
  {
    value: "6",
    label: "個代表案例",
    detail: "涵蓋 DPP、ESG、AI-Ontology、知識平台與資料系統整合。",
  },
  {
    value: "4",
    label: "類資料場景",
    detail: "產品與供應鏈資料、回收與稽核資料、人物文本資料、研究與圖書館資料。",
  },
  {
    value: "1",
    label: "個共同核心",
    detail: "把資料變成能查詢、能驗證、能維護、能長期擴充的系統資產。",
  },
];

export const caseCategories = [
  {
    id: "dpp-esg",
    title: "DPP / ESG / 循環經濟",
    detail: "適合想整理產品資料、材料來源、回收履歷、ESG 稽核資料與供應鏈揭露的團隊。",
    examples: ["Easy DPP 數位產品護照", "太陽能板回收 YOLO 辨識與履歷"],
    href: "#featured-cases",
    cta: "查看 DPP / ESG 案例",
  },
  {
    id: "ai-ontology",
    title: "AI-Ontology / 數位人文",
    detail: "適合想整理人物、作品、事件、地點、文本、館藏與研究資料的政府、學研與文化機構。",
    examples: ["國立臺灣文學館好臺誌、外譯房", "社會網絡分析與人物知識本體"],
    href: "#featured-cases",
    cta: "查看 AI-Ontology 案例",
  },
  {
    id: "research",
    title: "國際研究 / 知識平台",
    detail: "適合需要多語系資料展示、研究資料整理、linked data、語意查詢與長期維護資料庫的研究團隊。",
    examples: ["Taiwan Biographical Ontology", "ORIENT Card Catalog", "TLiT"],
    href: "#more-cases",
    cta: "查看研究平台案例",
  },
  {
    id: "data-platform",
    title: "資料平台 / 系統整合",
    detail: "適合已有資料、舊系統、Excel、資料庫或內部流程，但缺少清楚後台、查詢頁、API 或資料維護流程的組織。",
    examples: ["香港中文大學圖書館傳記資料庫", "土地台帳建檔輔助系統"],
    href: "#case-comparison",
    cta: "查看資料平台案例",
  },
];

export const caseStudies = [
  {
    id: "easy-dpp",
    title: "Easy DPP 數位產品護照",
    category: "DPP / 產品履歷 / 供應鏈透明 / ESG",
    filterGroup: "DPP / ESG",
    image: {
      src: publicAssetPath("/assets/cases/dpp-qr-query-demo.svg"),
      alt: "DPP QR 查詢頁公開重繪示意圖",
      caption: "公開重繪示意圖：DPP QR 查詢頁 demo",
    },
    summary: "把產品資料整理成可掃描、可查詢、可維護的數位產品身分。",
    problem:
      "產品的材料、來源、製程、環境資訊與回收指引，常常分散在不同部門、供應商、文件或表單中。當企業需要推動 DPP、供應鏈透明化或 ESG 揭露時，資料不只要被展示，更要能被管理、更新與追溯。",
    solution:
      "道易將產品資料整理成 DPP 資料架構，規劃產品身分、材料資訊、製程資料、回收指引、公開查詢頁與後台維護邏輯，讓產品資料從單次展示變成可持續維護的資料資產。",
    deliverables: ["DPP 欄位藍圖", "產品資料模型", "QR Code 查詢頁原型", "後台資料維護流程", "ESG 與供應鏈揭露資料架構"],
    extension: "適合製造商、品牌商、材料供應商與循環經濟團隊，先用一個產品或一組 SKU 驗證 DPP PoC。",
    tags: ["DPP", "QR Code", "Product Data Model", "Traceability", "Supply Chain", "ESG"],
    ctaLabel: "討論 DPP PoC",
    ctaHref: "/contact?topic=dpp-poc",
    proofStatus: "公開素材：DPP QR 查詢頁重繪示意圖，呈現產品身分、材料資訊、回收指引與驗證狀態。",
  },
  {
    id: "solar-recycling",
    title: "太陽能板回收 YOLO 辨識與履歷",
    category: "AIoT / 回收履歷 / ESG 稽核 / Data Trust Chain",
    filterGroup: "DPP / ESG",
    image: {
      src: publicAssetPath("/assets/cases/recycling-traceability-dashboard.svg"),
      alt: "AIoT 回收履歷查核結果 Dashboard 公開重繪示意圖",
      caption: "公開重繪示意圖：AIoT 回收履歷 Dashboard",
    },
    summary: "把現場影像、設備資料、批次紀錄與回收流程整合成可追溯履歷。",
    problem:
      "回收流程牽涉影像、設備、拆解、材料、批次與後續稽核資料。如果只靠人工紀錄或單點系統保存，後續很難證明資料來源、流程完整性與回收結果可信度。",
    solution:
      "道易將 YOLO 影像辨識、現場設備資料、批次流程與回收履歷整合，規劃可被查詢與查核的資料結構，讓回收資料能支撐 ESG 稽核、DPP 延伸與資料信任鏈。",
    deliverables: ["AI 影像辨識資料整合", "回收批次資料模型", "材料回收狀態 Dashboard", "現場流程紀錄架構", "資料查核與信任鏈規劃"],
    extension: "適合回收處理業者、再生資源團隊、ESG 查核團隊，以及需要把現場資料接回管理平台的組織。",
    tags: ["AIoT", "YOLO", "Image Recognition", "Traceability", "ESG Audit", "Data Trust Chain"],
    ctaLabel: "討論回收履歷整合",
    ctaHref: "/contact?topic=recycling-traceability",
    proofStatus: "公開素材：回收履歷 Dashboard 重繪示意圖，呈現 AI 影像證據、批次狀態、材料回收與信任鏈查核。",
  },
  {
    id: "nmtl",
    title: "國立臺灣文學館好臺誌、外譯房",
    category: "數位人文 / 知識平台 / 語意資料 / 文化資料",
    filterGroup: "AI-Ontology",
    image: {
      src: publicAssetPath("/assets/cases/tlsg-nmtl-card.jpg"),
      alt: "文學好臺誌公開網站截圖",
      caption: "公開截圖：文學好臺誌 / NMTL",
    },
    summary: "把文學資料、人物、作品、主題與歷史脈絡整理成可查詢、可探索的平台。",
    problem:
      "文學與文化資料通常包含人物、作品、地點、主題、年代、文本與歷史脈絡。若只用一般網站展示，使用者很難探索資料之間的關係，管理端也不容易長期維護資料品質。",
    solution:
      "道易協助建置數位人文資料平台，將文學與文化內容整理成可查詢、可展示、可維護的資料結構，支援前台探索與後台資料管理。",
    deliverables: ["文學資料結構設計", "人物與作品資料整理", "前台查詢與展示介面", "後台內容維護流程", "文化資料平台架構"],
    extension: "適合文化館所、博物館、圖書館、政府文化單位與研究計畫，將既有資料轉化成公共展示與研究查詢平台。",
    tags: ["Digital Humanities", "Knowledge Platform", "Metadata", "Semantic Search", "Data Platform"],
    ctaLabel: "討論數位人文平台",
    ctaHref: "/contact?topic=digital-humanities",
    proofStatus: "公開素材：文學好臺誌公開網站截圖，呈現文學資料如何被整理、查詢與展示。",
  },
  {
    id: "tbio",
    title: "Taiwan Biographical Ontology",
    category: "國際研究 / 人物本體 / Linked Data / Knowledge Graph",
    filterGroup: "研究資料庫",
    image: {
      src: publicAssetPath("/assets/cases/tbio-card.png"),
      alt: "Taiwan Biographical Ontology 公開網站截圖",
      caption: "公開截圖：Taiwan Biographical Ontology / Oriental Institute, Czech Academy of Sciences",
    },
    summary: "把人物、組織、職位與生命歷程資料整理成可探索、可分析、可擴充的研究資料庫。",
    problem:
      "傳記資料橫跨人物、組織、職位、地點、事件與來源。如果缺少本體架構與 linked data 設計，研究者很難系統性比較人物群體、分析關係、查詢職涯路徑或重用資料集。",
    solution:
      "道易以 Taiwan Biographical Ontology 為核心，整理人物、組織、地點、職位與資料來源，支援瀏覽、語意查詢、資料下載與研究資料集貢獻。",
    deliverables: ["人物本體資料模型", "組織、職位、地點關係設計", "研究資料瀏覽與查詢介面", "資料來源與下載流程", "可擴充研究資料庫架構"],
    extension: "適合國際研究機構、大學研究中心、歷史研究計畫與需要整理大型人物資料的團隊。",
    tags: ["Ontology", "Prosopography", "Linked Data", "Knowledge Graph", "Research Database"],
    ctaLabel: "討論研究資料庫",
    ctaHref: "/contact?topic=research-database",
    proofStatus: "公開素材：TBIO 公開首頁截圖。公開頁面顯示資料涵蓋人物、組織與職位，並提供 Browse、Query、Sources 與資料下載路徑。",
  },
  {
    id: "cuhk-biography",
    title: "香港中文大學圖書館傳記資料庫",
    category: "圖書館 / 傳記資料 / 搜尋系統 / 知識平台",
    filterGroup: "圖書館 / 資料平台",
    image: {
      src: publicAssetPath("/assets/cases/biography-database-search.svg"),
      alt: "人物資料庫搜尋與詳情頁公開重繪示意圖",
      caption: "公開重繪示意圖：人物資料庫搜尋與詳情頁",
    },
    summary: "把傳記資料整理成可搜尋、可維護、可呈現來源脈絡的資料庫平台。",
    problem:
      "人物資料需要同時兼顧權威性、檢索效率、資料來源與關聯呈現。如果缺乏結構化設計，新增資料、分類管理、前台查詢與人物詳情展示都會變得困難。",
    solution:
      "道易以人物資料結構、分類規則與前台查詢體驗為核心，支援傳記資料的後台管理、搜尋、人物 profile、source records 與關係脈絡呈現。",
    deliverables: ["人物資料模型", "搜尋與篩選介面", "人物詳情頁結構", "資料來源紀錄設計", "圖書館資料維護流程"],
    extension: "適合圖書館、典藏單位、研究資料中心與有大量人物資料需要管理、查詢與展示的組織。",
    tags: ["Biography Database", "Library", "Metadata", "Search", "Knowledge Graph"],
    ctaLabel: "討論人物資料平台",
    ctaHref: "/contact?topic=biography-platform",
    proofStatus: "公開素材：人物資料庫搜尋與詳情頁重繪示意圖，呈現搜尋、人物 profile、source records 與關係脈絡。",
  },
  {
    id: "sna-ontology",
    title: "社會網絡分析與人物知識本體",
    category: "Ontology / 社會網絡分析 / Knowledge Graph / Visualization",
    filterGroup: "AI-Ontology",
    image: {
      src: publicAssetPath("/assets/cases/lxt-sna-card.jpg"),
      alt: "社會網絡分析平台公開網站截圖",
      caption: "公開截圖：社會網絡分析平台",
    },
    summary: "把人物、事件、組織與地點關係轉成可查詢、可視覺化的知識網絡。",
    problem:
      "人物、事件、組織與地點之間的關係通常分散在文本、資料庫或研究紀錄中。如果沒有本體模型，資料很難被用來做關聯查詢、社會網絡分析與視覺化呈現。",
    solution:
      "道易建立人物、事件、組織與地點的語意模型，支援關係查詢、社會網絡分析與資料視覺化，讓研究資料從靜態資料庫升級為可探索知識網絡。",
    deliverables: ["人物與事件本體模型", "關係資料整理", "社會網絡分析介面", "知識圖譜視覺化", "研究資料探索流程"],
    extension: "適合研究團隊、文化機構、政府資料平台與需要分析人物關係、事件脈絡或組織網絡的專案。",
    tags: ["Ontology", "SNA", "Knowledge Graph", "Semantic Model", "Visualization"],
    ctaLabel: "討論知識圖譜平台",
    ctaHref: "/contact?topic=knowledge-graph",
    proofStatus: "公開素材：社會網絡分析平台截圖，呈現人物、事件、組織與地點關係如何轉成可探索的知識網絡。",
  },
];

export const moreCaseScenarios = [
  {
    title: "ORIENT Card Catalog",
    detail: "國際研究資料整理、卡片目錄資料、學術資料庫、長期維護型平台。",
    tags: ["Research Data", "Catalog", "Database", "Maintenance"],
  },
  {
    title: "TLiT",
    detail: "研究資料展示、多語系內容、資料查詢與知識平台。",
    tags: ["Multilingual", "Research", "Search", "Knowledge Platform"],
  },
  {
    title: "台灣傳記知識本體",
    detail: "人物資料、職位關係、地點與事件資料、知識本體建模。",
    tags: ["Biography", "Ontology", "Relation", "Semantic Model"],
  },
  {
    title: "土地台帳建檔輔助系統",
    detail: "歷史資料建檔、後台資料整理、欄位規則與資料輸入流程。",
    tags: ["Historical Data", "Back Office", "Field Rules", "Data Entry"],
  },
];

export const workMethodSteps = [
  {
    step: "01",
    title: "盤點資料來源",
    detail: "確認資料來自 Excel、舊系統、設備、文件、文本、影像、人工紀錄或外部來源，並釐清更新與查詢角色。",
  },
  {
    step: "02",
    title: "建立資料模型",
    detail: "把欄位、實體、關係、版本、來源與使用情境整理成可實作的資料結構，讓後台能長期維護。",
  },
  {
    step: "03",
    title: "做出可用介面",
    detail: "依需求規劃查詢頁、QR Code 頁、Dashboard、資料管理後台、API 或視覺化介面。",
  },
  {
    step: "04",
    title: "加上可信脈絡",
    detail: "針對 DPP、ESG、回收履歷或稽核資料，設計來源紀錄、版本管理、查核節點與 audit trail。",
  },
];

export const workComparisonRows = [
  {
    caseName: "Easy DPP 數位產品護照",
    href: "#easy-dpp",
    audience: "製造、品牌、材料、循環經濟團隊",
    dataType: "產品、材料、製程、回收指引",
    delivery: "DPP 資料模型、QR 查詢頁、後台流程",
    extension: "ESG、供應鏈透明、產品資料治理",
  },
  {
    caseName: "太陽能板回收 YOLO 辨識與履歷",
    href: "#solar-recycling",
    audience: "回收處理、再生資源、ESG 團隊",
    dataType: "影像、設備、批次、材料、流程",
    delivery: "回收履歷、AIoT 整合、Dashboard",
    extension: "ESG 稽核、DPP 延伸、資料信任鏈",
  },
  {
    caseName: "國立臺灣文學館好臺誌、外譯房",
    href: "#nmtl",
    audience: "文化館所、政府、學研單位",
    dataType: "人物、作品、文本、主題、地點",
    delivery: "數位人文平台、查詢展示、後台管理",
    extension: "語意搜尋、知識圖譜、公共展示",
  },
  {
    caseName: "Taiwan Biographical Ontology",
    href: "#tbio",
    audience: "國際研究機構、研究中心",
    dataType: "人物、組織、職位、地點、來源",
    delivery: "人物本體、研究資料庫、查詢與下載",
    extension: "Linked Data、研究資料集、關係分析",
  },
  {
    caseName: "香港中文大學圖書館傳記資料庫",
    href: "#cuhk-biography",
    audience: "圖書館、典藏、研究資料中心",
    dataType: "傳記、人物、來源紀錄",
    delivery: "搜尋系統、人物詳情頁、資料管理",
    extension: "知識平台、權威資料、來源追蹤",
  },
  {
    caseName: "社會網絡分析與人物知識本體",
    href: "#sna-ontology",
    audience: "研究團隊、文化機構、政府資料平台",
    dataType: "人物、事件、組織、地點、關係",
    delivery: "本體模型、SNA、知識圖譜視覺化",
    extension: "關係分析、語意查詢、資料探索",
  },
];

export const workCtaPrompts = [
  "產品資料要做 DPP 或 QR 查詢",
  "回收、ESG 或供應鏈資料需要被查核",
  "研究、文化或人物資料需要做成知識平台",
  "已有資料庫或舊系統，但查詢、維護與整合困難",
  "資料涉及商業機密，需要先走 NDA",
];
