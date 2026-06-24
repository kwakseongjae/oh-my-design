// Pull server-side active-user counts (DAU / rolling WAU / rolling MAU) from the
// per-day HyperLogLog sketches in Upstash (`omd:active:YYYYMMDD`). This is the
// consent-independent, ad-blocker-proof active-user truth — the DAU=1000
// north-star floor, decoupled from GA4/Mixpanel. Writes
// data/analytics/raw/active.json with today's DAU, rolling 7/30-day uniques,
// and a per-day DAU series for the trailing 30 days.
//
//   node scripts/analytics/pull-active.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { env, repoRoot } from "./_env.mjs";

const URL_ = env("OMD_KV_REST_API_URL") ?? env("UPSTASH_REDIS_REST_URL");
const TOKEN = env("OMD_KV_REST_API_TOKEN") ?? env("UPSTASH_REDIS_REST_TOKEN");
if (!URL_ || !TOKEN) {
  console.error("Missing Upstash creds: set OMD_KV_REST_API_URL + OMD_KV_REST_API_TOKEN in web/.env.local");
  process.exit(1);
}

async function cmd(args) {
  const res = await fetch(URL_, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(args),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  const json = await res.json();
  if (json.error) throw new Error(json.error);
  return json.result;
}

const dayBucket = (d) => d.toISOString().slice(0, 10).replace(/-/g, "");
const trailing = (n) => {
  const out = [];
  const now = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(now);
    d.setUTCDate(d.getUTCDate() - i);
    out.push(dayBucket(d));
  }
  return out;
};
const key = (b) => `omd:active:${b}`;

const days30 = trailing(30);
const days7 = days30.slice(0, 7);

const DEVICES = ["mobile", "tablet", "desktop"];
const dkey = (b, d) => `omd:active:${b}:${d}`;

const [dau, wau, mau, ...devCounts] = await Promise.all([
  cmd(["PFCOUNT", key(days30[0])]),
  cmd(["PFCOUNT", ...days7.map(key)]),
  cmd(["PFCOUNT", ...days30.map(key)]),
  // Today's per-device DAU + rolling-7d per-device (mobile share for W-3).
  ...DEVICES.map((d) => cmd(["PFCOUNT", dkey(days30[0], d)])),
  ...DEVICES.map((d) => cmd(["PFCOUNT", ...days7.map((b) => dkey(b, d))])),
]);
const dauByDevice = Object.fromEntries(DEVICES.map((d, i) => [d, Number(devCounts[i])]));
const wauByDevice = Object.fromEntries(DEVICES.map((d, i) => [d, Number(devCounts[DEVICES.length + i])]));

// Per-day DAU series (oldest → newest) for the trend the user asked about.
const series = [];
for (const b of [...days30].reverse()) {
  const c = await cmd(["PFCOUNT", key(b)]);
  series.push({ day: `${b.slice(0, 4)}-${b.slice(4, 6)}-${b.slice(6, 8)}`, dau: Number(c) });
}

const out = {
  _meta: { pulledAt: new Date().toISOString(), note: "HLL approx; rolling WAU/MAU = union of trailing 7/30 day sketches" },
  dau: Number(dau),
  wau_rolling7: Number(wau),
  mau_rolling30: Number(mau),
  dau_by_device: dauByDevice,
  wau7_by_device: wauByDevice,
  series,
};

const dir = path.join(repoRoot, "data", "analytics", "raw");
mkdirSync(dir, { recursive: true });
const file = path.join(dir, "active.json");
writeFileSync(file, JSON.stringify(out, null, 2));
console.log(`DAU ${out.dau} · WAU(7d) ${out.wau_rolling7} · MAU(30d) ${out.mau_rolling30}`);
console.log(`DAU by device — mobile ${dauByDevice.mobile} · tablet ${dauByDevice.tablet} · desktop ${dauByDevice.desktop}`);
console.log(`wrote ${path.relative(repoRoot, file)}`);
