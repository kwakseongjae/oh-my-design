/**
 * E1 process-leak check — staged outside the gate on purpose.
 *
 * The portable Core v2 body has to stand on its own for someone who knows the
 * brand and nothing about how this catalog is built. Migration vocabulary —
 * "the catalog graph is not adopted", "the legacy spec template", wave numbers,
 * rulebook clause ids — names concepts only we hold, so it belongs in the
 * provenance ledger, never in the body. Verdict: t2-1-e1-process-leak-2026-08-26.
 *
 * Why it is a separate file right now: a dozen workers are running their own
 * `--gate-only` against migrate-reference.mjs, and editing a gate while agents
 * verify against it produces phantom passes and phantom blocks (see the rule in
 * README.md). This runs standalone until the harness is quiet, then folds in as
 * one more gateTexts() check.
 *
 *   node test-v2/tools/process-leak-check.mjs            # scan every migrated body
 *   node test-v2/tools/process-leak-check.mjs --selftest
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");

/** Each term names something only the migration knows. Kept literal — a fuzzy
 *  rule here would flag brand copy that happens to say "template" or "graph". */
const MIGRATION_TERMS = [
  "catalog graph",
  "legacy spec template",
  "spec/omd-v0.1",
  "essence-verdict",
  "MIGRATION_RULEBOOK",
  "migration-log",
  "provenance.md",
  "golden sample",
  "golden-sample",
  "T2-1",
  "portable core claim",
];
/** Ledger vocabulary that only means something inside this project's pipeline.
 *  `provenance` is matched only where it names our sidecar or a destination —
 *  the bare English word ("the dialog-open provenance") is ordinary prose and
 *  must not be flagged. Reported by the doordash F3 auditor: 18 of 106 bodies
 *  carried Tier grading and 38 mentioned the sidecar, while the three approved
 *  golden samples use neither. */
const LEDGER_PATTERNS = [
  /\bTier\s*[12]\b/,
  /\b(?:in|into|to|from|with)\s+provenance\b/i,
  /\b(?:its|their)\s+provenance\b/i,
  /\bprovenance\s*(?:\.md|ledger|sidecar|record|원장)\b/i,
  /\bdual-destination\b/i,
  // Standalone ledger/sidecar pointers — reported by the expo F3 auditor, which
  // found "its exact record stays in the source ledger" passing the checker
  // because the earlier rules required `provenance` to sit beside the noun.
  // The three approved golden samples use none of these; 16 of 116 bodies did.
  /\bsource\s+ledger\b/i,
  /\bthe\s+sidecars?\b/i,
];
/** Clause ids and wave numbers, as words rather than substrings: "A5" must not
 *  match "A5-size paper" and "wave 19" must not match a brand's own copy. */
const MIGRATION_PATTERNS = [
  /\bwave\s+\d{1,2}\b/i,
  /\brulebook\s+v\d+\b/i,
  /\b(?:clause\s+)?(?:A[1-5][a-c]?|B[1-3][a-c]?|C[1-4]|D[12]a?|E[123][a-c]?|F[1-3])\s+(?:violation|compliance|clause|조항)/,
];

export function findProcessLeaks(body) {
  const hits = [];
  const lines = body.split("\n");
  lines.forEach((line, i) => {
    for (const term of MIGRATION_TERMS) {
      if (line.toLowerCase().includes(term.toLowerCase())) hits.push({ line: i + 1, term, text: line.trim().slice(0, 100) });
    }
    for (const re of [...MIGRATION_PATTERNS, ...LEDGER_PATTERNS]) {
      const m = re.exec(line);
      if (m) hits.push({ line: i + 1, term: m[0], text: line.trim().slice(0, 100) });
    }
  });
  return hits;
}

function selftest() {
  const cases = [
    { name: "catalog graph 누출", body: "The source state contract, preserved here while the catalog graph is not adopted.", flag: true },
    { name: "legacy spec template 누출", body: "omitted (matches the legacy spec template)", flag: true },
    { name: "웨이브 번호 누출", body: "Restored in wave 21 after review.", flag: true },
    { name: "조항 번호 누출", body: "This paragraph carries the A5 clause requirement.", flag: true },
    { name: "정상 본문 — 브랜드 사실", body: "The source state contract, preserved here in full:", flag: false },
    { name: "정상 본문 — graph 라는 단어 자체", body: "The dashboard renders a bar graph at 320px.", flag: false },
    { name: "정상 본문 — template 이라는 단어 자체", body: "Email templates use the 16px body role.", flag: false },
    { name: "Tier 등급 누출", body: "Live-inspect type (Tier 1, asana.com 2026-06-22): TWK Lausanne.", flag: true },
    { name: "사이드카 지시 누출", body: "Those URLs stay in provenance; they do not supply color.", flag: true },
    { name: "정상 본문 — 일상어 provenance", body: "Preserve the actual dialog-open provenance when referring to the header.", flag: false },
    { name: "소유격 사이드카 지시", body: "The catalog record and its provenance are not carried here.", flag: true },
    { name: "단독 ledger 지시", body: "Its exact record stays in the source ledger.", flag: true },
    { name: "단독 sidecar 지시", body: "The exact value is kept in the sidecar.", flag: true },
    { name: "정상 본문 — 회계·제품 용어로서의 ledger", body: "The pricing table lists a general ledger export option.", flag: false },
    { name: "정상 본문 — Core v2 마커 자체(규격 요구)", body: "<!-- design-md:claim scope kind=product-surface lang=en -->", flag: false },
    { name: "정상 본문 — 규격 절 참조(승인 관용)", body: "Declared interactive components still declare Core §4.4 applicability by control meaning.", flag: false },
  ];
  return cases.map((c) => {
    const hits = findProcessLeaks(c.body);
    return { case: c.name, pass: (hits.length > 0) === c.flag, hits: hits.map((h) => h.term) };
  });
}

if (process.argv.includes("--selftest")) {
  const r = selftest();
  console.log(r.map((x) => `${x.pass ? "OK  " : "FAIL"} ${x.case}${x.hits.length ? ` [${x.hits.join(",")}]` : ""}`).join("\n"));
  process.exit(r.every((x) => x.pass) ? 0 : 1);
}

const MIGRATED = join(ROOT, "docs", "design-md-weight", "migrated");
const rows = [];
for (const brand of readdirSync(MIGRATED).sort()) {
  const p = join(MIGRATED, brand, "DESIGN.md");
  if (!existsSync(p)) continue;
  const hits = findProcessLeaks(readFileSync(p, "utf8"));
  if (hits.length) rows.push({ brand, count: hits.length, terms: [...new Set(hits.map((h) => h.term))] });
}
console.log(JSON.stringify({
  scanned: readdirSync(MIGRATED).filter((b) => existsSync(join(MIGRATED, b, "DESIGN.md"))).length,
  leaking: rows.length,
  totalHits: rows.reduce((s, r) => s + r.count, 0),
  detail: rows,
}, null, 1));
