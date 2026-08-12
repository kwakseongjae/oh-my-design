---
name: omd:apply
description: "프로젝트 DESIGN.md를 UI/시각 작업의 brand context로 적용. 컴포넌트·색상·폰트·레이아웃 수정 같은 구체적 요청과 톤·분위기 표현 — KR '좀 더 따뜻하게', EN 'make it warmer/cooler', 日本語「もう少し暖かく」, 繁體中文「更溫暖一點」 — 모두에 트리거. DESIGN.md 부재 시 omd:init 우선. 화면 전체 신규 디자인은 omd:harness, 교정 기록은 omd:remember."
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:apply — Brand Context Injection + Delivery Router

유효하게 채택된 Core v2 package에서는 System Graph를 canonical authority로,
그 외에는 standalone DESIGN.md를 모든 UI/디자인 작업의 portable contract로
사용한다. 책임은 세 가지:

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

1. 프로젝트 루트의 `DESIGN.md`를 **전체 읽는다**. 요약 금지, Read 툴로 직접 로드한다.
2. `.omd/system/manifest.json` 또는 `.omd/system/graph.json` 중 하나라도
   있으면 둘 다 regular file인지 확인하고 다음 binding을 전부 검증한다:
   `format: design-md-core`, `format_version: 2.0.0`,
   `profile: portable-core`, `authority.canonical: system-graph`, exact seven
   section order/path, schema-valid seven graph objects, deterministic
   graph→projection semantic equality, Portable Core usefulness, actual graph와
   `DESIGN.md` 및 manifest에 열거된 artifact bytes의 exact SHA-256. 전부 맞을 때만 **adopted valid
   portable-core graph**로 인정하며 `graph.json`이 canonical이고
   `DESIGN.md`는 standalone portable projection이다. graph와 projection이
   충돌하면 graph가 이긴다.
3. manifest가 `migration-candidate`면 candidate graph는 non-authoritative다.
   `authority.source_sha256`에 결박된 source DESIGN.md만 canonical로 읽고,
   candidate projection/graph를 적용 근거로 쓰지 않는다. sidecar가
   가리킨 source를 찾을 수 없으면 candidate를 적용하지 않고 fail closed한다.
   sidecar가 missing/stale/invalid면 graph authority를 버리고 root `DESIGN.md`를
   독립 standalone contract로 읽는다. binding 오류는 `unresolved`에 남기고
   `bound-system`이라고 주장하지 않는다. standalone 문서가 Portable Core
   usefulness를 통과하지 못해도 확인된 field는 읽을 수 있지만, 빠진 계약은
   absent로 유지하고 portable conformance를 주장하지 않는다.
4. Core v2 DESIGN.md는 heading 번호나 번역된 제목이 아니라 다음 exact stable
   anchor로 읽는다: `experience`, `foundations`, `typography-assets`,
   `components-states`, `layout-platforms`, `content-locales`, `governance`.
   exact Core anchor가 전혀 없는 문서만 legacy compatibility input으로 읽고,
   Visual Theme, Color Palette, Typography, Components, Responsive, Voice &
   Tone, Motion 같은 의미 heading을 Core anchor로 매핑한다. legacy 숫자
   section을 새 code citation이나 산출물에 복사하지 않는다.
5. `.omd/preferences.md`가 있으면 같이 읽는다. `status: pending`은 graph를
   몰래 다시 쓰는 machine authority가 아니라 이후 사용자 교정 layer다.
   현재 사용자의 명시적 지시와 explicit pending 교정은 실행 시 우선하되,
   inferred 교정으로 canonical graph의 확정값을 바꾸지 않는다.
6. **reference-capture는 evidence-only**: `.omd/init-context.json`의
   `reference_id`(legacy input만 legacy metadata의 `bootstrapped_from` fallback)로
   `assets/_reference/<id>/`를 찾고 `evidence.json`, `tokens.json`,
   `structure.json`, `fonts.json`, screenshots를 필요할 때 읽을 수 있다. 그러나
   captured `tokens`, `live_overrides`, font URL, logo, composition은 프로젝트
   authority가 아니며 자동 적용·동기화·fallback하지 않는다. graph-authoring
   checkpoint가 provenance와 함께 해당 결정을 `graph.json`에 명시적으로
   admit했고 위 hash binding이 valid할 때만 그 graph path를 통해 적용한다.
   admission되지 않은 capture는 관찰 근거로만 남기고 구현 값은 absent다.
7. 적용 우선순위:
   ```
   current explicit user instruction / explicit pending correction
     > adopted valid portable-core graph
     > its DESIGN.md portable projection
     > standalone DESIGN.md stable anchors (sidecar absent/invalid)
     > legacy meaning-based read fallback (no Core anchors only)
   reference-capture evidence is never a prescriptive tier
   ```

DESIGN.md 없으면 사용자에게 알리고 omd:init 스킬 트리거. 임의 생성 금지.

## Phase 2 — Brand Context 적용

- 토큰 값은 valid graph의 `foundations`/`typography_assets`, 또는 standalone
  DESIGN.md의 `foundations`/`typography-assets`에서만 인용한다. 임의 hex /
  spacing / radius / font fallback 금지.
- `content-locales`를 마이크로카피에 적용한다. 문장 길이, 어휘 register,
  은유 밀도와 locale behavior를 일치시킨다.
- `components-states`의 variant / state / sizes와 `layout-platforms`의
  responsive/platform 규칙을 따른다.
- 없는 토큰 지어내지 않음. 필요 시 사용자에게 "이건 DESIGN.md에 없는데, 어떻게 할까요?" 묻기.
- advisory dispatch 결과가 read-only 제안이어도 implement/change 요청에서는 본 에이전트가 최소 유효 변경을 직접 적용.
- 변경 전 `consumer_route`의 viewport·state·핵심 동작을 기록하고, 변경 후 **같은 consumer route·viewport·state**를 다시 연다. 공유 renderer나 진단 route만 확인해 통과 처리하지 않는다.
- 변경 후 요청에 비례한 빌드·테스트·실제 route 검증을 수행. 동작, 시각 계약, 접근성, overflow를 확인한다. 실행하지 못한 검증은 통과로 표현하지 않고 `unresolved`에 남긴다. 자문 완료를 구현 완료로 간주하지 않음.

## Phase 2.25 — Contract-first edit + acceptance packet

시각적 확장보다 먼저 기존 제품 계약을 잠근다. 목적은 디자인을 보수적으로 만드는 것이 아니라, 더 나은 화면을 만들면서 이미 동작하는 제품을 다른 제품으로 바꾸지 않는 것이다.

### Non-interactive browser-infrastructure rule (browser-gated 절차보다 우선)

자동화·benchmark·non-interactive run에서는 사용자에게 remote debugging 허용, permission dialog 클릭, 로그인, browser attach, 재개 응답을 요구하지 않는다. Chrome 권한 팝업, remote debugging disabled, named socket unavailable, attach denial처럼 **route navigation 전에 막힌 한 번의 준비된 browser command**는 즉시 `browser_infrastructure_unavailable`로 분류한다. 같은 browser·port·runtime을 재시도하거나 사용자를 불러 대기하지 않는다.

- implement/change 요청이고 prompt·task packet·baseline이 구체적인 `must_fix`를 이미 제공했다면, pre-edit browser plan 불가가 제품 수정을 취소하는 이유가 아니다. 기존 source·DESIGN.md token·protected ledger·명시된 failure만 사용해 bounded static repair를 계속한다. 브라우저에서만 알 수 있는 width·ratio·state를 측정한 것처럼 만들지 않고, 근거 없는 brand fact/token/value나 task와 무관한 carrier를 추측하지 않는다.
- `.omd/reflow-closure.json`에 `source_contract.state: provider-sealed`가 이미 있으면 이것이 기본 경로다. manifest나 artifact를 열어 고치지 말고 제품 edit 전에 `node <current-skill-dir>/scripts/reflow-artifact.mjs source-packet .omd/reflow-closure.json`을 정확히 한 번 실행한다. 이 read-only 명령이 pre-edit product hash, immutable inventory, source-fallback stamp를 다시 검증하고 완성된 patch contract를 출력한다. 출력이 red면 제품을 편집하지 않고 중단한다. sealed artifact는 모델의 작업물이 아니며 필드 보완·정규화·충돌 제거를 위해 수정할 수 없다. packet이 열린 뒤 완성될 제품 bytes 전체를 `.omd/product-candidate.html`에 먼저 작성하고 `node <current-skill-dir>/scripts/reflow-artifact.mjs static-preview .omd/reflow-closure.json .omd/product-candidate.html`로 검사한다. candidate는 제품 파일이 아니므로 preview red를 고쳐 다시 검사할 수 있지만, locked product와 artifact는 preview가 pass하기 전까지 그대로여야 한다. preview pass 뒤 candidate를 다시 읽거나 모델 edit으로 재작성하지 않고 `node <current-skill-dir>/scripts/reflow-artifact.mjs static-promote .omd/reflow-closure.json .omd/product-candidate.html`을 정확히 한 번 실행해 receipt가 결박한 bytes를 제품에 그대로 승격한다.
- benchmark가 source contract `0.2`를 제공하면 provider 이전 admission이 해시로 잠긴 raw baseline의 **모든 실패 critical gate**를 `critical_gate_debt_coverage`와 대조한 상태다. 모델은 coverage를 축소하거나 baseline을 재해석하지 않는다. `comparison-scroll` row의 packet에는 carrier 자체뿐 아니라 nowrap content가 상위 grid/flex item의 automatic minimum을 밀어내지 않도록 하는 exact parent `min-width: 0` containment declaration도 포함돼야 한다. baseline의 contrast failure나 carrier parent containment가 packet에 없으면 준비 실패이며, 모델이 실행 중 추측으로 보완하는 경로가 아니다.
- provider-sealed artifact가 없는 일반 프로젝트에서 pre-edit plan command가 navigation 전에 infrastructure error로 끝났다면 제품 edit 전에 `node <current-skill-dir>/scripts/reflow-artifact.mjs source-fallback-open .omd/reflow-closure.json`을 실행한다. browser-harness wrapper가 stdin을 실행하기 전 막혀 snapshot이 없으면 이 명령이 현재 product를 먼저 snapshot으로 잠근다. 관계 contract validation에서 red면 opening은 소비되지 않으므로 error가 요구한 artifact-only carrier/row 계약만 고치고 같은 명령을 다시 실행한다. `source_fallback_closure.state: opened` stdout을 받은 뒤에는 재실행하지 않는다. helper가 잠근 pre-edit product sha256·inventory sha256와 opening stamp가 없으면 fallback edit은 금지한다. measured plan이 있거나 product가 이미 바뀐 뒤에는 이 경로를 열 수 없다.
- 이 infrastructure branch에서는 browser-derived `plan-close`와 fit budget을 `unresolved`로 남기고, **한 번의 product edit + 저장소에 이미 있는 결정론 static evaluator/closure 한 번**으로 알려진 결함을 닫는다. browser proof는 `unresolved`, source-backed static proof만 `verified`로 분리한다. 완전 검증·browser pass라고 표현하지 않는다.
- 측정되지 않은 one-line fit을 `full-row`, `stack`, `width:100%`, `min-width:0`만으로 통과했다고 가정하지 않는다. pre-edit source·prompt·task packet에 `parent-one-line` compound target(`ID-A + ID-B` 등) 또는 한 줄 concise evidence가 있고 **contained fit을 수치로 증명할 수 없으면**, 그 exact text와 typography를 유지한 채 각각을 action과 분리된 **distinct named relationship carrier**로 fail-close한다. row selector/passive text 자체나 action을 포함한 decision container를 scroll시키지 않는다.
- 이 fallback carrier는 source에 이미 있는 최소 target-only/evidence-only wrapper를 우선 사용한다. wrapper가 없을 때만 exact row 주위에 하나를 추가하며, `overflow-x:auto`, 의미가 드러나는 accessible name, `tabindex="0"`, visible `:focus-visible`을 함께 제공한다. 이는 원 요청의 intact one-line + no-page-overflow를 만족하기 위한 관계 carrier이므로 protected ledger에 정확한 focusable delta와 `change_authority: original user task`를 기록한다. target과 evidence를 한 scroller로 합치거나 state/action을 넣지 않는다.
- static closure에는 compound/evidence 원문·hook cardinality 보존, row `white-space:nowrap`, carrier와 row selector의 분리, carrier accessible name/tabindex/focus style, passive row overflow 금지, action 비포함을 한 번에 잠근다. 브라우저가 없으므로 실제 reserve·scrollWidth·keyboard 동작은 계속 `unresolved`이며 `verified`로 승격하지 않는다.
- fallback을 열기 전 `static_closure_manifest`에는 target/evidence별 stable carrier selector와 row selector가 드러나는 exact required literals, 각 carrier의 exact cardinality, non-empty accessible name, `tabindex="0"`, `overflow-x:auto`, row `white-space:nowrap`, visible `:focus-visible` 계약을 넣는다. acceptance-debt의 CSS 의무는 긴 문자열 literal로 숨기지 말고 `required_css_declarations`의 `{selector, property, value, value_contract}`로 잠근다. 결과에 정확한 값이 필수면 `exact-value`, objective browser gate가 실제 동작을 판정하고 선언의 존재만 필수면 `any-value`를 사용한다. 두 경우 모두 `value`는 첫 edit에 복사할 권장값이다. `source_fallback_patch_contract.canonical_css_source`와 `canonical_acceptance_css_source`는 selector까지 그대로 한 번에 복사한다. 같은 declaration을 기존 ancestor selector 아래로 합치거나 selector 앞뒤에 context를 덧붙이지 않는다. exact selector끼리의 grouping만 허용된다. state/action hook가 carrier fragment에 들어가거나 passive row 자체에 overflow가 선언되는 source pattern은 forbidden으로 잠근다. task에 target이나 concise evidence 중 하나만 존재하면 존재하는 역할만 등록하며 없는 역할을 만들지 않는다.
- `source-seal` 또는 `source-fallback-open`은 존재하는 target/evidence row 각각이 `decision: comparison-scroll`이고, row 하나만 결박한 서로 다른 pre-edit carrier와 완전한 `scroll_contract`를 가졌을 때만 열린다. helper stdout의 `static_edit_guardrails.source_fallback_patch_contract`를 첫 edit의 가장 짧고 우선적인 실행 packet으로 취급한다. 그 packet의 exact existing carrier selector에 marker·accessible name·`tabindex="0"`을 붙이고, role별 carrier overflow·visible focus와 row nowrap을 **candidate 안에서 먼저** 적용한 뒤 나머지 generic checklist를 대조한다. `source_fallback_relationships`의 다른 decision role 배제까지 모두 권고가 아니라 `static-preview`와 `static-close`가 같은 검사기로 직접 확인하는 필수 계약이다. `source-seal`은 모든 acceptance CSS를 structured declaration으로 병합하고 canonical fallback CSS와 충돌하는 금지 literal/pattern을 provider 실행 전에 거부한다. candidate preview가 pass하면 별도 `static-preview-receipt.json`에 candidate/source-contract/inventory hash를 기록한다. 그 receipt와 byte hash가 정확히 일치하는 candidate만 `static-promote`로 locked product에 한 번 적용하며, provider-sealed `static-close`는 이 결박이 없거나 다르면 closure를 소비하지 않고 거부한다. 모델이 candidate를 `sed`/`cat`으로 다시 읽어 product patch를 재구성하면 줄끝·개행까지 exact bytes 계약을 깨뜨릴 수 있으므로 금지한다. 그 뒤 `static-close`가 red면 packet의 `terminal_failure`대로 즉시 멈추며, 누락 항목을 고치는 두 번째 product edit은 금지한다.
- source-backed correction조차 결정할 수 없으면 speculative edit을 만들지 않고 해당 field/gate만 `unresolved`로 전달한다. 하지만 이미 알려진 수정까지 버리거나 audit-only 응답으로 종료하지 않는다.
- 최종 응답은 사용자의 추가 동작을 조건으로 삼지 않고 `implemented / verified / unresolved`를 즉시 구분해 전달한다.

이 절은 아래의 “plan-close 전 product edit 금지” 규칙에 대한 유일한 infrastructure 예외다. 정상적으로 browser plan이 실행된 경우에는 기존 measured-plan 절차를 그대로 따른다.

### Release-blocker pass — polish보다 먼저 한 번만 닫기

아래 세 항목은 서로 다른 문서 작업이 아니라 **첫 edit transaction의 완료 조건**이다. 긴 ledger를 다시 설명하거나 검증을 반복하지 말고, 제품을 읽을 때 위험을 표시한 뒤 한 번의 edit으로 같이 고친다.

#### Completion loop — accounting 전에 실제 결함 닫기

사용자 prompt·task packet·DESIGN.md가 이미 실패라고 말한 항목은 `must_fix`다. 첫 제품 diff 직후, static closure 전에 딱 한 번 아래 순서로 확인한다.

1. **Contrast:** normal text pair가 4.5 미만이면 그 요소를 확인된 Ink/text-role token으로 바꾼다. palette 전체를 새 hex로 바꾸거나 “unresolved”만 기록하지 않는다.
2. **Atomic rows:** 320px·200%에서 exact identifier/summary가 한 줄에 안 맞으면 carrier 자체를 full-row/stack한다. 하나의 protected wrapper가 `ID-A + ID-B`처럼 둘 이상의 atomic token을 담고 wrapper에 one-line 계약이 있으면 wrapper와 원문 순서를 보존한 채 각 token을 visible semantic child로 감싸더라도 **parent 전체가 한 줄이어야 한다.** child나 separator 사이 wrap도 실패다. parent를 `display:grid`/column/flex-wrap으로 쪼개지 말고, carrier를 full-row→stack→relocate해 필요한 연속 폭을 회수한다. 그래도 전체 compound value가 물리적으로 안 맞을 때만 **text가 아닌 관계 carrier 전체**에 이름 있는 `comparison-scroll`을 쓴다. protected target/identifier/state 같은 passive text 자체에 `overflow:auto|scroll`을 두는 것은 금지다. comparison carrier는 row selector와 다른 selector, accessible name, keyboard reachability, visible focus를 모두 가져야 한다. page overflow, word-break, 임의 글자 축소, 숨김·복제는 금지다.
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

known failure를 메모리에만 두지 않는다. reflow artifact의 `acceptance_debt_ledger`에 사용자 prompt·DESIGN.md·baseline이 **직접 언급한 모든 실패 범주**를 한 행씩 기록한다. 각 행은 pre-edit selector, baseline evidence, required correction/outcome, static guardrail, proof mode를 가지며 guardrail assertion은 `static_closure_manifest`에도 동일하게 존재해야 lock이 통과한다. `contrast`를 요구했는데 reflow 행만 등록하거나, baseline이 4.5:1 미만임을 알고도 low-contrast source pattern을 forbidden guardrail에 묶지 않으면 제품 edit을 시작하지 않는다.

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
2e. **`reflow-integrity closure`는 compact group packet 하나로 실행한다.** 같은 consumer route의 390px·320px·actual 200% reflow를 검사한다. 200%는 640px viewport만 뜻하지 않는다. `viewport_width: 640`과 `document.documentElement.style.zoom = "2"`를 함께 적용해 effective CSS width 320px 조건을 만든다. 첫 CSS 편집 전에 필요한 source inspection을 전부 끝내고 **`.omd/reflow-closure.json`에 schema `0.3` 초안을 실제 저장**한다. `acceptance_sequence.source_inspection_complete: true`는 이후 제품 source를 `rg`/`sed`/`awk`로 다시 읽지 않겠다는 latch다. 같은 selector·역할·longest value를 공유하는 반복 행은 인스턴스마다 복제하지 않고 `row_groups.expected_count`로 전부 계상한다. 인접한 의미 관계가 다른 carrier는 합치지 않는다.

   초안을 저장한 즉시 `OMD_REFLOW_MODE=plan`인 shipped runner를 exact named consumer browser에서 **한 번** 실행한다. runner는 snapshot이 없으면 browser navigation 전에 helper를 내부 호출해 ordered inventory와 편집 전 source를 잠근다. 이 bootstrap은 같은 plan transaction 안에서 원자적으로 끝나며, 이어 모든 row의 intrinsic nowrap text width를 세 조건에서 실측해 각 값에 16 CSS px를 더한 `pre_edit_fit_plan`을 `plan-close`로 잠근다. `OMD_PLAN_NOT_ATTEMPTED`는 artifact/snapshot 검증이 browser navigation 전에 실패했다는 뜻이며 측정 시도를 소비하지 않는다. 이 경우 제품은 편집하지 않고 artifact bookkeeping만 바로잡은 뒤 exact plan command를 다시 실행한다. `OMD_PLAN_MEASURED_RECONCILE_REQUIRED`는 한 번의 측정값은 artifact에 보존됐지만 semantic plan-close가 거부됐다는 뜻이다. browser를 다시 열거나 오류를 한 건씩 추측 수정하지 말고 안내된 `plan-packet <artifact> <packet>`을 정확히 한 번 실행한다. packet은 artifact guard, complete patch, `ready|patch-required|irreconcilable` verdict를 함께 잠근다. null인 `operator_inputs.accessible_names`가 있으면 packet이 열어 둔 정확한 row key의 명시적 이름만 채운다. key를 추가·누락하거나 다른 operator field를 넣으면 적용은 product mutation 전에 중단된다. complete patch는 직접 편집하지 않은 채 `plan-apply <artifact> <packet>`을 한 번만 실행한다. `irreconcilable`이면 새 row/carrier를 만들거나 제품을 수정하지 않고 run을 즉시 중단한다. `plan-close|plan-apply` 성공 stdout의 `plan_closure.state: closed`와 `static_edit_guardrails`가 모두 나오기 전에는 product edit이 금지된다. 이 수치가 나온 뒤에만 한 번의 product edit을 계획한다. 제품 편집 뒤에는 carrier/row group·selector·count·binding·fit plan을 바꾸지 않는다. 최종 browser proof command 내부에서 실제 측정 결과를 group final에 기록하고 같은 process가 `scripts/reflow-artifact.mjs finalize`를 한 번 실행한다. browser command가 반환된 뒤 helper를 별도 shell command로 실행하거나 artifact를 다시 읽지 않는다. 이 helper는 등록 row/carrier 하나라도 unresolved면 resolved finalize를 거부한다.

   snapshot-backed row selector와 모든 aggregate carrier selector는 pre-edit source에 존재하는 stable anchor만 사용해야 하며 row selector 자체의 rendered text/value가 `longest_value`와 정확히 대응해야 한다. 제품 edit에서 새로 붙일 `.event-log-form` 같은 class나 `.decision-target-carrier`를 row나 carrier selector provenance로 제출하지 않는다. runner가 내부 호출한 `snapshot` helper는 이런 post-edit-only anchor를 browser plan 전에 거부한다. 이 pre-navigation validation red를 browser unavailable이나 measured plan failure로 보고하지 않는다. `OMD_PLAN_NOT_ATTEMPTED` 뒤 허용되는 변경은 artifact bookkeeping 교정뿐이며 product source는 그대로 둔다. browser를 실제 시도하지 않았거나 제품 결함을 발견한 상태는 unresolved accounting으로 우회할 수 없다. 첫 product edit 뒤 첫 shell command 하나가 static closure 전체이고 두 번째 shell command는 duplicate static closure다. final runner는 `static_closure.state: passed`일 때만 성공하며 command 반환 뒤 artifact `rg`/`sed`/`cat`을 실행하지 않는다. `sed`/`rg`/`awk`/`wc`/diff도 제품 diff 뒤 실행하면 static closure로 소비되고, 이후 수정으로 revision을 올려도 task-level proof compliance는 복구되지 않는다. shipped runner를 실수로 plain Python으로 실행해도 runner 자체가 artifact를 읽거나 바꾸기 전 exact `browser-harness` stdin 경로로 한 번 self-dispatch한다. 이 safety path를 retry로 사용하지 않고 원래의 exact command를 우선한다.

   helper source나 hash 알고리즘을 읽지 않는다.

   ```yaml
   reflow_work_packet:
     schema_version: "0.3"
     browser_connection_contract: { transport: existing-cdp, connection_name_env: BU_NAME, cdp_url_env: BU_CDP_URL, allow_browser_launch: false, mechanism: "browser-harness named consumer CDP attachment" }
     measurement_conditions:
       - { id: "390", viewport_width: 390, zoom: 1 }
       - { id: "320", viewport_width: 320, zoom: 1 }
       - { id: "200pct", viewport_width: 640, zoom: 2 }
     acceptance_sequence:
       source_inspection_complete: true
       product_edit_transaction: single-planned-transaction
       post_edit_commands: [consolidated-static-closure, browser-harness-terminal]
     pre_edit_fit_plan: { state: pending } # snapshot 뒤 plan runner가 row intrinsic width와 aggregate carrier outer width를 각각 +16px budget으로 measured/locked
     acceptance_debt_ledger:
       - id: "one supplied or measured failure"
         gate: "contrast|document-overflow|clipped-control|inline-fit-reserve|focus|other"
         selector: "stable pre-edit selector"
         baseline_evidence: "exact supplied or measured failure"
         required_correction: "one concrete product edit using existing DESIGN.md tokens/contracts"
         required_outcome: "observable pass condition"
         proof_mode: static-fail-close|browser-row
         bound_row_group_ids: []|["registered row group id"]
         status: must-fix-before-static-close
         static_guardrail: { required_literals: ["manifest-bound correction when applicable"], forbidden_literals: ["manifest-bound bad literal when applicable"], forbidden_patterns: ["manifest-bound bad source pattern when applicable"], forbidden_css_declarations: [{ selector: ".fixed-carrier", property: "min-width", value_contract: "positive-length" }] }
     static_closure_manifest:
       product_path: index.html
       required_literals: ["known fact or required hook fixed before editing"]
       forbidden_literals: ["forbidden fallback or supplied-bad literal"]
       forbidden_patterns: ["forbidden\\s+source\\s+pattern"]
       forbidden_css_declarations: [{ selector: ".fixed-carrier", property: "min-width", value_contract: "positive-length" }]
       count_literals:
         - { literal: 'data-bench="stable-hook"', expected_count: 1 } # 실제 HTML start-tag attribute만 계산하며 script selector 문자열은 제외; data-disabled 같은 boolean attribute도 허용
     inventory:
       state: "filled by lock helper"
       carrier_ids: ["filled by lock helper"]
       row_group_ids: ["filled by lock helper"]
       sha256: "filled by lock helper"
     carriers:
       - id: "stable relationship scope id"
         selector: "one selector covering this relationship scope"
         expected_count: 1
         binds_row_groups: ["registered row group id"] # 각 row group은 정확히 한 aggregate carrier에만 결박
         final: { outcome_390: pass|unresolved, outcome_320: pass|unresolved, outcome_200pct: pass|unresolved }
     row_groups:
       - id: "stable row group id"
         selector: "one selector matching every instance in the group"
         role: target|identifier|evidence|state|control-label
         expected_count: 1
         longest_value: "longest actual state/template value in this group"
         atomic_parts: null|["ordered atomic child 1", "ordered atomic child 2"]
         line_contract: single-token|parent-one-line
         typography_contract: { source: deterministic-pre-edit-snapshot }
         required_fit_reserve_css_px: 8
         planned_fit_reserve_css_px: 16
         decision: full-row|stack|relocate|comparison-scroll|keep|unresolved
         scroll_contract: null|{ container_selector: "distinct relationship carrier selector", accessible_name: "non-empty name", keyboard_reachable: true, focus_visible: true, passive_text_scroll_container: false }
         final: { outcome_390: pass|unresolved, outcome_320: pass|unresolved, outcome_200pct: pass|unresolved, status: pass|unresolved, passive_text_scroll_container: false, measurements: [{ id: 390|320|200pct, observed_font_size_px: number, observed_line_height_px: number, observed_font_weight: string|number, inline_reserve_css_px: number }] }
     invariants: { same_row_count: true|false, same_decision_boundary: true|false, all_registered_carriers_closed: true|false, no_text_hack: true|false }
     browser_attempt: { attempts: 0|1, outcome: not-run|infrastructure-error|measured, mechanism: null|"browser-harness named consumer CDP attachment", connection: { transport: existing-cdp, connection_name: "$BU_NAME exact value", cdp_url: "$BU_CDP_URL/$BU_CDP_WS exact value when disclosed, otherwise null", attached_existing: true|false, launched_browser: false }, oracle: "character-range-line-tops", conditions: [{ id: "390", viewport_width: 390, zoom: 1, observed_document_zoom: 1, document_scroll_width: number, document_client_width: number, body_scroll_width: number, body_client_width: number }, { id: "320", viewport_width: 320, zoom: 1, observed_document_zoom: 1, document_scroll_width: number, document_client_width: number, body_scroll_width: number, body_client_width: number }, { id: "200pct", viewport_width: 640, zoom: 2, observed_document_zoom: 2, document_scroll_width: number, document_client_width: number, body_scroll_width: number, body_client_width: number }] }
     known_failure_closure: { state: open|closed|unresolved, unresolved: null|0|positive_integer }
     closure: { state: open|closed|unresolved }
     closure_manifest: "filled by finalize helper; includes group counts, expanded instance counts, quality_pass, and browser attempt"
   ```

   **Protected decision target inventory.** pre-edit source에 `data-bench-decision-role="target"` 같은 protected decision-target hook가 있으면 정확히 하나의 `role: target` row를 그 hook와 cardinality에 결박하고, row selector와 다른 target-only carrier 하나를 `plan-close` 전에 등록한다. 이 target을 생략하거나 evidence·state·action과 같은 carrier에 묶으면 inventory는 fail-closed다.

   1. **INVENTORY.** `row_groups`에는 one-line 계약이 있는 visible atomic identifier, 선택 target/source/artifact filename, short control label, 그리고 **측정 시작 state에서 non-empty로 보이는** dynamic state/status만 넣는다. decision·approval·handoff boundary 안에서 count/scope/quantity를 요약하는 **52자 이하의 concise evidence fact**가 desktop에서 하나의 scannable key로 쓰이면 `role: evidence` atomic row로 반드시 등록한다. 이는 장문 설명을 억지로 한 줄로 만드는 규칙이 아니다. 그 밖의 evidence 문장·일반 heading/body prose·현재 비어 있거나 hidden인 status는 row가 아니라 carrier 안의 보존 콘텐츠로 남긴다. **row selector 자체의 rendered text/value가 `longest_value`와 정확히 대응해야 한다.** 여러 unrelated descendant를 포함하는 card/container나 외부 label의 이름을 대신 적은 empty input을 row로 등록하지 않고, 그 atomic text를 직접 소유하는 가장 작은 stable selector를 사용한다. 같은 selector/role의 반복은 `expected_count`로 묶되 측정 시작 state에서 실제 렌더되는 값 중 가장 긴 값을 `longest_value`로 기록한다. 하나의 protected wrapper에 복수 exact token이 있으면 ordered `atomic_parts`와 `line_contract: parent-one-line`을 반드시 기록한다. 각 row는 그 row와 함께 폭을 소비하는 버튼·보조문구·padding·border·gap을 모두 포함한 **가장 작은 stable existing layout carrier** 하나에 정확히 결박한다. 반복 carrier는 하나의 group과 `expected_count`로 묶을 수 있지만 row를 누락하거나 여러 carrier에 중복 결박하면 inventory가 닫히지 않는다. `static_closure_manifest`에는 편집 전 product path, required/forbidden literal·pattern, hook cardinality를 선언한다. `OMD_REFLOW_MODE=plan sh <current-skill-dir>/scripts/reflow-browser-runner.sh`를 정확히 실행하면 runner가 artifact의 locked product path와 helper path를 직접 읽고 필요한 snapshot을 먼저 잠근다. 이 명령 앞에 `node`, helper path, `browser-harness`, redirect를 덧붙이거나 분해하지 않는다. 모델은 모든 row에 `typography_contract: { source: deterministic-pre-edit-snapshot }`을 쓰고 성공한 plan stdout의 row별 exact width budget, carrier별 aggregate width budget, `static_edit_guardrails`를 첫 edit payload의 양·부정 계약으로 사용한다.
   2. **FIT.** pre-edit plan runner가 기존 computed typography로 `longest_value`의 intrinsic nowrap width를 실측해 row의 required carrier inner width를 `intrinsic + 16px`로 잠근다. 동시에 registered carrier 전체를 max-content clone으로 실측해 버튼·인접 copy·padding·border·gap을 포함한 `intrinsic_outer_width_css_px`, chrome, gap, available document width와 `required_outer_width_css_px = intrinsic_outer + 16px`를 조건별로 잠근다. 또한 각 조건에서 bound carrier의 live content box를 읽되, fixed/min-width 때문에 이미 document 밖으로 넘친 폭을 가용 예산으로 승격하지 않는다. `available_carrier_inner_width_css_px`는 **`min(live content box, available document width - carrier horizontal chrome - horizontal margin)`**으로 잠가, containment 뒤 실제로 쓸 수 있는 carrier-local budget만 나타낸다. row의 16px budget만 green이어도 aggregate carrier가 available document width를 넘으면 계획은 red이며 첫 edit에서 full-row/stack/relocate가 필수다. 반대로 row의 intrinsic+16px가 이 contained carrier inner budget보다 크면 화면 전체가 넓어도 그 row는 현재 carrier에 물리적으로 들어가지 않는다. 이때 `stack`을 허용하지 않으며 `plan-close` 전에 named `comparison-scroll`과 접근 가능한 관계 carrier를 선언해야 한다. helper가 출력하는 `fit_strategy_feasibility`가 row별로 이 결정을 잠그며 `stack` 선언 뒤 local scroll을 구현하는 전략 불일치를 허용하지 않는다. 글자 수, raw overflowing content box, document width, 또는 padding 추정치로 carrier-local fit을 대체하거나 선언형 `planned_fit_reserve_css_px`만 적는 것은 계획이 아니다. final runner는 잠긴 snapshot과 편집 후 product를 동일 조건으로 렌더해 computed font size·line height·weight를 exact 비교한다. DESIGN.md type role과 target emphasis를 보존하고 더 작은 임의 type, 축약, `clamp()` 하한으로 맞추지 않는다. pass는 모든 조건에서 snapshot typography가 exact하고 comparison-scroll이 아닌 각 row에 최소 **8 CSS px의 측정된 inline reserve**가 남을 때만 가능하다. source-only 또는 경계에 딱 맞는 결과는 `unresolved`다. 첫 edit은 plan이 잠근 row·aggregate carrier 16px budget을 모두 만족하도록 `viewport → page inset → card padding → section inset → reading width → carrier full-row → carrier stack/relocate` 순서로 폭을 회수한다.
   3. **REFLOW.** 가장 좁은 조건에서 group의 longest atomic child와 padding/gap을 판단한다. fit하지 않으면 text를 깨지 말고 parent row를 `full-row`, 다음으로 `stack`한다. compound wrapper는 protected selector·accessible text·원문 순서를 유지하고 각 `atomic_parts`만 관측 가능한 child span으로 감싼다. **wrapper 자체에 one-line 계약이 있으면 `atomic_parts`는 separator wrap 허가가 아니다.** parts와 separator 전체를 한 atomic group으로 유지하고, fit하지 않으면 carrier를 full-row/stack/relocate해 폭을 회수한다. mobile cascade에서 desktop track·basis·min-width를 해제하고 필요한 child에 `min-width: 0`을 둔다. 그래도 물리적으로 안 맞고 shared header·legend가 의미 관계를 제공할 때만 row selector와 다른 **named 관계 carrier**를 `comparison-scroll`로 쓴다. decision target은 evidence·state·action을 포함하지 않는 target-only carrier여야 한다. 그 target이 `comparison-scroll`이면 **desktop을 포함한 모든 측정 조건에서 supporting evidence/state/action보다 먼저 놓이는 dedicated full-row relationship row**여야 하며, peer grid track 안에 남겨 target content나 scroll viewport가 action 영역과 겹치게 하지 않는다. full-row proof는 context의 border box가 아니라 **border를 제외한 실제 content box(`clientWidth - inline padding`)**와 carrier 폭을 비교해 1px border를 필요한 폭으로 오인하지 않는다. register처럼 여러 row가 하나의 비교 관계를 이루면 shared carrier를 쓸 수 있지만, 그 carrier가 묶는 row는 passive `identifier` 역할뿐이어야 하고 focusable action을 포함하면 안 된다. **comparison-scroll carrier 안의 protected passive row를 별도 nested registered carrier로 쪼개지 않는다.** 같은 scroller 안의 모든 protected passive row group을 그 outer relationship carrier 하나에 bind하고, helper가 pre-edit DOM에서 nested registered carrier를 발견하면 edit 전에 실패한다. carrier는 exact accessible name, `tabindex="0"`, visible `:focus-visible`을 갖고 `scroll_contract`에 기록한다. runner는 허용되지 않은 carrier overflow, comparison carrier 안의 focusable descendant, 초기 위치에서 잘린 focusable control을 실패 처리한다. protected target/identifier/state 같은 passive text 자체의 computed overflow가 `auto|scroll`이면 geometry가 맞아도 실패다. stack은 기존 carrier 자체를 relocate한다. `display:none` 뒤 generated content·`data-*`·aria-label·hook 없는 span 복제, passive text scroller, word-break, token 내부 break character, generated separator는 실패다.
   4. **PROVE.** 한 browser command 안에서 helper가 잠근 pre-edit source와 편집 후 product를 같은 consumer browser·같은 조건으로 렌더한 뒤 group selector의 **모든 matched instance**에 대해 computed type, character-range line tops, inline reserve, carrier overflow와 focusable clipping, cardinality, association을 세 조건에서 측정한다. 검증은 환경에 이미 주어진 exact `BU_NAME`의 browser-harness named socket으로 consumer Chrome에 attach해야 한다. controller는 raw `BU_CDP_URL`/`BU_CDP_WS`를 의도적으로 숨길 수 있으므로 endpoint 값은 attachment 전제조건이 아니며, 공개된 경우에만 exact metadata로 기록한다. browser-harness Python 안에서 `p.chromium.launch()`, 새 Playwright/Chromium/Chrome process, 다른 port 또는 독립 engine을 띄우는 fallback은 금지이며 attach 실패는 즉시 infrastructure `unresolved`다. 각 condition마다 viewport를 설정하고 pre-edit snapshot과 product에 동일하게 `document.documentElement.style.zoom = String(zoom)`을 적용한다. 특히 `200pct`는 `{viewport_width: 640, zoom: 2}`이며 computed document zoom이 실제 `2`인지 읽어 `observed_document_zoom`에 기록한다. 매 condition의 document/body `scrollWidth`와 `clientWidth`를 모두 기록하고 어느 하나라도 overflow면 pass가 아니다. 640px만 열고 zoom을 생략한 결과는 200% proof가 아니다. 각 visible text node의 공백이 아닌 문자마다 `Range`를 만들고 top 좌표의 고유 개수를 세며, `element.getClientRects().length`는 line-count proof로 사용하지 않는다. `line_contract: parent-one-line`은 child별 line 수가 아니라 **parent selector 전체의 non-space character top 고유값이 정확히 1**이어야 한다. 하나라도 실패하거나 count가 `expected_count`와 다르면 그 group은 pass가 아니다. 같은 browser command가 실제 결과와 pre-edit snapshot sha256, exact connection identity, `launched_browser: false`, `browser_attempt.oracle: character-range-line-tops`, 세 condition의 observed zoom/page widths를 artifact에 쓰고 `finalize`까지 실행한다. helper가 runtime env와 exact named connection·snapshot typography·fit reserve·page overflow를 대조한다. helper가 closure state에서 `OMD_DELIVERY_READY` 또는 `OMD_DELIVERY_UNRESOLVED`를 자동 출력하며 이 stdout이 terminal closure다. 반환 뒤 artifact `rg`/`sed`/`cat`이나 별도 finalize를 실행하지 않는다. 대표 instance, 다른 browser의 결과, page overflow 0만, element rectangle, screenshot 육안, source 추정은 group proof가 아니다. helper가 만든 manifest의 expanded `registered_carriers/registered_rows`가 시작 count와 다르거나 미계측 instance가 있으면 성공을 말하지 않는다.

   quality closure는 `same_row_count: true`, `same_decision_boundary: true`, `all_registered_carriers_closed: true`, `no_text_hack: true`, `unresolved_rows: 0`, `unresolved_carriers: 0`, `page_overflow: 0`, `quality_pass: true`, `known_failure_closure: { state: closed, unresolved: 0 }`일 때만 통과한다. `finalize-unresolved`는 실제 browser infrastructure attempt가 기록된 경우에만 accounting을 `closure.state: unresolved`로 잠그며 quality closure나 구현 완료를 통과시키지 않는다.
 2f. **`proof execution close latch`로 끝난 증명을 다시 열지 않는다.** 품질 gate는 유지하고 아래 state를 같은 consumer route의 acceptance까지 유지한다. `word-break: normal`도 generic forbidden pattern을 피하는 대체값이 아니다.

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

   - pre-edit 한 번에 token·hook/cardinality·state source·responsive risk·reflow rows와 정확한 edit 위치를 inventory하고 `source_inspection_complete: true`로 둔다. `snapshot` 뒤 pre-edit fit-plan browser 1회를 실행해 measured plan과 `inventory: closed`를 잠근다. **첫 product edit 뒤에는 그 edit이 마지막인지 확신이 없어도** 제품 source를 다시 읽지 않는다.
   - 먼저 완성될 product bytes 전체를 `.omd/product-candidate.html`에 작성한다. 부분 CSS 조각이나 patch 설명이 아니라 기존 기능·hook·facts와 intended HTML/CSS를 전부 포함한 파일이어야 한다. locked product가 pre-edit hash 그대로인 동안 `static-preview .omd/reflow-closure.json .omd/product-candidate.html`을 실행하고, red면 candidate만 고친다. preview는 artifact의 attempts/state를 쓰지 않고 제품도 바꾸지 않으므로 candidate 단계에서 반복할 수 있다. preview pass 뒤 candidate를 다시 읽거나 product용 patch로 재구성하지 않는다. `static-promote .omd/reflow-closure.json .omd/product-candidate.html`을 정확히 한 번 실행해 receipt와 동일한 bytes를 제품에 복사하고 `revision`을 1 올린다. product promotion 뒤 첫 shell command는 `node <current-skill-dir>/scripts/reflow-artifact.mjs static-close .omd/reflow-closure.json` 한 번뿐이다. helper는 manifest에 잠긴 `product_path`를 사용하므로 경로 인자를 다시 쓰지 않는다. 이 결정론 helper가 preview와 같은 manifest 검사로 제품 파일을 닫으며 candidate hash와 제품 bytes를 임의로 다시 해석하거나 축약하지 않는다. 정상 경로에서는 helper-issued measured plan closure가, prepared sealed 경로와 navigation 전 browser infrastructure failure 경로에서는 product edit 전 helper-issued `source_fallback_closure.state: opened`가 있어야 한다. 둘 다 없거나 artifact 계약을 바꾸면 종료는 red다. `source-packet` 또는 `source-fallback-open` stdout에 `static_edit_guardrails.source_fallback_patch_contract`가 있으면 그 짧은 HTML/CSS packet의 `canonical_css_source`와 `canonical_acceptance_css_source`를 candidate에 먼저 적용한다. 이어 `first_edit_checklist`의 모든 양·부정 계약을 candidate에서 충족하고 preview pass를 받은 뒤에만 product edit으로 넘어간다. 양수 고정폭처럼 값의 의미가 중요한 CSS 금지는 `forbidden_css_declarations`의 `{ selector, property, value_contract: positive-length }`를 써서 `min-width:0` 같은 안전한 containment reset과 구분한다. property 자체가 금지라면 `value_contract: any-declaration`을 쓴다. 일반 `forbidden_patterns`가 CSS property를 가리키면 그 선언은 완전히 삭제하며 `normal`, `initial`, `unset`, `revert`, `inherit` 같은 중립값으로 바꾸지도 않는다. model이 post-edit `node - <<`, inline JS, `rg`/`sed`/`awk`/`wc`, 임시 verifier 또는 ad-hoc regex static check를 작성하거나 실행하지 않는다. `static-close`가 red면 exactly-once static budget이 소비된다. 그 뒤 제품을 다시 수정하거나 helper를 고쳐서 다시 실행하지 않고 이번 run을 `proof noncompliant`로 전달한다.
   - static closure가 닫힌 뒤 준비된 browser mechanism 한 번으로 390px·320px·200%와 states를 같은 session에서 수집한다. 성공이면 `closed`, attach/실행 infrastructure error면 `unresolved`로 잠근다. 둘 다 현재 revision과 mechanism을 기록한다. 그 뒤 `--doctor`, `--help`, executable/process/port discovery, 직접 Chrome launch, 다른 browser/port/runtime, 설치·권한 변경이나 두 번째 browser command를 시작하면 `browser_recovery` 위반이다.
   - **준비된 mechanism은 같은 shipped runner를 exact named consumer connection에서 pre-edit plan 1회와 post-edit acceptance 1회 실행하는 두 단계다.** plan command는 `OMD_REFLOW_MODE=plan sh <current-skill-dir>/scripts/reflow-browser-runner.sh`, post-edit command는 `sh <current-skill-dir>/scripts/reflow-browser-runner.sh`다. runner가 artifact의 locked product와 sibling helper/Python source를 스스로 결박하므로 환경변수·redirect를 재조립하지 않는다. 특히 `node <helper> browser-harness`, executable discovery, runner를 열어 다시 쓴 inline command는 금지다. plan은 snapshot/lock을 먼저 원자적으로 완료하고 row intrinsic width와 aggregate carrier outer width에 각각 +16px budget을 잠근 뒤 종료한다. `OMD_PLAN_NOT_ATTEMPTED`는 navigation 전 validation이라 plan browser 1회에 포함하지 않으며, artifact만 교정해 exact command를 다시 실행한다. 측정 뒤 semantic close만 실패하면 `OMD_PLAN_MEASURED_RECONCILE_REQUIRED`가 측정값을 보존하고 정확한 `plan-packet` 명령을 제공한다. packet은 모든 row/carrier 충돌과 complete patch를 한 번에 잠그며 artifact/diagnosis hash가 달라지면 fail-close한다. null accessible name만 명시적으로 채운 뒤 `plan-apply` 한 번으로 patch와 closure를 함께 적용하며, 이때 browser 재실행과 product edit은 금지된다. navigation 전 infrastructure error일 때만 위 `source-fallback-open`이 pending plan과 pre-edit source를 잠그며, 이 stamp도 없으면 `static-close`가 거부된다. 정상 measured 경로에서는 helper가 찍은 plan closure stamp와 불변 measured-plan hash가 계속 필수다. 둘 다 exact `BU_NAME`에 attach하며 새 browser나 fallback을 만들지 않는다.
   - **검증 예산은 `pre-edit fit-plan browser 1회 + pre-edit candidate static-preview(제품/계약 비변경) + task 전체 deterministic static-close helper 1회 + post-edit acceptance browser 1회`다.** candidate preview는 locked product가 unchanged인 동안만 허용되며 artifact의 closure attempt를 소비하지 않는다. plan browser는 제품 edit 전에만 실행한다. 편집 뒤에는 `static-close` 한 번과 post-edit acceptance browser 한 번만 실행하며, 결과가 red여도 제품을 다시 고치지 않고 unresolved를 전달한다.
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
