# CURRENT STATE — 단일 복원 지점

갱신: **2026-09-17 저녁** · 오너 지적 2건(라우트·토스) 처리. 우선순위는 2026-09-16 재편분 유지. 분기 `codex/track-foundation`, baseline `15ff0139`
(main과 동일 커밋). 9/7~9/8 스프린트 산출물은 **전부 미커밋 상태로 보존**되어 있다.

## 🛑 2026-09-21 — paypay 깊이 보정: **재보니 손대지 않는 것이 맞다** (`3d9d7c37`)

JP 깊이 3순위. 자체 표면을 실측한 뒤 **아무것도 바꾸지 않기로** 했다.

```
선언 팔레트 19개 중 관측 5개  (primary #ff0033·canvas·gray-400/500/700)
미관측 14개: pressed/deep/tint/disabled · ink #222222 · success/error/warning/info
             · point-gold · gray-50/100/200/300
선언 안 됐는데 많이 칠해짐: #242323×2770 · #696969×288 · #3895ff×198
선언 서체 Noto Sans JP는 두 표면 어디에도 없다 (Hiragino Kaku Gothic ProN / -apple-system)
```

**그런데 이걸 "틀렸다"고 하면 그게 오류다.** PayPay는 주로 **모바일 앱**이고 pressed·disabled·
success·point-gold·그레이 램프는 **앱 값**이지 마케팅 웹에 나올 것이 아니다. 앱 스타일가이드가
문서화하는데 **그건 이미지다**. 즉 **"웹에서 미관측"은 "값이 틀렸다"가 아니라 "웹은 앱 디자인
시스템을 검증할 표면이 아니다"**이다. 제품 웹 표면은 없다(`/app/` 404 · `card.` 에러 ·
`paypay-bank.co.jp`는 **다른 법인**).

**그리고 건드리면 더 나빠진다.** paypay는 `verified: 2026-06-06`으로 measured-tokens
컷오프(2026-08-01) **이전**이라 `prose-derived`가 grandfathered다. 재검증한다고 날짜를 올리면
**컷오프 안으로 들어가 `prose-derived`가 차단 사유가 된다** — 측정 가능한 건 5개뿐인데.
→ **부분 재검증은 개선이 아니라 강등이다.**

JP 깊이 3순위는 **캡쳐로 고칠 항목이 아니다.** 앱을 직접 재거나 스타일가이드 이미지를 사람이
읽어 `official-doc` 근거로 전사해야 하고, 후자는 "관측"이 아니라 "문서가 말한 것"이다.

---

## ✅ 2026-09-21 — Core 상세의 "UI font basis" 수정, 그리고 **내 진단이 틀렸던 것**
→ `docs/CORE_TYPOGRAPHY_ASSETS_GAP_2026-09-21.md`

**앞 항목에서 "Core v2 그래프에 브랜드 서체가 없다"고 적었다. 틀렸다. 그래프는 담고 있다.**

`coreTransport.fontRoles`의 **첫 원소만** 보고(그건 family 없는 `display` 롤이다) 없다고
결론지었다. 전부 보면 마이그레이터가 선언된 family를 **body 모양 롤에** 붙여둔다 —
serendie `body=Roboto` · krds `body-large=Pretendard GOV` · toss `body=Toss Product Sans`,
`sourceClass: repository-fact`와 evidence까지 달고. **앞선 세션이 toss의 빈 폰트를 고치려고
일부러 만든 동작**이고 코드에 긴 주석까지 있다.

부수로 틀린 것 둘: `typography_assets.assets`가 빈 건 결함이 아니다(폰트 *파일*·라이선스용이고
`assets_fonts_licenses`는 `UNMEASURED_CHECKS`에 **의도적으로** 있다 — "a text migration cannot
speak to, and therefore does not claim"). 그리고 "폴백은 근거를 지어내야 한다"도 틀렸다 —
Core 롤이 `sourceClass`를 들고 있다.

**실제 원인은 작았다**: `detail-view.tsx`가 `referenceAst?.foundations.uiFont` 하나만 읽는데
Core canonical은 `ast: null`이다. **서체가 아니라 basis 한 칸만** 비어 있었다 — Fonts 섹션은
내내 `Roboto · Open · Apache 2.0`, `Pretendard GOV · Brand-only`를 맞게 그리고 있었다.

**수정 완료**: Core면 패키지의 font role에서 basis를 읽는다.
`serendie/krds: unresolved → repository fact` · `apple: frontmatter · high`(레거시 불변).
confidence는 **지어내지 않는다** — Core 계약은 출처는 말하지만 confidence는 말하지 않는다.

---

## ✅ 2026-09-21 — 죽은 인용 재검증 완료: **6건은 복구 불가이고 그게 맞다** (`6a1934e0`)

남은 15개 레퍼런스의 **출처 115개 전부**를 patternfly와 같은 기준(실제 브라우저)으로 열었다.
93 정상 · 22 비200.

**계측기를 잘못 쓰면 살아있는 것을 죽었다고 한다** — 22개 중 5개는 안 죽었다:
`rise-webfont`는 브라우저에선 ERR("Download is starting")인데 **curl로 200 `font/woff2`
58,996바이트**다. Thumbprint 2페이지는 curl에 **202/0바이트**(봇 챌린지)인데 브라우저에선
4,123자·3,536자 렌더된다. **페이지는 브라우저로, 자산은 curl로.** 아침에 "curl로는 부족하다"를
배웠는데 **반대도 참이다.**

**날짜를 실제로 움직이는 건 6건뿐**(11st·banksalad·brandi·kream·kurly·onestore). 나머지 8개는
살아있는 다른 출처가 날짜를 지배한다. 내가 앞서 추정으로 6건을 댔는데 그중 thumbtack이
틀렸다 — 이번엔 각 레퍼런스의 최조 만료를 직접 계산했다.

**그 6건 전부 복구 불가다** — 추측이 아니라 사이트 내비게이션을 읽어 확인했다. 11st `/category`는
인덱스지 그 카테고리가 아니고, banksalad 허브는 사라져 **filter-chip 클레임 9개**를 가져갔고,
brandi 상품은 내려갔고, kream `/shop`·kurly 목록·onestore 게임 카탈로그는 동등물이 없다.
**옮겨간 게 아니라 끝났다.** → **1월 강등이 옳다.** 뱃지를 지키려 다른 페이지를 끼워넣는 것이
이 카탈로그가 막으려는 바로 그 행동이다.

**오늘 고친 것**: patternfly·hyundai(1월→**2027-03-19**) · thumbtack(`/components/`→
`/components/overview`, 같은 도메인, nav에서 발견, advisory 해소).
`source_url_dead` **17 → 14 레퍼런스**.

---

## 🔬 2026-09-21 — 웨이브 1 잔여(PayPay·AntUI)는 **신규가 아니라 깊이 보정**, 그리고 캡쳐 함정
→ `docs/PAYPAY_STYLEGUIDE_TRAP_2026-09-21.md`

**둘 다 이미 카탈로그에 있다.** 후보 문서가 가리킨 표면은 기존 레퍼런스의 깊이 보정
대상이지 새 레퍼런스가 아니다(C7 중복 원칙).

**alipay — 의심했는데 아니었다.** 출처 9개 중 5개가 `ant.design`/`github.com/ant-design`이라
라이브러리를 브랜드 근거로 쓰는 범주 오류로 보였다. **세어보니 라이브러리가 근거하는 클레임은
29개 중 0개.** 전부 알리페이 자체 표면에서 온다. **단정 대신 센 것이 잡았다.**

**paypay — 진짜 문제이고 고치는 법이 직관과 반대다.** 현재 `legacy_snapshot`·**클레임 202·증거
0·출처 0**(JP 깊이 3순위, "JP 핀테크 검색수요 최고"). 후보 문서의 "Element UI" 경고가 옳았고
**생각보다 나쁘다**:

```
커스텀 프로퍼티 577개 중 547개가 --el-* (Element UI), 나머지 30개는 Bootstrap 4 기본값
페인트된 색:  1315× #2C3E50 (Element UI 텍스트)   vs   10× #FE2734 (PayPay 레드)
실제 내용은 이미지 33장 안에 있고 본문 텍스트는 1,234자
```

**PayPay 토큰은 0개다.** 빈도 기반 추출을 돌리면 `#2C3E50`을 PayPay 전경색으로 **확신 있게**
뽑는다. → **스타일가이드는 `official-doc`으로만 인용하고 `product-surface`로 캡쳐하지 않는다.**

오늘 **세 번째 같은 계통**이다 — cookpad(영국 사이트에서 측정) · Serendie(문서 탭 크롬을
컴포넌트로 오인, 내가 내고 스스로 잡음) · paypay(문서 프레임워크를 브랜드 토큰으로).
셋 다 **"200이고 값도 그럴듯하다"**가 공통점이다. **도달성은 정합성이 아니다.**

202개 클레임 재검증은 웨이브 규모라 **시작하지 않았다** — 제약을 모르고 시작하면 틀린 값을
확신 있게 기록하게 된다.

---

## ✅ 2026-09-21 — **웨이브 1 완료: serendie**, 카탈로그 첫 네이티브 Core v2 레퍼런스 (`81e048a9`)

**441개 · verified 142.** 레거시 frontmatter를 한 번도 발행한 적 없는 첫 레퍼런스 —
카탈로그 평면이 패키지의 `dev.oh-my-design.catalog` 확장에 있다.

**reason code 0 · advisory 0**으로 `verified_v2`: 클레임 54/54 근거(100%), 출처 8,
그리고 **컴포넌트 1 · 인터랙티브 1 · 상태 1** — verified 141건 중 36건이 인터랙티브 0인
카탈로그에서 이게 핵심이다.

**범주 문제는 규칙으로 해결**(`c40bfb0e`): "이름이 시스템과 별개의 제품·플랫폼을 가리키면
브랜드, 툴킷만 가리키면 라이브러리". **넌센스 경로 대조군**으로 검증했고
(bytedance는 `/arco`·`/semi`·`/zz-없는경로`에 전부 동일한 6,667자) CN 기각 10건이 유지된다.
규칙은 AGENTS.md 하드 룰에도 넣었다.

**게이트 4개가 순서대로 진짜 문제를 잡았다**: ①`ds.type: public` 무효 — **내 생성기가 잡겠다고
해놓고 `ds`를 아예 검사 안 했다**(이제 검사한다) ②Primary tasks를 `###` 산문으로 써서
`primary_task` 실패 → 고치니 `structural-core`→`portable-core` ③`tokens.spacing`은 1개가
아니라 **인덱스마다 12개** + `.use` 5개 + `pressed` → 37→54 ④`**Tier 1 sources:**` 산문 줄이
투영에서 사라진다(스펙 §11은 Core 문서에서 레거시 관행을 거부하라고 한다) → **증거 그래프의
`sources`로 폴백**(더 나은 데이터, 폴백이라 기존 0건 영향).

**write gate가 설계대로 발화**했다 — "네이티브가 들어오면 이 테스트가 *의도적으로* 바뀌어야
한다"고 주석에 적어뒀고, 그대로 됐다.

**낡은 하드코딩 카운트 3곳**을 발견해 **재고정이 아니라 count-agnostic으로** 바꿨다
(`doctor.test` ×2, `omd-reference-query`, CLI 문서 5개 로케일 — **ja·zh는 이미 틀려** legacy를
141이라 쓰고 있었다, 실제 116).

부수: `sync-catalog`가 design-md 미러의 **기존 드리프트 41건**도 정리했다(canonical은 serendie만 변경).

**기록만 하고 안 고침**: Core v2 레퍼런스는 상세 페이지에서 **"UI font basis unresolved"**로
보인다 — AST는 `Roboto`를 high confidence로 해석하는데, Core canonical은
`repository.server.ts`가 패키지를 서빙하며 `referenceAst`를 null로 둔다. krds도 같다.
**리더 갭 클래스가 이번엔 표현 계층에서** 나왔다.

---

## 🛑 2026-09-21 — 웨이브 1 보류: **Serendie의 범주가 의심스럽다**
→ `docs/WAVE1_SERENDIE_2026-09-21.md`

본문을 쓰기 전에 실측했다. **시스템 자체는 훌륭하다** — 표면 6개 전부 200, 커스텀 프로퍼티
**373개**(reference 184 + system 158 + web-system 31, 3계층), `impression-primary #0A69CF` ·
`impression-secondary #0650A0`, 치수·타이포 토큰 발행, 버튼 상태 실측
(rest #0650A0 → hover #024288, radius 9999px, h40) — 09-17 세션 측정과 일치.

**그런데 About 페이지를 읽고 나니 범주가 걸린다.** Serendie 자기 말로:
「**汎用性と普遍性を重視したベーシックなアセット**を提供し、これを下敷きとして
**事業領域ごとにプロダクトの独自性やアイデンティティを柔軟に表現**します」 ·
「**社内・社外を問わず、誰もが許可や承認なしに自由に利用できる**」.

즉 **의도적으로 범용인 기반**이고 **정체성은 도메인마다 따로 올리며** **사외 누구나 쓸 수
있다** — 루브릭이 배제하는 "남의 브랜드를 담도록 설계된 중립 도구"의 정의에 가깝다.
**반대 근거도 있다**: 기본 테마 KONJO(紺青)와 다섯 일본 전통색은 중립 도구가 안 하는 선택이고,
토큰이 추상 스케일이 아니라 구체 값이다. **하이브리드**다.

**혼자 정하지 않는다** — 넣기/제외/별도 트랙(§B가 이미 제안)의 선택이고, 넣으면 "라이브러리
제외" 기준이 다음 판정에서 약해진다. **측정은 버려지지 않는다**(evidence.json 보존).

**측정 중 내 오류 2건**: ① hover→press→focus를 **마우스 안 치우고** 연속으로 읽어 hover가
눌러붙은 값을 focus로 적을 뻔했다. ② 처음 고른 Filled/Outlined/Ghost는 **문서 탭 크롬**이지
컴포넌트가 아니었다(h48·14px는 docs UI). 둘 다 다시 쟀다.

---

## ✅ 2026-09-21 — patternfly·hyundai **정식 재검증** 완료 (`148b0f23`)

첫 시도를 `evidence-integrity`가 거절했었다(`captured > checked`). 그래서 **이번엔 리뷰를
실제로 했다** — 두 레퍼런스의 출처 **14개 전부**를 오늘 실브라우저로 열어 서빙을 확인했다.
새 `checked`가 기록하는 건 그것이다: **출처 계층의 재확인**이지 토큰 값 재추출이 아니고,
안 움직인 출처의 `captured`는 그대로 둔다(그 관측이 실제로 이뤄진 날이니까).

**5개 URL이 옮겨갔을 뿐 사라진 건 없었다.** 전부 사이트 자신의 내비게이션에서 찾았고,
기록 전에 열어서 관측했다:

```
patternfly  color-live        /design-foundations/colors/     → /foundations-and-styles/colors
            about-official    /get-started/about-patternfly/  → /about-us
            releases-official /get-started/release-highlights → /releases/release-highlights
hyundai     vehicles-live     /kr/ko/e/vehicles               → /kr/ko/vehicles
            ioniq6-live       …/the-new-ioniq-6/intro         → …/the-new-ioniq6/intro
```

PatternFly는 IA를 개편했고(`design-foundations`→`foundations-and-styles`, `get-started` 제거),
그걸 알아챌 수 있었던 건 **`typography-official`이 이미 새 경로를 쓰고 있었기** 때문이다.
관측: `Red Hat Text 14px` `rgb(21,21,21)` · `HyundaiSansTextKR 16px` · 더 뉴 아이오닉 6.

**둘 다 `verified_v2` 유지, 2027-01-09 → 2027-03-19.** advisory **17 → 15 레퍼런스**,
1월 벽 **43 → 41**.

**나중에 거짓말하지 않기 위한 장부 처리**: 재지정된 출처의 드리프트 행은 **갱신이 아니라 제거**
했다 — 드리프트 행은 7월 베이스라인과의 비교인데 새 URL엔 베이스라인이 없다. 판정이 **바뀐 게
아니라 적용을 멈춘 것**이다. 반면 도달성 행은 `repointedFrom`을 달아 제자리 갱신했다 —
그 파일의 질문("이 URL이 서빙하나")에는 새 URL이 진짜로 답하니까. 각 `.verification.md`에
**무엇을 재확인했고 무엇은 안 했는지** 적었다.

---

## 🔬 2026-09-21 — 죽은 인용 **22건**(12건이 아니었다) + 재검증 큐 (`19618127`)
→ `docs/DEAD_CITATIONS_2026-09-21.md`

**전수 조사에서 22건**이 나왔다. patternfly 재검증하려고 출처 8개를 전부 열다가 드리프트가
모르던 죽은 출처 2개를 발견했고, 이유가 구조적이었다 — **드리프트는 7월 베이스라인이 있는
출처만 프로브한다(930 중 400).** 나머지 530개는 아무도 안 봤다. 그래서 930개 전부에
베이스라인이 필요 없는 질문을 던졌다: "이 URL이 아직 뭔가를 서빙하나".

**2단계로 한 게 핵심이다.** curl+UA 1단계는 **127건 실패**라고 했는데 실제 브라우저로 다시
여니 **95건(75%)이 멀쩡**했다. 1단계 숫자를 발행했으면 22건짜리 문제를 127건이라고 할 뻔했다.
429 24건은 **내 동시성 10이 만든 실패**다.

```
reachable 898 · dead 22 · blocked 6 · unreachable 4
dead: product-surface 12 · official-doc 7 · brand-asset 3   (드리프트가 알던 것 12 · 신규 10)
```

`data/source-reachability-2026-09-21.json` 커밋, 품질 빌더가 여기서 읽는다(드리프트와 **합집합**
이라 파일을 지우면 구멍이 아니라 예전 동작으로 degrade). **`source_url_dead` 11 → 17 레퍼런스.**

**구조적 발견 하나**: resend의 `brand-asset` 3건이 전부 Next.js 해시 자산
(`_next/static/media/inter_variable.p.0r27k….woff2`)이다. **배포마다 바뀐다** — 죽은 게 아니라
**인용 불가능한 종류**다. 개별 수리가 아니라 규칙 문제.

**12건 전부 실제 브라우저로 404 재확인.** 봇 차단도 JS 셸도 아니고 대부분 **사이트 자신의
브랜드 404 페이지**를 돌려준다(그래서 body 비교엔 "도달함"으로 보였다).

**12건 중 10건은 어떤 클레임도 근거하지 않는다**(banksalad 9, kream 1만 무겁다). 클레임
형태를 직접 확인하고 셌고 합계도 맞다. **그러나 "인용 안 됨"≠"쓸모없음"** — 인용 없는 출처는
흔하고(patternfly만 7개, 그중 component-index는 §4 로스터를 받친다) **출처 목록은 무엇을
들여다봤는지의 기록**이다. 그래서 **지우지 않고, 게이트도 약화시키지 않는다**(인용만 떼면
영원히 안 만료되는 우회로가 생긴다).

**사이트 내비게이션을 읽어 대체 URL을 찾았다**(추측 금지): patternfly는 섹션 개명
(`design-foundations`→`foundations-and-styles`), hyundai vehicles는 `/e/` 제거,
hyundai ioniq6는 **하이픈 하나**(`the-new-ioniq-6`→`the-new-ioniq6`). 나머지는 대체 아님 —
11st·kurly·kream은 다른 페이지, brandi는 상품 자체가 내려갔다. **banksalad가 제일 무겁다**:
9개 클레임이 전부 사라진 허브의 **filter-chip** `live-inspect` 관측이다.

**고쳤다가 되돌렸다 — 게이트가 옳았다.** 3건을 복구하고 실제로 관측까지 했더니
(`Red Hat Text 14px` · `HyundaiSansTextKR 16px`) 만료가 **1월→3월**로 가고 advisory도
사라졌다. 그런데 `evidence-integrity`가 잡았다: **"An observation cannot have been made
after the review that accepted it"** (`captured > checked`). 맞다 — `captured`를 오늘로
두려면 `checked`도 오늘이어야 하고 **그건 내가 안 한 전면 재검토를 주장하는 것**이다.
**URL 수정은 공짜 연산이 아니라 레퍼런스 재검토를 요구한다.** 3건 전부 revert.

→ **1월 강등은 막을 것이 아니라 옳은 동작이다.** 답은 뱃지 방어가 아니라 **제대로 재검증**
(그때 `checked`를 올리는 게 정직해진다). 대체 URL 3건은 조사·검증 끝나 **바로 쓸 수 있다.**
`bmw`·`onestore`·`thsr`·`wanted` 4건은 고쳐도 날짜가 안 움직여 **이 항목이 아니다**(평범한 1월 벽).

---

## ✅ 2026-09-21 — 오너 결정 C: **깊이를 노출한다** (`114fe953`)

"아이덴티티 전용을 넣을 것인가"에 **C(넣되 구분한다)**. 숫자는 이미 매니페스트에 있었고
아무도 읽지 않았다.

**재보니 무엇을 인쇄할지가 바뀌었다.** 카탈로그 전체로는 440 중 404가 인터랙티브 컴포넌트를
갖는다 — 안심되는 숫자이고 **틀린 숫자**다. 독자가 오해하는 지점을 묻어버린다. 문제는
**verified 티어 안에만** 있다:

```
verified_v2  141 →  105 인터랙티브 있음 ·  38 per-state 값 있음 ·  36 없음
```

**인터랙티브 0인 36건이 전부 verified_v2다.** `partial`·`legacy_snapshot`엔 **한 건도 없다.**
우연이 아니라 티어 정의 그대로다 — `verified_v2`는 증거 그래프 완전성을 묻고, **주장을 적게
하는 문서는 근거 댈 것도 적다.** 36건 평균 클레임 35, 나머지 62, 둘 다 커버리지 100%.
**적게 주장하는 게 뱃지로 가는 싼 길**이므로 뱃지를 깊이로 읽으면 안 된다.

세 표면, 새 어휘 없이:
- **상세 페이지**: "12 documented" → **"12 documented · 5 interactive, 5 with states"**.
  toyota와 krds 둘 다 `verified v2`인데 이제 한눈에 다르다(`1 documented · none interactive`).
  카운트 출처도 `referenceAst`(AST 없으면 null)에서 **매니페스트**(440 전부)로 옮겼다 —
  두 값이 440건 전부 일치함을 확인하고 옮겼으므로 정보 손실 0, 드리프트 경로만 제거.
- **`/api/references`**: `components`·`interactiveComponents` 추가. `qualityScore`는 깊이를
  표현 못 한다 — 실행 중인 라우트에서 확인: **krds(12/5)와 baemin(7/7)이 똑같이 0.85**.
- **목록 헤드라인**: 티어 줄 밑에 **"of the verified: 105 carry interactive components ·
  38 record per-state values"**.

퍼널 확인(AGENTS.md): `/` `/builder` `/design-systems` `/design-systems/toyota` 전부 200,
두 페이지는 소스가 아니라 **렌더된 텍스트**로 검증.

---

## ✅ 2026-09-21 — 4단계 어휘 재조사 완료: **세 시장이 서로 다른 답**
→ `docs/VOCABULARY_RESURVEY_2026-09-21.md`

| | verified | 어디에 | 민간 대기업 |
|---|---:|---|---|
| JP | 7 | 대학·지자체·중앙정부·행사 | **없음**(히타치 매뉴얼은 社外秘) |
| TW | 13 | 정부·대학 **전부** | **없음**(TSMC·MediaTek·ASUS·은행·병원·교통 직접 확인) |
| CN | 12 | 대학 5 + **민간 대기업 다수** | **있음** — 텐센트 ISUX 브랜드북 **14권** 공개 |

어휘 전환은 세 시장 다 통했다. **그 층이 어디 있는지가 시장마다 다르다.**

**에이전트 인용을 믿지 않고 13건을 다시 받아 grep**: 10 확인 · 2 내 환경 도달 불가 ·
**0 반증**. 미확인 2건(NTHU DNS·小爱 403)은 반증이 아니다.

**방법론 — 가장 이식성 높은 산출물**: **UA 갖춘 curl로도 부족하다.** TW에서 자동 페치를
막은 3개 호스트가 실제 브라우저에선 정상이었고 **그중 2개가 find**였다. 내가 재현했다 —
국가양청원은 curl 200인데 본문이 JS 셸이라 값이 없고 브라우저에서만 나온다. 텐센트 CDN은
`Referer: isux.tencent.com/brands/`가 필요하다(이것도 재현). → **이전 패스들이 curl만으로
`blocked`를 적었다면 다시 열어야 한다.**

**상한**: 700은 **지금 바뀌지 않는다.** JP 제품 여력은 그대로(+7은 아이덴티티 도메인),
TW 제품 신규 0 권장도 유지, **CN만 과소평가로 보인다**(텐센트 14권 중 4권만 열람,
하이얼·화웨이·샤오미는 기존 추정의 "11개 회사" 밖).

**새 오너 결정**: **아이덴티티 전용 레퍼런스를 넣을 것인가.** 카탈로그는 이미 넣고 있다 —
`toyota`·`sony`가 `verified_v2`이면서 컴포넌트 1·인터랙티브 0이다. 다만 그게 **의도된
선례인지는 확인된 바 없다**(둘 다 `added`가 없어 기록이 없다). 제품/아이덴티티를 **나눠
셀지가 700의 의미를 정한다.** 내가 조용히 정하지 않는다.

---

## ✅ 2026-09-21 — 2·3단계 완료: CN 게이트 + 분류 단일 enum (`942c5067`, `59678351`)

**2단계 — CN을 키우기 전에 게이트에 넣었다.** `REGIONAL_PROOF_COUNTRIES`가 {KR,TW,JP}였고
**CN만 무검사 통과** 중이었다. 게이트 밖에서 들어온 레퍼런스는 소급 검사되지 않으므로 순서가
전부다. 오늘은 **비용 0** — alipay(8)·bilibili(5)는 이미 통과하고 dji·meituan·xiaohongshu는
2026-05-19라 컷오프 이전(grandfathered).

**다만 CN만 추가했으면 금지하는 걸 허용하는 규칙이 됐다.** `PLATFORM_HOSTS`에 중국 플랫폼이
하나도 없어서 `zhuanlan.zhihu.com/p/<id>`(남이 쓴 글)가 매칭 실패 → 기본 true → **브랜드 자체
증거로 집계**됐다. 중국 플랫폼을 넣고, 계정이 아닌 경로 세그먼트(`p`·`s`·`post`·`article`…)를
거부하게 했다. **WeChat `/s/<hash>`는 공식 계정을 식별하지 못하므로 거부** — 모르면 없는 것이다.
`xiaohongshu.com`·`toutiao.com`은 **일부러 제외**(우리 카탈로그의 브랜드라, 넣으면 자기 홈페이지가
자기 증거로 안 잡힌다). 기존 게이트 대상 중 **regional 수가 변하는 레퍼런스 0건**.

**3단계 — enum 하나로, CI가 강제.** 23개 값 / 14개 enum, enum은 손으로 돌리는 툴에만 있었고
CI는 `typeof === "string"`만 봤다. **13개가 밖으로 흘렀고 UI는 raw 슬러그를 렌더링**하고
있었다(`CATEGORY_LABELS`에 없으니). **내 취향이 아니라 카탈로그 자신의 선례**로 접었다 —
스포티파이·넷플릭스·아베마·bilibili=consumer-tech, 닌텐도·크래프톤·넥슨=consumer-tech,
마이리얼트립·에어비앤비=consumer-tech. `entertainment` 4건과 싱글턴 7개는 그 옆에서 **미아**였다.
enum은 `web/src/lib/reference-categories.ts`, dji를 되돌려 **게이트가 무는지 확인**.
→ `consumer-tech`가 **135/440**이다. 거친 버킷이고 사실상 분류의 진짜 문제지만, 쪼개는 건
카탈로그를 어떻게 탐색하게 할지의 제품 결정이라 정리 커밋에 섞지 않는다.

**추정으로 깨뜨릴 뻔한 것.** `reference-fingerprints.json`의 `category`가 **201/440 불일치**라
낡은 사본처럼 읽혔다. **아니다** — `omd-init` 스킬이 그 필드로 작업 텍스트를 매칭하고, 어휘가
일부러 더 세밀하다. 맞추면 잃는 것을 **실측**했다: entertainment·travel·content **매칭 소멸**.
그래서 손대지 않았다. 진짜 결함은 반대다 — `sync-catalog`가 **신규만** `fm.category`(거친
슬러그)로 채워서 **확충할수록 세밀한 어휘가 침식**된다. 260건이면 그만큼 더.

---

## ✅ 2026-09-21 — **오너 결정: 목표 700** + 생성기 완성 (`e5087982`)

| | 결정 |
|---|---|
| **목표** | **700** — 증거 기준 유지(선택지 b). §C.3의 정직한 상한 630~710 안 |
| **CN** | **키운다 — proof gate를 CN까지 넓힌 다음에** (권장 순서 그대로) |

1000을 포기한 게 아니라 **증거 기준을 내주지 않기로** 한 것. 근거는 볼륨이 복제 가능해졌다는
것(getdesign.md 566·CJK 0 · refero 1,290 · getdesign.kr 신규). 700도 §C.3 숫자에 기대고 있고
그 숫자는 **어휘 재조사(4단계) 전까지 잠정**이라 이후 재검토 가능.

**`scripts/author-native-core-reference.mjs`** — 조사 산출물과 봉인 패키지 사이의 마지막 구멍.
**직접 매핑하지 않는다**(`migrate-design-md-core.cjs`가 검증된 매퍼고, 두 번째 구현이
드리프트 프로브·MCP 번들을 눈멀게 한 그 실수다). 매퍼 실행 → provenance/coverage를 컴파일러
모양으로 번역 → 마이그레이션 확장을 **카탈로그 확장으로 교체** → `projection.sha256` 제거.

**돌려보고서야 안 것 2건**: ① 매퍼와 컴파일러의 `provenance.json`은 **서로 다른 문서**다
(매퍼는 원본에 한 일, 컴파일러는 `decisions[]`) → `prepare`에서 죽는다.
`build-core-compiler-provenance.cjs`가 이미 그걸 위해 있다(toss 채택이 손으로 세 번 시도했던
것). CLI가 `web/references/<id>/`를 읽어서 신규엔 못 쓰므로 함수를 직접 호출한다.
② 매퍼는 이미 있는 디렉터리에 발행을 거부하는데 내 `mkdirSync`가 먼저 만들고 있었다.

**거부**: dropped 있음 · 매핑 안 된 **섹션** · 재구성/라운드트립 실패 · 레지스트리가 거부할
frontmatter · **`added` 없음**(레지스트리는 선택, 여기선 필수 — 244/440이 없어 절반 이상이
언제 왜 들어왔는지 모른다). 실제 입력에 처음 돌렸을 때 **krds를 바로 그 이유로 거부**했다.

테스트 3건: 생성기→prepare→승인→compile→리더까지 한 번에. 확장을 병기하도록 바꿔서
**실제로 물어뜯는지 확인**했다.

**안 한 것**: `authored.md`는 여전히 조사의 산출물이다. Serendie 본문은 **없고, 지어내지 않는다.**

---

## ✅ 2026-09-21 — **Stage 5 열림.** 네이티브 writer는 없는 게 아니라 이미 있었다 (`39c94ea3`)
→ 절차: `docs/NATIVE_CORE_AUTHORING_2026-09-21.md`

**정정**: 어제 "네이티브 writer가 없다, 5개 아티팩트를 손으로 만들어야 한다"고 썼다(`778907ea`).
**코드를 읽고 쓴 것이고 돌려보지 않았다.** 기존 5단계 체인이 그대로 네이티브 writer다 —
`--migration-report`가 **선택 인자**라 마이그레이션할 게 없으면 안 주면 된다.

카탈로그 확장을 실은 draft graph로 끝까지 돌린 결과:

```
compile --adopt      → DESIGN.md + .omd/system/{graph,provenance,coverage,manifest,receipt}
컴파일된 graph        → dev.oh-my-design.catalog 그대로 보존 (스펙 §6)
canonical frontmatter → 없음
readReferenceSource  → core-v2 · projected · 12키 · 출처 12건
웹 봉인 검증기        → verified
```

**즉 Stage 5를 막고 있던 건 읽기 쪽 하나뿐이었고, 그건 어제 고쳤다.** 확충의 기술적 전제는
이제 없다. 남은 건 오너 결정 2건과 draft graph를 조사 결과에서 만드는 도구뿐이다.

테스트 3건 추가. 메우는 구멍이 실재한다 — 기존 `validGraph()`가 `extensions`를 지워서
**컴파일러가 스펙 §6(확장 보존)을 지키는지 아무도 검사하지 않고 있었다.** 세 번째는 거부를
고정한다: 마이그레이션도 카탈로그 확장도 없는 패키지는 여전히 던진다(카탈로그 정체성이
없는 레퍼런스를 추측으로 만들면 안 된다).

**어제의 번들 churn을 진단 완료.** `tsup.config.ts:101`이 `capture-reference-evidence.ts`를
`skills/`로 번들하고, `prepare: npm run build`가 `npm pack`에서 돌고, `packaged-*-smoke`
테스트 3개가 pack한다 → **추적되는 7MB 파일을 스위트 중간에 비결정적으로 다시 쓴다**
(7143941 vs 7252465바이트). 이번 전체 실행에서 `activation-reuse`의 byte-stable 단언이
해시 불일치로 실패했다(격리 실행은 통과). **단순한 지저분함이 아니라 플레이크의 원인**이다.
수정은 릴리스 패키징(pack 시 생성·추적 중단) 또는 번들 결정화 — 둘 중 추측하지 않고 보고만.

---

## ✅ 2026-09-21 — Stage 5 읽기 경로 해제 (`778907ea`)

어제 막혀 있던 것을 열었다. 리더 12개가 전부 `original_segments`(마이그레이션 산물)에서
카탈로그 메타데이터를 복원하고 있었고, 네이티브 레퍼런스엔 그게 없어 전부 던졌다.

**해법은 스펙이 이미 골라놨다.** §6 "extensions는 유일한 이식 가능 확장점", §11 "린터는 새
frontmatter를 거부해야 한다" → 네이티브 패키지는 `extensions["dev.oh-my-design.catalog"]`에
country·category·added·logo·`verification_v2`·`tokens`를 **선언**한다. Core 필드가 되지 않는다.

`readReferenceSource`가 둘을 구분해 보장을 유지한다: 마이그레이션 패키지는 **reconstruct**
(원본 바이트 + 해시 검증)이고 **둘 다 있으면 이긴다**(더 강한 주장이니까). 네이티브는
**project**(패키지가 명시한 데이터의 렌더링, 해시 없음 — 충실할 이전 버전이 없다).
우선순위 규칙을 지금 써뒀다 — 세 번째 채택에서 급히 발명하지 않도록.

**웹 쪽은 이미 열려 있었고, 만들기 전에 확인한 게 중요했다.** 빌드 파이프라인과
`repository.server.ts`는 **한 패키지의 두 소비자**다. 봉인 검증기가 네이티브 패키지를
`verified`로 받는다 — 영수증 스키마가 `migration` 블록을 이미 optional로 두고 있고
`status:"adopted"`도 참이다(마이그레이션 여부와 무관하게 graph가 채택된 canonical이다).

픽스처는 krds 실제 패키지에서 **파생**(`web/scripts/build-native-core-fixture.mjs`) — 아티팩트가
해시로 연쇄(graph→provenance/coverage→manifest→receipt)라 손으로 쓰면 검증기를 속일 수
있다는 것만 증명한다. 라운드트립이 핵심: `yaml.dump`를 `JSON_SCHEMA`로 돌린다(기본 스키마는
`2026-07-11`을 Date로 되읽고 이 파이프라인의 모든 날짜는 문자열 비교다). krds 재구성본과
**deep-equal**, 출처 12건 온전.

**아직 아닌 것**: **네이티브 writer가 없다.** 새 레퍼런스를 만들려면 graph·provenance·
coverage·manifest·receipt를 손으로 만들어야 한다. 포맷과 두 소비자 경로는 증명됐고,
**writer가 다음 조각**이며 웨이브 1이 필요로 하는 것이다.

**내가 깨고 잡은 것 2건**: ① 픽스처가 `.gitignore`의 `.omd/`에 걸려 **테스트가 내 기계에서만
통과**했다(`2ae9a471`). ② 깨끗한 worktree로 검증하니 테스트가 gitignore된 빌드 산출물
(`reference-ast.generated.json`)을 읽고 있었다(`e7021cfb`). **둘 다 게이트가 아니라
`git status`와 clean worktree 실행이 잡았다.**

부수 확인: `omd install-skills`가 추적되는 7MB 캡쳐 번들을 **비결정적으로** 다시 만든다
(같은 입력에 7143941 / 7252465 바이트, 난독화 변수명이 다름). 커밋된 번들의 동작은 맞다.

---

## 🛑 2026-09-20 — 확충 계획: 오너 결정 2건 대기
→ `docs/EXPANSION_PLAN_2026-09-20.md`

**확충은 지금 시작할 수 없다.** 로드맵은 "신규는 Core v2로 직접 작성"(5단계)에서 확충이
열린다고 했는데, 오늘 스크래치패드에 **네이티브 Core v2 레퍼런스**를 만들어 돌려보니
`readReferenceSource`가 **던진다** — legacy 복원은 `original_segments`(마이그레이션 산물)에
의존하고 처음부터 Core로 쓴 문서엔 그게 없다. **오늘 게이트 통과시킨 리더 12개 전부**가
여기서 죽는다. 원인: Core v2는 카탈로그 필드(country·category·added·`verification_v2`)를
모델링하지 않고, 지금까지 legacy 복원이 그 구멍을 메워왔다.
**오늘 만든 write gate는 *마이그레이션된* 패키지를 받는다. *네이티브*는 아무도 안 받는다.**

**오너 결정 2건**: ① 목표 숫자 — 내 이전 분석(§C.3)이 **CJK 단독 상한 630~710**이라 적어뒀고
서 있는 목표는 1000이다. 추천은 **증거 기준 유지(630~710)** 또는 **커버리지로 재정의**
(getdesign.md 566·CJK 0건, refero 1,290, getdesign.kr 신규 — **볼륨은 복제 가능**해졌다).
② **CN 확대 여부** — `REGIONAL_PROOF_COUNTRIES={KR,TW,JP}`로 **CN만 게이트 밖**이다.

**선정 기준(질문에 대한 답)**: 기존 440의 **55%(244건)는 `added`가 null** — 기록된 선정
근거가 없다. 구성(KR203/US109/TW63/JP43)은 규칙이 아니라 만든 사람의 시장이다.
앞으로의 루브릭은 이미 결정돼 있다(`CJK_EXPANSION_CANDIDATES`): **브랜드 제품 디자인 언어만,
컴포넌트 라이브러리 제외**(1차 조사가 12개 중 10개를 OSS 라이브러리로 가져와 범주가 틀렸다),
Tier 1 필수, 제품·마케팅·기업은 별개 증거 도메인.

**순서(결정과 무관하게 1~4는 동일)**: ①Stage 5 해제 ②proof gate를 CN까지 ③분류 정리
(`ecommerce`43/`e-commerce`2, `fintech`61/`finance`1, 1~2개 카테고리 8개) ④JP·TW·CN 탐색
어휘 재조사(KR이 "identity/CI"로 0→4) ⑤1차 웨이브 3건(Serendie·PayPay·AntUI)로 네이티브
경로 종단 증명 ⑥JP 깊이 → CN ~30 → KR 편중.

---

## ✅ 2026-09-20 — **write gate**: 모든 리더가 패키지에 대해 입장을 정해야 한다 (`126e50b5`)

채택된 레퍼런스는 frontmatter가 **없다**. 원본 파일을 열어 frontmatter를 파싱하는 리더는
**실패하지 않는다 — 성공하고 빈 값을 돌려준다.** 이게 두 번 출시됐고 둘 다 몇 달 간격으로
손으로 발견했다(드리프트 스윕 `60c7d506`, MCP 번들 `eaceab89`).

**먼저 찾은 실제 버그 — MCP 번들** (`eaceab89`). `sync-data.mjs`가 바이트를 그대로 복사해서
**toss가 frontmatter 키 0개**로 서빙됐다(정상 피어는 12개). 국가·카테고리·티어·토큰 전부 소실,
displayName만 살아남았는데 그건 portable AST가 따로 들고 있어서다. krds는 로컬 번들이
채택 이전 파일이라 우연히 멀쩡했고, **다음 sync면 같이 죽었다.** 이 패키지는 archived라
사용자에게 나간 적은 없다 — 그래도 게이트가 필요로 하는 가장 명료한 사례다.

**정적 — `scripts/check-reader-blindness.mjs`** (husky 빠른 게이트). 범위는 **파생**한다:
package.json 스크립트/husky가 호출하거나 `web/src`·`packages/mcp/src` 제품 코드. DESIGN.md를
만지는 18개 중 12개는 raw로 안 읽고, 6개는 **이유와 함께** 등재(Core 경로, 원문 트윈 라우트,
registry-first API, dev 진단 페이지, in-place 라이터, 디렉터리만 세는 check-counts).
정말 눈먼 7개를 잡았다 — 6개는 `readReferenceSource`로 전환, `retire-template-motion`은
**라이터**라 재구성본을 덮어쓰면 채택이 풀리므로 `isCoreV2Markdown`에서 거부하게 했다.

**행위 — `catalog-integrity.test.ts`**. 채택 집합을 `.omd/system/graph.json` 존재로 **파생**
(하드코딩 금지 — 세 번째가 생기는 순간 테스트가 멈춘다). 채택 레퍼런스가 모든 생성 산출물에서
**다른 것과 같은 모양**으로 나오는지: 재구성 frontmatter 핵심 키, registry·quality 키 누락 0,
`sourceCount > 0`(드리프트 버그를 반대편에서 고정), portable AST·원장 등재.

**게이트를 만들며 내가 틀린 것 2건 — 게이트를 *시험해서* 잡았다.**
① 1차는 **파일 단위**로 "helper를 import하는가"를 물었다. `build-reference-quality.mjs`에
버그를 다시 넣어봤더니 **통과했다** — 다른 곳에서 helper를 쓰고 있으니까. 지금은 **호출
지점 단위**로 해석한다(인라인 경로거나, 같은 파일에서 DESIGN.md join이 할당된 식별자).
② 그랬더니 **자기 문서를 신고**했다 — 헤더 주석이 금지 패턴을 인용하니까. 설명을 쓴 파일이
벌을 받는 셈이라, 스캔 전에 주석을 공백 처리(줄 번호 보존)한다.

대표 회귀로 종단 검증: `build-registry`가 raw로 읽고 파싱 실패를 건너뛰면 카탈로그가 438로
줄고 **양쪽 다 발화**한다 — 정적은 줄 번호를, 행위는 "krds·toss가 registry에 없음"을 댄다.

**게이트 자신의 사각 3건**(`9c32a3ed`) — 게이트의 주장을 검증해서 잡음.
① `gen-llms-full.cjs`가 게이트 시야에서 **사라졌는데 확인 없이 등재를 지웠다.** 실제로는
`join(dir, id, 'DESIGN.md')`로 읽는다(트리 이름이 join 밖에 있음) → **발행 surface에 대한
false negative.** 게다가 **살아있는 잠복 버그**였다: 다음 재생성이면 `llms-full.txt`에
`- **toss** — <!-- design-md:section experience --> ## 1. Experience`를 발행했다. 지금 파일이
멀쩡한 건 채택 4일 전에 생성됐기 때문. → 선행 주석 줄만 제거(440개 중 그 2개만 변함).
② **배포되는 스킬 사본이 여전히 눈먼 번들**이었다(`.claude/`·`.agents/`가 수정 전 7141961바이트).
git은 아무것도 안 보여준다 — **안 바뀐 게 문제**니까. 동기화함.
③ `sourceCount > 0`은 **픽스처를 테스트**하고 있었다 — `legacy_snapshot`을 채택하는 날 깨진다.
재구성본의 출처 수와 **일치**를 보게 바꿈.

**알려진 한계(문서화, 미수정)**: 정적 층은 진입점만 본다. 새 helper를 통해 raw로 읽는
스크립트는 통과한다 — 행위 층이 백스톱. 그리고 **root 스위트 중 무언가가 캡쳐 번들을
부수 효과로 다시 쓴다**(install-skills 테스트는 아님). 확충 중 테스트를 계속 돌리면 문제.

게이트: root 1492 · web 965 · mcp 8 · tsc clean · 카탈로그 440/0 · 원장 930.

---

## ✅ 2026-09-20 — 프로브가 자기 레퍼런스 2개를 못 보고 있었다 + 죽은 인용 12건 (`60c7d506`)

전환 후 1월에 남은 46건을 "가장 먼저 만료되는 출처의 판정"으로 갈랐다 —
**(프로브 안 됨) 23 · changed 14 · 404 8 · not-comparable 1**. **46건 전부 병목이
`product-surface`(TTL 180)**다. 벽은 정책이 아니라 이 TTL 하나가 만든다.

**고침 1 — 채택 레퍼런스가 프로브에 안 보였다.** `baseline()`이 raw `DESIGN.md`를
`readFileSync`하고 키 순서를 박은 정규식으로 출처를 읽었다. 채택 레퍼런스는 DESIGN.md에
frontmatter가 **없다**(`.omd/` 패키지에 있고 `readReferenceSource`만 복원). 그래서
`krds`·`toss`가 번들이 있는데도 출처 0건 → "베이스라인 없음"으로 보고됐다. 같은 정규식이
블록 스타일(`bilibili`,`spotify`)과 다른 키 순서(`sanity`) 13건도 잃었다.
→ `readReferenceSource` + `parseReferenceFrontmatter` 하나로 통일.
새로 보인 22건 프로브: **20 unchanged / 2 changed** → krds·spotify·sanity 3월로 이동,
toss·bilibili는 실제 변화라 **정당하게 잔류**.

**고침 2 — 죽은 인용을 계측 실패로 분류했다.** `unreachable` 15건 중 **12건이 HTTP 404**(403 2건·네트워크 1건).
UA를 바꿔도 없어진 페이지는 안 돌아온다. `dead`(404/410, **레퍼런스의 결함**) /
`blocked`(403/429, 모름) / `unreachable`(네트워크, 모름)로 분리하고 모든 행에
`httpStatus`·`userAgent`를 기록. 죽은 인용 **12건/11개 레퍼런스**를 `source_url_dead`
**advisory**로 발행(강등 아님 — 7월엔 있었고 캡쳐는 보관돼 있다. 잃은 건 관측의 타당성이
아니라 독자가 따라가 확인할 능력이고, 그건 살아있는 URL로 옮겨 고칠 일이다).

    unchanged 359 → 379 · rows 400 → 422 · 1월 45 → 42 · 3월 95 → 98

**내가 틀렸던 말**: "베이스라인 없는 출처까지 넓히면 벽이 더 준다" → **아니다.** 베이스라인이
없으면 오늘 프로브는 변경 감지가 아니라 새 베이스라인이고, 오늘 갱신되는 건 0건이다.

**이 계측기는 여기까지다.** 남은 43건 중 **23건은 병목 URL이 7월 번들에 표면으로 잡힌 적이
없다** — body 비교로는 영원히 못 움직인다. 다음 계측기는 베이스라인을 번들이 아니라
**레퍼런스 자신의 `tokens.*` 주장**으로 삼아야 한다("이 출처가 근거로 댄 값이 지금도 그
표면에 있는가"). 설계만 문서화, 구현 안 함.

---

## ✅ 2026-09-20 — 만료를 **날짜에서 변경 감지로 전환** (`3aa53f28`)

오너 결정. 만료 시계가 **캡쳐일**이 아니라 **해당 출처 URL이 마지막으로 "캡쳐 때와 같은 것을
서빙 중"이라고 확인된 날**부터 간다.

**출처 단위 스윕**(69일 경과): unchanged **359** · changed 25 · unreachable 15 ·
not-comparable 1 → **비교 가능 384건 중 359건(93%) 동일**, 128개 레퍼런스.

프로브를 레퍼런스 단위에서 **출처 단위로 옮겨야** 의미가 있었다. 1차는 레퍼런스당 `home`
하나만 봤는데 **출처의 16%만 home URL에 있다** — 다른 페이지 프로브로 출처를 갱신하는 건
이 카탈로그가 막으려는 바로 그 미획득 승격이다. 출처 URL을 번들의 surface URL과 맞추니
정직한 커버리지가 895건 중 400건이 됐다. **7월 베이스라인이 없는 출처는 프로브하지 않는다** —
"이전"이 없으면 오늘 읽은 값은 변경 감지가 아니라 새 베이스라인이다.

**벽이 쪼개졌다**: 2027-01-07~09 **45건**(가장 먼저 만료되는 출처가 미확인) ·
**2027-03-19 95건**(확인됨) · 2026-11-11 1건(figma). **아무것도 그냥 통과시키지 않았다** —
가장 먼저 만료될 출처가 직접 재확인된 레퍼런스만 움직였고, 그래서 45건은 그대로다.

증거 세탁이 되지 않도록 세 성질을 테스트로 고정했다: ① 한 출처의 확인은 **그 출처만** 갱신 ·
② 확인은 캡쳐와 똑같이 늙는다(영구가 아니라 TTL 한 번 더) · ③ 확인이 없으면 **이전과 완전히 동일**.
`nextReverifyAt`도 게이트와 같은 날짜에서 센다(게이트와 모순되는 만료일은 없느니만 못하다).
`renewedSourceCount`를 매니페스트에 넣어 드리프트 리포트를 안 열어도 감사 가능하다.

**내가 오늘 먼저 깨고 못 잡은 것 1건**: API 계약 테스트가 apple의 `checkedAt`과 출처 수를
고정하고 있었는데 SPA 로스터 커밋(`cd11a528`)이 둘 다 정당하게 바꿨다. `__tests__/`와
`src/lib`만 돌리고 **`src/app`을 안 돌려** 두 커밋을 통과했다. 고치면서 "이건 픽스처를 따라가는
값이니 회귀로 단정하기 전에 픽스처를 읽어라"는 주석을 달았다.

---

## 🔬 2026-09-20 — 만료 벽: 드리프트 **전수 실측 완료** (`6cf1502f`, `59d0a9f0`)

`scripts/measure-surface-drift.mjs` · 베이스라인 `data/surface-drift-2026-09-20.json`
playwright-core 헤드리스 · **라이트 모드 강제** · 번들 기록 viewport · 경과 **69일**

| 판정 | 수 |
|---|---|
| **unchanged** | **154** |
| changed | 10 |
| unreachable | 4 |
| not-comparable(테마 반응형) | 1 (tesla) |

**비교 가능 164건 중 154건 = 94%가 네 값(color·background·font·size) 전부 동일.**
변한 10건 중 **musinsa·myrealtrip(빌드 해시)·lovable(oklch 표기)·ably(헤드리스 폰트 미로드
의심)는 드리프트가 아니다** → 실제 변화는 **6~7건, 약 4%**.
진짜로 변한 것: intuit(폰트명+색4) · recruit(Tazugane Gothic→Noto Sans JP) · toss(전면 개편) ·
kakao-login · wanted · mistral.ai.

**만료 정책에 대한 답**: 2027-01-07~09에 **141건이 한꺼번에 만료**되는데 실제로 변한 건 약 4%다.
날짜는 **135건가량의 올바른 관측을 무효화**하고, 동시에 다음 주 개편될 표면을 180일간
통과시킨다. **양쪽에서 잘못된 도구다.** 변경 감지가 더 싸다 — 이 전수가 헤드리스 1회 수 분.

**부수 발견 2건**: `inline`·`kakaopay`·`kktix`가 헤드리스에 **403**(재검증이 이 경로로는 못 봄) ·
`fixture` 번들이 `127.0.0.1:50625`를 가리킨다(`reference-capture-fixture` — 카탈로그
레퍼런스가 아니라 캡쳐 하네스 테스트 픽스처가 증거 디렉터리에 남은 것).

**남은 한계**: `body` 프로브만이라 "개편 안 됨"이지 "모든 값 동일"이 아니다 · 69일이지 180일이
아니다 · 번들에 `colorScheme` 기록이 필요하다(tesla 비교 불가 원인).

`SOURCE_TTLS` 주석이 남긴 숙제("7월 번들과 diff해서 90일에 실제로 얼마나 변하는지 알아내라")를
실행했다. 177개 번들 중 **169개**가 `home` 표면 `body`의 computed style을 갖고 있다 —
모든 번들에 있고 모호하지 않은 유일한 프로브.

**경과 69~71일, 비교 가능한 5건 중 4건이 값 하나도 안 바뀌었다.**

| | 종류 | |
|---|---|---|
| uswds · zendesk | official-doc | **완전 동일** |
| wise · coupang | product-surface | **완전 동일** |
| **toss** | product-surface | **전면 개편** — 52,000px 스크롤 애니메이션, 본문 텍스트 **144자**(7월엔 폰트 사용 1,150회) |
| patternfly | official-doc | 비교 불가(아래) |

**표면은 조금씩 낡지 않는다. 안 바뀌거나, 갈린다.** TTL은 드리프트를 시계로 모델링하는데
(product 180일 · doc 365일) 관측된 행동은 시계가 아니다. 안 변한 4건에게 만료는 아무 것도
보호하지 않고 멀쩡한 관측을 날짜에 무효화한다. 개편된 1건은 **개편 다음 날 이미 틀렸고**
180일을 기다리는 게 의미가 없다. **날짜는 양쪽 다에서 잘못된 도구다.**

TTL의 *순서 가정*(문서 > 제품 표면)은 확인도 반박도 안 됐다 — 제품 표면 3건 중 2건이
변화 없음. n=5로는 순서를 못 본다.

**버린 판독 1건 — 이게 기록할 가치의 절반이다.** patternfly가 처음엔 라이트→다크 전면
개편으로 측정됐다. **내 브라우저였다** — Chrome이 다크 모드고 patternfly가
`prefers-color-scheme`에 반응해 `pf-v6-theme-dark`를 붙인다. 나머지 4건은 테마 비반응이라
비교가 성립하고, 프로브가 그걸 확인한 뒤에 색을 믿는다.

**다음**: 169건 전수(라이트 모드 헤드리스 1회면 됨) → 만료 정책을 날짜가 아니라 변경 감지로.
번들 스키마에 `colorScheme`·`userAgent` 기록 추가.

---

## ✅ 2026-09-20 — 채택 절단 결함 해소. 서빙 **18% → 85%**, 두 정본 재채택

오너 결정(옵션 1): 섹션 예산을 들어냈다(`08cd0a4f`, `4d63413a`).

| | 이전 | 이후 |
|---|---|---|
| 440건 투영 합계 | — | 레거시 11.80MB 중 **10.01MB (85%)** |
| 채택된 정본 서빙 | **~18%** | 전체 본문 |
| 로스터 생존 | 23/42 | **42/42** |
| toss | 12,088B 로스터 없음 | **17,787B + 43개 로스터** |
| krds | 13,267B 로스터 없음 | **50,415B + 34개 로스터** |

**스펙 이탈은 셀 수 있게 만들었다.** 리포트에 `projection_word_count` ·
`exceeds_spec_word_guidance`를 넣었고 **440건 중 415건이 스펙 §3의 1,800단어 가이드를 넘는다.**
그게 이 결정의 비용이고 숨기지 않았다.

### 예산이 가리고 있던 것 20건

예산을 들어내자 `portable_core`가 440 → 419로 떨어졌다. 잘려나가던 `[FILL IN]`이 투영에
도달한 것. **"플레이스홀더 0건"은 투영에 대해 참이고 문서에 대해 거짓이었다** — 내 재작성이
한 줄 알았던 일을 예산이 하고 있었다. 20건 모두 앞의 36줄과 같이 고쳤다(kurly·google은 또
"페르소나 지어내지 말라" 산문 밑에 지어낼 빈칸).

형제 함수 `containsUnresolvedSemanticClaim`에서 2건 더 — figma는 **"productivity" 안의
"product"**, kurly는 캡쳐 경계 문장. 같은 구조 규칙을 **`scope`에만** 적용했다. 처음 셋 다에
적용했다가 테스트를 깼다(foundations의 "Foundation rules are unknown"은 진짜 자기부정).
**측정한 것만 고치고 멈췄다.**

`portable_core` **440/440 사유 0건** · 유닛 1492 · web 488 · 카탈로그 440/0 · 원장 930.
예산 하에 컴파일된 패키지 3건은 `SUPERSEDED.md`로 표시(삭제 아님 — 절단 비용의 증거).

---

## ✅ 2026-09-20 — 로스터 작업 **전면 완료**. 누적 **40건 / 1,829개 이름**

인덱스 없던 16개(브라우저 필요)까지 끝냈다(`cd11a528`). **프로브로 도달 불가능한 호스트가
실재한다는 게 이 묶음의 발견이다** — 전부 렌더된 페이지에서 읽었다.

pinterest 86 · freee 69 · apple 64 · mongodb 61 · palantir 58 · clickhouse 57 ·
digital-agency-jp 49 · thumbtack 45 · karrot 34 · line 34 · remember 32 · ubie 28 ·
miro 14 · nhncloud 14 · **socar 0** · **toss 보류**

**셋은 기계 판독 인덱스를 발행하고 있었다 — 크롤러가 안 보는 곳에.** freee·remember는
Storybook이라 앵커 0개에 로스터가 `/index.json`에 있고(오늘 likelion과 같은 모양),
apple은 렌더가 비어도 **자기 문서 JSON API**가 답해 8개 범주 파일로 64개가 나온다.

**socar는 컴포넌트 시스템을 발행하지 않는다.** `ds.type: system`인데 `design.socar.kr`은
**쏘카 브랜드 센터**다 — 브랜드 로고·에셋·표기 규정뿐이고 `/socar.design/`은 루트로 리다이렉트.
열거할 게 없어서 로스터를 안 적고 그 사실을 §4에 적었다. zigzag에 이은 **네 번째 `ds.type` 오표기**.

**toss는 보류했다.** 43개를 읽었지만 오늘 Core v2로 채택돼 정본이 패키지에 해시 결속돼 있다.
산문을 덧붙이면 결속이 깨진다. 재마이그레이션 + 두 번째 채택이 필요한 별도 트랜잭션이다.
**이 리뷰가 "11개 중 2개"로 시작한 그 레퍼런스의 실제 숫자가 43이다.**

작은 수가 맞는 경우: nhncloud 14(TOAST UI는 Grid·Chart·Editor를 독립 라이브러리로 발행) ·
miro 14(29개 중 파운데이션 7 + 템플릿 8 제외) · ubie 28.

게이트: 카탈로그 440/0 · `portable_core` 440/440 · 티어 141/183/116 · web 488 · 원장 917→**930**.

---

## ✅ 2026-09-20 — C 완료. **krds 채택. 카탈로그 두 번째 Core v2 정본**

5단계 체인 완주(`115cd802`): 오너 영수증 → 컴파일 → 채택 체크포인트 → 채택 → 리더 확인.
`coreStatus: verified` · `model: core-v2`.

| 필드 | legacy | 채택 후 |
|---|---|---|
| primary / background / foreground | #256ef4 / #ffffff / #1e2124 | 동일 |
| fontFamily | Pretendard GOV | 동일 |
| headingWeight | 700 | 동일 |
| radius | 6px | 동일 |
| **accent** | #D63D4A | **없음 — 오너가 수용** |

### 파리티 게이트가 값을 했다 — 조용한 0을 잡았다

**첫 컴파일 패키지는 깨끗하게 검증됐다** — `status: verified`, 6산출물 트랜잭션 무결성 통과,
선언 적합성 통과 — **그리고 토큰을 0개 서빙했다.** 모든 색과 radius가 `""`인데 **아무 데서도
에러가 안 났다.** 파리티 검사만 봤다.

원인은 한 시간 전 내가 쓴 provenance 변환기였다. 토큰은 **자기 경로**
(`foundations.tokens.color.body`)에 결정이 필요하다 — `core-consumer-contract.ts`가 정확히
그 키로 찾고 **못 찾으면 조용히 건너뛴다**("omit that token at its own boundary"). 나는
`.$type`/`.$value` 잎만 냈다. toss는 둘 다 갖고 있다(19 bare + 24 잎 = 19토큰에 43결정).
변환기가 DTCG 객체를 한 단위로 보게 고쳤고 krds는 0 → 24 토큰이 됐다.

**게이트 셋이 좋다 하고 하나가 비었다고 했다.** 셋은 트랜잭션(해시·산출물 수·선언 형태)을
재고, **아무도 리더가 무엇을 받는지 묻지 않는다.** toss 이후 파리티 검사를 만든 이유가 그것이고,
출하될 뻔한 패키지에서 처음으로 발화했다.

### accent는 사고가 아니라 결정

302건이 accent를 산문 정규식에서 얻고 프론트매터에 `accent` 키가 있는 건 32건뿐이다.
302건이 쓰는 대체 이름이 **18가지**라 일반 규칙이 성립하지 않는다.

toss 채택이 예고한 테스트 9건은 재발하지 않았다 — toss 자신의 채택이 계약 갭 3건을 닫고
레거시 픽스처 6건을 옮겨서 krds가 그 뒤를 그대로 지나갔다.

게이트: 유닛 1492 · web 894(파리티가 krds를 커버해 +1) · 카탈로그 440/0 ·
`portable_core` 440/440 · 티어 141/183/116 · 원장 917. **Core v2 정본 2건: toss · krds.**

---

## ✅ 2026-09-19 — B 완료. **`portable_core` 383 → 440/440, 미적합 사유 0건**

| | 커밋 | 효과 |
|---|---|---|
| 플레이스홀더 **판정 버그** | `6dd29a4b` | 383 → 402 |
| `[FILL IN]` 36줄 제거 (17건) | `17d6f7c3` | 402 → 418 |
| scope 부정 **판정 버그** | `bae760bc` | 418 → **440** |

**61건 중 2/3은 레퍼런스가 아니라 체커가 틀린 것이었다.** 이게 이 작업의 핵심 발견이다.

**① `unresolved`가 두 어휘에 동시에 속한다.** 채워넣지 않은 값이기도 하고, 스펙이 정의한
3개 폐쇄 사유 클래스 중 하나이기도 하다. 체커가 둘을 구분 못 해서 **AGENTS.md가 §3에
요구하는 다섯 줄 표**(official product-use / live surface-use / distributed asset /
declared-only / **unresolved**)를 가진 22건이 규칙을 지켰다는 이유로 탈락했다.
**스펙 자신의 정규 예시도 자기 게이트를 통과 못 했다.** 위치로 구분한다 — 사유 클래스는
행을 라벨링하니 첫 칸, 플레이스홀더는 값 자리. `| Motion | UNRESOLVED |`는 여전히 실패.

**② scope 부정 판정은 디자인 산문을 자기부정으로 읽었다.** "The green is a signal,
not a surface"(nvidia), "not a typical tech product page"(runwayml). 체커는 부정어
근처 단어를 보고 **허용 단어 목록**으로 예외 처리하는데, 그 목록이 세 번 넓혀졌고
주석에 *"워커들이 올바른 산문을 체커에 맞춰 고쳐 썼다 — 문서가 체커를 만족시키려 자신을
왜곡한 것"* 이라 적혀 있다. 어휘가 아니라 **구조**가 신호다: 본문이 scope를 긍정적으로
말하는 문장을 하나라도 가지면 다른 곳의 부정은 산문이다. 기존 테스트가 이미 그 선을
긋고 있었다(통과 케이스는 전부 긍정문+부정 꼬리, 실패 케이스는 부정만 있는 본문).

**③ 진짜 결함 36줄**은 전부 "no X was captured"를 금지된 문법으로 쓴 것이었다. 괄호가
답을 감싸고 있었거나(`| Empty | [FILL IN: no observed state] |`), 문장이 이미 말한 것을
중복했거나, **tving·coupang·kream은 "페르소나를 지어내지 말라"는 산문 바로 밑에
지어낼 빈칸을 두고 있었다.** 17개 파일 순증 -8줄. 값은 하나도 안 생겼고 부재 진술은
하나도 안 약해졌다.

게이트: scripts 281 · web 487 · 카탈로그 440 pass/0 dropped · 티어 141/183/116 불변 ·
원장 917 · tsc clean. bench 5건은 프로세스/시계 타이밍 플레이크 — 이 변경을 stash해도
HEAD에서 똑같이 실패한다.

**C(krds 채택)의 선행조건이 해제됐다.** write gate까지 남은 것은 "모든 리더가 자기 패키지를
받아들인다" 하나.

---

## ✅ 2026-09-19 — 후보 A 로스터 작업 **완료**. 25건 / **1,141개 컴포넌트 이름**

`ds.type: system` 50건 중 **인덱스를 가진 것은 전부 기록했다.**

| 회차 | 건 | 이름 | 커밋 |
|---|---|---|---|
| 1차 (에이전트 5 + 직접 1) | 6 | 386 | `7c2496c6` `0d0040d4` |
| 2차 (직접) | 5 | 275 + 유틸 10 | `ac211f6b` |
| fetch 가능 (직접) | 5 | 183 | `5bedd33e` |
| 브라우저 필요 (직접) | 8 | 287 | `d5d1e246` |

최대 **cloudscape 108** · skyscanner 91+10 · uber 89 · alipay 72 · patternfly 72 · vercel 72 ·
channeltalk 60 · smarthr 61 · wise 55 · zendesk 55 · wanted 53 · microsoft 47 · uswds 47 ·
ibm 39 · govuk 37 · hashicorp 37 · google 36 · sanity 36 · money-forward 25 · likelion 18 ·
kdan 9 · samsung 8 · hahow 4. 별도: **adobe 114개 페이지**(로스터 아님) · **servicenow 기록만**.

**신원 근거 — 25건 중 발행 컴포넌트를 실제로 측정하는 건 3건뿐이다**: patternfly 2
(`pf-v6-c-button pf-m-primary`) · ibm 1 (`cds--accordion__heading`). 나머지는 전부 제품·마케팅
표면 캡쳐이거나 선택자 위치 기반이다. govuk은 제3의 범주(캡쳐 없음 + 시스템 자신의 토큰
함수 인용).

**fetch로 못 가는 호스트가 실재한다**: skyscanner(2KB 셸·불투명 id) · likelion(Storybook
쿼리스트링 — 경로 크롤로는 구조상 불가, 답은 `/index.json`) · uber(레포 트리는 3개도 94개도
나오고 **둘 다 로스터가 아니다**, 문서 사이트가 89) · google·microsoft·sanity·wanted·samsung.
**servicenow는 자기 인덱스가 "Failed to load components"** (브라우저 2회) ·
**adobe는 Spectrum 1만 열거 가능**(S2 사이트맵 403, 사이드바 렌더 안 됨).

게이트 전부 통과 · 474/474 · 티어 **141/183/116 불변** · `portable_core` **383 불변** ·
원장 899 → **917**.

**남은 것**: 인덱스 없는 16개 SPA(apple·line·mongodb·pinterest·zendesk 외) — 렌더된 내비
읽기 필요 · B(`contains-prescriptive-placeholder` 39 · `missing-product-surface-scope` 22) ·
만료 벽(141건 전부 2027-01-10).

---

## ✅ 2026-09-19 — 후보 A 보수 2차. 누적 **11건 / 671개 이름**

2차(`ac211f6b`): skyscanner 91+유틸 10 · smarthr 61 · uswds 47 · ibm 39 · govuk 37 = **285개**.
**에이전트가 아니라 내가 직접 했다** — 5명이 55분간 파일을 못 썼고 원인의 상당 부분이 내
브리프였다("인덱스가 이긴다"면서 셋에게 틀렸거나 도달 불가능한 인덱스를 줬다).

**skyscanner는 fetch로는 불가능한 유일한 호스트다.** 2KB 셸 · `/components`는 환영 페이지로
리다이렉트 · 서빙 HTML에 컴포넌트 링크 0개 · 모든 URL이 불투명 접미사(`accordion/web-sEshz9Z5`)라
사이트맵은 이름이 아니라 id를 준다. 브라우저로 렌더한 내비게이션에서 읽었다.

**내 브리프 오류 3건**(직접 fetch해서 발견): uswds `/components/`는 556바이트 스텁이고 진짜는
`/components/overview/`(76KB) · ibm overview는 2.9MB인데 아무것도 안 나열하고 한 단계 아래
`/components/overview/components/`가 진짜 갤러리 · govuk·smarthr는 예상대로 서버 렌더.

**신원 근거 — 96 대 2를 가르는 지점**:
- **ibm은 39개 중 1개를 진짜로 측정한다** — accordion 캡쳐가 `class cds--accordion__heading`을
  들고 있다. `cds--`는 Carbon 자신의 접두사다.
- **uswds는 0개** — `usa-` 접두사가 파일에 하나도 없다. 게다가 `/components/overview/`를
  `components-live`로 **2026-07-13부터 인용**하면서 거기 적힌 47개를 안 읽었다.
- **govuk은 제3의 범주**였다 — 캡쳐 provenance는 전혀 없는데(surfaces·selector·class 없음)
  산문에서 시스템 자신의 토큰 함수(`govuk-functional-colour("brand")`)를 인용한다. 값은
  1차 출처인데 컴포넌트는 관측 기록이 없다. 9개 중 7개가 발행 컴포넌트와 이름이 겹치지만
  §4는 그 일치가 증거가 아니라고 적었다.
- **smarthr 0개** · **skyscanner는 분리** — 색상은 Backpack 자신의 `--bpk-*` 변수명(강함),
  지오메트리는 `skyscanner.co.kr` 라이브 제품(Backpack 문서 아님).

게이트 전부 통과 · 474/474 · 티어 **141/183/116 불변** · `portable_core` **383 불변** ·
원장 905 → **907**(ibm·uswds만. govuk·smarthr·skyscanner는 `verification_v2` 블록이 없어
**만들어내지 않았다** — 만들었으면 티어가 움직였다).

**남은 로스터 12건**: aws-cloudscape · uber · sanity · hashicorp · google · samsung ·
money-forward · servicenow · kdan · wanted · microsoft · hahow.
**브라우저 필요**: adobe(Spectrum 1/2 세대 구분 + 내비 클라이언트 렌더) · likelion(Storybook) ·
인덱스 없는 16개 SPA. 이건 fetch 에이전트로 또 보내면 이미 실패한 걸 반복하는 것이다.

---

## ✅ 2026-09-19 — 후보 A 보수 1차. 레퍼런스 6건에 **386개 컴포넌트 이름** 기록

| 레퍼런스 | 발행 | 기록 | 비고 |
|---|---|---|---|
| wise | 55 | 55 | 인용하던 `docs.wise.design`가 **죽어 있었다**(302 → `/404`) |
| alipay | 72 | 72 | 시스템은 **Ant Design**(Ant Group), Alipay 전용이 아님. 호스트 7개 범주 |
| channeltalk | 60 | 60 | export 인덱스 66 − 프로바이더 6. 44 정식 / 13 Alpha / 3 Legacy |
| patternfly | 72 | 70 미측정 | 인덱스가 스스로 "72 items". 패턴 9건 제외, 중복 2건은 호스트 것이라 유지 |
| vercel | 72 | 72 | 71 페이지 + `pill`(`/geist/badge#pill` 앵커, 사이트맵엔 없음) |
| zendesk | 55 | 55 | 호스트가 붙인 소제목 5개 + 소제목 없는 26개는 **범주 없이** 기록 |

커밋 `7c2496c6`(wise) · `0d0040d4`(5건). 게이트 전부 통과 · 474/474 ·
티어 **141/183/116 불변** · `portable_core` **383/440 불변** · 카탈로그 440 pass / dropped 0 ·
원장 899 → **905**(인덱스 출처 6건). `tokens.components`는 어느 것도 안 건드렸다.

**가장 중요한 건 기록한 이름이 아니라 거절한 주장이다.** zendesk의 측정 3건은
`/components/button` 문서 페이지 **위에서** 캡쳐됐는데도 Garden의 `button`이라고 부르지
않는다 — 위치는 정체성이 아니고, 캡쳐 어디에도 그것이 발행된 컴포넌트의 렌더 인스턴스라는
표시가 없다. vercel도 같은 선을 긋는다(6건 중 5건이 Geist 소개 페이지 자체의 랜딩 그리드).

**보고를 그대로 믿지 않고 직접 확인한 것**: ant.design 서빙 HTML에 7개 범주와 74개 슬러그
(→ `overview`·`changelog` 빼면 72) · bezier `src/index.ts`가 정확히 66개 모듈 re-export하고
로스터가 "미export"라 한 5개는 실제로 없음 · `badge#pill`이 Geist 서빙 HTML에 존재.
(첫 ant.design 확인은 `-L`을 빼먹어 301 본문을 읽었다.)

남은 로스터 대상 **21개 호스트**. 다음 파도 후보: skyscanner·smarthr·govuk·uswds·hashicorp·ibm·sanity.

---

## 🔎 2026-09-19 — 후보 A 전수 프로브 완료. **대상은 429가 아니라 50이었다**

스크립트 `web/scripts/probe-design-system-index.mjs`(신규, 미커밋) · 원본 `/tmp/probe-system.json`
정본 서술: `docs/SOURCE_INDEX_BLINDNESS_2026-09-17.md`

A를 계획할 때 쓴 "429개 호스트"는 틀린 모집단이었다. 이 결함("올바른 호스트를 인용하고
인덱스를 안 열었다")을 가지려면 컴포넌트 인덱스가 존재해야 하는데, 353개는 `homepage`만
있고, `ds:` 블록 86개 중 **37개는 `type: brand`**(트레이드마크 정책·폰트·보도자료·브랜드
에셋)다. 인덱스가 없는 게 정상인 것들이다. **`type: system` 50개가 실제 대상.**
`type`은 프론트매터에 처음부터 있었다 — 안 읽고 계획을 세웠다.

| `type: system` 50개 | 수 | 다음 |
|---|---|---|
| 컴포넌트 로스터 확인 | **27** | 이름 대조 완료 |
| 인덱스 있으나 경로 모양 다름 | 7 | adobe `/page/` 114개·likelion Storybook = 진짜 로스터 |
| 인덱스 없음 (SPA/정적) | 16 | 스크립트 불가 — 렌더된 내비 읽기(에이전트) |

**이름 단위 결론: 발행 1,206개 중 321개 = 26.6% — 그러나 이건 상한이고, 손으로 센 6건에서는 386개 중 2개였다(스크립트는 같은 6건을 96개로 셌다).**
추출 방식을 두 가지로 바꿔 재계산해도 27.7% → 26.6%로 1pp 안에서 움직인다 — 결론이 추출에 안 흔들린다.
`web/scripts/compare-component-names.mjs`. 부분 문자열 매칭이라 **상한**이다 — 갭을
만들어낼 수는 없고 실제는 최소한 이만큼. 불투명 슬러그(skyscanner `web-sEshz9Z5`,
krds `component_04_07`)는 제외했다.

검증: 손으로 "완전"이라 본 **yeogiotte가 3/3(100%)**, 9-18에 42개를 적은 **pega가 73%**(3단 경로라 추출이 범주를 잡음). 최악(스크립트 기준): velog 7%(단 velog는 발행 로스터가 아니라 앱 내부 컴포넌트다 — 이 행은 무효) · wise 9% · google 11% · alipay 15% ·
channeltalk 18% · uber 21% · patternfly 25% · vercel 26%.

**→ 오너 판단 기준("갭 크면 A 우선")에 따라 A가 B보다 위.**

**내 스크립트가 1차에서 틀린 것 3건**(전부 문서에 기록): 원점이 잘못된 단위라 `ds.url`
7개가 `github.com`으로 붕괴해 **GitHub 자신의 llms.txt를 일곱 번** 읽었다 · `cited`가 URL
인용 수라 krds를 `45 발행 · 7 인용`으로 판정했다(같은 날 이름 34개를 §4에 적었는데도) ·
`components` 이름표가 상한을 로스터처럼 보이게 했다. `uber/baseweb`은 `components/` 규약을
안 써서 3개로 보고됐다 — 그리고 레포 트리는 애초에 로스터가 아니었다(문서 사이트가 89개를 낸다).

**`ds:` 플래그는 처리 완료 — 그리고 내 첫 진술은 철회했다**(`636e95d3`, `399d5196`).
설명문을 열어보기 전에 "URL이 주지 않는 걸 주장한다"고 썼는데, 열어보니 셋 다 자기 URL이
뭔지 정직하게 적고 있었다. velog "컴포넌트 93개"도 `apps/web/src/components/*`로, 레퍼런스가
발행 로스터라 주장한 적 없는 것 — 내 스크립트 결함이다. 실제로 고친 것은 **설명문의 낡은
사실 2건**: velog는 토큰 위치가 `src/lib/styles/themes.ts`가 아니라 `apps/web/src/styles/
global.css`의 CSS 커스텀 프로퍼티 157개다(값은 실제로 Open Color 일치 — 그래서 삭제가 아니라
위치 정정) · banksalad는 org에 BPL이 없고 `styleguide`가 코드 스타일 가이드다.
`zigzag`는 설명문이 정확해 건드리지 않았다 — 남는 건 `type: system`의 배지 표시 문제뿐.

---

## 🔎 2026-09-18~19 — 인덱스 우선 리서치. 호스트 4곳, 로스터 2건 기록

정본: `docs/SOURCE_INDEX_BLINDNESS_2026-09-17.md`(2026-09-19 절) · 조사 원본
`.omd/execution/2026-09-18/index-rosters.md`

| 레퍼런스 | 호스트가 발행 | 우리가 인용 | 조치 |
|---|---|---|---|
| **pega** | **42** | **0** | 로스터 기록 · `use:` 명시 (`f8d8e03a`) |
| **krds** | **55** | 21 | 34개 이름 기록 (`08e9d85e`) |
| kakao | 0 (API 포털 사이트맵) | — | 없음 |
| yeogiotte | 3 | 3 | **완전** |

**9-17에 제안한 Step 0만으로는 부족했다.** 두 함정이 실측으로 드러났다:

- **내용 검사를 통과하는 가짜 인덱스** — pega의 `llms.txt`는 200·`text/plain`·1,528바이트로
  내 검사를 전부 통과하는데, 자기 두 번째 줄이 *"Generated by Yoast SEO"*라고 말한다.
  페이지 5개·컴포넌트 0개. 같은 사이트 `page-sitemap.xml`에 컴포넌트 42개가 있고, 정답은
  `llms.txt` 자신의 `## Optional` 포인터를 한 번 더 따라가는 것이었다.
  **크기·내용 검사는 소프트 404가 아님을 증명하지, 인덱스임을 증명하지 않는다.**
- **큰 인덱스가 컴포넌트 인덱스는 아니다** — kakao 사이트맵은 진짜고 316 URL인데 전부 API 문서다.
- krds는 사이트맵이 44개에 닿지만 전부 불투명 id이고, 이름을 주는 로스터 페이지는 **55개**를 낸다.

Step 0을 6단계로 고쳐 문서에 넣었고, 게이트 스텁 스킬에도 포인터를 남겼다.

**pega에 미결 하나를 남겼다.** 세 측정값이 `tokens.components`에 `type: button`으로 있고
**builder는 산문이 아니라 `type`을 읽는다.** 프론트매터에서 빼면 그걸 가리키는 **증거 클레임
24건이 고아**가 되고 `claim_path_unknown`이 즉시 partial로 강등시킨다(평가기가 옳다).
provenance 24건과 렌더링 교정의 맞바꿈은 정리가 아니라 거래라 §4에 오너 결정으로 적었다.

**증거 무결성 테스트가 이틀에 두 번 잡았다** — krds·pega 둘 다 출처를 `2026-09-18`로 캡쳐했는데
`checked`가 더 이전이었다. 레퍼런스는 자기 확인일보다 나중의 관측을 가질 수 없다. 날짜를
맞춰 내리는 대신 `checked`를 올렸다.

**내가 과했던 것 1건** — 조사 보고서의 *"빠진 섹션보다 위험하다"* 표현을 확인 없이 오너에게
전달했다. pega 레퍼런스는 §1·§9에서 자기 범위를 반복해 밝히고 있다. 보고서에 정정을 붙였다.

원장 897 → **899**. 품질 141/183/116 유지. 웹 955/955.

---

## ✅ 2026-09-18 — 오너 승인 02~05 전부 처리 완료

| | 결정 | 상태 |
|---|---|---|
| **02** | `/design-systems` **유지** | AGENTS.md에 결정으로 기록(`df16523f`). 착지→builder 도달률은 05 때문에 여전히 미측정 — 구조 근거만으로 선 결정 |
| **03** | advisory **모션 제외**(390 → **198**) | `detail-view.tsx`(`dc767a69`). 평가기는 그대로 계산하고 **렌더링만** 바꿈 |
| **04** | 보류 스프린트 **커밋 1건** | `aa89ca23` 290파일. 작업 트리가 처음으로 깨끗해짐 |
| **05** | GA4 **GCP 재생성** | 절차 `docs/ANALYTICS_RECOVERY_2026-09-18.md`. **오너 콘솔 작업 대기** |

**03의 핵심** — `motion_value_unsourced` 261건을 레퍼런스별 결함 목록에서 빼되 **숨기지 않는다.**
별도 줄로 전역 사실을 말한다: 공식 DS 발행처 중 모션 스케일을 내는 곳이 없고, 토스는 자체
질의 엔드포인트로 "값은 문서가 아니라 Figma UI Kit 안에 있다"고 답했다. 192개는 오직 모션
때문에 그 블록을 달고 있었고, 이제 안 단다. **목록에서 빼는 것과 숨기는 것은 다르고, 그 별도
줄이 그 차이를 만든다.** 프로덕션 빌드로 확인: 29cm(모션만)는 블록이 사라지고 전역 줄만,
17live(모션+팔레트)는 블록 유지·모션만 빠짐. builder는 advisory를 렌더하지 않아 무관.

**커밋 누락 1건 발견·수정** — `b7299cee`가 `verify-primary-tasks.mjs`·기록 문서·초안 JSON을
빠뜨린 채 나갔다. 그 커밋 메시지는 초안 경로를 명시하는데 트리에 없었다. 원인은 내가
`git add`에 `2>/dev/null`을 붙여 실패를 삼킨 것. `dc767a69`로 보완했다.

**05가 막고 있는 것:** 02의 나머지 절반, 2026-06 활성화 누수 재측정, `scripts/analytics/` 5개 전부.

---

## 🟢 2026-09-18 — **438개 Primary tasks 완료.** `missing-primary-task` 0

커밋 `b7299cee`. 정본: `docs/PRIMARY_TASKS_2026-09-18.md`

| | |
|---|---|
| 과업 | **1,907** · 438 레퍼런스 · 평균 4.4 |
| `missing-primary-task` | 438 → **0** |
| `portable_core` | 1 → **383 / 440** |
| 카탈로그 | 440 pass · dropped 0 · 웹 955/955 |
| 남은 사유 | `contains-prescriptive-placeholder` 39 · `missing-product-surface-scope` 22 |

**문장은 유도하지 않았다.** 에이전트 72배치가 각자 레퍼런스를 읽고 초안을 썼고, 스크립트는
넣기만 했다. 초안 전문은 `docs/primary-tasks-drafts/2026-09-18-drafts.json`에 인용과 함께 남아 있다.

**`web/scripts/verify-primary-tasks.mjs`** — 과거 결함 2종(baemin 표면 혼동, `"Jobseekers."`)을
기계적으로 막는다. 인용은 정확 부분문자열 8단어 이상, 마케팅 섹션 출처 거부, 동사 시작, 5단어 이상.
**통과한 것만 적용 형식으로 나가므로 미검증 문장이 레퍼런스에 닿을 경로가 없다.**

**1,907개 중 실제 결함 거부 0건.** 거부 3건은 전부 내 검증기 오탐이었다 —
`-ance`가 "Refinance"를 죽였고(`-ment`는 Implement, `-ion`은 Question도 죽인다),
마케팅 표면 id가 `home`이라 "the home"이 든 정상 과업을 죽였다. 둘 다 좁히고 이유를 코드에 남겼다.
**가설을 잡으려고 진짜 작업을 버리는 검사는 검사가 없는 것보다 나쁘다.**

**3개 바닥 → 2개.** `hyundaicard`가 2개로 왔고 맞았다(제품 홈 1 + 기업정보 2 라우트).
강제했다면 없는 과업을 만들게 했을 것. 2개인 11건은 전부 **레퍼런스 자신의 거절을 인용한다** —
stripe는 결제 회사인데 "결제" 과업이 없고(캡쳐가 Docs 3라우트), yanolja는 예약 서비스인데
예약 과업이 없다(§5·§7·§14가 금지). `shinhanbank`는 시키지 않았는데도
*"the brand-asset download action … belong to the group marketing site"*라며
**baemin에서 났던 폰트 다운로드 결함을 스스로 배제**했다.

**경합 1건:** 에이전트가 내 읽기 뒤 파일을 갱신 → 멱등 적용이 잡음 → 프롬프트에 "한 번에 저장"
추가 → 마지막에 72배치 전량 재검증(438/438 clean, 적용 0건).

**내 오판 1건:** baemin 롤백 카나리의 staged 파일을 현재 원본에서 다시 만들었는데, 그건 현재
원본의 투영이 아니라 **동결 픽스처**였다(구 파일에 현재 baemin에 없는 섹션이 있다). 되돌렸고
바뀐 건 legacy 바이트 핀 하나뿐.

---

## 🟢 2026-09-18 — **toss 채택 완료.** 카탈로그 최초로 Core 패키지에서 서비스된다

커밋 `482fceca` (채택) · `e307ccbb` (기반). 트랜잭션 `479e241fceb4c384`.

**게이트가 요구한 증명이 나왔다.** `CORE_V2_CATALOG_WRITE_BLOCKED`의 미충족 조건은
*"every catalog reader accepts its package"* 하나였고, 그 거리가 얼마인지 아무도 몰랐다.
이제 답이 있다 — 일어났기 때문이다:

- `/design-systems/toss` · `/builder` · `/toss/design.md` · `/r/toss` **전부 200** (프로덕션 빌드)
- builder 프리뷰가 팔레트 · **Toss Product Sans** · Primary tasks 6건 ·
  `radius.button-medium 10px`를 **패키지에서** 렌더한다
- **"✓ Portable Core"** 배지, Evidence **57 claims · 23 bindings**
- 채택 커밋이 husky 전체 게이트 통과 (파이프라인 5단계 + 474 단언)

**체인은 오너 게이트 4개를 지났고, 기록에 없던 다섯 번째 장애물을 만났다.**
컴파일이 r2를 거부했다 — 마이그레이션 형태 provenance. 9-08 설계가 예고했으나 리허설이
필드 하나만 묶고 멈춰 이론으로 남아 있었다. r3(바이트 동일)로 컴파일, r4는 미리보기가
바뀌어 오너가 다시 봤다.

**막판에 게이트가 두 번 더 잡았다.** `build-registry`·`build-reference-quality`·
`build-reference-ast`·`build-reference-quality-data`가 전부 frontmatter를 읽는데 채택본엔
없다 — Core v2는 디자인 시스템을 기술하지 카탈로그 항목을 기술하지 않으므로 country·
category·logo가 들어갈 자리가 없다. 원장은 더 나빴다: **toss를 조용히 빠뜨려 897→887**.

데이터는 안 잃었다. 마이그레이션이 세그먼트 전부를 보존하고 이어붙이면 채택 전 파일이
**바이트 동일**로 복원된다(`source_reconstruction_equal`이 줄곧 단언하던 것). 리더가
데이터를 못 찾은 게 아니라 **더 이상 없는 곳만 보고 있었다.**
`web/scripts/lib/reference-source.mjs`가 양쪽 다 해결한다 — 해시 검증 포함.

### 다음 레퍼런스를 채택하기 전에 알아야 할 것

레지스트리·품질 데이터·원장을 먹이는 frontmatter가 이제 패키지 안에 있고, 읽는 건 전부
`lib/reference-source.mjs`를 지난다. **`DESIGN.md`를 직접 여는 새 스크립트는 Core 문서를
읽고 throw하거나 레퍼런스를 조용히 건너뛴다.** 조용한 쪽이 더 나쁘고, 이미 한 번 일어났다.

채택 전 바이트는 `.omd/execution/2026-09-18/toss-pre-adoption-backup/`에 있다
(완료된 트랜잭션은 자기 백업을 지운다).

**상태: 440/440 마이그레이션 · portable_core 1/440 · verified 141 · 955/955 · 원장 141/897.**

---

## 🟠 2026-09-18 — 오너 5건 승인. 채택 체인을 돌리다 **폰트 손실**에서 멈췄다

정본: `docs/ADOPTION_CHAIN_2026-09-18.md`

**뚫은 것.** r2 영수증 발급 후 컴파일이 거부됐다 — r1·r2의 `provenance.json`이 마이그레이션
형태라 컴파일러 스키마(`schema_version`/`design_md_sha256`/`graph_sha256`/`decisions` 넷만 허용)를
위반한다. 9-08부터 잠복해 있던 구멍이고, 전체 레퍼런스로 컴파일을 끝까지 돌려본 적이 없어
오늘 처음 드러났다. `decisions` 37건은 그대로 두고 포장만 바꿔 **r3**를 만들었고
(`r2/DESIGN.md`와 **바이트 동일** — 오너가 검토한 내용 불변, 근거는 `WHY_R3.md`),
**카탈로그 최초로 컴파일에 성공**했다. 6산출물 + 채택 영수증.

**증명한 것.** 실물 패키지를 정본 자리에 놓고 재니 `coreStatus: **verified**`,
`model: core-v2`, 색은 전부 정상. **게이트가 요구한 "리더가 패키지를 수용한다"의 답이 나왔다.**
(중간에 마이그레이션 *스테이징* 사이드카로 시험해 "OG가 500난다"고 잘못 판단했다가 즉시 정정.
실물에서는 그 실패가 없다. 남는 사실 — 검증기가 거부하면 토큰이 `""`가 되고 OG 라우트가 터진다.)

**고친 것.** `.gitignore`의 `.omd/`가 채택 사이드카까지 삼켜 **Vercel은 영원히
"패키지 없음" 상태**였을 것. `!web/references/*/.omd/**` 추가, 루트 `.omd/` 무시는 회귀 확인.

**멈춘 이유 — 채택하면 `fontFamily`가 `"Toss Product Sans"` → `""`가 된다.**
마이그레이터가 타이포를 `typography_assets.rules` 산문으로만 옮기고 `roles`/`assets`
타입 슬롯을 비워 둔다(색은 `foundations.tokens`로 승격되는데 타이포는 아니다).
**스키마에는 자리가 있다** — Core v2의 한계가 아니라 마이그레이션 갭이다.
810회 관측으로 검증된 값이 산문에는 있고 타입 필드에는 없다.

`dropped_segments: 0` · `roundtrip_equal` · `reconstruction_equal` 셋 다 **참이고 불충분하다.**
셋 다 마크다운 왕복을 잰다. **투영된 필드의 동등성은 아무도 재지 않았다.**
> 마이그레이션은 텍스트로는 무손실, 데이터로는 유손실이다.

AGENTS.md는 검증된 폰트 패밀리를 지우는 것을 명시적으로 금지한다. 오너 승인은 이 사실이
알려지기 전에 나왔고, 승인 범위는 "5단계를 돌려라"이지 "검증된 값을 지워라"가 아니다.
표본 60개 중 13개가 UI 폰트 패밀리를 갖고 있어 **toss만의 문제가 아니다.**

**채택 전에 필요한 것:** (1) 마이그레이터가 `typography_assets.roles`/`assets` 승격
(2) 손실 게이트에 **투영 동등성 검사** 추가 (3) 그다음 테스트 9건 → 채택 → 미러 → 빌드 확인.

승인 02~05는 아직 미착수(01이 예상보다 깊었다). 951/951 통과, 정본 원상.

---

## 🔴 오너 승인 대기 5건 — 정본: `docs/OWNER_DECISIONS_2026-09-17.md`

각 항목의 근거 수치·선택지·실제 명령은 그 문서에 있다. 요약:

1. **toss r2 승인 → 채택.** 운영 위험은 **직접 시험해 답을 냈다** — Core v2 문서를 정본 자리에
   넣고 전체 스위트 실행 결과 **951건 중 942 통과**. 리더는 견딘다(`repository.server.ts:81`이
   `isCoreV2Document`로 이미 이중 판독). 깨지는 **9건**은 계약 갭 3(catalog-integrity의 `---`
   frontmatter 요구, evidence-integrity 만료 집계, reference-ast-fleet 무손실) + **toss를 legacy
   픽스처로 하드코딩한 6건**(`expected 'core-v2' to be 'legacy'`). 시험 후 정본 바이트 동일 복원.
   → **write gate의 "every catalog reader accepts its package" 거리가 처음으로 측정됐다: 9건/6파일.**
   리더 4개 2,834줄 재작성은 불필요 — `consumer-adapter`가 앞에서 흡수한다.
   명령은 **5단계**(4단계 아님). `--reviewer`는 자유 문자열, `kwakseongjae` 제안.
2. **advisory 노출 범위.** 390/440이 표시됨(verified 106·partial 176·legacy 108 — **검증 141건의 75%**).
   `motion_value_unsourced` 261이 압도적인데 **아무 DS도 그 스케일을 발행하지 않는다**는 게 오늘
   밝혀졌으므로 레퍼런스별 결함이 아니다. 선택지: (가)390 (나)**198**(모션 제외, 권고) (다)티어 게이트.
   192개가 오직 모션 때문에 표시되던 것. ※ 261/162/273은 서로 다른 측정이다.
3. **미커밋 119건**(128 아님). 오늘 8건 스테이징 완료 / 9·7~9·8 보류 스프린트 / 표류(`web/dbg.tmp.mjs`).
4. **애널리틱스 복구(신규).** `scripts/analytics/` 전부 무동작 — GA4 SA의 **GCP 프로젝트가 삭제**됐고
   (`Project #95733920708 has been deleted`) Mixpanel은 플랜이 API를 막는다(402), Vercel Analytics 미설치.
   2026-06 활성화 누수 같은 지표를 **지금 아무도 다시 잴 수 없다.** 메모리 `project_analytics_stack.md` 정정함.
5. **`/design-systems` 유지·대체·제거.** 권고는 유지. 근거의 절반(착지→builder 도달률)은 4번에 걸려 있다.

---

## 🔵 2026-09-17 저녁 — 오너 지적 2건 처리 완료

### 1. 라우트 — 지목이 반대였다. AGENTS.md가 원인이었다

오너: *"design-systems는 사실 그냥 아무것도 아니거든 … 너만 해도 지금 10번은 실수하고 있어."*

실측 결과 `/design-systems/<id>`는 **440개 색인 + JSON-LD + builder 진입 CTA**를 지는
영문 SEO/AEO 랜딩이다. "아무것도 아닌" 쪽은 `/reference/<id>` — 61줄, `noindex`,
사이트맵 부재, canonical을 이미 `/design-systems/<id>`로 넘긴다.

반복 실수의 기계적 원인: **AGENTS.md가 죽은 라우트를 "the catalog/detail"이라고 적고 있었다.**
매 세션 주입되는 문장이라 읽는 에이전트마다 같은 쪽으로 틀렸다. **수정 완료.**
정정 1건: AEO는 깨끗하지 않다 — AI 검색은 `llms.txt`가 아니라 색인된 HTML을 인용하므로
440개 페이지가 곧 AEO 표면이다. 순수 에이전트 채널만 깨끗하다.
근거·권고: `docs/ROUTE_IDENTITY_2026-09-17.md`.

### 2. 토스 — 찾아놓고 목록을 안 읽었다

오너: *"토스는 design system이 공개되어 있는 몇 안되는 기업인데 … 왜 못찾았어?"*

레퍼런스는 **처음부터 올바른 호스트**(`tossmini-docs.toss.im`)를 인용했다. 놓친 건 로스터다.
TDS 공식 **11개 코어 컴포넌트** 중 우리가 측정한 건 **2개**(Button, Badge).
인덱스는 `developers-apps-in-toss.toss.im`(개발자 포털)의 `llms.txt`(32.8KB, 링크 258개)에 있고,
모든 페이지가 `.md`를 준다. 이름 추측(`toss.design`/`design.toss.im`)으로는 영원히 못 닿는다.

절차 결함: `omd:add-reference` Phase 2에 **"그 사이트가 자기 문서 목록을 발행하는가"** 단계가 없다.
DS 호스트 10개 실측 → **5개가 인덱스를 발행 중**(kakao sitemap 316 URL, krds 81·컴포넌트 45,
yeogiotte 40, pega llms.txt, baemin 5). 한 번도 읽지 않았다.

모션 주장은 **철회하지 않는다** — TDS 자체 질의 엔드포인트가 "수치는 문서에 없고
Figma UI Kit 안에 있다"고 1차 확인. §15가 "출처 없는 면책" → **"출처 있는 부재"**로 승격.

반영: `web/references/toss/DESIGN.md` surfaces +3 / sources +4(라이선스 포함),
§4 공식 로스터(측정 2·미측정 9는 이름만, 토큰 0건), §15 재작성. 미러 2곳 동기화, **453/453 통과**.
검토 패키지는 출처 추가 전이라 스테일 → `toss-core-review-r2`로 **재생성 완료**
(`portable_core: true`, dropped 0, 적합성 사유 0). 구 패키지 보존.
근거·절차수정안: `docs/SOURCE_INDEX_BLINDNESS_2026-09-17.md`.

**오너 확인 필요:** Core v2 투영이 §4 산문(로스터)을 불투명 확장으로 흡수해 **채택 후에는
렌더되지 않는다.** 지금은 legacy 리더가 보여준다. 컴파일러 스펙 변경은 검토 직전이라 보류.

---

## 현재 사용자 지시와 실행 범위

오너가 2026-09-16에 우선순위를 다시 정했다.

1. **440 DESIGN.md 리뉴얼을 최우선으로 빨리 끝낸다.**
2. **랜딩 "와우" 작업(ODDLY/Aphrodite 랜딩 스킬/F4)은 보류한다.**
3. 별도 제품 **aphrodite-mela**(로컬 macOS 디자인 워크벤치)와의 연계를 강화한다.
4. 디자인 시스템 카탈로그 **블로그**와 **1000개 확충**(CJK — 中/日/臺/韓 집중, getdesign.md·refero 대비 강점).
5. **스킬 간 테스트는 후순위.**
6. 가용 모델은 opus. 병렬 처리하되 검증까지 포함한다. 리서치·기획은 fable 허용.

포맷 전략: **`docs/OMD_FORMAT_STRATEGY_2026-09-16.md`** — 업계 대조 결과와 Q10·Q11.

실행 계획 정본 2종:
- **`docs/OMD_ROADMAP_2026-09-16.md`** — 무엇을·왜 (진단·트랙·근거)
- **`docs/OMD_EXECUTION_PLAN_2026-09-16.md`** — 언제·누가·어떤 순서로 (주차별·마감 역산)
근거 보고서 4종: `docs/research/2026-09-16-briefing/`.
이전 로드맵(`OMD_NEXT_ROADMAP_2026-09-08.md`)의 5트랙은 폐기가 아니라 재우선순위다.

## 🟡 만료 벽은 2027-01-10으로 이동했다 (오너 결정 2026-09-17)

**TTL 상향: `product-surface` 90 → 180, `official-doc` 180 → 365.** 10-10 벽은 사라졌고
새 벽은 **2027-01-10**이다(01-07까지 140, 01-09에 112, 01-10에 0). 부수 효과 2건:
`figma`가 만료 근거 1건 때문에 partial이었다가 verified로 올라 **141/183/116**이 됐고,
`verified_v2`가 아니면 `notFound()`하던 영문 SEO 5개(`evolution/page.tsx:48`)의
404 위험도 2027-01로 밀렸다.

이건 위조 1번과 **글자 그대로 같은 편집**이다. 가르는 것은 편집 내용이 아니라 누가 무슨
근거로 정했고 어디 적혀 있나다 — 근거는 `web/scripts/lib/reference-quality.mjs`의 상수
주석에, 계측은 `web/__tests__/evidence-integrity.test.ts`에 있다. 가드는 이 편집을 막지
않았고, **막으라고 만든 것도 아니다.** 마감 직전에 조용히 일어날 일을 결정으로 만들었다.

**산 것은 시간이지 품질이 아니다.** verified 141개의 컴포넌트 평균은 여전히 2.9(legacy 9.9)다.
연장만 하고 캡쳐를 안 하면 1월에 같은 문제 + 6개월치 드리프트로 다시 만난다.
그리고 **배치 문제는 그대로다** — 여전히 한날 전량 만료다. 복구분은 날짜를 흩어야 한다.

180일이 맞는 숫자인지는 **아직 측정이 아니라 판단이다.** 이제 잴 수 있다 —
7월 번들이 `artifacts/reference-evidence-2026-07/`에 동결돼 있으니 몇 개 재캡쳐해
diff하면 라이브 표면이 90일에 실제로 얼마나 변하는지 나온다.

### 원래 진단 (배경)

140개가 전부 2026-07-11~14 한 배치로, 당시 TTL 90일인 `product-surface` 근거 위에서
검증됐다. 그 티어는 카탈로그에서 가장 쓸모없는 티어다 — 7월 승격은 증거를 더해서가 아니라 **컴포넌트를 지워서**
통과했다 — **실측 2026-09-17**: verified 평균 컴포넌트 **2.9**(<5개가 140 중 106개, 0개가 6개) vs
legacy **9.9**, partial **8.3**. 문서 크기는 verified가 20.6kB로 제일 작지만, 산문을 표로 바꿔서가
아니라 컴포넌트를 잃어서 작다.
그리고 전환을 따라가는 건 티어 뱃지가 아니라 컴포넌트 수다(상위 140개: ≥5 → 0.499, <5 → 0.386;
순위 61~140에선 legacy가 verified보다 높다).

고칠 증거는 이미 있다 — `artifacts/reference-evidence/` 177개 번들(145MB), 번들 평균 49.2개 컴포넌트
vs 출하 2.9개(94% 폐기). **Q7 해결(2026-09-16): git에 올리지 않는 것으로 확정.** 내부 캡쳐 산출물이므로 저장소에
넣지 않고 제거도 하지 않는다. 대신 보관 증명을 구축했다 — `.gitignore` 사유 명시,
`artifacts/README.md` 컨벤션, `artifacts/local-store.manifest.json`(510파일/145.4MB SHA-256),
`npm run local-store` 검사. 기존 `~/.omd/bench-store` 선례와 동일한 방식.
**남은 것은 백업 한 곳** — 매니페스트는 손실을 알려줄 뿐 막지 못한다.

**작업 분해(실측, 번들 140/140 확인)**: R형 55개 = 번들에 상호작용 증거가 이미 있어 재투영만 하면 된다
(브라우저 실행 0). C형 85개 = 상호작용 켠 캡쳐 1회 필요.

**가장 먼저 만료되는 10개가 가장 중요한 10개다** — 10-09 코호트는
`29cm apple baemin kakao karrot krds line naver toss yeogiotte`이고
toss·karrot·baemin·kakao가 수요 1/3/4/5위, 전체 select의 ~35%. 내역 R 6 / C 4.

### ✅ 첫 레퍼런스 end-to-end 완료 — `krds` (2026-09-17)

도구를 세 번 연속 먼저 고치고도 갱신된 레퍼런스가 0이라, 한 건을 **손으로 끝까지**
했다. 결과: 상태 인덱스 **4 → 5**, 클레임 **193 → 199**, verified 유지, 덮어쓴 값 0.
`button-primary +focus`, `button-secondary +hover/pressed/focus`,
`button-tertiary +pressed/focus`.

**그리고 하네스 재설계였다면 숨겼을 것 세 가지가 나왔다.**

1. **내가 커밋한 근본 원인이 틀렸다.** DOM 순서 절단이 아니라 버튼이
   `display: none`인 **"코드" 탭 패널** 안에 있어서 `0x0`으로 측정됐고 가시성 필터가
   정당하게 걸렀다. 내가 만들려던 수정(예제 컨테이너 우선·중복 제거)은 아무것도 못
   고쳤을 것이다. 필요한 건 **탭을 여는 것**이다.
2. **칠해진 색은 authored 토큰이 아니다.** 일곱 중 둘이 채널마다 1씩 다르다
   (`#0b50d0` vs `#0c51d1`). 레퍼런스가 이미 authored 값을 갖고 있었고 맞았다.
   `getComputedStyle` 값을 그대로 썼으면 **맞는 토큰을 틀리게** 만들었다.
3. **기하 불일치가 불일치가 아니었다.** 민 `.krds-btn.primary`는 `large`(56/8/19)로
   렌더되고 문서의 48/6/17은 `medium` 변형이다. 같은 페이지에서 확인했고 손대지 않았다.

증거 원장이 실제 콘텐츠 편집에서 처음 작동했고 변경을 정확히 지목했다.
다음 9개의 템플릿이 생겼다. 상세: `docs/CAPTURE_ATTRIBUTION_2026-09-17.md` 정정 절.

### ✅ 수요 상위 10개 완료 + 천장은 90%다 (2026-09-17)

**10개 결과**: `krds` 4→5 · `toss` 0→1 · `karrot` 0→1 · `apple` 0→1 · `29cm` 7월 값
독립 재확인 · `naver` 색 변화 없음(부재 기록) · `baemin` 문서 값 재현 안 됨(**충돌 보존**) ·
`line`·`kakao`·`yeogiotte` 측정 불가(사유 기록). `component_state_prose_only` 146 → **143**.

도구 2종: `npm`으로 안 감싼 `web/scripts/probe-component-states.mjs`(상태 측정)와
`survey-measurability.mjs`(측정 가능성 분류).

**천장 정정.** 상위 10개에서 5개가 막혀 "발행 방식 때문에 절반이 불가능"이라고 적었는데
**표본으로 재보니 90%가 측정 가능하다.** 분류기를 세 번 고쳤고 두 번 틀렸다 —
33% → 77%(표면 3개 시도 + 흰 배경 테두리 컨트롤 인정) → **90%**(실제 브라우저 신원).
막힌 10개 중 **8개가 헤드리스 탐지**였다. `baemin`을 403으로 기록한 건 내 잘못이었고
정정했다 — 실제로는 열리고 `woowa-more-light`가 문서 값과 전부 일치했다.

**진짜 제약은 발행 방식이 아니라 레퍼런스당 사람 시간(15~25분)이다.**
전말: `docs/MEASURABILITY_SURVEY_2026-09-17.md`.

측정 가능하다고 상태가 있는 건 아니다 — `naver`·`baemin`·`toss`는 재봤더니 **색이 안 변한다**.
그것도 결과이고 부재로 기록한다.

### 🔴 캡쳐 트랙 선행 조건 — 하네스가 문서화된 컴포넌트를 못 잡는다 (2026-09-17)

상태 델타를 가진 66개·측정 요소 264개를 그 레퍼런스가 문서화한 컴포넌트와 대조했다.
배경+높이 둘 다 맞아 **귀속 가능한 것은 19개(7.2%)**. 7월 번들에 델타가 4,748개인데
토큰에 배치된 게 37개뿐이었던 이유다.

`krds`로 추적했다. 라우트에 컴포넌트 페이지가 **이미** 있고 클레임도 그 표면을 가리키는데,
문서화된 `button-primary`(`#256ef4` 48px)가 8개 표면 전체에 **0개**다. 세 가지가 겹쳤다 —
(1) `captureStates()`가 `.slice(0, 24)`, 상호작용 캡쳐가 `.slice(0, 120)`으로 **DOM 순서
절단**인데 문서화된 버튼 3개는 semantic 345개 중 **302·303·304번**이다, (2) 중복 제거가
없어 18번 반복되는 크롬이 1번뿐인 정본을 이긴다, (3) `sample-view` 같은 **정본 예제
컨테이너 개념이 없다**.

**라우팅 문제가 아니다** — 갈 곳은 아는데 도착해서 무엇을 볼지를 모른다. 고치기 전에
재캡쳐하면 귀속 불가능한 증거를 다시 만든다. 수정안·근거: `docs/CAPTURE_ATTRIBUTION_2026-09-17.md`.
**미착수 — 오너 판단 필요.**

별건으로 **만료일 분산이 아직 열려 있다**: 상위 10개가 전부 2027-01-07이고, 오늘 한꺼번에
재캡쳐하면 2027-03-16에 또 한날 전량 만료한다. 날짜를 임의로 적는 건 위조 4번이다.

### 🔴 새 발견 — 모션 값 254건이 템플릿이다 (2026-09-17)

캡쳐 하네스는 모션 속성을 **하나도** 수집하지 않는데, 254개 레퍼런스가
`motion-instant/fast/standard/slow/page` 스케일을 **사실로** 싣고 있다. `motion-fast 120ms`가
147개 브랜드에 동일하게 나온다 — 관측이 아니라 생성이다. 격리 표기된 것은 2개뿐이고,
`banksalad`가 올바른 처리의 본보기다(관측 1건만 남기고 나머지는 synthetic으로 격리).

게이트가 못 잡은 이유: 평가기는 `tokens.*` leaf만 본다. 모션 값은 **토큰 블록 밖 산문**에만
있어 클레임 경로가 없다. 증거 없는 수치가 토큰 층 밖에 있으면 현재 어떤 검사도 통과한다.

**탐지기 완료.** `npm run prose-values`(말뭉치 차원 template 판정, elevation 포함) +
평가기 advisory `motion_value_unsourced`(**286건**, 비차단). 표준 이징 곡선은 공유돼도
증거가 아니므로 제외했고(그래도 비표준 `cubic-bezier(0.2, 0.6, 0.25, 1)`이 167개 브랜드에
동일), `banksalad`처럼 스스로 격리한 것도 제외했다.

**분류**: template **273**(805 KB) · 부재 명시 61 · 값 없음 87 · grounded 8 · 자체 격리 3.
elevation은 건강하다(grounded 163 / unsourced 33) — 모션이 예외다.

template 273건의 두 축: **공식 DS URL 있음 18 / 없음 255**(후자는 대조할 1차 출처 자체가
없다), **단서 달았음 187 / 단서 없이 사실로 제시 86**. `adobe`는 표 아래에
*"illustrative defaults … not publicly documented"*라고 적어 두고 표는 검증 토큰과 같은
형식으로 싣는다.

**A2 Tier-1 대조 완료.** 공식 DS URL 18개 중 6개는 상표·폰트 페이지(모션 있을 수 없음).
남은 12개에서 **5단 스케일을 발행하는 곳을 하나도 찾지 못했다** — Spectrum은 공식
design-data 저장소에서 애니메이션을 정성적으로만 기술하고, GOV.UK·DADS·socar도 값이 없다.
실제 값은 `smarthr` `Switch`의 `duration-150 ease-out`처럼 컴포넌트 일회성이다. 4개
(`hubspot` `money-forward` `sendbird` `ubie`)는 확인 못 했지만 결론은 같다 — 입증 책임은
주장에 있다.

**A1 처리: 30개.** (1차에 130개라고 했다가 **100개를 되돌렸다** — 외부 검토에서 orphan
가드의 정규식이 `` `motion-standard / ease-enter` `` 형태를 놓쳐 막아야 할 것을 통과시킨
게 드러났다. `adobe`는 표를 지우자 *"…curves above are illustrative defaults"* 만 남아
매달렸는데, 내가 작업 중에 보고도 오탐으로 판단하고 넘어갔다.) advisory 286 → **261**,
티어 불변.

**고친 가드로는 0개가 기계 처리 가능하다** — 235개가 고아, 1개가 매달림. 즉 **이건
기계적으로 되는 일이 아니다.** 거의 모든 모션 섹션이 산문에서 그 토큰 이름을 인용하고
있어 표를 자르려면 문장을 다시 써야 한다. 사실 보존 검사는 값 손실은 보지만 **의미 손실은
못 본다.** 전말: `docs/MOTION_TEMPLATE_2026-09-17.md`.

### 위조 경로 차단 완료 (2026-09-17)

10-10에 CI가 빨개지는 순간, 초록으로 되돌리는 가장 싼 방법 네 가지는 전부 텍스트 편집이고
픽셀 하나 다시 보지 않는다. 캡쳐 작업보다 **먼저** 막았다 — 가드 없이 캡쳐하면 15일치
작업이 30초짜리 편집과 같은 값을 산다.

| 위조 | 수확 | 차단 |
|---|---:|---|
| `SOURCE_TTLS["product-surface"]` 90 → 180 | 141 | `web/__tests__/evidence-integrity.test.ts` 상수 고정 |
| `kind: product-surface` → `official-doc` | 141 | `data/evidence-ledger.json` diff |
| 만료 source 삭제 후 claim 재연결 | 134 생존 | 같은 원장 |
| `captured:` 날짜 고쳐쓰기 | 140 | 같은 원장 + `captured > checked` 검사 |

원장(`web/scripts/build-evidence-ledger.mjs`, 141 refs / 887 sources)은 **막는 게 아니라
보이게 하는** 장치다. 실패 시 무엇이 어떻게 바뀌었는지 이름을 대고 출력한다
(`toss/toss-live kind product-surface → official-doc`). 네 위조를 실제로 적용해 전부
잡히는 것을 확인했다. 게이트: CI `check:reference-pipeline`, husky 데이터 평면 훅.

부수 정정 2건. (1) `eslite familymart-tw kb-kookmin lguplus taishinbank` 5개는 07-14에
2차 증거 패스가 있었는데 `checked`가 07-13에 멈춰 있었다 → 07-14로 정정(TTL은 `captured`
기준이라 **티어 변동 0**, 140/184/116 그대로). (2) 백로그 문서의 "188건은 새 측정 없이
가능"은 취소 — 188건 중 증거 번들 보유 **0건**, 산문 기록 최신 관측일 2026-05-08~07-02,
오늘 기준 80/188이 이미 90일 초과.

**완료 기준은 뱃지 복구가 아니다**: (a) verified_v2 + (b) 컴포넌트 ≥5 + (c) button/input에 상태 키.
셋 다여야 한다. 뱃지만 되찾으면 7월의 실수를 반복한다.

주차별 순서는 `OMD_EXECUTION_PLAN_2026-09-16.md` §3.

## 오늘 확정된 핵심 사실 (전부 실측)

**병목은 하나다.** 신규 레퍼런스 작성 스킬 5종이 `CORE_V2_CATALOG_WRITE_BLOCKED` 상태다
(`add-reference` / `batch-launch` / `migrate` / `token-backfill` / `component-harvest`).
해제 조건 5가지가 함께 떨어져야 하므로 **1000개 확충은 440 리뉴얼의 하드 의존**이다.

**440 리뉴얼은 기계 문제가 아니다.**
- 440/440 결정론적 변환 **3.03초**, `dropped_segments=0`, 소스 재구성 100% 일치.
- 6단계 파이프라인 384 ms/ref(직렬) / 63 ms/ref(`-P8`) → 440개 **≈28초**. 직렬·병렬 산출 바이트 동일.
- 그러나 **440/440 전량 adopt 불가**: `missing-primary-task`로 compile이 거부.
  레거시 파일에 없는 내용이고 마이그레이터는 발명을 거부한다. placeholder 39, scope 누락 22.
- **Core v2 산출물은 무손실 재현이 아니라 중앙값 21% 투영이다.** 나머지는 graph.json opaque blob.
  라이브 사이트가 레거시 섹션·frontmatter를 직접 파싱하므로 지금 적용하면 `/builder`가 깨진다.
- `docs/design-md-weight/migrated/`의 초안 294개는 투영이 아니라 **독립 재작성**
  (정본 대비 0.61~1.69배). 비교 도구가 없다. 전수 보존 검토 필요.
- 실제 결정 표면: 아키텍처 4 + 신규 집필 148 + 초안 검증 294 + attestation(현재 1:1, 440회).

**아프로디테 연동은 이미 절반 지어져 있다.** aphrodite-mela가 Core v2 7개 앵커를 정확히 방출하고,
omd graph-v2 리더를 갖고 있으며, toss/karrot DESIGN.md를 **바이트 동일**하게 번들한다.
간극 2개: DTCG 중첩↔평면(현재 10개 중 0개 읽힘 → 어댑터 후 7 painted), 클레임 마커 0개(validate exit 1 → 추가 후 portable-core).
하드룰 위반 1건: `contract.ts:44`가 미선언 semantic 토큰에 렌더러 상수를 사실처럼 쓴다(한 줄 수정).
**이 트랙은 440 마이그레이션을 기다리지 않는다** — 마크다운 경로가 438/440에서 이미 동작한다.

**정정 2건 (이전 판의 오류).**
① `evidenceCoverage`는 깊이 gradient가 아니라 **이진값**이다(0이 299개, 1이 141개). "평균 0.16/0.30"은
verified 비율의 재진술이며 깊이 근거가 아니다. 실제 JP는 인증률 2위(0.302, KR 0.330과 동률)이고,
TW는 연구 부족이 아니라 **인증 부족**이다(63개 중 53개가 `verification_v2_missing` 하나에 막힘).
② proof gate는 **`spec/regional-sources.yaml`을 읽지 않는다.** 게이트는
`web/__tests__/catalog-integrity.test.ts:204-209`이고 "brand-owned regional"은 allow-list가 아니라
negative host filter(`NON_REGIONAL_HOSTS`, `:36` — getdesign/refero/google-favicon 셋만 배제)다.
YAML 확장은 탐색에는 도움이 되나 CI 동작을 바꾸지 않는다. JP/CN 게이트는 `:204`의 국가 조건을 고쳐야 한다.
부수: 게이트가 약하다 — 회사에 *관한* 블로그 글도 현재 통과한다. CN refs는 게이트 밖이라 검사 없이 통과 중.

**CJK 상한 (잠정).** JP +115~160(Tier 1 14~22, 후보 100+예비21 확보) · CN **+30에서 중단**
(Tier 1 31개 live 내용확인. 중국은 *들어오는* 트래픽을 거른다 → 검증은 무관, 본토 유입은 **미측정**
— "아마 불가"라고 쓴 이전 판을 정정한다. GreatFire상 vercel.app 153/153 차단이나 SNI 기반이고
`oh-my-design.kr`는 측정된 적 없음) · TW **신규 0, 깊이:볼륨 2:1**(레거시 깊이 지표로는 KR·US를 이긴다.
7월 컴포넌트 삭제가 TW에도 있다 — verified 10개가 2.3개 vs partial 8.1개. 번들은 11/63뿐) ·
KR **Tier 1 4건 발견**(첫 "고갈" 결론은 "디자인 시스템" 키워드만 쓴 탓. LG전자·아모레퍼시픽·서울시·위메이드).
합산 **630~710이나 확정 아님** — JP·TW·CN에 "identity/CI 어휘" 재탐색(C6)을 돌리기 전까지는 잠정.
단일 패스는 **양방향으로** 틀린다(KR은 증거 추가, JP는 Tier 1 주장 4건 기각·5건 강등).

**경쟁 지형 변화.** `getdesign.kr` / ko-design-md 가 live(2026-09-16 확인, KR 21건, 같은 DESIGN.md+tokens
전달, Claude 플러그인 배포). 우리가 KR에서 10배 크지만 "아무도 CJK를 안 한다"는 끝났다.
모아트 근거를 볼륨에서 **깊이와 증거**로 옮겨야 한다.

**콘텐츠 발행 블로커는 기술이 아니라 오너 결정**(방향 승인 + 발행일)과 10분짜리 파일 복사다.

**포맷 방향 (2026-09-16 조사, 전부 재확인).** Google Labs가 `DESIGN.md`를 규격으로 발행 중
(★27,942, Apache-2.0, homepage=Stitch, 버전 `alpha`). 섹션 7번이 Components —
**컴포넌트를 덜어낸 게 아니라 표준화**했다. 업계가 덜어내는 것은 **토큰 값 열거**다:
`vercel.com/design.md`는 39,519B에 **hex 0개**이고 본문이 *"do not read the stylesheet
implementation into context"*라고 지시한다. M3는 컴포넌트 명세가 곧 토큰 테이블이고
(3계층 중 `md.comp.*`), 2025-05 공식 블로그가 *"We're not deprecating M3"*라고 못박았다.
→ **"토큰 대 컴포넌트"는 범주 오류.** 우리 방향은 컴포넌트 삭제가 아니라
**산문 서술 → 상태 인덱스 토큰 맵**으로의 형태 교체다. Q10·Q11 미결.

**기회**: `m3.material.io`·`material.io`·`design.google` 모두 `llms.txt` **404**이고
`stitch.withgoogle.com`만 200이다. 게다가 M3 문서와 출하 SCSS의 값이 서로 다르다
(state-layer opacity, color role 26 vs 49). 검증·출처가 우리 해자라는 근거.

## 🔴 마감과 게이트가 충돌한다 (Q9)

만료 복구는 `web/references/<id>/DESIGN.md`와 `.verification.md`를 쓰는 작업이고,
`omd:add-reference`가 `CORE_V2_CATALOG_WRITE_BLOCKED`로 정확히 그것을 금지한다
(*"no one-off exception and no plausible fallback"*). 기존 reverify 패킷도 3단계에서
`/omd:add-reference --mode update`를 부른다 — 즉 **기존 복구 경로 자체가 막혀 있다.**

우회로가 없음도 확인: `reference-quality.mjs:196-198`이 claim 소스를 순회해 **하나라도**
TTL 초과면 `source_expired`로 막는다. 140개 전부가 `product-surface`(90일)를 갖고,
135개가 `official-doc`(180일) 등을 함께 갖지만 **긴 TTL이 짧은 TTL을 구제하지 않는다.**
TTL 재분류조차 파일 쓰기라 게이트 대상이다.

선택지 A(만료 복구에 한해 좁게 개방) / B(만료 수용) / C(23일 내 Core v2 완주 — 불가능).
권고는 A. 게이트의 명시 목적은 *신규 레거시 파일 생성* 방지인데 복구는 기존 140개의
버려진 증거를 되돌리는 일이다. 다만 문구가 예외를 배제하므로 **에이전트가 스스로 열 수 없다.**
상세: `OMD_EXECUTION_PLAN_2026-09-16.md` §2b.

## 상태값 충전 진행 (2026-09-16)

`component_state_prose_only` **164 → 147**, 상태값 보유 레퍼런스 **240 → 257 / 440**.
등급은 전 과정에서 140/160/140 유지, 이상 0건.

**경로 3종**(모두 실측 근거만, 추정 금지):

1. **셀렉터 선언 매칭** — 레퍼런스가 `use:`에 측정 셀렉터를 이미 적어둔 경우
   (`category-tab: { ..., use: "Category control at home::[data-omd-capture=\"7\"]" }`).
   추측이 아니라 문서가 선언한 연결. 15개 컴포넌트.
2. **기하 대조 매칭** — bg/fg·radius·height·padding·font를 각각 세어
   **근거 4개 이상 + 색 일치 필수**. 색만 맞추면 틀린다(`apple`: 같은 `#0071e3`인데
   radius 18px/12px로 전혀 다른 컨트롤). 21개.
3. **공개 DS 조사** — fill-kr이 13개 ref에 54키(별도 기록).

**한 토큰이 여러 측정 요소에 걸리면 통째로 제외**한다 — 첫 번째를 고르는 것은 임의 선택이다
(`freee/primary-action` 4개, `google/business-primary` 2개 등 4건 제외).

**도구**: `web/scripts/extract-state-values.mjs`(번들→제안) ·
`match-state-candidates.mjs`(기하 점수) · `apply-state-values.mjs`(적용, `--geometry` 옵션).
새 캡쳐가 들어올 때마다 재사용한다.

**남은 것**: 판정 불가 ~14 · 번들에 delta 없음 ~114(공개 DS 조사 또는 재캡쳐).
SEED(karrot) 같은 런타임 변수 간접참조 DS는 리터럴이 없어 조사 수율이 낮다.

## 2026-09-17 작업 — 차단 사유 대청소

하루 동안 차단 사유가 이렇게 움직였다. **정본 데이터는 거의 고치지 않았고, 대부분
검사기가 이미 있는 증거를 못 알아본 것이었다.**

| 사유 | 전 | 후 | 원인 |
|---|---:|---:|---|
| `tier1_source_missing` | 53 | **3** | 1차 출처를 맨 도메인으로 적어 URL 추출기가 못 봄 |
| `freshness_conflict` | 115 | **4** | 전사(prose-derived)와 관측을 구분 안 해 정상 순서를 위반으로 읽음 |
| `conflict_unresolved` | 62 | **26** | `none — 이유` 형태를 정확 일치로 검사 |
| `proof_incomplete` | 55 | **32** | 옛 프루프 제목(`### Raw observations`) 미인식 |
| `component_state_prose_only` | 164 | **146** | 실측 상태값을 번들에서 토큰으로 이관 |
| `token_value_possibly_derived` | 14 | **5** | 팔레트 이름·Proof 기록분을 오탐으로 잡고 있었음 |

**등급: 140 verified / 184 partial / 116 legacy** — legacy에서 24개가 올라왔다.
verified는 불변(이 검사들이 그 티어로 가는 길목이 아니었다).

**JP proof gate 활성화** — KR·TW에 이어 일본도 brand-owned 출처 2개를 요구한다.
13건이 걸렸고 6건은 스킴 정규화로 해결, 5건은 1차 출처를 실제로 열어 확인 후 추가,
`layerx`는 플랫폼 계정 규칙을 새로 만들어 해결(맨 호스트는 불가, 계정 경로만 인정).

**신규 도구**: `extract-state-values` · `match-state-candidates` · `apply-state-values`
(상태값 3종) · `propose-verification-v2` · `local-store`.

## 남은 진짜 작업

| 사유 | 건수 | 성격 |
|---|---:|---|
| `verification_v2_missing` | 299 | **진짜 작업.** 자동 유도 두 번 시도·기각(`docs/VERIFICATION_V2_BACKLOG_2026-09-17.md`). 사실 추출은 267/269 되지만 클레임 매핑은 14.7%만 자동. 건당 60~80 판단 |
| `token_source_unverified` | 111 | prose-derived 토큰. 라이브 재검증 필요 |
| `proof_incomplete` | 32 | 검증 파일 자체가 없음 |
| `conflict_unresolved` | 26 | 실제 충돌 서술 |
| 상태값 | 146 | 판정 불가 20 + 번들 delta 없음 126 |

## 검사 상태 (2026-09-16 실측)

| 검사 | 결과 |
|---|---|
| root lint (tsc) | PASS |
| root test | 1480 PASS / **1 FAIL** / 180 skipped — bench 테스트 타임아웃 flake(단독 6.1초 PASS) |
| web test | **937 PASS** (64 파일) |
| quality-gate.mjs | **BLOCKED** — FAIL 3(전부 `landing` 체커) / UNVERIFIED 2 / REVIEW_PENDING 1. **CI 미연결** |

## 진행 중 / 다음

| 트랙 | 첫 작업 | 상태 |
|---|---|---|
| 🔴 §0 만료 대응 | Week 0(백업·읽기전용 리허설)은 착수 가능 / **Week 1 실제 복구는 Q9 대기** | **게이트 충돌 — 아래** |
| A · 440 Core v2 | 도구만 선행(A1 어댑터·A3 배치 attestation). 정본 변경은 §0 이후 | 착수 대기 (Q1 결정 선행) |
| B · 아프로디테 | B2 하드룰 한 줄 수정 → B1 `graph` export 포맷 | 착수 가능 (Q5 확인) |
| C · CJK | 리서치 **완료**(후보 JP 79·CN 45+·TW 35+·KR 32 확보). C1 게이트 국가조건 수정, C3 본토 도달성 측정 | A7 게이트 해제 전까지 선행 작업만 |
| D · 콘텐츠 | D.5 GA4 계측 → 발행 패키지 → 표 생성기 | Q2·Q3 결정 선행 |
| 보류 | ODDLY/랜딩 와우, 벤치 4조건, 스킬 간 테스트 | 실패 증거·frozen 디렉터리 그대로 보존 |

## 오너 결정 대기

**Q9 만료 복구용 게이트 예외 — Week 1을 막는다. 즉시 필요** ·
~~Q7 증거 145MB~~ ✅ 해결(git 미추적 확정 + 보관 증명 구축) ·
Q1 정본 본문 정책(얇은 투영 / 심화 초안 / 하이브리드) — **트랙 A 전체를 막는다** ·
Q8 목표를 "1000개"에서 "커버리지 품질"로 바꿀지 ·
Q2 블로그 발행일+바이트 승인 · Q3 블로그 문체 통일 · Q4 Context7 키·Brave/Bing 계정 ·
Q5 아프로디테 레포 직접 커밋 여부 · Q6 미커밋 작업 트리 커밋 여부.

## 위생

- **미커밋 71개 수정 + 64개 untracked(3,152줄)이 8일째.** 유실 위험. 오너 지시 시에만 커밋.
- **증거 145MB 백업 위치 미설정** — git 미추적은 확정됐고 보관 증명은 있으나 사본이 아직 한 디스크뿐.
- bench 테스트 `testTimeout` 상향 필요.
- `.omd/preferences.md` pending 39건(7월부터) — `omd:learn` 미실행.
- sitemap `lastModified: now` → ref 페이지는 `verifiedAt`으로.

## 유지할 규칙

- 검증 PASS와 미적 채택, staging 이관과 정본 채택, 로컬 시뮬레이션과 실제 모델 비교를 구분한다.
- 기업 정본은 `web/references`만 편집. 모르는 필드만 생략하고 확인된 형제 값·브랜드 서사는 보존한다.
- Builder 작업은 Home→시작하기→/builder→선택→override→preview/export로 검증한다.
- run 삭제, 자동 발행·배포, 전역 설정 변경 없음. 보류는 삭제가 아니다.

## 연속성

이전 상세 이력: `docs/archive/CURRENT_STATE-2026-09-08-gpt90-sprint.md`.
종료 시 이 문서를 먼저 갱신하고 JOURNAL 맨 위에 5줄 이내로 기록한다.
