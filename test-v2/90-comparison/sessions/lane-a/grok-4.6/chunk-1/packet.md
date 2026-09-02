# 채점 세션 — 레인 A · 평가자 grok-4.6 · 청크 1 (apple · baemin · coupang)

이 디렉터리 안의 파일만 연다. 여기 적히지 않은 경로(레포의 다른 디렉터리 포함)는 열지 않는다.
채점 결과는 이 디렉터리의 `responses.jsonl`에 한 줄에 JSON 하나로 쓴다 — 행(brand, rep)마다 슬롯(A/B/C)마다
축별 객체 하나씩(defects · evidence · identification · document), 그리고 행마다 마지막에 postHocGuess 하나.
축 3은 아래에 「축 3 채점함」이라고 적힌 브랜드에서만 낸다. 다 쓰면 마지막 줄에 `SCORING_DONE rows=<n>`을 출력한다.

## 공통 머리말

```
너는 이 패킷만 보고 채점한다. 패킷 밖의 지식, 브랜드에 대한 사전 지식, 어느 도구가
만들었는지에 대한 추측을 점수에 넣지 않는다.

산출물은 익명이다. A·B·C 자리 표시는 무작위이며 순서에 의미가 없다.

앵커에 없는 기준을 만들지 않는다. 앵커 사이에서 망설이면 낮은 쪽을 준다.
근거는 패킷 안에서 관찰 가능한 것만 인용한다. "전반적으로 좋다" 같은 총평은 쓰지 않는다.

각 점수마다 근거 한 줄을 붙인다. 근거가 없으면 그 점수를 주지 않는다.
```

## 축 1 — 첫 렌더 결함 (두 첫 캡처만: desktop-1440.png · mobile-390.png)

```
두 첫 캡처(desktop-1440, mobile-390)만 본다. DOM도 소스 코드도 보지 않는다.

결함 제보의 식별자는 (viewport, region ID, defect code, 보이는 증상)이다.
region ID는 잠금표의 K*·H1 또는 고정 격자 G[row,column]를 쓴다.

고정 defect code는 아래 **12종이 전부다.** 여기 없는 코드를 만들지 않는다. 어느 코드에도
맞지 않는 관찰은 결함으로 제보하지 않는다.

LOAD(빈 화면·crash) · TASK(잠긴 핵심 과업 불가) · CLIP(캡처 사각형 **안에서** 필수
픽셀·문자·컨트롤이 경계나 다른 요소에 의해 잘림) · OVERLAP · H-OVERFLOW · STATE ·
CONTRAST · FOCUS · KEYBOARD · HERO · BRAND-MARK · LOCAL

정상적으로 캡처 아래로 이어지는 문서 흐름과 잠금표의 허용 폴드 아래 콘텐츠는 CLIP이
아니다. CONTRAST는 캡처 색상 샘플로 WCAG 2.x contrast ratio를 계산해 일반 텍스트
`<4.5:1`, 큰 텍스트·필수 UI 경계·아이콘 `<3:1`일 때만 성립하며 측정 좌표·전경·배경
RGB와 계산값을 기록한다.

다음을 모두 만족할 때만 여러 제보를 한 결함으로 합친다: defect code가 같고,
region ID가 같고, 보이는 증상이 같은 시각적 연속체다. 두 viewport의 제보도 이 규칙을
만족하면 하나로 합쳐 더 높은 severity를 쓴다. 하나라도 다르면 별도 결함이다.
구현 원인이나 요소 동일성을 추정해 합치지 않는다.

디자인 취향 차이, 브리프에 없는 요구는 결함이 아니다.
```

severity 앵커 (RUBRIC §4.1 전문):

```
- `P0`: `LOAD`, 잠긴 `TASK` 완료 불가, `K*` 핵심 콘텐츠의 `CLIP`, 로고·워드마크 금지
  위반, 키보드만으로 잠긴 핵심 과업 불가.
- `P1`: 핵심 과업은 가능하지만 주요 `OVERLAP`·`H-OVERFLOW`, 잘못된 `STATE`, 수치로
  확인된 `CONTRAST`, `FOCUS`, `HERO`가 있다.
- `P2`: 과업과 정보 이해를 막지 않는 국소 정렬·간격·크롭·타이포·장식 결함이다.

점수는 `max(0, 100 - 40×P0 - 10×P1 - 3×P2)`다. 디자인 취향 차이, 브리프에 없는
```

## 축 2 — 근거 추종의 의미 판정 (생성 image.jpg ↔ 브랜드 스냅샷)

```
수치 부분은 verify.json이 이미 계산했다. 너는 그 숫자가 직접 재지 않는 것만 본다.

관찰 가능한 전경/배경 관계, 요소의 상대적 크기·겹침·반복, 시각적 위계와 크롭의
전체 인상이 스냅샷과 얼마나 일치하는지를 평정한다.

0 = 관찰 가능한 관계가 거의 반대
1 = 대부분 불일치
2 = 혼합
3 = 대부분 일치
4 = 핵심 관계와 전체 인상이 일치

별도 시맨틱 아트디렉션 주석, pack이 선언한 이미지 역할, 브랜드 사실의 양,
슬롯 해석은 보지 않는다. 측정 가능한 필드에서 verify.json과 네 인상이 반대여도
숫자를 덮어쓰지 않는다 — 네 평정만 적는다.
```

각 슬롯의 `verify-numeric.json`이 수치부다. 네 평정은 `evidenceSemantic`에만 적는다.

## 축 3 — 식별력 (생성 image.jpg와 원본 천장 자극을 같은 형식으로)

```
이 이미지가 어느 브랜드의 것인지 하나만 답한다. 모르겠으면 "모름"이라고 답한다.
브랜드명·로고·워드마크·고유 카피가 보이면 그것을 근거로 적는다.

추측을 억제하지 말고, 근거 없는 확신도 표시하지 마라. 확신도를 0–100으로 함께 적는다.
```

## 축 4 — 디자인 시스템 문서의 내용 (transcript.txt만)

```
중립 전사본만 본다. 파일명, 절 번호, frontmatter, 결정 ID, 형식 준수는 보지 않는다.
형식 표지가 남아 있으면 그것을 근거로 쓰지 말고 별도로 신고한다.

다섯 항목을 각각 0–4로 평정한다.

1. 스냅샷 또는 pack이 밝힌 방법에서 읽히는 입력이 화면 결정으로 이어지는가
2. 색·타입·공간·형태 선택의 일관성과 실제 구현 대응
3. 상호작용 상태·반응형·접근성 결정의 충분성
4. 가정·추론·한계·희생을 구현자가 구분하고 그 영향을 설명하는가
5. 다른 구현자가 화면을 재현·변경할 수 있는 운영 가능성

공통 앵커:
0 = 해당 항목에 사용할 내용 없음 또는 구현과 정면 모순
1 = 단편
2 = 핵심 일부
3 = 대부분 구체적
4 = 구체적이고 구현과 모순 없음

항목 1은 스냅샷 관찰뿐 아니라 pack이 문서에서 밝힌 자기 방법·입력에서 결정으로
이어지는 연결도 동일하게 인정한다.
항목 4는 추론이라고 명시했다는 이유로 0점을 주지 않는다.
값이나 설명을 생략한 사실 자체에는 점수를 주지 않는다.
기본값을 쓴 완전한 문서도 일관성·구현 대응·운영 가능성으로 점수를 받을 수 있다.
빈 문서는 각 항목에 사용할 내용이 없어 0점이다.
```

## 사후 arm 추측 (행마다 마지막에 한 번)

```
채점을 모두 끝낸 뒤에 한 번만 답한다. 이 답은 점수에 영향을 주지 않는다.

이 레인의 익명 산출물 1회분에 대해, 각 자리가 어느 도구의 것인지 추측한다.
모르겠으면 "모름"이라고 답한다. 무엇을 보고 그렇게 생각했는지 한 줄로 적는다.

형식 단서(파일명 흔적, 절 구조, 고정 문구)를 봤다면 그 단서를 그대로 인용한다.
```

## 응답 스키마

```json
{
  "axis": "defects | evidence | identification | document",
  "lane": "A | B",
  "brand": "<id>",
  "rep": 1,
  "slot": "A | B | C",
  "defects": [{"viewport": "desktop-1440", "regionId": "K2", "code": "CLIP", "symptom": "…", "severity": "P0|P1|P2"}],
  "evidenceSemantic": {"rating": 0, "why": "…"},
  "identification": {"brand": "<id> | 모름", "confidence": 0, "why": "…"},
  "document": {"items": [{"n": 1, "rating": 0, "why": "…"}], "formatMarkerSeen": null},
  "postHocGuess": {"slots": {"A": "omd|hallmark|uiuxpromax|모름"}, "why": "…"}
}
```

### viewport 표기 — 파일럿 교정 (2026-08-26)

합치 규칙에 따라 **두 viewport의 제보를 하나로 합친 결함**은 `viewport`를 **배열**로 쓴다:

```json
{"viewport": ["desktop-1440", "mobile-390"], "regionId": "K2", "code": "CLIP", "…": "…"}
```

한 viewport에서만 보인 결함은 문자열 그대로 둔다(`"viewport": "desktop-1440"`).

이유: 파일럿에서 세 평가자가 합치 규칙 자체는 **똑같이** 적용했는데(K2 CLIP을 두
viewport에 걸쳐 하나로 합침) 표기는 셋 다 달랐다 — `"desktop-1440"`(하나만 고르고
symptom에 서술) · `"desktop-1440,mobile-390"` · `"desktop-1440, mobile-390"`. 봉인 스키마가
합쳐진 경우의 표기를 정하지 않아서다. 집계기가 세 형태를 파싱할 수 없으므로 배열로 고정한다.

**이것은 채점 기준 변경이 아니다.** 합치 규칙·앵커·severity 판정은 그대로이고 직렬화
형태만 정한다. 파일럿 교정이 존재하는 이유가 이런 자리다.

## 브랜드 apple

잠금표 (RUBRIC §4.1, 동결):

**apple** · `apple.com/kr` · 홈
- 핵심 과업: 첫 화면에서 특정 제품 한 종의 소개 경로로 이동한다.
- `K1` 글로벌 내비 (0, 0, 1, 0.06) — 제품 카테고리 링크와 검색
- `K2` 제품명 + 한 줄 소개 (0.25, 0.10, 0.50, 0.12)
- `K3` CTA 2개 (더 알아보기 / 구매) (0.32, 0.22, 0.36, 0.06)
- `H1` 제품 라인업 사진 (0.15, 0.30, 0.70, 0.62) — 역할: 한 제품군의 구성과 색상 선택지를 한 장으로 보여준다.
- 폴드 아래 허용: 추가 제품 타일

스냅샷(축 2 대조 기준): `rows/_snapshot-apple/desktop-1440-viewport.png` · `rows/_snapshot-apple/mobile-390-viewport.png`

축 3 채점하지 않음 — 이 브랜드는 천장 자극이 없다(`N/A-ceiling`, §4.5 재정규화).

### 행 apple · rep 1

- 슬롯 A: `rows/apple-rep1/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/apple-rep1/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/apple-rep1/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 apple · rep 2

- 슬롯 A: `rows/apple-rep2/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/apple-rep2/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/apple-rep2/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 apple · rep 3

- 슬롯 A: `rows/apple-rep3/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/apple-rep3/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/apple-rep3/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 apple · rep 4

- 슬롯 A: `rows/apple-rep4/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/apple-rep4/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/apple-rep4/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

## 브랜드 baemin

잠금표 (RUBRIC §4.1, 동결):

**baemin** · `baemin.com` · 홈
- 핵심 과업: 앱 설치 경로(스토어 배지 또는 QR) 하나를 연다.
- `K1` 상단 유틸 내비 (0, 0, 1, 0.06)
- `K2` 헤드라인 2행 (0.05, 0.15, 0.45, 0.22)
- `K3` 앱 스토어 배지 2종 + QR (0.05, 0.55, 0.30, 0.12)
- `H1` 풀블리드 식사 장면 (0, 0, 1, 1) — 역할: 서비스가 닿는 일상의 한 순간을 화면 전체로 제시한다.
- 폴드 아래 허용: 없음 (문서 높이 = 1화면)

스냅샷(축 2 대조 기준): `rows/_snapshot-baemin/desktop-1440-viewport.png` · `rows/_snapshot-baemin/mobile-390-viewport.png`

축 3 채점하지 않음 — 이 브랜드는 천장 자극이 없다(`N/A-ceiling`, §4.5 재정규화).

### 행 baemin · rep 1

- 슬롯 A: `rows/baemin-rep1/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/baemin-rep1/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/baemin-rep1/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 baemin · rep 2

- 슬롯 A: `rows/baemin-rep2/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/baemin-rep2/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/baemin-rep2/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 baemin · rep 3

- 슬롯 A: `rows/baemin-rep3/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/baemin-rep3/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/baemin-rep3/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 baemin · rep 4

- 슬롯 A: `rows/baemin-rep4/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/baemin-rep4/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/baemin-rep4/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

## 브랜드 coupang

잠금표 (RUBRIC §4.1, 동결):

**coupang** · `coupang.com` · 홈
- 핵심 과업: 검색창에 질의를 입력해 상품 목록으로 이동한다.
- `K1` 검색 바 + 장바구니 (0, 0.03, 1, 0.06)
- `K2` 카테고리 내비 (0, 0.09, 1, 0.05)
- `K3` 기획전 히어로 (0.05, 0.16, 0.62, 0.55)
- `K4` 우측 추천 레일 (0.72, 0.16, 0.26, 0.55)
- `H1` 기획전 상품 사진 (K3 내부) — 역할: 지금 밀고 있는 카테고리와 혜택을 상품 실물로 보여준다.
- 폴드 아래 허용: 추가 기획전 행

스냅샷(축 2 대조 기준): `rows/_snapshot-coupang/desktop-1440-viewport.png` — 이 브랜드의 증거 캡처는 이 서피스뿐이다(없는 서피스는 대조하지 않는다)

축 3 채점하지 않음 — 이 브랜드는 천장 자극이 없다(`N/A-ceiling`, §4.5 재정규화).

### 행 coupang · rep 1

- 슬롯 A: `rows/coupang-rep1/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/coupang-rep1/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/coupang-rep1/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 coupang · rep 2

- 슬롯 A: `rows/coupang-rep2/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/coupang-rep2/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/coupang-rep2/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 coupang · rep 3

- 슬롯 A: `rows/coupang-rep3/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/coupang-rep3/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/coupang-rep3/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 coupang · rep 4

- 슬롯 A: `rows/coupang-rep4/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/coupang-rep4/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/coupang-rep4/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

## 끝

행마다 슬롯 3개 × 축(해당 축만) + postHocGuess 1개. 생략은 미채점이며 0점이 아니다 — 판단 근거가 없으면 생략한다.
`responses.jsonl`을 다 쓴 뒤 마지막 줄에 `SCORING_DONE rows=<n>`.
