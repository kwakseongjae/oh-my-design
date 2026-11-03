---
name: Goodoc
colors:
  primary: '#0073fa'
  primary-hover: '#056be1'
  primary-pressed: '#115fd4'
  canvas: '#ffffff'
  surface: '#f9f9fb'
  search-surface: '#f6f7f9'
  search-hover: '#f2f4f7'
  control-foreground: '#434956'
  input-foreground: '#31353f'
  secondary-foreground: '#5d6474'
typography:
  action:
    fontSize: 14px
    fontWeight: 600
  navigation:
    fontSize: 16px
    fontWeight: 600
  input:
    fontSize: 16px
    fontWeight: 400
  card-title:
    fontSize: 16px
    fontWeight: 700
rounded:
  none: 0px
  control: 6px
  card: 8px
components:
  app-download:
    type: button
    backgroundColor: '#0073fa'
    textColor: '#ffffff'
    rounded: 6px
    height: 40px
    padding: 0px 20px
    typography: 14px / 600
    hover: '#056be1'
    pressed: '#115fd4'
    use: Header 앱 다운로드 button; measured width 103.8px and line-height 21px. Second state pass hid reported fixed/sticky occluders for pointer sampling. Focus uses the browser auto outline, so no brand focus state is declared.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: pretendard
---

# Design System Inspiration of Goodoc

## Overview

### Visual Theme & Atmosphere

Goodoc (굿닥) connects people with hospital and pharmacy information, advance reception, remote consultations, prescription pickup and everyday health management. Its current [homepage positioning](https://www.goodoc.co.kr/) presents these as parts of one healthcare experience, connecting a medical visit with daily life. The product navigation also includes a 24-hour health conversation surface at `/goodbot`.

The interface puts a strong blue action colour on a white canvas, with cool pale-grey care cards, dark Korean labels and small illustrated medical icons. The captured promotion for late-night children's hospitals adds purple and yellow through artwork. Rounded controls and clearly separated task groups give the information-dense desktop surface an approachable appearance, while the blue download button provides a clear action at the edge of the header.

The measured homepage is the Korean-language root edition (`www.goodoc.co.kr/`, HTML `lang="ko"`); the probe recorded no regional redirect. The footer identifies a Seoul operating address.

### Brand Narrative

The homepage's current service story joins advance reception, remote consultation, medicine pickup and everyday health management. Its emphasis on connecting the visit with daily life gives the reference a broader scope than a hospital directory. The [24-hour health conversation page](https://www.goodoc.co.kr/goodbot), opened as a separate product source, confirms another named surface in that service family. A founding chronology or dated visual rebrand is not established here.

### Principles

Design guidance inferred from this capture: make the main action easy to find through blue; group care choices into illustrated cards; separate titles from supporting information through weight and grey levels; make search focus visible through its wrapper. These are reference-building observations, not an attributed company manifesto.

### Personas

No personas or audience research were verified.

## Colors

These names describe measured roles; the source variable names are supplied alongside them. The census has 127 computed root properties and 173 declared properties. Tailwind plumbing and Swiper variables are excluded from the brand palette.

| Role | Value | Evidence |
|---|---|---|
| Primary action | `#0073fa` | `--color-blue-60`; header app-download rest background |
| Primary hover | `#056be1` | `--color-blue-70`; the same button under verified hover |
| Primary pressed | `#115fd4` | `--color-blue-80`; the same button under verified active press |
| Canvas / action label | `#ffffff` | `--color-white`; primary button foreground and search wrapper focus background |
| Card surface | `#f9f9fb` | `--color-gray-10`; both measured cards at rest |
| Search wrapper rest | `#f6f7f9` | `--color-gray-15`; input's immediate ancestor |
| Search wrapper hover | `#f2f4f7` | `--color-gray-20`; input's immediate ancestor under hover |
| Control foreground | `#434956` | `--color-gray-80`; login and visible hospital-nav label; search wrapper focus border |
| Input foreground / card title | `#31353f` | `--color-gray-90`; input foreground and visible card title children |
| Supporting card label | `#5d6474` | `--color-gray-70`; supporting label children |

The login border is `1px solid rgba(128, 135, 153, 0.2)`. The active home-navigation surface in the survey is `rgba(0, 115, 250, 0.05)`. These alpha values remain prose rather than opaque colour tokens. The paragraph-ink census is empty: no paragraph body-text colour is assigned from the overall text-colour ranking.

## Typography

- **Official product-use documentation:** no published typography policy was verified. The family assignment below is based on the live product.
- **Live-loaded:** the census records `pretendard 400 700 normal`. Body, H1 and button family declarations are `pretendard, "pretendard Fallback"`; each measured control resolves its family to `pretendard`. Only Pretendard is promoted as the UI family.
- **Official distributed assets:** the [first-party stylesheet](https://www.goodoc.co.kr/_next/static/chunks/0.u.trxi-ygnm.css) declares a normal variable face at weights 400–700, with `font-display: swap`, served as `../media/PretendardVariable_subset-s.0j8lpgw5sztts.woff2` relative to that stylesheet. This resolves to the site's `/_next/static/media/` directory. The binary was not downloaded.
- **Fallback implementation evidence:** the census also marks `pretendard Fallback normal normal` loaded. Its source is the site's generated local fallback declaration. It receives no separate brand-family token or specimen.
- **Declared-only:** the framework sans and mono stacks remain CSS declarations; they do not establish additional brand faces.
- **Unresolved:** an official typography rationale, font licence and per-script glyph coverage were not verified. Substitute: none chosen.

Header action labels are 14px / 600 with a 21px line height. The input is 16px / 400 with a 24px line height. The hospital navigation's visible child label is 16px / 600; the link node itself inherits 16px / 400. Card titles are 16px / 700. The first-party `.body1_600` and `.body1_700` rules specify 24px line heights; `.body2_500`, used on the supporting labels, declares 14px / 500 with a 22px line height.

## Layout

At the measured 1440×1000 desktop viewport, the fixed header is 81px high and the sticky side-navigation column is 268px wide. The declared layout properties are `--gnb-h: 81px`, `--lnb-w: 268px` and `--container-max-w: 1440px`. The main cards start at x=328px. Four 251px-wide cards have 16px horizontal gaps in the survey; their internal padding is 20px. Navigation uses 12px vertical and 16px horizontal padding.

The main task groups are specialty-based hospital discovery, care availability, nearby vaccine prices and a service/download explanation. A wide promotional banner sits above those groups. These placements describe this captured desktop homepage.

### Responsive Behavior

Not measured beyond the 1440×1000 desktop viewport.

## Elevation & Depth

All six sampled controls have `box-shadow: none` at rest. Cards use their pale surface and spacing to separate from the white page. The promotion overlays the page with `rgba(22, 28, 45, 0.2)`, also present as `--color-dim-light`; no general elevation scale is established by this measurement.

## Motion & Easing

All six control identities compute `transition: all 0s ease 0s`. No non-zero component duration or easing curve is promoted. The promotional carousel's animation timing was not measured.

---

First-party sources: [homepage and legal footer](https://www.goodoc.co.kr/), [24-hour health conversation](https://www.goodoc.co.kr/goodbot), [theme and font stylesheet](https://www.goodoc.co.kr/_next/static/chunks/0.u.trxi-ygnm.css), [search component stylesheet](https://www.goodoc.co.kr/_next/static/chunks/0pxl~v..s60.h.css). Inspected 2026-11-03. Full raw measurement paths, the nonsense-path result and the source limits are in `verification.md` and `report.md`.

## Components

The reusable state-backed component is the header **앱 다운로드** button: 103.8×40px, 6px radius, `0px 20px` padding, 14px / 600 type and a 21px line height. Its background progresses from `#0073fa` to `#056be1` on hover and `#115fd4` on press; its foreground remains `#ffffff`. Its rest shadow is `none`. Keyboard focus adds a browser `auto` outline, which is not a brand token.

Other measured product geometries remain useful as construction references:

| Control | Rest geometry and styling |
|---|---|
| 로그인/가입 secondary button | 107.5×40px; 6px radius; `0px 20px`; 14px / 600; transparent on white; `#434956` label; alpha-grey border |
| 병원 찾기 navigation link | 171×48px; 6px radius; `12px 16px`; transparent on white; visible 16px / 600 child label in `#434956` |
| Search input node | 362×24px; 0 radius; 0 padding; 16px / 400; transparent; `#31353f` foreground, inside a separate coloured wrapper |
| 대상포진 vaccine card link | 251×87px; 8px radius; 20px padding; `#f9f9fb`; 16px / 700 title in `#31353f`, supporting label in `#5d6474` |
| 지금 진료중 service-card button | 251×135px; 8px radius; 20px padding; same surface and title/supporting colours |

Search changes its **immediate ancestor wrapper**, not the transparent input node: `#f6f7f9` at rest, `#f2f4f7` under hover, and `#ffffff` with a `1px solid #434956` border under press/focus. The focus styling disappears after blur. Keep the input and wrapper as separate elements; this reference leaves those ancestor states in prose rather than assigning their fill to the input's machine token.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| app-download | Background `#056be1` | Background `#115fd4` | Browser `auto` outline only |
| search | Wrapper background `#f2f4f7` | Wrapper white and `1px solid #434956` border; focus also present during press | Same wrapper treatment, reverted after blur |
| login | No computed change within sampled scope | No computed change within sampled scope | Browser `auto` outline only |
| hospital-nav | No computed change within sampled scope | No computed change within sampled scope | Browser `auto` outline only |
| vaccine-card / open-now | Size changes occurred while fixed/sticky layers were hidden; authored behaviour unresolved | Same confounded size changes | Browser `auto` outline only |

The second pointer pass used `hideOverlays: true`. Login comparison covers self/pseudo-elements, zero descendants and three ancestor levels; navigation adds five descendants including an image. Pointer-state snapshots matched the intended pseudo-classes, but their crop checks failed for controls other than app-download. The two cards' altered geometry is excluded from component tokens. Disabled, validation, loading and error states were not measured.

## Do's and Don'ts

- Use the measured three-step blue sequence for the primary action.
- Preserve the separate title and supporting-label colours inside cards.
- Give search focus to its wrapper border and fill, while keeping the input transparent.
- Keep the browser `auto` outline out of brand tokens.
- Do not turn promotional artwork colours, framework defaults or card resizing from the manipulated capture into brand behaviour.

## Voice & Tone

The live surface uses short Korean task labels and concrete convenience statements beneath care options. The homepage's stated promise is easy, trusted access to healthcare; the care cards explain practical benefits such as reduced waiting or evening availability. This describes observed copy, not an official voice manual.

## Agent Prompt Guide

“Build a Korean healthcare discovery page using the live-loaded Pretendard face, a white canvas, pale-grey care cards with 8px corners and 20px padding, and a 40px-high primary action with 6px corners. Give that action a `#0073fa` rest fill, `#056be1` hover fill, `#115fd4` pressed fill and white 14px / 600 text. Place the search input inside a separate wrapper whose focus fill is white and border is `1px solid #434956`.”

## Governance

### Known Gaps

- **Contrast, `app-download`.** Text `#ffffff` on `#0073fa` measures 4.35:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
