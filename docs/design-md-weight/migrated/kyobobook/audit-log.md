# kyobobook 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kyobobook/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kyobobook/DESIGN.md`
검증 sibling: `web/references/kyobobook/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 숫자 토큰(`1.2`)은 `.`이 정규식이라 `grep -oF` 또는 경계 있는 스캔.
날짜: 2026-08-29

발행 1차 UI 사양 있음(Kyobobook Design System, `design.kyobobook.co.kr`). B2a 예문 전제(v12)가 깨지므로 toss형을 요구하지 않는다. 기존 32건은 published-spec form으로 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. `DESIGN.md:266`의 `none of them is Kyobo Book Centre-authored`는 복수 주어 완전형.

착수 실측: 본문 완전형 32 / 원장 32. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion `:186` 커브 생략은 세 번째 부류인데 `:176` 한정이 표 앞이고 durations/roles/rules만 이름한다(kkday `:150` 동형). Scope `:11`은 본문 `near-white`를 빼고 inventory만 `near-invisible`을 이름했다. Foundations `:84`는 motion-no-observation을 한정이 끝난 뒤에 둔다. Font evidence `:213`의 KDS-does-not-name-Pretendard, Assets `:253` consistent-with-flat, Capture `:264` Focus≠focus-visible, Add to Cart `:322` action-row-align, Grid `:447` rather-than-elevation, Image `:483` consistent-with-flat, Content `:489` 문어체-for-stability는 기존 한정이 이름하지 않았다.

문장 분류: 브랜드 발행 사실(KDS 라벨·모토·미션·YAML 값) / 관측 기술(hex·geometry·`box-shadow: none`) / 편집적 해석·인과 판단(키 비병합, 커브 생략, 목적 읽기, kind/applicability). 세 번째 부류만 수정 대상.

## 수정 목록 (34건)

### B2a — 인접 한정 (본문 10건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | 본문은 `near-white chassis`. 기존 한정은 `near-invisible`만. | 기존 완전형에 near-white / near-invisible을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:84` — Foundations head | `:84` 둘째 문장 "Motion is qualified separately… because it rests on no computed observation"는 세 번째 부류. 기존 한정은 설명절만. | 기존 완전형에 motion-no-observation을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:186` — Motion easing omission | "not traceable… so the curves are omitted"는 세 번째 부류. `:176`은 표 앞이고 생략을 이름하지 않음. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:209` — Font evidence | `:213` "KDS does not by itself name Pretendard as a universal current family"는 세 번째 부류. 기존 한정은 NotoSansKR / Pretendard-computed / no exclusive / no serif만. | 기존 완전형에 KDS-not-universal-Pretendard를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:255` — Assets | `:253` "consistent with the flat system"는 세 번째 부류. 기존 한정은 favicon identity / first-party covers만. | 기존 완전형에 no-shadow-consistent-with-flat을 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:266` — How to read | `:264` generic Focus ≠ `focus-visible` 증거 종류는 세 번째 부류. 기존 한정은 kind/applicability만. | 기존 완전형에 Focus-vs-focus-visible을 접어 넣음. 발생 수 +0. 복수 주어 `none of them is` 유지. |
| 7 | `DESIGN.md:322` — Add to Cart | "shared with Buy Now so action rows align"는 세 번째 부류. 기존 한정은 paired-secondary geometry만. | 기존 완전형에 shared-38px/`9px 14px` as alignment not a spacing step을 접어 넣음. 발생 수 +0. |
| 8 | `DESIGN.md:456` — Whitespace | Grid `:447` "rather than elevation"는 세 번째 부류. 기존 한정은 세 Whitespace 읽기만. | 기존 완전형에 Grid rather-than-elevation을 접어 넣음. 발생 수 +0. 줄 삽입 없음. |
| 9 | `DESIGN.md:460` — Responsive | Image `:483` "consistent with the flat system"는 세 번째 부류. 기존 한정은 breakpoint / touch / collapse만. | 기존 완전형에 image-behavior consistent-with-flat을 접어 넣음. 발생 수 +0. |
| 10 | `DESIGN.md:489` — Content | "문어체 only for policy… to convey stability and trust"는 세 번째 부류. 기존 한정은 해요체 영어 성격 / one-fact-per-sentence만. | 기존 완전형에 문어체-for-stability를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **33**, `not Kyobo Book Centre-authored` **32**, `none of them is Kyobo Book Centre-authored` **1**, `separately published UI specification` **33**, `including the published Kyobobook Design System (KDS)` **33**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived` P dest **1**). `migration-log.md` mention dest **1**은 use가 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 46, 58, 70, 84, 133, 149, 162, 172, 176, 186, 209, 225, 229, 243, 255, 266, 297, 322, 347, 370, 393, 416, 427, 438, 456, 460, 489.

### E1 — provenance derived 범위 (12건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | 헤더 | 32 complete / 32 data rows. | **33** / **33**. |
| 12 | Scope ¶2 행 2 | near-invisible만. 본문 `:11`이 이제 near-white도 이름한다. | near-white / near-invisible. |
| 13 | Foundations head 행 10 | 설명절만. 본문 `:84`가 이제 motion-no-observation도 이름한다. | 그 판단을 행에 추가. |
| 14 | Semantic path-separation 행 11 | "each hex on its own key path"만. 본문 `:133`은 canvas≠바로구매 텍스트, muted≠장바구니 fill, sale≠negative/hottracks를 이름한다. | 그 분리를 행에 적음(E1; krafton hex 귀속). |
| 15 | Motion easing omission 행 | 없음. 본문 `:186` 신설. | 행 16 신설. |
| 16 | Font evidence 행 | NotoSansKR / Pretendard / no exclusive / no serif만. 본문 `:209`가 이제 KDS-not-universal-Pretendard도 이름한다. | 그 판단을 행에 추가. |
| 17 | Assets 행 | favicon / first-party covers만. 본문 `:255`가 이제 consistent-with-flat도 이름한다. | 그 판단을 행에 추가. |
| 18 | How to read 행 | kind/applicability만. 본문 `:266`이 이제 Focus-vs-focus-visible도 이름한다. | 그 판단을 행에 추가. |
| 19 | Add to Cart 행 | paired-secondary만. 본문 `:322`가 이제 alignment도 이름한다. | 그 판단을 행에 추가. |
| 20 | Whitespace 행 | 세 Whitespace 읽기만. 본문 `:456`이 이제 Grid rather-than-elevation도 이름한다. | 그 판단을 행에 추가. |
| 21 | Responsive 행 | source-stated vs captured만. 본문 `:460`이 이제 image-behavior consistent-with-flat도 이름한다. | 그 판단을 행에 추가. |
| 22 | Content 행 | 해요체 / one-fact만. 본문 `:489`가 이제 문어체-for-stability도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **32 → 33** at 200–232 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (12건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 23 | 헤더 | B2a 32=32. | **33=33**. 복수 주어 완전형 병기. |
| 24 | YAML metadata 행 | exact `tokens.source: live-extract` / `components_harvested: true`를 P 18/20으로 적음. 그 콜론 표기는 P dest **0** / D dest **0**. | 표 칸 `| tokens.source \| live-extract |` P dest **1** at 18. `| components_harvested \| true |` P dest **1** at 20. |
| 25 | YAML typography 행 | `1.2` dest 2 · `1.5` dest 5는 부분문자열(`1.25rem` / `1.50rem`). | unitless `1.2` dest **1** at 233. `1.25rem` dest **1** at 235. `1.4` dest **1** at 234. `1.3` dest **1** at 235. unitless `1.5` dest **4** at 236–239. `1.50rem` dest **1** at 234. `2.50rem` dest **1** at 233. |
| 26 | YAML family 행 | `Pretendard` DESIGN dest 14. Font evidence 한정 확장 후 dest **15**. | dest **15**. `NotoSansKR` dest **14** 유지. |
| 27 | YAML spacing 행 | `9px 14px` dest 7. Add to Cart 한정 확장 후 dest **8**. | dest **8**. `0px 14px` dest **2** 유지. |
| 28 | §15 Durations 행 | B2a를 `:176`만 가리킴. `:186` 신설. | 커브 생략 판단은 `:186`. |
| 29 | §15 커브 행 | `provenance.md` 237. inventory 행 신설로 **238**. | dest 줄을 **238**. 부재 단언 분모는 DESIGN.md(E2d). |
| 30 | B2 / B2a 행 | 32문장 / inventory 194–. | **33** / 데이터 **200–232**. `not Kyobo` 32 + `none of them is` 1. |
| 31 | B1 행 | "sibling 전용 값 미승격"이 분류까지 덮는 준수 주장으로 읽힘. `portal H2` DESIGN dest **1** at 505 / 원본 dest **0** / sibling dest **1**. | 준수를 `46px`/`Spoqa Han Sans`/`product.kyobobook.co.kr` DESIGN dest 0인 **값**으로 한정. 분류 전량 미승격을 주장하지 않음(E2c). |
| 32 | A1 대조 행 | unitless dest와 exact colon dest를 착수 숫자로 적음. | unitless `1.2`/`1.4`/`1.3`/`1.5` = 1/1/1/4. exact colon P dest 0. 표 칸 dest 1. |
| 33 | E1 대조 행 | 본문 B2a 32. | **33**. inventory 200–232. |
| 34 | Deviations B1 | sibling-only 값 미승격을 분류까지 주장. | 값으로 한정. 구조 분류 전량 미승격을 주장하지 않음. |

Destination SHA DESIGN `7dfb8f1510373d514bed3098142ee5a1885868b360dd2c1a61f75e5e228d0308` → `41832b11b65a5f7782aa7121ec44236f810ea98f1cce9e9e048b4f234a84935b` (한정 신설·확장 후). provenance `f803b6172de626b94b3ab586a5ae535b0ea9495b08f5af38f036f11cc35555b3` → `edcfbad786910eec9a31cac7aec33da0bc68cef3b44c11efd9c3013e9a761823`. 줄 수 DESIGN `wc -l` **553** 불변. provenance 249→**250**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 32개 완전형은 evidence class를 끝까지 닫음. 발행 DS 있음 — published-spec form이 맞다. 예문 toss형을 요구하지 않음.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 194 (`transition properties, animation name, duration, easing, and reduced-motion behavior have been observed` dest 1).
- E2d: 커브 부재 단언은 DESIGN dest 0을 분모로 둔다. 원장 Item 칸의 verbatim 보관은 처분이지 「이 파일에 없다」가 아니다. 「세 파일 어디에도 없다」 자기부정 행 없음.
- D2a 처분 행(`provenance.md:239`)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다.
- `cubic-bezier` DESIGN dest 0. duration `120ms`/`200ms`/`320ms` dest 1 each(역할 서술과 함께 잔존 — T2 관례, 값 소실 아님).
- `#5055b1` DESIGN dest **15** / P dest **12**. favicon URL DESIGN dest **1** at 252 / P dest **2** at 16/147 (E2a).
- `box-shadow: none` dest **3** at 11×2/172. `full: 9999` dest **2**. `9999px` dest **2**. `400-500` dest **2**.
- `loading | applicable` dest **2** at 305/330. `loading | not-applicable` dest **3** at 355/378/401. `error | applicable` dest **3** at 306/331/356.
- `Primitive type: \`button\`` dest **2** = source `type: button` 2. tab 2=2. input 1=1. card 1=1. badge 2=2.
- `This is not a complete state-coverage claim` dest 1 at 266.
- `native application` / `mobile app` / `back-office` / `product application` DESIGN dest 0.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **21** / candidates **191**. `verdict: PASS`는 대조한 바늘 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 카피: 바로구매 DESIGN dest **10** · 장바구니 dest **7** · UI 기본컬러 dest **3** · 핫트랙스 dest **5** · 구어체/해요체/다섯 원칙/톤 속성 8종 dest ≥1 · 모토 dest **2** · KDS 미션 dest **2** · KDS 경고문 dest **1** · Positive/Accent dest **3** · Informative/Accent dest **2**. sibling 전용 리스트형/섬네일·교보문고인의 핵심가치·document.title 2건은 P에만(로그 처분과 일치). 회사 핵심가치 도전과 창의/고객중심/정직과 성실 DESIGN dest **0** / P dest **1**(본문 Principles 미승격 — 로그 처분). 영어 gloss `Buy Now` 원본 dest 10 / DESIGN dest 9 — 차이는 §9 도구 재진술 삭제와 §13 페르소나 삭제. 발행 CTA `바로구매`는 dest 10. **발행 라틴 손실은 눈에 띄지 않음.** 고치지 않음.
- **B1.** sibling 전용 값 `46px` / `Spoqa Han Sans` / `product.kyobobook.co.kr` / `24px 0px 0px 24px` / `리스트형` / `섬네일` / `#222222` / `39px` DESIGN dest 0. **구조 분류 `portal H2`는 본문 `:505` Voice samples에 사실로 들어갔다** (원본 dest 0 / sibling dest 1 / DESIGN dest 1). finda형 분류 침투. 고치지 않음(범위 밖). 로그 B1 준수 주장은 값으로 한정하도록 고침(위 #31).
- **D2a.** §13 페르소나 1인의 이름 문자열 DESIGN dest 0 / P dest 0 / L dest **2** (로그 §13·D2 행이 dest 0 측정용으로 다시 열거 — 재수록). 나머지 2인의 이름과 도시 문자열 DESIGN/P dest 0. `서울` DESIGN dest 0(서사는 `Seoul`). 동기 `knowledge worker` / `PICKS` / `gift shoppers` / `university student` DESIGN dest 0. Primary tasks는 표면·컨트롤 작업만. 소속 분류 신조어 `Solutions Partner` dest 0. Audience는 캡처 표면 그룹(catalog shoppers + KDS readers). gitlab형 동기 잔존·hubspot형 소속 신조어 없음. **로그의 이름 재열거는 D2a였다 — 2026-08-29 의미 검토(FAIL 1)가 지목해 개정했다. `migration-log.md` 두 행을 무식별 표기로 다시 쓰고 이 감사 기록의 인용도 지웠다. 네 산출물 전부에서 §13 3인의 이름·도시 dest 0.**
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 커브 DESIGN dest 0 측정은 로그/원장을 분모에 넣지 않는다.
- **A1 키 경로.** YAML `tokens.components` 8레코드의 각 필드가 대응 블록에 **행으로** 있다. Buy Now: type/bg/`#ffffff` Text/radius/height/padding/font/use. Add to Cart: 동형. Integrated Search: type/bg/fg/border/radius/height/padding/use (hex는 백틱 래핑, 키 경로는 Text/Border 행). Category Tab: type/fg/active `2px bottom border` `#5055b1`/font/use. View Toggle: type/bg/border/radius/active/use. Product Card: type/bg/border/radius/use — YAML에 `fg` 없음, Text 행 없음(icook 역). Sale/Positive badge: type/fg/radius/font/use. icook형 필드 소실 없음. 복원 없음. YAML에 없는 height/padding(탭 42px·`0px 14px`, 토글 38px)은 §4 본문 값.
- **같은 hex 다른 역할 (웨이브 39 krafton형).** `#ffffff`는 Canvas(페이지/카드, `:126`)이자 Buy Now/Add to Cart Text(`:290`/`:315`)이자 Search/Toggle/Card Background(`:339`/`:387`/`:410`). 본문 `:133`과 원장 행 11이 canvas ≠ 바로구매 텍스트를 이름한다. `#767676`는 muted text이자 장바구니 fill — `:133`/`:322`가 가르고 원장도 맞춤. 고치지 않음(역할 분리 자체는 정상; 원장은 실제에 맞춤).
- **원본에 없는 규칙.** 모션 커브는 원본에 값이 있으나 무출처라 생략하고 역할만 남김(T2 관례). `intentionally omitted rather than synthesized` 류의 합성 유도 문장을 넣지 않음.

AUDIT_DONE fixes=34

---

## 개정 2026-08-29 — D2a · E1 only

대상 3파일만. 토큰 값·컴포넌트 표·상태 applicability·구조·원본 무변경.

### D2a

`migration-log.md` `:65`(§13 처분)와 `:96`(D2/D2a 규칙 대조)이 삭제 대상의 식별자를 dest 0 증명용으로 다시 적고 있었다. 삭제 사실·조항·계수(본문·원장 0회)는 남기고 이름·나이·도시·전기 문구는 지웠다. 원장 Omission ledger `§13 Personas — three fictional archetypes` 표기를 기준으로 두 행을 무식별로 다시 씀.

실측 (`str.count`, 세 파일): 세 식별자 모두 DESIGN 0 / provenance 0 / migration-log 0.

### E1

착수: `node scripts/check-limiter-ledger.mjs kyobobook` → 본문 32 / 원장 33 (200–232) MISMATCH.

원장 33행 ↔ 본문 자리:

| 원장 행 | Location | 본문 | 세 조각 한 문장 |
|---|---|---|---|
| 200 | Scope ¶1 | `:9` | 있음 |
| 201 | Scope ¶2 | `:11` | 있음 |
| 202 | Scope ¶3 | `:13` | 있음 |
| 203 | Primary tasks | `:19` | 있음 |
| 204 | Audience | `:29` | 있음 |
| 205 | Distinctive traits | `:33` | 있음 |
| 206 | Principles | `:46` | 있음 |
| 207 | Application rules | `:58` | 있음 |
| 208 | Avoid | `:70` | 있음 |
| 209 | Foundations head | `:84` | 있음 |
| 210 | Semantic path-separation | `:133` | 있음 |
| 211 | Spacing | `:149` | 있음 |
| 212 | Shape | `:162` | 있음 |
| 213 | Elevation | `:172` | 있음 |
| 214 | Motion head | `:176` | 있음 |
| 215 | Motion easing-role omission | `:186` | 있음 |
| 216 | Font evidence | `:209` | 있음 |
| 217 | Family | `:225` | 있음 |
| 218 | Type roles | `:229` | 있음 |
| 219 | Typography rules | `:243` | 있음 |
| 220 | Assets | `:255` | 있음 |
| 221 | How to read this section | `:266` | **없음** — `derived editorial implementation inference` + `separately published`는 있고 `not Kyobo Book Centre-authored`가 없음. 복수 주어 변형만 있었음. |
| 222 | Buy Now | `:297` | 있음 |
| 223 | Add to Cart | `:322` | 있음 |
| 224 | Integrated Search | `:347` | 있음 |
| 225 | Category Tab | `:370` | 있음 |
| 226 | View Toggle | `:393` | 있음 |
| 227 | Product Card | `:416` | 있음 |
| 228 | Sale Price badge | `:427` | 있음 |
| 229 | Positive Status badge | `:438` | 있음 |
| 230 | Whitespace | `:456` | 있음 |
| 231 | Responsive behavior | `:460` | 있음 |
| 232 | Content opening | `:489` | 있음 |

과잉 원장 행 0. 원장 두 행 → 본문 한 문장 0. 원장 33행이 맞고, 본문 `:266`만 완전형 세 조각이 빠졌다. 그 자리에 `it is not Kyobo Book Centre-authored`를 붙여 세 조각이 한 문장에 있게 함. 원장 행은 지우거나 합치지 않음.

로그 B2a 계수 문장(`:13` `:89`)을 본문 33 / `not Kyobo Book Centre-authored` 33에 맞춤. 그 외 로그·원장 데이터행 무변경.

수정 후: `check-limiter-ledger.mjs kyobobook` → 본문 **33** / 원장 **33** (200–232) 1:1 OK.

FIX_DONE kyobobook d2a=0 e1=0

---

## 개정 — 2라운드 (의미 검토 FAIL 3, 2026-08-29)

대상: `docs/design-md-weight/migrated/kyobobook/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정.

### 결함 1 — §1·§11 고유 사실 복원 (A1)

원본 `:69` `Korea's largest and oldest book retailer`를 Experience Scope ¶2에 복원. 원본 `:348–350` 창업 지시 `profit center` / `welcome everyone` / `only to read` / `not to buy`와 `largest bookstore chain`를 Scope ¶3에 복원. provenance Narrative에도 같은 구를 색인. 사실 인용, 한정·원장 행 없음.

`grep -oF -e` 실측 (DESIGN / provenance):

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `Korea's largest and oldest book retailer` | 1 | 1 | 1 |
| `profit center` | 1 | 1 | 1 |
| `welcome everyone` | 1 | 1 | 1 |
| `only to read` | 1 | 1 | 1 |
| `not to buy` | 1 | 1 | 1 |
| `largest bookstore chain` | 1 | 1 | 1 |
| `cultural institution` | 2 | 2 | 1 |

### 결함 2 — Audience 세그먼트 복원 (D2)

원본 `:366` `Korean book buyers, students, gift shoppers, eBook readers`를 Audience에 복원. 원본 0회 융합 `builders reading KDS` / `people searching and buying` 삭제. 식별자·동기(`PICKS` / `knowledge worker` / `university student`) DESIGN dest 0 유지.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `Korean book buyers, students, gift shoppers, eBook readers` | 1 | 1 | 0 |
| `builders reading KDS` | 0 | 0 | 0 |
| `people searching and buying` | 0 | 0 | 0 |

### 결함 3 — sibling 분류 `portal H2` 본문 강등 (B1)

Voice sample `오늘의 선택 — portal H2` → `오늘의 선택 — portal section heading` (원본 YAML/§3 Section heading). `portal H2`는 provenance sibling-only set에만.

| 문자열 | 원본 | sibling | DESIGN | provenance |
|---|---:|---:|---:|---:|
| `portal H2` | 0 | 1 | 0 | 1 |
| `오늘의 선택 — portal H2` | 0 | 0 | 0 | 0 |
| `H2` | 0 | 2 | 0 | 5 |
| `portal section heading` | 0 | 0 | 1 | 0 |

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §1 Visual Theme | `Korea's largest and oldest book retailer` DESIGN / P | (없음) | 1 / 1 |
| §11 Brand Narrative | `profit center` · `welcome everyone` · `only to read` · `not to buy` · `largest bookstore chain` DESIGN / P | (없음) | 1 / 1 each |
| §11 Brand Narrative | `cultural institution` DESIGN | (없음; Principles 7만 dest 1) | 2 |
| §13 Personas | `Korean book buyers, students, gift shoppers, eBook readers` DESIGN | (없음) | 1 |
| §13 Personas · D2/D2a · Deviations | `builders reading KDS` DESIGN | 1 (본문) | 0 |
| §13 Personas · D2/D2a | `people searching and buying` DESIGN | 1 (본문) | 0 |
| A5 / A5a | `eBook` DESIGN | (바늘만; dest 5) | 6 |
| B1 · Deviations | `portal H2` DESIGN / P | DESIGN 1 / P 0 | DESIGN 0 / P 1 |
| B1 | `H2` DESIGN | 1 | 0 |
| B1 | `portal section heading` DESIGN | (없음) | 1 |

F2 불변: `#5055b1` DESIGN 15 · `Pretendard` 15 · `9px 14px` 8 · `바로구매` 10 · `장바구니` 7 · 모토 2.

`check-limiter-ledger.mjs kyobobook` → 본문 33 = 원장 33 (200–232). `migrate-reference.mjs --brand kyobobook --gate-only` → PASS.

FIX2_DONE kyobobook fixed=3 logdest=10
