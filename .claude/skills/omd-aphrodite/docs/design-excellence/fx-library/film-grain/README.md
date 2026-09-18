# film-grain — 표면에 물성을 주는 노이즈 한 겹

| | |
|---|---|
| 계열 | 재질 |
| CSS-only | 예 (JS 0줄, 외부 이미지 0) |
| 인라인 크기 | 약 16줄 / 1.0KB (데이터 URI 포함) |
| 다크/라이트 | 둘 다 — **blend 를 바꿔야 한다.** 다크 `overlay`, 라이트 `multiply` + opacity 소폭 하향 |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT |
| 난이도 | 하 |

## 무엇인가
SVG `feTurbulence`(fractalNoise)로 만든 회색 노이즈 타일을 데이터 URI 로 인라인해 위에 덮는다.
해상도 독립적이고 네트워크 요청이 0이다.

## 왜 필요한가
8비트 그라디언트는 넓은 면적에서 반드시 밴딩(띠)이 생긴다. 그레인은 그 밴딩을 디더링해 없앤다.
부수 효과로 "완벽하게 매끄러운 = 합성처럼 보이는" 표면에 물성이 붙는다.
이것이 2020년대 고급 랜딩에서 그레인이 사실상 기본값이 된 이유다.

## 언제 쓰나
- 큰 그라디언트/메시 배경 위 (거의 필수)
- 히어로 사진 위에 얹어 톤을 통일할 때
- 브랜드 톤이 아날로그/편집/문화 쪽일 때 평평한 면에도 (.08~.10)

## 금기
- **opacity 0.12 초과 금지.** 넘어가면 텍스트 대비가 깨지고 "지직거리는 화면"이 된다.
  본문 텍스트가 있는 영역은 .06 이하로.
- 살아있는 그레인(`--alive`)을 **페이지 전체**에 걸지 않는다. 배터리와 눈 둘 다 상한다. 히어로 한 곳.
- 라이트 모드에서 `overlay` 그대로 두면 회색 먼지가 낀 것처럼 보인다 → `multiply`.
- 타일 크기를 60px 미만으로 두면 반복 패턴이 눈에 보인다. 128~200px 권장.

## 성능
`feTurbulence` 는 최초 1회 래스터화 후 타일로 반복되므로 정지 상태 비용은 거의 없다.
살아있는 버전은 `background-position` 만 바꾸므로 리페인트가 타일 한 장 크기로 제한된다.
(사전 렌더 PNG 타일 대비 어느 쪽이 프로덕션 표준인지는 단정할 근거를 확인하지 못했다 — 둘 다 통용된다.)

## 파라미터
`--fx-grain-opacity`, `--fx-grain-blend`, `--fx-grain-size`, `--fx-grain-src`(타일 교체), `--fx-grain-dur`

## 출처 / 계보
- `feTurbulence` 원리: https://imagetosvg.com/how-to/svg-feturbulence-filter-primitive (확인)
- CSS 그레이니 배경 접근법: https://ibelick.com/blog/create-grainy-backgrounds-with-css (확인)
- 노이즈 SVG 생성기: https://www.fffuel.co/gggrain/ (확인)
