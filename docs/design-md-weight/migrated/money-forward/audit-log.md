# Money Forward 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/money-forward/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/money-forward/DESIGN.md`
검증 sibling: `web/references/money-forward/.verification.md` — `find`로 경로 직접 확인. 파일 없음 (`ls` 해당 경로 `No such file`). dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 있음 (`ds.type: system`, Money Forward Cloud UI / `cloud-react-ui`). B2a 예문 전제(v12)가 깨지므로 toss형을 요구하지 않음. 한정이 인접하고 class를 끝까지 닫는지, published-spec 명사(`including the published Money Forward Cloud UI (\`cloud-react-ui\`) documentation`)가 붙는지만 봄. 기존 22건은 그 형태로 닫혀 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 22 / 원장 22 (153–174). 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion 여는 문단(`:167`)의 성격·인과 규정은 세 번째 부류인데 완전형이 B3 문단 뒤 `:171`에 있어 인접하지 않았다. Semantic named 표 뒤 법인 오렌지 문장(`:146`)과 Button sizes YAML=medium 짝짓기(`:274`)는 세 번째 부류인데 인접 완전형이 없었다. Responsive 완전형은 Touch 불릿 뒤라 표를 가리키면서 표와 붙어 있지 않았다.

A1: YAML `tokens.components.button-primary.states` 복합 문자열 `hover gradient flips, active 0 0 2px rgba(212,216,221,0.3)`이 Primary 블록에 행으로 없었다. Hover/Active가 부분을 나눠 들고 같은 값이 provenance verbatim 표에만 통째로 있어 grep「어딘가에 있다」는 통과(icook형).

## 수정 목록 (21건)

### B2a — 인접 한정 (본문 5건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:167` — Motion 여는 문단 | 성격·인과(restrained register, spring 금지, bouncy→calm-competence, accessibility outranks polish)는 세 번째 부류. 완전형은 B3 뒤 `:171`이라 인접하지 않음. | 같은 문단 끝에 published-spec 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:171` — Motion durations | `:171`이 인과 절까지 이름해 두 문단 전 읽기를 원거리 커버하려 함. | 인과/spring을 `:167`로 옮기고, `:171`은 durations-as-illustrative · 커브 생략 · 역할/시그니처 유지 · five-kind gate만. 발생 수 +0. |
| 3 | `DESIGN.md:146` — Semantic color 법인 레이어 | 오렌지를 Cloud 토큰셋 밖에 두고 `#316AD6`을 리터럴 토큰으로 올리지 않기는 세 번째 부류. Scope ¶1이 이름하나 Semantic 표 뒤라 인접하지 않음. `:87` 한정도 이 읽기를 이름하지 않음. | 그 문장에 published-spec 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:274` — Button sizes | §4 Sizes를 YAML 키가 아니라고 분류하고 YAML primary height/padding을 medium에 짝짓는 것은 세 번째 부류. Spacing `:150`은 Foundations라 인접하지 않음. | 그 문단에 published-spec 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:490` — Responsive behavior | 표 머리(`:489`)는 불완전 한정. 완전형은 Touch 불릿 뒤라 표와 떨어져 있음. | 완전형을 표 머리로 옮기고 Touch 불릿을 같은 읽기에 포함. 뒤쪽 중복 완전형 삭제. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 25, `not Money Forward-authored` 25, `separately published UI specification` 25, `including the published Money Forward Cloud UI` 25. 완전형 25. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived editorial implementation inference` P dest **1**). `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 47, 57, 70, 87, 146, 150, 159, 163, 167, 171, 203, 217, 221, 242, 264, 274, 479, 490, 509.

### E1 — provenance derived 범위 (6건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | 헤더 / 행 수 | 22 complete / 22 data rows. | **25** / **25**. |
| 7 | Semantic color (corporate layer) | 없음. 본문 `:146` 신설. | 행 신설. |
| 8 | Motion (register) | 없음. 본문 `:167` 신설. | 행 신설. |
| 9 | Motion (durations) | 인과·spring을 이 행이 들고 있었음. 본문 `:171`이 이제 durations/gate만. | 행을 그 범위로 축소. |
| 10 | Components → Button sizes | 없음. 본문 `:274` 신설. | 행 신설. |
| 11 | Layout → Responsive behavior | 표만. 본문 `:490`이 이제 Touch 불릿도 이름함. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **22 → 25** at 153–177 (E1 1:1). `scripts/check-limiter-ledger.mjs money-forward` → 본문 25 = 원장 25.

### A1 — 키 경로 복원 (1건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 12 | Primary `tokens.components.button-primary.states` | 복합 문자열 DESIGN dest **0**. Hover/Active가 부분만, provenance Token-block만 통째. | Primary 블록에 `States: YAML \`hover gradient flips, active 0 0 2px rgba(212,216,221,0.3)\`` 행. 해석 없음 — 값 복원. Hover/Active §4 keep-both 행은 유지. DESIGN dest **1** + provenance dest **1**. |

다른 `tokens.components.<id>.<field>`는 착수 시 이미 대응 블록에 행으로 있었다. 색·타입·spacing·rounded 키 경로도 대응 절에 행으로 있음.

### E2 / E2a / E2c / E2d — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | HTML 주석 `values.ts` | 로그 DESIGN dest **2** / provenance dest **1**. 실측 D **3** / P **2**. | D **3** / P **2**. `src/theme/values.ts`는 D **2** / P **1**로 분리. |
| 14 | HTML 주석 `theme.ts` | 로그 1/1. 실측 D **1** / P **2**. | D **1** / P **2**. |
| 15 | `redSnow` | 로그 DESIGN dest **1**. 실측 dest **2** (named 표 + Error Notice bg). | dest **2**. |
| 16 | `tokens.components.button-primary` | 로그 8키 dest 1 each. 실측 이 경로 dest **2**. | dest **2**; 나머지 7키 dest **1**. |
| 17 | YAML `states` 복합 문자열 | 로그에 2차 목적지 없음. 복원 후 DESIGN dest **1** + provenance dest **1**. | E2a 둘 다. |
| 18 | `backdrop \`zIndex\` \`200\`` | 로그 dest **1**. 결합 문자열 DESIGN dest **0** (fitpet형). | dest **0**으로 바로잡고 분리: `backdrop \`200\`` dest **2** · `zIndex 200` dest **1**. |
| 19 | B2a 준수 행 / 헤더 / F1 | 22=22. 본문 수정 후 25. | **25=25**, inventory 153–177. |
| 20 | 규칙 대조 D2/D2a 확인란 | 부재 단언이 원본 §13 식별자를 바늘로 심음 (E2d). 그 문장이 분모에 들어 단언이 거짓. | 식별자 문자열을 빼고 무식별 확인으로 고침. |
| 21 | A5a 분모 · F2 · §13 처분 행 | 본문 수정 뒤 dest를 재실측하지 않으면 E2. §13 처분 행의 「0회」 단언이 필드 종류를 나열하며 분모를 흐림. | A5a 21/21 재실측(DESIGN dest ≥ 1)과 게이트 `compared 8 / candidates 248`를 적음. F2를 `grep -o \| wc -l` 재실측으로 고침. §13 처분 행은 무식별만. |

`restrained and confidence-building` DESIGN dest **1** (한정 문장이 원문 문자열을 되풀이하지 않음). `Spring / overshoot easing is **forbidden**` dest **1**. B3 전문 DESIGN dest **1**.

## 범위 밖 관찰

- **A5a / 게이트 coverage.** `--gate-only` `copy-loss`: `compared 8` / `candidates 248`. 차 240은 기계가 안 본 것. 이관본 평균 4.4%보다 낮고 50% 미만. `verdict: PASS`는 대조한 8개 중 손실 없음. 발행 카피 손 바늘 21종은 감사 후 DESIGN dest ≥ 1 (라틴 카피 손실 눈에 띄지 않음 — 복원/수정 없음).
- **B1 sibling 승격.** sibling 파일 없음. sibling 전용 구조 분류의 본문 승격 경로 없음.
- **D2a 본문.** 원본 §13 식별자·동기 문구·소속 분류는 DESIGN/provenance dest 0. Primary tasks는 제품/컨트롤 산출이지 전기 동기가 아님. Audience 그룹 문구는 원본 머리글 원문.
- **E2d 곡선.** 로그·원장이 곡선 부재의 분모를 DESIGN.md로 닫음. 그 문자열이 원장에 있는 것은 보관(E2b)이지 삼파일 부재 단언이 아님.
- **같은 hex 다른 역할.** `#ffffff`는 `tokens.colors.canvas` / `tokens.colors.on-primary` / Block bg / Primary text. `#3b7de9`는 `primary` / `brand` / named royalBlue. Semantic 한정과 원장이 canvas≠on-primary, primary≠brand 비병합을 이름함. 고치지 않음.
- **충돌 처리.** `4px everywhere`와 `tokens.rounded.full: 9999`, YAML/§4 철자 keep-both를 문서 전체에서 같은 정책으로 유지. krds형 자리마다 다른 처리는 없음.
- **Font evidence 표.** YAML `tokens.source: prose-derived`가 `Live computed surface-use` 칸에 들어 있다. 정렬은 Font evidence B2a가 이름함. 값·표 구조는 범위 밖.
- **착수 시 이미 있던 B1 표 행.** `focus-visible` 표 행 hex dest **0**. Observed Focus와 Capture 정책 문장에만 hex. 이번 감사에서 다시 내리지 않음.

AUDIT_DONE fixes=21
