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

const arg = (n, d) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : d;
};
const DAYS = Number(arg("days", env("ANALYTICS_DAYS", "28")));
const PROPERTY = requireEnv("GA4_PROPERTY_ID").replace(/^properties\//, "");
const SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"];
const API = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY}:runReport`;

const dateRange = { startDate: `${DAYS}daysAgo`, endDate: "today" };
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
};

async function runReport(token, spec) {
  const body = {
    dateRanges: [dateRange],
    dimensions: spec.dimensions,
    metrics: spec.metrics,
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
const out = { _meta: { property: PROPERTY, days: DAYS, pulledAt: new Date().toISOString() } };
for (const [name, spec] of Object.entries(REPORTS)) {
  try {
    out[name] = await runReport(token, spec);
    console.log(`ga4:${name} → ${out[name].rows.length} rows`);
  } catch (e) {
    out[name] = { error: String(e.message || e) };
    console.error(`ga4:${name} FAILED${spec.optional ? " (optional)" : ""} — ${e.message || e}`);
  }
}

const dir = path.join(repoRoot, "data", "analytics", "raw");
mkdirSync(dir, { recursive: true });
const file = path.join(dir, "ga4.json");
writeFileSync(file, JSON.stringify(out, null, 2));
console.log(`\nwrote ${path.relative(repoRoot, file)}`);
