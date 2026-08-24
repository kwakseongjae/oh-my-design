# DESIGN.md의 정수 판정 — 2026-08-22

## 판정 범위와 읽는 법

이 문서는 T1-1 정본 `docs/design-md-weight/2026-08-22-survey.md`의 440개 legacy 문서를 Core v2의 **Portable Core MUST 필드/그룹**에 대조한다. 판정 입자는 legacy §1–§15가 아니라 Core 필드다. 따라서 §1·§4·§6·§11 전체를 정수라고 한 종전 판정은 철회한다.

여기서 **정수**는 “이 필드가 없으면 Portable Core가 성립하지 않거나, standalone `DESIGN.md`가 그 MUST 의미를 수행할 수 없다”는 뜻이다. 섹션의 보급률·플레이스홀더율·바이트 무게는 이 판정의 근거로 쓰지 않는다. 구조상 440개 모두 legacy이고 Core v2 일치 파일은 0개이므로, 아래 경로는 즉시 존재하는 카탈로그 저장 위치가 아니라 **검토를 거친 migration destination**이다.

## 1. Portable Core MUST 필드/그룹 판정

| Portable Core 필드/그룹 | 판정 | 없으면 불가능해지는 것 | legacy 원천과 처리 |
|---|---|---|---|
| `identity.scope` + Experience의 `scope` claim | **정수** | 소비자가 어떤 제품/표면에 계약을 적용할지 식별할 수 없다. | §1·§11에서 근거 있는 제품/표면 범위만 `experience.summary`에 투영한다. 분위기 에세이와 범위에 기여하지 않는 장기 연혁은 정수가 아니다. |
| `experience.primary_tasks[]` + `primary-tasks` claim | **정수** | 최소 한 개의 일차 사용자 결과를 식별할 수 없어 Portable Core acceptance를 통과하지 못한다. | §1과 §13에서 검증된 task만 옮긴다. 가상 biography는 버린다. |
| `foundations.tokens` 또는 `foundations.rules` 중 알려진 실행 값/규칙이나 명시적 제약 최소 1개 + `foundations` claim | **정수 그룹** | 알려진 foundation을 렌더하거나, 미확인 값을 발명하지 못하게 제약할 수 없다. | §2·§5·§6·§8·§15 등에서 **검증된** 값/규칙만 가장 작은 필드 단위로 옮긴다. 어느 legacy 섹션도 그 전체가 정수는 아니다. §3의 typography는 별도 `typography_assets` 계약이며 이 최소 foundation claim을 대신하지 않는다. |
| `identity.kind` + Governance의 `authority` claim | **정수** | 문서가 프로젝트 시스템인지, 근거 기반 재구성인지, portable brief인지 판단할 수 없다. | §7·§9의 권위 문장과 실제 reference 성격을 대조해 하나를 선언한다. 도구 사용법은 권위 필드가 아니다. |
| `governance.priority[]` + `application-priority` claim | **정수** | 사용자 지시·저장소 사실·시스템 계약·reference inspiration이 충돌할 때 적용 순서를 결정할 수 없다. | §7·§9의 보편 적용 우선순위만 남긴다. 브랜드별 금지/적용 규칙은 의미에 따라 `experience.avoid[]`, `experience.principles[]` 또는 foundation rule로 보존한다. |
| `governance.unknown_policy` = `absent-at-smallest-unresolved-boundary` + `unknowns` claim | **정수** | 미확인 값을 그럴듯한 기본값으로 채우는 것을 막을 수 없다. | §7·§9의 unknown 규칙을 정규화한다. placeholder 자체는 옮기지 않는다. |
| `governance.change_policy[]` + `changes` claim | **정수** | 확장·예외·변경을 어떤 검토 절차로 채택할지 결정할 수 없다. | §7·§9의 보편 변경 규칙만 남긴다. 도구별 실행 절차는 버린다. |

Core v2의 일곱 안정 섹션 컨테이너는 Structural Core 형식상 필요하지만, 내부 필드는 대부분 optional이다. Typography & Assets, Components & States, Layout & Platforms, Content & Locales의 검증된 계약은 standalone 유용성과 해당 기능 구현에 중요하고 선언했다면 보존해야 한다. 그러나 그것이 곧 legacy §3·§4·§5·§8·§10·§14 전체를 Portable Core **최소 정수**로 만든다는 뜻은 아니다.

### legacy 섹션 판정 철회와 필드별 처리

| legacy 섹션 | 개정 판정 | Core v2 처리 |
|---|---|---|
| §1 Visual Theme & Atmosphere | **섹션 정수 철회** | 범위는 `identity.scope`/`experience.summary`, primary task는 `experience.primary_tasks[]`; 검증된 방향·원칙·금지는 Experience의 선택 필드. 나머지 분위기 반복은 버린다. |
| §2 Color Palette & Roles | **섹션 정수 철회** | 검증된 semantic role/value/rule만 `foundations.tokens`/`foundations.rules`. |
| §3 Typography Rules | **섹션 정수 철회** | 검증된 역할·메트릭·가용성만 `typography_assets.roles[]`/`rules[]`; 미확인 family 대체 금지. |
| §4 Component Stylings | **섹션 정수 철회** | 선언할 컴포넌트의 anatomy·variant·semantics·states만 Components & States 본문에 남긴다. exhaustive matrix는 그래프가 실제로 생긴 뒤 `components_states.components[]`에 둘 수 있다. |
| §5 Layout Principles | **섹션 정수 철회** | 검증된 task priority·reflow·overflow·platform rule만 Layout & Platforms에 남긴다. |
| §6 Depth & Elevation | **섹션 정수 철회** | 검증된 elevation 값/규칙 또는 flat/border 제약만 `foundations.tokens`/`rules`; 별도 장문 섹션은 필요 없다. |
| §7 Do's and Don'ts | **섹션 정수 철회** | scope/design 결정은 Experience, 보편 priority·unknown·change 규칙은 Governance로 분해한다. |
| §8 Responsive Behavior | **섹션 정수 철회** | 검증된 minimum width·reflow·touch·reading order·overflow만 Layout & Platforms에 남긴다. |
| §9 Agent Prompt Guide | **분해 후 일부 보존·나머지 삭제** | 보편 authority·priority·unknown·change 규칙은 Governance에 남긴다. 근거 있는 브랜드 제약은 의미에 맞는 Experience/Foundation 필드에 남긴다. 도구별 명령, 프롬프트 포장, 작업 절차, 같은 규칙의 도구별 재진술과 예시는 **삭제한다**. 받을 슬롯이 없는 `omd-apply`/adapter로 위임하지 않는다. |
| §10 Voice & Tone | **섹션 정수 철회** | 검증된 voice·terminology·label·error/recovery·locale behavior만 Content & Locales에 남긴다. |
| §11 Brand Narrative | **섹션 정수 철회** | 현재 제품/표면 범위를 이해시키는 근거 있는 요약은 `experience.summary`. 근거 있는 서사 깊이·현재 evolution은 reference narrative로 보존할 수 있지만 조건부 맥락이지 Portable Core MUST 필드는 아니다. 출처 원장·freshness는 migration provenance로 분리하고, 현재 계약 해석에 기여하지 않는 연표식 나열만 버린다. |
| §12 Principles | **섹션 정수 철회** | 검증된 결정 원칙/avoidance만 `experience.principles[]`/`avoid[]`; 일반론은 버린다. |
| §13 Personas | **의심** | 검증된 audience/task만 Experience에 흡수하고 가상 biography는 버린다. |
| §14 States | **migration 전 본문 보존** | 현재 카탈로그는 Core v2 그래프가 0개이므로 지금 삭제·그래프 위임하지 않는다. migration 전까지 같은 `DESIGN.md`의 상태 내용으로 보존하고, Core projection의 Components & States에서 컴포넌트별 applicability로 재작성한다. 그래프 채택 후 정확한 경로는 `components_states.components[].interaction.state_applicability`다. |
| §15 Motion & Easing | **커브만 의심** | 검증된 motion 값/규칙과 reduced-motion은 Foundations에 남긴다. 삭제 대상은 아래 「반박 반영」절에서 확정한 무출처 커브뿐이다. |

## T1-1 수치 — 판정과 분리한 참고

아래 값은 migration 규모·감사 우선순위를 보여주는 참고치다. **정수 여부의 증거도, 삭제 임계값도 아니다.** 특히 종전의 “정수 60.41%”는 legacy 라벨의 바이트 합일 뿐 Portable Core MUST 질량이 아니므로 폐기한다.

| legacy 섹션 | 합계 바이트 / 전체 무게 | 있음 | 플레이스홀더 |
|---|---:|---:|---:|
| §1 | 1,012,491B / 8.58% | 440/440 | 0/440 |
| §2 | 705,682B / 5.98% | 440/440 | 0/440 |
| §3 | 814,773B / 6.91% | 440/440 | 0/440 |
| §4 | 1,183,866B / 10.04% | 440/440 | 0/440 |
| §5 | 444,613B / 3.77% | 440/440 | 0/440 |
| §6 | 327,347B / 2.78% | 440/440 | 0/440 |
| §7 | 503,419B / 4.27% | 440/440 | 0/440 |
| §8 | 367,977B / 3.12% | 440/440 | 2/440 |
| §9 | 652,089B / 5.53% | 440/440 | 0/440 |
| §10 | 641,226B / 5.44% | 440/440 | 2/440 |
| §11 | 650,960B / 5.52% | 440/440 | 1/440 |
| §12 | 471,379B / 4.00% | 440/440 | 2/440 |
| §13 | 434,544B / 3.68% | 440/440 | 26/440 |
| §14 | 511,759B / 4.34% | 439/440 | 14/440 |
| §15 | 982,162B / 8.33% | 439/440 | 21/440 |

일반 완전일치 반복 105/20,685(0.51%)와 반복 incidence 바이트 21,217/8,866,668(0.24%)도 참고치일 뿐 특정 필드의 고유성 증거가 아니다. 다만 §15의 두 커브 218/440(49.5%), 168/440(38.2%)은 **값 단위 출처 감사의 후보군**을 특정하므로, 정수 판정이 아니라 무출처 커브 교정 범위에만 사용한다.

## 2. 이징 보일러플레이트 처리 권고

**권고: 선택지 1 — 출처 없는 값은 삭제한다.** 단, §15 전체나 같은 문자열의 모든 등장분을 일괄 삭제한다는 뜻은 아니다. 가장 작은 값 경계에서 출처가 없는 curve·duration·signature-motion 주장만 제거하고, 공식 토큰이나 라이브 코드로 입증된 값은 보존한다.

근거는 다음과 같다.

1. 일반 완전일치 중복은 0.24% bytes에 불과하지만, `cubic-bezier(0.4, 0.0, 1, 1)`은 49.5%, 다른 대표 커브는 38.2%에 등장한다. 문구만 달라 해시를 피한 반복이므로 일반 중복률을 신뢰 근거로 쓸 수 없다.
2. nintendo·workday·barogo의 세 토큰·세 커브는 같지만 출처가 없고, nintendo의 Tier-1 주석은 색·타입·radius·shadow만 열거한다. 같은 코퍼스에는 `illustrative` 마커 234파일, `inferred` 마커 120파일이 있어 불확실성을 표시할 관행도 이미 있다.
3. 공유 기본값으로 재표시하는 선택지 2는 값의 정체를 정직하게 만들 수는 있어도, DESIGN.md가 브랜드·제품 계약이라는 경계를 흐린다. 필요하면 구현 adapter의 기본값일 수 있으나 브랜드 DESIGN.md의 토큰은 아니다.
4. 선택지 3은 가장 정확할 가능성이 있지만 440개 전수 재관찰이 필요하고, 모션은 정적 DOM·computed style 한 번으로 enter/exit 의도와 실제 curve를 안정적으로 입증하기 어렵다. 현재 단계에서 미확인 값을 계속 보존할 이유가 되지 못한다.

### 비용

- **일회성 비용:** 후보군은 해당 커브가 등장한 218/440 및 168/440 파일이다. 두 집합은 겹칠 수 있으므로 단순 합산하지 말고, 각 값의 provenance를 확인해 **미입증 필드만** 제거해야 한다. 이어 §15 플레이스홀더 21/440도 같은 unknown-absence 검사를 받아야 한다.
- **보존 비용:** 공식 문서나 라이브 코드로 확인된 모션은 삭제 대상이 아니므로 증거 연결을 확인해야 한다. 예를 들어 샘플의 KRDS처럼 실제 transition token을 명시한 경우와, rayark·toss·musinsa처럼 정확한 값을 승격하지 않은 경우를 구분해야 한다.
- **후속 비용:** 삭제 후 소비자가 임의 easing을 다시 브랜드 값으로 쓰지 않는지 검사해야 한다. 구현체가 자체 기본값을 쓰면 그것은 local implementation default로 남아야 하며 DESIGN.md로 역승격되면 안 된다.
- **선택지 대비:** 선택지 2는 문구 수정 비용은 가장 낮지만 브랜드 계약 오염을 계속 관리해야 하고, 선택지 3은 440개 라이브 모션 캡처·상태 재현·reduced-motion 확인 비용이 가장 크다. 선택지 1은 증거 감사가 필요하지만 unknown 정책과 장기 유지비가 가장 일치한다.

## 3. §9와 §14의 실제 착지

| 대상 | 지금 남길 것 | 지금 버릴 것 | graph 채택 뒤 구조화 경로 |
|---|---|---|---|
| §9 Agent Prompt Guide | standalone 문서에 필요한 authority·application priority·unknown-absence·change 규칙. 근거 있는 브랜드별 원칙/금지는 의미에 맞는 Experience 또는 Foundations에 보존 | 도구별 명령, 복붙용 프롬프트, 도구별 workflow, 보편 규칙의 반복 예시. 이는 이동이 아니라 **삭제**다 | `identity.kind`, `governance.priority`, `governance.unknown_policy`, `governance.change_policy`; 브랜드별 규칙은 `experience.principles[]`, `experience.avoid[]` 또는 `foundations.rules[]` |
| §14 States | 카탈로그에 graph가 생기기 전에는 상태 계약을 같은 `DESIGN.md` 안에 보존한다. Core migration 시 Components & States 본문에서 선언된 컴포넌트별 default·hover·focus-visible·disabled·loading·error·success의 적용/비적용과 이유를 표현한다 | 근거 없이 모든 컴포넌트에 일괄 부여한 상태와 placeholder | `components_states.components[].states` 및 **`components_states.components[].interaction.state_applicability`** |

T1-1에서 Core v2 일치가 0/440이므로 “지금 `.omd/system/graph.json`으로 보낸다”는 실행 지시는 금지한다. 카탈로그 migration은 legacy 본문을 입력으로 보존한 채 canary와 loss report를 거쳐야 하며, graph가 채택되기 전 §14 삭제는 위임이 아니라 유실이다. 상태별 provenance·코드·테스트 연결은 graph가 실제로 생성되고 채택된 뒤에만 추가할 수 있다.

## 결론

DESIGN.md의 최소 정수는 제품/표면 범위, 일차 과업 1개 이상, 실행 가능한 foundation 값·규칙 또는 발명 방지 제약 1개 이상, 그리고 authority·priority·unknown·change의 governance 계약이다. 이는 legacy 섹션의 무게나 완비율로 정해지지 않는다. §9의 도구별 사용법은 받을 곳 없는 위임으로 가장하지 않고 삭제한다. §14 상태 계약은 0/440 graph 상태에서는 본문에 보존하고, migration이 실제로 graph를 채택한 뒤에만 정확한 컴포넌트별 경로로 구조화한다. §13의 가상 persona와 §15의 무출처 커브는 권위를 얻지 못하므로 가장 작은 경계에서 제외한다.

---

## 반박 반영 (grok-4.6, 2026-08-22) — 근본 원인 확인

판정: **REVISE**. 원문 `docs/reviews/t1-2-essence-2026-08-22-rebuttal.md`.

### 이징 보일러플레이트에는 출처가 있다 — 실측 확인

반박이 지적한 재주입 경로를 직접 확인했다.

```
spec/omd-v0.1.md:262
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — slow start, accelerate out |
```

**218/440(49.5%)에 퍼진 바로 그 값이 규격 템플릿의 예시 표에 있다.** 즉 이 중복은
440명이 각자 같은 값을 지어낸 결과가 아니라, **템플릿의 예시가 관찰인 것처럼 복사되어
들어간 결과**다. 판정을 이 사실에 맞춰 좁힌다.

| 재주입 경로 | 위치 | 성격 |
|---|---|---|
| legacy 규격 템플릿 | `spec/omd-v0.1.md:261-264` | **원인.** 예시 표가 브랜드 토큰처럼 복사됨 |
| playground 규칙 | `web/src/lib/playground/rules/motion.ts:36-50` | 같은 계열 커브를 규칙으로 보유 |
| `omd-feel` 참조 | `skills/omd-feel/reference.md:43-48` | **출처 표기 있음**(M3·Carbon 등, 등급 🟢/🟡). 이건 규칙 참조이지 브랜드 주장이 아니다. 다만 브랜드 토큰으로 **역승격되는 구멍**은 경계 대상 |

### 개정된 이징 권고

**선택지 1을 유지하되 범위를 좁힌다.**

1. 삭제 대상은 **무출처 커브**에 한정한다. duration과 signature motion까지 함께 지우는
   원안은 T1-1 수치가 지지하지 않는다(duration은 브랜드마다 다르다).
2. **카탈로그와 라이터를 같이 고친다.** `spec/omd-v0.1.md`의 예시 표를 그대로 두면
   다음 작성분이 같은 값을 재적재한다. 카탈로그만 지우는 조치는 무효다.
3. `omd-feel`의 DS 커브는 삭제 대상이 아니다. 출처가 있고 규칙 층에 있다. 다만
   브랜드 토큰으로 승격되지 않도록 경계를 명시한다.

### 아직 반영하지 못한 개정 항목 (sol 토큰 소진으로 보류)

반박의 나머지 4항은 판정표 자체를 **섹션 단위에서 필드 단위로 다시 쓰는** 작업이라
이 문서의 부분 수정으로 끝나지 않는다. 다음 패스로 넘긴다.

1. 정수를 섹션이 아니라 **Portable Core MUST 필드/그룹**으로 다시 쓴다.
   §1·§4·§6·§11의 "섹션 정수" 판정은 그때 철회 대상이다.
2. **완비율·무게를 정수 증거로 쓰지 않는다.** 큰 섹션이라는 사실은 정수라는 근거가
   아니다. 현재 표는 그 둘을 섞어 인용한다.
3. §9는 "`omd-apply`로 보낸다"가 아니라 **삭제면 삭제라고 적는다.** 440개 예시를
   받아줄 구조가 그쪽에 없다.
4. §14 착지점을 `components_states.components[].interaction.state_applicability`로
   정확히 적는다. 카탈로그에 그래프가 0개인 상태에서 "지금 그래프로 보낸다"는
   실행 지시가 될 수 없다.

**유지되는 것**: §15 커브 의심, 완전일치 0.51%로 커브 반복을 가리지 말 것,
가상 persona를 sidecar로 승격하지 말 것.

## 개정 이력 — grok-4.6 반박 4항 대조

| 반박 항목 | 개정 전 | 개정 후 |
|---|---|---|
| 1. 정수의 입자 | legacy §1·§4·§6·§11 등을 섹션 전체 정수로 판정 | 네 섹션의 정수 판정을 철회하고 `identity.scope`, `experience.primary_tasks[]`, foundation 최소 그룹, `identity.kind`와 governance의 priority·unknown·change를 Portable Core MUST 입자로 판정 |
| 2. 완비율·무게의 역할 | 440/440, 플레이스홀더율, 10.04%, “정수 60.41%”가 판정 이유와 섞임 | 판정표에서 수치를 제거하고 별도 「T1-1 수치 — 판정과 분리한 참고」로 이동. “정수 60.41%” 해석 폐기. 커브 출현 수치만 출처 감사 후보군에 사용 |
| 3. §9 처리 | 도구별 프롬프트·예시를 `omd-apply` 등 adapter/skill로 위임 | 보편 governance와 근거 있는 브랜드 규칙만 의미별 Core 필드에 보존. 받을 슬롯이 없는 도구별 명령·프롬프트·workflow·반복 예시는 위임이 아니라 삭제라고 명시 |
| 4. §14 착지 | `interaction.state_applicability`로 부정확하게 표기하고 즉시 graph 위임 | 정확한 경로를 `components_states.components[].interaction.state_applicability`로 수정. Core v2 graph 0/440인 동안 같은 `DESIGN.md`에 보존하고, graph 채택 뒤에만 구조화하도록 migration 순서 명시 |
