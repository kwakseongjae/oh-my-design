// Pull GA4 reports via the Data API (v1beta runReport). Writes one JSON object
// keyed by report name to data/analytics/raw/ga4.json. Each report is isolated:
// a failure (e.g. an unregistered custom dimension) records an error and the
// rest still run.
//
//   node scripts/analytics/pull-ga4.mjs [--days 28]
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { getAccessToken } from "./_google-auth.mjs";
import { env, requireEnv, repoRoot } from "./_env.mjs";
import { ga4CompleteDateRange } from "./_dates.mjs";

const arg = (n, d) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : d;
};
const DAYS = Number(arg("days", env("ANALYTICS_DAYS", "28")));
const PROPERTY = requireEnv("GA4_PROPERTY_ID").replace(/^properties\//, "");
const SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"];
const API = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY}:runReport`;

const dateRange = ga4CompleteDateRange(DAYS);
const dims = (...names) => names.map((name) => ({ name }));
const mets = (...names) => names.map((name) => ({ name }));

// Each report: dimensions, metrics, optional orderBys / limit.
const REPORTS = {
  daily_users: {
    dimensions: dims("date"),
    metrics: mets("activeUsers", "newUsers", "sessions", "screenPageViews"),
    orderBys: [{ dimension: { dimensionName: "date" } }],
  },
  channels: {
    dimensions: dims("sessionDefaultChannelGroup"),
    metrics: mets("sessions", "activeUsers", "engagedSessions", "engagementRate", "averageSessionDuration"),
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
  },
  source_medium: {
    dimensions: dims("sessionSourceMedium"),
    metrics: mets("sessions", "activeUsers", "engagedSessions", "engagementRate"),
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 50,
  },
  landing_pages: {
    dimensions: dims("landingPagePlusQueryString"),
    metrics: mets("sessions", "activeUsers", "engagedSessions", "engagementRate", "bounceRate"),
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 50,
  },
  pages: {
    dimensions: dims("pagePath"),
    metrics: mets("screenPageViews", "activeUsers", "userEngagementDuration"),
    orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    limit: 60,
  },
  events: {
    dimensions: dims("eventName"),
    metrics: mets("eventCount", "totalUsers"),
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 100,
  },
  country: {
    dimensions: dims("country"),
    metrics: mets("activeUsers", "sessions", "engagementRate"),
    orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
    limit: 40,
  },
  device: {
    dimensions: dims("deviceCategory"),
    metrics: mets("activeUsers", "sessions", "engagementRate"),
    orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
  },
  // Optional: per-reference funnel via a registered event-scoped custom
  // dimension named `reference`. If it isn't registered in GA4 Admin this
  // report errors out gracefully (Upstash counters cover the same join key).
  events_by_reference: {
    dimensions: dims("eventName", "customEvent:reference"),
    metrics: mets("eventCount", "totalUsers"),
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 200,
    optional: true,
  },
  handoff: {
    dimensions: dims("customEvent:kind", "customEvent:surface"),
    metrics: mets("eventCount", "totalUsers"),
    dimensionFilter: { filter: { fieldName: "eventName", stringFilter: { value: "act_handoff", matchType: "EXACT" } } },
    orderBys: [{ metric: { metricName: "totalUsers" }, desc: true }],
    limit: 50,
    optional: true,
  },
  taxonomy_versions: {
    dimensions: dims("customEvent:taxonomy_version"),
    metrics: mets("eventCount", "totalUsers"),
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 20,
    optional: true,
  },
  source_formats: {
    dimensions: dims("eventName", "customEvent:format", "customEvent:action"),
    metrics: mets("eventCount", "totalUsers"),
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        inListFilter: { values: ["bld_source_format_view", "bld_source_format_export"] },
      },
    },
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 50,
    optional: true,
  },
  collections: {
    dimensions: dims("eventName", "customEvent:collection", "customEvent:color_family", "customEvent:origin"),
    metrics: mets("eventCount", "totalUsers"),
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        inListFilter: { values: ["col_view", "col_open", "col_builder_click"] },
      },
    },
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 100,
    optional: true,
  },
  reference_shares: {
    dimensions: dims("customEvent:reference", "customEvent:location", "customEvent:artifact"),
    metrics: mets("eventCount", "totalUsers"),
    dimensionFilter: {
      filter: { fieldName: "eventName", stringFilter: { value: "ref_share_copy", matchType: "EXACT" } },
    },
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 100,
    optional: true,
  },
  wall_references: {
    dimensions: dims("customEvent:reference"),
    metrics: mets("eventCount", "totalUsers"),
    dimensionFilter: {
      filter: { fieldName: "eventName", stringFilter: { value: "wall_reference_open", matchType: "EXACT" } },
    },
    orderBys: [{ metric: { metricName: "totalUsers" }, desc: true }],
    limit: 400,
    optional: true,
  },
};

async function runReport(token, spec) {
  const body = {
    dateRanges: [dateRange],
    dimensions: spec.dimensions,
    metrics: spec.metrics,
    ...(spec.dimensionFilter ? { dimensionFilter: spec.dimensionFilter } : {}),
    ...(spec.orderBys ? { orderBys: spec.orderBys } : {}),
    ...(spec.limit ? { limit: spec.limit } : {}),
    keepEmptyRows: false,
  };
  const res = await fetch(API, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  const json = await res.json();
  const dimNames = (json.dimensionHeaders ?? []).map((h) => h.name);
  const metNames = (json.metricHeaders ?? []).map((h) => h.name);
  const rows = (json.rows ?? []).map((r) => {
    const o = {};
    r.dimensionValues.forEach((v, i) => (o[dimNames[i]] = v.value));
    r.metricValues.forEach((v, i) => (o[metNames[i]] = Number(v.value)));
    return o;
  });
  return { rowCount: json.rowCount ?? rows.length, rows };
}

const token = await getAccessToken(SCOPES);
const out = { _meta: { property: PROPERTY, days: DAYS, dateRange, completeDaysOnly: true, pulledAt: new Date().toISOString() } };
let requiredFailures = 0;
for (const [name, spec] of Object.entries(REPORTS)) {
  try {
    out[name] = await runReport(token, spec);
    console.log(`ga4:${name} → ${out[name].rows.length} rows`);
  } catch (e) {
    out[name] = { error: String(e.message || e) };
    console.error(`ga4:${name} FAILED${spec.optional ? " (optional)" : ""} — ${e.message || e}`);
    if (!spec.optional) requiredFailures++;
  }
}

const dir = path.join(repoRoot, "data", "analytics", "raw");
mkdirSync(dir, { recursive: true });
const file = path.join(dir, "ga4.json");
writeFileSync(file, JSON.stringify(out, null, 2));
console.log(`\nwrote ${path.relative(repoRoot, file)}`);
if (requiredFailures > 0) process.exitCode = 1;
