---
name: Bilibili
colors:
  canvas: '#f1f2f3'
  surface: '#ffffff'
  foreground: '#18191c'
  muted: '#9499a0'
  secondary: '#61666d'
  hairline: '#e3e5e7'
typography:
  nav-label:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 64
    use: Product-home header entry links
  video-title:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22
    use: Home video-card title
  metadata:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 17
    use: Home video-card owner and date
rounded:
  sm: 4px
  md: 6px
spacing:
  xs: 4
  sm: 8
  md: 16
components:
  video-card-cover:
    type: card
    backgroundColor: '#f1f2f3'
    rounded: 6px
    use: Product-home video-card cover wrapper; 248px × 140px in the captured desktop viewport
  video-card-stats:
    type: badge
    textColor: '#ffffff'
    rounded: 0px 0px 6px 6px
    padding: 16px 8px 6px
    typography: 13px / 400
    use: Product-home video-card statistics strip
  skeleton-line:
    type: card
    backgroundColor: '#f1f2f3'
    rounded: 4px
    use: Product-home video-card loading text line
fonts:
  roles:
    sans: '-apple-system'
---

# Design System Inspiration of Bilibili

## Overview

### Visual Theme & Atmosphere

Bilibili describes itself as a leading video community for young generations in China, organised around users, high-quality content, creators, and the emotional bonds between them. The supplied 2026-07-13 desktop product snapshots express that proposition as a dense, content-first feed: a `#f1f2f3` page ground holds repeated video-card covers, white statistics text crosses the lower cover edge, titles sit in `#18191c`, and owner/date metadata recedes to `#9499a0`. These are current 1440×900 product observations, not reconstructions of the player, mobile app, marketing campaign, or corporate-site chrome.

The corporate record says the website launched in June 2009, took the name “bilibili” in January 2010, and has expanded across varied video interests. It also names “All the Videos You Like” as the brand proposition and identifies bullet chatting as a signature engagement feature. Those first-party facts explain why a repeatable video-card/feed pattern and visible creator metadata belong in this reference; they do not establish colour tokens, player controls, motion, or state variants that were not observed in the supplied product capture.

**Observed characteristics:**

- Three supplied 1440×900 product snapshots across `https://www.bilibili.com/` (two snapshots) and `https://www.bilibili.com/v/popular/all/` (one snapshot).
- Neutral product-home palette: `#f1f2f3` page/skeleton ground, `#ffffff` surface and overlay text, `#18191c` foreground, and `#9499a0` metadata.
- Repeated 248px × 140px video-card covers with 6px corners and a 13px statistics strip.
- A system-resolved `-apple-system` effective family in this capture; no custom family is promoted.
- The capture did not record a CSS brand swatch, interaction expansion, player controls, mobile layout, or a public design-system surface.

### Primary tasks

- Browse a dense, content-first feed of videos on the home page
- Tell who posted a video and when, from its card
- Discover videos across games, anime, lifestyle and knowledge
- Search for a video from the home page search field
- Engage with a video through bullet chatting

### Brand Narrative

Bilibili’s corporate information states that its website launched in June 2009 and was officially named “bilibili” in January 2010. It defines the company as a full-spectrum video community serving varied interests and says the community is built around aspiring users, high-quality content, talented creators, and the emotional bond between them. Its stated mission is to enrich the everyday lives of young generations in China.

The same first-party material frames “All the Videos You Like” as the value proposition and describes users and creators discovering and interacting across lifestyle, games, entertainment, anime, and technology and knowledge. It identifies bullet chatting as a signature feature designed to foster engagement, while the founder biography says the platform continues to refine that feature and the product UI.

The supplied product-home observation contributes a narrow visual counterpart: a repeated video-card feed where title and creator metadata are distinct pieces of information. It does not establish the brand colour, player interface, historical mascot treatment, or a broader visual system.

### Principles

1. **Community is a stated business priority.** Corporate information says the company cultivates belonging through interest-based sub-communities and interactive features. *UI implication:* When product evidence exists, preserve the relationship between content, creators, and community context rather than collapsing it into anonymous media tiles.

2. **Diverse interests share one video community.** The official proposition covers entertainment, games, lifestyle, anime, technology, knowledge, and more. *UI implication:* Use product-specific evidence before generalising one content category’s visual treatment to another surface.

3. **Bullet chatting is a signature interaction, not a token source.** The company identifies it as an engagement feature, but this packet does not contain player-state evidence. *UI implication:* Do not fabricate controls, motion, density settings, or colours for it.

### Personas

*These are evidence-bounded stakeholder groups, not fictional people or behavioural research findings.*

**Young-generation video community member.** Bilibili identifies young generations in China as its core audience and describes interest-based sub-communities. No individual demographic, task flow, or device preference is asserted here.

**Content creator.** The corporate narrative identifies talented creators as one of the community’s pillars and describes users and creators discovering and interacting with content. The packet does not establish a creator-tool UI.

**Interest-led viewer.** Official corporate material names varied video interests, including games, entertainment, anime, and technology/knowledge. The current product-home evidence only supports the feed-card context, not a persona-specific experience.

## Colors

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

## Typography

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

## Layout

The supplied capture is one 1440×900 product-home viewport. Within it, repeated video-card covers measure 248px × 140px. The observed card title begins below the cover; the information block has a 10px top margin, and the metadata row has a 4px top margin. The capture’s spacing aggregate contains 4px, 8px, and 16px frequently enough to support the small token set, but it does not establish a general grid, responsive breakpoint, or full page-margin scale.

### Responsive Behavior

This packet contains one 1440×900 desktop capture only. No breakpoint, mobile, touch-target, or responsive-layout claim is established.

## Elevation & Depth

All selector-backed component samples used here reported `box-shadow: none`. The card cover, title area, statistics strip, search field, and skeleton are therefore represented as flat. Dropdowns, dialogs, mini-players, hover lift, and modal elevation were not observed and are omitted.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

The supplied capture reports no interaction expansion and no motion/easing measurements. Do not infer hover, player, or celebratory motion from static component evidence.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.bilibili.com/ and https://www.bilibili.com/v/popular/all/ (supplied computed-style product snapshots, 2026-07-13); https://ir.bilibili.com/en/corporate-information/ (official company narrative); https://ir.bilibili.com/media/crul0g3t/bilibili-sustainable-finance-framework.pdf (official company/community narrative); https://developer.huawei.com/consumer/en/design/resource/ (HarmonyOS Sans source-domain boundary)
**Tier 2 sources:** https://getdesign.md/bilibili (attempted 2026-07-13; direct fetch rejected as unsafe); https://styles.refero.design/?q=bilibili (attempted 2026-07-13; direct fetch rejected as unsafe); https://styles.refero.design/ (catalog landing retrieved, no Bilibili-specific specification used)
**Conflicts unresolved:** none

## Components

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

### States

| State | Evidence-bound treatment |
|---|---|
| Empty | No first-party empty-state observation in this packet |
| Loading | Video-card skeleton text lines use `#f1f2f3` with 4px corners on the product home. |
| Error | No error-state observation in this packet |
| Success | No success-state observation in this packet |
| Skeleton | Cover fallback is `#f1f2f3` with 6px corners; text lines use 4px corners. |
| Disabled | No disabled-state observation in this packet |

## Do's and Don'ts

### Do

- Use the observed `#f1f2f3`/`#ffffff`/`#18191c`/`#9499a0` product-home relationship only where its feed/card context is relevant.
- Preserve the 6px cover and 4px skeleton-line corner observations as component-local values.
- Treat all components here as default-state observations; this packet records no interaction or state expansion.

### Don't

- Do not present the frontmatter `primary_color` as a current product CSS token from this capture.
- Do not infer player actions, coin/follow controls, dialogs, tabs, mobile navigation, hover motion, or form-error states from the captured home page.
- Do not use `HarmonyOS_Regular` or `HarmonyOS_Medium` as a Bilibili UI font without visible usage plus first-party product or licence corroboration.

## Voice & Tone

No first-party voice-and-tone guideline was found in the allowed sources. The corporate sources describe a welcoming, engaging community built around users and creators, and name “All the Videos You Like” as the value proposition; those statements support community-oriented content strategy, not an invented UI-copy system. Product-specific microcopy, error copy, and mascot language remain unverified.

## Agent Prompt Guide

### Evidence-safe prompt

- “Create a product-home video-card cover with `#f1f2f3` fallback background and 6px radius. Add a lower statistics strip with `#ffffff` 13px/400 text, `0px 0px 6px 6px` radius, and `16px 8px 6px` padding. Do not add an unobserved CTA, player control, hover behaviour, or brand-colour fill.”
- “Create a flat search field matching the observed home input: `#61666d` default text, 0px radius, `0px 8px 0px 0px` padding, 14px/400. Do not add an unobserved focus, pressed, or validation state.”

### Boundary

Use the current product-home token set as a narrow reference. Do not turn corporate narrative, a CDN declaration, or historic catalog metadata into a product component or token.
