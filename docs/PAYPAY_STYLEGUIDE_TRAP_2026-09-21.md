# PayPay 스타일가이드는 캡쳐하면 안 된다 (2026-09-21)

웨이브 1 잔여 항목으로 PayPay·AntUI를 보다가 나온 것. **둘 다 신규 레퍼런스가 아니다** —
`paypay`도 `alipay`도 이미 카탈로그에 있고, 후보 문서가 가리킨 표면은 **기존 레퍼런스의
깊이 보정 대상**이다(C7 중복 원칙).

## 1. alipay — 의심했는데 아니었다

`alipay`의 출처 9개 중 **5개가 `ant.design` / `github.com/ant-design`**이다. 컴포넌트
라이브러리를 브랜드 레퍼런스의 근거로 쓰는 범주 오류로 보였다.

**확인해보니 아니다.** 라이브러리 출처가 근거하는 클레임은 **29개 중 0개**다. 29개 전부
알리페이 자체 표면(`open.alipay.com`, `antgroup.com`)에서 온다. ant.design은 **참고한
기록**이지 근거가 아니다 — 오늘 여러 번 확인한 "인용 없는 출처" 패턴이고, 올바른 관행이다.

**단정하지 않고 세어본 것이 잡아냈다.**

## 2. paypay — 진짜 문제이고, 고치는 방법이 직관과 반대다

현재 상태: **`legacy_snapshot` · 클레임 202개 · 증거 0 · 출처 0.** JP 리포트의 깊이 보정
3순위이고 "JP 핀테크 중 검색 수요 최고"로 적혀 있다.

후보 문서는 `app-style-guide.paypay.ne.jp`를 "미해결, SPA 셸, CSS는 Element UI"로 남겨뒀다.
실제로 열어보니 **경고가 옳았고, 생각보다 나쁘다.**

```
커스텀 프로퍼티 577개 중 547개가 --el-*  (Element UI)
나머지 30개는 Bootstrap 4 기본값: --blue #007bff · --red #dc3545 · --green #28a745 …
body font: Nunito sans        ← 문서 사이트의 폰트
```

**PayPay 토큰은 0개다.** 측정 가능한 전부가 문서 사이트의 프레임워크다.

### 페인트된 색을 세어보면 더 분명하다

```
1315×  rgb(44, 62, 80)   #2C3E50   ← Element UI 기본 텍스트 색
  24×  rgb(94, 94, 94)
  10×  rgb(254, 39, 52)  #FE2734   ← PayPay 브랜드 레드에 가까운 유일한 값
```

**PayPay의 색은 10번, 프레임워크의 색은 1,315번 칠해진다.** 빈도 기반 추출을 돌리면
`#2C3E50`을 PayPay의 전경색으로 확신을 갖고 뽑아낸다.

실제 스타일가이드 내용은 **이미지 33장**에 들어 있다. 본문 텍스트는 1,234자뿐이다.

### 그래서 규칙

**`app-style-guide.paypay.ne.jp`는 `official-doc`으로만 인용하고, `product-surface`로
computed-style 캡쳐하지 않는다.** 캡쳐하면 Element UI와 Bootstrap 값이 PayPay의 디자인
언어로 기록된다.

이건 오늘 세 번째로 만난 같은 계통이다:
- cookpad — 일본 레퍼런스를 **영국 사이트**에서 측정
- Serendie — **문서 페이지의 탭 크롬**을 컴포넌트로 오인(내가 냈고 스스로 잡았다)
- paypay — **문서 사이트의 프레임워크**를 브랜드 토큰으로 오인할 뻔

셋 다 "200이고 값도 그럴듯하다"가 공통점이다. **도달성은 정합성이 아니다.**

## 3. paypay를 실제로 고치려면

- 스타일가이드는 **문서 근거**로 인용(무엇이 규정돼 있는지)하되 값의 출처로 쓰지 않는다.
- 값은 **PayPay 자신의 제품 표면**에서 와야 한다 — `paypay.ne.jp`, `about.paypay.ne.jp`
  (후자는 Element UI 없음, 커스텀 프로퍼티 2개, `-apple-system`).
- 202개 클레임 전부를 근거 댈 수는 없을 것이다. 근거 댈 수 있는 것만 남기고 나머지는
  내리는 것이 정직하다 — 그게 `partial`이 뜻하는 상태다.

**이번 세션에서는 시작하지 않았다.** 202개 클레임 재검증은 웨이브 규모의 작업이고,
위 제약을 모르고 시작하면 잘못된 값을 확신 있게 기록하게 된다.


---

# 4. 깊이 보정을 시도한 결과 — **손대지 않는 것이 맞다**

PayPay 자체 표면을 실제로 쟀다(playwright 실브라우저, 1440×900, 라이트 강제).

```
paypay.ne.jp        body #242323 / #ffffff / Hiragino Kaku Gothic ProN 16px
                    상위색 #242323×1306 · #3895ff×181 · #000000×126 …   (#ff0033 없음)
about.paypay.ne.jp  body #242323 / -apple-system
                    #ff0033×96  ← 선언된 primary는 여기에 있다
```

## 선언된 팔레트 19개 중 **5개만** 관측된다

```
관측됨   primary #ff0033(105) · canvas #ffffff(913) · gray-400 · gray-500 · gray-700
미관측   primary-pressed/deep/tint/disabled · ink #222222 · success · error · warning
         · info · point-gold · gray-50/100/200/300                      (14개)
선언 안 됨인데 많이 칠해짐   #242323×2770 · #696969×288 · #3895ff×198
```

선언된 서체 `Noto Sans JP`는 **두 표면 어디에도 없다**(Hiragino Kaku Gothic ProN / -apple-system).
선언된 `ink #222222`는 없고 실제로는 `#242323`이 2,770번 칠해진다.

## 그런데 이걸 "틀렸다"고 하면 안 된다

**PayPay는 주로 모바일 앱이다.** pressed/disabled/success/error/point-gold/그레이 램프는
**앱에서** 쓰이지 마케팅 웹사이트에 나올 값이 아니다. 앱 스타일가이드가 그걸 문서화하는데
**그 문서는 이미지다**(§2).

즉 **"웹에서 관측 안 됨"은 "값이 틀렸다"가 아니라 "웹은 앱 디자인 시스템을 검증할 표면이
아니다"**를 뜻한다.

제품 웹 표면을 찾아봤지만 없다: `paypay.ne.jp/app/` 404 · `card.paypay.ne.jp` 에러 ·
`paypay-bank.co.jp`는 **다른 법인**(PayPay銀行, Helvetica Neue, `#ff0033` 0회).

## 그래서 건드리면 더 나빠진다

paypay는 `verified: 2026-06-06`으로 **measured-tokens 컷오프(2026-08-01) 이전**이라
`prose-derived`가 grandfathered 상태다. 재검증한답시고 `verified`를 오늘로 올리면
**컷오프 안으로 들어가 `prose-derived`가 차단 사유가 된다** — 측정할 수 있는 것은 5개뿐인데.

> **부분 재검증은 이 레퍼런스를 개선하지 않고 강등시킨다.**

## 결론

- **손대지 않았다.** 202개 클레임 중 웹에서 근거 댈 수 있는 것은 5개뿐이고, 날짜를 올리면
  grandfather가 깨진다.
- JP 깊이 목록 3순위는 **캡쳐로 고칠 수 있는 항목이 아니다.** 앱을 직접 재거나, 스타일가이드
  이미지를 사람이 읽어 `official-doc` 근거로 전사해야 한다 — 둘 다 이 세션의 범위 밖이고
  후자는 "문서가 말한 것"이지 "관측"이 아니다.
- **팔레트 근거율 26%(5/19)**는 기존 측정(prose-derived 111건 평균 43%)보다 낮다. 이 수치는
  `palette_grounding_low` advisory가 이미 잡는 종류이므로 `data/colour-grounding.json`에
  넣을 수 있다 — 다만 그 파일은 **웹 표면 기준**이고 앱 시스템에는 부당하게 낮게 나온다는
  단서가 필요하다.
