---
name: omd:final-qa
description: "출간 ready 직전 read-only critic. 8-item rubric 강제. 'looks good' rubber-stamp 금지. 라인 ref 필수. 2-round revision hard cap. '최종 QA', '출간 검수', 'rubric으로 평가' 류 트리거."
user-invocable: true
---

# omd:final-qa

artifact가 사용자에게 handoff 되기 전 마지막 게이트. **read-only**. 절대 수정하지 않고, verdict + actionable feedback만 emit.

## 0. 입력

- `artifact_paths`: 모든 locale 파일 (예: `index.ko.md`, `index.en.md`)
- `design_md_path`: brand DESIGN.md
- `prior_reviews`: designer-review 보고서 경로 (있으면)
- `voice_preset`: kr-writer가 사용한 preset_id
- `round`: 1 또는 2 (orchestrator가 주입)

## 1. Rubric (9 items, 모두 closed checklist)

각 항목은 **PASS / FAIL** 이진. 회색 zone 없음. 1개라도 FAIL이면 verdict = REVISION (round 1) 또는 BLOCK (round 2).

### [1] Brand consistency
- DESIGN.md의 §Color/§Typography/§Spacing 토큰이 artifact에 사용됨
- DESIGN.md에 없는 hex/font/spacing 직접 사용 0건
- 검증: artifact 내 모든 토큰값 추출 → DESIGN.md set과 diff

### [2] Typography hierarchy
- h1 1개, h2 ≥2개, h3는 h2 자식으로만
- 빈 level skip 0건 (h1→h3 금지)
- 본문 weight 일관

### [3] Voice register
- 선언된 `voice_preset` 룰 준수 (예: toss-tech-design이면 `-요` 종결 100%)
- 금지 어미 0건 (preset spec 참조)
- 평균 문장 길이가 preset 범위 내

### [4] Image / figure
- 모든 `<img>` / `![]()`에 alt 텍스트 존재
- caption (figcaption 또는 figure 옆 짧은 설명) 존재
- alt와 caption이 다름 (alt=설명, caption=맥락)
- src 경로 valid (파일 존재)

### [5] Cross-locale parity
- KR이 N H2 → 다른 locale도 N H2
- KR이 N figure → 다른 locale도 N figure
- frontmatter `source_revision` 최신

### [6] Accessibility
- 대비비 AA 충족 (text/bg 4.5:1, large 3:1)
- focus state 정의됨 (CSS 또는 컴포넌트)
- semantic HTML (button vs div, nav, main, article)
- 한국어 본문에 `lang="ko"`

### [7] Performance
- 이미지가 적정 크기 (>500KB 단일 이미지 = FAIL)
- 코드 블록에 lang 태그 (` ```ts `, ` ```python `)
- 외부 폰트 로드 시 `font-display: swap`

### [8] Links
- 모든 hyperlink HTTP 200 (브로큰 0건). 외부 링크 체크는 best-effort.
- 외부 링크에 indicator (icon 또는 `target="_blank" rel="noopener"`)
- relative path 일관

> 한국어 표기/맞춤법은 이 rubric의 자동 항목이 아니다. 자동 검사가 필요하면
> 외부 서비스(예: 부산대 한국어 맞춤법 검사기)를 작성자가 별도로 돌린다 —
> 번들된 결정론적 도구는 없다.

## 2. Anti-rubber-stamp guardrails

- "looks good", "전반적으로 OK", "전체적으로 괜찮음" 등 문구 hard-banned. 사용 시 self-reject.
- 각 PASS도 **왜 PASS인지 1줄 evidence** 필수.
- 각 FAIL은 **라인 ref + verbatim quote + fix direction** 필수.
- DESIGN.md를 강제 재read. 캐시된 기억 사용 금지. Report 헤더에 `design_md_read_at` ISO timestamp 명시.

## 3. 2-round hard cap

```
round 1:
  rubric FAIL → verdict = REVISION
  → orchestrator가 writer로 송환
round 2:
  rubric FAIL → verdict = BLOCK
  → orchestrator가 사용자 escalation
```

3번째 round 금지. 사용자가 강제 통과 결정 시 known-issues로 frontmatter 기록 후 ship.

## 4. 출력 형식

`<work_dir>/.reviews/final-qa-round-<N>.md`:

```markdown
# Final QA — round <N>

**Date:** <ISO>
**Artifacts:** <list>
**DESIGN.md read at:** <ISO>
**Voice preset:** <preset_id>

## Rubric

| # | Item | Verdict | Evidence |
|---|---|---|---|
| 1 | Brand consistency | PASS | DESIGN.md 12 tokens 모두 사용. 추가 hex 0건. |
| 2 | Typography hierarchy | FAIL | `index.ko.md:88` h2 → h4 skip. h3 누락. |
| 3 | Voice register | PASS | 종결어미 `-요` 198/198 (100%). |
| 4 | Image / figure | FAIL | `index.ko.md:34` alt 텍스트 누락. |
| 5 | Cross-locale parity | PASS | KR 6 H2 = EN 6 H2. |
| 6 | Accessibility | PASS | 대비비 7.1:1. focus-visible 정의됨. |
| 7 | Performance | PASS | 모든 이미지 < 200KB. |
| 8 | Links | PASS | 23 link, broken 0. |

## Failed items detail

### [2] Typography hierarchy — h-level skip
- Location: `index.ko.md:88`
- Evidence: `## 가져가도 좋은 것` → 다음에 `#### 1. 토큰` (h4)
- Fix: h3로 변경

### [4] alt 텍스트
- Location: `index.ko.md:34`
- Evidence: `![](./images/karrot-hero.png "당근 메인")`
- Fix: alt 채움. 예: `![당근 메인 화면 스크린샷](./images/karrot-hero.png "당근 메인")`

## Verdict

**REVISION** (round 1) — 2 items FAIL. Writer로 송환.

다음 round에서 동일 항목 FAIL 시 BLOCK.
```

## 5. Anti-patterns

- ❌ "looks good" / "괜찮음" 류 응답 — hard ban
- ❌ Evidence 없는 PASS
- ❌ Line ref 없는 FAIL
- ❌ Severity / verdict 회피 (애매한 "약간 우려" 금지 → PASS 또는 FAIL)
- ❌ 직접 수정 시도 (read-only 원칙)
- ❌ Rubric 추가/삭제 (8 items은 고정. 추가는 별도 PR로 SKILL.md 갱신.)
- ❌ DESIGN.md를 한 번 읽고 round 2에서 재사용

## 6. Rubric 확장 (메타)

새 rubric item 추가는:
1. 이 SKILL.md에 [9] 이상으로 추가
2. 한국어 closed PASS/FAIL 정의
3. orchestrator의 round-cap에 영향 없음 (rubric 늘어도 cap=2 유지)

## 7. Cross-skill 의존

- `omd-designer-review` 보고서 ← `prior_reviews`로 참조 (해소 여부 확인)
- `omd-locale-adapter` 결과물 ← rubric [5]에서 검증
