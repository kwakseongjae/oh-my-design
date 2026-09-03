#!/usr/bin/env node
/**
 * image-batch.mjs — gpt-image-2 로 브랜드 이미지 **세트**를 OpenAI Batch API 로 생성한다.
 *
 * 왜 배치인가: 12~40장 세트를 한 번에 넣고 50% 할인(출력 토큰 $30/1M → $15/1M)을 받는다.
 * 왜 세트인가: 우리 이미지 채널에는 시드가 없다 — 일관성은 **스타일 접미사를 모든 프롬프트에 토씨 그대로 반복**하는
 * 것과 참조 이미지(`/v1/images/edits`, 최대 16장)로만 잡는다. 이 도구는 그 반복을 기계적으로 보장한다.
 *
 * 절차(공식 문서 확인, docs/research/gpt-image-2-batch-2026-09-03.md):
 *   plan   spec.json → generations.jsonl (+ edits.jsonl: 참조 있는 슬롯) + manifest.json   [오프라인]
 *   submit 참조 업로드(purpose=vision) → JSONL 업로드(purpose=batch) → /v1/batches 생성 → batches.json
 *   status 배치 상태·request_counts
 *   fetch  output/error 파일 회수 → images/<custom_id>.<ext> 저장 → results.json · ledger.json(usage 합산·sha256)
 *   run    plan → submit → 폴링 → fetch
 *
 * 키: OPENAI_API_KEY (셸 env 또는 레포 루트 .env.local). 값은 절대 출력하지 않는다.
 *
 * usage: node image-batch.mjs plan   --spec <set.json> --out <dir>
 *        node image-batch.mjs submit --out <dir>
 *        node image-batch.mjs status --out <dir>
 *        node image-batch.mjs fetch  --out <dir>
 *        node image-batch.mjs run    --spec <set.json> --out <dir> [--poll 60]
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const argv = process.argv.slice(2);
const cmd = argv[0];
const opt = (n, d) => { const i = argv.indexOf("--" + n); return i >= 0 ? argv[i + 1] : d; };
const OUT = opt("out") ? resolve(opt("out")) : null;
const API = "https://api.openai.com/v1";

// 공식 확인된 고정 size 목록 + 커스텀 제약(16px 배수·최대변 3840·비율 ≤3:1·총픽셀 655,360~8,294,400)
const FIXED_SIZES = new Set(["1024x1024", "1536x1024", "1024x1536", "2048x2048", "2048x1152", "3840x2160", "2160x3840", "auto"]);
function validSize(s) {
  if (FIXED_SIZES.has(s)) return true;
  const m = /^(\d+)x(\d+)$/.exec(s); if (!m) return false;
  const w = +m[1], h = +m[2], px = w * h;
  return w % 16 === 0 && h % 16 === 0 && Math.max(w, h) <= 3840 && Math.max(w / h, h / w) <= 3 && px >= 655360 && px <= 8294400;
}
// 확인된 단가(출력 토큰). 입력 단가는 문서에서 표로 확인하지 못해 원시 usage 를 그대로 남긴다.
const RATES = { standardOutPer1M: 30, batchOutPer1M: 15 };

function loadKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY;
  try {
    for (const line of readFileSync(join(ROOT, ".env.local"), "utf8").split("\n")) {
      const m = line.match(/^\s*OPENAI_API_KEY\s*=\s*(.+)\s*$/); if (m) return m[1].replace(/^["']|["']$/g, "");
    }
  } catch { /* 없음 */ }
  console.error("OPENAI_API_KEY 가 없다 — 셸 env 또는 레포 루트 .env.local 에 넣어라(값은 커밋되지 않는다)."); process.exit(3);
}
async function api(path, { method = "GET", body, form, key } = {}) {
  const headers = { Authorization: `Bearer ${key}` };
  let payload;
  if (form) payload = form; else if (body) { headers["Content-Type"] = "application/json"; payload = JSON.stringify(body); }
  const r = await fetch(API + path, { method, headers, body: payload });
  const text = await r.text();
  if (!r.ok) throw new Error(`${method} ${path} → ${r.status}: ${text.slice(0, 300)}`);
  return text;
}
const sha = (buf) => createHash("sha256").update(buf).digest("hex");
const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));
const writeJson = (p, o) => writeFileSync(p, JSON.stringify(o, null, 1) + "\n");

// ---------------------------------------------------------------- plan
function plan() {
  const specPath = opt("spec"); if (!specPath || !OUT) { console.error("plan --spec <set.json> --out <dir>"); process.exit(1); }
  const spec = readJson(specPath);
  const model = spec.model || "gpt-image-2";
  const suffix = (spec.styleSuffix || "").trim();
  if (!suffix) console.error("경고: styleSuffix 가 비었다 — 시드가 없는 채널에서 세트 일관성은 접미사 반복이 전부다.");
  mkdirSync(OUT, { recursive: true });
  const gen = [], edit = [], manifest = { set: spec.set, model, createdAt: new Date().toISOString(), styleSuffix: suffix, refs: spec.refs || [], items: [] };
  const seen = new Set();
  for (const it of spec.items) {
    if (!it.id || !it.prompt) throw new Error(`항목에 id/prompt 가 없다: ${JSON.stringify(it).slice(0, 80)}`);
    if (seen.has(it.id)) throw new Error(`custom_id 중복: ${it.id}`); seen.add(it.id);
    const size = it.size || spec.size || "1024x1024";
    if (!validSize(size)) throw new Error(`${it.id}: size ${size} 는 허용 범위 밖(16px 배수·최대변 3840·비율≤3:1·픽셀 655,360~8,294,400)`);
    // 접미사 순서: 항목 프롬프트 → 장르군 접미사(spec.groupSuffix[it.group]) → 세트 공통 큐레이션 접미사. 둘 다 토씨 그대로 반복된다.
    const gsuf = (spec.groupSuffix && it.group && spec.groupSuffix[it.group] ? String(spec.groupSuffix[it.group]).trim() : "");
    const body = { model, prompt: it.prompt.trim() + (gsuf ? "\n\n" + gsuf : "") + (suffix ? "\n\n" + suffix : ""), size, quality: it.quality || spec.quality || "high", output_format: it.output_format || spec.output_format || "png", n: 1 };
    if (it.background || spec.background) body.background = it.background || spec.background;
    const useRefs = it.refs === true || (Array.isArray(it.refs) && it.refs.length);
    const line = { custom_id: it.id, method: "POST", url: useRefs ? "/v1/images/edits" : "/v1/images/generations", body };
    if (useRefs) line.body.images = "__REFS__"; // submit 에서 file_id 로 치환 (항목별 refs 배열이면 그 파일들, true 면 spec.refs)
    (useRefs ? edit : gen).push(line);
    manifest.items.push({ id: it.id, size, refs: !!useRefs, refFiles: Array.isArray(it.refs) ? it.refs : (useRefs ? (spec.refs || []) : []), role: it.role || null, slot: it.slot || null, group: it.group || null, section: it.section || null });
  }
  if (gen.length) writeFileSync(join(OUT, "generations.jsonl"), gen.map((l) => JSON.stringify(l)).join("\n") + "\n");
  if (edit.length) writeFileSync(join(OUT, "edits.jsonl"), edit.map((l) => JSON.stringify(l)).join("\n") + "\n");
  writeJson(join(OUT, "manifest.json"), manifest);
  console.log(`PLAN_DONE set=${spec.set} model=${model} generations=${gen.length} edits=${edit.length} sizes=${[...new Set(manifest.items.map((i) => i.size))].join(",")} out=${OUT.replace(ROOT + "/", "")}`);
}

// ---------------------------------------------------------------- submit
async function submit() {
  if (!OUT) { console.error("submit --out <dir>"); process.exit(1); }
  const key = loadKey();
  const manifest = readJson(join(OUT, "manifest.json"));
  const batches = [];
  // 참조 이미지 업로드(purpose=vision) — edits 배치가 있을 때만
  // 참조 이미지: 항목마다 다른 참조를 허용한다(before/after 쌍은 쌍마다 참조가 다르다 — 2026-09-03 rx-imageset 블로커).
  // 같은 파일은 한 번만 업로드하고 file_id 를 재사용한다.
  const refIds = [];
  if (existsSync(join(OUT, "edits.jsonl"))) {
    const cache = {};
    const upload = async (rp) => { const abs = resolve(rp); if (cache[abs]) return cache[abs]; if (!existsSync(abs)) throw new Error(`참조 이미지 없음: ${abs}`);
      const form = new FormData(); form.append("purpose", "vision"); form.append("file", new Blob([readFileSync(abs)]), basename(abs));
      const j = JSON.parse(await api("/files", { method: "POST", form, key })); cache[abs] = j.id; refIds.push({ file: rp, file_id: j.id }); console.log(`  참조 업로드 ${basename(abs)} → ${j.id}`); return j.id; };
    const lines = [];
    for (const l of readFileSync(join(OUT, "edits.jsonl"), "utf8").split("\n").filter(Boolean)) {
      const o = JSON.parse(l); const item = manifest.items.find((x) => x.id === o.custom_id) || {};
      const files = item.refFiles && item.refFiles.length ? item.refFiles : (manifest.refs || []);
      if (!files.length) throw new Error(`${o.custom_id}: 참조 슬롯인데 참조 파일이 없다`);
      if (files.length > 16) throw new Error(`${o.custom_id}: 참조 이미지는 최대 16장`);
      const ids = []; for (const f of files) ids.push({ file_id: await upload(f) });
      o.body.images = ids; lines.push(JSON.stringify(o));
    }
    writeFileSync(join(OUT, "edits.jsonl"), lines.join("\n") + "\n");
  }
  for (const [file, endpoint] of [["generations.jsonl", "/v1/images/generations"], ["edits.jsonl", "/v1/images/edits"]]) {
    const p = join(OUT, file); if (!existsSync(p)) continue;
    const form = new FormData(); form.append("purpose", "batch"); form.append("file", new Blob([readFileSync(p)]), file);
    const up = JSON.parse(await api("/files", { method: "POST", form, key }));
    const b = JSON.parse(await api("/batches", { method: "POST", key, body: { input_file_id: up.id, endpoint, completion_window: "24h", metadata: { set: manifest.set, file } } }));
    batches.push({ file, endpoint, input_file_id: up.id, batch_id: b.id, status: b.status, createdAt: new Date().toISOString() });
    console.log(`  배치 생성 ${file} → ${b.id} (${b.status})`);
  }
  writeJson(join(OUT, "batches.json"), { refs: refIds, batches });
  console.log(`SUBMIT_DONE batches=${batches.length}`);
}

// ---------------------------------------------------------------- status
async function status({ quiet = false } = {}) {
  if (!OUT) { console.error("status --out <dir>"); process.exit(1); }
  const key = loadKey(); const st = readJson(join(OUT, "batches.json"));
  let allDone = true;
  for (const b of st.batches) {
    const j = JSON.parse(await api(`/batches/${b.batch_id}`, { key }));
    b.status = j.status; b.request_counts = j.request_counts; b.output_file_id = j.output_file_id; b.error_file_id = j.error_file_id;
    if (!["completed", "failed", "expired", "cancelled"].includes(j.status)) allDone = false;
    if (!quiet) console.log(`  ${b.file} ${j.status} ${j.request_counts ? `${j.request_counts.completed}/${j.request_counts.total} ok · ${j.request_counts.failed} fail` : ""}`);
  }
  writeJson(join(OUT, "batches.json"), st);
  return allDone;
}

// ---------------------------------------------------------------- fetch
async function fetchResults() {
  if (!OUT) { console.error("fetch --out <dir>"); process.exit(1); }
  const key = loadKey(); const st = readJson(join(OUT, "batches.json")); const manifest = readJson(join(OUT, "manifest.json"));
  mkdirSync(join(OUT, "images"), { recursive: true });
  const results = {}; let usageOut = 0, usageIn = 0, ok = 0, fail = 0;
  for (const b of st.batches) {
    if (b.status !== "completed" && !b.output_file_id) { console.log(`  ${b.file}: ${b.status} — 결과 없음`); continue; }
    for (const [fid, kind] of [[b.output_file_id, "out"], [b.error_file_id, "err"]]) {
      if (!fid) continue;
      const text = await api(`/files/${fid}/content`, { key });
      for (const line of text.split("\n").filter(Boolean)) {
        const j = JSON.parse(line); const id = j.custom_id;
        if (kind === "err" || j.error || (j.response && j.response.status_code >= 400)) {
          results[id] = { ok: false, error: j.error || j.response?.body?.error || j.response?.body }; fail++; continue;
        }
        const body = j.response.body; const d = body.data?.[0];
        if (!d?.b64_json) { results[id] = { ok: false, error: "b64_json 없음" }; fail++; continue; }
        const item = manifest.items.find((x) => x.id === id) || {};
        const ext = (JSON.parse(readFileSync(join(OUT, b.file), "utf8").split("\n").find((l) => l.includes(`"custom_id":"${id}"`) || l.includes(`"custom_id": "${id}"`)) || "{}").body?.output_format) || "png";
        const buf = Buffer.from(d.b64_json, "base64"); const fp = join(OUT, "images", `${id}.${ext}`);
        writeFileSync(fp, buf);
        const u = body.usage || {}; usageOut += u.output_tokens || 0; usageIn += u.input_tokens || 0;
        results[id] = { ok: true, file: `images/${id}.${ext}`, bytes: buf.length, sha256: sha(buf), size: item.size, usage: u, revised_prompt: d.revised_prompt || null }; ok++;
      }
    }
  }
  const missing = manifest.items.map((i) => i.id).filter((id) => !results[id]);
  const ledger = { set: manifest.set, model: manifest.model, fetchedAt: new Date().toISOString(), ok, fail, missing,
    usage: { input_tokens: usageIn, output_tokens: usageOut },
    cost: { batchOutputUsd: +(usageOut / 1e6 * RATES.batchOutPer1M).toFixed(4), standardOutputUsdEquivalent: +(usageOut / 1e6 * RATES.standardOutPer1M).toFixed(4), note: "출력 토큰 기준. 입력 토큰 단가는 문서 표로 확인하지 못해 원시 usage 만 기록한다 — 대시보드 청구액과 대조할 것." } };
  writeJson(join(OUT, "results.json"), results); writeJson(join(OUT, "ledger.json"), ledger);
  console.log(`FETCH_DONE ok=${ok} fail=${fail} missing=${missing.length} output_tokens=${usageOut} batchCost≈$${ledger.cost.batchOutputUsd}${missing.length ? " MISSING=" + missing.join(",") : ""}`);
}

// ---------------------------------------------------------------- run
async function run() {
  plan(); await submit();
  const every = Number(opt("poll", 60)) * 1000; const t0 = Date.now();
  while (true) {
    const done = await status({ quiet: false });
    if (done) break;
    if (Date.now() - t0 > 24 * 3600e3) { console.error("24h 창 초과"); process.exit(4); }
    await new Promise((r) => setTimeout(r, every));
  }
  await fetchResults();
}

const table = { plan, submit, status, fetch: fetchResults, run };
if (!table[cmd]) { console.error("usage: image-batch.mjs plan|submit|status|fetch|run --spec <set.json> --out <dir>"); process.exit(1); }
await table[cmd]();
