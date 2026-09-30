/**
 * Routes that name the same page count once (2026-09-30): each is compared, and returned, as
 * `new URL(u).href`, so `https://lemonbase.com` and `https://lemonbase.com/` are one route while a
 * different path, query or fragment stays distinct. A string URL cannot parse is kept as written.
 */
export function dedupeRouteUrls(urls: readonly string[]): string[] {
  const seen = new Set<string>();
  const routes: string[] = [];
  for (const url of urls) {
    let href = url;
    try { href = new URL(url).href; } catch { /* kept as written */ }
    if (seen.has(href)) continue;
    seen.add(href);
    routes.push(href);
  }
  return routes;
}

export function isUnsafeCaptureSurface(value: string): boolean {
  try {
    const url = new URL(value);
    return /(?:^|[./_-])(?:nidlogin|login|signin|signup|register|account|checkout|cart|admin|oauth)(?:[./_?-]|$)/i
      .test(`${url.hostname}${url.pathname}`);
  } catch {
    return true;
  }
}
