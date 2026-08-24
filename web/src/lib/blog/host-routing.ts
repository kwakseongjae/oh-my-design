/**
 * Host → path routing for the blog subdomain.
 *
 * blog.oh-my-design.kr is served by this same app: the request arrives on the
 * blog host with a bare path, and we map it onto the existing /blog routes
 * internally. The browser URL never changes.
 *
 * This is a pure function, separate from proxy.ts, so the whole mapping table
 * can be unit-tested without an edge runtime. proxy.ts is only the adapter.
 *
 * Mapping on the blog host:
 *
 *   /                  → rewrite  /blog
 *   /<slug>            → rewrite  /blog/<slug>
 *   /en/<slug>         → rewrite  /blog/en/<slug>      (route lands in B3)
 *   /blog, /blog/<...> → redirect /, /<...>            (one address per page)
 *   /feed.xml          → rewrite  /blog/feed.xml       (and /en/feed.xml)
 *   /sitemap.xml       → rewrite  /blog/sitemap.xml
 *   /robots.txt        → rewrite  /blog/robots.txt
 *   /_next/*, /api/*   → untouched
 *   /<anything>.<ext>  → untouched                     (public assets)
 *
 * Dotted paths pass through as assets unless they are in BLOG_OWNED_FILES —
 * that set is the whole list of files this host serves itself.
 *
 * Any other host returns null: the main site is untouched by this module.
 */

import { BLOG_HOST } from "@/lib/site";

export type BlogHostAction =
  | { type: "rewrite"; pathname: string }
  | { type: "redirect"; pathname: string };

/** Local dev alias — `blog.localhost:3000` resolves without editing /etc/hosts. */
const BLOG_HOST_DEV = "blog.localhost";

/**
 * Dotted paths the blog owns. Everything else with an extension is a static
 * asset and passes through; these have blog-specific routes behind them.
 */
const BLOG_OWNED_FILES = new Set([
  "/feed.xml",
  "/en/feed.xml",
  "/sitemap.xml",
  "/robots.txt",
]);

/** Strips the port and normalizes case; `Host` headers carry both. */
function normalizeHost(host: string): string {
  return host.trim().toLowerCase().split(":")[0];
}

export function isBlogHost(host: string | null | undefined): boolean {
  if (!host) return false;
  const normalized = normalizeHost(host);
  return normalized === BLOG_HOST || normalized === BLOG_HOST_DEV;
}

/** True for paths this module must not touch: framework, API, static assets. */
function isPassThrough(pathname: string): boolean {
  if (pathname.startsWith("/_next/") || pathname.startsWith("/api/")) return true;
  const lastSegment = pathname.split("/").pop() ?? "";
  return /\.[a-z0-9]+$/i.test(lastSegment);
}

/**
 * Returns what to do with `pathname` on `host`, or null to leave the request
 * exactly as it is.
 */
export function resolveBlogHostRouting(
  host: string | null | undefined,
  pathname: string,
): BlogHostAction | null {
  if (!isBlogHost(host)) return null;
  if (isPassThrough(pathname) && !BLOG_OWNED_FILES.has(pathname)) return null;

  // Internal links are written as /blog/... so they work on the main site too.
  // On this host that address is a duplicate of the bare path — send it home
  // rather than serving the same post at two URLs.
  if (pathname === "/blog") return { type: "redirect", pathname: "/" };
  if (pathname.startsWith("/blog/")) {
    return { type: "redirect", pathname: pathname.slice("/blog".length) };
  }

  const suffix = pathname === "/" ? "" : pathname;
  return { type: "rewrite", pathname: `/blog${suffix}` };
}
