import type { MetadataRoute } from "next";

const siteUrl = "https://oh-my-design.kr";

/**
 * robots.txt — explicit allow for major crawlers including AI ones.
 *
 * Why list AI crawlers explicitly: the wildcard rule already permits them,
 * but explicit User-agent entries (a) signal intent unambiguously to bots
 * that check for their own UA first, and (b) make it auditable that we
 * *want* LLM-powered search engines to index the docs.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default — every crawler. Keep API, admin-only paths, and the
      // legacy /reference/* preview route (canonicalized to /design-systems/*) out.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/qa-references", "/reference/"],
      },
      // Anthropic Claude (live fetch + training)
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // OpenAI (training + ChatGPT browsing)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Perplexity (live answer engine)
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // Google AI (Bard / Gemini training — separate from Googlebot)
      { userAgent: "Google-Extended", allow: "/" },
      // Apple Intelligence
      { userAgent: "Applebot-Extended", allow: "/" },
      // Common Crawl (CC-MAIN — basis of many LLM datasets)
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
