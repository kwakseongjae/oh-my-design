#!/usr/bin/env node
/**
 * taste-loop 벤치마크 채점기 — 릴리스마다 동일 기준으로 취향 피드백 루프
 * (remember 캡처 → pending 반영 → fold-in 게이트)의 런타임 품질을 추적.
 *
 * 이 스크립트는 claude를 직접 호출하지 않는다 — 헤드리스 런은 오퍼레이터가
 * 수행하고, 여기서는 그 산출물만 채점한다 (절차는 scripts/bench/README.md):
 *   1. first-60s 벤치를 마친 디렉토리(DESIGN.md 존재)에서 교정 발화 런:
 *      claude --dangerously-skip-permissions -p \
 *        "버튼은 전부 pill 모양으로 하고, 카피에 이모지는 절대 쓰지 마. 기억해줘." \
 *        2>&1 | tee taste-run1.txt
 *   2. 반영 확인 런 (산출물 1개 파일로):
 *      claude --dangerously-skip-permissions -p \
 *        "DESIGN.md 기반으로 CTA 버튼이 있는 hero 섹션을 hero.html 한 파일로 만들어줘"
 *   3. 채점: node scripts/bench/score-taste.mjs --dir <dir> --ref <ref> \
 *        [--transcript <dir>/taste-run1.txt] [--artifact <dir>/hero.html] \
 *        [--scopes components.button,voice] [--version <ver>] [--notes <s>]
 *
 * 점수 10점 만점. 결과는 research/bench-results.jsonl에 append
 * (research/는 gitignore — 로컬 장부, bench: "taste-loop"로 구분).
 */
import { readFileSync, existsSync, appendFileSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

const args = process.argv.slice(2);
const get = (flag) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};
const dir = get('--dir');
const ref = get('--ref');
if (!dir || !ref) {
  console.error(
    'usage: score-taste.mjs --dir <benchdir> --ref <referenceId> [--transcript <file>] [--artifact <file>] [--scopes <a,b>] [--version <cliVersion>] [--notes <s>]',
  );
  process.exit(2);
}

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const read = (p) => (p && existsSync(p) ? readFileSync(p, 'utf8') : null);

// 공유 파서 — 벤치 디렉토리에 설치된 사본을 우선 (배포물 자체를 검증),
// 없으면 repo 사본으로 폴백.
const require_ = createRequire(import.meta.url);
const parserPath = [
  join(dir, '.claude/hooks/lib/preferences-parser.cjs'),
  join(repoRoot, '.claude/hooks/lib/preferences-parser.cjs'),
].find((p) => existsSync(p));
const { parsePreferences } = require_(parserPath);

const prefsText = read(join(dir, '.omd/preferences.md'));
const transcript = read(get('--transcript'));
const artifact = read(get('--artifact'));
// 기본 시나리오: "pill 버튼 + 이모지 금지" → components.button + voice.
// 다른 시나리오는 --scopes로 기대 scope를 넘긴다 (데이터 주도).
const expectedScopes = (get('--scopes') ?? 'components.button,voice')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const checks = {};

// 1. pending 엔트리가 canonical 포맷으로 존재 (2점) — 캡처의 존재 증명.
//    텍스트 레벨 검사: ## heading + ```omd-meta 블록 + status: pending.
checks.pending_entry_canonical =
  prefsText &&
  /^## .+$/m.test(prefsText) &&
  /```omd-meta\n[\s\S]*?status:\s*pending[\s\S]*?\n```/.test(prefsText)
    ? 2
    : 0;

// 파싱은 한 번만 — 이하 체크들이 공유.
const entries = prefsText ? parsePreferences(prefsText) : [];
const pending = entries.filter((e) => e.status === 'pending');

// 2. 올바른 scope (1점) — 기대 scope가 전부 pending에 등장하는가.
const pendingScopes = new Set(pending.map((e) => e.scope));
checks.correct_scope =
  expectedScopes.length > 0 && expectedScopes.every((s) => pendingScopes.has(s))
    ? 1
    : 0;

// 3. 파서 왕복 (1점) — preferences-parser.cjs가 실제로 파싱 가능한가
//    (id + 유효 timestamp + scope를 가진 pending 엔트리 ≥1).
checks.parser_roundtrip = pending.some(
  (e) =>
    /^pref_[a-z0-9]+_[0-9a-f]{8}$/.test(e.raw.id ?? '') &&
    !Number.isNaN(e.timestamp) &&
    e.scope,
)
  ? 1
  : 0;

// 4. 레퍼런스 충돌 고지 (1점) — preference가 DESIGN.md와 모순될 때 (예: pill
//    취향 vs 레퍼런스의 radius 제약) transcript에서 충돌을 알렸는가.
//    transcript 미제공 시 채점 불가 → 0.5 (skip 기본값).
if (transcript) {
  checks.conflict_flagged = /충돌|conflict|contradict|모순|상충/i.test(transcript)
    ? 1
    : 0;
} else {
  checks.conflict_flagged = 0.5;
}

// 5. 2차 런 산출물이 preference를 반영 (3점) — pending 엔트리 본문에서
//    검증 가능한 reflector를 도출해 산출물에 적용 (데이터 주도: 시나리오가
//    바뀌어도 매칭되는 reflector만 채점).
const reflectors = [];
for (const e of pending) {
  const body = e.body ?? '';
  // pill radius — components.button + pill류 본문 → border-radius 999/9999/full
  if (
    e.scope === 'components.button' &&
    /pill|fully.?rounded|rounded.?full|9{3,4}/i.test(body)
  ) {
    reflectors.push({
      name: `pill-radius (${e.raw.id ?? '?'})`,
      pass: (a) => /rounded-full|border-radius[^;\n]{0,24}\b9{3,4}\d*px|\b9{3,4}px\b/i.test(a),
    });
  }
  // no-emoji — voice + 이모지 금지류 본문 → 산출물에 이모지 코드포인트 부재
  if (
    e.scope === 'voice' &&
    /emoji|이모지/i.test(body) &&
    /\bno\b|never|not|않|금지|마(라|세요)?\b/i.test(body)
  ) {
    reflectors.push({
      name: `no-emoji (${e.raw.id ?? '?'})`,
      pass: (a) => !/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u.test(a),
    });
  }
}
let reflectorDetail = [];
if (artifact && reflectors.length > 0) {
  const passed = reflectors.filter((r) => r.pass(artifact));
  reflectorDetail = reflectors.map((r) => `${r.name}: ${r.pass(artifact) ? 'pass' : 'fail'}`);
  checks.artifact_reflects = Math.round((passed.length / reflectors.length) * 3 * 2) / 2;
} else {
  checks.artifact_reflects = 0; // 산출물 미제공 또는 검증 가능한 reflector 없음
}

// 6. 다음 세션에서 surface 되는가 (2점) — 벤치 디렉토리에 설치된
//    session-state-loader 훅을 그대로 실행해 (simulated SessionStart)
//    fold-in 제안 또는 pending 카운트가 컨텍스트에 실리는지 확인.
const loaderPath = [
  join(dir, '.claude/hooks/session-state-loader.cjs'),
  join(repoRoot, '.claude/hooks/session-state-loader.cjs'),
].find((p) => existsSync(p));
let loaderCtx = '';
if (loaderPath) {
  const res = spawnSync('node', [loaderPath], {
    input: '{}',
    encoding: 'utf8',
    env: { ...process.env, CLAUDE_PROJECT_DIR: dir },
  });
  try {
    loaderCtx = JSON.parse(res.stdout || '{}').hookSpecificOutput?.additionalContext ?? '';
  } catch {
    loaderCtx = '';
  }
}
checks.session_start_surfaced =
  /OMD FOLD-IN PROPOSAL/.test(loaderCtx) || /Pending preferences: [1-9]/.test(loaderCtx)
    ? 2
    : 0;

const score = Object.values(checks).reduce((a, b) => a + b, 0);
const result = {
  date: new Date().toISOString(),
  bench: 'taste-loop',
  ref,
  cli_version: get('--version') ?? null,
  score,
  max: 10,
  checks,
  expected_scopes: expectedScopes,
  reflectors: reflectorDetail,
  notes: get('--notes') ?? '',
};

console.log(JSON.stringify(result, null, 2));

const ledger = join(repoRoot, 'research/bench-results.jsonl');
mkdirSync(dirname(ledger), { recursive: true });
appendFileSync(ledger, JSON.stringify(result) + '\n');
console.error(`appended → ${ledger}`);
