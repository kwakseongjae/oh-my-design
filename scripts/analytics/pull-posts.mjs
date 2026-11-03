// Post-level report: for every code in web/src/data/go-links.ts, join the
// server-side /go click counters (Upstash hash omd:go:v1:<code>:<YYYY-MM-DD>,
// field = country) with GA4 sessionCampaignName x sessionSource x country.
// Headline metric is GA4 engagedSessions (crawlers do not engage).
// Writes data/analytics/raw/posts.json (gitignored) and prints one table per post.
//
//   node scripts/analytics/pull-posts.mjs [--days 28]
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { getAccessToken } from "./_google-auth.mjs";
import { env, requireEnv, repoRoot } from "./_env.mjs";
import { ga4CompleteDateRange, trailingCompleteUtcBuckets } from "./_dates.mjs";

const arg = (n, d) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : d;
};
const DAYS = Number(arg("days", env("ANALYTICS_DAYS", "28")));

// The registry is plain object literals; read it as text (no TS loader needed).
function readRegistry() {
  const src = readFileSync(path.join(repoRoot, "web", "src", "data", "go-links.ts"), "utf8");
  const body = src.slice(src.indexOf("GO_LINKS"));
  const links = [];
  for (const m of body.matchAll(/["']?([A-Za-z0-9][A-Za-z0-9_-]*)["']?\s*:\s*\{([^}]*)\}/g)) {
    const field = (k) => m[2].match(new RegExp(`\\b${k}\\s*:\\s*"([^"]*)"`))?.[1];
    const campaign = field("campaign");
    if (!campaign) continue;
    links.push({ code: m[1], source: field("source"), medium: field("medium"), campaign, content: field("content") });
  }
  return links;
}

const links = readRegistry();
if (!links.length) {
  console.error("No codes found in web/src/data/go-links.ts");
  process.exit(1);
}

// ── Upstash ─────────────────────────────────────────────────────────────────
const URL_ = env("OMD_KV_REST_API_URL") ?? env("UPSTASH_REDIS_REST_URL");
const TOKEN = env("OMD_KV_REST_API_TOKEN") ?? env("UPSTASH_REDIS_REST_TOKEN");
async function cmd(args) {
  const res = await fetch(URL_, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(args),
  });
  if (!res.ok) throw new Error(`upstash ${res.status}`);
  const json = await res.json();
  if (json.error) throw new Error("upstash error");
  return json.result;
}

// Same window as GA4: complete UTC days only.
const dateRange = ga4CompleteDateRange(DAYS);
const days = trailingCompleteUtcBuckets(DAYS).map((b) => `${b.slice(0, 4)}-${b.slice(4, 6)}-${b.slice(6, 8)}`);

const clicks = {}; // code -> { byCountry: {CC: n}, byDay: {YYYY-MM-DD: n}, total }
let upstashError = null;
if (!URL_ || !TOKEN) {
  upstashError = "Missing Upstash creds (OMD_KV_REST_API_URL / OMD_KV_REST_API_TOKEN)";
} else {
  try {
    for (const { code } of links) {
      const c = { byCountry: {}, byDay: {}, total: 0 };
      for (const day of days) {
        const flat = (await cmd(["HGETALL", `omd:go:v1:${code}:${day}`])) ?? [];
        for (let i = 0; i < flat.length; i += 2) {
          const n = Number(flat[i + 1]);
          c.byCountry[flat[i]] = (c.byCountry[flat[i]] ?? 0) + n;
          c.byDay[day] = (c.byDay[day] ?? 0) + n;
          c.total += n;
        }
      }
      clicks[code] = c;
    }
  } catch (e) {
    upstashError = String(e.message || e);
  }
}
if (upstashError) console.error(`upstash FAILED — ${upstashError}`);

// ── GA4 ─────────────────────────────────────────────────────────────────────
let ga4Rows = [];
let ga4Error = null;
try {
  const PROPERTY = requireEnv("GA4_PROPERTY_ID").replace(/^properties\//, "");
  const token = await getAccessToken(["https://www.googleapis.com/auth/analytics.readonly"]);
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY}:runReport`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      dateRanges: [dateRange],
      dimensions: ["sessionCampaignName", "sessionSource", "country"].map((name) => ({ name })),
      metrics: ["sessions", "engagedSessions", "activeUsers"].map((name) => ({ name })),
      dimensionFilter: {
        filter: {
          fieldName: "sessionCampaignName",
          inListFilter: { values: links.map((l) => l.campaign) },
        },
      },
      limit: 10000,
      keepEmptyRows: false,
    }),
  });
  if (!res.ok) throw new Error(`ga4 ${res.status}`);
  const json = await res.json();
  ga4Rows = (json.rows ?? []).map((r) => ({
    campaign: r.dimensionValues[0].value,
    source: r.dimensionValues[1].value,
    country: r.dimensionValues[2].value,
    sessions: Number(r.metricValues[0].value),
    engagedSessions: Number(r.metricValues[1].value),
    activeUsers: Number(r.metricValues[2].value),
  }));
} catch (e) {
  ga4Error = String(e.message || e);
  console.error(`ga4 FAILED — ${ga4Error}`);
}

// ── Output ──────────────────────────────────────────────────────────────────
const posts = links.map((l) => ({
  ...l,
  clicks: clicks[l.code] ?? null,
  ga4: ga4Rows.filter((r) => r.campaign === l.campaign),
}));
const out = {
  _meta: { days: DAYS, dateRange, pulledAt: new Date().toISOString(), upstashError, ga4Error },
  posts,
};
const dir = path.join(repoRoot, "data", "analytics", "raw");
mkdirSync(dir, { recursive: true });
const file = path.join(dir, "posts.json");
writeFileSync(file, JSON.stringify(out, null, 2));

const pad = (s, n) => String(s).padEnd(n);
for (const p of posts) {
  console.log(`\n== ${p.code}  [${p.source}/${p.medium}] ${p.campaign}${p.content ? ` (${p.content})` : ""}`);
  const byCountry = new Map();
  for (const [cc, n] of Object.entries(p.clicks?.byCountry ?? {})) byCountry.set(cc, { clicks: n, sessions: 0, engaged: 0 });
  for (const r of p.ga4) {
    const row = byCountry.get(r.country) ?? { clicks: 0, sessions: 0, engaged: 0 };
    row.sessions += r.sessions;
    row.engaged += r.engagedSessions;
    byCountry.set(r.country, row);
  }
  console.log(`${pad("country", 22)}${pad("clicks", 8)}${pad("ga4 sessions", 14)}ga4 engaged`);
  const rows = [...byCountry.entries()].sort((a, b) => b[1].engaged - a[1].engaged || b[1].clicks - a[1].clicks);
  for (const [cc, r] of rows) console.log(`${pad(cc, 22)}${pad(r.clicks, 8)}${pad(r.sessions, 14)}${r.engaged}`);
  const t = rows.reduce((a, [, r]) => ({ c: a.c + r.clicks, s: a.s + r.sessions, e: a.e + r.engaged }), { c: 0, s: 0, e: 0 });
  console.log(`${pad("TOTAL", 22)}${pad(t.c, 8)}${pad(t.s, 14)}${t.e}`);
}
console.log(`\nwrote ${path.relative(repoRoot, file)}`);
if (upstashError || ga4Error) process.exitCode = 1;
