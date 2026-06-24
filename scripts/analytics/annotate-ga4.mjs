// Add a GA4 reporting-data annotation (cutover marker). Admin API v1alpha.
// Requires the SA at Editor + analytics.edit scope.
//
//   node scripts/analytics/annotate-ga4.mjs --date 2026-06-23 \
//        --title "Funnel taxonomy reset" --desc "..."
import { getAccessToken } from "./_google-auth.mjs";
import { requireEnv } from "./_env.mjs";

const arg = (n, d) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : d;
};
const date = arg("date"); // YYYY-MM-DD
const title = arg("title", "Funnel taxonomy reset");
const desc = arg("desc", "bld_*/ds_*/act_* taxonomy; curation removed; customize demoted; install counter split.");
if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error("Pass --date YYYY-MM-DD");
  process.exit(1);
}
const [year, month, day] = date.split("-").map(Number);

const PROPERTY = requireEnv("GA4_PROPERTY_ID").replace(/^properties\//, "");
const token = await getAccessToken(["https://www.googleapis.com/auth/analytics.edit"]);
const url = `https://analyticsadmin.googleapis.com/v1alpha/properties/${PROPERTY}/reportingDataAnnotations`;

// Idempotency: skip if an annotation with the same title+date already exists.
const listRes = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
const listJson = await listRes.json().catch(() => ({}));
if (!listRes.ok) {
  console.error(`✗ Cannot list annotations (HTTP ${listRes.status}): ${JSON.stringify(listJson?.error?.message || listJson)}`);
  console.error("  → reportingDataAnnotations is Admin API v1alpha; ensure the Admin API is enabled + SA is Editor.");
  process.exit(1);
}
const dup = (listJson.reportingDataAnnotations || []).find(
  (a) => a.title === title && a.annotationDate && a.annotationDate.year === year && a.annotationDate.month === month && a.annotationDate.day === day,
);
if (dup) {
  console.log(`= annotation already exists (${dup.name}) — "${title}" on ${date}`);
  process.exit(0);
}

const body = {
  title: title.slice(0, 50),
  description: desc.slice(0, 150),
  annotationDate: { year, month, day },
  color: "BLUE",
};
const res = await fetch(url, {
  method: "POST",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify(body),
});
const json = await res.json().catch(() => ({}));
if (res.ok) console.log(`+ annotation "${title}" on ${date} → ${json.name}`);
else { console.error(`✗ create failed (HTTP ${res.status}): ${JSON.stringify(json?.error?.message || json)}`); process.exit(1); }
