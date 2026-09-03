# 재채점 세션 — 레인 A · 평가자 sonnet5 · 예비 청크(축 1만)

이 디렉터리 안의 파일만 연다. 여기 적히지 않은 경로(레포의 다른 디렉터리·이전 청크 세션 포함)는 열지 않는다.
이 세션은 RUBRIC §4.1 2인 합의 규칙의 **1회 재채점**이다: 아래 칸들의 축 1(첫 렌더 결함)을 처음 보는 것처럼 다시 채점한다.
어느 결함이 재채점 대상인지는 알려주지 않는다 — 두 첫 캡처에서 보이는 결함을 전부, 같은 프롬프트·같은 앵커로 적는다.
결과는 이 디렉터리의 `responses.jsonl`에 한 줄에 JSON 하나 — 행(brand, rep)마다 **적힌 슬롯만** `defects` 축 객체 하나씩.
다른 축·postHocGuess는 내지 않는다. 다 쓰면 마지막 줄에 `SCORING_DONE rows=<n>`을 출력한다.

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

## 응답 스키마 (축 1만)

```json
{
 "brand": "<brand>",
 "rep": 1,
 "slot": "A",
 "axis": "defects",
 "defects": [
  {
   "code": "CLIP",
   "viewport": [
    "desktop-1440"
   ],
   "regionId": "K1",
   "severity": "P0",
   "symptom": "<관찰>"
  }
 ]
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

### 행 apple · rep 1 — 슬롯 B

- 슬롯 B: `rows/apple-rep1/slot-B/` — desktop-1440.png · mobile-390.png

### 행 apple · rep 2 — 슬롯 A

- 슬롯 A: `rows/apple-rep2/slot-A/` — desktop-1440.png · mobile-390.png

### 행 apple · rep 3 — 슬롯 B · C

- 슬롯 B: `rows/apple-rep3/slot-B/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/apple-rep3/slot-C/` — desktop-1440.png · mobile-390.png

### 행 apple · rep 4 — 슬롯 A

- 슬롯 A: `rows/apple-rep4/slot-A/` — desktop-1440.png · mobile-390.png

## 브랜드 baemin

잠금표 (RUBRIC §4.1, 동결):

**baemin** · `baemin.com` · 홈
- 핵심 과업: 앱 설치 경로(스토어 배지 또는 QR) 하나를 연다.
- `K1` 상단 유틸 내비 (0, 0, 1, 0.06)
- `K2` 헤드라인 2행 (0.05, 0.15, 0.45, 0.22)
- `K3` 앱 스토어 배지 2종 + QR (0.05, 0.55, 0.30, 0.12)
- `H1` 풀블리드 식사 장면 (0, 0, 1, 1) — 역할: 서비스가 닿는 일상의 한 순간을 화면 전체로 제시한다.
- 폴드 아래 허용: 없음 (문서 높이 = 1화면)

### 행 baemin · rep 1 — 슬롯 A · B · C

- 슬롯 A: `rows/baemin-rep1/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 B: `rows/baemin-rep1/slot-B/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/baemin-rep1/slot-C/` — desktop-1440.png · mobile-390.png

### 행 baemin · rep 4 — 슬롯 B

- 슬롯 B: `rows/baemin-rep4/slot-B/` — desktop-1440.png · mobile-390.png

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

### 행 coupang · rep 1 — 슬롯 A

- 슬롯 A: `rows/coupang-rep1/slot-A/` — desktop-1440.png · mobile-390.png

### 행 coupang · rep 2 — 슬롯 C

- 슬롯 C: `rows/coupang-rep2/slot-C/` — desktop-1440.png · mobile-390.png

### 행 coupang · rep 3 — 슬롯 A · B · C

- 슬롯 A: `rows/coupang-rep3/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 B: `rows/coupang-rep3/slot-B/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/coupang-rep3/slot-C/` — desktop-1440.png · mobile-390.png

### 행 coupang · rep 4 — 슬롯 A · B

- 슬롯 A: `rows/coupang-rep4/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 B: `rows/coupang-rep4/slot-B/` — desktop-1440.png · mobile-390.png

## 브랜드 figma

잠금표 (RUBRIC §4.1, 동결):

**figma** · `figma.com` · 홈
- 핵심 과업: 무료 시작 CTA를 눌러 가입 흐름에 진입한다.
- `K1` 제품 내비 (0, 0, 1, 0.06)
- `K2` 헤드라인 (0.03, 0.35, 0.35, 0.18)
- `K3` 주 CTA (0.26, 0.55, 0.10, 0.07)
- `H1` 제품 UI 목업 (0.10, 0.12, 0.55, 0.45) — 역할: 실제 캔버스 위에서 협업이 일어나는 장면을 보여준다.
- 폴드 아래 허용: 고객 로고 행, 기능 섹션

### 행 figma · rep 1 — 슬롯 A · B · C

- 슬롯 A: `rows/figma-rep1/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 B: `rows/figma-rep1/slot-B/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/figma-rep1/slot-C/` — desktop-1440.png · mobile-390.png

### 행 figma · rep 2 — 슬롯 B

- 슬롯 B: `rows/figma-rep2/slot-B/` — desktop-1440.png · mobile-390.png

### 행 figma · rep 3 — 슬롯 C

- 슬롯 C: `rows/figma-rep3/slot-C/` — desktop-1440.png · mobile-390.png

### 행 figma · rep 4 — 슬롯 A · C

- 슬롯 A: `rows/figma-rep4/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/figma-rep4/slot-C/` — desktop-1440.png · mobile-390.png

## 브랜드 karrot

잠금표 (RUBRIC §4.1, 동결):

**karrot** · `daangn.com/kr/buy-sell/s/?search=…` · 검색 결과
- 핵심 과업: 결과에서 매물 카드 하나를 열어 상세로 이동한다.
- `K1` 검색 바 + 카테고리 (0, 0, 1, 0.10)
- `K2` 필터 사이드 (0, 0.15, 0.20, 0.60)
- `K3` 결과 그리드 — 카드마다 사진·제목·가격 (0.22, 0.15, 0.78, 0.60)
- `H1` 첫 매물 카드 사진 — 역할: 개인이 찍은 실제 물건 상태를 보여준다. 스튜디오 컷이 아니다.
- 폴드 아래 허용: 추가 결과 행

### 행 karrot · rep 2 — 슬롯 B

- 슬롯 B: `rows/karrot-rep2/slot-B/` — desktop-1440.png · mobile-390.png

### 행 karrot · rep 4 — 슬롯 B · C

- 슬롯 B: `rows/karrot-rep4/slot-B/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/karrot-rep4/slot-C/` — desktop-1440.png · mobile-390.png

## 브랜드 musinsa

잠금표 (RUBRIC §4.1, 동결):

**musinsa** · `musinsa.com/category/001` · 상의 카테고리
- 핵심 과업: 필터를 하나 적용해 상품 그리드를 좁힌다.
- `K1` 브랜드 내비 (0, 0, 1, 0.05)
- `K2` 필터 행 묶음 (0, 0.10, 1, 0.30)
- `K3` 상품 그리드 (0, 0.45, 1, 0.55)
- `H1` 첫 상품 카드 이미지 — 역할: 착장 컷으로 실루엣과 스타일링을 전달한다.
- 폴드 아래 허용: 추가 상품 행

### 행 musinsa · rep 1 — 슬롯 A · B

- 슬롯 A: `rows/musinsa-rep1/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 B: `rows/musinsa-rep1/slot-B/` — desktop-1440.png · mobile-390.png

### 행 musinsa · rep 2 — 슬롯 A · B

- 슬롯 A: `rows/musinsa-rep2/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 B: `rows/musinsa-rep2/slot-B/` — desktop-1440.png · mobile-390.png

### 행 musinsa · rep 3 — 슬롯 C

- 슬롯 C: `rows/musinsa-rep3/slot-C/` — desktop-1440.png · mobile-390.png

### 행 musinsa · rep 4 — 슬롯 A · C

- 슬롯 A: `rows/musinsa-rep4/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/musinsa-rep4/slot-C/` — desktop-1440.png · mobile-390.png

## 브랜드 naver

잠금표 (RUBRIC §4.1, 동결):

**naver** · `naver.com` · 홈
- 핵심 과업: 검색어를 입력해 검색 결과로 이동한다.
- `K1` 검색 바 (0.15, 0.05, 0.55, 0.07)
- `K2` 서비스 아이콘 그리드 (0.15, 0.14, 0.55, 0.10)
- `K3` 로그인 박스 (0.72, 0.12, 0.22, 0.15)
- `K4` 뉴스·콘텐츠 영역 (0.15, 0.28, 0.55, 0.40)
- `H1` **없음.** 두 첫 캡처 모두 대표 이미지가 없다. 인용을 서피스별로 나눈다:
  `desktop-1440`은 크기 하한을 넘는 미디어가 0장이고(미디어 71개 중 0), `mobile-390`은
  문서 전체에서 10장이 나오지만 **전부 `docY ≥ 1512`로 폴드 아래**다(첫 캡처 390×844).
  즉 문서 표본 수는 첫 렌더의 답이 아니다. 대표 이미지 부재가 두 첫 캡처의 사실이므로,
  `H1` 관련 결함은 이 브랜드에 적용하지 않는다.
  정본 판정: `docs/reviews/rubric-2026-08-23-capture-conflicts.md` C-NAVER-H1 REVISE.
- 폴드 아래 허용: 추가 콘텐츠 행

### 행 naver · rep 1 — 슬롯 B · C

- 슬롯 B: `rows/naver-rep1/slot-B/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/naver-rep1/slot-C/` — desktop-1440.png · mobile-390.png

### 행 naver · rep 2 — 슬롯 B · C

- 슬롯 B: `rows/naver-rep2/slot-B/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/naver-rep2/slot-C/` — desktop-1440.png · mobile-390.png

### 행 naver · rep 3 — 슬롯 A · B · C

- 슬롯 A: `rows/naver-rep3/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 B: `rows/naver-rep3/slot-B/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/naver-rep3/slot-C/` — desktop-1440.png · mobile-390.png

### 행 naver · rep 4 — 슬롯 A · B · C

- 슬롯 A: `rows/naver-rep4/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 B: `rows/naver-rep4/slot-B/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/naver-rep4/slot-C/` — desktop-1440.png · mobile-390.png

## 브랜드 toss

잠금표 (RUBRIC §4.1, 동결):

**toss** · `toss.im` · 홈
- 핵심 과업: 상단 내비에서 서비스 하나를 선택해 이동한다.
- `K1` 상단 내비 + 로케일 토글 (0, 0, 1, 0.07)
- `K2` 히어로 영상 (0, 0.07, 1, 0.93)
- `H1` = `K2` — 역할: 서비스를 쓰는 사람의 표정으로 신뢰와 일상성을 전달한다.
  이 브랜드의 대표 매체는 정지 이미지가 아니라 영상이다 (`toss/evidence.json` video:1 canvas:1).
- 폴드 아래 허용: 헤드라인, 서비스 목록

### 행 toss · rep 2 — 슬롯 C

- 슬롯 C: `rows/toss-rep2/slot-C/` — desktop-1440.png · mobile-390.png

### 행 toss · rep 3 — 슬롯 C

- 슬롯 C: `rows/toss-rep3/slot-C/` — desktop-1440.png · mobile-390.png

### 행 toss · rep 4 — 슬롯 C

- 슬롯 C: `rows/toss-rep4/slot-C/` — desktop-1440.png · mobile-390.png

## 브랜드 wanted

잠금표 (RUBRIC §4.1, 동결):

**wanted** · `wanted.co.kr/wdlist` · 채용 목록
- 핵심 과업: 필터를 적용해 채용 카드 하나를 연다.
- `K1` 상단 내비 (0, 0, 1, 0.06)
- `K2` 필터 바 (0, 0.08, 1, 0.16)
- `K3` 채용 카드 그리드 (0, 0.28, 1, 0.72)
- `H1` 첫 채용 카드 이미지 — 역할: 회사의 분위기를 한 장으로 전달한다. 로고가 아니라 장면이다.
- 폴드 아래 허용: 추가 카드 행

### 행 wanted · rep 4 — 슬롯 A · C

- 슬롯 A: `rows/wanted-rep4/slot-A/` — desktop-1440.png · mobile-390.png
- 슬롯 C: `rows/wanted-rep4/slot-C/` — desktop-1440.png · mobile-390.png

## 끝

적힌 행·슬롯마다 `defects` 객체 1개. 결함이 없으면 빈 배열로 낸다(생략 아님 — 재채점에서는 「없음」도 답이다).
`responses.jsonl`을 다 쓴 뒤 마지막 줄에 `SCORING_DONE rows=<n>`.
