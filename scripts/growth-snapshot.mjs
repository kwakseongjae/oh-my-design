#!/usr/bin/env node
// scripts/growth-snapshot.mjs — appends one JSON line of growth metrics to
// research/sprint-metrics.jsonl (#7). Run morning/evening during sprints.
//
//   node scripts/growth-snapshot.mjs [--dau 150] [--notes "D1 baseline"]
//
// Fields:
//   date     — ISO timestamp of the snapshot
//   stars    — GitHub stargazers (api.github.com)
//   npm_day  — npm downloads, last-day point (api.npmjs.org)
//   dau      — GA4 1-day active users for oh-my-design.kr. TODO: automate via
//              the GA4 Data API once credentials exist; until then pass the
//              DebugView/Realtime reading manually with --dau.
//   notes    — freeform context (--notes)

import { appendFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outFile = path.join(repoRoot, 'research', 'sprint-metrics.jsonl');

const NPM_URL = 'https://api.npmjs.org/downloads/point/last-day/oh-my-design-cli';
const GH_URL = 'https://api.github.com/repos/kwakseongjae/oh-my-design';

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 ? process.argv[i + 1] : undefined;
}

async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': 'oh-my-design-growth-snapshot', ...headers } });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

const [npmRes, ghRes] = await Promise.allSettled([getJson(NPM_URL), getJson(GH_URL)]);

const npm_day = npmRes.status === 'fulfilled' ? (npmRes.value.downloads ?? null) : null;
const stars = ghRes.status === 'fulfilled' ? (ghRes.value.stargazers_count ?? null) : null;
for (const [label, r] of [['npm', npmRes], ['github', ghRes]]) {
  if (r.status === 'rejected') console.error(`warn: ${label} fetch failed — ${r.reason.message}`);
}

const dauArg = arg('dau');
const row = {
  date: new Date().toISOString(),
  stars,
  npm_day,
  // TODO(GA4): pull 1-day active users via the GA4 Data API (no creds yet) —
  // manual entry via --dau until then.
  dau: dauArg !== undefined ? Number(dauArg) : null,
  notes: arg('notes') ?? '',
};

mkdirSync(path.dirname(outFile), { recursive: true });
appendFileSync(outFile, JSON.stringify(row) + '\n', 'utf8');
console.log(`appended to ${path.relative(repoRoot, outFile)}:`);
console.log(JSON.stringify(row, null, 2));
