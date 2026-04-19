export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技專注替 B2B、科技、製造、AI 與高知識密度團隊，重新設計與重建更成熟的 commercial website system。從品牌主張、網站架構、案例證據到啟動流程，整成一套能支撐 shortlist、提案、採購與成交前進的商務前台。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "把官網重建成買方判斷更快、內部轉傳更順、商務對話更容易開始的 commercial front door.",
  heroDescription:
    "不是延用舊站優化思維，而是重做 brand thesis、sitemap、頁面任務、proof architecture 與 CTA ladder，讓網站真正配得上 2026 的商業成熟度。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "適用情境" },
  { href: "/solutions", label: "商業系統" },
  { href: "/work", label: "證據系統" },
  { href: "/contact", label: "啟動路徑" },
];

export const headerReassuranceSignals = [
  "每晚重建，不做舊站微調",
  "品牌、IA、案例、CTA 同步重做",
  "Quick Brief / Workshop / NDA 三層入口",
];

export const solutions = [
  {
    title: "Commercial Front Door Rebuild",
    description: "把首頁、導覽、核心內頁與關鍵 CTA 重做成能支撐 buyer fit、shortlist 與下一步對話的商務入口。",
  },
  {
    title: "Offer Packaging and Capability Framing",
    description: "把複雜的 AI、平台、顧問、製造或資料能力，重組成買方、主管、採購與合作窗口都能快速理解的購買語言。",
  },
  {
    title: "Evidence Architecture System",
    description: "把案例、驗證、流程、數據與內容資產，整理成更可信、可引用、可被轉傳的外部證據系統。",
  },
];

export const contactChannels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { label: "Location", value: siteConfig.location, href: siteConfig.url },
];

export const quickBriefAssistPoints = [
  "不是只回覆收到，而是直接回一版商業切口、頁面優先序與建議 sprint",
  "會直接指出目前更該先重做首頁、方案頁、案例系統，還是 trust UX",
  "若涉及敏感客戶、採購或法遵，可直接切換 Email / NDA 路徑",
];

export const stats = [
  { value: "5 秒", label: "Buyer clarity" },
  { value: "4 層", label: "Commercial stack" },
  { value: "3 種", label: "Start paths" },
  { value: "Shortlist-ready", label: "Proof system" },
];

export const heroClients = [
  { name: "B2B SaaS / 平台型公司", context: "需要把產品能力、導入方式、整合流程與 enterprise 信任訊號講得更成熟。" },
  { name: "製造 / 工業 / 出口品牌", context: "需要把技術、驗證、供應鏈與合作方式整理成國際買方看得懂的結構。" },
  { name: "AI / 顧問 / 自動化團隊", context: "能力很多，但若沒有 offer packaging，外部很難快速判斷值不值得談。" },
  { name: "研究 / 永續 / 知識平台", context: "需要在高內容密度下，仍維持清晰、可信、可查找與可引用。" },
];

export const heroProofs = [
  { label: "Brand thesis", value: "Outcome before intro", description: "先說商業結果與 buyer fit，再說你是誰。" },
  { label: "UX logic", value: "One page, one decision", description: "每一頁只服務一種決策，不把所有內容平均分攤。" },
  { label: "Conversion", value: "Friction-aware starts", description: "依成熟度設計不同入口，降低第一次接觸阻力。" },
];

export const heroQuickSignals = [
  { label: "適合客群", value: "B2B / 科技 / 製造 / AI / 高知識密度團隊" },
  { label: "重建範圍", value: "品牌主張、IA、案例、頁面、CTA 系統" },
  { label: "啟動方式", value: "Quick Brief / Workshop / NDA" },
];

export const heroFitSignals = [
  "你們的商業成熟度已經變了，但網站還停在舊版公司介紹。",
  "能力很多，陌生買方卻仍看不出你真正賣的是什麼。",
  "案例明明有料，卻還不能被主管、業務或採購直接轉傳。",
  "真正需要的不是再修一版 hero，而是整個 buying journey 的重建。",
];

export const heroContactLadder = [
  { label: "Path 01", title: "Quick Brief", detail: "適合已知道方向，想先拿到首頁切口、頁面優先序與第一輪建議。", cta: "3 分鐘開始", href: "/#quick-brief" },
  { label: "Path 02", title: "Decision Workshop", detail: "適合已有內部共識，需要一起對焦 buyer、proof gap 與 sprint 邊界。", cta: "看工作坊", href: "/contact" },
  { label: "Path 03", title: "Email / NDA", detail: "適合涉及採購、法遵或敏感資料，想先低風險確認 fit 與合作方式。", cta: "先寄 Email", href: `mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi 專案討論 / NDA")}` },
];

export const homepageContactProof = [
  "第一次回覆就先指出目前最該重做的頁面、訊息斷點與 proof 缺口。",
  "會直接建議先從首頁、方案頁、案例系統，還是 trust content 切入。",
  "敏感專案可直接走 NDA 路徑，不必一開始就公開全部背景。",
];

export const contactFastFacts = [
  { label: "First response", value: "24h 內" },
  { label: "Decision workshop", value: "30-45 分鐘" },
  { label: "First sprint", value: "3-7 天" },
  { label: "Start modes", value: "Brief / Workshop / NDA" },
];

export const contactModes = [
  { title: "Quick Brief", detail: "已知道網站要重建，想先拿到首頁切口、頁面優先序與建議 sprint。", fit: "適合想快速確認方向的團隊" },
  { title: "Decision Workshop", detail: "需要一起對焦 buyer、proof gap、案例策略與第一輪範圍。", fit: "適合跨部門與需求較複雜的案子" },
  { title: "Email / NDA", detail: "專案較敏感，想先確認 fit、流程與合作邊界，再進一步分享資料。", fit: "適合法遵、採購或保密需求較高的專案" },
];

export const contactChecklist = [
  "目前最大的商務溝通阻力是什麼，是定位、案例、方案還是信任不足。",
  "這次最想先重做哪一頁或哪個模組，例如首頁、案例、方案頁或 contact flow。",
  "目前是想先做短 sprint、工作坊，還是已準備進入完整重建。",
];

export const homepageModules = [
  { label: "Homepage thesis", title: "首屏先賣 decision clarity，不先賣自己很厲害", evidence: "先講 buyer、問題、商業結果與下一步，降低陌生流量理解成本。" },
  { label: "Navigation logic", title: "整站像 buying flow，不像內容倉庫", evidence: "每一頁都負責一個判斷任務，閱讀順序更接近真實商務流程。" },
  { label: "Evidence system", title: "案例先變成可轉傳 proof，再變成作品展示", evidence: "先有 context、scope、proof、fit，才補完整專案內容。" },
];

export const homepageCompactCaseEvidence = homepageModules;

export const homepageBenchmarks = [
  { source: "Stripe / Ramp 類型", title: "Outcome-first messaging", detail: "首頁前段優先回答商業結果、適合對象、可信規模與下一步。", application: "道易首頁先處理 buyer fit、商業價值與啟動路徑，再補公司介紹。" },
  { source: "Linear / Vercel 類型", title: "Dense but scannable", detail: "複雜能力也能高密度呈現，只要模組任務清楚、層級穩定。", application: "每個區塊都對應一個 buying question，不再平均分攤資訊。" },
  { source: "高品質設計公司站", title: "Proof-led storytelling", detail: "案例先講情境、價值與結果訊號，再談方法與畫面。", application: "道易案例先做 shortlist-ready 摘要，再延伸完整專案。" },
];

export const homepageDecisionLayers = [
  { label: "Layer 01", title: "Category clarity", detail: "五秒內說清楚替誰解哪一種高價值問題。" },
  { label: "Layer 02", title: "Commercial choreography", detail: "首頁、適用情境、商業系統、案例、Contact 各自負責不同任務。" },
  { label: "Layer 03", title: "Evidence architecture", detail: "proof 先支援轉傳、採購與提案，再支援作品欣賞。" },
  { label: "Layer 04", title: "Conversion ladder", detail: "依專案成熟度提供不同 friction 的開始方式。" },
];

export const homepageSitemap = [
  ["首頁", "先讓買方完成 fit 判斷、理解 category 並知道下一步怎麼開始。"],
  ["適用情境", "讓不同產業與角色判斷自己現在該重建哪一層。"],
  ["商業系統", "把重建 sprint、能力包裝與 trust architecture 做成清楚 buying guide。"],
  ["證據系統", "案例先當 evidence asset，再延伸成完整專案敘事。"],
  ["啟動路徑", "把 Quick Brief、Workshop、NDA 做成低摩擦決策入口。"],
];

export const heroActionSignals = [
  { step: "01", metric: "3 分鐘", title: "送出 Quick Brief", detail: "留下公司現況、卡點、最想重做的頁面與商務目標。" },
  { step: "02", metric: "24h", title: "收到重建方向", detail: "先回一版首頁切口、建議 sitemap、案例策略與推薦 sprint。" },
  { step: "03", metric: "30-45 分鐘", title: "對焦決策問題", detail: "一起確認 buyer、proof gap、素材來源與合作邊界。" },
  { step: "04", metric: "Sprint-ready", title: "開始第一輪重建", detail: "從首頁、方案頁、案例系統或 trust UX 先落出可討論版本。" },
];

export const heroPreviews = [
  { id: "clarity", label: "Stripe / Ramp 類型", metric: "Commercial clarity", summary: "高表現 B2B 首頁幾乎都先把 outcome、category、proof 與 CTA 雙軌放在前段。", checklist: ["主張先講結果", "適合對象清楚", "proof 先於自介", "CTA 至少雙軌"] },
  { id: "structure", label: "Linear / Vercel 類型", metric: "Structured UX", summary: "資訊密度可以高，但必須層級穩定、模組任務清楚、掃讀成本低。", checklist: ["模組任務清楚", "掃讀效率高", "密度高但不亂", "頁面角色分明"] },
  { id: "proof", label: "設計公司強站類型", metric: "Proof-led story", summary: "案例不是作品牆，而是商業證據。先講情境、結果與適用對象，再補方法。", checklist: ["情境先行", "結果可引用", "適用對象清楚", "CTA 接得上"] },
];

export const heroClarityChecklist = [
  { label: "Who", answer: "高複雜度 B2B、科技、製造、AI 與知識型團隊", detail: "適合需要支撐業務、採購、提案與信任建立的網站重建專案。", metric: "Buyer fit" },
  { label: "What", answer: "重建 commercial website system 與 proof architecture", detail: "不是換視覺而已，而是重做品牌主張、頁面角色、案例證據與 CTA。", metric: "System first" },
  { label: "How", answer: "從 Quick Brief 或 strategy call 啟動第一個 sprint", detail: "讓第一次接洽就能落到具體頁面與決策問題，不空談。", metric: "Low friction" },
];

export const caseOverviewStats = [
  { label: "Case format", value: "Context → Shift → Proof → Fit", detail: "案例先回答商業情境、改變了什麼、證據訊號與適用對象。" },
  { label: "Decision use", value: "Shortlist-ready", detail: "能被業務、主管與 buying committee 快速轉傳。" },
  { label: "Proof style", value: "摘要先行", detail: "先講可引用訊號，再延伸到更完整內容與畫面。" },
];

export const executiveScorecards = [
  { title: "Value proposition clarity", detail: "買方能否在幾秒內理解你服務誰、解什麼問題、為何值得談。" },
  { title: "Decision-oriented IA", detail: "首頁、商業系統、案例、Contact 是否各司其職，而不是每頁都講一點。" },
  { title: "Proof portability", detail: "案例是否能被主管、業務與採購直接引用與轉傳。" },
  { title: "Conversion readiness", detail: "是否提供不同阻力等級的啟動方式，降低第一次接觸的不確定。" },
];

export const caseSnapshots = [
  { id: "website-rebuild", label: "Front door rebuild", context: "Decision architecture", title: "把首頁從公司自述，重構成 buying committee 能快速 shortlist 的 decision layer", summary: "核心成果不是頁面更漂亮，而是更快對齊 buyer、proof、風險與下一步。", metrics: [ { label: "Challenge", value: "主張模糊", detail: "有能力也有內容，但高意圖流量無法快速判斷 fit 與可信度" }, { label: "Delivery", value: "Message + IA + CTA", detail: "同步重做品牌主張、頁面架構、案例格式與啟動節奏" } ], highlights: ["首頁像 decision deck", "內頁角色重新分工", "CTA 依成熟度分層"], href: "/work" },
  { id: "offer-framing", label: "Offer packaging", context: "Commercial packaging", title: "把 AI、顧問或複雜服務能力，重構成可提案、可採購、可驗收的網站敘事", summary: "讓主管、PM、採購與合作窗口在短時間內看懂適用場景、範圍、流程與風險邊界。", metrics: [ { label: "Challenge", value: "能力抽象", detail: "客戶知道你們能做很多，但不知道這跟自己的業務有什麼直接價值" }, { label: "Delivery", value: "Buyer-ready framing", detail: "重新整理角色、問題、流程、輸出、proof 與驗收節點" } ], highlights: ["角色與流程講清楚", "方案可被業務轉述", "導入步驟與風險前置"], href: "/work" },
  { id: "trust-evidence", label: "Evidence architecture", context: "Trust experience", title: "把高內容密度與透明資料，做成值得信任、也真的看得懂的外部證據系統", summary: "從欄位、查找路徑、解釋節奏到 CTA 都一起設計，不讓資料只停在堆疊。", metrics: [ { label: "Challenge", value: "理解門檻高", detail: "資料很多，但外部看不懂結構、意義與可驗證性" }, { label: "Delivery", value: "IA + trust UX", detail: "整理欄位藍圖、理解路徑、證據模組與對外解釋方式" } ], highlights: ["欄位藍圖", "理解與查找路徑", "可信內容模組"], href: "/work" },
];

export const personaPlaybooks = [
  { id: "marketing", title: "品牌 / 行銷 / Growth", headline: "網站要先講清楚價值，不然再多流量也很難變成高品質對話。", challenge: "流量、素材、案例都有，但主張與 proof 沒被整理成 buyer 容易判斷的順序。", win: "重做 hero、價值主張、案例摘要與 CTA，讓網站先像商務入口，不只是品牌門面。", metric: { label: "優先處理", value: "訊息清晰度 + proof 密度" }, checklist: ["重寫主張", "建立 fit 區塊", "把案例摘要與 CTA 前置"], ctaHref: "/contact", ctaLabel: "討論首頁重建", helperText: "適合網站看似完整，但詢問品質與轉換效率不穩的團隊。" },
  { id: "operations", title: "營運 / PM / 業務", headline: "需要讓服務、流程、時程與交付方式，被外部與內部都更容易理解。", challenge: "現有網站只有能力清單，沒有把真正的合作方式與決策路徑講清楚。", win: "把方案頁與 contact flow 做成 buying guide，降低第一次溝通成本與理解落差。", metric: { label: "優先處理", value: "方案結構 + 啟動節奏" }, checklist: ["定義 solution tracks", "把第一輪 sprint 產品化", "前置回覆節奏"], ctaHref: "/contact", ctaLabel: "規劃 solution sprint", helperText: "適合案型複雜、跨部門利害關係人多的專案。" },
  { id: "trust", title: "永續 / 法遵 / 知識治理", headline: "高密度資訊不是問題，問題是網站有沒有把它整理成可信又好懂的體驗。", challenge: "內容很多，但目前站點沒有把資料、背景與價值翻成外部可理解的路徑。", win: "重做 IA、proof modules 與對外說明節奏，讓 trust content 真正發揮商務作用。", metric: { label: "優先處理", value: "IA + Trust UX" }, checklist: ["重做內容層級", "建立 trust modules", "設計外部理解路徑"], ctaHref: "/contact", ctaLabel: "討論 trust experience", helperText: "適合透明資料、合規敘事與高內容密度網站。" },
];

export const solutionTracks = [
  {
    title: "Website Rebuild Sprint",
    summary: "適合網站已跟不上商業成熟度，需要先重做品牌主張、首頁架構與核心頁面。",
    outputs: ["品牌主張與首頁 thesis", "新 sitemap 與頁面任務", "首頁 / 商業系統 / Contact 第一輪模組"],
  },
  {
    title: "Decision Workshop",
    summary: "適合內部有多方利害關係人，先對齊 buyer、proof gap、頁面優先序與 sprint 邊界。",
    outputs: ["buyer 與 buying blockers", "proof gap map", "30-45 分鐘工作坊與下一步建議"],
  },
  {
    title: "Evidence System Sprint",
    summary: "適合案例很多但不好用，想把作品牆改成真正支撐 shortlist 的證據系統。",
    outputs: ["case summary 模板", "evidence cards", "CTA 與轉傳情境設計"],
  },
];
