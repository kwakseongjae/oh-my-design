#!/usr/bin/env node
/**
 * survey-uncited-sources.mjs — `verification_v2`가 없는 레퍼런스가 **이미 알고 있는**
 * 1차 출처를 분류한다.
 *
 * 왜 (2026-09-17). CJK 확충 조사가 우연히 카탈로그 문제를 건드렸다 — `meituan`은
 * `mtd.meituan.com`(美团设计体系)을 인용하지 않고, `digital-agency-jp`는
 * `digital-go-jp/design-tokens`를, `smartnews`는 `smartnews/tailwind-theme`를 안 쓴다.
 * 넷 다 `verification_v2` 없는 299건에 속하고 셋은 `prose-derived`다.
 *
 * 그렇다면 111개 `prose-derived`가 산문 전사인 이유가 "관측할 출처가 없어서"가 아니라
 * **"있는 출처를 못 찾아서"**일 수 있다. 그 비율이 299건의 성격을 바꾼다 — 278건 재관측이
 * 아니라 상당수가 인용 붙이기라면 단가가 완전히 다르다.
 *
 * 그래서 묻는 것: **이 레퍼런스가 이미 적어 둔 URL 중에 디자인시스템·토큰 성격의
 * 1차 출처가 있는가.** 새로 찾지 않는다 — 문서가 이미 아는 것만 센다.
 *
 * URL을 긁는 곳: frontmatter `ds.url` / `homepage`, 본문 `**Tier 1 sources:**` 줄,
 * 본문 전체의 링크, `.verification.md` 전체.
 *
 * usage: node scripts/survey-uncited-sources.mjs [--json] [--list <bucket>]
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFS = join(WEB, "references");

/** 디자인시스템·토큰 성격의 URL. 마케팅·기업소개 페이지와 가른다. */
const DS_SHAPED = /design[-.]?system|designsystem|\/design\/|\.design\b|\bds\.|styleguide|style-guide|design-token|\/tokens?\b|\/components?\/|storybook|guideline/i;

/**
 * 1차 출처가 **아닌** 호스트. 첫 판에서 이걸 안 걸러 53개가 나왔는데, 표본을 보니
 * `getdesign.md/3o3` 같은 **경쟁사 카탈로그**가 도메인에 "design.md"가 들어간다는 이유로
 * 잡히고 있었다. 남의 카탈로그는 브랜드 사실의 1차 출처가 아니다 — 우리가 하려는 일을
 * 남이 한 결과일 뿐이고, 그걸 근거로 삼으면 검증이 아니라 전재가 된다.
 */
const NOT_FIRST_PARTY = /getdesign\.md|refero\.design|dribbble|behance|medium\.com|notion\.site|figma\.com\/community|awwwards|mobbin|pinterest|wikipedia|namu\.wiki|brandfetch|logo(?:s|type)?\.(?:com|dev)/i;

/** 브랜드 자신의 저장소. 플랫폼 호스트라도 org가 브랜드면 1차로 본다. */
const REPO = /github\.com\/([^/]+)\/([^/\s)]+)/i;

/** URL 호스트가 브랜드와 관련 있는가. 관련 없는 3자 도메인의 "design" 경로를 막는다. */
function relatedToBrand(url, id, homepage) {
  let host; try { host = new URL(url).hostname.toLowerCase(); } catch { return false; }
  const slug = String(id).toLowerCase().replace(/[^a-z0-9]/g, "");
  if (slug.length >= 3 && host.replace(/[^a-z0-9]/g, "").includes(slug)) return true;
  if (homepage) {
    try {
      const base = new URL(homepage).hostname.toLowerCase().replace(/^www\./, "");
      const core = base.split(".").slice(-3).join(".");
      if (host.endsWith(base) || base.endsWith(host) || host.includes(core.split(".")[0])) return true;
    } catch { /* ignore */ }
  }
  return false;
}

const rows = [];
for (const id of readdirSync(REFS).sort()) {
  const design = join(REFS, id, "DESIGN.md");
  if (!existsSync(design)) continue;
  const raw = readFileSync(design, "utf8");
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) continue;
  let front; try { front = yaml.load(fm[1], { schema: yaml.JSON_SCHEMA }); } catch { continue; }
  if (front?.verification_v2) continue;                    // 이미 있는 건 대상 아님

  const body = raw.slice(fm[0].length);
  const vpath = join(REFS, id, ".verification.md");
  const vtext = existsSync(vpath) ? readFileSync(vpath, "utf8") : "";

  const urls = new Set();
  const add = (u) => { if (typeof u === "string" && /^https?:\/\//.test(u)) urls.add(u.replace(/[),.]+$/, "")); };
  const ds = front.ds;
  add(typeof ds === "string" ? ds : ds?.url);
  add(front.homepage);
  for (const m of `${body}\n${vtext}`.matchAll(/https?:\/\/[^\s,)"'`\]]+/g)) add(m[0]);

  const usable = [...urls].filter((u) => !NOT_FIRST_PARTY.test(u));
  const dsUrls = usable.filter((u) => DS_SHAPED.test(u) && relatedToBrand(u, id, front.homepage));
  const repoUrls = usable.filter((u) => REPO.test(u) && relatedToBrand(u, id, front.homepage));
  rows.push({
    id, country: front.country ?? "?", tokenSource: front.tokens?.source ?? "?",
    urls: urls.size, dsUrls, repoUrls,
    bucket: dsUrls.length ? "ds-url-known" : repoUrls.length ? "repo-only" : "no-ds-url",
  });
}

const argv = process.argv.slice(2);
if (argv.includes("--json")) { console.log(JSON.stringify(rows, null, 2)); process.exit(0); }
const li = argv.indexOf("--list");
if (li >= 0) {
  for (const r of rows.filter((x) => x.bucket === argv[li + 1]))
    console.log(`  ${r.id.padEnd(20)} ${r.country.padEnd(3)} ${r.tokenSource.padEnd(14)} ${(r.dsUrls[0] ?? r.repoUrls[0] ?? "").slice(0, 70)}`);
  process.exit(0);
}
const tally = {}, byToken = {};
for (const r of rows) {
  tally[r.bucket] = (tally[r.bucket] ?? 0) + 1;
  byToken[r.tokenSource] ??= {};
  byToken[r.tokenSource][r.bucket] = (byToken[r.tokenSource][r.bucket] ?? 0) + 1;
}
console.log(`verification_v2 없는 ${rows.length}개 — 이미 알고 있는 출처\n`);
for (const [k, n] of Object.entries(tally).sort((a, b) => b[1] - a[1]))
  console.log(`  ${k.padEnd(14)} ${String(n).padStart(3)}  ${(100 * n / rows.length).toFixed(0)}%`);
console.log("\n  tokens.source 별:");
for (const [src, b] of Object.entries(byToken).sort((a, b) => Object.values(b[1]).reduce((x,y)=>x+y,0) - Object.values(a[1]).reduce((x,y)=>x+y,0)))
  console.log(`    ${src.padEnd(14)} ds-url ${String(b["ds-url-known"] ?? 0).padStart(3)}  repo ${String(b["repo-only"] ?? 0).padStart(3)}  없음 ${String(b["no-ds-url"] ?? 0).padStart(3)}`);
