#!/usr/bin/env node
/**
 * 항목 11 전수 검사 — 원본 YAML `use:` 문자열이 산출 DESIGN.md에 착지했는가.
 *
 * 왜 기계로 옮겼나: 웨이브 40 krds가 의미 검토를 네 번 받았는데 결함 수가 8 → 5 → 5 → 8로
 * 줄지 않았다. 매 패스가 다른 표 행을 지목해서 개별 대응을 반복했기 때문인데, 실측해보니
 * 원인은 하나였다 — 원본 YAML `use:` 20개 중 **20개 전부**가 산출에 없었다. 검토자는 그
 * 20개 중 5~8개를 표본으로 집어낸 것이고, 지목된 것만 고치면 다음 패스가 다른 표본을
 * 집어내며 영원히 수렴하지 않는다.
 *
 * 검토는 판단이 필요한 결함에 쓰고, 열거로 끝나는 결함은 여기서 전수로 잡는다.
 *
 * usage: node scripts/check-yaml-use-landing.mjs <brand...>
 *        node scripts/check-yaml-use-landing.mjs --list <brand>   (미착지 문자열 출력)
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const SRC_ROOT = "web/references";
const OUT_ROOT = "docs/design-md-weight/migrated";

// YAML 인라인 맵 안에서도 잡히도록 줄 단위로 훑는다. 원본은 `use: "..."`,
// `use: '...'`, 따옴표 없는 형태를 섞어 쓴다.
function extractUses(src) {
  const out = [];
  // `use:`는 산문에도 나온다 ("all 761 retained uses resolve first to ...").
  // 첫 판에서 그것들을 YAML 값으로 집어 미착지 4건을 전부 오탐으로 냈다.
  // 그래서 frontmatter/YAML 펜스 안에서만 읽는다.
  let inYaml = false;
  const lines = src.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^---\s*$/.test(line) || /^```ya?ml\s*$/.test(line)) { inYaml = !inYaml || /^```/.test(line); continue; }
    if (/^```\s*$/.test(line)) { inYaml = false; continue; }
    if (!inYaml) continue;
    const m = line.match(/\buse:\s*(.+)/);
    if (!m) continue;
    let v = m[1].trim();
    const q = v.match(/^"([^"]*)"|^'([^']*)'/);
    if (q) v = q[1] ?? q[2];
    else v = v.replace(/[,}].*$/, "");
    v = v.trim().replace(/^["']|["']$/g, "").trim();
    // 잘린 셀렉터(`::[data-omd-capture=\\`)는 값이 아니라 추출 실패다.
    if (v.length > 8 && !v.endsWith("\\") && !v.startsWith("**")) out.push(v);
  }
  return [...new Set(out)];
}

const wantList = process.argv.includes("--list");
const brands = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!brands.length) {
  console.error("usage: check-yaml-use-landing.mjs [--list] <brand...>");
  process.exit(1);
}

let bad = 0;
for (const brand of brands) {
  const srcPath = join(SRC_ROOT, brand, "DESIGN.md");
  const outPath = join(OUT_ROOT, brand, "DESIGN.md");
  if (!existsSync(srcPath) || !existsSync(outPath)) {
    console.log(`  ${brand.padEnd(14)}파일 없음 — 미측정`);
    bad++;
    continue;
  }
  const uses = extractUses(readFileSync(srcPath, "utf8"));
  const out = readFileSync(outPath, "utf8");
  const missing = uses.filter((u) => !out.includes(u));
  const landed = uses.length - missing.length;
  const pct = uses.length ? Math.round((100 * landed) / uses.length) : 100;
  const ok = missing.length === 0;
  if (!ok) bad++;
  console.log(
    `  ${brand.padEnd(14)}use ${String(landed).padStart(3)}/${String(uses.length).padEnd(3)} (${String(pct).padStart(3)}%)  ${ok ? "OK" : `미착지 ${missing.length}`}`,
  );
  if (wantList) for (const m of missing) console.log(`      - ${m}`);
}

process.exit(bad ? 1 : 0);
