import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["shadcn", "tw-animate-css"],
  trailingSlash: false,
  // Hide the dev-only on-screen route indicator (the floating "N" badge in
  // bottom-left). Errors still surface normally; this only removes the
  // routing-status pill so it doesn't sit on top of our bottom-right
  // landing-toggle while comparing v1 ↔ v2.
  devIndicators: false,
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
