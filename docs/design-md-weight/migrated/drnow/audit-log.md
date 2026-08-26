# Dr.Now (닥터나우) audit log — B2a · E2 전담 감사

- 감사 대상: `docs/design-md-weight/migrated/drnow/{DESIGN.md,provenance.md,migration-log.md}`
- 원본(무수정): `web/references/drnow/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9** — B2·B2a, E1·E2·E2a–c 만. 다른 조항은 판정 범위 밖(발견 시 보고만).
- 세션: 이관 세션과 분리된 신선한 감사 세션(F3).
- 게이트: 감사 전 PASS → 감사 후 PASS (`node migrate-reference.mjs --brand drnow --gate-only`). E3 회피 없음, 오탐 없음.
- 수정 방향: 한정을 **추가/완전화**하는 방향만. 제거는 하지 않았다. 토큰 값·컴포넌트 표·상태 applicability·섹션 구조 무수정.

## B2a — 파생 해석에 인접 완전형 한정 부착 (DESIGN.md 4건)

1. **`Distinctive traits` 머리 (34행) — 한정 신설.** 다섯 항목의 *선정* 자체와 "radius가 하나의 보편 스텝이 아니라 역할별로 배정된다"는 읽기는 원본이 발행한 문장이 아니라 선언값에서 파생된 편집적 읽기인데 인접 한정이 없었다. 완전형("derived editorial implementation inference from the verified surfaces; it is not Dr.Now-authored or a separately published UI specification")을 리스트 앞에 붙였다.
2. **Components `How to read this section` (239행) — 한정 범위 확대.** 기존 한정은 "Each applicability verdict and its reason"만 덮었는데, 본문에는 badge·card의 `Kind: non-interactive` 판정(C4 처리)도 있다. 같은 문장을 "Each interactive-kind verdict, each applicability verdict, and the reason given for either"로 넓혔다. 한정 문구 자체는 완전형 그대로.
3. **Content & Locales voice 특성 규정 (420행) — 불완전 한정을 완전형으로.** 기존: "the source's own editorial reading of the brand rather than a published Dr.Now voice specification". evidence class 구분이 끝까지 가지 않았다(B2a·apple §1.2: 인접해도 불완전하면 FAIL). "원본 자신의 문장"이라는 이유는 한정 해제 사유가 아니다 — 기준은 브랜드 발행이냐 파생 해석이냐다. 완전형으로 교체하고, 바로 아래 Do/Don't 5차원 표까지 한정 범위에 넣었다.
4. **`Assets` catalog logo 처분 (232행) — 한정 신설.** "3rd-party favicon URL이므로 브랜드 자산으로 승격하지 않고 원장에 둔다"는 인과·처분 판단인데 한정이 없었다. 카탈로그 다수 승인본(104·cgv·coinone·acer·bbc·codeit·classting 등)이 같은 자리에 완전형을 붙인다. 동일 형태로 부착.

## E1 — portable 본문의 이관 내부 사정 노출 (DESIGN.md 2건)

5. **Foundations `Motion` 끝 (168행 → 현 170행).** "Core v2 requires one wherever motion exists"가 목적지 규격 조항을 본문에서 직접 인용했다. 이관·규격 내부 사정이라 독자용 문장으로 다시 썼다: "Motion exists in this system, so reduced-motion behavior is an unresolved slot rather than an absent concern — name it and omit the value rather than choosing a default." 미해상 처리와 값 생략은 그대로.
6. **Typography `Font evidence` fallback 행 (181행 → 현 183행).** "per Core v2, a fallback stack is never presented as the brand face" → "a fallback stack is never presented as the brand face". 규칙 내용은 유지, 조항 인용만 제거.

> 확인: 이관된 106개 포터블 본문 중 `Core v2` 문자열을 담은 것은 drnow 하나였다. 지금은 0건.
> `catalog logo metadata` / `source ledger` 표현은 승인본 다수(bunjang·banksalad·channeltalk·cgv 등)가 쓰는 관용이라 E1 위반으로 보지 않았다 — 오탐으로 판단해 손대지 않았다.

## E2 — 로그 각 행을 세 파일 grep으로 대조 (migration-log.md 6건)

7. **§4 Component Stylings 행 — 개수 오기.** "9개 선언을 8개 컴포넌트 레코드로"라고 적혀 있었으나 원본 §4의 굵은 선언은 10개(Active/Default Nav Link 별도), 포터블 레코드는 9개다. 실측값으로 교정하고 두 nav 선언이 한 `nav-item`의 두 variant로 합쳐진 사실을 명시.
8. **§7 Don'ts 행 — 계수 불일치.** "6개 금지 + radius 스케일 제약"은 radius를 이중 계상해 7~8줄로 읽혔다. 실제: 원본 Don't 6개(6번째가 radius 스케일) + Pretendard 대체 금지 1줄 = 본문 `Avoid` 7줄. 그대로 기재.
9. **§14 "green checkmark" 행 — E2a 목적지 누락.** 실제 목적지는 State record · Governance `unresolved` · provenance `Omission ledger` 3곳인데 로그는 2곳만 적었다(같은 성격의 reduced-motion 행은 3곳을 적고 있었다). provenance 목적지를 추가.
10. **§10 voice 해석 행 — E2c 준수 주장과 본문 불일치.** 로그가 인용한 한정 문구가 위 3번 수정으로 바뀌었으므로, 본문에 실재하는 완전형 문장으로 갱신하고 Do/Don't 표까지 덮는다는 사실을 적었다.
11. **F1 기록 — B2a 자리 수·행번호 오기.** "6곳(11, 21, 30, 42, 140, 237행)" → 실측 **9곳(11, 21, 30, 34, 44, 142, 232, 239, 420행)**. 감사 전 기준으로도 42/140/237은 실제 위치와 어긋났다(현 44/142/239).
12. **F1 기록 — 경계 문장 수·행번호 오기.** "2곳 … Content & Locales voice 해석 문단 418행"이라 적혔으나 418행은 "The product language is Korean…" 문단이고 voice 문단은 420행이며, 그 자리는 이제 B2a 완전형이라 경계 문장 목록에서 빠진다. 실제 증거등급 경계 문장은 **3곳(13, 430, 438행)** — Scope 서사 울타리, `Illustrative samples` 라벨, Content & Locales의 healthcare 경계.

## E1/E2 파생 — provenance의 derived 범위 (provenance.md 1건)

13. **`## Derived editorial inventory` 신설 (92행).** provenance가 derived 범위를 아예 적지 않아 본문 실재(9곳)보다 좁았다. 좁게 적힌 것도 결함이므로, 사용한 완전형 문구·9개 자리·행번호와, 이와 구분되는 증거등급 경계 문장 3곳을 색인으로 추가했다(완결성 주장 아님). 승인본 bunjang `Derived editorial inventory` / cgv `Derived editorial extras (portable B2a inventory)`와 같은 형태.

## healthcare 도메인 특기 점검 (요청 항목) — 결함 없음

- §11 미귀속 수치("Korea's #1", 4M consultations, 5,500+ institutions, 8M+ downloads, 2019 창업, "Korea's first scaled telemedicine platform")는 **Scope 13·15행 두 문단에만** 존재한다. 13행이 "catalog prose without an attached source URL … not verified market-position or clinical facts, and nothing in this document establishes a medical, efficacy, or safety claim"으로 울타리를 치고, 15행 서사 문단은 전량 "the source counts / what the source calls" 귀속형이며 "This narrative supplies product context; it does not by itself supply interface tokens."로 닫힌다. 전 문서 grep 결과 다른 절에서 사실로 재등장하는 문장은 **0건**. 경계가 문장 단위로 새지 않는다.
- Principles 3번의 "Showing consultation prices before booking is named as a core differentiator"도 귀속형이고 §12 원문 근거가 있다 — 시장지위 수치의 재진술이 아니다.
- Content & Locales의 임상 카피 경계(438행)는 실재한다: "the voice contract covers register and tone. Medical, efficacy, dosage, and safety language is outside what this source establishes, and none of the guidance above may be used to derive clinical copy."
- §13 가상 페르소나(4인 이름·나이·서사)와 그 안의 가상 기능 문자열은 DESIGN.md·provenance 어디에도 없다(grep 0건). 로그만 삭제 기록을 보유 — D2 처리는 범위 밖이나 재수록 위험이 없음을 확인했다.

## 범위 밖 발견 (고치지 않음, 보고만)

- **A5 인접 사안(경미).** §10 Do/Don't 표의 영문 서술 셀이 미세 정규화됐다: `1st person plural` → `first person plural`, `3rd person` → `third person`, `Clinical cold` → `Clinically cold`. 브랜드 발행 문자열이 아니라 카탈로그 저자의 서술 셀이라 A5 위반으로 판정하지 않았고, 한국어 발행 문자열("아플 땐 닥터나우", "당신이 아픈 순간", "언제든지", §14 UI 카피 4종)은 전부 바이트 그대로다.
- **A-계열 참고.** §15의 easing 서술에서 `cubic-bezier(0.4, 0, 0.2, 1)`에 붙어 있던 "Material-style standard"라는 성격 규정이 포터블에서 빠지고 "recorded on the named `screen-slide-in` animation"으로 대체됐다. 값 손실은 없고 오히려 귀속이 강해졌으나, A-레인이 성격 규정을 값으로 볼지 여부는 이 감사의 판정 범위 밖이다.
- **판정 유보(오탐 가능).** Foundations 말미 "Keep `#FF7501` on the hero banner rather than generalizing it into the token scale."와 Governance "Do not merge them into one button token."은 원본 §4 footer가 스스로 내린 surface-scoped 해소("two surface contexts maintained separately")의 직접 적용이라 파생 해석이 아니라고 보고 한정을 붙이지 않았다.

AUDIT_DONE drnow fixes=13
