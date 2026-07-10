import type { MetadataRoute } from "next";

const siteUrl = "https://www.temetro.com";

// AI assistant crawlers we explicitly welcome. temetro is open source and wants to
// be discoverable and citable in AI answers, so we allow each vendor's training,
// search, and on-demand user-fetch agents (allowing only one of a vendor's bots
// still drops its citations — e.g. GPTBot without OAI-SearchBot loses ChatGPT).
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
