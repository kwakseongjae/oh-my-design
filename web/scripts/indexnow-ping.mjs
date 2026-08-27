/**
 * Pushes URLs to IndexNow — one POST per host, received by every participating
 * engine (Bing, Naver, Seznam, Yandex, Yep). Google does not consume IndexNow;
 * it discovers through the sitemaps registered in Search Console.
 *
 * The key file lives in web/public/<key>.txt, so the *same* deployment serves
 * it on both hosts: the blog host passes dotted paths through as assets
 * (host-routing.ts BLOG_OWNED_FILES), which is what lets one key verify
 * oh-my-design.kr and blog.oh-my-design.kr alike. The key is meant to be
 * public — possession proves control of the host serving it, nothing more.
 *
 *   node scripts/indexnow-ping.mjs                  # everything in both sitemaps
 *   node scripts/indexnow-ping.mjs --dry-run        # show the payloads, send nothing
 *   node scripts/indexnow-ping.mjs --urls <u> <u>…  # push specific URLs (new post)
 *
 * When to run: after a deploy that adds or meaningfully updates pages — a new
 * blog post is the canonical case. IndexNow is a hint, not a command; engines
 * de-duplicate, so running it twice costs nothing.
 */

import { readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WEB_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ENDPOINT = "https://api.indexnow.org/indexnow";
const SITEMAPS = [
  "https://oh-my-design.kr/sitemap.xml",
  // Before the subdomain cutover this 404s via the path (the proxy only maps
  // it on the blog host) — treated as "nothing there yet", not an error.
  "https://blog.oh-my-design.kr/sitemap.xml",
];

const dryRun = process.argv.includes("--dry-run");
const urlsFlag = process.argv.indexOf("--urls");
const explicitUrls = urlsFlag === -1 ? null : process.argv.slice(urlsFlag + 1);

/** The committed key is the file itself — no second copy to drift. */
function findKey() {
  const names = readdirSync(join(WEB_ROOT, "public")).filter((f) => /^[0-9a-f]{32}\.txt$/.test(f));
  if (names.length !== 1) {
    throw new Error(`expected exactly one <32-hex>.txt key file in web/public, found ${names.length}`);
  }
  const key = names[0].replace(/\.txt$/, "");
  const body = readFileSync(join(WEB_ROOT, "public", names[0]), "utf8").trim();
  if (body !== key) throw new Error(`key file ${names[0]} must contain exactly its own name`);
  return key;
}

async function sitemapUrls(sitemap) {
  const res = await fetch(sitemap, { headers: { "user-agent": "omd-indexnow-ping" } });
  if (!res.ok) {
    console.warn(`skip ${sitemap}: HTTP ${res.status}`);
    return [];
  }
  const xml = await res.text();
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

const key = findKey();
const urls = explicitUrls ?? (await Promise.all(SITEMAPS.map(sitemapUrls))).flat();
if (!urls.length) {
  console.error("no URLs to submit");
  process.exit(1);
}

// One submission per host: keyLocation must sit on the host it vouches for.
const byHost = new Map();
for (const url of urls) {
  const host = new URL(url).host;
  if (!byHost.has(host)) byHost.set(host, []);
  byHost.get(host).push(url);
}

let failed = false;
for (const [host, urlList] of byHost) {
  const payload = { host, key, keyLocation: `https://${host}/${key}.txt`, urlList };
  if (dryRun) {
    console.log(`[dry-run] ${host}: ${urlList.length} URLs`);
    console.log(JSON.stringify(payload, null, 2));
    continue;
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  // 200 = processed, 202 = received (key check pending) — both are success.
  const ok = res.status === 200 || res.status === 202;
  if (!ok) failed = true;
  console.log(`${ok ? "✓" : "✗"} ${host}: ${urlList.length} URLs → HTTP ${res.status}`);
}
process.exit(failed ? 1 : 0);
