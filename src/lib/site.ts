export const siteConfig = {
  name: "道易科技 DaoYi Technology",
  shortName: "DaoYi Technology",
  description:
    "道易科技專注替 B2B、科技、製造、AI 與高知識密度團隊，從零重建更成熟的 revenue website system。不是修舊站，而是重做 category framing、offer packaging、proof architecture、page choreography 與 conversion path，讓官網真的能支撐 shortlist、提案、採購與成交前進。",
  url: "https://yangyen1977-wq.github.io/daoyi-website-2026",
  email: "hello@daoyidh.com",
  phone: "+886-6-000-0000",
  location: "Tainan / Taipei / Remote",
  heroTitle: "把官網重建成 buying committee 看得懂、內部拿得去賣、商務對話接得上的 revenue website system.",
  heroDescription:
    "2026 版不是延續舊站優化思維，而是直接重做 category、訊息、頁面角色、證據系統與啟動節奏，讓網站像成熟商用前台，而不是資訊倉庫。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "買方情境" },
  { href: "/solutions", label: "重建方案" },
  { href: "/work", label: "證據系統" },
  { href: "/contact", label: "啟動專案" },
];

export const headerReassuranceSignals = [
  "用重建，不用舊站修補思維",
  "品牌、IA、offer、proof、CTA 一起重做",
  "Quick Brief / Workshop / NDA 三層入口",
];

export const solutions = [
  {
    title: "Revenue Website Rebuild",
    description: "把首頁、導覽、核心內頁與 CTA choreography 重做成真正支撐 buyer fit、shortlisting 與商務前進的網站系統。",
  },
  {
    title: "Offer Packaging System",
    description: "把複雜的 AI、平台、製造、顧問或資料能力，重組成 buying committee 看得懂、業務說得清、採購接得住的購買語言。",
  },
  {
    title: "Evidence and Trust Architecture",
    description: "把案例、方法、驗證、流程與內容資產整理成 shortlist-ready 的證據系統，不再只是漂亮展示。",
  },
];

export const contactChannels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { label: "Location", value: siteConfig.location, href: siteConfig.url },
];

export const quickBriefAssistPoints = [
  "不是只回覆收到，而是直接回一版 category 切口、首頁方向與建議 sprint",
  "會先指出卡點主要在 positioning、offer、proof 還是 conversion friction",
  "若涉及敏感客戶、採購或法遵，可直接切換 NDA / Email 路徑",
];

export const stats = [
  { value: "5 秒", label: "Buyer clarity" },
  { value: "4 層", label: "Decision stack" },
  { value: "3 種", label: "Start paths" },
  { value: "Shortlist-ready", label: "Proof system" },
];

export const heroClients = [
  { name: "B2B SaaS / 平台型公司", context: "需要把產品價值、導入方式、整合流程與 enterprise 信任訊號講成熟。" },
  { name: "製造 / 工業 / 出口品牌", context: "需要把技術、驗證、產能、供應鏈與國際合作能力整理成買方易懂的敘事。" },
  { name: "AI / 顧問 / 自動化團隊", context: "能力很多，但若沒有 offer packaging，外部很難快速理解你到底賣什麼。" },
  { name: "研究 / 永續 / 知識平台", context: "資訊量高不是問題，問題是有沒有被整理成可信、可查找、可引用的體驗。" },
];

export const heroProofs = [
  { label: "Category", value: "Outcome before intro", description: "先講你幫誰創造什麼商業前進，不先掉進公司自介。" },
  { label: "UX logic", value: "One page, one decision", description: "每一頁只負責一種判斷，不讓資訊互相稀釋。" },
  { label: "Conversion", value: "Friction-shaped starts", description: "不同專案成熟度，給不同進入方式與資訊負擔。" },
];

export const heroQuickSignals = [
  { label: "適合客群", value: "B2B / 科技 / 製造 / AI / 高知識密度團隊" },
  { label: "重建範圍", value: "Category、offer、proof、頁面、CTA 系統" },
  { label: "啟動方式", value: "Quick Brief / Workshop / NDA" },
];

export const heroFitSignals = [
  "你們商業成熟度早就變了，但網站還停在舊版公司介紹。",
  "能力很多，陌生買方卻仍看不懂你們到底最擅長解什麼高價值問題。",
  "案例明明能打，卻還不能被主管、業務或採購直接拿去轉傳。",
  "真正需要的不是再修一版 hero，而是重新設計 buying journey。",
];

export const heroContactLadder = [
  { label: "Path 01", title: "Quick Brief", detail: "適合已知道方向，想先拿到 category 切口、頁面優先序與建議 sprint。", cta: "3 分鐘開始", href: "/#quick-brief" },
  { label: "Path 02", title: "Decision Workshop", detail: "適合已有一定共識，需要一起釐清 buyer、proof gap 與重建順序。", cta: "看工作坊", href: "/contact" },
  { label: "Path 03", title: "Email / NDA", detail: "適合涉及保密、採購或法遵，想先低風險確認 fit 與合作邊界。", cta: "先寄 Email", href: `mailto:${siteConfig.email}?subject=${encodeURIComponent("DaoYi Revenue Website Rebuild / NDA")}` },
];

export const homepageContactProof = [
  "第一次回覆就先指出最該重做的是定位、首頁、方案頁、案例系統，還是 contact friction。",
  "會直接建議先從哪個 sprint 進場，而不是先丟一串泛泛流程。",
  "敏感專案可直接切 NDA，不必在第一輪就公開全部內部資訊。",
];

export const contactFastFacts = [
  { label: "First response", value: "24h 內" },
  { label: "Decision workshop", value: "30-45 分鐘" },
  { label: "First sprint", value: "3-7 天" },
  { label: "Start modes", value: "Brief / Workshop / NDA" },
];

export const contactModes = [
  { title: "Quick Brief", detail: "已知道網站該重做，想先拿到首頁切口、頁面優先序與建議 sprint。", fit: "適合想快速確認方向與 scope 的團隊" },
  { title: "Decision Workshop", detail: "需要一起釐清 buyer、offer、proof gap、頁面任務與第一輪邊界。", fit: "適合跨部門、多角色參與的專案" },
  { title: "Email / NDA", detail: "專案較敏感，想先確認 fit、流程與合作方式，再進一步分享素材與背景。", fit: "適合法遵、採購、研發或保密需求較高的案子" },
];

export const contactChecklist = [
  "目前最大卡點是 category 不清、offer 不清、proof 不夠，還是 contact friction 太高。",
  "這次最想先重做哪一頁或哪一層，例如首頁、方案頁、案例系統或 trust content。",
  "目前是想先做短 sprint、工作坊，還是準備進入完整重建。",
];

export const homepageModules = [
  { label: "Category framing", title: "首屏先完成 buyer fit 判斷，而不是先介紹公司背景", evidence: "先讓訪客知道你幫誰、解什麼、值不值得談，再往下看細節。" },
  { label: "Offer packaging", title: "整站像 buying system，不像內容倉庫或能力清單", evidence: "首頁、方案頁、案例頁、Contact 各自負責不同的商務問題。" },
  { label: "Proof architecture", title: "案例先變成證據資產，再變成作品展示", evidence: "先給 context、shift、proof、fit，讓人能快速轉傳與判斷。" },
];

export const homepageCompactCaseEvidence = homepageModules;

export const homepageBenchmarks = [
  { source: "Stripe / Ramp 類型", title: "Outcome-first messaging", detail: "首頁前段優先回答商業結果、適合對象、可信規模與下一步。", application: "道易首頁先處理 buyer fit、決策價值與低摩擦入口，再補公司介紹。" },
  { source: "Linear / Vercel 類型", title: "Dense but scannable", detail: "高密度資訊可以成立，前提是模組任務清楚、層級穩定、掃讀節奏順。", application: "把複雜能力拆成 buying question blocks，不再平均分散。" },
  { source: "高品質設計公司站", title: "Proof-led storytelling", detail: "案例先講情境、價值與可引用訊號，再談方法與畫面。", application: "道易案例先做 shortlist-ready 摘要，再延伸完整專案內容。" },
];

export const homepageDecisionLayers = [
  { label: "Layer 01", title: "Category clarity", detail: "五秒內說清楚替誰解哪一種高價值問題。" },
  { label: "Layer 02", title: "Offer choreography", detail: "讓首頁、方案頁、案例頁、Contact 各自負責一種決策工作。" },
  { label: "Layer 03", title: "Proof portability", detail: "證據先支援轉傳、提案與採購，再支援欣賞。" },
  { label: "Layer 04", title: "Conversion ladder", detail: "依成熟度提供不同 friction 的起手方式。" },
];

export const homepageSitemap = [
  ["首頁", "先讓買方完成 fit 判斷、理解 category 並知道下一步怎麼開始。"],
  ["買方情境", "讓不同產業與角色判斷自己現在最該重建哪一層。"],
  ["重建方案", "把 sprint、交付形式、風險與進場方式包成清楚 buying guide。"],
  ["證據系統", "案例先當 evidence asset，再延伸成完整專案敘事。"],
  ["啟動專案", "把 Quick Brief、Workshop、NDA 做成低摩擦決策入口。"],
];

export const heroActionSignals = [
  { step: "01", metric: "3 分鐘", title: "送出 Quick Brief", detail: "留下公司現況、卡點、最想重做的頁面與商務目標。" },
  { step: "02", metric: "24h", title: "收到重建方向", detail: "先回一版 category 切口、首頁方向、proof gap 與建議 sprint。" },
  { step: "03", metric: "30-45 分鐘", title: "對焦決策問題", detail: "一起確認 buyer、offer、案例素材、風險與合作邊界。" },
  { step: "04", metric: "Sprint-ready", title: "開始第一輪重建", detail: "從首頁、方案頁、案例系統或 trust UX 先落出可討論版本。" },
];

export const heroPreviews = [
  { id: "clarity", label: "Stripe / Ramp 類型", metric: "Commercial clarity", summary: "高表現 B2B 首頁幾乎都先把 outcome、category、proof 與 CTA 雙軌放在前段。", checklist: ["主張先講結果", "適合對象清楚", "proof 先於自介", "CTA 至少雙軌"] },
  { id: "structure", label: "Linear / Vercel 類型", metric: "Structured UX", summary: "資訊密度可以高，但必須層級穩定、模組任務清楚、掃讀成本低。", checklist: ["模組任務清楚", "掃讀效率高", "密度高但不亂", "頁面角色分明"] },
  { id: "proof", label: "設計公司強站類型", metric: "Proof-led story", summary: "案例不是作品牆，而是商業證據。先講情境、結果與適用對象，再補方法。", checklist: ["情境先行", "結果可引用", "適用對象清楚", "CTA 接得上"] },
];

export const heroClarityChecklist = [
  { label: "Who", answer: "高複雜度 B2B、科技、製造、AI 與知識型團隊", detail: "適合需要支撐業務、採購、提案與信任建立的網站重建專案。", metric: "Buyer fit" },
  { label: "What", answer: "重建 revenue website system 與 proof architecture", detail: "不是換視覺而已，而是重做 category、offer、頁面角色、案例證據與 CTA。", metric: "System first" },
  { label: "How", answer: "從 Quick Brief 或 strategy workshop 啟動第一個 sprint", detail: "讓第一次接洽就能落到具體頁面與決策問題，不空談。", metric: "Low friction" },
];

export const caseOverviewStats = [
  { label: "Case format", value: "Context → Shift → Proof → Fit", detail: "案例先回答商業情境、改變了什麼、證據訊號與適用對象。" },
  { label: "Decision use", value: "Shortlist-ready", detail: "能被業務、主管與 buying committee 快速轉傳。" },
  { label: "Proof style", value: "摘要先行", detail: "先講可引用訊號，再延伸到更完整內容與畫面。" },
];

export const executiveScorecards = [
  { title: "Value proposition clarity", detail: "買方能否在幾秒內理解你服務誰、解什麼問題、為何值得談。" },
  { title: "Decision-oriented IA", detail: "首頁、重建方案、證據系統、Contact 是否各司其職，而不是每頁都講一點。" },
  { title: "Proof portability", detail: "案例是否能被主管、業務與採購直接引用與轉傳。" },
  { title: "Conversion readiness", detail: "是否提供不同阻力等級的啟動方式，降低第一次接觸的不確定。" },
];

export const caseSnapshots = [
  { id: "website-rebuild", label: "Front door rebuild", context: "Decision architecture", title: "把首頁從公司自述，重構成 buying committee 能快速 shortlist 的商務決策層", summary: "成果不只是頁面更成熟，而是更快對齊 buyer、風險、價值與下一步。", metrics: [ { label: "Challenge", value: "主張模糊", detail: "有能力也有內容，但高意圖流量無法快速判斷 fit 與可信度" }, { label: "Delivery", value: "Message + IA + CTA", detail: "同步重做 category framing、頁面架構、案例格式與啟動節奏" } ], highlights: ["首頁像 decision deck", "內頁角色重新分工", "CTA 依成熟度分層"], href: "/work" },
  { id: "offer-framing", label: "Offer packaging", context: "Commercial packaging", title: "把 AI、顧問或複雜服務能力，重構成可提案、可採購、可驗收的網站敘事", summary: "讓主管、PM、採購與合作窗口在短時間內看懂適用場景、範圍、流程與風險邊界。", metrics: [ { label: "Challenge", value: "能力抽象", detail: "客戶知道你們能做很多，但不知道這跟自己的業務有什麼直接價值" }, { label: "Delivery", value: "Buyer-ready framing", detail: "重新整理角色、問題、流程、輸出、proof 與驗收節點" } ], highlights: ["角色與流程講清楚", "方案可被業務轉述", "導入步驟與風險前置"], href: "/work" },
  { id: "trust-evidence", label: "Evidence architecture", context: "Trust experience", title: "把高內容密度與透明資料，做成可信、好懂、拿得去說服的外部證據系統", summary: "從欄位、查找路徑、解釋節奏到 CTA 都一起設計，不讓資料只停在堆疊。", metrics: [ { label: "Challenge", value: "理解門檻高", detail: "資料很多，但外部看不懂結構、意義與可驗證性" }, { label: "Delivery", value: "IA + trust UX", detail: "整理欄位藍圖、理解路徑、證據模組與對外解釋方式" } ], highlights: ["欄位藍圖", "理解與查找路徑", "可信內容模組"], href: "/work" },
];

export const personaPlaybooks = [
  { id: "marketing", title: "品牌 / 行銷 / Growth", headline: "網站要先幫買方理解價值，不然再多流量也很難變成高品質對話。", challenge: "流量、素材、案例都有，但主張與 proof 沒被整理成 buyer 容易判斷的順序。", win: "重做 hero、價值主張、case summary 與 CTA，讓網站先像商務入口，不只是品牌門面。", metric: { label: "優先處理", value: "訊息清晰度 + proof 密度" }, checklist: ["重寫主張", "建立 fit 區塊", "把案例摘要與 CTA 前置"], ctaHref: "/contact", ctaLabel: "討論首頁重建", helperText: "適合網站看似完整，但詢問品質與轉換效率不穩的團隊。" },
  { id: "operations", title: "營運 / PM / 業務", headline: "需要讓服務、流程、時程與交付方式，被外部與內部都更容易理解。", challenge: "現有網站只有能力清單，沒有把真正合作方式與決策路徑講清楚。", win: "把方案頁與 contact flow 做成 buying guide，降低第一次溝通成本與理解落差。", metric: { label: "優先處理", value: "方案結構 + 啟動節奏" }, checklist: ["定義 solution tracks", "把第一輪 sprint 產品化", "前置回覆節奏"], ctaHref: "/contact", ctaLabel: "規劃 solution sprint", helperText: "適合案型複雜、跨部門利害關係人多的專案。" },
  { id: "trust", title: "永續 / 法遵 / 知識治理", headline: "高密度資訊不是問題，問題是網站有沒有把它整理成可信又好懂的體驗。", challenge: "內容很多，但目前站點沒有把資料、背景與價值翻成外部可理解的路徑。", win: "重做 IA、proof modules 與對外說明節奏，讓 trust content 真正發揮商務作用。", metric: { label: "優先處理", value: "IA + Trust UX" }, checklist: ["重做內容層級", "建立 trust modules", "設計外部理解路徑"], ctaHref: "/contact", ctaLabel: "討論 trust experience", helperText: "適合透明資料、合規敘事與高內容密度網站。" },
];

export const solutionTracks = [
  {
    title: "Category and Homepage Sprint",
    summary: "適合網站已跟不上商業成熟度，需要先重做 category framing、首頁結構與核心訊息。",
    outputs: ["category thesis 與首屏主張", "新 sitemap 與頁面任務", "首頁 / 重建方案 / Contact 第一輪模組"],
  },
  {
    title: "Offer Packaging Sprint",
    summary: "適合能力很多但不好賣，需要把服務與能力重組成 buying committee 容易理解的路線。",
    outputs: ["offer map", "buyer questions 與 objection map", "solution page 與啟動方式重組"],
  },
  {
    title: "Evidence System Sprint",
    summary: "適合案例很多但不好用，想把作品牆改成真正支撐 shortlist 的證據系統。",
    outputs: ["case summary 模板", "proof blocks 與轉傳情境", "CTA 與 follow-up 路徑設計"],
  },
];
