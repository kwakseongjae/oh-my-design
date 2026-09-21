# pixiv 깊이 보정 — 선언된 팔레트가 **머티리얼 디자인이었다** (2026-09-21)

JP 깊이 목록을 재개하면서 `smarthr`를 1순위로 잡았다가 **측정하고 순위를 뒤집었다.**
그리고 pixiv를 열어보니 깊이 문제가 아니라 **정확성 문제**였다.

## 1. 순위를 뒤집은 이유 — 네임스페이스를 봤다

후보 5개의 커스텀 프로퍼티를 **누구의 것인지**로 갈랐다(개수가 아니라).

```
smarthr.design    398 props → --tw-* 355 (Tailwind 내부) · --color-* 22 · --font-* 16
smarthr.jp        146 props → --service-* 43 · --l-* 17 · --transition-* 11 · --form-* 10   ← 자기 것
pixiv.net         328 --charcoal-*                                                          ← 자기 것, 압도적
charcoal 스토리   --charcoal-* 1436 (+ --tw-* 4245)
sansan 스토리       0 props
cybozu 特設       807 props → --c-* 404 · --ca-* 207 · --cl-* 76 · --cd-* 54
```

**`smarthr.design`은 문서 사이트라 대부분 Tailwind다**(PayPay와 같은 계통). 정작 제품인
`smarthr.jp`가 자기 토큰을 갖고 있다. 반면 **pixiv는 제품 도메인 자체가 디자인 시스템 토큰을
328개 발행한다** — 후보 중 가장 강한 신호다.

> 기준 변경을 기록해 둔다: JP 깊이 순위는 이제 **"자기 네임스페이스 토큰이 제품 표면에
> 실재하는가"**로 정렬한다. 이전 목록의 smarthr 1순위는 이 기준으로 재측정된 결과 2순위다.

## 2. 계측기 규율 — 이번에도 두 번 속을 뻔했다

**(a) 스타일시트 열거는 라이트/다크를 섞는다.** 처음 `document.styleSheets`를 훑어
`brand-hover = #1fa3fb`를 얻고 "모순"이라고 적었다. **그건 다크 오버라이드였다.**
`getComputedStyle(:root)`로 resolve하면 `#0090f0`이다. 394개 중 **223개가 라이트/다크에서
다르다** — 열거로는 어느 쪽인지 알 수 없다. **계측기는 resolve된 계산값이다.**

**(b) 값으로 토큰을 역추적한 뒤, 잘못된 이름으로 검증했다 — 두 번 틀렸다.** 값 인덱스가
`primary-hover #0086e0`을 `--charcoal---pixiv-brand-color-highlight`에 매칭했다. 대시 세 개를 보고
그 이름 그대로 직접 조회하니 `(unset)`이라 **"유령 토큰"이라 결론짓고 이 값을 날조로 분류했다.**
**틀렸다.** 인덱스가 접두사를 잘못 이어붙였을 뿐, 실제 토큰은 `--pixiv-brand-color-highlight`이고
값은 **정확히 `#0086e0`**이다. 즉 선언값은 **근거가 있었다**. 잘못된 이름으로 조회한 `(unset)`을
"토큰 없음"의 증거로 쓴 것이 오류다 — **조회가 실패하면 대상이 없는 게 아니라 질의가 틀린 것일
수 있다.** `--pixiv-*` 네임스페이스를 통째로 나열하고 나서야 보였다.

**(c) 스토리북 로더가 컴포넌트인 척한다.** `button` 첫 원소를 잡으니 hover가 30초 타임아웃.
열어보니 **0×0짜리 "Set string" 버튼 3개**가 앞에 있고 진짜는 네 번째
`button.charcoal-button`(104×40)이었다. serendie에서 **탭 크롬을 컴포넌트로 오인한 것과 같은
오류**다 — 이번엔 보이지 않는 크기로 왔다. 바운딩 박스 > 8px 필터로 잡았다.

## 3. 측정 결과 — charcoal은 pixiv 자신의 제품에 살아 있다

`getComputedStyle(document.documentElement)` · 실제 Chrome · 1440×900 · 라이트 강제

```
brand #0096fa · brand-hover #0090f0 · brand-press #007ed2
text1 #1f1f1f · text2 #474747 · text3 #858585 · text4 #adadad · text5 #ffffff
background1 #ffffff · background2 #f5f5f5 · surface1 #ffffff · surface3 rgba(0,0,0,.04)
border-default rgba(0,0,0,.08) · like #ff4060 · r18 #ff4060
success #b1cc29 · warning #ffaf0f · assertive #ff2b00 · link1 #3d7699
radius-oval 999999px
text: body 14px/22px · caption-s 12px · caption-m 14px · heading-xs 16px/24px
      heading-xl 25px/32px · heading-xxl 28px · heading-xxxl /40px · weight-regular 400
```

컴포넌트는 `charcoal-web.pixiv.design`(브랜드 소유 Tier-1)이 **38개 컴포넌트 / 215개 스토리**를
발행한다. 그중 10개를 열었는데 **진짜 컴포넌트로 측정된 것은 6개**다(포인터 park 후 측정).
Modal·Snackbar는 스토리의 **트리거 버튼**(`.charcoal-button`)을 잡은 것이고, Radio·TextField는
**래퍼 div**다 — 컨테이너를 컴포넌트로 센 것이라 "10/10·6 stated"는 과장이었다. 최종적으로
토큰화한 것은 **상태까지 실측된 5개(Button·ButtonDefault·IconButton·Switch·Checkbox) + 배지 1개**이고,
SegmentedControl·TextField는 **컨테이너만 읽었으므로 컴포넌트로 선언하지 않았다.**

```
Button            #0096fa  radius 999999px  h40   hover/press: bg·fg·outline 변화
IconButton        투명     radius 999999px  h40   hover/press: bg·fg·outline
Switch            #858585  radius 16px      h16   hover/press/focus: bg
Checkbox          투명     radius 4px       h20   focus: bg·border
Modal/Snackbar    .charcoal-button 동일 계열
SegmentedControl  radius 16px  h32     TagItem radius 4px h40     TextField h40
```

## 4. 그런데 진짜 발견은 이것이다 — **선언된 팔레트가 머티리얼이다**

레퍼런스는 `tokens.source: prose-derived`로 색 24개를 선언한다. charcoal과 대조했다.

| 선언 | 값 | charcoal 실측 | 판정 |
|---|---|---|---|
| `primary` | `#0096fa` | `brand #0096fa` | **일치** |
| `engagement-red` | `#ff4060` | `like` / `r18` `#ff4060` | **일치** |
| `grey-600` | `#858585` | `text3 #858585` | **일치** |
| `grey-100` | `#f5f5f5` | `background2 #f5f5f5` | **일치** |
| `primary-hover` | `#0086e0` | `--pixiv-brand-color-highlight` `#0086e0` | **일치** |
| `dark-surface` | `#1f1f1f` | **다크** `background1` `#1f1f1f` | **일치** |
| `dark-border` | `#3a3a3a` | **다크** `surface1-hover` `#3a3a3a` | **일치** |
| `heading` | `#1a1a1a` | `text1` **`#1f1f1f`** (`#1a1a1a`는 *press* 변형) | 모순 |
| `dark-text` | `#f0f0f0` | 다크 `text1` **`#f5f5f5`** | 모순 |
| `success` | `#4caf50` | **`#b1cc29`** | 모순 — `#4caf50`은 **Material Green 500** |
| `warning` | `#ff9800` | **`#ffaf0f`** | 모순 — `#ff9800`은 **Material Orange 500** |
| `error` | `#e3413f` | `assertive` **`#ff2b00`** | 모순 |
| `grey-50/200/300/400/500` · `body #666666` · `label #333333` | | charcoal에 **없음** | 일반 웹 그레이 |
| `premium-gold` · `primary-tint` · `dark-raised/border/text` | | charcoal에 **없음** | 미확인 |

**24개 중 역할까지 맞는 것은 9개다.** 그리고 시맨틱 3색이 **머티리얼 디자인 기본값**이다 —
`#4caf50`/`#ff9800`은 우연히 나올 수 있는 값이 아니라 **채워 넣은 값**이다.

컴포넌트도 같다: `button-primary.radius: 6`으로 선언돼 있는데 **charcoal 버튼은 알약
(`999999px`)**이다. 서체는 `family.sans: "system-ui"` — 규칙이 금지하는 바로 그 대체값이다.

## 5. 이것이 뜻하는 것

pixiv는 **깊이가 얕은 레퍼런스가 아니라 값이 틀린 레퍼런스**다. 그리고 **고칠 수 있다** —
PayPay와 정반대다.

| | PayPay | pixiv |
|---|---|---|
| 제품 웹 표면 | **없음**(앱 전용) | `pixiv.net` |
| 자기 토큰 발행 | 없음 | **328개** |
| 컴포넌트 근거 | 이미지 33장 | **215개 스토리** |
| 재검증하면 | **강등**(측정 가능 5/19) | **승격 가능** |

PayPay는 "웹이 앱 시스템을 검증할 표면이 아니라서" 손대지 않는 것이 맞았다. pixiv는
**검증할 표면이 자기 도메인에 있는데 아무도 안 봤을 뿐**이다.


---

# 6. 실제로 한 것 — pixiv는 `legacy_snapshot` → **`verified_v2`**

```
claims 120 / 120 evidence (coverage 1.00) · sources 8 · surfaces 3 · Tier-1 3
components 6 · interactive 5 · **stated 5** · reasonCodes []
카탈로그 142 → **143 verified_v2**
```

바꾼 것: 토큰 블록 전면 재작성(`prose-derived` → `live-extract`), §2·§3·§4·§5 산문을 실측값으로,
`verification_v2`(120 클레임) 신규, `.verification.md`(Proof 128 샘플) 신규.

**내린 것**(근거 없음): 머티리얼 3색(`#4caf50`·`#ff9800`·`#ffb300`) · 일반 그레이 램프 10단 ·
`primary-tint` · `dark-raised` · `mono: SF Mono` · secondary/follow/premium 버튼 변형 ·
그림자 5단(§6은 산문으로 남기되 **미측정으로 명시**) · spacing `48px`.

**경계를 지킨 것**: `family.sans`는 charcoal이 선언한 `Noto Sans CJK JP`로 두고, 제품 본문이
`win-bug-omega, system-ui, …`로 **OS 서체에 떨어진다는 사실은 §3 산문으로** 적었다 —
시스템 폰트를 브랜드 사실로 승격하지 않는다는 규칙 그대로다.

**남는 한계**: 홈이 로그인 월이라 레이아웃·그리드·브레이크포인트(§5·§8)는 여전히 이전 산문이고
이번 검증 범위 밖이다. `.verification.md`에 명시했다. `paletteGrounding 0.333`은 낮게 보이지만
**로그인 월에서는 선언된 토큰 대부분이 칠해지지 않기 때문**이지 값이 틀려서가 아니다.
