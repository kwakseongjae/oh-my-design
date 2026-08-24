# T2-1 웨이브 5 최종 재판정 — sol

- 대상: `docs/design-md-weight/migrated/{airtable,abema}/`
- 선행 재확인: `docs/reviews/t2-1-wave5-2026-08-23-sol-recheck.md`
- 정본 프로토콜: `docs/reviews/t2-1-protocol-2026-08-23-grok.md`
- 일시: 2026-08-23
- 범위: 선행 재확인의 두 유일 FAIL 사유인 “새 F3 실행 증거 불일치”가 정본 프로토콜상 재제출 조건인지 재판정하고, 이미 PASS였던 내용 조건이 현재 파일에서도 유지되는지만 확인했다. 선행 목록 밖의 새 기준은 추가하지 않았다.

## 프로토콜 적용

정본 프로토콜은 웨이브마다 첫 전수 판정 뒤 `목록 개정 → 동일 sol 목록-only 재확인`을 요구하고, 재확인은 선행 목록만 보며 새 기준을 금지한다(`t2-1-protocol-2026-08-23-grok.md` 53–56행). F3의 목적은 첫 sol 전수 전 결함 감소이고 이관당 1회이며, **목록 재제출에는 새 F3 의무가 없다**(56행). 웨이브 5 조건도 “재제출에 새 F3를 요구하지 마라”고 다시 명시하고(77행), 목록 재제출의 F3 의무를 닫힌 항목으로 확정한다(86행).

따라서 선행 재확인이 Airtable 8번과 ABEMA 7번에서 요구한 새 F3 raw/structured 실행 증거 일치는 재제출 게이트로 적용할 수 없다. 이 문서는 두 기록의 불일치를 해소하거나 같은 감사라고 인정하지 않는다. 그 증거 요구 자체를 판정 분모에서 철회한다.

## 판정 요약

| 대상 | 갱신 판정 | 내용 조건 | 기계 재확인 | F3 증거 처리 |
|---|---|---:|---|---|
| Airtable | **PASS** | 7/7 PASS | Core exit 0, `portable_core: true`; gate `PASS`, problems 0 | 재제출 의무가 아니므로 비차단 |
| ABEMA | **PASS** | 6/6 PASS | Core exit 0, `portable_core: true`; gate `PASS`, problems 0 | 재제출 의무가 아니므로 비차단 |

## 1. Airtable — PASS

선행 재확인에서 통과한 일곱 내용 조건은 현재 파일에서도 유지된다.

1. Type roles의 열 개 `Use`와 Sub-heading tracking `normal`이 정확한 역할 결합으로 남아 있다(`DESIGN.md` 168–179행).
2. `airtable-live`는 marketing homepage의 named live-DOM observation에만 한정되고, prose-derived token/component의 per-claim Proof로 승격되지 않는다(`provenance.md` 43–48, 85–97행).
3. Default Input과 Default Badge의 inference에는 각각 인접 완전 B2a가 있고 derived inventory도 두 항목을 포함한다(`DESIGN.md` 214, 296–301, 350–354행; `provenance.md` 93–94, 142, 147행).
4. Primary Blue, White, Default Input의 loading/error/success applicability는 최소 field 경계에서 생략된 상태다(`DESIGN.md` 235–242, 260–267, 313–320행).
5. docs/native/unpublished route-negative는 portable에 없고, Trademark는 brand-usage guidance로만 남으며 interface-token evidence는 unresolved다(`DESIGN.md` 9–15, 147–156행).
6. `sophisticated simplicity`와 창업자·이력·hybrid thesis 관계가 복원돼 있고 §1 disposition도 retention을 기록한다(`DESIGN.md` 17–19행; `provenance.md` 69–81행; `migration-log.md` 17, 28, 50행).
7. ds, `primary_color`, shadows, `#e5e7eb`, homepage hero의 실제 목적지가 provenance와 source-row log에 유지된다(`provenance.md` 28, 81, 136–141행; `migration-log.md` 13, 15, 18, 27–28, 31, 51, 56행).

현재 `DESIGN.md` SHA-256은 선행 재확인과 동일한 `c306d03e3b3f8a8283585b356df026fbee91e629fabeb1aad85efd285035fe7a`다. 직접 재실행한 Core checker는 exit 0 / `portable_core: true`, gate-only는 `PASS` / problems 0이다.

`audit-log.md`의 fresh `fixes=17`과 `auditor-log.txt`의 이전 `fixes=25` 기록 불일치는 그대로다. 그러나 새 F3는 목록 재제출 조건이 아니므로 이 불일치는 내용 조건 7/7을 뒤집지 않으며, 별도 새 내용 결함도 발견되지 않았다.

**Airtable 최종 판정: PASS — 내용 조건 7/7과 기계 검사가 모두 통과했고, 프로토콜에 없는 새 F3 증거 요구를 철회했다.**

## 2. ABEMA — PASS

선행 재확인에서 통과한 여섯 내용 조건은 현재 파일에서도 유지된다.

1. `primary-hover`, `accent`, `accent-hover`는 `abema-css` only이고 outage-day live observation과 분리돼 있다(`provenance.md` 79–101행; `migration-log.md` 15, 47행).
2. Pure White, Assets thumbnail, thumbnail veil을 포함한 derived 판단에는 인접 완전 B2a가 남아 있고 derived inventory와 동기화돼 있다(`DESIGN.md` 126, 230, 560행; `provenance.md` 124행; `migration-log.md` 48, 58행).
3. Primary, Secondary, Dark, Primary Dark, Danger, Text Field, Checkbox의 loading/error/success applicability는 최소 field 경계에서 생략돼 있다(`DESIGN.md` 279, 303, 325, 347, 369, 393, 511행).
4. native-app/TIMES absence claim은 없고 TIMES dark-canvas inspect만 Scope, Typography & Assets, provenance에 남아 있다(`DESIGN.md` 9, 192–202행; `provenance.md` 47–51, 116행; `migration-log.md` 16, 18, 22, 50행).
5. Hiragino/system fallback은 migration/runtime evidence boundary로 기록되고, §5 home rails·§8 VOD·§11 free-linear의 Primary-task 목적지가 유지된다(`DESIGN.md` 80, 200–206행; `provenance.md` 125–126행; `migration-log.md` 23, 26–27, 30, 51행).
6. Foundations의 완전 B2a limiter를 유지한 채 Core checker negation pattern을 피하고, 현재 Core checker와 gate 결과가 기록과 일치한다(`DESIGN.md` 101–103행; `migration-log.md` 9, 17, 52행).

현재 `DESIGN.md` SHA-256은 선행 재확인과 동일한 `b8d958a518c4454217131bbd20e37e4868913e2b13f232140ea173627d75dc9d`다. 직접 재실행한 Core checker는 exit 0 / `portable_core: true`, gate-only는 `PASS` / problems 0이다.

`audit-log.md`의 fresh `fixes=15`와 `auditor-log.txt`의 이전 `fixes=14` 기록 불일치는 그대로다. 그러나 새 F3는 목록 재제출 조건이 아니므로 이 불일치는 내용 조건 6/6을 뒤집지 않으며, 별도 새 내용 결함도 발견되지 않았다.

**ABEMA 최종 판정: PASS — 내용 조건 6/6과 기계 검사가 모두 통과했고, 프로토콜에 없는 새 F3 증거 요구를 철회했다.**

## 최종 결론

**최종 판정: PASS — Airtable PASS / ABEMA PASS.** 선행 재확인의 Duolingo·Ably·Pinterest PASS와 합치면 웨이브 5 동일 sol 재확인은 **PASS 5/5**다. 정본 프로토콜의 웨이브 5 목록 개정·동일 sol 재확인 조건은 충족됐다. 카탈로그 채택은 프로토콜상 별도 최종 승인 사항이다.
