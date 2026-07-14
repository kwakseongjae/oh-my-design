---
id: bilibili
name: Bilibili
country: CN
category: consumer-tech
homepage: "https://www.bilibili.com"
primary_color: "#FB7299"
logo:
  type: simpleicons
  slug: bilibili
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - id: home
      kind: product-home
      url: https://www.bilibili.com/
      inspected: "2026-07-13"
    - id: surface-2
      kind: product-home
      url: https://www.bilibili.com/
      inspected: "2026-07-13"
    - id: surface-3
      kind: product-popular
      url: https://www.bilibili.com/v/popular/all/
      inspected: "2026-07-13"
  sources:
    - id: home-live
      kind: product-surface
      url: https://www.bilibili.com/
      captured: "2026-07-13"
    - id: home-refresh-live
      kind: product-surface
      url: https://www.bilibili.com/
      captured: "2026-07-13"
    - id: popular-live
      kind: product-surface
      url: https://www.bilibili.com/v/popular/all/
      captured: "2026-07-13"
    - id: corporate-information
      kind: official-doc
      url: https://ir.bilibili.com/en/corporate-information/
      captured: "2026-07-13"
    - id: sustainability-framework
      kind: official-doc
      url: https://ir.bilibili.com/media/crul0g3t/bilibili-sustainable-finance-framework.pdf
      captured: "2026-07-13"
  claims:
    "tokens.colors.canvas": &home_evidence { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.surface": *home_evidence
    "tokens.colors.foreground": *home_evidence
    "tokens.colors.muted": *home_evidence
    "tokens.colors.secondary": *home_evidence
    "tokens.colors.hairline": *home_evidence
    "tokens.typography.family.sans": *home_evidence
    "tokens.typography.nav-label.size": *home_evidence
    "tokens.typography.nav-label.weight": *home_evidence
    "tokens.typography.nav-label.lineHeight": *home_evidence
    "tokens.typography.nav-label.use": *home_evidence
    "tokens.typography.video-title.size": *home_evidence
    "tokens.typography.video-title.weight": *home_evidence
    "tokens.typography.video-title.lineHeight": *home_evidence
    "tokens.typography.video-title.use": *home_evidence
    "tokens.typography.metadata.size": *home_evidence
    "tokens.typography.metadata.weight": *home_evidence
    "tokens.typography.metadata.lineHeight": *home_evidence
    "tokens.typography.metadata.use": *home_evidence
    "tokens.spacing.xs": *home_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.md": *home_evidence
    "tokens.rounded.sm": *home_evidence
    "tokens.rounded.md": *home_evidence
    "tokens.shadow.flat": *home_evidence
    "tokens.components.video-card-cover.type": *home_evidence
    "tokens.components.video-card-cover.bg": *home_evidence
    "tokens.components.video-card-cover.radius": *home_evidence
    "tokens.components.video-card-cover.use": *home_evidence
    "tokens.components.video-card-stats.type": *home_evidence
    "tokens.components.video-card-stats.fg": *home_evidence
    "tokens.components.video-card-stats.radius": *home_evidence
    "tokens.components.video-card-stats.padding": *home_evidence
    "tokens.components.video-card-stats.font": *home_evidence
    "tokens.components.video-card-stats.use": *home_evidence
    "tokens.components.skeleton-line.type": *home_evidence
    "tokens.components.skeleton-line.bg": *home_evidence
    "tokens.components.skeleton-line.radius": *home_evidence
    "tokens.components.skeleton-line.use": *home_evidence
  conflicts: []
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Three supplied desktop product snapshots across the home and popular routes. Tokens are limited to computed values with selector-level provenance; the existing catalog primary_color is not a current UI-token claim."
  colors:
    canvas: "#f1f2f3"
    surface: "#ffffff"
    foreground: "#18191c"
    muted: "#9499a0"
    secondary: "#61666d"
    hairline: "#e3e5e7"
  typography:
    family: { sans: "-apple-system" }
    nav-label: { size: 14, weight: 400, lineHeight: 64, use: "Product-home header entry links" }
    video-title: { size: 15, weight: 400, lineHeight: 22, use: "Home video-card title" }
    metadata: { size: 13, weight: 400, lineHeight: 17, use: "Home video-card owner and date" }
  spacing: { xs: 4, sm: 8, md: 16 }
  rounded: { sm: 4, md: 6 }
  shadow:
    flat: "none"
  components_harvested: false
  components:
    video-card-cover: { type: card, bg: "#f1f2f3", radius: "6px", use: "Product-home video-card cover wrapper; 248px × 140px in the captured desktop viewport" }
    video-card-stats: { type: badge, fg: "#ffffff", radius: "0px 0px 6px 6px", padding: "16px 8px 6px", font: "13px / 400", use: "Product-home video-card statistics strip" }
    skeleton-line: { type: card, bg: "#f1f2f3", radius: "4px", use: "Product-home video-card loading text line" }
---

# Design System Inspiration of Bilibili

## 1. Visual Theme & Atmosphere

Bilibili describes itself as a leading video community for young generations in China, organised around users, high-quality content, creators, and the emotional bonds between them. The supplied 2026-07-13 desktop product snapshots express that proposition as a dense, content-first feed: a `#f1f2f3` page ground holds repeated video-card covers, white statistics text crosses the lower cover edge, titles sit in `#18191c`, and owner/date metadata recedes to `#9499a0`. These are current 1440×900 product observations, not reconstructions of the player, mobile app, marketing campaign, or corporate-site chrome.

The corporate record says the website launched in June 2009, took the name “bilibili” in January 2010, and has expanded across varied video interests. It also names “All the Videos You Like” as the brand proposition and identifies bullet chatting as a signature engagement feature. Those first-party facts explain why a repeatable video-card/feed pattern and visible creator metadata belong in this reference; they do not establish colour tokens, player controls, motion, or state variants that were not observed in the supplied product capture.

**Observed characteristics:**

- Three supplied 1440×900 product snapshots across `https://www.bilibili.com/` (two snapshots) and `https://www.bilibili.com/v/popular/all/` (one snapshot).
- Neutral product-home palette: `#f1f2f3` page/skeleton ground, `#ffffff` surface and overlay text, `#18191c` foreground, and `#9499a0` metadata.
- Repeated 248px × 140px video-card covers with 6px corners and a 13px statistics strip.
- A system-resolved `-apple-system` effective family in this capture; no custom family is promoted.
- The capture did not record a CSS brand swatch, interaction expansion, player controls, mobile layout, or a public design-system surface.

## 2. Color Palette & Roles

The values below are limited to computed product-home values in the supplied evidence. They are not an official public Bilibili colour specification.

### Product-home neutrals

- **Page canvas** (`#f1f2f3`): Computed `body` background and video-card skeleton/cover fallback background.
- **Surface / overlay text** (`#ffffff`): Observed card-surface background and video-card statistics text.
- **Foreground** (`#18191c`): Computed body, video-card title, and focused/pressed search-field text.
- **Muted metadata** (`#9499a0`): Video-card owner/date row.
- **Secondary text** (`#61666d`): Default `nav-search-input` text.
- **Hairline / focused field fill** (`#e3e5e7`): Observed search-field focus and pressed background; also appears in the colour aggregate as a border/background candidate.

### Boundary

The existing frontmatter `primary_color` is retained as catalog metadata but is not emitted by this capture and is deliberately absent from `tokens.colors`. No current token claim is made for a pink action colour, blue accent, coin colour, error/success colour, or selected-state tint.

## 3. Typography Rules

### Font evidence classes

| Evidence class | Finding | Decision |
|---|---|---|
| Official product-use | The allowed first-party sources do not state that a named typeface is used in the product. | No brand family claim. |
| Live computed surface-use | The three product snapshots resolve visible text to `-apple-system, system-ui, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif`; the aggregate classifies `-apple-system` as system with 951 usages. | System family only; no substitute or specimen. |
| Official distributed brand asset | No first-party Bilibili font catalogue or licence was found. Huawei documents HarmonyOS Sans as its own design resource, not as a Bilibili asset. | None claimed for Bilibili. |
| Declared-only | `HarmonyOS_Regular` and `HarmonyOS_Medium` each have 54 Bilibili-CDN `@font-face` source URLs, but zero visible usages in the capture. | Declaration evidence only; not a UI family and no specimen. |
| Unresolved | The purpose, licence, and runtime use of the HarmonyOS declarations were not established by a first-party font source. | Omitted from tokens. |

### Observed product-home scale

| Role | Size | Weight | Line height | Selector provenance |
|---|---:|---:|---:|---|
| Header entry link | `14px` | `400` | `64px` | `home::[data-omd-capture="0"]` (`entry-title`) |
| Video-card title | `15px` | `400` | `22px` | `home::h3` (`bili-video-card__info--tit`) |
| Owner/date metadata | `13px` | `400` | `17px` | `bili-video-card__info--author` / `--date` |

## 4. Component Stylings

Scope: the entries below are selector-backed observations from the three supplied product snapshots. The collector recorded zero interaction expansions and zero observed states; unobserved player, follow, coin, upload, modal, tab, and mobile variants are not component specifications.

### Video card

**Cover wrapper**
- Background: `#f1f2f3`
- Radius: 6px
- Use: `home::div.bili-video-card__image--wrap`, a 248px × 140px video-card cover wrapper in the captured desktop feed

**Statistics strip**
- Text: `#ffffff`
- Radius: 0px 0px 6px 6px
- Padding: 16px 8px 6px
- Font: 13px / 400
- Use: `home::div.bili-video-card__stats`, lower cover-edge statistics strip

### Inputs

**Home search field**
- Text: `#61666d`
- Radius: 0px
- Padding: 0px 8px 0px 0px
- Font: 14px / 400
- Use: `home::[data-omd-capture="9"]` (`nav-search-input`); the same default component appears on `surface-2` and `surface-3`

### Loading

**Video-card skeleton line**
- Background: `#f1f2f3`
- Radius: 4px
- Use: `home::p.bili-video-card__skeleton--text` and `--light` loading placeholders

### Buttons

**Feed roll button**
- Background: `#ffffff`
- Text: `#18191c`
- Border: 1px solid `#e3e5e7`
- Radius: 8px
- Padding: 9px
- Font: 12px / 400
- Use: `home::[data-omd-capture="87"]` (`primary-btn roll-btn`) default appearance; no button state was observed

## 5. Layout Principles

The supplied capture is one 1440×900 product-home viewport. Within it, repeated video-card covers measure 248px × 140px. The observed card title begins below the cover; the information block has a 10px top margin, and the metadata row has a 4px top margin. The capture’s spacing aggregate contains 4px, 8px, and 16px frequently enough to support the small token set, but it does not establish a general grid, responsive breakpoint, or full page-margin scale.

## 6. Depth & Elevation

All selector-backed component samples used here reported `box-shadow: none`. The card cover, title area, statistics strip, search field, and skeleton are therefore represented as flat. Dropdowns, dialogs, mini-players, hover lift, and modal elevation were not observed and are omitted.

## 7. Do's and Don'ts

### Do

- Use the observed `#f1f2f3`/`#ffffff`/`#18191c`/`#9499a0` product-home relationship only where its feed/card context is relevant.
- Preserve the 6px cover and 4px skeleton-line corner observations as component-local values.
- Treat all components here as default-state observations; this packet records no interaction or state expansion.

### Don't

- Do not present the frontmatter `primary_color` as a current product CSS token from this capture.
- Do not infer player actions, coin/follow controls, dialogs, tabs, mobile navigation, hover motion, or form-error states from the captured home page.
- Do not use `HarmonyOS_Regular` or `HarmonyOS_Medium` as a Bilibili UI font without visible usage plus first-party product or licence corroboration.

## 8. Responsive Behavior

`[FILL IN — this packet contains one 1440×900 desktop capture only. No breakpoint, mobile, touch-target, or responsive-layout claim is established.]`

## 9. Agent Prompt Guide

### Evidence-safe prompt

- “Create a product-home video-card cover with `#f1f2f3` fallback background and 6px radius. Add a lower statistics strip with `#ffffff` 13px/400 text, `0px 0px 6px 6px` radius, and `16px 8px 6px` padding. Do not add an unobserved CTA, player control, hover behaviour, or brand-colour fill.”
- “Create a flat search field matching the observed home input: `#61666d` default text, 0px radius, `0px 8px 0px 0px` padding, 14px/400. Do not add an unobserved focus, pressed, or validation state.”

### Boundary

Use the current product-home token set as a narrow reference. Do not turn corporate narrative, a CDN declaration, or historic catalog metadata into a product component or token.

## 10. Voice & Tone

No first-party voice-and-tone guideline was found in the allowed sources. The corporate sources describe a welcoming, engaging community built around users and creators, and name “All the Videos You Like” as the value proposition; those statements support community-oriented content strategy, not an invented UI-copy system. Product-specific microcopy, error copy, and mascot language remain unverified.

## 11. Brand Narrative

Bilibili’s corporate information states that its website launched in June 2009 and was officially named “bilibili” in January 2010. It defines the company as a full-spectrum video community serving varied interests and says the community is built around aspiring users, high-quality content, talented creators, and the emotional bond between them. Its stated mission is to enrich the everyday lives of young generations in China.

The same first-party material frames “All the Videos You Like” as the value proposition and describes users and creators discovering and interacting across lifestyle, games, entertainment, anime, and technology and knowledge. It identifies bullet chatting as a signature feature designed to foster engagement, while the founder biography says the platform continues to refine that feature and the product UI.

The supplied product-home observation contributes a narrow visual counterpart: a repeated video-card feed where title and creator metadata are distinct pieces of information. It does not establish the brand colour, player interface, historical mascot treatment, or a broader visual system.

## 12. Principles

1. **Community is a stated business priority.** Corporate information says the company cultivates belonging through interest-based sub-communities and interactive features. *UI implication:* When product evidence exists, preserve the relationship between content, creators, and community context rather than collapsing it into anonymous media tiles.

2. **Diverse interests share one video community.** The official proposition covers entertainment, games, lifestyle, anime, technology, knowledge, and more. *UI implication:* Use product-specific evidence before generalising one content category’s visual treatment to another surface.

3. **Bullet chatting is a signature interaction, not a token source.** The company identifies it as an engagement feature, but this packet does not contain player-state evidence. *UI implication:* Do not fabricate controls, motion, density settings, or colours for it.

## 13. Personas

*These are evidence-bounded stakeholder groups, not fictional people or behavioural research findings.*

**Young-generation video community member.** Bilibili identifies young generations in China as its core audience and describes interest-based sub-communities. No individual demographic, task flow, or device preference is asserted here.

**Content creator.** The corporate narrative identifies talented creators as one of the community’s pillars and describes users and creators discovering and interacting with content. The packet does not establish a creator-tool UI.

**Interest-led viewer.** Official corporate material names varied video interests, including games, entertainment, anime, and technology/knowledge. The current product-home evidence only supports the feed-card context, not a persona-specific experience.

## 14. States

| State | Evidence-bound treatment |
|---|---|
| Empty | `[FILL IN — no first-party empty-state observation in this packet.]` |
| Loading | Video-card skeleton text lines use `#f1f2f3` with 4px corners on the product home. |
| Error | `[FILL IN — no error-state observation in this packet.]` |
| Success | `[FILL IN — no success-state observation in this packet.]` |
| Skeleton | Cover fallback is `#f1f2f3` with 6px corners; text lines use 4px corners. |
| Disabled | `[FILL IN — no disabled-state observation in this packet.]` |

## 15. Motion & Easing

`[FILL IN — the supplied capture reports no interaction expansion and no motion/easing measurements. Do not infer hover, player, or celebratory motion from static component evidence.]`

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.bilibili.com/ and https://www.bilibili.com/v/popular/all/ (supplied computed-style product snapshots, 2026-07-13); https://ir.bilibili.com/en/corporate-information/ (official company narrative); https://ir.bilibili.com/media/crul0g3t/bilibili-sustainable-finance-framework.pdf (official company/community narrative); https://developer.huawei.com/consumer/en/design/resource/ (HarmonyOS Sans source-domain boundary)
**Tier 2 sources:** https://getdesign.md/bilibili (attempted 2026-07-13; direct fetch rejected as unsafe); https://styles.refero.design/?q=bilibili (attempted 2026-07-13; direct fetch rejected as unsafe); https://styles.refero.design/ (catalog landing retrieved, no Bilibili-specific specification used)
**Conflicts unresolved:** none
