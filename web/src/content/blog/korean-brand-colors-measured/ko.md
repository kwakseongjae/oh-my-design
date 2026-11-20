---
title: "한국 서비스의 브랜드 컬러를 재 보니, 일곱 가지 방법 모두에서 가장 많은 색은 파랑(29.5~36.6%)"
description: "oh-my-design에 검증 레퍼런스로 올라 있는 한국 서비스 185곳의 브랜드 컬러를 hex 컬러 코드로 모아 색 계열별로 세고, 주 행동 버튼 위 글자의 명도 대비를 계산했습니다."
date: 2026-11-21
tags: [data, brand-color, accessibility, korea]
---

oh-my-design은 실제 서비스의 공개된 웹 화면과 자료에서 색·글꼴·버튼 값을 기록해, 서비스마다 레퍼런스 파일(DESIGN.md) 하나로 모아 둔 아카이브입니다. 여기에 검증(verified) 레퍼런스로 올라 있는 한국 서비스는 185곳입니다. 한국 서비스 전체에서 뽑은 표본이 아니라 이 아카이브에 올라 있는 곳들입니다. 이 가운데 각 레퍼런스 파일이 주 색(primary)으로 밝힌 색을 컬러 코드 하나로 정할 수 있었던 169곳을 색 계열별로 나눴더니, 가장 많은 색은 파랑이었습니다. 169곳 중 60곳, 35.5%입니다. 주 색을 정하는 방법을 일곱 가지로 바꿔 세어도 파랑은 늘 가장 많은 계열이었고, 비율은 29.5%에서 36.6% 사이였습니다. 두 번째로 많은 계열은 어느 방법에서도 13.2%를 넘지 않았습니다. 계산일은 2026년 11월 21일입니다.

![한국 서비스 169곳의 주 색을 색 계열별로 센 막대그래프. 파랑 60곳(35.5%), 빨강 18곳(10.7%), 초록 17곳(10.1%), 청록 14곳(8.3%), 주황 13곳(7.7%), 검정에 가까운 무채색 12곳(7.1%), 남색·보라 10곳(5.9%), 회색 10곳(5.9%), 노랑 7곳(4.1%), 자홍·분홍 6곳(3.6%), 흰색에 가까운 무채색 2곳(1.2%)](/blog-assets/korean-brand-colors-measured/figure-hues.svg)

그림: 주 색의 색 계열별 곳 수(규칙 W, 169곳). 아래 표와 같은 값이고, oh-my-design 공개 저장소의 [`docs/research/2026-11-14-kr-brand-colours/figure_hues.py`](https://github.com/kwakseongjae/oh-my-design/blob/main/docs/research/2026-11-14-kr-brand-colours/figure_hues.py)가 `rows.json`에서 그립니다.

| 색 계열 | 기준(HSL) | 곳 | 비율 |
|---|---|---:|---:|
| 파랑 | H 200~250° | 60 | 35.5% |
| 빨강 | H 345~15° | 18 | 10.7% |
| 초록 | H 70~165° | 17 | 10.1% |
| 청록 | H 165~200° | 14 | 8.3% |
| 주황 | H 15~45° | 13 | 7.7% |
| 검정에 가까운 무채색 | L 8% 미만 | 12 | 7.1% |
| 남색·보라 | H 250~290° | 10 | 5.9% |
| 회색 | S 10% 미만 | 10 | 5.9% |
| 노랑 | H 45~70° | 7 | 4.1% |
| 자홍·분홍 | H 290~345° | 6 | 3.6% |
| 흰색에 가까운 무채색 | L 95% 초과 | 2 | 1.2% |
| 합계 | | 169 | |

H는 색상각, S는 채도, L은 밝기이고 각 범위는 아래 끝을 포함합니다. 위 표는 oh-my-design 공개 저장소의 [`docs/research/2026-11-14-kr-brand-colours/tables.md`](https://github.com/kwakseongjae/oh-my-design/blob/main/docs/research/2026-11-14-kr-brand-colours/tables.md)에 있는 W1입니다. 이 글의 다른 표와 수치도 모두 이 파일에서 가져왔고(계산 2026-11-21), 괄호 안의 W1, W5 같은 이름은 이 파일의 절 이름입니다.

## 어떤 색이 가장 많은가

파랑 60곳 다음은 빨강 18곳(10.7%), 초록 17곳(10.1%), 청록 14곳(8.3%), 주황 13곳(7.7%) 순입니다. 무채색 가운데서는 검정에 가까운 색이 12곳(7.1%)으로 가장 많았습니다.

여기서 파랑은 HSL 색상각 200~250° 구간입니다. 색상각이 200°에 못 미치는 하늘색은 청록으로 셉니다. [가우디오랩](https://oh-my-design.kr/ko/design-systems/gaudiolab)의 `#00b7ff`가 그런 예입니다. 반대로 어두운 색도 밝기가 8% 이상이고 채도가 10% 이상이면 파랑으로 셉니다. [아임웹](https://oh-my-design.kr/ko/design-systems/imweb)의 `#15181e`, [Bithumb](https://oh-my-design.kr/ko/design-systems/bithumb)의 `#1c2028`, [현대자동차](https://oh-my-design.kr/ko/design-systems/hyundai)의 `#002c5f`처럼 검정에 가까운 어두운 색도 이 기준으로 파랑에 들어갑니다. [토스](https://oh-my-design.kr/ko/design-systems/toss)의 `#3182f6`, [원티드](https://oh-my-design.kr/ko/design-systems/wanted)의 `#0066ff`, [신한은행](https://oh-my-design.kr/ko/design-systems/shinhanbank)의 `#0046ff`, [우리은행](https://oh-my-design.kr/ko/design-systems/wooribank)의 `#0067ac`도 파랑 계열입니다.

이 비율은 주 색을 어떻게 정하느냐에 따라 달라집니다. 그래서 같은 레퍼런스를 일곱 가지 방법으로 세어 봤습니다(W5).

| 주 색을 정한 방법 | 셈에 든 곳 | 파랑 | 두 번째로 많은 계열 |
|---|---:|---:|---|
| 이 글의 규칙 W | 169 | 60(35.5%) | 빨강 18(10.7%) |
| 첫 초안의 규칙 S | 153 | 56(36.6%) | 빨강 15(9.8%) |
| 처음 쓴 버튼 규칙 | 176 | 54(30.7%) | 검정에 가까운 무채색 22(12.5%) |
| 카탈로그 데이터의 대표 색(`primaryColor`) | 185 | 63(34.1%) | 빨강·검정에 가까운 무채색 각 19(10.3%) |
| 흰색이 아닌 첫 버튼의 배경색 | 176 | 52(29.5%) | 검정에 가까운 무채색 22(12.5%) |
| `primary` 토큰만 | 149 | 52(34.9%) | 빨강 15(10.1%) |
| 흰색에 가까운 버튼을 거른 버튼 규칙 | 174 | 55(31.6%) | 검정에 가까운 무채색 23(13.2%) |

일곱 방법 모두에서 파랑이 가장 많았고, 비율은 29.5%에서 36.6% 사이입니다. 이 범위 안에서는 어느 한 값을 정답으로 고를 근거가 없어서, 제목에도 범위를 적었습니다.

## 분야마다 다른가

카탈로그에 적힌 분야별로 나눠 봤습니다(W2). 레퍼런스가 8곳 이상인 분야만 싣습니다.

| 분야 | 셈에 든 곳 | 파랑 | 파랑을 뺀 가장 많은 계열 |
|---|---:|---:|---|
| 컨슈머 테크 | 53 | 14 | 초록 9 |
| 핀테크 | 29 | 14 | 노랑 5 |
| 커머스 | 23 | 5 | 빨강 5 |
| AI | 15 | 7 | 빨강 2, 초록 2 |
| 교육 | 11 | 1 | 빨강 2, 주황 2, 청록 2, 남색·보라 2 |
| SaaS | 9 | 4 | 회색 2 |
| 헬스케어 | 8 | 4 | 청록 2 |

컨슈머 테크, 핀테크, AI, SaaS, 헬스케어 다섯 분야에서는 파랑이 가장 많았습니다. 커머스는 파랑과 빨강이 5곳씩 같고, 교육은 11곳 중 파랑이 1곳입니다.

핀테크는 29곳 중 14곳이 파랑이고, 무채색 주 색은 한 곳도 없었습니다. 전체에서 노랑은 7곳인데, 그중 5곳이 핀테크입니다. [카카오뱅크](https://oh-my-design.kr/ko/design-systems/kakaobank), [카카오페이](https://oh-my-design.kr/ko/design-systems/kakaopay), [KB국민은행](https://oh-my-design.kr/ko/design-systems/kb-kookmin), [KB손해보험](https://oh-my-design.kr/ko/design-systems/kbinsurance), [KB페이](https://oh-my-design.kr/ko/design-systems/kbpay)입니다. 나머지 두 곳은 [카카오](https://oh-my-design.kr/ko/design-systems/kakao)와 [카카오페이지](https://oh-my-design.kr/ko/design-systems/kakaopage)입니다.

커머스 23곳에서는 검정에 가까운 무채색 4곳과 회색 3곳을 합하면 7곳으로, 파랑이나 빨강보다 많습니다. 검정 쪽 4곳은 [29CM](https://oh-my-design.kr/ko/design-systems/29cm), [무신사](https://oh-my-design.kr/ko/design-systems/musinsa), [롯데ON](https://oh-my-design.kr/ko/design-systems/lotteon), [아이아이컴바인드](https://oh-my-design.kr/ko/design-systems/iicombined)이고, 회색 쪽 3곳은 [브랜디](https://oh-my-design.kr/ko/design-systems/brandi), [신상마켓](https://oh-my-design.kr/ko/design-systems/dealicious), [KREAM](https://oh-my-design.kr/ko/design-systems/kream)입니다. 빨강 5곳은 [11번가](https://oh-my-design.kr/ko/design-systems/11st), [에이블리](https://oh-my-design.kr/ko/design-systems/ably), [번개장터](https://oh-my-design.kr/ko/design-systems/bunjang), [현대Hmall](https://oh-my-design.kr/ko/design-systems/hmall), [쓱닷컴](https://oh-my-design.kr/ko/design-systems/ssg)입니다.

이 표는 분야와 색이 함께 나온 횟수입니다. 왜 이런 분포가 나왔는지는 이 데이터로 말할 수 없습니다. 분야마다 셈에 든 곳은 8곳에서 53곳까지입니다.

## 같은 컬러 코드를 쓰는 곳은 어디인가

주 색 hex가 글자 하나까지 같은 곳을 찾았습니다(W3). 두 곳 이상이 함께 쓰는 값은 8개이고, 여기에 걸린 서비스는 26곳입니다.

- `#000000`, 9곳: [29CM](https://oh-my-design.kr/ko/design-systems/29cm), [KRAFTON](https://oh-my-design.kr/ko/design-systems/krafton), [롯데ON](https://oh-my-design.kr/ko/design-systems/lotteon), [무신사](https://oh-my-design.kr/ko/design-systems/musinsa), [포자랩스](https://oh-my-design.kr/ko/design-systems/pozalabs), [리멤버](https://oh-my-design.kr/ko/design-systems/remember), [삼성전자](https://oh-my-design.kr/ko/design-systems/samsung), [스테이폴리오](https://oh-my-design.kr/ko/design-systems/stayfolio), [야놀자](https://oh-my-design.kr/ko/design-systems/yanolja)
- `#222222`, 4곳: [신상마켓](https://oh-my-design.kr/ko/design-systems/dealicious), [그린카](https://oh-my-design.kr/ko/design-systems/greencar), [KREAM](https://oh-my-design.kr/ko/design-systems/kream), [리턴제로](https://oh-my-design.kr/ko/design-systems/returnzero)
- `#3182f6`, 3곳: [토스](https://oh-my-design.kr/ko/design-systems/toss), [토스증권](https://oh-my-design.kr/ko/design-systems/toss-securities), [토스뱅크](https://oh-my-design.kr/ko/design-systems/tossbank)
- `#0066ff`, 2곳: [메디블록](https://oh-my-design.kr/ko/design-systems/medibloc), [원티드](https://oh-my-design.kr/ko/design-systems/wanted)
- `#111111`, 2곳: [제네시스](https://oh-my-design.kr/ko/design-systems/genesis), [아이아이컴바인드](https://oh-my-design.kr/ko/design-systems/iicombined)
- `#256ef4`, 2곳: [Government24](https://oh-my-design.kr/ko/design-systems/gov24), [KRDS](https://oh-my-design.kr/ko/design-systems/krds)
- `#ffcc00`, 2곳: [KB국민은행](https://oh-my-design.kr/ko/design-systems/kb-kookmin), [KB페이](https://oh-my-design.kr/ko/design-systems/kbpay)
- `#ffffff`, 2곳: [레몬베이스](https://oh-my-design.kr/ko/design-systems/lemonbase), [엔씨소프트](https://oh-my-design.kr/ko/design-systems/ncsoft)

`#222222`는 L이 8%를 넘어 검정이 아닌 회색으로 셉니다. 같은 어두운 색이라도 `#111111`은 검정 쪽, `#222222`는 회색 쪽에 들어갑니다.

토스의 컬러 코드를 찾는다면 값이 둘이라는 점을 함께 봐야 합니다. 토스 계열 세 곳의 `primary` 토큰은 모두 `#3182f6`이고, 토스의 `tds-button` 배경도 같은 값입니다. 반면 카탈로그 데이터의 대표 색(`primaryColor`)은 토스와 토스뱅크가 `#0064ff`, 토스증권이 `#3182f6`입니다(S5 아래 메모). 토스뱅크 DESIGN.md는 `#0064ff`를 토스 브랜드 리소스 센터가 밝힌 브랜드 블루로, `#3182f6`을 공개 화면에서 관찰한 값으로 나눠 적습니다.

## 주 행동 버튼 위의 글자는 잘 읽히는가

주 색을 정한 169곳에서, 배경이 그 주 색과 정확히 같고 글자색이 불투명한 값으로 적힌 버튼을 모았습니다(W4). 이런 버튼이 하나라도 있는 곳은 95곳이었고, 74곳은 없었습니다. 한 곳에 버튼이 여럿이면 대비가 가장 높은 버튼으로 그곳의 값을 정했습니다. 각 서비스에 가장 유리한 쪽으로 센 것입니다.

95곳의 명도 대비 중앙값은 5.03:1입니다. 4.5:1에 못 미치는 곳은 34곳(35.8%), 3:1에 못 미치는 곳은 12곳(12.6%)이었습니다. 다만 이 34곳에는 주 행동 버튼이 아닌 버튼도 섞여 있습니다. 배경이 주 색과 같으면 이름과 상관없이 모두 셌기 때문입니다.

그래서 34곳의 버튼을 하나씩 그 서비스의 DESIGN.md와 대조했습니다. 파일이 그 버튼을 주 행동 버튼(primary action)이라고 적었거나, 파일이 꼽은 그 서비스의 주요 작업(Primary tasks)을 그 버튼으로 하는 경우만 주 행동 버튼으로 봤습니다. 이 기준을 통과한 곳은 23곳입니다. 나머지 11곳은 이름을 들지 않습니다(W4b). 채용 공고나 채용 사이트로 가는 버튼, 메뉴를 펼치는 버튼과 슬라이더 화살표, 글자 없는 아이콘 버튼, 다른 슬라이드에서 색이 바뀌는 배너 버튼, 주요 작업에 없는 글쓰기 버튼, 파일이 용도나 주요 작업을 적지 않은 버튼입니다. 이 대조는 레퍼런스 파일만 보고 했고, 브라우저로 다시 재지는 않았습니다.

| 명도 대비 | 서비스 | 버튼 배경 | 어떤 버튼인가 |
|---:|---|---|---|
| 2.28:1 | [가우디오랩](https://oh-my-design.kr/ko/design-systems/gaudiolab) | `#00b7ff` | 홈 첫 화면의 문의(Contact us) 버튼 |
| 2.30:1 | [잔디](https://oh-my-design.kr/ko/design-systems/jandi) | `#00c473` | 상단 공통 내비게이션의 주 행동 버튼 |
| 2.30:1 | [런드리고](https://oh-my-design.kr/ko/design-systems/laundrygo) | `#0ac290` | 기록한 세 페이지에 고정된 문의 버튼(「상담 문의하기」 등), 큰 글자 |
| 2.64:1 | [미리캔버스](https://oh-my-design.kr/ko/design-systems/miricanvas) | `#21afbf` | 홈 첫 화면의 주 행동 버튼 |
| 2.79:1 | [당근](https://oh-my-design.kr/ko/design-systems/karrot) | `#ff6f0f` | 디자인 시스템 SEED 버튼의 주(primary) 변형 |
| 2.89:1 | [스티비](https://oh-my-design.kr/ko/design-systems/stibee) | `#ff6464` | 「무료로 시작하기」 |
| 3.00:1 | [아이디어스](https://oh-my-design.kr/ko/design-systems/idus) | `#ef7014` | 상품 페이지의 「구매하기」 |
| 3.17:1 | [모레](https://oh-my-design.kr/ko/design-systems/moreh) | `#ff5700` | 데모 신청(Request Demo) |
| 3.18:1 | [에이블리](https://oh-my-design.kr/ko/design-systems/ably) | `#ff5160` | 판매자 사이트(Seller Square)의 주 진입 버튼 |
| 3.24:1 | [그리팅](https://oh-my-design.kr/ko/design-systems/greeting) | `#1890ff` | 「도입 문의」 |
| 3.33:1 | [펫프렌즈](https://oh-my-design.kr/ko/design-systems/petfriends) | `#ff4081` | 가입 쿠폰 안내 창의 「APP 설치하기」 |
| 3.39:1 | [여기어때](https://oh-my-design.kr/ko/design-systems/yeogiotte) | `#1d8bff` | 홈의 숙소 「검색」 |
| 3.42:1 | [클라썸](https://oh-my-design.kr/ko/design-systems/classum) | `#ff4438` | 홈 첫 화면의 주 행동 버튼 |
| 3.68:1 | [버즈빌](https://oh-my-design.kr/ko/design-systems/buzzvil) | `#f44336` | 「문의하기」 |
| 3.71:1 | [토스](https://oh-my-design.kr/ko/design-systems/toss) | `#3182f6` | 디자인 시스템 TDS의 주 행동 버튼 |
| 3.71:1 | [토스증권](https://oh-my-design.kr/ko/design-systems/toss-securities) | `#3182f6` | 공개 WTS 화면의 주 행동 버튼 |
| 3.73:1 | [모인](https://oh-my-design.kr/ko/design-systems/moin) | `#0082ff` | 「송금 시작하기」 |
| 3.77:1 | [Watcha](https://oh-my-design.kr/ko/design-systems/watcha) | `#f82f62` | 상단의 「로그인」 |
| 3.89:1 | [프로토파이](https://oh-my-design.kr/ko/design-systems/protopie) | `#8169ff` | 상단의 데모 예약(Book a Demo) |
| 4.09:1 | [쏘카](https://oh-my-design.kr/ko/design-systems/socar) | `#0078ff` | 「웹에서 예약하기」 |
| 4.11:1 | [팀스파르타](https://oh-my-design.kr/ko/design-systems/teamsparta) | `#fa0030` | 강의 페이지의 「수강신청하기」 |
| 4.14:1 | [페이히어](https://oh-my-design.kr/ko/design-systems/payhere) | `#0077fe` | 하드웨어 상품 카드의 「구입하기」, 큰 글자 |
| 4.33:1 | [헤이딜러](https://oh-my-design.kr/ko/design-systems/heydealer) | `#396eff` | 홈의 차량 검색 버튼 |

글자색은 23곳 모두 `#ffffff`라 칸을 따로 두지 않았습니다. 23곳 중 6곳은 3:1에도 못 미칩니다(W4a).

이 수치만으로 접근성 기준에 맞는지 판단할 수는 없습니다. 4.5:1은 WCAG 2.x AA가 본문 크기 글자에 요구하는 값이고, 큰 글자에는 3:1을 요구합니다. 이번 집계에는 글자 크기와 굵기를 넣지 않았습니다. 그래서 3:1 이상 4.5:1 미만인 곳은 버튼 글자가 큰 글자인지에 따라 판단이 달라집니다. 표의 23곳을 레퍼런스 파일에 적힌 버튼 글자 크기와 굵기로 다시 보면, 표에 「큰 글자」라고 적은 런드리고와 페이히어 두 곳이 WCAG의 큰 글자(18pt 이상, 굵은 글자는 14pt 이상)에 해당합니다. 이 두 곳에는 3:1 기준이 적용되고, 페이히어(4.14:1)는 이 기준을 넘고 런드리고(2.30:1)는 못 미칩니다. 당근 SEED 버튼은 파일에 글자 크기가 적혀 있지 않습니다.

잰 것은 각 DESIGN.md가 공개된 화면과 자료에서 기록한 버튼의 배경색과 글자색, 두 값뿐입니다. 마우스를 올리거나 눌렀을 때의 색은 넣지 않았습니다.

## 일본·대만과 나란히 놓으면 어떤가

일본과 대만의 검증 레퍼런스도 셌습니다(S6). 이 글의 규칙 W는 한국 레퍼런스만 파일을 읽어 넓혔기 때문에, 세 나라 비교는 넓히기 전의 규칙 S로 합니다. 셈에 든 곳은 한국 153곳(185곳 중), 일본 56곳(76곳 중), 대만 29곳(34곳 중)입니다.

| 색 계열 | 한국(153곳) | 일본(56곳) | 대만(29곳) |
|---|---:|---:|---:|
| 파랑 | 56(36.6%) | 22(39.3%) | 9(31.0%) |
| 빨강 | 15(9.8%) | 13(23.2%) | 5(17.2%) |
| 초록 | 14(9.2%) | 4(7.1%) | 3(10.3%) |
| 청록 | 14(9.2%) | 8(14.3%) | 6(20.7%) |
| 주황 | 12(7.8%) | 4(7.1%) | 4(13.8%) |
| 검정에 가까운 무채색 | 11(7.2%) | 3(5.4%) | 0(0.0%) |
| 남색·보라 | 10(6.5%) | 0(0.0%) | 0(0.0%) |
| 회색 | 8(5.2%) | 2(3.6%) | 0(0.0%) |
| 자홍·분홍 | 6(3.9%) | 0(0.0%) | 2(6.9%) |
| 노랑 | 5(3.3%) | 0(0.0%) | 0(0.0%) |
| 흰색에 가까운 무채색 | 2(1.3%) | 0(0.0%) | 0(0.0%) |

세 나라 모두 파랑이 가장 많습니다. 두 번째는 한국과 일본이 빨강, 대만이 청록입니다. 한국을 규칙 W로 세면 파랑은 169곳 중 60곳(35.5%)입니다(W6).

## 어떻게 셌는가

표본은 카탈로그에서 나라가 한국이고 품질 상태가 검증(`verified_v2`)인 레퍼런스 185곳입니다. 부분 검증(partial) 23곳과 예전 스냅숏(legacy_snapshot) 21곳은 넣지 않았습니다. 레퍼런스마다 `web/references/<id>/DESIGN.md` 머리말의 `colors`와 `components`를 읽었습니다.

주 색은 규칙 W로 정했습니다.

1. `colors.primary` 토큰이 불투명한 색이면 그 값을 씁니다.
2. 토큰이 없으면 이름에 `primary`가 든 첫 버튼의 배경색을 씁니다. 이름에 `marketing`, `secondary`, `ghost`, `outline`, `tertiary`가 함께 든 버튼은 빼고, 배경이 불투명하며 L이 95% 이하인 버튼만 봅니다.
3. 둘 다 없으면 레퍼런스 파일을 읽고, 파일이 주 색으로 내세운 토큰을 씁니다. 파일의 색 목록이 그 토큰을 공식·브랜드 색으로 적었거나 구매·로그인 같은 행동 버튼을 채우는 색으로 적었고, 카탈로그 데이터의 대표 색과 값이 같은 경우만 인정합니다.
4. 그래도 정할 수 없으면 셈에서 뺍니다.

1·2단계까지가 첫 초안의 규칙 S이고, 153곳이 여기서 정해졌습니다. 규칙 S는 이름이 `primary`인 토큰과 이름에 `primary`가 든 버튼만 봤기 때문에, 둘 다 없는 32곳이 빠졌습니다. 대부분 주 색 토큰의 이름이 `primary`가 아닌 곳입니다. 3단계는 이 32곳을 위해 더했습니다. 32곳의 파일을 하나씩 읽었고, 곳마다 쓴 토큰 이름과 근거 문장은 `missing-32.md`에 있습니다.

- 더한 16곳: [네이버](https://oh-my-design.kr/ko/design-systems/naver)(`brand`), [11번가](https://oh-my-design.kr/ko/design-systems/11st)(`brand-red`), [신한은행](https://oh-my-design.kr/ko/design-systems/shinhanbank)(`brand-primary`), [우리은행](https://oh-my-design.kr/ko/design-systems/wooribank)(`brand-deep-blue`), [카카오](https://oh-my-design.kr/ko/design-systems/kakao)(`login`), [KB국민은행](https://oh-my-design.kr/ko/design-systems/kb-kookmin)(`header-accent`), [Melon](https://oh-my-design.kr/ko/design-systems/melon)(`signature-green`), [올리브영](https://oh-my-design.kr/ko/design-systems/oliveyoung)(`corporate-brand-green`), [국민건강보험공단](https://oh-my-design.kr/ko/design-systems/nhis)(`nhis-primary`), [오늘의집](https://oh-my-design.kr/ko/design-systems/ohouse)(`action`), [클래스101](https://oh-my-design.kr/ko/design-systems/class101)(`brand`), [캐치테이블](https://oh-my-design.kr/ko/design-systems/catchtable)(`brand-orange`), [화해](https://oh-my-design.kr/ko/design-systems/hwahae)(`label`), [브랜디](https://oh-my-design.kr/ko/design-systems/brandi)(`action-direct`), [한국도로공사](https://oh-my-design.kr/ko/design-systems/koexpressway)(`service-fill`), [리멤버](https://oh-my-design.kr/ko/design-systems/remember)(`action-black`)
- 뺀 16곳: [쿠팡](https://oh-my-design.kr/ko/design-systems/coupang), [CGV](https://oh-my-design.kr/ko/design-systems/cgv), [지그재그](https://oh-my-design.kr/ko/design-systems/zigzag), [밀리의서재](https://oh-my-design.kr/ko/design-systems/millie), [카카오게임즈](https://oh-my-design.kr/ko/design-systems/kakaogames), [SK텔레콤](https://oh-my-design.kr/ko/design-systems/sktelecom), [Upbit](https://oh-my-design.kr/ko/design-systems/upbit), [RIDI](https://oh-my-design.kr/ko/design-systems/ridi), [TVING](https://oh-my-design.kr/ko/design-systems/tving), [Wavve](https://oh-my-design.kr/ko/design-systems/wavve), [Kakao T](https://oh-my-design.kr/ko/design-systems/kakaot), [강남언니](https://oh-my-design.kr/ko/design-systems/gangnamunni), [Hyundai Card](https://oh-my-design.kr/ko/design-systems/hyundaicard), [Megastudy](https://oh-my-design.kr/ko/design-systems/megastudy), [flex](https://oh-my-design.kr/ko/design-systems/flex), [데이터라이즈](https://oh-my-design.kr/ko/design-systems/datarize)

뺀 16곳은 주 색이 없는 서비스라는 뜻이 아니라, 레퍼런스 파일만으로는 주 색 하나를 정할 수 없었다는 뜻입니다. 대표 색이 글자색 토큰과만 같거나, 토큰에 아예 없거나, 파일이 브랜드 색을 정하지 않는다고 적었거나, 후보가 둘인데 순서가 없는 경우입니다. 카탈로그 데이터의 대표 색은 같은 값이 그 레퍼런스의 토큰에 있을 때 근거를 뒷받침하는 데만 썼습니다. 뺀 16곳 가운데 대표 색이 토큰에 있는 곳까지 모두 넣어 세어도 파랑은 180곳 중 64곳(35.6%)입니다(W7).

처음 쓴 버튼 규칙은 이름에 primary가 든 첫 버튼을, 그런 버튼이 없으면 흰색이 아닌 첫 버튼을 봤습니다. 이 규칙은 흰색에 가까운 보조 버튼을 주 색으로 집기도 했습니다. 토스에서는 `marketing-primary` 버튼의 `#e8f3ff`가 잡혔습니다. 규칙 S와 W는 토큰을 먼저 보고, 흰색에 가까운 버튼은 거릅니다.

색 계열은 주 색을 HSL로 바꿔 나눴습니다. 무채색을 먼저 가르고, 나머지는 첫 표의 색상각 구간으로 나눴습니다. 무채색은 아래 순서로 봤습니다.

- L 8% 미만: 검정에 가까운 무채색
- L 95% 초과: 흰색에 가까운 무채색
- 그 밖에 S 10% 미만: 회색

경계값은 이 집계에서 정한 것이라, 경계 가까이 있는 색은 기준을 조금만 옮겨도 옆 계열로 넘어갑니다. 분야는 카탈로그의 `category` 값을 그대로 썼습니다.

DESIGN.md는 각 서비스의 공개된 웹 화면과 자료를 기록한 문서이고, 레퍼런스마다 기록한 날짜가 다릅니다. 계산 스크립트와 원본 행은 `tables.md`와 같은 폴더 `docs/research/2026-11-14-kr-brand-colours/`에 있습니다. `compute.py`가 계산을, `rows.json`이 레퍼런스별 원본 행을, `method.md`가 판단 기준을, `missing-32.md`가 32곳의 판단 근거를 담고 있습니다. 위 막대 그림은 같은 폴더의 `figure_hues.py`가 `rows.json`에서 다시 그립니다.

## 주 색을 정할 때 무엇을 같이 봐야 하는가

데이터에서 바로 나오는 것은 세 가지입니다.

첫째, 주 색은 그 위에 올릴 글자색과 한 쌍으로 정하고, 둘의 대비를 같이 재야 합니다. 169곳의 주 색 전부에 흰 글자를 올린다고 가정하면 4.5:1 아래가 91곳(53.8%), 3:1 아래가 45곳(26.6%)입니다. 실제 버튼에 적힌 값이 아니라 가정으로 계산한 값입니다(W4c).

둘째, 파랑을 골랐다고 해서 흰 글자와의 대비가 넉넉한 것은 아닙니다. 위 표의 23곳 중 9곳이 파랑 계열입니다. 토스 `#3182f6`, 쏘카 `#0078ff`, 헤이딜러 `#396eff`도 그렇고, 주 행동 버튼의 흰 글자와 대비가 모두 3:1과 4.5:1 사이에 있습니다. 이런 주 색이라면 버튼 글자의 크기와 굵기까지 정해야 어느 기준에 맞는지 말할 수 있습니다.

셋째, 밝은 주 색에는 어두운 글자를 올린 곳이 있습니다. [모두싸인](https://oh-my-design.kr/ko/design-systems/modusign)은 「무료 체험 시작」 버튼에서 `#fed05f` 위에 `#000000` 글자를 올려 14.40:1, [삼쩜삼](https://oh-my-design.kr/ko/design-systems/3o3)은 「내 환급금 조회하기」 버튼에서 `#fbbd41` 위에 `#000000` 글자를 올려 12.46:1입니다. 두 버튼 모두 위와 같은 기준으로 주 행동 버튼임을 확인했습니다(W4d).

한국 레퍼런스 전체는 [oh-my-design의 한국 디자인 시스템 목록](https://oh-my-design.kr/ko/design-systems?region=KR)에서 볼 수 있습니다.

<!-- fact map
모든 수치의 출처는 docs/research/2026-11-14-kr-brand-colours/tables.md (계산 2026-11-21, compute.py 재실행). 별도 표기가 없으면 tables.md.

제목·첫 문단
185곳: Population N = 185 / W1 N = 185
169곳, 60곳, 35.5%: W1 Rule W counted 169, blue 60, 35.5%
일곱 가지, 29.5~36.6%, 13.2%: W5 표와 Claim 문장 (제목의 「일곱 가지 방법 모두」도 W5) (blue 최다는 compute.py가 assert)

W1 표 (계열별 곳, 비율): W1 Rule W n / share 열. 기준(HSL) 칸: tables.md Bucket rule
그림: figure-hues.svg (figure_hues.py, rows.json ruleW_family)

어떤 색이 가장 많은가
빨강 18(10.7%), 초록 17(10.1%), 청록 14(8.3%), 검정 쪽 12(7.1%): W1
가우디오랩 #00b7ff 청록: W4a gaudiolab, rows.json ruleW_family teal/cyan
아임웹 #15181e, Bithumb #1c2028, 현대자동차 #002c5f 파랑(어두운 예): rows.json ruleW_primary·ruleW_family blue·ruleW_light 0.100/0.133/0.186 (L 8% 이상, S 10% 이상)
토스 #3182f6, 원티드 #0066ff: W3 / 신한은행 #0046ff, 우리은행 #0067ac 파랑: W1 Added references
일곱 방법 표: W5 각 행 (규칙 이름은 W5 rule 열: Rule W, Rule S, original measured rule, registry primaryColor, alt 1, alt 2, alt 3)

분야마다 다른가
표의 각 수: W2 각 행 (consumer-tech 53, fintech 29, ecommerce 23, ai 15, education 11, saas 9, healthcare 8)
노랑 7곳 중 핀테크 5곳과 이름, 나머지 2곳: W1 yellow 7, W2 fintech yellow 5, rows.json ruleW_family yellow
커머스 검정 4·회색 3·빨강 5 이름: rows.json ruleW_family 와 category ecommerce
8~53곳: W2 counted 열

같은 컬러 코드
8개 값, 26곳, 각 행: W3
토스 메모: S5 아래 Toss family 메모, web/references/tossbank/DESIGN.md 본문

주 행동 버튼 위의 글자
95곳, 74곳, 중앙값 5.03, 34곳(35.8%), 12곳(12.6%): W4 머리 목록
23곳 유지, 11곳 제외와 이유, 판정 기준: W4 Of the 34 문장, Test 문장, W4a, W4b
표 23행 (대비, 배경, 버튼): W4a 각 행; 「어떤 버튼인가」는 W4a 마지막 열(파일 인용은 compute.py CONTRAST_CHECK)
3:1 미만 6곳, 글자색 #ffffff: W4a 아래 목록; 파랑 계열 9곳: W4a family 열
큰 글자 2곳(런드리고 floating-cta 24px/700, 페이히어 purchase-button 32px/700): 각 web/references/<id>/DESIGN.md components.<component>.typography. 나머지 21곳은 WCAG 큰 글자 아래, karrot box-button은 크기를 적지 않음(gates.md revision round 1)
브라우저 없이 파일 대조: method.md Rule W 절

일본·대만
S6 표 전체, 153/185, 56/76, 29/34
규칙 W 한국 60/169 35.5%: W6

어떻게 셌는가
partial 23, legacy_snapshot 21: Population
153곳(규칙 S), 32곳, 16곳 더함, 16곳 뺌, 토큰 이름: W1, missing-32.md
뺀 이유 네 가지: missing-32.md Left out why 열 (ink-only, not-a-token, declined, two-candidates)
64/180 = 35.6%: W7
토스 marketing-primary #e8f3ff: S5 Toss family 메모, method.md 판단 3

주 색을 정할 때
91곳(53.8%), 45곳(26.6%): W4c
토스 3.71, 쏘카 4.09, 헤이딜러 4.33, 파랑: W4a
모두싸인 #fed05f/#000000 14.40, 삼쩜삼 #fbbd41/#000000 12.46, 주 행동 버튼 판정: W4d (크몽·KB페이는 W4d에서 dropped라 이름을 들지 않음)
-->
