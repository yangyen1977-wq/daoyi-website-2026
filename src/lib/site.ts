export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技為 B2B、科技、SaaS、製造、AI 與高知識密度團隊，重新設計並重建 commercial website system。不是延續舊站修補，而是從品牌命題、buyer journey、offer architecture、proof packaging 到 conversion flow 全面重建，讓官網真正成為商務開發、shortlist 與 buying committee 對齊的商務前台。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "把企業官網重建成能被高層、行銷、業務與採購共同理解的 commercial decision interface.",
  heroDescription:
    "道易不是接一個首頁改版，而是替商業成熟度已升級的團隊，重建 category framing、頁面架構、offer、case proof 與 contact flow。結果不是更漂亮的網站，而是更成熟、更能成交的商務前台。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "重建方法" },
  { href: "/solutions", label: "商務方案" },
  { href: "/work", label: "案例證據" },
  { href: "/contact", label: "啟動專案" },
];

export const headerReassuranceSignals = [
  "不是修版，而是重建品牌命題、頁面角色與轉換系統",
  "首頁、方案、案例、Contact 各自承接不同 buying job",
  "Quick Brief / Workshop / NDA 三層低摩擦啟動入口",
];

export const solutions = [
  {
    title: "Commercial Positioning Rebuild",
    description: "重定品牌命題、buyer fit、首頁故事線與網站地圖，讓第一次進站就能快速判斷你值不值得 shortlist。",
  },
  {
    title: "Offer Packaging System",
    description: "把抽象能力重組成可提案、可採購、可驗收的商務方案，降低內外部理解成本與業務轉述難度。",
  },
  {
    title: "Proof and Conversion Engine",
    description: "把案例、trust content、FAQ、contact flow 做成更成熟的證據與啟動系統，幫助 buying committee 更快前進。",
  },
];

export const contactChannels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { label: "Location", value: siteConfig.location, href: siteConfig.url },
];

export const quickBriefAssistPoints = [
  "第一輪回覆就直接指出 category、offer、proof、conversion 哪一層最卡",
  "會附首頁方向、頁面優先序與建議 starter sprint，而不只是回覆收到",
  "保密、投標、採購、法遵情境可直接切 NDA / Email 路徑",
];

export const stats = [
  { value: "5 秒", label: "Clarity window" },
  { value: "4 角色", label: "Buying committee" },
  { value: "3 條", label: "Starter paths" },
  { value: "Shortlist-ready", label: "Proof system" },
];

export const heroClients = [
  { name: "B2B SaaS / 平台型公司", context: "需要把產品價值、導入邏輯、整合情境與 enterprise 信任訊號講成熟。" },
  { name: "製造 / 工業 / 出口品牌", context: "需要把技術能力、驗證標準、供應能力與全球合作方式整理成買方易懂語言。" },
  { name: "AI / 顧問 / 自動化團隊", context: "能力很多但外部難理解，最需要重新 packaging 與 decision-friendly 說法。" },
  { name: "研究 / 永續 / 知識平台", context: "內容與資料密度高，更需要用 IA 與 trust UX 把價值翻譯清楚。" },
];

export const heroProofs = [
  { label: "Category", value: "Outcome before self-intro", description: "先回答買方會得到什麼結果，不先掉進公司自我介紹。" },
  { label: "Architecture", value: "One page, one buying job", description: "首頁、方案頁、案例頁與 Contact 各自完成不同的決策工作。" },
  { label: "Conversion", value: "Low-friction contact ladder", description: "依成熟度安排 Brief、Workshop、NDA，不讓第一次接觸卡住。" },
];

export const heroQuickSignals = [
  { label: "適合對象", value: "B2B / 科技 / SaaS / 製造 / AI / 高知識型團隊" },
  { label: "重建範圍", value: "命題、網站地圖、Offer、案例證據、CTA、Contact flow" },
  { label: "啟動方式", value: "Quick Brief / Decision Workshop / NDA" },
];

export const heroFitSignals = [
  "公司已經變成熟，但官網還在用舊版公司介紹邏輯。",
  "能力很多，陌生買方卻還是很難一句話理解你真正賣什麼。",
  "案例有料，但還不能被主管、業務或採購直接轉傳與內部對齊。",
  "真正需要的不是修一版 hero，而是重做整個 buyer journey。",
];

export const heroContactLadder = [
  { label: "Path 01", title: "Quick Brief", detail: "適合已知道網站落後商業階段，想先拿到定位切口、頁面優先序與 starter sprint。", cta: "3 分鐘開始", href: "/#quick-brief" },
  { label: "Path 02", title: "Decision Workshop", detail: "適合已進入內部討論，要一起對齊 buyer、offer、proof gap、頁面任務與 launch priority。", cta: "看啟動流程", href: "/contact" },
  { label: "Path 03", title: "Email / NDA", detail: "適合敏感專案、法遵、投標或採購情境，先低風險確認 fit 與合作邊界。", cta: "先寄 Email", href: `mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi Commercial Website Rebuild / NDA")}` },
];

export const homepageContactProof = [
  "第一次回覆就指出更該先重做的是命題、IA、Offer、proof 還是 conversion friction。",
  "會直接建議頁面優先序、starter sprint 與內部需要先對齊的決策問題。",
  "敏感專案可直接走 NDA 路徑，不必第一輪就揭露完整商務細節。",
];

export const contactFastFacts = [
  { label: "First response", value: "24h 內" },
  { label: "Decision workshop", value: "30-45 分鐘" },
  { label: "Starter sprint", value: "3-7 天" },
  { label: "Start modes", value: "Brief / Workshop / NDA" },
];

export const contactModes = [
  { title: "Quick Brief", detail: "已確認網站該重建，想先拿到切口、頁面優先序與 starter sprint 建議。", fit: "適合想快速確認方向與 scope 的團隊" },
  { title: "Decision Workshop", detail: "需要一起釐清 buyer、offer、proof gap、頁面任務與第一輪邊界。", fit: "適合跨部門與多角色參與的專案" },
  { title: "Email / NDA", detail: "專案較敏感，想先確認 fit、流程與合作方式，再進一步分享素材。", fit: "適合法遵、採購、研發或保密需求較高的案子" },
];

export const contactChecklist = [
  "目前最大卡點更像 category 不清、offer 不清、proof 不夠，還是啟動 friction 太高。",
  "這次最想先重做哪一層，例如首頁、方案頁、案例證據系統或 trust content。",
  "目前想先做短 sprint、工作坊，還是已準備進入完整重建。",
];

export const homepageModules = [
  { label: "Category system", title: "首屏先完成 buyer fit 與商務價值判斷，不再先落入公司介紹", evidence: "先讓訪客知道你幫誰、改變什麼、為什麼現在值得談。" },
  { label: "Buying architecture", title: "整站像 decision interface，而不是能力清單與內容倉庫", evidence: "首頁、方案頁、案例頁、Contact 各自負責一個明確商務任務。" },
  { label: "Proof packaging", title: "案例先成為可轉傳、可引用、可對齊的商務證據", evidence: "先給 context、shift、proof、fit，讓 buying committee 容易複述。" },
];

export const homepageCompactCaseEvidence = homepageModules;

export const homepageBenchmarks = [
  { source: "Stripe / Ramp / Clay 類型", title: "Outcome-first positioning", detail: "首頁前段優先講結果、適合對象與下一步，而不是先鋪公司介紹。", application: "道易首頁把 buyer fit、商務價值、proof 與 CTA 前置。" },
  { source: "Linear / Vercel / Notion 類型", title: "Dense but scannable UX", detail: "資訊可以密，但必須層級穩、節奏清楚、掃讀成本低。", application: "首頁改成 executive brief 式模組，讓高意圖訪客快速定位自己。" },
  { source: "B2B agency / design studio 強站", title: "Offer as a buying path", detail: "不是列服務項目，而是把合作方式、輸出、時程與適用情境包成購買路徑。", application: "方案頁重做成 buying guide，不是能力字典。" },
  { source: "成熟 SaaS case study 類型", title: "Proof above persuasion", detail: "案例先給 executive summary、結果訊號與適用情境，再展開方法。", application: "案例頁改成 shortlist-ready proof asset 系統。" },
];

export const homepageDecisionLayers = [
  { label: "Layer 01", title: "Category clarity", detail: "五秒內說清楚服務誰、解什麼商務問題、為何值得現在談。" },
  { label: "Layer 02", title: "Offer architecture", detail: "把首頁、方案、案例、Contact 重組成一套能推進採購與共識的網站架構。" },
  { label: "Layer 03", title: "Proof portability", detail: "證據先服務 shortlist、轉傳與內部對齊，再服務展示。" },
  { label: "Layer 04", title: "Conversion design", detail: "依成熟度提供不同 friction 的啟動方式與清楚回覆預期。" },
];

export const homepageSitemap = [
  ["首頁", "先完成 buyer fit、商務命題、proof cue 與 CTA 雙軌判斷。"],
  ["重建方法", "說明何時該重建，並交代道易如何從 category 到 launch 重做。"],
  ["商務方案", "把複雜能力包成可購買、可驗收、可內部對齊的起手方案。"],
  ["案例證據", "案例先當 proof asset，再延伸為完整專案敘事。"],
  ["啟動專案", "把 Quick Brief、Workshop、NDA 做成低摩擦決策入口。"],
];

export const heroActionSignals = [
  { step: "01", metric: "3 分鐘", title: "送出 Quick Brief", detail: "留下網站現況、卡點、最想重做的頁面與商務目標。" },
  { step: "02", metric: "24h", title: "收到重建方向", detail: "先回一版 category framing、首頁方向、proof gap 與建議 starter sprint。" },
  { step: "03", metric: "30-45 分鐘", title: "對焦決策問題", detail: "一起確認 buyer、offer、案例素材、風險與合作邊界。" },
  { step: "04", metric: "Sprint-ready", title: "開始第一輪重建", detail: "從首頁、方案頁、案例系統或 trust UX 先落出可討論版本。" },
];

export const heroPreviews = [
  { id: "clarity", label: "Stripe / Ramp 類型", metric: "Commercial clarity", summary: "高表現 B2B 首頁幾乎都先把 outcome、category、proof 與 CTA 放在前段。", checklist: ["主張先講結果", "適合對象清楚", "proof 先於自介", "CTA 至少雙軌"] },
  { id: "structure", label: "Linear / Vercel 類型", metric: "Structured scanning", summary: "高資訊密度沒問題，但模組任務、節奏與層級必須極穩。", checklist: ["模組任務清楚", "掃讀效率高", "密度高但不亂", "頁面角色分明"] },
  { id: "proof", label: "Agency / SaaS case 類型", metric: "Portable proof", summary: "案例不是作品牆，而是 buying committee 可引用的商務證據。", checklist: ["情境先行", "結果可引用", "適用對象清楚", "CTA 接得上"] },
];

export const heroClarityChecklist = [
  { label: "Who", answer: "高複雜度 B2B、科技、製造、AI 與知識型團隊", detail: "適合需要支撐商務、採購、提案與信任建立的網站重建專案。", metric: "Buyer fit" },
  { label: "What", answer: "重建 commercial website system 與 proof architecture", detail: "不是換視覺，而是重做命題、頁面角色、案例證據與 CTA。", metric: "System first" },
  { label: "How", answer: "從 Quick Brief 或 strategy workshop 啟動第一個 sprint", detail: "讓第一次接洽就落到具體頁面與決策問題，不空談。", metric: "Low friction" },
];

export const caseOverviewStats = [
  { label: "Case format", value: "Context → Shift → Proof → Fit", detail: "案例先回答商務情境、改變了什麼、證據訊號與適用對象。" },
  { label: "Decision use", value: "Shortlist-ready", detail: "能被主管、業務、PM 與採購快速轉傳與複述。" },
  { label: "Proof style", value: "Executive summary first", detail: "先講可引用摘要與結果訊號，再延伸完整內容。" },
];

export const executiveScorecards = [
  { title: "Value proposition clarity", detail: "買方能否在幾秒內理解你服務誰、解什麼問題、為何值得談。" },
  { title: "Decision-oriented IA", detail: "首頁、方案、案例、Contact 是否各司其職，而不是每頁都講一點。" },
  { title: "Proof portability", detail: "案例是否能被主管、業務與採購直接引用與轉傳。" },
  { title: "Conversion readiness", detail: "是否提供不同阻力等級的啟動方式，降低第一次接觸的不確定。" },
];

export const caseSnapshots = [
  { id: "commercial-reframe", label: "Commercial interface", context: "Category + IA reset", title: "把企業首頁從公司自述，重構成能支撐 shortlist 與 buying committee 對齊的商務首頁", summary: "成果不是畫面更新，而是讓高意圖訪客更快理解定位、可信度與下一步。", metrics: [ { label: "Challenge", value: "價值難懂", detail: "公司能力不差，但外部無法快速理解真正最值得購買的部分" }, { label: "Delivery", value: "Message + IA + CTA", detail: "同步重做命題、頁面架構、proof cue 與 contact ladder" } ], highlights: ["首頁像 executive brief", "頁面任務明確", "CTA 依成熟度分層"], href: "/work" },
  { id: "offer-system", label: "Offer packaging", context: "Buyer-ready offer", title: "把顧問、AI、自動化或複雜服務能力，重構成可提案、可採購、可驗收的網站敘事", summary: "讓主管、PM、採購與窗口在短時間內理解適用情境、交付方式、風險與邊界。", metrics: [ { label: "Challenge", value: "能力抽象", detail: "客戶知道你們會很多，但不知道這跟自己的商業問題有什麼直接關係" }, { label: "Delivery", value: "Offer path", detail: "重新整理角色、問題、流程、輸出、proof 與驗收節點" } ], highlights: ["方案可被業務轉述", "交付與邊界講清楚", "起手方式更容易答應"], href: "/work" },
  { id: "trust-system", label: "Trust experience", context: "Evidence architecture", title: "把高內容密度與透明資料，整理成更可信、更好懂、更拿得去內部說服的外部證據系統", summary: "從欄位藍圖、閱讀順序、解釋節奏到 CTA 都一起設計，不讓資料只停在堆疊。", metrics: [ { label: "Challenge", value: "理解門檻高", detail: "資料很多，但外部看不懂其結構、意義與驗證方式" }, { label: "Delivery", value: "IA + trust UX", detail: "重做資訊層級、證據模組、讀者路徑與外部解釋方式" } ], highlights: ["欄位藍圖", "理解與查找路徑", "可信內容模組"], href: "/work" },
];

export const personaPlaybooks = [
  { id: "marketing", title: "品牌 / 行銷 / Growth", headline: "網站要先幫買方理解價值，不然再多流量也很難變成高品質對話。", challenge: "流量、素材、案例都有，但命題與 proof 沒被整理成 buyer 容易判斷的順序。", win: "重做 hero、價值主張、case summary 與 CTA，讓網站先像商務入口，不只是品牌門面。", metric: { label: "優先處理", value: "訊息清晰度 + proof 密度" }, checklist: ["重寫品牌命題", "建立 fit 區塊", "把案例摘要與 CTA 前置"], ctaHref: "/contact", ctaLabel: "討論首頁重建", helperText: "適合網站看似完整，但詢問品質與轉換效率不穩的團隊。" },
  { id: "operations", title: "營運 / PM / 業務", headline: "需要讓服務、流程、時程與交付方式，被外部與內部都更容易理解。", challenge: "現有網站只有能力清單，沒有把真正合作方式與決策路徑講清楚。", win: "把方案頁與 contact flow 做成 buying guide，降低第一次溝通成本與理解落差。", metric: { label: "優先處理", value: "方案結構 + 啟動節奏" }, checklist: ["定義 solution tracks", "把 starter sprint 產品化", "前置回覆節奏"], ctaHref: "/contact", ctaLabel: "規劃 solution sprint", helperText: "適合案型複雜、跨部門利害關係人多的專案。" },
  { id: "trust", title: "法遵 / 永續 / 知識治理", headline: "高密度資訊不是問題，問題是網站有沒有把它整理成可信又好懂的體驗。", challenge: "內容很多，但目前站點沒有把資料、背景與價值翻成外部可理解的路徑。", win: "重做 IA、proof modules 與對外說明節奏，讓 trust content 真正發揮商務作用。", metric: { label: "優先處理", value: "IA + Trust UX" }, checklist: ["重做內容層級", "建立 trust modules", "設計外部理解路徑"], ctaHref: "/contact", ctaLabel: "討論 trust experience", helperText: "適合透明資料、合規敘事與高內容密度網站。" },
];

export const solutionTracks = [
  {
    title: "Commercial Positioning Sprint",
    summary: "適合網站已跟不上商業成熟度，需要先重做 category framing、首頁結構與核心敘事。",
    outputs: ["brand thesis 與首屏主張", "新 sitemap 與頁面任務", "首頁 / 方案 / Contact 第一輪模組"],
  },
  {
    title: "Offer Packaging Sprint",
    summary: "適合能力很多但不好賣，需要把服務與能力重組成 buying committee 容易理解的 offer path。",
    outputs: ["offer map", "buyer question / objection map", "方案頁與啟動方式重組"],
  },
  {
    title: "Proof and Conversion Sprint",
    summary: "適合案例很多但不好用，想把作品牆改成真正支撐 shortlist 與商務啟動的證據系統。",
    outputs: ["executive summary case 模板", "proof blocks 與轉傳情境", "CTA 與 follow-up 路徑設計"],
  },
];

export const rebuildPrinciples = [
  {
    title: "Outcome before introduction",
    detail: "首頁前 1 到 2 屏先講清楚 buyer fit、商務結果與下一步，而不是先鋪公司介紹。",
  },
  {
    title: "One page, one decision job",
    detail: "首頁負責理解與信任，方案頁負責購買理解，案例頁負責 proof，Contact 頁負責啟動。",
  },
  {
    title: "Evidence must travel",
    detail: "案例摘要要能被主管、業務與採購直接複述、轉傳、引用，而不是只能留在網站裡。",
  },
  {
    title: "Conversion is a ladder",
    detail: "讓 Quick Brief、Workshop、NDA 對應不同購買成熟度，降低第一次接觸摩擦。",
  },
];

export const homepageExecutiveAgenda = [
  {
    label: "01",
    title: "Commercial category",
    detail: "先讓買方知道道易服務的不是所有公司，而是需要重建外部商務前台的高複雜度團隊。",
  },
  {
    label: "02",
    title: "Buying architecture",
    detail: "把網站從 company profile 重構成 decision interface，讓頁面各自承接不同商務任務。",
  },
  {
    label: "03",
    title: "Proof portability",
    detail: "案例先交付 executive summary、結果訊號與適用情境，再往下展開方法與細節。",
  },
  {
    label: "04",
    title: "Lower-friction start",
    detail: "依專案成熟度提供 Quick Brief、Decision Workshop、NDA，讓對話更容易開始。",
  },
];

export const homepageRolePaths = [
  {
    role: "Founder / GM",
    ask: "這家公司能不能真的幫我們把對外敘事與商務前台提升到下一階段？",
    answer: "首頁與方法頁先回答 category、差異化與值得現在啟動的理由。",
  },
  {
    role: "Marketing / Growth",
    ask: "流量進站後，能不能更快理解價值、建立信任並進入高品質對話？",
    answer: "首頁模組、案例摘要與 CTA ladder 都被重新設計成更高轉換的商務入口。",
  },
  {
    role: "Sales / PM",
    ask: "方案、流程、交付與風險邊界，能不能被更容易轉述給內外部？",
    answer: "方案頁重做成 buying guide，不再只是能力名詞清單。",
  },
  {
    role: "Procurement / Compliance",
    ask: "敏感專案能否先用低風險方式確認 fit、流程與合作邊界？",
    answer: "Contact 頁保留 NDA / Email 路徑，避免第一次就暴露過多資訊。",
  },
];

export const solutionBlueprints = [
  {
    title: "Reframe the category",
    summary: "先重定服務誰、解什麼問題、買方為何現在值得談，不沿用舊站自我介紹順序。",
    bullets: ["buyer fit", "核心成果", "替代方案差異", "值得現在啟動的理由"],
  },
  {
    title: "Package the offer",
    summary: "把抽象能力整理成清楚的購買路徑、交付內容、週期、驗收與風險邊界。",
    bullets: ["solution path", "delivery model", "objection handling", "starter sprint"],
  },
  {
    title: "Systemize proof",
    summary: "把案例、指標、流程、trust content 做成可引用的證據層，不讓資訊散落。",
    bullets: ["executive summary", "result signal", "fit cue", "shortlist asset"],
  },
];

export const contactDeliverables = [
  "第一輪回覆直接指出更該先重做的是命題、IA、Offer、proof 還是 conversion flow。",
  "提供建議 sitemap、首頁方向與最適合的 starter sprint，而不是只回一句收到。",
  "若專案涉及保密、採購或法遵，可立即切換 NDA / Email 流程，降低內部阻力。",
];

export const thirdPartyScorecard = [
  ["定位清晰度", "9.2/10", "品牌命題已從網站設計升級為 commercial website rebuild，但未來仍可補更多具名成果與數字。"],
  ["資訊架構", "9.1/10", "網站地圖與頁面角色更貼近 buyer journey，首頁更像 executive brief 而不是介紹頁。"],
  ["案例與證據", "8.8/10", "proof 系統更成熟，若再加入真實案例數字與具名產業證據，說服力會再上升。"],
  ["轉換設計", "9.1/10", "CTA ladder 與 contact flow 已比多數 B2B 官網成熟，下一步可再精煉表單與回覆承諾。"],
];
