// Prune the STALE key events left over from the pre-2026-06-23 taxonomy. After
// the funnel reset these no longer fire, but they linger in the GA4 conversions
// list and clutter funnel/conversion reports. We delete ONLY an explicit list
// of known-dead renamed events — never "everything not in a keep-list" — so a
// live event (cta_click) or a GA4 default (purchase) can't be removed by
// accident. Deletion is reversible (re-create via setup-ga4.mjs), but explicit.
//
//   node scripts/analytics/prune-ga4-keyevents.mjs            (dry-run)
//   node scripts/analytics/prune-ga4-keyevents.mjs --apply    (delete them)
import { getAccessToken } from "./_google-auth.mjs";
import { requireEnv } from "./_env.mjs";

const APPLY = process.argv.includes("--apply");
const PROPERTY = requireEnv("GA4_PROPERTY_ID").replace(/^properties\//, "");
const BASE = `https://analyticsadmin.googleapis.com/v1beta/properties/${PROPERTY}`;
const token = await getAccessToken(["https://www.googleapis.com/auth/analytics.edit"]);

// Renamed → dead after the 2026-06-23 reset (see docs/funnel-analytics.md).
const STALE = new Set([
  "copy_designmd",
  "download_designmd",
  "ds_copy_md",
  "ds_download_md",
  "cli_install_cta_click",
]);

async function api(path, init) {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", ...(init?.headers || {}) },
  });
  const text = await res.text();
  let json;
  try { json = text ? JSON.parse(text) : {}; } catch { json = { raw: text }; }
  return { ok: res.ok, status: res.status, json };
}

const list = await api("/keyEvents");
if (!list.ok) {
  console.error(`✗ Cannot list key events (HTTP ${list.status}): ${JSON.stringify(list.json?.error?.message || list.json)}`);
  process.exit(1);
}
const events = list.json.keyEvents || [];
const targets = events.filter((e) => STALE.has(e.eventName));
const keep = events.filter((e) => !STALE.has(e.eventName)).map((e) => e.eventName);

console.log(`Property ${PROPERTY}`);
console.log(`  keep:   ${keep.join(", ") || "(none)"}`);
console.log(`  prune:  ${targets.map((e) => e.eventName).join(", ") || "(none — already clean)"}`);

if (!APPLY) {
  console.log(`\nDRY RUN — re-run with --apply to delete the pruned key events.`);
  process.exit(0);
}

for (const e of targets) {
  // e.name = properties/{p}/keyEvents/{id}; the resource path after BASE host.
  const path = `/${e.name.split("/").slice(2).join("/")}`;
  const r = await api(path, { method: "DELETE" });
  console.log(r.ok ? `  - deleted ${e.eventName}` : `  ✗ ${e.eventName} — ${r.status} ${JSON.stringify(r.json?.error?.message || r.json)}`);
}
console.log(`\nDone.`);
