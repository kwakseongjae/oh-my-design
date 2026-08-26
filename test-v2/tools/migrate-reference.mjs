/**
 * Legacy → Core v2 migration harness (T1-4).
 *
 * The plan's original bar — "reproduce the golden samples with a tool, diff
 * 0" — assumed migration was mechanical. T1-3 showed it is not: the mapping is
 * approved, but applying it means reading meaning (which sentence is an
 * authority qualifier, which persona is fictional), and a judgment-free parser
 * would re-create exactly the semantic inversions sol caught. So the harness
 * splits the work the way T1-3 actually succeeded:
 *
 *   worker (grok-4.6)  judgment — reads the legacy doc, applies the approved
 *                      mapping under the accumulated constraints
 *   gate (this file)   enforcement — every defect class found so far, checked
 *                      mechanically; a red gate blocks the reference
 *
 * The gate encodes the full defect history: token loss/invention (opus5 lane),
 * [FILL IN] emission, §14 deletion, and the three semantic patterns from sol's
 * FAIL — "not captured" used as not-applicable grounds, fictional demographics
 * in provenance, coverage-complete claims. What the gate cannot check (novel
 * semantic drift) is what sol's sampling lane remains for.
 *
 *   node migrate-reference.mjs --brand notion             # worker + gate
 *   node migrate-reference.mjs --brand notion --gate-only # re-run gate alone
 */

import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..", "..");
const LEGACY_ROOT = join(ROOT, "web", "references");
const OUT_ROOT = join(ROOT, "docs", "design-md-weight", "migrated");
const GROK = join(homedir(), ".grok", "bin", "grok");

const arg = (n) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? undefined : process.argv[i + 1]; };
const flag = (n) => process.argv.includes(`--${n}`);

const RULEBOOK_PATH = join(ROOT, "docs", "design-md-weight", "MIGRATION_RULEBOOK.md");

/** The rulebook file names its own version; hardcoding one here would let the
 * prompt claim a version the file has outgrown. */
export function rulebookVersion() {
  const m = /\*\*v(\d+)[^*]*\*\*/.exec(readFileSync(RULEBOOK_PATH, "utf8"));
  return m ? `v${m[1]}` : "v?";
}

/** Portable Core = the seven MUST claims, as approved in essence-verdict. */
const PORTABLE_CORE_CLAIMS = [
  "scope", "primary-tasks", "foundations", "authority",
  "application-priority", "unknowns", "changes",
];

/* ------------------------------------------------------------- worker ----- */

function workerPrompt(brand, outDir) {
  return [
    `T2 마이그레이션 워커. web/references/${brand}/DESIGN.md (legacy)를 Core v2로 옮긴다.`,
    "",
    "읽을 것 (순서대로):",
    "1. spec/design-md-core-v2.md — 목적지 규격 (§4.4 state applicability 의미 포함)",
    "2. docs/design-md-weight/2026-08-22-essence-verdict.md — 승인된 legacy→Core 대응표",
    "3. docs/reviews/t1-2-essence-2026-08-23-rereview.md — T1-3 제약 5",
    "4. docs/reviews/t1-3-golden-2026-08-23-sol-review.md §5 — 의미 보존 조건 (골든 샘플이 이걸 어겨 전부 FAIL했다)",
    "5. docs/design-md-weight/golden-samples/musinsa/ — 승인된 모범 (개정본. 형태를 이대로 따라라)",
    "",
    "하드 룰의 정본: docs/design-md-weight/MIGRATION_RULEBOOK.md — 전문을 읽고 전 조항을 지켜라.",
    "각 조항은 실제 FAIL에서 태어났다. 게이트가 기계화한 조항을 어기면 차단되고, 기계화 못 한 조항(C2·B2 등)은 sol 표본 검토가 잡는다.",
    `migration-log.md 머리에 사용한 규칙집 버전(${rulebookVersion()})을 기록해라.`,
    "",
    "",
    "의무 최종 패스 2개 (본문 작성이 끝난 뒤, 제출 전에 반드시 수행):",
    "패스 1 (B2a 스캔): DESIGN.md 전체를 처음부터 다시 읽어라. Principles 안팎을 불문하고 인과·해석·판단을 담은 모든 문장(Scope의 '그래서/때문에' 문장, Content의 voice 해석, Docs 인용의 성격 규정 포함)에 대해 근거 class를 자문해라 — 이것이 브랜드가 발행한 사실인가, 내가 관측에서 파생한 해석인가. 후자면 그 문장 인접에 한정을 붙여라. 세 웨이브 연속 이 스캔을 안 해서 FAIL했다.",
    "패스 2 (E2 대조): migration-log의 각 행을 쓰기 전에, 그 값이 실제로 어느 파일 어느 절에 있는지 grep으로 확인해라. 기억으로 쓰지 마라. 한 값이 두 곳에 있으면(DESIGN.md와 provenance 양쪽 등) 로그에 두 목적지를 모두 적어라. 준수 주장('B3 유지' 등)은 본문에 그 전문이 실재할 때만 적어라.",
    "",
    `출력: ${outDir}/DESIGN.md + ${outDir}/provenance.md + ${outDir}/migration-log.md`,
    "migration-log.md는 legacy 섹션별 [옮김→어디 / 분리→provenance / 삭제+사유] 표.",
    "마지막 줄에 'DONE migrated=1'을 출력해라.",
  ].join("\n");
}

/* --------------------------------------------------------------- gate ----- */

const TOKEN_PATTERNS = [
  ["hex", /#[0-9a-fA-F]{6}\b/g],
  ["px", /\b\d+(?:\.\d+)?px\b/g],
  ["rem", /\b\d+(?:\.\d+)?rem\b/g],
  ["ms", /\b\d+ms\b/g],
  ["pct", /\b\d+(?:\.\d+)?%/g],
];

function tokenBag(text) {
  const out = new Map();
  for (const [kind, re] of TOKEN_PATTERNS) {
    for (const m of text.matchAll(re)) {
      const k = `${kind}:${m[0].toLowerCase()}`;
      out.set(k, (out.get(k) ?? 0) + 1);
    }
  }
  return out;
}

export function gate(brand, outDir) {
  const problems = [];
  const legacyPath = join(LEGACY_ROOT, brand, "DESIGN.md");
  const docPath = join(outDir, "DESIGN.md");
  for (const [name, p] of [["DESIGN.md", docPath], ["provenance.md", join(outDir, "provenance.md")], ["migration-log.md", join(outDir, "migration-log.md")]]) {
    if (!existsSync(p)) problems.push({ check: "outputs", detail: `${name} missing` });
  }
  if (problems.length) return { brand, verdict: "MIGRATION_BLOCKED", problems };
  const r = gateTexts(
    readFileSync(legacyPath, "utf8"),
    readFileSync(docPath, "utf8"),
    readFileSync(join(outDir, "provenance.md"), "utf8"),
    readFileSync(join(outDir, "migration-log.md"), "utf8"),
  );
  return { brand, ...r };
}

export function gateTexts(legacy, doc, provenance, log) {
  const problems = [];
  const all = doc + provenance + log;

  // Token loss is checked across every output file — a value must survive
  // somewhere. Invention is checked against the PORTABLE DOC only: the
  // provenance ledger legitimately quotes values from sibling canonical files
  // (.verification.md colours, mirror SHAs) that the legacy DESIGN.md never
  // carried. Scanning the ledger for invention taught a worker to dodge the
  // scanner by writing "# faf9f5" with a space — an evasion the rulebook now
  // bans outright (E3). The gate stops rewarding it by not overreaching.
  const lt = tokenBag(legacy), nt = tokenBag(all), dt = tokenBag(doc);
  const lost = [...lt.keys()].filter((k) => !nt.has(k));
  const invented = [...dt.keys()].filter((k) => !lt.has(k));
  if (lost.length) problems.push({ check: "token-loss", detail: lost.slice(0, 8).join(", "), count: lost.length });
  if (invented.length) problems.push({ check: "token-invention", detail: invented.slice(0, 8).join(", "), count: invented.length });

  // Placeholder emission. Two different rules, learned from the approved 29cm
  // sample: the portable doc may never carry one (real placeholders are
  // "[FILL IN: ...]" with a colon, so match the prefix, not the exact
  // bracket-pair — the earlier exact match never fired on the real format).
  // provenance may QUOTE the source's placeholders as an omission ledger, so
  // only a placeholder string absent from the legacy source is an emission.
  if (/\[FILL IN/.test(doc)) problems.push({ check: "fill-in", detail: "placeholder in the portable doc" });
  // Only the concrete form ("[FILL IN: instruction]") must trace to the
  // source. The bare "[FILL IN]" token is how an omission ledger *talks about*
  // placeholders — 29cm's approved provenance uses it as a category label.
  for (const m of new Set((provenance + log).match(/\[FILL IN:[^\]]*\]/g) ?? [])) {
    // A ledger may abbreviate a long placeholder with an ellipsis; the prefix
    // before the ellipsis must still trace to the source verbatim.
    const probe = m.includes("…") ? m.slice(0, m.indexOf("…")) : m;
    if (!legacy.includes(probe)) {
      problems.push({ check: "fill-in", detail: `provenance carries a placeholder the source never had: "${m.slice(0, 60)}"` });
      break;
    }
  }

  // Portable Core: all seven MUST claims present exactly once.
  for (const claim of PORTABLE_CORE_CLAIMS) {
    const n = (doc.match(new RegExp(`design-md:claim ${claim}\\b`, "g")) ?? []).length;
    if (n !== 1) problems.push({ check: "portable-core", detail: `claim "${claim}" appears ${n}× (expected 1)` });
  }

  // §14 body: the legacy states content must not vanish while the graph is 0/440.
  if (/##\s*14|States/i.test(legacy) && !/state|상태/i.test(doc)) {
    problems.push({ check: "states-preserved", detail: "legacy has a states section but the migrated doc mentions none" });
  }

  // sol's semantic patterns, mechanised where a pattern exists.
  const naInversion = doc.match(/not-applicable[^\n]*(?:[Nn]ot (?:captured|named)|미관측|미기록)/g);
  if (naInversion) problems.push({ check: "na-inversion", detail: `${naInversion.length} row(s) use non-observation as not-applicable grounds` });
  // Negation-aware: "coverage is not complete" is the honest sentence the
  // approved samples carry — matching it as a claim flagged the exact opposite
  // of the defect.
  for (const m of doc.matchAll(/coverage[^\n]{0,40}?(?:complete|완료)/gi) ?? []) {
    if (!/\bnot\b|않|안 |불완전|미완/i.test(m[0])) {
      problems.push({ check: "coverage-claim", detail: `claims state coverage is complete: "${m[0].slice(0, 60)}"` });
      break;
    }
  }
  // A1a — verified unitless line-heights must survive as ratios. Converting
  // 1.71 to a fixed 24px kills the scaling semantics; linear.app lost five.
  const ratios = new Set((legacy.match(/lineHeight:\s*"?([\d.]+)"?/g) ?? [])
    .map((m) => m.replace(/lineHeight:\s*"?/, "").replace(/"$/, ""))
    .filter((v) => Number(v) < 3)); // unitless ratios, not px numbers
  const missingRatios = [...ratios].filter((v) => !all.includes(v));
  if (missingRatios.length) {
    problems.push({ check: "ratio-loss", detail: `unitless line-height(s) lost: ${missingRatios.join(", ")}` });
  }

  // A1b — verified component primitive types must survive. "Kind: interactive"
  // erases the button/link/tab distinction three references verified per
  // component.
  const typeCounts = {};
  for (const m of legacy.matchAll(/type:\s*"?(button|link|tab|card)"?/g)) typeCounts[m[1]] = (typeCounts[m[1]] ?? 0) + 1;
  for (const [t, n] of Object.entries(typeCounts)) {
    const kept = (all.match(new RegExp(`\\b${t}\\b`, "gi")) ?? []).length;
    if (kept === 0) problems.push({ check: "primitive-type-loss", detail: `legacy verifies type:${t} ×${n}; no output mentions "${t}"` });
  }

  // B1 — a focus-visible row may not carry a colour treatment the source
  // never attributed to focus-visible. Generic focus captures are a different
  // evidence type; notion's trial promoted three of them.
  // Narrowed to state-table rows after two workers dodged the broad line
  // regex by splitting sentences (and said so in their logs — sol's E3 catch).
  // The defect this guards is a focus-visible TABLE ROW carrying a treatment
  // value; prose that mentions focus-visible near a generic-focus observation
  // hex is legitimate and was the false positive being evaded.
  if (!/focus-visible/i.test(legacy)) {
    const rows = doc.match(/^\|[^|\n]*focus-visible[^|\n]*\|[^\n]*#[0-9a-fA-F]{6}[^\n]*$/gim);
    if (rows) problems.push({ check: "focus-visible-promotion", detail: `${rows.length} focus-visible table row(s) carry treatments but the source never records focus-visible` });
  }

  // D1 — a negative coverage claim may not introduce vocabulary the source
  // does not contain. "storefront rules were not captured" appeared in a
  // sample whose source never mentions a storefront.
  const legacyLower = legacy.toLowerCase();
  for (const sentence of doc.match(/[^\n.]*(?:not captured|were not|없었|않았다|미기록)[^\n.]*/g) ?? []) {
    const alien = (sentence.match(/[A-Za-z]{5,}/g) ?? [])
      .map((w) => w.toLowerCase())
      .filter((w) => !["captured", "capture", "resolved", "recorded", "verified", "observed", "current", "rules", "state", "states", "support", "because", "during", "cannot", "their", "these", "those", "which", "where"].includes(w))
      .filter((w) => !legacyLower.includes(w));
    if (alien.length) {
      problems.push({ check: "alien-negative-claim", detail: `negative claim introduces source-absent vocabulary [${[...new Set(alien)].slice(0, 4).join(", ")}]: "${sentence.trim().slice(0, 70)}"` });
      break;
    }
  }

  // Tool-specific prompts must not survive into the portable body.
  if (/omd-apply|\bnpx omd\b|프롬프트를 복사/i.test(doc)) {
    problems.push({ check: "tool-prompt", detail: "tool-specific command or prompt wrapper in the portable body" });
  }

  return { verdict: problems.length ? "MIGRATION_BLOCKED" : "PASS", problems };
}

/* ------------------------------------------------------------- selftest --- */

/**
 * Negative fixtures for the mechanised semantic checks. Each is the minimal
 * document that must BLOCK; the approved samples are the positive fixtures
 * (validated separately because they need the real legacy files).
 */
export function selftest() {
  const claims = PORTABLE_CORE_CLAIMS.map((c) => `<!-- design-md:claim ${c} -->`).join("\n");
  const base = { legacy: "본문 색은 #123456이고 focus 캡처만 있다.", provenance: "", log: "" };
  const cases = [
    { name: "na-inversion", doc: `${claims}\n| hover | not-applicable | Not captured |\n#123456`, mustFlag: "na-inversion" },
    { name: "focus-visible 승격", doc: `${claims}\n| focus-visible | #abcdef ring |\n#123456`, mustFlag: "focus-visible-promotion" },
    { name: "원본 밖 부정 claim", doc: `${claims}\nCurrent storefront error rules were not captured.\n#123456`, mustFlag: "alien-negative-claim" },
    { name: "coverage 완료 주장", doc: `${claims}\nState coverage is complete.\n#123456`, mustFlag: "coverage-claim" },
    { name: "claim 누락", doc: `#123456`, mustFlag: "portable-core" },
    { name: "[FILL IN] 방출", doc: `${claims}\n[FILL IN: later]\n#123456`, mustFlag: "fill-in" },
  ];
  return cases.map(({ name, doc, mustFlag }) => {
    const r = gateTexts(base.legacy, doc, base.provenance, base.log);
    return { case: name, pass: r.problems.some((p) => p.check === mustFlag), flagged: r.problems.map((p) => p.check) };
  });
}

/* ------------------------------------------------------------- auditor ---- */

/**
 * A fresh-session audit of the two clause families the migrating worker
 * cannot see in its own prose. Four waves established the pattern: every
 * clause with a mechanical or rule-shaped fix converged, while B2a
 * (unqualified interpretive sentences) and E2 (log accuracy) recurred even
 * after the worker recorded performing a self-scan — the author cannot judge
 * the interpretive status of sentences it just wrote. A revision session
 * handed sol's defect list converges 100% of the time, so this step gives a
 * fresh session the *task* of finding that list itself, before sol does.
 */
export function auditorPrompt(brand, outDir) {
  return [
    `B2a·E2 전담 감사. 너는 이관 워커가 아니라 감사자다. docs/design-md-weight/migrated 산출물에서 두 결함 계열만 찾아 직접 수정해라.`,
    "",
    `대상: ${outDir}/DESIGN.md + provenance.md + migration-log.md (원본: web/references/${brand}/DESIGN.md)`,
    "기준: docs/design-md-weight/MIGRATION_RULEBOOK.md 의 B2·B2a와 E1·E2·E2a–c. 다른 조항은 보지 마라.",
    "",
    "감사 절차:",
    "1. DESIGN.md의 모든 문장을 하나씩 분류해라: [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]. 세 번째 부류인데 인접 한정('derived editorial ... inference; not <Brand>-authored ...')이 없으면 그 자리에서 한정을 붙여라. Scope·Content·Principles 안팎 불문.",
    "2. migration-log의 각 행에 대해 그 값을 세 파일에서 grep으로 실제 확인해라. 목적지가 로그와 다르면 로그를 고쳐라(본문이 아니라 로그를). 이중 목적지는 둘 다 적어라. 준수 주장은 본문에 전문이 실재할 때만 남겨라.",
    "3. provenance가 derived 범위를 실제보다 좁거나 넓게 적었으면 실제에 맞춰라.",
    "",
    "수정 금지: 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 네 일은 한정 문장과 원장 정확성뿐이다.",
    `완료 후 ${outDir}/audit-log.md 에 수정 목록(문장 위치 + 무엇을 붙였나/고쳤나)을 쓰고, 마지막 줄에 'AUDIT_DONE fixes=<n>'을 출력해라.`,
  ].join("\n");
}

/* ---------------------------------------------------------------- main ---- */

import { pathToFileURL } from "node:url";
const isDirectRun = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (!isDirectRun) {
  // Imported for its gate — the CLI below must not run (it exits on import).
} else {
const brand = arg("brand");
if (!brand) { console.error("usage: migrate-reference.mjs --brand <id> [--gate-only]"); process.exit(1); }
if (!existsSync(join(LEGACY_ROOT, brand, "DESIGN.md"))) { console.error(`no legacy DESIGN.md for ${brand}`); process.exit(1); }

const outDir = join(OUT_ROOT, brand);
mkdirSync(outDir, { recursive: true });

if (!flag("gate-only")) {
  const startedAt = Date.now();
  let out = "";
  try {
    const { stdout } = await execFileAsync(GROK, ["-p", workerPrompt(brand, outDir), "-m", "grok-4.6", "--always-approve", "--cwd", ROOT], {
      maxBuffer: 64 * 1024 * 1024, timeout: 2400000,
    });
    out = stdout;
  } catch (e) {
    out = (e.stdout ?? "") + `\nWORKER_ERROR: ${String(e).split("\n")[0]}`;
  }
  writeFileSync(join(outDir, "worker-log.txt"), out, "utf8");
  console.error(`· worker done in ${((Date.now() - startedAt) / 1000).toFixed(0)}s`);

  // Fresh-session audit for the two author-blind clause families. A separate
  // process, so the auditor shares nothing with the session that wrote the
  // prose it is judging.
  const auditStart = Date.now();
  let auditOut = "";
  try {
    const { stdout } = await execFileAsync(GROK, ["-p", auditorPrompt(brand, outDir), "-m", "grok-4.6", "--always-approve", "--cwd", ROOT], {
      maxBuffer: 64 * 1024 * 1024, timeout: 1200000,
    });
    auditOut = stdout;
  } catch (e) {
    auditOut = (e.stdout ?? "") + `\nAUDIT_ERROR: ${String(e).split("\n")[0]}`;
  }
  writeFileSync(join(outDir, "auditor-log.txt"), auditOut, "utf8");
  console.error(`· auditor done in ${((Date.now() - auditStart) / 1000).toFixed(0)}s`);
}

const result = gate(brand, outDir);
console.log(JSON.stringify(result, null, 1));
process.exit(result.verdict === "PASS" ? 0 : 1);
}
