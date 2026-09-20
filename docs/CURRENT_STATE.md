# CURRENT STATE — 단일 복원 지점

갱신: **2026-09-17 저녁** · 오너 지적 2건(라우트·토스) 처리. 우선순위는 2026-09-16 재편분 유지. 분기 `codex/track-foundation`, baseline `15ff0139`
(main과 동일 커밋). 9/7~9/8 스프린트 산출물은 **전부 미커밋 상태로 보존**되어 있다.

## 🔬 2026-09-20 — 만료 벽: 드리프트를 처음으로 **실측**했다 (`6cf1502f`)

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
