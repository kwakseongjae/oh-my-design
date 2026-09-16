#!/usr/bin/env node
/**
 * apply-state-values.mjs — 측정된 상태값을 토큰 블록에 적용한다.
 * **셀렉터가 확정된 경우에만.**
 *
 * 왜 이 제약인가 (2026-09-16). 번들은 `surface-3::[data-omd-capture="18"]` 같은
 * 셀렉터와 컴포넌트 `type`만 안다. 그게 토큰 블록의 `marketing-primary`인지는 모른다.
 * 색이 맞아도 다른 요소일 수 있다 — `apple`에서 실제로 그랬다: 측정 요소의 배경은
 * 토큰과 같은 `#0071e3`인데 radius 18px/12px 글자(토큰은 980px/17px)로 전혀 다른
 * 컨트롤이었다. 색만 보고 넣었으면 틀린 값이 들어갔다.
 *
 * 그래서 이 스크립트는 **레퍼런스 자신이 셀렉터를 적어둔 경우만** 적용한다. 예:
 *
 *   category-tab: { ..., use: "Category control at home::[data-omd-capture=\"7\"]" }
 *
 * 이건 추측이 아니라 문서가 선언한 연결이다. 그 외에는 사람이 판단한다.
 *
 * 동반 편집도 함께 한다: 새 토큰 leaf는 `verification_v2.claims` 항목이 없으면
 * `claim_evidence_missing`으로 등급이 떨어진다. 형제 leaf가 쓰는 패턴(대개 YAML 앵커)을
 * 그대로 복사한다.
 *
 * usage:
 *   node scripts/apply-state-values.mjs            # dry-run, 적용 대상만 출력
 *   node scripts/apply-state-values.mjs --write
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { extractStateValues } from "./extract-state-values.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const WEB = resolve(HERE, "..");
const ROOT = resolve(WEB, "..");
const WRITE = process.argv.includes("--write");
const GEOMETRY = process.argv.includes("--geometry");
const STATE_KEYS = ["hover", "pressed", "focus"];

function refPath(id) { return join(WEB, "references", id, "DESIGN.md"); }
function mirrorPath(id) { return join(ROOT, "design-md", id, "DESIGN.md"); }

/**
 * 기하 대조 점수. 셀렉터 선언이 없는 컴포넌트를 위한 2차 경로.
 *
 * 색만 맞추면 틀린다 — `apple`의 측정 요소는 토큰과 같은 `#0071e3` 배경인데
 * radius 18px·12px 글자로 전혀 다른 컨트롤이었다. 그래서 배경/전경·radius·height·
 * padding·글자크기를 각각 세고, **근거 4개 이상 + 색(bg 또는 fg) 일치**를 요구한다.
 * 색 일치 없이 기하만 맞는 것은 같은 디자인 시스템의 다른 컨트롤일 수 있다.
 */
function norm(value) {
  if (value === undefined || value === null) return null;
  const s = String(value).trim().toLowerCase();
  const rgb = s.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)\s*(?:[,/]\s*([\d.]+)\s*)?\)$/);
  if (rgb && (rgb[4] === undefined || Number(rgb[4]) === 1)) {
    return `#${[rgb[1], rgb[2], rgb[3]].map((n) => Math.round(Number(n)).toString(16).padStart(2, "0")).join("")}`;
  }
  return s;
}
function px(value) {
  if (value === undefined || value === null) return null;
  const m = String(value).match(/(-?[\d.]+)\s*px|^(-?[\d.]+)$/);
  return m ? Number(m[1] ?? m[2]) : null;
}
function geometryScore(token, element) {
  const style = element?.style ?? {};
  const hits = [];
  if (norm(token.bg) && norm(token.bg) === norm(style.backgroundColor)) hits.push("bg");
  if (norm(token.fg) && norm(token.fg) === norm(style.color)) hits.push("fg");
  if (px(token.radius) !== null && px(token.radius) === px(style.borderRadius)) hits.push("radius");
  if (px(token.height) !== null && element?.rect && Math.abs(px(token.height) - element.rect.height) < 1.5) hits.push("height");
  if (token.padding && String(token.padding).trim() === String(style.padding).trim()) hits.push("padding");
  const tokenFont = px(String(token.font ?? "").split("/")[0]);
  if (tokenFont !== null && tokenFont === px(style.fontSize)) hits.push("font");
  return hits;
}
function bundleElement(id, selector) {
  const file = join(ROOT, "artifacts", "reference-evidence", `${id}.json`);
  if (!existsSync(file)) return null;
  const bundle = JSON.parse(readFileSync(file, "utf8"));
  for (const surface of bundle.surfaces ?? []) {
    for (const element of surface.elements ?? []) if (element.selector === selector) return element;
  }
  return null;
}

/** 토큰 컴포넌트가 이 측정 셀렉터를 자기 설명에 적어두었는가. */
function declaresSelector(token, selector) {
  const bare = selector.replace(/"/g, "");
  const blob = JSON.stringify(token).replace(/\\"/g, "").replace(/"/g, "");
  return blob.includes(bare);
}

/** `components:` 블록의 범위. 같은 이름이 `typography:`에도 있을 수 있으므로
 *  (kurly의 `category-tab`이 실제로 그랬다) 반드시 블록 안에서만 찾는다. */
function componentsBlockRange(markdown) {
  const start = markdown.search(/^  components:\s*$/m);
  if (start < 0) return null;
  const after = markdown.slice(start + 1);
  const nextTop = after.search(/^  [a-zA-Z_][\w-]*:\s*$/m);
  return { start, end: nextTop < 0 ? markdown.length : start + 1 + nextTop };
}

/** `name: { ... }` 한 줄을 찾아 상태 키를 삽입한다. flow-mapping 스타일을 보존한다. */
function insertStateKeys(markdown, componentName, states) {
  const range = componentsBlockRange(markdown);
  if (!range) return { markdown, added: [] };
  const block = markdown.slice(range.start, range.end);
  const line = new RegExp(`^(\\s*${componentName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}: \\{)(.*)(\\}\\s*)$`, "m");
  const match = block.match(line);
  if (!match) return { markdown, added: [] };
  const body = match[2];
  const added = [];
  let injected = body;
  for (const [state, value] of Object.entries(states)) {
    if (new RegExp(`(^|,)\\s*${state}:`).test(body)) continue; // 이미 있으면 건드리지 않는다
    injected = `${injected.replace(/,\s*$/, "")}, ${state}: ${JSON.stringify(value)}`;
    added.push(state);
  }
  if (!added.length) return { markdown, added: [] };
  // 블록 안에서만 치환하고 다시 합친다. 원본 키 순서는 보존한다.
  const patchedBlock = block.replace(line, `$1${injected}$3`);
  return { markdown: markdown.slice(0, range.start) + patchedBlock + markdown.slice(range.end), added };
}

/** 형제 leaf의 claims 표기를 복사해 새 leaf의 claims를 추가한다. */
function addClaims(markdown, componentName, added) {
  const sibling = new RegExp(`^(\\s*)"tokens\\.components\\.${componentName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\.([a-zA-Z-]+)":\\s*(.+)$`, "m");
  const match = markdown.match(sibling);
  if (!match) return { markdown, ok: false };
  const [, indent, , value] = match;
  // 앵커 정의(&name)를 재사용하면 YAML이 중복 정의로 깨진다. 참조(*name)만 복사한다.
  const reference = value.trim().startsWith("&")
    ? `*${value.trim().slice(1).split(/\s/)[0]}`
    : value.trim();
  const lines = added.map((state) => `${indent}"tokens.components.${componentName}.${state}": ${reference}`);
  return { markdown: markdown.replace(sibling, `${lines.join("\n")}\n${match[0]}`), ok: true };
}

const plan = [];
for (const file of readFileSync(join(WEB, "src/data/reference-quality.generated.ts"), "utf8").matchAll(/"id": "([^"]+)"/g)) {
  const id = file[1];
  if (!existsSync(refPath(id))) continue;
  const extracted = extractStateValues(id);
  if (!extracted.ok || !extracted.components.length) continue;

  const markdown = readFileSync(refPath(id), "utf8");
  let tokens;
  try { tokens = yaml.load(markdown.match(/^---\n([\s\S]*?)\n---/)[1], { schema: yaml.JSON_SCHEMA })?.tokens; }
  catch { continue; }
  const components = tokens?.components ?? {};

  for (const measured of extracted.components) {
    const element = GEOMETRY ? bundleElement(id, measured.selector) : null;
    const candidates = [];
    for (const [name, token] of Object.entries(components)) {
      if (token?.type !== measured.type) continue;
      const states = Object.fromEntries(
        Object.entries(measured.suggestion).filter(([key, value]) => STATE_KEYS.includes(key) && value && token[key] === undefined)
      );
      if (Object.keys(states).length === 0) continue;
      if (declaresSelector(token, measured.selector)) { candidates.push({ name, states, why: "selector-declared", hits: [] }); continue; }
      if (!GEOMETRY) continue;
      const hits = geometryScore(token, element);
      if (hits.length >= 4 && (hits.includes("bg") || hits.includes("fg"))) {
        candidates.push({ name, states, why: `geometry:${hits.join(",")}`, hits });
      }
    }
    // 한 측정 요소에 후보가 둘 이상이면 판정 불가 — 건너뛴다.
    const declared = candidates.filter((c) => c.why === "selector-declared");
    const pick = declared.length === 1 ? declared
      : declared.length > 1 ? []
      : candidates.length === 1 ? candidates
      : [];
    for (const candidate of pick) {
      plan.push({ id, component: candidate.name, selector: measured.selector, states: candidate.states, why: candidate.why });
    }
  }
}

// 한 토큰이 여러 측정 요소에 매칭되면 어느 측정이 그 토큰인지 알 수 없다.
// 첫 번째를 고르는 것은 임의 선택이므로 통째로 제외한다 (freee/primary-action이 4개,
// google/business-primary가 2개 요소에 걸렸다).
const claimCount = new Map();
for (const entry of plan) {
  const key = `${entry.id}::${entry.component}`;
  claimCount.set(key, (claimCount.get(key) ?? 0) + 1);
}
const ambiguous = [...claimCount.entries()].filter(([, n]) => n > 1).map(([key]) => key);
if (ambiguous.length) {
  console.log(`[apply-state-values] 중복 매칭으로 제외: ${ambiguous.join(" ")}`);
}
const filtered = plan.filter((entry) => claimCount.get(`${entry.id}::${entry.component}`) === 1);
plan.length = 0;
plan.push(...filtered);

if (!plan.length) { console.log("[apply-state-values] nothing to apply"); process.exit(0); }

console.log(`[apply-state-values] ${WRITE ? "applying" : "dry-run"} — ${plan.length} component(s)`);
const byRef = new Map();
for (const entry of plan) {
  if (!byRef.has(entry.id)) byRef.set(entry.id, []);
  byRef.get(entry.id).push(entry);
}

let applied = 0, skipped = 0;
for (const [id, entries] of byRef) {
  let markdown = readFileSync(refPath(id), "utf8");
  const notes = [];
  for (const entry of entries) {
    const inserted = insertStateKeys(markdown, entry.component, entry.states);
    if (!inserted.added.length) { notes.push(`${entry.component}: no-op`); skipped++; continue; }
    // `verification_v2.claims`가 아예 없는 파일은 이미 legacy_snapshot이고,
    // 토큰 leaf를 더해도 내려갈 등급이 없다. 그런 파일에만 claims 없이 적용한다.
    const hasClaimsBlock = /^\s+claims:\s*$/m.test(markdown);
    const claimed = addClaims(inserted.markdown, entry.component, inserted.added);
    if (!claimed.ok && hasClaimsBlock) { notes.push(`${entry.component}: NO CLAIMS PATTERN — skipped`); skipped++; continue; }
    markdown = claimed.ok ? claimed.markdown : inserted.markdown;
    if (!claimed.ok) notes.push(`${entry.component}: (no verification_v2 — claims not required)`);
    notes.push(`${entry.component}: +${inserted.added.join(",")} (${entry.why ?? "selector-declared"})`);
    applied++;
  }
  console.log(`  ${id.padEnd(16)} ${notes.join(" | ")}`);
  if (!WRITE) continue;
  try { yaml.load(markdown.match(/^---\n([\s\S]*?)\n---/)[1], { schema: yaml.JSON_SCHEMA }); }
  catch (error) { console.error(`  ${id}: YAML broke, not written — ${error.message}`); continue; }
  writeFileSync(refPath(id), markdown, "utf8");
  if (existsSync(mirrorPath(id))) writeFileSync(mirrorPath(id), markdown, "utf8");
}
console.log(`[apply-state-values] ${applied} applied, ${skipped} skipped${WRITE ? "" : " (dry-run)"}`);
