import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const socialPreviewImage = {
  url: `${siteConfig.url}/assets/daoyi-og-preview.png`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} social preview`,
};

export function absoluteUrl(path = "") {
  const normalizedPath = path === "/" ? "" : path;
  return `${siteConfig.url}${normalizedPath}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "zh_TW",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [socialPreviewImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialPreviewImage.url],
    },
  };
}
