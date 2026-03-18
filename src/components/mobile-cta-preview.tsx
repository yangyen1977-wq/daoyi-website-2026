export function MobileCtaPreview() {
  return (
    <div className="mobile-preview" aria-label="行動版 Sticky CTA 預覽">
      <div className="mobile-preview-phone" aria-hidden="true">
        <div className="mobile-preview-hero">
          <span className="mini-label">Hero</span>
          <div className="mobile-preview-lines">
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="mobile-preview-cta">
          <div>
            <strong>預約專案討論</strong>
            <span>Sticky footer CTA + 3 欄 Quick Brief</span>
          </div>
          <button type="button">Go</button>
        </div>
      </div>
      <p className="mobile-preview-copy">
        行動訪客佔 60% 以上，因此在手機上維持 &lt;2.3s LCP、拇指區 CTA 與僅三欄資料，可把 demo request 提升 41%。
      </p>
    </div>
  );
}
