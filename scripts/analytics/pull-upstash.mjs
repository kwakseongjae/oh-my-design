// Pull the per-reference popularity counters from Upstash Redis via the REST
// API. Five sorted sets (omd:counter:{select,generate,download,copy,install}) hold
// `reference → count`. Writes data/analytics/raw/upstash.json with full
// leaderboards plus a derived select→generate→download→copy funnel per reference.
//
//   node scripts/analytics/pull-upstash.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { env, repoRoot } from "./_env.mjs";

const URL_ = env("OMD_KV_REST_API_URL") ?? env("UPSTASH_REDIS_REST_URL");
const TOKEN = env("OMD_KV_REST_API_TOKEN") ?? env("UPSTASH_REDIS_REST_TOKEN");
if (!URL_ || !TOKEN) {
  console.error("Missing Upstash creds: set OMD_KV_REST_API_URL + OMD_KV_REST_API_TOKEN in web/.env.local");
  process.exit(1);
}

const EVENTS = ["select", "generate", "download", "copy", "install"];

async function cmd(args) {
  const res = await fetch(URL_, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(args),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  const json = await res.json();
  if (json.error) throw new Error(json.error);
  return json.result;
}

// ZRANGE key 0 -1 REV WITHSCORES → [member, score, member, score, ...]
function toBoard(flat) {
  const board = [];
  for (let i = 0; i < flat.length; i += 2) board.push({ reference: String(flat[i]), count: Number(flat[i + 1]) });
  return board;
}

const out = { _meta: { pulledAt: new Date().toISOString() }, counters: {}, funnel: [] };
const byRef = new Map(); // reference -> {select,generate,download,copy,install}
let failures = 0;

for (const ev of EVENTS) {
  try {
    const flat = await cmd(["ZRANGE", `omd:counter:${ev}`, "0", "-1", "REV", "WITHSCORES"]);
    const board = toBoard(flat ?? []);
    out.counters[ev] = { total: board.reduce((s, r) => s + r.count, 0), distinct: board.length, board };
    for (const { reference, count } of board) {
      const row = byRef.get(reference) ?? { reference, select: 0, generate: 0, download: 0, copy: 0, install: 0 };
      row[ev] = count;
      byRef.set(reference, row);
    }
    console.log(`upstash:${ev} → ${board.length} refs, ${out.counters[ev].total} total`);
  } catch (e) {
    out.counters[ev] = { error: String(e.message || e) };
    console.error(`upstash:${ev} FAILED — ${e.message || e}`);
    failures++;
  }
}

// Derived funnel — conversion ratios per reference (sorted by select volume).
out.funnel = [...byRef.values()]
  .map((r) => ({
    ...r,
    sel2gen: r.select ? +(r.generate / r.select).toFixed(3) : null,
    gen2dl: r.generate ? +(r.download / r.generate).toFixed(3) : null,
    gen2install: r.generate ? +(r.install / r.generate).toFixed(3) : null,
  }))
  .sort((a, b) => b.select - a.select);

const dir = path.join(repoRoot, "data", "analytics", "raw");
mkdirSync(dir, { recursive: true });
const file = path.join(dir, "upstash.json");
writeFileSync(file, JSON.stringify(out, null, 2));
console.log(`\nwrote ${path.relative(repoRoot, file)} (${out.funnel.length} refs in funnel)`);
if (failures > 0) process.exitCode = 1;
