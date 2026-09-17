# CJK 확충 후보 — 제품 언어와 라이브러리는 섞지 않는다 (2026-09-17)

1000개 확충(오너 우선순위 4·5번)의 후보 조사. 병렬 서브에이전트가 두 번 돌았고,
1차 결과를 보고 **브리프가 잘못됐다는 걸 알았다.**

## 1차가 왜 빗나갔나 — 내 브리프의 결함

1차는 12개를 근거와 함께 가져왔는데 **10개가 OSS 컴포넌트 라이브러리**였다 —
Arco, Semi, Vant, NutUI, Fusion, antd-mobile, Zarm, TDesign, Tonic UI.

증거는 훌륭했지만 **범주가 틀렸다.** 이 카탈로그는 *브랜드*를 기록한다 — 토스 제품이
어떤 느낌인지, 당근이 어떤 느낌인지. "ByteDance가 Arco를 발행한다"는 Douyin이 어떻게
생겼는지 알려주지 않는다. 구글이 Material을 발행한다고 유튜브가 어떻게 생겼는지 알 수
없는 것과 같다. **라이브러리는 남의 브랜드를 담도록 설계된 중립 도구**라, 레퍼런스의
목적과 정확히 반대다.

브리프에 이걸 안 적은 게 내 실수다. 2차에서 바로잡았고 답이 크게 달라졌다.

## A. 제품 디자인 언어 (브랜드 자신의 체계)

| 브랜드 | 국가 | URL | 라이브 렌더 | 토큰 값 |
|---|---|---|---|---|
| **Mitsubishi Electric — Serendie** | JP | `serendie.design` | **DOM** | **572 커스텀 프로퍼티** |
| Tencent (WeChat) — WeUI | CN | `weui.io` | SSR | `--weui-BRAND:#07c160` |
| Taiwan Gov — PDIS | TW | `design.pdis.tw` | SSR | 121 색 토큰 ⚠ 2022 이후 정지 |
| Meituan — 美团设计体系 | CN | `mtd.meituan.com` | CSS 번들 | 하드코딩 65색(`#ffc300`), 변수 없음 |
| ByteDance (Douyin) 미니앱 | CN | `developer.open-douyin.com` | 텍스트 | `#0047f9` `#006eff` |
| JD Retail Design Language | CN | `jdrdl.jd.com` | 약함 | `#e1251b` 京东红, 변수는 Bootstrap |
| Alipay — AntUI | CN | `antui.alipay.com` | **미해결** | `#108EE9`, 브라우저 검사 필요 |
| PayPay | JP | `app-style-guide.paypay.ne.jp` | **미해결** | SPA 셸, CSS는 Element UI |
| Xiaomi HyperOS | CN | `dev.mi.com` | 부분 | 포털 토큰이지 HyperOS 사양 아님 |
| Japan Digital Agency — DADS | JP | `design.digital.go.jp/dads` | *이미 보유* | `digital-go-jp/design-tokens` 등 미활용 |

### 최우선 — Mitsubishi Electric Serendie (직접 검증함)

에이전트 보고를 그대로 믿지 않고 **우리 도구로 다시 쟀다.** 상태까지 전부 나온다:

```
rest     #0650a0   radius 9999px   h40
hover    #024288
pressed  #024288
focus    outline rgb(3, 83, 170) solid 2px
```

라이브 DOM, 이미지 0개, 572개 커스텀 프로퍼티, 자체 GitHub 조직
(`serendie/serendie`, `design-token`, `serendie-symbols` 300+ 아이콘), 2026-09-15 푸시.
테마 다섯이 **일본 전통색 이름**이다 — 浅葱(Asagi)·紺青(Konjo)·栗皮(Kurikawa)·
菫(Sumire)·躑躅(Tsutsuji). 카탈로그가 원하는 종류의 브랜드 사실이 이미 구조화돼 있다.

이 검증에서 도구 결함도 하나 나왔다: hover가 `color(srgb 0.0094 0.2604 0.5333)` 형태로
돌아오는데 `rgb()`만 처리하고 있었다. srgb 변환을 넣었다(다른 색공간은 손실 변환이라
원문을 남긴다 — 틀린 hex보다 낫다).

## B. 컴포넌트 라이브러리 — 별도 순위, 섞지 않는다

TDesign · Arco(+Mobile) · Semi · Fusion · Vant · NutUI · antd-mobile · Zarm ·
Mand Mobile · Tonic UI · OpenTiny · Element Plus · iDux.

증거는 가장 강하다 — Tonic UI는 라이브 버튼 104개에 커스텀 프로퍼티 2,685개이고
`--tonic-colors-red_70:#d71920`이 trendmicro.com 기업 색과 일치한다. Arco도 직접
검증했고 상태 전체가 나온다(`hover #4080ff`, `pressed #0e42d2`, focus 링 `#94bfff`) —
에이전트가 인용한 `--button-primary-clicked-background:#0E42D2`와 우리 실측이 정확히
맞았다.

**그래도 레퍼런스로는 넣지 않는다.** Tonic UI는 Trend Micro 제품이 어떤 느낌인지
말해주지 않는다. 별도 트랙으로 둘 가치는 있다 — "이 라이브러리로 만든 화면"은
빌더가 참조할 만하지만, 브랜드 레퍼런스와 같은 목록에 두면 카탈로그의 주장이 흐려진다.

## 다음

1. 미해결 2건(PayPay, AntUI) 브라우저 검사 — AntUI는 알리페이 *자체 앱* 언어라 값이 크다
2. **일본·대만 집중 조사** — 우리 카탈로그가 가장 얇고, getdesign.md·refero 대비 해자가
   실제로 생기는 지점이다. Serendie가 보여주듯 일본 기업은 평판보다 훨씬 성실하게 발행한다
3. Serendie를 첫 추가 대상으로

에이전트 방법론에 정정 하나를 전달했다: **403은 대개 헤드리스 탐지다.** 우리 카탈로그에서
막힌 10개 중 8개가 일반 브라우저 신원으로 200이 됐다. 재시도 없이 blocked로 적으면
천장을 실제보다 낮게 잡는다 — 오늘 그것 때문에 틀린 주장을 하나 커밋했다.
