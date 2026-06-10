#!/usr/bin/env node
/**
 * first-60s 벤치마크 채점기 — 릴리스마다 동일 기준으로 omd:init 런타임 품질을 추적.
 *
 * 사용법:
 *   1. 빈 디렉토리에 설치: npx -y oh-my-design-cli@<ver> install-skills --all --agent claude-code --dir <dir>
 *   2. 그 디렉토리에서 헤드리스 실행:
 *      claude --dangerously-skip-permissions -p "Set up our design system — <ref>-style, ... (벤치 모드: 레퍼런스 <ref> 확정, 루트 부트스트랩, §11-13 skip)"
 *   3. 채점: node scripts/bench/score-init.mjs --dir <dir> --ref <ref>
 *
 * 점수 10점 만점. 결과는 research/bench-results.jsonl에 append (research/는 gitignore — 로컬 장부).
 */
import { readFileSync, existsSync, appendFileSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const get = (flag) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};
const dir = get('--dir');
const ref = get('--ref');
if (!dir || !ref) {
  console.error('usage: score-init.mjs --dir <benchdir> --ref <referenceId> [--version <cliVersion>] [--notes <s>]');
  process.exit(2);
}

const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : null);
const h2set = (md) =>
  new Set([...md.matchAll(/^## (.+)$/gm)].map((m) => m[1].replace(/\s+/g, ' ').trim()));

const rootDesign = read(join(dir, 'DESIGN.md'));
const refDesign = read(join(dir, '.claude/data/references', ref, 'DESIGN.md'));
const initCtxRaw = read(join(dir, '.omd/init-context.json'));

const checks = {};

// 1. 루트 DESIGN.md 생성 (2점) — 부트스트랩의 존재 증명
checks.design_md_written = rootDesign ? 2 : 0;

// 2. init-context 기록 + reference_id 일치 (2점) — 흐름이 절차대로 흘렀는가
let initCtx = null;
try { initCtx = initCtxRaw ? JSON.parse(initCtxRaw) : null; } catch { /* malformed */ }
checks.init_context_ref = initCtx?.reference_id === ref ? 2 : 0;

// 3. 섹션 구조 보존 (1점) — 레퍼런스 H2의 80% 이상이 동일하게 존재 (구조 frozen 규칙)
if (rootDesign && refDesign) {
  const refH2 = h2set(refDesign);
  const got = h2set(rootDesign);
  const kept = [...refH2].filter((h) => got.has(h)).length;
  checks.structure_preserved = refH2.size > 0 && kept / refH2.size >= 0.8 ? 1 : 0;
} else checks.structure_preserved = 0;

// 4. 날조 아님 (1점) — 레퍼런스를 실제로 읽었다는 흔적: 레퍼런스 §2의 hex 토큰 중
//    하나 이상이 결과물에 등장 (delta_set은 색을 shift할 수 있으나 전부 바꾸진 않음)
if (rootDesign && refDesign) {
  const refHex = [...new Set(refDesign.match(/#[0-9a-fA-F]{6}\b/g) ?? [])];
  checks.catalog_actually_read = refHex.some((c) => rootDesign.includes(c)) ? 1 : 0;
} else checks.catalog_actually_read = 0;

// 5. verbatim 복사 아님 (1점) — variation이어야 함
checks.is_variation =
  rootDesign && refDesign && rootDesign.trim() !== refDesign.trim() ? 1 : 0;

// 6. philosophy 레이어 존재 (1점) — §10 Voice류 섹션이 살아 있는가
checks.philosophy_layer =
  rootDesign && /## 1[0-5]\.|Voice|보이스/.test(rootDesign) ? 1 : 0;

// 7. §11-13 정직성 (1점) — skip 지시 시 거짓 브랜드 서사 대신 placeholder
checks.no_fabricated_narrative =
  rootDesign && /FILL IN|omd:limitation|\[작성 필요|placeholder/i.test(rootDesign) ? 1 : 0;

// 8. 셤 설치 (1점) — CLAUDE.md/AGENTS.md가 DESIGN.md를 가리킴
const claudeMd = read(join(dir, 'CLAUDE.md')) ?? '';
const agentsMd = read(join(dir, 'AGENTS.md')) ?? '';
checks.shims_installed =
  claudeMd.includes('DESIGN.md') || agentsMd.includes('DESIGN.md') ? 1 : 0;

const score = Object.values(checks).reduce((a, b) => a + b, 0);
const result = {
  date: new Date().toISOString(),
  ref,
  cli_version: get('--version') ?? null,
  score,
  max: 10,
  checks,
  notes: get('--notes') ?? '',
};

console.log(JSON.stringify(result, null, 2));

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const ledger = join(repoRoot, 'research/bench-results.jsonl');
mkdirSync(dirname(ledger), { recursive: true });
appendFileSync(ledger, JSON.stringify(result) + '\n');
console.error(`appended → ${ledger}`);
