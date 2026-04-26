---
name: omd:init
description: "프로젝트 루트에 DESIGN.md를 생성합니다. 사용자가 프로젝트를 묘사하면 67개 레퍼런스 중 가장 잘 맞는 것을 추천하고, 사용자가 고른 레퍼런스의 톤&매너를 preserve하면서 프로젝트 맥락 delta만 반영한 variation을 생성합니다. '디자인 시스템 만들어줘', 'DESIGN.md 세팅', 'brand 초기화', 'omd init' 같은 요청에 트리거됩니다. CLAUDE.md / AGENTS.md / Cursor rule shim도 함께 설치."
---

# omd:init — DESIGN.md Bootstrap

프로젝트에 DESIGN.md + 4개 AI 코딩 에이전트용 shim을 한 번에 세팅한다. 레퍼런스 톤&매너는 **preserve**하고, 사용자 프로젝트 맥락은 controlled-vocabulary delta_set으로만 반영.

## 전체 플로우

```
Phase 1: 사용자 맥락 파악 (1-2 질문)
Phase 2: 레퍼런스 추천 (omd init recommend)
Phase 3: 사용자가 1개 선택
Phase 4: omd init prepare — context + delta_set 준비
Phase 5: Hybrid variation으로 DESIGN.md 생성 (이 스킬의 핵심)
Phase 6: omd sync --force로 shim 3종 설치
Phase 7: 요약 출력
```

## Phase 1 — 맥락 파악

사용자가 이미 충분한 description을 줬으면 skip. 부족하면 **최대 2개** 질문:

1. 프로젝트 유형/도메인 (SaaS / 랜딩 / 대시보드 / 이커머스 / 커뮤니티 등)
2. 분위기 키워드 (warm, minimal, premium, playful, dense, airy 등) — controlled vocab 참조 유도

여러 질문을 한꺼번에 쌓지 말 것. 한 번에 하나씩, 또는 통합해서 한 번에.

## Phase 2 — 레퍼런스 추천

Bash:
```bash
omd init recommend "<사용자 description 전체>" --json
```

JSON 출력에서:
- `recommendations` — top 5 references (id, category, score, matchedKeywords)
- `delta_set` — description에서 추출된 controlled vocab 기반 축 이동
- `delta_set.warnings` — conflict (e.g. "formal ↔ playful")
- `delta_set.matchedKeywords` — 실제 매칭된 vocabulary 키워드

사용자에게 제시할 때:
- 5개 레퍼런스를 번호 + 한 줄 설명으로 나열 (description에 매칭된 keyword 1-2개 강조)
- warnings 있으면 먼저 알린다: "formal과 playful이 충돌해요. 'primarily playful'처럼 한쪽을 우선시하면 변형에 더 잘 반영됩니다."

## Phase 3 — 레퍼런스 선택

사용자가 레퍼런스를 고르면 Phase 4로. `omd init recommend`의 출력에 없는 레퍼런스를 요청하면 그대로 사용 (e.g. "stripe로 해줘").

## Phase 4 — Prepare

```bash
omd init prepare --ref <id> --description "<원본 description>" --json
```

이게 하는 일:
- `references/<id>/DESIGN.md` 경로 확정 (JSON에 `reference_md` 필드로 전체 내용 포함)
- 기존 `DESIGN.md`가 있으면 → `DESIGN_DEPRECATED.md`로 rename (메타 헤더 자동 삽입)
- `.omd/init-context.json` 작성 (`delta_set`, `reference_path`, `description` 담김)

JSON 출력의 `reference_md`는 variation의 input이다. Read.

## Phase 5 — Hybrid Variation 생성 (핵심)

`.omd/init-context.json`의 `delta_set`과 Phase 4 JSON의 `reference_md`를 입력으로, **새 DESIGN.md를 작성**한다.

### Phase 5A — Voice Fingerprint 내부 추출 (silent)

출력하지 말 것. 작성 전, 레퍼런스 DESIGN.md에서 다음을 머릿속으로 파악:
- 평균 문장 길이 밴드 (짧음/중간/긺)
- 어휘 register (engineering-terse / editorial-warm / clinical / playful 중)
- 은유 밀도 (없음/희소/빈번)
- 기술 밀도 (token-heavy / prose-heavy / balanced)
- 문단 리듬 (list-forward / paragraph-forward)

Phase 5B에서 emit하는 모든 내러티브 문단은 이 fingerprint에 **정확히** 맞춰야 한다.

### Phase 5B — 새 DESIGN.md emit

**엄격 규칙 (위반 = regression)**:

1. **Section 구조 frozen.** 레퍼런스의 H2/H3 heading을 같은 순서로 그대로. 새 섹션 추가 금지. 삭제 금지. 이름 변경 금지.

2. **Token 값은 `delta_set`가 허가한 것만 변경.** `delta_set.axes`에 없는 토큰은 레퍼런스와 **byte-for-byte 동일**하게. "개선"하지 말 것. 색상 hex는 `delta_set.axes["color.hue_deg"]` / `["color.saturation_pct"]` / `["color.lightness_pct"]` 에 따라 **HSL** 변환으로 shift (도 단위 hue rotation, % 단위 saturation/lightness 가산). 정확한 hex 계산이 필요하면 `omd init prepare --json` 의 출력에 이미 적용된 stub-shifted DESIGN.md를 활용 가능 (단 stub은 narrative를 손대지 않으므로 token-only baseline일 뿐임 — voice 작업은 직접 수행).

3. **내러티브 프로즈는 Phase 5A fingerprint에 매칭.** 도메인 예시를 프로젝트 맥락으로 교체할 때, 레퍼런스의 문장 길이/register/은유 밀도 그대로 유지. Vercel의 "Ship a deploy preview in seconds"를 "Ship a meal plan in seconds"로 바꾸는 건 OK. "Help families discover joyful dinners fast"로 바꾸는 건 voice violation.

4. **Domain swap은 구체 명사만.** 동사 / 형용사 / framing 건드리지 말 것.

5. **새 philosophy 도입 금지.** OmD v0.1 레이어, 없던 원칙을 추가하지 말 것.

6. **해결 불가능한 delta는 top-of-file HTML comment로 표시.** `delta_set.axes`가 참조하는 token이 레퍼런스 DESIGN.md에 없으면 `<!-- omd:unresolved: <axis> -->` 상단 추가하고 해당 token은 건드리지 않는다.

7. **Voice hints 반영.** `delta_set.voiceHints`는 Voice 섹션의 내러티브 문장에 반영하되, 레퍼런스 voice의 문장 스타일 안에서만 적용. "contractions ok"를 Voice 섹션의 원칙 bullet에 한 줄 추가하는 식.

### Phase 5C — 파일 작성

Write 툴로 `DESIGN.md`에 emit.

## Phase 6 — Shim 설치

```bash
omd sync --force
```

이게 `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/omd-design.mdc`를 생성/갱신하고 `.omd/sync.lock.json`을 업데이트한다.

## Phase 7 — 요약 출력

한 문단으로:
- Base reference + 프로젝트 context 한 줄 요약
- 적용된 주요 delta 2-3개 (e.g. "primary hex shifted warm by +12°, radius +4px")
- 생성된 파일 목록 (DESIGN.md + shims)
- DESIGN_DEPRECATED.md 있으면 언급
- 다음 스텝: `omd:apply`로 UI 작업 시작하거나, `/omd:remember`로 선호 추가 로깅

예시:
```
✓ DESIGN.md created (based on Airbnb, warm B2C marketplace context)
  - primary hue shifted +12° (warmer coral)
  - radius +6px (softer approach)
  - voice hints: contractions ok, second person

Shim files:
  ✓ CLAUDE.md
  ✓ AGENTS.md
  ✓ .cursor/rules/omd-design.mdc

Next:
  - Start UI work — the omd:apply skill will inject DESIGN.md automatically
  - Use `/omd:remember <note>` anytime you want to log a design preference
```

## 금지

- Phase 5A fingerprint를 출력하지 말 것 (내부 전용).
- `delta_set.axes`에 없는 token을 마음대로 바꾸지 말 것.
- 레퍼런스에 없는 section/heading을 추가하지 말 것.
- `.omd/init-context.json`을 직접 편집하지 말 것 (CLI가 관리).
- DESIGN.md가 이미 있는데 백업 없이 덮어쓰지 말 것 — `omd init prepare`가 자동 rename하니 스킬이 별도 처리 불필요.
