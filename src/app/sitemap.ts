import type { MetadataRoute } from "next";

const BASE = "https://digitalsourcery.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/stack`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/intelligence`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/foundation`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
