# Numbered slop gates (lossless port + OmD additions)

Yes/no questions. Any "yes" = do not ship; fix first. Adapted from the
measured Hallmark gate set (variety/catalog-rotation gates replaced by
system-fidelity gates). Sweep EVERY gate in the pre-finish critique and list
hits by number in critique.md. Summarizing this list loses gates — read it
in full every time.

기계 확인 가능한 게이트는 눈이 아니라 grep으로 검증하라 — 최소:
`transition: all`(G10), `opacity` 만의 :disabled(G39), 토큰 밖 inline
hex(G48), `<select`(G28), `border-width` 상태 변경(G39), `100vh` 히어로
(G6). grep 결과를 critique.md에 명중/무해 판정과 함께 남긴다. "소스에서
보이는 위반 없음"은 이 grep 로그 없이는 쓸 수 없다.

## Visual
- G1 디스플레이 폰트가 Inter/Roboto/Open Sans/Poppins/Lato/시스템 기본(라틴),
  또는 한글에 세리프 폴백이 발생
- G2 퍼플→블루/시안→마젠타 그라데이션, `background-clip:text` 그라데이션 헤드라인
- G3 3열 동일 카드 + 아이콘-위-헤드라인 타일
- G4 카드 안의 카드
- G5 카드/패널 한쪽의 두꺼운 컬러 사이드 스트라이프(좌측 보더 강조 포함)
- G6 `min-height:100vh` 전체 센터 스택 히어로
- G7 순수 `#000`/`#fff` 베이스
- G8 장식용 스쿼글/물결/붓터치 언더라인 등 의미 없는 장식 마크가 상태 표시를
  대체 (활성 표시는 시스템의 정식 마크: 직선 룰, 배경 전환, 웨이트)

## Micro-interaction
- G10 `transition: all`
- G11 무관한 여러 요소에 동일 hover-scale
- G12 UI 상태에 bounce/overshoot easing
- G13 한 요소에 hover 효과 3개 이상 중첩
- G14 layout 속성(width/height/top/margin) 애니메이션
- G15 포커스 링 fade-in (즉시여야 함)
- G16 결과가 이미 보이는 행동에 축하 토스트
- G17 자동 회전 콘텐츠에 pause 없음
- G18 Jane Doe/Acme류 플레이스홀더 이름
- G19 :focus 스타일이 마우스 클릭에도 노출 — 포커스 링은 `:focus-visible`
  전용, 마우스 상호작용에는 절대 나타나지 않는다. 라우트 전환 접근성
  포커스(tabindex=-1 헤딩/메인에 .focus())는 유지하되 그 요소의 시각
  링은 반드시 억제한다(`#page-title:focus { outline: none }`) — 직접
  진입/새로고침에서 제목에 박스가 그려지면 실패

## Implementation
- G22 무채 뉴트럴(틴트 없는 회색 스케일)
- G23 악센트가 뷰포트 ~5% 초과
- G24 이름 있는 스케일 밖 패딩/갭 (17px류)
- G25 prose measure 45–75ch 밖
- G26 인터랙티브 요소에 :focus-visible/:active/:disabled 누락
- G27 모션에 prefers-reduced-motion 폴백 없음
- G28 네이티브 셀렉트 팝업/네이티브 폼 컨트롤 노출 — 셀렉트는 커스텀
  리스트박스(APG combobox 패턴: 트리거 버튼 + role="listbox" 팝오버 +
  키보드 탐색 + aria-activedescendant)로, 라디오/체크박스는 토큰 스타일로
- G30 아이콘 라이브러리 혼용, 이모지 피처 아이콘
- G31 CSS/SVG로 될 자리에 무거운 외부 리소스

## Typography
- G37 font-family 4개 이상
- G38 outlier 페이스 3슬롯 이상
- G38a 헤딩/디스플레이 italic

## Input geometry
- G39 상태 간 border-width 변경 / 포커스를 border로 구현 / 인풋 높이≠버튼
  높이 / helper 슬롯 collapse / disabled를 opacity만으로

## Contrast
- G40 본문 <4.5:1, 큰 텍스트·아이콘·포커스 링 <3:1
- G41 다크/유색 섹션이 텍스트 토큰을 반전하지 않음 — L<50% 표면 위의 모든
  텍스트·보더는 반전 토큰을 명시적으로 사용 (푸터 포함)

## Chrome
- G42 AI 기본 nav (wordmark-left + 인라인 링크 + button-right + hairline)
  을 목적 없이 반복
- G43 AI 기본 4열 푸터
- G44 히어로 폴드 위반 (1280×800에서 필수 콘텐츠 잘림, 하단 패딩 <1.3×상단)
- G45 의미 앵커 없는 장식 요소
- G46 사용자가 주지 않은 수치("10× faster") 
- G47 가짜 브라우저/폰 크롬
- G48 토큰 밖 inline hex/폰트
- G49 320–1920에서 버튼/nav/CTA 텍스트 2줄 랩

## Layout & mobile
- G34 320–1920 가로 스크롤 (`overflow-x: clip`으로만 수정)
- G50 이미지 그리드 트랙 맨 `1fr` (minmax(0,1fr) 필수)
- G51 디스플레이 헤더에 overflow-wrap/min-width 미설정
- G55 올캡스 디스플레이 + line-height <1.0
- G56 sticky 충돌 (이중 sticky offset 미처리)

## OmD system-fidelity (variety 게이트 대체)
- GS1 페이지의 어떤 값이든 잠긴 토큰으로 추적 불가
- GS2 같은 제품의 두 페이지가 다른 시스템처럼 보임 (h1/nav/CTA computed 불일치)
- GS3 개발자용 상태 스위처가 제품 UI에 존재 (P0-1)
- GS4 화면에 구현 어휘(파일명·필드명·프레임워크 용어) 노출
- GS5 레이아웃 문법 미선언 — 각 페이지는 문법(격자/벤토/캐러셀/마스터-디테일/
  매거진/내러티브)을 시스템 문서에 선언하고 그 구성 수치를 따라야 하며,
  와이드 뷰포트에서 정당화되지 않은 빈 공간(뷰포트 40% 이상 무콘텐츠)이
  남으면 실패 — 콘텐츠가 부족하면 데이터를 더 요청/생성해 채운다
- GS6 콘텐츠 수 역산 위반 — 캐러셀<4, 벤토<5, 매거진 이미지<4 인데 해당
  문법을 선택
- GS7 근거 없는 미시 결정 — 토큰/컴포넌트 값에 결정 표의 D-참조가 없거나,
  선언된 원칙이 어떤 토큰도 바꾸지 않음(장식 철학)
- GS8 프리셋 무시 — `references/presets/` 카탈로그에 부합 프리셋이 있는
  컴포넌트/레이아웃을 0에서 즉흥 제작(명세에 프리셋 ID도 "no-preset"
  기록도 없음)
