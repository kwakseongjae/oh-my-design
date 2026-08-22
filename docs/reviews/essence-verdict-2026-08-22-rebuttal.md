# T1-2 정수 판정 반박 — grok-4.6

대상: `docs/design-md-weight/2026-08-22-essence-verdict.md`
대조: `docs/design-md-weight/2026-08-22-survey.md`, `spec/design-md-core-v2.md`
T1-2 정의: `docs/OMD_3TRACK_PLAN.md` 205행 — **"이게 없으면 DESIGN.md가 아니다" 목록**
일시: 2026-08-22

**판정: REVISE** — §15 커브 의심과 무출처 커브 삭제(선택지 1)는 T1-1이 지지한다. 섹션 단위 정수 11개, §9 skill 착지, duration/signature 일괄 삭제는 수치·규격과 어긋난다.

정수로 분류된 섹션은 **11개**(§1–§8, §10–§12)다. 12가 아니다.

---

## 1. 수치가 판정을 지지하는가

행 단위로 인용 숫자는 대체로 T1-1 표와 같다. 합계 `9,704,287B / 82.28%`(판정 7행)는 조사 76행 `9,740,542B / 82.59%`에서 §16 `36,255B`를 뺀 값이라 오인용은 아니다. 라벨 합 `60.41 / 9.87 / 12.01`(판정 34행)도 조사 2절 비율의 반올림 합과 맞다.

어긋난 것은 **숫자 자체가 아니라, 같은 숫자가 결론을 가를 수 없는데 가른 척하는 행**이다.

| 행 | 인용 | 결론 | 불일치 |
|---|---|---|---|
| 판정 5–7행 | 완비 439/440, Core v2 0/440은 **정수의 증거가 아니다** | 전제 | 전제 자체는 맞다 |
| 판정 18–29행 §1–§8·§10–§12 | 없음 0%, 플레이스홀더 0–0.45%, 440/440 실내용 | **정수** | 5–7행 전제를 표에서 바로 뒤집는다. 보급률을 본문 잔류의 지지 수치로 다시 쓴다 |
| 판정 28행 §9 | 없음 0%, 플레이스홀더 0%, 440/440 — §2·§3·§7과 **동일** | **위임** | 완비율은 정수/위임을 가르지 못한다. 가르는 것은 "도구별 재진술은 디자인 계약이 아니다"라는 질적 주장뿐 |
| 판정 18행 §1 | "비중도 크므로"(8.58%) | 정수 | 판정 21행은 §4에 대해 "가장 큰 섹션이라는 사실만으로 내보낼 수 없다"고 무게를 거부한다. §15는 8.33%로 더 큰데 **의심**(32행). 무게는 기준이 아니다 |
| 판정 31행 §14 | 플레이스홀더 14/440(3.18%) → 전역 표를 억지로 채운 흔적 | **위임** | §8·§10·§12는 플레이스홀더 0.45%인데 정수(25–29행). 임계가 없다. §14의 실제 이유는 규격의 컴포넌트별 상태(Core v2 §4.4)이지 3.18%가 아니다 |
| 판정 32·38행 §15 | 커브 218/440(49.5%), 168/440(38.2%) | 미검증 **duration·curve·signature-motion** 제거 | 조사 부록 162–163행은 **문제는 커브**이고 duration은 브랜드마다 다르다(nintendo 120/220/360). `motion-fast=150ms`는 79/440(18.0%)뿐(조사 151행). signature-motion 측정은 T1-1에 **없다** |
| 판정 34행 | 정수 **60.41%** | 현재 코퍼스에서 정수 판정이 차지한 무게 | 판정 21·30행은 §4 exhaustive matrix와 §11 긴 연혁을 그래프/provenance로 보낸다. 10.04%+5.52%를 정수 무게에 그대로 넣는 것은 라벨 무게이지 잔류 정수 무게가 아니다 |

전역 중복 0.51% / 0.24%(판정 11행)를 매 정수 행에 붙인 것은 확대 금지를 지킨다. 그 값은 어떤 섹션의 고유성도 증명하지 않는다.

---

## 2. 정수 11개가 정말 정수인가

T1-2는 "없으면 DESIGN.md가 아니다"(계획 205행)다. 현행 실패 닫힘 정의는 Core v2 Portable Core다.

`spec/design-md-core-v2.md` 205–214행, 223–230행, 581행:

- Experience: 제품/표면 범위 + 일차 과업 1개
- Foundations: 실행 가능한 값/규칙 **또는** 명시적 제약 **1개**
- Governance: 권위 종류, 적용 우선순위, unknown=absent, 변경 규칙
- 사이드카·스킬·명령 불필요
- 컴포넌트 본문 충만, 브랜드 연혁, 페르소나, 에이전트 프롬프트는 Portable Core 표에 **없다**

같은 규격 136–138행: 디자인 특성 3–5개와 금지는 SHOULD. 제품 역사·페르소나는 권위가 있을 때만. 112–115행: 문서 전체 권고 600–1,800단어, exhaustive matrix는 그래프.

이 테스트에 섹션 전체를 넣으면:

| 분류 | 섹션 | "없으면 DESIGN.md가 아니다" | 이유 |
|---|---|---|---|
| 통과하는 **조각** | §1의 범위·과업·방향, §2·§3의 알려진 역할/값, §7의 적용 경계, §9의 unknown/우선순위 | 예 (필드) | Portable Core MUST와 맞다 |
| **정수로 과대 분류** | **§1** 전체 8.58% | 아니오 | nintendo §1(63–80행)은 §2·§3·§6 토큰을 다시 쓴 분위기 에세이다. 방향 3–5개면 충분하다(규격 136–137행) |
| | **§4** 전체 10.04% | 아니오 | 판정 21행 스스로 "요약만 본문, matrix는 그래프". 규격 113–115행과 같다. 독립 파일에 컴포넌트 계약이 필요한 것과 10% 섹션이 정수인 것은 다르다. Portable Core 표는 컴포넌트 충만을 요구하지 않는다 |
| | **§6** | 아니오 | 판정 23행: "별도 장문의 섹션일 필요는 없어도 내용은 foundations에". 그건 필드 잔류이지 섹션 정수가 아니다. 같은 문장을 §14에는 위임으로 썼다(31행) |
| | **§11** 전체 5.52% | 아니오 | 규격 138행은 연혁을 조건부 SHOULD로 둔다. 판정 30행도 긴 연혁은 provenance로 보낸다. nintendo §11(357–363행)은 1889 화투 회사 연혁을 포함하며 Portable Core MUST가 아니다 |
| 나머지 정수 라벨 | §5·§8 (둘 다 layout-platforms), §10, §12 | 가치는 있으나 MUST 아님 | 규격 4.5–4.6·136행. 없으면 빈약한 계약이지, 구조적 DESIGN.md 실패가 아니다 |

§13만 필드 입자(검증된 audience vs 가상 biography, 판정 30·67행)를 허용하고, §1·§4·§11은 섹션 입자 정수를 유지한다. 같은 문서 안에서 입자가 갈린다.

---

## 3. 위임 착지점은 실재하나

스키마에 **받을 칸이 있는 것**과 **440개 카탈로그가 그 칸을 쓰는 것**과 **칸이 그 내용을 표현할 수 있는 것**은 다르다.

### §9 → consumer adapter / `graph.governance`

- `skills/omd-apply/SKILL.md` 133–160행은 프로젝트 `DESIGN.md`를 **통째로** 읽는다. 브랜드별 Agent Prompt Guide를 넣을 슬롯이 없다. 트리거 표(39–55행)도 범용 라우팅이다.
- `spec/schema/design-system-graph-v2.schema.json` 336–344행 `governance`는 `priority`, `unknown_policy`(상수), `change_policy`, `decisions`뿐이다. 프롬프트·예시·도구별 절차 필드가 없다. `additionalProperties: false`.
- 카탈로그 §9는 범용 스킬 문서가 아니다. `web/references/nintendo/DESIGN.md` 308–334행은 색 재진술 + 컴포넌트 예시 프롬프트 + **브랜드 적용 규칙**(적색 단일 액션, 지역 서체). `web/references/toss/DESIGN.md` 306–311행은 Tossface 비승격, 미등재 컴포넌트=확장. 이 문장은 스킬로 옮기면 **유실**이고, 본문 governance/principles에 남아야 한다.
- 빌더 매퍼는 이미 `agent prompt` → `governance`다(`web/src/lib/builder/design-md-core-export.ts` 186–188행). 착지는 스킬 파일이 아니라 **같은 DESIGN.md의 governance 산문**이다.

판정 60행의 "`skills/omd-apply/`, `skills/omd-harness/` 등"은 범용 절차의 현재 위치일 뿐, 440개 브랜드 예시의 착지가 아니다. "별도 범용 prompt 파일을 새로 만들 이유는 없다"(60행)는 브랜드 예시를 **삭제**하겠다는 뜻이다. 그건 위임이 아니다.

### §14 → 컴포넌트 계약 + 그래프

받을 칸은 **있다**.

- 스키마 246–267행: `components_states.components[].states`, `components[].interaction.state_applicability` (7 정규 상태, 217–244행)
- `src/cli/book.ts` 207–223행은 `component.interaction?.state_applicability`를 읽는다
- Core v2 §4.4(160–173행)가 이 계약을 본문 섹션 `components-states`에 요구한다

다만 판정 61행 경로 `` `interaction.state_applicability` ``는 그래프 루트에 없다. 올바른 경로는 `components_states.components[].interaction.state_applicability`다.

그리고 착지 **인스턴스**는 카탈로그에 없다. 조사 124행 Core v2 일치 **0/440**. 판정 57행 "저장소에도 `.omd/system/graph.json`이 존재한다"는 호스트 프로젝트 `.omd/system/graph.json` 하나다. `web/references/<id>/`에는 그래프가 없다. 지금 440개에서 독립 §14를 지우고 그래프로만 보내면, 마이그레이션 전에는 **유실**이다.

규격 205–212행: 사이드카 없는 DESIGN.md만으로 "선언된 컴포넌트와 상태를 만들 수 있어야" 한다. 판정 61행 "짧은 요약만 §4와 함께"는 이 MUST보다 얇다. 남은 본문이 컴포넌트별 적용/비적용을 담지 않으면 위임이 아니라 축약 손실이다.

---

## 4. 이징 권고(무출처 삭제)의 부작용

선택지 1을 **무출처 커브**에 적용하는 것은 조사 부록 140–178행과 AGENTS.md unknown=absent와 맞다. 기계 파서가 깨지지는 않는다.

읽지 **않는** 소비자:

- 빌더 CSS(`web/src/lib/core/generate-css.ts`)는 색·radius·§4 소절만 다시 쓴다. `cubic-bezier` 없음
- 레퍼런스 AST 토큰(`web/src/lib/references/schema.ts` 57–69행)은 colors / typography / spacing / rounded / shadows / components. motion 키 없음
- `omd book` 마크다운 폴백(`src/cli/book.ts` 254–326행)은 `**token**: \`value\`` 불릿만 토큰으로 본다. 카탈로그 §15 표는 파싱되지 않는다

읽거나 **다시 쓰는** 소비자 — 여기가 부작용이다.

1. **에이전트 계약.** `omd-apply`는 DESIGN.md 전체를 읽고 모션 요청을 트리거한다(SKILL.md 24행, 137행, 191–198행). 값이 있으면 브랜드 사실로 적용한다. 지우면 지어내지 말라고 물으라는 경로로 간다. 의도된 교정이다.
2. **빌더 export.** `applyOverridesToMd` 기본값은 philosophy layer ON → §10–§15 유지(`web/src/lib/core/generate-css.test.ts` 307–318행). 사용자가 받는 DESIGN.md 텍스트에서 218/440의 `ease-exit`가 빠진다. 미리보기 CSS는 안 바뀌고, **내보내는 계약 문장**은 바뀐다.
3. **작성기가 다시 채운다.** `spec/omd-v0.1.md` 261–262행이 `ease-exit: cubic-bezier(0.4, 0.0, 1, 1)` 템플릿이다. playground `MOTION_RULES`(`web/src/lib/playground/rules/motion.ts` 45–50행)도 같은 exit 커브로 §15를 **생성**한다. 카탈로그만 지우고 라이터를 안 고치면 T1-1 부록이 다시 쌓인다.
4. **로컬 기본값이 빈자리를 채운다.** `skills/omd-feel/reference.md` 47–50행은 Material decelerate/accelerate를 규칙으로 둔다. 판정 51행이 경고한 "구현 기본값의 DESIGN.md 역승격"이 이미 열려 있다.

duration·signature를 커브와 같이 지우라는 권고(판정 32·38행)는 T1-1이 지지하지 않는다. 조사 162–163행을 따르면 커브만 1순위다.

---

## 5. 고쳐야 할 항목

1. **정수 입자.** T1-2 산출을 "없으면 DESIGN.md가 아니다" 필드/그룹 목록으로 다시 쓴다. Portable Core MUST(범위·과업, 알려진 foundation 1식, governance 4항)만 정수. §1·§4·§6·§11은 잔류 요약 + 상세 위임으로 §13과 같은 입자를 쓴다. 섹션 11개를 정수로 남기지 않는다.
2. **수치 역할.** 완비율·무게를 정수 증거 칸에서 뺀다. §15 삭제 범위는 T1-1이 잰 **커브**로 좁힌다. duration/signature는 별도 증거 없이 커브와 묶지 않는다. 60.41%를 정수 질량처럼 읽지 않는다.
3. **§9 착지.** 브랜드 적용 규칙(Tossface 비승격 등)은 본문 `governance`/`experience`에 남긴다. 도구 절차는 기존 스킬에 **이미** 있다. 440개 예시 프롬프트를 `omd-apply`로 보낸다고 쓰지 않는다. 삭제이면 삭제라고 적는다.
4. **§14 착지.** 경로를 `components_states.components[].interaction.state_applicability`로 고친다. 본문 잔류는 Core v2 §4.4·portable use 3항을 만족하는 컴포넌트별 상태여야 한다. 카탈로그 0그래프 상태에서 "지금 그래프로 보낸다"를 실행 지시로 쓰지 않는다. 그건 T1-3/T2다.
5. **이징 실행 조건.** 선택지 1은 무출처 **커브**에 한정. 라이터(`spec/omd-v0.1.md` 템플릿, playground `MOTION_RULES`)와 `omd-feel` 기본값이 같은 문자열을 재주입하지 못하게 같이 적는다. 입증된 공식 토큰(판정 50행 KRDS) 보존은 유지.

§15를 의심으로 둔 것, 완전일치 0.51%로 커브 반복을 가리지 말라는 것, 가상 persona를 sidecar로 승격하지 말라는 것은 유지한다.

VERDICT: REVISE
