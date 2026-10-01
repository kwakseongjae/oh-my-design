import type { MetadataRoute } from "next";
import { SITE_ORIGIN as siteUrl } from "@/lib/site";

/**
 * robots.txt — explicit allow for major crawlers including AI ones.
 *
 * Why list AI crawlers explicitly: the wildcard rule already permits them,
 * but explicit User-agent entries (a) signal intent unambiguously to bots
 * that check for their own UA first, and (b) make it auditable that we
 * *want* LLM-powered search engines to index the docs.
 *
 * Every named group carries the same disallows as `*`. Under RFC 9309 a
 * crawler obeys only the most specific group that names it, so a named group
 * with just `Allow: /` silently lifts the wildcard's disallows for that bot —
 * which is how AI crawlers were reaching /api/ and the /reference/ duplicates
 * until 2026-10-01.
 *
 * /reference/ is no longer disallowed: since 2026-10-01 (decision D4) it is a
 * 308 to /design-systems/<id>, and a crawler only sees a redirect on a URL it
 * is allowed to fetch.
 */
const DISALLOW = ["/api/", "/qa-references"];

const AI_CRAWLERS = [
  // Anthropic Claude (live fetch + training)
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  // OpenAI (training + ChatGPT browsing)
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Perplexity (live answer engine)
  "PerplexityBot",
  "Perplexity-User",
  // Google AI (Bard / Gemini training — separate from Googlebot)
  "Google-Extended",
  // Apple Intelligence
  "Applebot-Extended",
  // Common Crawl (CC-MAIN — basis of many LLM datasets)
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default — every crawler. Keep API and admin-only paths out.
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
