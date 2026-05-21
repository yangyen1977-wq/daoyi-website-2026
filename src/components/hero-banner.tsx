import Image from "next/image";
import { publicAssetPath } from "@/lib/site";

type HeroBannerProps = {
  metrics: { value: string; label: string }[];
};

const proofCards = [
  {
    label: "DPP",
    title: "產品資料可查詢",
    detail: "材料、製程、回收與驗證狀態集中到同一個產品身分。",
  },
  {
    label: "Audit",
    title: "稽核證據可追溯",
    detail: "Hash、Merkle、時間證明與查核紀錄支撐第三方驗證。",
  },
  {
    label: "Ontology",
    title: "知識關係可維護",
    detail: "人物、事件、文本與系統資料能被建模、搜尋與重用。",
  },
];

const trustNodes = ["Data", "Model", "Hash", "Proof", "Query"];

export function HeroBanner({ metrics }: HeroBannerProps) {
  return (
    <aside className="hero-banner" aria-label="道易科技首頁主視覺">
      <div className="hero-banner-backdrop" aria-hidden="true" />
      <div className="hero-banner-head">
        <span className="hero-banner-logo">
          <Image
            src={publicAssetPath("/assets/daoyi-logo.png")}
            alt="DaoYi Technology logo"
            width={52}
            height={52}
            priority
          />
        </span>
        <div>
          <span className="mini-label accent">Trust Data Systems</span>
          <strong>DaoYi Technology</strong>
        </div>
      </div>

      <div className="hero-banner-network" aria-label="資料信任鏈視覺流程">
        <div className="hero-banner-core">
          <span>Verified</span>
          <strong>Data Chain</strong>
        </div>
        {trustNodes.map((node, index) => (
          <div key={node} className={`hero-banner-node node-${index + 1}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{node}</strong>
          </div>
        ))}
      </div>

      <div className="hero-banner-proof-grid">
        {proofCards.map((card) => (
          <article key={card.label} className="hero-banner-proof-card">
            <span>{card.label}</span>
            <strong>{card.title}</strong>
            <p>{card.detail}</p>
          </article>
        ))}
      </div>

      <div className="hero-banner-metrics">
        {metrics.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
