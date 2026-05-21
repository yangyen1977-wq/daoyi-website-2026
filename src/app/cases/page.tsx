import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "案例實績｜DaoYi Technology",
  description: "案例實績頁已整併到 /work，這個頁面會自動導向新版案例頁。",
  alternates: { canonical: absoluteUrl("/work") },
  robots: { index: false, follow: true },
};

export default function CasesPage() {
  const workUrl = absoluteUrl("/work/");

  return (
    <main id="main-content" className="redirect-page">
      <meta httpEquiv="refresh" content={`0; url=${workUrl}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(workUrl)});`,
        }}
      />
      <section className="subpage-hero">
        <div className="shell narrow">
          <span className="section-eyebrow">Redirect</span>
          <h1>案例實績頁已移到 Work。</h1>
          <p>如果瀏覽器沒有自動導向，請前往新版案例頁。</p>
          <div className="section-actions">
            <Link href="/work" className="button-primary button-large">
              前往案例實績
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
