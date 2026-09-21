# 죽은 인용 12건 — 조사 결과와, 왜 고치다 되돌렸는가 (2026-09-21)

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
