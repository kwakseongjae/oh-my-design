# T1-3 골든 샘플 교차검증 — sol 독립 레인

- 대상: `docs/design-md-weight/golden-samples/{musinsa,karrot,29cm}/`
- 원본: `web/references/{musinsa,karrot,29cm}/DESIGN.md`
- 규격: `spec/design-md-core-v2.md`
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md`
- 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행
- 일시: 2026-08-23

**전체 판정: FAIL — musinsa FAIL / karrot FAIL / 29cm FAIL.**

형식 검증 결과(`portable_core: true`, 토큰 손실 0, 값 발명 0)는 전제로 받아들였다. 아래 판정은 원문의 부정·조건·범위·권위와 Core v2 의미를 수동 대조한 결과다. 세 파일 모두 일곱 Portable Core claim과 섹션 배치는 갖췄지만, 그 사실이 추가된 의미 결함을 상쇄하지 않는다.

## 1. musinsa — FAIL

### 차단 사유 — 미관측 상태를 비적용 상태로 바꿈

원본은 컴포넌트 상태에 대해 `default captured only`, interaction expansion 0이라고 기록하고(`web/references/musinsa/DESIGN.md` 166–205행), §14에서도 empty/loading/error/success/skeleton/disabled/focus/pressed가 **관측되지 않아 생략됐다**고만 말한다(261–263행).

이관본은 원문 §14 문장을 `docs/design-md-weight/golden-samples/musinsa/DESIGN.md` 120–124행에 보존했지만, 곧바로 “other canonical states are `not-applicable` until captured”라고 바꾸고 네 컴포넌트의 hover/disabled/loading/error/success를 `not-applicable`로 확정했다(138–147, 161–170, 181–190, 203–212행). 각 사유도 `Not captured` 또는 interaction coverage 0뿐이다.

이는 증거 상태와 계약 applicability를 뒤집는다. Core §4.4에서 hover는 pointer가 있을 때, disabled/loading/error/success는 컴포넌트에 의미가 있을 때 적용되며, `not-applicable`은 의미상 비적용 사유가 있을 때만 허용된다(`spec/design-md-core-v2.md` 160–173행). 특히 웹 링크·버튼의 hover가 미관측이라는 사실은 hover가 비적용이라는 뜻이 아니다. 가장 작은 미해상 경계에서 treatment를 생략해야지 부정값을 만들면 안 된다.

### 확인된 통과 항목

- 제품 범위, 두 storefront 한정, 색·폰트·elevation의 관측 범위와 부정 조건은 보존됐다(원본 107–237행 → 이관본 7–115, 213–218행).
- §9의 도구용 프롬프트는 삭제됐고, 그 안의 브랜드 제약은 Experience/Foundations/Components에 남았다. Governance에는 controlled authority/priority/unknown/change와 미해상 이름만 있다(이관본 225–264행).
- §14의 원문 자체와 motion 부재 조건은 본문에 남았다. provenance에는 freshness, URL, selector, claim ledger가 분리됐고 standalone 해석에 필요한 evidence boundary는 본문에 남았다.

## 2. karrot — FAIL

### 차단 사유 A — 파생 모션 해석을 무조건적 브랜드 규칙으로 승격

원본 본문은 spring/overshoot 금지를 강하게 적지만(396행), 같은 파일의 provenance 주석은 그 stance가 브랜드 자세에서 **파생된 편집적 해석이며 문서화된 SEED 규칙이 아님**을 명시한다(`web/references/karrot/DESIGN.md` 451–459행).

이관본은 이를 전 Karrot surface의 무조건적 Foundations 규칙으로 내보냈다(`docs/design-md-weight/golden-samples/karrot/DESIGN.md` 117–123행). 필요한 권위 한정은 portable 본문이 아니라 `provenance.md` 117행에만 남았고, `migration-log.md` 39행은 단순히 “원본 본문 규칙”이라고 기록한다. 이는 evidence detail 분리가 아니라 claim의 권위와 범위를 바꾸는 과분리다. standalone 문서는 sidecar 없이도 uncertainty를 보존해야 하고, migration은 evidence class와 conflict를 임의로 바꾸면 안 된다(`spec/design-md-core-v2.md` 19–26, 660–698, 700–706행).

### 차단 사유 B — fictional persona 충돌을 검증된 MUST task로 선택하고 sidecar에도 재수록

원본 가시 §13은 네 항목을 official product/stakeholder contexts라고 하지만(351–356행), 같은 원본 주석은 §13이 공개 세그먼트를 바탕으로 한 fictional archetypes라고 명시한다(447–449행). 이관본은 이 충돌을 해소할 근거 없이 네 항목을 `primary-tasks` claim과 Audience로 승격했다(`DESIGN.md` 18–34행).

반대쪽 한정은 `provenance.md` 118행으로만 밀렸고, 그 행은 KR urban young adult, secondary-city student, NA expat, retiree 세그먼트까지 다시 열거한다. 이는 `migration-log.md` 35행의 “삭제, sidecar로 옮기지 않음”과도 직접 모순이며, T1-3의 “가상 persona를 sidecar로 옮기지 마라” 제약(`t1-2-essence-2026-08-23-rereview.md` 33행)을 위반한다. 충돌이 풀리기 전에는 independently verified task만 claim하고, fictional 세그먼트는 provenance에 재호스팅하지 않아야 한다.

### 차단 사유 C — hover 미관측을 비적용으로 바꿈

원본 Marketing CTA는 `hover not captured`라고 한다(204–212행). 이관본은 이를 `hover | not-applicable | Hover not captured`로 바꿨다(175–195행). 포인터 웹 CTA의 hover는 의미상 applicable이고 시각 treatment만 미해상이다. 같은 표가 미관측 `focus-visible`은 올바르게 applicable로 둔 점도 이 의미 반전을 드러낸다.

### 확인된 통과 항목

- 원본 §14의 13개 상태 행은 이관본 266–283행에 조건·부정·수치와 함께 보존됐다.
- duration 5개, easing 역할/용도, signature motion 3개, reduced-motion 계약은 이관본 105–133행에 남았다. 원본의 세 무출처 cubic-bezier 값만 빠졌고 exact curve는 Named gaps 369행에 남았다.
- SEED product `#ff6f0f`, marketing `#ff6600`, frontmatter identity `#ff7e36`은 서로 다른 증거 영역으로 분리됐다. §9의 도구 명령·프롬프트도 portable 본문에 남지 않았다.

## 3. 29cm — FAIL

### 차단 사유 A — 미해상 applicability와 component kind를 확정

원본은 pseudo-state evidence가 모든 control의 모든 상태 구현을 증명하지 않는다고 제한한다(`web/references/29cm/DESIGN.md` 265, 378–393행). Product Grid Item과 Editorial Story Item에는 state나 interactive-kind 근거도 없다(240–252행).

이관본은 그 제한 문장을 141행에 보존했지만, 다섯 컴포넌트에서 각기 미관측·미명시된 상태 일부를 `Not captured` 또는 `Not named`라는 이유만으로 `not-applicable`로 확정했다(`docs/design-md-weight/golden-samples/29cm/DESIGN.md` 170–178, 196–204, 217–225, 236–244, 259–267행). Carousel Control의 captured hover/disabled를 applicable로 둔 처리는 맞지만(196–204행), Product Grid Item과 Editorial Story Item은 별도 근거 없이 `Kind: interactive`와 나머지 applicability를 확정했다(208–245행). 원문이 남아 있어도 뒤의 신규 표가 “미해상”을 “비적용”이라는 부정 claim으로 덮으므로 의미 보존이 아니다. `migration-log.md` 34행의 “값 발명 없음”도 semantic claim 수준에서는 성립하지 않는다.

### 차단 사유 B — motion 승격의 증거 조건을 삭제

원본 §15는 placeholder와 별개로, 미래 motion pass가 computed transition properties, animation names, durations, easing, reduced-motion behavior를 **컴포넌트별** 기록해야 한다고 제한한다(395–399행). 이관본은 비추론 금지와 `No motion token is promoted`만 남기고(96–99행), Named gaps에는 필드 이름만 둔다(321–325행). `migration-log.md` 35–36행에도 이 조건의 삭제가 기록되지 않았다.

이는 §9의 도구별 workflow 예시가 아니라 미해상 motion을 계약으로 승격할 수 있는 증거 조건이며, Foundations motion rule로 받을 슬롯이 있다(`spec/design-md-core-v2.md` 140–146행). T1-3의 삭제 범위도 무출처 curve로 한정되어 있다. 절차형 문장은 압축할 수 있어도 “컴포넌트별 해당 증거를 관측한 뒤에만 승격”이라는 조건은 본문에 남아야 한다.

### 확인된 통과 항목

- 원본 `[FILL IN]`은 정확히 6개다: responsive 1개(322행), §14 Empty/Loading/Error/Success 4개(388–391행), motion 1개(397행). 이관 `DESIGN.md`에는 placeholder가 없고, unresolved 대상 이름만 282, 323–325행에 값 없이 남았다. `provenance.md` 102–113행도 6개 원장을 정확히 기록한다. 그럴듯한 값으로 채운 흔적은 없다.
- §14의 검증된 Default/Hover/Focus/Pressed/Disabled/Sale 본문과 pseudo-state 한계는 이관본 141–154행에 보존됐다. 위 FAIL은 그 뒤 추가된 applicability 표의 의미 문제다.
- §9 construction prompt는 삭제됐고, 색·타입·컴포넌트·layout·voice·서사 계약은 적절한 Core 섹션에 남았다. freshness/source/claim ledger를 provenance로 분리한 것도 적절하다.

## 4. T1-3 curve 재주입 방지 — PASS

최종 확인 시점의 저장소는 Karrot에서 삭제한 세 curve를 구현 기본값으로 명시적으로 격리해 재주입 경로를 닫았다.

- `spec/omd-v0.1.md` 259–268행은 curve를 **비브랜드 구현 기본값**으로 규정하고 reference DESIGN.md/Core Foundations로 옮기는 것을 금지한다.
- `web/src/lib/playground/rules/motion.ts` 45–55행도 standard preset을 playground implementation default로 한정하고 writer의 reference 승격을 금지한다.

구현체 자체의 default는 브랜드 토큰으로 역승격되지 않는 한 허용된다(`docs/design-md-weight/2026-08-22-essence-verdict.md` 80–83행). 따라서 T1-3 제약 5의 writer 동시 수정 조건은 현재 PASS다. 이 PASS는 위 세 샘플의 semantic FAIL을 바꾸지 않는다.

## 5. 재제출 최소 조건

1. `not captured`/`not named`를 `not-applicable`의 사유로 쓰지 않는다. 컴포넌트 의미로 applicability를 판정하고, 시각 treatment만 미해상이면 그 값만 생략한다. 닫을 근거가 없으면 state coverage를 완료했다고 주장하지 않는다.
2. Karrot spring stance의 derived/not-SEED 한정을 portable Foundations에 복원하고, §13 충돌을 해소하기 전 네 항목 전체를 verified primary task로 승격하지 않는다. fictional demographics는 provenance에서도 제거한다.
3. 29CM motion 승격의 컴포넌트별 증거 조건을 Foundations에 복원한다.

**전체 판정: FAIL — 세 샘플 모두 구조는 통과했지만 semantic preservation과 T1-3 제약을 충족하지 못했다.**
