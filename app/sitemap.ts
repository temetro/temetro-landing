import type { MetadataRoute } from "next";

import { featureSlugs } from "@/components/landing/feature-data";

const siteUrl = "https://www.temetro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/app`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/story`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...featureSlugs.map((slug) => ({
      url: `${siteUrl}/features/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
