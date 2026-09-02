/**
 * Machine verification of a neutral transcription — TRANSCRIPTION.md §7.1.
 *
 * The transcriber has one job and a narrow licence: neutralise heading levels,
 * delete arm markers, delete paths. Nothing else. That is exactly the kind of
 * constraint a careful reader will believe was honoured and a careless one will
 * break in a hurry, so it is checked mechanically on every run rather than
 * spot-checked.
 *
 * §7.1 also fixes who runs this: not the transcriber. And §5.2 waives the
 * non-mechanical check entirely, which raises the bar here — there is no human
 * downstream to adjudicate a "probably fine". Every difference is either
 * accounted for by a declared deletion or it blocks.
 *
 * Three earlier versions of this file failed on their own terms, and each
 * failure is now a self-test case:
 *
 *   - A correct transcription was blocked. §2.1 *requires* `## 3. Typography`
 *     to become `Heading: Typography`, so the word "heading" is not an
 *     invention and the dropped `3` is not content loss.
 *   - Token comparison was a multiset, so swapping #111 and #222 passed while
 *     the comment above it claimed order was compared.
 *   - One declared deletion excused every other loss in the document, because
 *     nothing checked that a dropped token fell inside a declared span.
 *
 *   node transcribe-verify.mjs --source doc.md --transcript t.md --map map.csv \
 *                              --seal seal.json
 *   node transcribe-verify.mjs --selftest
 */

import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";

const arg = (name) => {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
};
const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");

/** §2 — the only actions the mapping may carry. */
const ACTIONS = new Set(["KEEP", "HEADING_NEUTRALIZE", "MARKER_DELETE", "PATH_DELETE"]);
const DELETING = /MARKER_DELETE|PATH_DELETE/;

/**
 * Words the transform itself introduces. §2.1 prescribes the literal
 * `Heading: <content word>`, so treating "heading" as an invented word blocks
 * every transcription that followed the rule.
 */
const TRANSFORM_VOCABULARY = new Set(["heading"]);

/** A Markdown heading, with the ordinal §2.1 tells the transcriber to remove. */
const HEADING_LINE = /^#{1,6}\s+(?:(\d+(?:\.\d+)*)\.?\s+)?(.*)$/;

/**
 * §7.1.5 — every token class whose loss or alteration would change what the
 * document says.
 */
const TOKEN_PATTERNS = [
  ["colour", /#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?|oklch|oklab|lab|lch)\([^)]*\)/g],
  ["cssVar", /--[a-zA-Z][\w-]*/g],
  ["unit", /-?\d+(?:\.\d+)?(?:px|rem|em|ms|s|vh|vw|ch|%)\b/g],
  ["ratio", /\b\d+(?:\.\d+)?\s*:\s*\d+(?:\.\d+)?\b/g],
  ["version", /\bv?\d+\.\d+(?:\.\d+)?(?:-[\w.]+)?\b/g],
  ["date", /\b\d{4}-\d{2}-\d{2}\b/g],
  ["cliFlag", /(?:^|\s)--?[a-zA-Z][\w-]*/g],
  ["number", /-?\b\d+(?:\.\d+)?\b/g],
];

/** §7.1.6 — commands and URLs are compared byte for byte. */
const FENCE_PATTERNS = [["fenced", /```[\s\S]*?```/g]];
const INLINE_CODE_PATTERNS = [
  ["inlineCode", /`[^`\n]+`/g],
  ["url", /\bhttps?:\/\/[^\s)>\]]+/g],
];

/** Source text with every declared deletion span (byte ranges, §6.1) removed. */
function applyDeclaredDeletions(text, spans, offsets) {
  if (!spans.length) return text;
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const at = offsets[i];
    if (spans.some((d) => at >= d.start && at < d.end)) continue;
    out += text[i];
  }
  return out;
}

/**
 * §7.1.8 — strings and structural markers that reveal which arm produced the
 * document. Any of these surviving into the transcript is a transcription
 * failure, not a scoring observation.
 */
const FORBIDDEN = [
  [/\bomd\b|oh-my-design/i, "arm name: omd"],
  [/\bhallmark\b/i, "arm name: hallmark"],
  // 2026-09-02: `ui-ux-pro-max` (하이픈)과 `D-P1-2` (omd 결정 ID 실제 형식)를 놓치고 있었다.
  // 파일럿 apple/omd rep-2·3·4가 결정 ID를 실은 채 PASS했고, baemin 전사자가 그것을 잡았다.
  [/ui[\s_-]*ux[\s_-]*pro[\s_-]*max|uiuxpromax/i, "arm name: UIUX Pro Max"],
  [/\bD-P?\d+-\d+\b|\bD-\d{2,}\b/, "decision ID"],
  [/design-md:section/i, "section marker"],
  [/^---\s*$/m, "YAML frontmatter fence"],
  [/\[[0-9;]*m/, "ANSI escape"],
];

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  const header = lines[0].split(",");
  return lines.slice(1).map((line) => {
    // The sealed columns carry no free text, so a plain split is exact here.
    const cells = line.split(",");
    return Object.fromEntries(header.map((h, i) => [h.trim(), (cells[i] ?? "").trim()]));
  });
}

/** Tokens with their character offsets, in document order. */
function tokensWithOffsets(text, patterns) {
  const out = [];
  for (const [kind, re] of patterns) {
    for (const m of text.matchAll(re)) {
      const value = m[0].trim();
      out.push({ key: `${kind}:${value}`, value, at: m.index + m[0].indexOf(value) });
    }
  }
  return out.sort((a, b) => a.at - b.at);
}

/**
 * Longest common subsequence, so a reordering shows up as one token missing
 * and one added rather than as no difference at all.
 */
function sequenceDiff(a, b) {
  const n = a.length, m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i].key === b[j].key ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const missing = [], added = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i].key === b[j].key) { i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) missing.push(a[i++]);
    else added.push(b[j++]);
  }
  while (i < n) missing.push(a[i++]);
  while (j < m) added.push(b[j++]);
  return { missing, added };
}

/** Character offset → byte offset, since §6.1 fixes locators as byte offsets. */
function byteOffsets(text) {
  const map = new Uint32Array(text.length + 1);
  let bytes = 0;
  for (let i = 0; i < text.length; i++) {
    map[i] = bytes;
    bytes += Buffer.byteLength(text[i], "utf8");
  }
  map[text.length] = bytes;
  return map;
}

/**
 * §2.1 — what the source heading contributes once neutralised.
 *
 * Fenced code is left alone. A document that *shows* `## 3. Typography` as an
 * example is quoting it, not heading with it, and §2.1 does not reach inside
 * a code fence — normalising there made a correct KEEP look like a mismatch.
 */
function headingNormalise(text) {
  const droppedOrdinals = [];
  let inFence = false;
  const lines = text.split("\n").map((line) => {
    if (/^\s*```/.test(line)) { inFence = !inFence; return line; }
    if (inFence) return line;
    const m = HEADING_LINE.exec(line);
    if (!m) return line;
    if (m[1]) droppedOrdinals.push(m[1]);
    return `Heading: ${m[2].trim()}`;
  });
  return { normalised: lines.join("\n"), droppedOrdinals };
}

export function verifyTranscription({ source, transcript, map, seal }) {
  const problems = [];
  const fail = (check, detail, extra = {}) => problems.push({ check, detail, ...extra });

  // 1 — SHA agreement with the seal manifest.
  if (seal) {
    if (seal.sourceSha256 && seal.sourceSha256 !== sha256(source)) fail("7.1.1", "source SHA does not match the seal manifest");
    if (seal.transcriptSha256 && seal.transcriptSha256 !== sha256(transcript)) fail("7.1.1", "transcript SHA does not match the seal manifest");
    if (seal.mapSha256 && seal.mapSha256 !== sha256(map)) fail("7.1.1", "mapping SHA does not match the seal manifest");
  } else {
    fail("7.1.1", "no seal manifest supplied — a transcription without one cannot be verified");
  }

  const rows = parseCsv(map.toString("utf8"));

  // 2 — every source unit exactly once, ordinals contiguous.
  const seen = new Set();
  for (const r of rows) {
    if (seen.has(r.source_unit_id)) fail("7.1.2", `source unit ${r.source_unit_id} appears more than once`);
    seen.add(r.source_unit_id);
  }
  const ordinals = rows.map((r) => Number(r.source_ordinal)).sort((a, b) => a - b);
  for (let i = 0; i < ordinals.length; i++) {
    if (ordinals[i] !== i + 1) { fail("7.1.2", `source_ordinal is not contiguous at position ${i + 1} (saw ${ordinals[i]})`); break; }
  }

  // 3 — order is preserved; only pure deleted markers may lack a transcript unit.
  let lastTranscript = 0;
  for (const r of rows.slice().sort((a, b) => Number(a.source_ordinal) - Number(b.source_ordinal))) {
    const deletedWhole = r.transcript_unit_id === "" && r.transcript_ordinal === "";
    if (deletedWhole) {
      if (!DELETING.test(r.action)) fail("7.1.3", `${r.source_unit_id} has no transcript unit but its action is ${r.action}`);
      if (!r.removed_span_sha256) fail("7.1.3", `${r.source_unit_id} was deleted without recording the removed span SHA`);
      continue;
    }
    const t = Number(r.transcript_ordinal);
    if (!Number.isFinite(t)) { fail("7.1.3", `${r.source_unit_id} has a non-numeric transcript_ordinal`); continue; }
    if (t < lastTranscript) fail("7.1.3", `transcript order inverts source order at ${r.source_unit_id}`);
    lastTranscript = t;
  }

  // 4 — only the three transforms and KEEP.
  for (const r of rows) {
    for (const a of r.action.split("+").map((x) => x.trim()).filter(Boolean)) {
      if (!ACTIONS.has(a)) fail("7.1.4", `${r.source_unit_id} uses action "${a}"`);
    }
  }

  const srcText = source.toString("utf8");
  const trText = transcript.toString("utf8");
  const { normalised: srcNormalised, droppedOrdinals } = headingNormalise(srcText);
  const offsets = byteOffsets(srcText);

  // The byte ranges a declared deletion covers. A token lost outside all of
  // them is unaccounted, and with §5.2 waived there is nobody to adjudicate it.
  const declaredSpans = rows.filter((r) => DELETING.test(r.action)).map((r) => {
    const [start, end] = (r.source_locator ?? "").split("-").map(Number);
    return Number.isFinite(start) && Number.isFinite(end) ? { start, end, unit: r.source_unit_id } : null;
  }).filter(Boolean);

  /**
   * How many occurrences of this exact string sit inside a declared deletion.
   *
   * Counting matters, not existence. Deleting the path `/theme/8px.md` declares
   * one 8px; if the body's 8px also vanishes, two were lost and only one was
   * licensed. The earlier version asked "is this value inside any declared
   * span" and answered yes, passing a document that had lost a real token.
   */
  const occurrencesInDeclaredSpans = (value) => {
    let from = 0, n = 0;
    for (;;) {
      const at = srcText.indexOf(value, from);
      if (at === -1) return n;
      const s = offsets[at], e = offsets[Math.min(at + value.length, srcText.length)];
      if (declaredSpans.some((d) => s >= d.start && e <= d.end)) n++;
      from = at + 1;
    }
  };

  // 6 (fenced) — a fenced block is one token, so a declared MARKER_DELETE inside it
  // (`/* D-P1-2 */` in a CSS token block) used to register as an *added* block, which
  // nothing can license. §4.1 row 2 orders exactly that deletion, so the block is
  // compared byte for byte against the source *after* the declared spans are removed:
  // a declared in-fence deletion matches, an undeclared in-fence edit still shows up
  // as one block missing and one added. (2026-09-02, baemin/omd/rep-2 fail-close.)
  {
    const applied = applyDeclaredDeletions(srcText, declaredSpans, offsets);
    const a = tokensWithOffsets(headingNormalise(applied).normalised, FENCE_PATTERNS);
    const b = tokensWithOffsets(trText, FENCE_PATTERNS);
    const { missing, added } = sequenceDiff(a, b);
    if (added.length) fail("7.1.6", `transcript adds or alters ${added.length} fenced block(s) beyond the declared deletions`);
    if (missing.length) fail("7.1.7", `${missing.length} fenced block(s) lost or altered outside declared deletions`);
  }

  // 5·6·7 — content-bearing tokens and code survive in order, except where the
  // mapping declares a deletion that covers them.
  for (const [label, patterns] of [["7.1.5", TOKEN_PATTERNS], ["7.1.6", INLINE_CODE_PATTERNS]]) {
    // Compared against the source *after* §2.1's own transform, so the ordinal
    // that §2.1 orders removed is not counted as content loss.
    const { missing, added } = sequenceDiff(tokensWithOffsets(srcNormalised, patterns), tokensWithOffsets(trText, patterns));
    if (added.length) fail(label, `transcript adds or reorders ${added.length} token(s): ${added.slice(0, 5).map((t) => t.key).join(", ")}`);

    // Per distinct value: how many went missing, and how many the declared
    // spans can pay for.
    const dropped = new Map();
    for (const t of missing) dropped.set(t.value, (dropped.get(t.value) ?? 0) + 1);
    for (const [value, count] of dropped) {
      const licensed = occurrencesInDeclaredSpans(value);
      if (count > licensed) {
        fail("7.1.7", `"${value}" lost ${count}× but declared deletions cover ${licensed}×`, { value, lost: count, licensed });
      }
    }
  }

  // 8 — arm-revealing strings and structure.
  for (const [re, what] of FORBIDDEN) {
    if (re.test(trText)) fail("7.1.8", `transcript still carries ${what}`);
  }

  // 9 — nothing added that has no source, allowing for the vocabulary §2.1
  // itself introduces.
  const words = (t) => t.toLowerCase().match(/[\p{L}\p{N}][\p{L}\p{N}_-]*/gu) ?? [];
  const srcWords = new Set([...words(srcText), ...TRANSFORM_VOCABULARY]);
  const invented = [...new Set(words(trText))].filter((w) => !srcWords.has(w));
  if (invented.length) fail("7.1.9", `transcript introduces ${invented.length} word(s) absent from the source: ${invented.slice(0, 8).join(", ")}`);

  return {
    // Two verdicts, not three. §5.2 waived the non-mechanical check, so a
    // "someone should look at this" outcome would have no owner.
    verdict: problems.length ? "TRANSCRIPTION_BLOCKED" : "PASS",
    note: "§7.1 기계 검증. 실패는 비기계 검증으로 덮지 않으며, §5.2에 따라 덮을 사람도 없다.",
    checked: rows.length,
    declaredSpans: declaredSpans.length,
    headingOrdinalsDropped: droppedOrdinals.length,
    problems,
  };
}

/* ------------------------------------------------------------- selftest --- */

if (process.argv.includes("--selftest")) {
  const sealOf = (s, t, m) => ({ sourceSha256: sha256(s), transcriptSha256: sha256(t), mapSha256: sha256(m) });
  const header = "run_id,source_file_sha256,source_unit_id,source_ordinal,source_locator,action,removed_span_sha256,transcript_unit_id,transcript_ordinal,review_status\n";

  // §2.1's own example: the ordinal goes, the content word stays, the literal
  // `Heading:` appears. A verifier that blocks this blocks every correct run.
  const src1 = Buffer.from("## 3. Typography\n\n본문은 16px이고 주 색은 #3182f6이다.\n");
  const tr1 = Buffer.from("Heading: Typography\n\n본문은 16px이고 주 색은 #3182f6이다.\n");
  const map1 = Buffer.from(header +
    "r1,x,O000001,1,0-17,HEADING_NEUTRALIZE,,T000001,1,ok\n" +
    "r1,x,O000002,2,18-70,KEEP,,T000002,2,ok\n");

  // Reordered colours: same multiset, different document.
  const src2 = Buffer.from("색은 #111111 다음 #222222 이다.\n");
  const tr2 = Buffer.from("색은 #222222 다음 #111111 이다.\n");
  const map2 = Buffer.from(header + "r1,x,O000001,1,0-40,KEEP,,T000001,1,ok\n");

  // One declared deletion must not excuse an unrelated loss elsewhere.
  const src3 = Buffer.from("경로는 /packs/x/y 이고 간격은 8px이다.\n");
  const tr3 = Buffer.from("경로는 이고 간격은 이다.\n");
  const map3 = Buffer.from(header + "r1,x,O000001,1,10-22,PATH_DELETE,abc,T000001,1,ok\n");

  const src4 = Buffer.from("# Hallmark 시스템\n\n간격은 8px이다.\n");
  const tr4 = Buffer.from("Heading: Hallmark 시스템\n\n간격은 8px이다.\n");
  const map4 = Buffer.from(header + "r1,x,O000001,1,0-20,HEADING_NEUTRALIZE,,T000001,1,ok\n");

  // grok-4.6의 반례 1: 경로 삭제 선언이 본문의 같은 값까지 면제하면 안 된다.
  const src5 = Buffer.from("경로는 /theme/8px.md 이고 본문 간격은 8px이다.\n");
  const tr5 = Buffer.from("경로는 이고 본문 간격은 이다.\n");
  const map5 = Buffer.from(header + "r1,x,O000001,1,10-23,PATH_DELETE,abc,T000001,1,ok\n");

  // grok-4.6의 반례 2: 펜스 안의 제목 예시를 그대로 KEEP한 전사는 통과해야 한다.
  const src6 = Buffer.from("설명이다.\n\n```md\n## 3. Typography\n```\n");
  const tr6 = Buffer.from("설명이다.\n\n```md\n## 3. Typography\n```\n");
  const map6 = Buffer.from(header + "r1,x,O000001,1,0-60,KEEP,,T000001,1,ok\n");

  // 2026-09-02 반례 3 (baemin/omd/rep-2): 펜스 안 결정 ID 주석은 §4.1 2행이 삭제를 명령한다.
  // 선언된 in-fence 삭제는 통과해야 하고, 선언 없는 in-fence 편집은 여전히 차단돼야 한다.
  const src7s = "토큰이다.\n\n```css\n:root {\n  --ink: #1d1d1f; /* D-P1-2 */\n}\n```\n";
  const src7 = Buffer.from(src7s);
  const tr7 = Buffer.from("토큰이다.\n\n```css\n:root {\n  --ink: #1d1d1f; \n}\n```\n");
  const spanStart = Buffer.byteLength(src7s.slice(0, src7s.indexOf("/* D-P1-2 */")), "utf8");
  const spanEnd = spanStart + Buffer.byteLength("/* D-P1-2 */", "utf8");
  const map7 = Buffer.from(header +
    `r1,x,O000001,1,0-${spanStart - 1},KEEP,,T000001,1,ok\n` +
    `r1,x,O000002,2,${spanStart}-${spanEnd},MARKER_DELETE,abc,T000002,2,ok\n`);
  const tr7bad = Buffer.from("토큰이다.\n\n```css\n:root {\n  --ink: #1d1d1e; /* D-P1-2 */\n}\n```\n");
  const map7bad = Buffer.from(header + `r1,x,O000001,1,0-${spanEnd + 8},KEEP,,T000001,1,ok\n`);

  // 2026-09-02 반례 4: 탐지기가 놓치던 두 표지 — 실제 omd 결정 ID 형식과 하이픈 arm 이름.
  const src8 = Buffer.from("결정 D-P2-1 은 유지. 팩은 ui-ux-pro-max 였다.\n");
  const map8 = Buffer.from(header + "r1,x,O000001,1,0-60,KEEP,,T000001,1,ok\n");

  const cases = [
    { name: "펜스 안 선언된 결정 ID 삭제는 통과", got: verifyTranscription({ source: src7, transcript: tr7, map: map7, seal: sealOf(src7, tr7, map7) }), want: "PASS" },
    { name: "펜스 안 선언 없는 편집은 차단", got: verifyTranscription({ source: src7, transcript: tr7bad, map: map7bad, seal: sealOf(src7, tr7bad, map7bad) }), want: "TRANSCRIPTION_BLOCKED" },
    { name: "D-P2-1 · ui-ux-pro-max 가 남으면 차단", got: verifyTranscription({ source: src8, transcript: src8, map: map8, seal: sealOf(src8, src8, map8) }), want: "TRANSCRIPTION_BLOCKED" },
    { name: "§2.1 그대로 따른 전사는 통과해야 한다", got: verifyTranscription({ source: src1, transcript: tr1, map: map1, seal: sealOf(src1, tr1, map1) }), want: "PASS" },
    { name: "색 순서를 바꾸면 차단", got: verifyTranscription({ source: src2, transcript: tr2, map: map2, seal: sealOf(src2, tr2, map2) }), want: "TRANSCRIPTION_BLOCKED" },
    { name: "선언된 삭제가 무관한 손실을 면제하지 않는다", got: verifyTranscription({ source: src3, transcript: tr3, map: map3, seal: sealOf(src3, tr3, map3) }), want: "TRANSCRIPTION_BLOCKED" },
    { name: "arm 이름이 남으면 차단", got: verifyTranscription({ source: src4, transcript: tr4, map: map4, seal: sealOf(src4, tr4, map4) }), want: "TRANSCRIPTION_BLOCKED" },
    { name: "봉인 없으면 차단", got: verifyTranscription({ source: src1, transcript: tr1, map: map1, seal: null }), want: "TRANSCRIPTION_BLOCKED" },
    { name: "경로 삭제 선언이 본문의 같은 값을 면제하지 않는다", got: verifyTranscription({ source: src5, transcript: tr5, map: map5, seal: sealOf(src5, tr5, map5) }), want: "TRANSCRIPTION_BLOCKED" },
    { name: "펜스 안 제목 예시를 그대로 둔 전사는 통과", got: verifyTranscription({ source: src6, transcript: tr6, map: map6, seal: sealOf(src6, tr6, map6) }), want: "PASS" },
  ];
  const rows = cases.map((c) => ({ case: c.name, verdict: c.got.verdict, pass: c.got.verdict === c.want, problems: c.got.problems.map((p) => `${p.check}: ${p.detail}`) }));
  console.log(JSON.stringify({ selftest: rows, ok: rows.every((r) => r.pass) }, null, 1));
  process.exit(rows.every((r) => r.pass) ? 0 : 1);
}

const sourcePath = arg("source");
if (sourcePath) {
  const read = (p) => (p && existsSync(p) ? readFileSync(p) : null);
  const result = verifyTranscription({
    source: read(sourcePath),
    transcript: read(arg("transcript")),
    map: read(arg("map")),
    seal: existsSync(arg("seal") ?? "") ? JSON.parse(readFileSync(arg("seal"), "utf8")) : null,
  });
  console.log(JSON.stringify(result, null, 1));
  process.exit(result.verdict === "PASS" ? 0 : 1);
} else if (!process.argv.includes("--selftest")) {
  console.error("usage: transcribe-verify.mjs --source <f> --transcript <f> --map <csv> --seal <json> | --selftest");
  process.exit(1);
}
