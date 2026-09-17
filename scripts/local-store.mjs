#!/usr/bin/env node
/**
 * local-store.mjs — 로컬 전용 산출물의 **보관 증명**을 만들고 검사한다.
 *
 * 왜 있나 (2026-09-16): `artifacts/reference-evidence/`는 145MB이고 git에 올리지 않는다
 * (오너 결정 Q7 — 내부 캡쳐 산출물이라 저장소에 넣지 않는다). 그런데 "커밋하지 않는다"와
 * "없어져도 된다"는 다르다. 이 번들들은 140개 verified 레퍼런스가 집필된 근거이고,
 * 2026-10-09 만료 대응의 R트랙 55건은 브라우저 재실행 없이 **이 파일들만 읽어서** 처리된다.
 *
 * 그래서 파일은 저장소 밖에 두되, **무엇이 있어야 하는지는 저장소가 기억한다.**
 * 이것이 benchmarks의 bench-store가 이미 쓰는 방식이다(~/.omd/bench-store + 커밋된 SHA 매니페스트).
 *
 * usage:
 *   node scripts/local-store.mjs --write     # 현재 로컬 상태를 매니페스트로 기록
 *   node scripts/local-store.mjs --verify    # 매니페스트 대비 현재 로컬 상태 검사 (기본값)
 *   node scripts/local-store.mjs --verify --json
 *
 * exit code: 0 = 일치, 1 = 누락/변조 발견, 2 = 사용법 오류
 *
 * 이 스크립트는 네트워크를 쓰지 않고, 로컬 전용 트리를 **읽기만** 한다. 복구는 사람이 한다.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MANIFEST = join(ROOT, "artifacts", "local-store.manifest.json");

/**
 * 추적 대상 — git에 올리지 않지만 사라지면 곤란한 트리.
 * 새 트리를 추가할 때는 .gitignore와 artifacts/README.md도 함께 고친다.
 */
const TRACKED = [
  {
    id: "reference-evidence",
    dir: "artifacts/reference-evidence",
    why: "140개 verified 레퍼런스의 캡쳐 근거. 만료 대응 R트랙 55건의 유일한 입력.",
    critical: true,
  },
  {
    id: "reference-evidence-2026-07",
    dir: "artifacts/reference-evidence-2026-07",
    why: "2026-07-11~14 배치가 검증에 쓴 번들 그대로. 10월 재캡쳐가 reference-evidence/를 "
      + "덮어쓰면 현재 140개 verified 클레임의 근거가 사라진다. 읽기 전용 동결본.",
    critical: true,
  },
  {
    id: "reverify",
    dir: "artifacts/reverify",
    why: "재검증 큐/태스크 패킷. 재생성 가능하지만 실행 이력이 남아 있다.",
    critical: false,
  },
];

const argv = process.argv.slice(2);
const asJson = argv.includes("--json");
const mode = argv.includes("--write") ? "write" : argv.includes("--verify") ? "verify" : "verify";
if (argv.some((a) => a.startsWith("--") && !["--write", "--verify", "--json"].includes(a))) {
  console.error("usage: local-store.mjs [--write | --verify] [--json]");
  process.exit(2);
}

function sha256(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

/** 디렉터리를 결정론적으로 순회한다 — 정렬된 상대경로 → {sha256, bytes}. */
function scan(absDir) {
  const out = {};
  if (!existsSync(absDir)) return out;
  const walk = (dir) => {
    for (const name of readdirSync(dir).sort()) {
      const p = join(dir, name);
      const st = statSync(p);
      if (st.isDirectory()) walk(p);
      else if (st.isFile()) {
        const rel = relative(absDir, p).split("\\").join("/");
        out[rel] = { sha256: sha256(readFileSync(p)), bytes: st.size };
      }
    }
  };
  walk(absDir);
  return out;
}

const scanned = TRACKED.map((t) => {
  const files = scan(join(ROOT, t.dir));
  const names = Object.keys(files);
  return {
    ...t,
    files,
    fileCount: names.length,
    bytes: names.reduce((n, k) => n + files[k].bytes, 0),
  };
});

if (mode === "write") {
  const manifest = {
    why: "git에 올리지 않는 로컬 전용 산출물의 보관 증명. 파일은 저장소 밖, 목록과 해시는 저장소 안.",
    recordedAt: new Date().toISOString().slice(0, 10),
    note: "복구는 자동화하지 않는다. 검사가 누락을 알려주면 사람이 백업에서 되돌리거나 재캡쳐한다.",
    trees: Object.fromEntries(
      scanned.map((t) => [
        t.id,
        { dir: t.dir, why: t.why, critical: t.critical, fileCount: t.fileCount, bytes: t.bytes, files: t.files },
      ])
    ),
  };
  mkdirSync(dirname(MANIFEST), { recursive: true });
  writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
  const total = scanned.reduce((n, t) => n + t.fileCount, 0);
  const mb = (scanned.reduce((n, t) => n + t.bytes, 0) / 1024 / 1024).toFixed(1);
  console.log(`[local-store] wrote ${relative(ROOT, MANIFEST)} — ${total} files, ${mb} MB across ${scanned.length} trees`);
  process.exit(0);
}

// ── verify ────────────────────────────────────────────────────────────────
if (!existsSync(MANIFEST)) {
  console.error(`[local-store] no manifest at ${relative(ROOT, MANIFEST)} — run --write first`);
  process.exit(1);
}
const manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));
const rows = [];
let failed = false;

for (const t of scanned) {
  const rec = manifest.trees?.[t.id];
  if (!rec) {
    rows.push({ id: t.id, status: "UNRECORDED", detail: "매니페스트에 없는 트리 — --write로 기록하라" });
    continue;
  }
  const expected = rec.files ?? {};
  const missing = Object.keys(expected).filter((f) => !t.files[f]);
  const changed = Object.keys(expected).filter((f) => t.files[f] && t.files[f].sha256 !== expected[f].sha256);
  const added = Object.keys(t.files).filter((f) => !expected[f]);

  let status = "OK";
  if (missing.length) status = rec.critical ? "MISSING" : "MISSING_SOFT";
  else if (changed.length) status = "CHANGED";
  else if (added.length) status = "AHEAD";

  if (status === "MISSING" || status === "CHANGED" || status === "UNRECORDED") failed = true;

  rows.push({
    id: t.id,
    status,
    critical: rec.critical,
    recorded: rec.fileCount,
    present: t.fileCount,
    missing: missing.length,
    changed: changed.length,
    added: added.length,
    sample: missing.slice(0, 5),
  });
}

if (asJson) {
  console.log(JSON.stringify({ verdict: failed ? "FAIL" : "OK", recordedAt: manifest.recordedAt, rows }, null, 2));
  process.exit(failed ? 1 : 0);
}

console.log(`[local-store] manifest recorded ${manifest.recordedAt}`);
for (const r of rows) {
  const tag = r.critical ? "critical" : "soft";
  console.log(
    `  ${String(r.status).padEnd(13)} ${r.id.padEnd(20)} (${tag})  recorded=${r.recorded ?? "?"} present=${r.present ?? "?"}` +
      (r.missing ? ` missing=${r.missing}` : "") +
      (r.changed ? ` changed=${r.changed}` : "") +
      (r.added ? ` added=${r.added}` : "")
  );
  if (r.sample?.length) console.log(`    e.g. ${r.sample.join(", ")}`);
}
if (failed) {
  console.log("");
  console.log("  누락된 critical 트리는 재생성할 수 없다. 백업에서 되돌리거나 재캡쳐해야 한다.");
  console.log("  백업 위치와 복구 절차는 artifacts/README.md 참조.");
}
process.exit(failed ? 1 : 0);
