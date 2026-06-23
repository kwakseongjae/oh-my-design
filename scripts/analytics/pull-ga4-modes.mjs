// Focused GA4 pull to answer: (1) as_is vs customize split, (2) copy/download vs
// install, (3) trend of customize-vs-as_is over the window. Tries the custom
// event params (format/mode); falls back to wizard/style proxies. Writes
// data/analytics/raw/ga4-modes.json.
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { getAccessToken } from "./_google-auth.mjs";
import { env, requireEnv, repoRoot } from "./_env.mjs";

const DAYS = Number(env("ANALYTICS_DAYS", "28"));
const PROPERTY = requireEnv("GA4_PROPERTY_ID").replace(/^properties\//, "");
const API = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY}:runReport`;
const dateRange = { startDate: `${DAYS}daysAgo`, endDate: "today" };

async function runReport(token, spec) {
  const res = await fetch(API, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ dateRanges: [dateRange], keepEmptyRows: false, ...spec }),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  const json = await res.json();
  const dimNames = (json.dimensionHeaders ?? []).map((h) => h.name);
  const metNames = (json.metricHeaders ?? []).map((h) => h.name);
  return (json.rows ?? []).map((r) => {
    const o = {};
    r.dimensionValues.forEach((v, i) => (o[dimNames[i]] = v.value));
    r.metricValues.forEach((v, i) => (o[metNames[i]] = Number(v.value)));
    return o;
  });
}

const inFilter = (field, values) => ({ filter: { fieldName: field, inListFilter: { values } } });

const token = await getAccessToken(["https://www.googleapis.com/auth/analytics.readonly"]);
const out = { _meta: { property: PROPERTY, days: DAYS, pulledAt: new Date().toISOString() } };

const reports = {
  // exact as_is/customize split via the builder_export `format` param
  export_by_format: {
    dimensions: [{ name: "customEvent:format" }],
    metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
    dimensionFilter: inFilter("eventName", ["builder_export"]),
  },
  // exact split via reference_select / generation_complete `mode` param
  events_by_mode: {
    dimensions: [{ name: "eventName" }, { name: "customEvent:mode" }],
    metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
    dimensionFilter: inFilter("eventName", ["reference_select", "generation_complete"]),
  },
  // funnel events by date — for the as_is-vs-customize trend & decline test
  funnel_by_date: {
    dimensions: [{ name: "date" }, { name: "eventName" }],
    metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
    dimensionFilter: inFilter("eventName", [
      "reference_select", "generation_complete", "builder_export", "wizard_step_view",
      "style_preference", "skip_wizard_toggle", "download_designmd", "copy_designmd",
      "install_copy", "ds_copy_md", "ds_download_md", "ds_detail_view",
    ]),
    orderBys: [{ dimension: { dimensionName: "date" } }],
    limit: 1000,
  },
};

for (const [name, spec] of Object.entries(reports)) {
  try {
    out[name] = await runReport(token, spec);
    console.log(`${name} → ${out[name].length} rows`);
  } catch (e) {
    out[name] = { error: String(e.message || e).slice(0, 200) };
    console.error(`${name} FAILED — ${String(e.message || e).slice(0, 160)}`);
  }
}

const dir = path.join(repoRoot, "data", "analytics", "raw");
mkdirSync(dir, { recursive: true });
writeFileSync(path.join(dir, "ga4-modes.json"), JSON.stringify(out, null, 2));
console.log(`\nwrote ${path.relative(repoRoot, path.join(dir, "ga4-modes.json"))}`);
