// Orchestrate every analytics pull. Each source is independent — a missing
// credential skips that source but never blocks the others. Run after dropping
// the service-account key and pasting the Upstash + GA4/GSC config.
//
//   node scripts/analytics/pull-all.mjs [--days 28]
import { spawnSync } from "node:child_process";
import path from "node:path";
import { existsSync } from "node:fs";
import { env, repoRoot } from "./_env.mjs";

const here = path.join(repoRoot, "scripts", "analytics");
const days = (() => {
  const i = process.argv.indexOf("--days");
  return i !== -1 ? process.argv[i + 1] : env("ANALYTICS_DAYS", "28");
})();

const saPresent = !!env("GOOGLE_SA_KEY_JSON") || existsSync(env("GOOGLE_SA_KEY_FILE", path.join(here, ".secrets", "sa.json")));
const kvPresent = !!(env("OMD_KV_REST_API_URL") && env("OMD_KV_REST_API_TOKEN"));

const sources = [
  { name: "public", script: "pull-public.mjs", args: [], ready: true },
  { name: "upstash", script: "pull-upstash.mjs", args: [], ready: kvPresent, why: "OMD_KV_REST_API_URL + OMD_KV_REST_API_TOKEN" },
  { name: "ga4", script: "pull-ga4.mjs", args: ["--days", days], ready: saPresent && !!env("GA4_PROPERTY_ID"), why: "service-account key + GA4_PROPERTY_ID" },
  { name: "gsc", script: "pull-gsc.mjs", args: ["--days", days], ready: saPresent && !!env("GSC_SITE_URL"), why: "service-account key + GSC_SITE_URL" },
];

const ran = [];
const skipped = [];
for (const s of sources) {
  if (!s.ready) {
    skipped.push(s);
    console.log(`\n⊘ ${s.name} — skipped (needs: ${s.why})`);
    continue;
  }
  console.log(`\n▶ ${s.name}`);
  const r = spawnSync(process.execPath, [path.join(here, s.script), ...s.args], { stdio: "inherit" });
  ran.push({ name: s.name, ok: r.status === 0 });
}

console.log("\n──────── pull summary ────────");
for (const r of ran) console.log(`${r.ok ? "✓" : "✗"} ${r.name}`);
for (const s of skipped) console.log(`⊘ ${s.name} (needs ${s.why})`);
console.log(`\nraw → ${path.relative(repoRoot, path.join(repoRoot, "data", "analytics", "raw"))}/`);
