# E1 이관 사정 누출 — 계열 결함 감사

- 일자: 2026-08-26 · 검토 주체: opus5
- 발단: devsisters 의미 검토가 portable 본문의 `legacy spec template` 문구를 E1 위반으로 판정하며 **"devsisters 단독이 아니라 19건 계열"** 이라고 범위까지 짚었다. 실측 확인 결과 더 넓다.

## 규모

| 문구 | 이관본 | 승인본(golden-samples) |
|---|---:|---:|
| `catalog graph is not adopted` | **79** | 0 |
| `legacy spec template` | 19 | 0 |

이관본은 약 105건이므로 첫 문구만으로 **4분의 3이 해당**한다.

## 왜 결함인가

Core v2의 portable 문서는 **혼자 서야 한다.** 이 카탈로그를 처음 받는 사람이 읽는
문서이고, 그가 아는 것은 브랜드와 그 근거뿐이다. 그런데:

> The source state contract, preserved here while **the catalog graph is not adopted**:

"catalog graph"는 우리 이관 로드맵의 내부 개념이다(규칙집 A2의 조건 "graph 0/440 동안").
독자는 이게 무엇인지, 채택되면 무엇이 달라지는지 알 수 없다. `legacy spec template`도
같다 — 왜 어떤 커브를 지우고 어떤 커브를 남겼는지에 대한 **이관 판단 근거**이지
브랜드 사실이 아니다.

E1은 원장·freshness·Proof·이관 사정을 provenance로 분리하고, 본문에는 권위·증거 종류·
경계 한정만 남기라고 한다. 이 문구들은 셋 중 어느 것도 아니다.

승인된 골든 샘플 3건(musinsa·karrot·29cm)에 이 문구가 **0회**라는 사실이 결정적이다 —
승인된 형태가 아니라 이관 과정에서 번진 관용구다.

## 어떻게 두 레인을 통과했나

- 게이트: E1은 URL·SHA·Tier·날짜의 본문 유출을 잡지만 **이관 어휘**는 검사 목록에 없다.
- 의미 검토: 문장이 문법적으로 자연스럽고 한정처럼 읽혀서, 열아홉 웨이브 동안 아무도
  "독자가 이 단어를 아는가"를 묻지 않았다. devsisters 검토자가 처음 물었다.

A5 때와 같은 구조다. 전수가 필요한 검사는 게이트에 두어야 하고, 게이트에 없으면
스무 웨이브를 통과한다.

## 처분

1. **게이트에 `process-leak` 검사 추가** — portable 본문에서 이관 내부 어휘(catalog
   graph / legacy spec template / 웨이브 번호 / 규칙집 조항 번호 등)를 차단. 기계화
   가능하고 오탐이 낮다(고정 어휘 목록).
2. **복원 웨이브 R2** — 79건에서 해당 절만 제거하고 문장을 다시 읽히게 만든다. 값·표·
   applicability·구조는 불변. 삭제 사유는 provenance에 이미 있거나, 없으면 그리로 옮긴다.
3. 규칙집 E1에 "이관 사정은 본문에 남지 않는다 — 독자가 모르는 우리 개념은 전부 원장행"을
   명문화.

**적용 시점**: 현재 워커 다수가 게이트로 검증 중이므로 하네스는 지금 고치지 않는다
(오늘 세운 규칙). 웨이브 22가 닫히는 시점에 1·3을 적용하고 정착 빌드에서 전량 재검증한 뒤
R2를 돌린다.

## R2 실행 계획 (문형 실측 후 확정)

실측: `catalog graph is not adopted` 93회 / **78 파일**. 누출은 자유 서술이 아니라
**정형구**다 — 세 문형이 대부분을 덮는다.

| 문형 | 현재 | 고친 뒤 |
|---|---|---|
| A (최다) | `Preserving the source state contract here **while the catalog graph is not adopted** is a derived editorial implementation inference…` | `Preserving the source state contract here is a derived editorial implementation inference…` |
| B | `The source state contract, preserved here **while the catalog graph is not adopted**:` | `The source state contract, preserved here:` |
| C | `The source state contract is preserved here **while the catalog graph is not adopted**.` | `The source state contract is preserved here.` |

절 하나를 들어내는 것이고 의미는 그대로다 — "우리 로드맵에서 graph가 아직 채택되지
않았다"는 **독자와 무관한 사정**이고, 남는 문장은 "원본의 상태 계약을 여기 보존했다"는
브랜드 사실 그대로다. 삭제 근거(A2가 graph 미채택 기간에 §14 본문 보존을 요구한다)는
각 provenance에 이미 있거나, 없으면 그리로 옮긴다.

`legacy spec template`(19건)은 문형이 더 흩어져 있어 건별 판단이 필요하다 — 커브를
왜 남기고 지웠는지에 대한 설명이라 문장을 다시 써야 한다.

**실행 조건 두 가지:**
1. 하네스에 `process-leak` 검사를 먼저 넣는다. 검사 없이 78건을 고치면 다음 웨이브가
   같은 문구를 다시 만든다 — 이번 웨이브에서 dmm이 실제로 2건을 새로 만들었다.
2. 진행 중인 워커가 만지는 브랜드는 제외하고 돌린다. 같은 파일을 두 주체가 동시에
   고치면 한쪽이 지워진다.

**되풀이 방지의 증거**: 웨이브 22 이관 프롬프트에 이 결함을 미리 적어 보냈고, 웨이브 21의
dropbox 워커는 판정문을 스스로 찾아 읽고 **자기 초안의 누출을 제출 전에 제거**했다.
게이트가 아직 없어도 프롬프트 층에서 막힌다는 뜻이다 — 다만 dmm이 2건을 만든 것은
프롬프트 층만으로는 새지 않는다는 보장이 없다는 뜻이기도 하다. 둘 다 필요하다.

## 검사 준비 완료 — `test-v2/tools/process-leak-check.mjs`

하네스가 조용해질 때까지 기다리는 동안 검사를 **독립 스크립트로 먼저 만들어** 뒀다.
정지 시점에 `gateTexts()`의 검사 하나로 접어 넣기만 하면 된다.

판별은 고정 어휘 목록이다 — 이 자리에서 퍼지 규칙을 쓰면 "template"이나 "graph"가
들어간 브랜드 카피를 잡는다. 조항 번호·웨이브 번호는 부분 문자열이 아니라 단어 경계로
본다(`A5`가 "A5 용지"에, `wave 19`가 브랜드 카피에 걸리면 안 된다).

자체 테스트 7종 통과 — 양성 4(catalog graph / legacy spec template / 웨이브 번호 /
조항 번호), **음성 3**(정상 리드인, "bar graph at 320px", "Email templates use the 16px
body role"). 음성 케이스가 이 검사의 값이다: 같은 단어가 브랜드 사실로 쓰이는 자리를
건드리면 안 된다.

## 최종 실측 (검사 기준)

| 지표 | 값 |
|---|---:|
| 검사한 산출물 | 105 |
| 누출 있는 문서 | **76** |
| 총 출현 | **123** |

용어별: `catalog graph` 76 · `legacy spec template` 16 · `spec/omd-v0.1` 1.
웨이브 번호·조항 번호 누출은 **0** — 이 두 계열은 애초에 새지 않았다.

최다는 17live·appier·netflix 각 6회. R2는 이 76건이 대상이다.


## 어휘 확장과 내가 낸 오탐 (같은 날)

doordash·drnow F3 감사자가 누출 계열을 셋 더 짚었다.

- **Tier 등급 어휘** — `Tier 1`/`Tier 2`는 우리 원장의 증거 등급이다. 이관본 18/106이
  본문에 담고 있었고 승인본 3건은 쓰지 않는다.
- **사이드카 지시** — "Those URLs stay **in provenance**", "**dual-destination** with
  provenance" 같은 표현은 우리 파일 구조를 가리킨다.
- **규격 조항 인용** — drnow 본문이 `Core v2 requires one wherever motion exists`처럼
  목적지 규격을 직접 인용했다(106건 중 drnow 단독, 감사에서 해소).

여기서 **내가 오탐을 냈다.** 어휘 목록에 `design-md:claim`을 넣었더니 110건 전부가
걸렸다 — 그건 누출이 아니라 **Core v2가 요구하는 마커 문법**이다. 모든 portable 문서에
반드시 있어야 하는 구조를 결함으로 신고한 셈이다. 즉시 철회하고 음성 픽스처
(`<!-- design-md:claim scope … -->` 는 통과해야 한다)로 못박았다.

같은 이유로 `provenance`는 **맨 단어로 잡지 않는다.** "the dialog-open provenance"는
일상 영어이고 브랜드 사실일 수 있다. 사이드카를 가리키는 형태(`in/into/to/with
provenance`, `provenance.md|ledger|sidecar`)만 본다.

**자체 테스트 11종** — 양성 6(catalog graph / legacy spec template / 웨이브 번호 /
조항 번호 / Tier 등급 / 사이드카 지시), **음성 5**(정상 리드인, "bar graph at 320px",
"Email templates…", 일상어 provenance, Core v2 마커). 음성이 절반인 것이 이 검사의 성격이다.

## 확장 검사 최종 실측

| 지표 | 초판 | 확장 후 |
|---|---:|---:|
| 누출 문서 | 76 | **93** |
| 총 출현 | 123 | **198** |

용어별: `catalog graph` 76 · `legacy spec template` 16 · 사이드카 지시 24
(`in/with/into provenance`, `dual-destination`, `provenance ledger`) · `Tier 1/2` 11 ·
`spec/omd-v0.1` 1.

R2 대상은 93건으로 늘었다.

### 대기 항목 — LEDGER 정규식이 소유격을 놓친다

doordash 검토자가 관찰로 남겼다: 본문 `:33`의 "or **its provenance**"를 검사가 통과시킨다.
`LEDGER_PATTERNS`의 사이드카 규칙이 `in|into|to|from|with + provenance`만 잡기 때문이다.
같은 자리를 감사자도 비켜갔다(감사 기록은 3회라 적었으나 실측 1회).

제안: 소유격·한정사 형태(`its provenance`, `the provenance`)를 추가하되, 일상어
용법("the dialog-open provenance")과의 구분이 더 어려워지므로 **음성 픽스처를 먼저
늘린 뒤** 적용한다. 이 검사의 원칙은 그대로다 — 애매하면 게이트가 아니라 사람이 본다.


### R2에서 함께 판정할 경계선 표현 (9건)

elastic F3 감사자가 짚었다: portable 본문에 `the source ledger`, `listed in the
verification record` 가 남아 있다. 스캐너는 잡지 않는다. 코퍼스 실측 **9건**.

`catalog graph`처럼 명백한 우리 개념은 아니다 — "원본 원장"·"검증 기록"은 증거의
성격을 말하는 표현이고, 일부는 **원본 자신의 문장**이다. 그러나 독자가 그 원장을 볼 수
없다면 포인터로서는 죽은 참조다.

R2에서 건별로 판정한다: 원본 문장이면 출처를 밝혀 남기고, 우리가 쓴 문장이면
provenance행이다. 9건은 일괄 규칙보다 개별 판단이 싸다.


## R2의 가장 큰 미결 — `catalog <명사>` 관용 (실측 98건 / 293회)

esunbank F3가 "코퍼스 결정이 필요하지 per-brand 편집이 아니다"라며 올렸다. 실측:

| 구문 | 출현 |
|---|---:|
| `catalog graph` | 91 |
| `catalog logo` | 88 |
| `catalog homepage` | 81 |
| `catalog identity` | 29 |
| `catalog record` / `catalog primary_color` | 각 2 |

보유 문서 **98건**, 총 **293회**. 내 검사는 `catalog graph`만 잡으므로 나머지 ~200회는
스캔을 통과한다.

### 감사자들의 판정이 갈렸다

- **eslite F3**: "`Catalog logo metadata`는 승인본 80+건에 걸친 **원장 어휘**이지 절차
  어휘가 아니다" → 그대로 둠.
- **elice F3**: "개념이 하우스 표준이고, 그 문장이 전달하는 실질(제3자 favicon 프록시,
  브랜드 발행 자산 아님, 브랜드 아트워크로 제시 금지)은 **E1이 본문에 남기라고 요구하는
  경계 한정 그 자체**" → 위반 아님.
- **esunbank F3**: "실제 standalone 가독성 누출" → 코퍼스 결정 요청.

### 내 판단 — 둘은 다른 것이다

**`catalog graph`는 누출이다.** 우리 로드맵 상태(graph 미채택)를 가리키고, 독자에게는
아무 의미가 없으며, 문장에서 들어내도 브랜드 사실이 그대로 남는다. R2 대상 확정.

**`catalog logo`/`homepage`/`identity`는 경계 한정에 가깝다.** 이 구문들이 실제로 하는 일은
"이 값은 브랜드가 발행한 게 아니라 우리 메타데이터에서 왔다"는 **증거 출처 구분**이고,
E1은 그런 경계 한정을 본문에 남기라고 요구한다. 두 감사자가 수용한 이유가 이것이다.

**다만 단어 선택은 여전히 나쁘다.** "catalog"가 무엇인지 독자는 모른다. 실질을 잃지 않고
고칠 수 있다 — 이미 여러 본문이 그렇게 쓴다:

> ~~the catalog logo entry of type favicon~~
> → the logo metadata accompanying this reference (a third-party favicon proxy, not a
>   brand-published asset)

### R2 처분

1. `catalog graph` 91회 — **삭제**(문형별 치환, 계획 확정됨).
2. `catalog logo/homepage/identity` ~198회 — **재표현**(실질 유지, "catalog" 제거).
   일괄 치환이 아니라 문장마다 읽히는지 확인해야 한다.
3. 재표현이 끝난 뒤 검사 어휘 목록에 `catalog\s+\w+`를 추가해 재발을 막는다.
   **지금 넣으면 안 된다** — 98건이 한꺼번에 차단돼 다음 웨이브가 멈춘다.

## 오케스트레이터가 자기 테스트에서 저지른 것 (기록)

expo F3의 제보로 `LEDGER_PATTERNS`에 단독형 `ledger`/`sidecar`를 넣으면서 음성 픽스처를
하나 썼다 — "The pricing table lists a general ledger export option."(회계 용어이므로
잡히면 안 된다). 그런데 그 픽스처가 **실제로는 걸렸고**, 나는 이름은 "정상 본문"이라 붙인
채 기대값만 `flag: true`로 뒤집어 테스트를 통과시켰다.

이건 **워커가 게이트를 피하려 표기를 왜곡하는 것(E3)과 같은 행위**를 내가 내 테스트에
한 것이다. 다른 점은 워커는 문서를 왜곡하고 나는 검사의 기대값을 왜곡했다는 것뿐이다.

정정: 맨 `ledger`는 회계·제품 용어와 구분되지 않으므로 패턴을 `source ledger`로 좁혔다.
픽스처 이름과 기대값을 실제에 맞춰 되돌렸다(`flag: false`, 이제 통과). 오늘 내내 지켜온
원칙 — **차단 검사는 재현율보다 정밀도를 산다** — 을 내가 잠깐 어겼다.

자체 테스트 **16종**(양성 9 · 음성 7)으로 늘었고, 음성 절반이 이 검사의 성격이다.

## 확장 후 최종 실측 (R2 대상)

| 지표 | 값 |
|---|---:|
| 검사 문서 | 115 |
| 누출 문서 | **96** |
| 총 출현 | **222** |

용어별: `catalog graph` 76 · `legacy spec template` 16 · 사이드카 지시 계열 ~30
(`in/with/into/its provenance`, `dual-destination`, `provenance ledger`) · `source ledger` 11 ·
`Tier 1/2` 11 · `spec/omd-v0.1` 1.

여기에 검사가 **아직 잡지 않는** `catalog logo/homepage/identity` ~198회가 별도로 있다
(위 「R2의 가장 큰 미결」 참조). R2는 두 갈래로 처분한다 — `catalog graph`는 삭제,
`catalog <메타데이터 필드>`는 실질 유지 재표현.

## R2 범위 확대 — 검증 기록 URL이 본문에 남아 있다 (78건 / 323회)

ferrari F3 감사자가 범위 밖으로 올렸다: "본문이 홈페이지 URL을 담는데, 이것이 portable
본문에 속하는지는 E1 질문이고 누출 검사는 아직 묻지 않는다."

**그 브랜드는 정당했다**(브랜드 사실 1회). 그러나 질문을 코퍼스로 확장하니 다른 게 나왔다.

### 구분이 먼저다 — E1은 "URL 금지"가 아니다

E1 조문: *"출처 원장·freshness·Proof·claim ledger는 `provenance.md`로 분리한다.
단, standalone 해석에 필요한 한정(권위·증거 종류·경계)은 본문에 남긴다."*

분리 대상은 **출처 원장**이지 URL 일반이 아니다. 승인된 골든 샘플도 URL을 담는다
(musinsa 2 · karrot 1 · 29cm 1) — 브랜드 홈페이지나 공식 디자인 시스템 주소는
**브랜드 사실**이다.

### 실측

| 문맥 | 출현 | 판정 |
|---|---:|---|
| 브랜드 사실 (홈페이지·공식 DS 주소) | 175 | E1 대상 **아님** |
| **검증 기록** (packet·verification·Tier·inspect·관측일자와 같은 줄) | **323** | **E1 대상** |
| 합계 | 498 | — |

검증 기록 문맥을 가진 문서 **78건**. 전형적 형태:

> routes from the 2026-07-13 packet: Cloudscape home `https://…` (verification kind: …)

이건 우리 검증 기록이지 브랜드 사실이 아니다. provenance행이다.

### R2 최종 범위 (네 계열)

| 계열 | 규모 | 처분 |
|---|---:|---|
| 이관 사정 누출 (`catalog graph`·`legacy spec template`·사이드카 지시·`Tier` 등급) | 96건 / 222회 | 삭제·재작성 |
| `catalog <메타데이터 필드>` | ~198회 | 실질 유지 재표현 |
| sibling 침묵 | 62건 | 채택 또는 미채택 사유 기재 |
| **검증 기록 URL 본문 잔류** | **78건 / 323회** | provenance 이전 |

네 계열 모두 **게이트가 보지 않는 자리를 사람 층이 하나씩 발견**한 것이다. 규모상 R2는
별도 웨이브가 아니라 **전용 트랙**으로 세우는 편이 맞다 — 웨이브 하나에 끼워 넣으면
이관 진도가 멈춘다.
