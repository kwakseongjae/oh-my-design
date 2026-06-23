// Pull Google Search Console performance data via the Search Analytics API.
// Writes data/analytics/raw/gsc.json keyed by report name. GSC data lags ~2-3
// days, so the window ends 3 days ago by default.
//
//   node scripts/analytics/pull-gsc.mjs [--days 28]
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { getAccessToken } from "./_google-auth.mjs";
import { env, requireEnv, repoRoot } from "./_env.mjs";

const arg = (n, d) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : d;
};
const DAYS = Number(arg("days", env("ANALYTICS_DAYS", "28")));
const SITE = requireEnv("GSC_SITE_URL"); // e.g. sc-domain:oh-my-design.kr
const SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"];
const API = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`;

function ymd(daysAgo) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}
const startDate = ymd(DAYS + 3);
const endDate = ymd(3); // GSC freshness lag

const REPORTS = {
  queries: { dimensions: ["query"], rowLimit: 250 },
  pages: { dimensions: ["page"], rowLimit: 200 },
  query_page: { dimensions: ["query", "page"], rowLimit: 250 },
  country: { dimensions: ["country"], rowLimit: 50 },
  device: { dimensions: ["device"], rowLimit: 10 },
  date: { dimensions: ["date"], rowLimit: 500 },
  search_appearance: { dimensions: ["searchAppearance"], rowLimit: 25, optional: true },
};

async function query(token, spec) {
  const body = {
    startDate,
    endDate,
    dimensions: spec.dimensions,
    rowLimit: spec.rowLimit ?? 100,
    dataState: "all",
  };
  const res = await fetch(API, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  const json = await res.json();
  const rows = (json.rows ?? []).map((r) => {
    const o = {};
    spec.dimensions.forEach((dim, i) => (o[dim] = r.keys[i]));
    o.clicks = r.clicks;
    o.impressions = r.impressions;
    o.ctr = r.ctr;
    o.position = r.position;
    return o;
  });
  return { rowCount: rows.length, rows };
}

const token = await getAccessToken(SCOPES);
const out = { _meta: { site: SITE, startDate, endDate, days: DAYS, pulledAt: new Date().toISOString() } };
for (const [name, spec] of Object.entries(REPORTS)) {
  try {
    out[name] = await query(token, spec);
    console.log(`gsc:${name} → ${out[name].rows.length} rows`);
  } catch (e) {
    out[name] = { error: String(e.message || e) };
    console.error(`gsc:${name} FAILED${spec.optional ? " (optional)" : ""} — ${e.message || e}`);
  }
}

const dir = path.join(repoRoot, "data", "analytics", "raw");
mkdirSync(dir, { recursive: true });
const file = path.join(dir, "gsc.json");
writeFileSync(file, JSON.stringify(out, null, 2));
console.log(`\nwrote ${path.relative(repoRoot, file)}`);
