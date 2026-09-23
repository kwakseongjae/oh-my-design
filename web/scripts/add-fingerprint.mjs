#!/usr/bin/env node
/**
 * add-fingerprint.mjs — 레퍼런스 핑거프린트 하나를 3중 미러에 동시에 넣는다.
 *
 * `data/`, `.claude/data/`, `.codex/data/`의 reference-fingerprints.json은 같은 내용이어야
 * 한다. 손으로 셋을 고치면 한 곳이 빠진다. 같은 id가 있으면 교체, id 순 정렬, count 갱신.
 * (2026-09-23 스크래치패드에서 레포로 옮김 — assemble-reference.mjs와 같은 이유.)
 *
 * usage: node web/scripts/add-fingerprint.mjs <entry.json>   (레포 루트 기준 경로로 동작)
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const entry = JSON.parse(readFileSync(process.argv[2], "utf8"));
if (!entry.id) { console.error("entry needs an id"); process.exit(2); }

for (const rel of ["data", ".claude/data", ".codex/data"]) {
  const p = join(root, rel, "reference-fingerprints.json");
  const d = JSON.parse(readFileSync(p, "utf8"));
  d.items = [...d.items.filter((x) => x.id !== entry.id), entry].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  d.count = d.items.length;
  writeFileSync(p, JSON.stringify(d, null, 1) + "\n");
  console.log(`${rel}/reference-fingerprints.json ${d.count}`);
}
