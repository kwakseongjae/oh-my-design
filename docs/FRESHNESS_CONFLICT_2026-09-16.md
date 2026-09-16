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

## 정정 (같은 날, 더 파본 뒤)

처음에 "2026-06-09 포맷 이관이 원인"이라고 적었다. **틀렸다.** 이관 커밋
`2cbf8ac1`은 이미 06-08로 찍혀 있던 `extracted`를 건드리지 않았다. 진짜 출처는
그 하루 전 `d50cee08` *"token backfill"*이고, 커밋 본문이 무엇을 했는지 직접 밝힌다:

> *"prose-derived tokens (colors/typography/rounded/spacing/shadow/components)
> **lifted from each ref's rigorous §2-§6 prose**, new schema"*

즉 **라이브 사이트를 새로 측정한 것이 아니라, 이미 검증된 산문에서 값을 옮겨 적은 것**이다.
`tokens.source`가 `prose-derived`인 이유도 이것이다.

그러므로 날짜의 의미는 이렇게 갈린다:

- `verified` — 산문의 사실을 확인한 날 (5월)
- `extracted` — 그 확인된 사실을 토큰 블록으로 **전사한** 날 (6월 8일)

전사는 새 관측이 아니다. 그래서 `extracted > verified`가 뜨지만 증거가 노후한 것은 아니다.

### 그리고 이것은 별개 사건이 아니다

| 신호 | 건수 |
|---|---:|
| `freshness_conflict` | 115 |
| `token_source_unverified` | 111 |
| **둘 다** | **111** |

`freshness_conflict` 115건의 `tokenSource`: `prose-derived` **111** · `design-system` 3 ·
`reconciled` 1.

**두 신호가 같은 한 가지를 두 번 세고 있다** — "산문에서 전사한 토큰". 하나는 출처가
미검증이라 막고, 하나는 전사일이 검증일보다 늦다고 막는다. 같은 111개를 가리킨다.

## 이관 커밋도 값을 바꾸지 않았다

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

진단이 바뀌었으므로 처음 적은 두 선택지(날짜 되돌리기 / 이관 표식)도 다시 쓴다.
**문제는 포맷이 아니라 `extracted`가 두 가지 다른 일을 한 필드로 기록한다는 것이다.**

- 라이브 표면을 **관측**했다 (`live-extract`)
- 이미 검증된 산문에서 **전사**했다 (`prose-derived`)

앞의 것은 검증일보다 늦으면 진짜 문제다 — 검증이 그 관측을 보증하지 않는다.
뒤의 것은 늦는 게 정상이다 — 전사는 언제나 검증 뒤에 온다. 지금 게이트는 둘을
구분하지 않아서, 정상 순서를 위반으로 읽는다.

**고칠 곳은 게이트다.** `tokens.source`에 이미 답이 들어 있다:

```js
// 전사(prose-derived)는 검증 뒤에 오는 것이 정상 순서다.
// 관측(live-extract 등)만 검증일을 넘어서면 안 된다.
if (extractedAt && tokenSource !== "prose-derived" && extractedAt > verifiedAt) {
  blockPartial("freshness_conflict");
}
```

`prose-derived`는 이미 `token_source_unverified`로 **따로 막히고 있다.** 같은 111개를
두 번 세는 대신, 각 신호가 자기 몫만 말하게 한다.

### 남는 4건은 진짜다

`prose-derived`가 아닌 4건(`design-system` 3 · `reconciled` 1)은 실제로 관측이
검증보다 늦다. 게이트를 고쳐도 계속 막히고, 그게 맞다.

### 정본 데이터는 건드리지 않는다

날짜를 되돌리는 안은 폐기한다. 전사일 06-08은 **사실이고**, 그날 실제로 일어난 일이다.
기록이 틀린 게 아니라 게이트의 해석이 틀렸다.

## 하지 말 것

날짜만 맞춰 게이트를 통과시키는 것. 7월 배치가 컴포넌트를 지워 게이트를 통과한 것과
같은 종류의 행위다 — 검사기를 만족시켰지 사실을 개선하지 않았다.
