import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
