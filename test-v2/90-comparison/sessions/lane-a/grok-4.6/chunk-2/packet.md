# 채점 세션 — 레인 A · 평가자 grok-4.6 · 청크 2 (figma · karrot · musinsa)

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

## 브랜드 figma

잠금표 (RUBRIC §4.1, 동결):

**figma** · `figma.com` · 홈
- 핵심 과업: 무료 시작 CTA를 눌러 가입 흐름에 진입한다.
- `K1` 제품 내비 (0, 0, 1, 0.06)
- `K2` 헤드라인 (0.03, 0.35, 0.35, 0.18)
- `K3` 주 CTA (0.26, 0.55, 0.10, 0.07)
- `H1` 제품 UI 목업 (0.10, 0.12, 0.55, 0.45) — 역할: 실제 캔버스 위에서 협업이 일어나는 장면을 보여준다.
- 폴드 아래 허용: 고객 로고 행, 기능 섹션

스냅샷(축 2 대조 기준): `rows/_snapshot-figma/desktop-1440-viewport.png` · `rows/_snapshot-figma/mobile-390-viewport.png`

축 3 채점함 — 원본 천장 자극 4장: `rows/_ceiling-figma/d1.png` · `rows/_ceiling-figma/d5.png` · `rows/_ceiling-figma/d8.png` · `rows/_ceiling-figma/d9.png`.
생성 image.jpg와 천장 자극 각각에 축 3 프롬프트를 같은 형식으로 적용한다(천장 자극의 답은 `identification`에 `stimulus: "<파일명>"`을 덧붙인다).

### 행 figma · rep 1

- 슬롯 A: `rows/figma-rep1/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/figma-rep1/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/figma-rep1/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 figma · rep 2

- 슬롯 A: `rows/figma-rep2/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/figma-rep2/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/figma-rep2/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 figma · rep 3

- 슬롯 A: `rows/figma-rep3/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/figma-rep3/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/figma-rep3/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 figma · rep 4

- 슬롯 A: `rows/figma-rep4/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/figma-rep4/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/figma-rep4/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

## 브랜드 karrot

잠금표 (RUBRIC §4.1, 동결):

**karrot** · `daangn.com/kr/buy-sell/s/?search=…` · 검색 결과
- 핵심 과업: 결과에서 매물 카드 하나를 열어 상세로 이동한다.
- `K1` 검색 바 + 카테고리 (0, 0, 1, 0.10)
- `K2` 필터 사이드 (0, 0.15, 0.20, 0.60)
- `K3` 결과 그리드 — 카드마다 사진·제목·가격 (0.22, 0.15, 0.78, 0.60)
- `H1` 첫 매물 카드 사진 — 역할: 개인이 찍은 실제 물건 상태를 보여준다. 스튜디오 컷이 아니다.
- 폴드 아래 허용: 추가 결과 행

스냅샷(축 2 대조 기준): `rows/_snapshot-karrot/desktop-1440-viewport.png` · `rows/_snapshot-karrot/mobile-390-viewport.png`

축 3 채점함 — 원본 천장 자극 4장: `rows/_ceiling-karrot/d1.png` · `rows/_ceiling-karrot/d2.png` · `rows/_ceiling-karrot/d3.png` · `rows/_ceiling-karrot/d4.png`.
생성 image.jpg와 천장 자극 각각에 축 3 프롬프트를 같은 형식으로 적용한다(천장 자극의 답은 `identification`에 `stimulus: "<파일명>"`을 덧붙인다).

### 행 karrot · rep 1

- 슬롯 A: `rows/karrot-rep1/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/karrot-rep1/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/karrot-rep1/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 karrot · rep 2

- 슬롯 A: `rows/karrot-rep2/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/karrot-rep2/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/karrot-rep2/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 karrot · rep 3

- 슬롯 A: `rows/karrot-rep3/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/karrot-rep3/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/karrot-rep3/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 karrot · rep 4

- 슬롯 A: `rows/karrot-rep4/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/karrot-rep4/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/karrot-rep4/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

## 브랜드 musinsa

잠금표 (RUBRIC §4.1, 동결):

**musinsa** · `musinsa.com/category/001` · 상의 카테고리
- 핵심 과업: 필터를 하나 적용해 상품 그리드를 좁힌다.
- `K1` 브랜드 내비 (0, 0, 1, 0.05)
- `K2` 필터 행 묶음 (0, 0.10, 1, 0.30)
- `K3` 상품 그리드 (0, 0.45, 1, 0.55)
- `H1` 첫 상품 카드 이미지 — 역할: 착장 컷으로 실루엣과 스타일링을 전달한다.
- 폴드 아래 허용: 추가 상품 행

스냅샷(축 2 대조 기준): `rows/_snapshot-musinsa/desktop-1440-viewport.png` · `rows/_snapshot-musinsa/mobile-390-viewport.png`

축 3 채점함 — 원본 천장 자극 4장: `rows/_ceiling-musinsa/d1.png` · `rows/_ceiling-musinsa/d2.png` · `rows/_ceiling-musinsa/d3.png` · `rows/_ceiling-musinsa/d4.png`.
생성 image.jpg와 천장 자극 각각에 축 3 프롬프트를 같은 형식으로 적용한다(천장 자극의 답은 `identification`에 `stimulus: "<파일명>"`을 덧붙인다).

### 행 musinsa · rep 1

- 슬롯 A: `rows/musinsa-rep1/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/musinsa-rep1/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/musinsa-rep1/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 musinsa · rep 2

- 슬롯 A: `rows/musinsa-rep2/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/musinsa-rep2/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/musinsa-rep2/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 musinsa · rep 3

- 슬롯 A: `rows/musinsa-rep3/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/musinsa-rep3/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/musinsa-rep3/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

### 행 musinsa · rep 4

- 슬롯 A: `rows/musinsa-rep4/slot-A/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 B: `rows/musinsa-rep4/slot-B/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json
- 슬롯 C: `rows/musinsa-rep4/slot-C/` — desktop-1440.png · mobile-390.png · image.jpg · transcript.txt · verify-numeric.json

## 끝

행마다 슬롯 3개 × 축(해당 축만) + postHocGuess 1개. 생략은 미채점이며 0점이 아니다 — 판단 근거가 없으면 생략한다.
`responses.jsonl`을 다 쓴 뒤 마지막 줄에 `SCORING_DONE rows=<n>`.
