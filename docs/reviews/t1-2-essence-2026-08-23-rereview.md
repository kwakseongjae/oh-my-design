# T1-2 정수 판정 재검토

대상: `docs/design-md-weight/2026-08-22-essence-verdict.md` (개정본)
대조: `docs/reviews/t1-2-essence-2026-08-22-rebuttal.md` (REVISE 5항)
규격: `spec/design-md-core-v2.md` 205–236, 318–327, 581행; 스키마 `identity`·`governance`·`components_states.components[].interaction.state_applicability`
일시: 2026-08-23 · 승인권자 grok-4.6

**판정: APPROVE_WITH_CONDITIONS**

지정 4항은 본문 판정표·결론에 들어갔다. T1-2 산출물(없으면 Portable Core가 아닌 것)은 이 개정본이다. T1-3을 연다. 아래 조건은 T1-3이 따르는 제약이지, T1-2를 다시 쓰라는 뜻이 아니다.

---

## 지정 4항 — 반영됨

| 반박 | 개정본 | 결과 |
|---|---|---|
| 1. 입자를 Portable Core MUST로. §1·§4·§6·§11 섹션 정수 철회 | 3–7, 11–19, 26–37행. 일곱 행이 규격 claim `scope` / `primary-tasks` / `foundations` / `authority` / `application-priority` / `unknowns` / `changes`와 같다 | 반영 |
| 2. 완비율·무게를 정수 증거에서 분리. 60.41% 폐기 | 판정표에 수치 없음. 43–65행이 참고표. 45행이 증거·임계 아님을 명시 | 반영 |
| 3. §9 도구 예시는 삭제. `omd-apply` 위임 금지 | 35, 89, 96행. 보편 규칙만 Governance, 브랜드 규칙은 Experience/Foundations, 도구 명령·프롬프트는 **삭제** | 반영 |
| 4. §14는 0/440 graph 동안 본문 보존. 경로는 `components_states.components[].interaction.state_applicability` | 40, 91–92행. “지금 graph로 보낸다” 실행 지시 없음. 옛 “짧은 요약만 §4와 함께” 삭제 | 반영 |

원 REVISE 5항의 이징 범위(무출처 커브만)는 41·96행과 「반박 반영」이 유지한다. 가상 persona sidecar 승격 금지도 유지한다.

---

## 조건 — T1-3이 지켜야 할 것

1. **정수 입자.** Portable Core 일곱 claim만 MUST다. legacy 섹션을 다시 정수/위임으로 묶지 마라. scope는 Experience `scope` claim이 Portable Core이고, 그래프 필수 필드는 `identity.scope`다. 현재 컴파일러는 claim 본문을 `experience.summary`로 쓴다(`scripts/design-md-core.cjs` 770행). 한쪽만 채워 Bound/Portable를 가르지 마라.
2. **수치.** 바이트·완비율은 규모·감사 순서 참고만. 삭제 임계나 정수 질량으로 쓰지 마라. 「정수 60.41%」를 재인용하지 마라.
3. **슬롯 없는 삭제.** 도구별 명령·프롬프트·workflow·반복 예시는 삭제다. skill/adapter/새 파일로 위임하지 마라. 근거 있는 브랜드 금지만 `experience.principles[]`/`avoid[]` 또는 `foundations.rules[]`. Governance 통제 문구에 브랜드 규칙을 넣지 마라.
4. **상태 계약.** 카탈로그 graph가 채택되기 전 §14를 본문에서 지우지 마라. 선언한 컴포넌트는 Core v2 §4.4를 본문에서 닫는다 — interactive는 7상태 applicability(default·focus-visible은 applicable), non-interactive는 map이 아니라 `kind`+이유. 채택 뒤에만 `components_states.components[].interaction.state_applicability`.
5. **이징·persona.** 삭제 대상은 무출처 커브뿐이다. 67행 `duration·signature-motion` 문구는 폐기한다. `spec/omd-v0.1.md` 예시 표와 playground `MOTION_RULES`를 같이 고치고, `omd-feel` 커브를 브랜드 토큰으로 올리지 마라. 가상 persona를 sidecar로 옮기지 마라.

---

## 본문에 남는 잔문 (T1-2 재작성 아님)

- **67행**이 여전히 `curve·duration·signature-motion`을 같이 지운다. 41·96행·반박 반영과 모순. T1-3은 후자를 따른다.
- **134–147행** 「아직 반영하지 못한 개정 항목」은 이 4항이 들어가기 전 기록이다. 152–159행 개정 이력이 닫았다. 현행 판정으로 읽지 마라.

VERDICT: APPROVE_WITH_CONDITIONS
