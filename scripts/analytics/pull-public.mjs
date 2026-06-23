// Pull public, credential-free growth signals: npm daily downloads (last 90d +
// point stats) and GitHub repo stats. Writes data/analytics/raw/public.json.
//
//   node scripts/analytics/pull-public.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { repoRoot } from "./_env.mjs";

const PKG = "oh-my-design-cli";
const REPO = "kwakseongjae/oh-my-design";
const UA = { "User-Agent": "oh-my-design-analytics" };

async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers: { ...UA, ...headers } });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

// npm range API maxes at ~18 months but is reliable per-day for a quarter.
function isoDaysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
}

const out = { _meta: { pulledAt: new Date().toISOString() } };

try {
  const range = await getJson(`https://api.npmjs.org/downloads/range/${isoDaysAgo(90)}:${isoDaysAgo(0)}/${PKG}`);
  const daily = range.downloads ?? [];
  const total = daily.reduce((s, d) => s + d.downloads, 0);
  const nonzero = daily.filter((d) => d.downloads > 0);
  const sorted = [...daily].map((d) => d.downloads).sort((a, b) => a - b);
  const median = sorted.length ? sorted[Math.floor(sorted.length / 2)] : 0;
  const peak = daily.reduce((m, d) => (d.downloads > m.downloads ? d : m), { downloads: -1 });
  out.npm = {
    package: PKG,
    window: { start: range.start, end: range.end },
    total_90d: total,
    avg_per_day: +(total / (daily.length || 1)).toFixed(1),
    median_per_day: median,
    peak_day: peak,
    daily,
  };
  console.log(`npm → ${total} dl/90d, median ${median}/day, peak ${peak.downloads} on ${peak.day}`);
} catch (e) {
  out.npm = { error: String(e.message || e) };
  console.error(`npm FAILED — ${e.message || e}`);
}

try {
  const repo = await getJson(`https://api.github.com/repos/${REPO}`);
  out.github = {
    repo: REPO,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    open_issues: repo.open_issues_count,
    watchers: repo.subscribers_count,
    pushed_at: repo.pushed_at,
  };
  console.log(`github → ${repo.stargazers_count} stars, ${repo.forks_count} forks`);
} catch (e) {
  out.github = { error: String(e.message || e) };
  console.error(`github FAILED — ${e.message || e}`);
}

const dir = path.join(repoRoot, "data", "analytics", "raw");
mkdirSync(dir, { recursive: true });
const file = path.join(dir, "public.json");
writeFileSync(file, JSON.stringify(out, null, 2));
console.log(`\nwrote ${path.relative(repoRoot, file)}`);
