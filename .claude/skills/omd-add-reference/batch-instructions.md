# OMD Reference CREATE — Batch 서브에이전트 공용 지침

> 오케스트레이터는 brand당 서브에이전트 1개를 디스패치하며, 프롬프트에 **이 파일 경로 + brand 파라미터**(id / name / display_name_kr(KR만) / country / homepage / category_hint / tier1_hints / verified 날짜)를 전달한다. 서브에이전트는 이 지침에 파라미터를 대입해 실행한다.
> (검증 효과 실측: 2026-06-11 KR 5종 batch — 5/5 첫 실행에 전 게이트 그린, 중앙 수정 0건.)

너는 oh-my-design 카탈로그에 **새 레퍼런스 1개**를 CREATE 모드로 추가한다. 작업 루트는 이 파일 기준 repo 루트(`web/references/`가 있는 디렉터리).

## 0. 선행 읽기 (반드시, 순서대로)
1. `.claude/skills/omd-add-reference/SKILL.md` — 실행할 스킬 본문
2. `spec/verification-pipeline.md` — 3-tier + Proof Gate
3. `spec/components-schema.md` — tokens.components 스키마
4. (country가 KR 또는 TW일 때만) `spec/regional-sources.yaml`
5. 포맷 레퍼런스: `web/references/stripe/DESIGN.md` — frontmatter tokens 스키마 + §1–15 구조
6. 최신 게이트 통과 예시: `web/references/finda/DESIGN.md` + `web/references/finda/.verification.md`

## 1. 산출물 — 정확히 이 2개 파일만 생성
- `web/references/<id>/DESIGN.md`
- `web/references/<id>/.verification.md`

**이 디렉터리 밖의 어떤 파일도 수정·생성 금지.** registry, fingerprints, README, llms.txt, design-md mirror, 테스트는 오케스트레이터가 SYNC 1회로 중앙 처리한다. `npm test`·`build-registry`·`sync-catalog`·git 명령 실행 금지.

## 2. Tier 1 수집
1. tier1_hints의 공식 DS/디자인 사이트 존재 확인 (WebFetch/WebSearch). 있으면 토큰·컴포넌트 스펙 추출.
2. **라이브 inspect (필수)** — 글로벌 playwright를 node로 직접 실행 (MCP 아님):

```bash
node --input-type=module -e "
import { pathToFileURL } from 'node:url';
import { execSync } from 'node:child_process';
const GROOT = execSync('npm root -g').toString().trim();
const pw = await import(pathToFileURL(GROOT + '/playwright/index.js').href);
const chromium = pw.chromium ?? pw.default?.chromium;
const b = await chromium.launch({ headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('<HOMEPAGE>', { timeout: 45000, waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3500);
// 모달/쿠키 dismiss
for (let i = 0; i < 2; i++) { await p.keyboard.press('Escape').catch(()=>{}); await p.waitForTimeout(150); }
await p.evaluate(() => { document.querySelectorAll('[role=dialog],[aria-modal=true],[class*=modal i],[class*=popup i],[class*=overlay i]').forEach(el => { const s = getComputedStyle(el); if ((s.position==='fixed'||s.position==='absolute') && parseInt(s.zIndex||'0')>=50 && el.offsetHeight>150) el.remove(); }); });
const out = await p.evaluate(() => {
  const res = { title: document.title, body: {}, els: [], bgFreq: {}, fgFreq: {} };
  const bcs = getComputedStyle(document.body);
  res.body = { font: bcs.fontFamily, color: bcs.color, size: bcs.fontSize, lh: bcs.lineHeight, bg: bcs.backgroundColor };
  document.querySelectorAll('button, a, input, [role=button], [role=tab], h1, h2, h3').forEach(el => {
    const cs = getComputedStyle(el); const r = el.getBoundingClientRect();
    if (r.height < 18 || r.width < 10) return;
    res.els.push({ tag: el.tagName, text: (el.textContent||el.getAttribute('aria-label')||'').trim().slice(0,40), bg: cs.backgroundColor, color: cs.color, radius: cs.borderRadius, padding: cs.padding, h: Math.round(r.height), fontSize: cs.fontSize, fontWeight: cs.fontWeight, border: cs.border, shadow: cs.boxShadow.slice(0,60), font: cs.fontFamily.slice(0,40) });
  });
  document.querySelectorAll('*').forEach(el => { const cs = getComputedStyle(el); const bg = cs.backgroundColor; if (bg && bg !== 'rgba(0, 0, 0, 0)') res.bgFreq[bg] = (res.bgFreq[bg]||0)+1; res.fgFreq[cs.color] = (res.fgFreq[cs.color]||0)+1; });
  res.els = res.els.slice(0, 50);
  res.bgFreq = Object.fromEntries(Object.entries(res.bgFreq).sort((a,b)=>b[1]-a[1]).slice(0,12));
  res.fgFreq = Object.fromEntries(Object.entries(res.fgFreq).sort((a,b)=>b[1]-a[1]).slice(0,12));
  return res;
});
console.log(JSON.stringify(out, null, 1));
await b.close();
" 2>&1 | head -200
```

- 홈페이지 외에 **핵심 surface 1개 이상 추가 방문** (가격/제품/스토어 페이지 등). 공식 DS 문서 사이트가 있으면 그것도 라이브 inspect 가능.
- 봇 차단/타임아웃이면 `waitUntil:'load'`, 현실적인 Chrome UA + locale, www 유무 변형, `channel:'chrome'`(headed) 순으로 재시도. (Akamai류는 headed Chrome만 통과하는 경우 있음 — adobe/salesforce 사례.)

## 3. Tier 2 수집 (둘 다 시도, 실패해도 진행하되 footer에 명시)
- `WebFetch https://getdesign.md/<id>` (404면 brand명 변형 1회 시도)
- refero: playwright로 `https://styles.refero.design/?q=<brand>` navigate → `/style/` 링크 수집 → WebFetch
- Tier 1 ↔ Tier 2 충돌 시 silent 해결 금지 — `.verification.md` conflict matrix에 기록하고, 라이브 inspect 값 우선. 미해결은 footer `Conflicts unresolved`에 명시.

## 4. DESIGN.md 작성 — 머신 게이트 (verify-reference.mjs가 전부 검사)
1. frontmatter 필수키: `id`, `name`, (`display_name_kr` KR만), `country`, `category`(enum: ecommerce|fintech|saas|ai|consumer-tech|education|productivity|developer-tools|design-tools|backend-devops|automotive|marketing|government|healthcare), `homepage`, `primary_color: "#6자리hex"`, `logo: {type, slug}`, `verified: "<오케스트레이터 지정 날짜>"`, `omd: "0.1"`, `tokens:` 블록
2. frontmatter(여는 `---`와 닫는 `---` 사이)에 markdown heading(`## `)이나 col-0 불릿(`- `) 누출 금지 (tokens: 블록의 들여쓰인 내용 제외). tokens flow-style은 콜론 뒤 공백 필수 — `key:{`는 strict YAML 파스 실패.
3. §1 헤더는 정확히 `## 1. Visual Theme & Atmosphere` + **다음 줄 공백** + 첫 비공백 줄은 산문 prose. §2–§15도 `## N. <Title>` 형식 (stripe 헤더 그대로)
4. §4 Component Stylings: `**Variant**` 헤딩 + `- Field: value` 불릿. **1불릿 1필드** — 슬래시/콤마 결합 금지. 측정 못 한 필드는 불릿째 생략 (placeholder 금지). State는 같은 블록 안 `- Hover:` 불릿으로.
5. §4 끝 footer: `**Verified:**` / `**Tier 1 sources:**`(URL≥1) / `**Tier 2 sources:**` / `**Conflicts unresolved:**`
6. KR/TW만: Tier 1 sources에 **brand-owned 소스 URL ≥2** (getdesign·refero·google favicon proxy 카운트 안 됨)
7. `.verification.md`: `## Proof — Tier 1 live inspect` 헤딩 + `**Inspected:**` 날짜 + `**Sources:**` URL + `### Raw samples` 실측 ≥10줄 (각 줄에 rgb(/hex/px). finda 포맷). conflict matrix도 이 파일에.
8. `tokens.colors`의 모든 hex는 본문 산문(§2 권장)에 동일 문자열로 등장해야 함.
9. `tokens.components`: 구조화 객체, `type`은 button|input|card|badge|tab|toggle|toast|dialog|listItem|avatar, bg/fg/border hex도 본문 grounding, `components_harvested: true`, 최소 4개.
10. §7은 `### Do` / `### Don't` 헤더 + 불릿 형식만 인정.
11. §10–15 전부 작성 (Voice & Tone / Brand Narrative / Principles / Personas / States / Motion — 상세 기준은 SKILL.md Phase P).

## 5. 로고 결정 (필수)
🚨 **`type: favicon`이면 slug는 도메인이 아니라 완전한 이미지 URL** — 렌더러(`web/src/lib/logos.ts`)가 slug를 그대로 `<img src>`로 사용한다. bare 도메인 = 로고 깨짐.
우선순위:
1. `slug: "https://www.google.com/s2/favicons?domain=<도메인>&sz=128"` — `curl -sL`로 받아 450바이트 미만이면 generic globe → 다음 후보
2. brand CDN의 favicon/앱아이콘 직접 URL
3. `type: simpleicons, slug: <slug>` (cdn.simpleicons.org/<slug> 200 확인)
4. `type: github, slug: <org>`
최종 선택과 바이트수를 보고에 포함. 최종 판정은 verify-reference의 `logo-live` 게이트.

## 6. 자가 검증 (write 후 필수 — CI와 동일 코드)
```bash
node web/scripts/verify-reference.mjs <id>
```
FAIL이 1개라도 있으면 **수정 후 재실행**. 전 항목 PASS 전 종료 금지. 요약줄(`<id>: N/N gates green`)을 보고의 `selfcheck:`에 그대로 넣는다.

## 7. INFEASIBLE 처리
사이트 접근 불가(차단/타임아웃 반복) 또는 디자인 추출 불가 수준의 빈약한 콘텐츠 → **파일을 만들지 말고** `status: INFEASIBLE` + 사유로 보고 (오케스트레이터가 대체 brand 투입).

## 8. 최종 보고 형식 (마지막 메시지 — 오케스트레이터가 파싱함)
```
status: OK | INFEASIBLE
id: <id>
category: <확정 카테고리>
primary_color: <hex>
logo: <type>/<slug> (<bytes>B)
tier1: <URL ...>
tier2: <getdesign 결과 / refero 결과>
selfcheck: <verify-reference 요약줄 그대로>
conflicts: <none 또는 목록>
notes: <특이사항 1-2줄>
```
