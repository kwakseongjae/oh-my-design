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
 *   /_next/*, /api/*   → untouched
 *   /<anything>.<ext>  → untouched                     (public assets)
 *
 * The extension rule is why /robots.txt, /sitemap.xml and /feed.xml currently
 * fall through to the main app's versions. Blog-specific ones get explicit
 * entries here when those routes exist (A5 / B4) — the table is the only thing
 * that has to change.
 *
 * Any other host returns null: the main site is untouched by this module.
 */

import { BLOG_HOST } from "@/lib/site";

export type BlogHostAction =
  | { type: "rewrite"; pathname: string }
  | { type: "redirect"; pathname: string };

/** Local dev alias — `blog.localhost:3000` resolves without editing /etc/hosts. */
const BLOG_HOST_DEV = "blog.localhost";

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
  if (isPassThrough(pathname)) return null;

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
