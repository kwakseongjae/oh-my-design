---
id: theguardian
name: The Guardian
country: UK
category: consumer-tech
homepage: "https://www.theguardian.com"
primary_color: "#052962"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=theguardian.com&sz=128"
verified: "2026-09-23"
added: "2026-09-23"
omd: "0.1"
ds:
  name: "Source"
  url: "https://theguardian.design/"
  type: system
  description: "The Guardian's digital design system, documenting colour (core and special palettes), typography presets for web and apps, a 4px spacing system, grids, iconography and brand assets. On theguardian.com it surfaces as about 560 component-scoped colour tokens — one custom property per component per colour role (--masthead-nav-background, --article-link-text, --section-border-opinion) — built on Source's brand ramp and the news pillar colours."
tokens:
  source: live-extract
  extracted: "2026-09-23"
  colors:
    primary: "#052962"
    brand-dark: "#041f4a"
    brand-deepest: "#001536"
    brand-bright: "#0077b6"
    brand-muted: "#506991"
    brand-pale: "#c1d8fc"
    link: "#c70000"
    highlight: "#ffe500"
    foreground: "#121212"
    text-secondary: "#707070"
    news-border: "#333333"
    canvas: "#ffffff"
    surface: "#f6f6f6"
    surface-muted: "#ededed"
    line: "#dcdcdc"
    line-strong: "#bababa"
    opinion: "#c74600"
    opinion-bright: "#e05e00"
    culture: "#866d50"
    lifestyle: "#bb3b80"
    sport-deep: "#005689"
  typography:
    family: { display: "Guardian Headline", sans: "Guardian Text Sans" }
    nav: { size: 17, use: "pillar navigation and utility links, 700" }
  rounded: { sm: 12, lg: 40, pill: 1000 }
  components:
    link-pillar: { type: "button", bg: "transparent", fg: "#ffffff", height: "64px", padding: "4px 0 4px 4px", font: "17px / 700", hover: "transparent", focus: "ring 0 0 0 3px #0077b6", use: "Pillar and utility links on the navy masthead (News, Opinion, Sport, Sign in). Hover changes nothing; focus draws a 3px brand-blue ring as a box-shadow." }
    button-masthead: { type: "button", bg: "transparent", fg: "#ffffff", hover: "transparent", focus: "ring 0 0 0 3px #0077b6", use: "Masthead buttons — Show more and the Edition switcher. The same: no hover change, the same 3px #0077b6 ring on focus." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-23"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.theguardian.com/uk", inspected: "2026-09-23" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.theguardian.com/uk", captured: "2026-09-23" }
    - { id: control-404, kind: product-surface, url: "https://www.theguardian.com/zz-this-does-not-exist", captured: "2026-09-23" }
    - { id: source-ds, kind: official-doc, url: "https://theguardian.design/", captured: "2026-09-23" }
    - { id: fonts-readme, kind: official-doc, url: "https://raw.githubusercontent.com/guardian/fonts/main/README.md", captured: "2026-09-23" }
  conflicts: []
  claims:
    tokens.colors.brand-bright: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.brand-dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.brand-deepest: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.brand-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.brand-pale: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.culture: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.highlight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.lifestyle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.line: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.line-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.link: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.news-border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.opinion: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.opinion-bright: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.sport-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.surface-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.components.button-masthead.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-masthead.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-masthead.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-masthead.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-masthead.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-masthead.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-pillar.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-pillar.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-pillar.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-pillar.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-pillar.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-pillar.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-pillar.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-pillar.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-pillar.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
---
# Design System Inspiration of The Guardian

## 1. Visual Theme & Atmosphere

The Guardian is a British news organisation. Its current look dates from January 2018, when the paper left the Berliner format it had
used since 2005 for a tabloid, and redesigned print and digital together. As its executive creative
director Alex Breuer told Creative Review, the in-house team replaced the old masthead with a new one
set in black Guardian Headline; It's Nice That reported the redesign under the headline "The Guardian
unveils redesign across print and online".

The type is its own. Source, the Guardian's design system, says plainly that "The Guardian has four
bespoke typefaces" — Guardian Headline, Guardian Text Egyptian, Guardian Text Sans and Guardian
Titlepiece — and the Guardian's font repository states they are owned by Commercial Type and licensed
only for Guardian websites and apps.

On the page: a deep **navy `#052962`** masthead over a lighter white page, black-ish ink
**`#121212`**, links and branding in a strong **red `#c70000`**, and a yellow **`#ffe500`** used
for highlights — star ratings, the menu's close button, bylines. Each news pillar carries its own
colour: news in greys, **opinion orange `#c74600`**, **sport blue `#0077b6`**, **culture brown
`#866d50`**, **lifestyle pink `#bb3b80`**.

What makes it worth reading:

- **Tokens per component, not per palette.** About 560 custom properties, each a component and a
  colour role: `--masthead-nav-background`, `--article-link-text`, `--football-match-*`.
- **Pillars are colour.** A reader knows the section before reading its name.
- **One focus ring everywhere** — 3px of brand blue, drawn as a box-shadow.

### Primary tasks
- Read the day's stories; move between pillars and sections.
- Sign in; subscribe or support; search.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `theguardian.com/uk`: **557 custom properties** on the root,
about 560 across all stylesheets, in 238 prefixes. Every one is the Guardian's own — a check against
framework, consent-manager and analytics signatures found none. The frontend declares every
component's palette on every page, so `--football-match-*` and `--cricket-scorecard-*` are present
even where nothing football or cricket renders; the count belongs to the frontend, not to this page.

### Brand — navy to pale blue

Source's core palette, matched on the live page:

- **Primary** (`#052962`) — `brand.400`, `--masthead-nav-background`. The masthead.
- **Brand Dark** (`#041f4a`) — `brand.300`, `--masthead-top-bar-background`.
- **Brand Deepest** (`#001536`) — `brand.100`.
- **Brand Bright** (`#0077b6`) — `brand.500`. The focus ring on every measured control, and also the
  sport pillar colour.
- **Brand Muted** (`#506991`) — `brand.600` · **Brand Pale** (`#c1d8fc`) — `brand.800`.

### Red and yellow

- **Link** (`#c70000`) — `--article-link-text` and `--branding-link-text` (53 text elements).
  The article-link hover token is the same red — links do not change colour on hover.
- **Highlight** (`#ffe500`) — the most-painted non-neutral background (54): star ratings, the
  menu's close button, bylines, live football headers, age warnings, carousel arrows on hover. One
  colour, twelve tokens. `--masthead-nav-link-text-hover` also names it, but hovering a masthead link
  changed nothing on the measured page.

### Ink and neutrals

- **Foreground** (`#121212`) — `--article-text` and `--headline-colour`. 4,554 text elements; one
  ink for headline and body.
- **Text Secondary** (`#707070`) — 416 elements.
- **News Border** (`#333333`) — the news pillar's rule colour.
- **Canvas** (`#ffffff`) · **Surface** (`#f6f6f6`, 35) · **Surface Muted** (`#ededed`, 20) ·
  **Line** (`#dcdcdc`) · **Line Strong** (`#bababa`, the most common border).

### Pillars

| pillar | title | rule |
|---|---|---|
| News | `#121212` | `#333333` |
| Opinion | `#c74600` | **`#e05e00`** |
| Sport | `#0077b6` | `#0077b6` |
| Culture | `#866d50` | `#866d50` |
| Lifestyle | `#bb3b80` | `#bb3b80` |

From `--article-section-title-*` and `--section-border-*`. Sport also has a darker competition tone,
**Sport Deep** `#005689` (`--sport-competition-text`).

## 3. Typography Rules

### Font family

Loaded on the page (`document.fonts`): **GH Guardian Headline** 500 and 700 and **GuardianTextSans**
400 and 700, self-hosted on `assets.guim.co.uk`. Headlines compute
`"GH Guardian Headline", "Guardian Egyptian Web", Georgia, serif`; text, links and buttons compute
`GuardianTextSans, "Guardian Text Sans Web", "Helvetica Neue", Helvetica, Arial, …`.

- **Guardian Text Egyptian** is preloaded (`<link rel="preload" as="font">`) but not used on the
  front, which has no article body — it is the article-body face, with no live specimen here.
- **Guardian Titlepiece** was fetched from `interactive.guim.co.uk`, the interactive-graphics
  domain, for an embedded module; Source notes it is not available on theguardian.com itself.

All four are recorded in the narrative; the two that render on the front are the tokens.

### Scale

Masthead links set 17px at 700. Source publishes typography presets for web and apps; the front's
full size census was not taken.

## 4. Component Stylings

Two components, every state on its own page load, focus read before the mouse moved. The delegated
probe rejected the consent banner ("No, thank you") before measuring; the independent re-measure
ran with it in place and read the same focus ring.

- **Pillar and utility links** — white 17px/700 on the navy masthead, 64px tall. **Hover changes
  nothing.**
- **Masthead buttons** — Show more, the Edition switcher. **Hover changes nothing.**
The search field inside the expanded navigation — `rgba(255,255,255,0.1)`, white text, a 1000px
pill — is a Google Custom Search box ("Search with Google"). The probe found its background, text,
border, outline and shadow unchanged on focus, but did not read transform or opacity, so it is not
declared as a component and its focus is not recorded as absent.

### Focus

| control | focus |
|---|---|
| Pillar links, Sign in, Print subscriptions, Show more, Edition | `box-shadow: 0 0 0 3px #0077b6`, outline `none` |

The ring is not a custom property — no `--focus*` token exists among the 560 — so it is written in
component styles, reusing `brand.500`. It is never the browser's `auto` ring.

### Radius

Mostly circles and pills: `50%` ×70, `100%` ×15, 40px ×14, 12px ×5, 1000px (the search pill), 3px.
Every pixel value is a multiple of 4.

## 5. Layout Principles

Source's spacing system uses a 4px increment — because common screen sizes are divisible by four —
with 40px between containers and 24px (default) or 16px (compact) within one.

## 6. Depth & Elevation

Flat. The rendered page has one box-shadow at rest, a hairline `rgba(0,0,0,0.1) 0 0 0 1px`. The only
other shadow is the focus ring.

## 7. Do's and Don'ts

### Do
- Put navigation on navy `#052962` and text on white in `#121212`.
- Colour a story by its pillar — opinion `#c74600`, sport `#0077b6`, culture `#866d50`, lifestyle
  `#bb3b80`.
- Use red `#c70000` for links and yellow `#ffe500` only as a highlight.
- Draw focus as a 3px `#0077b6` ring.

### Don't
- Don't substitute another serif for Guardian Headline under its name; the faces are licensed to the
  Guardian.
- Don't add hover colour to masthead links — they have none.
- Don't count the per-component token list as "used on this page"; it is emitted everywhere.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#052962` masthead navy · `#041f4a` top bar · `#0077b6` focus / sport · `#121212` ink ·
`#707070` secondary · `#c70000` links · `#ffe500` highlight · `#f6f6f6` / `#ededed` surfaces ·
`#dcdcdc` / `#bababa` rules · opinion `#c74600` · culture `#866d50` · lifestyle `#bb3b80`

### Example Component Prompts
- "A navy masthead `#052962` with white 17px/700 Guardian Headline pillar links; focus
  `0 0 0 3px #0077b6`; no hover change."
- "An opinion story card: title in `#c74600`, a `#e05e00` rule above, body `#121212` in Guardian
  Text Sans."

## 10. Voice & Tone

Not assessed as authored voice. 21,210 characters on the measured front.

## 11. Brand Narrative

The Guardian redesigned itself around a format change and kept its identity in type rather than in
colour: four typefaces drawn for it and licensed to no one else, a black headline masthead, and a
navy digital masthead from its Source palette. Colour does the navigation — each pillar has its own,
so a reader knows opinion from sport at a glance — while red marks links and a single yellow
highlights whatever deserves a second look.

Underneath, the site is generated from one palette declaration per component, hundreds of them, all
drawn from Source. It is a system built for a newsroom that ships a new kind of module most weeks.

## 12. Principles

- **Type is the brand.** Four bespoke faces carry the identity.
- **Colour is wayfinding.** Pillars, not decoration.
- **One ring for focus.** 3px of brand blue on every control.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Two components. Hover: no change on masthead links or buttons. Focus: a 3px `#0077b6` box-shadow
ring on both. No disabled state was observed.

## 15. Motion & Easing

Not measured. No motion token is published among the custom properties.

---

**Tier 1 sources:** https://www.theguardian.com/uk (live UK front — 557 root custom properties read via `getComputedStyle`, all Guardian-authored; controls measured at rest, hover, pressed and focus after rejecting consent; GH Guardian Headline and GuardianTextSans confirmed loaded, captured 2026-09-23); https://theguardian.design/ (Source, the Guardian's design system — core palette brand.100–800 matched to the live tokens, "four bespoke typefaces", 4px spacing; its nonsense-path control /zz-this-does-not-exist returns a real 404, read 2026-09-23); https://raw.githubusercontent.com/guardian/fonts/main/README.md (the Guardian's font repository — the faces are owned by Commercial Type and licensed only for Guardian websites and apps, read 2026-09-23)

**Regional sources:** https://www.creativereview.co.uk/guardian-tabloid-redesign/ (Creative Review — "Goodbye Berliner, hello tabloid: Alex Breuer on the Guardian's redesign"); https://www.itsnicethat.com/news/theguardian-graphicdesign-150118 (It's Nice That — "The Guardian unveils redesign across print and online")
