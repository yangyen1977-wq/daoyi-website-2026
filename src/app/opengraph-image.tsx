import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} | 數據信任鏈、DPP、ESG 稽核與 AI-Ontology 知識平台`;
export const dynamic = "force-static";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1f2524",
          color: "#f7f5ef",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ fontSize: 34, fontWeight: 700 }}>道易科技 DaoYi Technology</div>
            <div style={{ color: "#d8c6aa", fontSize: 24 }}>Data Trust Chain / DPP / ESG Audit</div>
          </div>
          <div
            style={{
              border: "1px solid #9fb5ae",
              borderRadius: "999px",
              color: "#f0d9b5",
              fontSize: 22,
              padding: "14px 24px",
            }}
          >
            Verified Data Platform
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "940px" }}>
          <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.08 }}>
            讓資料成為可追溯、可稽核、可驗證的信任證據。
          </div>
          <div style={{ color: "#d8ded9", fontSize: 30, lineHeight: 1.45 }}>
            道易科技協助企業、政府與研究機構建立數據信任鏈、DPP 數位產品護照、ESG 高效稽核與 AI-Ontology 知識平台。
          </div>
        </div>

        <div style={{ display: "flex", gap: "18px", color: "#1f2524", fontSize: 22, fontWeight: 700 }}>
          {["Ontology", "Merkle Proof", "IPFS", "TSA", "AIoT"].map((item) => (
            <div key={item} style={{ background: "#f0d9b5", borderRadius: "999px", padding: "12px 18px" }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
