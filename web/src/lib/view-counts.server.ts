/**
 * Per-reference page views for the archive's recommended order (owner request,
 * 2026-11-01: "추천순 = 조회수순, 기본값", read straight from GA4). The numbers are
 * GA4 `screenPageViews` of the item pages (/design-systems/<id> and
 * /ko/design-systems/<id>, summed) over the last 30 complete days.
 *
 * Server only. The archive pages are static with ISR (`revalidate = 3600`), so
 * GA4 is asked at most once an hour per deployment, inside `unstable_cache`
 * (install-counts.server.ts explains why a no-store fetch belongs there). The
 * service account signs its own JWT with node:crypto, as
 * scripts/analytics/_google-auth.mjs does; it needs only `analytics.readonly`
 * and Viewer on the property.
 *
 * Credentials: `GOOGLE_SA_KEY_JSON` (the service-account JSON) and optionally
 * `GA4_PROPERTY_ID`. Unknown means absent: without the key (local and CI builds)
 * or on any error or timeout the map is empty and the archive keeps its previous
 * order. A failed read is not cached, so the next revalidation asks again. A view
 * count is never estimated.
 */

import crypto from "node:crypto";
import { unstable_cache } from "next/cache";

/** The property `G-5XCHN3NJXC` reports into (scripts/analytics/RESTORE-2026-10.md). */
const DEFAULT_PROPERTY = "533041908";
const DAYS = 30;
const TIMEOUT_MS = 8000;
const SCOPE = "https://www.googleapis.com/auth/analytics.readonly";

/** Item pages only; `/ja` and `/zh-tw` have no item routes, `/evolution` is not the item page. */
export const ITEM_PATH_RE = /^\/(?:ko\/)?design-systems\/([a-z0-9.-]{1,40})\/?$/;

export interface PageViewRow {
  pagePath: string;
  screenPageViews: number;
}

/** Sum GA4 rows per reference id across locales; query strings and trailing slashes are ignored. */
export function viewsById(rows: readonly PageViewRow[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const row of rows) {
    const m = ITEM_PATH_RE.exec(String(row.pagePath ?? "").split(/[?#]/)[0]);
    const n = Number(row.screenPageViews);
    if (!m || !Number.isFinite(n) || n <= 0) continue;
    out[m[1]] = (out[m[1]] ?? 0) + Math.round(n);
  }
  return out;
}

interface ServiceAccount {
  client_email: string;
  private_key: string;
  token_uri?: string;
}

function serviceAccount(): ServiceAccount | null {
  const raw = process.env.GOOGLE_SA_KEY_JSON;
  if (!raw) return null;
  const sa = JSON.parse(raw) as Partial<ServiceAccount>;
  return sa.client_email && sa.private_key ? (sa as ServiceAccount) : null;
}

const b64url = (s: string | Buffer) => Buffer.from(s).toString("base64url");

async function accessToken(sa: ServiceAccount, signal: AbortSignal): Promise<string> {
  const aud = sa.token_uri || "https://oauth2.googleapis.com/token";
  const now = Math.floor(Date.now() / 1000);
  const input = `${b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))}.${b64url(
    JSON.stringify({ iss: sa.client_email, scope: SCOPE, aud, iat: now, exp: now + 3600 }),
  )}`;
  const signature = crypto.createSign("RSA-SHA256").update(input).sign(sa.private_key);
  const res = await fetch(aud, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${input}.${b64url(signature)}` }),
    cache: "no-store",
    signal,
  });
  if (!res.ok) throw new Error(`GA4 token ${res.status}`);
  return ((await res.json()) as { access_token: string }).access_token;
}

/** pagePath × screenPageViews for every path containing `design-systems/`, all pages of the report. */
export async function fetchPageViews(
  token: string,
  property: string,
  signal?: AbortSignal,
  fetchImpl: typeof fetch = fetch,
): Promise<PageViewRow[]> {
  const rows: PageViewRow[] = [];
  for (let offset = 0; ; offset += 10000) {
    const res = await fetchImpl(`https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        dateRanges: [{ startDate: `${DAYS}daysAgo`, endDate: "yesterday" }],
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "screenPageViews" }],
        dimensionFilter: { filter: { fieldName: "pagePath", stringFilter: { matchType: "PARTIAL_REGEXP", value: "design-systems/" } } },
        limit: 10000,
        offset,
        keepEmptyRows: false,
      }),
      cache: "no-store",
      signal,
    });
    if (!res.ok) throw new Error(`GA4 runReport ${res.status}`);
    const json = (await res.json()) as {
      rowCount?: number;
      rows?: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }[];
    };
    for (const r of json.rows ?? []) rows.push({ pagePath: r.dimensionValues[0].value, screenPageViews: Number(r.metricValues[0].value) });
    if (offset + 10000 >= (json.rowCount ?? 0)) return rows;
  }
}

/** Throws on failure so `unstable_cache` does not keep an empty answer for an hour. */
async function readFromGa4(): Promise<Record<string, number>> {
  const sa = serviceAccount();
  if (!sa) return {};
  const property = (process.env.GA4_PROPERTY_ID || DEFAULT_PROPERTY).replace(/^properties\//, "");
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    return viewsById(await fetchPageViews(await accessToken(sa, ctrl.signal), property, ctrl.signal));
  } finally {
    clearTimeout(timer);
  }
}

const cached = unstable_cache(readFromGa4, ["omd-ga4-views-30d-v1"], { revalidate: 3600 });

/** 30-day page views by reference id, cached for an hour. Empty without credentials or on error. */
export async function getViewCounts(): Promise<Record<string, number>> {
  try {
    return await cached();
  } catch {
    return {};
  }
}
