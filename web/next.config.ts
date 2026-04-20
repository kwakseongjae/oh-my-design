import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["shadcn", "tw-animate-css"],
  trailingSlash: false,
  // Canonicalize host: redirect www → apex.
  //
  // The app's metadata declares https://oh-my-design.kr as canonical (see
  // src/app/layout.tsx, sitemap.ts, robots.ts, JSON-LD). If Vercel serves
  // both the apex and www.oh-my-design.kr, Google crawls both and reports
  // "Alternate page with proper canonical tag" against the www variant —
  // technically not an error (the canonical tag is respected), but it
  // pollutes Search Console, splits inbound link equity, and lets the www
  // URL leak into shares. A 308 redirect at the edge is the clean fix:
  // Google drops www from its crawl budget entirely, and any external link
  // to www still reaches the right page.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.oh-my-design.kr" }],
        destination: "https://oh-my-design.kr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
