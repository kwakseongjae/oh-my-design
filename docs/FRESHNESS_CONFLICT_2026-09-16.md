# `freshness_conflict` 115건 — 증거 노후가 아니라 포맷 이관의 부기 흔적

조사일 2026-09-16. 아래 수치는 전부 git 이력에서 직접 계산했다.

## 게이트가 무엇을 막는가

`web/scripts/lib/reference-quality.mjs:311-313`:

```js
if (extractedAt && (!isDate(extractedAt) || (isDate(verifiedAt) && extractedAt > verifiedAt))) {
  blockPartial("freshness_conflict");
}
```

추출이 검증보다 나중이면 막는다. **규칙 자체는 옳다** — 검증 도장이 그 이후에 뽑은
토큰을 보증할 수는 없다.

## 그런데 115건은 한 번의 이관이다

`tokensExtractedAt` 분포:

| 추출일 | 건수 |
|---|---:|
| 2026-06-08 | 14 |
| 2026-06-09 | **101** |

115건 전부가 이 이틀에 몰려 있다. 해당 커밋은 `2cbf8ac1`
*"feat(refs): complete catalog — tokens 211/211, components harvested 211/211"*이고,
실제로 한 일은 **산문 컴포넌트 문자열을 구조화 토큰 객체로 바꾼 것**이다:

```diff
-    ghost-outline: "white bg, #000 text, 1px solid #c4c4c4 border, 4px radius, 52px height, 14px/700 — 더보기 CTA"
+    ghost-outline: { type: button, bg: "#ffffff", fg: "#000000", radius: 4, padding: "52px height", font: "14px/700", use: "..." }
```

같은 관측을 다른 형태로 적었다. 새로 측정한 것이 아니다.

## 검증: 값이 바뀌었는가

115건 각각에 대해 `2cbf8ac1^`와 `2cbf8ac1`의 색상 집합을 비교했다.

| | 건수 |
|---|---:|
| 색상값 **완전 동일** | **114** |
| 값이 바뀜 | **1** (`fastcampus`, 색 1개 추가) |
| 비교 불가 | 0 |

**즉 114건에서 `tokensExtractedAt`이 움직인 이유는 관측이 아니라 파일 재작성이다.**
`verified` 도장이 보증하던 사실은 그대로다.

## 그래서 어떻게 할 것인가

두 가지 길이 있고, **둘 다 오너 판단이 필요해 실행하지 않았다.**

**(A) 데이터를 고친다** — 값이 바뀌지 않은 114건의 `tokens.extracted`를 이관 이전
날짜로 되돌린다. 근거는 위 대조다. 다만 440개 정본 중 114개의 날짜 필드를 바꾸는
일이고, `fastcampus` 1건은 실제로 값이 늘었으므로 제외해야 한다.

**(B) 게이트를 고친다** — 포맷 이관과 재추출을 구분할 방법이 스키마에 없다는 것이
근본 원인이다. `tokens.source`에 이관 표식이 있거나, `extracted`와 별개로
`reformatted` 같은 필드가 있으면 게이트가 둘을 구분할 수 있다.

**권고는 (B)다.** (A)는 이번 115건을 지우지만 다음 포맷 이관에서 같은 일이 반복된다.
(B)는 원인을 없앤다. 다만 스키마 변경이므로 Core v2 버전 정책을 따라야 한다.

## 하지 말 것

날짜만 맞춰 게이트를 통과시키는 것. 7월 배치가 컴포넌트를 지워 게이트를 통과한 것과
같은 종류의 행위다 — 검사기를 만족시켰지 사실을 개선하지 않았다.
