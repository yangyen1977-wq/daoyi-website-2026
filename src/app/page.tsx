import styles from "./page.module.css";

const solutions = [
  {
    title: "AI 智慧應用",
    description:
      "把語意分析、影像辨識與資料處理能力，導入實際工作流程與產業場景，讓 AI 不只存在簡報裡。",
    items: ["語意分析", "OCR / NLP", "電腦視覺 / YOLO", "AI 落地整合"],
  },
  {
    title: "知識平台與數位人文",
    description:
      "協助機構打造可查詢、可整理、可視覺化、可持續累積的知識型平台，讓內容真正被理解與被使用。",
    items: ["典藏資料平台", "關聯資料 / 知識庫", "多語內容平台", "研究支援工具"],
  },
  {
    title: "數位產品護照與永續應用",
    description:
      "以 DPP、IoT 與資料透明化能力，協助企業面對循環經濟、產品可追溯與法規合規需求。",
    items: ["DPP 規劃建置", "IoT Box 整合", "QR / Traceability", "ESPR / 合規資料管理"],
  },
];

const cases = [
  {
    category: "數位人文 / 研究平台",
    title: "跨文本與書目資料整合平台",
    description:
      "整合文本、書目、譯者與出版資訊，打造可查詢、可延伸、可視覺化的研究與推廣平台。",
  },
  {
    category: "AI 應用 / 影像辨識",
    title: "太陽能板回收辨識流程",
    description:
      "將 YOLO 與設備流程整合，提升太陽能板回收辨識效率與作業準確性。",
  },
  {
    category: "永續應用 / EasyDPP",
    title: "透明、合規、可追溯的產品資料體系",
    description:
      "透過數位產品護照與 IoT 整合，協助企業建立符合永續趨勢的產品資料治理基礎。",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "釐清需求、資料來源、使用情境與真正的問題。",
  },
  {
    step: "02",
    title: "Design",
    description: "規劃資訊架構、資料流程、使用者路徑與系統藍圖。",
  },
  {
    step: "03",
    title: "Build",
    description: "完成網站、平台、AI 模組或整合系統的實作與驗證。",
  },
  {
    step: "04",
    title: "Operate",
    description: "協助內容維運、系統擴充、持續優化與長期成長。",
  },
];

const insights = [
  "2027 ESPR 上路前，企業為什麼要提早佈局 DPP？",
  "知識平台不只是資料庫：如何讓內容被找到、被理解、被使用",
  "AI 語意分析如何真正進入工作流程",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>道易科技 DaoYi Technology</div>
        <nav className={styles.nav}>
          <a href="#solutions">解決方案</a>
          <a href="#cases">案例實績</a>
          <a href="#about">關於道易</a>
          <a href="#contact">聯絡我們</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>AI / Data / Knowledge Platforms / DPP</span>
            <h1>把複雜資料與場景需求，轉化為真正可落地的 AI 與數位解決方案。</h1>
            <p>
              我們結合 AI、資料工程、知識平台與永續應用能力，協助學術機構、企業與組織打造能真正運作、能持續成長的數位系統與服務。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryBtn} href="#solutions">
                了解解決方案
              </a>
              <a className={styles.secondaryBtn} href="#contact">
                預約討論專案
              </a>
            </div>
            <div className={styles.heroTags}>
              <span>AI 智慧應用</span>
              <span>知識平台建置</span>
              <span>數位產品護照 DPP</span>
              <span>客製化網站與系統整合</span>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.signalCard}>
              <strong>Brand Direction / 2026</strong>
              <p>從「做很多技術」升級成「把 AI 與資料工程落地成可驗證成果」。</p>
            </div>
            <div className={styles.metricGrid}>
              <div>
                <span>核心能力</span>
                <strong>AI / Data / Platform</strong>
              </div>
              <div>
                <span>品牌背景</span>
                <strong>數位人文 → 產業應用</strong>
              </div>
              <div>
                <span>代表主軸</span>
                <strong>DPP / YOLO / 知識平台</strong>
              </div>
              <div>
                <span>網站目標</span>
                <strong>品牌 × 轉換 × SEO</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>品牌摘要</span>
            <h2>不只是做網站或導入 AI，而是把技術落地成可運作的成果。</h2>
          </div>
          <div className={styles.aboutBox}>
            <p>
              道易科技的起點來自數位人文與知識資料處理，長期專注於語意分析、資料整合、平台建置與跨領域系統設計。從研究型資料平台到產業 AI，再到數位產品護照與循環經濟應用，我們擅長把複雜需求轉化成清楚、可維運、可擴充的數位方案。
            </p>
            <ul>
              <li>從知識結構出發，而不只是堆疊功能</li>
              <li>兼具研究型資料脈絡理解與商業落地能力</li>
              <li>重視創新、效率、可持續發展與長期維運</li>
            </ul>
          </div>
        </section>

        <section id="solutions" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>解決方案</span>
            <h2>我們聚焦三種高價值解決方案</h2>
          </div>
          <div className={styles.cardGrid}>
            {solutions.map((solution) => (
              <article key={solution.title} className={styles.card}>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>
                  {solution.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="cases" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>案例實績</span>
            <h2>從研究平台到產業應用，都是可被驗證的成果</h2>
          </div>
          <div className={styles.caseGrid}>
            {cases.map((item) => (
              <article key={item.title} className={styles.caseCard}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>方法論</span>
            <h2>我們怎麼把想法變成可運作的系統</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <article key={step.step} className={styles.processCard}>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>信任訊號</span>
            <h2>跨學術、文化與產業場景的實作經驗</h2>
          </div>
          <div className={styles.trustBox}>
            <div>
              <strong>多場景整合能力</strong>
              <p>涵蓋學術、文化、教育、永續與產業應用，能理解複雜資料脈絡，也能交付可使用成果。</p>
            </div>
            <div>
              <strong>系統化交付</strong>
              <p>具備 AI、資料、網站與系統整合能力，能從需求釐清一路走到建置與維運。</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>洞察內容</span>
            <h2>從實作出發的技術與產業觀點</h2>
          </div>
          <div className={styles.insightList}>
            {insights.map((insight) => (
              <article key={insight} className={styles.insightItem}>
                <h3>{insight}</h3>
                <p>未來可延伸為 SEO 與專業形象兼具的內容欄位。</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.ctaSection}>
          <div>
            <span className={styles.eyebrow}>Let’s build it right</span>
            <h2>如果你正在規劃 AI、知識平台、DPP 或新的品牌官網，道易可以一起把它做對。</h2>
            <p>
              從需求釐清、架構規劃到系統落地，我們提供能長期運作的數位解決方案。
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a className={styles.primaryBtn} href="mailto:hello@daoyidh.com">
              聯絡我們
            </a>
            <a className={styles.secondaryBtn} href="https://daoyidh.com" target="_blank" rel="noreferrer">
              查看現有官網
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
