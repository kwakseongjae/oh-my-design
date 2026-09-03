#!/usr/bin/env node
/**
 * font-inline.mjs — 가변 웹폰트를 받아 **base64 @font-face 블록**으로 만든다 (코덱스 LC-47).
 *
 * 왜 있나 (2026-09-03): 단독 HTML 산출은 렌더 시 외부 요청이 금지다. 그래서 우리 산출물은 전부
 * OS 기본 폰트로 떨어졌고, 그것이 "문서처럼 보인다"는 인상의 가장 큰 원인이었다
 * (계측: docs/reviews/landing-craft-gap-2026-09-03.md). **생성 시점에 받아 인라인하면 렌더 시 요청은 0건이다.**
 *
 * 실측: @fontsource-variable latin woff2 65–75KB → base64 87KB, opsz·wght 축 모두 작동, 외부 요청 0.
 * 주의: Google Fonts `css2` API 는 UA 에 따라 **정적 인스턴스**를 준다 — 그걸 받으면 가변 축이 죽는다.
 * 그래서 이 도구는 `@fontsource-variable` 파일을 직접 받는다.
 *
 * usage:
 *   node font-inline.mjs --family fraunces --axis opsz [--as Display] [--out block.css]
 *   node font-inline.mjs --list
 *
 * 라이선스: fontsource 가 배포하는 폰트는 대부분 OFL 이다. **임베딩 허용 라이선스만 쓴다** —
 * 사용 전 해당 폰트의 라이선스를 확인하고 산출물의 trace 에 적는다.
 */
import { writeFileSync } from "node:fs";

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf("--" + n); return i >= 0 ? argv[i + 1] : undefined; };

// 검증된 조합만 둔다(2026-09-03 실측). 새 폰트를 넣기 전에 축이 실제로 작동하는지 확인할 것.
const KNOWN = {
  fraunces: { axis: "opsz", note: "세리프 · 옵티컬 사이즈 9–144 · 디스플레이용", weight: "100 900" },
  "bricolage-grotesque": { axis: "opsz", note: "그로테스크 · 옵티컬 사이즈 · 디스플레이/본문 겸용", weight: "200 800" },
  inter: { axis: "opsz", note: "중립 산세리프 · 본문", weight: "100 900" },
  "instrument-sans": { axis: "wdth", note: "산세리프 · 폭 축", weight: "400 700" },
};

if (argv.includes("--list")) {
  console.log("검증된 가변 폰트(실측 2026-09-03):");
  for (const [k, v] of Object.entries(KNOWN)) console.log(`  ${k.padEnd(22)} axis=${v.axis.padEnd(5)} weight=${v.weight.padEnd(9)} ${v.note}`);
  console.log("\n라이선스는 fontsource 페이지에서 확인하고 trace 에 적는다.");
  process.exit(0);
}

const family = opt("family");
if (!family) { console.error("usage: font-inline.mjs --family <fontsource-name> [--axis opsz] [--as <CSS 이름>] [--out <file>]\n       font-inline.mjs --list"); process.exit(1); }
const axis = opt("axis") || KNOWN[family]?.axis || "opsz";
const cssName = opt("as") || family.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join("");
const weightRange = KNOWN[family]?.weight || "100 900";

const url = `https://cdn.jsdelivr.net/npm/@fontsource-variable/${family}/files/${family}-latin-${axis}-normal.woff2`;
const res = await fetch(url);
if (!res.ok) {
  console.error(`받지 못했다: ${url} (${res.status})`);
  console.error("축 이름이 다를 수 있다(opsz/wght/wdth). --list 로 검증된 조합을 보고, 새 폰트는 fontsource 파일 목록을 먼저 확인해라.");
  process.exit(2);
}
const buf = Buffer.from(await res.arrayBuffer());
if (buf.subarray(0, 4).toString() !== "wOF2") { console.error("woff2 가 아니다 — 받은 것이 폰트가 아닐 수 있다"); process.exit(2); }
const b64 = buf.toString("base64");

const block = `/* ${cssName} — @fontsource-variable/${family} (${axis} 축) · 원본 ${(buf.length / 1024).toFixed(1)}KB · 렌더 시 외부 요청 0건
   라이선스는 사용 전에 확인하고 trace 에 적는다 (LC-47) */
@font-face{font-family:'${cssName}';src:url(data:font/woff2;base64,${b64}) format('woff2');font-weight:${weightRange};font-display:block;font-style:normal}`;

const out = opt("out");
if (out) { writeFileSync(out, block + "\n"); console.log(`FONT_INLINE_DONE ${out} family=${cssName} axis=${axis} woff2=${(buf.length / 1024).toFixed(1)}KB base64=${(b64.length / 1024).toFixed(1)}KB`); }
else { process.stdout.write(block + "\n"); console.error(`FONT_INLINE_DONE stdout family=${cssName} axis=${axis} woff2=${(buf.length / 1024).toFixed(1)}KB base64=${(b64.length / 1024).toFixed(1)}KB`); }
