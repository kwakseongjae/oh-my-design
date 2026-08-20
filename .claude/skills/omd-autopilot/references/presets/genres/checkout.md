# 프리셋 — genres/checkout

## P-CK-01 장바구니
**언제** — 결제 전 라인아이템을 수량·삭제·재고로 조정하고 청구 금액을 확정할 때. /
**언제 아닌가** — 카탈로그 카드(P-CM-01), 주문 조회(P-CK-07), 헤더 미니카트
(링크이지 이 화면의 축소가 아님).
**Base** — shadcn Item (`ItemGroup`, `Item`, `ItemMedia` `variant="image"`,
`ItemContent`, `ItemTitle`, `ItemActions`, `ItemSeparator`) + Aspect Ratio +
Button Group + Input + Empty + Badge(정적). 버튼 P-PR-01, 세일가 P-CM-06,
합계 P-CK-03. 카드 안의 카드 금지(G4).
**해부** — h1(P-FN-02) → "장바구니 N건"(P-FN-06) → 라인(고정 종횡비 썸네일 →
상품명 Link → 옵션·재고 → 단가 → 수량 −/값/+ → 합계 → 삭제) → P-CK-03 →
primary "주문하기" 1개(C3). 행은 P-FN-07 4면 패딩. 전체 클릭+내부 컨트롤
병존 금지(C25). 수량 히트 ≥44(C2), `<select>` 금지(G28). 품절은 숨기지 않고
상태+사유+제거. 협폭 하단 바는 **P-CK-03 최종금액과 동일 숫자**+CTA, 웰
인셋(C7), sticky 오프셋 하나(G56). 빈 상태는 P-FN-05. 이모지 금지(G30).
**상태** — default / hover(행 면+라운드) / focus-visible / disabled / loading
(해당 스테퍼만 C4) / error(재고 3채널 C16) / empty. 즉시 삭제면 행 제거가
피드백(G16). 확정 시 P-PR-21.
**접근성** — 리스트. 수량 `role="group"` 이름 "수량, {상품명}". 삭제 이름에
상품명. 합계는 polite 라이브로 최종금액만. 진입 P-FN-02.
**토큰 슬롯** — --size-thumb, --ratio-cart-media, --space-row-pad(스케일 G24),
--radius-row, 재고 3종, --font-tabular, --size-sticky-bar, --offset-sticky.
**게이트** — C2 C3 C4 C7 C9 C16 C25 C26 C27 C42 C45 · G4 G16 G19 G24 G26
G28 G30 G34 G39 G40 G49 G56 · GS1 GS2 GS4 GS5 GS8
**검증** — 미검증 — 리서치 유도

## P-CK-02 주문서
**언제** — 배송지·수단·금액 요약을 한 화면에서 확인하고 청구를 시작할 때(WCAG 3.3.4). /
**언제 아닌가** — 장바구니 편집(P-CK-01), 제출 후 진행(P-CK-05), 결과(P-CK-06). 확인용 위저드를 기본으로 쪼개지 않는다.
**Base** — shadcn Card (`Card`, `CardHeader`, `CardTitle`, `CardContent`,
`CardFooter`) + Field 패밀리(P-PR-08) + Input(P-PR-02) + Textarea(P-PR-03)
+ Checkbox(P-PR-04) + Radio Group 초이스 카드(P-PR-05) + Button(P-PR-01)
+ Collapsible(협폭 요약). 우편번호 검색은 P-PR-20. 수단 P-CK-04, 금액
P-CK-03, 제출 P-PR-09. `<select>` 시/도는 G28 — 많으면 P-FN-01.
**해부** — h1(P-FN-02) → 와이드 좌 폼·우 요약(C32 좌측 max, C35). 협폭은
단일 열+하단 고정 바. 섹션: 배송지 → 배송 방법(P-PR-05) → 결제 수단
(P-CK-04) → 약관(P-PR-04) → P-CK-03 → primary. 주소는 P-PR-08: 받는 사람,
연락처, 우편번호+검색, 도로명(읽기전용), 상세주소, 요청사항(선택 P-PR-03).
저장 주소는 초이스 카드. 요약·하단 바·버튼 라벨의 **최종금액은 한 값**(GS2).
라벨 "N원 결제하기"(C5, G49). 신뢰 문구는 CTA 옆 사실 한 줄("결제 정보는
결제사에서 암호화해 처리합니다") — 자물쇠 이모지(G30), "100% 안전"(G46),
좌측 스트라이프(G5) 금지. sticky는 와이드=요약 / 협폭=하단 바 중 하나+오프셋(G56).
풀폭 pill을 화면 끝에 붙이지 않음(C7).
**상태** — idle / invalid(필드 3채널, 블러 C13) / submitting(버튼 loading,
재제출 잠금 C4, `aria-busy`) / server-error. 제출이 첫 실패 필드로(P-PR-09).
**접근성** — `<form>` + FieldSet/Legend. 열린 리스트박스 Enter가 폼을 제출하지 않음(C23). 금액 갱신 polite. 신뢰 문구 4.5:1(C45/G40).
**토큰 슬롯** — --measure-form, --space-section, --size-summary-col,
--offset-sticky, --size-sticky-bar, --radius-card, 신뢰 문구 색, --font-tabular.
**게이트** — C3 C4 C5 C7 C12 C13 C16 C23 C32 C35 C42 C45 · G5 G16 G18 G19
G24 G26 G28 G30 G39 G40 G46 G49 G56 · GS1 GS2 GS4 GS5 GS8
**검증** — 미검증 — 리서치 유도

## P-CK-03 금액 요약 블록
**언제** — 장바구니·주문서·진행·결과·주문 상세처럼 청구/확정 금액이 보이는
모든 면. / **언제 아닌가** — 상품 카드 단가(P-CM-06). 프로모 "N원부터"
(G46)로 합계를 대체하지 않는다.
**Base** — hand-rolled 라벨/금액 정의 리스트 + shadcn Separator. 주문서 우측은
Card (`CardHeader` "주문 요약", `CardContent`, `CardFooter`에 최종금액+CTA).
표가 필요하면 Table (`Table`, `TableRow`, `TableCell` 금액 열 우정렬).
**해부** — 행 순서 **계약**: (1) 상품금액 (2) 할인 — 데이터 항목명 그대로,
발명 금지 (3) 배송비 — 조건이 맞을 때만 "무료", 미달이면 남은 금액을
사용자 언어로 (4) 실제 수수료·관세 (5) **최종 결제 금액** — 블록 안 최대
웨이트·크기, 숫자 우정렬, tabular. 적립 예정은 최종금액 **아래** 메타.
라벨 좌·금액 우, 기호·자릿수가 한 열. 할인은 마이너스+muted이나 4.5:1
(G40). 배송비를 마지막 스텝까지 숨기지 않음. 쿠폰·지역 변경 시 이 블록과
하단 CTA·버튼 라벨이 **같은 숫자**(GS2) — 바가 다른 합계면 실패.
**상태** — default / loading(재계산 중 Skeleton, 0원으로 깜빡이지 않음) /
error(항목 옆 3채널, 최종금액을 추측으로 지우지 않음). 항목 0이어도 최종
행은 남는다.
**접근성** — 정의 리스트. 최종 행 라벨 "최종 결제 금액". 갱신
`aria-live="polite"` `aria-atomic="true"`로 최종 행만. 색만으로 할인/배송을
구분하지 않음.
**토큰 슬롯** — --font-tabular, --size-amount-pay(지배), --size-amount-line,
--color-amount-discount(대비 실측), --space-amount-row, --color-rule.
**게이트** — C16 C24 C31 C45 · G4 G5 G16 G18 G24 G39 G40 G46 · GS1 GS2 GS4
GS7 GS8
**검증** — 미검증 — 리서치 유도

## P-CK-04 결제 수단 선택
**언제** — 주문서에서 배타적으로 한 수단을 고를 때. / **언제 아닌가** — 배송
방법(P-PR-05만), 정렬 셀렉트(P-FN-01), 은행/카드 `<select>` 팝업(G28).
카드번호·CVC를 우리 DOM에 두는 PCI 필드가 아님 — 호스트 필드/PSP 프레임이다.
**Base** — shadcn Radio Group (`RadioGroup`, `RadioGroupItem`) + Field 초이스
카드(`FieldLabel`이 `Field` 전체, P-PR-05) + `FieldSet`/`FieldLegend`. 앱 카드
인증이 우리 화면이면 Input OTP (`InputOTP`, `InputOTPGroup`, `InputOTPSlot`)
+ P-PR-08. 브랜드 마크는 단색 SVG(G31), 이모지·아이콘 혼용 금지(G30).
**해부** — 범례 "결제 수단" → 항목(이름 + 마스킹 식별 + **수수료가 있으면 그
금액**). 선택 항목만 추가 필드가 펼쳐진다. 수수료·할부는 P-CK-03에도 같은
숫자(GS2). 카드형과 플레인 라디오를 한 그룹에서 섞지 않음. 선택 표시는
인디케이터 또는 악센트 보더 하나 — 스쿼글(G8)·좌측 스트라이프(G5) 금지.
신뢰 문구는 과장 없이 수단 아래 한 줄, CTA 자물쇠로 대체하지 않음.
**상태** — idle / unchecked·checked·hover·focus-visible / disabled(숨기지 말고
"지금은 쓸 수 없음"+사유) / error(미선택 제출, `data-invalid`+3채널) /
loading(PSP 마운트, 해당 카드 안 스피너).
**접근성** — APG Radio Group Pattern(P-PR-05). 프레임 필드 이름을 우리 라벨과
연결. OTP는 한 필드, 슬롯마다 에러를 복제하지 않음.
**토큰 슬롯** — 초이스 카드 면/보더/선택 악센트, --radius-control, 수수료
텍스트(4.5:1), --focus-ring, disabled 면·글자(opacity 단독 금지), PSP 프레임
최소 높이.
**게이트** — C2 C3 C16 C17 C27 C42 C45 · G5 G8 G18 G19 G26 G28 G30 G31 G39
G40 G46 · GS1 GS2 GS4 GS8
**검증** — 미검증 — 리서치 유도

## P-CK-05 결제 진행 중
**언제** — 주문서 제출 이후 PSP 승인·3DS·리다이렉트를 기다리는 동안. /
**언제 아닌가** — 필드 검증(P-PR-09), 수량 스피너, 결과(P-CK-06). 가짜
퍼센트로 "거의 완료"를 연출하지 않는다.
**Base** — shadcn Spinner (`Spinner`, `role="status"`) + Empty (`EmptyMedia`에
Spinner, `EmptyTitle`, `EmptyDescription`) 또는 Dialog (`DialogContent`,
`DialogTitle`, `DialogDescription`, P-PR-20). 단계가 **실제 서버 상태**일
때만 Progress (`Progress`, `ProgressLabel`, `ProgressValue`). 인페이지 OTP면
Input OTP. 파괴 토큰의 AlertDialog(P-PR-21)는 쓰지 않음.
**해부** — 폼 교체 또는 모달(시스템 하나). 고정된 **최종 결제 금액**(P-CK-03과
동일) → 스피너 → "결제를 확인하고 있습니다. 이 화면을 닫거나 새로고침하지
마세요". CTA 없음. 멱등성: 제출 버튼은 이미 loading·disabled(C4), 두 번째
"다시 결제"를 그리지 않음. Idempotency-Key는 화면에 안 낸다(GS4). 스크림
클릭·Escape로 닫지 않음 — 닫기=취소가 가능할 때만 동사 "결제 취소".
`beforeunload`는 이 상태에서만. 진행 라벨은 데이터 단계, 임의 90% 금지.
**상태** — waiting(indeterminate) / stepped(실단계) / redirecting / cancelling
(재진입 불가) / timed-out → P-CK-06 실패·대기. 성공 토스트를 이 위에 금지(G16).
**접근성** — 모달이면 APG Dialog (Modal) 트랩+타이틀. 상태 텍스트
`role="status"` `aria-live="polite"` `aria-busy="true"`. 포커스는 스피너가
아니라 타이틀/설명. 제한시간은 WCAG 2.2.1 연장. 진입 링 억제(P-FN-02, G19).
**토큰 슬롯** — --color-scrim(C44 어두운 딤), --color-surface-overlay, 스피너
색·크기, --size-dialog-max, --duration-overlay(reduced-motion 0, G27), --font-tabular.
**게이트** — C1 C4 C8 C42 C44 C45 · G10 G12 G14 G16 G19 G26 G27 G40 G41 G46
· GS1 GS3 GS4 GS8
**검증** — 미검증 — 리서치 유도

## P-CK-06 결제 결과
**언제** — 승인 응답 이후. 성공/실패/부분성공/대기를 **한 계약의 네 상태**로. /
**언제 아닌가** — 아직 in-flight(P-CK-05). 결과가 이 페이지인데 축하 토스트를
겹침(G16).
**Base** — shadcn Alert (`Alert`, `AlertTitle`, `AlertDescription`, `AlertAction`)
+ Card + Item 요약 + Badge(정적 C27) + Button(P-PR-01). 실패를 `destructive`
필로 칠하지 않음 — 에러 토큰 텍스트(C3).
**해부** — h1이 상태를 사용자 언어로 지배. **성공**: 주문번호, 청구된 최종금액
(P-CK-03), primary "주문 상세" 1개, 쇼핑 계속은 링크. **실패**: 사유를 사용자
언어로(잔액 부족, 유효기간 만료, 카드사 거절, 시간 초과). PSP 코드·필드명
금지(GS4). 장바구니 유지. primary "다시 결제", 수단 변경은 링크. **부분성공**:
제목 "주문이 일부만 확정됐습니다". 청구액 / 확정 품목 / 미확정+다음 조치(환불
예정·재결제)를 나란히. 초록 "결제 완료" 금지. **대기**: 가상계좌·입금확인·
심사. 입금 금액·기한·계좌는 데이터 그대로, 성공 배지 금지. 네 상태 모두
P-CK-03은 **이 응답의 숫자**.
**상태** — success / failure / partial / pending. 화면당 primary 1. 재시도
버튼만 loading(C4).
**접근성** — 진입 P-FN-02. 실패·부분성공 `role="alert"` 한 번. 성공·대기는
`status` polite. 주문번호는 텍스트로 복사 가능.
**토큰 슬롯** — 상태 면 4종(부분이 성공 토큰을 재사용하면 실패),
--color-on-status(반전 쌍 C39), --font-tabular, --radius-card, primary 면.
**게이트** — C3 C4 C5 C16 C27 C39 C42 C45 · G5 G16 G18 G19 G30 G40 G41 G46 ·
GS1 GS2 GS4 GS8
**검증** — 미검증 — 리서치 유도

## P-CK-07 주문 상세
**언제** — 주문이 생긴 뒤(직후 확인과 이후 조회). / **언제 아닌가** — 주문서
(P-CK-02), 장바구니(P-CK-01), in-flight(P-CK-05). 목록 행 전체 클릭+내부 CTA
병존 금지(C25).
**Base** — shadcn Card 섹션 + Item 라인(읽기전용 P-CK-01 해부) + Badge(주문
상태, 정적 C27) + Separator + P-CK-03 + Alert(부분 배송·취소 창) + Button.
취소·환불 확정은 P-PR-21. 문의는 Link. Breadcrumb (`Breadcrumb`,
`BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`)는
계보가 있을 때만.
**해부** — h1 + 주문번호 → 상태 배지(데이터 enum→토큰: 결제대기/결제완료/
부분확정/배송중/완료/취소, 발명 금지) → 라인(단가·수량·합, 품목별 상태) →
P-CK-03(이 주문의 청구/환불 위계) → 배송지·방법 읽기 블록 → 결제 수단
마스킹 → 타임라인이 데이터에 있으면 그다음. 부분 배송은 품목 단위로
정직하게. 파괴 액션은 destructive 텍스트(악센트 필 금지). primary는 지금
가능한 한 가지(배송 조회 또는 재주문). 와이드에서 우측 컬럼에 금액+배송을
올려 GS5를 막는다. 읽기전용 주소를 인풋처럼 그리지 않음(C11).
**상태** — 주문 enum에 대응하는 배지·Alert. 취소 중 버튼 loading(C4). 주문
id 없음은 404 문장이지 빈 장바구니가 아님. 조회 실패는 Alert+재시도.
**접근성** — 상태는 배지 텍스트로 읽힘(색만 금지). 취소는 P-PR-21(포커스
취소, `alertdialog`). 금액 tabular. 진입 P-FN-02.
**토큰 슬롯** — 주문 상태 색·웨이트(4.5:1), --font-tabular, --radius-card,
--space-section, --color-rule, destructive 면/글자.
**게이트** — C3 C4 C11 C24 C25 C27 C32 C42 C45 · G4 G5 G16 G18 G19 G30 G40
G41 · GS1 GS2 GS4 GS5 GS8
**검증** — 미검증 — 리서치 유도
