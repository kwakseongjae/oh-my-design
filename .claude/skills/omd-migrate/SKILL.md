---
name: omd:migrate
description: "단일 brand의 references/<id>/DESIGN.md를 Apple-tier 깊이로 풀 마이그레이션. 9 quality gate 전부 통과 — §4 canonical schema + ≥2 surface live inspect + Tier 2 cross-check + .verification.md conflict matrix + 검증된 §10-15 philosophy + footer + tests + visual smoke. 'X 마이그레이션', 'X apple 깊이로', 'X 풀 검증', 'omd:migrate stripe' 류에 트리거."
argument-hint: "<brand-id> [--skip-gate G3,G5] [--surfaces home,checkout,docs]"
user-invocable: true
---

# omd:migrate — Single-brand Apple-tier deep migration

`spec/migration-checklist.md`의 9 quality gate를 한 brand에 대해 모두 충족시킨다. **현재 67 brand 중 1개(apple)만 통과 상태.** 이 스킬은 나머지 66개를 하나씩 끌어올리는 도구.

다음 패턴 트리거:
- `omd:migrate stripe`
- `stripe 마이그레이션`
- `stripe apple 깊이로 풀 검증`
- `stripe 풀 마이그레이션`

자연어 OK. 슬래시 없어도 됨.

---

## Pre-flight (자동)

브랜드 인자 받고:

1. `web/references/<id>/DESIGN.md` 존재 확인 (없으면 에러: "use omd:add-reference for new ref")
2. 현재 9 gate 상태 평가:
   ```
   G1 schema:   [✓/✗] (grep variant blocks per category)
   G2 ≥4 cats:  [✓/✗] (count category headers)
   G3 surfaces: [count] live inspect already done
   G4 Tier 2:   [✓/✗] refero/getdesign attempt logged
   G5 verif.md: [✓/✗] file exists
   G6 philo:    [count verified vs illustrative]
   G7 footer:   [✓/✗] **Verified:** present
   G8 tests:    last npm test result
   G9 smoke:    not auto-checkable; ask user to verify after
   ```
3. 사용자에게 현재 상태 + 작업할 gate 보고. `--skip-gate` flag로 일부 스킵 가능.

---

## Phase G1+G2 — §4 canonical schema audit

목표: `**Variant Name**` + bullet `Field: value` 형식으로 모든 컴포넌트 카테고리 정리.

1. `grep -c '^### \|^\*\*[A-Z]' web/references/<id>/DESIGN.md` 으로 §4 구조 파싱
2. 각 카테고리(Buttons / Inputs / Cards / Badges / Tabs / Toggles / Toasts / Dialogs / Avatars / Lists / Navigation)에 대해:
   - 카테고리가 prose paragraph면 → schema로 변환 (사용자 컨펌 후)
   - 카테고리에 variant block 1개뿐이면 → 라이브 inspect 데이터를 기반으로 추가
3. **최소 4 카테고리** 충족 확인 (브랜드 surface에 실제로 그 카테고리가 있을 때만)
4. 각 variant block은 다음 fields 모두:
   ```
   **<Variant Name>**
   - Background: <value>
   - Text: <value>
   - Border: <value | none>
   - Radius: <value>
   - Padding: <value>
   - Font: <size> / <weight> / <family>
   - Use: <one-line context>
   ```

#### 🚨 §4 작성 강제 규칙 (이거 어기면 builder Components 섹션이 통째로 안 나옴)

**1줄 = 1필드.** 절대 슬래시(`/`)·콤마로 여러 필드를 한 줄에 결합하지 말 것. 파서(`extract-components`)는 `^- Field: value$` 패턴만 인식한다.

❌ **금지** — 슬래시 multi-field (KRDS 초기 작성에서 36 variants 중 35개가 안 보였던 케이스):
```
- Background: `#256EF4` / Text: `#FFFFFF` / Border: 1px solid `#256EF4`
```

✅ **필수** — 1필드 1불릿:
```
- Background: `#256EF4`
- Text: `#FFFFFF`
- Border: 1px solid `#256EF4`
```

**예외**: `- Font: <size> / <weight> / <family>` 는 한 필드(`font`)의 정해진 sub-syntax. Background·Text·Border 등 별도 필드를 합치는 것과 다르다.

**State variants** (Hover/Pressed/Focus/Disabled/Required/Error): 동일 variant 블록 내 별도 `- Hover:` / `- Pressed:` 불릿. 별도 `**Variant**` 블록 만들지 않는다.

**Size scale** (xsmall/small/medium/large/xlarge): 1개 `**Variant**`에 default 사이즈만 불릿. 나머지 사이즈는 그 블록 뒤 markdown 테이블로. variant 5개로 쪼개지 않는다.

**자가 검증 (G1+G2 통과 조건)**:
```bash
S4=$(awk '/^## 4\./,/^## 5\./' web/references/<id>/DESIGN.md)
slash=$(echo "$S4" | grep -E "^- " | grep -cE " / [A-Za-z][a-z]+:")
[ "$slash" -gt 0 ] && echo "❌ FAIL: $slash 슬래시 multi-field 잔존" && exit 1
echo "✓ canonical schema clean"
```

이 검사 실패 시 G1+G2 ✗ → 수정 → 재검증. footer-only fix로 우회 금지.

**Figma 케이스 예시** (현재 G1+G2 ✗):
- Cards/Navigation/Distinctive가 prose → schema 변환 필요
- Black Pill variant data가 Icon variant와 conflate → 분리 필요

---

## Phase G3 — Tier 1 live inspect (≥2 surfaces)

playwright로 brand의 **다른 컨텍스트 surface 2개 이상** navigate + evaluate:

| Brand type | Surfaces 권장 |
|---|---|
| 마케팅 + 제품 분리 (Apple, Toss, Spotify) | marketing home + product/checkout |
| 컨슈머 (Airbnb, Coinbase) | home + listing/asset detail |
| 개발자 도구 (Stripe, Vercel, Linear) | home + docs/dashboard |
| 동아시아 (Kakao, Karrot) | KR locale + secondary surface |
| Auto luxury (BMW, Ferrari) | home + configurator (cookie banner 너머까지) |

각 surface에 대해:
1. `mcp__playwright__browser_navigate(<url>)`
2. `mcp__playwright__browser_evaluate` — `getComputedStyle` 추출 패턴 (스킬 SKILL.md 또는 omd-add-reference 참고)
3. raw observations를 `web/references/<id>/.verification.md`에 append

---

## Phase G4 — Tier 2 cross-check

**둘 다 시도** (✓는 결과가 0건이어도 시도했다는 증거):

1. `WebFetch https://getdesign.md/<id>` — getdesign 데이터 (대부분 directory only이지만 로그)
2. **playwright** `https://styles.refero.design/?q=<brand>` (WebFetch는 SSR shell만 반환하므로 playwright 필수):
   - search → 결과 카드 collect (`a[href^="/style/"]`)
   - 각 결과 카드에 대해 `WebFetch /style/<uuid>` 으로 detail 추출
   - 한 brand에 multiple style 페이지 있으면 (Apple 4개, Airbnb 2개) 전부 수집

`.verification.md`에 Tier 2 raw observations append.

---

## Phase G5 — Conflict matrix → `.verification.md`

`web/references/<id>/.verification.md` 형식 (Apple 참고):

```markdown
# <Brand> — Verification Notes (YYYY-MM-DD)

## Tier 1 — live DOM (playwright getComputedStyle)
### Surfaces inspected
- <url 1>
- <url 2>

### Raw observations
**<Component class> — <Variant>**
- bg: <value>
- color: <value>
- ...

## Tier 2a — getdesign.md
- result: <data | "directory only" | "404">

## Tier 2b — styles.refero.design
- result: <list of style UUIDs and their data | "no record">

## Conflict Matrix

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|

### Resolution rule
- All three agree → use that value
- Tier 1 ≠ Tier 2 → Tier 1 wins **only if** Tier 1 evidence is timestamped/inspectable now
- Two Tier 2 sources disagree, Tier 1 silent → flag `(unresolved)` and document in footer
- Earlier mistakes to revert → list explicitly

### Unresolved
- (none | list)

## Components to write/revise in §4
1. <list>
```

**Conflict 발견 시 사용자에게 채팅으로 보고하고 결정 받음** (silent 해결 금지).

---

## Phase G6 — Philosophy depth pass (§10-15)

**현재는 inline-handwritten freehand. 이 스킬에서는 다음을 강제:**

### 6-1. Source minimum
- WebFetch `<domain>/about`
- WebFetch `<domain>/manifesto` 또는 `<domain>/mission` (있다면)
- WebSearch: `"<brand>" voice tone guidelines`
- 창업자 인터뷰 / 에세이 (≥1)
- 최소 3 source 확보, 못 하면 §11 narrative에 명시

### 6-2. Voice samples 검증
- §10 voice samples ≥3개 중 **최소 2개는 `verified: <url>` 마킹** 필수
- `illustrative: not verified` 마킹은 "패턴은 맞는데 라이브 UI 텍스트 아님" 명시
- 추론 샘플에 구체 수치/브랜드 전용 용어 금지 (`<amount>`, `<product>` 자리표시자)

### 6-3. Brand Narrative 사실 검증
- §11에 적힌 창업자 이름 / 창업 연도 / 주요 마일스톤 / IPO 등 → WebSearch로 1차 확인
- 미검증 수치는 `<!-- not re-verified in this pass -->` 인라인 주석

### 6-4. Style ref pick
- `--style-ref <id>` flag 또는 자동 (KR→toss, JP→line, US engineering→stripe, US minimal→claude, EU→stripe, 기타→notion)

### 6-5. Diagnostic rubric
omd-add-reference Phase 10-6 rubric 적용 (D1-D11). Pass: ≥9 green, no red, yellow ≤2.

---

## Phase G7 — Footer 갱신

`§4` 끝 / `§15` 끝 두 곳에 footer 박음 (이미 있으면 augment, 없으면 신규):

```markdown
---

**Verified:** YYYY-MM-DD (omd:migrate)
**Tier 1 sources:** <url 목록 + 각 surface 핵심 발견>
**Tier 2 sources:** <refero style URL + getdesign URL or "no record">
**Tier 2 status:** <unavailable / partial / complete>
**Conflicts unresolved:** <none | list>
**Philosophy sources:** <Tier 1 + Tier 2 for §10-15>
**Style ref:** <picked>
**Migration depth:** Apple-tier (G1-G9 all passed | G3 partial: skipped <reason>)
```

---

## Phase G8 — Tests

```
cd web && npm test --silent
```
215+ passing 유지. 깨지면:
- fixture 영향이면 `generate-css.test.ts` 합성 fixture 사용 중인지 확인
- 그 외면 사용자에게 보고 후 중단

---

## Phase G9 — Visual smoke

스킬은 자동 체크 못 함. 사용자에게 명시적 안내:

```
다음을 확인해주세요:
1. 로컬 dev server: `cd web && pnpm dev` (or `npm run dev`)
2. /reference/<id> 페이지 로드
3. 체크포인트:
   - Hero 카드 라이트/다크 모드 둘 다 OK
   - Components 섹션에 G2 통과한 모든 카테고리가 spec card로 렌더
   - white-on-white 텍스트 없음
   - Circular variants가 정사각 (이전 ellipse 버그 없음)
   - Radius cap regression 없음 (1280px 같은 값 안 박힘)
4. OK면 spec/migration-checklist.md G9 컬럼 ✓
```

---

## Phase R — Report + checklist update

마지막에:

1. `spec/migration-checklist.md`의 해당 brand row 갱신 (gate별 ✓/✗/~)
2. 하단 "Per-brand migration log" 테이블에 row append
3. 사용자에게 다음 형식으로 보고:

```
✅ <brand> migration 완료 (omd:migrate)

Gates:
  G1 schema     ✓
  G2 ≥4 cats    ✓ (Buttons, Inputs, Cards, Badges, ...)
  G3 surfaces   ✓ (N개: <url 목록>)
  G4 Tier 2     ✓ (refero: <result>, getdesign: <result>)
  G5 verif.md   ✓ (~N lines)
  G6 philo      ✓ (M voice verified / K illustrative; sources: ...)
  G7 footer     ✓
  G8 tests      ✓ (215/215)
  G9 smoke      ⚠️  pending — 사용자 확인 필요

Conflicts unresolved: <none | list>
Earlier mistakes reverted: <list>
.verification.md: web/references/<id>/.verification.md

다음 단계:
- /reference/<id> 시각 확인 → G9 ✓
- 다음 brand: omd:migrate <next>
```

---

## 안티패턴 (절대 금지)

- ❌ Tier 2 (refero/getdesign) 시도 안 하고 G4 ✓ 표기
- ❌ Live inspect 1 surface로 G3 ✓ 표기 (≥2 mandatory)
- ❌ §4 footer만 박고 §4 본문 안 건드림 ("footer-only 안티패턴" — 이전 batch 1·2의 실수)
- ❌ §10-15 voice samples 전부 illustrative로 두고 G6 ✓ 표기
- ❌ Conflict 발견했는데 silent하게 결정
- ❌ `.verification.md` 없이 G5 ✓ 표기

## Triggers (자연어)

- `omd:migrate <brand>`
- `<brand> apple 깊이로`
- `<brand> 풀 마이그레이션`
- `<brand> 깊게 검증`
- `next migrate` → checklist 다음 우선순위 brand 자동 선택
- `migrate figma` → figma 마이그레이션 시작
