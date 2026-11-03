---
name: 1111 Job Bank
colors:
  primary: '#2066ec'
  primary-hover: '#1e5fdb'
  primary-pressed: '#1b57ca'
  foreground: '#495057'
  word: '#343a40'
  strong-ink: '#212529'
  canvas: '#ffffff'
  surface: '#f8f9fa'
  line: '#ced4da'
  filter-hover: '#e9ecef'
  home-blue: '#1a66ff'
  job-title: '#0f47b8'
  home-blue-background: '#f5f8ff'
  home-red: '#cf2323'
  home-red-background: '#fcf5f5'
typography:
  button:
    fontSize: 15px
    fontWeight: 400
    use: Visible 搜尋 span; button element itself is 14px/400. Noto Sans TC is live-loaded; Roboto is declared-only.
  label:
    fontSize: 16px
    fontWeight: 500
    use: Visible 職務 and 職接配 labels and service-card title.
  body:
    fontSize: 16px
    fontWeight: 400
    use: Search-input text, with 25.6px line height; no universal prose size inferred.
  heading:
    fontSize: 18px
    fontWeight: 500
    use: 行政助理 job-title link, with 27px line height; not an h1 scale.
rounded:
  none: 0px
  control: 8px
  filter: 10px
  card: 16px
spacing:
  service-card-x: 16
  service-card-y: 8
  filter-y: 7
  search-input-x: 40
components:
  search-button:
    type: button
    backgroundColor: '#2066ec'
    textColor: '#ffffff'
    rounded: 8px
    height: 40px
    padding: 0px
    typography: 15px / 400
    hover: '#1e5fdb'
    pressed: 'bg #1b57ca; box-shadow 0 0 0 3px rgba(32, 102, 236, 0.12)'
    use: 搜尋; 60px-wide primary action in the white search bar. Foreground and font describe the visible child span. Keyboard focus background and shadow are recorded in prose; the accompanying auto outline is excluded. No search was submitted.
  job-filter:
    type: button
    textColor: '#212529'
    rounded: 10px
    height: 40px
    padding: 7px 16px
    typography: 16px / 500
    hover: '#e9ecef'
    pressed: '#e9ecef'
    use: 職務; 171px-wide filter button, transparent at rest on the white search bar. Font describes the visible span; the parent is 14px/500. Browser auto focus outline omitted.
  nav-pair:
    type: button
    textColor: '#2066ec'
    rounded: 0px
    height: 64px
    padding: 1px 0px 0px
    typography: 16px / 500
    hover: 'border-bottom 2px solid #2066ec'
    pressed: 'border-bottom 2px solid #2066ec'
    use: 職接配; a 76px-wide navigation link to /job-pair, transparent on the white header. Its reserved 2px transparent bottom border becomes blue. Font describes the visible span; parent weight is 400. Browser auto focus outline omitted.
  service-card:
    type: card
    backgroundColor: '#f8f9fa'
    textColor: '#212529'
    border: '1px solid #e9ecef'
    rounded: 16px
    height: 66px
    padding: 8px 16px
    typography: 16px / 500
    hover: box-shadow rgba(33, 37, 41, 0.2) 0px 0px 1px 0px, rgba(33, 37, 41, 0.08) 0px 2px 16px 0px; backdrop-filter blur(30px)
    pressed: box-shadow rgba(33, 37, 41, 0.2) 0px 0px 1px 0px, rgba(33, 37, 41, 0.08) 0px 2px 16px 0px; backdrop-filter blur(30px)
    use: '各地人力銀行 / 活動資訊一覽; a 226.9px-wide link to https://job-fair.1111.com.tw/. Foreground and font describe the title; parent is #343a40 at 14px/400 and subtitle is #495057. Hover and press add shadow and computed backdrop blur while retaining the opaque background. Browser auto focus outline omitted.'
fonts:
  roles:
    sans: Noto Sans TC
---

# Design System Inspiration of 1111 Job Bank

## Overview

### Visual Theme & Atmosphere

1111 Job Bank is a Taiwanese employment platform for job seekers and employers. Its terms describe free job search, applications, automatic résumé matching and career services. The company page dates 全球華人股份有限公司 to “88年11月11日” (11 November 1999) and uses “1定要…” to introduce its commitments to business growth, employee pay, learning and social contribution. [Company](https://www.1111.com.tw/13SP/summary/index.asp) · [Terms](https://www.1111.com.tw/policies)

The captured homepage combines a red 1111 wordmark, white ground, blue search controls, pale service cards and a red recommendation area. A large campaign image sits behind the compact search bar; job cards keep titles, employers, pay and location close together. These are observations of the live page, rather than an officially published visual philosophy.

The current product guide presents AI résumé assistance, short-form applications, direct messaging and portfolio links alongside matching for different career stages. That broader set of tools is visible in the homepage's AI recommendation labels and résumé-import navigation. No dated visual rebrand was verified. [Product guide](https://www.1111.com.tw/introduce)

The measured homepage is the Traditional Chinese Taiwan surface at `www.1111.com.tw/`, with HTML `lang="zh-Hant-TW"`; the capture had no regional redirect.

### Brand Narrative

The company page ties the repeated “1” to helping businesses earn, employees gain pay, people learn and society benefit. On the measured product surface, the red numeric wordmark anchors an interface whose everyday actions are blue. The combination is a useful design reference: the distinctive number mark introduces a practical employment service with dense, legible job information. This visual reading is inferred from the capture, not presented as the company's design rationale. [Company](https://www.1111.com.tw/13SP/summary/index.asp)

### Principles

The following are implementation cues inferred from the measured homepage: make search prominent, separate job titles from metadata through colour and weight, group career-stage choices, and reserve richer hover depth for controls where it was observed. The company page's operating commitments concern business and social outcomes; they are not a published UI specification.

### Personas

The product guide lists students, new graduates, employed workers, senior professionals and people returning to employment as matching audiences; no research personas were verified. [Product guide](https://www.1111.com.tw/introduce)

## Colors

The palette below combines the homepage census with per-control computed styles. Role names describe these observations; no official brand manual was found.

| Role | Value | Evidence and use |
|---|---|---|
| Primary | `#2066ec` | `--color-main`, `--color-blue-500`; search button and header link |
| Primary hover | `#1e5fdb` | Search-button hover; also its keyboard-focus background |
| Primary pressed | `#1b57ca` | Search button while held down |
| Foreground | `#495057` | Most frequent paragraph ink: 33 paragraphs; `--color-word-3`, `--color-gray-600` |
| Word | `#343a40` | `--color-word`, `--color-gray-700`; another 8 paragraphs and several control parents |
| Strong ink | `#212529` | `--color-gray-800`; filter label and service-card title |
| Canvas | `#ffffff` | White backgrounds, search-input fill and search-button label |
| Surface | `#f8f9fa` | `--color-gray-50`; service-card fill |
| Line | `#ced4da` | `--color-gray-200`; most frequent nontransparent border colour, 38 entries |
| Filter hover | `#e9ecef` | `--color-footer`, `--color-gray-100`; filter hover and pressed fill, service-card border |
| Home blue | `#1a66ff` | `--color-home-blue-500`; present in the rendered census |
| Job title | `#0f47b8` | `--color-home-blue-700`; measured job-title link |
| Home blue background | `#f5f8ff` | `--color-home-blue-bg`; 16 census backgrounds |
| Home red | `#cf2323` | `--color-home-red-600`; the selected AI recommendation tab in the survey |
| Home red background | `#fcf5f5` | `--color-home-red-bg`; 4 census backgrounds |

The site distinguishes the general action blue from its `--color-home-blue-*` ramp. Do not replace the search-button states with a nearby blue ramp value. The census includes the whole document and six open shadow roots; counts are element counts, not visual area.

Tailwind infrastructure, its recognizable default values, carousel/lightbox variables, notification implementation variables and unattributed shadow palettes are excluded from the published token set. The complete namespace decisions and raw values are in `report.md`.

## Typography

| Evidence class | Finding |
|---|---|
| Official product use | No opened company source documents a product typeface. |
| Live-loaded | `document.fonts` reports **Noto Sans TC**, normal, weights **400, 500, 700**. This is the only family admitted to the typography family token. |
| Official distributed assets | The census finds a same-site `@font-face` named `runes` at `/_nuxt/0I5pJ268p0923e18.B1uDHa1B.woff2`. It was not loaded; its role and license are unresolved. No specimen. |
| Declared-only | Heading/button CSS names Roboto first, followed by Noto Sans TC, Helvetica Neue, Helvetica, Arial, PingFang TC, Heiti TC and Microsoft JhengHei. None of those other named faces is in the loaded list. Body CSS instead starts with `v-sans` and a system stack. No specimens for these declarations. |
| Unresolved | Actual Latin glyph selection, the purpose of `runes`, font licensing and a company-wide type policy were not established. Substitute: none chosen. |

The page links Google Fonts stylesheets requesting Noto Sans TC with Roboto, and Noto Sans TC with Prompt. Their rules were unreadable to the capture's CSSOM walk. Noto Sans TC's loaded status is verified; an individual font-file source URL is not. Prompt was requested in a stylesheet URL but is absent from the loaded list. The unloaded `swiper-icons` face is carousel infrastructure.

Use the visible label metrics, which sometimes differ from their parent controls:

| Text | Visible size / weight | Parent size / weight | Other measured metric |
|---|---|---|---|
| 搜尋 | 15px / 400 | 14px / 400 | White label inside 40px button |
| 職務 | 16px / 500 | 14px / 500 | Parent line height 22.4px |
| 職接配 | 16px / 500 | 16px / 400 | 64px-high navigation link |
| 各地人力銀行 | 16px / 500 | 14px / 400 | Card title |
| Search input | 16px / 400 | Same element | 25.6px line height |
| 行政助理 | 18px / 500 | Same on title link | 27px line height |

These measurements establish specific UI roles, not a complete heading or paragraph scale.

## Layout

At the measured 1440×1000 viewport, the campaign link spans 1320px, matching `--width-lg-content`. The desktop header links are 64px high, matching `--height-header-desktop`.

The visible order is header, campaign/search hero, career-stage navigation, horizontal service cards and a recommendation panel with four job-card columns visible. Within job cards, blue job titles lead; employer names sit above pay, location and experience rows. Preserve that information order when using this reference.

### Responsive Behavior

Only desktop 1440×1000 was captured; mobile layouts, breakpoint behaviour and touch states were not measured.

## Elevation & Depth

The measured service card has no shadow at rest. Hover and pressed states both compute:

```css
box-shadow: rgba(33, 37, 41, 0.2) 0px 0px 1px 0px, rgba(33, 37, 41, 0.08) 0px 2px 16px 0px;
backdrop-filter: blur(30px);
```

The card's background remains opaque `#f8f9fa`. The computed blur does not establish a visible frosted-glass effect.

The search-button press and keyboard-focus captures add `0 0 0 3px rgba(32, 102, 236, 0.12)` as the nonzero shadow layer. Its rest shadow is none. No site-wide elevation scale was verified.

## Motion & Easing

The service-card link's raw computed transition is `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s`. The probe reports a 300ms longest transition and waited 900ms before each state sample. This is measured component behaviour, not a global motion rule.

The other five sampled controls report `all 0s ease 0s`. Carousel motion, campaign changes and reduced-motion behaviour were not measured.

---

**First-party sources:** [Live homepage](https://www.1111.com.tw/) (census, controls and screenshots, 2026-11-03); [company](https://www.1111.com.tw/13SP/summary/index.asp) (company date, operating commitments, Taipei headquarters); [terms and privacy](https://www.1111.com.tw/policies) (operators and product services); [product guide](https://www.1111.com.tw/introduce) (features and audiences); [nonsense-path control](https://www.1111.com.tw/zz-this-does-not-exist) (HTTP 200 after error-page redirect, 17-byte body with no title; not a design-system source).

## Components

Four controls have measured authored hover or pressed changes and are included as components.

- **Search action — 搜尋:** 60×40px, 8px radius, zero padding; blue background with a white 15px/400 child label. Hover changes `#2066ec` to `#1e5fdb`. Press changes it to `#1b57ca` and adds a 3px outer shadow at `rgba(32, 102, 236, 0.12)`. The parent element's grey colour is not the visible label colour.
- **Job filter — 職務:** 171×40px, 10px radius, 7px vertical and 16px horizontal padding. Transparent over the white search bar, with a dark 16px/500 label. Hover and press fill it with `#e9ecef`.
- **Navigation — 職接配:** a link to `/job-pair`, 76×64px, square corners and padding `1px 0px 0px`. The visible label is blue, 16px/500. Hover and press change the reserved 2px transparent bottom border to solid `#2066ec`; its transparent background stays over the white header.
- **Service card — 各地人力銀行 / 活動資訊一覽:** a link to `https://job-fair.1111.com.tw/`, 226.9×66px, 16px radius, padding `8px 16px`, fill `#f8f9fa`, 1px `#e9ecef` border. Its title is `#212529` at 16px/500, its subtitle is `#495057`, and its parent reports `#343a40` at 14px/400. Hover and press add the shadow and computed backdrop blur detailed in §6.

Two further controls retain their measured geometry in prose:

- **Search input — 搜尋工作職稱或公司名:** 284×40px, 8px radius, `8px 40px` padding, white fill, `#495057` text at 16px/400, no border or rest shadow. Hover was measured with no change in the stated comparison scope; press and Tab focus show an `auto` outline. It is excluded from interactive component tokens.
- **Job-title link — 行政助理:** `/job/132836124/`, 176×27px, 0px radius and padding, transparent over white, `#0f47b8` at 18px/500, no rest border or shadow. Hover and press are UNMEASURED; keyboard focus shows only a browser `auto` outline. It is excluded from interactive component tokens.

Measured radii are 0px for navigation/title links, 8px for search controls, 10px for the filter and 16px for service cards. A separate selected recommendation tab in the survey has 40px corners. Padding tokens retain their context: service-card x/y 16/8px, filter y 7px, search-input x 40px. No global spacing scale is inferred.

### States

Hover was confirmed by `:hover` for search, filter, navigation, input and service card. Pressed captures confirm `:active` for those same five. Job-title pointer states remain UNMEASURED because `:hover` did not match.

The search button's Tab focus changes its background to `#1e5fdb` and adds the translucent 3px shadow. Its simultaneous `auto` outline is the browser's ring. All other measured focus changes are `auto` outlines only, including the input's blue outline. No `auto` outline is published as a brand focus token. The search button's authored focus changes are kept in prose; no component focus field is emitted. Every control's `persistsAfterBlur` list is empty.

The input's hover “no change” is limited to the tool's computed-style comparison: self and pseudo-elements, zero descendants, and three ancestor levels with pseudo-elements, including colours, borders, drawn outlines, shadow, transform, opacity, filters, size, decoration, backgrounds and masks. Siblings, pixels, closed shadow roots and cross-origin frame contents were not compared. Disabled, validation and submitted states were not measured.

## Do's and Don'ts

- Use blue for the measured search action and navigation; preserve the distinct hover and pressed blues.
- Use the title span's size, weight and colour when reconstructing a control with a differently styled parent.
- Keep the rounded search bar and service cards, the career-stage navigation and the compact job metadata hierarchy.
- Keep Noto Sans TC's live-loaded status explicit. Do not present a CSS fallback as a verified loaded face.
- Do not apply the service-card effect to every job card: only the service-card link's states were measured successfully.

## Voice & Tone

The product guide's “找工作求職懶人包，帶你見招拆招！” offers practical help in conversational Traditional Chinese. The homepage's labels pair short actions such as “搜尋” with career-stage choices. The terms' opening promises protection of personal data and safer job seeking. These examples support direct task labels and reassuring help copy; no formal voice guide was verified. [Guide](https://www.1111.com.tw/introduce) · [Terms](https://www.1111.com.tw/policies)

## Agent Prompt Guide

“Build a desktop job-search hero on white with a 1320px campaign area. Give its 60×40px search button an 8px radius, `#2066ec` fill and white 15px/400 label; hover `#1e5fdb`, pressed `#1b57ca`. Put a 171×40px transparent job filter beside the field; hover and press fill `#e9ecef`. Use Noto Sans TC as the live-loaded face.”

“Build the measured service-card link at 226.9×66px with 16px corners, `8px 16px` padding, pale fill, thin border, a 16px/500 dark title and secondary description. Apply only its measured shadow and backdrop changes.”
