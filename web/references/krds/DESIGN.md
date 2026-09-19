# KRDS Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

### Visual Theme & Atmosphere

KRDS는 대한민국 행정·공공기관 웹·앱이 공유하는 정부 표준 디자인 시스템입니다. 화면은 마케팅 브랜드가 아니라 **공공 서비스의 도구**처럼 보이도록 설계되었습니다 — 순백 배경(`#ffffff`) 위에 거의 검정에 가까운 본문(`#1E2124`), 그리고 신뢰감을 주는 정부 블루(`#256EF4`)가 단 하나의 강조색으로 작동합니다. 강조색은 그래픽 장식이 아니라 행위(action), 즉 "신청", "확인", "다음 단계"가 있는 자리에만 나타납니다. 영역 분리는 그림자가 아니라 **얇은 회색 보더**(`#58616A` 1px / `#B1B8BE` 1px / `#CDD1D5` 1px)와 **8px 라운드**로 처리되어, 시각적 무게가 일관되게 가라앉아 있습니다. 이 절제는 기관별 취향보다 시민의 예측 가능성과 접근성을 먼저 두는 공공 제품의 정체성입니다.

이 시스템은 "디지털 정부서비스 UI/UX 가이드라인"을 표준 토큰·컴포넌트로 정착시킨 것으로, 행정안전부(MOIS)가 2024년 4월에 공식 배포했습니다 ([행정안전부 보도자료](https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=115144)). 분위기를 한 줄로 요약하면 **"읽기 쉽고, 예측 가능하며, 접근성을 우선하는 공공 유틸리티"**입니다. 화려한 일러스트, 그라데이션, 톤다운된 마케팅 영문 카피, 과장된 모션은 의도적으로 배제되어 있습니다.

### Brand Narrative

KRDS(대한민국 정부 디자인 시스템, Korea Republic Design System)는 **행정안전부(Ministry of the Interior and Safety, MOIS)**가 주관하여 2024년 4월에 공식 공개한 범정부 UI/UX 디자인 시스템입니다. 정부는 2023년 전자정부 서비스 이용 실태조사에서 "동일한 행동을 반복적으로 요청한다", "표현이 일관되지 않다", "어려운 행정 용어가 많다"는 핵심 피드백을 받았고, 이를 해소하기 위해 2023년 7월부터 12월까지 **범정부 디자인시스템 구축 사업**을 진행한 뒤 ([행정안전부 보도자료](https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=115144), [대한민국 정책브리핑](https://m.korea.kr/briefing/pressReleaseView.do?newsId=156640589)), 2024년 4월 공식 사이트 `www.krds.go.kr`을 통해 가이드라인·디자인 토큰·컴포넌트 라이브러리(Figma)·HTML 마크업을 일반 공개했습니다. 영문명은 **Korea Design System / Korea Republic Design System**으로 표기되며, 영문 자료에서는 *Pan-Government UI/UX Design System*으로 소개되기도 합니다 ([MOIS 영문…
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Find and understand a government service, then move to where it is delivered

- Search for a service or notice and work through the results to the right one

- Sign in with the method the service requires, and sign out or time out safely

- Apply through a multi-step form with attachments, then track how it was handled

- Read a policy in detail and follow it to the reports, manuals or law behind it
<!-- design-md:claim-end -->

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.body**: `#464c53`
- **color.border-strong**: `#58616a`
- **color.brand**: `#256ef4`
- **color.canvas**: `#ffffff`
- **color.danger**: `#de3412`
- **color.foreground**: `#1e2124`
- **color.hairline**: `#b1b8be`
- **color.information**: `#0b78cb`
- **color.muted**: `#6d7882`
- **color.on-primary**: `#ffffff`
- **color.point**: `#d63d4a`
- **color.primary**: `#256ef4`
- **color.primary-deep**: `#083891`
- **color.primary-hover**: `#0b50d0`
- **color.secondary**: `#346fb2`
- **color.success**: `#228738`
- **color.surface**: `#f4f5f6`
- **color.surface-primary**: `#ecf2fe`
- **color.warning**: `#ffb114`
- **radius.default**: `6px`
- **radius.full**: `1000px`
- **radius.lg**: `8px`
- **radius.md**: `6px`
- **radius.sm**: `4px`

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
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display-large | declared type role: display-large |  | 60px | 700 | 1.5 | 1px |
| display-small | declared type role: display-small |  | 36px | 700 | 1.5 | 1px |
| heading-xlarge | declared type role: heading-xlarge |  | 40px | 700 | 1.5 | 1px |
| heading-large | declared type role: heading-large |  | 32px | 700 | 1.5 | 1px |
| heading-medium | declared type role: heading-medium |  | 24px | 700 | 1.5 |  |
| heading-small | declared type role: heading-small |  | 19px | 700 | 1.5 |  |
| heading-xsmall | declared type role: heading-xsmall |  | 17px | 700 | 1.5 |  |
| body-large | declared type role: body-large | Pretendard GOV | 19px | 400 | 1.5 |  |
| body-medium | declared type role: body-medium |  | 17px | 400 | 1.5 |  |
| body-small | declared type role: body-small |  | 15px | 400 | 1.5 |  |
| body-xsmall | declared type role: body-xsmall |  | 13px | 400 | 1.5 |  |

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | KRDS 공식 typography foundation이 `Pretendard GOV`를 기본 서체로 지정합니다. |
| Live surface-use | `krds.go.kr`의 수집된 10개 surface에서 loaded/high-confidence 사용을 확인했습니다. |
| Official distributed asset | KRDS가 공식 웹폰트와 구현 자산을 공개합니다. |
| Declared-only | 기관 확장용 고딕 계열 예시는 현재 KRDS 기본 제품 사용으로 승격하지 않습니다. |
| Unresolved | 개별 도입 기관의 자체 서체는 해당 기관 surface를 별도로 검증하기 전에는 미확정입니다. |

Specimen availability is separate from family truth: 공식 자산을 로드할 수 있을 때만 실제 specimen을 렌더합니다.

### Font Family
- **Primary**: `"Pretendard GOV", "Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`
- **설계 원칙**: KRDS 전용 빌드인 **Pretendard GOV**는 라이선스가 명확하고(오픈 폰트), 한글·라틴·기호의 메트릭이 균일하여 정부 문서에서 자주 발생하는 혼용 표기(예: "민원 24", "행정 API")가 정렬·자간 어긋남 없이 표현됩니다. 라이브 페이지에서 `--krds-font-family-base: Pretendard GOV`로 확인됨.
- **확장형 스타일** (자체 폰트를 가진 기관의 경우): 노토 산스 / 나눔 고딕 / 스포카 한 산스 등 고딕 계열만 허용. 자체 폰트가 고딕이 아니면 본문·제목에 사용 금지.

### 3-Layer Type Scale

KRDS는 **Display / Heading / Body** 3계층 + Navigation / Label 시멘틱 토큰으로 구성됩니다. 모두 line-height 150%, regular 400 / bold 700 두 두께만 사용.

**Display** (마케팅 / 배너 전용 — 본문 사용 금지)

<!-- design-md:section components-states -->
## 4. Components & States

### Component Stylings

KRDS 컴포넌트는 5단계 크기 토큰(xsmall/small/medium/large/xlarge)을 공유하며 모든 변형이 `aria-disabled` / 키보드 포커스 / 4px focus-ring halo를 기본 제공합니다. 각 variant 블록은 default 크기(Button=medium, Input=large, Select=large)의 측정값을 기준으로 하고, 크기 스케일은 표/프로즈로 보조합니다.

#### Buttons

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

### States

| State | Treatment |
|---|---|
| **Empty (검색 결과 없음)** | "검색 결과가 없습니다. 다른 키워드로 다시 시도해 주세요." + 검색어 초기화 버튼(Tertiary). 단순 "데이터가…

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

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

### Breakpoints (재확인)
| Name | Width | Key Changes |
|------|-------|-------------|
| small | 360px+ | 단일 컬럼 4-grid, 16px gutter, GNB → 햄버거 메뉴 |
| medium | 768px+ | 2~3열 그리드 8-grid, 16~24px gutter |…

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice & Tone

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

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

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

### Quick Color Reference
- Primary action: `#256EF4` (primary-50)
- Primary pressed / link text: `#0B50D0` (primary-60)
- Primary subtle bg: `#ECF2FE`…
