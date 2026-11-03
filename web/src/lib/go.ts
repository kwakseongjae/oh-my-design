import { GO_LINKS, type GoLink } from "@/data/go-links";

export const GO_SITE_HOSTS: readonly string[] = ["oh-my-design.kr", "www.oh-my-design.kr"];
export const GO_COUNTER_TTL_SECONDS = 400 * 24 * 60 * 60;
export const goClickKey = (code: string, day: string) => `omd:go:v1:${code}:${day}`;

// Obvious crawlers and link-preview fetchers. A crawler that sends a normal
// browser UA (e.g. a headless Chrome farm) cannot be told apart here.
const BOT_UA =
  /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|headless|lighthouse|python-requests|curl\/|wget|go-http-client|node-fetch|axios|okhttp|java\//i;

export function isBotUserAgent(ua: string | null): boolean {
  return !ua || BOT_UA.test(ua);
}

export function lookupGoLink(code: string): GoLink | null {
  return Object.prototype.hasOwnProperty.call(GO_LINKS, code) ? GO_LINKS[code] : null;
}

/** Resolve a same-site target and append UTMs. Returns null for off-site or malformed targets. */
export function buildGoTarget(link: GoLink, origin: string): URL | null {
  const to = link.to.trim();
  let url: URL;
  try {
    if (to.startsWith("/")) {
      if (to.startsWith("//") || to.startsWith("/\\")) return null;
      url = new URL(to, origin);
    } else {
      url = new URL(to);
      if (url.protocol !== "https:" || !GO_SITE_HOSTS.includes(url.hostname) || url.username || url.password) return null;
    }
  } catch {
    return null;
  }
  url.searchParams.set("utm_source", link.source);
  url.searchParams.set("utm_medium", link.medium);
  url.searchParams.set("utm_campaign", link.campaign);
  if (link.content) url.searchParams.set("utm_content", link.content);
  return url;
}
