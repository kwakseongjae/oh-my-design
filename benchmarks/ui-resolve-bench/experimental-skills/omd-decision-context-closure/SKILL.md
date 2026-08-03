---
name: omd-apply
description: "프로젝트 DESIGN.md를 UI/시각 작업의 brand context로 적용. 컴포넌트·색상·폰트·레이아웃 수정 같은 구체적 요청과 톤·분위기 표현 — KR '좀 더 따뜻하게', EN 'make it warmer/cooler', 日本語「もう少し暖かく」, 繁體中文「更溫暖一點」 — 모두에 트리거. DESIGN.md 부재 시 omd:init 우선. 화면 전체 신규 디자인은 omd:harness, 교정 기록은 omd:remember."
---

# omd:apply — Brand Context Injection + Delivery Router

DESIGN.md를 모든 UI/디자인 작업의 권위 있는 컨텍스트로 사용한다. 책임은 세 가지:

1. **인라인 처리** — 작은 단일 변경 (1 component, 1 token, 1 카피 라인)은 직접 Edit 툴로 처리
2. **Advisory dispatch** — 복합 작업은 적합한 전문 역할의 의견을 먼저 받음 (master 거치지 않음)
3. **Delivery ownership** — 사용자가 구현·수정을 요청했다면 본 에이전트가 실제 편집과 검증을 끝까지 소유

전문 역할은 자문자다. 역할이 없거나 자문이 read-only여도 구현 요청을 감사 결과로 끝내거나 아무 변경 없이 종료하지 않는다.

## 트리거 조건

다음 중 하나가 감지되면 SKILL 전체를 로드한다.

- 컴포넌트 생성 / 수정 (button, card, dialog, nav, form 등)
- 스타일 변경 (Tailwind 클래스, CSS, 토큰 값)
- 마이크로카피 작성 / 수정 (버튼 라벨, empty state, 에러, tooltip)
- 모션 / 트랜지션 추가
- 색상 · 타이포그래피 · 스페이싱 조정
- 에셋 (아이콘, 차트, 일러스트, 3D 렌더) 요청
- 디자인 시스템 관련 질문

## Phase 0 — Intent + dispatch decision tree (가장 먼저)

먼저 요청의 완료 조건을 구분한다.

- **audit/advice**: 분석, 리뷰, 의견, 대안만 요청. 자문 결과로 종료 가능.
- **implement/change**: 만들어, 고쳐, 바꿔, 적용해, 개선해. 본 에이전트가 편집과 검증을 완료해야 함.

기존 화면의 수정·리디자인은 규모가 커도 `omd:apply`의 implement/change다. `/omd-harness`는 새 surface를 처음부터 설계하거나 사용자가 명시적으로 요청한 경우에만 추천한다.

작업 시작 전에 어떤 처리 경로인지 결정한다. 다음 표를 위에서부터 순차 매칭, 첫 번째 매칭 행으로 진행:

| 사용자 요청 패턴 | 처리 경로 | 이유 |
|---|---|---|
| "에셋 / 아이콘 / 일러스트 / 차트 / 사진 / 로고 / 그래프 / SVG 만들어" | dispatch `omd-asset-curator` | 매체 선택 + 스택 매칭이 전문 영역 |
| "새 메인 화면 / 새 landing / 새 surface / 처음부터 / 와이어프레임" | 사용자에게 `/omd-harness` 추천 | 10-phase 파이프라인이 적합 |
| "접근성 / a11y / 색약 / 키보드 네비" 감사 | dispatch `omd-a11y-auditor` | 전문 감사 |
| "마이크로카피만 다듬어 / 카피 톤 정리 / empty state 문구 전부" 복수 | dispatch `omd-microcopy` | voice 일관성 |
| "사용자 시나리오 / 페르소나 walk through / 4명 입장에서 검토" | dispatch `omd-persona-tester` | adversarial 4-페르소나 |
| "이 카피 좋은지 / hero 카피 약점 / 섹션별 카피 전문가 의견 / A/B 후보" | dispatch `omd-ux-writer` | UX writing 분석 + 대안 + 근거 |
| "이 인터랙션 / 모션 / 포커스 / 모바일 / 지각 성능 / 섹션별 UX 약점" | dispatch `omd-ux-engineer` | 코드 레벨 인터랙션 감사 + fix |
| "기존 랜딩 / 메인 화면 / 페이지 *전체*를 전문가 의견으로 개선" | advisory dispatch `omd-ux-writer` + `omd-ux-engineer` (병렬) | 두 트랙 자문 후 본 에이전트가 구현 |
| "이게 왜 안 좋은지 critique / postmortem / root cause" | dispatch `omd-critic` | 비판적 분석 |
| "DESIGN.md 만들어 / reference 골라 / 카탈로그에서 추천" | dispatch `omd-init` skill (또는 omd-add-reference) | reference 매칭 |
| "preference 정리 / 누적된 교정 반영 / DESIGN.md 업데이트" | dispatch `omd-learn` skill | fold-in 로직 |
| "이 한 줄 / 이 컬러 / 이 spacing 좀" 단발 명확 | **인라인 처리** | 분명한 단일 변경 |
| 위 어디에도 안 맞는 자유로운 디자인 작업 | 본 에이전트가 처리 후 Phase 3 (교정 캡처) | 일반 케이스 |

### Capability preflight + recovery

dispatch 전에 실제 역할 가용성을 확인하고 아래 첫 번째 가능한 경로를 사용한다.

1. **런타임 역할 사용 가능** → Agent 툴로 dispatch하고 결과를 자문으로 수집.
2. **런타임 목록에는 없지만 유효한 로컬 역할 파일 존재** → 현재 채널의 역할 파일을 전체 읽고 그 관점을 인라인 자문 렌즈로 적용. 역할을 실행했다고 표현하지 않음.
3. **역할과 유효한 역할 파일 모두 없음** → 전문 역할이 실행되지 않았음을 숨기지 않고 Phase 1-2의 DESIGN.md 계약으로 계속 진행. 역할 부재만으로 작업을 중단하거나 사용자에게 설치를 요구하지 않음.

implement/change 요청은 어떤 recovery 경로에서도 본 에이전트가 자문을 반영해 실제 파일을 편집하고 검증한다. audit/advice 요청만 자문 결과 요약으로 종료할 수 있다.

### Work packet — 역할 수보다 먼저 고정

복합 작업은 dispatch 전에 아래 필드를 인라인으로 고정한다. 2개 이상 specialist를 쓰거나 다음 턴으로 이어질 때만 `.omd/work/<timestamp>-<slug>.json`에 기록한다. 단일 변경에 파일을 만들지 않는다.

```yaml
intent: audit | implement
task: <사용자가 원하는 결과>
consumer_route: <사용자가 실제로 진입하는 route>
acceptance: [<관찰 가능한 완료 조건>]
protected_behaviors: [<깨지면 안 되는 동작>]
protected_contract:
  cardinality: [<동작을 가진 control/row/form/disclosure의 현재 개수와 허용 변화>]
  state_transitions: [<before → action → after>]
  facts: [<보존할 값·카피·hook·필드명>]
  change_authority: original-user-task-only
visual_equity:
  - identity: <task-helpful 기존 시각 결정>
    user_value: <사용자 판단·안심·상태 인지에 주는 가치>
    before_evidence: <같은 route/state의 code·DOM·screenshot>
    decision: preserve | reinforce | replace
    change_authority: <original user task | explicit DESIGN.md rule | same consumer route measured defect>
evidence: [DESIGN.md, screenshot, code, browser observation]
unknowns: [<확인되지 않은 정보 — fallback으로 채우지 않음>]
implementation_owner: main-agent | none
  verification:
  routes: []
  viewports: []
  states: []
  commands: []
  budget:
    required: []
    optional: []
    delivery_reserve: true
    first_product_edit: 50%
    advisory_to_first_edit: min(90s, 10%)
    stop_optional_verification: 80%
    begin_final_delivery: 90%
  first_safe_edit:
    target: <기존 파일의 정확한 snippet 또는 selector>
    smallest_useful_change: <acceptance에 기여하는 실제 변경>
    protected_contract_effect: none
    acceptance_check: <변경 직후 확인할 한 가지>
```

설치된 채널 data root에 `workflow-capabilities.json`이 있으면 선언된 workflow와 필드명을 사용한다. 파일이 없어도 위 계약으로 계속하며 설치를 강요하지 않는다.

specialist handoff에는 전체 대화 대신 이 packet과 필요한 파일·스크린샷만 전달한다. 기존 UI repair의 specialist는 기본적으로 `mode: bounded-repair-advisory`를 사용하고 **요청된 위험 영역 1-2개, finding 최대 3개, 약 300단어**로 제한한다. 전 섹션 audit, 8/10항목 전수평가, A/B 옵션, 추가 아이디어 발산은 별도 full audit 요청에서만 한다. specialist 응답은 main agent가 설명 없이 바로 적용할 수 있는 `first_safe_edit`를 맨 앞에 두고 다음 shape로 제한한다.

```yaml
first_safe_edit:
  target: <기존 파일의 정확한 snippet 또는 selector>
  evidence: <route·line·DOM·screenshot 근거>
  smallest_useful_change: <완료 조건에 기여하는 최소 유효 수정>
  protected_contract_effect: none
  acceptance_check: <적용 직후 어떻게 확인할지>
findings:
  - finding: <무엇이 문제인가>
    evidence: <근거>
    smallest_useful_change: <최소 유효 수정>
    acceptance_check: <어떻게 통과를 확인할지>
unresolved: [<확인 불가 항목>]
```

서로 다른 specialist가 같은 제품 파일을 동시에 수정하지 않는다. `implementation_owner: main-agent`만 자문을 합치고 코드를 편집한다.
specialist는 protected ledger나 visual equity ledger를 수정·완화할 권한이 없다. handoff는 `current_count`, `allowed_delta`, `states`, `facts`, `change_authority`와 visual equity 항목을 그대로 복사해야 하며, 이를 벗어난 제안은 implementation 후보가 아니라 `rejected_contract_drift`로 폐기한다.

## Phase 1 — DESIGN.md 로드

실제 변경 또는 디자인 판단 전에 진행:

1. 프로젝트 루트의 `DESIGN.md`를 **전체 읽는다**. 요약 금지, Read 툴로 직접 로드.
2. `.omd/preferences.md`가 있으면 같이 읽는다. `status: pending` 엔트리는 아직 DESIGN.md에 반영 안 된 교정 — DESIGN.md보다 **우선** 적용.
3. **reference-capture 자료가 있으면 함께 로드**: `DESIGN.md` frontmatter의 `bootstrapped_from` 또는 `.omd/init-context.json`의 `reference_id`로 brand id를 얻고, `assets/_reference/<id>/`가 존재하면:
   - `tokens.json` — `live_overrides` 블록 우선
   - `structure.json` — composition cues (hero/cta/nav idiom)
   - `fonts.json` — `live_observed: true` 항목은 출력 HTML `<head>`에 `html_link` 그대로 박을 것. 미로드 시 시스템 fallback으로 둥근 폰트 mismatch.
   - `screenshots/hero-desktop.png` — UI 작업이 hero/landing 류면 Read 툴로 **이미지로 직접 읽고** 시각 grounding
   - **mode 분기** (`.omd/init-context.json`의 `mode` 필드):
     - `clone` → 헤더 logo는 `assets/_reference/<id>/logo.<ext>` 직접 사용. project root에 `CLONE-MODE.md` + `replace-checklist.md`가 있어야 함.
     - `inspired` (또는 미지정) → 헤더 logo는 `[YOUR LOGO]` placeholder. captured 자산은 product DOM 미사용.
4. 우선순위:
   ```
   .omd/preferences.md (pending)
     > assets/_reference/<id>/tokens.json#live_overrides  (visual surface tokens만)
     > DESIGN.md                                          (essence: voice/principles/motion 철학·canonical token)
     > framework defaults
   ```
   essence (voice/principles/motion philosophy)는 항상 DESIGN.md가 권위. visual surface 토큰만 live_overrides가 우위.

DESIGN.md 없으면 사용자에게 알리고 omd:init 스킬 트리거. 임의 생성 금지.

## Phase 2 — Brand Context 적용

- 토큰 값은 DESIGN.md에서만 인용. 임의 hex / spacing / radius 금지.
- Voice 섹션을 마이크로카피에 적용. 문장 길이, 어휘 register, 은유 밀도 일치.
- Component 섹션 명시된 규칙 따름 (variant / state / sizes).
- 없는 토큰 지어내지 않음. 필요 시 사용자에게 "이건 DESIGN.md에 없는데, 어떻게 할까요?" 묻기.
- advisory dispatch 결과가 read-only 제안이어도 implement/change 요청에서는 본 에이전트가 최소 유효 변경을 직접 적용.
- 변경 전 `consumer_route`의 viewport·state·핵심 동작을 기록하고, 변경 후 **같은 consumer route·viewport·state**를 다시 연다. 공유 renderer나 진단 route만 확인해 통과 처리하지 않는다.
- 변경 후 요청에 비례한 빌드·테스트·실제 route 검증을 수행. 동작, 시각 계약, 접근성, overflow를 확인한다. 실행하지 못한 검증은 통과로 표현하지 않고 `unresolved`에 남긴다. 자문 완료를 구현 완료로 간주하지 않음.

## Phase 2.25 — Contract-first edit + acceptance packet

시각적 확장보다 먼저 기존 제품 계약을 잠근다. 목적은 디자인을 보수적으로 만드는 것이 아니라, 더 나은 화면을 만들면서 이미 동작하는 제품을 다른 제품으로 바꾸지 않는 것이다.

### Release-blocker pass — polish보다 먼저 한 번만 닫기

아래 세 항목은 서로 다른 문서 작업이 아니라 **첫 edit transaction의 완료 조건**이다. 긴 ledger를 다시 설명하거나 검증을 반복하지 말고, 제품을 읽을 때 위험을 표시한 뒤 한 번의 edit으로 같이 고친다.

#### Completion loop — accounting 전에 실제 결함 닫기

사용자 prompt·task packet·DESIGN.md가 이미 실패라고 말한 항목은 `must_fix`다. 첫 제품 diff 직후, static closure 전에 딱 한 번 아래 순서로 확인한다.

1. **Contrast:** normal text pair가 4.5 미만이면 그 요소를 확인된 Ink/text-role token으로 바꾼다. palette 전체를 새 hex로 바꾸거나 “unresolved”만 기록하지 않는다.
2. **Atomic rows:** 320px·200%에서 exact identifier/summary가 한 줄에 안 맞으면 carrier 자체를 full-row/stack한다. 하나의 protected wrapper가 `ID-A + ID-B`처럼 둘 이상의 atomic token을 담고 wrapper에 one-line 계약이 있으면 wrapper와 원문 순서를 보존한 채 각 token을 visible semantic child로 감싸더라도 **parent 전체가 한 줄이어야 한다.** child나 separator 사이 wrap도 실패다. parent를 `display:grid`/column/flex-wrap으로 쪼개지 말고, carrier를 full-row→stack→relocate해 필요한 연속 폭을 회수한다. 그래도 전체 compound value가 물리적으로 안 맞을 때만 그 carrier 전체에 이름 있는 `comparison-scroll`을 쓴다. page overflow, word-break, 글자 축소, 숨김·복제는 금지다.
3. **Second edit gate:** `must_fix` 중 제품 diff에 실제 교정이 없는 항목이 하나라도 있으면 static proof로 넘어가지 않고 두 번째 제품 edit을 한다. `finalize-unresolved`는 수정 대신 쓰는 출구가 아니다.

브라우저 명령은 static closure 뒤 한 번만 실행한다. host hook이 있는 환경에서는 artifact의 `browser_attempt` 자가진술로 충분하지 않다. helper가 `.omd/proof-policy`의 실제 실행 관측을 확인해야 `finalize-unresolved`를 허용한다. hook이 명령을 실행 전에 차단했다면 attempt가 아니므로, deny guidance에 따라 올바르게 분류되는 browser command 한 번을 실행하거나 delivery를 unresolved로 남긴다.

편집 전에 아래 세 값을 한 줄씩 확정한다. 빈 값이 있으면 제품 edit을 시작하지 않는다.

```yaml
pre_edit_release_invariant:
  known_failure_ledger: "every supplied baseline failure and every pre-edit measured failing critical gate → selector/condition + evidence + required correction or fail-closed outcome"
  foreground_change: "selector + surface + exact before ratio → existing verified text-role/ink token + exact after ratio or fail-closed replacement"
  comparison_carrier_set: "every protected or named relationship scope containing registered atomic text → named containment or exact relocation + concrete 390px + 320px + actual 200% zoom/reflow outcomes per carrier"
  browser_attempt: "one prepared command that navigates the same consumer route"
```

`known_failure_ledger AND foreground_change AND comparison_carrier_set`이 한 transaction에서 모두 닫혀야 한다. 사용자 요청·task packet·baseline 증거가 실패로 명시한 gate와 pre-edit 계산에서 실제 실패한 gate는 headline 수정 영역이 아니어도 모두 ledger에 올린다. 값을 계산하거나 실패라고 언급한 뒤 제품 diff에서 교정하지 않으면 `measured-but-unchanged`로 transaction은 미완료다. known failure가 하나라도 `open|unresolved|measured-but-unchanged`면 static closure·browser proof·delivery로 넘어가지 않는다.

이것은 계획 메모가 아니라 conjunctive edit 범위다. `foreground_change AND comparison_carrier_set`이 한 transaction에서 모두 구체화되어야 한다. carrier set은 protected ledger와 reflow row에서 `target|identifier|evidence|state|control-label`을 담는 모든 보호된 또는 이름 붙은 relationship scope를 포함한다. 인접한 scope를 대표 carrier 하나로 합치거나 주요 다이어그램만 기록하지 않는다. 첫 diff와 consolidated static closure에는 foreground의 exact numeric result(또는 verified text-role fail-close)와 **carrier별** 390px·320px·실제 200% 결과가 있어야 한다. 한 breakpoint, 최대 너비, `width:100%`, page overflow 0, 또는 미계측 placeholder는 carrier 결과가 아니다. carrier 하나나 viewport 결과 하나라도 빠지면 static closure로 넘어가지 않고 transaction을 미완료로 둔다. static grep은 결과가 아니며 browser session 생성은 결과가 아니다. static closure 뒤 `browser_attempt`가 실제 route를 열어야 하며, infrastructure가 막힌 실제 navigate 시도만 `unresolved`로 닫을 수 있다.

1. **Foreground:** visible normal text의 실제 foreground/background pair를 exact ratio로 계산한다. 4.5 미만이거나 미계측이면 첫 edit diff에서 DESIGN.md의 검증된 text-role/ink token으로 실제 교체하고 accent는 non-text cue에만 남긴다. ratio 기록만 하고 교정을 미루면 transaction 미완료다.
2. **Reflow:** desktop·390px·320px·200%에서 atomic identifier와 짧은 label을 먼저 본다. fit하지 않으면 글자를 쪼개거나 줄이는 대신 parent row를 full-row→stack하고 desktop track/min-width 제약을 해제한다. shared header·legend가 관계를 전달하면 기본값은 그 carrier가 보이는 named `comparison-scroll`이다. 숨기고 unbound visual copy를 만들지 않으며, stack이 필요하면 기존 semantic carrier의 identity·cardinality·visibility를 mobile parent로 옮긴다.
3. **Stop:** 제품 edit 뒤 consolidated static closure 1회, 준비된 browser mechanism 1회만 쓴다. browser infrastructure가 막히면 `unresolved`로 닫고 다른 browser·port·runtime을 찾지 않은 채 전달한다.

이 pass가 끝난 뒤에만 optional polish로 간다. 아래 packet은 이 세 결정을 증명하는 필드 정의이지 추가 실행 단계가 아니다.

**Acceptance packet은 실행 파일이 아니라 체크리스트와 관찰 결과다.** 이 표현은 `verify.*`, `verifier.*`, `check.*`, `probe.*`, 임시 shell 파일, CDP/browser automation, 새 test runner를 작성할 권한을 주지 않는다. 새 프로그램이 실제 Chrome을 실행하더라도 replacement verifier다. 저장소에 이미 있는 테스트·평가기 또는 파일을 만들지 않는 직접 browser command만 실행하고, 그런 수단이 한 번 막히면 browser proof를 `unresolved`로 남기고 전달을 시작한다.

1. **첫 편집 전 protected ledger를 만든다.** 기존 DOM·코드·요청에서 동작을 가진 control, form, disclosure, row/list, 상태 출력의 identity와 개수를 기록한다. 각 항목은 `current_count`, `allowed_delta`, `states`, `facts`, `initial_visibility`, `own_geometry`를 가진다. 사용자가 원 요청에서 추가·삭제를 명시하지 않았다면 언제나 `allowed_delta: 0`이다. agent, specialist, DESIGN.md, 미적 아이디어, “production-ready” 같은 품질 표현은 변경 권한이 아니다. 부모가 handoff를 만들 때도 이 값을 완화할 수 없다. 특히 초기 문자열이 비어 있는 dynamic status/live region도 protected selector 자체의 baseline rendered box를 기록한다. 편집 뒤 부모 wrapper에만 `min-height`를 주거나 selector를 DOM에 남겼다는 사실은 그 selector의 가시성 보존이 아니다. baseline에서 보이던 protected selector는 자신의 rendered width·height를 유지해야 하며, 확인할 수 없으면 pre-edit geometry 선언을 복원한다.
1a. **첫 편집 전 `visual equity ledger`를 만든다.** 같은 consumer route/state에서 task-helpful 기존 시각 결정만 최대 5개 기록한다. 각 항목은 `identity`, `user_value`, `before_evidence`, `decision(preserve|reinforce|replace)`, `change_authority`를 가진다. eligible 결정이 없는 low-salience 변경은 `visual_equity: []`와 `visual-equity closure: N/A`로 기록해 inline 작업을 지연시키지 않는다. 대상은 decision hierarchy, risk/reversibility cue, active/selected-state distinction, primary-action prominence, 서로 다른 사용자 결정을 가르는 spatial boundary다. task value 없는 장식과 모든 옛 스타일은 보호 대상이 아니다. 항목을 replace하거나 약화할 권한은 `original user task`, `explicit DESIGN.md rule`, `same consumer route measured defect` 중 하나뿐이다. 이 authority는 protected behavior, foreground, geometry-token, interactive 계약을 override하지 않으며 충돌하면 더 엄격한 계약이 이긴다. “cleaner”, “more consistent/minimal”, component consolidation, generic best practice, specialist preference, model taste는 권한이 아니다. consolidation은 자동 simplification이 아니며 restraint도 안전한 token-backed state signal을 중립화할 허가가 아니다. ledger를 지키려고 DESIGN.md에 없는 token·fallback 값을 만들지 않는다.
2. **첫 편집 전 `semantic_color_ledger`를 잠근다.** 의미 있는 foreground/background pair를 `token`, `surface`, `content_type`, `contrast_proof`로 기록한다. `muted`, `secondary`, `supporting`도 normal text면 exact pair를 계산하며 반올림 전 값이 4.5 미만이면 실패다. 실패·미계측 pair는 확인된 text-role/ink token으로 fail-close하고, accent는 인접한 non-text cue에만 남긴다. 대체 token이 없으면 새 hex를 만들지 않는다. 일반 텍스트로 의미를 보존한다.
2a. **편집 직후 `foreground closure`를 한 번 수행한다.** changed foreground와 ledger의 기존 실패 pair를 실제 surface에서 다시 대조한다. token 이름·굵기·“거의 4.5”는 proof가 아니다. normal text는 exact 4.5:1을 통과하거나 확인된 text-role token으로 교체되어야 하며, 색만으로 상태를 구분하지 않는다. `failed_or_unresolved_normal_text_pairs: 0`이 되기 전에는 acceptance를 시작하지 않는다.
2b. **foreground 교정 직후 `geometry-token closure`를 수행한다.** 마지막 제품 편집과 `interactive closure` 전에 이번 product diff에서 추가·변경한 모든 `border-radius` 선언과 그 선언을 받는 실제 surface를 전수한다. card, control/input/button, dialog/sheet, badge/tag처럼 기존 DOM·component name·제품 계약으로 이미 식별되는 역할만 사용하며, 모양이 비슷하다는 이유로 역할을 추측하지 않는다. 각 항목에 `identity`, `product_role`, `before_declaration`, `after_declaration`, `declared_role_token`, `evidence(source-token|computed-value|unresolved)`, `decision(keep|correct|restore)`를 붙인다. DESIGN.md에 해당 역할의 radius token이 있으면 source에서 그 exact token을 참조하거나 computed value가 exact token 값과 일치해야 한다. “거의 같다”, 다른 역할 token, 임의 literal, 평균값은 proof가 아니다. changed surface의 역할 또는 token이 없으면 plausible radius를 새로 만들거나 인접 component 값을 빌리지 않고 pre-edit geometry를 복원한다. 새 surface가 원 사용자 요청에 필수인데 역할 token이 없으면 radius 없이 두고 사실을 보존하며 새 token을 만들지 않는다. closure는 `mismatched_declared_radius: 0`, `invented_radius_value: 0`, `unresolved_changed_radius: 0`이 모두 성립하기 전에는 acceptance를 시작하지 않는다. browser/computed proof가 없더라도 exact source token 대조 또는 pre-edit 복원으로 fail-close하고, 이를 위해 replacement verifier를 만들지 않는다.
2c. **마지막 제품 편집 직후 `interactive closure`를 수행한다.** optional browser 검증이나 전달로 넘어가기 전에 이번 product diff에서 추가·변경한 모든 focusable element를 전수한다. native control과 link뿐 아니라 `tabindex`, `contenteditable`, focusable ARIA widget, skip/navigation control을 포함하고, 각 항목에 `identity`, `before_count`, `after_count`, `allowed_delta`, `change_authority`, `hidden_method`, `focus_reveal_path`, `decision(keep|remove|make-visible)`를 붙인다. 실제 diff를 protected ledger와 대조했을 때 원 사용자 요청의 추가 권한이 없고 `allowed_delta: 0`이면 접근성 개선 의도, “production-ready”, specialist 제안과 무관하게 그 focusable addition을 검증 전에 제거한다. 의도적으로 숨긴 focusable control은 기존 제품 계약 또는 원 사용자 요청의 권한이 있어야 하고, 같은 selector의 source-level `:focus`/`:focus-visible` reveal path가 clip·크기·위치를 해제하며 same-route keyboard acceptance에서 viewport 안에 들어오는지 확인한다. base `.sr-only`/visually-hidden 규칙만 있고 focus reveal이 없으면 영구 clipping으로 판정한다. browser proof가 불가능한 새 hidden focusable은 `unresolved`로 출고하지 않고 제거하거나, 원 요청상 control이 꼭 필요하면 평상시에도 보이게 만든다. closure는 `unauthorized_focusable_delta: 0`, `permanently_clipped_focusable: 0`, `unresolved_focus_reveal: 0`이 모두 성립하기 전에는 acceptance를 시작하지 않는다. 새 verifier를 만드는 대신 기존 diff·테스트·같은 route 검증으로 이 transaction을 증명한다.
2d. **`visual-equity closure`를 수행한다.** `visual_equity: []`이면 desktop/mobile 대조 없이 `visual-equity closure: N/A`로 종료한다. ledger가 비어 있지 않으면 마지막 제품 편집 뒤 같은 consumer route/state의 desktop과 mobile을 before/after로 대조한다. 변경된 high-salience 항목은 ledger의 authority에 매핑하고, 권한 없는 변경은 token 안에서 복원한다. `unsupported_hierarchy_loss: 0`, `unsupported_state_signal_weakening: 0`, `unsupported_reassurance_removal: 0`, `unsupported_decision_boundary_collapse: 0`이 모두 성립하기 전에는 acceptance를 시작하지 않는다. visual equity 보존은 모든 옛 스타일의 동결이 아니며, 근거 있는 replace/reinforce와 measured defect 교정은 허용한다.
2e. **고위험 결정 화면에서 `decision-context hierarchy closure`를 수행한다.** 삭제·승인·권한·송금처럼 실행 후 되돌리기 어렵거나 피해가 큰 결정을 최종 확인하는 화면에만 적용한다. 결정 경계 안에서 (1) 선택된 대상, (2) 결정에 직접 필요한 제공된 사실·증거, (3) 현재 상태 또는 blocker, (4) 취소와 최종 action boundary가 한 번에 구분되는지 확인한다. 이 네 역할이 긴 설명 한 문단이나 서로 동등한 장식 카드로 평평해졌다면 기존 DESIGN.md 토큰과 사실만 사용해 label-value metadata, semantic table/list, summary block 중 현재 구조에 가장 작은 표현으로 hierarchy를 복원한다. 좁은 화면에서도 대상→사실/증거→상태→행동 순서를 유지하고 dense-data 열의 비교 geometry를 안정적으로 보존한다. 이 closure는 새 warning banner, risk score, 법적 판단, 상태, control, token, container, 색, 아이콘 또는 사실을 만들 권한이 아니다. 대상이나 blocker가 unresolved면 추측하지 않고 해당 unresolved field만 생략한다. 기존 화면이 이미 네 역할을 명확히 구분하면 `decision-context hierarchy closure: preserve`로 끝내고 시각 변형을 추가하지 않는다.
2e. **`reflow-integrity closure`는 compact group packet 하나로 실행한다.** 같은 consumer route의 390px·320px·actual 200% reflow를 검사한다. 200%는 640px viewport만 뜻하지 않는다. `viewport_width: 640`과 `document.documentElement.style.zoom = "2"`를 함께 적용해 effective CSS width 320px 조건을 만든다. 첫 CSS 편집 전에 **`.omd/reflow-closure.json`에 schema `0.2` 초안을 실제 저장**한다. 같은 selector·역할·longest value를 공유하는 반복 행은 인스턴스마다 복제하지 않고 `row_groups.expected_count`로 전부 계상한다. 인접한 의미 관계가 다른 carrier는 합치지 않는다.

   초안을 저장한 즉시 현재 skill 디렉터리의 `scripts/reflow-artifact.mjs lock .omd/reflow-closure.json`을 **한 번** 실행해 ordered group inventory와 hash를 결정론적으로 채운다. hash를 손으로 계산하거나 hook 구현을 읽지 않는다. 제품 편집 뒤에는 carrier/row group·selector·count·binding을 바꾸지 않는다. 브라우저 proof command **내부에서** 실제 측정 결과를 group final에 기록하고 같은 process가 `scripts/reflow-artifact.mjs finalize`를 한 번 실행한다. browser command가 반환된 뒤 helper를 별도 shell command로 실행하거나 artifact를 다시 읽지 않는다. 이 helper는 등록 row/carrier 하나라도 unresolved면 resolved finalize를 거부한다. browser infrastructure가 막힌 경우에만 같은 browser command 내부에서 실제 navigate 시도의 `mechanism`과 `infrastructure-error`를 `browser_attempt`에 기록한 뒤 `finalize-unresolved`로 모든 등록 인스턴스를 정직하게 계상한다. browser를 시도하지 않았거나 제품 결함을 발견한 상태는 unresolved accounting으로 우회할 수 없다. helper가 없거나 실행되지 않으면 기존 schema `0.1`을 손으로 재구성하지 말고 해당 reflow proof를 `unresolved`로 전달한다.

   ```yaml
   reflow_work_packet:
     schema_version: "0.2"
     measurement_conditions:
       - { id: "390", viewport_width: 390, zoom: 1 }
       - { id: "320", viewport_width: 320, zoom: 1 }
       - { id: "200pct", viewport_width: 640, zoom: 2 }
     inventory:
       state: "filled by lock helper"
       carrier_ids: ["filled by lock helper"]
       row_group_ids: ["filled by lock helper"]
       sha256: "filled by lock helper"
     carriers:
       - id: "stable relationship scope id"
         selector: "one selector covering this relationship scope"
         expected_count: 1
         binds_row_groups: ["registered row group id"]
         final: { outcome_390: pass|unresolved, outcome_320: pass|unresolved, outcome_200pct: pass|unresolved }
     row_groups:
       - id: "stable row group id"
         selector: "one selector matching every instance in the group"
         role: target|identifier|evidence|state|control-label
         expected_count: 1
         longest_value: "longest actual state/template value in this group"
         atomic_parts: null|["ordered atomic child 1", "ordered atomic child 2"]
         line_contract: single-token|parent-one-line
         decision: full-row|stack|comparison-scroll|keep|unresolved
         final: { outcome_390: pass|unresolved, outcome_320: pass|unresolved, outcome_200pct: pass|unresolved, status: pass|unresolved }
     invariants: { same_row_count: true|false, same_decision_boundary: true|false, all_registered_carriers_closed: true|false, no_text_hack: true|false }
     browser_attempt: { attempts: 0|1, outcome: not-run|infrastructure-error|measured, mechanism: null|"exact mechanism", oracle: "character-range-line-tops", conditions: [{ id: "390", viewport_width: 390, zoom: 1, observed_document_zoom: 1 }, { id: "320", viewport_width: 320, zoom: 1, observed_document_zoom: 1 }, { id: "200pct", viewport_width: 640, zoom: 2, observed_document_zoom: 2 }] }
     known_failure_closure: { state: open|closed|unresolved, unresolved: null|0|positive_integer }
     closure: { state: open|closed|unresolved }
     closure_manifest: "filled by finalize helper; includes group counts, expanded instance counts, quality_pass, and browser attempt"
   ```

   1. **INVENTORY.** `row_groups`에는 one-line 계약이 있는 visible atomic identifier, 선택 target/source/artifact filename, 짧은 evidence·summary·metadata·supplied-count, short control label, visible dynamic state/status를 넣는다. 같은 selector/role의 반복은 `expected_count`로 묶되 render function/template/state map의 가장 긴 실제 값을 `longest_value`로 기록한다. 하나의 protected wrapper에 `ID-A + ID-B`처럼 복수 exact token이 있으면 ordered `atomic_parts`와 `line_contract: parent-one-line`을 반드시 기록한다. 단일 atomic value는 `line_contract: single-token`이다. paired toggle/button/select copy는 tag와 무관하게 `control-label`이다. 일반 heading/body prose는 명시적 one-line 계약이 없으면 제외한다. 각 group을 소유하거나 다른 내용과의 관계를 전달하는 protected/named scope를 `carriers`에 전부 등록한다. `lock` helper가 성공하면 즉시 제품 편집으로 넘어가며 helper source나 hash 알고리즘을 읽지 않는다.
   2. **FIT.** 각 group의 DESIGN.md type role과 target emphasis를 보존한다. 더 작은 임의 type, 축약, `clamp()` 하한으로 맞추지 않는다. pass는 browser 측정값만 가능하고 source-only이면 `unresolved`다. `viewport → page inset → card padding → section inset → reading width` 순서로 폭을 회수한다.
   3. **REFLOW.** 가장 좁은 조건에서 group의 longest atomic child와 padding/gap을 판단한다. fit하지 않으면 text를 깨지 말고 parent row를 `full-row`, 다음으로 `stack`한다. compound wrapper는 protected selector·accessible text·원문 순서를 유지하고 각 `atomic_parts`만 관측 가능한 child span으로 감싼다. **wrapper 자체에 one-line 계약이 있으면 `atomic_parts`는 separator wrap 허가가 아니다.** parts와 separator 전체를 한 atomic group으로 유지하고, fit하지 않으면 carrier를 full-row/stack/relocate해 폭을 회수한다. mobile cascade에서 desktop track·basis·min-width를 해제하고 필요한 child에 `min-width: 0`을 둔다. shared header·legend가 의미 관계를 제공하면 carrier를 보존한 named `comparison-scroll`을 먼저 쓴다. stack은 기존 carrier 자체를 relocate한다. `display:none` 뒤 generated content·`data-*`·aria-label·hook 없는 span 복제, 단일 text scroller, word-break, token 내부 break character, generated separator는 실패다.
   4. **PROVE.** 한 browser command 안에서 group selector의 **모든 matched instance**에 대해 computed type, character-range line tops, overflow/clipping, cardinality, association을 세 조건에서 측정한다. 각 condition마다 viewport를 설정하고 reload한 뒤 `document.documentElement.style.zoom = String(zoom)`을 적용한다. 특히 `200pct`는 `{viewport_width: 640, zoom: 2}`이며 computed document zoom이 실제 `2`인지 읽어 `observed_document_zoom`에 기록한다. 640px만 열고 zoom을 생략한 결과는 200% proof가 아니다. 각 visible text node의 공백이 아닌 문자마다 `Range`를 만들고 top 좌표의 고유 개수를 세며, `element.getClientRects().length`는 line-count proof로 사용하지 않는다. `line_contract: parent-one-line`은 child별 line 수가 아니라 **parent selector 전체의 non-space character top 고유값이 정확히 1**이어야 한다. 하나라도 실패하거나 count가 `expected_count`와 다르면 그 group은 pass가 아니다. 같은 browser command가 실제 결과와 `browser_attempt.oracle: character-range-line-tops`, 세 condition의 observed zoom을 artifact에 쓰고 `finalize`까지 실행한다. helper가 closure state에서 `OMD_DELIVERY_READY` 또는 `OMD_DELIVERY_UNRESOLVED`를 자동 출력하며 이 stdout이 terminal closure다. 반환 뒤 artifact `rg`/`sed`/`cat`이나 별도 finalize를 실행하지 않는다. 대표 instance, page overflow 0, element rectangle, screenshot 육안, source 추정은 group proof가 아니다. helper가 만든 manifest의 expanded `registered_carriers/registered_rows`가 시작 count와 다르거나 미계측 instance가 있으면 성공을 말하지 않는다.

   quality closure는 `same_row_count: true`, `same_decision_boundary: true`, `all_registered_carriers_closed: true`, `no_text_hack: true`, `unresolved_rows: 0`, `unresolved_carriers: 0`, `page_overflow: 0`, `quality_pass: true`, `known_failure_closure: { state: closed, unresolved: 0 }`일 때만 통과한다. `finalize-unresolved`는 실제 browser infrastructure attempt가 기록된 경우에만 accounting을 `closure.state: unresolved`로 잠그며 quality closure나 구현 완료를 통과시키지 않는다.
2f. **`proof execution close latch`로 끝난 증명을 다시 열지 않는다.** 품질 gate는 유지하고 아래 state를 같은 consumer route의 acceptance까지 유지한다.

   ```yaml
   proof_execution_latch:
     revision: 0
     inventory: open|closed
     product_edit: pending|changed|stable
     known_failure_closure: { state: open|closed, unresolved: 0 }
     static_closure: { state: open|closed, revision: null, runs: 0 }
     browser_proof: { state: open|closed|unresolved, revision: null, attempts: 0, mechanism: null }
     delivery: blocked|ready
     violations: { browser_recovery: 0, duplicate_static_closure: 0, verification_after_ready: 0 }
   ```

   - pre-edit 한 번에 token·hook/cardinality·state source·responsive risk·reflow rows를 inventory하고 즉시 `inventory: closed`로 잠근다. 같은 revision에서 전체 skill/DESIGN/제품 파일 inventory를 다시 실행하지 않고 편집 위치와 실패 selector만 targeted reread한다.
   - 제품 edit을 한 transaction으로 묶어 `revision`을 1 올리고 `product_edit: changed`, 두 proof state를 `open`으로 만든다. 마지막 edit 뒤 syntax·hook/cardinality·supplied facts·forbidden text hack·changed token을 **한 짧은 command cluster의 consolidated static closure**로 확인한다. 큰 전체 diff 출력이나 static 명령 반복은 금지한다. host가 PostToolUse를 누락해도 다음 proof 시작 시 이전 static attempt는 `unresolved`로 원자적으로 닫히며, 동일 static command를 다시 실행하지 않고 browser proof로 넘어간다.
   - static closure가 닫힌 뒤 준비된 browser mechanism 한 번으로 390px·320px·200%와 states를 같은 session에서 수집한다. 성공이면 `closed`, attach/실행 infrastructure error면 `unresolved`로 잠근다. 둘 다 현재 revision과 mechanism을 기록한다. 그 뒤 `--doctor`, `--help`, executable/process/port discovery, 직접 Chrome launch, 다른 browser/port/runtime, 설치·권한 변경이나 두 번째 browser command를 시작하면 `browser_recovery` 위반이다.
   - **준비된 mechanism은 `browser-harness <<'PY' … PY`다.** 사용법을 알아내기 위한 `browser-harness --help`, `browser-harness skill`, `command -v`, socket/port 탐색을 먼저 실행하지 않는다. 첫 browser-harness 호출 하나 안에서 실제 route를 열고, states와 `{390, zoom 1}`·`{320, zoom 1}`·`{640, zoom 2}`를 순회하며 모든 registered selector의 character-range line tops·overflow·cardinality·association을 수집한다. 각 조건은 reload 뒤 document zoom을 적용하고 computed zoom을 관찰한다. 그 Python process가 artifact에 결과를 쓰고 `subprocess.run(["node", helper, "finalize", artifact], check=True)`까지 실행한다. helper가 stdout terminal marker를 자동 출력하므로 별도 print/read/finalize를 붙이지 않는다. browser command가 반환된 뒤 `rg`/`sed`/`cat`/helper를 실행하지 않는다. 이 호출이 attach/실행 infrastructure error를 반환하면 같은 process에서 즉시 `unresolved`로 잠그며 recovery 명령을 실행하지 않는다.
   - **검증 예산은 `revision당 consolidated static closure 1회 + 전체 task browser-harness command 1회`다.** 마지막 product edit 뒤 첫 acceptance shell command 하나가 static closure 전체다. syntax·hook/cardinality·supplied facts·forbidden text hack·changed token·contrast 계산을 그 command 안에 모두 합친다. 범위가 다르거나 첫 command가 일부만 확인했더라도 두 번째 shell command는 duplicate static closure다. source를 보기 위한 `sed`/`rg`/`wc`도 제품 diff 뒤 acceptance 사실을 재확인하면 static closure로 소비된 것으로 간주하며 같은 revision에서 다시 실행하지 않는다. 따라서 마지막 product edit 전 필요한 targeted read를 끝내고, 마지막 edit 뒤에는 묶은 static closure 한 번과 준비된 browser command 한 번만 실행한다. browser 결과가 red여도 제품을 다시 고치지 않으면 `ready`로 잠그고 unresolved를 전달한다.
   - browser가 제품 결함을 찾아 실제 product edit이 필요할 때만 revision을 올리고 `static_closure: open`, `browser_proof: unresolved`로 다시 연다. corrective static closure는 한 번 수행할 수 있지만 browser attempt는 다시 열지 않는다. 제품 파일이 바뀌지 않았다면 어느 proof state도 reopen하지 않는다.
   - 현재 revision의 static closure가 `closed`이고 browser proof가 `closed|unresolved`면 `delivery: ready`로 잠근다. 이 뒤 verification shell/browser command는 `verification_after_ready` 위반이다. 추가 탐색 대신 최소 완성 diff와 unresolved를 전달한다.
3. **탐색 종료 조건을 둔다.** DESIGN.md, consumer route, protected ledger, visual equity ledger, semantic color ledger, 최소 acceptance를 확인했다면 optional research나 미적 아이디어 수집을 더 하지 않고 가장 작은 end-to-end 편집을 시작한다. specialist 자문이 꼭 필요한 위험을 해결하지 않는 한 첫 편집을 막지 않는다. specialist를 호출해도 전체 페이지 감사를 요청하지 않고, 이미 확인한 위험 질문 1-2개만 `bounded-repair-advisory`로 보낸다. state/status/accent token이 있으면 engineer 질문 중 하나는 semantic color ledger의 모든 planned pair를 normal text와 non-text 역할로 분리하고 unmeasured pair를 지적해야 한다. 자문 뒤 새 pair를 추가하면 별도 2차 audit 대신 위 fail-closed text+non-text 기본값을 적용한다.
4. **delivery clock을 먼저 잠근다.** 런타임이나 작업 packet에 timeout이 있으면 첫 제품 편집을 총 예산의 50% 전, 선택 검증 종료를 80% 전, 최종 전달 시작을 90% 전으로 둔다. 필수 specialist가 있으면 마지막 결과가 도착한 뒤 `min(90초, 총 예산의 10%)` 안에 `first_safe_edit` 하나를 먼저 적용한다. 그 사이 사용자-facing ledger recap, 자문 요약, 계획 설명, 전체 파일 재독해, 2차 분석 pass를 출력하지 않는다. 기존 snippet을 안전하게 바꿀 수 있으면 첫 transaction은 targeted `Edit`이며 whole-file `Write`가 아니다. 첫 transaction은 원 요청의 acceptance에 기여하고 protected ledger를 보존하는 실제 제품 변경이어야 한다. 공백·주석·timestamp·동일값 치환 같은 no-op으로 clock만 찍지 않는다. specialist의 `first_safe_edit`가 ledger를 어기면 폐기하고, 이미 읽은 DESIGN.md와 원 요청이 직접 허용하는 가장 작은 계약-중립 변경을 같은 방식으로 적용한다. timeout을 알 수 없어도 ledger와 필수 자문이 준비된 뒤 optional 탐색을 한 번 더 돌리지 않는다. deadline을 놓치면 기능을 더 추가하지 않고 가장 작은 완성 diff와 정직한 `unresolved` 전달을 우선한다.
5. **장식을 위해 제품 hook을 복제하지 않는다.** 가격 비교, 요약 카드, 모바일 사본처럼 같은 값을 다시 보여줘야 해도 기존 behavior hook·form field·live region·ID를 복제하지 않는다. 새 hook이나 상태를 추가하려면 요청 또는 제품 계약의 근거가 있어야 한다.
6. **최종 acceptance packet을 한 번 실행한다.** 같은 route에서 다음을 묶어 확인하고, 고칠 수 없는 항목은 `unresolved`로 전달한다.
   - known failure ledger의 모든 supplied/measured failure가 실제 diff의 교정 또는 검증된 fail-close에 매핑되어 `measured_but_unchanged: 0`, `unresolved_known_failures: 0`
   - protected ledger의 identity·개수·before/action/after가 변경 전 계약과 일치하고, baseline에서 보이던 dynamic status/live-region selector 자체의 initial rendered geometry가 보존되어 `protected_selector_visibility_loss: 0`
   - 일반 텍스트 contrast 4.5:1, 큰 텍스트와 비텍스트 경계·focus 3:1. accent token이라는 이유만으로 작은 텍스트 색으로 쓰지 않음
   - foreground closure가 이번 diff의 모든 changed foreground 선언을 분류했고 `unresolved normal-text accent pair`가 0
   - geometry-token closure가 실제 changed radius surface를 역할별 DESIGN.md token과 대조했고 `mismatched_declared_radius`, `invented_radius_value`, `unresolved_changed_radius`가 모두 0
   - interactive closure가 실제 focusable diff를 protected ledger와 대조했고 `unauthorized_focusable_delta`, `permanently_clipped_focusable`, `unresolved_focus_reveal`이 모두 0
   - `visual_equity: []`이면 `visual-equity closure: N/A`; ledger가 비어 있지 않으면 같은 route/state의 desktop·mobile before/after를 대조하고 `unsupported_hierarchy_loss`, `unsupported_state_signal_weakening`, `unsupported_reassurance_removal`, `unsupported_decision_boundary_collapse`가 모두 0
   - semantic color ledger의 모든 normal-text pair에 measured proof가 있거나, text-role token + 인접 non-text accent로 fail-closed 처리됨
   - desktop, 390px, 320px, 200% zoom/reflow 또는 제품이 지원하는 가장 가까운 동등 조건에서 horizontal overflow·clipped control·control overlap 없음
   - reflow work packet의 모든 row가 같은 identity/cardinality로 닫혔고 `same_row_count: true`, `same_decision_boundary: true`, `no_text_hack: true`, `unresolved_rows: 0`, `page_overflow: 0`
   - focusable skip/navigation control을 큰 음수 좌표에 방치하지 않으며, keyboard focus 시 viewport 안에서 보이고 다른 control과 겹치지 않음
7. **semantic structure를 시각 grid로 대체하지 않는다.** 비교 데이터는 가능하면 native `<table>`·`<th scope>`를 사용한다. ARIA table/grid를 쓰면 `table/grid > row > columnheader|rowheader|cell` parentage를 완성한 뒤 출고한다. 좁은 화면에서 의미상 필요한 horizontal scroll region은 이름을 제공하고, 내부에 자연스러운 focus target이 없으면 region 자체를 `tabindex="0"`으로 keyboard-reachable하게 만든다. 장식용 wrapper에 table/grid role을 붙이지 않는다.
8. 브라우저나 contrast 계산기가 없으면 통과를 추정하지 않는다. 가능한 정적 검사와 같은-route 상태 검증을 수행하고 나머지는 `unresolved`로 남긴다. 단, 의미 있는 normal text의 contrast가 unresolved인 pair 자체는 남기지 않는다. text-role token + non-text accent 조합으로 먼저 교체한 뒤 계측하지 못한 나머지 route 검증만 unresolved로 보고한다.

이 packet은 benchmark selector를 맞추는 절차가 아니다. 실제 제품에서 사용자 동작과 접근성·reflow 계약을 보존하기 위한 일반 acceptance layer다.

## Phase 2.5 — Bounded verification + guaranteed delivery

검증은 결과 전달을 막지 않는 범위에서 fail-closed로 수행한다.

1. work packet의 protected ledger, visual equity ledger·closure, acceptance packet을 **필수 검증**으로 두고, acceptance를 증명하는 최소 명령·route와 **선택 검증**(추가 screenshot, 보조 브라우저, 중복 lint)을 분리한다.
2. 가장 결정론적이고 값싼 검증부터 실행한다. 이미 같은 계약을 증명한 검증을 “더 확실하게” 만들기 위해 반복하지 않는다.
3. sandbox permission, quota, browser attach, missing executable/dependency 같은 **infrastructure error**는 제품 결함과 분리한다. verification mechanism은 종류별로 한 번만 시도한다. 실패 원인을 읽는 보정 명령은 제품을 다시 실행하지 않는 범위에서 한 번만 허용하고, 같은 browser/runtime mechanism을 변형해 재시도하지 않는다.
4. 네트워크 다운로드·새 도구 설치·권한 완화·sandbox 해제는 사용자가 요청하거나 work packet에 사전 승인된 경우가 아니면 검증 우회책으로 사용하지 않는다.
5. browser/DOM/runtime을 흉내 내는 새 shim, mock browser, replacement verifier를 검증 우회책으로 작성하지 않는다. `verify.*`, `verifier.*`, `check.*`, `probe.*`, 임시 shell 파일, CDP/browser automation, 새 test runner도 작성하지 않는다. 새 프로그램이 실제 browser를 실행해도 금지다. 저장소에 이미 있는 테스트·검증기·정적 검사 또는 파일을 만들지 않는 직접 browser command만 사용하고, 없는 증명은 `unresolved`로 남긴다. 사용자가 테스트 인프라 구현 자체를 요청한 경우만 예외다.
6. 제품 변경이 acceptance를 충족하고 필수 검증 결과를 확보했으면 선택 검증보다 **최종 전달을 우선**한다. 알려진 시간 예산의 80%에서 선택 검증을 끝내고 90% 전에는 최종 응답을 시작한다. 잔여 예산을 알 수 없으면 첫 제품 편집 이후 acceptance packet 한 번 또는 첫 infrastructure error를 delivery reserve로 간주한다.
7. 검증 인프라가 막혀도 구현을 지우거나 무한 재시도하지 않는다. 최종 응답을 `implemented / verified / unresolved`로 나눠 무엇이 완성됐고 무엇이 실행되지 못했는지 명시한다.

timeout 직전까지 optional verification을 계속해 final response를 잃는 것은 실패다. artifact가 만들어졌더라도 사용자가 결과·근거·남은 위험을 전달받지 못하면 delivery complete로 처리하지 않는다.

## Phase 3 — 교정 캡처

턴 종료 전에 다음 중 하나가 있었는지 확인:

1. 사용자가 디자인 선택을 명시적 교정 ("no, use X", "actually, Y", "don't use Z", "we never do W")
2. 사용자가 토큰/값을 revert 또는 교체
3. 사용자가 "우리는 ~한다/하지 않는다" 형태 원칙 언급

감지되면 **omd:remember 스킬을 트리거**한다 (CLI 호출 X — `.omd/preferences.md`에 직접 append). 트리거 메서드: omd-remember SKILL.md의 Step 1-6 절차를 따라 Edit 툴로 파일 수정.

## Phase 4 — 확인 메시지

교정 기록 시 턴 끝에 한 줄:

```
Logged to .omd/preferences.md — say "preference 정리해줘" later to fold into DESIGN.md.
```

일반 작업에는 불필요. 과한 알림 금지.

## 금지

- DESIGN.md 없는데 임의 생성 금지 (사용자에게 omd:init 제안)
- 전문 역할 부재 또는 read-only 자문을 이유로 implement/change 요청을 무변경 종료 금지
- 전문 역할 파일을 인라인으로 읽었을 때 해당 역할이 실제 실행됐다고 주장 금지
- 교정 감지 시 "기록할까요?" 묻지 말 것 — 자동 기록 + 한 줄 알림
- 같은 턴 내 같은 교정 중복 기록 금지
- CLI 호출 (`omd remember`, `omd learn` 등) 금지 — 1.0.0부터 모두 스킬 prose
