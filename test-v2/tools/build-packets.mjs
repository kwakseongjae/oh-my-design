#!/usr/bin/env node
/**
 * build-packets.mjs — T3-3 레인 A 채점 세션 패킷 조립 (RUBRIC §3.2 "(평가자, 레인, 청크)당 1세션").
 *
 * 평가자가 받는 것은 패킷뿐이다(파일럿 교정 문서의 교훈: "평가자가 실제로 받는 것은 프롬프트다").
 * 그래서 이 스크립트가 봉인본에서 **그대로** 옮긴다 — 공통 머리말·네 축·사후 추측·응답 스키마는
 * scoring-prompts.md에서, 잠금표·severity 앵커는 RUBRIC §4.1에서, 표시 순서는 scoring-order.json에서.
 * 손으로 다시 쓰는 곳이 없다.
 *
 * 익명화: 자극 파일을 세션 디렉터리 안에 슬롯 이름(A/B/C)으로 **복사**한다. 심볼릭 링크는 대상
 * 경로가 arm을 드러내므로 쓰지 않는다. verify.json도 경로 필드를 벗겨 숫자만 둔다. 슬롯→arm
 * 대응은 세션 밖 keys/ 에 봉인한다.
 *
 * fail-close: 청크의 어느 칸이라도 캡처·전사본·verify·이미지가 없으면 그 세션은 만들지 않고
 * 무엇이 빠졌는지 적는다. 부분 패킷으로 채점을 열지 않는다.
 *
 * usage: node build-packets.mjs [--evaluator grok-4.6|sonnet5] [--chunk 1|2|3] [--check]
 */
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const CMP = join(ROOT, "test-v2/90-comparison");
const RUNS = join(ROOT, "test-v2/03-runs/lane-a");
const CAPS = join(CMP, "captures/lane-a");
const TRANS = join(CMP, "transcripts/lane-a");
const EVID = join(ROOT, "test-v2/00-evidence");
let SESS = join(CMP, "sessions/lane-a");
let KEYS = join(CMP, "sessions/keys");
const ARMS = ["omd", "hallmark", "uiuxpromax"];

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf("--" + n); return i >= 0 ? argv[i + 1] : undefined; };
const onlyEval = opt("evaluator");
const onlyChunk = opt("chunk") ? Number(opt("chunk")) : undefined;
const checkOnly = argv.includes("--check");
// --test <brand>: 조립 경로 자체를 검증하는 시험 세션(한 브랜드, sessions/_test/). 채점에 쓰지 않는다.
const TEST = opt("test");
if (TEST) { SESS = join(CMP, "sessions/_test"); KEYS = join(CMP, "sessions/_test/keys"); }
const sha = (buf) => "sha256:" + createHash("sha256").update(buf).digest("hex");
const read = (p) => readFileSync(p, "utf8");

// ---------------------------------------------------------------- 봉인본에서 그대로 옮기기
const promptsMd = read(join(CMP, "scoring-prompts.md"));
function fenced(afterHeading) {
  const i = promptsMd.indexOf(afterHeading);
  if (i < 0) throw new Error(`scoring-prompts.md: 제목 없음 — ${afterHeading}`);
  const rest = promptsMd.slice(i);
  const m = rest.match(/```(?:json)?\n([\s\S]*?)```/);
  if (!m) throw new Error(`scoring-prompts.md: 펜스 없음 — ${afterHeading}`);
  return m[1].trimEnd();
}
const PROMPT = {
  common: fenced("## 공통 머리말"),
  axis1: fenced("## 축 1"),
  axis2: fenced("## 축 2"),
  axis3: fenced("## 축 3"),
  axis4: fenced("## 축 4"),
  posthoc: fenced("## 사후 arm 추측"),
  schema: fenced("## 응답 스키마"),
  viewportNote: (() => { const i = promptsMd.indexOf("### viewport 표기"); return promptsMd.slice(i).trim(); })(),
};

const rubric = read(join(CMP, "RUBRIC.md"));
const lockStart = rubric.indexOf("##### 잠금표 — 9개 화면");
const lockEnd = rubric.indexOf("| 잠금 필드 |", lockStart);
if (lockStart < 0 || lockEnd < 0) throw new Error("RUBRIC §4.1 잠금표를 찾지 못했다");
const lockText = rubric.slice(lockStart, lockEnd);
function lockBlock(brand) {
  const re = new RegExp(`^\\*\\*${brand}\\*\\*[^\\n]*\\n(?:(?!^\\*\\*[a-z]+\\*\\*)[\\s\\S])*`, "m");
  const m = lockText.match(re);
  if (!m) throw new Error(`잠금표에 ${brand} 블록이 없다`);
  return m[0].trim();
}
const sevStart = rubric.search(/^- `P0`/m);
const sevEnd = rubric.indexOf("max(0, 100", sevStart);
const SEVERITY = rubric.slice(sevStart, rubric.indexOf("\n", sevEnd)).trim();
if (!SEVERITY.includes("P2")) throw new Error("severity 앵커 추출 실패");

const order = JSON.parse(read(join(CMP, "scoring-order.json")));
if (TEST) {
  const base = order.sessions.find((s) => s.evaluator === (onlyEval || "grok-4.6") && s.lane === "A");
  order.sessions = [{ ...base, chunks: [[TEST]], rows: base.rows.filter((r) => r.brand === TEST) }];
}
const ceilingManifest = JSON.parse(read(join(CMP, "ceiling/manifest.json")));
const ceilingFor = (brand) => Object.values(ceilingManifest.results).find((r) => r.brand === brand);

// ---------------------------------------------------------------- 칸 입력 수집 (fail-close)
function cellInputs(brand, arm, rep) {
  const cap = join(CAPS, brand, arm, `rep-${rep}`);
  const files = {
    "desktop-1440.png": join(cap, "desktop-1440.png"),
    "mobile-390.png": join(cap, "mobile-390.png"),
    "verify.json": join(cap, "verify.json"),
    "image.jpg": join(RUNS, brand, arm, `rep-${rep}`, "image.jpg"),
    "transcript.txt": join(TRANS, brand, arm, `rep-${rep}.txt`),
  };
  const missing = Object.entries(files).filter(([, p]) => !existsSync(p)).map(([k]) => k);
  return { files, missing };
}

function scrubVerify(p) {
  const j = JSON.parse(read(p));
  const out = {};
  for (const [k, v] of Object.entries(j)) {
    const s = JSON.stringify(v);
    if (/03-runs|\bomd\b|hallmark|uiuxpromax|\.jpg|\.png/i.test(s) && k !== "brand") continue;
    out[k] = v;
  }
  return JSON.stringify(out, null, 1) + "\n";
}

// ---------------------------------------------------------------- 세션 조립
const report = [];
for (const session of order.sessions) {
  if (session.lane !== "A") { report.push(`skip ${session.evaluator}/lane-${session.lane}: 레인 B 부재`); continue; }
  if (onlyEval && session.evaluator !== onlyEval) continue;
  session.chunks.forEach((brands, ci) => {
    const chunkNo = ci + 1;
    if (onlyChunk && chunkNo !== onlyChunk) return;
    const rows = session.rows.filter((r) => brands.includes(r.brand));
    // 입력 점검
    const missing = [];
    for (const r of rows) for (const arm of ARMS) {
      const { missing: m } = cellInputs(r.brand, arm, r.rep);
      if (m.length) missing.push(`${r.brand}/${arm}/rep-${r.rep}: ${m.join(",")}`);
    }
    const tag = `${session.evaluator} chunk-${chunkNo} [${brands.join(",")}]`;
    if (missing.length) { report.push(`NOT READY ${tag} — 결손 ${missing.length}칸 입력:\n    ` + missing.slice(0, 12).join("\n    ") + (missing.length > 12 ? `\n    … +${missing.length - 12}` : "")); return; }
    if (checkOnly) { report.push(`READY ${tag} — ${rows.length}행 × 3슬롯`); return; }

    const dir = join(SESS, session.evaluator, `chunk-${chunkNo}`);
    mkdirSync(join(dir, "rows"), { recursive: true });
    mkdirSync(KEYS, { recursive: true });
    const key = { evaluator: session.evaluator, lane: "A", chunk: chunkNo, brands, ceilingBrands: brands.filter((b) => ceilingFor(b)?.sufficient), rows: [] };
    const manifest = { builtAt: new Date().toISOString(), evaluator: session.evaluator, chunk: chunkNo, files: {} };
    const lines = [];

    lines.push(`# 채점 세션 — 레인 A · 평가자 ${session.evaluator} · 청크 ${chunkNo} (${brands.join(" · ")})`, "");
    lines.push("이 디렉터리 안의 파일만 연다. 여기 적히지 않은 경로(레포의 다른 디렉터리 포함)는 열지 않는다.",
      "채점 결과는 이 디렉터리의 `responses.jsonl`에 한 줄에 JSON 하나로 쓴다 — 행(brand, rep)마다 슬롯(A/B/C)마다",
      "축별 객체 하나씩(defects · evidence · identification · document), 그리고 행마다 마지막에 postHocGuess 하나.",
      "축 3은 아래에 「축 3 채점함」이라고 적힌 브랜드에서만 낸다. 다 쓰면 마지막 줄에 `SCORING_DONE rows=<n>`을 출력한다.", "");
    lines.push("## 공통 머리말", "", "```", PROMPT.common, "```", "");
    lines.push("## 축 1 — 첫 렌더 결함 (두 첫 캡처만: desktop-1440.png · mobile-390.png)", "", "```", PROMPT.axis1, "```", "",
      "severity 앵커 (RUBRIC §4.1 전문):", "", "```", SEVERITY, "```", "");
    lines.push("## 축 2 — 근거 추종의 의미 판정 (생성 image.jpg ↔ 브랜드 스냅샷)", "", "```", PROMPT.axis2, "```", "",
      "각 슬롯의 `verify-numeric.json`이 수치부다. 네 평정은 `evidenceSemantic`에만 적는다.", "");
    lines.push("## 축 3 — 식별력 (생성 image.jpg와 원본 천장 자극을 같은 형식으로)", "", "```", PROMPT.axis3, "```", "");
    lines.push("## 축 4 — 디자인 시스템 문서의 내용 (transcript.txt만)", "", "```", PROMPT.axis4, "```", "");
    lines.push("## 사후 arm 추측 (행마다 마지막에 한 번)", "", "```", PROMPT.posthoc, "```", "");
    lines.push("## 응답 스키마", "", "```json", PROMPT.schema, "```", "", PROMPT.viewportNote, "");

    for (const brand of brands) {
      const ceil = ceilingFor(brand);
      const evidDir = join(EVID, brand, "capture");
      const snapDir = join(dir, "rows", `_snapshot-${brand}`);
      mkdirSync(snapDir, { recursive: true });
      // 증거 캡처의 파일명은 두 세대가 섞여 있고(`desktop-1440-viewport.png` / `viewport-1440.png`), 브랜드에 따라
      // 한 서피스만 있을 수 있다(coupang: 모바일 없음). 있는 것만 넣고 패킷에 명시한다 — 없는 서피스를 발명하지 않는다.
      const snaps = [];
      for (const [surface, cands] of [["desktop-1440", ["desktop-1440-viewport.png", "viewport-1440.png"]], ["mobile-390", ["mobile-390-viewport.png", "viewport-390.png"]]]) {
        const found = cands.map((f) => join(evidDir, f)).find((p) => existsSync(p));
        if (!found) continue;
        const name = `${surface}-viewport.png`;
        copyFileSync(found, join(snapDir, name)); manifest.files[`rows/_snapshot-${brand}/${name}`] = sha(readFileSync(found)); snaps.push(name);
      }
      if (!snaps.length) throw new Error(`스냅샷 없음: ${evidDir}`);
      lines.push(`## 브랜드 ${brand}`, "", "잠금표 (RUBRIC §4.1, 동결):", "", lockBlock(brand), "",
        `스냅샷(축 2 대조 기준): ${snaps.map((n) => `\`rows/_snapshot-${brand}/${n}\``).join(" · ")}${snaps.length < 2 ? " — 이 브랜드의 증거 캡처는 이 서피스뿐이다(없는 서피스는 대조하지 않는다)" : ""}`, "");
      if (ceil?.sufficient) {
        const cdir = join(dir, "rows", `_ceiling-${brand}`);
        mkdirSync(cdir, { recursive: true });
        // RUBRIC §4.3: 적격 풀이 4를 넘으면 식별 결과를 보지 않은 채 build 순서 앞 4개(manifest.usedForCb)만 C_b에 쓴다.
        // 나머지 자극을 패킷에 넣으면 평가자가 그것까지 채점하고 C_b 분모가 흔들린다 — 청크 2 첫 조립에서 잡았다(2026-09-02).
        const useSet = new Set(ceil.usedForCb || []);
        const labels = [];
        for (const b of ceil.built.filter((x) => useSet.has(x.label))) {
          const src = join(CMP, b.output);
          const name = `${b.label}.png`;
          copyFileSync(src, join(cdir, name)); manifest.files[`rows/_ceiling-${brand}/${name}`] = sha(readFileSync(src)); labels.push(name);
        }
        lines.push(`축 3 채점함 — 원본 천장 자극 ${labels.length}장: ${labels.map((l) => `\`rows/_ceiling-${brand}/${l}\``).join(" · ")}.`,
          "생성 image.jpg와 천장 자극 각각에 축 3 프롬프트를 같은 형식으로 적용한다(천장 자극의 답은 `identification`에 `stimulus: \"<파일명>\"`을 덧붙인다).", "");
      } else {
        lines.push(`축 3 채점하지 않음 — 이 브랜드는 천장 자극이 없다(\`N/A-ceiling\`, §4.5 재정규화).`, "");
      }
      for (const r of rows.filter((x) => x.brand === brand)) {
        const rowDir = `rows/${brand}-rep${r.rep}`;
        lines.push(`### 행 ${brand} · rep ${r.rep}`, "");
        const keyRow = { brand, rep: r.rep, slots: {} };
        r.displayOrder.forEach((arm, si) => {
          const slot = ["A", "B", "C"][si];
          keyRow.slots[slot] = arm;
          const { files } = cellInputs(brand, arm, r.rep);
          const sdir = join(dir, rowDir, `slot-${slot}`);
          mkdirSync(sdir, { recursive: true });
          for (const [name, src] of Object.entries(files)) {
            if (name === "verify.json") { const txt = scrubVerify(src); writeFileSync(join(sdir, "verify-numeric.json"), txt); manifest.files[`${rowDir}/slot-${slot}/verify-numeric.json`] = sha(Buffer.from(txt)); continue; }
            copyFileSync(src, join(sdir, name)); manifest.files[`${rowDir}/slot-${slot}/${name}`] = sha(readFileSync(src));
          }
          lines.push(`- 슬롯 ${slot}: \`${rowDir}/slot-${slot}/\` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json`);
        });
        lines.push("");
        key.rows.push(keyRow);
      }
    }
    lines.push("## 끝", "", "행마다 슬롯 3개 × 축(해당 축만) + postHocGuess 1개. 생략은 미채점이며 0점이 아니다 — 판단 근거가 없으면 생략한다.",
      "`responses.jsonl`을 다 쓴 뒤 마지막 줄에 `SCORING_DONE rows=<n>`.", "");

    const packet = lines.join("\n");
    // 익명성 자기검사: 패킷 본문에 arm 이름이 나오면 안 된다 (프롬프트 인용문 안의 도구 이름은 스키마 열거뿐).
    const leak = packet.replace(PROMPT.posthoc, "").replace(PROMPT.schema, "").match(/\b(hallmark|uiuxpromax|03-runs)\b/);
    if (leak) throw new Error(`패킷에 arm 단서 유출: ${leak[0]}`);
    writeFileSync(join(dir, "packet.md"), packet);
    manifest.files["packet.md"] = sha(Buffer.from(packet));
    writeFileSync(join(dir, "manifest.json"), JSON.stringify(manifest, null, 1) + "\n");
    writeFileSync(join(dir, ".gitignore"), "rows/\n");
    writeFileSync(join(KEYS, `${session.evaluator}-chunk-${chunkNo}.json`), JSON.stringify(key, null, 1) + "\n");
    report.push(`BUILT ${tag} — ${rows.length}행 · 파일 ${Object.keys(manifest.files).length} · ${dir.replace(ROOT + "/", "")}`);
  });
}
console.log(report.join("\n"));
