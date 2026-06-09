---
name: omd-token-backfill
description: "기존 references/<id>/DESIGN.md(엄격히 작성된 산문)에서 머신리더블 `tokens:` 블록(DTCG-lite: colors/typography/rounded/spacing/shadow/components)을 역추적(prose-derived)해 frontmatter에 backfill. token↔prose 정합성 게이트로 검증하고 token-status 체크리스트를 갱신. 배치(기본 10개)로 며칠에 나눠 실행. '토큰 백필', 'tokens 블록 채워', 'X에 토큰 추가', '토큰 배치 돌려', '남은 레퍼런스 토큰화' 류에 트리거. 신규 reference의 토큰은 omd-add-reference Phase 4.5가 담당(여긴 기존 ref 전용)."
---

# omd:token-backfill — existing-reference token backfill

기존 200개 레퍼런스에 `tokens:` 블록을 채운다. 산문이 이미 실측(.verification.md) +
각 사 DS 토큰명(stripe `--hds-*`, kurly `KPDS`, toss `blue500`)을 담고 있으므로 **재조사가
아니라 구조화 lift** 다. 신뢰도는 정직하게 `source: prose-derived` 로 라벨링한다.

## 핵심 원칙
1. **비파괴**: 산문 본문은 건드리지 않는다. frontmatter에 `tokens:` 블록만 **추가**.
   (단, 토큰값과 산문이 충돌하면 그 값 하나만 정합성 통일 — 전면 리라이트 금지.)
2. **정합성 게이트가 진실**: `tokens.colors`의 모든 hex는 산문(§2)·`primary_color` 어딘가에
   존재해야 한다. catalog-integrity 가 강제. ungrounded면 토큰을 고치거나 산문에 명시.
3. **스키마 레퍼런스 = `references/stripe/DESIGN.md`** 의 tokens 블록(getdesign.md 정렬).

## 배치 사이즈
**기본 10개 / run** (가벼운 transcription, 정합성 게이트가 값 오류를 기계적으로 잡음 → diff
리뷰 가능 단위). 첫 1~2배치 diff 확인 후 15까지 상향 가능. 재개는 token-status가 보장.

## 절차 (run 1회)
1. **다음 배치 선정** — `cd web && node scripts/token-status.mjs` → `PENDING` 목록에서 앞 10개.
2. **각 ref마다** (`references/<id>/DESIGN.md` 읽기):
   - (로직 보조) `GLOBAL_ROOT=$(npm root -g) node web/scripts/extract-tokens.mjs <id> --json`
     로 라이브 primary 후보 + ΔE drift 확보(primary가 산문과 어긋나면 flag).
   - (LLM) §2 색·§3 타이포 표·§5 스페이싱·§6 shadow·§4 컴포넌트를 **새 스키마로 구조화**:
     - `colors`: 의미론적 역할+variant (primary/primary-hover/brand/canvas/foreground/
       muted/on-primary/hairline/error/success …) — **산문에 적힌 hex만** 사용.
     - `typography`: `family` + 명명 토큰 `{size, weight, lineHeight, tracking, use}` (§3 표 그대로).
     - `spacing`(명명/배열) · `rounded`(`sm/md/lg/full`) · `shadow`(tier).
     - **`components`는 구조화 객체로** (flat 문자열 금지 — catalog-integrity가 강제): 한 줄당
       `name: { type: <button|input|card|badge|tab|toggle|toast|dialog|listItem|avatar>, bg, fg, radius, padding, font, use }`.
       `type` 필수(범위 밖→가장 가까운 것). 컴포넌트 bg/fg hex는 grounding된 colors 재사용(새 hex 금지).
       **`components_harvested: true`** 추가. (스키마: `spec/components-schema.md`)
     - `source: prose-derived`, `extracted: "<오늘>"`, primary가 drift면 `note`에 기록.
   - frontmatter에 블록 삽입(기존 minimal 블록 있으면 교체). 산문 본문 불변.
   - design-md 미러 동기화(`design-md/<id>/DESIGN.md` 복사).
3. **검증 + 체크리스트** — `cd web && node scripts/build-registry.mjs && npx vitest run` →
   정합성 게이트 통과 확인. `node scripts/token-status.mjs` 로 done 카운트 갱신 확인.
4. **커밋** — `feat(refs): token backfill batch (<ids>)`. 브랜치는 `feat/design-tokens` (또는 후속).

## 로직 vs LLM
- 로직: token-status(체크리스트) · extract-tokens(drift) · build-registry · 정합성 게이트.
- LLM: 역할/variant 배정 · 산문 표 → 토큰 구조화 · drift canonical 판정 · note 작성.

## 트래킹 (체크리스트)
**`web/scripts/token-status.mjs`** 가 live 체크리스트다(파일이 truth라 drift 없음):
- `node scripts/token-status.mjs` → done N/200 · pending · needs-attention(ungrounded)
- `--md` → 마크다운 체크리스트(`- [x]`/`- [ ]`) 문서로 떨굴 때
- 매 배치 후 done 카운트가 +배치크기 되는지 확인. needs-attention 0 유지.

## 하지 말 것
- ❌ 산문에 없는 hex를 토큰에 넣기(게이트 실패). ❌ 산문 전면 토큰참조(`{token}`) 치환(렌더러 이슈).
- ❌ token-status 안 보고 임의 ref 선정(중복/누락). ❌ 배치 후 build-registry/vitest 생략.
- ❌ 신규 ref를 여기서 처리(그건 omd-add-reference Phase 4.5 — 라이브 실측 토큰).
