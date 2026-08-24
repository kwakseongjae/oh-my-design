/**
 * The common brief, built once and frozen.
 *
 * RUBRIC.md §1 is strict about what an arm may be told: the designated screen's
 * task, the common required outputs, and a snapshot handle. Nothing else — no
 * slot sentences, no reading of the evidence fields, no hint about composition
 * or image role. Those live in the scorer's codebook, and letting them leak
 * into the brief would be telling all three arms the answer we intend to mark
 * them against.
 *
 * So this builds the brief mechanically from two pinned sources: the task lines
 * transcribed from §4.1's lock table, and the capture manifests. Anything an
 * author might add by hand is exactly what §1 forbids.
 *
 *   node build-brief.mjs                 # writes brief.json + prints its SHA
 *   node build-brief.mjs --check         # fails if the file on disk has drifted
 */

import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");
const OUT = resolve(HERE, "..", "90-comparison", "brief.json");

/**
 * Transcribed verbatim from RUBRIC.md §4.1's 핵심 과업 lines. One observable
 * action per screen, which is all §1 permits the brief to carry.
 */
const TASKS = {
  apple: { url: "https://www.apple.com/kr/", screen: "홈", task: "첫 화면에서 특정 제품 한 종의 소개 경로로 이동한다." },
  baemin: { url: "https://www.baemin.com/", screen: "홈", task: "앱 설치 경로(스토어 배지 또는 QR) 하나를 연다." },
  coupang: { url: "https://www.coupang.com/", screen: "홈", task: "검색창에 질의를 입력해 상품 목록으로 이동한다." },
  figma: { url: "https://www.figma.com/", screen: "홈", task: "무료 시작 CTA를 눌러 가입 흐름에 진입한다." },
  karrot: { url: "https://www.daangn.com/kr/buy-sell/s/?search=%EB%85%B8%ED%8A%B8%EB%B6%81", screen: "검색 결과", task: "결과에서 매물 카드 하나를 열어 상세로 이동한다." },
  musinsa: { url: "https://www.musinsa.com/category/001", screen: "상의 카테고리", task: "필터를 하나 적용해 상품 그리드를 좁힌다." },
  naver: { url: "https://www.naver.com/", screen: "홈", task: "검색어를 입력해 검색 결과로 이동한다." },
  toss: { url: "https://toss.im/", screen: "홈", task: "상단 내비에서 서비스 하나를 선택해 이동한다." },
  wanted: { url: "https://www.wanted.co.kr/wdlist", screen: "채용 목록", task: "필터를 적용해 채용 카드 하나를 연다." },
};

/** RUBRIC.md §2. Format-free by design; the third output is not required to be a DESIGN.md. */
const REQUIRED_OUTPUTS = [
  "지정 화면의 실행 가능한 첫 렌더",
  "그 화면에 쓰는 대표 생성 이미지",
  "형식 자유인 디자인 시스템 설명 문서",
];

const flag = (name) => process.argv.includes(`--${name}`);

async function blockFor(brand, surface) {
  try {
    const { stdout } = await execFileAsync(process.execPath,
      [join(HERE, "verify.mjs"), "--brand", brand, "--surface", surface, "--block"],
      { cwd: HERE, maxBuffer: 32 * 1024 * 1024 });
    return JSON.parse(stdout);
  } catch (e) {
    // Exit 2 means the block exists but carries fewer than two numeric fields.
    // That is a usable answer — it says this surface cannot be a §4.2 basis —
    // so it is kept rather than swallowed.
    if (e.stdout) { try { return JSON.parse(e.stdout); } catch { /* fall through */ } }
    return null;
  }
}

const brands = [];
for (const [brand, meta] of Object.entries(TASKS)) {
  const manifestPath = join(EVIDENCE_ROOT, brand, "manifest.json");
  if (!existsSync(manifestPath)) { brands.push({ brand, error: "no manifest" }); continue; }
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

  const surfaces = [];
  for (const s of manifest.surfaces ?? []) {
    const frame = (manifest.files ?? []).find((f) => f.name === `${s.id}-viewport.png`);
    const block = await blockFor(brand, s.id);
    surfaces.push({
      surface: s.id,
      viewport: s.viewport,
      framePng: frame ? { name: frame.name, sha256: frame.sha256 } : null,
      verifyBlockId: block?.blockId ?? null,
      // A surface that cannot serve as a §4.2 basis is named as such in the
      // brief, so no arm is asked to match numbers that do not exist. Naver's
      // desktop portal has no large imagery at all.
      usableAsVerifyBasis: (block?.numericFieldCount ?? 0) >= 2,
      unusableReason: (block?.numericFieldCount ?? 0) >= 2 ? undefined
        : "이 서피스에는 §4.2가 요구하는 수치 필드가 둘 미만이다",
    });
  }

  brands.push({
    brand,
    url: meta.url,
    screen: meta.screen,
    task: meta.task,
    snapshot: {
      snapshotId: manifest.captureId,
      capturedAt: manifest.capturedAt,
      channel: manifest.channel,
      evidenceSha256: manifest.evidenceSha256,
      surfaces,
      surfaceLimit: manifest.surfaceLimit ?? undefined,
    },
  });
}

const brief = {
  version: 1,
  builtFrom: {
    tasks: "RUBRIC.md §4.1 잠금표 핵심 과업 (전사)",
    requiredOutputs: "RUBRIC.md §2",
    snapshots: "test-v2/00-evidence/<brand>/manifest.json",
  },
  contract: {
    contains: "지정 화면의 과업, 공통 필수 산출물, 스냅샷 handle",
    excludes: "T3-1 슬롯 문장, evidence 필드 해석, 구도·브랜드·이미지 역할에 관한 우리 측 해석",
    note: "세 arm이 같은 브리프를 받는다. 화면별 핵심 콘텐츠와 대표 이미지 역할은 채점자 코드북에만 있다.",
  },
  requiredOutputs: REQUIRED_OUTPUTS,
  brands,
};

// The SHA is over the brief's content, so it changes if any task line, snapshot
// id or block id changes — which is the point of recording it in a run manifest.
const canonical = JSON.stringify(brief);
const sha = `sha256:${createHash("sha256").update(canonical).digest("hex")}`;

if (flag("check")) {
  if (!existsSync(OUT)) { console.error("brief.json missing — run without --check"); process.exit(1); }
  const onDisk = JSON.parse(readFileSync(OUT, "utf8"));
  const drifted = JSON.stringify({ ...onDisk, briefSha256: undefined }) !== JSON.stringify({ ...brief, briefSha256: undefined });
  console.log(JSON.stringify({ drifted, onDiskSha: onDisk.briefSha256, rebuiltSha: sha }, null, 1));
  process.exit(drifted ? 1 : 0);
}

writeFileSync(OUT, `${JSON.stringify({ ...brief, briefSha256: sha }, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  out: OUT,
  briefSha256: sha,
  brands: brands.length,
  surfacesUsableAsVerifyBasis: brands.flatMap((b) => (b.snapshot?.surfaces ?? [])
    .filter((s) => s.usableAsVerifyBasis).map((s) => `${b.brand}/${s.surface}`)),
  surfacesNotUsable: brands.flatMap((b) => (b.snapshot?.surfaces ?? [])
    .filter((s) => !s.usableAsVerifyBasis).map((s) => `${b.brand}/${s.surface}`)),
}, null, 1));
