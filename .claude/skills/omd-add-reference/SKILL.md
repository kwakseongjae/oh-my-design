---
name: omd:add-reference
description: "URL 또는 brand id 입력 → 3-tier 검증 파이프라인(Tier 1 라이브 + Tier 2 getdesign/refero + Tier 3 reconcile)으로 references/<id>/DESIGN.md를 신규 생성(CREATE)하거나 기존 섹션을 검증·갱신(UPDATE). '레퍼런스 추가/수정', 'X DS 검증', 'X 컴포넌트 다시 뽑아줘' 류에 트리거."
argument-hint: "<url|id> [--mode create|update|update-§N] [--style-ref <id>]"
user-invocable: true
---

# omd:add-reference

`spec/verification-pipeline.md`의 3-tier 파이프라인을 기계적으로 실행하는 스킬. **CREATE / UPDATE / SYNC** 세 모드.

## 모드 라우팅 (Phase 0)

| 입력 | 모드 |
|---|---|
| `https://...` | **CREATE** — 새 reference 9-section 생성 |
| `<id>` (web/references/<id>/ 존재) | **UPDATE** — §4 (기본) 또는 지정 섹션 검증·갱신 |
| `<id>` (없음) | 에러 — URL로 CREATE할지 묻기 |
| `--mode sync` | **SYNC** — count·landing·README·gh description만 갱신 |

CREATE에는 항상 SYNC가 뒤따른다 (count +1).

---

## 핵심 원칙 (모든 모드 공통)

1. **Tier 1 = 절대 우선.** brand의 공식 DS docs 또는 라이브 사이트 computed style이 truth.
2. **Tier 2 = 교차검증.** getdesign.md/<id> + styles.refero.design/?q=<brand> **둘 다 시도**. 한쪽만 성공해도 OK, 둘 다 실패면 footer에 명시.
3. **컨플릭트 silent 해결 금지.** Tier 1 ↔ Tier 2 충돌 시 채팅으로 보고 후 결정.
4. **거짓 주장 금지.** "확인했다"고 쓰려면 같은 턴에 tool call 증거 필요. refero "없음" 단정은 `?q=` 검색 + 스크롤 시도 후만.
5. **검증 footer 의무.** 갱신한 섹션 끝에 `Verified: YYYY-MM-DD` + 모든 source URL 기록.
6. **정확성만큼 맥락 깊이도 gate다.** reference는 감사 보고서가 아니라 사용자가 브랜드를 이해하고 적용하기 위한 문서다. 검증 메타·미확인 목록으로 §1/§3/§10-13을 대체하지 않는다. 공식 history/rebrand/culture/font 자료로 브랜드의 기원, 현재 변화, 표현 방식, 타이포 자산을 설명하되 각 사실의 evidence class를 분리한다.

### Context depth contract (CREATE/UPDATE 공통)

- §1 첫 문단은 `무엇을 하는 브랜드인가 + 무엇이 인상을 구별하는가`를 80–160단어 산문으로 답한다. 검증 메타로 시작하지 않는다.
- §1은 가능하면 **product/category → recognizable brand expression → current evolution/rebrand**의 3층으로 구성하고, 최소 2개 공식 source를 `.verification.md`에 남긴다.
- §3은 **official product-use / live computed surface-use / official distributed brand asset / declared-only / unresolved**를 분리한다.
- 공식 발표가 특정 폰트를 제품에 적용했다고 명시하면 live webfont가 없어도 family 사실로 승격하되, browser loader가 없으면 specimen만 unavailable로 둔다.
- 공식 배포 서체는 현재 UI 폰트가 아니어도 역사·형태·license boundary를 설명하며, `tokens.typography.family.ui`에는 넣지 않는다.
- 미확인 경계는 boundary note/footer에 두고, 유용한 브랜드 설명 전체를 경고문으로 바꾸지 않는다.
- §10–13은 공식 mission, principles, stakeholder/culture 자료가 있으면 `[FILL IN]`보다 우선한다. 허구 인물·인용·의도는 만들지 않는다.

---

## CREATE 모드

### Phase 1 — id 결정
- URL → 도메인에서 id 추출 (예: `kakao.com` → `kakao`)
- 충돌 시 사용자에게 (덮어쓰기 / 다른 id / abort) 묻기

### Phase 2 — Tier 1 수집
1. `<brand>.design`, `design.<domain>`, `<brand>/design-system` HEAD
2. WebSearch: `"<brand>" design system site:<domain>`
3. GitHub: `gh search repos "<brand> design tokens"`
4. 발견 시 → 공식 토큰 그대로 추출
5. **추가**: playwright로 brand 메인 사이트 라이브 inspect (computed style: hero CTA / nav / footer / search input / card)
6. **🔒 Proof block 작성 (mandatory, `verified >= 2026-06-01` 게이트됨)**: inspect한 raw computed-style를 `web/references/<id>/.verification.md`에 `## Proof — Tier 1 live inspect` 블록으로 기록 — `**Inspected:**` 날짜 + `**Sources:**` URL + `### Raw samples` (≥5줄, 각 줄 = 실제 1개 관측값 with `rgb(`/`#hex`/`px`). 포맷은 `spec/verification-pipeline.md` "Proof Gate" 참조. **footer만 박고 proof 생략 = catalog-integrity 실패.**
7. **🌏 KR/TW 추가 시 (`country: KR|TW`, `verified >= 2026-06-01`)**: Tier 2(getdesign/refero)는 한국·대만 brand 커버리지가 약함 → Tier 1이 증거를 짊어진다. `spec/regional-sources.yaml`의 `brand_owned`에서 **brand 자체 surface ≥2개**(공식 사이트 / DS docs / 공식 eng-design 블로그 / 공식 GitHub org)를 §4 footer `Tier 1 sources`에 명시. getdesign/refero는 이 ≥2에 **카운트 안 됨**. `discovery` aggregator(요즘IT/velog/iThome/INSIDE)는 brand surface를 **찾는 용도**일 뿐 인용 대상 아님.

### Phase 3 — Tier 2 수집 (둘 다 시도)
- `WebFetch https://getdesign.md/<id>` — 토큰 + component 스펙
- playwright `https://styles.refero.design/?q=<brand>` → 결과 카드 클릭 → 페이지 WebFetch
  - 한 brand에 여러 style 페이지가 있을 수 있음 (ex: Apple = 4개) — 가장 트렌딩한 1-2개 사용

### Phase 4 — Reconcile + 9-section 작성
`references/stripe/DESIGN.md`를 포맷 레퍼런스로 9 섹션 작성. §4는 canonical schema(variant heading + bullet `Field: value`).

### Phase 4.5 — Machine-readable `tokens:` 블록 (mandatory)
산문을 다 쓴 뒤, frontmatter에 **DTCG-lite `tokens:` 블록**을 추가한다. 신규 ref는
Phase 2 라이브 inspect를 이미 했으므로 `source: live-extract`(또는 Tier 2와 reconcile 시 `reconciled`).
`references/stripe/DESIGN.md`의 tokens 블록을 **스키마 레퍼런스**로 사용:

- 네임스페이스(getdesign.md 정렬): **`colors`**(역할+variant: primary/primary-hover/brand/canvas/foreground/muted/on-primary/hairline/error/success…) · **`typography`**(`family` + 명명 토큰 `{size, weight, lineHeight, tracking, use}`) · **`spacing`**(명명 또는 배열) · **`rounded`**(`sm/md/lg/full`) · `shadow` · **`components`(구조화 — 아래)**.
- **`components`는 구조화 객체로 작성 (mandatory).** 렌더러(`componentsFromTokens` in `extract-tokens.ts`)가 이 블록을 **직접 읽어** Components 섹션을 그린다(프로즈 §4 파싱보다 우선). 한 컴포넌트당 한 줄, flow style:
  ```yaml
  components:
    button-primary: { type: button, bg: "#1f883d", fg: "#ffffff", radius: "6px", height: "32px", padding: "0 16px", font: "14px / 600", states: "hover #1a7f37", use: "Primary action" }
    underline-tab:   { type: tab, active: "text #1f2328 + 2px bottom border #fd8c73", use: "Repo tabs" }
  ```
  - **`type` 필수** — `button input card badge tab toggle toast dialog listItem avatar` 중 하나(범위 밖은 가장 가까운 것: table/tooltip/banner→card, modal/sheet→dialog, segmented/nav→tab, chip/label→badge, stepper/switch→toggle). 그래야 그룹 헤딩이 아닌 type으로 렌더돼 안 빠진다.
  - 선택 필드(라이브 inspect/DS에서 측정한 것만): `bg fg border radius padding height font shadow hover focus active disabled states use`. tab은 `active`에 "Npx bottom border #hex"를 넣어야 언더라인이 그려진다.
  - **`components_harvested: true`** 를 블록에 추가. (상세 스키마: `spec/components-schema.md`)
  - §4 프로즈(Component Stylings)는 **사람이 읽는 용도로 유지**하되, 렌더 소스는 구조화 토큰이다.
- 결정론 보조: `GLOBAL_ROOT=$(npm root -g) node web/scripts/extract-tokens.mjs <id> --json` 으로 라이브 후보·ΔE drift 확보 → LLM이 canonical 역할/값 확정(legacy-vs-live 판별, Google/임베드 오탐 거부).
- **정합성 필수**: `tokens.colors`의 모든 hex는 **산문(§2)·primary_color 어딘가에 존재**해야 한다(미존재 → 산문에 명시하거나 토큰 수정). catalog-integrity의 token↔prose 게이트가 강제한다. 컴포넌트 bg/fg hex도 이미 grounding된 colors를 재사용(새 hex 발명 금지).
- 로고 (🚨 **`type: favicon`이면 slug는 도메인이 아니라 완전한 이미지 URL**): 렌더러 `web/src/lib/logos.ts`는 favicon slug를 **그대로** `<img src>`로 사용한다. bare 도메인을 넣으면 로고가 깨진다 (2026-06-10 batch에서 teamblind/abema/timee 3건 발생). 우선순위:
  1. `https://www.google.com/s2/favicons?domain=<도메인>&sz=128` — `curl -sL`로 받아 **450바이트 미만이면 generic globe** → 다음 후보로
  2. brand CDN의 favicon/앱아이콘 직접 URL (예: imweb vendor-cdn)
  3. `type: simpleicons, slug: <slug>` — `https://cdn.simpleicons.org/<slug>` 200 확인
  4. `type: github, slug: <org>` — org avatar
- 작성 후 **단일 게이트 명령** 실행 (catalog-integrity 전 항목 + strict-YAML 파스 + 로고 liveness를 registry 빌드 없이 검사):
  ```bash
  node web/scripts/verify-reference.mjs <id>
  ```
  전 항목 PASS 전엔 완료 선언 금지. (보조: `node web/scripts/token-status.mjs --components`)

### Phase 5 — _research.md + footer
- `_research.md`: Tier별 source URL, 신뢰도, 추출 일자
- §4 footer: `Verified` / `Tier 1 sources` / `Tier 2 sources` / `Conflicts unresolved`

### Phase 6 — SYNC (CREATE 자동 후행)
아래 SYNC 모드 절차 실행.

---

## UPDATE 모드

기존 reference를 풀 검증·갱신. **기본 대상은 §4 Components + 누락된 §10-15 Philosophy**. `--mode update-§N` 으로 단일 섹션만 지정 가능. `--no-philosophy` 로 §10-15 fill 스킵.

### Default behavior (사용자 지정 없을 때)
1. §4 풀 reconcile (모든 변형을 conflict matrix에 통과시키고 다시 작성)
2. `grep -c "^## 10\." DESIGN.md` == 0 이면 §10-15 generation 추가 (omd-init / 기존 augment 절차 활용 — 아래 P-Phase)
3. footer 박음

**footer-only 갱신은 금지.** "verified stamp만 박고 §4 본문 안 건드림"은 사용자 신뢰 깨는 안티패턴 — 이전 batch 1·2 (Toss/Airbnb/Spotify/Kakao + Stripe/Linear/Vercel/Notion/Figma)에서 했던 실수. 지금부턴 모든 brand가 Apple 식 풀 reconcile.

### Phase U1 — pre-check
- `web/references/<id>/DESIGN.md` 존재 확인
- 갱신 대상 섹션 read

### Phase U2 — Tier 1 라이브 inspect
결정론 collector를 먼저 실행한다. collector가 유용한 공개 surface를 2개 미만으로 잡거나, 보이는 interactive UI인데 interaction coverage가 0이거나, SPA/overlay/반응형 상태·폰트·컴포넌트 충돌이 남으면 `browser-harness` exception lane을 실행한다. screenshot → disputed element/state computed style + `document.fonts` → screenshot 순으로 검사하고 URL·viewport·selector/visible text·raw value·screenshot path를 `.verification.md`에 기록한다. browser-harness 관측은 raw evidence이며 단독으로 token을 승격하지 않는다. 전체 순서는 `spec/reference-collection-final.md`를 따른다.
playwright로 brand 메인 사이트 + 핵심 surface 1-2개 navigate → `browser_evaluate(getComputedStyle)` 로 raw observation 수집:
```js
const els = document.querySelectorAll('button, a[role=button], input, [role=tab]');
// 각 element의 bg / color / radius / padding / height / fontSize / fontWeight / border 추출
```
- 마케팅 surface와 commerce/checkout surface가 분리된 brand는 **둘 다** 방문 (Apple 패턴)
- raw → `web/references/<id>/.verification.md`에 기록

### Phase U3 — Tier 2 교차검증
1. `WebFetch https://getdesign.md/<id>` — 둘 다 표/스펙 추출
2. playwright `?q=<brand>` 검색 → refero 페이지 WebFetch
3. 둘 다 raw observation으로 `.verification.md`에 기록

### Phase U4 — Conflict matrix
`.verification.md`에 다음 표 작성:
```
| Field | Tier 1 (live) | getdesign | refero | Resolution |
```
**해결 규칙**:
- 셋 다 일치 → 그대로
- Tier 1 ≠ Tier 2 → Tier 1이 라이브 inspect 가능했으면 Tier 1 우선, 아니면 Tier 2 다수결
- 둘이 갈리고 Tier 1 침묵 → `(unresolved)` 플래그 + 채팅으로 사용자 보고
- 이전에 잘못 들어간 값(Apple `#0066cc` 9999px 케이스 등) 발견 시 **롤백 사유** 명시

### Phase U4.5 — Context depth reconcile

1. 공식 history/about, current rebrand/newsroom, culture/brand-assets/font 자료를 최소 3개 시도한다.
2. `.verification.md`에 `## Context and narrative evidence`를 만들고 source별 사실과 evidence boundary를 적는다.
3. §1이 검증 범위 경고로 시작하거나, 공식 폰트 자산을 전부 UI family로 합치거나 전부 삭제하거나, 공식 mission/stakeholder 자료가 있는데 `[FILL IN]`만 남으면 반드시 다시 쓴다.
4. narrative fact와 machine token은 독립적으로 판정한다. 서사적으로 유용한 공식 사실이 UI token일 필요는 없다.

### Phase U5 — Write
- §4를 canonical schema로 재작성:
  ```
  ### <Component class>

  **<Variant name>**
  - Background: <value>
  - Text: <value>
  - Border: <value>
  - Radius: <value>
  - Padding: <value>
  - Font: <size> / <weight> / <family>
  - Use: <one-line context>
  ```

#### 🚨 §4 작성 강제 규칙 (이거 어기면 builder/components 섹션이 통째로 안 나옴)

**1줄 = 1필드.** 절대 슬래시(`/`)나 콤마로 여러 필드를 한 줄에 결합하지 말 것. 파서는 `^- Field: value$` 패턴만 인식한다.

❌ **금지** — 1줄 multi-field (KRDS 초기 작성 케이스, 36 variants 중 35개가 안 보였음):
```
- Background: `#256EF4` / Text: `#FFFFFF` / Border: 1px solid `#256EF4`
```

✅ **필수** — 1필드 1불릿:
```
- Background: `#256EF4`
- Text: `#FFFFFF`
- Border: 1px solid `#256EF4`
```

**측정 못 한 필드는 불릿째 생략.** 값이 없으면 `- Padding: not measured` / `- Radius: n/a` / `not specified` 같은 placeholder를 절대 쓰지 말 것 — component preview가 그 문자열을 실제 스펙 값처럼 렌더한다. variant 블록은 측정한 필드만 나열한다 (Background+Text+Radius만 있어도 OK). catalog-integrity가 placeholder lint로 막는다.

**State variants (Hover/Pressed/Focus/Disabled/Required/Error)**도 같은 variant 블록 안에서 별도 `- Hover:` / `- Pressed:` 불릿으로. 별도 `**Variant**` 블록을 따로 만들지 않는다.

**Size scale (xsmall/small/medium/large/xlarge 등)**은 1개 `**Variant**`에 default 사이즈 값만 불릿으로 적고, 나머지 사이즈는 그 블록 뒤에 markdown 테이블/프로즈로 보강. variant를 5개로 쪼개지 않는다.

**자가 검증 (write 직후 반드시 실행)** — 수기 grep 대신 단일 게이트:
```bash
node web/scripts/verify-reference.mjs <id>
```
슬래시 multi-field / placeholder / §1 헤더 / proof / 토큰 grounding / 로고 liveness까지 한 번에 검사한다. FAIL이 1개라도 있으면 → fix → 재실행. 통과 못하면 commit 금지.
- 끝에 verification footer:
  ```
  ---
  **Verified:** YYYY-MM-DD
  **Tier 1 sources:** <list>
  **Tier 2 sources:** <list>
  **Conflicts unresolved:** <list or "none">
  ```

### Phase U6 — Tests + smoke
1. `cd web && npm test --silent` — 215 passing 유지
2. `web/src/lib/extract-components.test.ts`에 canonical default variant assertion 추가 (해당 brand 처음 검증 시)
3. 시각 smoke: `/reference/<id>` 로컬에서 띄워서 white-on-white / circular-as-ellipse / radius cap regression 없는지 확인

UPDATE는 SYNC를 트리거하지 않는다 (count 변동 없음).

---

## Phase P — Philosophy fill (§10-15)

CREATE 모드에서는 항상 실행. UPDATE 모드에서는 §10-15 누락 시 자동 실행.

### P-1. Style ref pick
- KR brand → `toss` 톤 차용
- JP brand → `line`
- TW brand → `pinkoi`
- US brand → `claude` 또는 `stripe` (engineering tone이면 stripe)
- 기타 → `notion` (중립)
- `--style-ref <id>` flag로 override

### P-2. Source 수집
- `<domain>/about`, `<domain>/brand`, `<domain>/manifesto`, `<domain>/mission`
- 창업자 인터뷰·에세이
- WebSearch: `"<brand>" voice tone guidelines`, `"<brand>" brand philosophy`
- 최소 3 source 권장

### P-3. 섹션 생성 (OmD v0.1 spec)
- §10 Voice & Tone — 2-3 voice adjectives + Do/Don't 표 + ≥3 voice samples (각각 verification 주석)
- §11 Brand Narrative — 2-3 문단 origin → mission → why-now + 임원 인용 ≥1
- §12 Principles — 3-5 numbered, 각각 *UI implication:* 라인
- §13 Personas — 2-4 archetypes ≤ 3 sentences, 상단 disclaimer
- §14 States — Empty/Loading/Error(≥2)/Success/Skeleton/Disabled 6 카테고리 모두
- §15 Motion & Easing — duration scale + easing tokens + motion rules

### P-4. Validate
- `grep -c "^## 1[0-5]\." DESIGN.md` == 6 확인
- voice samples ≥3, principles ≥3, states ≥10 행
- 거짓 인용 없는지 (illustrative는 인라인 주석으로 명시)

### P-5. Append
DESIGN.md §9 끝에 §10-15 append. 프론트매터 `omd: 0.1` 없으면 추가.

---

## SYNC 모드

CREATE 시 자동, 수동으로도 호출 가능.

1. **References count 갱신**: 현재 `ls -d web/references/*/ | wc -l` 결과를 다음 위치에 반영
   - `README.md`, `README.ko.md`, `README.ja.md`, `README.zh-TW.md` — "67 brand DESIGN.md" 류
   - `web/src/components/landing-v2/hero.tsx` 또는 `sections.tsx` — 카피 내 숫자
   - `web/public/llms.txt` — 카탈로그 line
   - GitHub repo description: 이미 **"100+ real company design systems"** count-agnostic 문구로 고정 (2026-05-15 결정 — 매 batch마다 숫자 갱신 안 함). 한 단계 (e.g. 200+ 도달) 넘기 전까진 `gh repo edit` 호출 금지.
2. **Symlink sanity**: 루트 `references` → `web/references` symlink 확인 (이미 있으면 skip)
3. **Reference fingerprints**: `data/reference-fingerprints.json`, `.claude/data/reference-fingerprints.json`, `.codex/data/reference-fingerprints.json` 새 entry append
4. 사용자에게 git status 보여주고 commit 여부 묻지 않음 (memory: no auto-commits)

---

## Reusable utilities

### refero 검색 흐름
```
1. mcp__playwright__browser_navigate("https://styles.refero.design/?q=<brand>")
2. mcp__playwright__browser_snapshot — 결과 카드의 /style/<uuid> URL 수집
3. 각 카드를 WebFetch로 추출 (depth가 필요하면 navigate 후 evaluate)
```

### apple.com 류 라이브 inspect 패턴
```js
const out = [];
document.querySelectorAll('button, a, input').forEach(el => {
  const cs = getComputedStyle(el);
  const r = cs.borderRadius;
  const bg = cs.backgroundColor;
  if ((bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') && (r === '0px')) return;
  const rect = el.getBoundingClientRect();
  if (rect.height < 24) return;
  out.push({
    text: (el.textContent||el.getAttribute('aria-label')||'').trim().slice(0,40),
    bg, color: cs.color, radius: r,
    padding: cs.padding, h: Math.round(rect.height),
    fontSize: cs.fontSize, fontWeight: cs.fontWeight,
    cls: el.className.toString().slice(0, 60),
  });
});
return out.slice(0, 30);
```

---

## 안티패턴 (절대 금지)

- ❌ Tier 2 전혀 시도 안 하고 "확인했음" 주장
- ❌ refero "없음" 결론을 단일 스크롤에서 내림
- ❌ Tier 1 라이브 인 inspect 없이 §4 컴포넌트 값 작성
- ❌ 검증 footer 누락
- ❌ 충돌 silent 해결
- ❌ getdesign.md 표시값을 Tier 1로 취급 (Tier 2임)
- ❌ **Proof block 없이 footer만 `Verified` 박기** — `verified >= 2026-06-01` ref은 `.verification.md`에 `## Proof` 블록(≥5 raw sample + URL + 날짜) 필수. footer-only stamp = catalog-integrity 실패. (`spec/verification-pipeline.md` Proof Gate)
- ❌ **§4 필드에 placeholder 값** (`not measured` / `not specified` / `n/a` / `tbd`) — 측정 못 한 필드는 불릿째 생략. preview가 문자열을 그대로 렌더해서 깨져 보인다. catalog-integrity placeholder lint가 막음.
- ❌ **§7 Do's and Don'ts를 `**Do**` 볼드 헤더나 `- Do …` 평문으로 작성** — 파서(`extractGuidelines`)는 **`### Do` / `### Don't` 헤더** 또는 인라인 `- **DO**` 불릿만 인식한다. 그 외 형식은 0개로 처리돼 preview Guidelines 섹션이 통째로 빈다. 반드시 `### Do` + 불릿 / `### Don't` + 불릿 형식. (don't 불릿은 맨 앞 "Don't" 빼고 적기 — 섹션 헤더가 컨텍스트 제공). catalog-integrity guideline advisory가 감지.
- ❌ **KR/TW ref인데 Tier 1 source가 getdesign/refero뿐** — `verified >= 2026-06-01` KR/TW는 brand-owned regional source ≥2 필수 (`spec/regional-sources.yaml`). 서구 카탈로그는 Tier 2일 뿐 카운트 안 됨.
- ❌ **새 reference 추가 후 SYNC phase 안 돌리고 종료** — fingerprints / API mapping / logos / docs SEO 카운트가 mismatch. 단일 추가도 SYNC 필수 (아래 Phase 5 참조).
- ❌ **`logo.type: favicon`에 bare 도메인 slug** — 렌더러는 slug를 그대로 `<img src>`에 넣는다. `slug: abema.tv`는 로고 깨짐 (2026-06-10 batch 3건). 반드시 완전한 URL + `verify-reference.mjs`의 logo-live 게이트 통과.
- ❌ **tokens YAML flow-style에서 콜론 뒤 공백 누락** — `feature-title:{ size: ... }`는 strict YAML 파스 실패 → build-registry가 ref 전체를 거부 (2026-06-10 stores 케이스). `key: {` 형식 + verify-reference의 yaml-strict-parse 게이트로 차단.
- ❌ **수기 grep 자가검증으로 끝내기** — 자가검증은 CI 게이트와 같은 코드(`verify-reference.mjs`)여야 한다. 부분집합 grep은 YAML/로고 클래스를 놓친다.
- ❌ **§1 헤더를 비표준으로 변경** — `## 1. Visual Theme & Atmosphere` 가 catalog canonical. "Overview" / "Identity" / "Foundation tokens" / `## §1` 등 변형 쓰면 web preview Hero 카드의 description이 빈칸으로 렌더 (2026-05-14 kr10 batch에서 flex/upbit/kbank 3건 발생). 모든 §N 헤더는 `## N. <Title>` 형식 + §1은 무조건 `Visual Theme & Atmosphere` + 첫 단락은 산문 prose (테이블/리스트/서브헤딩 금지). 검증: `grep -L '^## 1\. Visual Theme' references/*/DESIGN.md` 결과 0.

---

## Phase 5 — SYNC (registry-driven, 새 reference 추가 직후 mandatory)

Hand-maintained map drift was the recurring batch-bug (homepage-urls.ts 2-batch miss). It's eliminated: every brand attribute lives in the **canonical frontmatter** at the top of `references/<id>/DESIGN.md`, and `web/src/data/registry.generated.ts` is the typed projection consumed by every UI surface.

### 1. Canonical frontmatter (the only place you edit data)
Required keys per id (schema doc lives at the top of `registry.generated.ts`):

```yaml
---
id: <slug>
name: <English display>
display_name_kr: <한글 표시>    # optional
country: KR|US|JP|TW|UK|DE|FR|IT
category: ecommerce|fintech|saas|ai|consumer-tech|education|productivity|developer-tools|design-tools|backend-devops|automotive|marketing|government|healthcare
homepage: https://...
primary_color: "#hex"
logo:
  type: favicon|simpleicons|github
  slug: <favicon→완전한 이미지 URL | simpleicons→slug | github→org>   # favicon slug는 URL 그대로 렌더됨 — bare 도메인 금지
verified: YYYY-MM-DD
omd: 0.1
ds:                              # optional, Tier-1 official DS only
  name: ...
  url: ...
  type: system|brand
  description: ...
  og_image: ...                  # optional
---
```

### 2. Regenerate + propagate + gate — 단일 명령
```bash
node web/scripts/sync-catalog.mjs        # --dry-run으로 미리보기 가능
```
이 한 명령이 ① build-registry ② fingerprints ×3 (누락 id append + count + 미러 동기화) ③ design-md mirror 재복사 ④ README ×4 / llms.txt / app layout 카운트 문자열 ⑤ llms.txt Examples append ⑥ `npm test` 까지 수행한다. vitest catalog-integrity가 그린이면 API route / logos / tokens / design-systems 모듈은 registry에서 자동 반영된다.

스크립트가 생성하는 fingerprint의 `tone_keywords`는 §1에서 휴리스틱 추출 — 어색하면 손으로 다듬는다.

### 3. 여전히 수동인 것 (스크립트가 안 건드림)
- CHANGELOG.md 엔트리 + `package.json` patch bump (omd-cli memory rule)
- git commit (memory: no auto-commits)

### 4. Sub-agent self-verification (mandatory at end of CREATE/UPDATE)
```bash
node web/scripts/verify-reference.mjs <id>
```
registry 빌드 없이 단독 실행 가능 — 서브에이전트는 이걸로 자가검증한다 (catalog-integrity per-ref 항목과 1:1 + strict-YAML + 로고 liveness). Report pass/fail and the exact failing gate. Do not declare done before this is green. (sync-catalog 후 추가 보증이 필요하면 `cd web && npm test -- --run __tests__/catalog-integrity.test.ts -t "<id>"`.)

---

## Batch 서브에이전트 프로토콜 (5~20개 일괄 추가)

검수 리소스 폭증의 근본 원인은 "에이전트마다 다른 자가검증 + 중앙에서 재검수"의 이중화였다. 프로토콜:

1. **오케스트레이터**: brand 목록 확정 (id/homepage/country/category_hint/tier1_hints) → brand당 서브에이전트 1개 병렬 디스패치 (한 wave에 5~10개; 토큰 압박 시 5개씩). 서브에이전트 프롬프트 = **`.claude/skills/omd-add-reference/batch-instructions.md` 경로 + brand 파라미터 + verified 날짜(오늘)** — 지침 본문을 프롬프트에 복사하지 말고 파일을 읽게 한다.
2. **서브에이전트 권한 경계 (강제)**:
   - 쓰기는 `web/references/<id>/{DESIGN.md,.verification.md}` **2파일만**. registry/fingerprints/README/llms/design-md/테스트는 절대 건드리지 않는다 (병렬 충돌 방지 — SYNC는 중앙 1회).
   - `npm test`/`build-registry`/git 실행 금지.
   - 종료 조건 = `node web/scripts/verify-reference.mjs <id>` 전 게이트 PASS. FAIL이 남은 채 보고 금지.
   - 사이트 접근 불가/콘텐츠 빈약 → 파일 생성 없이 `status: INFEASIBLE` 보고 (오케스트레이터가 대체 brand 투입).
3. **보고 스키마 (고정)**: `status / id / category / primary_color / logo(type/slug/bytes) / tier1 / tier2 / verify-reference 결과줄 / conflicts / notes ≤2줄`.
4. **오케스트레이터 마무리**: 전 에이전트 OK 확인 → `node web/scripts/sync-catalog.mjs` 1회 → CHANGELOG + package.json bump → dev 서버 띄워 신규 `/reference/<id>` 2~3개 시각 smoke → 결과 보고.

## 트리거 (자연어 OK — 슬래시 없이 호출되어도 동작)

- "X 레퍼런스 추가" / "X 새로 만들어줘" / URL 한 줄 → CREATE
- "X 컴포넌트 다시 뽑아줘" / "X §4 검증" / "X 잘못된거 같아" → UPDATE
- "67 카운트 맞춰줘" / "landing 동기화" / "리퍼런스 동기화" → SYNC

### Batch / 자연어 인식

- "next 5", "다음 5개", "다음 10개" → 알파벳 순으로 미검증(no `**Verified:**` footer) brand 중 N개를 골라 UPDATE 일괄
- "남은거 다 처리해줘", "67 migration 처리해줘" → 미검증 전체를 N=5씩 batch로 진행하고 매 batch 끝에 status 보고
- "stripe부터 5개" → 알파벳 정렬 위치 stripe부터 5개 (stripe/supabase/superhuman/tesla/together.ai)
- "<brand1> <brand2> <brand3>" 공백 list → 명시된 brand 일괄

### Batch 진행 절차

1. `grep -L '^\*\*Verified:\*\*' web/references/*/DESIGN.md` 로 미검증 list 산출
2. 사용자 지정 N(또는 전체)만큼 head/range 선택
3. 각 brand에 대해 UPDATE phase U2~U5 실행 (parallel WebFetch + sequential playwright session)
4. batch 끝마다 `npm test --silent` 실행
5. 보고 형식: `완료: <list> | 남은 수: <count> | 다음 batch 후보: <head 5>`
