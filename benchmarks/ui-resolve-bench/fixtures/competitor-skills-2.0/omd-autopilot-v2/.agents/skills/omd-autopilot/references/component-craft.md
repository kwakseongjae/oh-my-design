# Component craft — 45 production norms (research-verified)

Distilled from primary-source research (HIG, Material 3, Carbon, Polaris,
Geist, Radix/shadcn, ARIA APG, WCAG 2.2; independently re-verified). Each is
a norm + a reproducible check. These are what separate production components
from AI-generated ones. Sweep during component-spec authoring AND in the
pre-finish critique.

## Buttons (C1–C10)
- C1 커스텀 버튼은 default/hover/pressed/focus/disabled/(비동기면)loading을
  시각적으로 전부 구분한다 — 각 상태 스크린샷이 서로 달라야 함.
- C2 히트 영역은 시각 크기와 별개로 ≥44×44 CSS px (아이콘 버튼 포함).
- C3 한 뷰에 primary 1개; destructive에 accent fill 금지.
- C4 로딩 중 더블 서브밋 불가; 포커스 유지형/disable형 중 하나로 시스템 전체 일관.
- C5 라벨은 동사형, 좁은 폭에서 잘리지 않음(ellipsis 규칙 명시).
- C6 아이콘-텍스트 갭은 시스템 값(8px급) 고정, 광학 중심 정렬.
- C7 풀폭 pill 버튼을 화면 가장자리에 붙이지 않음(콘텐츠 웰 안).
- C8 포커스 링은 :focus-visible 전용, 두께·대비 ≥3:1, 즉시 표시.
- C9 밀도 변형은 인풋 높이와 페어(32/40/48 등 공유 스케일).
- C10 iOS급 연속 곡률 흉내로 글리프를 깨뜨리지 않음.

## Inputs (C11–C16)
- C11 enabled/hover/focus/error/disabled/read-only 구분 — read-only는
  포커스·복사 가능, disabled는 포커스 불가.
- C12 라벨을 placeholder로 대체하지 않음(입력 후에도 보이는 label).
- C13 검증은 blur 기본(키 입력마다 에러 금지).
- C14 포커스 시 보더/링이 기본보다 두꺼워짐(1→2px급).
- C15 leading 아이콘=목적, trailing=클리어/부가; 아이콘 히트 ≥44.
- C16 에러는 색+supporting text+aria-invalid 3채널.

## Selects (C17–C23) — G28의 세부
- C17 옵션 적고(<~10) 리치 콘텐츠 없으면 네이티브가 정답일 수 있다 —
  단, 네이티브를 쓰면 트리거만이라도 토큰 스타일링.
- C18 커스텀 셀렉트는 select-only combobox 키보드 전부: 열기, typeahead,
  Home/End, Escape=값 유지 취소, Enter/Space/Tab만 커밋.
- C19 DOM 포커스는 트리거에 유지, 옵션은 aria-activedescendant; 팝업은
  탭 시퀀스 밖.
- C20 옵션 내부에 링크/버튼 금지.
- C21 긴 리스트는 스크롤 힌트(마지막 옵션 반노출 등).
- C22 폼 제출 시 숨은 native/동등 name-value로 값 전달.
- C23 열린 콤보박스에서 Enter가 바깥 폼을 제출하지 않음.

## Cards (C24–C26)
- C24 카드 변형(elevated/outlined/filled)을 한 페이지에서 의미 없이 섞지
  않고, 스펙에 없는 hover-lift를 넣지 않음.
- C25 전체 클릭 카드와 내부 CTA를 동시에 두지 않음(하나만).
- C26 미디어는 고정 종횡비+본문과 정렬된 패딩; 풀블리드는 명시적 결정.

## Chips (C27–C30)
- C27 칩 역할(필터/입력/제거형/정적 배지)을 한 컴포넌트에 섞지 않음;
  정적 배지에 onClick 금지.
- C28 칩 시각 32px여도 터치 타깃 ≥44~48.
- C29 dismiss는 close 아이콘에 독립 포커스+상태.
- C30 필터 칩이 여러 줄로 폭주하면 드롭다운/시트로 접음.

## Layout (C31–C38)
- C31 본문 measure 상한(라틴 60–80자, CJK ~40자)을 웰로 강제 — 초광폭
  전폭 문단 금지.
- C32 초광폭 그리드 전략 3택1: 중앙 max(에디토리얼)/좌측 max(프로덕트)/
  컬럼 추가(고밀도). 무한 스트레치 금지.
- C33 그리드에서 버튼을 전폭으로 늘리지 않음(max-width).
- C34 캐러셀 ≤5장, 컨트롤은 내부, 자동재생은 일시정지 가능.
- C35 마스터-디테일: compact 1패인, expanded만 동시 2패인.
- C36 벤토 장식 요소 aria-hidden, 읽기 순서=DOM 순서.
- C37 풀블리드는 배경만; 컨트롤·본문은 콘텐츠 웰 안 — 대화/채팅 말풍선도
  콘텐츠다: ~760px 웰 안에서 좌/우 정렬하고 화면 양 끝으로 찢지 않는다.
- C38 스크롤 리빌은 1회 재생, 과업 화면 금지, 본문 반복 금지.

## Dark & contrast (C39–C45)
- C39 다크는 라이트 hex 반전/재사용 금지 — on-surface/on-color/inverse
  쌍 토큰으로만.
- C40 다크 엘리베이션 = 한 단계 밝은 서피스(그림자 아님).
- C41 디바이더는 subtle 토큰, 다크에서 3:1 실측.
- C42 disabled도 다크 배경에 녹아 사라지지 않을 대비를 제품이 정함.
- C43 고대비 모드 켜고 다크 재측정.
- C44 scrim은 어두운 딤(35~60% black)이지 흰 반투명이 아님.
- C45 본문 4.5:1이 최종 게이트(UI 3:1만으로 통과 아님) — 푸터·다크 섹션 포함.
