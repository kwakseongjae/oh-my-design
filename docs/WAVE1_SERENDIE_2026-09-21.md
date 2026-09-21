# 웨이브 1 — Serendie 실측, 범주 질문, 그리고 **선을 지키는 규칙** (2026-09-21)

`docs/CJK_EXPANSION_CANDIDATES_2026-09-17.md`가 Serendie를 **최우선**으로 지목했다. 본문을
쓰기 전에 측정했고, 측정은 아주 좋았다. 그런데 **About 페이지를 읽고 나니 범주가 의심스럽다.**

## 1. 측정 결과 — 시스템 자체는 훌륭하다

playwright 실제 Chrome · 1440×900 · 라이트 모드 강제 · 2026-09-21

```
표면 6개 전부 200:  home · foundations/color · foundations/typography
                   components/button · foundations/design-tokens · foundations/theming
커스텀 프로퍼티 373개 = reference 184 + system 158 + web-system 31   (3계층 아키텍처)
```

소비자가 바인딩하는 `web-system` 레이어(실측):

```
impression-primary    #0A69CF     component-surface      #FFFFFF
impression-secondary  #0650A0     component-onSurface    #073165
impression-tertiary   #EFF2FC     component-surfaceDim   #EFEEEB
```

치수·타이포도 토큰으로 발행된다(`dimension` none 0 / 4 / 8 / 12 / 16 / 20px,
`typography display-medium_expanded = 400 64px/1.6`).

버튼 상태도 살아 있다 — KONJO 테마 버튼 실측: rest `rgb(6,80,160)`(**#0650A0**) →
hover `color(srgb 0.0094 0.2604 0.5333)`(**#024288**), radius `9999px`, height `40px`,
padding `0 12px 0 16px`. 09-17 세션의 실측과 일치한다.

**측정 중 내가 낸 오류 하나**: 첫 상태 측정에서 hover→press→focus를 **마우스를 치우지 않고**
연속으로 읽어 hover가 눌러붙은 값을 focus로 기록할 뻔했다. 마우스를 park하고 다시 쟀다.
그리고 처음 고른 "Filled/Outlined/Ghost"는 **문서 페이지의 탭 크롬**이지 컴포넌트 데모가
아니었다(높이 48px·14px는 docs UI다).

## 2. 그런데 — Serendie가 스스로를 뭐라고 하는가

`serendie.design/about`, 원문:

> Serendie Design Systemは、三菱電機株式会社DXイノベーションセンターが提供するデザインシステムです。

여기까지는 좋다. 문제는 원칙 세 개다.

> **Adaptive** — 家庭から宇宙まで三菱電機の多様な事業領域…に適応することを目指します。
> **汎用性と普遍性を重視したベーシックなアセット**を提供し、これを下敷きとして
> **事業領域ごとにプロダクトの独自性やアイデンティティを柔軟に表現**します。

> **Borderless** — 三菱電機に関わるすべての人々の共有資産です。**社内・社外を問わず、
> 誰もが許可や承認なしに自由に利用できる環境**を目指します。

> 多様な事業領域への適応 — …**事業領域ごとにVisual Identityが定義され**、特定のプロダクトに
> 特化したUIコンポーネントが必要になることも多く…

세 문장을 합치면 Serendie는 **의도적으로 범용인 기반**이고, **각 사업 영역이 그 위에 자기
VI를 올리며**, **사외 누구나 허가 없이 쓸 수 있다**.

## 3. 이게 왜 문제인가

선정 루브릭(`CJK_EXPANSION_CANDIDATES`, 2026-09-17):

> 라이브러리는 **남의 브랜드를 담도록 설계된 중립 도구**라, 레퍼런스의 목적과 정확히 반대다.
> "ByteDance가 Arco를 발행한다"는 Douyin이 어떻게 생겼는지 알려주지 않는다.

Serendie가 자기 입으로 말하는 것이 거의 그 정의다. **"미쓰비시전기가 Serendie를 발행한다"가
미쓰비시전기 제품이 어떻게 생겼는지 알려주는가?** About 페이지에 따르면 **부분적으로만** —
기반은 범용이고 정체성은 도메인마다 따로 올린다.

**반대 근거도 있다**(그래서 내가 혼자 정하지 않는다):
- 기본 테마 **KONJO(紺青)**는 미쓰비시전기의 것이고, 다섯 테마가 전부 일본 전통색
  (浅葱·紺青·栗皮·菫·躑躅)이다 — 중립 도구가 굳이 안 하는 선택이다.
- 토큰이 추상 스케일이 아니라 **구체적인 값**(#0A69CF 등)으로 발행된다.
- Arco/Semi 같은 범용 OSS와 달리 **한 회사의 DX 조직이 자사 생태계를 위해** 만든다.

즉 **하이브리드**다: 미쓰비시 색을 입은 공유 기반.

## 4. 그래서 오너 결정이 필요하다

| | 결과 |
|---|---|
| **A. 레퍼런스로 넣는다** | 깊이 있는 JP 레퍼런스 1건. 다만 루브릭의 "라이브러리 제외"가 흐려진다 — 다음 판정 때 기준이 약해진다 |
| **B. 제외한다** | 루브릭이 선명해진다. 웨이브 1의 최우선 후보가 사라진다(PayPay·AntUI로 이동) |
| **C. 별도 트랙** | `CJK_EXPANSION_CANDIDATES` §B가 이미 제안한 것 — "이 라이브러리로 만든 화면"은 빌더에 쓸모 있으나 브랜드 레퍼런스와 같은 목록에 두면 카탈로그의 주장이 흐려진다 |

**측정은 버려지지 않는다.** 어느 쪽이든 `scratchpad/serendie/evidence.json`에 남아 있고,
B·C를 골라도 토큰 373개와 상태 실측은 그대로 쓸 수 있다.

## 5. 내가 확인한 사실 하나 더

미쓰비시전기 자체 브랜드 페이지는 `mitsubishielectric.co.jp/corporate/brand/`가 200이지만
**1,291자**다(글로벌 영문 `/about/brand/`는 404). JP 어휘 재조사에서 대기업이 전부 `thin`
이었던 패턴과 같다 — 브랜드 서사이지 사용 규정이 아닐 가능성이 높다. **아직 안 열어봤다.**
Serendie를 제외한다면 미쓰비시전기는 JP 대기업의 일반적 상태로 돌아간다.


---

# 6. 오너가 "넣고 싶다" → 넣으면 어떻게 되는가 (브리핑)

## 6.1 얻는 것

- **깊은 JP 레퍼런스 1건.** 토큰 373개(3계층), 버튼 상태 실측 보유 → `componentCount ≥ 1`,
  **`interactiveComponentCount ≥ 1`, `statedComponentCount ≥ 1`**. 즉 verified 141건 중
  **per-state 값을 가진 38건 쪽**에 들어간다. 컴포넌트 0/1짜리 얇은 36건이 **아니다.**
- **JP proof gate 통과 가능.** brand-owned regional Tier-1 ≥2가 필요한데
  `serendie.design` + `github.com/serendie` 둘 다 통과한다. 소유권도 확인됐다 —
  GitHub org 설명이 **"An open-source design system by Mitsubishi Electric"**이다
  (JP 리포트의 "200은 소유 증명이 아니다" 교훈대로 렌더된 신원으로 확인).
- JP 43 → 44.

## 6.2 대가 — 실측한 것

루브릭이 흐려진다. 그리고 **얼마나** 흐려지는지 쟀다:

```
TDesign(텐센트)  커스텀 프로퍼티 605개   ← Serendie의 373개보다 많다
Arco(바이트댄스)  0개 (런타임 주입)
```

**TDesign은 Serendie보다 토큰이 깊은데 라이브러리라고 기각됐다.** "깊으니까 넣자"는
논리로 Serendie를 넣으면 **TDesign을 빼기가 Serendie를 넣기보다 어려워진다.** CN 기각
10건이 전부 다시 열린다.

## 6.3 그래서 — 선을 지키면서 넣는 규칙

Serendie 자신의 문장이 문제이자 해답이다:

> デフォルトでは**Serendieブランド**を踏襲した5つのテーマを提供します

Serendie는 툴킷 이름이 아니라 **브랜드 이름**이고, 기본 테마가 그 브랜드를 따른다.
확인했다 — `mitsubishielectric.co.jp/serendie/`는 **TOP/ABOUT/SOLUTION/STORIES/PROJECT/
NEWS/CONTACT**를 가진 **실제 플랫폼 사업 사이트**다.

> **규칙**: 발행된 디자인 시스템은, 그 이름이 **시스템과 별개로 존재하는 제품·플랫폼**을
> 가리킬 때 브랜드 레퍼런스다. 이름이 **툴킷만** 가리키면 라이브러리다.

### 이 규칙을 기각 목록에 대고 시험했다 (편한 답을 만들지 않으려고)

| 이름 | 제품/플랫폼 사이트 | 판정 |
|---|---|---|
| **Serendie** | `melco.co.jp/serendie/` → "Serendie セレンディ \| 三菱電機" | **브랜드** |
| TDesign | `tencent.com/tdesign` → **404** | 라이브러리 |
| Arco | `bytedance.com/arco` → 200이지만… | 라이브러리 |
| Semi | `bytedance.com/semi` → 200이지만… | 라이브러리 |
| Vant | `youzan.com/vant` → **404** | 라이브러리 |

**Arco/Semi의 200에 속을 뻔했다.** 둘 다 6,667자를 돌려주는데, **존재하지 않는 경로
`bytedance.com/zz-this-does-not-exist`도 똑같이 6,667자**를 돌려준다 — 바이트댄스 홈페이지
catch-all이다. 대조군(넌센스 경로)을 넣어서 잡았다. 미쓰비시는 넌센스 경로에 **정직하게
404**를 준다.

**규칙은 Serendie를 받아들이고 CN 기각 10건을 그대로 유지한다.**

## 6.4 넣을 경우 정확히 무엇을 하게 되는가

1. 루브릭에 위 규칙을 **명시적으로 추가**한다(안 적으면 다음 판정에서 또 흔들린다).
2. 레퍼런스의 대상은 **"Serendie" 플랫폼 브랜드**이지 "미쓰비시전기 제품 일반"이 아니다 —
   §1이 이걸 분명히 해야 한다.
3. 출처: `serendie.design` 표면들 + `github.com/serendie` + `melco.co.jp/serendie/`
   (플랫폼 사업 사이트 = 브랜드 맥락 근거).
4. **착せ替え(스키닝) 성격을 §1에 명시한다** — 기본 5테마는 Serendie 브랜드이고 사업부는
   그 위에 자기 VI를 올린다는 사실을 숨기면 그게 과장이다.

## 6.5 안 한 것

미쓰비시전기 자체 브랜드 페이지(1,291자)는 아직 안 열었다. Serendie를 넣는 결정과 별개다.
