#!/usr/bin/env node
/**
 * apply-primary-tasks.mjs — `## Primary tasks` 섹션을 레퍼런스에 넣는다.
 *
 * 왜 (2026-09-17). `missing-primary-task`는 440개 **전부**를 막는 유일하게 균일한
 * 적합성 사유이고, 383개는 그것 말고 막는 게 없다. 그래프 스키마의
 * `experience.primary_tasks`와 렌더러는 이미 준비돼 있었고, 변환기가 읽을 원본만
 * 없었다 — `design-md-core.cjs`가 이제 이 섹션을 읽는다.
 *
 * 내용은 유도하지 않는다. `Personas`에서 기계적으로 뽑으려다 그만뒀다: 435개 중 볼드
 * 불릿이 244개뿐이고 `krds`는 가상 인물 서사, `baemin`은 이해관계자 집단,
 * `kakaobank`만 실제 task context다. 휴리스틱을 쓰면 "Jobseekers."가 primary task가 된다.
 * 그래서 문장은 **사람이 문서를 읽고 쓰고**, 이 스크립트는 넣기만 한다.
 *
 * 넣는 자리: 첫 `## ` 섹션 **뒤**. "이 제품이 어떻게 보이는가" 다음에 "여기서 무엇을
 * 하는가"가 오는 순서다. 위치는 변환기에 영향을 주지 않는다 — 어디 있든 experience로
 * 매핑된다 — 오직 사람이 읽는 순서를 위한 것이다.
 *
 * 멱등하다. 섹션이 이미 있으면 교체한다.
 *
 * usage:
 *   node scripts/apply-primary-tasks.mjs --from <tasks.json>            # dry-run
 *   node scripts/apply-primary-tasks.mjs --from <tasks.json> --write
 *
 *   tasks.json:  { "<id>": ["task one", "task two"], ... }
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFS = join(WEB, "references");
const argv = process.argv.slice(2);
const write = argv.includes("--write");
const fromIdx = argv.indexOf("--from");
if (fromIdx < 0) { console.error("usage: apply-primary-tasks.mjs --from <tasks.json> [--write]"); process.exit(2); }
const tasks = JSON.parse(readFileSync(argv[fromIdx + 1], "utf8"));

const HEADING = /^##\s*\d*\.?\s*(?:primary tasks?|user outcomes?)\b.*$/im;

let changed = 0, skipped = 0;
for (const [id, items] of Object.entries(tasks)) {
  const file = join(REFS, id, "DESIGN.md");
  if (!existsSync(file)) { console.log(`  ${id.padEnd(16)} 파일 없음`); skipped += 1; continue; }
  if (!Array.isArray(items) || items.length === 0) {
    console.log(`  ${id.padEnd(16)} 항목 없음 — 건너뜀 (문서가 행위를 기술하지 않는다는 결론도 결과다)`);
    skipped += 1; continue;
  }
  const raw = readFileSync(file, "utf8");
  const block = `## Primary tasks\n\n${items.map((t) => `- ${String(t).trim()}`).join("\n")}\n`;

  let next;
  if (HEADING.test(raw)) {
    // 기존 섹션을 통째로 교체 — 다음 `## `까지
    next = raw.replace(new RegExp(`${HEADING.source}[\\s\\S]*?(?=^##\\s)`, "im"), `${block}\n`);
  } else {
    // 첫 `## ` 섹션 뒤, 두 번째 `## ` 앞에 삽입
    const headings = [...raw.matchAll(/^##\s.+$/gm)];
    if (headings.length < 2) { console.log(`  ${id.padEnd(16)} ## 섹션이 2개 미만 — 안전하게 건너뜀`); skipped += 1; continue; }
    const at = headings[1].index;
    next = `${raw.slice(0, at)}${block}\n${raw.slice(at)}`;
  }
  if (next === raw) { console.log(`  ${id.padEnd(16)} 변화 없음`); skipped += 1; continue; }
  if (write) writeFileSync(file, next);
  console.log(`  ${id.padEnd(16)} ${items.length}개 항목  ${write ? "적용됨" : "(dry-run)"}`);
  changed += 1;
}
console.log(`\n${write ? "적용" : "dry-run"}: ${changed}건 · 건너뜀 ${skipped}건`);
if (!write) console.log("적용하려면 --write");
