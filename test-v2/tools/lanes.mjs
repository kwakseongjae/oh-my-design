/**
 * Lane scaffolding and the separation guard.
 *
 * RUBRIC.md §1 forbids adding lane A and lane B, averaging them, or calling one
 * lane's winner an overall winner. That is easy to write and easy to violate by
 * accident — one glob across an output tree and the two lanes are in the same
 * table.
 *
 * So the separation is structural rather than advisory. The two lanes get
 * disjoint trees, and `--check` fails if anything has crossed between them or
 * if a report has appeared that spans both.
 *
 *   node lanes.mjs --scaffold      # build the run tree from arm-order.json
 *   node lanes.mjs --check         # fail if the lanes have mixed
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const COMPARISON = resolve(HERE, "..", "90-comparison");
const RUNS = resolve(HERE, "..", "03-runs");
const ORDER = join(COMPARISON, "arm-order.json");

const LANE_DIR = { A: "lane-a", B: "lane-b" };
const flag = (name) => process.argv.includes(`--${name}`);

function scaffold() {
  const order = JSON.parse(readFileSync(ORDER, "utf8"));
  const made = [];
  for (const row of order.rows) {
    const laneDir = LANE_DIR[row.lane];
    if (!laneDir) throw new Error(`unknown lane ${row.lane}`);
    for (const arm of row.armOrder) {
      const dir = join(RUNS, laneDir, row.brand, arm, `rep-${row.rep}`);
      mkdirSync(dir, { recursive: true });
      const manifest = join(dir, "run.json");
      if (!existsSync(manifest)) {
        writeFileSync(manifest, `${JSON.stringify({
          lane: row.lane,
          brand: row.brand,
          arm,
          rep: row.rep,
          armOrder: row.armOrder,
          grokVariant: row.grokVariant,
          orderSeed: order.seed,
          // Filled at run time. Present as nulls so a run that forgot to record
          // one is visibly incomplete rather than silently absent.
          startedAt: null,
          endedAt: null,
          briefSha256: null,
          packSha256: null,
          model: null,
          snapshotId: null,
          outputs: { firstRender: null, image: null, systemDoc: null },
        }, null, 2)}\n`, "utf8");
        made.push(`${laneDir}/${row.brand}/${arm}/rep-${row.rep}`);
      }
    }
  }
  for (const laneDir of Object.values(LANE_DIR)) {
    const note = join(RUNS, laneDir, "README.md");
    if (!existsSync(note)) {
      writeFileSync(note, `# ${laneDir}\n\n이 트리의 점수는 이 레인 안에서만 순위·통과 판정에 쓴다.\n` +
        `다른 레인과 합산하거나 평균내지 않는다. "종합 우승"은 만들지 않는다 (RUBRIC.md §1).\n`, "utf8");
    }
  }
  return { created: made.length, tree: RUNS };
}

/** Everything under a lane must declare that lane, and nothing may span both. */
function check() {
  const problems = [];
  if (!existsSync(RUNS)) return { ok: false, problems: ["run tree not scaffolded"] };

  const laneOf = (p) => (p.includes(`/${LANE_DIR.A}/`) ? "A" : p.includes(`/${LANE_DIR.B}/`) ? "B" : null);
  const walk = (dir, out = []) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p, out);
      else out.push(p);
    }
    return out;
  };

  const files = walk(RUNS);
  for (const f of files) {
    const lane = laneOf(f);
    if (!lane) {
      // A file directly under the run root belongs to neither lane, which is
      // the shape a combined report would take.
      problems.push(`${f.replace(RUNS, "03-runs")} sits outside both lanes`);
      continue;
    }
    if (!f.endsWith("run.json")) continue;
    const run = JSON.parse(readFileSync(f, "utf8"));
    if (run.lane !== lane) problems.push(`${f.replace(RUNS, "03-runs")} declares lane ${run.lane} inside ${lane}`);
  }

  // A report naming both lanes is the thing §1 forbids, whatever it is called.
  for (const f of files.filter((p) => /\.(md|json|csv)$/.test(p))) {
    if (f.endsWith("run.json") || f.endsWith("README.md")) continue;
    const text = readFileSync(f, "utf8");
    if (/lane[-\s]?a/i.test(text) && /lane[-\s]?b/i.test(text)) {
      problems.push(`${f.replace(RUNS, "03-runs")} references both lanes`);
    }
  }

  return { ok: problems.length === 0, checked: files.length, problems };
}

if (flag("scaffold")) {
  console.log(JSON.stringify(scaffold(), null, 1));
} else if (flag("check")) {
  const r = check();
  console.log(JSON.stringify(r, null, 1));
  process.exit(r.ok ? 0 : 1);
} else {
  console.error("usage: lanes.mjs --scaffold | --check");
  process.exit(1);
}
