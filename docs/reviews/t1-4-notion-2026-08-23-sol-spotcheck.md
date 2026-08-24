# T1-4 Notion 라이브 시험 표본 검토 — sol 의미 레인

- 대상: `docs/design-md-weight/migrated/notion/{DESIGN.md,provenance.md,migration-log.md}`
- 원본: `web/references/notion/DESIGN.md`
- 기준: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5 + `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 제약 5
- 일시: 2026-08-23

**판정: FAIL.**

기계 게이트의 PASS(토큰 손실/발명 0, `[FILL IN]` 0, 미관측→`not-applicable` 반전 0, coverage 주장 0, 도구 프롬프트 0)는 전제로 받았다. 아래는 그 검사가 식별하지 못한 범위·증거 종류·필드 결합·컴포넌트 의미의 변화다.

## 1. 일반 focus 관측을 `focus-visible` treatment로 승격 — FAIL

원본은 Hero CTA, Hero secondary action, Help language-picker search에 대해 각각 일반 `Focus` 또는 `::state-focus` 캡처만 기록한다(`web/references/notion/DESIGN.md` 174–195, 239–247, 344–348행). 키보드 modality가 확인된 `focus-visible` 관측이라고 쓰지 않았다. 특히 Help search는 dialog-open 뒤의 focused field다.

이관본은 그 색과 ring을 곧바로 `focus-visible` 행의 시각 treatment로 배정했다(`docs/design-md-weight/migrated/notion/DESIGN.md` 205–217, 231–242, 342–352행). Core §4.4가 `focus-visible` applicability를 요구하는 것은 맞지만, 일반 focus 캡처가 그 treatment의 증거라는 뜻은 아니다. 세 컴포넌트 모두 `focus-visible | applicable`은 유지하되 treatment는 미해상으로 두고, 원래의 generic-focus 관측을 별도 observed state로 보존해야 한다.

## 2. Help search의 고유 값과 필드 결합 손실 — FAIL

원본의 §9 Quick reference에는 Help search가 **transparent field**라고 적혀 있다(`web/references/notion/DESIGN.md` 293–296행). 이 값은 앞선 컴포넌트 본문에 중복되지 않는다. 이관본의 Language-picker search에는 background가 없고(`docs/design-md-weight/migrated/notion/DESIGN.md` 331–352행), `migration-log.md` 29행은 Help 값이 이미 Foundations/Components에 있다는 잘못된 이유로 Quick reference 전체를 삭제했다고 기록한다. §9의 도구 wrapper를 삭제하는 것은 허용되지만, 받을 Components 슬롯이 있는 고유한 근거값까지 삭제하는 것은 제약 3의 “슬롯 없는 삭제”가 아니다.

같은 컴포넌트에서 원본 YAML은 검증된 `tokens.components.help-search.fg: "#000000"` 결합을 명시하고(`web/references/notion/DESIGN.md` 78–86, 108–110행), 본문은 focused field의 computed text를 별도로 `rgba(0,0,0,0.95)`로 둔다(239–247행). `provenance.md` 100행도 두 값이 서로 다른 source role에 남는다고 인정한다. 그러나 portable component는 후자만 남기고(이관본 331–342행), `#000000`은 일반 Ink로만 남는다(73행). provenance에 원래 결합을 설명한 것은 증거 보존에는 도움이 되지만, standalone Components에서 검증된 renderable field를 다른 역할로 합친 것을 상쇄하지 않는다. 이는 `migration-log.md` 14행의 “검증된 값만 최소 필드 단위로 옮김” 주장과도 맞지 않는다.

## 3. primitive 종류만으로 양의 state applicability를 발명 — FAIL

원본은 empty/loading/error/success/skeleton/disabled를 미관측·미지정 상태로 남기고 generic variant를 만들지 말라고 제한한다(`web/references/notion/DESIGN.md` 281–285, 336–349행). 이관본의 공통 문구도 applicability를 capture completeness가 아니라 **control meaning**으로 판정한다고 적는다(`docs/design-md-weight/migrated/notion/DESIGN.md` 161행).

그러나 실제 표는 Bento feature tab, Circular carousel action, Language picker trigger, Help toggle의 loading/error/success를 모두 `applicable`로 만들면서 이유를 `Interactive control` 또는 `Button control`이라고만 쓴다(269–277, 294–302, 319–327, 366–374행). 이는 컴포넌트 역할에 따른 판정이 아니라 primitive에 대한 일괄 양의 추론이다. `not captured`를 `not-applicable`로 뒤집지 않은 것은 PASS지만, 반대 방향의 발명도 의미 보존은 아니다. 각 상태가 tab/arrow/dialog trigger/toggle 자체에 의미가 있는지를 역할별로 판정하고, 비적용이라면 관측 부재가 아닌 의미상 이유를 적어야 한다.

## 4. Notion 범위 밖 `storefront` 부정 claim 혼입 — FAIL

원본 §10은 voice와 공식 예문을 다루며 storefront나 support-copy coverage를 주장하지 않는다(`web/references/notion/DESIGN.md` 301–311행). 이관본은 갑자기 “Current storefront error, empty-state, and support-copy rules were not captured”를 추가하고 Named gaps에도 반복한다(`docs/design-md-weight/migrated/notion/DESIGN.md` 400, 446행). 이 표본의 범위는 marketing / public product-marketing / Help chrome이고 storefront가 아니다(원본 116–120행; 이관본 7–13행). 이는 미해상을 최소 경계에서 생략한 것이 아니라 다른 제품 도메인의 coverage 문구를 새 부정 claim으로 넣은 것이다.

## 확인된 통과 항목

- 원본 §14의 8개 observed-state 행은 이관본 148–159행에 범위와 값까지 보존됐다. `not captured`/`not named`를 `not-applicable` 사유로 쓴 행도 없고, state coverage 완료 주장도 없다.
- Compact card는 interactive-kind 근거가 없다는 이유로 kind와 applicability map을 생략했다(이관본 163, 244–255행). 이는 최소 미해상 경계 처리다.
- marketing / public product-marketing / Help chrome의 표면 경계와 selector-specific 상태색 범위는 대체로 보존됐다(이관본 9–13, 68–82행).
- NotionInter의 official product-use / live computed use / official distributed asset / declared-only / system-unresolved 증거 종류가 portable 본문에 함께 남았다(이관본 114–127행).
- 원본 §13의 네 inferred archetype label은 primary-task나 Audience claim으로 승격되지 않았고 provenance에도 재수록되지 않았다(이관본 24–26행; `provenance.md` 123행). Primary tasks의 문구는 §1·§11의 별도 first-party product/narrative 문장에서 가져왔다.
- 원본에는 positive motion token, duration, easing, signature motion, curve가 없다. 그 unresolved/비발명 조건은 Foundations에 보존됐고 generic curve 재주입도 없다(원본 351–353행; 이관본 106–108, 443행). 따라서 T1-3 제약 5의 curve/persona 항목 자체는 PASS다.

## 재제출 최소 조건

1. generic focus 관측과 `focus-visible`을 분리한다. `focus-visible` applicability는 유지하되, modality 증거 없는 세 treatment를 그 행에서 제거하고 원 관측은 별도로 남긴다.
2. Help search의 transparent background와 `help-search.fg: #000000` 필드 결합을 portable Components에 복원하고, focused computed `rgba(0,0,0,0.95)`와의 증거 역할을 함께 구분한다. migration log의 삭제 사유도 실제 disposition에 맞춘다.
3. Bento tab, carousel action, language trigger, Help toggle의 loading/error/success applicability를 역할별 의미로 다시 판정한다. primitive 종류만으로 `applicable`을 일괄 부여하지 않는다.
4. Notion에 존재하지 않는 `storefront` coverage 문구를 제거한다. 원본에 없는 error/empty/support-copy 부정 claim을 새로 만들지 않는다.

**최종 판정: FAIL — 하네스의 첫 미접촉 출력은 구조·기계 게이트를 통과했지만, 골든 샘플에서 요구한 최소 경계·권위·컴포넌트 의미 보존을 아직 통과하지 못했다. 이 판정은 Notion 산출물의 sol 의미 레인에 한하며, 카탈로그 채택이나 T1-4 구조 편차 승인은 포함하지 않는다.**
