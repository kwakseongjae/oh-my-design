import type { NextConfig } from "next";

// Mirrors src/lib/site.ts. next.config is loaded outside the tsconfig path
// aliases, so it cannot import that module; __tests__/blog-redirects.test.ts
// asserts the two stay in agreement.
const BLOG_ORIGIN = "https://blog.oh-my-design.kr";
const BLOG_ON_SUBDOMAIN = process.env.NEXT_PUBLIC_BLOG_SUBDOMAIN === "1";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Hide the dev-only on-screen route indicator (the floating "N" badge in
  // bottom-left). Errors still surface normally; this only removes the
  // routing-status pill so it doesn't sit on top of our bottom-right
  // landing-toggle while comparing v1 ↔ v2.
  devIndicators: false,
  // Raw DESIGN.md twins — /<id>/design.md serves clean markdown for agents/LLMs
  // (mirrors vercel.com/design.md). App Router can't express the `design.md`
  // file as a route under a dynamic [id] cleanly, so the handler lives at
  // /r/[id] and this rewrite provides the pretty URL. A plain array defaults to
  // afterFiles, which runs after static files but before dynamic page routes,
  // so `/<id>/design.md` never falls through to a page. `:id` is one segment, so
  // dotted ids still resolve: /linear.app/design.md → /r/linear.app. The literal
  // `/design.md` suffix means top-level static routes (/docs, /faq, …) are never
  // shadowed (an unknown id 404s in the handler).
  async rewrites() {
    return [{ source: "/:id/design.md", destination: "/r/:id" }];
  },
  // Permanent redirect from the previous .md shape so already-published links
  // (llms.txt, npm launch copy, agent caches) keep resolving. Redirects run
  // before rewrites: /design-systems/foo.md → 301 → /foo/design.md → /r/foo.
  async redirects() {
    return [
      {
        source: "/design-systems/:id.md",
        destination: "/:id/design.md",
        permanent: true,
      },
      // Curation quiz + result pages removed (2026-06-23) — the share/viral
      // hypothesis was falsified (0 shares/28d). 301 the indexed URLs to the
      // builder / directory so no link equity is lost.
      { source: "/curation", destination: "/builder", permanent: true },
      { source: "/result/:typeCode", destination: "/design-systems", permanent: true },
      // The blog moved to its own host. Gated on the same flag as the canonical
      // URLs, so this stays off until the domain resolves — turning it on
      // before then would 301 every reader into a host that does not answer.
      ...(BLOG_ON_SUBDOMAIN
        ? [
            { source: "/blog", destination: BLOG_ORIGIN, permanent: true },
            { source: "/blog/:path*", destination: `${BLOG_ORIGIN}/:path*`, permanent: true },
          ]
        : []),
    ];
  },
  // NOTE: the previous commit (4ab523d) added a `www → apex` redirect here
  // to consolidate Google Search Console reports. In production that caused
  // ERR_TOO_MANY_REDIRECTS because Vercel's Domains already enforces a
  // canonical-host redirect at the edge (apex ↔ www) — the two rules chase
  // each other. Canonicalization must be owned by a single layer; removing
  // the app-level rule hands it back to Vercel. The GSC alert about the
  // non-canonical host is the cost, and it's recoverable via the Vercel
  // Domains dashboard (set the intended primary + mark the other as redirect).
};

export default nextConfig;
