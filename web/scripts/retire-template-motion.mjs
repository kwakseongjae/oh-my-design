#!/usr/bin/env node
/**
 * retire-template-motion.mjs — 근거 없는 모션 **값 표**만 걷어내고 관측 산문은 남긴다.
 *
 * 왜 (2026-09-17). 캡쳐 하네스는 모션 속성을 하나도 수집하지 않는데
 * (번들 `elements[].style`에 transition/animation 키가 없다) 273개 레퍼런스가
 * `motion-fast 120ms` 류의 5단 스케일을 싣고 있다. 표준 곡선을 빼고도 비표준
 * `cubic-bezier(0.2, 0.6, 0.25, 1)` 하나가 167개 브랜드에 동일하다. 관측이 아니라 템플릿이다.
 *
 * Tier-1 대조(2026-09-17): 공식 디자인시스템 URL을 가진 18개를 확인했고, **그 5단 스케일을
 * 발행하는 곳은 찾지 못했다.** 가장 성숙한 후보인 Adobe Spectrum은 공식 design-data
 * 저장소에서 애니메이션을 *정성적으로만* 기술한다("fades in and out … duration, easing,
 * offset are the same") — 구체 값이 없다. GOV.UK·DADS·socar도 없었다. 실제 값이 있는
 * 경우는 컴포넌트 하나짜리 일회성이다(smarthr `Switch`가 Tailwind `duration-150 ease-out`).
 * 5단 스케일과는 다른 모양이다.
 *
 * 입증 책임은 검사자가 아니라 주장에 있다. 12개 중 4개는 확인하지 못했지만, 출처 없는 값이
 * 사실로 실려서는 안 된다는 결론은 그 4개에도 똑같이 적용된다.
 *
 * **자르는 것**: 값이 이 문서 안 어디에도 근거가 없는 `| Token | … |` 표.
 * **남기는 것**: 표 밖 산문 전부. 자동재생·reduced-motion 토글·"바운스 금지" 같은 서술은
 *   실제로 관측한 것이고, 7월 배치는 정확히 "정리하다가 관측을 잃는" 방식으로 실패했다.
 * **근거 있는 행은 남긴다**: 값이 토큰이나 `.verification.md`에 있으면 그 행만 보존한다.
 *
 * usage:
 *   node scripts/retire-template-motion.mjs --dry-run [<id> ...]
 *   node scripts/retire-template-motion.mjs --apply [<id> ...]
 */
import { existsSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { isCoreV2Markdown } from "./lib/reference-source.mjs";
import yaml from "js-yaml";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFS = join(WEB, "references");
const MOTION_HEADING = /^##\s*\d*\.?\s*Motion/i;
const VALUE = /\b\d{2,4}\s?ms\b|cubic-bezier\([^)]*\)/g;
const QUARANTINED = /synthetic|not verified product facts|superseded/i;

/**
 * 표를 지운 뒤에도 산문이 토큰 **이름**을 인용하면 그 이름은 정의를 잃는다.
 *
 * 처음 쓴 정규식은 /`(?:motion|ease|duration)-[a-z0-9-]+`/ 였고 **틀렸다.** 백틱 하나에
 * 이름 둘이 슬래시로 묶인 가장 흔한 형태 — `motion-standard / ease-enter` — 를 놓친다.
 * 이름 뒤에 바로 백틱이 와야 매칭되기 때문이다. 그 결과 2026-09-17 1차 실행에서 130개 중
 * **100개가 막혀야 했는데 통과했고** 되돌렸다. 백틱 구간 전체를 보고 그 안에 토큰 이름이
 * 있는지 묻는다.
 */
const ORPHAN_TOKEN_NAME = /`[^`]*\b(?:motion|ease|duration)-[a-z0-9-]+[^`]*`/gi;

/** 지워진 표를 위치로 가리키는 문장. 토큰/곡선/시간 이야기일 때만 센다. */
const POSITIONAL_REFERENCE = /[^.!?\n]*\b(?:above|in the table|listed here|preceding)\b[^.!?\n]*\b(?:token|curve|duration|easing|timing|scale)\b[^.!?\n]*[.!?]|[^.!?\n]*\b(?:token|curve|duration|easing|timing|scale)\b[^.!?\n]*\b(?:above|in the table|listed here|preceding)\b[^.!?\n]*[.!?]/gi;

const ABSENCE = `**No motion duration or easing token is promoted.** The capture bundle for this
reference records no transition or animation property, and no official source consulted
publishes a motion scale. The behaviour described below was observed; treat any exact
duration or curve as a local extension until a component-level official source verifies it.`;

/** 연속된 `|` 줄 = 하나의 표. 시작·끝 줄 번호를 돌려준다. */
function tables(lines) {
  const out = [];
  let start = -1;
  for (let i = 0; i <= lines.length; i += 1) {
    const isRow = i < lines.length && lines[i].trimStart().startsWith("|");
    if (isRow && start < 0) start = i;
    else if (!isRow && start >= 0) { out.push([start, i - 1]); start = -1; }
  }
  return out;
}

export function retire(id) {
  const file = join(REFS, id, "DESIGN.md");
  if (!existsSync(file)) return { id, ok: false, reason: "missing" };
  const raw = readFileSync(file, "utf8");
  // Deliberately the raw file, and deliberately refusing on an adopted one.
  // This rewrites DESIGN.md in place; writing a reconstructed legacy body over
  // an adopted canonical would silently un-adopt the reference. The motion table
  // for an adopted reference has to be retired in its package instead.
  if (isCoreV2Markdown(raw)) return { id, ok: false, reason: "adopted-core-v2" };
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) return { id, ok: false, reason: "no-frontmatter" };
  let front; try { front = yaml.load(fm[1], { schema: yaml.JSON_SCHEMA }); } catch { return { id, ok: false, reason: "bad-yaml" }; }
  const verificationPath = join(REFS, id, ".verification.md");
  const verification = existsSync(verificationPath) ? readFileSync(verificationPath, "utf8") : "";
  const tokenText = JSON.stringify(front?.tokens ?? {});
  const grounded = (value) => tokenText.includes(value) || verification.includes(value);

  const parts = raw.split(/^(##\s.+)$/m);
  let idx = -1;
  for (let i = 1; i < parts.length; i += 2) if (MOTION_HEADING.test(parts[i])) { idx = i + 1; break; }
  if (idx < 0) return { id, ok: false, reason: "no-motion-section" };
  const section = parts[idx];
  if (QUARANTINED.test(section)) return { id, ok: false, reason: "already-quarantined" };

  const lines = section.split("\n");
  const drop = new Set();
  const removed = [];
  for (const [start, end] of tables(lines)) {
    const rows = [];
    for (let i = start; i <= end; i += 1) {
      const vals = lines[i].match(VALUE) ?? [];
      rows.push({ i, vals, unsourced: vals.length > 0 && vals.every((v) => !grounded(v)) });
    }
    const valueRows = rows.filter((r) => r.vals.length > 0);
    if (valueRows.length === 0) continue;                       // 값 없는 표는 건드리지 않는다
    const unsourcedRows = valueRows.filter((r) => r.unsourced);
    if (unsourcedRows.length === 0) continue;                   // 전부 근거 있음 — 보존
    if (unsourcedRows.length === valueRows.length) {
      for (let i = start; i <= end; i += 1) drop.add(i);        // 표 전체
      // 표 바로 앞의 굵은 라벨(**Durations**:)과 빈 줄도 같이 지운다
      let j = start - 1;
      while (j >= 0 && lines[j].trim() === "") { drop.add(j); j -= 1; }
      if (j >= 0 && /^\*\*[^*]+\*\*:?\s*$/.test(lines[j].trim())) drop.add(j);
    } else {
      for (const r of unsourcedRows) drop.add(r.i);             // 근거 없는 행만
    }
    for (const r of unsourcedRows) removed.push(...r.vals);
  }
  if (drop.size === 0) return { id, ok: false, reason: "nothing-to-remove" };

  let kept = lines.filter((_, i) => !drop.has(i)).join("\n");
  kept = kept.replace(/\n{3,}/g, "\n\n");

  /**
   * 표를 지우면 산문에 남은 `motion-fast` 같은 **토큰 이름**이 정의를 잃는다. 136개가
   * 그렇다. 이름도 값과 똑같이 생성된 것이라 남겨둘 수 없지만, 문장 한가운데의
   * `over \`motion-reaction\`` 을 기계적으로 들어내면 문장이 망가진다.
   *
   * 그래서 자동 처리에서 뺀다. 그 레퍼런스들은 산문 자체가 생성된 체계의 일부라서
   * 잘라내기가 아니라 다시 쓰기가 필요하다 — 7월 배치가 "정리하다가" 실패한 자리가
   * 정확히 여기다. `--force`로 강행할 수 있게는 두되 기본값은 보류다.
   */
  const orphans = [...new Set(kept.match(ORPHAN_TOKEN_NAME) ?? [])];
  if (orphans.length > 0 && !process.argv.includes("--force")) {
    return { id, ok: false, reason: "would-orphan-token-names", orphans };
  }

  /**
   * 표를 가리키는 **위치 참조**도 매달린다. `adobe`가 그랬다 — 표를 지우고 나니
   * "(Token names and curves above are illustrative defaults …)"만 남아 위가 없는 문장이
   * 됐다. 토큰 이름이 백틱에 없어서 위 검사에 안 걸린다.
   */
  const dangling = [...new Set(kept.match(POSITIONAL_REFERENCE) ?? [])];
  if (dangling.length > 0 && !process.argv.includes("--force")) {
    return { id, ok: false, reason: "would-dangle-positional-reference", dangling };
  }

  const body = kept.trim();
  parts[idx] = `\n\n${ABSENCE}\n\n${body}\n`;
  const next = parts.join("");
  return { id, ok: true, removed: [...new Set(removed)], before: raw.length, after: next.length, content: next };
}

const argv = process.argv.slice(2);
const apply = argv.includes("--apply");
const explicit = argv.filter((a) => !a.startsWith("--"));
const ids = explicit.length ? explicit : readdirSync(REFS).sort();

let changed = 0, saved = 0;
const skipped = {};
for (const id of ids) {
  const r = retire(id);
  if (!r.ok) { skipped[r.reason] = (skipped[r.reason] ?? 0) + 1; continue; }
  changed += 1; saved += r.before - r.after;
  if (apply) writeFileSync(join(REFS, id, "DESIGN.md"), r.content);
  if (explicit.length) console.log(`  ${id}: -${r.before - r.after} B, removed ${r.removed.join(" ")}`);
}
console.log(`\n[retire-template-motion] ${apply ? "APPLIED" : "DRY RUN"} — ${changed} references, ${(saved / 1024).toFixed(0)} KB removed`);
for (const [reason, n] of Object.entries(skipped).sort((a, b) => b[1] - a[1])) console.log(`  skipped ${String(n).padStart(4)}  ${reason}`);
