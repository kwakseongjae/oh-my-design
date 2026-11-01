// Copy each reference's recent GA4 page views into KV, where the DESIGN.md
// archive reads them for its recommended order (web/src/lib/view-counts.server.ts).
//
//   node scripts/analytics/sync-views.mjs [--days 30] [--dry-run] [--quiet]
//
// GA4 Data API runReport: pagePath × screenPageViews over the last N complete
// days, restricted to the item pages (/design-systems/<id>, /ko/design-systems/<id>).
// Locales are summed per id; trailing slashes and query strings are ignored; ids
// with no reference folder under web/references/ are dropped, so a typo'd or
// retired URL cannot enter the ranking.
//
// The site never talks to GA4. This script writes two keys and nothing else:
//   omd:views:30d   sorted set, member = reference id, score = page views
//   omd:views:meta  hash: asOf (UTC date of the last complete day), days, source, ids, views
// The set is built under a temporary key and RENAMEd into place, so the archive
// never reads a half-written ranking. Credentials: the GA4 service account
// (_google-auth.mjs) and OMD_KV_REST_API_URL / OMD_KV_REST_API_TOKEN (_env.mjs).
// Nothing is printed but counts and the top ids; --quiet (CI on this public repo)
// prints only how many ids were written, since traffic numbers are private.

import { readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { getAccessToken } from "./_google-auth.mjs";
import { env, requireEnv, repoRoot } from "./_env.mjs";
import { ga4CompleteDateRange } from "./_dates.mjs";

const arg = (n, d) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : d;
};
const DAYS = Number(arg("days", "30"));
const DRY = process.argv.includes("--dry-run");
const QUIET = process.argv.includes("--quiet");

export const VIEWS_KEY = "omd:views:30d";
export const VIEWS_META_KEY = "omd:views:meta";
/** Item pages only; `/ja` and `/zh-tw` have no item routes. */
export const ITEM_PATH_RE = /^\/(?:ko\/)?design-systems\/([a-z0-9.-]{1,40})\/?$/;

/** Sum GA4 rows `{ pagePath, screenPageViews }` per known reference id. */
export function viewsById(rows, knownIds) {
  const out = new Map();
  for (const row of rows) {
    const p = String(row.pagePath ?? "").split(/[?#]/)[0];
    const m = ITEM_PATH_RE.exec(p);
    if (!m || !knownIds.has(m[1])) continue;
    const n = Number(row.screenPageViews);
    if (!Number.isFinite(n) || n <= 0) continue;
    out.set(m[1], (out.get(m[1]) ?? 0) + Math.round(n));
  }
  return out;
}

function knownReferenceIds() {
  const dir = path.join(repoRoot, "web", "references");
  return new Set(
    readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && existsSync(path.join(dir, d.name, "DESIGN.md")))
      .map((d) => d.name),
  );
}

async function pullPageViews() {
  const property = requireEnv("GA4_PROPERTY_ID").replace(/^properties\//, "");
  const token = await getAccessToken(["https://www.googleapis.com/auth/analytics.readonly"]);
  const rows = [];
  for (let offset = 0; ; offset += 10000) {
    const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        dateRanges: [ga4CompleteDateRange(DAYS)],
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "screenPageViews" }],
        dimensionFilter: {
          filter: { fieldName: "pagePath", stringFilter: { matchType: "PARTIAL_REGEXP", value: "design-systems/" } },
        },
        limit: 10000,
        offset,
        keepEmptyRows: false,
      }),
    });
    if (!res.ok) throw new Error(`GA4 ${res.status} ${(await res.text()).slice(0, 300)}`);
    const json = await res.json();
    for (const r of json.rows ?? []) {
      rows.push({ pagePath: r.dimensionValues[0].value, screenPageViews: Number(r.metricValues[0].value) });
    }
    if (offset + 10000 >= (json.rowCount ?? 0)) break;
  }
  return rows;
}

async function kv(commands) {
  const url = env("OMD_KV_REST_API_URL") ?? env("UPSTASH_REDIS_REST_URL");
  const token = env("OMD_KV_REST_API_TOKEN") ?? env("UPSTASH_REDIS_REST_TOKEN");
  if (!url || !token) throw new Error("Missing OMD_KV_REST_API_URL / OMD_KV_REST_API_TOKEN");
  const res = await fetch(`${url.replace(/\/$/, "")}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
  });
  if (!res.ok) throw new Error(`KV ${res.status} ${(await res.text()).slice(0, 200)}`);
  const out = await res.json();
  const failed = out.find((r) => r.error);
  if (failed) throw new Error(`KV ${failed.error}`);
  return out.map((r) => r.result);
}

/** YYYY-MM-DD of the last complete UTC day GA4 reported. */
function asOfDate(now = new Date()) {
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1));
  return d.toISOString().slice(0, 10);
}

async function main() {
  const known = knownReferenceIds();
  const rows = await pullPageViews();
  const views = viewsById(rows, known);
  const total = [...views.values()].reduce((a, b) => a + b, 0);
  const top = [...views.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
  if (!QUIET) {
    console.log(`GA4 ${DAYS}d: ${rows.length} design-systems paths → ${views.size} references, ${total} views`);
    console.log(`top: ${top.map(([id, n]) => `${id} ${n}`).join(", ")}`);
  }
  if (DRY) return;
  if (views.size === 0) throw new Error("No views matched; refusing to overwrite the ranking with an empty set");

  const tmp = `${VIEWS_KEY}:next`;
  const zadd = ["ZADD", tmp];
  for (const [id, n] of views) zadd.push(String(n), id);
  await kv([
    ["DEL", tmp],
    zadd,
    ["RENAME", tmp, VIEWS_KEY],
    ["HSET", VIEWS_META_KEY, "asOf", asOfDate(), "days", String(DAYS), "source", "ga4:screenPageViews", "ids", String(views.size), "views", String(total)],
  ]);
  const [card, meta] = await kv([["ZCARD", VIEWS_KEY], ["HGETALL", VIEWS_META_KEY]]);
  console.log(QUIET ? `wrote ${VIEWS_KEY} (${card} ids)` : `wrote ${VIEWS_KEY} (${card} ids) · meta ${JSON.stringify(meta)}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((e) => {
    console.error(String(e?.message ?? e));
    process.exit(1);
  });
}
