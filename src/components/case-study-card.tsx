import Image from "next/image";

type CaseStudyCardProps = {
  title: string;
  category: string;
  problem: string;
  solution: string;
  value: string;
  tags: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

export function CaseStudyCard({ title, category, problem, solution, value, tags, image }: CaseStudyCardProps) {
  return (
    <article className="card evidence-matrix-card">
      {image ? (
        <figure className="case-study-image">
          <Image src={image.src} alt={image.alt} width={1200} height={675} />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ) : null}
      <span className="mini-label accent">{category}</span>
      <h3>{title}</h3>
      <p><strong>問題：</strong>{problem}</p>
      <p><strong>解法：</strong>{solution}</p>
      <p><strong>價值：</strong>{value}</p>
      <div className="hero-tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </article>
  );
}
