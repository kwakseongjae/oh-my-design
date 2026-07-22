# OmD Workflow Contract v1

OmD의 경쟁력은 역할 수가 아니라, 디자인 판단이 실제 제품 변경과 검증까지 끊기지 않는 데서 나온다. 모든 UI 작업은 아래 계약을 공유한다.

## 1. Smallest capable workflow

- 기존 화면 변경은 `omd:apply`가 소유한다.
- 코드 변경 없는 진단은 감사 스킬이 소유한다.
- 새 surface를 처음부터 설계할 때만 `omd:harness`를 사용한다.
- DESIGN.md 구축은 `omd:init`, 다국어 adaptation은 `omd:orchestrator`가 소유한다.
- 사용자는 스킬 이름을 외울 필요가 없다. 자연어 의도를 우선하고, `omd workflows [task]`는 설명·진단용 보조면이다.

## 2. One implementation owner

전문 에이전트는 증거와 판단을 제공한다. 동시에 여러 역할이 제품 파일을 수정하지 않는다.

- `audit`: 구현 책임자 없음. 변경하지 않는다.
- `implement`: 현재 main agent가 제품 파일 수정과 검증을 소유한다.
- `create`: omd-master가 run artifact를 소유하고, checkpoint #3 뒤 main agent가 승인된 결과의 제품 통합을 소유한다.
- critic/reviewer는 언제나 read-only다.

## 3. Work packet

복합 작업은 파일 또는 인라인 객체로 다음 필드를 유지한다.

```yaml
intent: audit | implement | create | publish
task: <user outcome>
consumer_route: <the route the user actually uses>
acceptance:
  - <observable outcome>
protected_behaviors:
  - <must not regress>
protected_contract:
  cardinality:
    - <behavior-bearing control/row/form/disclosure count and allowed delta>
  state_transitions:
    - <before → action → after>
  facts:
    - <copy, value, hook, or field name that must remain true>
evidence:
  - <DESIGN.md, screenshot, code, browser observation>
unknowns:
  - <unresolved fact; never replace with a plausible fallback>
implementation_owner: main-agent | none | main-agent-after-checkpoint-3
verification:
  routes: []
  viewports: []
  states: []
  commands: []
```

전문 역할은 `finding`, `evidence`, `smallest_useful_change`, `acceptance_check`, `unresolved`만 반환한다. 자문 결과가 곧 구현 완료를 의미하지 않는다.

## 4. Same-surface reverify

검증은 최초 사용 경로와 같은 consumer route에서 수행한다. 공유 renderer나 진단용 route만 확인해서는 통과하지 않는다.

1. 변경 전 route·viewport·state를 기록한다.
2. 제품 파일만 수정한다.
3. 같은 route·viewport·state를 다시 연다.
4. 동작, 시각 계약, 접근성, overflow를 확인한다.
5. 실행하지 못한 검증은 통과로 표시하지 않고 unresolved로 남긴다.

기존 UI 개선은 첫 편집 전에 behavior-bearing element의 identity·개수·state를 잠근다. 요청에 없는 hook 복제나 상태 확장은 회귀다. 최종 검증은 같은 route에서 contrast, 320px reflow, 200% zoom, focusable control의 clip/overlap까지 포함한다.

## 5. Release progression

- 1.9.1: capability graph, work packet, route helper, exact-route verification 계약
- 1.9.2: task contract calibration
- 1.9.3: fast-first-result calibration — first write/time은 개선됐지만 resolved lift 0pp
- 1.9.4: protected contract + contrast/reflow inspection loop
- 1.10.x: 실패 유형별 recovery와 자동 증거 패키지
- 2.0.0: 대표 task family에서 frontier 후보 대비 우위 또는 통계적 동률, 동시에 실제 작업의 end-to-end delivery 계약 통과
