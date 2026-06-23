// Curation quiz funnel by date — is it ramping or dead? Writes nothing; prints.
import { getAccessToken } from "./_google-auth.mjs";
import { requireEnv, env } from "./_env.mjs";

const DAYS = Number(env("ANALYTICS_DAYS", "28"));
const PROPERTY = requireEnv("GA4_PROPERTY_ID").replace(/^properties\//, "");
const API = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY}:runReport`;
const token = await getAccessToken(["https://www.googleapis.com/auth/analytics.readonly"]);

const events = ["curation_start", "curation_complete", "curation_match_pick", "curation_cta_primary", "curation_share", "shared_view", "shared_view_cta_click"];
const res = await fetch(API, {
  method: "POST",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    dateRanges: [{ startDate: `${DAYS}daysAgo`, endDate: "today" }],
    dimensions: [{ name: "date" }, { name: "eventName" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: { filter: { fieldName: "eventName", inListFilter: { values: events } } },
    orderBys: [{ dimension: { dimensionName: "date" } }],
    limit: 1000,
  }),
});
const json = await res.json();
const rows = (json.rows ?? []).map((r) => ({ date: r.dimensionValues[0].value, ev: r.dimensionValues[1].value, c: Number(r.metricValues[0].value) }));
const days = [...new Set(rows.map((r) => r.date))].sort();
const get = (d, e) => rows.filter((r) => r.date === d && r.ev === e).reduce((s, r) => s + r.c, 0);
console.log("date     " + events.map((e) => e.replace("curation_", "c_").replace("shared_view", "sv").slice(0, 8).padStart(9)).join(""));
for (const d of days) console.log(d.slice(4) + "   " + events.map((e) => String(get(d, e)).padStart(9)).join(""));
const tot = (e) => rows.filter((r) => r.ev === e).reduce((s, r) => s + r.c, 0);
console.log("\nTOTALS: " + events.map((e) => `${e}=${tot(e)}`).join("  "));
