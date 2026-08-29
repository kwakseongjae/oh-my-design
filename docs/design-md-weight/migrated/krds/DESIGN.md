# KRDS Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

KRDS (대한민국 정부 디자인 시스템, Korea Republic Design System / Korea Design System) is the pan-government UI/UX design system of the Republic of Korea, published by the Ministry of the Interior and Safety (행정안전부, MOIS). This contract covers the official KRDS documentation surfaces the source inspected: the homepage at `https://www.krds.go.kr/html/site/index.html`; the colour, typography, and layout foundation pages; and the button, text-input, select, modal, badge, and tag component pages. Layout and tag evidence is the source's still-fresh 2026-05 official-document capture; the other named pages were recaptured on 2026-07-11. Every value below stays attached to the surface that established it. Ministry, agency, and local-government services that adopt KRDS are separate surfaces; this file does not treat a KRDS documentation measurement as a token of those services. That documentation-versus-adopting-service split is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

The source records a restrained public-service layer: `#ffffff` / `#FFFFFF` canvas, near-black body `#1e2124` / `#1E2124`, and a single action colour, Government Blue Primary 50 `#256ef4` / `#256EF4`. Pretendard GOV is the loaded family. Separation is by 1px grey borders (`#58616A` / `#B1B8BE` / `#CDD1D5`) and a radius scale, not by stacked shadow. The hex values, family, borders, and radius steps are recorded. Characterizations built on them — a public-service tool rather than a marketing brand, one emphasis colour that appears only where an action sits, visual weight held down by border and radius, restraint as civic predictability — are a derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

The source's narrative facts, kept as narrative context and not as interface tokens: KRDS settles the "디지털 정부서비스 UI/UX 가이드라인" into tokens and components; MOIS released it in April 2024 ([행정안전부 보도자료](https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=115144)). English materials also use *Pan-Government UI/UX Design System* ([MOIS 영문 공지](https://www.mois.go.kr/eng/bbs/type002/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000022&nttId=118313)). The 2023 전자정부 서비스 이용 실태조사 recorded "동일한 행동을 반복적으로 요청한다", "표현이 일관되지 않다", "어려운 행정 용어가 많다"; a 범정부 디자인시스템 구축 사업 ran July–December 2023, then `www.krds.go.kr` opened with guidelines, tokens, a Figma library, and HTML markup ([대한민국 정책브리핑](https://m.korea.kr/briefing/pressReleaseView.do?newsId=156640589)). The applying set, as the source states it, is every institution that uses the 대한민국 정부 상징 (Government Symbol) — 중앙 행정기관, 소속기관, 공공기관, 지방자치단체 — on web, mobile web, and app. The system's purpose, as the source states it, is (1) 디지털 약자(고령자·장애인·저시력 사용자)를 포함한 모두에게 동일한 사용 경험을 제공하고, (2) 디자이너와 개발자가 같은 토큰·컴포넌트를 공유함으로써 공공 서비스의 품질 편차를 줄이는 것. The legal frame the source names is 「국가정보화 기본법」, 「장애인차별금지 및 권리구제 등에 관한 법률」(장차법), and 「웹 접근성 국가표준 KWCAG 2.1 (KS X OT 0003)」, requiring WCAG 2.1 AA-equivalent accessibility for public bodies. YAML `ds.description` also writes `WCAG/KWCAG 2.2`; that byte form is a separate identity-string writing and is not collapsed into the body spelling. The source places KRDS in the same public-system lineage as the GOV.UK Design System, the U.S. Web Design System (USWDS), and the Singapore Government Design System; those names are comparison coordinates, not token sources. It also names Korea's previous standard, the "전자정부 표준프레임워크 UI 가이드" and 각 부처 개별 가이드, as what KRDS consolidates. What the source says KRDS refuses: different labelling and placement on every government site, marketing-tone copy, and trust-through-spectacle (과한 그라데이션 / 일러스트 / 모션). What it does not refuse: 가독성·예측 가능성·접근성. MOIS defines KRDS as the means for "**누구나 쉽게 사용할 수 있는 공공 웹·앱**". The live site footer shows a 웹 접근성 인증 마크 ([기본 패턴 summary](https://www.krds.go.kr/html/site/global/global_summary.html)). The one-line atmosphere summary **"읽기 쉽고, 예측 가능하며, 접근성을 우선하는 공공 유틸리티"**, the sentence that contrast 4.5:1 (magic number 50), the 4px focus halo, user zoom 90–150%, and 선명한 화면 모드 are "기본 동작" rather than a recommendation, the closing line that Government Blue functions as "행위(action)의 색" rather than "정부의 색", the reading of GOV.UK / USWDS / Singapore as comparison coordinates rather than token sources, and the statement that official history and the press release do not by themselves supply interface tokens, are a derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These three name what the captured KRDS documentation surfaces are for. That naming is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation. They do not come from the source's persona section.

- Read the published KRDS homepage and start from its recorded actions — `시작하기`, `자세히 보기`, `통합검색`, `전체메뉴`, `글자·화면 설정`.
- Consult the official colour, typography, and layout foundation pages for tokens and scales.
- Read a canonical component page — button, text input, select, modal, badge, or tag — and take the recorded values into a public-service build.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section states in its own header that its entries are fictional reconstructions of publicly named groups, not specific people; those biographies are not carried here and are not re-hosted in the sidecar. Use only what the captured surfaces and the source's narrative establish at a group level: teams at Korean public institutions who implement KRDS, and citizens who use the public web and apps built from it, including the 디지털 약자 및 일반 시민 (고령자·장애인·저시력 사용자) the source names. That grouping is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

### Distinctive traits

Selecting and naming the following as distinctive traits is a derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation. The values inside them are recorded.

- 정부 블루 Primary 50 `#256EF4`(액션) + Primary 60 `#0B50D0`(텍스트·pressed) + Primary 5 `#ECF2FE`(약한 배경) — an 11-step (5–95) 단계 명도 팔레트 of which the source says UI uses three or four steps. Brand "Primary Deep" (`#0B50D0`) also names pressed state. The Primary button Active record names Primary 70 `#083891` as pressed. YAML `primary-hover` is `#0b50d0`; YAML `primary-deep` is `#083891`. Those two keys and two steps stay unmerged. Pretendard GOV is 한글·라틴·숫자 일체. System colours are 모두 50단계 base with 토큰 레이어 자동 매핑 for light/high-contrast. Gray 100 is 사용 빈도 낮음.
- Pretendard GOV as the single family for Hangul, Latin, and numerals, with a system Hangul fallback stack
- Body default 17px / 400 / line-height `1.5`; H1 Heading xlarge **40px (PC) / 28px (mobile)** / 700; Display / Heading / Body three-layer scale
- Shared five-step component size: xsmall · small · medium · large · xlarge (32 / 40 / 48 / 56 / 64px heights on buttons)
- Header **글자·화면 설정** zoom `--krds-zoom-*` at 0.9 / 1 / 1.1 / 1.3 / 1.5 — 사용자가 폰트 크기를 90% / 100% / 110% / 130% / 150%로 직접 확대
- Radius 2 / 4 / 6 / 8 / 10 / 12 / 1000px; shadow almost unused except focus outline and modal/dropdown/tooltip
- Content width 1200px (`--krds-contents-size`), gutter 24px, four breakpoints (small 360 / medium 768 / large 1024 / xlarge 1280)
- 매직넘버 contrast mapping: 40 → 3:1, 50 → 4.5:1 (AA 통과 기준), 70 → 7:1, 90 → 15:1
- System colours Danger `#DE3412` / Warning `#FFB114` / Success `#228738` / Information `#0B78CB`, plus Point `#D63D4A`
- 일반 모드 and 선명한 화면 모드 via `--krds-color-light-*` / `--krds-color-high-contrast-*` on the same components
- 4px / `0.4rem` focus halo `--krds-box-shadow-outline: 0 0 0 0.4rem #256EF4` on interactive elements — a generic Focus observation, not a `focus-visible` treatment

### Principles

These five headings and bodies are the source's own numbered list. The source's reconstruction note records that `intro_*` / `pattern_summary` URLs 404 and that a numbered principles page is unpublished; the list is retained from mission text and 행정안전부 documentation. The headings, the legal and token facts they rest on, and the *UI implication* sentences are therefore a derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

1. **접근성 우선 (Accessibility First).** KWCAG 2.1 AA / WCAG 2.1 AA as a legal duty; colour contrast 4.5:1 (magic number 50), keyboard access, screen-reader supporting text, and 4px focus halo forced from the token layer; general mode and 선명한 화면 모드 as two token layers. *UI implication:* no component is added without an a11y check; colour-only meaning is rejected.
2. **일관성 (Consistency).** The same action takes the same form across government sites — Primary at xlarge is `#256EF4` / 8px / 19px·400 / 64px. *UI implication:* agencies do not invent a new colour, radius, or font; brand display is limited to the 운영기관 식별자 slot (`component_02_02`).
3. **명료성 (Clarity).** One screen guides one decision. One Primary per screen, noun-form labels, validation errors that state 무엇 / 왜 / 어떻게. *UI implication:* a screen where "확인 / 취소 / 다음 / 이전" share one hierarchy needs re-ranking.
4. **안정성 (Predictability).** First-time users are the majority; header / GNB / footer, buttons·inputs·tables·pagination, and patterns (검색 / 신청 / 조회 / 결과) must work the same from site to site. *UI implication:* non-standard controls and visual emphasis that costs readability are refused.
5. **사용자 중심 (User-Centred).** Sort information by the citizen's act, not the supplier's org chart. The source treats the eleven component categories — 아이덴티티 / 탐색 / 레이아웃 및 표현 / 액션 / 선택 / 피드백 / 도움 / 입력 / 설정 / 콘텐츠 / 모바일 — as evidence of that sort. *UI implication:* group what a citizen handles at the same moment, not what a department owns.

### Application rules

The source's nine Do rules, kept as brand rules rather than as universal governance. The justifications inside them are a derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

- 정부 블루 (`#256EF4`) only in action places — Primary button, active link, active tab, focus ring, side-menu active mark
- Body 17px / 400 / line-height `1.5` — 노안·저시력 사용자를 우선
- Visible 4px outline focus ring on every interactive element (`--krds-box-shadow-outline`)
- Form validation as an explicit error label + `aria-invalid` + focus move to the error + 2px border `#DE3412`
- Always expose **글자·화면 표시 설정** in the header (a11y 1차 컨트롤, 스크린 리더 / 보조기기 사용자)
- Keep Hangul body letter-spacing 0 (Display only 1px)
- Use Pretendard GOV or the system Hangul fallback
- Choose colour by the magic-number rule — `primary-50 위 gray-0`이면 즉시 4.5:1+ 통과
- Verify every component on both the general and 선명한 화면 모드 token layers

### Avoid

The source's nine Don'ts. The reasons attached to them are a derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

- Do not use Primary 50 as a page background, illustration fill, or header full-bleed — the colour is action
- Do not make depth with shadow — border and radius are enough
- Do not place two or more Primary buttons at the same rank on one screen
- Do not use marketing copy or exaggeration — "혁신적인", "최고의", "감동의". Also forbidden: 권위적 명령 "입력하라", "확인할 것"; 지나친 격식; 사용자 능력 평가. 공공 서비스는 권유 대상이 아닙니다.
- Do not use motion as emphasis — `prefers-reduced-motion` users are many
- Do not use a bare "데이터가 없습니다" for absence — point to the next action
- Do not use colour or a component below KWCAG 2.1 AA (4.5:1 minimum)
- Do not distinguish colliding Body and H4/H5 sizes (17/15px) by colour; distinguish by weight 700/400 only
- Do not use a non-gothic custom face on body or headings (Display / banner only)

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. YAML token-set keys keep their lowercase hex; visible tables keep the source's uppercase hex. Those two writings are not collapsed. YAML `primary-deep: #083891` is Primary 70. The Brand heading **Primary Deep** (`#0B50D0`) is Primary 60 — a different key and a different step. Where a line also characterizes a value — "the government's action colour", "restricted accent" — that characterization is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

Token-set keys (`tokens.colors`):

- **primary / brand** (`#256ef4`): Government Blue Primary 50 — buttons, active links, primary CTA, focus rings
- **primary-hover** (`#0b50d0`): Primary 60 — YAML hover fill; color-table/Brand: primary text on light surface, Secondary 버튼 텍스트, pressed 상태
- **primary-deep** (`#083891`): Primary 70 — YAML key. Color-table role: 강한 강조 텍스트. Button Active: `#083891` 배경 (pressed). Not the Brand-section label "Primary Deep"
- **canvas** (`#ffffff`): page / card / input default
- **foreground** (`#1e2124`): Gray 90 — primary body and H1
- **muted** (`#6d7882`): Gray 50 — captions, meta, helper
- **on-primary** (`#ffffff`): text on Primary 50
- **surface** (`#f4f5f6`): Gray 5 — table headers, subtle grey surfaces
- **surface-primary** (`#ecf2fe`): Primary 5 — secondary-button fill, info-panel surface
- **hairline** (`#b1b8be`): Gray 30 — card/panel border
- **border-strong** (`#58616a`): Gray 60 — standard input and tertiary-button border
- **body** (`#464c53`): Gray 70 — placeholder, inactive GNB
- **secondary** (`#346fb2`): Navy Secondary 50 — side menu, segmented controls, header secondary
- **point** (`#d63d4a`): Government Red (정부 적색 / 적색 포인트) — emphasis badges, critical alerts only
- **danger** (`#de3412`): validation errors, required-field errors, immediate alerts
- **warning** (`#ffb114`): warning badge backgrounds (text-on-light uses `#9E6A00`)
- **success** (`#228738`): confirmation, completed
- **information** (`#0b78cb`): informational panels, info icons

Visible Brand / Surface / Foreground / Semantic roles the source also names (uppercase): Government Blue `#256EF4`; Brand "Primary Deep" `#0B50D0`; Navy `#346FB2`; Government Red (Point) `#D63D4A`; Page Background `#FFFFFF`; Subtle Surface `#F4F5F6`; Divider `#E6E8EA` (Gray 10 — not a YAML key); Body Text `#1E2124`; Subtle Text `#464C53`; Caption Text `#6D7882`; Danger `#DE3412`; Warning `#FFB114` (text `#9E6A00`); Success `#228738`; Information `#0B78CB`.

Standard Style scale, as the source states it: 11 lightness steps (5/10/20/30/40/50/60/70/80/90/95) × 8 families (Gray, Primary, Secondary, Point, Danger, Warning, Success, Information) + Gray 0/100. Tokens expose as `--krds-color-light-<name>-<step>`; 선명한 화면 모드 maps the same meaning through `--krds-color-high-contrast-<name>-<step>`. High-contrast hex values themselves are not listed in the source and are omitted.

**Primary (정부 청색)**

| Step | Hex | Token | Role |
|------|------|-------|------|
| 5 | `#ECF2FE` | `--krds-color-light-primary-5` | Secondary button background, info-panel surface, 약한 강조 |
| 10 | `#D8E5FD` | `--krds-color-light-primary-10` | hover/selected surface |
| 20 | `#B1CEFB` | `--krds-color-light-primary-20` | divider, illustration support |
| 30 | `#86AFF9` | `--krds-color-light-primary-30` | disabled-on-primary, support graphic |
| 40 | `#4C87F6` | `--krds-color-light-primary-40` | support action / inactive border |
| 50 | `#256EF4` | `--krds-color-light-primary-50` | Primary action — button fill, active link, active tab |
| 60 | `#0B50D0` | `--krds-color-light-primary-60` | Primary text on light surface, Secondary 버튼 텍스트, pressed 상태 |
| 70 | `#083891` | `--krds-color-light-primary-70` | 강한 강조 텍스트 |
| 80 | `#052561` | `--krds-color-light-primary-80` | deep information container |
| 90 | `#03163A` | `--krds-color-light-primary-90` | dark surface |
| 95 | `#020F27` | `--krds-color-light-primary-95` | dark-mode body background |

**Secondary (Navy — 정부 회청):** 5 `#EEF2F7` side-menu background; 50 `#346FB2` base; 60 `#1C589C` action; 70 `#063A74` text; 80 `#052B57` heading.

**Gray**

| Step | Hex | Role | Token semantic |
|------|------|------|----------------|
| 0 | `#FFFFFF` | Page / card / input default | `--krds-light-color-surface-white-static` |
| 5 | `#F4F5F6` | Table header, subtle surface | `--krds-light-color-surface-gray-subtler` |
| 10 | `#E6E8EA` | Weak divider | — |
| 20 | `#CDD1D5` | Disabled surface / weak border | input disabled bg |
| 30 | `#B1B8BE` | Card/panel border | `--krds-color-border-gray-light` |
| 40 | `#8A949E` | bg-disabled, disabled badge | — |
| 50 | `#6D7882` | Caption / meta | — |
| 60 | `#58616A` | Standard input / tertiary border | `--krds-color-border-gray` |
| 70 | `#464C53` | Placeholder, inactive GNB | `--krds-color-text-subtle` |
| 80 | `#33363D` | Strong text / divider | |
| 90 | `#1E2124` | Body / H1 | `--krds-color-text-basic` |
| 95 | `#131416` | Dark surface | |
| 100 | `#000000` | Absolute black (low frequency) | |

**System colours**

| Role | 50 (base) | 5 (subtle bg) | 70 (deep text) | Token |
|------|-----------|----------------|------------------|-------|
| Danger | `#DE3412` | `#FDEFEC` | `#8A240F` | `--krds-color-light-danger-*` |
| Warning | `#9E6A00` (text) / `#FFB114` (30, bg) | `#FFF3DB` | `#614100` | `--krds-color-light-warning-*` |
| Success | `#228738` | `#EAF6EC` | `#285D33` | `--krds-color-light-success-*` |
| Information | `#0B78CB` | `#E7F4FE` | `#085691` | `--krds-color-light-information-*` |
| Point | `#D63D4A` | `#FBEFF0` | `#7A1F26` | `--krds-color-light-point-*` |

Further recorded steps: Warning 60 `#8A5C00`; Point 60 `#AB2B36` (select error border); Danger 60 `#BD2C0F`; Success 60 `#267337`; Information 60 `#096AB3`. Danger on inputs is `border 2px solid #DE3412`. Warning as text uses `#9E6A00` (warning-50). 배경 50단계 `#FFB114` 위 텍스트는 `#1E2124`. Point is restricted to emphasis badges and important alerts. Select error uses Point 60 `#AB2B36`, not Danger.

**Focus (generic observation).** `--krds-box-shadow-outline: 0 0 0 0.4rem #256EF4` (also written `0 0 0 4px #256EF4`). Inset `--krds-box-shadow-outline-inset: inset 0 0 0 0.2rem #256EF4`. Token-set `tokens.shadow.focus` is `0 0 0 0.4rem #256ef4`. The source applies this as a Focus observation on buttons, inputs, selects, checkboxes, radios, and links. That is a different evidence class from a `focus-visible` treatment; no `focus-visible` row below carries the halo as its treatment (B1). The sentence that government sites treat keyboard users as a first user group, so focus visibility is not a compromise, is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

**Magic number:** 40 → 3:1; 50 → 4.5:1 (AA normal text); 70 → 7:1 (AAA); 90 → 15:1.

### Spacing

Token-set unitless steps (`tokens.spacing`): `xs 2` · `sm 4` · `md 8` · `base 16` · `lg 24` · `xl 32` · `xxl 40`. Visible `--krds-padding-*` scale (live tokens):

| Token | Value | Use |
|-------|-------|-----|
| padding-1 | 2px | hairline gap |
| padding-2 | 4px | icon inner padding |
| padding-3 | 8px | badge/tag padding |
| padding-4 | 10px | xsmall button padding |
| padding-5 | 12px | small button padding |
| padding-6 | 16px | input padding / info-panel vertical |
| padding-7 | 20px | large button padding |
| padding-8 | 24px | standard content padding / gutter |
| padding-9 | 32px | between-section gap |
| padding-10 | 40px | modal padding |

Unitless steps and px forms are both kept. 10 / 12 / 20 are KRDS auxiliary units beside the 8-point multiples.

### Shape

Token-set unitless (`tokens.rounded`): `sm 4` · `md 6` · `lg 8` · `full 1000`. Visible live radius:

- 2px (`--krds-radius-xsmall1/2/3`): xsmall input / fine geometry
- 4px (`--krds-radius-small1/2/3`): badge / xsmall button
- 6px (`--krds-radius-medium1/2`): small·medium button / small select — Select size scale also records small = 8px and large (default) = 6px; both writings stay
- 8px (`--krds-radius-medium3/4`): standard — panel / card / large·xlarge button / default input
- 10px (`--krds-radius-large1/2`): xlarge input
- 12px (`--krds-radius-xlarge1/2`): modal
- 1000px (`--krds-radius-max`): circular controls / pill tags

`full: 1000` stays that step. It is not rewritten as `9999`. Treating 8px as the standard round and 1000px as pill/circle is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

### Elevation

The source records a separate elevation page (`style_08.html`); actual use is limited to four levels.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | no shadow | page content, cards, panels, inputs, buttons |
| Border-only (1) | `1px solid #B1B8BE` or `#CDD1D5` | cards / tables / inputs |
| Drop (2) | body spelling `0 0.2rem 0 0 rgba(0,0,0,a1), 0 0.4rem 0.8rem 0 rgba(0,0,0,a2)`; token-set `tokens.shadow.modal` / dialog `0 0.2rem 0 0 rgba(0,0,0,0.1), 0 0.4rem 0.8rem 0 rgba(0,0,0,0.1)` | dropdown, tooltip, modal |
| Modal (3) | the same shadow + 12px radius + backdrop black/0.5 fade | modal dialog only |
| Focus halo | `0 0 0 4px #256EF4` | generic Focus observation, not a depth token |

The two shadow writings (`a1`/`a2` in the visible body, `0.1`/`0.1` in the token set) are both kept; neither replaces the other. The source's shadow philosophy — government sites avoid a many-layered look; visual flatness is assumed to produce trust and predictability; four levels rather than Material-style six — is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation. The measurements themselves are recorded values.

### Motion

The source records durations as live `--krds-transition-*` tokens. Named CSS easing keywords (`ease-in-out`, `ease`, `linear`) are the recorded curves.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | toggle / checkbox state change |
| `motion-base` | **0.4s ease-in-out** (`--krds-transition-base`) | standard — dropdown, menu, panel open/close, backdrop |
| `motion-fade` | **opacity 0.4s linear** (`--krds-transition-fade`) | simple opacity fade (modal enter, toast) |
| `motion-collapse` | **max-height 0.4s ease** (`--krds-transition-collapse`) | accordion / disclosure |
| `motion-collapse-width` | **width 0.4s ease** (`--krds-transition-collapse-width`) | side-menu width |

**Easings** (names and uses): `ease-in-out` — KRDS default for two-way open/close; `ease` — height/width collapse; `linear` — opacity fade.

**Reduced motion:** `prefers-reduced-motion: reduce` collapses every `motion-*` token to 0ms; fade / slide / collapse all become instant. The backdrop still appears, without fade.

An additional motion token may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or specification document — does not satisfy that condition.

**Motion stance**, as the source states it: 스프링·바운스·오버슈트 are forbidden; every transition finishes inside 400ms; the three named easings are treated as sufficient. The causal reading that government services do not earn trust through "재미있는" interaction, and that the reduced-motion rule is 기본 동작 rather than an a11y recommendation because vestibular and cognitive-disability users are a larger share than on a general site, is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

**Signature motions**, as the source states them:

1. **메뉴 / 드롭다운 열기·닫기.** `400ms / ease-in-out`, opacity + `transform translateY(-4px → 0)`. No backdrop (not a full-page modal). Close uses the same time, reversed.
2. **아코디언·디스클로저.** max-height `400ms / ease`. No content fade.
3. **모달 진입.** opacity fade 400ms linear + backdrop simultaneous fade (black/0.5). No transform. Modal radius 12px `--krds-radius-xlarge1`.
4. **사이드 메뉴 폭 변경.** width `400ms / ease` (`--krds-transition-collapse-width`).
5. **Reduce motion.** All of the above 0ms instant. Backdrop visible immediately, without fade.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The official KRDS typography foundation names `Pretendard GOV` as the default face. |
| Live computed surface-use | The source records loaded/high-confidence use on the ten collected `krds.go.kr` surfaces. |
| FontFaceSet and source corroboration | Pretendard GOV is loadable; live pages set `--krds-font-family-base: Pretendard GOV`. |
| Official distributed asset | KRDS publishes official webfont and implementation assets. |
| Declared-only | Gothic-family examples for agency extension (노토 산스 / 나눔 고딕 / 스포카 한 산스) are not promoted as the current KRDS default product face. |
| License | Pretendard GOV is described as an open font; that describes the font asset. |
| Adopting-institution faces | An adopting institution's own face stays off this contract until that institution's surface is verified. The source's evidence-class label for this row is Unresolved. |
| Outside these captures | Typography on adopting ministry/agency services is outside these documentation captures. Reading those services as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation. |

Specimen availability is separate from family truth: render a live specimen only when the official asset can be loaded. Do not present a system stack as Pretendard GOV.

### Family

- **Current visible UI family:** `"Pretendard GOV", "Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`
- Live token: `--krds-font-family-base: Pretendard GOV`
- **확장형 스타일** (agency with its own face): gothic families only (노토 산스 / 나눔 고딕 / 스포카 한 산스). If the custom face is not gothic, it is forbidden on body and headings.
- Do not replace Pretendard GOV with a system face and present the substitute as the KRDS face. The fallback stack is a fallback, not the brand face.

The source's 설계 원칙 records that Pretendard GOV keeps 한글·라틴·기호의 메트릭이 균일 so mixed strings such as "민원 24" and "행정 API" stay aligned. The reading that the fallback stack is a fallback and not the brand face is a derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

### Type roles

All roles use line-height `1.5` (150%). Weights are Regular 400 and Bold 700 only (`--krds-font-weight-regular`, `--krds-font-weight-bold`). No Medium. Unitless `1.5` is not rewritten as a px line-height (A1a). YAML `use` strings are restored verbatim on the token-set rows.

**Display** (marketing / banner only — no body use)

| Role | PC | Mobile | Weight | Tracking | Token-set use |
|------|----|--------|--------|----------|----------------|
| Display Large | 60px | 44px | 700 | 1px | `Marketing/banner display (no body use)` |
| Display Medium | 44px | 32px | 700 | 1px | (visible scale only; not a YAML key) |
| Display Small | 36px | 28px | 700 | 1px | `Small display banner` |

**Heading**

| Role | PC | Mobile | Weight | Tracking | Token-set use |
|------|----|--------|--------|----------|----------------|
| Heading xlarge | **40px** | **28px** | 700 | 1px | `H1 page/section top title (28px mobile)` |
| Heading large | 32px | 24px | 700 | 1px | `H1 narrow / H2` |
| Heading medium | 24px | 22px | 700 | 0 | `H2 / H3` |
| Heading small | 19px | 19px | 700 | 0 | `H3 / H4` |
| Heading xsmall | 17px | 17px | 700 | 0 | `H4 / H5` |
| Heading xxsmall | 15px | 15px | 700 | 0 | H5. (visible scale only; not a YAML key) |

**Body**

| Role | Size | Weight | Token-set use |
|------|------|--------|----------------|
| Body large | 19px | 700 / 400 | `Emphasized body / key copy` |
| Body medium | 17px | 700 / **400** | `Standard body (default)`. §3: 표준 본문 (`<body>` 기본) |
| Body small | 15px | 700 / 400 | `Caption / small label`. §3: 캡션 / 보조 / 작은 라벨 |
| Body xsmall | 13px | 700 / 400 | `Annotation / meta / footer` |

**Semantic role tokens (Navigation / Label)** — visible scale, not YAML keys:

| Role | Style | PC | Weight |
|------|-------|----|--------|
| Navigation | title-large | 24px | 700 |
| Navigation | title-small | 19px (mobile 17) | 700 |
| Navigation | depth-medium-bold / depth-medium | 17px | 700 / 400 |
| Navigation | depth-small-bold / depth-small | 15px | 700 / 400 |
| Label (button / input / radio / checkbox) | large / medium / small / xsmall | 19 / 17 / 15 / 13 | 400 |

### Type rules

The observable half of the scale is stated plainly here. Reading those facts as rules — two weights only, 17px as the body default because Pretendard GOV looks smaller than other faces, line-height `1.5` as WCAG 1.4.12, letter-spacing 0 except Display 1px, rem with `font-size-base: 62.5%` so 1rem = 10px — is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation. The two-weights, 17px-default, 1.5 line-height, user-zoom, letter-spacing, and rem sentences are also the source's own typography principles.

- Regular 400 and Bold 700 only. No Medium.
- Body default 17px / 400 / `1.5` — 일반적인 14~16px보다 살짝 큰 17px를 기본 본문으로 채택해 노안·저시력 사용자 가독성을 우선 (Pretendard GOV가 다른 서체 대비 작아 보이기 때문에 의도적으로 +1px). 본문은 17px / 400 / 1.5 line-height가 기본 (16px이 아님).
- User zoom `--krds-zoom-{small, medium, large, xlarge, xxlarge} = 0.9 / 1 / 1.1 / 1.3 / 1.5`, from header **글자·화면 설정**, 최대 150%까지, separate from browser zoom. Line-height `1.5` (150%). `font-size-base: 62.5%`.
- letter-spacing 0 (`--krds-letter-spacing-none: 0rem`); Display only 1px.
- rem units; `font-size-base: 62.5%`.

### Assets

- Favicon: `https://www.krds.go.kr/resources/img/guide/favicon_192.png` (YAML `logo.type: favicon`). First-party KRDS-hosted PNG.
- Open Graph: `https://www.krds.go.kr/resources/img/guide/KRDS_Open_Graph.png` (`ds.og_image`).
- Icons: 16 / 20 / 24px (`--krds-icon--size-{xsmall..xlarge} = 1.6/1.6/2/2.4/2.4rem`).
- Content illustration / photo: full-bleed inside the 1200px container, or 16:9 / 4:3. Accessible media (`component_11_01.html`) names caption / subtitle / audio-description slots.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source's token note: canonical machine tokens are limited to official KRDS pages with current live capture or still-fresh 2026-05 official-document evidence. Unreverified card, toggle, tab, toast, and floating-button candidates remain prose-only and are not exposed as machine tokens. KRDS components share five size tokens (xsmall/small/medium/large/xlarge). Default sizes: Button = medium, Input = large, Select = large. Every variant the source describes supplies `aria-disabled`, keyboard focus, and the 4px focus-ring halo as a generic Focus observation.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted when the source does not record them. Absence of a capture is not a `not-applicable` reason. `not-applicable` is used only where the control's role makes the state meaningless, and the reason given is that semantic one. This is not a complete state-coverage claim.

### Surface state contract

The fourteen rows below are the source's §14 state contract. They describe surface- and module-level treatments, not per-control treatments, and they name published copy that this contract carries verbatim. Reading them as the state contract for the captured surfaces is a derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

| State | Treatment |
|---|---|
| **Empty (검색 결과 없음)** | "검색 결과가 없습니다. 다른 키워드로 다시 시도해 주세요." + search-reset Tertiary. Bare "데이터가 없습니다" is forbidden. |
| **Empty (신청 내역 없음)** | "신청한 내역이 없습니다." + next-action "새 신청서 작성하기" Primary. |
| **Loading (페이지 진입)** | Top-of-page progress (spinner `component_07_02`) + skeleton blocks (`#F4F5F6` Gray 5). `aria-busy="true"`. |
| **Loading (양식 제출)** | Primary disabled + inline spinner. Label becomes "처리 중...". Duplicate submit blocked. |
| **Error (필드 검증)** | Input border **2px solid `#DE3412`** / helper "올바른 형식이 아닙니다. example@domain.kr 형식으로 입력해 주세요." `aria-invalid="true"` + focus moves to the error. |
| **Error (select)** | Border **2px solid `#AB2B36`** (Point 60). |
| **Error (제출 실패)** | Top-of-page alert (긴급 공지 `component_04_02`) with Danger badge + message + retry. Entered values preserved. |
| **Error (서버·네트워크)** | Full-page "일시적으로 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해 주세요." + refresh + customer-center (전화 / 채팅). |
| **Success (저장)** | Snackbar (`component_12_06`) "저장되었습니다." auto-close 3s. |
| **Success (신청 완료)** | Dedicated result page — "신청이 완료되었습니다." H1 + 접수번호 + next-step + Primary "신청 내역 확인하기". A page, not a modal, so refresh/bookmark work. |
| **Disabled** | Grey background (`#CDD1D5` Gray 20) + `#6D7882` text + `cursor: not-allowed`. `aria-disabled="true"`. Reason in supporting text ("주민등록번호를 먼저 입력해 주세요"). |
| **Focus (키보드)** | 4px outline halo (`box-shadow: 0 0 0 4px #256EF4`). Generic Focus observation on every interactive element — not a `focus-visible` treatment. |
| **High Contrast Mode** | `--krds-color-high-contrast-*` — stronger borders, text conversion (including `#FFFFFF` body), thicker focus ring. OS setting or header **글자·화면 설정**. (`style_09.html`) |
| **사용자 줌 (90/100/110/130/150%)** | Header control — 90% / 100% / 110% / 130% / 150%. All components in rem (`font-size-base: 62.5%`). 1200px 컨테이너 adapts at 150% without horizontal scroll. |

### Service journey states

The source's journey-node table (서비스 패턴 5종). Copy is verbatim.

| Journey node | State / treatment |
|---|---|
| **방문 (Visit) — 진입** | Main first impression — noun-form headline + one Primary xlarge 64px + information-card grid. Anonymous user assumed. |
| **검색 — 입력 보조** | Search input xlarge (80px·24px·700) + suggestion/recent dropdown. Keyboard first entry: 4px focus halo. |
| **검색 — 결과 개수 확인** | Top of results "**총 N건**" (Body large bold) — 0 rows → Empty. |
| **검색 — 결과 없음** | "검색 결과가 없습니다. 다른 키워드로 다시 시도해 주세요." + reset Tertiary + search help Text button. |
| **로그인 — 방식 선택** | Two or more auth methods at equal rank — not narrowed to one Primary. Help toggle always visible. |
| **로그인 — 자동 만료** | Session-expiry modal (small 400px·12px radius) + 연장 / 로그아웃 + countdown (`aria-live="polite"`). |
| **신청 — 다단계 양식** | Step indicator (`component_07_01`) 1→2→3 active `#256EF4` / complete `#228738`. Per-step 임시저장 Tertiary, top-right. |
| **신청 — 자동입력** | Auto-filled values Gray 5 (`#F4F5F6`) + readonly + "자동 입력된 정보입니다". Unlock toggle if editable. |
| **신청 — 첨부 진행** | Upload progress + filename + delete chip (Tag). Over-capacity uses field-validation Error. |
| **신청 — 제출 확인** | Modal medium (560px) — "신청을 제출하시겠습니까?" + summary + Primary "제출하기" / Tertiary "취소". Backdrop black/0.5. |
| **신청 — 결과 페이지** | Not a modal — new page (URL change) — "신청이 완료되었습니다" H1 + 접수번호 + next step + Primary "신청 내역 확인하기". |
| **신청 — 처리 추적** | Status badges (Information 진행 중 / Success 완료 / Warning 보완 요청 / Danger 반려) + updated time. |
| **정책정보 — 신규/갱신 구분** | "신규" (Point red badge outline) or "갱신" (Information badge outline) — text label required; colour alone does not carry meaning. |

### How applicability is decided here

The source declares harvested components with a primitive type (`button`, `input`, `badge`, `dialog`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless. Where the source's token note withholds machine-token status (card, toggle, tab, toast, floating-button, and the other prose-only inventory), kind and an applicability map are omitted rather than decided (C4).

One evidence boundary matters here. The source records a 4px / `0.4rem` `#256EF4` outline as a Focus observation. That is a generic focus observation, which is a different evidence type from a `focus-visible` treatment; the observation is kept on each control's own record and no `focus-visible` row in this section carries a treatment value.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation. This is not a complete state-coverage claim.

### Primary Button

- Role: core action — 신청하기 / 확인 (1 per screen)
- Primitive type: `button` · Kind: interactive
- Background: `#256EF4` / token-set `#256ef4`
- Text: `#FFFFFF` / `#ffffff`
- Border: `1px solid #256EF4`
- Token-set border record: `1px solid #256ef4`
- Radius: 6px (medium default)
- Padding: `0 16px`
- Height: 48px (medium default)
- Font: 17px / 400
- Token-set font record: `17px / 400`
- Hover: Primary 60 `#0B50D0` / `#0b50d0` fill
- Active / pressed: Primary 70 `#083891` fill
- Disabled: token-set `bg #cdd1d5 fg #6d7882`; visible Gray 20 `#CDD1D5` fill + Gray 50 `#6D7882` text + `cursor: not-allowed`
- Focus: 4px `#256EF4` halo — generic Focus observation, not carried onto `focus-visible`
- Token-set use: `Core action 신청하기/확인 (1 per screen)`
- Use: 핵심 액션 — "시작하기", "신청하기", "확인", "다음 단계" (한 화면당 1개 권장)

Size scale (height / radius / padding / font): xsmall 32px / 4px / 0 10px / 15px·400; small 40px / 6px / 0 12px / 15px·400; medium (default) 48px / 6px / 0 16px / 17px·400; large 56px / 8px / 0 20px / 19px·400; xlarge 64px / 8px / 0 24px / 19px·400.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; declared hover `#0B50D0` |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried, see the evidence boundary above |
| disabled | applicable | Declared: `#CDD1D5` fill, `#6D7882` text, `cursor: not-allowed`, `aria-disabled` |
| loading | applicable | The control commits 신청하기 / 확인 / 시작하기 / 다음 단계; the state contract disables the Primary and sets "처리 중..." with an inline spinner |
| error | applicable | The control commits a submit; the state contract declares field, submit, and server errors after a failed action |
| success | applicable | The control commits an action; the state contract declares "신청이 완료되었습니다." or "저장되었습니다." |

### Secondary Button

- Role: secondary action — 자세히 보기 / 이전 단계
- Primitive type: `button` · Kind: interactive
- Background: `#ECF2FE` (Primary 5) / `#ecf2fe`
- Text: `#0B50D0` (Primary 60) / `#0b50d0`
- Border: `1px solid #256EF4`
- Token-set border record: `1px solid #256ef4`
- Radius: 6px
- Padding: `0 16px`
- Height: 48px
- Font: 17px / 400
- Token-set font record: `17px / 400`
- Token-set states: `default; shared 4px focus halo and aria-disabled behavior`
- Token-set use: `Secondary action 자세히 보기/이전 단계`
- Use: 보조 액션 — "자세히 보기", "이전 단계", "다운로드" (same size scale as Primary — radius 4/6/6/8/8)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | Shared `aria-disabled` behavior with Primary; treatment omitted at this variant |
| loading | applicable | 다운로드 and wizard 이전 단계 can be pending; the state contract puts "처리 중..." on submit. 자세히 보기 is also named; its destination reading does not close the other uses |
| error | applicable | A committed secondary action (다운로드, a wizard step) can fail; the state contract declares form and server errors |
| success | applicable | A committed secondary action can complete; the state contract declares save/application success copy |

### Tertiary Button (Outline)

- Role: cancel / reset / close — 취소 / 초기화 / 닫기
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#1E2124` (Gray 90) / `#1e2124`
- Border: `1px solid #58616A` (Gray 60)
- Token-set border record: `1px solid #58616a`
- Radius: 6px
- Padding: `0 16px`
- Height: 48px
- Font: 17px / 400
- Token-set font record: `17px / 400`
- Hover: Gray 5 `#F4F5F6` / `#f4f5f6` fill
- Token-set use: `Cancel/reset 취소/초기화/닫기`
- Use: 부가 / 취소 / 초기화 — "취소", "초기화", "닫기"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; declared hover `#F4F5F6` |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | A cancel/reset control can be gated; treatment omitted |
| loading | not-applicable | Cancel, reset, and close do not commit a durable operation whose in-progress state would be reported on this control; progress belongs to the action being cancelled |
| error | not-applicable | Failure of the cancelled action is not reported on 취소 / 닫기 |
| success | not-applicable | Completion of the cancelled action is not confirmed on this control |

### Text Input

- Role: standard text input (large default)
- Primitive type: `input` · Kind: interactive
- Background: `#FFFFFF` / `#ffffff`
- Text: `#464C53` (Gray 70, including placeholder) / `#464c53`
- Border: `1px solid #58616A`
- Token-set border record: `1px solid #58616a`
- Radius: 8px
- Padding: `0 16px`
- Height: 56px
- Font: 19px / 400
- Token-set font record: `19px / 400`
- Focus: border kept + `box-shadow: 0 0 0 4px #256EF4` halo — generic Focus observation, not carried onto `focus-visible`
- Token-set focus record: `0 0 0 4px #256ef4 halo`
- Disabled: token-set `bg #cdd1d5 fg #6d7882 border #b1b8be`; visible `#CDD1D5` / `#6D7882` / `1px #B1B8BE` / `aria-disabled="true"`
- Token-set states: `error border 2px solid #de3412`
- Token-set use: `Standard text input (large default)`
- Required: red asterisk (`*` Danger 50 `#DE3412`) beside the label + `aria-required="true"`
- Error: border `2px solid #DE3412` + helper Danger 50 + `aria-invalid="true"` / `aria-invalid='true'` + focus moves to the error region

Size scale (height / radius / padding / font / border): xsmall 32px / 4px / 0 12px / 13px·400 / 1px `#58616A`; small 40px / 6px / 0 16px / 15px·400; medium 48px / 6px / 0 16px / 17px·400; **large (default) 56px / 8px / 0 16px / 19px·400**; xlarge 80px / 10px / 0 24px / 24px·700.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; the recorded generic Focus observation is a different evidence class, so no value is carried on this row |
| disabled | applicable | Declared: `#CDD1D5` / `#6D7882` / `#B1B8BE` / `aria-disabled="true"` |
| loading | applicable | The field participates in a submit that can be pending; visual treatment omitted at the field itself |
| error | applicable | Form field; declared `2px solid #DE3412` plus "올바른 형식이 아닙니다. example@domain.kr 형식으로 입력해 주세요." |
| success | applicable | Form field whose submission can complete; the state contract declares a result page or snackbar at page level |

### Select

- Role: native select with chevron
- Primitive type: `input` · Kind: interactive
- Markup: native `<select class="krds-form-select">`
- Background: `#FFFFFF` / `#ffffff`
- Text: `#1E2124` / `#1e2124`
- Border: `1px solid #58616A`
- Token-set border record: `1px solid #58616a`
- Radius: 6px (large default)
- Padding: `0 48px 0 16px` (chevron gutter)
- Height: 56px
- Font: 19px / 400
- Token-set font record: `19px / 400`
- Disabled: `bg #cdd1d5 border #b1b8be` / `#CDD1D5` + `#B1B8BE`
- Token-set states: `error border 2px solid #ab2b36`
- Token-set use: `Native select with chevron`
- Error: `2px solid #AB2B36` (Point 60 — not Danger). Completed (value chosen): border kept, text darkens.

Size scale (height / radius / padding-right / font): small 40px / 8px / 40px / 15px·400; medium 48px / 6px / 44px / 17px·400; **large (default) 56px / 6px / 48px / 19px·400**.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; no treatment carried |
| disabled | applicable | Declared: `#CDD1D5` fill, `#B1B8BE` border |
| loading | applicable | The field participates in a submit that can be pending; visual treatment omitted |
| error | applicable | Form field; declared `2px solid #AB2B36` |
| success | applicable | Form field whose submission can complete; the state contract declares page-level success |

### Dialog

- Role: modal dialog — 글자·화면 표시 설정, 전체 메뉴, 양식 확인
- Primitive type: `dialog` · Kind: interactive
- Background: `#FFFFFF` / `#ffffff`
- Text: `#1E2124` / `#1e2124`
- Radius: 12px (`--krds-radius-xlarge1`)
- Padding: 40px (`--krds-padding-10`)
- Token-set shadow: `0 0.2rem 0 0 rgba(0,0,0,0.1), 0 0.4rem 0.8rem 0 rgba(0,0,0,0.1)`
- Body shadow spelling: `0 0.2rem 0 0 rgba(0,0,0,a1), 0 0.4rem 0.8rem 0 rgba(0,0,0,a2)`
- Token-set use: `Modal dialog, backdrop fade 0->0.5 black, min-height 264px`
- Min-height 264px. Backdrop fade-in 400ms / opacity 0→0.5 black.
- Sizes (`--krds-modal--size-*`): small 400px / medium 560px / large 760px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web dialog chrome; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable dialog; no treatment carried |
| disabled | not-applicable | A dialog panel is not gated as a control — gating belongs to the actions inside it |
| loading | not-applicable | The panel does not commit an operation of its own; in-progress state belongs to Primary "제출하기" or the setting being changed |
| error | not-applicable | A failure is reported on the action or the form inside, not on the dialog as a control |
| success | not-applicable | Success is a colour of the result page or snackbar, not a completion state of the dialog chrome. The source sends 신청 완료 to a new page, not the modal |

### Badge

- Role: content classification / status label
- Primitive type: `badge` · Kind: non-interactive — it renders a classification or status label and the source gives the filled/outline badge no control affordance, so a state-applicability map does not apply to it
- Shared geometry: radius 4px / padding `0 8px` / 15px·400 / height 24px. Token-set font record: `15px / 400`. outline / bg(filled) × 9 meanings = 18 variants.

Token-set records (filled defaults):

| Token | bg | fg | border | Token-set use |
|---|---|---|---|---|
| badge-primary | `#256ef4` | `#ffffff` | `1px solid #256ef4` | `Content classification, action emphasis` |
| badge-point | `#d63d4a` | `#ffffff` | — | `Emphasis/new/important (red point)` |
| badge-success | `#228738` | `#ffffff` | — | `Completed / success` |
| badge-danger | `#de3412` | `#ffffff` | — | `Error / rejected` |
| badge-warning | `#ffb114` | `#1e2124` | — | `Caution (black text on warning bg)` |

Visible 18-variant table (uppercase), kept in full:

| Semantic | Outline (border / text) | Filled (bg / text) | Use |
|----------|--------------------------|----------------------|-----|
| Primary | `#256EF4` / `#0B50D0` | `#256EF4` / `#FFFFFF` | 콘텐츠 분류, 액션 강조 |
| Secondary | `#052B57` / `#052B57` | `#063A74` / `#FFFFFF` | 카테고리 그룹 |
| Gray | `#464C53` / `#464C53` | `#6D7882` / `#FFFFFF` | 메타 / 일반 분류 |
| Point (정부 적색) | `#AB2B36` / `#AB2B36` | `#D63D4A` / `#FFFFFF` | 강조 / 신규 / 중요 (적색 포인트) |
| Danger | `#BD2C0F` / `#BD2C0F` | `#DE3412` / `#FFFFFF` | 오류 / 반려 |
| Warning | `#8A5C00` / `#8A5C00` | `#FFB114` / `#1E2124` | 주의 |
| Success | `#267337` / `#267337` | `#228738` / `#FFFFFF` | 완료 / 성공 |
| Information | `#096AB3` / `#096AB3` | `#0B78CB` / `#FFFFFF` | 안내 / 진행 중 |
| Disabled | `#6D7882` / `#6D7882` | `#8A949E` / `#FFFFFF` | 비활성 |

`bg-light-*` variants (Primary 5 fill + 60 text, e.g. homepage "아이덴티티" / "서비스 패턴") exist as a softer classification label; exact remaining light hexes beyond Primary 5 are omitted where unnamed.

### Tag (필터 칩)

- Role: selectable filter chip with delete
- Primitive type: `badge` · Kind: interactive
- Background: `#FFFFFF` / `#ffffff` (Selected: `#ECF2FE`)
- Text: `#1E2124` / `#1e2124` (Selected: `#0B50D0`)
- Border: `1px solid #CDD1D5` (Selected: `#256EF4`)
- Token-set border record: `1px solid #cdd1d5`
- Radius: pill (height-matched); token-set `1000px`
- Padding: `8px 10px` (medium)
- Font: 15px / 400 (medium)
- Token-set font record: `15px / 400`
- Token-set active: `bg #ecf2fe fg #0b50d0 border #256ef4`
- Token-set use: `Selectable filter chip with delete button`
- Delete control: `btn-delete` on the right

Size scale (height / radius / padding / font): large 40px / 40px / 8px 12px / 17px·400; medium 32px / 32px / 8px 10px / 15px·400; small 24px / 24px / 8px / 13px·400.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared default and selected (active) treatments above |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable chip; no treatment carried |
| disabled | applicable | A filter chip can be gated; treatment omitted |
| loading | not-applicable | Selecting or deleting a filter chip does not commit an in-place operation whose progress would be reported on the chip |
| error | not-applicable | Filter failure would belong to the listing being filtered, not to the chip as a control |
| success | not-applicable | Selected/active is a variant (`bg #ecf2fe`), not a completion state of the chip |

### Prose-only inventory (not machine tokens)

The source's token note withholds machine-token status for these until their own official surfaces are recaptured. Values are recorded. Kind and applicability maps are omitted rather than decided (C4). Grouping them as one inventory rather than as harvested components is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

**Text / Link button.** transparent; text `#1E2124` (text) or `#256EF4` (link); 1px transparent border (visible on focus); radius 4–8px by size; padding 0 2px–9px; medium height 28px. Use: 인라인 액션 — "파일 다운로드", "문의 및 건의", "찜하기".

**Icon Only.** transparent; text `#1E2124`; radius 6–8px; padding 0; icon-size 1.6/2/2.4rem = 16/20/24px. Use: 검색 / 닫기 / 도움말 토글.

**Icon + Border.** `#FFFFFF`; text `#1E2124`; `1px solid #B1B8BE`; radius 1000px. Use: "새로고침", "맨 위로".

**Floating.** Primary `#256EF4`; text `#FFFFFF`; radius 1000px; "약한 box-shadow" (exact shadow omitted — unnamed). Use: 페이지 우하단 — "맨 위로 / 챗봇 / 음성지원" (`component_05_03.html`).

**Textarea / Date / File** (`component_09_*` / `component_09_*.html`). **Textarea.** Same tokens as Text Input; default height 14.4rem (144px); auto-resize not recommended (`component_09_02.html`).

**Date Input.** Text Input + calendar icon + Calendar (`component_04_03.html`); `YYYY-MM-DD` or split `YYYY / MM / DD` (`component_09_01.html`).

**File Upload.** `#FFFFFF`; text `#1E2124`; `1px solid #58616A`; radius 8px; padding `0 16px`. Tertiary + filename + progress + delete chip (`component_09_04.html`).

**Checkbox.** `#FFFFFF` (Checked `#256EF4`); check icon `#FFFFFF`; `1px solid #58616A`; radius 4px; 16/20/24px square. Indeterminate / Error / Disabled supplied (`component_06_01.html` family).

**Radio.** `#FFFFFF`; inner dot `#256EF4`; `1px solid #58616A` (Checked outer `#256EF4`); radius 1000px; 16/20/24px; `role="radiogroup"`.

**Toggle Switch.** Off `#B1B8BE` / On `#256EF4`; thumb `#FFFFFF`; pill track 32px × 16px; Disabled `#CDD1D5`.

**Cards** (`component_04_*.html`). **Standard Panel.** `#FFFFFF`; `1px solid #B1B8BE`; radius 8px; padding 24px (`--krds-padding-8`); shadow none.

**Info Panel (Light Primary).** `#ECF2FE`; emphasis `#0B50D0` + body `#1E2124`; no border; radius 8px; padding 16px 24px. Copy pattern "이 페이지에서는…", "도움말".

**Critical Alert.** `#DE3412`; text `#FFFFFF`; radius 0 (full-bleed); mobile header badge height 3.9rem (`--krds-critical-alerts--mobile-badge-size-height`).

**Accordion.** `#FFFFFF`; text `#1E2124`; `1px solid #B1B8BE`; radius 8px; max-height 400ms ease (`component_04_07.html` / `04_04`).

**Horizontal Tab.** transparent; inactive `#464C53` / 400, active `#256EF4` / 700; active bottom `2px solid #256EF4`; `role="tablist"` / `aria-selected` (`component_04_10.html`).

**Toast.** `#1E2124`; `#FFFFFF`; radius 8px; padding 16px; 3s auto-close (`component_12_05.html`).

**Snackbar.** `#1E2124`; `#FFFFFF`; radius 0 (full-bleed strip); padding 16px; optional action "되돌리기"; 4s auto-close (`component_12_06.html`).

**Tooltip / Help Panel / Coachmark** (`component_08_*`). **Tooltip.** `#1E2124`; `#FFFFFF`; radius 12px; padding 8px; arrow 8px / 400ms fade.

**Help Panel.** `#FFFFFF`; `#1E2124`; `1px solid #B1B8BE`; right slide-in.

**Coachmark.** overlay `rgba(0,0,0,0.5)` + `#FFFFFF` card; `#1E2124`; radius 8px.

**Pagination / Breadcrumb / Side Menu** (`component_03_*`). Pagination 40×40; active `#256EF4` fill + white; hover gray 5.

**Breadcrumb.** 13px·400 / `#464C53` / `>` / last item `#1E2124`.

**Side Menu.** left 4px bar `#256EF4` + background `#ECF2FE` + text `#0B50D0`/700 on the active item.

**Step indicator / Spinner** (`component_07_*`). Step indicator: active `#256EF4` fill + white number; complete `#228738` check; inactive `#CDD1D5` fill + `#6D7882` number.

**Spinner.** 24/32/48px circle + `#256EF4` arc; `prefers-reduced-motion` → static dashed state.

**Mobile-only (`component_12_*`).** 뒤로가기 / 바텀시트 / 수량토글 / 토스트 / 스낵바 / 탭바 / 스플래시 스크린 / 범위 슬라이더. Tab-bar / bottom-sheet heights are unnamed in this capture and omitted.

Every component has `--krds-light-*` and `--krds-high-contrast-*` layers; dark mode is the same component with tokens swapped. Exact dark-mode hexes are not listed and are omitted.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Spacing uses the scale above: 2, 4, 8, 10, 12, 16, 20, 24, 32, 40px. Desktop content max **1200px** (`--krds-contents-size`), centered, 24px left/right gutter — width fixed at device ≥1248px (1200 + 24×2), proportional below. Standard style excludes xsmall (<360px) from optimization targets. Extended style (free width) may use 3–6 breakpoints; column / gutter / margin rules stay the same.

| Name | Viewport | Columns | Gutter | Screen margin | Key changes |
|------|----------|---------|--------|----------------|-------------|
| small | 360px~ | 4 | 16px | 16px | single column, GNB → hamburger |
| medium | 768px~ | 8 | 16px | 24px | 2–3 columns |
| **large** | **1024px~** | **12** | **24px** | **24px** | full GNB, 1200px content, 12-grid |
| xlarge | 1280px~ | 12 | 24px | 24px | same 1200px content (side margin grows) |

The breakpoint table is declared KRDS layout documentation, not a live-width observation of an adopting service. Reading it as declared documentation behavior is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

**Sub-page (large+):** (1) Header — GNB + 글자·화면 설정 / 검색 / 전체메뉴; (2) Left menu (optional); (3) Main contents (in-content anchors); (4) Right menu (optional floating / help slide-in); (5) Footer — 운영기관 식별자 + policy links + disclaimer + 공식 배너.

**Whitespace**, as the source states it: 밀도 < 여백; between-section 64–80px (padding-9 + padding-10); 그림자보다 보더 (`#58616A` strong / `#B1B8BE` weak / `#CDD1D5` soft); GNB 56px / x-large CTA 64px. Reading that as civic density rather than premium positioning is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation. The measurements themselves are recorded values.

**Touch targets (live measure):** Primary CTA xlarge **64px**; large 56px / medium 48px / small 40px / xsmall 32px. Input large 56px / xlarge 80px. Select large 56px / medium 48px / small 40px.

**Basic Patterns (12)** — official composition units ([기본 패턴 summary](https://www.krds.go.kr/html/site/global/global_summary.html)). 모든 패턴은 페이지 레이아웃 구성 규칙으로 작동하며, "사용성·접근성·인터랙션 가이드·플랫폼 고려사항"을 함께 명시합니다:

| # | Pattern | URL | Purpose (source 1-line) |
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

**Service Patterns (5)** — journey blueprints, 3-level compliance (필수 / 권장 / 우수) ([서비스 패턴 summary](https://www.krds.go.kr/html/site/service/service_summary.html)):

| # | Pattern | URL | Journey nodes |
|---|------|-----|----------------|
| 1 | **방문 (Visit)** | `service/service_01_01.html` | 정보 탐색 → 정보 이해 → 이동(외부 서비스 / 내부 IA) |
| 2 | **검색 (Search)** | `service/service_02_01.html` | 검색어 입력 → 결과 개수 확인 → 목록 탐색 → 결과 활용 → 재검색 / 상세검색 → 종료 (7 steps) |
| 3 | **로그인 (Login)** | `service/service_03_01.html` | 로그인 방식 선택 (지식·소유·생체·다요소) → 정보 입력 → 완료 → 로그아웃 |
| 4 | **신청 (Application)** | `service/service_04_01.html` | 대상 탐색 → 다단계 양식 작성 (자동입력·임시저장·첨부) → 확인 → 처리 결과 추적. 복지 / 세액 / 발급 / 예약 포함. |
| 5 | **정책정보 확인** | `service/service_05_01.html` | 정책 상세 검토 → 관련 자료 참조(보고서·매뉴얼·법령) |

The source's example that an application page is `입력폼 + 첨부파일 + 확인 + 오류` is kept as that composition statement.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Locale: Korean (`ko`) for public services. The voice characterization — 공공 서비스 안내 데스크, 정중하고 (`-합니다`/`-해 주세요`/`-해 주십시오`), 절제, neither evaluating the user nor persuading them — is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation. The banned marketing adjectives ("놀라운", "혁신적인", "최고의"), the 하십시오체 / 해요체 mix, the noun-form headlines, the verb+기 CTAs, and the 「쉬운 우리말 쓰기」 substitutions are the source's own recorded rules. 영문 카피가 필요한 경우 plain English UK Gov 스타일로 — *"Apply now"* 가 *"Get started today!"* 보다 우선합니다. Display is 배너 전용 — 본문 사용 금지. Pretendard GOV is 오픈 폰트.

Published strings the source records, carried verbatim:

- Homepage headline: `모두를 위한 디지털 서비스 경험`
- Primary CTA: `시작하기` (also `신청하기`, `확인`, `확인하기`, `다음 단계`)
- Secondary: `자세히 보기`, `이전 단계`, `취소`, `다운로드`
- Header: `글자·화면 설정` / `글자·화면 표시 설정`, `통합검색`, `전체메뉴`
- GNB categories: `디자인 스타일 / 컴포넌트 / 기본 패턴 / 서비스 패턴 / 소식·소통 / KRDS 소개`
- MOIS mission: `누구나 쉽게 사용할 수 있는 공공 웹·앱`
- Required supporting text: `필수 입력 항목입니다`
- Field error: `올바른 이메일 형식이 아닙니다. example@domain.kr 형식으로 입력해 주세요.` / `올바른 형식이 아닙니다. example@domain.kr 형식으로 입력해 주세요.`
- Empty: `표시할 내용이 없습니다` (with next action); `검색 결과가 없습니다. 다른 키워드로 다시 시도해 주세요.`; `신청한 내역이 없습니다.`
- Success: `신청이 완료되었습니다.`; `저장되었습니다.`
- Next actions: `새 신청서 작성하기`; `신청 내역 확인하기`
- Loading: `처리 중...`
- Help: `이 항목은 ~을(를) 위해 수집됩니다.`
- Emergency: `현재 ~ 서비스가 일시 중단되었습니다. 자세한 내용은 공지사항을 확인해 주세요.`
- Server error: `일시적으로 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.`
- Disabled reason example: `주민등록번호를 먼저 입력해 주세요`
- Auto-fill: `자동 입력된 정보입니다`
- Confirm: `신청을 제출하시겠습니까?` + `제출하기`
- Inline: `파일 다운로드`, `문의 및 건의`, `찜하기`, `새로고침`, `맨 위로`, `되돌리기`
- Form labels: `성명`, `연락처`, `주소`
- Snackbar duration copy as recorded above

The line `KRDS는 공공 웹·앱이 일관된 사용자 경험을 제공할 수 있도록 디자인 토큰과 컴포넌트를 표준화합니다.` is the source's own illustrative reconstruction of tone, not verified page copy; it is not promoted as a live string.

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

**금지 표현.** "혁신적인", "차세대", "최고의", "고객님께서는 ~해 주시기 바랍니다", "데이터가 없습니다", "오류가 발생했습니다" 단독, "잘 모르시겠다면", 영문 보일러플레이트 "Oops, something went wrong". 「쉬운 우리말 쓰기」(국립국어원·행정안전부 권장): "기재하다" → "쓰다 / 적다", "취하한다" → "취소한다", "당해 연도" → "올해".

Reproduce those strings byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line. Reading the register table and the forbidden-pattern rule as the voice contract for the captured surfaces is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

The published KRDS documentation at `https://www.krds.go.kr/html/site/index.html` is a first-party issued specification; this file reconstructs only the values the source recorded from that specification and from the named official pages.

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

### Named gaps

These are unnamed values, not permissions to invent. Naming the list from the source's own unresolved fields, rather than adding surfaces the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation.

- high-contrast (`--krds-color-high-contrast-*`) hex values as a scale
- dark-mode hex values (the source names a token-layer swap, not the hexes)
- exact floating-button box-shadow (the source says only "약한 box-shadow")
- mobile 탭바 / 바텀시트 heights
- adopting-institution custom typefaces
- machine tokens for card, toggle, tab, toast, and floating-button (prose-only until recapture)
- per-control keyboard-focus treatment; the source's records state a 4px `#256EF4` outline as a generic Focus observation only
