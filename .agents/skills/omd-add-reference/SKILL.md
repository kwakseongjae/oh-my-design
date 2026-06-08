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

- 네임스페이스(getdesign.md 정렬): **`colors`**(역할+variant: primary/primary-hover/brand/canvas/foreground/muted/on-primary/hairline/error/success…) · **`typography`**(`family` + 명명 토큰 `{size, weight, lineHeight, tracking, use}`) · **`spacing`**(명명 또는 배열) · **`rounded`**(`sm/md/lg/full`) · `shadow` · `components`.
- 결정론 보조: `GLOBAL_ROOT=$(npm root -g) node web/scripts/extract-tokens.mjs <id> --json` 으로 라이브 후보·ΔE drift 확보 → LLM이 canonical 역할/값 확정(legacy-vs-live 판별, Google/임베드 오탐 거부).
- **정합성 필수**: `tokens.colors`의 모든 hex는 **산문(§2)·primary_color 어딘가에 존재**해야 한다(미존재 → 산문에 명시하거나 토큰 수정). catalog-integrity의 token↔prose 게이트가 강제한다.
- 작성 후 `cd web && node scripts/build-registry.mjs && node scripts/token-status.mjs` 로 검증 + 체크리스트 갱신.

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

**자가 검증 (write 직후 반드시 실행)**:
```bash
S4=$(awk '/^## 4\./,/^## 5\./' web/references/<id>/DESIGN.md)
echo "$S4" | grep -E "^- " | grep -cE " / [A-Za-z][a-z]+:"   # 0이어야 함 — 0 아니면 슬래시 multi-field 잔존
echo "$S4" | grep -cE "^\*\*[A-Za-z가-힣]"                    # variant 수
echo "$S4" | grep -cE "^- [A-Za-z]"                            # bullet 수 (variant당 평균 ≥3 권장)
```

슬래시 multi-field가 1줄이라도 잔존하면 → fix → 다시 검증. 이 체크 통과 못하면 commit 금지.
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
  slug: <domain | simpleicons-slug | github-org>
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

### 2. Regenerate + gate
```bash
cd web && npm run build-registry && npm test
```
The vitest catalog-integrity suite asserts schema, §1 canonical header, prose-first paragraph, fingerprint cross-check, design-md mirror, triple-fingerprint byte identity, and registry sort order. If green, the API route / logos / tokens / design-systems modules pick up the new entry automatically — they all read from the registry.

### 3. Adjacent surfaces (not registry-derived, manual)
- Fingerprints × 3 (root + `.claude` + `.codex`) — append entry, bump `count`, refresh `generated_at`; keep byte-identical
- `design-md/<id>/DESIGN.md` — mirror sync: `rm -rf design-md && cp -RL references design-md`
- READMEs × 4 (en/ko/ja/zh-TW) — count badge + body
- `web/public/llms.txt` — header count + Examples list display name append
- `web/src/app/{layout,docs/layout,docs/page,builder/layout,design-systems/layout}.tsx` — count strings
- CHANGELOG.md + `package.json` patch bump (omd-cli memory rule)

### 4. Sub-agent self-verification (mandatory at end of CREATE/UPDATE)
```bash
cd web && npm test -- --run __tests__/catalog-integrity.test.ts -t "<id>"
```
Report pass/fail and the exact failing assertion. Do not declare done before this is green.

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
