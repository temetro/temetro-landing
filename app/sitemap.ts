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
    ...featureSlugs.map((slug) => ({
      url: `${siteUrl}/features/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
