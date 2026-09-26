---
id: hatena
name: Hatena
country: JP
category: consumer-tech
homepage: "https://www.hatena.ne.jp"
primary_color: "#00A0F0"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=hatena.ne.jp&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Hatena portal tokens"
  url: "https://www.hatena.ne.jp/"
  type: system
  description: "70 hand-written custom properties on the Hatena portal, no framework beside them: a highlight blue with darker and lighter steps, one colour per Hatena service (Bookmark, Blog, Question, Anond, Parks, the portal), the five Hatena Star colours, a dark-ready text and background set, an 11-step font-size scale, four radii, and 29 icons as SVG URLs. The type is the operating system's — nothing is downloaded."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#00a0f0"
    primary-dark: "#0086d6"
    primary-light: "#1abaff"
    foreground: "#111111"
    text-token: "#121212"
    text-muted: "#999999"
    text-secondary: "#666666"
    surface: "#eaeaea"
    surface-pressed: "#cccccc"
    canvas: "#ffffff"
    attention: "#ff2d32"
    users: "#ff4166"
    service-bookmark: "#00a6e4"
    service-blog: "#2f2f2f"
    service-question: "#009cbc"
    service-anond: "#4d77f0"
    service-parks: "#14aa50"
    star-yellow: "#ffb400"
    star-green: "#00d300"
    star-red: "#ff003e"
    star-blue: "#00a1de"
    star-purple: "#b400c0"
    dark-bg: "#181818"
    dark-divider: "#282828"
    dark-border: "#333333"
  typography:
    f11: { size: 11, use: "--size-font-11" }
    f12: { size: 12, use: "--size-font-12; service links" }
    f13: { size: 13, use: "--size-font-13" }
    f14: { size: 14, use: "--size-font-14; buttons, the search field and entry titles" }
    f15: { size: 15, use: "--size-font-15" }
    f16: { size: 16, use: "--size-font-16" }
    f17: { size: 17, use: "--size-font-17" }
    f18: { size: 18, use: "--size-font-18" }
    f19: { size: 19, use: "--size-font-19" }
    f20: { size: 20, use: "--size-font-20" }
    f24: { size: 24, use: "--size-font-24, the largest step" }
  rounded: { xs: 2, s: 4, m: 8, l: 16 }
  components:
    button-signup: { type: "button", bg: "#00a0f0", fg: "#ffffff", radius: 4, height: "32px", padding: "8px 16px", font: "14px / 700", hover: "#00a0f0", pressed: "#00a0f0", use: "はてなIDを作る(無料) in the header — --color-service-portal as a fill (.Header.signup). Hover and press change nothing; focus is the browser's ring." }
    button-signin: { type: "button", bg: "transparent", fg: "#00a0f0", radius: 4, height: "32px", padding: "8px 16px", font: "14px / 700", hover: "transparent", pressed: "transparent", use: "ログイン — the portal blue as a label (.Header.signin). No hover change." }
    input-search: { type: "input", bg: "#eaeaea", fg: "#111111", radius: 16, height: "32px", padding: "0 32px 0 40px", font: "14px / 400", pressed: "#cccccc", focus: "#cccccc", use: "The entry search field, a grey pill. It darkens to #cccccc when pressed and while focused — the one authored state on the page." }
    link-entry: { type: "button", bg: "transparent", fg: "#111111", height: "56px", font: "14px / 700", hover: "transparent", pressed: "transparent", use: "Entry titles in the feeds. No hover change; the browser's ring on focus." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.hatena.ne.jp/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.hatena.ne.jp/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.hatena.ne.jp/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: logo-design-post, kind: official-doc, url: "https://design.hatenastaff.com/entry/2021/11/01/151330", captured: "2026-09-26" }
    - { id: logo-press-release, kind: official-doc, url: "https://hatena.co.jp/press/release/entry/2021/07/15/113000", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.attention: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.dark-bg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.dark-border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.dark-divider: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.service-anond: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.service-blog: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.service-bookmark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.service-parks: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.service-question: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.star-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.star-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.star-purple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.star-red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.star-yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-token: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.users: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-signin.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signin.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signin.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signin.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signin.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signin.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signin.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signin.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signin.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signin.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-entry.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-entry.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-entry.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-entry.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-entry.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-entry.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-entry.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-entry.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.l: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.m: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.s: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f11.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f11.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f12.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f12.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f13.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f13.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f14.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f14.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f15.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f15.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f16.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f16.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f17.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f17.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f18.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f18.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f19.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f19.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f20.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f20.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f24.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.f24.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Hatena (はてな)

## 1. Visual Theme & Atmosphere

Hatena is a Kyoto internet company. Its first service, the Q&A site 人力検索はてな, opened on 15 July
2001, and it grew into a family of community services — Hatena Bookmark, Hatena Blog, Anond,
Hatena Question, Hatena Parks. The portal at `www.hatena.ne.jp` is the front door to all of them.

For its 20th anniversary, on 15 July 2021, Hatena renewed its corporate logo. As the designer who led
the work explains on Hatena's own design blog, and as ITmedia reported, the old mark — a "?" built
from a row of diamond tiles — became a "?" built from round **nodes**, drawing on the idea of binary
code, and the Hatena wordmark changed from **blue to black**.

The portal is plain and dense: black text **`#111111`**
on white, a single bright **highlight blue `#00a0f0`** for signing up and for the selected tab, grey
pill fields **`#eaeaea`**, square-ish 4px corners, and no shadows at all. Everything is set in the
operating system's own Japanese font.

What makes it worth reading:

- **A colour per service.** `--color-service-bookmark` `#00a6e4`, `-blog` `#2f2f2f`, `-question`
  `#009cbc`, `-anond` `#4d77f0`, `-parks` `#14aa50`, `-portal` `#00a0f0` — each service's "more"
  button and introduction link takes its own.
- **The Hatena Star is in the palette.** Five star colours are tokens, from `--color-star-yellow`
  `#ffb400` to `--color-star-purple` `#b400c0`.
- **No web font.** Ten `@font-face` rules exist, and every one maps "Hiragino Sans" to a `local()`
  system face.

### Primary tasks
- Read what is trending across Hatena's services; search entries.
- Create a Hatena ID or sign in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `www.hatena.ne.jp`: **70 custom properties**, all hand-written —
`--color-*` 26, `--icon-*` 29 (SVG URLs on the same origin), `--size-font-*` 11, `--ui-radius-*` 4.
No framework variables. Hatena Bookmark (`b.hatena.ne.jp`), an older build, has none.

### Highlight blue

- **Primary** (`#00a0f0`) — `--color-highlight` and `--color-service-portal`. The sign-up button, the
  sign-in label, the selected feed tab's marker, the user ID.
- **Primary Dark** (`#0086d6`) — `--color-highlight-darker` · **Primary Light** (`#1abaff`) —
  `--color-highlight-lighter`.

### Ink and grey

- **Foreground** (`#111111`) — the rendered colour of 811 text elements. The token
  `--color-text-0` is **`#121212`**, one step lighter; the page paints `#111111`.
- **Text Muted** (`#999999`) — `--color-text-3` (104 elements) · **Text Secondary** (`#666666`) —
  `--color-text-4`.
- **Surface** (`#eaeaea`) — the search field and pill fills, 52 elements. It is **not a token**; the
  value is written directly. **Surface Pressed** (`#cccccc`) — the search field when pressed or
  focused; it equals `--color-text-2`.
- **Canvas** (`#ffffff`) — `--color-bg-0`.

### Service colours

**Bookmark** `#00a6e4` · **Blog** `#2f2f2f` · **Question** `#009cbc` · **Anond** `#4d77f0` · **Parks**
`#14aa50` · **Portal** `#00a0f0`. Component rules wire them in — `BookmarkEntries … more
{ background-color: var(--color-service-bookmark) }`, `ServiceIntro … anond a { color:
var(--color-service-anond) }` and so on, 17 rules in all. On the logged-out portal only the portal
colour renders; the others belong to feed sections and introductions not drawn in that state.

### Attention, users, stars

**Attention** `#ff2d32` (`--color-attention`) · **Users** `#ff4166` (`--color-users`, the bookmark
count, 82 elements) · stars **`#ffb400`** yellow, **`#00d300`** green, **`#ff003e`** red,
**`#00a1de`** blue, **`#b400c0`** purple.

### A dark set, not shown

`--color-bg-1` `#121212`, `--color-bg-2` **`#181818`**, `--color-divider` **`#282828`**,
`--color-border` **`#333333`**, `--color-text-1` `#fff` and `--color-text-2` `#ccc` describe a dark
surface. It did not render on the measured light page.

### Hidden links, not a finding

Service links in the page's closed menus compute the browser's default link blue (`#0000ee`), but
they are not visible — zero-size, inside collapsed panels. They are not recorded as a style.

## 3. Typography Rules

### Font family

`-apple-system, "system-ui", "Hiragino Sans", "Noto Sans JP", sans-serif` on body and headings. The
ten `@font-face` rules on the page all declare "Hiragino Sans" with `src: local("HiraginoSans-Wn")`,
which only pins weights of the macOS system face; no font file is served, and there is no font CDN.
**No brand typeface exists to record** — the rendered face is whatever Japanese system font the
reader's device provides.

### Scale

`--size-font-11` through `--size-font-20` in single pixels (0.6875rem to 1.25rem), then
`--size-font-24`. Buttons, the search field and entry titles are 14px; service links 12px.

## 4. Component Stylings

Four components, every state on its own page load, focus read before the mouse moved.

- **Sign up** — `#00a0f0`, white 14px/700, 4px radius, 32px, `8px 16px`. **Hover changes nothing.**
  A larger sign-up in the page's introduction uses a 16px radius and `9px 20px`.
- **Sign in** — transparent, `#00a0f0` label, same size. No hover change.
- **Search field** — `#eaeaea`, `#111111` text, a 16px pill, 32px. Pressed and focused it turns
  **`#cccccc`** — the one authored state on the page.
- **Entry titles** — `#111111` 14px/700. No hover change.

### Focus is the browser's

Every control but the search field shows only Chrome's `auto` ring under `:focus-visible`. No focus
colour is recorded.

### Radius

`--ui-radius-xs` 2 · `-s` 4 · `-m` 8 · `-l` 16. Rendered: **4px** ×54 (buttons and badges), 16px ×2,
8px ×1. `xs` is declared and not seen.

## 5. Layout Principles

- No spacing scale is published; the 11 `--size-*` tokens are all font sizes, and padding is written
  per component.
- Density over air: the portal is a long, link-heavy feed.

## 6. Depth & Elevation

None. No element on the page has a box-shadow.

## 7. Do's and Don'ts

### Do
- Use `#00a0f0` for the one action that matters (sign up) and for the selected state.
- Give each service its own colour from `--color-service-*`.
- Set text in `#111111` on white; keep corners at 4px.

### Don't
- Don't add a web font; Hatena uses the system face.
- Don't add shadows.
- Don't read the hidden menu links' default blue as a Hatena colour.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#00a0f0` highlight · `#0086d6` / `#1abaff` highlight steps · `#111111` ink · `#999999` /
`#666666` secondary text · `#eaeaea` fields · `#ffffff` page · `#ff4166` users · services
`#00a6e4` `#2f2f2f` `#009cbc` `#4d77f0` `#14aa50` · stars `#ffb400` `#00d300` `#ff003e` `#00a1de`
`#b400c0`

### Example Component Prompts
- "A 32px button: `#00a0f0`, white 14px/700 system Japanese font, 4px radius; no hover change."
- "A search pill: `#eaeaea`, 16px radius, `#111111` 14px; turns `#cccccc` on focus."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Hatena has run community services since 2001 and its portal is text-first and plain. What colour there is carries meaning — one blue for
Hatena itself, one hue for each service, and the five colours of the Hatena Star that its users hand
out.

The 2021 logo, rebuilt from round nodes, moved the wordmark from blue to black — the same restraint the portal shows,
where blue is kept for the one button that invites you in.

## 12. Principles

- **Colour means a service.** Each product has its hue.
- **Text first.** Black on white, the system font, no shadow.
- **One blue for joining.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Four components. Hover: no change on any. The search field turns `#cccccc` when pressed or focused;
everything else shows the browser's `auto` ring on focus. No disabled state was observed.

## 15. Motion & Easing

Not measured. No motion token is published.

---

**Tier 1 sources:** https://www.hatena.ne.jp/ (live portal — 70 custom properties read via `getComputedStyle` and a recursive rule walk; 17 rules using the service colours listed; four components measured at rest, hover, pressed and focus; only system fonts, captured 2026-09-26); https://www.hatena.ne.jp/zz-this-does-not-exist (nonsense-path control — redirects and fails with HTTP 500 rather than rendering a page, captured 2026-09-26); https://design.hatenastaff.com/entry/2021/11/01/151330 (「ロゴはこうして出来ました」, Hatena Design Group — the 2021 logo built from round nodes, read 2026-09-26); https://hatena.co.jp/press/release/entry/2021/07/15/113000 (Hatena press release, 2021-07-15 — the 20th-anniversary logo renewal, read 2026-09-26)

**Regional sources:** https://www.itmedia.co.jp/news/articles/2107/15/news144.html (ITmedia NEWS, 2021-07-15 — the "?" of diamond tiles became one of round nodes; the wordmark changed from blue to black; first service 人力検索はてな on 2001-07-15); https://www.watch.impress.co.jp/docs/news/1338367.html (Impress Watch, 2021-07-15 — 「はてな、20周年でロゴ刷新」)
