# FunNow — F3 별도 세션 감사 (B2a · E1/E2)

- 대상: `docs/design-md-weight/migrated/funnow/{DESIGN.md, provenance.md, migration-log.md}`
- 원본: `web/references/funnow/DESIGN.md` · sibling: `web/references/funnow/.verification.md` (dotfile, 경로 직접 지정으로 확인 — 존재함, 62행)
- 기준: `MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c. 다른 조항은 판정하지 않았다(발견은 아래 `범위 밖 관찰`).
- 계수: 전부 `grep -o <패턴> <파일> | wc -l`, 파일별. `grep -c` 미사용.
- 워커 보고는 입력으로 쓰지 않았다. 산출 3파일과 원본·sibling만 읽고 판정했다.

## 실측 기준선 (수정 전 → 수정 후)

| 항목 | 수정 전 | 수정 후 |
|---|---|---|
| DESIGN.md 완전형 한정("derived editorial implementation inference … not FunNow-authored or a separately published UI specification") | 11회 (L13·23·32·36·49·139·143·205·223·410·429) | 13회 (+L57·L69) |
| provenance `Derived editorial inventory` 한정 색인 불릿 | 11 | 13 |
| 본문 : 원장 1:1 | 11:11 | **13:13** |
| evidence-class 경계 문장 불릿 | 6 | 6 (변동 없음) |
| 게이트 (`--gate-only`) | PASS · coverage 8/192 | PASS · coverage 8/192 |
| 토큰 집합 (legacy ↔ 산출 본문) | hex 11 / px 22 / ms 3 / pct 2 · 손실 0 · 발명 0 | 동일 (값 미수정) |

## B2a 수정 (본문 한정)

1. **`DESIGN.md` L57 — Experience → Application rules 머리.** Do 7항이 인접 한정 없이
   실려 있었다. 항목 안의 근거가 편집적 읽기다(실측: "Material conservatism is part of
   the utilitarian read" 본문 1회 L62, "immediacy is the brand promise" 1회 L64).
   `"These seven rules, and the reasons attached to them … are a derived editorial
   implementation inference from the verified surfaces; they are not FunNow-authored or a
   separately published UI specification."` 를 절 머리에 붙였다. 불릿 7항은 손대지 않았다.
2. **`DESIGN.md` L69 — Experience → Avoid 머리.** Don't 6항도 같은 상태였다("the catalog
   is flat by design" L72, "density is a feature of a spontaneity marketplace" L76).
   `"These six prohibitions, and the reasons inside them … "` 완전형 한정을 붙였다.
   *(1·2는 "the source states …" 귀속만 있었다. 귀속은 evidence class를 끝까지 나누지
   못한다 — 독자에게 "the source"는 FunNow일 수도 있는 화자다. B2a·apple §1.2 계열.)*
3. **`DESIGN.md` L143 — Foundations → Motion 머리.** 한정은 인접해 있었으나 **주어가
   틀려 있었다**: "…and reading it that way is a derived editorial implementation
   inference…" — 편집적이라고 선언된 것이 「그렇게 읽는 행위」였고, motion contract
   자체(durations 3행 · easing roles 3행 · motion rules 4항)의 evidence class는 열린
   채였다. 주어를 계약 자체로 옮겼다: "The durations, easing roles, and motion rules
   below are therefore a derived editorial implementation inference … they are not
   FunNow-authored or a separately published UI specification." 값·표 미수정.
4. **`DESIGN.md` L429 — Content & Locales.** 한정 범위에 앞 문단(L427)의 EN/TC register
   읽기("the Traditional Chinese copy is upbeat, benefit-led …, while the English copy
   stays casual and second-person")가 빠져 있었다. voice 성격 규정과 동일 class인데
   한정이 이름으로 덮지 않았다. `"the register reading in the paragraph above,"` 를
   한정 목록에 추가했다.

## E1 수정 (provenance 원장이 실제 derived 범위와 어긋난 것)

5. **`provenance.md` L196–197 — `Derived editorial inventory`.** 위 1·2로 본문 한정이
   13곳이 되었으므로 `Application rules` · `Avoid` 두 불릿을 추가했다. 색인 13 = 본문
   13(실측). *(좁은 쪽도 FAIL — fastcampus 원장 12행/본문 17건 계열을 만들지 않기 위해
   본문 수정과 같은 패스에서 맞췄다.)*
6. **`provenance.md` L199 — Motion 불릿.** "reading the durations, roles, and rules as a
   system-level statement"로 적혀 있어 수정 3 이전의 잘못된 주어를 그대로 색인하고
   있었다. "the durations, easing roles, and motion rules **themselves**"로 고쳤다.
7. **`provenance.md` L203 — Content & Locales 불릿.** 수정 4에 맞춰 EN/TC register 읽기를
   이름으로 추가했다.

## E2 수정 (원장 행 ↔ 실제 disposition)

8. **`provenance.md` L224 — `Omission ledger` 페르소나 행.** 같은 행이 네 이름·나이·도시를
   Item 칸에 담은 채 Status 칸에서 "no name, age, city, or demographic segment list from
   §13 is kept in this file"이라고 적고 있었다 — **파일이 자기 내용에 대해 거짓을 적은
   자리**. 실측: `林佳穎`·`Marcus Tan`·`張媽媽`·`Kenji`·`宜蘭`·`Kuala Lumpur`·`Okinawa`
   각각 DESIGN=0 / provenance=1 / migration-log=1. 문장을 실제에 맞췄다 — portable 본문
   0회, 전기·세그먼트 목록은 어디에도 없음, 이름·나이·도시는 **삭제 대상 식별자로**
   이 원장 행과 대응 log 행에만 1회. 이름을 지우는 처분은 D2 판단이라 하지 않았다(아래).
9. **`migration-log.md` L46 — §13 Personas 행.** "provenance에도 옮기지 않았으며"가 8의
   실측과 정면으로 어긋났다. 실제 disposition(본문 전량 삭제 / 원장 2곳에 식별자 1회씩)
   으로 고쳤다. 로그를 고쳤고 본문은 건드리지 않았다.
10. **`migration-log.md` L71 — 값 보존 실측 행.** "38종(hex 11 · px 23 · ms 3 · pct 2)" —
    11+23+3+2=39로 자기 합계와도 안 맞았다. 실측 distinct px는 legacy 22 · 산출 22
    (`0px 1px 2px 4px 5px 8px 12px 14px 15px 16px 17px 18px 22.5px 24px 36px 40px 44px
    48px 64px 600px 960px 1440px`), 손실 0 · 발명 0. `px 22`로 고쳤다(총계 38은 맞다).
11. **`migration-log.md` L19 — logo 행.** "…는 provenance `Logo decision`에만"이 실제보다
    좁았다. 실측 provenance 내 위치: `fill="#FF5537"` 3회(L135 Conflict matrix · L145 Logo
    decision · L147), `517 B`/`223 B`/`sz=128` 각 3회(L51 Sibling 표 · Logo decision ·
    L227 Omission ledger), `HTTP 200` 1회. portable 본문은 전부 0회(이 부분은 참). 세
    보관 위치를 모두 적었다(E2a).
12. **`migration-log.md` L35 — §7 Do 행.** 수정 1의 disposition(B2a 한정 인접 배치)을 행에
    기록했다. 로그가 실제 본문보다 약했던 자리.
13. **`migration-log.md` L36 — §7 Don't 행.** 수정 2에 대해 같음.
14. **`migration-log.md` L49 — §15 Durations 행.** 수정 3(한정 주어 교정)을 기록했다.
15. **`migration-log.md` L40 — §10 Voice & Tone 행.** 수정 4(한정 범위에 register 읽기
    추가)를 기록했다.
16. **`migration-log.md` L63 — `패스 1 — B2a 스캔` 기록.** "한정을 붙인 자리 11곳"이
    수정 후 실제와 어긋나므로 13곳(이관 11 + 감사 2)으로 갱신하고, 열거에서 빠져 있던
    **Primary tasks**(L23)를 채웠다 — 원래 열거는 "Principles 밖 자리"를 9개만 적어 11과
    맞지 않았다. Motion·Content & Locales 서술도 수정 3·4에 맞춰 조정했다.
17. **`migration-log.md` L75 — `A5 비라틴 (게이트 바늘)` 행.** "12/12 생존"만 적혀 있어
    A5 전량 대조처럼 읽혔다. 실측 게이트 coverage는 **인용 문자열 192개 중 8개**
    (`compared` 8 / `candidates` 192 = 4.2%)이고 바늘 12건은 그 8개 안의 비라틴 run이다.
    분모를 행에 붙였다(E2c — 준수 주장을 실제보다 강하게 적지 않는다).

## 검증한 뒤 그대로 둔 것 (이 계열에서 어긋난 곳 없음)

- 이중 목적지 주장 전수 대조: identity(`# FunNow Design System` 1회 / provenance Identity),
  logo slug(DESIGN=1 · provenance=2 — 로그 표기와 일치), `rgba(0,0,0,0.87)`(DESIGN=2 +
  Hero Search Field의 Text 행 — 로그의 "doc 2회 + 컴포넌트 Text 행"과 일치),
  `rgba(0,0,0,0.2)`/`(0,0,0,0.14)` 각 DESIGN=2, scrim `rgba(0,0,0,0.4)` DESIGN=2(Elevation
  ·Assets), `PMingLiU`/`WenQuanYi` 각 DESIGN=1·provenance=1, spacing(Foundations+Layout),
  §14 상태(State record + 컴포넌트 사유), §11 서사(Scope + Narrative sources), 미션 전문
  (DESIGN·provenance 양쪽).
- E2c 준수 주장: B3 전문 **2회**(L161 Motion, L486 Governance) — 다섯 증거 종류
  (transition properties · animation name · duration · easing · reduced-motion behavior)와
  「컴포넌트별 computed 관측 후에만」 게이트가 두 자리 모두에 실재. primitive type
  button 3 · badge 2 · card 1 · tab 1 · input 1 = legacy YAML 실측과 동수. §14 9행,
  voice sample 5건, tone 표 6행, Do 7 · Don't 6 · 원칙 5 · traits 8 · breakpoint 3 —
  전부 산출물 실측과 일치. 비라틴 바늘 12건 전부 본문 생존.
- 삭제 주장: easing curve 3종 산출 본문 0회 · provenance `Omission ledger`에 verbatim
  1행. §9 고유값 2건(`white background` → Header record, `no border` → Quiet Header Text
  Button) 실재.
- `mention ≠ use`: 로그·원장에만 등장하는 문자열(sibling 전용 라벨 4종, `fill="#FF5537"`,
  `88px`·`46px`·`38px`·`128px`)을 본문 실재로 읽지 않았다 — 본문 실측 전부 0회.

## 범위 밖 관찰

- **D2 (조문 판단 필요, 고치지 않음).** 규칙집 D2는 "가상 페르소나는 승격도 provenance
  재수록도 금지"다. 현재 페르소나 4인의 **이름·나이·도시**가 provenance `Omission
  ledger` L224 Item 칸과 migration-log L46에 각 1회 남아 있다(전기·세그먼트 목록은 0회,
  portable 본문은 전량 0회). 이것이 「금지된 재수록」인지 「삭제 처분을 지목하는 원장
  표기」인지는 D2 해석 문제라 감사에서 판정하지 않았다. 감사가 한 것은 원장이 자기
  내용과 어긋나게 적은 문장을 실제에 맞춘 것뿐이다(수정 8·9). 재수록으로 판정된다면
  이름을 식별자 없는 표기(예: "§13 페르소나 4인")로 바꾸는 후속 처분이 필요하다.
- **A5 / A5a (실측만, 손실 없음).** 게이트 coverage 4.2%(8/192)라 라틴은 기계 대조 밖이다.
  손으로 전수 대조했다: 원본·sibling 발행 문자열 중 라틴 25종(hero H1·H2·section heading,
  `Available now`·`Book For 06:00`·`Flash Sales Now`·`06:00 Flash Sale`·`Download App`·
  `Login / Sign Up`·`Search for products or locations`·`Beitou/Jiaoxi Hot Spring Hotel`·
  `Top Brands`·`Trending Themes`·`Reach Out to Us`·`Grow with Us`·`Help you stay on top`·
  `Last minute unlimited`·`© Zoek`·`Error occurred`·`plan your itinerary`·영문 gloss 2건·
  `the first choice for instant booking of urban pleasures`·`Asia's first booking platform
  built around the last minute`)가 **전부 산출 본문에 생존**, 비라틴 바늘 12/12 생존.
  영문 gloss 2건은 legacy와 바이트 일치("One-click booking online, head out instantly
  offline!" / "Deals at peak, even better off-peak!"). **라틴 카피 손실 없음.**
- **B1 (인접 확인, 위반 없음).** sibling 전용 값 `88px`·`46px`·`38px`·`128px`·`34–38px`·
  `35–40px` 산출 본문 각 0회. 구조 분류도 넘어오지 않았다 — 본문의 H1/H2 역할명은
  legacy §3 Hierarchy 표 자신의 것이고(Display Hero H1 / Page Title H1 / Section Intro
  H2), sibling만 아는 "merchant heading은 H1", "`All`이 active tab" 같은 분류는 본문에
  사실로 등장하지 않는다(본문은 merchant를 "the heading", tab을 "Active variant"로만
  적는다). DOM frequency count도 본문 0회.
- **규칙집 버전.** log L7은 **v10**을 기록하는데 감사 중 규칙집이 **v11**(A5a 신설,
  funnow gloss 사건이 근거로 인용됨)로 올라갔다. log는 「이관에 사용한 버전」을 적는
  자리라 바꾸지 않았다. A5a가 요구하는 분모 제시는 수정 17로 충족된다(손 스윕 추출
  39건·미생존 0은 L76에 이미 있었다).
- **C·D1·A2 계열은 판정하지 않았다.** `not-applicable` 8행이 전부 역할 사유로 닫혀
  있다는 것(관측 부재 사유 0건)만 계수로 확인했고, 그 사유의 타당성은 C2 소관이라
  건드리지 않았다.

AUDIT_DONE fixes=17
