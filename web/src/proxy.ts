/**
 * Next 16 proxy (the former `middleware.ts` convention — that filename is
 * deprecated in 16 and having both files is a build error).
 *
 * Sole job: serve the blog on blog.oh-my-design.kr out of this same app. The
 * decision table lives in @/lib/blog/host-routing so it can be unit-tested
 * without an edge runtime; this file only adapts it to NextResponse.
 *
 * Requests on any other host fall straight through, so the main site behaves
 * exactly as it did before this file existed.
 */

import { NextResponse, type NextRequest } from "next/server";
import { resolveBlogHostRouting } from "@/lib/blog/host-routing";
import { LOCALE_COOKIE, LOCALE_PATH_ALIASES, landingRedirectFor } from "@/lib/i18n/site-locales";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? request.nextUrl.host;
  const action = resolveBlogHostRouting(host, request.nextUrl.pathname);
  if (!action) return localeRouting(request);

  const url = request.nextUrl.clone();
  url.pathname = action.pathname;

  if (action.type === "rewrite") return NextResponse.rewrite(url);

  // Pin the redirect to the host we actually matched. `nextUrl.host` is derived
  // from the request URL and does not always agree with the Host header (it
  // reads `localhost` behind a forged header in dev), and a Location that
  // silently changes host would bounce readers off the blog onto the main site.
  url.host = host;

  // 308 rather than the 307 default: /blog/<slug> on this host is a permanent
  // duplicate of /<slug>, and crawlers should consolidate on the bare path.
  return NextResponse.redirect(url, 308);
}

/**
 * Landing locales (src/lib/i18n/site-locales.ts). Two jobs, both on the main
 * host only: alternate spellings (/zh-TW, /en …) 308 to the canonical
 * landing, and `/` follows an explicit switcher choice stored in a cookie.
 * Accept-Language is never consulted, so crawlers always see x-default.
 */
function localeRouting(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const alias = LOCALE_PATH_ALIASES[pathname];
  if (alias) {
    const url = request.nextUrl.clone();
    url.pathname = alias;
    const res = NextResponse.redirect(url, 308);
    // Typing /en is a choice of English; remember it so `/` stops redirecting.
    if (alias === "/") res.cookies.set(LOCALE_COOKIE, "en", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    return res;
  }
  const to = landingRedirectFor(pathname, request.cookies.get(LOCALE_COOKIE)?.value);
  if (to) {
    const url = request.nextUrl.clone();
    url.pathname = to;
    // 307: the destination depends on this visitor's cookie; never cache it.
    return NextResponse.redirect(url, 307);
  }
  return NextResponse.next();
}

export const config = {
  // Framework and API traffic never needs host routing; skipping it here keeps
  // the proxy off the hot path for assets. Everything else is decided by
  // resolveBlogHostRouting, which no-ops on the main host.
  matcher: ["/((?!_next/|api/).*)"],
};
