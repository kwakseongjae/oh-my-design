# 표면은 조금씩 낡지 않는다 — 안 바뀌거나, 갈린다

2026-09-20. `reference-quality.mjs`의 `SOURCE_TTLS` 주석이 남긴 숙제를 실행했다:

> Measuring it is possible now that the July bundles are frozen at
> `artifacts/reference-evidence-2026-07/` — recapture a few references and diff
> against them to learn how much a live surface really drifts in 90 days.

## 방법

7월 번들 177개 중 **169개**가 `home` 표면의 `body` 엘리먼트 computed style을 갖고 있다.
이게 모든 번들에 있고 모호하지 않은 유일한 프로브다(다른 셀렉터는 태그 수준이라 특정 불가거나
프레임워크 생성 클래스라 빌드마다 바뀐다). 같은 URL을 오늘 열어 `body`의
color · background-color · font-family · font-size를 비교했다. 경과 **69~71일**.

## 결과 (n=5)

| 레퍼런스 | 출처 종류 | 7월 | 오늘 | |
|---|---|---|---|---|
| **uswds** | official-doc | `rgba(0,0,0,.8)` / `rgb(252,252,252)` / Public Sans Web | 동일 | **변화 없음** |
| **zendesk** | official-doc | `rgb(41,50,57)` / 투명 / system-ui | 동일 | **변화 없음** |
| **wise** | product-surface | `rgb(69,71,69)` / 투명 / Inter | 동일 | **변화 없음** |
| **coupang** | product-surface | `rgb(0,0,0)` / 투명 / Apple SD Gothic Neo | 동일 | **변화 없음** |
| **toss** | product-surface | `rgb(33,37,41)` / `rgb(255,255,255)` / Toss Product Sans, 텍스트 1,150회 | **전면 개편** — 52,000px 스크롤 애니메이션, 본문 텍스트 **144자**, 폰트명 `Toss Product Sans OTF` | **전부** |
| patternfly | official-doc | — | **비교 불가** | 아래 |

**비교 가능한 5건 중 4건이 완전히 동일하다.** 픽셀 단위로, 69일이 지나고.
나머지 1건은 사이트가 통째로 바뀌었다.

## 이게 TTL에 대해 말하는 것

TTL은 드리프트를 **시계**로 모델링한다 — product-surface 180일, official-doc 365일.
관측된 행동은 시계가 아니다. **표면은 조금씩 낡지 않는다. 안 바뀌거나, 갈린다.**

- 90일이 지나도 값이 하나도 안 변한 표면이 4건. 이들에게 만료는 아무 것도 보호하지 않는다.
- 전면 개편된 1건은 **개편 다음 날 이미 틀렸다.** 180일을 기다리는 게 의미가 없다.

즉 **날짜 기반 만료는 두 경우 모두에서 잘못된 도구다.** 너무 이르게 멀쩡한 것을 만료시키고,
너무 늦게 틀린 것을 붙잡는다.

TTL의 *순서 가정*(문서가 제품 표면보다 오래 간다)은 이 표본으로 확인도 반박도 안 된다 —
제품 표면 3건 중 2건이 변화 없음이고, 변한 1건이 제품 표면인 것뿐이다. n=5로는 순서를 못 본다.

## 한계 — 이 측정이 주장하지 않는 것

- **n=5**, 1건은 비교 불가. 169건 전체로 돌리면 훨씬 강한 답이 나온다.
- `body` 프로브만 봤다. 컴포넌트 값은 base palette가 그대로여도 바뀔 수 있다.
- 69~71일이지 product-surface TTL 180일 전체가 아니다.
- **patternfly는 이 세션에서 잴 수 없었다.** 내 Chrome이 다크 모드고
  patternfly가 `prefers-color-scheme`에 반응해 `pf-v6-theme-dark`를 붙인다. 처음엔 이걸
  "라이트 → 다크 전면 개편"이라고 읽었는데 **내 브라우저였다.** 4건은 테마 비반응이라
  비교가 성립하고, 그건 스크립트가 확인한 뒤에 쓴 것이다.
- 7월은 playwright 기본값(라이트 모드, 1440×900)으로 캡쳐됐다. 번들은 viewport는 기록하지만
  **colorScheme은 기록하지 않는다.** 전수 측정을 하려면 라이트 모드 헤드리스가 필요하고,
  그때는 번들에 캡쳐 조건을 같이 적어야 한다.

## 다음에 할 만한 것

1. **169건 전수로 돌린다.** 라이트 모드 헤드리스 하나면 된다. "얼마나 많은 표면이 실제로
   변했나"에 대한 실측 답이 나오고, 그게 만료 정책의 입력이 되어야 한다.
2. **날짜 만료를 변경 감지로 바꾼다.** 표면이 안 변했으면 관측은 여전히 참이다. 싸게 확인할
   수 있다 — 오늘 5건을 확인하는 데 브라우저 호출 10번이 들었다.
3. 번들 스키마에 `colorScheme`·`userAgent`를 기록해 다음 비교가 이 한계를 안 겪게 한다.
