# OmD slop pattern catalog

각 rule은 **검출 신호**이지 자동 유죄 판정이 아니다. `D`는 정적 코드나 브라우저로 확인 가능한 deterministic signal, `C`는 제품 문맥이 필요한 contextual signal이다. WARN은 같은 화면에서 관련 rule이 겹치거나 하나의 강한 rule이 실제 위계·신뢰를 해칠 때만 낸다.

## Brief and evidence

| ID | Type | Signal | Context check |
|---|---|---|---|
| `BRIEF-01` | C | 독자·핵심 행동·보존할 동작 없이 스타일만 지정 | 기존 제품 요구가 다른 문서에 있는가 |
| `BRIEF-02` | C | 서로 무관한 브랜드 이름을 근거 없이 섞음 | 어떤 특성을 왜 참고하는지 설명됐는가 |
| `EVIDENCE-01` | D/C | 원문에 없는 수치·고객·효과·기능 추가 | source나 사용자 제공 근거가 있는가 |
| `EVIDENCE-02` | C | 브랜드 token 대신 인접 마케팅 surface나 generic fallback 사용 | DESIGN.md와 canonical evidence가 침묵하는가 |

## Layout and hierarchy

| ID | Type | Signal | Context check |
|---|---|---|---|
| `LAYOUT-01` | D/C | 모든 섹션이 centered heading + short body + CTA | 랜딩의 실제 정보 순서에 맞는가 |
| `LAYOUT-02` | D | 독립 개체가 아닌 설명까지 같은 3열 카드로 반복 | 카드가 실제 entity boundary인가 |
| `LAYOUT-03` | D | 카드 안 카드가 2단계 이상 반복 | 중첩이 interactive grouping에 필요한가 |
| `LAYOUT-04` | D/C | `01/02/03` 표식이 순서나 진행을 전달하지 않음 | 숫자 제거 시 정보 손실이 있는가 |
| `LAYOUT-05` | D/C | 모든 구역의 padding·gap·height가 동일해 위계가 평평함 | 의도된 dense system인가 |
| `LAYOUT-06` | D | 좁은 본문 때문에 hero가 5줄 이상으로 분절 | locale별 line break와 mobile에서 읽히는가 |
| `LAYOUT-07` | D/C | 실제 중요도와 무관하게 모든 블록이 같은 크기·위치·대비 | 첫 시선과 핵심 행동이 product journey와 일치하는가 |

## Density and responsive composition

| ID | Type | Signal | Context check |
|---|---|---|---|
| `DENSITY-01` | D/C | 설정·표·피드·마케팅 문단에 같은 넓은 padding 적용 | 화면이 읽기·탐색·반복 조작 중 무엇을 위한 것인가 |
| `DENSITY-02` | D | 관련 항목 사이 gap과 섹션 사이 gap의 차이가 거의 없음 | grouping이 정렬·타이포·separator로 드러나는가 |
| `RESPONSIVE-01` | D | desktop grid를 축소만 해 copy·control·locale이 임의 줄바꿈 | viewport별 우선순위와 reading order를 다시 설계했는가 |
| `RESPONSIVE-02` | D/C | mobile에서 desktop 장식은 유지하고 핵심 행동만 below-fold로 밀림 | 장식보다 task completion이 우선되는가 |

## Visual treatment

| ID | Type | Signal | Context check |
|---|---|---|---|
| `VISUAL-01` | D/C | 기능 없는 좌측 accent bar가 callout마다 반복 | 상태·선택·진행을 실제로 표시하는가 |
| `VISUAL-02` | D/C | 모든 제목 위에 같은 rounded icon tile | 아이콘이 빠른 구분이나 행동을 돕는가 |
| `VISUAL-03` | D | 거의 모든 container가 같은 큰 radius | DESIGN.md radius scale과 entity hierarchy가 있는가 |
| `VISUAL-04` | D | 1px border + 넓은 shadow + glow가 같은 surface에 중첩 | elevation 역할과 광원이 정의됐는가 |
| `VISUAL-05` | D/C | 보라·cyan gradient, mesh, blur orb, gradient text가 의미 없이 겹침 | 브랜드 색·콘텐츠·상태가 요구하는가 |
| `VISUAL-06` | D/C | 장식이 실제 제품 이미지·데이터·콘텐츠를 대신함 | 핵심 정보를 더 빨리 이해하게 하는가 |

## Typography and color

| ID | Type | Signal | Context check |
|---|---|---|---|
| `TYPE-01` | D | H1/H2/body의 크기·weight·line-height 차이가 거의 없음 | dense enterprise UI처럼 의도된 scale인가 |
| `TYPE-02` | D/C | eyebrow/kicker가 모든 섹션에 반복되어 본문보다 먼저 보임 | 탐색·상태에 실제 역할이 있는가 |
| `TYPE-03` | D | 본문 measure·line-height가 locale에 맞지 않아 과도한 줄바꿈 | KO/JA/ZH에서 실제 viewport를 확인했는가 |
| `COLOR-01` | D/C | 색이 의미나 브랜드 역할 없이 시각 분산만 만듦 | token role과 state mapping이 있는가 |
| `COLOR-02` | D/C | accent·status·selection이 같은 색 처리로 구분되지 않음 | 색 외의 label·shape·position도 상태를 설명하는가 |

## Components and interaction

| ID | Type | Signal | Context check |
|---|---|---|---|
| `COMP-01` | D | 버튼·badge·card variant가 실제 상태 없이 데모용으로 증식 | 제품 상태와 연결되는가 |
| `COMP-02` | D/C | 같은 CTA가 섹션마다 반복되고 목적지가 불명확 | journey에서 다음 행동이 하나인가 |
| `COMP-03` | D/C | 긴 설정·비교·다단계 작업을 modal에 넣어 scroll과 맥락을 숨김 | 짧고 닫힌 보조 작업인가, 독립 route가 필요한가 |
| `MOTION-01` | D/C | 모든 요소가 stagger/fade/lift/bounce | 피드백·공간 이해·주의 전환을 돕는가 |
| `MOTION-02` | D | layout property animation, infinite loop, reduced-motion 누락 | `omd:feel`/a11y QUALITY finding으로 승격 |
| `MOTION-03` | C | 여러 독립 animation이 동시에 경쟁하고 origin·settled state가 불명확 | 하나의 choreography와 명확한 feedback으로 줄일 수 있는가 |

## Product states and proof

| ID | Type | Signal | Context check |
|---|---|---|---|
| `STATE-01` | D | success/happy path만 있고 empty·loading·error·permission 상태 누락 | 정적 visual study인지 production-ready surface인지 |
| `STATE-02` | D/C | error·empty state가 분위기 문장만 말하고 다음 행동을 주지 않음 | 복구·생성·권한 요청·문의 중 가능한 행동이 무엇인가 |
| `EVIDENCE-03` | C | 장식용 dashboard·수치·logo wall이 실제 product proof를 대신함 | 실물 route·asset·data shape·source로 대체 가능한가 |

## Copy and locale

| ID | Type | Signal | Context check |
|---|---|---|---|
| `COPY-01` | D/C | seamless, 혁신적, 강력한, 赋能 같은 찬사에 근거가 없음 | 근처에 기능·조건·측정이 있는가 |
| `COPY-02` | D | `not X, but Y`형 대조가 페이지에서 반복 | 한 번의 핵심 positioning 문장인가 |
| `COPY-03` | D/C | 모든 문단이 punchline, 3단 병렬, 수사 질문으로 끝남 | 실제 editorial voice인가 |
| `COPY-04` | D | CTA label과 실제 동작/목적지가 다름 | 브라우저에서 클릭 결과를 확인했는가 |
| `LOCALE-01` | D/C | locale 간 문장 순서와 구조가 완전히 같음 | 사실 parity만 공유하고 독립 편집했는가 |
| `LOCALE-02` | D | zh-TW에 간체·중국 본토 제품 용어, JA/KO에 영어 직역이 잔존 | locale playbook과 기존 제품 용어 확인 |

## General quality — slop과 분리

다음은 패턴 수렴이 아니라 `QUALITY` finding이다.

- WCAG contrast, focus, target, heading/label, keyboard, reduced-motion 위반
- horizontal overflow, clipped locale copy, layout shift
- broken image/placeholder/import, console error, missing state
- interaction과 aria label 불일치
- 실제 route가 아닌 isolated mock만 검증

이 항목의 수치와 severity는 `omd:feel`, 접근성 auditor, 공식 spec을 따른다. slop taxonomy가 새 수치를 만들지 않는다.
