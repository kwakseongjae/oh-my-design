#!/usr/bin/env node
/**
 * build-evidence-ledger.mjs — 440개 레퍼런스의 **증거 원장**을 한 파일로 고정한다.
 *
 * 왜 있나 (2026-09-17). 2026-10-10에 verified 140개가 한꺼번에 만료된다. 그날 초록으로
 * 되돌리는 가장 싼 방법 네 가지는 전부 텍스트 편집이고, 픽셀 하나 다시 보지 않는다:
 *
 *   1. SOURCE_TTLS["product-surface"] 90 → 180      한 줄, 141개 부활
 *   2. `kind: product-surface` → `official-doc`     366곳, 141개 부활
 *   3. 만료된 source 삭제 후 claim 재연결            140파일, 134개 생존
 *   4. `captured:` 날짜 고쳐쓰기                     366곳, 140개 부활
 *
 * 1번은 `__tests__/evidence-integrity.test.ts`가 상수를 고정해 막는다. 2·3·4번은 상수가
 * 아니라 **데이터**를 고치는 것이라 상수 고정으로는 잡히지 않는다.
 *
 * 그래서 원장을 만든다. 막는 게 아니라 **보이게 하는** 장치다 — source의 kind나 captured를
 * 바꾸면 이 파일의 diff에 `"kind": "product-surface" → "official-doc"`가 그대로 뜬다.
 * 리뷰어가 못 보고 지나칠 수 없고, 갱신 자체가 "왜 바꿨는지 쓰는" 행위가 된다.
 *
 * 원장은 판단하지 않는다. 무엇이 언제 관측됐다고 주장하는지만 적는다.
 *
 * usage:
 *   node scripts/build-evidence-ledger.mjs            # 원장 갱신
 *   node scripts/build-evidence-ledger.mjs --check    # 원장과 카탈로그가 어긋나면 실패
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseReferenceFrontmatter } from "./lib/reference-quality.mjs";
import { readReferenceSource } from "./lib/reference-source.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const REPO_ROOT = resolve(WEB_ROOT, "..");
const REFS_DIR = join(WEB_ROOT, "references");
const OUT_FILE = join(REPO_ROOT, "data", "evidence-ledger.json");
const CHECK = process.argv.includes("--check");

const ids = readdirSync(REFS_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(join(REFS_DIR, entry.name, "DESIGN.md")))
  .map((entry) => entry.name)
  .sort();

/** URL에서 host만 남긴다. 전체 URL은 DESIGN.md에 있고, 원장은 "어느 도메인을 근거로 삼았나"만 고정한다. */
function host(url) {
  try { return new URL(String(url)).host; } catch { return String(url ?? "").slice(0, 60); }
}

const references = {};
const byKind = {};
let sourceCount = 0;

for (const id of ids) {
  const designPath = join(REFS_DIR, id, "DESIGN.md");
  let frontmatter;
  // An adopted reference still owns its evidence; it just keeps it in the
  // package now. Reading only the file on disk would drop it from the ledger
  // silently, which is how the expiry count fell 140 → 139 unnoticed.
  try { frontmatter = parseReferenceFrontmatter(readReferenceSource(dirname(designPath)).markdown, designPath); }
  catch { continue; }
  const v2 = frontmatter?.verification_v2;
  if (!v2 || !Array.isArray(v2.sources)) continue;

  const sources = v2.sources
    .filter((source) => source && typeof source === "object")
    .map((source) => ({
      id: String(source.id ?? ""),
      kind: String(source.kind ?? ""),
      captured: String(source.captured ?? ""),
      host: host(source.url),
    }))
    .sort((a, b) => a.id.localeCompare(b.id));

  for (const source of sources) {
    byKind[source.kind] = (byKind[source.kind] ?? 0) + 1;
    sourceCount += 1;
  }

  references[id] = {
    checked: String(v2.checked ?? ""),
    claims: Array.isArray(v2.claims) ? v2.claims.length : 0,
    sources,
  };
}

const ledger = {
  schema_version: 1,
  purpose: "Freeze what each reference claims to have observed, and when, so that relabelling a "
    + "source kind, deleting an expired source, or rewriting a capture date appears as a reviewable diff.",
  generator: "web/scripts/build-evidence-ledger.mjs",
  references_with_verification_v2: Object.keys(references).length,
  sources: sourceCount,
  sources_by_kind: Object.fromEntries(Object.entries(byKind).sort(([a], [b]) => a.localeCompare(b))),
  references,
};

const serialized = `${JSON.stringify(ledger, null, 2)}\n`;

if (CHECK) {
  if (!existsSync(OUT_FILE)) {
    console.error("[evidence-ledger] no ledger on disk. run: npm run evidence:ledger");
    process.exit(1);
  }
  const current = readFileSync(OUT_FILE, "utf8");
  if (current === serialized) {
    console.log(`[evidence-ledger] ${ledger.references_with_verification_v2} references · ${sourceCount} sources — ledger matches the catalog`);
    process.exit(0);
  }
  console.error("[evidence-ledger] the catalog's evidence no longer matches the committed ledger.");
  console.error("  This is expected when you genuinely re-observed something — run `npm run evidence:ledger`");
  console.error("  and say in the commit message what was re-observed and how.");
  console.error("  It is NOT expected from a relabel, a date edit, or a source deletion done to clear a gate.");

  // 무엇이 달라졌는지 바로 보여준다. 실패만 하고 입을 다물면 다음 사람이 그냥 재생성한다.
  let previous;
  try { previous = JSON.parse(current); } catch { previous = null; }
  if (previous?.references) {
    const diffs = [];
    for (const id of new Set([...Object.keys(previous.references), ...Object.keys(references)])) {
      const before = previous.references[id];
      const after = references[id];
      if (!before) { diffs.push(`  + ${id} gained a verification_v2 block`); continue; }
      if (!after) { diffs.push(`  - ${id} lost its verification_v2 block`); continue; }
      if (before.checked !== after.checked) diffs.push(`  ~ ${id} checked ${before.checked} → ${after.checked}`);
      if (before.claims !== after.claims) diffs.push(`  ~ ${id} claims ${before.claims} → ${after.claims}`);
      const beforeById = new Map(before.sources.map((s) => [s.id, s]));
      const afterById = new Map(after.sources.map((s) => [s.id, s]));
      for (const [sid, b] of beforeById) {
        const a = afterById.get(sid);
        if (!a) { diffs.push(`  - ${id}/${sid} source removed (${b.kind}, captured ${b.captured})`); continue; }
        if (a.kind !== b.kind) diffs.push(`  ~ ${id}/${sid} kind ${b.kind} → ${a.kind}`);
        if (a.captured !== b.captured) diffs.push(`  ~ ${id}/${sid} captured ${b.captured} → ${a.captured}`);
        if (a.host !== b.host) diffs.push(`  ~ ${id}/${sid} host ${b.host} → ${a.host}`);
      }
      for (const sid of afterById.keys()) if (!beforeById.has(sid)) diffs.push(`  + ${id}/${sid} source added (${afterById.get(sid).kind}, captured ${afterById.get(sid).captured})`);
    }
    console.error(`\n[evidence-ledger] ${diffs.length} change(s):`);
    for (const line of diffs.slice(0, 40)) console.error(line);
    if (diffs.length > 40) console.error(`  … ${diffs.length - 40} more`);
  }
  process.exit(1);
}

writeFileSync(OUT_FILE, serialized);
console.log(`[evidence-ledger] wrote ${ledger.references_with_verification_v2} references · ${sourceCount} sources`);
for (const [kind, n] of Object.entries(ledger.sources_by_kind)) console.log(`  ${String(n).padStart(4)}  ${kind}`);
