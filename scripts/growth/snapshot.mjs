// Weekly growth snapshot: appends ONE JSON line to data/growth/metrics.jsonl.
//
// Usage
//   node scripts/growth/snapshot.mjs             collect and append one line
//   node scripts/growth/snapshot.mjs --dry-run   collect and print, write nothing
//
// Flags (used by CI)
//   --public-only   collect only already-public sources (github repo stats, npm, skills_sh);
//                   skip GitHub traffic and active users, and write no full record
//   --quiet         do not print the record to stdout (public repo => public Actions logs)
//   --strict        exit 3 after writing if any attempted source failed
// Env
//   GROWTH_METRICS_FILE  where the full record goes (default data/growth/metrics.jsonl).
//                        Full records hold private stats: local file or a PRIVATE repo only.
//   GROWTH_PUBLIC_FILE   also append the public projection (schema "public-1") here
//
// Run it at least once a week. GitHub keeps repo traffic (views, clones,
// referrers) for only 14 days and then discards it, so a gap longer than two
// weeks is unrecoverable. Each line stores the per-day buckets, so consecutive
// lines can be stitched by date (union the `daily` arrays, later line wins).
// The 14-day count/uniques totals overlap between weekly runs; do not sum them.
//
// Sources. Each fails independently: its field becomes null, an entry is added
// to `errors`, and the line is still appended. Exit code is non-zero only if the
// append itself fails (or, with --strict, exit 3 after writing when a source failed).
//   github          gh api repos/<repo>              stars, forks, watchers, open issues
//   github_traffic  gh api repos/<repo>/traffic/...  views, clones, popular referrers
//   npm             api.npmjs.org point stats        last-week, last-month
//   skills_sh       skills.sh repo page              per-skill installs + total (server-rendered)
//   active          scripts/analytics/pull-active.mjs   Upstash DAU / WAU / MAU (complete UTC days)
//
// Needs: gh CLI authenticated (GH_TOKEN env, or `gh auth login` locally). The traffic API
// needs a token with repository Administration: read — a fine-grained PAT; an Actions
// GITHUB_TOKEN cannot be granted that permission, so in CI repo stats work and traffic
// fails cleanly until the GH_TRAFFIC_TOKEN secret exists. Active needs
// OMD_KV_REST_API_URL + OMD_KV_REST_API_TOKEN in env or web/.env.local.
//
// CI: .github/workflows/growth-snapshot.yml runs this weekly. The public projection goes to
// this repo's public `growth-data` branch; the full record goes to a separate private repo
// only when METRICS_REPO + METRICS_REPO_TOKEN are configured, otherwise private sources are
// not collected at all.
// Side effect: pull-active.mjs refreshes the gitignored data/analytics/raw/active.json.
// Secrets are never written: error notes are scrubbed of URLs, tokens and env values.
//
// Field notes
//   github.watchers        = subscribers_count (real watchers). The API's watchers_count is a stars alias.
//   github.open_issues     includes open pull requests (GitHub counts both).
//   github_traffic.*       first_day/last_day show how far GitHub's data actually reaches; it can trail today.
//   active.dau_current_partial depends on what time of day you run; use dau_last_complete for trends.

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { env, repoRoot } from "../analytics/_env.mjs";

const execFileP = promisify(execFile);

const REPO = "kwakseongjae/oh-my-design";
const PKG = "oh-my-design-cli";
const SKILLS_URL = `https://skills.sh/${REPO}`;
const OUT_FILE = process.env.GROWTH_METRICS_FILE
  ? path.resolve(process.env.GROWTH_METRICS_FILE)
  : path.join(repoRoot, "data", "growth", "metrics.jsonl");
const UA = "oh-my-design-growth-snapshot/1";
const DRY_RUN = process.argv.includes("--dry-run");
const PUBLIC_ONLY = process.argv.includes("--public-only");
const QUIET = process.argv.includes("--quiet");
const STRICT = process.argv.includes("--strict");
const PUBLIC_FILE = process.env.GROWTH_PUBLIC_FILE ? path.resolve(process.env.GROWTH_PUBLIC_FILE) : null;

// ---------------------------------------------------------------- secret hygiene

const SECRETS = [
  "OMD_KV_REST_API_URL",
  "OMD_KV_REST_API_TOKEN",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
  "GH_TOKEN",
  "GITHUB_TOKEN",
]
  .map((k) => env(k))
  .filter((v) => typeof v === "string" && v.length >= 8);

/** Make an error message safe to store: no URLs, tokens, or configured secret values. */
function scrub(message) {
  let s = String(message ?? "");
  for (const v of SECRETS) s = s.split(v).join("<redacted>");
  return s
    .replace(/https?:\/\/\S+/g, "<url>")
    .replace(/\bBearer\s+\S+/gi, "Bearer <redacted>")
    .replace(/\bgh[opsu]_[A-Za-z0-9_]{16,}/g, "<redacted>")
    .replace(/[A-Za-z0-9_=-]{32,}/g, "<redacted>")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 240);
}

// ---------------------------------------------------------------- helpers

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const num = (v) => (typeof v === "number" && Number.isFinite(v) ? v : null);
const isClientError = (status) => status >= 400 && status < 500 && status !== 429;

class SourceError extends Error {
  constructor(message, { permanent = false } = {}) {
    super(message);
    this.permanent = permanent;
  }
}

/** One retry after a pause for transient failures; 4xx (except 429) is final. */
async function retry(fn, { tries = 2, delayMs = 1500 } = {}) {
  let last;
  for (let i = 0; i < tries; i++) {
    try {
      return await fn();
    } catch (e) {
      last = e;
      if (e?.permanent || i === tries - 1) break;
      await sleep(delayMs);
    }
  }
  throw last;
}

/** Most informative line of a child process's stderr (an Error line, else the first plain line). */
function firstUsefulLine(text) {
  const lines = String(text ?? "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  return (
    lines.find((l) => /^(\w*Error\b|Missing\b|gh:)/.test(l)) ??
    lines.find((l) => !l.startsWith("file:") && !l.startsWith("at ")) ??
    ""
  );
}

async function fetchText(url, { accept } = {}) {
  const host = new URL(url).host;
  let res;
  try {
    res = await fetch(url, {
      headers: { "User-Agent": UA, ...(accept ? { Accept: accept } : {}) },
      signal: AbortSignal.timeout(20_000),
    });
  } catch (e) {
    throw new SourceError(`network failure (${e?.cause?.code || e?.name || "error"}) fetching ${host}`);
  }
  if (!res.ok) throw new SourceError(`HTTP ${res.status} from ${host}`, { permanent: isClientError(res.status) });
  return res.text();
}

const fetchJson = async (url) => JSON.parse(await fetchText(url, { accept: "application/json" }));

/** `gh api <path>` (no shell), parsed as JSON. The gh CLI owns the credentials. */
async function gh(apiPath) {
  return retry(async () => {
    try {
      const { stdout } = await execFileP("gh", ["api", apiPath], {
        timeout: 30_000,
        maxBuffer: 8 * 1024 * 1024,
        env: { ...process.env, GH_PROMPT_DISABLED: "1", GH_NO_UPDATE_NOTIFIER: "1", NO_COLOR: "1" },
      });
      return JSON.parse(stdout);
    } catch (e) {
      if (e?.code === "ENOENT") throw new SourceError("gh CLI not found on PATH", { permanent: true });
      const stderr = String(e?.stderr ?? "");
      if (/gh auth login|not logged in/i.test(stderr) && !/HTTP \d{3}/.test(stderr)) {
        throw new SourceError("gh is not authenticated: set GH_TOKEN (CI) or run `gh auth login` (local)", { permanent: true });
      }
      const line = firstUsefulLine(stderr) || e?.message || "unknown error";
      const status = Number(/HTTP (\d{3})/.exec(line)?.[1] ?? 0);
      const hint = status === 403 && apiPath.includes("/traffic/")
        ? " (traffic needs a token with repository Administration: read; add the GH_TRAFFIC_TOKEN secret)"
        : "";
      throw new SourceError(`gh api ${apiPath.replace(REPO, "<repo>")}: ${line}${hint}`, { permanent: isClientError(status) });
    }
  });
}

// ---------------------------------------------------------------- sources

async function githubRepo() {
  const j = await gh(`repos/${REPO}`);
  if (num(j?.stargazers_count) === null) throw new SourceError("unexpected repo payload (no stargazers_count)");
  return {
    stars: j.stargazers_count,
    forks: num(j.forks_count),
    watchers: num(j.subscribers_count),
    open_issues: num(j.open_issues_count),
  };
}

/** kind: "views" | "clones". Totals cover GitHub's trailing 14 days; `daily` is what expires. */
async function githubTraffic(kind) {
  const j = await gh(`repos/${REPO}/traffic/${kind}`);
  if (num(j?.count) === null || num(j?.uniques) === null || !Array.isArray(j?.[kind])) {
    throw new SourceError(`unexpected ${kind} payload`);
  }
  const daily = j[kind].map((b) => ({ date: String(b.timestamp).slice(0, 10), count: b.count, uniques: b.uniques }));
  return {
    count: j.count,
    uniques: j.uniques,
    first_day: daily[0]?.date ?? null,
    last_day: daily.at(-1)?.date ?? null,
    daily,
  };
}

async function githubReferrers() {
  const j = await gh(`repos/${REPO}/traffic/popular/referrers`);
  if (!Array.isArray(j)) throw new SourceError("unexpected referrers payload");
  return j.map((r) => ({ referrer: r.referrer, count: r.count, uniques: r.uniques }));
}

async function npmPoint(period) {
  const j = await retry(() => fetchJson(`https://api.npmjs.org/downloads/point/${period}/${PKG}`));
  if (num(j?.downloads) === null) throw new SourceError(`unexpected npm payload: ${scrub(j?.error ?? "no downloads field")}`);
  return { downloads: j.downloads, start: j.start, end: j.end };
}

const ENTITIES = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#x27;": "'" };
const decode = (s) => s.replace(/&(amp|lt|gt|quot|#39|#x27);/g, (m) => ENTITIES[m]);
const stripTags = (s) => decode(s.replace(/<[^>]+>/g, "")).trim();

/** "18" or "1,234" is exact; "1.2K" / "3M" is abbreviated and flagged approximate. */
function parseCount(text) {
  const t = String(text).replace(/[,\s]/g, "");
  if (/^\d+$/.test(t)) return { value: Number(t), approx: false };
  const m = /^(\d+(?:\.\d+)?)([KkMm])$/.exec(t);
  if (m) return { value: Math.round(Number(m[1]) * (m[2].toLowerCase() === "k" ? 1e3 : 1e6)), approx: true };
  return null;
}

/**
 * skills.sh renders the table server-side. Row markup:
 *   <a href="/<owner>/<repo>/<skill>"> ... <h3>name</h3> ... <span class="font-mono ...">N</span></a>
 * Header markup: `401<!-- --> total installs`, `40<!-- --> <!-- -->skills`.
 */
async function skillsSh() {
  const html = await retry(() => fetchText(SKILLS_URL, { accept: "text/html" }));
  const clean = html.replace(/<!--[\s\S]*?-->/g, "");

  const rowRe = new RegExp(`<a\\b[^>]*\\bhref="/${REPO}/[^"]+"[^>]*>([\\s\\S]*?)</a>`, "g");
  const skills = {};
  let rows = 0;
  let sum = 0;
  let approx = false;
  for (const m of clean.matchAll(rowRe)) {
    const name = /<h3\b[^>]*>([\s\S]*?)<\/h3>/.exec(m[1]);
    const spans = [...m[1].matchAll(/<span\b[^>]*>([\s\S]*?)<\/span>/g)];
    const count = spans.length ? parseCount(stripTags(spans[spans.length - 1][1])) : null;
    if (!name || !count) continue;
    skills[stripTags(name[1])] = count.value;
    rows += 1;
    sum += count.value;
    approx ||= count.approx;
  }
  if (rows === 0) {
    throw new SourceError("no install rows found in skills.sh markup (row markup changed, or counts now render client-side)");
  }

  const text = clean
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");
  const totalMatch = /(\d[\d,.]*[KkMm]?)\s+total installs?/i.exec(text);
  const countMatch = /(\d[\d,]*)\s+skills\b/i.exec(text);
  const headerTotal = totalMatch ? parseCount(totalMatch[1]) : null;
  const headerSkills = countMatch ? Number(countMatch[1].replace(/,/g, "")) : null;

  const problems = [];
  if (!headerTotal) problems.push("header total not found");
  else if (headerTotal.value !== sum) problems.push(`header says ${headerTotal.value} total installs, rows sum to ${sum}`);
  if (headerSkills !== null && headerSkills !== rows) problems.push(`header says ${headerSkills} skills, parsed ${rows} rows`);

  return {
    url: SKILLS_URL,
    total_installs: headerTotal ? headerTotal.value : sum,
    skill_count: rows,
    sum_of_skills: sum,
    ...(approx || headerTotal?.approx ? { approximate: true } : {}),
    check: problems.length ? `mismatch: ${problems.join("; ")}` : "ok",
    skills,
  };
}

/**
 * Reuse scripts/analytics/pull-active.mjs as-is (it has top-level side effects, so it is run,
 * not imported) and read the file it writes. A non-fresh file is rejected so a failed pull can
 * never be recorded as a current reading.
 */
async function pullActive() {
  const script = path.join(repoRoot, "scripts", "analytics", "pull-active.mjs");
  const outFile = path.join(repoRoot, "data", "analytics", "raw", "active.json");
  const startedAt = Date.now();
  try {
    await execFileP(process.execPath, [script], { cwd: repoRoot, timeout: 120_000, maxBuffer: 4 * 1024 * 1024 });
  } catch (e) {
    throw new SourceError(`pull-active.mjs failed: ${firstUsefulLine(e?.stderr) || e?.message || "unknown error"}`);
  }
  const j = JSON.parse(readFileSync(outFile, "utf8"));
  const pulledAt = Date.parse(j?._meta?.pulledAt);
  if (!(pulledAt >= startedAt - 2000)) {
    throw new SourceError("pull-active.mjs exited 0 but active.json was not refreshed (stale file ignored)");
  }
  if (num(j.wau_rolling7) === null || num(j.mau_rolling30) === null) {
    throw new SourceError("unexpected active.json shape (no wau_rolling7 / mau_rolling30)");
  }
  const series = Array.isArray(j.series) ? j.series : []; // oldest -> newest, complete UTC days
  const live = series.filter((d) => d.dau > 0);
  return {
    last_complete_day: j.last_complete_day,
    dau_last_complete: j.dau_last_complete ?? j.dau,
    wau_rolling7: j.wau_rolling7,
    mau_rolling30: j.mau_rolling30,
    current_partial_day: j.current_partial_day,
    dau_current_partial: j.dau_current_partial,
    dau_by_device: j.dau_by_device,
    wau7_by_device: j.wau7_by_device,
    latest_active_day: live.at(-1)?.day ?? null,
    dau_by_day_last7: Object.fromEntries(series.slice(-7).map((d) => [d.day, d.dau])),
  };
}

// ---------------------------------------------------------------- run

// Public sources are readable by anyone already (repo page, npm, skills.sh). Private sources
// (GitHub traffic is admin-only; active users come from our own counter) must never reach a
// public place: not the public growth-data branch, not a public Actions log, not an artifact.
const PUBLIC_SOURCES = new Set(["github", "npm.last_week", "npm.last_month", "skills_sh"]);

const sources = {
  github: githubRepo,
  "github_traffic.views": () => githubTraffic("views"),
  "github_traffic.clones": () => githubTraffic("clones"),
  "github_traffic.referrers": githubReferrers,
  "npm.last_week": () => npmPoint("last-week"),
  "npm.last_month": () => npmPoint("last-month"),
  skills_sh: skillsSh,
  active: pullActive,
};

const active = PUBLIC_ONLY
  ? Object.fromEntries(Object.entries(sources).filter(([name]) => PUBLIC_SOURCES.has(name)))
  : sources;

const errors = {};
const results = Object.fromEntries(
  await Promise.all(
    Object.entries(active).map(async ([name, fn]) => {
      try {
        return [name, await fn()];
      } catch (e) {
        errors[name] = scrub(e?.message ?? e);
        return [name, null];
      }
    }),
  ),
);

const sortedErrors = (keep) =>
  Object.fromEntries(Object.entries(errors).filter(([k]) => keep(k)).sort(([a], [b]) => a.localeCompare(b)));

const timestamp = new Date().toISOString();
const npm = { package: PKG, last_week: results["npm.last_week"] ?? null, last_month: results["npm.last_month"] ?? null };

/** Full record (schema 1): private sources included. Only for a local file or a private repo. */
const record = {
  timestamp,
  schema: 1,
  github: results.github ?? null,
  github_traffic: {
    views: results["github_traffic.views"] ?? null,
    clones: results["github_traffic.clones"] ?? null,
    referrers: results["github_traffic.referrers"] ?? null,
  },
  npm,
  skills_sh: results.skills_sh ?? null,
  active: results.active ?? null,
  errors: sortedErrors(() => true),
};

/** Public projection: already-public sources only. Safe for the public growth-data branch. */
const publicRecord = {
  timestamp,
  schema: "public-1",
  github: results.github ?? null,
  npm,
  skills_sh: results.skills_sh ?? null,
  errors: sortedErrors((k) => PUBLIC_SOURCES.has(k)),
};

const line = JSON.stringify(record);
const publicLine = JSON.stringify(publicRecord);

// Last line of defence: never write a record that contains a configured secret value.
if (SECRETS.some((v) => line.includes(v) || publicLine.includes(v))) {
  console.error("refusing to write: a secret value appeared in the record");
  process.exit(1);
}

for (const name of Object.keys(sources)) {
  if (!(name in active)) console.error(`  skip ${name} (private source, --public-only)`);
  else console.error(errors[name] ? `  FAIL ${name}: ${errors[name]}` : `  ok   ${name}`);
}

/** Append one line, keeping one record per line even if the file lost its trailing newline. */
function appendLine(file, text) {
  const shown = path.relative(repoRoot, file);
  try {
    mkdirSync(path.dirname(file), { recursive: true });
    const needsNewline = existsSync(file) && (() => {
      const buf = readFileSync(file);
      return buf.length > 0 && buf[buf.length - 1] !== 0x0a;
    })();
    appendFileSync(file, (needsNewline ? "\n" : "") + text + "\n");
    console.error(`appended 1 line to ${shown}`);
  } catch (e) {
    console.error(`FAILED to write ${shown}: ${scrub(e?.message ?? e)}`);
    process.exit(1);
  }
}

// Targets. The full record goes to OUT_FILE unless --public-only (a full record with private
// sources skipped would only be a degraded duplicate). The public projection goes to
// GROWTH_PUBLIC_FILE when set.
const targets = [];
if (!PUBLIC_ONLY) targets.push([OUT_FILE, line]);
if (PUBLIC_FILE) targets.push([PUBLIC_FILE, publicLine]);

if (DRY_RUN) {
  console.error(`dry run: nothing written (would append to ${targets.map(([f]) => path.relative(repoRoot, f)).join(", ") || "nothing"})`);
} else {
  for (const [file, text] of targets) appendLine(file, text);
}

// --quiet keeps the record out of stdout. CI uses it: Actions logs on a public repo are public.
if (!QUIET) console.log(PUBLIC_ONLY ? publicLine : line);

// --strict: exit 3 when any attempted source failed, AFTER writing, so partial results are kept.
if (STRICT && Object.keys(errors).length > 0) {
  console.error(`strict: ${Object.keys(errors).length} source(s) failed`);
  process.exit(3);
}
