---
name: omd:init
description: "프로젝트 루트에 DESIGN.md를 부트스트랩 — 실제 기업 레퍼런스 중 컨텍스트 매칭으로 추천하고 선택된 레퍼런스의 톤&매너를 보존한 variation을 생성. DESIGN.md 부재 상태에서의 UI 작업 또는 '디자인 시스템 세팅', 'set up our design system', 「デザインシステムを作って」, 「建立設計系統」류의 요청에 트리거. CLAUDE.md / AGENTS.md / Cursor rule shim도 함께 설치."
---

# omd:init — DESIGN.md Bootstrap

프로젝트에 DESIGN.md + AI 코딩 에이전트용 shim 3종을 한 번에 세팅. 레퍼런스 톤&매너는 **preserve**하고, 사용자 프로젝트 맥락은 controlled-vocabulary delta_set으로만 반영.

**CLI 호출 없음** — Read/Write/Bash(파일 작업만) 툴로 직접 처리. (이전 버전은 `omd init recommend` 등 CLI subcommand를 호출했으나 현재 CLI binary는 `install-skills`만 노출. 이 skill은 self-contained하게 동작.)

## 전체 플로우

```
Phase 1: 사용자 맥락 파악 (1-2 질문)
Phase 2: 레퍼런스 추천 (fingerprint 기반 in-head 점수)
Phase 3: 사용자가 1개 선택
Phase 4: 레퍼런스 DESIGN.md Read + delta_set 추출
Phase 4.5: Philosophy Layer 입력 수집
Phase 5: Hybrid variation으로 DESIGN.md 작성
Phase 6: Shim 3종 설치 (omd:sync skill 위임)
Phase 7: 요약 출력
```

## Phase 1 — 맥락 파악

이미 충분한 description이 있으면 skip. 부족하면 **최대 2개** 질문:

1. 프로젝트 유형/도메인 (SaaS / 랜딩 / 대시보드 / 이커머스 / 커뮤니티 등)
2. 분위기 키워드 (warm, minimal, premium, playful, dense, airy 등)

한 번에 하나씩, 또는 통합해서 한 번에. 질문 쌓지 말 것.

## Phase 2 — 레퍼런스 추천 (file-based, no CLI)

### 2.1 카탈로그 로드

다음 파일을 Read 툴로 전체 로드 (있는 순서대로 fallback):

1. `.claude/data/reference-fingerprints.json` (사용자 프로젝트에 설치된 카탈로그 — 표준 경로)
2. `node_modules/oh-my-design-cli/data/reference-fingerprints.json` (npm 설치 직접 경로)
3. `data/reference-fingerprints.json` (개발 환경)

스키마: `{ count, items: [{ id, primary_color_hex, category, visual_theme, voice_fingerprint, tone_keywords, antipatterns, signature_motion, has_personas, category_raw }] }`.

추가 보조 파일 (있으면 같이 로드):
- `.claude/data/vocabulary.json` — controlled vocab axes/keywords
- `.claude/data/reference-tags.md` — human-readable keyword matrix

### 2.2 task 분석 (silent, in-head)

사용자의 description에서 다음 추출:
- **명시 brand hint**: 한글/영문 brand 이름 직접 언급 (예: "토스 같은" → `toss`, "뱅크샐러드 톤" → `banksalad`, "Linear-clone" → `linear.app`). brand 이름과 id 매핑은 일반 지식 사용 + `items[].id` 또는 `items[].category_raw`에서 cross-check.
- **vocab 키워드**: warm / minimal / dense / playful / formal / editorial / clinical 등 (vocabulary.json 참조)
- **카테고리 추측**: Consumer Tech / Fintech / Productivity / E-commerce / Design Tools / Developer Tools / AI & LLM / Mobility / HR / Real Estate / Healthcare / Government

### 2.3 점수 계산 (in-head, deterministic)

각 item에 대해:
- brand hint match → **+5점**
- `tone_keywords` ∩ task vocab 키워드 → 매칭당 **+1점**
- `category` 일치 → **+1점**

Top 5 정렬. 모든 추천 id는 `items[].id`에 **반드시** 존재 — hallucination 금지.

### 2.4 사용자에게 제시

prose로:

```
"<task 핵심 한 줄>"을 보니 <top1.id>가 가장 잘 맞을 것 같아요 — <visual_theme 핵심 한 줄 + 매칭 키워드 1-2개>.

이대로 가시려면 go (또는 <top1.id>).
다른 후보: <top2.id> (한 줄 이유) · <top3.id> (...) · <top4.id> (...) · <top5.id> (...)
본인이 아는 다른 reference 있으면 id로 알려주세요 (예: vercel) — 카탈로그에 없으면 알려드립니다.
```

vocab axis conflict 있으면 (예: formal ↔ playful) 먼저 알리고 우선시할 축을 묻기.

**Claude Code 채널이면 위 prose 대신 AskUserQuestion 툴 1개로 제시** (사용자가 화살표로 고르는 selectable UI — #21). question 1개에 top-5 후보 id 5개를 option으로:

```
question: ""<task 핵심 한 줄>"에 맞는 레퍼런스를 골라주세요"
header: "Reference"
options: top1~top5 각각 → label = <id>, description = fingerprint 기반 1줄 (<category> · <tone_keywords 1-2개>)
  - top1에는 label에 "(추천)" 표시
```

(AskUserQuestion이 자동 "Other"를 추가하므로 카탈로그의 다른 id를 자유 입력으로 답하는 것도 그대로 가능.) Codex / OpenCode 등 AskUserQuestion이 없는 채널은 위 prose 포맷 유지. 점수 계산·채택 로직(Phase 3)은 어느 쪽이든 동일.

## Phase 3 — 사용자 선택

- `go` 또는 top-5 안 id → 그 id 채택
- top-5 밖이지만 카탈로그 안 id → 그대로 채택
- 카탈로그에 없는 id → "해당 id는 카탈로그에 없어요. top-5 중에서 골라주세요."
- "중단" → 종료

## Phase 4 — 레퍼런스 DESIGN.md 로드

### 4.1 경로 결정

선택된 id를 `<id>`로 하고, 다음 순서로 Read:

1. `.claude/data/references/<id>/DESIGN.md`
2. `node_modules/oh-my-design-cli/web/references/<id>/DESIGN.md`
3. `web/references/<id>/DESIGN.md` (개발 환경)

로컬 경로가 전부 없으면 (npx 설치가 기본 경로라 흔한 상황):

4. `https://oh-my-design.kr/design-systems/<id>.md` 를 fetch
   (WebFetch 또는 `curl -fsSL`). 200이면 응답 본문이 곧 reference DESIGN.md다.
   가져온 내용을 `.claude/data/references/<id>/DESIGN.md`로 저장해
   다음 실행부터는 로컬 캐시(경로 1)로 잡히게 한다.

4까지 전부 실패하면 **절대 DESIGN.md를 임의로 지어내지 말 것.** 사용자에게
"레퍼런스 `<id>` 원문을 찾지 못했어요 (오프라인이거나 카탈로그 미배포).
네트워크 연결 후 재시도하거나 다른 레퍼런스를 골라주세요"라고 보고하고 종료.

전체 내용을 `reference_md` 변수로 보관 (Phase 5의 입력).

### 4.2 기존 DESIGN.md 처리

프로젝트 루트에 이미 `DESIGN.md`가 있으면:
1. Read로 내용 확인
2. Bash로 `mv DESIGN.md DESIGN_DEPRECATED.md`
3. `DESIGN_DEPRECATED.md` 최상단에 다음 헤더 prepend (Edit 툴):
   ```html
   <!-- omd:deprecated
   replaced_at: <ISO-8601 today>
   replaced_by: ./DESIGN.md (bootstrapped from <id>)
   reason: omd:init bootstrap
   -->
   ```

### 4.3 init-context 기록

`.omd/init-context.json` 작성 (없으면 mkdir):
```json
{
  "reference_id": "<id>",
  "description": "<원본 사용자 description>",
  "mode": "clone | inspired",
  "delta_set": {
    "axes": { /* description에서 추출한 vocab axis ↦ shift 값 */ },
    "voiceHints": [ /* 추출된 voice 힌트 */ ],
    "matchedKeywords": [ /* 매칭된 vocab 키워드 */ ],
    "warnings": [ /* axis conflict 등 */ ]
  },
  "bootstrapped_at": "<ISO-8601>"
}
```

`mode` 값 결정:
- omd:reference-capture가 먼저 돌았으면 그 결과 사용 (`.omd/init-context.json` 기존값)
- 아직 정해지지 않았으면 사용자에게 묻기 (omd:reference-capture Phase 0과 동일한 prompt). 라이브 캡쳐 없이 omd:init만 단독으로 도는 경우는 사실상 inspired 외엔 의미 없으므로 기본 `inspired`.

`axes` 표준 키: `color.hue_deg` (도), `color.saturation_pct` (%p), `color.lightness_pct` (%p), `radius.delta_px` (px), `density.shift` (-2 ~ +2), `tracking.shift` (-0.01em ~ +0.01em).

## Phase 4.5 — Philosophy Layer 입력 수집 (CRITICAL)

§11 (Brand Narrative), §12 (Principles), §13 (Personas)는 레퍼런스의 검증된 historical facts에 기반. 단순 domain swap하면 거짓 brand claim을 ship하는 사고가 난다.

Phase 5B 진입 전 사용자에게 한 번에 묻기:

```
DESIGN.md의 §11-13 (Brand Narrative / Principles / Personas)에는 사실 정보가 들어갑니다. 다음을 알려주시거나 "skip"이라고 답해주세요:

1. 프로젝트 이름 / 창립 시점 (대략)
2. 핵심 thesis 한 문장 (e.g. Airbnb의 "Belong Anywhere")
3. 공식 tagline 또는 거부하는 카테고리 default
4. 타겟 사용자 segment 2-4개

답변 받으면 → §11-13에 반영
"skip" → §11-13은 [FILL IN: ...] placeholder + omd:limitation 코멘트
```

부분 답변은 받은 부분만 사용, 나머지 skip.

## Phase 5 — Hybrid Variation 생성 (핵심)

`reference_md` + `.omd/init-context.json` `delta_set`을 입력으로 새 `DESIGN.md` 작성.

### Phase 5A — Voice Fingerprint 내부 추출 (silent)

출력 금지. 작성 전 머릿속으로 파악:
- 평균 문장 길이 밴드
- 어휘 register (engineering-terse / editorial-warm / clinical / playful 중)
- 은유 밀도
- 기술 밀도 (token-heavy / prose-heavy / balanced)
- 문단 리듬 (list-forward / paragraph-forward)

Phase 5B emit하는 모든 내러티브를 이 fingerprint에 정확히 맞춰야 한다.

### Phase 5B — 새 DESIGN.md emit

**엄격 규칙 (위반 = regression)**:

1. **Section 구조 frozen**: 레퍼런스의 H2/H3 heading을 같은 순서로 그대로. 추가/삭제/이름 변경 금지.

2. **Token 값 해석 우선순위** (위에서 아래로):
   1. `assets/_reference/<id>/tokens.json` `live_overrides` 블록 — **현재 라이브 사이트의 토큰** (omd:reference-capture가 라이브 inspect로 얻은 값). 있으면 이걸 base로.
   2. `web/references/<id>/DESIGN.md` (또는 `node_modules/.../web/references/<id>/DESIGN.md`) — **DESIGN.md가 brand intent로 기록한 canonical 값**. live_overrides 없으면 이걸 base로.
   3. `delta_set.axes` — 사용자 customization. base 위에 가산.
      - 색상: HSL 변환 후 `color.hue_deg` / `saturation_pct` / `lightness_pct` 적용.
      - radius: `radius.delta_px`만큼 가산 (음수도 가능).
   - 그 외 토큰은 손대지 말 것. "개선" 금지.
   - **canonical과 live가 충돌하면** 사용자에게 한 줄로 알림 + 라이브 사용 (예: "Banksalad canonical은 `#04c584` 2px radius, 라이브는 `#13bd7e` 41px pill — 라이브 기준으로 진행합니다. canonical로 가시려면 'use canonical'이라고 알려주세요.").
   - **단 brand essence (voice·principles·motion philosophy·voice samples)는 canonical 절대 권위.** live는 visual surface(토큰·컴포넌트 shape)에만 적용.

3. **내러티브는 Phase 5A fingerprint에 매칭**: 도메인 예시 교체 시 문장 길이/register/은유 밀도 그대로. 명사만 swap, 동사/형용사/framing 손대지 말 것.

4. **새 philosophy 도입 금지**: OmD v0.1 layer, 없던 원칙 추가 금지. delta-derived 노트는 새 bullet으로 넣지 말고 기존 bullet에 자연스럽게 통합.

5. **해결 불가능 delta는 top-of-file HTML comment**: `<!-- omd:unresolved: <axis> -->` 상단 추가, 해당 token은 건드리지 않음.

6. **Voice hints 반영**: `delta_set.voiceHints`는 Voice 섹션 내러티브에 반영하되 레퍼런스 voice 스타일 안에서만. "contractions ok" → Voice 원칙 bullet에 한 줄 추가.

7. **§11-13 처리 분기**:
   - Phase 4.5에서 정보 제공: 그 정보로 §11/12/13 작성. verbatim 인용은 사용자가 직접 준 표현만. 레퍼런스의 시간 표현·공식 인용 모두 사용자 맥락으로 대체.
   - Phase 4.5에서 skip: §11-13 본문을 `[FILL IN: <섹션 목적 한 줄>]` placeholder + 각 섹션 상단 `<!-- omd:limitation Reference §X requires project-specific facts. Replace before shipping; do not fabricate. -->`.
   - §14 (States), §15 (Motion): 일반 Hybrid 적용 (구체 명사만 swap).

8. **Frontmatter**:
   ```yaml
   ---
   omd: 0.1
   brand: <Project Name or "Project">
   bootstrapped_from: <id>
   bootstrapped_at: <ISO-8601>
   ---
   ```

### Phase 5C — 파일 작성

Write 툴로 `DESIGN.md` emit.

## Phase 6 — Shim 설치

CLI subcommand 없음. 두 가지 옵션:

**옵션 A (권장)**: omd:sync skill 위임. 같은 conversation에서 Skill 툴로:
```
Skill: omd:sync
args: --force
```

omd:sync skill이 `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/omd-design.mdc` shim 3종을 생성/갱신하고 `.omd/sync.lock.json` 업데이트.

**옵션 B**: omd:sync skill을 호출할 수 없는 환경이면 직접 Write로 shim 작성. 템플릿은 `skills/omd-sync/SKILL.md` §"shim body" 참조. 최소한:
- `CLAUDE.md`: managed block ("<!-- omd:managed:start --> ... <!-- omd:managed:end -->") 안에 DESIGN.md 참조 + 핵심 token 요약
- `AGENTS.md`: 동일 패턴
- `.cursor/rules/omd-design.mdc`: 전체 파일 omd 전용 — frontmatter + DESIGN.md 인용

이후 `.omd/sync.lock.json`에 각 shim의 hash 기록.

## Phase 7 — 요약 출력

한 문단으로:
- Base reference + 프로젝트 context 한 줄 요약
- 적용된 주요 delta 2-3개 (e.g. "primary hue shifted warm by +12°, radius +4px")
- 생성된 파일 목록 (DESIGN.md + shims)
- DESIGN_DEPRECATED.md 있으면 언급
- 다음 스텝: `omd:apply`로 UI 작업 시작 또는 `omd:harness`로 전체 surface 디자인 또는 `omd:remember`로 선호 추가 로깅

예시:
```
✓ DESIGN.md created (based on banksalad, 한국 핀테크 랜딩 맥락)
  - primary hue 유지 (#04c584 그대로)
  - radius 유지 (2px 시스템)
  - voice hints: 데이터 어드바이저 톤

Shim files:
  ✓ CLAUDE.md (managed block)
  ✓ AGENTS.md (managed block)
  ✓ .cursor/rules/omd-design.mdc

Next:
  - UI 작업 시작 → omd:apply로 자동 라우팅됨
  - 전체 surface 디자인 (랜딩, 대시보드 등) → omd:harness
  - 디자인 선호 로깅 → /omd:remember <note>
```

## 금지

- Phase 5A fingerprint를 출력하지 말 것 (내부 전용).
- `delta_set.axes`에 없는 token을 마음대로 바꾸지 말 것.
- 레퍼런스에 없는 section/heading을 추가하지 말 것.
- `.omd/init-context.json`을 직접 편집할 때 schema 어기지 말 것.
- DESIGN.md가 이미 있는데 백업 없이 덮어쓰지 말 것 (Phase 4.2 rename 절차 준수).
- **존재하지 않는 CLI subcommand (`omd init recommend`, `omd init prepare`, `omd sync`)를 호출하지 말 것** — 현 CLI binary는 `install-skills`만 제공.
