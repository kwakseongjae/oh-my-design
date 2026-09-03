// 렌더 무결성 검사 — 생성된 단독 HTML의 시각 파손을 결정론적으로 잡는다.
//
// 왜 있나 (2026-09-01, T3-3 레인 A 시각 감사): toss/hallmark/rep-4의 히어로가
// 우측으로 뷰포트를 16px 뚫었다. 원인은 100vw도 레이아웃 계산도 아니고 **UA 기본
// 스타일 미리셋**이었다 — 생성된 CSS 리셋이 `figure`를 빼먹어 브라우저 기본
// `margin: 1em 40px`이 살았고, 그 위에 `width: 100%`가 얹혀 부모 콘텐츠 폭 전체
// + 좌마진 40px만큼 우측이 밀려났다. 눈에는 "왼쪽 여백은 있는데 오른쪽이 잘린
// 히어로"로 보인다.
//
// 이 부류(이미 본 실패)는 결정론적으로 잡을 수 있다 — Vercel design.md 루프의
// deterministic check와 같은 자리다. 반대로 아직 못 본 설계 문제는 여기서 안
// 잡히므로 시각 리뷰를 대체하지 않는다.
//
// ⚠ T3-3 봉인과의 관계: 이 도구는 운영 QA용이다. 동결된 RUBRIC/채점 파이프라인의
// 일부가 아니며, 봉인된 run 산출물을 수정하지 않는다(읽기 전용).
//
// 검사 항목:
//   overflow-x   문서 가로 스크롤 (scrollWidth > clientWidth)
//   escape       요소가 뷰포트 우측 이탈 — 단, overflow가 clip/hidden인 조상에
//                갇혀 있고 transform으로 숨는 오프캔버스 패턴은 정보로만 표기
//   text-clip    텍스트가 자기 칸을 넘는데 줄바꿈도 잘림도 없음
//   ua-default   UA 기본 스타일 잔존 신호: figure/ul/blockquote의 기본 마진이
//                리셋 없이 살아있고 그 요소가 레이아웃 폭에 참여함
//   font         body가 브라우저 기본 세리프로 떨어짐
//   img          로드 실패 이미지, U+FFFD 대체문자
//
// 뷰포트: 기본 1440x900 + 390x844 둘 다 본다 (2026-09-03). T3-3 레인 A에서 두 평가자가 합의한 결함 중
// 오버레이가 히어로를 덮는 건과 모바일 미반응형 가로 넘침은 **모바일에서만** 보였다 — 데스크톱만 보는
// 검사는 그 부류를 구조적으로 놓친다. (docs/reviews/t3-phase6-machine-signals-2026-09-02.md 에 기록된
// 108칸 수치는 데스크톱 단독 시절의 것이다 — 뷰포트가 늘었으니 그 표와 직접 비교하지 않는다.)
//
// usage: node render-integrity.mjs <render.html...> [--json] [--viewports 1440x900,390x844]
//        node render-integrity.mjs 'glob은 셸에 맡긴다'
import { chromiumRuntime } from "./lib/browser.mjs";
import { resolve } from "node:path";

const argv = process.argv.slice(2);
const vpArgIdx = argv.indexOf("--viewports");
const VIEWPORTS = (vpArgIdx >= 0 ? argv[vpArgIdx + 1] : "1440x900,390x844").split(",").map((v) => {
  const [w, h] = v.trim().split("x").map(Number);
  if (!w || !h) { console.error(`viewport 표기 이상: ${v}`); process.exit(1); }
  return { label: `${w}x${h}`, width: w, height: h };
});
// vpArgIdx 가 -1 이면 "값 위치"는 없다 — -1+1=0 을 값으로 오해해 **첫 파일을 조용히 버리는** 버그가 있었다.
const vpValueIdx = vpArgIdx >= 0 ? vpArgIdx + 1 : -1;
const args = argv.filter((a, i) => a !== "--json" && i !== vpArgIdx && i !== vpValueIdx);
const asJson = argv.includes("--json");
if (!args.length) {
  console.error("usage: render-integrity.mjs <render.html...> [--json] [--viewports 1440x900,390x844]");
  process.exit(1);
}

const { chromium, launchOptions } = chromiumRuntime();
const browser = await chromium.launch({ headless: true, ...launchOptions });
const all = [];
let failures = 0;

for (const file of args) {
  // 뷰포트마다 한 번씩 보고, 결과는 한 파일 단위로 합친다 — problems/info 는 예전처럼 평평한 배열이고
  // 각 항목에 viewport 를 달아 어디서 난 것인지 남긴다(기존 소비자의 r.problems / r.verdict 접근 유지).
  const merged = { file, problems: [], info: [], byViewport: {} };
  let loadFailed = false;
  for (const vp of VIEWPORTS) {
  if (loadFailed) break;
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  const jsErrors = [];
  page.on("pageerror", (e) => jsErrors.push(String(e).slice(0, 140)));
  try {
    await page.goto("file://" + resolve(file), { waitUntil: "load", timeout: 20000 });
  } catch (e) {
    merged.problems.push({ check: "load", viewport: vp.label, detail: String(e).split("\n")[0] });
    loadFailed = true;
    await page.close();
    continue;
  }
  await page.waitForTimeout(500);
  const r = await page.evaluate(() => {
    const html = document.documentElement;
    const problems = [];
    const info = [];
    const cw = html.clientWidth;

    if (html.scrollWidth > cw + 1)
      problems.push({ check: "overflow-x", detail: `scrollWidth ${html.scrollWidth} > clientWidth ${cw}` });

    const clippedBy = (el) => {
      for (let a = el.parentElement; a; a = a.parentElement) {
        const o = getComputedStyle(a).overflowX;
        if (o === "hidden" || o === "clip" || o === "auto" || o === "scroll") return a;
      }
      return null;
    };
    const label = (el) => {
      const cls = typeof el.className === "string" && el.className ? "." + el.className.split(/\s+/)[0] : "";
      return `<${el.tagName.toLowerCase()}${cls}> ${((el.innerText || "").trim().replace(/\s+/g, " ").slice(0, 36))}`;
    };

    for (const el of document.querySelectorAll("body *")) {
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;

      if (rect.right > cw + 4 && rect.width < cw * 2) {
        // 완전히 화면 밖(left >= clientWidth)이면 오프캔버스 패턴이다 — 드로어·
        // 슬라이드 패널은 fixed/absolute라 스크롤도 만들지 않는다. 진짜 파손은
        // 화면 안에서 시작해 우측 경계를 **가로지르는** 요소다.
        const fullyOff = rect.left >= cw - 2;
        const contained = clippedBy(el) || cs.position === "fixed";
        // 2026-09-02 도그푸딩 #9: contained 판정을 fullyOff 분기에만 쓰면 가로 스크롤러(LC-15, overflow-x:auto 트랙) 안에서
        // 우측 경계를 가로지르는 항목이 전부 escape FAIL이었다. 클리핑 조상이 있으면 어느 분기든 파손이 아니다.
        if (contained) {
          if (info.length < 4) info.push({ check: fullyOff ? "offcanvas" : "scroller", detail: `${label(el)} right=${Math.round(rect.right)} (${fullyOff ? "의도된 오프캔버스" : "클리핑 조상 안의 가로 스크롤"}로 판정)` });
        } else if (!fullyOff && problems.filter((p) => p.check === "escape").length < 6) {
          problems.push({ check: "escape", detail: `${label(el)} right=${Math.round(rect.right)} (clientWidth ${cw})` });
        }
      }

      if (
        el.scrollWidth - el.clientWidth > 6 && el.clientWidth > 30 &&
        cs.overflowX === "visible" && el.childElementCount === 0 &&
        (el.innerText || "").trim() &&
        problems.filter((p) => p.check === "text-clip").length < 6
      )
        problems.push({ check: "text-clip", detail: `${label(el)} +${el.scrollWidth - el.clientWidth}px` });
    }

    // UA 기본 마진 잔존 — T3 감사에서 실제로 터진 그 부류만 정밀하게.
    for (const sel of ["figure", "blockquote", "ul", "ol"]) {
      for (const el of document.querySelectorAll(sel)) {
        const cs = getComputedStyle(el);
        const uaSideMargin =
          (sel === "figure" && (cs.marginLeft === "40px" || cs.marginRight === "40px")) ||
          (sel === "blockquote" && (cs.marginLeft === "40px" || cs.marginRight === "40px"));
        if (uaSideMargin && el.getBoundingClientRect().width > 200) {
          problems.push({ check: "ua-default", detail: `${label(el)} margin ${cs.marginLeft}/${cs.marginRight} — UA 기본값이 리셋되지 않음` });
          break;
        }
      }
    }

    const font = getComputedStyle(document.body).fontFamily;
    if (/^\s*(Times|serif)\b/i.test(font))
      problems.push({ check: "font", detail: `body가 브라우저 기본 세리프: ${font.slice(0, 60)}` });

    let broken = 0;
    for (const img of document.images) if (img.complete && img.naturalWidth === 0 && img.src) broken++;
    if (broken) problems.push({ check: "img", detail: `로드 실패 이미지 ${broken}개` });

    const fffd = (document.body.innerText.match(/�/g) || []).length;
    if (fffd) problems.push({ check: "encoding", detail: `U+FFFD ${fffd}회` });

    return { problems, info };
  });
  if (jsErrors.length) r.problems.push({ check: "js", detail: jsErrors[0] });
  merged.byViewport[vp.label] = { problems: r.problems, info: r.info };
  for (const x of r.problems) merged.problems.push({ ...x, viewport: vp.label });
  for (const x of r.info) merged.info.push({ ...x, viewport: vp.label });
  await page.close();
  }
  const verdict = merged.problems.length ? "FAIL" : "PASS";
  if (verdict === "FAIL") failures++;
  all.push({ ...merged, verdict });
}
await browser.close();

if (asJson) console.log(JSON.stringify(all, null, 1));
else
  for (const r of all) {
    console.log(`${r.verdict}  ${r.file}`);
    for (const p of r.problems || []) console.log(`   ✗ [${p.viewport || "?"}] ${p.check}: ${p.detail}`);
    for (const i of r.info || []) console.log(`   · [${i.viewport || "?"}] ${i.check}: ${i.detail}`);
  }
process.exit(failures ? 1 : 0);
