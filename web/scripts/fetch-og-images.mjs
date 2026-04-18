// Harvests og:image URLs for every design-system site in the registry
// and prints a `refId → ogUrl` map to paste into lib/design-systems.ts
// (see the OG_IMAGES constant).
//
// Run:  node scripts/fetch-og-images.mjs
//
// Extraction order: og:image → twitter:image. Missing hits print `null`;
// the UI falls back to the gradient-logo thumbnail for those refs.

const SITES = [
  ["apple", "https://developer.apple.com/design/human-interface-guidelines"],
  ["clickhouse", "https://clickhouse.design"],
  ["freee", "https://vibes.freee.co.jp"],
  ["hashicorp", "https://helios.hashicorp.design"],
  ["ibm", "https://carbondesignsystem.com"],
  ["karrot", "https://seed-design.io"],
  ["line", "https://designsystem.line.me"],
  ["miro", "https://mirotone.xyz"],
  ["mongodb", "https://www.mongodb.design"],
  ["pinterest", "https://gestalt.pinterest.systems"],
  ["sanity", "https://www.sanity.io/ui"],
  ["toss", "https://tossmini-docs.toss.im/tds-mobile/"],
  ["uber", "https://baseweb.design"],
  ["vercel", "https://vercel.com/geist"],
  ["wise", "https://wise.design"],
  ["airbnb", "https://brand.withairbnb.com"],
  ["airtable", "https://www.airtable.com/company/trademark-guidelines"],
  ["clay", "https://www.clay.com/press"],
  ["cohere", "https://cohere.com/newsroom"],
  ["cursor", "https://www.cursor.com/brand"],
  ["elevenlabs", "https://elevenlabs.io/brand"],
  ["expo", "https://expo.dev/brand"],
  ["figma", "https://www.figma.com/using-the-figma-brand"],
  ["framer", "https://www.framer.com/brand"],
  ["linear.app", "https://linear.app/brand"],
  ["mistral.ai", "https://mistral.ai/brand"],
  ["opencode.ai", "https://opencode.ai/brand"],
  ["posthog", "https://posthog.com/handbook/company/brand-assets"],
  ["raycast", "https://www.raycast.com/templates/brand-guidelines"],
  ["resend", "https://resend.com/brand"],
  // revolut + x.ai dropped — brand.revolut.com SSO-gated; x.ai Cloudflare-blocks bots.
  ["superhuman", "https://superhuman.com/media-assets"],
  ["supabase", "https://supabase.com/brand-assets"],
  ["together.ai", "https://www.together.ai/brand"],
  ["zapier", "https://brand.zapier.com"],
];

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/gi, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractOg(html) {
  const patterns = [
    /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i,
    /<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i,
    /<meta[^>]*name=["']og:image["'][^>]*content=["']([^"']+)["']/i,
    /<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i,
    /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']twitter:image["']/i,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return decodeEntities(m[1]);
  }
  return null;
}

function absolutize(ogUrl, pageUrl) {
  if (!ogUrl) return null;
  if (/^https?:\/\//i.test(ogUrl)) return ogUrl;
  if (ogUrl.startsWith("//")) return `https:${ogUrl}`;
  try { return new URL(ogUrl, pageUrl).toString(); } catch { return null; }
}

const out = {};
await Promise.all(SITES.map(async ([id, url]) => {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "Mozilla/5.0 (compatible; OMDBot/1.0)" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const og = absolutize(extractOg(html), res.url);
    out[id] = og;
    console.log(id.padEnd(14), "→", og ?? "(none)");
  } catch (e) {
    out[id] = null;
    console.log(id.padEnd(14), "→", `ERROR: ${e.message}`);
  }
}));

console.log("\n=== JSON ===\n");
console.log(JSON.stringify(out, null, 2));
