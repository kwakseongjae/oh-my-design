---
name: omd:designer-review
description: "시각 + 브랜드 일관성 리뷰. HTML/MD/JSX artifact를 받아 brand DESIGN.md 대비 typo hierarchy, 색 budget, radius scale, 컴포넌트 state, 모바일 반응형 검수. severity BLOCK/WARN/FYI + line ref 출력. 'UI 리뷰', '디자인 검토', 'DESIGN.md 대비 검수' 류 트리거."
user-invocable: true
---

# omd:designer-review

artifact를 받아 brand의 DESIGN.md 기준으로 visual / brand consistency를 audit한다. **read-write가 아니라 advisory** — 직접 수정하지 않고 review report만 emit.

구조는 [`mastepanoski/claude-skills` ui-design-review](https://agentskills.so/skills/mastepanoski-claude-skills-ui-design-review)에서 차용.

## 0. 필수 입력

- `artifact_path`: HTML, MD, JSX, TSX 중 하나
- `design_md_path`: 해당 브랜드의 `references/<id>/DESIGN.md` 또는 프로젝트 루트 `DESIGN.md`
- (선택) `viewport`: `mobile` | `desktop` | `both` (default: both)

이 두 입력이 없으면 BLOCK으로 즉시 종료.

## 1. Audit 카테고리 (6)

### 1.1 Typography hierarchy

- DESIGN.md `§ Typography` 스펙 read
- artifact 내 h1/h2/h3/p의 size, weight, line-height 추출
- 일치 여부 검사
- 빈 h-level skip (h1 → h3) → WARN
- 본문 weight가 400/500이 아닌 700 fall-through → WARN

### 1.2 Color budget (Toss "2 saturated brand elements / viewport" rule)

DESIGN.md `§ Color`의 brand saturated tokens 추출.

- viewport당 brand saturated 사용 횟수 카운트
- > 2 → WARN (Toss principle 위반)
- > 4 → BLOCK
- DESIGN.md에 없는 hex 직접 사용 → WARN
- 회색 대신 saturated 사용 (예: warning이 아닌 컨테이너에 red-500) → WARN

### 1.3 Radius scale

- DESIGN.md `§ Radius` 토큰 read (예: 0, 4, 8, 12, 16, 9999)
- artifact 내 `border-radius` 추출
- 토큰에 없는 값 → WARN
- 한 컴포넌트 안에서 radius 혼용 (8 + 12) → FYI

### 1.4 Component states

각 interactive 요소가 다음 state를 갖춰야:
- default ✓
- hover ✓
- focus (focus-visible OK) ✓
- active ✓
- disabled ✓

누락 → BLOCK (focus는 a11y 필수)

### 1.5 Mobile responsiveness

- viewport=both인 경우 mobile에서 검사
- 최소 hit area 44x44 (iOS HIG) → BLOCK 미달
- 가로 스크롤 발생 → BLOCK
- 텍스트 14px 미만 → WARN

### 1.6 Spacing / layout

- DESIGN.md `§ Spacing` 토큰
- 토큰 외 값 (예: `padding: 13px`) → WARN
- 인접 요소 간 일관성 (한 카드 안에서 padding-x가 16 vs 20 혼재) → WARN

## 2. Severity 정의

| Severity | 의미 | 후속 조치 |
|---|---|---|
| **BLOCK** | a11y 또는 hard rule 위반. 출간 불가. | writer로 revision round 1 |
| **WARN** | best practice 위반. 출간 가능하나 권장 수정. | writer가 판단 후 fix |
| **FYI** | 정보성. 의도일 수 있음. | 무시 가능 |

## 3. 출력 형식

`<work_dir>/.reviews/designer-review-round-<N>.md`:

```markdown
# Designer review — round <N>

**Date:** <ISO>
**Artifact:** <path>
**DESIGN.md:** <path>
**Viewport:** mobile | desktop | both

## Summary

- BLOCK: <count>
- WARN: <count>
- FYI: <count>

## Issues

### [BLOCK] Focus state missing on primary CTA
- **Location:** `components/SignupForm.tsx:42`
- **Rule:** § Component states — focus is mandatory
- **Evidence:** `<button className="bg-blue-500 hover:bg-blue-600">` — focus 클래스 없음
- **Fix suggestion:** add `focus-visible:ring-2 focus-visible:ring-blue-300`

### [WARN] Color budget exceeded on mobile hero
- **Location:** `index.ko.md:34-41`
- **Rule:** § Color budget — max 2 saturated / viewport
- **Evidence:** 3 saturated brand 사용 (red-500, blue-500, green-500)
- **Fix suggestion:** green-500을 gray-700 또는 텍스트로 대체
...

## Verdict

- **PASS** (BLOCK=0, WARN≤3) — 출간 OK
- **REVISION** (BLOCK=0, WARN>3) — 권장 수정 후 재리뷰 옵션
- **BLOCK** (BLOCK≥1) — 출간 불가, writer revision round 시작
```

## 4. 시각 검수 (optional)

artifact가 HTML/JSX이고 browser-harness가 가용하면 mobile 320px + desktop 1280px 스크린샷을 캡쳐해 `.reviews/screenshots/`에 저장. 텍스트 audit과 함께 첨부.

## 5. DESIGN.md 강제 재독

**Anti-pattern**: 이전 review에서 읽은 DESIGN.md를 캐싱해 재사용 → memory hallucination 위험.

→ 매 호출마다 DESIGN.md를 **다시 read**. 읽은 timestamp를 report 헤더에 명시.

## 6. Anti-patterns

- ❌ "looks good" rubber-stamp (final-qa 동일 룰. designer-review도 "전반적으로 괜찮음" 식 응답 금지)
- ❌ DESIGN.md 안 읽고 일반 best practice로 평가
- ❌ severity inflation (모든 걸 BLOCK)
- ❌ severity deflation (BLOCK 사안을 FYI로)
- ❌ Fix suggestion 없는 issue (반드시 actionable)
- ❌ Line ref 없는 issue (`somewhere in the file` 금지)

## 7. 1회 revision 후 재호출 시

input에 `prior_report_path` 포함되면:
- 이전 BLOCK/WARN 항목을 list로 추출
- artifact 재read
- 항목별로 RESOLVED / UNRESOLVED / NEW로 표시

Round 2에도 UNRESOLVED BLOCK 있으면 orchestrator로 BLOCK escalation.
