# 죽은 인용 — **12건이 아니라 22건**, 그리고 왜 고치다 되돌렸는가 (2026-09-21)

1월에 `partial`로 떨어지는 레퍼런스들. `docs/WRONG_MARKET_CAPTURES_2026-09-21.md`와 함께
드리프트 전환(`3aa53f28`)에서 나온 후속 항목이다.

## 1. 12건 전부 실제 브라우저로 404를 재확인했다

TW 어휘 조사의 교훈("UA 단 curl로도 부족, 실제 브라우저에서만 열리는 게 있다")을 먼저
적용했다. **8개 URL 전부 진짜 404다** — 봇 차단도 JS 셸도 아니다. 대부분 **사이트 자신의
브랜드 404 페이지**를 200처럼 보이는 본문과 함께 돌려준다(그래서 body 비교로는 "도달함"으로
보였다).

## 2. 12건 중 10건은 **어떤 클레임도 근거하지 않는다**

```
ref          source                  이 출처를 citing하는 클레임
banksalad    contents-live                    9   ← 유일하게 무거움
kream        recovery-live                    1
나머지 10건                                   0
```

클레임 형태를 직접 확인하고 센 것이다(`{ surface_id, source_id, method, captured }`,
YAML 앵커는 js-yaml이 풀어준다). 합계도 맞다 — 모든 클레임에 `source_id`가 있고 미귀속 0건.

**그런데 "인용 안 됨"은 "쓸모없음"이 아니다.** 인용 없는 출처는 흔하다 — patternfly만 해도
7개이고 그중 `patternfly-component-index`는 §4 로스터 산문을 받친다. **출처 목록은 무엇을
들여다봤는지의 기록**이다. 그래서 지우지 않는다.

**그리고 게이트를 약화시키지도 않는다.** "인용 없는 출처는 만료 계산에서 빼자"는 유혹적이지만
`source_expired`를 우회하는 길을 열어준다 — 인용만 떼면 영원히 안 만료된다. `source_url_dead`가
**티어를 안 건드리는 advisory**인 건 바로 그래서 옳다.

## 3. 어디로 갔는지 찾았다 — 사이트 자신의 내비게이션을 읽어서

추측으로 URL을 찍지 않고 해당 사이트의 `<a href>`를 긁어 대조했다.

| ref/source | 죽은 URL | 살아있는 대체 | 판정 |
|---|---|---|---|
| **patternfly**/color-live | `/design-foundations/colors/` | **`/foundations-and-styles/colors`** (200, "PatternFly • Colors", Red Hat Text 14px) | **같은 페이지, 섹션 개명** |
| **hyundai**/vehicles-live | `/kr/ko/e/vehicles` | **`/kr/ko/vehicles`** (200, HYUNDAI/Model/전기차, HyundaiSansTextKR) | **같은 페이지** |
| **hyundai**/ioniq6-live | `…/the-new-ioniq-6/intro` | **`…/the-new-ioniq6/intro`** (200, "더 뉴 아이오닉 6…") — **하이픈 하나 빠졌다** | **같은 페이지** |
| banksalad/contents-live | `/contents` | 허브는 사라졌고 개별 글이 `/articles/<slug>`로 | 부분 — 아래 |
| 11st/category-capture | `/categories/1467565` | `/category`(200)는 **카테고리 인덱스**, 그 카테고리가 아님 | **대체 아님** |
| kurly/category-live | `/shopping/categories/list` | `/collections/market-best`(200) — 다른 페이지 | **대체 아님** |
| brandi/product-b-live | `/products/125381184` | 그 상품이 내려갔다. 다른 상품은 **다른 관측** | **복구 불가** |
| kream/recovery-live | `/shop` | `/search`(200) — 다른 페이지 | **대체 아님** |

**banksalad가 제일 무겁다.** 죽은 출처의 9개 클레임은 전부 **filter-chip 컴포넌트**를
`live-inspect`로 관측한 것이다(`tokens.components.filter-chip.*`). 그 칩이 있던 허브가
사라졌으므로 **그 관측은 재확인할 수 없다.** 이건 `partial`이 정확히 뜻하는 상태다.

## 4. 고쳤다가 **되돌렸다** — 게이트가 옳았다

patternfly와 hyundai 2건은 같은 페이지가 새 URL로 옮긴 깨끗한 케이스라 복구했다:
URL을 바꾸고 `captured: 2026-09-21`로 두고, **추측 대신 실제로 관측**했다
(patternfly `Red Hat Text 14px rgb(21,21,21)` · hyundai `HyundaiSansTextKR 16px`).
만료가 1월 → **2027-03-19**로 옮겨가고 `source_url_dead`도 사라졌다.

그런데 `evidence-integrity` 테스트가 잡았다:

> **does not let a reference outlive its own observations** —
> "An observation cannot have been made after the review that accepted it."
> `source.captured > v2.checked` → offender

맞는 말이다. `captured`를 오늘로 두려면 `checked`도 오늘이어야 하고, **그건 내가 하지 않은
전면 재검토를 했다고 주장하는 것**이다. 나는 출처 두 개를 열어봤을 뿐이다.

그래서 **3건 모두 되돌렸다.** URL 수정은 공짜 연산이 아니다 — **레퍼런스 재검토를 요구한다.**

## 5. 그래서 이건 "인용 패치"가 아니라 **재검증 큐**다

1월 강등은 **막아야 할 것이 아니라 옳은 동작**이다. `verified_v2`는 증거를 다시 확인할 수
있다고 주장하는데, 이 레퍼런스들은 일부를 확인할 수 없다. 뱃지를 지키는 게 아니라
**제대로 재검증**해서 다시 얻는 것이 답이다 — 그러면 `checked`를 오늘로 올리는 것이 정직해진다.

**바로 쓸 수 있는 것**: 위 표의 대체 URL 3건은 조사·검증 끝났다. 재검증 패스가 돌 때
그대로 쓰면 된다.

## 6. 이 항목에 속하지 않는 4건

`bmw` · `onestore` · `thsr` · `wanted`는 죽은 출처를 고쳐도 **만료일이 안 움직인다** —
다른 출처가 같은 날 만료된다. 죽은 인용 문제가 아니라 **평범한 1월 벽**(7월 베이스라인이
없어 재확인 못 한 23건)이고, 다음 계측기가 다룰 몫이다.


---

# 7. 전수 조사: 12건이 아니라 **22건**이었다

patternfly를 재검증하려고 8개 출처를 전부 열어보다가 **드리프트가 모르던 죽은 출처 2개**를
발견했다(`about-official`·`releases-official`, 둘 다 404). 이유가 구조적이다 —
**드리프트 스윕은 7월 베이스라인이 있는 출처만 프로브한다**(930 중 400). 나머지 530개는
애초에 안 봤다.

그래서 **930개 전부**를 다른 질문으로 쓸었다: "이 URL이 아직 뭔가를 서빙하는가". 베이스라인이
필요 없는 질문이다.

## 2단계로 한 이유 — 1단계였으면 127건을 죽었다고 할 뻔했다

```
1단계  curl + 데스크탑 Chrome UA        → 127건 non-200
       (403:54 · 429:24 · 404:20 · 0:19 · 500:5 · 406:3 · 202:2)
2단계  127건 전부 실제 브라우저로 재확인 → 95건 정상(75%!) · 22건 진짜 404/410 · 10건 미해결
```

**75%가 브라우저에선 멀쩡했다.** 오늘 아침 TW 조사에서 얻은 교훈("UA 단 curl로도 부족")이
전수 규모에서 확인됐다. 429 24건은 내 동시성 10 때문이었다 — **내 측정 방식이 만든 실패**다.

## 결과

```
reachable 898 · dead 22 · blocked 6 · unreachable 4
dead by kind: product-surface 12 · official-doc 7 · brand-asset 3
드리프트가 알던 것 12 · 새로 찾은 것 10
```

`data/source-reachability-2026-09-21.json`에 커밋했고, 품질 빌더가 드리프트 대신 이걸 읽는다
(합집합이라 파일을 지우면 예전 동작으로 **degrade**하지 구멍이 생기지 않는다).
**`source_url_dead` 11개 → 17개 레퍼런스.**

## 새로 드러난 것 중 구조적인 하나

**resend의 brand-asset 3건이 전부 Next.js 해시 자산이다**:
`resend.com/_next/static/media/inter_variable.p.0r27k….woff2`.
이런 URL은 **배포할 때마다 바뀐다.** 죽은 게 아니라 **애초에 인용 불가능한 종류**다.
빌드 해시가 붙은 자산 URL은 출처가 될 수 없다 — 이건 개별 수리가 아니라 규칙 문제다.


---

# 8. 15건 재검증 결과 — **6건은 복구 불가이고, 그게 맞다**

patternfly·hyundai와 같은 방법으로 남은 15개 레퍼런스의 **출처 115개 전부**를 실제
브라우저로 열었다. **93개 정상 · 22개 비200.**

## 계측기를 잘못 쓰면 살아있는 것을 죽었다고 한다

22개 중 5개는 죽지 않았다:

| 출처 | 브라우저 | curl | 진실 |
|---|---|---|---|
| `thumbtack/rise-webfont` | ERR "Download is starting" | **200 `font/woff2` 58,996 bytes** | **살아있다** |
| `thumbtack/…/typography` | 202 | 202, 0 bytes | **봇 챌린지** — 브라우저에선 4,123자 렌더 |
| `thumbtack/…/product-design` | 202 | 202, 0 bytes | 같음 — 3,536자 렌더 |
| `bmw/bmwtype-web-assets` | ERR | 000 | 도달 불가(미확정) |
| `bmw/bmw-club-ci` | ERR | 000 | 도달 불가(미확정) |

**페이지는 브라우저로, 자산(폰트·PDF)은 curl로.** 폰트 URL에 `page.goto`를 쓰면 다운로드가
시작될 뿐 페이지 로드가 아니라서 살아있는 자산이 ERR로 찍힌다. 오늘 아침 "curl로는 부족하다"를
배웠는데, **반대 방향도 참이다.**

## 날짜를 실제로 움직이는 것은 6건뿐이다

15개 중 **가장 먼저 만료되는 출처가 죽은 것**은 6개다 — 11st · banksalad · brandi · kream ·
kurly · onestore. 나머지 8개는 살아있는 다른 출처가 날짜를 지배한다(thumbtack 포함).

## 그 6건 전부 복구 불가다 — 사이트 내비게이션을 읽어 확인했다

| ref | 죽은 URL | 사이트 nav가 제공하는 것 | 판정 |
|---|---|---|---|
| 11st | `/categories/1467565` | `/category`(인덱스) | 그 카테고리가 아님 |
| banksalad | `/contents` | `/articles/<slug>` 개별 글만 | 허브 소멸 — **클레임 9개(filter-chip)** |
| brandi | `/products/125381184` | 다른 상품들 | 그 상품이 내려감 |
| kream | `/shop` | `/search` · `/exhibitions/*` | 동등물 없음 |
| kurly | `/shopping/categories/list` | `/categories/<id>` · `/collection-groups/*` | 일반 목록 페이지 소멸 |
| onestore | `/v2/ko-kr/game` | `/v2/ko-kr/search` · `/v2/gameloop` | 게임 카탈로그 소멸 |

**페이지가 옮겨간 게 아니라 없어졌다.** patternfly(섹션 개명)·hyundai(경로 변경)·
thumbtack(`/components/`→`/components/overview`)이 운 좋은 쪽이었다.

→ **이 6건의 1월 강등은 옳다.** `verified_v2`는 증거를 다시 확인할 수 있다고 주장하는데
이들은 일부를 확인할 수 없다. 뱃지를 지키려고 다른 페이지를 끼워넣는 것이 바로 이 카탈로그가
막으려는 행동이다.

## 오늘 이 항목에서 실제로 고친 것

| ref | 무엇 | 효과 |
|---|---|---|
| patternfly | URL 3개 재지정 + 전체 출처 재확인 | 1월 → **2027-03-19** |
| hyundai | URL 2개 재지정 + 전체 출처 재확인 | 1월 → **2027-03-19** |
| thumbtack | URL 1개 재지정 + 출처 8개 재확인 | advisory 해소(날짜는 다른 출처가 지배) |

`source_url_dead` **17 → 14 레퍼런스**.
