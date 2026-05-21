import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

const lastModified = new Date("2026-05-21T00:00:00.000Z");

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/technology", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/work", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
