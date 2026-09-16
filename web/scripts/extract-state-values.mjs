#!/usr/bin/env node
/**
 * extract-state-values.mjs — 캡쳐 번들에서 **실측된 상태별 스타일 차이**를 뽑아
 * 토큰 블록에 넣을 제안을 만든다. 파일은 쓰지 않는다.
 *
 * 왜 있나 (2026-09-16). 조사 중 두 번 틀렸고 두 번째가 맞다.
 *
 *   1차 결론: "번들에 상태값이 없다" — `interactions[]`와 `components[].states`만 보고
 *             내린 판단이었다. 둘 다 상태 *이름*만 담는 게 맞다.
 *   실제:     `captureStates()`가 hover/pressed/focus를 적용한 채 computed style을 찍어
 *             `surfaces[].elements[]`에 `<selector>::state-<name>` 원소로 넣는다.
 *             177개 번들 중 86개에 그런 원소가 4,748개 있다
 *             (pressed 2,226 · hover 1,565 · focus 957).
 *
 * 즉 하네스는 멀쩡했고, 집계(`components[]`)가 값을 이름으로 접었을 뿐이다.
 * 이 스크립트는 그 접힌 것을 되돌린다.
 *
 * 조인 경로: components[].representative.selector → 같은 selector의 base 원소와
 *            `::state-<name>` 원소를 찾아 스타일을 diff한다. 달라진 속성만 제안한다.
 *
 * usage:
 *   node scripts/extract-state-values.mjs <reference-id> [--json]
 *   node scripts/extract-state-values.mjs --all [--json]   # 커버리지 요약
 *
 * 출력은 **제안**이다. 번들 컴포넌트와 DESIGN.md 토큰 이름의 매칭은 사람이 확인한다 —
 * 번들은 `type`과 셀렉터만 알고 `tds-button` 같은 이름은 모른다.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const BUNDLES = join(ROOT, "artifacts", "reference-evidence");
const STATES = ["hover", "pressed", "focus"];

/** 상태 diff에서 의미 있는 속성만. transform은 상태 감지에만 쓰고 토큰 근거로는 쓰지 않는다
 *  (capture-reference-evidence.ts가 같은 이유로 제외한다). */
const MEANINGFUL = [
  "color", "backgroundColor", "borderColor", "borderWidth", "borderRadius",
  "boxShadow", "padding", "fontWeight", "letterSpacing",
];

/** rgb()/rgba() → hex. 알파가 1 미만이면 원문을 남긴다 — 알파를 버리면 값이 거짓이 된다. */
function toHex(value) {
  const m = String(value).match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)\s*(?:[,/]\s*([\d.]+)\s*)?\)$/);
  if (!m) return value;
  const [, r, g, b, a] = m;
  if (a !== undefined && Number(a) < 1) return value;
  const hex = [r, g, b].map((n) => Math.round(Number(n)).toString(16).padStart(2, "0")).join("");
  return `#${hex}`;
}

function loadBundle(id) {
  const file = join(BUNDLES, `${id}.json`);
  if (!existsSync(file)) return null;
  try { return JSON.parse(readFileSync(file, "utf8")); } catch { return null; }
}

/** 한 레퍼런스의 상태 제안을 계산한다. */
export function extractStateValues(id) {
  const bundle = loadBundle(id);
  if (!bundle) return { id, ok: false, reason: "no-bundle", components: [] };

  const bySelector = new Map();
  for (const surface of bundle.surfaces ?? []) {
    for (const element of surface.elements ?? []) {
      if (element?.selector) bySelector.set(element.selector, element);
    }
  }

  const components = [];
  for (const component of bundle.components ?? []) {
    const rep = component?.representative?.selector;
    if (!rep) continue;
    const base = bySelector.get(rep);
    if (!base?.style) continue;

    const states = {};
    for (const state of STATES) {
      const variant = bySelector.get(`${rep}::state-${state}`);
      if (!variant?.style) continue;
      const delta = {};
      for (const prop of MEANINGFUL) {
        const before = base.style[prop];
        const after = variant.style[prop];
        if (after === undefined || after === before) continue;
        delta[prop] = { from: toHex(before), to: toHex(after) };
      }
      if (Object.keys(delta).length > 0) states[state] = delta;
    }
    if (Object.keys(states).length === 0) continue;

    components.push({
      type: component.type,
      selector: rep,
      occurrences: component.occurrences ?? null,
      declaredStates: component.states ?? [],
      observed: states,
      /** 토큰 블록에 넣을 단일 값 후보. 배경이 바뀌면 그것, 아니면 전경색. */
      suggestion: Object.fromEntries(Object.entries(states).map(([state, delta]) => [
        state,
        (delta.backgroundColor?.to ?? delta.color?.to ?? delta.borderColor?.to ?? null),
      ]).filter(([, value]) => value !== null)),
    });
  }
  return { id, ok: true, capturedAt: bundle.capturedAt ?? null, components };
}

// CLI는 직접 실행할 때만. 이 모듈은 import해서 쓰기도 한다.
const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (!isMain) { /* imported as a library */ } else {

const argv = process.argv.slice(2);
const asJson = argv.includes("--json");
const all = argv.includes("--all");
const target = argv.find((a) => !a.startsWith("--"));

if (all) {
  const rows = [];
  for (const file of readdirSync(BUNDLES).sort()) {
    if (!file.endsWith(".json")) continue;
    const id = file.replace(/\.json$/, "");
    const result = extractStateValues(id);
    const stateCount = result.components.reduce((n, c) => n + Object.keys(c.observed).length, 0);
    if (stateCount > 0) rows.push({ id, components: result.components.length, states: stateCount });
  }
  rows.sort((a, b) => b.states - a.states);
  if (asJson) { console.log(JSON.stringify({ references: rows.length, rows }, null, 2)); process.exit(0); }
  console.log(`[state-values] ${rows.length} references carry measured state deltas`);
  for (const row of rows) {
    console.log(`  ${String(row.states).padStart(4)} states  ${String(row.components).padStart(3)} components  ${row.id}`);
  }
  process.exit(0);
}

if (!target) {
  console.error("usage: extract-state-values.mjs <reference-id> [--json] | --all [--json]");
  process.exit(2);
}

const result = extractStateValues(target);
if (asJson) { console.log(JSON.stringify(result, null, 2)); process.exit(result.ok ? 0 : 1); }
if (!result.ok) { console.error(`[state-values] ${target}: ${result.reason}`); process.exit(1); }
if (result.components.length === 0) {
  console.log(`[state-values] ${target}: bundle has no measured state deltas`);
  process.exit(0);
}
console.log(`[state-values] ${target} — captured ${result.capturedAt ?? "unknown date"}`);
for (const component of result.components) {
  console.log(`\n  ${component.type}  ${component.selector}`);
  if (component.declaredStates.length) console.log(`    declared: ${component.declaredStates.join(", ")}`);
  for (const [state, delta] of Object.entries(component.observed)) {
    const parts = Object.entries(delta).map(([prop, { from, to }]) => `${prop} ${from} → ${to}`);
    console.log(`    ${state.padEnd(8)} ${parts.join("; ")}`);
  }
  const suggestion = Object.entries(component.suggestion).map(([s, v]) => `${s}: "${v}"`).join(", ");
  if (suggestion) console.log(`    → token: ${suggestion}`);
}

}
