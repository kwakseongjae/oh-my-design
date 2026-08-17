# 경쟁 스킬 기법 추출 — 시각 품질 메커니즘

대상: `context/hallmark/` · `context/ui-ux-pro-max/`
목적: 문장 복사가 아니라, 우리 스킬(디자인 시스템 우선 하네스)에 규범으로 흡수할 원리만 추출.
방법: 각 축 2–5개 발견. 형식은 `TECH-N: <스킬> <파일:라인> <원리 한 줄> <우리 흡수안 한 줄>`.

---

## 방법론 요약

두 스킬은 시각 품질을 끌어올리는 방식이 정반대에 가깝다.

- **Hallmark**는 생성 전에 구조를 고르고, 생성 후에 58개 게이트로 걸러낸다. 지시의 단위는 *수치 + 금지 + 자가 채점*이다. 모델이 기본값으로 빠지는 자리마다 이름을 붙이고, 그 이름을 게이트 번호로 고정한다.
- **ui-ux-pro-max**는 검색 가능한 데이터베이스(스타일 67 · 팔레트 161 · 페어링 57 · UX 가이드 99)를 먼저 조회하고, 그 결과를 마스터 토큰으로 persist한다. 지시의 단위는 *룩업 + 체크리스트 + 토큰 레이어*이다. 모델에게 "예쁘게"가 아니라 "이 표에서 고르라"고 한다.

우리 하네스가 흡수해야 하는 것은 Hallmark의 **게이트 밀도**와 **수치 규율**, ui-ux-pro-max의 **토큰 계층 + persist**이다. 흡수하면 안 되는 것은 Hallmark의 **페이지마다 시스템을 다시 고르는 다양성 규칙**과, ui-ux-pro-max의 **산업→히어로→3피처→CTA 레시피** 및 **유행 스타일 카탈로그(글래스/오로라/뉴모피즘)**이다.

---

## 1. 타이포 / 여백 / 색을 지시하는 방식

두 스킬 모두 원리만 주지 않는다. Hallmark는 **원리 → 수치 범위 → 토큰 이름 → 금지 목록 → 예시 CSS**를 한 파일에 겹친다. ui-ux-pro-max는 **우선순위 표 + CSV 룩업 + 시맨틱 토큰**으로 같은 일을 한다. 시각 품질을 올리는 핵심은 "취향을 설명"하는 게 아니라 **모델이 고를 수 있는 값을 닫는 것**이다.

### TECH-1: hallmark `references/typography.md:5-11,13-34,171-205`
원리: 타이포는 페어링(디스플레이+본문, 최대 2+1) + 비율 스케일(기본 1.25) + 길이별 히어로 캡(≤20 / 21–50 / 51–90 / >90자) + 가중치 대비 ≥300으로 닫는다. 원리를 말한 뒤 즉시 `:root` 토큰과 금지 폰트 목록을 준다.
흡수안: 우리 시스템에도 `--font-display/--font-body/--font-outlier` 천장과 `clamp()` 히어로 캡, "헤드라인 길이 → 사이즈 버킷" 표를 토큰 스펙에 고정한다. 페어링은 프로젝트 토큰에서 한 번만 고른다.

### TECH-2: hallmark `references/color.md:5-20,73-95`
원리: 색은 OKLCH만, 레이어는 Paper / Ink / Neutrals(5–9단, chroma 0.005–0.015) / Accent 하나. 액센트는 뷰포트의 3%(최대 ~5%)만. `#000/#fff`와 무채 그레이와 퍼플-시안 그라데이션을 수치와 함께 금지한다.
흡수안: 팔레트 생성기를 "앵커 hue 하나 + 틴트된 뉴트럴 + 액센트 면적 예산"으로 규범화한다. 컴포넌트는 hex를 쓰지 않고 `var(--color-*)`만 참조하게 한다.

### TECH-3: hallmark `references/layout-and-space.md:5-30,35-49,72-80,106-114`
원리: 여백은 4pt 9단을 역할 이름(`--space-3xs`…`--space-4xl`)으로 주고, 레이아웃은 "주축을 골라라 / 대칭은 기본값이다 / 그리드를 한 곳에서 깨라 / 같은 24px 반복은 템플릿"처럼 원리+금지+응급처치 5항목을 같이 준다.
흡수안: 스페이싱 토큰을 크기 숫자가 아니라 역할 이름으로 고정하고, 섹션 리듬 검사("모든 gap이 같은 단계면 실패")를 QA 게이트로 넣는다.

### TECH-4: ui-ux-pro-max `ui-ux-pro-max/SKILL.md:47-66,160-176` + `scripts/design_system.py:46-66`
원리: 타이포/색을 6순위로 두고(접근성·터치가 위), 본문 16px / lh 1.5 / 65–75ch / 시맨틱 컬러 토큰처럼 짧은 수치 규칙을 준 다음, `--design-system` 검색이 제품 유형에 맞는 페어링·팔레트·density dial(1–10 → 8–96px 스케일)을 조회하게 한다.
흡수안: "항상 토큰부터" 흐름은 유지하되, 조회 결과를 페이지마다 새로 고르지 말고 기존 디자인 시스템 토큰에 매핑하는 어댑터로만 쓴다.

### TECH-5: ui-ux-pro-max `design-system/references/primitive-tokens.md:5-80` + `design-system/SKILL.md:25-48,237-244`
원리: primitive(raw) → semantic(목적) → component(부품) 3층. 컴포넌트에 raw hex 금지, `var(--button-bg)`처럼 한 단계 더 감싼다.
흡수안: 우리 하네스의 토큰 아키텍처로 채택. 단 primitive 기본값을 Tailwind 블루 스케일(`#2563EB`)로 두지 말고, 프로젝트 브랜드 앵커에서 유도한다.

---

## 2. 컴포넌트 조형 지시

완성도를 강제하는 방식은 세 겹이다. (1) 상태 표가 비어 있으면 미완으로 취급, (2) 아키타입마다 DOM+최소 CSS 스케치를 주고 변형 노브를 고르게 함, (3) 카드/버튼의 "AI 기본 조형"을 이름 붙여 금지.

### TECH-6: hallmark `SKILL.md:74-136` + `references/interaction-and-states.md:5-17,66-109`
원리: 인터랙티브 컴포넌트는 8상태(default/hover/focus-visible/active/disabled/loading/error/success)를 코드로 반드시 구현하고, 미리보기 래퍼에서 8행을 동시에 렌더한다. 인풋은 border-width 고정, outline 슬롯 예약, 높이=인접 버튼, helper `min-height: 1lh`.
흡수안: 시스템 컴포넌트 스펙에 8상태 매트릭스를 필수 칸으로 두고, PR/생성 게이트에서 "default+hover만 있으면 실패"로 처리한다. 인풋/버튼 높이 토큰을 하나로 묶는다.

### TECH-7: hallmark `references/component-cookbook.md:1-16,91-148` + `references/components/c1-outlined-chip.md:1-12` + `references/components/n5-floating-pill.md:1-28`
원리: 컴포넌트를 추상 설명이 아니라 *이름 있는 조형*(C1 outlined chip, N5 floating pill)으로 고르게 한 뒤, 최소 HTML/CSS와 "헷갈리지 말 것", 그리고 tiles/spans/accent 같은 변형 노브를 스탬프에 적게 한다. 피시 모양(콘텐츠 폭 pill) vs 가짜 필(뷰포트 95% 라운드 바)처럼 실패 형태까지 한 줄로 못 박는다.
흡수안: 우리 디자인 시스템 컴포넌트마다 "정본 조형 + 금지 변형 + 노브"를 짧게 고정한다. 페이지마다 아키타입을 로테이트하지는 말고, 시스템 안의 변형 노브만 허용한다.

### TECH-8: hallmark `references/custom-craft.md:1-80` + `references/hero-enrichment.md:7-54`
원리: 히어로/일러스트는 라이브러리 픽이 아니라 핸드빌드가 기본 경로. 티어 0 타이포만 → A CSS art → B SVG → C 생성 → D 라이브러리 → E Lottie(최후). "없으면 타이포", "나쁜 장식보다 없음"이 품질 하한이다.
흡수안: 커스텀 컨트롤·히어로 비주얼에 동일 티어를 적용한다. 시스템 아이콘/일러스트가 없으면 Lucide/Phosphor 한 세트 또는 CSS/SVG로 만들고, unDraw/Lottie/이모지를 기본 경로에서 제거한다.

### TECH-9: ui-ux-pro-max `design-system/references/component-specs.md:5-128` + `ui-ux-pro-max/SKILL.md:582-617`
원리: Button/Input/Card를 variant×size×state 표로 닫고(높이 32/40/48, 패딩, 아이콘 크기), 아이콘은 한 패밀리·한 스트로크·이모지 금지·레이아웃을 흔들지 않는 press 상태로 강제한다.
흡수안: 스펙 표 형식은 채택. 값은 우리 토큰에서 읽고, shadcn 기본 gray/primary 하드코딩은 브랜드 시맨틱으로 치환한다.

---

## 3. 자가 피드백 루프

시각 품질을 올리는 가장 직접적인 장치는 **생성 전 채점 → 생성 후 게이트 → 실패 시 재생성**이다. Hallmark가 이쪽이 압도적으로  denser하다. ui-ux-pro-max는 체크리스트와 persist 검증에 가깝다.

### TECH-10: hallmark `references/slop-test.md:9-25` + `SKILL.md:46,409-441,468-474`
원리: 코드를 내기 전에 Philosophy / Hierarchy / Execution / Specificity / Restraint / Variety를 1–5로 채점하고, 어느 축이든 <3이면 게이트 전에 수정한다. 점수는 `/* Hallmark · pre-emit critique: P5 H4 E5 S4 R5 V5 */`로 스탬프한다. 그 다음 58게이트를 돌리고, Step 5 프리뷰의 `Slop test · N/58` 행에 실제 결과를 적는다. 거짓 프리뷰는 금지.
흡수안: 우리 하네스에 동일한 6축 사전 채점(Variety는 "시스템 일관성"으로 재정의)과, 실패 시 1회 재생성 의무를 넣는다. 산출물 상단에 점수를 남겨 다음 런이 같은 약점을 반복하지 않게 한다.

### TECH-11: hallmark `SKILL.md:405-441` + `references/preview-examples.md` (로드 조건: `SKILL.md:379`)
원리: 코드 500줄 전에 매크로/테마/엔리치먼트/섹션/모션/슬롭/다양성을 5초 스캔 가능한 불릿으로 먼저 보여 사용자가 방향을 꺾게 한다. 게이트 실패 시 프리뷰를 다시 낸다.
흡수안: 빌드 전 "토큰 세트 · 컴포넌트 · 섹션 · 모션 예산 · 게이트 결과" 프리플라이트를 의무화한다. 다만 테마/매크로를 매번 새로 고르지는 말고, 잠긴 시스템을 재진술하는 용도로만 쓴다.

### TECH-12: hallmark `references/verbs/audit.md:1-25`
원리: 별도 `audit` 동사는 편집하지 않고, anti-pattern 이름 + 위치 + critical/major/minor + 한 줄 수정만 돌려준다. `design.md`가 있으면 페이지 단위 테마 표류를 critical로 친다. 스탬프가 실제 DOM과 다르면 `stamp lies`.
흡수안: 생성 루프와 분리된 읽기 전용 QA 패스를 둔다. 기준은 우리 `design.md`/토큰 파일이다. 다양성 미달이 아니라 **시스템 표류**를 critical로 둔다.

### TECH-13: ui-ux-pro-max `ui-ux-pro-max/SKILL.md:569-576,645-684` + `ui-styling/references/canvas-design-system.md:231-247`
원리: 납품 전 체크리스트가 시각(이모지/아이콘/토큰) · 인터랙션(press, 44px, 150–300ms) · 라이트/다크 대비 · 레이아웃(safe area, 4/8dp) · a11y로 나뉜다. 캔버스 쪽은 "90% 시각 / 박물관급 / 겹침 없음"처럼 주관 기준이지만, 실행 전 체크박스로 강제한다.
흡수안: 앱 UI 체크리스트의 CRITICAL 항목(대비, 포커스, 터치, reduced-motion, 토큰 일관성)을 우리 게이트에 편입한다. "박물관급" 같은 주관 문장은 넣지 말고, 검증 가능한 항목만 남긴다.

---

## 4. 금지 목록 (slop gates)

Hallmark의 품질은 허용보다 **금지의 해상도**에서 나온다. 게이트는 yes/no이고, 답이 yes면 출고 불가. 아래는 `references/slop-test.md` 전수 목록이다. 장르 오버라이드는 게이트 옆에 적는다.

### 4.1 Pre-emit 자가 비평 (게이트 이전, 필수)

| 축 | 질문 | 실패 조건 |
|---|---|---|
| A Philosophy | 페이지가 입장을 갖는가 | 레이아웃만 있고 why가 없음 |
| B Hierarchy | 2초 안에 1/2/3순위가 보이는가 | 모든 요소 동일 무게 |
| C Execution | rule/accent/wrap/focus/contrast가 스펙인가 | 뼈대는 맞는데 슬로피 |
| D Specificity | 이 브리프처럼 보이는가 | 아무 제품에나 붙는 페이지 |
| E Restraint | 자리 못 버는 장식을 뺐는가 | 장식·중복·패딩-위한-패딩 |
| F Variety | 이전 산출물과 구조 지문이 다른가 | 컬러스왑만 다름 *(우리 흡수 시 이 축은 재정의 — §6)* |

<3점이면 58게이트에 들어가기 전에 수정. 두 번은 정상, 세 번은 브리프가 틀린 것.

### 4.2 Hallmark 58 게이트 전수

번호는 `slop-test.md` 원문. 38a가 있어 번호는 1–57 + 38a = 58개.

#### Visual (1–7)

| # | 금지 | 장르 메모 |
|---|---|---|
| 1 | 디스플레이 폰트가 Inter / Roboto / Open Sans / Poppins / Lato / 시스템 기본 | 전 장르 |
| 2 | 퍼플→블루·시안→마젠타 그라데이션, 특히 `background-clip: text` 그라데이션 헤드라인 | atmospheric만 배경 radial 허용. 텍스트/필 버튼 그라데이션은 전 장르 금지 |
| 3 | 3열 동일 카드 + 아이콘-위-헤드라인 타일 | 전 장르 |
| 4 | 카드 안의 카드 | 전 장르 |
| 5 | 카드 한쪽 두꺼운 컬러 사이드 스트라이프 | 전 장르 |
| 6 | `min-height: 100vh` + 전부 센터, 또는 eyebrow/title/lede/CTA가 같은 세로축에 센터 스택 | atmospheric/playful은 캔버스가 디자인일 때 센터 히어로 허용. editorial도 센터-내로우는 허용하되 eyebrow 또는 CTA는 오프액시스 |
| 7 | 순수 `#000` / `#fff`를 베이스 컬러로 사용 | modern-minimal은 `#fff` 페이퍼 허용 |

#### Structural (8–9)

| # | 금지 |
|---|---|
| 8 | 제네릭 AI 템플릿(Hero→3 features→CTA→footer) 또는 이전 Hallmark 산출물과 같은 매크로구조 |
| 9 | 섹션이 같은 공백만으로 분리되고 룰/장식/색 전환이 없음 |

#### Microinteractions (10–19)

| # | 금지 |
|---|---|
| 10 | `transition-all` / `transition: all` |
| 11 | `hover:scale-105` 또는 무관한 여러 요소에 동일 hover-scale |
| 12 | UI 상태에 bounce/overshoot easing (`cubic-bezier(0.34, 1.56, …)`) |
| 13 | 한 요소에 hover 효과 2개 이상(translate+scale+shadow+colour+rotate) |
| 14 | `width/height/top/left/margin/padding` 애니메이션 |
| 15 | 포커스 링이 fade-in으로 등장 (즉시여야 함) |
| 16 | 결과가 이미 보이는 행동에 축하 토스트 |
| 17 | 툴팁 hover/focus delay가 같음 (hover 800–1000ms, focus 0ms) |
| 18 | 자동 회전 콘텐츠에 hover/focus pause 없음 (WCAG 2.2.2) |
| 19 | Jane Doe / John Smith, Acme / Nexus / Seamless / Unleash |

#### Variety (20–21)

| # | 금지 |
|---|---|
| 20 | CSS 상단 `/* Hallmark · macrostructure: … */` 스탬프 누락 |
| 21 | 브리프가 editorial/foundry를 명시하지 않았는데 Specimen 매크로로 폴스루 | atmospheric/modern-minimal/playful은 Specimen 기본 금지 |

#### Implementation (22–27)

| # | 금지 | 장르 메모 |
|---|---|---|
| 22 | 뉴트럴 `oklch(... 0 ...)` 무채 | modern-minimal은 제로 크로마 허용 |
| 23 | 액센트가 한 뷰포트의 ~5% 초과 | atmospheric은 틴트 bloom ~20%까지 |
| 24 | named spacing scale 밖 패딩/갭/마진 (예: 17px) |
| 25 | prose `max-width`가 45–75ch 밖 |
| 26 | 인터랙티브 요소에 `:focus-visible` / `:active` / `:disabled` 중 하나라도 없음 (최소 5상태) |
| 27 | 모션에 `prefers-reduced-motion` 폴백 없음 |

#### Hero enrichment (28–31)

| # | 금지 | 장르 메모 |
|---|---|---|
| 28 | 데모 비디오가 소리 있는 autoplay, poster 없음, `fetchpriority="high"` 없음, LCP에 `loading="lazy"` |
| 29 | 추상 배경이 액센트 2색 초과, ~5% 초과, 전체 mesh 애니메이션 | atmospheric은 고정 부착 warm bloom 2개, 20–30%, 애니메이션 없음 |
| 30 | 아이콘 라이브러리 2개 이상 혼용, 또는 ✨🚀⚡🔥🎯✅를 피처 아이콘으로 사용 |
| 31 | CSS/SVG로 될 자리에 Lottie 기본 선택 |

#### Diversification / a11y (32–33)

| # | 금지 |
|---|---|
| 32 | 같은 아키타입인데 변형 노브도 동일 |
| 33 | 장식 SVG/CSS art/canvas에 `aria-label` 또는 `aria-hidden="true"` 없음 |

#### Layout-safety (34–36)

| # | 금지 |
|---|---|
| 34 | 320–1920 사이 가로 스크롤. 수정은 `html, body { overflow-x: clip }` (`hidden` 금지 — sticky 파괴) |
| 35 | 하이라이터 `<mark>`가 베이스라인에 붙음. x-height 밴드(`~38%–92%`)여야 하고 underline은 1–2px + 1–2px offset |
| 36 | nav/툴바/CTA 행이 `align-items: stretch`로 버튼이 텍스트보다 커짐. `align-items: center` + 아이템 `line-height: 1` 필수 |

#### Typography discipline (37–38a)

| # | 금지 |
|---|---|
| 37 | `font-family` 4개 이상 (display+body+outlier 천장) |
| 38 | outlier 얼굴을 3슬롯 이상 |
| 38a | 헤딩/디스플레이 italic. `<em>`이 헤드라인 안에 있어도 실패. italic은 본문만 |

#### Input-state (39) — 다섯 중 하나면 실패

- 상태 간 `border-width` 변경
- 포커스 링을 `border`로 구현 (`outline: 2px solid var(--color-focus)` + 대기 `outline: 2px solid transparent`여야 함)
- 인풋 높이 ≠ 인접 버튼 높이 (38 vs 44가 전형)
- helper 슬롯이 비면 collapse (`min-height: 1lh`)
- disabled를 `opacity`만으로 표시 (opacity + `not-allowed` + native disabled 3채널)

#### Contrast (40–41)

| # | 금지 |
|---|---|
| 40 | 본문 < 4.5:1 / Lc 60, 큰 텍스트·아이콘·포커스 링 < 3:1 / Lc 45. 카드가 배경을 바꿨는데 `color`를 상속하는 케이스 포함 |
| 41 | (a) 버튼 텍스트≈필 (OKLCH L 5% + C 0.05 이내) (b) accent 필에 `--color-accent-ink` 없음 (c) L<50% 섹션이 텍스트 색을 안 뒤집음 |

#### Nav / footer / hero chrome (42–45)

| # | 금지 |
|---|---|
| 42 | AI 기본 nav: wordmark-left + 4–5 인라인 링크 + button-right + 풀폭 + 1px hairline + 흰 배경 (N1a는 목적지 2개일 때만) |
| 43 | AI 기본 footer: Product/Company/Resources/Legal 4열 + 소셜 행 + 작은 copyright + hairline + 회색 배경 (docs 허브만 Ft3) |
| 44 | 히어로 `padding-block-end` < 1.3× start, 또는 1280×800에서 eyebrow+headline+lede+CTA+focal이 폴드 밖 |
| 45 | 의미 앵커 없는 장식(떠다니는 커서, 의미 없는 42, 이유 없는 Pantone 칩) |

#### Honest copy / chrome / tokens / responsive (46–49)

| # | 금지 |
|---|---|
| 46 | 사용자가 안 준 숫자("10× faster", "50,000+ teams"). 스탯만으로 된 히어로 헤드라인 |
| 47 | 가짜 브라우저 바 / 폰 노치 / 코드윈도 점 3개 / 가짜 IDE 크롬 |
| 48 | 토큰 밖 inline hex/oklch/rgb 또는 토큰을 우회한 `font-family` |
| 49 | 320–1920에서 버튼/프라이머리 nav/footer 링크/탭/브레드크럼/CTA가 2줄 랩 |

#### Mobile non-negotiables (50–57)

| # | 금지 |
|---|---|
| 50 | 이미지를 담는 그리드 트랙이 맨 `1fr` (반드시 `minmax(0, 1fr)`) |
| 51 | 디스플레이 헤더에 `overflow-wrap: anywhere; min-width: 0` 없음 |
| 52 | 테마가 `.section__head`를 다열로 오버라이드하고 모바일 1열 collapse가 없음 |
| 53 | radio 탭을 `position: absolute; top: 0`으로 숨겨 클릭 시 스크롤 점프 |
| 54 | 섹션 eyebrow/번호를 헤딩 왼쪽·오른쪽 옆칸에 배치 (태그 위 + 헤딩 아래 세로 스택만 허용). 레퍼런스 패리티로도 우회 불가 |
| 55 | 올캡스 디스플레이 + `line-height < 1.0` (바닥 1.0, 권장 1.02–1.08) |
| 56 | sticky 페이지 nav가 `top: 0`인데 다른 sticky도 `top: 0` (이차 sticky는 `--banner-height`만큼 offset, z는 nav가 위) |
| 57 | `study` DNA가 있는데 사용자가 안 돌렸는데 카탈로그 테마로 되돌림 |

출고 스탬프에 기록: `contrast 40–41` · `nav/footer 42–45` · `honest/chrome/tokens/responsive 46–49` · `mobile 34,49,50–57`.

### 4.3 Hallmark named tells (`anti-patterns.md`) — 게이트와 쌍을 이루는 이름

Critical: purple-gradient hero, Inter-everywhere, 3-column feature grid, card-in-card, gradient headline, side-stripe card, full-viewport centred hero, pure black/white, default-attractor sameness, Specimen fall-through, AI nav, AI footer, aurora-blob, floating-orb, sound-on autoplay, lazy-loaded LCP.

Major: bounce easing, centred everything, italic headers, eyebrow on every section(+ tag-left/header-right 하드밴), shadow-glow on dark, icon-tile feature card, purposeless glassmorphism, hover-only affordance, tabular data without tabular-nums, animate-on-scroll everything, mismatched icon sets, AI-illustration look, invented metrics, generic emoji icon, re-drawn chrome, mid-render token improvisation, two-line clickable text, Lottie shortcut.

### TECH-14: hallmark `references/slop-test.md:1-192` + `references/anti-patterns.md:9-247`
원리: 금지는 취향 문장이 아니라 **번호 있는 yes/no 게이트 + 이름 있는 텔 + 장르 오버라이드 + 스탬프 기록**이다. "예쁘게"가 아니라 "3열 아이콘 카드인가?"처럼 모델이 거짓말할 수 없는 질문을 던진다.
흡수안: 우리 하네스에 동일한 번호 게이트를 이식하되, 8·20·21·32·57(다양성/카탈로그 로테이션)은 빼고, 그 자리에 "잠긴 토큰·컴포넌트·타입 스케일을 벗어났는가"를 넣는다. 1–7, 10–19, 22–31, 33–56, 38a, 46–49는 거의 그대로 규범화할 수 있다.

### TECH-15: ui-ux-pro-max `ui-ux-pro-max/SKILL.md:51-61,123-139,582-603` + `data/styles.csv:1-14`
원리: 금지 목록이 우선순위 표의 Anti-Patterns 열과 "No emoji icons / no hover-only / no raw hex / no mixing flat+skeuomorphic"처럼 짧다. 동시에 `styles.csv`는 Glassmorphism·Aurora·Neumorphism·Claymorphism을 *추천 스타일*로 제공한다 — Hallmark가 바로 그 스타일을 금지한다.
흡수안: ui-ux-pro-max의 a11y/터치/성능 금지는 흡수. 스타일 CSV의 유행 이펙트 카탈로그는 흡수하지 않는다(§6).

---

## 5. 구조 / 레이아웃 패턴

Hallmark는 **페이지 모양을 이름 붙여 먼저 고른다**. ui-ux-pro-max는 **랜딩 레시피를 검색한다**. 전자는 구조적 다양성, 후자는 전환 퍼널. 시각 품질 관점에서 유효한 것은 "히어로를 센터드 문장+필 CTA로 두지 말라"와 "섹션 리듬을 이름 있는 패턴으로 고르라"이다.

### TECH-16: hallmark `SKILL.md:264-294` + `references/macrostructures.md:1-49`
원리: 코드를 쓰기 전에 21개 이름 있는 매크로구조(Bento, Long Document, Marquee Hero, Stat-Led, Workbench, Manifesto, Photographic, Letter …) 중 하나를 고른다. 매크로가 heading 위치·본문 조성·디바이더·버튼 보이스·이미지·리빌을 한꺼번에 결정하므로, 모델이 축을 따로 고르다 기본값으로 수렴하는 것을 막는다.
흡수안: 매크로구조 *카탈로그 로테이션*은 흡수하지 않는다. 대신 우리 시스템이 페이지 타입별로 **허용 매크로 패밀리 1–2개**를 `design.md`에 잠근다(마케팅=Marquee/Stat, 문서=Workbench/Long Document). 생성 시 그 패밀리 안에서만 고른다.

### TECH-17: hallmark `references/structure.md:9-86,118-125` + `SKILL.md:290-293`
원리: 구조 지문을 6축(헤딩 위치 / 본문 조성 / 디바이더 / 버튼 보이스 / 이미지 / 리빌)으로 분해하고, SaaS 히어로·3피처 로우·everything-fades-in·카본카피 푸터를 이름 붙여 거절한다. nav(N1a–N13)와 footer(Ft1–Ft8)를 크롬이 아니라 지문의 일부로 취급한다.
흡수안: 6축은 *감사 어휘*로 흡수한다(페이지가 실수로 기본 지문에 빠졌는지 검사). nav/footer는 시스템에서 정본 1개를 고르고, 페이지마다 로테이트하지 않는다. N1a/Ft3는 "목적지 2개 / 진짜 사이트맵"일 때만 허용하는 예외로 남긴다.

### TECH-18: hallmark `references/hero-enrichment.md:11-36,59-79` + `references/layout-and-space.md:82-114` + `slop-test.md:129-137` (gate 44)
원리: 히어로는 타이포가 기본. 이미지는 브리프가 사진을 요구할 때만, 그리고 플레이스홀더는 플레이스홀더처럼 보이게. 히어로 폴드 규율은 1280×800에서 필수 콘텐츠가 보여야 하고, 하단 패딩이 상단의 1.3배여야 하며, 디스플레이 lh는 1.0–1.1, 리드 ≤2줄.
흡수안: 히어로 폴드 체크와 "타이포 우선, 장식은 자격 증명"을 시스템 규범으로 넣는다. 제품 페이지 히어로는 시스템 히어로 컴포넌트의 슬롯(eyebrow/title/lede/cta/media)만 채운다.

### TECH-19: ui-ux-pro-max `ui-ux-pro-max/data/landing.csv:1-9` + `SKILL.md:141-158`
원리: 랜딩을 패턴 이름 + 섹션 순서 + CTA 위치 + 컬러 전략으로 조회한다. 레이아웃 규칙은 mobile-first, 375/768/1024/1440, 가로 스크롤 금지, 4/8 스페이싱, `min-h-dvh`.
흡수안: 반응형 수치와 "섹션 순서 체크리스트(히어로에 무엇이 있어야 하는가)"는 흡수. `Hero + Features + CTA`를 기본 템플릿으로 쓰는 열은 흡수하지 않는다 — 그게 Hallmark gate 8이 죽이는 지문이다.

### TECH-20: hallmark `references/macrostructures.md:53-77` + `references/copy.md:5-64,68-119`
원리: SaaS일 때만 Hero→Proof→Features→Testimonials→Pricing→FAQ→CTA→Footer를 *존재해야 할 재료*로 주고, 매크로가 *어떻게 보이게*를 결정한다. 카피는 동사·구체 명사·금지어(Unleash/Seamless/Elevate)와 톤별 실전 오프닝을 예시로 준다. 가짜 수치는 레이아웃을 바꿔서라도 막는다.
흡수안: 페이지 타입별 "있어야 할 정보 블록"과 "보이면 안 되는 카피"를 시스템에 붙인다. 섹션 시각 처리(3열 카드 vs 스펙 시트 vs 벤토)는 매크로가 아니라 시스템 컴포넌트가 결정한다.

---

## 6. 우리가 흡수하면 안 되는 것

디자인 시스템 우선 철학 = **토큰·타입·컴포넌트·페이지 패밀리가 한 번 잠기면, 다음 페이지는 그 시스템을 소비하지 다시 발명하지 않는다.** 아래는 그 철학과 충돌하는 지시이다.

### TECH-21: hallmark `SKILL.md:268-294,307-311` + `references/structure.md:87-90` + slop gates 8, 20, 21, 32
원리(충돌): 연속 산출물은 매크로·테마(paper band / display style / accent hue)·nav·footer·엔리치먼트까지 달라야 한다. 같은 사이트의 두 페이지가 다른 사이트가 되는 것이 목표다.
거부 이유: 우리 목표는 제품 일관성이다. 페이지마다 매크로/나브/푸터를 바꾸면 디자인 시스템이 아니라 포트폴리오 제너레이터가 된다.
흡수 대신: Variety 축을 "이전 페이지와 다른가"가 아니라 "잠긴 시스템과 같은가, 그러면서도 3열 아이콘 그리드/센터드 히어로 같은 *장르 기본값*으로 붕괴하지 않았는가"로 바꾼다. Hallmark 자신도 `design.md`가 있으면 다양성 규칙을 뒤집는다(`SKILL.md:153`, `verbs/audit.md:18-25`) — 그 예외가 우리 기본값이어야 한다.

### TECH-22: hallmark `SKILL.md:39,240-251,333-346` (21 테마 카탈로그 + 커스텀 OKLCH 분기)
원리(충돌): 바닐라 브리프마다 Specimen/Coral/Bloom 같은 카탈로그 테마를 조용히 로테이트한다. 브랜드 컬러가 있을 때만 커스텀.
거부 이유: 우리 하네스는 브랜드/토큰이 이미 있다. 카탈로그 테마를 고르는 순간 시스템 팔레트를 덮어쓴다.
흡수 대신: 카탈로그는 참조 무드보드로만 두고, 런타임 분기는 "기존 토큰 사용 / 사용자 확인 후에만 토큰 확장" 두 갈래로 축소한다.

### TECH-23: ui-ux-pro-max `data/landing.csv:2-4` + `data/styles.csv:3-10` + `data/typography.csv:2-6` + `data/colors.csv:2`
원리(충돌): 제품 유형 → Hero+3–5 Features+CTA, Glassmorphism/Aurora/Neumorphism, Playfair+Inter / Poppins+Open Sans, SaaS primary `#2563EB`.
거부 이유: 이 조합이 바로 Hallmark가 게이트 1–3, 6–8로 죽이는 AI 기본 미감이다. 데이터베이스가 "추천"으로 기본값을 강화한다.
흡수 대신: CSV는 산업 관례를 조사하는 참고 자료로만 쓰고, 생성 경로의 기본값에서 제거한다.

### TECH-24: ui-ux-pro-max `design-system/SKILL.md:177-185` ("ALL slides MUST center align") + `ui-styling/SKILL.md:221-225` (예시가 Inter) + `ui-styling/references/canvas-design-system.md:27-32,235-236` (90% 시각 / 문단 금지)
원리(충돌): 슬라이드·캔버스 철학은 센터 정렬, 텍스트 최소, 박물관급 포스터 미학. ui-styling 퀵스타트는 Inter를 폰트 예시로 심는다.
거부 이유: 제품 UI는 문단과 폼과 테이블을 가져야 하고, 히어로 센터 정렬은 slop이다. Inter는 양 스킬이 동시에 지적하는 기본 폰트다(Hallmark는 금지, ui-ux-pro-max는 추천).
흡수 대신: 캔버스 스킬의 "여백·정렬·겹침 없음" 실행 체크만 가져오고, 90/10 텍스트 비율과 센터 정렬 강제는 포스터/슬라이드 스코프 밖으로 못 나오게 한다.

### TECH-25: hallmark `SKILL.md:203-228` (매 브리프마다 Audience/Use/Tone을 묻고 "clean and modern은 톤이 아니다")
원리(충돌): 정보가 이미 시스템에 있어도 항상 세 질문을 던진다. 예외 없음.
거부 이유: 디자인 시스템 우선 흐름에서는 audience/tone이 이미 `design.md`에 있다. 매 컴포넌트 요청마다 톤을 다시 물으면 시스템이 흔들린다.
흡수 대신: 질문이 필요한 경우는 시스템 부재(그린필드, 토큰 없음)뿐. 시스템이 있으면 잠긴 톤을 한 줄로 재진술하고 진행한다. "clean and modern 거부" 자체는 카피 규율로 남겨도 된다.

---

## 흡수 우선순위 (우리 하네스에 넣을 순서)

디자인 시스템과 충돌하지 않으면서 두 스킬이 실제로 페이지를 더 좋아 보이게 만든 장치만, 적용 순서로 정리한다.

1. **잠긴 토큰 규율** — OKLCH 레이어, 4pt 역할 스케일, 2+1 폰트, 컴포넌트는 `var()`만 (TECH-1, 2, 3, 5, gate 48).
2. **번호 있는 slop 게이트** — 시각 1–7, 마이크로 10–19, 구현 22–31, 타이포 37–38a, 인풋 39, 대비 40–41, 크롬 42–49, 모바일 34·50–56. Variety/카탈로그 게이트는 제외 (TECH-14).
3. **8상태 + 인풋 기하 고정** — 미리보기 매트릭스, border-width 불변, 높이 공유 (TECH-6).
4. **사전 채점 6축 + 사후 audit** — <3 재생성, 스탬프, 읽기 전용 punch list. Variety=시스템 충실도 (TECH-10, 12).
5. **히어로/섹션 폴드 규율** — 타이포 우선, 1280×800 폴드, 패딩 1.3×, 센터드-에브리싱 금지 (TECH-18).
6. **페이지 타입별 허용 패밀리** — 매크로 21개 로테이션이 아니라 `design.md`가 허용하는 1–2 모양 (TECH-16, 21 반전).
7. **핸드빌드 비주얼 티어** — 이모지/Lottie/스톡 블롭 대신 CSS/SVG 또는 시스템 아이콘 1세트 (TECH-8, gate 30–31).

넣지 말 것: 페이지 단위 테마/나브/푸터 로테이션, 산업→`#2563EB` 룩업, Glass/Aurora/Neumorphism 스타일 카드, Inter/Poppins 페어링 표, Hero→3 Features→CTA를 기본값으로 두는 랜딩 CSV, 매 요청 톤 인터뷰.

---

## 근거 파일 인덱스

| 스킬 | 핵심 파일 | 이 보고서에서 쓴 축 |
|---|---|---|
| hallmark | `SKILL.md` | 전 축, 흐름, 8상태, 프리뷰, 스탬프 |
| hallmark | `references/typography.md` | 1 |
| hallmark | `references/color.md` | 1 |
| hallmark | `references/layout-and-space.md` | 1, 5 |
| hallmark | `references/slop-test.md` | 3, 4 (전수) |
| hallmark | `references/anti-patterns.md` | 4 |
| hallmark | `references/interaction-and-states.md` | 2 |
| hallmark | `references/component-cookbook.md` + `components/*` | 2, 5 |
| hallmark | `references/structure.md` + `macrostructures.md` | 5, 6 |
| hallmark | `references/hero-enrichment.md` + `custom-craft.md` | 2, 5 |
| hallmark | `references/copy.md` + `motion.md` + `verbs/audit.md` | 3, 5 |
| ui-ux-pro-max | `ui-ux-pro-max/SKILL.md` | 1, 3, 4, 5 |
| ui-ux-pro-max | `ui-ux-pro-max/data/{typography,colors,styles,landing,ux-guidelines}.csv` | 1, 4, 5, 6 |
| ui-ux-pro-max | `ui-ux-pro-max/scripts/design_system.py` | 1, 6 |
| ui-ux-pro-max | `design-system/SKILL.md` + `references/{primitive-tokens,component-specs}.md` | 1, 2, 6 |
| ui-ux-pro-max | `ui-styling/SKILL.md` + `references/canvas-design-system.md` | 3, 6 |
