---
name: MakinaRocks
colors:
  primary: '#2b2b3b'
  canvas: '#ffffff'
  ink: '#000000'
  slate: '#5a5a72'
  muted: '#8d8da5'
typography:
  display-hero:
    fontSize: 64px
    fontWeight: 700
    lineHeight: 83.2
    letterSpacing: '-1.6px'
    use: Public-home marketing hero
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 25.6
    letterSpacing: '-0.16px'
    use: Public marketing and corporate reading text
rounded:
  nav-control: 0px
  carousel-arrow: 28px
spacing:
  nav-control: 16
components:
  header-nav-button:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 16px
    height: 64px
    typography: 16px / 400 / 32px KmrApparat
    states: rest on four header buttons (capture 1-4) on all three capture records; the bundle holds no state frame for any MakinaRocks element
    use: Public header navigation button at home::[data-omd-capture="1"], 133 x 64, tracking normal
  header-contact-link:
    type: button
    backgroundColor: '#ffffff'
    border: '1px #000000'
    rounded: 19px
    padding: 5px 30px
    height: 38px
    states: rest on all three capture records (capture 5); no state frame
    use: 'Header contact link (a.contact) at home::[data-omd-capture="5"], 117 x 38 on home and 141 x 38 on About and Blog; its #000000 16px / 400 / 25.6px Pretendard text equals the page body text, so no label style is claimed'
    typography: 16px / 400
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
  hero-outline-link:
    type: button
    backgroundColor: transparent
    textColor: '#1a1a1a'
    border: '1px #1a1a1a'
    rounded: 50px
    padding: 9px 24px
    height: 46px
    typography: 16px / 500 / 25.6px KmrApparat
    states: 'rest on the light hero slide (capture 9, a.outline); the dark hero slide link (capture 8, a.outline.dark) records fg #ffffff and border 1px #ffffff with the same geometry; no state frame'
    use: Hero outline pill link at home::[data-omd-capture="9"], 157 x 46, gap 12px, tracking -0.16px
  large-outline-link:
    type: button
    backgroundColor: transparent
    textColor: '#1a1a1a'
    border: '1px #e7e7ee'
    rounded: 50px
    padding: 12px 24px
    height: 55px
    typography: 18px / 500 / 28.8px KmrApparat
    states: 'rest on two About links (capture 8, 9, a.outline.light); the home closing-band link (capture 31, a.outline.dark) records fg #ffffff and border 1px #ffffff with the same geometry; no state frame'
    use: Large outline pill link at surface-2::[data-omd-capture="8"], 169 x 55, gap 12px, tracking -0.16px
  carousel-arrow-button:
    type: button
    backgroundColor: rgba(196, 196, 212, 0.5)
    rounded: 28px
    padding: 0px
    size: 40px x 40px
    states: rest on the enabled next arrows (capture 20, 30); the prev arrows beside them (capture 19, 29) are disabled and record the same captured values, and opacity is not among the captured properties, so no disabled treatment is declared; no state frame
    use: Home carousel arrow button (button.next) at home::[data-omd-capture="20"]; its 13.3333px / 400 type is the browser default for a button, so no label style is claimed
  solution-card-link:
    type: card
    rounded: 24px
    padding: 20px 37px
    size: 358px x 358px
    typography: 24px / 700 / 38.4px KmrApparat
    states: captured at rest on the home solution cards (capture 12 and its siblings); no state frame
    use: 'Home solution card link (a) at home::[data-omd-capture="12"]; the title is a child h3 in #ffffff 24px / 700 / 38.4px KmrApparat over artwork the capture does not record (background-color computes transparent; background-image is not among the captured properties), so no fill or fg is claimed; the link''s own #0000ee is the browser default link colour'
  news-card-link:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 12px
    padding: 0px
    size: 340px x 376px
    typography: 16px / 500 / 20.8px KmrApparat
    states: eight cards captured at rest (capture 21-28); no state frame
    use: Home news card link (a) at home::[data-omd-capture="21"]; fg and font come from its child h3 title (tracking -0.16px); the link itself records the page body text
  about-stat-card:
    type: card
    backgroundColor: '#f9f9fb'
    rounded: 24px
    padding: 24px
    size: 328px x 328px
    states: eight tiles captured at rest; no state frame
    use: 'About-page tile (li) at surface-2::li, two rows of four; the li records #5a5a72 24px / 400 / 31.2px Pretendard, but its inner text elements were not sampled, so no label style is claimed'
  blog-category-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#5a5a72'
    rounded: 12px
    padding: 4px 30px
    height: 29px
    typography: 16px / 500 / 20.8px Pretendard
    selected: 'bg #ffffff'
    states: 'rest on three category links (capture 9-11); the link with class on (capture 8) records bg #ffffff with the same text and geometry and is recorded as selected; no state frame'
    use: Blog category filter link (a) in div#category-toggle.tab-list at surface-3::[data-omd-capture="9"], tracking -0.16px
  blog-featured-post:
    type: card
    textColor: '#2b2b3b'
    size: 1408px x 422px
    typography: 32px / 500 / 41.6px Pretendard
    states: one featured post captured at rest; no state frame
    use: 'Blog featured post link (a) at surface-3::[data-omd-capture="12"]: a 774 x 422 image block with 24px radius (p.image) beside a text column opened by a category line (padding 40px 40px 0px), a #2b2b3b 32px / 500 / 41.6px title (h3) and a #5a5a72 16px / 400 description'
  blog-post-card:
    type: card
    textColor: '#2b2b3b'
    rounded: 16px
    padding: 16px
    size: 354px x 381px
    typography: 20px / 500 / normal Pretendard
    states: twelve post cards captured at rest (capture 13-24); no state frame
    use: 'Blog post card link (a) at surface-3::[data-omd-capture="13"]: a 322 x 180 image with 16px radius, a category line (padding 24px 0px 0px), a #2b2b3b 20px / 500 title (h3) and a #5a5a72 16px / 400 / 25.6px date'
  blog-pagination-link:
    type: button
    backgroundColor: transparent
    textColor: '#2b2b3b'
    rounded: 22px
    size: 44px x 44px
    typography: 16px / 400 / 25.6px Pretendard
    states: rest on three page links (capture 25-27); no link records a different value, so no current-page variant is declared; no state frame
    use: Blog pagination link (a) at surface-3::[data-omd-capture="25"]
  footer-link:
    type: listItem
    textColor: '#ffffff'
    height: 26px
    typography: 16px / 400 / 25.6px KmrApparat
    states: rest on the footer link columns (capture 35 and its siblings); no state frame
    use: 'Footer link (a) at home::[data-omd-capture="35"] inside a 202 x 26 li whose own text is #8d8da5; tracking -0.16px'
  footer-outline-button:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '1px #ffffff'
    rounded: 10px
    size: 100px x 40px
    typography: 12px / 700 / normal Pretendard
    states: one button captured at rest (capture 32); no state frame
    use: Footer outline button at home::[data-omd-capture="32"]; its 1px 6px padding is the browser default for a button and is not claimed
fonts:
  roles:
    display: KmrApparat
    body: Pretendard
---

# Design System Inspiration of MakinaRocks

## Overview

### Visual Theme & Atmosphere

MakinaRocks is a Korean Physical AI company building specialized AI and an enterprise AI OS for industrial operations, from manufacturing to defense. Its current public web language is a restrained, type-led marketing system: a white field, black reading text, dark indigo `#2b2b3b` titles, and a measured muted-text ladder. The supplied evidence covers the public homepage, corporate About page, and editorial blog—not an authenticated product application or documentation chrome—so this reference records those marketing surfaces without treating them as an application-wide design system.

The public design is also in transition. In May 2026, MakinaRocks introduced a new symbol and described a fluorescent yellow-green signature against a deep-black foundation; the company says the identity is being applied across touchpoints, including product experiences. That green is visible as a brand-asset expression in first-party context, but its exact UI value was not captured in computed styles, so it is intentionally not promoted to a color token. The current captured pages retain the cool indigo, black, white, and muted-grey marketing vocabulary below.

- **Source-domain boundary:** homepage, About, and Blog are public marketing/corporate/editorial surfaces; no live product surface or documentation chrome was supplied.
- **Observed contrast:** white `#ffffff` and ink `#000000` are the high-frequency public-web base; dark indigo `#2b2b3b` is observed as title/brand-weight text.
- **Type-led hierarchy:** loaded KmrApparat carries public display and navigation moments; loaded Pretendard carries broad reading and control use.
- **Rebrand expression:** fluorescent yellow-green is first-party brand context, not a captured machine token; do not substitute a guessed hex value.

### Primary tasks

- Read what the company builds and where its AI runs
- Check the company's founding year and stated deployment figures
- Find out what the Runway enterprise AI OS does
- Read the rebrand article explaining the new symbol

### Brand Narrative

MakinaRocks positions itself as a Physical AI company whose specialized AI and enterprise AI OS address complex industrial operations. Its official About page says it builds AI for harsh, unpredictable environments ranging from factories to battlefields, and lists manufacturing, defense, energy, logistics, and related industrial contexts. The same page states the company was founded in 2017, has a research-and-development workforce share above 70%, and reports more than 6,000 models applied in industrial fields; those are company-stated figures, not independently audited metrics.

The May 2026 rebrand gives the visual story a new center: the company introduced a symbol intended to represent the real world as a dense, grounded outer form and the AI core as energy breaking outward. It also says its fluorescent yellow-green signature and black foundation embody stability/precision alongside energy/acceleration, and that the new system is being applied across business, digital, event, and product touchpoints. This reference uses that article as brand context while keeping exact UI tokens restricted to the supplied computed-style evidence.

### Principles

1. **Physical environments are the reference point.** The company explicitly frames its work around AI operating in harsh industrial conditions. *UI implication:* prefer concrete, operational language over speculative consumer-AI metaphors.
2. **Specialization precedes generalization.** MakinaRocks describes industry-specialized AI and an enterprise AI OS, rather than a generic assistant. *UI implication:* distinguish industry context and product claims; do not invent universal product states from marketing pages.
3. **The rebrand pairs stability with energy.** The official identity narrative describes deep black/precision alongside fluorescent yellow-green/acceleration. *UI implication:* retain that as a qualitative image and brand direction until an exact public UI token is observed.

### Personas

The first-party sources identify industrial contexts rather than named end-user personas. Treat the following as stakeholder groups, not fictional individuals or validated usability personas:

- **Manufacturing and industrial operations organizations:** explicitly named on the official homepage and About page as contexts for specialized AI.
- **Defense and public-infrastructure organizations:** named in the rebrand and About narratives as environments where MakinaRocks operates or intends to operate.
- **Enterprise AI teams using Runway:** the homepage describes Runway as an enterprise AI operating system; no authenticated workflow, role permissions, or individual task evidence was supplied.

## Colors

### Observed public-web roles

- **Dark indigo** (`#2b2b3b`): high-confidence computed text/border color on the homepage and blog. It is a public marketing title/brand-weight color, not evidence for authenticated-product semantics.
- **Canvas** (`#ffffff`): high-confidence public-page background and high-contrast text/border value across all captured routes.
- **Ink** (`#000000`): high-confidence primary reading, border, and public navigation-control text.
- **Slate** (`#5a5a72`): high-confidence secondary public copy on the captured routes.
- **Muted** (`#8d8da5`): high-confidence lower-emphasis public text on all three captured routes.
- **Component-local colours** recorded in §4, not promoted to palette roles: `#1a1a1a` (outline pill text and border on light surfaces), `#e7e7ee` (the large outline pill's border on About), and `#f9f9fb` (About tile fill).

### Brand asset outside the token sheet

MakinaRocks’ 2026 rebrand post identifies fluorescent yellow-green as the new signature color and describes it against a deep-black foundation. The supplied raw collector did not capture an exact computed green value on a reusable element. Preserve the qualitative brand context; do not manufacture a token from the logo asset or use the old indigo as a substitute for it.

## Typography

### Evidence classes

- **Live computed public-web use — KmrApparat:** the collector reports `KmrApparat` as loaded with high confidence, 206 visible uses across the homepage, About, and Blog, with seven MakinaRocks-hosted WOFF2 sources including regular, medium, bold, heavy, and black files. It is the captured display and public-navigation family.
- **Live computed public-web use — Pretendard:** the collector reports `Pretendard` as loaded with high confidence, 285 visible uses across the same public routes and jsDelivr-hosted dynamic-subset sources. Its upstream project publishes the font under SIL Open Font License 1.1. That licence describes Pretendard’s upstream distribution, not a licence for MakinaRocks assets.
- **Official distributed brand asset:** KmrApparat files are delivered from `www.makinarocks.ai/fonts/`. The supplied source confirms live delivery and FontFaceSet loading, but no public downstream licence for the MakinaRocks-hosted family was found in this update. Keep its metadata; do not present it as freely reusable or replace it with a system font.
- **Declared-only:** `Pretendard JP` is declared with source URLs but has zero visible uses in this capture. It remains declared-only.
- **Unobserved domains:** no authenticated product UI and no documentation chrome were captured. Neither receives a font claim.

### Measured public-web hierarchy

| Role | Family | Size | Weight | Line height | Tracking | Provenance |
|---|---|---:|---:|---:|---:|---|
| Public-home hero | KmrApparat | 64px | 700 | 83.2px | -1.6px | captured `h1` on `home` |
| Public reading text | Pretendard | 16px | 400 | 25.6px | -0.16px | captured `body` on `home` |
| Public header navigation control | KmrApparat | 16px | 400 | 32px | normal | `home::[data-omd-capture="1"]` |
| Hero outline pill link | KmrApparat | 16px | 500 | 25.6px | -0.16px | `home::[data-omd-capture="9"]` |
| Blog post title | Pretendard | 20px | 500 | normal | -0.16px | `h3` in `surface-3::[data-omd-capture="13"]` |

Corrected 2026-09-30: the table listed a disabled public-home control at 13.3333px / 400. That is the browser's default button type on the home carousel arrows, and the enabled arrows record the same, so it is not a MakinaRocks type role; the row is replaced by two measured control and card roles.

## Layout

### Evidence boundary

The supplied routes show public marketing, corporate, and editorial layouts only. They support the measured 16px public-navigation padding and public-web typography above; they do not support a product grid, app spacing scale, responsive breakpoint system, content-card geometry, or visual behavior outside those routes.

### Rebrand context

The official rebrand article explains the new symbol as a visual expression of the physical world and an expanding AI core, and says the broader design system was rebuilt around the identity. That is useful context for image direction and brand narrative, but it supplies no exact layout, spacing, or UI-component token.

### Responsive Behavior

No responsive viewport comparison was supplied. The collector used a 1440×900 viewport for all three routes; mobile breakpoints, stacking behavior, touch-target policy, and image treatment remain unresolved.

## Elevation & Depth

No reusable shadow or elevation token is promoted. The supplied collector output has no selector-provenanced component shadow claim in the retained component set. Treat flatness, depth, and card elevation as unresolved for reuse rather than carrying forward an older inferred shadow ladder.

## Motion & Easing

No duration, easing, or transition token is captured. The official rebrand’s language of expansion and momentum is narrative context only; it is not evidence for interface animation. Respect reduced-motion requirements in any implementation, but do not attribute a motion system to MakinaRocks without a selector-provenanced observation.

## Components

### Public header navigation control

**Default — observed on public-home marketing**
- Text: `#000000`
- Background: transparent
- Border: 0px
- Radius: 0px
- Padding: 16px
- Font: 16px / 400 / KmrApparat
- Height: 64px (133px wide for the first label)
- Use: `home::[data-omd-capture="1"]` through `"4"` (`header-nav-button`), public-home header navigation control on all three routes

### Header contact link

**Default** (`header-contact-link`)
- Background: `#ffffff`
- Border: 1px `#000000`
- Radius: 19px
- Padding: 5px 30px
- Size: 117px × 38px on home, 141px × 38px on About and Blog
- Label: not claimed; its `#000000` 16px / 400 / 25.6px Pretendard equals the page body text.
- Use: `home::[data-omd-capture="5"]` (`a.contact`) on all three routes

### Outline pill links

**Hero pill** (`hero-outline-link`)
- Text and border: `#1a1a1a`, 1px
- Radius: 50px
- Padding: 9px 24px
- Size: 157px × 46px
- Font: 16px / 500 / 25.6px / -0.16px KmrApparat
- Dark slide: `home::[data-omd-capture="8"]` (`a.outline.dark`) records `#ffffff` text and a 1px `#ffffff` border with the same geometry.
- Use: `home::[data-omd-capture="9"]` (`a.outline`) on the hero

**Large pill** (`large-outline-link`)
- Text: `#1a1a1a`; border: 1px `#e7e7ee`
- Radius: 50px
- Padding: 12px 24px
- Size: 169px × 55px
- Font: 18px / 500 / 28.8px / -0.16px KmrApparat
- Dark band: `home::[data-omd-capture="31"]` (`a.outline.dark`) records `#ffffff` text and border with the same geometry.
- Use: `surface-2::[data-omd-capture="8"]`, `"9"` (`a.outline.light`) on About

### Carousel arrow button

**Default** (`carousel-arrow-button`)
- Background: `rgba(196, 196, 212, 0.5)`
- Border: 0px
- Radius: 28px
- Size: 40px × 40px
- Use: the enabled next arrows, `home::[data-omd-capture="20"]` and `"30"` (`button.next`).
- Corrected 2026-09-30: July recorded this control as a disabled snapshot from the prev arrow (`"19"`), with `#000000` text and 13.3333px / 400 Pretendard type. The enabled next arrows record the same background and radius, so the fill is the control's rest value, not a disabled treatment; the prev arrows' disabled look is not resolved because opacity is not captured. The 13.3333px / 400 type is the browser's default button size and is no longer claimed.

### Home cards

**Solution card** (`solution-card-link`): a 358px × 358px link with a 24px radius and `20px 37px` padding; its title is a child `h3` in `#ffffff` 24px / 700 / 38.4px KmrApparat over artwork the capture does not record, so no fill or text colour is claimed. The link's own `#0000ee` is the browser default link colour. `home::[data-omd-capture="12"]` and siblings.

**News card** (`news-card-link`): background `#ffffff`, 12px radius, 340px × 376px; title `h3` in `#000000` 16px / 500 / 20.8px / -0.16px KmrApparat. Eight cards, `home::[data-omd-capture="21"]` through `"28"`.

### About tile

**Static default** (`about-stat-card`): background `#f9f9fb`, 24px radius, 24px padding, 328px × 328px, eight tiles in two rows. The `li` records `#5a5a72` 24px / 400 / 31.2px Pretendard, but its inner text elements were not sampled, so no label style is claimed. `surface-2::li`.

### Blog components

**Category tab** (`blog-category-tab`)
- Background: transparent; selected: `#ffffff`
- Text: `#5a5a72`
- Radius: 12px
- Padding: 4px 30px
- Height: 29px
- Font: 16px / 500 / 20.8px / -0.16px Pretendard
- Selected: the link with class `on` (`surface-3::[data-omd-capture="8"]`) records `#ffffff` with the same text and geometry.
- Use: `surface-3::[data-omd-capture="9"]` through `"11"`, inside `div#category-toggle.tab-list`

**Featured post** (`blog-featured-post`): a 1408px × 422px link; a 774px × 422px image block with a 24px radius beside a text column opened by a category line (`40px 40px 0px` padding), a `#2b2b3b` 32px / 500 / 41.6px title and a `#5a5a72` 16px / 400 description. `surface-3::[data-omd-capture="12"]`.

**Post card** (`blog-post-card`): a 354px × 381px link with a 16px radius and 16px padding; a 322px × 180px image with a 16px radius, a category line (`24px 0px 0px`), a `#2b2b3b` 20px / 500 / normal title and a `#5a5a72` 16px / 400 / 25.6px date. Twelve cards, `surface-3::[data-omd-capture="13"]` through `"24"`.

**Pagination link** (`blog-pagination-link`): transparent, `#2b2b3b`, 22px radius, 44px × 44px, 16px / 400 / 25.6px Pretendard. Three links, `surface-3::[data-omd-capture="25"]` through `"27"`; none records a different value, so no current-page variant is declared.

### Footer

**Link** (`footer-link`): `#ffffff` 16px / 400 / 25.6px / -0.16px KmrApparat links inside 202px × 26px list items whose own text is `#8d8da5`; `home::[data-omd-capture="35"]` and siblings.

**Outline button** (`footer-outline-button`): transparent, `#ffffff` text, 1px `#ffffff` border, 10px radius, 100px × 40px, 12px / 700 / normal Pretendard; its `1px 6px` padding is the browser default for a button and is not claimed. `home::[data-omd-capture="32"]`.

### How states were read

The bundle holds no `::state-*` frame for any MakinaRocks element, so hover, pressed, and focus values are not declared. The blog category link with class `on` is the one selected variant. Corrected 2026-09-30: the July text gave `interactionCount: 0` as the reason; that count covers menu, dialog, and tab expansions only. The older card, CTA, mega-menu, and category-label variants stay withdrawn; the pills and cards above are re-derived from selector-level samples in the 2026-07-13 bundle.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.makinarocks.ai/; https://www.makinarocks.ai/en/about/; https://www.makinarocks.ai/en/blog/; https://www.makinarocks.ai/en/blog/makinarocks-rebranding-meet-our-new-logo/; https://github.com/orioncactus/pretendard/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/makinarocks (built-in web open failed; no matching result in site search); https://styles.refero.design/?q=makinarocks (built-in web open failed; no matching result in site search)
**Conflicts unresolved:** none

### States

No reusable product-state guidance is established. The bundle holds no `::state-*` frame for any element, so hover, pressed, and focus values are not declared. The disabled carousel arrows (`home::[data-omd-capture="19"]`, `"29"`) record the same captured values as the enabled ones and opacity is not captured, so no disabled treatment is declared either. The blog category link with class `on` is the one selected variant recorded. Empty, loading, error, success, form-validation, and motion states are unresolved rather than inferred from marketing copy. Corrected 2026-09-30: the July text cited `interactions: []` and `interactionCount: 0`; those count menu, dialog, and tab expansions only.

Live state probe, 2026-10-16 (`https://www.makinarocks.ai/`), `header-contact-link`: pressed — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do

- Keep public-web color claims scoped to the captured marketing, corporate, and editorial surfaces.
- Use KmrApparat only where a target project has a lawful source; otherwise label it unavailable rather than substituting a system font.
- Use Pretendard only with its upstream SIL OFL 1.1 boundary understood.
- Preserve fluorescent yellow-green as qualitative rebrand context until an exact, selector-provenanced public UI value is observed.
- Keep each component in §4 tied to its selector and surface; none declares a pointer or focus state, because the bundle holds no state frame.

### Don't

- Don't treat the public homepage as evidence for a logged-in AI OS or documentation chrome.
- Don't turn the 2026 rebrand’s logo/asset color into a guessed hex token.
- Don't reuse old mega-menu, hover, pressed, or focus variants without present selector/surface/state evidence; the pills, arrows, and cards in §4 are the measured replacements for the older inferred ones.
- Don't call `Pretendard JP` a live family: this bundle records it as declared-only with zero visible use.
- Don't advertise KmrApparat as a redistributable public font; no downstream licence was found.

## Voice & Tone

MakinaRocks’ first-party public language is industrial, concrete, and outcome-led. The English homepage frames the company around specialized AI and “Delivering Reality,” while the Korean About page describes Physical AI operating from factories to battlefields and accelerating a fully autonomous future through industry-specialized AI. The rebrand article adds a more energetic visual metaphor—an AI core breaking through the constraints of industrial reality—but its claims remain about brand expression, not an instruction to overstate product capability.

| Public context | Observed register | Evidence boundary |
|---|---|---|
| Homepage | Specialized AI, intelligent transformation, real industrial operations | Public marketing copy |
| About | Physical AI for harsh and unpredictable environments | Official company context |
| Rebrand | Dense physical-world core plus outward energy and momentum | Official identity narrative |

**Voice samples (from first-party public surfaces):**
- “Transforming Industries with Specialized AI” — official homepage.
- “Deploying AI, Delivering Reality” — official homepage.
- “The Physical AI Leader — Built for the Field, Powered by Enterprise AI OS” — official About positioning.

## Agent Prompt Guide

### Safe public-web reference

- Use white `#ffffff`, ink `#000000`, dark indigo `#2b2b3b`, slate `#5a5a72`, and muted `#8d8da5` only as public-web visual evidence.
- Use a 64px / 700 / 83.2px / -1.6px KmrApparat hero only when the target can legally load that family; otherwise omit that specimen rather than use a substitute.
- Use Pretendard 16px / 400 / 25.6px / -0.16px for the captured public-web reading example when appropriate.
- Components are limited to the fourteen selector-provenanced entries in §4 (header controls, outline pills, carousel arrow, home cards, About tile, blog tabs, cards and pagination, footer); none carries a measured pointer or focus state.

## Governance

### Known Gaps

- **Contrast, `header-nav-button`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `hero-outline-link`.** Text `#1a1a1a` on `#00000000` measures 1.21:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `large-outline-link`.** Text `#1a1a1a` on `#00000000` measures 1.21:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `blog-category-tab`.** Text `#5a5a72` on `#00000000` measures 3.14:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `blog-pagination-link`.** Text `#2b2b3b` on `#00000000` measures 1.51:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
