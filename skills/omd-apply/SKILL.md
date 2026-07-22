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
    stop_optional_verification: 80%
    begin_final_delivery: 90%
```

설치된 채널 data root에 `workflow-capabilities.json`이 있으면 선언된 workflow와 필드명을 사용한다. 파일이 없어도 위 계약으로 계속하며 설치를 강요하지 않는다.

specialist handoff에는 전체 대화 대신 이 packet과 필요한 파일·스크린샷만 전달한다. 기존 UI repair의 specialist는 기본적으로 `mode: bounded-repair-advisory`를 사용하고 **요청된 위험 영역 1-2개, finding 최대 5개, 약 600단어**로 제한한다. 전 섹션 audit, 8/10항목 전수평가, A/B 옵션, 추가 아이디어 발산은 별도 full audit 요청에서만 한다. specialist 응답은 다음 shape로 제한한다.

```yaml
finding: <무엇이 문제인가>
evidence: <route·line·DOM·screenshot 근거>
smallest_useful_change: <최소 유효 수정>
acceptance_check: <어떻게 통과를 확인할지>
unresolved: [<확인 불가 항목>]
```

서로 다른 specialist가 같은 제품 파일을 동시에 수정하지 않는다. `implementation_owner: main-agent`만 자문을 합치고 코드를 편집한다.
specialist는 protected ledger를 수정·완화할 권한이 없다. handoff는 `current_count`, `allowed_delta`, `states`, `facts`, `change_authority`를 그대로 복사해야 하며, 이를 벗어난 제안은 implementation 후보가 아니라 `rejected_contract_drift`로 폐기한다.

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

1. **첫 편집 전 protected ledger를 만든다.** 기존 DOM·코드·요청에서 동작을 가진 control, form, disclosure, row/list, 상태 출력의 identity와 개수를 기록한다. 각 항목은 `current_count`, `allowed_delta`, `states`, `facts`를 가진다. 사용자가 원 요청에서 추가·삭제를 명시하지 않았다면 언제나 `allowed_delta: 0`이다. agent, specialist, DESIGN.md, 미적 아이디어, “production-ready” 같은 품질 표현은 변경 권한이 아니다. 부모가 handoff를 만들 때도 이 값을 완화할 수 없다.
2. **탐색 종료 조건을 둔다.** DESIGN.md, consumer route, protected ledger, 최소 acceptance를 확인했다면 optional research나 미적 아이디어 수집을 더 하지 않고 가장 작은 end-to-end 편집을 시작한다. specialist 자문이 꼭 필요한 위험을 해결하지 않는 한 첫 편집을 막지 않는다. specialist를 호출해도 전체 페이지 감사를 요청하지 않고, 이미 확인한 위험 질문 1-2개만 `bounded-repair-advisory`로 보낸다.
3. **delivery clock을 먼저 잠근다.** 런타임이나 작업 packet에 timeout이 있으면 첫 제품 편집을 총 예산의 50% 전, 선택 검증 종료를 80% 전, 최종 전달 시작을 90% 전으로 둔다. 필수 specialist가 있으면 결과가 도착한 직후 별도의 2차 분석 pass 없이 편집한다. timeout을 알 수 없어도 ledger와 필수 자문이 준비된 뒤 optional 탐색을 한 번 더 돌리지 않는다. deadline을 놓치면 기능을 더 추가하지 않고 가장 작은 완성 diff와 정직한 `unresolved` 전달을 우선한다.
4. **장식을 위해 제품 hook을 복제하지 않는다.** 가격 비교, 요약 카드, 모바일 사본처럼 같은 값을 다시 보여줘야 해도 기존 behavior hook·form field·live region·ID를 복제하지 않는다. 새 hook이나 상태를 추가하려면 요청 또는 제품 계약의 근거가 있어야 한다.
5. **최종 acceptance packet을 한 번 실행한다.** 같은 route에서 다음을 묶어 확인하고, 고칠 수 없는 항목은 `unresolved`로 전달한다.
   - protected ledger의 identity·개수·before/action/after가 변경 전 계약과 일치
   - 일반 텍스트 contrast 4.5:1, 큰 텍스트와 비텍스트 경계·focus 3:1. accent token이라는 이유만으로 작은 텍스트 색으로 쓰지 않음
   - desktop, 390px, 320px, 200% zoom/reflow 또는 제품이 지원하는 가장 가까운 동등 조건에서 horizontal overflow·clipped control·control overlap 없음
   - focusable skip/navigation control을 큰 음수 좌표에 방치하지 않으며, keyboard focus 시 viewport 안에서 보이고 다른 control과 겹치지 않음
6. 브라우저나 contrast 계산기가 없으면 통과를 추정하지 않는다. 가능한 정적 검사와 같은-route 상태 검증을 수행하고 나머지는 `unresolved`로 남긴다.

이 packet은 benchmark selector를 맞추는 절차가 아니다. 실제 제품에서 사용자 동작과 접근성·reflow 계약을 보존하기 위한 일반 acceptance layer다.

## Phase 2.5 — Bounded verification + guaranteed delivery

검증은 결과 전달을 막지 않는 범위에서 fail-closed로 수행한다.

1. work packet의 protected ledger와 acceptance packet을 **필수 검증**으로 두고, acceptance를 증명하는 최소 명령·route와 **선택 검증**(추가 screenshot, 보조 브라우저, 중복 lint)을 분리한다.
2. 가장 결정론적이고 값싼 검증부터 실행한다. 이미 같은 계약을 증명한 검증을 “더 확실하게” 만들기 위해 반복하지 않는다.
3. sandbox permission, quota, browser attach, missing executable/dependency 같은 **infrastructure error**는 제품 결함과 분리한다. verification mechanism은 종류별로 한 번만 시도한다. 실패 원인을 읽는 보정 명령은 제품을 다시 실행하지 않는 범위에서 한 번만 허용하고, 같은 browser/runtime mechanism을 변형해 재시도하지 않는다.
4. 네트워크 다운로드·새 도구 설치·권한 완화·sandbox 해제는 사용자가 요청하거나 work packet에 사전 승인된 경우가 아니면 검증 우회책으로 사용하지 않는다.
5. browser/DOM/runtime을 흉내 내는 새 shim, mock browser, replacement verifier를 검증 우회책으로 작성하지 않는다. 저장소에 이미 있는 테스트·검증기·정적 검사만 사용하고, 없는 증명은 `unresolved`로 남긴다. 사용자가 테스트 인프라 구현 자체를 요청한 경우만 예외다.
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
