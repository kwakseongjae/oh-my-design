# 네 개 레퍼런스가 다른 시장의 표면에서 측정됐다 (2026-09-21)

4단계(어휘 재조사) 준비 중 JP 리포트의 한 줄을 확인하다 나왔다. 어휘 조사와는 무관하고
**카탈로그의 정확성 결함**이라 `docs/research/`(비추적 내부 노트)가 아니라 여기 둔다.

## 발단

`cjk-jp-report.md` 4.3절이 cookpad를 두고 "evidence JSON이 **`cookpad.com/uk`** — 영국
사이트 — 를 JP 레퍼런스의 유일한 표면으로 캡쳐했다. 얕음이 아니라 **정확성 버그**로 다뤄야
한다"고 적어두었다. 사실이었다:

```
artifacts/reference-evidence/cookpad.json  surfaces: https://cookpad.com/uk
```

그래서 전체 번들을 쓸었다 — 각 레퍼런스의 국가와 캡쳐된 URL의 시장 신호(경로 `/uk`·`/us`·
`/kr`, TLD `.co.jp`·`.com.tw`·`.co.kr` 등)를 대조했다.

| ref | 국가 | 잘못된 표면 / 전체 | 캡쳐된 URL |
|---|---|---:|---|
| **cookpad** | JP | **1/1** | `https://cookpad.com/uk` |
| **china-airlines** | TW | **3/3** | `https://www.china-airlines.com/kr/ko` 외 2 |
| mercari | JP | 1/3 | `https://www.mercari.com/us/brand/` |
| channeltalk | KR | 1/5 | `https://channel.io/us` |

앞의 둘은 **측정 증거 전부**가 다른 시장의 현지화 사이트에서 왔다. 대만 항공사를 **한국어
사이트**에서 잰 것이다.

## china-airlines — 실측해서 갈랐다

`tokens.source: live-extract`에 `verified_v2`다. 값이 틀렸는지 추정하지 않고 두 현지화를
오늘 나란히 열었다:

```
/kr/ko   color rgb(0,0,0)  bg rgba(0,0,0,0)  font Roboto  16px  buttons [#fff, #f9fafb, #d81159]
/tw/zh   color rgb(0,0,0)  bg rgba(0,0,0,0)  font Roboto  16px  buttons [#fff, #f9fafb, #d81159]
```

**모든 값이 동일하다.** 하나의 전역 디자인을 현지화별로 서빙한다. 그러니 이건
**값의 오류가 아니라 출처(provenance)의 오류**다. 구분해서 적는다 — 추정으로 "틀렸다"고
쓰면 그게 이 카탈로그가 막으려는 바로 그 행동이다.

## 그래도 왜 결함인가

이 카탈로그의 규칙은 **값은 그것이 주장하는 표면에서 와야 한다**는 것이다. 증거 그래프가
"TW 제품에서 관측했다"고 말하는데 실제로는 KR 현지화를 열었다면, 둘이 같다는 것은 **오늘
확인해서 아는 것**이지 그래프가 보증하는 것이 아니다. 내일 한쪽만 바뀌면 그래프는 조용히
틀린 말을 하게 된다.

cookpad는 더 나쁘다. Cookpad UK와 Cookpad JP는 역사적으로 **다른 제품**이었고, 동일성을
확인한 바 없다. 다행히 `tokens.source: prose-derived` · `legacy_snapshot`이라 측정 토큰을
발행하고 있지는 않다 — 그러나 그 번들은 JP 레퍼런스를 고칠 때 쓰일 입력이고, 그대로 쓰면
영국 사이트 값이 일본 레퍼런스로 들어간다.

드리프트 스윕(2026-09-20)에서 네 레퍼런스의 12개 출처는 **전부 `unchanged`**였다. 즉
"낡아서 틀린" 것이 아니라 **처음부터 다른 시장을 겨눈** 것이다.

## 할 일

- **china-airlines** — `/tw/zh`에서 재캡쳐. 값은 같을 것이므로 티어는 움직이지 않는다.
  바뀌는 건 그래프가 참이 된다는 것뿐이다.
- **cookpad** — JP 깊이 보정 대상 1순위 목록에 이미 있다(`cjk-jp-report.md` 4.3 #10).
  재캡쳐 대상은 `cookpad.com/jp`이고, **영국 번들을 입력으로 쓰지 않는다**는 점이 중요하다.
- mercari·channeltalk — 각 1개 표면. 글로벌 브랜드 페이지라 의도적일 수 있다. 재캡쳐
  대상이라기보다 **그 표면이 무엇을 근거하는지** 확인 대상.
- **캡쳐 하네스에 시장 검사를 넣을지**는 별도 판단이다. 규칙은 단순하다 — 레퍼런스의
  `country`와 캡쳐 URL의 시장 신호가 어긋나면 경고. 440개 중 4개면 게이트로 만들 만큼
  흔하지는 않고, 확충으로 늘어날지는 지켜봐야 안다.
