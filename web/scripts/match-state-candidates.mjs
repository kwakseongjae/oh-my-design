#!/usr/bin/env node
/**
 * match-state-candidates.mjs — 측정 요소와 토큰 컴포넌트를 **기하까지 대조**해
 * 매칭 후보를 점수와 함께 보여준다. 쓰기는 하지 않는다.
 *
 * 왜 기하인가 (2026-09-16). 색만 맞춰 넣으면 틀린다. `apple`의 측정 요소는 배경이
 * 토큰과 같은 `#0071e3`인데 radius 18px·글자 12px·높이 22px이고, 토큰
 * `marketing-primary`는 radius 980px·17px·44px이다. 완전히 다른 컨트롤인데
 * 색 하나로는 구분되지 않는다.
 *
 * 그래서 다음을 각각 채점한다:
 *   type 일치(필수) · 배경/전경 일치 · radius 일치 · height 일치 · padding 일치 · font 크기 일치
 *
 * 판정은 사람이 한다. 이 스크립트는 "어느 토큰이 후보이고 근거가 몇 개인가"만 답한다.
 *
 * usage: node scripts/match-state-candidates.mjs <id> [<id> ...]
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { extractStateValues } from "./extract-state-values.mjs";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = resolve(WEB, "..");

function norm(value) {
  if (value === undefined || value === null) return null;
  const s = String(value).trim().toLowerCase();
  const rgb = s.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)\s*(?:[,/]\s*([\d.]+)\s*)?\)$/);
  if (rgb && (rgb[4] === undefined || Number(rgb[4]) === 1)) {
    return `#${[rgb[1], rgb[2], rgb[3]].map((n) => Math.round(Number(n)).toString(16).padStart(2, "0")).join("")}`;
  }
  return s;
}
/** "980px" / 980 / "18px" → 숫자. 비교 가능한 것만. */
function px(value) {
  if (value === undefined || value === null) return null;
  const m = String(value).match(/(-?[\d.]+)\s*px|^(-?[\d.]+)$/);
  return m ? Number(m[1] ?? m[2]) : null;
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

for (const id of process.argv.slice(2)) {
  const extracted = extractStateValues(id);
  if (!extracted.ok || !extracted.components.length) { console.log(`\n### ${id} — no measured deltas`); continue; }
  const markdown = readFileSync(join(WEB, "references", id, "DESIGN.md"), "utf8");
  let tokens;
  try { tokens = yaml.load(markdown.match(/^---\n([\s\S]*?)\n---/)[1], { schema: yaml.JSON_SCHEMA })?.tokens; }
  catch { console.log(`\n### ${id} — frontmatter unreadable`); continue; }
  const components = tokens?.components ?? {};

  console.log(`\n### ${id}`);
  for (const measured of extracted.components) {
    const element = bundleElement(id, measured.selector);
    const style = element?.style ?? {};
    const suggestion = Object.entries(measured.suggestion).map(([k, v]) => `${k}=${v}`).join(" ");
    if (!suggestion) continue;
    console.log(`  [측정] ${measured.type}  bg=${norm(style.backgroundColor)} fg=${norm(style.color)} r=${px(style.borderRadius)} h=${element?.rect?.height ?? "?"} pad=${style.padding} font=${px(style.fontSize)}`);
    console.log(`         → ${suggestion}`);

    const scored = [];
    for (const [name, token] of Object.entries(components)) {
      if (token?.type !== measured.type) continue;
      const hits = [];
      if (norm(token.bg) && norm(token.bg) === norm(style.backgroundColor)) hits.push("bg");
      if (norm(token.fg) && norm(token.fg) === norm(style.color)) hits.push("fg");
      if (px(token.radius) !== null && px(token.radius) === px(style.borderRadius)) hits.push("radius");
      if (px(token.height) !== null && element?.rect && Math.abs(px(token.height) - element.rect.height) < 1.5) hits.push("height");
      if (token.padding && String(token.padding).trim() === String(style.padding).trim()) hits.push("padding");
      const tokenFont = px(String(token.font ?? "").split("/")[0]);
      if (tokenFont !== null && tokenFont === px(style.fontSize)) hits.push("font");
      const already = ["hover", "pressed", "focus"].filter((k) => token[k] !== undefined);
      scored.push({ name, hits, already });
    }
    scored.sort((a, b) => b.hits.length - a.hits.length);
    if (!scored.length) { console.log("         후보 없음 (type 일치 토큰 없음)"); continue; }
    for (const candidate of scored.slice(0, 3)) {
      const filled = candidate.already.length ? ` [이미: ${candidate.already.join(",")}]` : "";
      console.log(`         ${String(candidate.hits.length)}근거  ${candidate.name}  (${candidate.hits.join(",") || "일치 없음"})${filled}`);
    }
  }
}
