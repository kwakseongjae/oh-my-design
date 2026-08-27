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
  // Distinct from `problems`: how much each check actually examined. A check
  // that looked at one string of 181 must not read the same as one that looked
  // at all of them, and neither must read as "verified" — that conflation is
  // what let 66 already-migrated bodies pass A5 without a single machine
  // comparison, and funnow/furiosaai pass with a token one.
  const coverage = [];
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
  // A5: brand-published strings move as bytes. The legacy files quote real UI
  // copy — CTA labels, forum names, state messages — and a translation or an
  // English paraphrase silently destroys the thing the reference exists to
  // carry. Only contiguous non-Latin runs are checked, because those cannot be
  // coincidental and cannot survive paraphrase: if the run is gone from all
  // three outputs, the copy is gone, not relocated. A run recorded in the log
  // as a deletion still counts as present here — the ledger is the audit trail,
  // and A5 asks that the loss be visible, not that nothing ever be dropped.
  // Quote forms the legacy files actually use, CJK brackets included — copy is
  // quoted with 「」 and （） as often as with " " in the JP/TW references.
  // Each pair must open and close with the SAME mark. The earlier form put every
  // delimiter in one character class, so a closing backtick could pair with the
  // opening quote of the next label and swallow it: on the fastcampus green ramp
  // the span `") — success state, "` matched, and `"수강신청 완료"` never became a
  // needle. Three published labels were lost under a PASS that way.
  // Regex literals, not strings: writing these as strings ate the backslashes
  // and turned the paren branch into `(([^)\n]{2,60}))`, which required no
  // parens at all and matched any prose — every fixture's own sentence became
  // a needle. Literals also keep each pair readable as a pair.
  const QUOTED_COPY = new RegExp([
    /`([^`\n]{2,60})`/,                    // backtick pair
    /"([^"\n]{2,60})"/,                    // straight double
    /\u201c([^\u201d\n]{2,60})\u201d/,     // curly double, open -> close
    /\u300c([^\u300d\n]{2,60})\u300d/,     // 「」
    /\u300e([^\u300f\n]{2,60})\u300f/,     // 『』
    /\uff08([^\uff09\n]{2,60})\uff09/,     // （）
    /\(([^)\n]{2,60})\)/,                  // ()
  ].map((r) => r.source).join("|"), "g");
  // A comma ends a run: the legacy `use:` fields routinely join several labels
  // into one line ("자세히 보기, 광고계정 생성하기, 시작하기"), and treating the
  // joined line as a single published string reports a loss when every label
  // survives separately. A5's unit is the label.
  const NONLATIN_RUN = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af][\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af0-9\s\u00b7.!?]*[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/g;  // `,` `/` 미포함 = 구분자
  // Two needle shapes per quotation. The whole quoted string is the better
  // needle when it carries any non-Latin: it survives mixed labels like
  // "企業・IR" whose non-Latin run alone is too short to trust, and its length
  // makes a coincidental match elsewhere in the outputs far less likely. The
  // contiguous run stays as the fallback for copy quoted inside a longer
  // sentence. Both are still substring tests, so a needle that happens to sit
  // inside an unrelated quotation reads as preserved — a known limit, and the
  // reason semantic review keeps looking at copy too.
  const copyRuns = new Set();
  const quotedAll = new Set();
  const quotedWithNeedle = new Set();
  for (const m of legacy.matchAll(QUOTED_COPY)) {
    const quoted = (m.slice(1).find((g) => g != null) ?? "").trim();
    if (!quoted) continue;
    quotedAll.add(quoted);
    // Only the contiguous non-Latin segments become needles. Using the whole
    // quotation was tried and reverted: the legacy files quote descriptions as
    // often as copy ("Top utility nav (로그인 / 관심 / 최근)"), so whole-quotation
    // needles reported losses for prose that never was a published string,
    // while the labels inside it had survived. A blocking gate that cries wolf
    // gets worked around, which is the E3 failure mode it exists to prevent —
    // so this check buys precision with recall, and semantic review keeps
    // reading the copy that short or mixed-script labels slip past.
    for (const run of quoted.match(NONLATIN_RUN) ?? []) {
      const t = run.trim();
      if (t.length >= 4) { copyRuns.add(t); quotedWithNeedle.add(quoted); }
    }
  }
  // Where the string has to survive: the portable body or the provenance
  // sidecar. The log counts too, but only when its line actually dispositions
  // the string as dropped — a ledger that merely quotes a string it did not
  // keep would otherwise mask the very absence this check exists to surface.
  const logLinesFor = (t) => log.split("\n").filter((l) => l.includes(t));
  const DISPOSITIONED = /삭제|제거|미이관|드롭|deleted|removed|omitted|dropped|not\s+carried|withheld/i;
  const lostCopy = [...copyRuns].filter((t) => {
    if (doc.includes(t) || provenance.includes(t)) return false;
    return !logLinesFor(t).some((l) => DISPOSITIONED.test(l));
  });
  if (lostCopy.length) {
    problems.push({ check: "copy-loss", detail: lostCopy.slice(0, 6).join(" / "), count: lostCopy.length });
  }
  // How much of the published copy this check actually looked at.
  //
  // The first version of this reported only the zero case, which was the same
  // mistake one level up: a single needle silenced the warning while the rest
  // went unexamined. furiosaai has exactly one non-Latin run, so the machine
  // compared 1 of its 181 quoted strings and said nothing — a hand sweep then
  // found 27 non-survivors. Full coverage and 1% coverage must not share a
  // face, so the ratio is always reported rather than a boolean.
  //
  // Measured per quoted string, not per needle: needles are runs *inside*
  // quotations, so counting them against quotations would not be a ratio.
  coverage.push({
    check: "copy-loss",
    compared: quotedWithNeedle.size,
    candidates: quotedAll.size,
    detail: quotedWithNeedle.size === 0
      ? "바늘 0개 — 이 브랜드에서 A5는 기계 검사되지 않았다. 발행 라틴 문자열을 손으로 전수 대조하라."
      : `인용 문자열 ${quotedAll.size}개 중 ${quotedWithNeedle.size}개만 비교했다 — 나머지는 라틴이라 바늘이 되지 않는다. 라틴 전수 대조는 손으로 하라.`,
  });

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

  return { verdict: problems.length ? "MIGRATION_BLOCKED" : "PASS", problems, ...(coverage.length ? { coverage } : {}) };
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
    { name: "브랜드 카피 유실", doc: `${claims}\n#123456`, legacy: '본문 색은 #123456이고 CTA는 "지금 시작하기"다.', mustFlag: "copy-loss" },
    { name: "카피 삭제가 원장에 기록됨", doc: `${claims}\n#123456`, legacy: '본문 색은 #123456이고 CTA는 "지금 시작하기"다.', log: "| §10 | 삭제 — \"지금 시작하기\"는 가상 페르소나 인용이라 D2로 제거 |", mustNotFlag: "copy-loss" },
    { name: "원장이 인용만 하고 본문엔 없음", doc: `${claims}\n#123456`, legacy: '본문 색은 #123456이고 CTA는 "지금 시작하기"다.', log: "| §10 | 옮김 → Content: \"지금 시작하기\" |", mustFlag: "copy-loss" },
    { name: "콤마로 이어붙인 라벨 목록(오탐 금지)", doc: `${claims}\n자세히 보기 / 시작하기\n#123456`, legacy: '본문 색은 #123456이고 use는 "자세히 보기, 시작하기"다.', mustNotFlag: "copy-loss" },
    // The blind spot as three cases. The middle one is furiosaai's shape and is
    // the reason the boolean was replaced: one needle among many quotations
    // used to silence the report entirely.
    { name: "라틴 전용 원본 → 비교 0", doc: `${claims}\n#123456`, legacy: 'Body color is #123456 and the CTA reads "Get started".', coverage: { compared: 0 } },
    { name: "바늘 하나 + 라틴 다수 → 부분 비교를 숨기지 않는다", doc: `${claims}\n지금 시작하기\n#123456`, legacy: '색 #123456. CTA는 "지금 시작하기"이고 라벨은 "Get started"·"Talk to us"·"Read the docs"다.', coverage: { compared: 1, candidates: 4 } },
    { name: "전부 비라틴 → 전량 비교", doc: `${claims}\n지금 시작하기\n#123456`, legacy: '본문 색은 #123456이고 CTA는 "지금 시작하기"다.', coverage: { compared: 1, candidates: 1 } },
  ];
  return cases.map((c) => {
    const { name, doc, mustFlag, mustNotFlag, coverage } = c;
    const r = gateTexts(c.legacy ?? base.legacy, doc, base.provenance, c.log ?? base.log);
    const flagged = r.problems.map((p) => p.check);
    const cov = (r.coverage ?? []).find((x) => x.check === "copy-loss");
    const pass = coverage
      ? Boolean(cov) && Object.entries(coverage).every(([k, v]) => cov[k] === v)
      : mustNotFlag ? !flagged.includes(mustNotFlag)
      : flagged.includes(mustFlag);
    return { case: name, pass, flagged, ...(cov ? { coverage: `${cov.compared}/${cov.candidates}` } : {}) };
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

// The worker/auditor prose below is the canonical prompt text; the execution
// path under it is not. Roles now run as host subagents (grok and codex are
// both retired), so --print-prompt hands the same text to whoever executes it
// and keeps one source of truth for what a worker or auditor is told.
if (flag("print-prompt")) {
  const which = arg("print-prompt");
  if (which !== "worker" && which !== "auditor") { console.error("--print-prompt worker|auditor"); process.exit(1); }
  console.log(which === "worker" ? workerPrompt(brand, outDir) : auditorPrompt(brand, outDir));
  process.exit(0);
}

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
