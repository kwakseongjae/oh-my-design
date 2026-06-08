---
id: krds
name: KRDS
country: KR
category: government
homepage: "https://www.krds.go.kr/html/site/index.html"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.krds.go.kr/resources/img/guide/favicon_192.png"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: KRDS — Korea Republic Design System
  url: "https://www.krds.go.kr/html/site/index.html"
  type: system
  description: "행정안전부 주관 범정부 통합 디자인 시스템. Government Blue #256EF4, Pretendard GOV, WCAG/KWCAG 2.2 a11y-first tokens and components."
  og_image: "https://www.krds.go.kr/resources/img/guide/KRDS_Open_Graph.png"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#256ef4"
    primary-hover: "#0b50d0"
    primary-deep: "#083891"
    brand: "#256ef4"
    canvas: "#ffffff"
    foreground: "#1e2124"
    muted: "#6d7882"
    on-primary: "#ffffff"
    surface: "#f4f5f6"
    surface-primary: "#ecf2fe"
    hairline: "#b1b8be"
    border-strong: "#58616a"
    body: "#464c53"
    secondary: "#346fb2"
    point: "#d63d4a"
    danger: "#de3412"
    warning: "#ffb114"
    success: "#228738"
    information: "#0b78cb"
  typography:
    family: { sans: "Pretendard GOV", mono: "SF Mono" }
    display-large:  { size: 60, weight: 700, lineHeight: 1.5, tracking: "1px", use: "Marketing/banner display (no body use)" }
    display-small:  { size: 36, weight: 700, lineHeight: 1.5, tracking: "1px", use: "Small display banner" }
    heading-xlarge: { size: 40, weight: 700, lineHeight: 1.5, tracking: "1px", use: "H1 page/section top title (28px mobile)" }
    heading-large:  { size: 32, weight: 700, lineHeight: 1.5, tracking: "1px", use: "H1 narrow / H2" }
    heading-medium: { size: 24, weight: 700, lineHeight: 1.5, use: "H2 / H3" }
    heading-small:  { size: 19, weight: 700, lineHeight: 1.5, use: "H3 / H4" }
    heading-xsmall: { size: 17, weight: 700, lineHeight: 1.5, use: "H4 / H5" }
    body-large:     { size: 19, weight: 400, lineHeight: 1.5, use: "Emphasized body / key copy" }
    body-medium:    { size: 17, weight: 400, lineHeight: 1.5, use: "Standard body (default)" }
    body-small:     { size: 15, weight: 400, lineHeight: 1.5, use: "Caption / small label" }
    body-xsmall:    { size: 13, weight: 400, lineHeight: 1.5, use: "Annotation / meta / footer" }
  spacing: { xs: 2, sm: 4, md: 8, base: 16, lg: 24, xl: 32, xxl: 40 }
  rounded: { sm: 4, md: 6, lg: 8, full: 1000 }
  shadow:
    focus: "0 0 0 0.4rem #256ef4"
    modal: "0 0.2rem 0 0 rgba(0,0,0,0.1), 0 0.4rem 0.8rem 0 rgba(0,0,0,0.1)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#256ef4", fg: "#ffffff", border: "1px solid #256ef4", radius: "6px", padding: "0 16px", height: "48px", font: "17px / 400", hover: "#0b50d0", active: "#083891", disabled: "bg #cdd1d5 fg #6d7882", use: "Core action 신청하기/확인 (1 per screen)" }
    button-secondary: { type: button, bg: "#ecf2fe", fg: "#0b50d0", border: "1px solid #256ef4", radius: "6px", padding: "0 16px", height: "48px", font: "17px / 400", use: "Secondary action 자세히 보기/이전 단계" }
    button-tertiary: { type: button, bg: "transparent", fg: "#1e2124", border: "1px solid #58616a", radius: "6px", padding: "0 16px", height: "48px", font: "17px / 400", hover: "#f4f5f6", use: "Cancel/reset 취소/초기화/닫기" }
    button-floating: { type: button, bg: "#256ef4", fg: "#ffffff", radius: "1000px", shadow: "weak box-shadow", use: "Bottom-right floating action 맨 위로/챗봇" }
    input-text: { type: input, bg: "#ffffff", fg: "#464c53", border: "1px solid #58616a", radius: "8px", padding: "0 16px", height: "56px", font: "19px / 400", focus: "0 0 0 4px #256ef4 halo", disabled: "bg #cdd1d5 fg #6d7882 border #b1b8be", states: "error border 2px solid #de3412", use: "Standard text input (large default)" }
    select: { type: input, bg: "#ffffff", fg: "#1e2124", border: "1px solid #58616a", radius: "6px", padding: "0 48px 0 16px", height: "56px", font: "19px / 400", disabled: "bg #cdd1d5 border #b1b8be", states: "error border 2px solid #ab2b36", use: "Native select with chevron" }
    toggle-checkbox: { type: toggle, bg: "#ffffff", border: "1px solid #58616a", radius: "4px", active: "bg #256ef4 + white check icon", use: "Multi-select checkbox" }
    toggle-switch: { type: toggle, bg: "#b1b8be", fg: "#ffffff", radius: "1000px", active: "#256ef4 track, white thumb right", disabled: "bg #cdd1d5", use: "On/off toggle switch" }
    card: { type: card, bg: "#ffffff", border: "1px solid #b1b8be", radius: "8px", padding: "24px", shadow: "none", use: "Standard content panel, border-defined" }
    card-info: { type: card, bg: "#ecf2fe", fg: "#1e2124", radius: "8px", padding: "16px 24px", use: "Info/help panel 안내·도움말" }
    card-critical: { type: card, bg: "#de3412", fg: "#ffffff", radius: "0", use: "Full-bleed urgent notice banner top of page" }
    dialog: { type: dialog, bg: "#ffffff", fg: "#1e2124", radius: "12px", padding: "40px", shadow: "0 0.2rem 0 0 rgba(0,0,0,0.1), 0 0.4rem 0.8rem 0 rgba(0,0,0,0.1)", use: "Modal dialog, backdrop fade 0->0.5 black, min-height 264px" }
    badge-primary: { type: badge, bg: "#256ef4", fg: "#ffffff", border: "1px solid #256ef4", radius: "4px", padding: "0 8px", height: "24px", font: "15px / 400", use: "Content classification, action emphasis" }
    badge-point: { type: badge, bg: "#d63d4a", fg: "#ffffff", radius: "4px", padding: "0 8px", height: "24px", font: "15px / 400", use: "Emphasis/new/important (red point)" }
    badge-success: { type: badge, bg: "#228738", fg: "#ffffff", radius: "4px", padding: "0 8px", height: "24px", font: "15px / 400", use: "Completed / success" }
    badge-danger: { type: badge, bg: "#de3412", fg: "#ffffff", radius: "4px", padding: "0 8px", height: "24px", font: "15px / 400", use: "Error / rejected" }
    badge-warning: { type: badge, bg: "#ffb114", fg: "#1e2124", radius: "4px", padding: "0 8px", height: "24px", font: "15px / 400", use: "Caution (black text on warning bg)" }
    badge-tag: { type: badge, bg: "#ffffff", fg: "#1e2124", border: "1px solid #cdd1d5", radius: "1000px", padding: "8px 10px", font: "15px / 400", active: "bg #ecf2fe fg #0b50d0 border #256ef4", use: "Selectable filter chip with delete button" }
    tab-horizontal: { type: tab, bg: "transparent", fg: "#464c53", font: "17px / 400", active: "fg #256ef4 700 + 2px bottom border #256ef4", use: "In-page section switch, keyboard L/R nav" }
    toast: { type: toast, bg: "#1e2124", fg: "#ffffff", radius: "8px", padding: "16px", use: "Center/bottom card, 3s auto-dismiss" }
---

# Design System Inspiration of KRDS (대한민국 정부 디자인 시스템)

## 1. Visual Theme & Atmosphere

KRDS는 대한민국 행정·공공기관 웹·앱이 공유하는 정부 표준 디자인 시스템입니다. 화면은 마케팅 브랜드가 아니라 **공공 서비스의 도구**처럼 보이도록 설계되었습니다 — 순백 배경(`#ffffff`) 위에 거의 검정에 가까운 본문(`#1E2124`), 그리고 신뢰감을 주는 정부 블루(`#256EF4`)가 단 하나의 강조색으로 작동합니다. 강조색은 그래픽 장식이 아니라 행위(action), 즉 "신청", "확인", "다음 단계"가 있는 자리에만 나타납니다. 영역 분리는 그림자가 아니라 **얇은 회색 보더**(`#58616A` 1px / `#B1B8BE` 1px / `#CDD1D5` 1px)와 **8px 라운드**로 처리되어, 시각적 무게가 일관되게 가라앉아 있습니다.

이 시스템은 "디지털 정부서비스 UI/UX 가이드라인"을 표준 토큰·컴포넌트로 정착시킨 것으로, 행정안전부(MOIS)가 2024년 4월에 공식 배포했습니다 ([행정안전부 보도자료](https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=115144)). 분위기를 한 줄로 요약하면 **"읽기 쉽고, 예측 가능하며, 접근성을 우선하는 공공 유틸리티"**입니다. 화려한 일러스트, 그라데이션, 톤다운된 마케팅 영문 카피, 과장된 모션은 의도적으로 배제되어 있습니다.

**Key Characteristics:**
- 정부 블루 Primary 50 `#256EF4`(액션) + Primary 60 `#0B50D0`(텍스트·pressed) + Primary 5 `#ECF2FE`(약한 배경) — Primary는 11단계(5~95) 명도 팔레트로 정의되어 있고, 모든 UI는 이 중 3~4단계만 사용
- **Pretendard GOV** 단일 폰트 패밀리 (한글·라틴·숫자 일체) — 시스템 한글 폴백 포함
- 본문 기본 17px·400 / 1.5 line-height, 페이지 제목 H1 xlarge = **40px(PC) / 28px(mobile)**·700 — Display(36/44/60), Heading(15~40), Body(13~19) 세 레이어 스케일
- 5단계 컴포넌트 사이즈 (xsmall · small · medium · large · xlarge) — 버튼·인풋·셀렉트·태그 전반에 동일 적용
- **글자·화면 표시 설정** UI 내장 — 사용자가 폰트 크기를 90% / 100% / 110% / 130% / 150%로 직접 확대 (`--krds-zoom-*`)
- 라운드 스케일: 2px / 4px / 6px / 8px / 10px / 12px / 1000px — 그림자는 거의 사용하지 않음 (`--krds-box-shadow-outline`만 focus용)
- 컨텐츠 폭 1200px (gutter 24px) + 4단계 브레이크포인트 (small 360 / medium 768 / large 1024 / xlarge 1280) — 정부 사이트의 표준 와이드 레이아웃
- **매직 넘버 컬러 시스템** — 명도 단계별로 WCAG 대비율을 보장: 매직넘버 40=3:1, 50=4.5:1, 70=7:1, 90=15:1. 토큰 단계부터 KWCAG 2.1 / WCAG 2.1 AA 준수가 강제됨
- 시스템 컬러 4종 — Danger `#DE3412` / Warning `#FFB114` / Success `#228738` / Information `#0B78CB` (모두 50단계 base, light/high-contrast 토큰 레이어 자동 매핑)
- **선명한 화면 모드(High-contrast mode) 내장** — 일반 모드와 동일 컴포넌트가 `--krds-color-high-contrast-*` 레이어 한 줄 교체만으로 전환

**디지털 포용·접근성 강령 (Accessibility Mandate).** KRDS는 시각적 선호가 아니라 **법적·정책적 의무**에서 출발합니다. 대한민국 「장애인차별금지 및 권리구제 등에 관한 법률」(장차법)과 「웹 접근성 국가표준 KWCAG 2.1 (KS X OT 0003)」이 공공기관 웹·앱에 WCAG 2.1 AA 동등 이상의 접근성을 요구하며, KRDS는 이를 토큰·컴포넌트 단계부터 강제하는 기술 표준 역할을 합니다. 행정안전부는 KRDS를 "**누구나 쉽게 사용할 수 있는 공공 웹·앱**"의 구현 수단으로 정의했고 ([행정안전부 보도자료](https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=115144)), 라이브 사이트 푸터에는 **웹 접근성 인증 마크**가 상시 표시됩니다 ([기본 패턴 summary](https://www.krds.go.kr/html/site/global/global_summary.html) 페이지 푸터 확인). 따라서 색대비 4.5:1 (매직넘버 50), 4px focus halo, 사용자 줌 90~150%, 선명한 화면 모드는 "권고"가 아니라 KRDS의 **기본 동작**입니다.

## 2. Color Palette & Roles

### Brand

- **Government Blue** (`#256EF4`): Primary brand color — buttons, active links, primary CTA, focus rings.
- **Primary Deep** (`#0B50D0`): Primary text on light surface, secondary-button text, pressed state.
- **Navy** (`#346FB2`): Secondary brand color — side menu, segmented controls, header secondary.
- **Government Red (Point)** (`#D63D4A`): Restricted accent — emphasis badges, critical alerts only.

### Surface & Background

- **Page Background** (`#FFFFFF`): The primary page background — card and input default canvas.
- **Subtle Surface** (`#F4F5F6`): Table headers, gray subtle surfaces.
- **Divider** (`#E6E8EA`): Light dividers.

### Foreground (Text)

- **Body Text** (`#1E2124`): Primary body text and H1 headlines.
- **Subtle Text** (`#464C53`): Placeholder, inactive GNB items.
- **Caption Text** (`#6D7882`): Captions, meta, helper text.

### Semantic

- **Danger / Critical** (`#DE3412`): Validation errors, required-field errors, immediate alerts.
- **Warning** (`#FFB114`): Warning badge backgrounds (use `#9E6A00` for text-on-light contrast).
- **Success** (`#228738`): Confirmation, completed states.
- **Information** (`#0B78CB`): Informational panels, info icons.

---

### Standard Style — Full Token Scale

KRDS의 색상 시스템은 **표준형 스타일(Standard Style)** 기준으로 11단계 명도(5/10/20/30/40/50/60/70/80/90/95) × 8개 색상군(Gray, Primary, Secondary, Point, Danger, Warning, Success, Information) + Gray 0/100 (white/black)으로 구성됩니다. 각 토큰은 `--krds-color-light-<name>-<step>` 형태로 노출되며, 선명한 화면 모드는 `--krds-color-high-contrast-<name>-<step>`로 동일 의미를 다른 명도에 매핑합니다.

### Primary (Government Blue — 정부 청색)

| Step | Hex | Token | Role |
|------|------|-------|------|
| 5 | `#ECF2FE` | `--krds-color-light-primary-5` | Secondary 버튼 배경, 정보 패널 표면, 약한 강조 |
| 10 | `#D8E5FD` | `--krds-color-light-primary-10` | hover/selected 표면 |
| 20 | `#B1CEFB` | `--krds-color-light-primary-20` | divider, illustration 보조 |
| 30 | `#86AFF9` | `--krds-color-light-primary-30` | disabled-on-primary, 보조 그래픽 |
| 40 | `#4C87F6` | `--krds-color-light-primary-40` | 보조 액션 / 비활성 보더 |
| **50** | **`#256EF4`** | `--krds-color-light-primary-50` | **Primary 액션 — 버튼 배경, 활성 링크, 활성 탭. 정부의 행위(action) 컬러** |
| **60** | **`#0B50D0`** | `--krds-color-light-primary-60` | Primary text on light surface, Secondary 버튼 텍스트, pressed 상태 |
| 70 | `#083891` | `--krds-color-light-primary-70` | 강한 강조 텍스트 |
| 80 | `#052561` | `--krds-color-light-primary-80` | 진한 정보 컨테이너 |
| 90 | `#03163A` | `--krds-color-light-primary-90` | 다크 표면 |
| 95 | `#020F27` | `--krds-color-light-primary-95` | 다크 모드 본문 배경 |

### Secondary (Navy — 정부 회청)

세컨더리는 Primary와 보조를 맞추는 안정적인 네이비 톤으로, 사이드 메뉴·세그먼티드 컨트롤·헤더 보조 영역에 쓰입니다.

| Step | Hex | Role |
|------|------|------|
| 5 | `#EEF2F7` | 사이드 메뉴 배경 |
| 50 | `#346FB2` | secondary base |
| 60 | `#1C589C` | secondary action |
| 70 | `#063A74` | secondary text |
| 80 | `#052B57` | secondary heading |

### Gray (회색 — 텍스트 / 보더 / 표면)

| Step | Hex | Role | Token semantic |
|------|------|------|----------|
| 0 | `#FFFFFF` | Page / card / input 기본 배경 | `--krds-light-color-surface-white-static` |
| 5 | `#F4F5F6` | 표 헤더, gray subtle 표면 | `--krds-light-color-surface-gray-subtler` |
| 10 | `#E6E8EA` | divider 약 | — |
| 20 | `#CDD1D5` | **Disabled 표면 배경 / 보더 약** | input disabled bg |
| 30 | `#B1B8BE` | 카드·패널 보더 (subtle) | `--krds-color-border-gray-light` |
| 40 | `#8A949E` | bg-disabled, disabled badge | — |
| 50 | `#6D7882` | 보조 텍스트 (caption/meta) | — |
| 60 | `#58616A` | **표준 보더 (input·tertiary 버튼)** | `--krds-color-border-gray` |
| 70 | `#464C53` | 보조 텍스트 (placeholder, GNB 비활성) | `--krds-color-text-subtle` |
| 80 | `#33363D` | 강한 텍스트 / divider |
| 90 | `#1E2124` | **본문 / H1 텍스트** | `--krds-color-text-basic` |
| 95 | `#131416` | 다크 표면 |
| 100 | `#000000` | 절대 검정 (사용 빈도 낮음) |

### System Colors (Semantic)

| Role | 50 (base) | 5 (subtle bg) | 70 (deep text) | Token |
|------|-----------|----------------|------------------|-------|
| **Danger / Critical** | **`#DE3412`** | `#FDEFEC` | `#8A240F` | `--krds-color-light-danger-*` |
| **Warning** | `#9E6A00` (text) / `#FFB114` (30, bg) | `#FFF3DB` | `#614100` | `--krds-color-light-warning-*` |
| **Success** | **`#228738`** | `#EAF6EC` | `#285D33` | `--krds-color-light-success-*` |
| **Information** | `#0B78CB` | `#E7F4FE` | `#085691` | `--krds-color-light-information-*` |
| **Point (Accent — 정부 적색)** | `#D63D4A` | `#FBEFF0` | `#7A1F26` | `--krds-color-light-point-*` |

— Danger는 입력 검증·필수 오류·즉시 알림에 사용 (`border 2px solid #DE3412`).
— Warning은 노란색 톤이지만 텍스트로 쓰일 때는 콘트라스트 확보를 위해 `#9E6A00`(warning-50). 배경 50단계 `#FFB114` 위 텍스트는 `#1E2124`로 사용.
— Point(정부 적색)는 강조 배지·중요 알림에 매우 제한적으로 사용 (Select error 보더가 이 컬러: `#AB2B36`).

### Focus

- **Focus Ring**: `--krds-box-shadow-outline: 0 0 0 0.4rem #256EF4` (4px outline halo). 모든 인터랙티브 요소(버튼·input·select·체크박스·라디오·링크)에 일관 적용. 인셋 버전 `--krds-box-shadow-outline-inset: inset 0 0 0 0.2rem #256EF4`도 함께 정의.
- 정부 사이트는 키보드 사용자(스크린 리더 / 보조기기 사용자)가 첫 번째 사용자 그룹이므로 focus 가시성은 타협 항목이 아닙니다.

### 매직 넘버 (Magic Number)

KRDS 컬러 팔레트는 명도 단계 간 차이를 **WCAG 대비율과 직접 매핑**합니다:
- 매직넘버 40 → 3:1
- 매직넘버 50 → 4.5:1 (AA normal text 통과 기준)
- 매직넘버 70 → 7:1 (AAA)
- 매직넘버 90 → 15:1

이 매핑 덕분에 디자이너는 "primary-50 위 gray-0" 같은 조합을 선택하면 즉시 대비율을 보장받습니다.

## 3. Typography Rules

### Font Family
- **Primary**: `"Pretendard GOV", "Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`
- **설계 원칙**: KRDS 전용 빌드인 **Pretendard GOV**는 라이선스가 명확하고(오픈 폰트), 한글·라틴·기호의 메트릭이 균일하여 정부 문서에서 자주 발생하는 혼용 표기(예: "민원 24", "행정 API")가 정렬·자간 어긋남 없이 표현됩니다. 라이브 페이지에서 `--krds-font-family-base: Pretendard GOV`로 확인됨.
- **확장형 스타일** (자체 폰트를 가진 기관의 경우): 노토 산스 / 나눔 고딕 / 스포카 한 산스 등 고딕 계열만 허용. 자체 폰트가 고딕이 아니면 본문·제목에 사용 금지.

### 3-Layer Type Scale

KRDS는 **Display / Heading / Body** 3계층 + Navigation / Label 시멘틱 토큰으로 구성됩니다. 모두 line-height 150%, regular 400 / bold 700 두 두께만 사용.

**Display** (마케팅 / 배너 전용 — 본문 사용 금지)

| Style | PC | Mobile | Weight | Letter-spacing |
|-------|----|---------|--------|------------------|
| Display Large | 60px | 44px | 700 | 1px |
| Display Medium | 44px | 32px | 700 | 1px |
| Display Small | 36px | 28px | 700 | 1px |

**Heading** (H1~H5)

| Style | PC | Mobile | Weight | Letter-spacing | 적용 |
|-------|----|---------|--------|------------------|------|
| Heading xlarge | **40px** | **28px** | 700 | 1px | H1 — 페이지 / 섹션 최상위 제목 |
| Heading large | 32px | 24px | 700 | 1px | H1 (좁은 페이지) / H2 |
| Heading medium | 24px | 22px | 700 | 0 | H2 / H3 |
| Heading small | 19px | 19px | 700 | 0 | H3 / H4 |
| Heading xsmall | 17px | 17px | 700 | 0 | H4 / H5 |
| Heading xxsmall | 15px | 15px | 700 | 0 | H5 |

**Body** (본문 — bold / regular 각 4단계)

| Style | Size | Weight | 적용 |
|-------|------|--------|------|
| Body large bold / large | 19px | 700 / 400 | 강조 본문 / 핵심 카피 |
| Body medium bold / **medium** | 17px | 700 / **400** | **표준 본문 (`<body>` 기본)** |
| Body small bold / small | 15px | 700 / 400 | 캡션 / 보조 / 작은 라벨 |
| Body xsmall bold / xsmall | 13px | 700 / 400 | 주석 / 메타 / 푸터 |

**Semantic Role Tokens** (Navigation / Label)

| Role | Style | PC | Weight |
|------|-------|----|---------|
| Navigation | title-large | 24px | 700 |
| Navigation | title-small | 19px (mobile 17) | 700 |
| Navigation | depth-medium-bold / depth-medium | 17px | 700 / 400 |
| Navigation | depth-small-bold / depth-small | 15px | 700 / 400 |
| Label (button / input / radio / checkbox) | large / medium / small / xsmall | 19 / 17 / 15 / 13 | 400 |

### Principles
- **두 굵기 원칙**: Regular(400)와 Bold(700)만 (`--krds-font-weight-regular`, `--krds-font-weight-bold`). Medium 단계 없음 — 정부 문서 톤의 절제.
- **17px가 본문 기본**: 일반적인 14~16px보다 살짝 큰 17px를 기본 본문으로 채택해 노안·저시력 사용자 가독성을 우선 (Pretendard GOV가 다른 서체 대비 작아 보이기 때문에 의도적으로 +1px).
- **줄간격 1.5 (150%)**: WCAG 1.4.12 Text Spacing AA를 준수해 모든 텍스트 line-height는 150% 이상.
- **사용자 직접 확대**: `--krds-zoom-{small, medium, large, xlarge, xxlarge} = 0.9 / 1 / 1.1 / 1.3 / 1.5`. 헤더의 "글자·화면 설정"에서 최대 150%까지 확대 가능. 브라우저 줌과 별개의 1차 컨트롤.
- **letter-spacing 0 (Display만 1px)**: 자간을 인위적으로 좁히지 않음 (`--krds-letter-spacing-none: 0rem`). 한글 가독성 우선.
- **rem 단위 기본**: 모든 토큰이 `rem` 단위. `font-size-base: 62.5%`로 1rem = 10px로 설정해 px↔rem 환산이 자명.

## 4. Component Stylings

KRDS 컴포넌트는 5단계 크기 토큰(xsmall/small/medium/large/xlarge)을 공유하며 모든 변형이 `aria-disabled` / 키보드 포커스 / 4px focus-ring halo를 기본 제공합니다. 각 variant 블록은 default 크기(Button=medium, Input=large, Select=large)의 측정값을 기준으로 하고, 크기 스케일은 표/프로즈로 보조합니다.

### Buttons

소스: `component_05_02.html`. 5단계 크기 × 6개 변형 = 30개 컴포넌트 슬롯.

**Primary**
- Background: `#256EF4`
- Text: `#FFFFFF`
- Border: 1px solid `#256EF4`
- Radius: 6px
- Padding: 0 16px
- Font: 17px / 400
- Hover: Primary 60 `#0B50D0` 배경
- Active: Primary 70 `#083891` 배경 (pressed)
- Disabled: Gray 20 `#CDD1D5` 배경 + Gray 50 `#6D7882` 텍스트 + cursor not-allowed
- Use: 핵심 액션 — "시작하기", "신청하기", "확인", "다음 단계" (한 화면당 1개 권장)

사이즈 스케일 (height / radius / padding / font):
- xsmall: 32px / 4px / 0 10px / 15px·400
- small: 40px / 6px / 0 12px / 15px·400
- medium (default): 48px / 6px / 0 16px / 17px·400
- large: 56px / 8px / 0 20px / 19px·400
- xlarge: 64px / 8px / 0 24px / 19px·400

**Secondary**
- Background: `#ECF2FE` (Primary 5)
- Text: `#0B50D0` (Primary 60)
- Border: 1px solid `#256EF4`
- Radius: 6px
- Padding: 0 16px
- Font: 17px / 400
- Use: 보조 액션 — "자세히 보기", "이전 단계", "다운로드" (Primary 옆 동일 위계, 사이즈 스케일 Primary와 동일 — radius 4/6/6/8/8)

**Tertiary (Outline)**
- Background: transparent
- Text: `#1E2124` (Gray 90)
- Border: 1px solid `#58616A` (Gray 60)
- Radius: 6px
- Padding: 0 16px
- Font: 17px / 400
- Hover: Gray 5 `#F4F5F6` 배경
- Use: 부가 / 취소 / 초기화 — "취소", "초기화", "닫기" (사이즈 스케일 Primary와 동일)

**Text / Link**
- Background: transparent
- Text: `#1E2124` (text variant) 또는 `#256EF4` (link variant)
- Border: 1px transparent (focus 시 가시화)
- Radius: 4~8px (크기별)
- Padding: 0 2px~9px (텍스트 흐름에 맞춤)
- Font: medium height 28px
- Use: 인라인 액션 — "파일 다운로드", "문의 및 건의", "찜하기"

**Icon Only**
- Background: transparent
- Text: `#1E2124`
- Radius: 6~8px (크기별)
- Padding: 0 (icon-size 1.6/2/2.4rem = 16/20/24px, `--krds-icon--size-*`)
- Use: 단독 아이콘 컨트롤 — 검색 / 닫기 / 도움말 토글

**Icon + Border**
- Background: `#FFFFFF`
- Text: `#1E2124`
- Border: 1px solid `#B1B8BE` (Gray 30)
- Radius: 1000px (`--krds-radius-max`, 원형)
- Use: 보조 컨트롤 — "새로고침", "맨 위로"

**Floating**
- Background: Primary `#256EF4`
- Text: `#FFFFFF`
- Radius: 1000px (원형)
- Shadow: 약한 box-shadow
- Use: 페이지 우하단 부유 액션 — "맨 위로 / 챗봇 / 음성지원" (스크롤 시 표시, `component_05_03.html`)

### Inputs

소스: `component_09_*.html`. 5단계 크기 + 4단계 상태. Default = large.

**Text Input**
- Background: `#FFFFFF`
- Text: `#464C53` (Gray 70, placeholder 포함)
- Border: 1px solid `#58616A`
- Radius: 8px
- Padding: 0 16px
- Font: 19px / 400
- Focus: 보더 유지 + `box-shadow: 0 0 0 4px #256EF4` halo (focus ring)
- Disabled: bg `#CDD1D5` (Gray 20) / text `#6D7882` (Gray 50) / border 1px `#B1B8BE` (Gray 30) / `aria-disabled="true"`
- Use: 일반 텍스트 입력 (`component_09_03.html`) — height 56px default

상태 — Required: 라벨 옆 빨간 별표(`*` Danger 50 `#DE3412`) + `aria-required="true"`. Error: border 2px solid `#DE3412` + helper text Danger 50 + `aria-invalid="true"` + 에러 영역 자동 포커스 이동.

사이즈 스케일 (height / radius / padding / font / border):
| Size | Height | Radius | Padding | Font | 기본 보더 |
|------|--------|--------|----------|------|-----------|
| xsmall | 32px | 4px | 0 12px | 13px·400 | 1px `#58616A` |
| small | 40px | 6px | 0 16px | 15px·400 | 1px `#58616A` |
| medium | 48px | 6px | 0 16px | 17px·400 | 1px `#58616A` |
| **large (default)** | **56px** | **8px** | 0 16px | **19px·400** | 1px `#58616A` |
| xlarge | 80px | 10px | 0 24px | 24px·700 | 1px `#58616A` |

**Textarea**
- Background: `#FFFFFF`
- Text: `#464C53`
- Border: 1px solid `#58616A`
- Radius: 8px
- Padding: 0 16px
- Font: 19px / 400
- Use: 다행 입력 (`component_09_02.html`) — Text Input과 동일 토큰 + 기본 높이 14.4rem (144px), 자동 리사이즈 비권장

**Date Input**
- Background: `#FFFFFF`
- Text: `#464C53`
- Border: 1px solid `#58616A`
- Radius: 8px
- Padding: 0 16px
- Font: 19px / 400
- Use: 날짜 입력 (`component_09_01.html`) — Text Input + 캘린더 아이콘 + Calendar 컴포넌트(`component_04_03.html`) 연동, `YYYY-MM-DD` 또는 분리형 (`YYYY / MM / DD` 셋 박스)

**File Upload**
- Background: `#FFFFFF`
- Text: `#1E2124`
- Border: 1px solid `#58616A`
- Radius: 8px
- Padding: 0 16px
- Use: 파일 첨부 (`component_09_04.html`) — Tertiary 버튼 + 파일명 표시 영역 + 진행 표시기 + 삭제 칩

### Select

소스: `component_06_03.html`. 네이티브 `<select class="krds-form-select">` 기반. Default = large.

**Select**
- Background: `#FFFFFF`
- Text: `#1E2124`
- Border: 1px solid `#58616A`
- Radius: 6px
- Padding: 0 48px 0 16px (우측 chevron 영역)
- Font: 19px / 400
- Disabled: bg `#CDD1D5` + border `#B1B8BE`
- Use: 옵션 선택 — Error border 2px solid `#AB2B36` (Point 60 — 셀렉트는 Danger가 아닌 Point를 사용해 입력 폼과 시각 구분). Completed (값 선택 후): 보더 유지, 텍스트 진해짐.

사이즈 스케일 (height / radius / padding-right / font):
| Size | Height | Radius | Padding-right (chevron) | Font |
|------|--------|--------|-------------------------|------|
| small | 40px | 8px | 40px | 15px·400 |
| medium | 48px | 6px | 44px | 17px·400 |
| **large (default)** | **56px** | **6px** | **48px** | **19px·400** |

### Toggles

체크박스 · 라디오 · 토글 스위치 (`component_06_01.html` / `06_02` / `06_07`).

**Checkbox**
- Background: `#FFFFFF` (Checked: `#256EF4`)
- Text: `#FFFFFF` (check 아이콘)
- Border: 1px solid `#58616A`
- Radius: 4px
- Padding: 16/20/24px 정사각
- Use: 다중 선택 — Checked 배경 `#256EF4` + 흰색 check 아이콘. Indeterminate / Error / Disabled 상태 제공.

**Radio**
- Background: `#FFFFFF`
- Text: `#256EF4` (내부 dot)
- Border: 1px solid `#58616A` (Checked: 외곽 `#256EF4`)
- Radius: 1000px (원형)
- Padding: 16/20/24px 원
- Use: 단일 선택 — 그룹 단위 키보드 탐색 (`role="radiogroup"`)

**Toggle Switch**
- Background: `#B1B8BE` (Off) / `#256EF4` (On)
- Text: `#FFFFFF` (thumb)
- Radius: max (pill, 트랙 32px 폭 / 16px 높이)
- Disabled: bg `#CDD1D5`
- Use: 켜기/끄기 토글 — On 시 흰색 thumb 우측 이동

### Cards

소스: `component_04_*.html`. 표면(surface) 컴포넌트 모음.

**Standard Panel**
- Background: `#FFFFFF`
- Border: 1px solid `#B1B8BE` (Gray 30)
- Radius: 8px
- Padding: 24px (`--krds-padding-8`)
- Shadow: none — 보더로 영역 구분
- Use: 일반 콘텐츠 카드, 본문 내 모듈

**Info Panel (Light Primary)**
- Background: `#ECF2FE` (Primary 5)
- Text: 강조 `#0B50D0` + 본문 `#1E2124`
- Border: none
- Radius: 8px
- Padding: 16px 24px (`--krds-padding-6 --krds-padding-8`)
- Use: 안내·도움말 패널 — "이 페이지에서는…", "도움말", 정보성 알림

**Critical Alert**
- Background: `#DE3412` (Danger 50)
- Text: `#FFFFFF`
- Radius: 0 (풀-블리드)
- Padding: 페이지 폭 가득
- Use: 페이지 상단 풀-블리드 긴급 공지 배너 (`component_04_02.html`) — 모바일 헤더 긴급 배지 높이 3.9rem (`--krds-critical-alerts--mobile-badge-size-height`)

**Accordion**
- Background: `#FFFFFF`
- Text: `#1E2124`
- Border: 1px solid `#B1B8BE`
- Radius: 8px
- Use: 보더 분리 disclosure 패널 (`component_04_07.html` / `04_04`) — max-height 400ms ease 전환

### Modals

**Modal**
- Background: `#FFFFFF`
- Text: `#1E2124`
- Radius: 12px (`--krds-radius-xlarge1`)
- Padding: 40px (`--krds-padding-10`)
- Shadow: `0 0.2rem 0 0 rgba(0,0,0,a1), 0 0.4rem 0.8rem 0 rgba(0,0,0,a2)` (드롭다운·툴팁과 공유)
- Use: 다이얼로그 (`component_04_05.html`) — "글자·화면 표시 설정", "전체 메뉴", 양식 확인. Min-height 264px. 백드롭 fade-in 400ms / opacity 0→0.5 black.

사이즈 (`--krds-modal--size-*`): small 400px / medium 560px / large 760px.

### Badges

소스: `component_04_06.html`. outline / bg(filled) × 9개 의미 = 18개 변형. 모두 동일 형태: radius 4px / padding 0 8px / 15px·400 / height 24px.

**Primary**
- Background: `#256EF4` (filled) / transparent (outline)
- Text: `#FFFFFF` (filled) / `#0B50D0` (outline)
- Border: 1px solid `#256EF4` (outline)
- Radius: 4px
- Padding: 0 8px
- Font: 15px / 400
- Use: 콘텐츠 분류, 액션 강조

**Secondary**
- Background: `#063A74` (filled) / transparent (outline)
- Text: `#FFFFFF` (filled) / `#052B57` (outline)
- Border: 1px solid `#052B57` (outline)
- Radius: 4px
- Padding: 0 8px
- Font: 15px / 400
- Use: 카테고리 그룹

**Gray**
- Background: `#6D7882` (filled) / transparent (outline)
- Text: `#FFFFFF` (filled) / `#464C53` (outline)
- Border: 1px solid `#464C53` (outline)
- Radius: 4px
- Padding: 0 8px
- Font: 15px / 400
- Use: 메타 / 일반 분류

**Point**
- Background: `#D63D4A` (filled) / transparent (outline)
- Text: `#FFFFFF` (filled) / `#AB2B36` (outline)
- Border: 1px solid `#AB2B36` (outline)
- Radius: 4px
- Padding: 0 8px
- Font: 15px / 400
- Use: 강조 / 신규 / 중요 (적색 포인트)

**Danger**
- Background: `#DE3412` (filled) / transparent (outline)
- Text: `#FFFFFF` (filled) / `#BD2C0F` (outline)
- Border: 1px solid `#BD2C0F` (outline)
- Radius: 4px
- Padding: 0 8px
- Font: 15px / 400
- Use: 오류 / 반려

**Warning**
- Background: `#FFB114` (filled) / transparent (outline)
- Text: `#1E2124` (filled — warning 50 배경 위 텍스트는 검정으로 대비 확보) / `#8A5C00` (outline)
- Border: 1px solid `#8A5C00` (outline)
- Radius: 4px
- Padding: 0 8px
- Font: 15px / 400
- Use: 주의

**Success**
- Background: `#228738` (filled) / transparent (outline)
- Text: `#FFFFFF` (filled) / `#267337` (outline)
- Border: 1px solid `#267337` (outline)
- Radius: 4px
- Padding: 0 8px
- Font: 15px / 400
- Use: 완료 / 성공

**Information**
- Background: `#0B78CB` (filled) / transparent (outline)
- Text: `#FFFFFF` (filled) / `#096AB3` (outline)
- Border: 1px solid `#096AB3` (outline)
- Radius: 4px
- Padding: 0 8px
- Font: 15px / 400
- Use: 안내 / 진행 중

**Disabled**
- Background: `#8A949E` (filled) / transparent (outline)
- Text: `#FFFFFF` (filled) / `#6D7882` (outline)
- Border: 1px solid `#6D7882` (outline)
- Radius: 4px
- Padding: 0 8px
- Font: 15px / 400
- Use: 비활성

**Tag (필터 칩)**
- Background: `#FFFFFF` (Selected: `#ECF2FE`)
- Text: `#1E2124` (Selected: `#0B50D0`)
- Border: 1px solid `#CDD1D5` (Gray 20, Selected: `#256EF4`)
- Radius: pill (height와 동일)
- Padding: 8px 10px (medium)
- Font: 15px / 400 (medium)
- Use: 선택 가능한 필터 chip (`component_06_04.html`) — 삭제 버튼(`btn-delete`)이 우측에 위치

사이즈 스케일 (height / radius / padding / font):
| Size | Height | Radius | Padding | Font |
|------|--------|--------|----------|------|
| large | 40px | 40px (pill) | 8px 12px | 17px·400 |
| medium | 32px | 32px (pill) | 8px 10px | 15px·400 |
| small | 24px | 24px (pill) | 8px | 13px·400 |

추가로 **bg-light-\*** (`#ECF2FE` 등 5단계 배경 + 60단계 텍스트) 변형이 있어 부드러운 분류 라벨에 사용 (홈 배지 "아이덴티티" / "서비스 패턴" 등).

### Tabs

소스: `component_04_10.html`. 수평 탭 라인 + 키보드 좌우 탐색 (`role="tablist"` / `aria-selected`).

**Horizontal Tab**
- Background: transparent
- Text: `#464C53` / 400 (비활성), `#256EF4` / 700 (활성)
- Border: 활성 하단 2px solid `#256EF4`
- Use: 페이지 내 섹션 전환 — 활성 탭만 하단 보더 강조

### Toasts

모바일 알림 — `component_12_05.html` / `component_12_06.html`.

**Toast**
- Background: `#1E2124`
- Text: `#FFFFFF`
- Radius: 8px
- Padding: 16px
- Use: 화면 중앙 또는 하단 카드 — 3초 자동 닫힘

**Snackbar**
- Background: `#1E2124`
- Text: `#FFFFFF`
- Radius: 0 (풀-블리드 띠)
- Padding: 16px
- Use: 하단 풀-블리드 띠 — 액션 버튼 포함 가능 (예: "되돌리기"), 4초 자동 닫힘

### Tooltips

소스: `component_08_*`.

**Tooltip**
- Background: `#1E2124`
- Text: `#FFFFFF`
- Radius: 12px
- Padding: 8px
- Use: 보조 설명 — 화살표 8px / 400ms fade

**Help Panel**
- Background: `#FFFFFF`
- Text: `#1E2124`
- Border: 1px solid `#B1B8BE`
- Use: 우측에서 슬라이드-인 측면 패널 — 폼 도움말·정책 안내 (우측 영역에서 펼쳐짐)

**Coachmark**
- Background: rgba(0,0,0,0.5) overlay + `#FFFFFF` 카드
- Text: `#1E2124`
- Radius: 8px
- Use: 페이지 첫 방문 시 단계별 가이드 오버레이 + 점진적 disclosure

### Pagination / Breadcrumb / Side Menu

보조 내비게이션 (`component_03_*`). 캐노니컬 스키마에 1:1로 대응하지 않아 프로즈로 보존합니다.

- **Pagination**: 숫자 버튼 40×40 / 활성 `#256EF4` 배경 + 흰색 / hover gray 5
- **Breadcrumb**: 13px·400 / `#464C53` / `>` 구분자 / 마지막 항목 `#1E2124` (현재 위치)
- **Side Menu**: 좌측 고정 / 활성 항목 좌측 4px bar `#256EF4` + 배경 `#ECF2FE` + 텍스트 `#0B50D0`/700

### Step Indicator / Spinner

진행 표시 (`component_07_*`). 캐노니컬 variant에 매핑되지 않으므로 프로즈로만 기록합니다 (참고용).

- **단계 표시기**: 1→2→3 진행 표시. 활성 단계 `#256EF4` 배경 + 흰색 번호. 완료 단계 `#228738`(Success) 체크. 비활성 `#CDD1D5` 배경 + `#6D7882` 번호.
- **스피너**: 24/32/48px 원형 + `#256EF4` arc / `prefers-reduced-motion`에서 정적 상태 점선으로 대체.

### Mobile-only

소스: `component_12_*`. 뒤로가기 / 바텀시트 / 수량토글 / 토스트 / 스낵바 / 탭바 / 스플래시 스크린 / 범위 슬라이더 — 위 Toasts 등 해당 variant에서 다룹니다.

§4 노트 — 모든 컴포넌트는 `--krds-light-*` (일반 모드)와 `--krds-high-contrast-*` (선명한 화면 모드) 두 토큰 레이어를 동시에 가지며, 다크 모드 전환은 같은 컴포넌트가 토큰만 바꿔 끼우는 방식으로 동작합니다.

## 5. Layout Principles

### Spacing System — 8-Point Grid

`--krds-padding-*` 스케일 (라이브 토큰):

| Token | Value | Use |
|-------|-------|-----|
| padding-1 | 2px | hairline 간격 |
| padding-2 | 4px | 아이콘 inner padding |
| padding-3 | 8px | 배지·태그 padding |
| padding-4 | 10px | xsmall button padding |
| padding-5 | 12px | small button padding |
| padding-6 | 16px | input padding / info panel vertical |
| padding-7 | 20px | large button padding |
| padding-8 | 24px | **표준 콘텐츠 padding / gutter** |
| padding-9 | 32px | 섹션 간 여백 |
| padding-10 | 40px | **모달 padding** |

모든 값이 8-pt grid의 배수(2/4/8/16/24/32/40) 또는 KRDS 보조 단위(10/12/20). 컴포넌트 내부 패딩은 padding-6 (16px), padding-8 (24px), padding-10 (40px)이 표준.

### Grid & Container — Breakpoints

| Name | Viewport | Columns | Gutter | Screen Margin |
|------|----------|---------|--------|----------------|
| small | 360px~ | 4 | 16px | 16px |
| medium | 768px~ | 8 | 16px | 24px |
| **large** | **1024px~** | **12** | **24px** | **24px** |
| xlarge | 1280px~ | 12 | 24px | 24px |

- 데스크톱: **콘텐츠 영역 최대 1200px** (`--krds-contents-size`), 가운데 정렬, 좌우 24px gutter — 1248px 디바이스 이상에서 폭 고정, 미만에서는 비례 축소
- 표준형 스타일은 xsmall(<360px)를 최적화 대상에서 제외
- 확장형 스타일 (자유 폭): 3~6단계 브레이크포인트로 가변, 단 컬럼/가터/마진 규칙은 동일

### Sub-page Layout

브레이크포인트 large 이상에서 다음 5 영역으로 구성:
1. **Header** — GNB + 유틸리티 (글자·화면 설정 / 검색 / 전체메뉴)
2. **Left menu (선택)** — 사이드 메뉴 (깊은 IA)
3. **Main contents** — 본문 (콘텐츠 내 탐색 anchor 포함)
4. **Right menu (선택)** — 콘텐츠 내 탐색 (플로팅) / 도움 패널 (slide-in)
5. **Footer** — 운영기관 식별자 + 정책 링크 + 면책 + 공식 배너

### Whitespace Philosophy
- **밀도 < 여백**: 정부 사이트는 한 화면에 많은 정보를 보여줘야 하지만, KRDS는 그 안에서도 **충분한 vertical rhythm**을 유지합니다. 섹션 간 64~80px (padding-9 + padding-10 조합)의 여백이 시각적 피로를 줄입니다.
- **그림자보다 보더**: 영역 분리는 거의 항상 1px 보더(`#58616A` 강 / `#B1B8BE` 약 / `#CDD1D5` 부드러움)와 라운드로 처리. 그림자는 모달 / 드롭다운 / 툴팁에만 한정.
- **GNB 56px / x-large CTA 64px**: 헤더 높이와 핵심 액션 높이가 비례 — 누르기 쉬운 크기를 우선.

### Border Radius Scale (라이브 토큰)
- 2px (`--krds-radius-xsmall1/2/3`): xsmall input / 미세 요소
- 4px (`--krds-radius-small1/2/3`): 배지 / xsmall 버튼
- 6px (`--krds-radius-medium1/2`): small·medium 버튼 / small select
- 8px (`--krds-radius-medium3/4`): **표준 라운드** — 패널 / 카드 / large·xlarge 버튼 / 표준 input
- 10px (`--krds-radius-large1/2`): xlarge input (검색)
- 12px (`--krds-radius-xlarge1/2`): **모달**
- 1000px (`--krds-radius-max`): 원형 컨트롤 / pill 태그

### Basic Patterns (KRDS 기본 패턴)

KRDS는 컴포넌트보다 상위 단위로 **12개 기본 패턴(Basic Patterns)**을 공식 운영합니다 — 컴포넌트 조합으로 반복되는 핵심 과업을 수행하는 인터페이스 세트입니다 ([기본 패턴 summary](https://www.krds.go.kr/html/site/global/global_summary.html)). 모든 패턴은 페이지 레이아웃 구성 규칙으로 작동하며, "사용성·접근성·인터랙션 가이드·플랫폼 고려사항"을 함께 명시합니다.

| # | 패턴 | URL | 1-line purpose |
|---|------|-----|----------------|
| 1 | 개인 식별 정보 입력 | `global/global_01.html` | 성명·생년월일·연락처 등 PII 수집 — 수집 필요성·목적 명시 + 접근 가능한 입력 방식 |
| 2 | 도움 (Help) | `global/global_02.html` | 사용자 숙련도에 맞춰 인터페이스 작동·과업 플로 안내를 제공 |
| 3 | 동의 (Consent) | `global/global_03.html` | 약관 열람·동의 표시 + 안내 정보 확인 인터페이스 |
| 4 | 목록 탐색 | `global/global_04.html` | 관련 데이터를 리스트로 구성 — 일관된 포맷 + 특정 항목에 대한 액션 |
| 5 | 사용자 피드백 | `global/global_05.html` | 화면·기능에 대한 평가·민원·제안을 주 과업을 방해하지 않고 수집 |
| 6 | 상세 정보 확인 | `global/global_06.html` | 상세 페이지의 콘텐츠 구조·시각 위계·복수 콘텐츠 포맷 표시 표준 |
| 7 | 오류 (Error) | `global/global_07.html` | 시스템 과업 실패 시 표시 방식·사용성·접근성 요건 |
| 8 | 입력폼 (Input Form) | `global/global_08.html` | 1개 이상의 입력 컨트롤로 구성된 데이터 입력·전송 섹션 |
| 9 | 첨부파일 | `global/global_09.html` | 다운로드 가능한 첨부 파일 표시 — 링크 유형·접근성·인터랙션 |
| 10 | 필터링·정렬 | `global/global_10.html` | 사용자 속성·기준에 따라 데이터 항목을 선택적으로 표시·정렬 |
| 11 | 확인 (Confirmation) | `global/global_11.html` | 되돌릴 수 없는 결과를 가진 행위 직전에 의도 재확인 다이얼로그 |
| 12 | 모바일 알림 | `global/global_12.html` | 푸시 알림 / 인앱 알림 / 알림 센터 — 서비스 변경·진행 안내 |

§4 컴포넌트(버튼·입력·셀렉트·모달 등)는 위 12개 패턴의 빌딩 블록이며, 페이지 레이아웃은 패턴 단위로 구성됩니다 — 예: 신청 페이지 = `입력폼 + 첨부파일 + 확인 + 오류` 패턴 결합.

### Service Patterns (KRDS 서비스 패턴)

기본 패턴이 페이지 단위 컴포지션이라면 **서비스 패턴 5종**은 **사용자 여정(user-journey blueprint)**입니다 — 시민이 정부 디지털 서비스를 이용하는 전형적 시나리오를 단계별로 정의합니다 ([서비스 패턴 summary](https://www.krds.go.kr/html/site/service/service_summary.html)).

| # | 패턴 | URL | Journey nodes |
|---|------|-----|----------------|
| 1 | **방문 (Visit)** | `service/service_01_01.html` | 정보 탐색 → 정보 이해 → 이동(외부 서비스 / 내부 IA). 첫인상이 형성되는 메인 화면에서 시작. |
| 2 | **검색 (Search)** | `service/service_02_01.html` | 검색어 입력 → 결과 개수 확인 → 목록 탐색 → 결과 활용 → 재검색 / 상세검색 → 종료. 7단계. |
| 3 | **로그인 (Login)** | `service/service_03_01.html` | 로그인 방식 선택 (지식·소유·생체·다요소) → 정보 입력 → 완료 → 로그아웃(사용자 / 자동 만료). |
| 4 | **신청 (Application)** | `service/service_04_01.html` | 대상 탐색 → 다단계 양식 작성 (자동입력·임시저장·첨부) → 확인 → 처리 결과 추적. 복지 / 세액 / 발급 / 예약 포함. |
| 5 | **정책정보 확인** | `service/service_05_01.html` | 정책 상세 검토 → 관련 자료 참조(보고서·매뉴얼·법령). 신규 / 갱신 자료 구분. |

서비스 패턴은 **3단계 준수 수준 (필수 / 권장 / 우수)** 체크리스트로 평가됩니다 — 모든 정부 사이트는 최소 "필수" 항목을 충족해야 합니다.

## 6. Depth & Elevation

KRDS는 별도 elevation 페이지(`style_08.html`)를 두지만 실제 사용은 4단계로 제한됩니다.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | 그림자 없음 | 페이지 콘텐츠, 카드, 패널, 입력, 버튼 — 거의 모든 표면 |
| Border-only (1) | `1px solid #B1B8BE` 또는 `#CDD1D5` | 카드 / 표 / 입력 — 영역 분리는 보더로 |
| Drop (2) | `0 0.2rem 0 0 rgba(0,0,0,a1), 0 0.4rem 0.8rem 0 rgba(0,0,0,a2)` | 드롭다운, 툴팁 |
| Modal (3) | 동일 + 12px radius + 백드롭 black/0.5 fade | 모달 다이얼로그만 |
| Focus halo | `0 0 0 4px #256EF4` (focus ring — depth는 아니지만 z-stack 최상위) | 모든 인터랙티브 |

**그림자 철학**: 정부 사이트는 "층위가 많아 보이는" 화면을 피합니다. 시각적 평탄성(visual flatness)이 신뢰감과 예측 가능성을 만든다는 가정 — Material식 elevation 6단계가 아니라 사실상 0/1/2/3 4단계로 충분합니다.

## 7. Do's and Don'ts

### Do
- 정부 블루(`#256EF4`)는 **액션 자리에만** — Primary 버튼, 활성 링크, 활성 탭, focus ring, side-menu 활성 표시
- 본문은 17px / 400 / line-height 1.5 — 노안·저시력 사용자를 우선
- 모든 인터랙티브 요소에 가시성 높은 4px outline focus ring 적용 (`--krds-box-shadow-outline`)
- 양식 검증은 명시적 에러 라벨 + `aria-invalid` + 에러 영역 자동 포커스 + 2px border `#DE3412`
- "글자·화면 표시 설정"을 항상 헤더에 노출 — 사용자의 1차 컨트롤
- 한글 본문에 letter-spacing 0을 유지 — 인위적 자간 압축 금지 (Display만 1px)
- Pretendard GOV 또는 시스템 한글 폴백을 사용
- 색상은 매직넘버에 맞춰 선택 — primary-50 위 gray-0이면 즉시 4.5:1+ 통과
- 모든 컴포넌트는 일반 모드 / 선명한 화면 모드 두 토큰 레이어로 검증

### Don't
- Primary 50을 배경 / 일러스트 / 헤더 풀-블리드에 쓰지 말 것 — 색은 행위(action)다
- 그림자로 깊이감을 만들지 말 것 — 보더와 라운드로 충분
- 한 화면에 두 개 이상의 Primary 버튼을 같은 위계로 두지 말 것 — 첫 번째 행위가 명확해야 함
- 마케팅 카피·과장 표현 금지 — "혁신적인", "최고의", "감동의" 같은 수식어 금지
- 모션을 강조 수단으로 쓰지 말 것 — `prefers-reduced-motion` 사용자가 다수
- 정보 부재 상태에 "데이터가 없습니다" 같은 무미한 표현 금지 — 다음 행동을 안내할 것
- KWCAG 2.1 AA 미달 컬러 / 컴포넌트 사용 금지 (4.5:1 contrast 최소)
- Body 사이즈와 H4/H5 사이즈(17/15px)가 충돌하는 위계는 weight 차이(700/400)로만 구분 — 컬러 강조 금지
- 자체 폰트가 고딕 계열이 아니면 본문·제목에 사용 금지 (Display / 배너만 한정)

## 8. Responsive Behavior

### Breakpoints (재확인)
| Name | Width | Key Changes |
|------|-------|-------------|
| small | 360px+ | 단일 컬럼 4-grid, 16px gutter, GNB → 햄버거 메뉴 |
| medium | 768px+ | 2~3열 그리드 8-grid, 16~24px gutter |
| large | 1024px+ | 풀 GNB, 최대 1200px 컨텐츠 폭, 12-grid |
| xlarge | 1280px+ | 동일 1200px 컨텐츠 유지 (좌우 여백 증가) |

### Touch Targets (라이브 측정)
- Primary CTA xlarge: **64px** 높이 (양식 제출 등 핵심 액션)
- Primary CTA large: 56px / medium: 48px / small: 40px / xsmall: 32px
- 입력 필드 large: 56px / xlarge: 80px (검색)
- 셀렉트 large: 56px / medium: 48px / small: 40px
- 모바일 탭바 / 바텀시트 높이: 별도 모바일 카테고리에서 정의

### Mobile-specific Components
KRDS는 `component_12_*` 카테고리에 모바일 전용 컴포넌트 8종을 운영합니다: 뒤로가기 / 바텀시트 / 수량토글 / 토스트 / 스낵바 / 탭바 / 스플래시 스크린 / 범위 슬라이더. 모바일 컨텍스트의 인터랙션을 별도 시스템으로 인정.

### Image Behavior
- 콘텐츠 일러스트 / 사진은 1200px 컨테이너 안에서 풀-블리드 또는 16:9 / 4:3 비율
- 아이콘은 16 / 20 / 24px 그리드 (`--krds-icon--size-{xsmall..xlarge} = 1.6/1.6/2/2.4/2.4rem`)
- 접근 가능한 미디어 (`component_11_01.html`)는 캡션 / 자막 / 음성 해설 슬롯 명시

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: `#256EF4` (primary-50)
- Primary pressed / link text: `#0B50D0` (primary-60)
- Primary subtle bg: `#ECF2FE` (primary-5)
- Body text: `#1E2124` (gray-90)
- Secondary text / placeholder: `#464C53` (gray-70)
- Border strong: `#58616A` (gray-60)
- Border subtle: `#B1B8BE` (gray-30)
- Disabled surface: `#CDD1D5` (gray-20)
- Background: `#FFFFFF` (gray-0)
- Surface gray subtle: `#F4F5F6` (gray-5)
- Danger: `#DE3412` / Success: `#228738` / Information: `#0B78CB` / Warning: `#FFB114`+`#9E6A00`(text)

### Example Component Prompts
- "Primary 버튼 xlarge: `#256EF4` 배경 / 흰색 텍스트 / 19px·400 / 8px radius / 0 24px padding / 64px 높이. Hover `#0B50D0`, pressed `#083891`, focus ring 4px `#256EF4`."
- "필수 입력 텍스트 필드 large: 흰색 배경 / `#58616A` 1px 보더 / 8px radius / 17~19px·400 / 56px 높이 / `#464C53` placeholder / focus 시 `#256EF4` 4px halo. 라벨 옆 빨간 별표(*) + `aria-required`."
- "Error 텍스트 필드: 동일 + 보더 `2px solid #DE3412` + 하단 helper text `#DE3412` 15px·400 + `aria-invalid='true'` + 에러 영역 자동 포커스."
- "Light Primary 안내 패널: `#ECF2FE` 배경 / 8px radius / 16px 24px padding / `#0B50D0` 강조 + `#1E2124` 본문."
- "Outline Primary 배지: 투명 / `#0B50D0` 텍스트 / `#256EF4` 1px 보더 / 4px radius / 0 8px padding / 15px·400 / 24px 높이."
- "Tertiary 버튼 large: 투명 / `#1E2124` / `#58616A` 1px / 8px radius / 0 20px / 56px. 취소·초기화·닫기."
- "Select large: 흰색 / `#58616A` 1px / 6px radius / 0 48px 0 16px / 19px·400 / 56px. Error 시 `2px solid #AB2B36` (Point 60 — 셀렉트는 Danger가 아닌 Point를 쓴다)."
- "Tag 필터 칩 large: 흰색 / `#CDD1D5` 1px / 40px radius (pill) / 8px 12px / 17px·400 / 40px. Selected 시 `#ECF2FE` 배경 + `#256EF4` 보더 + `#0B50D0` 텍스트."
- "Modal medium: 560px 폭 / `#FFFFFF` / 12px radius / 40px padding / drop shadow + black/0.5 백드롭 fade-in 400ms."

### Iteration Guide
1. 컬러는 매직넘버 룰을 따른다 — primary-50 위 gray-0 / gray-90 / white를 첫 후보로
2. 라운드는 2 / 4 / 6 / 8 / 10 / 12 / 1000px 일곱 단계만
3. 본문은 17px / 400 / 1.5 line-height가 기본 (16px이 아님)
4. 컴포넌트 사이즈 5단계: xsmall(32) / small(40) / medium(48) / large(56) / xlarge(64) — 버튼·input·select 모두 동일
5. 모든 인터랙티브 요소에 4px outline focus ring (`#256EF4`) 필수
6. 그림자 사용은 모달 / 드롭다운 / 툴팁으로 한정 — 카드는 보더로
7. `aria-*` 속성, 키보드 탐색, KWCAG 2.1 AA 색대비를 토큰 단계부터 만족시킬 것
8. 일반 모드와 선명한 화면 모드 두 토큰 레이어를 동시에 검증
9. 모션은 400ms / ease-in-out 표준, `prefers-reduced-motion: reduce`에서 즉시 전환

---

## 10. Voice & Tone

KRDS의 보이스는 **공공 서비스 안내 데스크의 화법**입니다 — 정중하고(`-합니다`/`-해 주세요`), 절제되며, 사용자를 평가하거나 설득하려 들지 않습니다. 마케팅 감탄("놀라운", "혁신적인", "최고의")은 금지이고, 동시에 권위적 명령("입력하라", "확인할 것")도 피합니다. 기본 어미는 **하십시오체(`-합니다`)와 해요체의 정중한 변형(`-해 주세요`, `-해 주십시오`)**의 혼용이며, 페이지 헤드라인은 명사형으로 짧게 — "**모두를 위한 디지털 서비스 경험**" — 행위 문장은 동사형으로 — "시작하기", "신청하기", "자세히 보기". 영문 카피가 필요한 경우 plain English UK Gov 스타일로 — *"Apply now"* 가 *"Get started today!"* 보다 우선합니다.

| Context | Tone |
|---|---|
| 페이지 헤드라인 | 명사형 한 줄 ("모두를 위한 디지털 서비스 경험"). 마침표·느낌표 없음. |
| Primary CTA | 동사 + "기" 형태 ("시작하기", "신청하기", "확인하기"). 짧고 행위 중심. |
| Secondary CTA | "자세히 보기", "이전 단계", "취소" — 부가 / 되돌리기 액션. |
| 양식 라벨 | 명사형 ("성명", "연락처", "주소"). 라벨이 곧 항목 이름. |
| 필수 표시 | 라벨 옆 빨간 별표 + 스크린리더용 "필수 입력 항목입니다" 보조 텍스트. |
| 검증 오류 | 무엇이 / 왜 / 어떻게 — "올바른 이메일 형식이 아닙니다. example@domain.kr 형식으로 입력해 주세요." |
| 빈 상태 | "표시할 내용이 없습니다" + 다음 행동 안내. "데이터가 없습니다" 단독 사용 금지. |
| 성공 메시지 | "신청이 완료되었습니다." 과거 종결형, 한 문장. 감탄사 없음. |
| 도움말 | "이 항목은 ~을(를) 위해 수집됩니다." 수집 목적·근거를 평문으로 명시. |
| 긴급 공지 | "현재 ~ 서비스가 일시 중단되었습니다. 자세한 내용은 공지사항을 확인해 주세요." 사실 + 다음 행동. |

**금지 표현.** "혁신적인", "차세대", "최고의", "고객님께서는 ~해 주시기 바랍니다" (지나친 격식), "데이터가 없습니다", "오류가 발생했습니다" 단독 사용, "잘 모르시겠다면" (사용자 능력 평가), 영문 보일러플레이트 "Oops, something went wrong". 어려운 한자어·일본식 행정 용어는 **「쉬운 우리말 쓰기」(국립국어원·행정안전부 권장)** 원칙에 따라 평이한 한국어로 치환 (예: "기재하다" → "쓰다 / 적다", "취하한다" → "취소한다", "당해 연도" → "올해").

**Voice samples.**

- `모두를 위한 디지털 서비스 경험` — 홈 헤드라인 (페이지 제목). <!-- verified: https://www.krds.go.kr/html/site/index.html, 2026-05 -->
- `시작하기` — Primary CTA (xlarge, `#256EF4` / 흰색 / 64px). <!-- verified: krds.go.kr 홈, 2026-05 -->
- `자세히 보기` — 카드 내부의 x-large text 버튼 (보조 액션). <!-- verified: krds.go.kr 홈, 2026-05 -->
- `글자·화면 설정` — 헤더 유틸리티 버튼 (a11y 1차 컨트롤). <!-- verified: krds.go.kr 전 페이지, 2026-05 -->
- `통합검색` / `전체메뉴` — GNB 액션 버튼. <!-- verified: krds.go.kr, 2026-05 -->
- `디자인 스타일 / 컴포넌트 / 기본 패턴 / 서비스 패턴 / 소식·소통 / KRDS 소개` — GNB 카테고리 6개. <!-- verified: krds.go.kr, 2026-05 -->
- `누구나 쉽게 사용할 수 있는 공공 웹·앱` — 행정안전부 KRDS 소개 문구. <!-- cited: 행정안전부 보도자료, 2024 -->
- `KRDS는 공공 웹·앱이 일관된 사용자 경험을 제공할 수 있도록 디자인 토큰과 컴포넌트를 표준화합니다.` — 일러스트레이션 (브랜드 문장 패턴, 실제 페이지 카피의 톤을 재구성). <!-- illustrative -->

## 11. Brand Narrative

KRDS(대한민국 정부 디자인 시스템, Korea Republic Design System)는 **행정안전부(Ministry of the Interior and Safety, MOIS)**가 주관하여 2024년 4월에 공식 공개한 범정부 UI/UX 디자인 시스템입니다. 정부는 2023년 전자정부 서비스 이용 실태조사에서 "동일한 행동을 반복적으로 요청한다", "표현이 일관되지 않다", "어려운 행정 용어가 많다"는 핵심 피드백을 받았고, 이를 해소하기 위해 2023년 7월부터 12월까지 **범정부 디자인시스템 구축 사업**을 진행한 뒤 ([행정안전부 보도자료](https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=115144), [대한민국 정책브리핑](https://m.korea.kr/briefing/pressReleaseView.do?newsId=156640589)), 2024년 4월 공식 사이트 `www.krds.go.kr`을 통해 가이드라인·디자인 토큰·컴포넌트 라이브러리(Figma)·HTML 마크업을 일반 공개했습니다. 영문명은 **Korea Design System / Korea Republic Design System**으로 표기되며, 영문 자료에서는 *Pan-Government UI/UX Design System*으로 소개되기도 합니다 ([MOIS 영문 공지](https://www.mois.go.kr/eng/bbs/type002/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000022&nttId=118313)).

KRDS의 적용 대상은 **대한민국 정부 상징(Government Symbol)을 사용하는 모든 기관**의 웹·모바일 웹·앱입니다 — 중앙 행정기관, 소속기관, 공공기관, 지방자치단체가 포함되며, 시스템의 목적은 (1) 디지털 약자(고령자·장애인·저시력 사용자)를 포함한 모두에게 동일한 사용 경험을 제공하고, (2) 디자이너와 개발자가 같은 토큰·컴포넌트를 공유함으로써 공공 서비스의 **품질 편차를 줄이는 것**입니다 ([Design Compass — KRDS 소개](https://designcompass.org/2024/04/17/krds/), [Design Compass EN — Launch announcement](https://designcompass.org/en/2025/01/22/krds-start/)). 정책 맥락에서는 **「국가정보화 기본법」, 「장애인차별금지 및 권리구제 등에 관한 법률(장차법)」, 「웹 접근성 국가표준(KWCAG 2.1 / KS X OT 0003)」**이 공공기관 웹에 WCAG 2.1 AA 동등 이상의 접근성을 법적으로 요구하고 있으며 ([TPGi — South Korea Disability Discrimination Act](https://www.tpgi.com/south-koreas-disability-discrimination-act-kiosk-web-mobile-accessibility/), [AAAtraq — Digital Accessibility in South Korea](https://aa.aaatraq.com/news/2025/08/evolving-digital-accessibility-south-korea)), KRDS는 그 기술적 구현 표준 역할을 담당합니다.

비교 좌표는 분명합니다 — KRDS는 영국의 **[GOV.UK Design System](https://design-system.service.gov.uk/)**, 미국의 **[U.S. Web Design System (USWDS)](https://designsystem.digital.gov/)**, 싱가포르의 **[Singapore Government Design System](https://www.designsystem.tech.gov.sg/)**와 같은 계보에 속하는 **국가 단위 공공 디자인 시스템**입니다. 한국의 이전 표준(과거 "전자정부 표준프레임워크 UI 가이드", 각 부처 개별 가이드)을 통합·승계하며, 디자인 토큰 / 컴포넌트 / 마크업이 한 곳에서 공개·버전 관리된다는 점이 차이입니다 ([HEROPY.DEV — KRDS 소개](https://www.heropy.dev/s/68), [나무위키 — 범정부 UI/UX 디자인 시스템](https://namu.wiki/w/%EB%B2%94%EC%A0%95%EB%B6%80%20UI/UX%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C)).

KRDS가 거부하는 것: 정부 사이트마다 다른 표기와 배치(이전의 전자정부 사이트 파편화), 마케팅 톤의 카피(공공 서비스는 권유 대상이 아닙니다), 시각적 화려함을 통한 신뢰 연출(과한 그라데이션 / 일러스트 / 모션). 거부하지 않는 것: 가독성·예측 가능성·접근성. 정부 블루 `#256EF4`는 그래서 "정부의 색"이 아니라 "행위(action)의 색"으로 기능합니다 — 단 하나의 버튼이 사용자가 무엇을 해야 하는지를 결정하도록.

## 12. Principles

1. **접근성 우선 (Accessibility First).** KWCAG 2.1 AA / WCAG 2.1 AA가 법적 의무이며, KRDS는 토큰 단계부터 색대비 4.5:1(매직넘버 50), 키보드 탐색, 스크린 리더 보조 텍스트, focus 가시성(4px halo)을 강제합니다. 일반 모드와 선명한 화면 모드 두 토큰 레이어를 동시에 운영합니다. *UI implication:* 어떤 컴포넌트도 a11y 검수 없이 §4에 추가되지 않으며, color-only로 의미를 전달하는 패턴은 반려됩니다.
2. **일관성 (Consistency).** 같은 행위는 모든 정부 사이트에서 같은 형태로 — Primary 버튼은 어디서나 `#256EF4` / 8px / 19px·400 / 64px(xlarge)입니다. *UI implication:* 부처별 / 사이트별 커스텀 컬러·라운드·폰트를 새로 만들지 않습니다. 브랜드 표시가 필요한 경우 헤더의 운영기관 식별자(`component_02_02`) 슬롯에 한정.
3. **명료성 (Clarity).** 한 화면이 하나의 결정을 안내해야 합니다. Primary 버튼은 한 화면에 하나, 양식 라벨은 명사형 1개, 검증 오류는 무엇 / 왜 / 어떻게 셋을 모두 제공. *UI implication:* "확인 / 취소 / 다음 / 이전"이 모두 같은 위계로 떠 있는 화면은 위계 재배치가 필요합니다.
4. **안정성 (Predictability).** 정부 서비스는 처음 방문하는 사용자가 다수입니다 — 사이트마다 학습 곡선이 다시 시작되면 안 됩니다. 위치(헤더 / GNB / 푸터), 컴포넌트(버튼·입력·표·페이지네이션), 패턴(검색 / 신청 / 조회 / 결과)이 사이트를 옮겨도 동일하게 작동해야 합니다. *UI implication:* "신선한" 인터랙션, 비표준 컨트롤, 가독성을 희생한 시각 강조는 거부됩니다.
5. **사용자 중심 (User-Centred).** "공급자(부처)의 업무 구조"가 아니라 **시민이 하려는 행위**를 기준으로 정보를 정렬합니다. KRDS의 컴포넌트 카테고리가 "아이덴티티 / 탐색 / 레이아웃 및 표현 / 액션 / 선택 / 피드백 / 도움 / 입력 / 설정 / 콘텐츠 / 모바일"로 구성된 것이 그 증거 — 모두 사용자가 하려는 행위 분류입니다. *UI implication:* IA 회의에서 "부서별로 묶자"가 아니라 "시민이 같은 시점에 함께 처리하는 일끼리 묶자"가 기준이 됩니다.

## 13. Personas

*아래 페르소나는 KRDS가 공개적으로 지목하는 "디지털 약자 및 일반 시민" 사용자 군집을 기반으로 재구성한 가상의 인물입니다. 특정 개인을 지칭하지 않습니다.*

**김순자 (Kim Soon-ja), 68세, 대전.** 정부24에서 주민등록등본을 발급받고 국민건강보험공단 앱에서 진료 내역을 확인합니다. 노안으로 16px 본문은 자주 놓치기 때문에 헤더의 "글자·화면 설정"에서 130%로 키워 쓰며, 양식의 빨간 별표가 명확히 보이지 않으면 다음 단계로 넘어가지 못합니다. KRDS가 그를 위해 만든 것: 17px·1.5 line-height 기본 본문 + 130% 사용자 줌 + 충분한 색대비(매직넘버 50).

**박지훈 (Park Ji-hoon), 29세, 서울, 시각장애.** 스크린 리더(NVDA / VoiceOver)로 정부 사이트를 사용합니다. 본문 시맨틱이 망가져 있거나, 버튼이 `<div>`로 만들어져 있거나, focus 순서가 시각 순서와 다르면 즉시 페이지를 떠납니다. KRDS가 그를 위해 만든 것: `aria-*` 속성을 포함한 마크업, 키보드 fully navigable한 컴포넌트, 4px outline focus ring, 선명한 화면 모드.

**Sarah Kim, 34세, 미국 거주 한국 국적자.** 해외 거주 한국인 — 영문 인터페이스 옵션, plain English 안내문, 시간대 표시(KST)가 명확한 양식을 기대합니다. KRDS의 영문 모드(`English`)와 GOV.UK·USWDS 친화적인 명사형 라벨이 그의 학습 비용을 낮춥니다.

**이주임 (Lee Joo-im), 41세, 광역시 공무원.** 부처 웹사이트의 콘텐츠를 편집·게시하는 운영자. CMS에서 컴포넌트를 조립할 때 "어떤 버튼이 Primary인지", "어떤 배지가 status용인지"를 빠르게 결정할 수 있어야 합니다. KRDS는 그를 위해 11개 컴포넌트 카테고리(아이덴티티 / 탐색 / 레이아웃 및 표현 / 액션 / 선택 / 피드백 / 도움 / 입력 / 설정 / 콘텐츠 / 모바일)와 각 변형의 사용 가이드를 명시합니다.

**최민호 (Choi Min-ho), 22세, 모바일-only 사용자.** 데스크톱을 거의 사용하지 않는 청년 사용자. 정부 서비스도 스마트폰에서 끝내야 합니다. KRDS의 모바일 전용 컴포넌트 카테고리(`component_12_*` 8종 — 바텀시트 / 스낵바 / 탭바 / 뒤로가기 등)가 그를 위한 별도 시스템.

## 14. States

| State | Treatment |
|---|---|
| **Empty (검색 결과 없음)** | "검색 결과가 없습니다. 다른 키워드로 다시 시도해 주세요." + 검색어 초기화 버튼(Tertiary). 단순 "데이터가 없습니다"는 금지. |
| **Empty (신청 내역 없음)** | "신청한 내역이 없습니다." + 다음 행동 안내 ("새 신청서 작성하기" Primary 버튼). |
| **Loading (페이지 진입)** | 페이지 상단 진행 표시기(스피너 `component_07_02`) + 스켈레톤 블록 (`#F4F5F6` Gray 5). `aria-busy="true"`로 스크린 리더에 알림. |
| **Loading (양식 제출)** | Primary 버튼이 비활성화 + 내부에 inline spinner. 텍스트는 "처리 중..."으로 변경. 같은 폼을 중복 제출하지 못하도록 disabled 처리. |
| **Error (필드 검증)** | 입력 보더 **2px solid `#DE3412`** / helper text "올바른 형식이 아닙니다. example@domain.kr 형식으로 입력해 주세요." `aria-invalid="true"` + 에러 영역으로 자동 포커스 이동. |
| **Error (select)** | 보더 **2px solid `#AB2B36`** (Point 60 — Danger와 시각 구분). |
| **Error (제출 실패)** | 페이지 상단 알림 영역(긴급 공지 `component_04_02`)에 Danger 배지 + 메시지 + 재시도 버튼. 사용자가 입력한 값은 보존. |
| **Error (서버·네트워크)** | 전체 화면 대체 메시지 — "일시적으로 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해 주세요." + 새로고침 버튼 + 고객센터 안내 (전화 / 채팅). |
| **Success (저장)** | 스낵바(`component_12_06`) "저장되었습니다." 3초 자동 닫힘. critical하지 않은 가벼운 확인. |
| **Success (신청 완료)** | 전용 결과 화면 — "신청이 완료되었습니다." H1 + 접수번호 + 다음 단계 안내 + Primary 버튼 "신청 내역 확인하기". 모달이 아닌 페이지로 처리해 새로고침 / 북마크 가능. |
| **Disabled** | 회색 배경(`#CDD1D5` Gray 20) + `#6D7882` 텍스트 + cursor: not-allowed. `aria-disabled="true"`. 비활성 사유를 보조 텍스트로 명시 ("주민등록번호를 먼저 입력해 주세요"). |
| **Focus (키보드)** | 4px outline halo (`box-shadow: 0 0 0 4px #256EF4`). 모든 인터랙티브 요소에 예외 없이 적용 — KRDS의 가장 강한 a11y 규약. |
| **High Contrast Mode** | `--krds-color-high-contrast-*` 토큰 레이어가 자동 활성화 — 보더 강도 증가, 텍스트 컬러 변환(`#FFFFFF` 본문 등), focus ring 굵기 증가. OS 설정 또는 헤더 "글자·화면 설정"에서 토글. (`style_09.html` 선명한 화면 모드) |
| **사용자 줌 (90/100/110/130/150%)** | 헤더에서 사용자가 직접 선택. 모든 컴포넌트가 rem 단위(`font-size-base: 62.5%`)로 작성되어 비례 확대됨. 데스크톱 1200px 컨테이너는 150%에서도 가로 스크롤 없이 적응. |

### Service Journey States (서비스 패턴 노드별 상태)

KRDS 서비스 패턴 5종이 정의하는 사용자 여정 각 단계의 표준 상태 — 위 표가 "컴포넌트 상태"라면 아래 표는 "**여정 노드 상태**"입니다 ([service_summary](https://www.krds.go.kr/html/site/service/service_summary.html)).

| Journey node | State / treatment |
|---|---|
| **방문 (Visit) — 진입** | 메인 화면 첫 인상 — 헤드라인(명사형 한 줄) + 핵심 액션 1개(Primary xlarge 64px) + 정보 카드 그리드. 익명 사용자 가정. |
| **검색 — 입력 보조** | 검색 input xlarge(80px·24px·700) + 추천어·최근검색 dropdown. 키보드 첫 진입 시 focus halo 4px. |
| **검색 — 결과 개수 확인** | 결과 상단에 "**총 N건**" 표시(Body large bold) — 0건 시 §14 Empty 상태 전환. |
| **검색 — 결과 없음** | "검색 결과가 없습니다. 다른 키워드로 다시 시도해 주세요." + 검색어 초기화(Tertiary) + 검색 도움말(Text 버튼). |
| **로그인 — 방식 선택** | 2개 이상 인증 수단을 동등 위계로 노출 — Primary 한 개로 좁히지 않음 (생체·다요소 사용자 다수). 도움말 토글 상시 노출. |
| **로그인 — 자동 만료** | 세션 만료 직전 모달(small 400px·12px radius) + 연장 / 로그아웃 두 버튼 + 카운트다운(스크린리더 `aria-live="polite"`). |
| **신청 — 다단계 양식** | 단계 표시기(`component_07_01`) 1→2→3 활성 `#256EF4` / 완료 `#228738`. 단계별 임시저장 버튼(Tertiary) 우상단 고정. |
| **신청 — 자동입력** | 시스템 자동 입력값은 Gray 5(`#F4F5F6`) 배경 + readonly + "자동 입력된 정보입니다" 보조 텍스트. 수정 가능 시 잠금 해제 토글. |
| **신청 — 첨부 진행** | 파일 업로드 진행 표시기 + 파일명 + 삭제 칩(Tag). 용량 초과 시 §14 Error(필드 검증) 동일 처리. |
| **신청 — 제출 확인** | 모달 medium(560px) — "신청을 제출하시겠습니까?" + 최종 요약 + Primary "제출하기" / Tertiary "취소". 모달 외 영역은 백드롭 black/0.5. |
| **신청 — 결과 페이지** | 모달 아님 — 새 페이지(URL 변경) — "신청이 완료되었습니다" H1 + 접수번호 + 다음 단계 + Primary "신청 내역 확인하기". |
| **신청 — 처리 추적** | 진행 상태 배지(Information 진행 중 / Success 완료 / Warning 보완 요청 / Danger 반려) + 갱신 시각. |
| **정책정보 — 신규/갱신 구분** | 자료 카드에 "신규"(Point 적색 배지 outline) 또는 "갱신"(Information 배지 outline) 라벨 — 같은 위계 안에서 색으로만 의미를 전달하지 않도록 텍스트 라벨 필수. |

## 15. Motion & Easing

**Durations** (라이브 페이지에서 측정된 `--krds-transition-*` 토큰 기준):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | 토글 / 체크박스 상태 변경 |
| `motion-base` | **0.4s ease-in-out** (`--krds-transition-base`) | KRDS 표준 전환 — 드롭다운, 메뉴, 패널 열고 닫기, 백드롭 |
| `motion-fade` | **opacity 0.4s linear** (`--krds-transition-fade`) | 단순 opacity fade (모달 진입, 토스트) |
| `motion-collapse` | **max-height 0.4s ease** (`--krds-transition-collapse`) | 아코디언·디스클로저 max-height 전환 |
| `motion-collapse-width` | **width 0.4s ease** (`--krds-transition-collapse-width`) | 사이드 메뉴 폭 전환 |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-in-out` | KRDS 기본 | 모든 양방향 전환 (열기·닫기) |
| `ease` | 접힘 / 펼침 height/width 변화 | 아코디언 / 디스클로저 / 사이드 메뉴 |
| `linear` | opacity fade | 페이드 전용 |

**모션 자세 (Motion stance).** **스프링·바운스·오버슈트는 KRDS에서 금지됩니다.** 정부 서비스는 "재미있는" 인터랙션을 통해 신뢰를 얻지 않습니다 — 사용자가 자신이 무엇을 했는지 즉시 / 예측 가능하게 / 차분하게 알 수 있어야 합니다. 모든 전환은 400ms 안에 끝나고, easing은 ease-in-out / ease / linear 셋으로 충분합니다. **`prefers-reduced-motion: reduce`** 사용자에게는 모든 `motion-*` 토큰이 0ms로 축소되며, 페이드 / 슬라이드 / 접힘 모두 즉시 전환됩니다. 이 규칙은 a11y 권고가 아니라 KRDS의 기본 동작입니다 (정부 서비스 사용자 중 전정기관 민감성·인지장애 보유자 비율이 일반 사이트보다 높습니다).

**Signature motions.**

1. **메뉴 / 드롭다운 열기·닫기.** `400ms / ease-in-out`로 opacity + transform translateY(-4px → 0). 백드롭 없음 (full-page 모달이 아니므로). 닫힐 때 동일 시간 / 역방향.
2. **아코디언·디스클로저.** max-height `400ms / ease` 전환. 콘텐츠 fade 없음 — height 변화만으로 충분하고, fade를 더하면 글자가 흐려져 가독성이 손해.
3. **모달 진입.** opacity fade 400ms linear + 백드롭 동시 fade (black/0.5). transform 사용하지 않음 (성능 우선 / 미감 절제). 모달 자체는 12px radius `--krds-radius-xlarge1`.
4. **사이드 메뉴 폭 변경.** width `400ms / ease` (`--krds-transition-collapse-width`).
5. **Reduce motion.** 모든 위 전환이 0ms 즉시. 백드롭은 그대로 표시되되 fade 없이 즉시 가시화.

<!--
OmD v0.1 Sources — KRDS DESIGN.md (rebuilt 2026-05-08, deep-pass)

Tier 1 — Live DOM (playwright getComputedStyle, 2026-05):
- https://www.krds.go.kr/html/site/index.html (홈)
- https://www.krds.go.kr/html/site/style/style_02.html (색상 — 11단계 × 8 컬러군 full palette, 매직넘버)
- https://www.krds.go.kr/html/site/style/style_03.html (타이포그래피 — Display/Heading/Body 스케일 + Navigation/Label 토큰)
- https://www.krds.go.kr/html/site/style/style_05.html (레이아웃 — 4 브레이크포인트, 1200px 컨테이너, 8-pt grid)
- https://www.krds.go.kr/html/site/component/component_05_02.html (버튼 — Primary/Secondary/Tertiary/Text/Icon × xsmall~xlarge)
- https://www.krds.go.kr/html/site/component/component_09_03.html (텍스트 입력 — 5 사이즈 × 4 상태)
- https://www.krds.go.kr/html/site/component/component_06_03.html (셀렉트 — error border #AB2B36)
- https://www.krds.go.kr/html/site/component/component_06_04.html (태그 필터 칩 — pill 40/32/24)
- https://www.krds.go.kr/html/site/component/component_04_05.html (모달 — radius 12px, padding 40px)
- https://www.krds.go.kr/html/site/component/component_04_06.html (배지 — outline/bg × 9 의미 × 18 변형)

Token extraction (live --krds-*):
- Color palette: --krds-color-light-{primary,secondary,gray,point,danger,warning,success,information}-{5,10,20,30,40,50,60,70,80,90,95}
- Radius: small(4) / medium1-2(6) / medium3-4(8) / large(10) / xlarge(12) / max(1000)
- Padding: 1=2, 2=4, 3=8, 4=10, 5=12, 6=16, 7=20, 8=24, 9=32, 10=40
- Size-height: 2=16, 3=20, 4=24, 5=32, 6=40, 7=48, 8=56, 9=64, 10=72, 11=80
- Icon: xsmall=16, small=16, medium=20, large=24, xlarge=24
- Modal sizes: small=400, medium=560, large=760
- Transitions: base=0.4s ease-in-out / fade=opacity 0.4s linear / collapse=max-height 0.4s ease
- Focus halo: --krds-box-shadow-outline: 0 0 0 0.4rem #256EF4
- Font: --krds-font-family-base: Pretendard GOV / weight 400/700 / line-height 1.5 / letter-spacing 0

Tier 2 — Cross-check:
- getdesign.md/krds: no record / styles.refero.design: no record (정부 시스템 미수록)
- KRDS 자체가 정부 발행 canonical token catalog (Tier 1 = canonical)

Tier 3 — Philosophy / WebSearch:
- 행정안전부 보도자료, 대한민국 정책브리핑, MOIS 영문 공지
- Design Compass (KR/EN), HEROPY.DEV, 나무위키
- TPGi (장차법·KWCAG), AAAtraq (2025 a11y 동향)
- 비교 좌표: GOV.UK / USWDS / Singapore GDS

Phase 3 surfaces (basic + service patterns, 2026-05-08 deep-walk):
- https://www.krds.go.kr/html/site/global/global_summary.html (기본 패턴 인덱스 — 12 패턴 enumeration)
- https://www.krds.go.kr/html/site/global/global_01..12.html (12 기본 패턴 상세 — 모두 200, 각각 title + purpose 추출)
- https://www.krds.go.kr/html/site/service/service_summary.html (서비스 패턴 인덱스 — 5 패턴)
- https://www.krds.go.kr/html/site/service/service_01_01.html … service_05_01.html (5 서비스 패턴 상세 — 모두 200, journey node 추출)
- pattern_summary.html / intro_*.html / intro_summary.html / main_index.html → 404 (별도 principles/inclusion 페이지 미공개 — 디지털 포용 콘텐츠는 global_summary 푸터의 웹 접근성 인증 마크 + KRDS 미션 문구로 입증)

Rebuild diff vs prior pass:
- §2: Primary 50/60 분리 명시(이전 "정부 블루 + 정부 블루 딥" 표기 → 11단계 명도 팔레트 + 매직넘버)
- §2: System color 추가 (Danger #DE3412 / Success #228738 / Information #0B78CB / Warning #FFB114·#9E6A00 / Point #D63D4A)
- §3: Display/Heading/Body 3-layer scale 전체 표 추가 (이전 7행 → 30+행)
- §3: H1 = 40px (이전 34px → 40px 정정)
- §4 Buttons: 5단계 크기 라이브 측정값 (xsmall 4px/15px·400/32px ... xlarge 8px/19px·400/64px)
- §4 Inputs: 정확한 5 사이즈 측정값, error 2px solid #DE3412 (이전 "1.5px" → 2px 정정), disabled bg #CDD1D5 (이전 "#F4F6F8" → #CDD1D5 정정)
- §4 신규: Select, Tag(필터 칩), Toggle Switch, Checkbox, Radio, Tabs, Toast/Snackbar, Tooltip, Step Indicator, Pagination 추가
- §4 Modal: radius 12px (이전 "--krds-radius-xlarge1 대형 라운드" 모호 → 12px 명시), sizes 400/560/760
- §4 Badge: 9개 의미 × outline/filled = 18 변형 표 완성 (이전 4개 → 18개)
- §5: 4 breakpoints + columns/gutter/margin 정확 측정 (small 4/16/16 → medium 8/16/24 → large 12/24/24 → xlarge 12/24/24)
- §5: 8-pt grid 명시, padding 1~10 토큰 매핑 추가
- §5: Border radius 7단계 (이전 5단계 → 2/4/6/8/10/12/1000)
- §15: motion-collapse-width 추가, signature motion 5개 (이전 4개)
-->

---

**Verified:** 2026-05-08 (deep re-verification — 10 pages inspected)
**Tier 1 sources:** 10 live pages on www.krds.go.kr — index + 3 style pages (color/typography/layout) + 6 component pages (buttons/inputs/select/tag/modal/badge). 588 `--krds-color-*` tokens enumerated, full radius/padding/size-height/transition token sets extracted.
**Tier 2 sources:** getdesign.md/krds — no record / styles.refero.design — no record. KRDS 자체가 정부 발행 canonical token catalog.
**Tier 3 (Philosophy):** 행정안전부 보도자료, 대한민국 정책브리핑, Design Compass(KR/EN), TPGi(KWCAG·장차법), AAAtraq(2025 a11y 동향), GOV.UK / USWDS / Singapore GDS 비교 좌표.
**Style ref:** `yeogiotte` (한국 공공·민간 정중한 한국어 톤 참조), `karrot` (한국 voice 형식 참조).
**Conflicts unresolved:** none. KRDS는 단일 정부 발행 시스템이므로 부처별 변형 / 외부 aggregator 충돌 없음.
