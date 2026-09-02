/**
 * Scoring order — which lane each evaluator takes first, and in what order the
 * three anonymised artefacts appear inside each scoring session.
 *
 * RUBRIC.md §9 asks for independent per-lane sessions, lane order crossed
 * between evaluators, and a randomised display order. Those are three separate
 * things and only the first is obvious:
 *
 *   - Generation order (already in arm-order.json) decides which arm produced
 *     its run first. It says nothing about scoring.
 *   - Display order decides which artefact an evaluator reads first inside one
 *     session. Left alone it would inherit generation order, and first-read
 *     position is a known scoring bias.
 *   - Lane order decides whether an evaluator sees lane A or lane B first.
 *     Uncrossed, any lane-A/lane-B difference is confounded with fatigue.
 *
 * Every order is derived from a salted SHA-256 so the whole table regenerates
 * from the seed alone, and the display salt is deliberately different from the
 * generation salt — reusing it would make display order a copy of generation
 * order wearing another name.
 *
 *   node build-scoring-order.mjs
 */

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const COMPARISON = resolve(HERE, "..", "90-comparison");

const order = JSON.parse(readFileSync(join(COMPARISON, "arm-order.json"), "utf8"));
const config = JSON.parse(readFileSync(join(COMPARISON, "run-config.json"), "utf8"));
const EVALUATORS = config.evaluators.map((e) => e.id);
const CHUNKS = config.scoring?.chunking?.chunks ?? null;

/** The six permutations of three arms, in a fixed order so the mapping is stable. */
const ARMS = ["omd", "hallmark", "uiuxpromax"];
const PERMUTATIONS = [
  [0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0],
].map((p) => p.map((i) => ARMS[i]));

const firstByte = (s) => createHash("sha256").update(s).digest()[0];

/**
 * Lane order is crossed across evaluators by index rather than by hash: with
 * three evaluators, hashing could put all three on the same lane first and
 * leave the crossing undone.
 */
const laneOrderFor = (i) => (i % 2 === 0 ? ["A", "B"] : ["B", "A"]);

const sessions = [];
for (const [i, evaluator] of EVALUATORS.entries()) {
  const lanes = laneOrderFor(i);
  for (const lane of lanes) {
    const rows = order.rows.filter((r) => r.lane === lane).map((r) => {
      const salt = `${evaluator}|${lane}|${r.brand}|${r.rep}|display|${order.seed}`;
      return {
        brand: r.brand,
        rep: r.rep,
        displayOrder: PERMUTATIONS[firstByte(salt) % 6],
        salt,
      };
    });
    sessions.push({
      evaluator,
      chunks: CHUNKS,
      lane,
      lanePosition: lanes.indexOf(lane) + 1,
      // One session per (evaluator, lane, chunk) — 2026-09-01 판정 Q4로 치환됨.
      // 청크는 run-config.scoring.chunking의 사전 선언을 그대로 실어 실행 단위와
      // 선언이 어긋나지 않게 한다. Scores from different sessions are
      // never pooled across lanes — that is §1, enforced structurally by
      // lanes.mjs on the output side and by session boundaries here.
      runs: rows.length,
      rows,
    });
  }
}

const out = {
  seed: order.seed,
  // Stamped from the roster seal date rather than the clock. The table is a
  // function of (arm-order seed, evaluator roster) and nothing else, so a
  // rerun has to reproduce the file byte for byte — but when the roster is
  // resealed the stamp has to move with it, or the file dates itself to a
  // roster it no longer describes.
  generatedAt: config.resealedAt ?? config.pinnedAt,
  derivedFrom: "arm-order.json",
  method: {
    displayOrder: 'sha256("<evaluator>|<lane>|<brand>|<rep>|display|<seed>") 첫 바이트를 6개 순열에 매핑',
    laneOrder: "평가자 인덱스로 교차 배정 — 해시로 뽑으면 셋이 같은 레인부터 볼 수 있다",
    separateSalt: "생성 순서와 다른 salt. 같은 salt를 쓰면 표시 순서가 생성 순서의 사본이 된다",
    note: "표시 순서는 익명 산출물에 적용된다. 평가자는 어떤 arm이 어느 자리인지 모른다.",
  },
  evaluators: EVALUATORS,
  sessions,
};

writeFileSync(join(COMPARISON, "scoring-order.json"), `${JSON.stringify(out, null, 2)}\n`, "utf8");

// A quick shape report: a permutation that never appears, or an evaluator that
// always reads one arm first, would defeat the point.
const counts = {};
for (const s of sessions) for (const r of s.rows) {
  const k = r.displayOrder.join(">");
  counts[k] = (counts[k] ?? 0) + 1;
}
const firstArm = {};
for (const s of sessions) for (const r of s.rows) {
  firstArm[r.displayOrder[0]] = (firstArm[r.displayOrder[0]] ?? 0) + 1;
}
console.log(JSON.stringify({
  out: join(COMPARISON, "scoring-order.json"),
  sessions: sessions.length,
  runsPerSession: sessions[0]?.runs ?? 0,
  laneOrder: EVALUATORS.map((e, i) => `${e}:${laneOrderFor(i).join("→")}`),
  permutationUse: counts,
  firstReadArm: firstArm,
}, null, 1));
