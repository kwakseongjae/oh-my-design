# 표면은 조금씩 낡지 않는다 — 안 바뀌거나, 갈린다

**전수 결과: 비교 가능 406건 중 379건(93%)이 69일 뒤 값 하나도 안 변했다.**
(이 문서는 세 번에 걸쳐 갱신됐다 — 파일럿 n=5 → 레퍼런스 단위 169건 → **출처 단위 422건**.
아래 앞부분은 레퍼런스 단위 시점의 기록이고, 최종 수치는 맨 끝 "후속" 절이다.)
원본 `data/surface-drift-2026-09-20.json` · 스크립트 `scripts/measure-surface-drift.mjs`

2026-09-20. `reference-quality.mjs`의 `SOURCE_TTLS` 주석이 남긴 숙제를 실행했다:

> Measuring it is possible now that the July bundles are frozen at
> `artifacts/reference-evidence-2026-07/` — recapture a few references and diff
> against them to learn how much a live surface really drifts in 90 days.

## 방법

7월 번들 177개 중 **169개**가 `home` 표면의 `body` 엘리먼트 computed style을 갖고 있다.
이게 모든 번들에 있고 모호하지 않은 유일한 프로브다(다른 셀렉터는 태그 수준이라 특정 불가거나
프레임워크 생성 클래스라 빌드마다 바뀐다). 같은 URL을 오늘 열어 `body`의
color · background-color · font-family · font-size를 비교했다. 경과 **69~71일**.

## 파일럿 결과 (n=5) — 전수는 아래

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


---

# 전수 측정 (169건, 2026-09-20)

`scripts/measure-surface-drift.mjs`. playwright-core 헤드리스, **라이트 모드 강제**,
번들이 기록한 viewport(1440×900), 경과 **69일**.

| 판정 | 수 |
|---|---|
| **unchanged** | **154** |
| changed | 10 |
| unreachable | 4 |
| not-comparable (테마 반응형) | 1 (tesla) |

**비교 가능한 164건 중 154건 = 94%가 네 값(color·background·font-family·font-size) 전부 동일하다.**

## 변한 10건 중 일부는 드리프트가 아니다

| | 바뀐 것 | 판정 |
|---|---|---|
| **musinsa** | `Pretendard` → `Pretendard Variable` | 같은 패밀리 |
| **myrealtrip** | `__pretandard_7bdbf6` → `__pretandard_1bb09b` | **Next.js 빌드 해시**. 같은 폰트 |
| **ably** | `__Pretendard_a4ae19` → `Times` | 헤드리스에서 웹폰트 미로드 폴백일 가능성 — **측정 아티팩트 의심** |
| **lovable** | `rgb(3,3,3)` → `oklch(0.1 0 0)` | 표기법 변경(값은 사실상 동일) |
| mistral.ai | `rgb(0,0,0)` → `oklch(0.21 …)` | 표기법 + 실제 값 변화 |
| **intuit** | 폰트명 `AvenirNext forINTUIT` → `AvenirForIntuit`, 색 4개 | 실제 변화 |
| **recruit** | `Tazugane Gothic` → `Noto Sans JP` | 실제 폰트 교체 |
| **toss** | 전면 개편 | 실제 |
| kakao-login · wanted | 색 | 실제 |

**아티팩트 2~3건을 빼면 실제로 변한 건 164건 중 6~7건, 약 4%다.**

## 도달 불가 4건

- **inline · kakaopay · kktix** — **403**. 봇 차단. 재검증 파이프라인이 이 세 곳은
  헤드리스로 못 본다는 뜻이고, 그 자체가 기록할 값이다.
- **fixture** — `http://127.0.0.1:50625/`를 가리키는 번들. `referenceId`가
  `reference-capture-fixture`이고 **카탈로그 레퍼런스가 아니다.** 캡쳐 하네스의 테스트
  픽스처가 증거 디렉터리에 남은 것. 해롭진 않지만 전수 집계에서 빼야 한다.

## 그래서 만료 정책에 대해

2027-01-07~09에 **141건이 한꺼번에 만료된다.** 이 측정은 그중 **약 4%만 실제로 변했다**고
말한다. 날짜 만료는 135건가량의 올바른 관측을 무효화하고, 그 사이 toss처럼 다음 주에
개편될 표면은 180일 동안 틀린 채로 통과시킨다.

**변경 감지가 날짜보다 싸다.** 이 전수 측정은 헤드리스 한 번, 몇 분이면 끝난다.
`data/surface-drift-2026-09-20.json`이 그 베이스라인이고, 다음 실행은 이것과 비교하면 된다.

## 남은 한계

- `body` 프로브만이다. **컴포넌트는 base palette가 그대로여도 바뀔 수 있다** — 이 측정은
  "개편되지 않았다"를 말하지 "모든 값이 같다"를 말하지 않는다.
- 69일이지 product-surface TTL 180일 전체가 아니다.
- tesla는 테마 반응형이라 이 조건에서 비교 불가. 번들에 `colorScheme`을 기록하면 해결된다.

---

# 후속 (같은 날) — 벽에 남은 46건을 실제로 막고 있던 것

정책 전환(`3aa53f28`) 뒤 1월에 남은 46건을 "왜 안 움직였나"로 한 건씩 갈랐다.
레퍼런스가 움직이려면 **가장 먼저 만료되는 출처**가 재확인돼야 하므로, 그 출처
하나의 판정만이 유효한 질문이다.

| 가장 먼저 만료되는 출처의 판정 | 수 |
|---|---|
| **(프로브 안 됨)** | **23** |
| changed | 14 |
| unreachable 404 | 8 |
| not-comparable | 1 |

**46건 전부의 병목 출처가 `product-surface`(TTL 180일)다.** 7월 캡쳐 + 180일 = 1월.
벽은 정책이 아니라 이 한 종류의 TTL이 만든다.

## 고친 것 1 — 프로브가 못 보던 레퍼런스

`baseline()`이 `readFileSync(DESIGN.md)` + 키 순서를 박아넣은 정규식으로 출처를 읽고
있었다. 둘 다 **조용히** 레퍼런스를 잃었다.

- **채택(adopted) 레퍼런스는 DESIGN.md에 frontmatter가 아예 없다.** 그래프는 `.omd/`
  패키지에 있고 `readReferenceSource`만 복원한다. `krds`와 `toss`는 번들이 멀쩡히
  있는데도 출처 0건으로 집계돼 "베이스라인 없음"으로 보고됐다.
- `{ id, kind, url, captured }` 한 가지 모양만 매칭해서, 블록 스타일(`bilibili`,
  `spotify`)과 키 순서가 다른 것(`sanity`)이 0건으로 파싱됐다. 3개 레퍼런스 13개 출처.

레포가 이미 가진 파싱의 **두 번째 약한 구현**이 리더를 눈멀게 하는 방식이다. 이제
`readReferenceSource` + `parseReferenceFrontmatter` 하나만 쓴다.

새로 보인 22개 출처를 프로브: **20 unchanged / 2 changed.**
`krds`·`spotify`·`sanity`는 2027-03-19로 이동. `toss`(toss.im 본문 실제 변화)와
`bilibili`(popular 페이지 변화)는 **정당하게 잔류**했다.

## 고친 것 2 — 죽은 인용을 측정 실패로 분류하고 있었다

`unreachable` 15건 중 **13건이 HTTP 404**였다. User-Agent를 바꾸거나 재시도해도
없어진 페이지는 돌아오지 않는다. 한 단어로 뭉쳐 놓으니 **계측 한계처럼 읽혔고**,
그래서 나는 "프로브를 넓히면 벽이 더 줄어든다"는 잘못된 제안을 했다.

판정을 셋으로 가른다:

- **`dead`** (404/410) — 인용된 URL이 더는 아무것도 서빙하지 않는다. **레퍼런스의 결함**이지
  계측의 한계가 아니다.
- **`blocked`** (403/429) — 페이지는 있고 우리를 거절했다. **모름**으로 남는다.
- **`unreachable`** — 네트워크/타임아웃. 역시 모름.

모든 행이 이제 `httpStatus`와 `userAgent`를 기록한다. 어떤 계측기가 그 판정을 냈는지
다음 스윕이 알아야 한다.

### 죽은 인용 12건 (11개 레퍼런스)

```
11st/category-capture       banksalad/contents-live     bmw/models-live
brandi/product-b-live       hyundai/vehicles-live       hyundai/ioniq6-live
kream/recovery-live         kurly/category-live         onestore/game-catalog-live
patternfly/color-live       thsr/product-article-46de… wanted/company-live
```

`source_url_dead` **advisory**로 발행한다. 강등하지 않는 게 핵심이다 — 7월에 그 페이지는
있었고 캡쳐는 보관돼 있다. 사라진 건 관측의 타당성이 아니라 **독자가 따라가 확인할 수
있는 능력**이고, 그건 남의 사이트맵에 대한 사실로 우리 티어를 깎을 일이 아니라 고칠
일이다(살아있는 대체 URL로 출처를 옮기면 된다). advisory 중 **가장 세다** — 나머지는
값에 대한 추론이고 이것만 HTTP 상태를 기록한다.

## 내가 틀렸던 말

> "베이스라인 없는 출처까지 프로브를 넓히면 더 줄일 수 있습니다"

**아니다.** 베이스라인이 없으면 오늘의 프로브는 변경 감지가 아니라 **새 베이스라인**이다.
오늘 갱신되는 건 하나도 없고, 2027년 스윕이 갱신할 수 있게 될 뿐이다.

## 이 계측기의 끝

남은 43건 중 **23건은 병목 출처의 URL이 7월 번들에 표면으로 잡힌 적이 없다.** body 비교로는
영원히 못 움직인다. 이걸 다루는 유일한 방법은 **베이스라인을 번들이 아니라 레퍼런스 자신의
`tokens.*` 주장으로 삼는 것** — "이 출처가 근거로 댄 값이 지금도 그 표면에 있는가". 만료가
묻는 바로 그 질문이고, 번들 없이도 동작하며, body 네 값보다 강하다. 다음 계측기의 설계다.
