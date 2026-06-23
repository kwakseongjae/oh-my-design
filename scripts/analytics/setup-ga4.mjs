// One-time (idempotent) GA4 config: register the custom dimensions + key events
// the funnel redesign needs. Requires the Google Analytics Admin API enabled +
// the service account upgraded to Editor on the property. Safe to re-run — it
// lists first and only creates what's missing.
//
//   node scripts/analytics/setup-ga4.mjs            (dry-run: list current state)
//   node scripts/analytics/setup-ga4.mjs --apply    (create missing dims/key events)
import { getAccessToken } from "./_google-auth.mjs";
import { requireEnv } from "./_env.mjs";

const APPLY = process.argv.includes("--apply");
const PROPERTY = requireEnv("GA4_PROPERTY_ID").replace(/^properties\//, "");
const BASE = `https://analyticsadmin.googleapis.com/v1beta/properties/${PROPERTY}`;
const token = await getAccessToken(["https://www.googleapis.com/auth/analytics.edit"]);

const DIMENSIONS = [
  { parameterName: "reference", displayName: "Reference", scope: "EVENT" },
  { parameterName: "mode", displayName: "Build mode", scope: "EVENT" },
  { parameterName: "channel", displayName: "Channel", scope: "EVENT" },
  { parameterName: "entry", displayName: "Entry", scope: "EVENT" },
  { parameterName: "surface", displayName: "Install surface", scope: "EVENT" },
];
const KEY_EVENTS = ["bld_generate", "act_install_copy"];

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

// ── permission probe + current state ────────────────────────────────────────
const dimList = await api("/customDimensions");
if (!dimList.ok) {
  console.error(`\n✗ Cannot read custom dimensions (HTTP ${dimList.status}).`);
  console.error(`  ${JSON.stringify(dimList.json?.error?.message || dimList.json)}`);
  console.error(`  → Check: (1) "Google Analytics Admin API" enabled in GCP, (2) the service account has EDITOR on property ${PROPERTY}.`);
  process.exit(1);
}
const existingDims = new Set((dimList.json.customDimensions || []).map((d) => d.parameterName));
console.log(`✓ Admin API reachable. Property ${PROPERTY}.`);
console.log(`  existing custom dimensions: ${[...existingDims].join(", ") || "(none)"}`);

const keList = await api("/keyEvents");
const existingKE = new Set((keList.ok ? keList.json.keyEvents || [] : []).map((k) => k.eventName));
console.log(`  existing key events: ${[...existingKE].join(", ") || "(none)"}${keList.ok ? "" : ` [list HTTP ${keList.status}]`}`);

if (!APPLY) {
  const missingDims = DIMENSIONS.filter((d) => !existingDims.has(d.parameterName)).map((d) => d.parameterName);
  const missingKE = KEY_EVENTS.filter((e) => !existingKE.has(e));
  console.log(`\nDRY RUN — would create:`);
  console.log(`  dimensions: ${missingDims.join(", ") || "(none — all present)"}`);
  console.log(`  key events: ${missingKE.join(", ") || "(none — all present)"}`);
  console.log(`\nRe-run with --apply to create them.`);
  process.exit(0);
}

// ── apply ───────────────────────────────────────────────────────────────────
console.log(`\nApplying…`);
for (const d of DIMENSIONS) {
  if (existingDims.has(d.parameterName)) { console.log(`  = dim ${d.parameterName} (exists)`); continue; }
  const r = await api("/customDimensions", { method: "POST", body: JSON.stringify(d) });
  console.log(r.ok ? `  + dim ${d.parameterName}` : `  ✗ dim ${d.parameterName} — ${r.status} ${JSON.stringify(r.json?.error?.message || r.json)}`);
}
for (const eventName of KEY_EVENTS) {
  if (existingKE.has(eventName)) { console.log(`  = keyEvent ${eventName} (exists)`); continue; }
  const r = await api("/keyEvents", { method: "POST", body: JSON.stringify({ eventName, countingMethod: "ONCE_PER_EVENT" }) });
  if (r.ok) console.log(`  + keyEvent ${eventName}`);
  else console.log(`  ✗ keyEvent ${eventName} — ${r.status} ${JSON.stringify(r.json?.error?.message || r.json)} (new event names may need GA4 to see them once post-deploy)`);
}
console.log(`\nDone.`);
