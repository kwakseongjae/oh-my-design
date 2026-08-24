# T1-3 골든 샘플 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/golden-samples/{musinsa,karrot,29cm}/`
- 선행 판정: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 일시: 2026-08-23
- 범위: 요청된 재제출 최소 조건 네 항목만 재확인했다. 새 판정 기준은 추가하지 않았다.

## 1. `not captured` / `not named` → `not-applicable` 반전 철회 — PASS

**PASS — musinsa PASS / karrot PASS / 29cm PASS.**

- **musinsa:** capture completeness가 아니라 control meaning으로 applicability를 판정하고, 미관측 시각 treatment만 생략하며 state coverage 완료를 주장하지 않는다고 명시했다(`musinsa/DESIGN.md` 122–124행). 기존 네 컴포넌트의 반전 행은 모두 `applicable`로 바뀌었고 treatment는 생략됐다(138–146, 161–169, 181–189, 203–211행).
- **karrot:** 원판정이 지적한 Marketing Primary CTA는 `hover not captured`라는 증거 사실과 applicability를 분리했다. pointer-web/button 의미에 따라 일곱 상태를 `applicable`로 두고 미관측 treatment만 생략했으며 coverage 완료를 주장하지 않는다(`karrot/DESIGN.md` 167–188행).
- **29cm:** 확인된 interactive component만 control meaning으로 applicability를 선언하고 미관측 treatment를 생략했다. state coverage 완료도 주장하지 않는다(`29cm/DESIGN.md` 141–143행). Ghost Outline, Carousel Control, Quantity Input의 반전은 철회됐고(172–180, 198–206, 241–249행), 근거가 없던 Product Grid Item과 Editorial Story Item은 kind와 applicability map 자체를 생략했다(210–225행).

## 2. Karrot spring 권위·§13·fictional demographics — PASS

**PASS.**

- portable Foundations의 Motion roles 본문이 spring/overshoot stance를 `derived editorial interpretation`이며 published SEED motion contract 밖이라고 직접 한정한다(`karrot/DESIGN.md` 107–115행).
- `primary-tasks`는 독립 검증된 한 항목만 남아 `count=1`이고, Audience는 충돌 중인 네 stakeholder context를 Experience claim으로 승격하지 않는다고 명시한다(`karrot/DESIGN.md` 18–26행).
- provenance는 네 항목이 primary-tasks/Audience로 승격되지 않았다고 기록하며, 기존 fictional demographic 세그먼트의 내용은 재수록하지 않았다(`karrot/provenance.md` 117–118행). 개정 로그도 제거와 sidecar 비이관을 명시한다(`karrot/migration-log.md` 47–49행).

## 3. 29CM motion 승격의 컴포넌트별 증거 조건 — PASS

**PASS.**

Foundations의 Motion 본문은 future motion pass가 computed transition properties, animation names, durations, easing, reduced-motion behavior를 **per component** 기록한 뒤에만 motion duration/easing/animation/transition/reduced-motion behavior를 승격하도록 제한한다(`29cm/DESIGN.md` 61–64, 96–99행). Named gaps에도 같은 per-component computed-capture 게이트가 남아 있다(303–307행).

## 4. 재주입 원천 두 곳의 비브랜드 기본값 격리 — PASS

**PASS — 2/2.**

- `spec/omd-v0.1.md` 259–268행: curve 예시를 **비브랜드 구현 기본값**으로 규정하고 reference `DESIGN.md` 및 Core v2 `foundations.tokens`로 옮기는 것을 금지한다.
- `web/src/lib/playground/rules/motion.ts` 45–60행: standard preset 앞에 `NON-BRAND IMPLEMENTATION DEFAULTS`와 writer의 reference/Core v2 승격 금지 마커가 실제로 있다.

**전체 판정: PASS — 원 SOL FAIL 재제출 최소 조건 4/4가 개정본과 두 재주입 원천에 반영됐다.**
