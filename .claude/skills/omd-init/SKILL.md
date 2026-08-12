---
name: omd:init
description: "프로젝트 루트에 DESIGN.md를 부트스트랩 — 실제 기업 레퍼런스 중 컨텍스트 매칭으로 추천하고 선택된 레퍼런스의 톤&매너를 보존한 variation을 생성. DESIGN.md 부재 상태에서의 UI 작업 또는 '디자인 시스템 세팅', 'set up our design system', 「デザインシステムを作って」, 「建立設計系統」류의 요청에 트리거. CLAUDE.md / AGENTS.md / Cursor rule shim도 함께 설치."
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:init — DESIGN.md Bootstrap

프로젝트에 DESIGN.md + AI 코딩 에이전트용 shim 3종을 한 번에 세팅. 레퍼런스 톤&매너는 **preserve**하고, 사용자 프로젝트 맥락은 controlled-vocabulary delta_set으로만 반영.

레퍼런스 선택과 graph draft는 host agent 안에서 처리하지만, Core projection과
authority hash는 직접 만들지 않는다. 설치된 provider-free `omd design-md`
도구가 inspect/migrate/compile을 담당한다. `omd init recommend`, `omd init
prepare`, `omd sync` 같은 별도 runtime subcommand는 제공하지 않는다.

## 전체 플로우

```
Phase 1: 사용자 맥락 파악 (1-2 질문)
Phase 2: 레퍼런스 추천 (fingerprint 기반 in-head 점수)
Phase 3: 사용자가 1개 선택
Phase 3.5: 적용 형태 확인 (루트 부트스트랩 / 참고용 저장 / 기존 파일 교체 여부)
Phase 4: 레퍼런스 DESIGN.md Read + delta_set 추출
Phase 4.5: 프로젝트 권위 입력 수집
Phase 5: Core v2 System Graph draft → canonical compiler → staged adopted package
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

1. `.codex/data/reference-fingerprints.json` (Codex 설치 카탈로그)
2. `.claude/data/reference-fingerprints.json` (Claude Code / Cursor 설치 카탈로그)
3. `.opencode/data/reference-fingerprints.json` (OpenCode 설치 카탈로그)
4. `node_modules/oh-my-design-cli/data/reference-fingerprints.json` (npm 설치 직접 경로)
5. `data/reference-fingerprints.json` (개발 환경)

스키마: `{ count, items: [{ id, primary_color_hex, category, visual_theme, voice_fingerprint, tone_keywords, antipatterns, signature_motion, has_personas, category_raw }] }`.

추가 보조 파일 (있으면 같이 로드):
- 위에서 실제 선택된 data dir의 `vocabulary.json` — controlled vocab axes/keywords
- 같은 data dir의 `reference-tags.md` — human-readable keyword matrix

필수 품질 파일:
- 같은 data dir의 `reference-quality.json` — `verified_v2 | partial | legacy_snapshot`

fingerprint는 있는데 품질 파일이 없거나 두 파일의 `count`/id 집합이 다르면 다른
채널 파일로 섞어 보완하지 않는다. `omd install-skills`를 다시 실행하고 `omd doctor`로
확인하라고 안내한 뒤 reference 추천을 중단한다.

채널을 알 수 있으면 해당 채널 data dir을 우선 사용하되, 파일이 없으면 위 1→5 순서로 fallback한다. 서로 다른 설치 채널의 fingerprint와 보조 파일을 섞지 말 것.

### 2.2 task 분석 (silent)

사용자의 description에서 다음 추출:
- **명시 brand hint**: 한글/영문 brand 이름 직접 언급 (예: "토스 같은" → `toss`, "뱅크샐러드 톤" → `banksalad`, "Linear-clone" → `linear.app`). brand 이름과 id 매핑은 일반 지식 사용 + `items[].id` 또는 `items[].category_raw`에서 cross-check.
- **vocab 키워드**: warm / minimal / dense / playful / formal / editorial / clinical 등 (vocabulary.json 참조)
- **카테고리 추측**: Consumer Tech / Fintech / Productivity / E-commerce / Design Tools / Developer Tools / AI & LLM / Mobility / HR / Real Estate / Healthcare / Government

### 2.3 로컬 query helper 실행 (deterministic)

현재 `SKILL.md`와 같은 skill directory의
`scripts/query-references.mjs`를 사용한다. Phase 2.1에서 선택한 단일 data dir을
`--data-root`로 넘기고, 사용자 원문을 `--task`, catalog에서 cross-check한 명시 brand
id가 있으면 `--brand`로 넘긴다.

```bash
node <active-omd-init-skill-dir>/scripts/query-references.mjs \
  --data-root <selected-data-dir> \
  --task "<original user description>" \
  --limit 5 \
  --json
```

helper가 찾히지 않으면 과거 in-head scorer로 조용히 fallback하지 않는다. 설치가
stale한 것이므로 `omd install-skills` → `omd doctor`를 안내하고 중단한다.

결과 계약:

- `status: ok` → ordered `candidates`를 그대로 사용. 모델이 순서를 다시 매기지 않음.
- `status: needs_clarification` → 후보를 채워 넣지 말고 brand/category/tone 중 하나를 묻는다.
- 모든 candidate는 `quality.status`와 `promotion.token_policy`를 함께 표시한다.
- `verified_v2`도 증거가 있는 field만 사용하고 unknown은 가장 작은 단위로 생략한다.
- `partial`/`legacy_snapshot`은 `context-only-reverify-first`; reverify 없이 machine token이나
  product fact로 승격하지 않는다.
- Vercel/Linear/Notion 같은 “safe fallback”을 임의로 추가하지 않는다.

### 2.4 사용자에게 제시

prose로:

```
"<task 핵심 한 줄>"을 보니 <top1.id>가 가장 잘 맞을 것 같아요 — <matched category/tone 핵심 한 줄> · <quality.status>.

이대로 가시려면 go (또는 <top1.id>).
다른 후보: <top2.id> (한 줄 이유) · <top3.id> (...) · <top4.id> (...) · <top5.id> (...)
본인이 아는 다른 reference 있으면 id로 알려주세요 (예: vercel) — 카탈로그에 없으면 알려드립니다.
```

vocab axis conflict 있으면 (예: formal ↔ playful) 먼저 알리고 우선시할 축을 묻기.

**Claude Code 채널이면 위 prose 대신 AskUserQuestion 툴 1개로 제시** (사용자가 화살표로 고르는 selectable UI — #21). question 1개에 top-5 후보 id 5개를 option으로:

```
question: ""<task 핵심 한 줄>"에 맞는 레퍼런스를 골라주세요"
header: "Reference"
options: top1~top5 각각 → label = <id>, description = query 근거 1줄 (<category> · <tone_keywords 1-2개> · <quality.status>)
  - top1에는 label에 "(추천)" 표시
```

(AskUserQuestion이 자동 "Other"를 추가하므로 카탈로그의 다른 id를 자유 입력으로 답하는 것도 그대로 가능.) Codex / OpenCode 등 AskUserQuestion이 없는 채널은 위 prose 포맷 유지. 점수 계산·채택 로직(Phase 3)은 어느 쪽이든 동일.

## Phase 3 — 사용자 선택

- `go` 또는 top-5 안 id → 그 id 채택
- top-5 밖이지만 카탈로그 안 id → 그대로 채택
- 카탈로그에 없는 id → "해당 id는 카탈로그에 없어요. top-5 중에서 골라주세요."
- "중단" → 종료

선택된 candidate가 `partial` 또는 `legacy_snapshot`이면 곧바로 Phase 5로 가지 않는다.
“참고용 저장” 또는 “먼저 reverify”만 제시한다. 사용자가 명시적으로 참고용을
선택하면 narrative inspiration으로만 저장하고, 해당 reference의 font/color/component를
프로젝트 brand fact나 machine token으로 표기하지 않는다.

## Phase 3.5 — 적용 형태 확인

레퍼런스 확정 직후, 어떻게 적용할지 묻는다. 먼저 프로젝트 루트에 `DESIGN.md`가
이미 있는지 확인하고, **Claude Code 채널이면 AskUserQuestion 1개** (타 채널은
prose)로:

- 루트에 DESIGN.md **없음**:
  1. **프로젝트 디자인 시스템으로 설정 (추천)** — `<id>` 톤을 보존한 변형본을
     루트 `DESIGN.md`로 부트스트랩 (Phase 4~7 전체 진행)
  2. **참고용으로만 저장** — 루트 변경 없음. `<id>` 원본을
     `design-references/<id>.md`로 복사하고 종료. "나중에 프로젝트에 적용하려면
     다시 omd:init을 불러주세요" 안내. (변형 생성·셤 설치 안 함)
- 루트에 DESIGN.md **이미 있음** (option description에 그 파일의 첫 섹션 요약
  한 줄을 보여줄 것):
  1. **교체 (추천)** — 기존 파일은 먼저 lossless migration/check를 통과하고
     content-addressed rollback artifact로 보존됨을 명시
  2. **참고용으로만 저장** — 위와 동일
  3. **중단**

②(참고용) 선택 시: Phase 4.1로 원문만 확보해 `design-references/<id>.md`에
attribution 1줄(소스 URL + 날짜)과 함께 저장 → Phase 7 요약만 출력하고 종료.
Phase 4.2~6은 건너뛴다.

## Phase 4 — 레퍼런스 DESIGN.md 로드

### 4.1 경로 결정

선택된 id를 `<id>`로 하고, 다음 순서로 Read (먼저 존재하는 것 사용):

<!-- omd:catalog-resolution-order — omd-harness/omd-reference-capture SKILL.md + agents/omd-master.md 와 동일 순서 강제. drift guard: test/unit/core/catalog-resolution-order.test.ts -->

1. `.codex/data/references/<id>/DESIGN.md` (Codex installer가 복사)
2. `.claude/data/references/<id>/DESIGN.md` (Claude Code / Cursor installer가 복사)
3. `.opencode/data/references/<id>/DESIGN.md` (OpenCode installer가 복사)
4. `node_modules/oh-my-design-cli/web/references/<id>/DESIGN.md` (로컬 npm 설치 직접 경로)
5. `web/references/<id>/DESIGN.md` (개발 레포)
6. `https://oh-my-design.kr/<id>/design.md` 를 fetch (WebFetch 또는 `curl -fsSL`) — 1~5 로컬 경로가 전부 없을 때. 200이면 응답 본문이 곧 reference DESIGN.md다. 가져온 내용은 **활성 채널의 첫 writable data dir** (`.codex/data`, `.claude/data`, `.opencode/data`) 아래 `references/<id>/DESIGN.md`에 저장한다. 채널을 판별할 수 없으면 1→3 중 먼저 존재하고 쓸 수 있는 dir을 사용하고, 모두 없으면 활성 host 채널 dir을 생성한다.

6까지 전부 실패하면 **절대 DESIGN.md를 임의로 지어내지 말 것.** 사용자에게
"레퍼런스 `<id>` 원문을 찾지 못했어요 (오프라인이거나 카탈로그 미배포).
네트워크 연결 후 재시도하거나 다른 레퍼런스를 골라주세요"라고 보고하고 종료.

전체 내용을 `reference_md` 변수로 보관 (Phase 5의 입력).

### 4.2 기존 DESIGN.md 처리

프로젝트 루트에 이미 `DESIGN.md`가 있으면 (Phase 3.5에서 이미 "교체"를 확인받은
상태 — 여기서 다시 묻지 않는다), 자유 편집이나 단순 `mv`로 교체하지 않는다.

1. 먼저 현재 문서가 Core v2인지 legacy 13/15/16 또는 unmarked 문서인지 inspect한다.
2. legacy 또는 형식이 불분명하면 설치된 provider-free migration helper로 staged
   migration을 실행하고 결과를 검사한다. public CLI가 있으면
   `omd design-md migrate DESIGN.md --out-dir <fresh-migration-dir>`를 사용한다.
   helper를 찾지 못하면 stale install로 보고하고 중단한다.
3. migration report는 모든 원본 segment가 Core field 또는
   `extensions["dev.oh-my-design.migration"]`에 보존되고 `dropped=0`,
   unsupported promotion 0, round-trip pass임을 증명해야 한다.
4. 원본 bytes와 report를 content-addressed rollback directory에 보존한 뒤에만 명시적
   refresh를 진행한다. check 실패 시 기존 `DESIGN.md`와 `.omd/system`을 건드리지 않는다.
5. migration 결과는 `migration-candidate`이며 non-authoritative다. 명시적 adoption
   전까지 named source `DESIGN.md`가 canonical source다.
6. 이미 Bound Core v2이면 manifest/graph hash를 검증하고 graph draft만 갱신한다.
   visible Markdown heading을 직접 refactor하지 않는다.

opaque extension은 이해하지 못해도 key/value를 byte-equivalent JSON 의미로 보존한다.
교체는 언제나 **graph draft → canonical compile into a fresh stage → full validation
→ atomic project adoption** 순서다.

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

빌더(oh-my-design.kr/builder)발 프롬프트에는 "Components: button, input, ..." 목록과
"(builder config: <URL>)"이 붙어올 수 있다. 컴포넌트 목록은 `"requested_components": ["button", "input", ...]`
키로 함께 기록하고, builder URL은 출처 표기용으로만 보존 — fetch하지 말 것.

`mode` 값 결정:
- omd:reference-capture가 먼저 돌았으면 그 결과 사용 (`.omd/init-context.json` 기존값)
- 아직 정해지지 않았으면 사용자에게 묻기 (omd:reference-capture Phase 0과 동일한 prompt). 라이브 캡쳐 없이 omd:init만 단독으로 도는 경우는 사실상 inspired 외엔 의미 없으므로 기본 `inspired`.

`axes` 표준 키: `color.hue_deg` (도), `color.saturation_pct` (%p), `color.lightness_pct` (%p), `radius.delta_px` (px), `density.shift` (-2 ~ +2), `tracking.shift` (-0.01em ~ +0.01em).

## Phase 4.5 — 프로젝트 권위 입력 수집 (CRITICAL)

Experience에 들어갈 브랜드 내러티브·원칙·사용자 정보는 프로젝트 권위가 필요하다.
레퍼런스의 historical fact나 persona를 domain swap하면 거짓 brand claim이 된다.

필요한 정보가 원래 요청이나 저장소에 없을 때만 Phase 5B 진입 전 한 번에 묻기:

```
DESIGN.md의 Experience에 프로젝트 사실을 어느 범위까지 넣을지 확인할게요. 다음을 알려주시거나 "skip"이라고 답해주세요:

1. 프로젝트 이름 / 창립 시점 (대략)
2. 핵심 thesis 한 문장 (e.g. Airbnb의 "Belong Anywhere")
3. 공식 tagline 또는 거부하는 카테고리 default
4. 타겟 사용자 segment 2-4개

답변 받으면 → authority/provenance와 함께 Experience에 반영
"skip" → 값을 추정하거나 placeholder를 넣지 않고 해당 fact를 생략. 결과를 바꾸는
미확정 결정만 Governance의 unresolved 목록에 fallback 없이 기록
```

부분 답변은 받은 부분만 사용, 나머지 skip.

## Phase 5 — Core v2 graph draft + canonical compilation (핵심)

`reference_md` + `.omd/init-context.json` `delta_set`을 입력으로 먼저
run-scoped temporary path에 `graph.draft.json`을 만든다. root `DESIGN.md`,
`.omd/system/graph.json`, manifest, projection hash는 직접 쓰지 않는다.
레퍼런스는 verified inspiration이지 프로젝트 fact가 아니다.

### Phase 5A — Reference direction 분석 (silent, evidence-only)

출력 금지. 작성 전 머릿속으로 파악:
- 평균 문장 길이 밴드
- 어휘 register (engineering-terse / editorial-warm / clinical / playful 중)
- 은유 밀도
- 기술 밀도 (token-heavy / prose-heavy / balanced)
- 문단 리듬 (list-forward / paragraph-forward)

이 fingerprint는 제안 방향을 비교하는 참고값일 뿐 프로젝트 voice가 아니다.
사용자가 해당 방향을 명시적으로 채택한 경우에만
`agent-proposed-greenfield-decision` 또는 `prompt-fact` provenance로 Phase 5B에
반영한다. 채택 전에는 graph/portable projection에 처방값으로 쓰지 않는다.

### Phase 5B — Core v2 graph draft 작성

**엄격 규칙 (위반 = regression)**:

1. **Single-write Core v2**: 새 생성·합성·refresh는 레퍼런스의 frontmatter나
   13/15/16-section heading을 복사하지 않는다. agent가 작성하는 것은 schema-valid
   graph draft뿐이다. `experience`, `foundations`, `typography-assets`,
   `components-states`, `layout-platforms`, `content-locales`, `governance`의 고정
   section anchor와 H2, 그리고 일곱 `design-md:claim` 선언과 모든
   `design-md:claim-end` delimiter는 canonical compiler-owned output이다.
   **Never hand-write or patch `DESIGN.md`, section anchors, claim markers, or
   claim-end delimiters.** heading localization도 graph input으로 표현하고 renderer
   결과를 수정하지 않는다.

2. **Reference 값은 전부 evidence-only inspiration**:
   - `assets/_reference/<id>/tokens.json#live_overrides`와 catalog DESIGN.md는
     `verified-reference-inspiration` provenance로만 기록한다. 어느 쪽도 project
     graph의 base나 override가 아니며 자동 적용하지 않는다.
   - live/canonical 충돌은 surface-domain과 함께 evidence conflict로 기록한다.
     한쪽을 자동 선택하거나 adjacent marketing/corporate surface를 product fact로
     승격하지 않는다.
   - 사용자가 구체 값을 명시적으로 선택하면 `prompt-fact`, 저장소가 실제 값을
     소유하면 `repository-fact`, broad greenfield 권한 아래 제안을 채택하면
     `agent-proposed-greenfield-decision`으로 새 프로젝트 값을 만든다.
   - `delta_set.axes`는 reference 값 위 산술 변경이 아니다. 결과 semantic value를
     독립 proposal로 보여주고 채택 근거와 target surface를 기록한 뒤에만 graph에
     쓴다.
   - reference voice·principles·motion도 절대 권위가 아니다. 명시적 채택 전에는
     프로젝트 내러티브나 처방 규칙으로 복사하지 않는다.

3. **내러티브는 프로젝트 권위에 매칭**: 사용자 표현, 저장소 voice, 명시적으로
   채택된 greenfield proposal만 사용한다. Reference fingerprint의 명사 swap이나
   framing 복사는 금지한다.

4. **새 philosophy 도입 금지**: 사용자·저장소·명시적 greenfield proposal에 없는
   브랜드 fact나 원칙을 만들지 않는다. 제안은 fact와 분리해 provenance에 기록한다.

5. **해결 불가능 delta는 absent**: visible top-of-file에 vendor comment나 fallback을
   추가하지 않는다. 처방 token/code에서는 생략하고, consequential하면 Governance와
   provenance에 unresolved path만 기록한다.

6. **Voice hints 반영**: `delta_set.voiceHints`는 사용자 선택 또는 승인된 proposal인
   경우에만 Content & Locales에 반영한다. Reference voice를 숨은 base로 쓰지 않는다.

7. **프로젝트 fact 처리**:
   - Phase 4.5에서 제공된 내용만 Experience에 사실로 작성한다. verbatim 인용은
     사용자가 직접 준 표현만 쓴다.
   - skip한 fact는 `[FILL IN]`, 가상 persona, 추천 fallback으로 채우지 않는다.

8. **Canonical sidecars**: adopted machine authority와 도구 metadata는 오직 아래에 둔다.
   - `.omd/system/manifest.json`
   - `.omd/system/graph.json`
   - `.omd/system/provenance.json`
   - `.omd/system/coverage.json`

   graph draft는 Core v2 schema의 일곱 section object를 가진다. compiler가
   `profile: portable-core` manifest, canonical graph, portable projection과 exact
   binding hash를 한 번에 만든다. Agents never calculate, copy, truncate, or patch
   graph/projection/manifest hashes. Graph가 adopted canonical authority이고
   `DESIGN.md`는 sidecar 없이도 이해 가능한 portable projection이다. 확장 key는
   reverse-DNS만 허용하며 기존 opaque extension을 보존한다.

### Phase 5C — explicit compile/adopt + staged validation

1. Phase 3.5의 프로젝트 시스템 설정/교체 승인이 없으면 compile하지 않는다.
2. authority-neutral `graph.draft.json`에는 `projection`/`projection.sha256`을
   넣지 않는다. compiler draft-input contract와 provenance/coverage evidence gate를
   통과한 뒤 fresh staging directory를 정한다. final bound-graph schema만 받아
   placeholder/precomputed/zero SHA를 요구하는 compiler면 draft에서 fail-close한다.
3. public CLI로 exact preview를 먼저 생성한다.

   ```bash
   omd design-md prepare-review <graph> --provenance <provenance> --coverage <coverage> --out-dir <review> [--migration-report <report>]
   ```

   `<review>/DESIGN.md`와 `review-request.json`을 실제 사용자에게 보여 승인받은
   뒤에만 아래 두 명령을 실행한다. agent가 대신 승인하지 않는다.

   ```bash
   omd design-md approve-review <review>/review-request.json --reviewer <project-owner-id> --out <approval> --authority-transition-approved
   omd design-md compile <review>/input-graph.json --provenance <review>/provenance.json --coverage <review>/coverage.json --review-receipt <approval> [--migration-report <review>/migration-report.json] --out-dir <fresh> --adopt
   ```

   CLI binary가 없고 설치 bundle에 helper가 있으면 동일 인자를 받는
   `prepare-design-md-core-review.cjs`와 `compile-design-md-core.cjs` exact
   equivalents만 허용한다. renderer를 재구현하거나
   Markdown/manifest/hash를 agent가 보완하지 않는다. 기존/non-empty/symlink output을
   우회하지 않는다.
4. compiler가 만든 fresh adopted package를 read back하고 Core structural + Portable
   declaration conformance를 다시 검증한다. 이 PASS는 선언 구조와 binding만
   증명한다. **factual accuracy, provenance truth, font/asset license, locale behavior,
   accessibility, visual quality를 증명하지 않는다.** provenance/coverage와 설치된
   final project-system validator는 계속 필수다. 필요한 sidecar binding을 현재
   compiler/validator가 만들 수 없으면 hash를 수동 작성하지 말고 stale/incomplete
   install로 fail-close한다.
5. 모든 검증을 통과한 fresh stage의 exact bytes는 아래 receipt-gated 경로로만
   프로젝트에 채택한다.

   ```bash
   omd design-md prepare-checkpoint <fresh> --reviewer <project-owner-id> --out <checkpoint> --authority-transition-approved
   omd design-md adopt <fresh> --project-root <project-root> --checkpoint-receipt <checkpoint>
   ```

   atomic package adopter가 없으면 staged package를 보존하고 중단한다. 파일별
   복사나 hash 수정으로 우회하지 않는다. 실패하면 transaction journal이 기존
   system 전체를 복원한다.

## Phase 6 — Shim 설치

Shim 전용 CLI subcommand 없음. 두 가지 옵션:

**옵션 A (권장)**: omd:sync skill 위임. 같은 conversation에서 Skill 툴로:
```
Skill: omd:sync
args: --force
```

omd:sync skill이 `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/omd-design.mdc` shim 3종을 생성/갱신하고 `.omd/sync.lock.json` 업데이트.

**옵션 B**: omd:sync skill을 호출할 수 없는 환경이면 직접 Write로 shim 작성. 템플릿은 `.claude/skills/omd-sync/SKILL.md` (설치 경로; dev 레포에서는 `skills/omd-sync/SKILL.md`) §"shim body" 참조. 최소한:
- `CLAUDE.md`: managed block ("<!-- omd:managed:start --> ... <!-- omd:managed:end -->") 안에 DESIGN.md 참조 + 핵심 token 요약
- `AGENTS.md`: 동일 패턴
- `.cursor/rules/omd-design.mdc`: 전체 파일 omd 전용 — frontmatter + DESIGN.md 인용

이후 `.omd/sync.lock.json`에 각 shim의 hash 기록.

## Phase 7 — 요약 출력

한 문단으로:
- Base reference + 프로젝트 context 한 줄 요약
- 적용된 주요 delta 2-3개 (e.g. "primary hue shifted warm by +12°, radius +4px")
- 생성된 파일 목록 (DESIGN.md + `.omd/system` + shims)
- migration rollback/report가 있으면 언급
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
- 새 문서에 legacy 13/15/16-section 구조나 YAML frontmatter를 emit하지 말 것.
- 새 문서와 기존 문서 모두 `DESIGN.md`, section/claim marker, manifest/hash를 직접
  작성·수정하지 말 것. graph draft와 canonical compiler만 사용한다.
- visible `DESIGN.md` 상단에 OmD/tool/generator/quality metadata를 넣지 말 것.
- legacy refactor를 migration `--check`와 opaque-extension preservation 없이 진행하지 말 것.
- `.omd/init-context.json`을 직접 편집할 때 schema 어기지 말 것.
- DESIGN.md가 이미 있는데 백업 없이 덮어쓰지 말 것 (Phase 4.2 rename 절차 준수).
- **존재하지 않는 CLI subcommand (`omd init recommend`, `omd init prepare`, `omd sync`)를 호출하지 말 것.** `omd design-md inspect|validate|migrate|compile`은
  provider-free Core 도구로 허용된다.
