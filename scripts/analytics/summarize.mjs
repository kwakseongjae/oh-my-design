// Compact digest of data/analytics/raw/*.json — grounding for analysis. Prints
// the load-bearing numbers (funnel rates, top/bottom performers, anomalies) so a
// reader (human or agent) doesn't have to parse the full dumps.
//
//   node scripts/analytics/summarize.mjs
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { repoRoot } from "./_env.mjs";

const raw = path.join(repoRoot, "data", "analytics", "raw");
const load = (f) => (existsSync(path.join(raw, f)) ? JSON.parse(readFileSync(path.join(raw, f), "utf8")) : null);
const pct = (n, d) => (d ? ((100 * n) / d).toFixed(1) + "%" : "—");
const sum = (rows, k) => rows.reduce((s, r) => s + (r[k] || 0), 0);

const out = [];
const P = (s = "") => out.push(s);

// ── Upstash ───────────────────────────────────────────────────────────────
const up = load("upstash.json");
if (up?.counters) {
  P("════════ UPSTASH — per-reference product funnel ════════");
  const c = up.counters;
  const sel = c.select?.total ?? 0, gen = c.generate?.total ?? 0, dl = c.download?.total ?? 0, cp = c.copy?.total ?? 0;
  P(`AGGREGATE  select ${sel} → generate ${gen} (${pct(gen, sel)}) → download ${dl} (${pct(dl, gen)}) | copy ${cp} (${pct(cp, gen)})`);
  P(`distinct refs: select ${c.select?.distinct} / generate ${c.generate?.distinct} / download ${c.download?.distinct} / copy ${c.copy?.distinct}`);
  const f = up.funnel ?? [];
  P("\nTOP 15 by select (sel → sel2gen → gen2dl):");
  for (const r of f.slice(0, 15)) P(`  ${r.reference.padEnd(22)} sel ${String(r.select).padStart(5)}  gen ${String(r.generate).padStart(5)} (${r.sel2gen ?? "—"})  dl ${String(r.download).padStart(4)} (${r.gen2dl ?? "—"})`);
  // High intent, weak conversion: lots of selects but low sel→gen
  const meaningful = f.filter((r) => r.select >= 40);
  const weakConv = [...meaningful].sort((a, b) => (a.sel2gen ?? 1) - (b.sel2gen ?? 1)).slice(0, 10);
  P("\nWEAKEST select→generate (select≥40) — friction or mismatch:");
  for (const r of weakConv) P(`  ${r.reference.padEnd(22)} sel ${String(r.select).padStart(5)}  sel2gen ${r.sel2gen}`);
  const strongConv = [...meaningful].sort((a, b) => (b.sel2gen ?? 0) - (a.sel2gen ?? 0)).slice(0, 10);
  P("\nSTRONGEST select→generate (select≥40) — what works:");
  for (const r of strongConv) P(`  ${r.reference.padEnd(22)} sel ${String(r.select).padStart(5)}  sel2gen ${r.sel2gen}`);
  // Long tail / dead weight
  const zeroGen = f.filter((r) => r.select > 0 && r.generate === 0).length;
  const lowAll = f.filter((r) => r.select <= 5).length;
  P(`\nLONG TAIL: ${zeroGen} refs got selects but 0 generates; ${lowAll} refs have ≤5 selects (of ${f.length}).`);
}

// ── GA4 ─────────────────────────────────────────────────────────────────────
const ga = load("ga4.json");
if (ga) {
  P("\n\n════════ GA4 — acquisition + behavior (last " + (ga._meta?.days ?? "?") + "d) ════════");
  const tbl = (name, dim, met, n = 10) => {
    const r = ga[name];
    if (!r?.rows) { P(`[${name}] ${r?.error ? "ERROR" : "no data"}`); return; }
    P(`\n${name.toUpperCase()} (${r.rows.length} rows):`);
    for (const row of r.rows.slice(0, n)) P(`  ${String(row[dim]).slice(0, 32).padEnd(33)} ${met.map((m) => `${m}=${row[m]}`).join("  ")}`);
  };
  const du = ga.daily_users?.rows ?? [];
  if (du.length) {
    const au = du.map((d) => d.activeUsers);
    P(`DAU over ${du.length}d: min ${Math.min(...au)} / max ${Math.max(...au)} / avg ${(sum(du, "activeUsers") / du.length).toFixed(0)} | total newUsers ${sum(du, "newUsers")} sessions ${sum(du, "sessions")}`);
    const half = Math.floor(du.length / 2);
    const firstHalf = sum(du.slice(0, half), "activeUsers") / half;
    const secondHalf = sum(du.slice(half), "activeUsers") / (du.length - half);
    P(`  trend: first-half avg ${firstHalf.toFixed(0)} → second-half avg ${secondHalf.toFixed(0)} (${secondHalf > firstHalf ? "↑" : "↓"})`);
  }
  tbl("channels", "sessionDefaultChannelGroup", ["sessions", "activeUsers", "engagementRate"], 8);
  tbl("source_medium", "sessionSourceMedium", ["sessions", "engagementRate"], 12);
  tbl("landing_pages", "landingPagePlusQueryString", ["sessions", "engagementRate", "bounceRate"], 12);
  tbl("pages", "pagePath", ["screenPageViews", "activeUsers"], 12);
  tbl("events", "eventName", ["eventCount", "totalUsers"], 30);
  tbl("country", "country", ["activeUsers", "engagementRate"], 12);
  tbl("device", "deviceCategory", ["activeUsers", "engagementRate"], 5);
}

// ── GSC ─────────────────────────────────────────────────────────────────────
const gsc = load("gsc.json");
if (gsc) {
  P("\n\n════════ GSC — search demand (" + (gsc._meta?.startDate ?? "?") + " → " + (gsc._meta?.endDate ?? "?") + ") ════════");
  const q = gsc.queries?.rows ?? [];
  if (q.length) {
    P(`TOTAL: clicks ${sum(q, "clicks")} impressions ${sum(q, "impressions")} avgCTR ${(100 * sum(q, "clicks") / Math.max(1, sum(q, "impressions"))).toFixed(2)}%`);
    P("\nTOP 15 queries by clicks:");
    for (const r of [...q].sort((a, b) => b.clicks - a.clicks).slice(0, 15)) P(`  ${r.query.slice(0, 36).padEnd(37)} clk ${String(r.clicks).padStart(4)} imp ${String(r.impressions).padStart(6)} ctr ${(r.ctr * 100).toFixed(1)}% pos ${r.position.toFixed(1)}`);
    const opp = q.filter((r) => r.impressions >= 50 && r.ctr < 0.02).sort((a, b) => b.impressions - a.impressions).slice(0, 15);
    P("\nHIGH-IMPRESSION / LOW-CTR (imp≥50, ctr<2%) — SEO/snippet opportunity:");
    for (const r of opp) P(`  ${r.query.slice(0, 36).padEnd(37)} imp ${String(r.impressions).padStart(6)} ctr ${(r.ctr * 100).toFixed(1)}% pos ${r.position.toFixed(1)}`);
    const striking = q.filter((r) => r.position > 5 && r.position <= 20 && r.impressions >= 30).sort((a, b) => b.impressions - a.impressions).slice(0, 12);
    P("\nPAGE-2 STRIKING DISTANCE (pos 5–20, imp≥30) — push to page 1:");
    for (const r of striking) P(`  ${r.query.slice(0, 36).padEnd(37)} imp ${String(r.impressions).padStart(6)} pos ${r.position.toFixed(1)} ctr ${(r.ctr * 100).toFixed(1)}%`);
  }
  const pg = gsc.pages?.rows ?? [];
  if (pg.length) {
    P("\nTOP 12 pages by clicks:");
    for (const r of [...pg].sort((a, b) => b.clicks - a.clicks).slice(0, 12)) P(`  ${r.page.replace("https://oh-my-design.kr", "").slice(0, 40).padEnd(41)} clk ${String(r.clicks).padStart(4)} imp ${String(r.impressions).padStart(6)} ctr ${(r.ctr * 100).toFixed(1)}%`);
  }
  const ct = gsc.country?.rows ?? [];
  if (ct.length) { P("\nTOP countries by clicks:"); for (const r of [...ct].sort((a, b) => b.clicks - a.clicks).slice(0, 10)) P(`  ${r.country.padEnd(6)} clk ${String(r.clicks).padStart(4)} imp ${String(r.impressions).padStart(6)} ctr ${(r.ctr * 100).toFixed(1)}%`); }
  const dv = gsc.device?.rows ?? [];
  if (dv.length) { P("\nDevice:"); for (const r of dv) P(`  ${r.device.padEnd(8)} clk ${r.clicks} imp ${r.impressions} ctr ${(r.ctr * 100).toFixed(1)}%`); }
}

// ── public ───────────────────────────────────────────────────────────────────
const pub = load("public.json");
if (pub?.npm) {
  P("\n\n════════ PUBLIC — npm + GitHub ════════");
  const n = pub.npm;
  P(`npm ${n.total_90d} dl/90d | avg ${n.avg_per_day}/d median ${n.median_per_day}/d | peak ${n.peak_day.downloads} on ${n.peak_day.day}`);
  P(`github ${pub.github?.stars}★ ${pub.github?.forks} forks ${pub.github?.open_issues} open issues`);
}

console.log(out.join("\n"));
