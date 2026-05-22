import Image from "next/image";
import Link from "next/link";

type CaseStudyCardProps = {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  deliverables: string[];
  extension: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

export function CaseStudyCard({
  id,
  title,
  category,
  summary,
  problem,
  solution,
  deliverables,
  extension,
  tags,
  ctaLabel,
  ctaHref,
  image,
}: CaseStudyCardProps) {
  return (
    <article id={id} className="card evidence-matrix-card work-case-card">
      {image ? (
        <figure className="case-study-image">
          <Image src={image.src} alt={image.alt} width={1200} height={675} />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ) : null}
      <span className="mini-label accent">{category}</span>
      <h3>{title}</h3>
      <p className="work-case-summary">{summary}</p>
      <div className="work-case-field">
        <strong>資料問題</strong>
        <p>{problem}</p>
      </div>
      <div className="work-case-field">
        <strong>道易做了什麼</strong>
        <p>{solution}</p>
      </div>
      <div className="work-case-field">
        <strong>交付成果</strong>
        <ul className="bullet-list compact">
          {deliverables.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="work-case-field">
        <strong>適合延伸</strong>
        <p>{extension}</p>
      </div>
      <div className="hero-tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <Link href={ctaHref} className="inline-button">{ctaLabel}</Link>
    </article>
  );
}
