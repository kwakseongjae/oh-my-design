#!/usr/bin/env node
/**
 * propose-verification-v2.mjs — `.verification.md`에서 `verification_v2` 블록 **초안**을
 * 만든다. 파일은 쓰지 않는다.
 *
 * 왜 초안인가 (2026-09-17). 이 블록의 존재 이유는 *누군가 각 클레임을 명시된 표면에
 * 대조했다*는 것이다. 파일이 있다는 이유로 모든 leaf에 클레임을 붙이면 아무도 확인하지
 * 않은 커버리지를 주장하게 되고, 블록이 의미를 잃는다.
 * 기각한 두 시도와 사유: `docs/VERIFICATION_V2_BACKLOG_2026-09-17.md`.
 *
 * 그래서 이 스크립트는 **사실만 추출하고 판단은 넘긴다**:
 *
 *   기계가 읽는 것 — `**Inspected:**` 날짜, `**Method:**` 문장, `**Sources:**` URL 목록,
 *                     `### Raw samples` 각 줄
 *   사람이 정하는 것 — 어느 토큰 leaf가 어느 관측에서 나왔는가
 *
 * leaf마다 값이 등장하는 raw sample 줄을 찾아 후보로 제시하고, 못 찾은 leaf는
 * `unmatched`로 따로 낸다. 후보가 여럿이면 전부 보여주고 고르지 않는다.
 *
 * usage:
 *   node scripts/propose-verification-v2.mjs <id> [--json]
 *   node scripts/propose-verification-v2.mjs --survey    # 188건 매칭률 요약
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readReferenceSource } from "./lib/reference-source.mjs";
import yaml from "js-yaml";
import { collectCanonicalClaimPaths } from "./lib/reference-quality.mjs";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFS = join(WEB, "references");

function readRef(id) {
  const design = join(REFS, id, "DESIGN.md");
  const verification = join(REFS, id, ".verification.md");
  if (!existsSync(design)) return null;
  // Through the package-aware reader: an adopted reference keeps its frontmatter
  // in `.omd/`, and reading the raw file would return a Core body this parses to nothing.
  const markdown = readReferenceSource(join(REFS, id)).markdown;
  let front;
  try { front = yaml.load(markdown.match(/^---\n([\s\S]*?)\n---/)[1], { schema: yaml.JSON_SCHEMA }); }
  catch { return null; }
  return {
    id,
    tokens: front?.tokens ?? null,
    hasBlock: Boolean(front?.verification_v2),
    verification: existsSync(verification) ? readFileSync(verification, "utf8") : "",
  };
}

/** 검증 파일에서 사실만 뽑는다. 추론하지 않는다. */
function readVerificationFacts(text) {
  const inspected = text.match(/^\*\*Inspected:\*\*\s*([0-9]{4}-[0-9]{2}-[0-9]{2})/m)?.[1]
    ?? text.match(/Verification Notes \(([0-9]{4}-[0-9]{2}-[0-9]{2})\)/)?.[1]
    ?? null;
  const method = text.match(/^\*\*Method:\*\*\s*(.+)$/m)?.[1]?.trim() ?? null;

  const sources = [];
  const sourceBlock = text.match(/^\*\*Sources:\*\*\s*$([\s\S]*?)(?=^\s*$|^#{2,3}\s)/m)?.[1] ?? "";
  for (const line of sourceBlock.split("\n")) {
    const url = line.match(/https?:\/\/[^\s,)]+/)?.[0];
    if (!url) continue;
    const note = line.replace(/^\s*[-*]\s*/, "").replace(url, "").replace(/^[\s—–-]+/, "").trim();
    sources.push({ url, note });
  }
  // `### Surfaces inspected` 형태의 옛 관례도 읽는다.
  if (sources.length === 0) {
    const surfaceBlock = text.match(/^###\s+Surfaces inspected[^\n]*$([\s\S]*?)(?=^#{2,3}\s)/m)?.[1] ?? "";
    for (const line of surfaceBlock.split("\n")) {
      const bare = line.match(/`([^`]+)`/)?.[1] ?? line.match(/https?:\/\/[^\s,)]+/)?.[0];
      if (!bare) continue;
      sources.push({ url: bare.startsWith("http") ? bare : `https://${bare}`, note: "" });
    }
  }

  const samples = [];
  const sampleBlock = text.match(/^###\s+Raw (?:samples|observations)[^\n]*$([\s\S]*?)(?=^##\s)/m)?.[1] ?? "";
  for (const line of sampleBlock.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || !/^[-*]\s|^\*\*/.test(trimmed)) continue;
    samples.push(trimmed.replace(/^[-*]\s*/, ""));
  }
  return { inspected, method, sources, samples };
}

/** 토큰 leaf 값을 꺼낸다. */
function leafValue(tokens, path) {
  return path.split(".").slice(1).reduce((node, key) => (node == null ? node : node[key]), tokens);
}

/** 값이 어느 raw sample 줄에 등장하는가. 여러 줄이면 전부 반환한다. */
function matchSamples(value, samples) {
  if (value === undefined || value === null) return [];
  const needle = String(value).trim().toLowerCase();
  if (needle.length < 3) return [];        // "0", "8" 같은 값은 우연히 맞는다
  return samples.filter((line) => line.toLowerCase().includes(needle));
}

export function proposeVerification(id) {
  const ref = readRef(id);
  if (!ref) return { id, ok: false, reason: "unreadable" };
  if (ref.hasBlock) return { id, ok: false, reason: "already-has-verification_v2" };
  if (!ref.verification) return { id, ok: false, reason: "no-verification-file" };

  const facts = readVerificationFacts(ref.verification);
  const paths = collectCanonicalClaimPaths(ref.tokens);
  const matched = [];
  const ambiguous = [];
  const unmatched = [];
  for (const path of paths) {
    const value = leafValue(ref.tokens, path);
    const hits = matchSamples(value, facts.samples);
    if (hits.length === 1) matched.push({ path, value, sample: hits[0] });
    else if (hits.length > 1) ambiguous.push({ path, value, samples: hits });
    else unmatched.push({ path, value });
  }
  return { id, ok: true, facts, counts: { paths: paths.length, matched: matched.length, ambiguous: ambiguous.length, unmatched: unmatched.length }, matched, ambiguous, unmatched };
}

const argv = process.argv.slice(2);
const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  if (argv.includes("--survey")) {
    const rows = [];
    for (const id of readdirSync(REFS).sort()) {
      const r = proposeVerification(id);
      if (!r.ok) continue;
      rows.push({ id, ...r.counts, sources: r.facts.sources.length, inspected: r.facts.inspected });
    }
    const total = rows.reduce((a, r) => ({ paths: a.paths + r.paths, matched: a.matched + r.matched, ambiguous: a.ambiguous + r.ambiguous, unmatched: a.unmatched + r.unmatched }), { paths: 0, matched: 0, ambiguous: 0, unmatched: 0 });
    console.log(`[propose-verification] ${rows.length} references without a verification_v2 block but with a verification file`);
    console.log(`  canonical paths ${total.paths} — matched ${total.matched} (${(100 * total.matched / total.paths).toFixed(1)}%) · ambiguous ${total.ambiguous} · unmatched ${total.unmatched}`);
    console.log(`  references whose facts parse cleanly (date + >=1 source): ${rows.filter((r) => r.inspected && r.sources).length}`);
    rows.sort((a, b) => (b.matched / b.paths) - (a.matched / a.paths));
    console.log("\n  best coverage:");
    for (const r of rows.slice(0, 12)) console.log(`    ${String(Math.round(100 * r.matched / r.paths)).padStart(3)}%  ${r.id.padEnd(16)} ${r.matched}/${r.paths} matched, ${r.unmatched} unmatched`);
    process.exit(0);
  }

  const target = argv.find((a) => !a.startsWith("--"));
  if (!target) { console.error("usage: propose-verification-v2.mjs <id> [--json] | --survey"); process.exit(2); }
  const result = proposeVerification(target);
  if (argv.includes("--json")) { console.log(JSON.stringify(result, null, 2)); process.exit(result.ok ? 0 : 1); }
  if (!result.ok) { console.error(`[propose-verification] ${target}: ${result.reason}`); process.exit(1); }

  const { facts, counts } = result;
  console.log(`[propose-verification] ${target}`);
  console.log(`  inspected: ${facts.inspected ?? "NOT FOUND"}`);
  console.log(`  method:    ${facts.method ? facts.method.slice(0, 90) : "NOT FOUND"}`);
  console.log(`  sources:   ${facts.sources.length}`);
  for (const s of facts.sources) console.log(`    ${s.url}${s.note ? ` — ${s.note.slice(0, 60)}` : ""}`);
  console.log(`  raw samples: ${facts.samples.length}`);
  console.log(`\n  canonical paths ${counts.paths}: matched ${counts.matched} · ambiguous ${counts.ambiguous} · unmatched ${counts.unmatched}`);
  if (result.unmatched.length) {
    console.log("\n  unmatched (a human decides whether these are covered):");
    for (const u of result.unmatched.slice(0, 15)) console.log(`    ${u.path.padEnd(44)} ${String(u.value).slice(0, 44)}`);
    if (result.unmatched.length > 15) console.log(`    … ${result.unmatched.length - 15} more`);
  }
}
