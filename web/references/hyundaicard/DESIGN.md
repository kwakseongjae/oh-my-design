---
name: Hyundai Card
colors:
  ink: '#000000'
  canvas: '#ffffff'
  inverse: '#ffffff'
  link-product: '#0070f0'
  link-corporate: '#1e75d6'
typography:
  hero:
    fontSize: 40px
    fontWeight: 600
    lineHeight: 52
    use: Product-home h2 headings
  corporate-hero:
    fontSize: 54px
    fontWeight: 700
    lineHeight: 80
    use: Corporate-information h2 headings on the two captured routes
  nav:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 26
    use: Product-home second-level navigation links
  card-title:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 22
    use: Product-card title labels
rounded:
  corporate-outline-action: 3px
  carousel-control: 5px
spacing:
  nav-inline: 20
  corporate-action-inline: 29
components:
  product-card-link:
    type: card
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    size: 146px x 160px
    typography: 16px / 500 / 22px platform system stack (label span.card_name; the anchor's own font is 16px / 400)
    hover: transform (parent li) translateY(-12px); the anchor itself unchanged
    pressed: 'transform (parent li) translateY(-12px); outline auto 2px #005fcc, offset -3px (the site''s :focus rule also draws on mouse press)'
    focus: 'outline auto 2px #005fcc, offset -3px (drawn by a site :focus rule, not the browser default)'
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on the lineup card 'the Red' (real :hover, :active, and Tab to :focus-visible)
    use: Product-home card link; transparent, borderless default
  second-level-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px 20px
    height: 80px
    typography: 18px / 500 / 26px / YouandiNewKr
    hover: '::before 2px #000000 bar across the link width; fg and bg unchanged; the fixed header (div#header) drops its rgba(0,0,0,0.08) 0px 2px 4px 0px shadow while the mega-menu is open'
    pressed: '::before 2px #000000 bar; outline auto 2px #005fcc, offset -3px (the site''s :focus rule also draws on mouse press)'
    focus: 'outline auto 2px #005fcc, offset -3px (drawn by a site :focus rule, not the browser default); ::before 2px #000000 bar'
    states: default captured 2026-07-13 (header links 1 to 7); hover, pressed and keyboard focus measured 2026-09-29 on 카드 (real :hover, :active, and Tab to :focus-visible)
    use: Product-home header second-level link (Account, 카드, 혜택, 금융, 컬처, 고객 지원, Apple Pay)
  product-detail-link:
    type: tab
    backgroundColor: transparent
    textColor: '#0070f0'
    rounded: 0px
    padding: 0px
    height: 20px
    typography: 16px / 700 / platform system stack
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: 'outline auto 2px #005fcc, offset -3px (the site''s :focus rule also draws on mouse press)'
    focus: 'outline auto 2px #005fcc, offset -3px (drawn by a site :focus rule, not the browser default)'
    states: default captured 2026-07-13 (four 전체보기 links); hover, pressed and keyboard focus measured 2026-09-29 on the first
    use: Product-home 전체보기 detail link, the colors.link-product role
  search-open:
    type: button
    backgroundColor: transparent
    textColor: rgba(0,0,0,0.48)
    rounded: 0px
    size: 30px x 30px (24px x 24px once the header shrinks on scroll)
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: 'outline auto 2px #005fcc, offset -3px (the site''s :focus rule also draws on mouse press)'
    focus: 'outline auto 2px #005fcc, offset -3px (drawn by a site :focus rule, not the browser default)'
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29; the glyph is a background image; the search layer it opens was not opened
    use: Header search opener (검색 영역 열기); no text input exists until it opens
  corporate-outline-action:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: 1px rgba(255,255,255,0.6)
    rounded: 3px
    padding: 0px 29px
    height: 48px
    typography: 16px / 400 / 46px / platform system stack
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: no change among the compared properties (measured 2026-09-29)
    focus: 'outline auto 1px #005fcc, offset 1px (consistent with the browser default; not a brand token)'
    states: default captured 2026-07-13 on the English (ceh) and Korean (ckh) corporate routes; hover, pressed and keyboard focus measured 2026-09-29 on the English route only (Go to Company Overview, in an auto-advancing hero)
    use: Corporate-information hero outline action; corporate routes only
  corporate-text-link:
    type: tab
    backgroundColor: transparent
    textColor: '#1e75d6'
    rounded: 0px
    padding: 0px
    height: 16px
    typography: 13px / 400 / platform system stack
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: no change among the compared properties (measured 2026-09-29)
    focus: 'outline auto 1px #005fcc, offset 1px (consistent with the browser default; not a brand token)'
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on the English route (Go to Recruitment Homepage); a 12px arrow image follows the label
    use: Corporate-information text link, the colors.link-corporate role
  utility-link:
    type: tab
    backgroundColor: transparent
    textColor: '#5c5c5c'
    rounded: 0px
    padding: 2px 6px
    height: 24px
    typography: 14px / 400 / 20px / platform system stack
    states: default captured 2026-07-13; the 2026-09-29 survey reads the same four links; no pointer-state sample
    use: Product-home header utility link (법인, 가맹점, 소비자보호 포털, 상품공시실)
  corporate-menu-link:
    type: tab
    backgroundColor: transparent
    textColor: '#959595'
    rounded: 0px
    padding: 0px 0px 0px 28px
    height: 42px
    typography: 14px / 400 / 18px / YouandiNewKr
    states: default captured 2026-07-13 on the English corporate route; the 2026-09-29 survey reads the same four links; no pointer-state sample
    use: Corporate-information top menu link (About Us, Investor Relations, Ethics, Careers)
  carousel-pause-control:
    type: button
    backgroundColor: '#000000'
    rounded: 5px
    size: 20px x 10px
    states: default captured 2026-07-13; the 2026-09-29 survey labels it 일시정지; no pointer-state sample
    use: Product-home hero carousel pause control; the rounded.carousel-control radius
  login-filled-button:
    type: button
    backgroundColor: '#000000'
    rounded: 8px
    padding: 17px 4px
    size: 280px x 56px
    states: default captured 2026-07-13; deliberately not hovered, pressed or focused on 2026-09-29 because it belongs to the login widget
    use: Product-home login widget action (간편번호 등록); the anchor's own text colour equals its fill and the visible label was not read, so no text colour is declared
  quick-menu-box:
    type: card
    backgroundColor: transparent
    border: '1px #858585'
    rounded: 8px
    size: 280px x 78px
    states: default captured 2026-07-13; no pointer-state sample
    use: Product-home quick-menu box beside the login widget (상담·문의 …)
fonts:
  roles:
    sans: YouandiNewKr
---

# Design System Inspiration of Hyundai Card

## Overview

### Visual Theme & Atmosphere

Hyundai Card is a Korean credit-card company whose identity reaches beyond payment products into card design, cultural programming, and branded libraries. Its most recognizable visual asset is Youandi: the company introduced the proprietary typeface in 2003, then renewed it as YouandiNew for contemporary digital media. Hyundai Card’s own account places the card plate’s proportions inside the letterforms, treating type as a carrier of brand identity rather than as a decorative layer. That history is visible on the current captured product home, where loaded YouandiNewKr leads product headings and navigation, while the corporate-information routes use a larger white-on-dark display treatment. The live product routes are not a uniform monochrome system: black and white form the common base, but their product and corporate links use distinct blue values. DIVE, the Design Library, and other cultural/marketing surfaces are meaningful brand context, but were not used to fill product tokens in this reference.

### Primary tasks

- Find a card product from the Hyundai Card home page
- Read company information on the Hyundai Card corporate pages

### Brand Narrative

Hyundai Card pairs credit-card products with a long-running cultural and design program. Its official company overview describes a current move toward a technology-company identity while continuing the cultural work expressed through libraries, performance programs, branded spaces, card plates, and Youandi. That makes the company’s visual story broader than one web page or one card campaign.

Youandi is the clearest continuity thread. Hyundai Card developed the first version in 2003; its official account says the original letterforms drew from the physical shape and proportions of a card. The 2021 YouandiNew renewal rebuilt that asset for evolving digital media, expanded its range, and added variable-font capability. The current web capture corroborates that the newer family is not merely historical: `YouandiNewKr` is loaded and visible on current product and corporate headings.

### Principles

1. **Build identity into useful assets.** Youandi is presented as a brand asset used in product branding and official documents.
   *UI implication:* preserve the verified family distinction instead of approximating it with a system font.
2. **Let the product and the cultural program remain distinct evidence domains.** The company’s libraries and DIVE expand brand context, but they are not product-component documentation.
   *UI implication:* do not transfer their colors or patterns into payment-product tokens without direct proof.
3. **Use surface-local rules.** The current product home and corporate-information routes intentionally expose different link and inverse-action treatments.
   *UI implication:* name a component’s source surface before reusing its geometry or colors.

### Personas

These are service-context archetypes, not claims about private user research.

- **Card product visitor** — needs a product route whose navigation, cards, and links remain clear without relying on cultural-site styling.
- **Corporate-information reader** — encounters a high-contrast informational hero and outline action on Hyundai Card’s company pages.
- **Culture-program visitor** — may meet DIVE or a Hyundai Card library; that context can inform brand understanding but must not be mistaken for payment-product UI evidence.

## Colors

The three supplied current captures share black text and white page fields. Two blue link treatments are surface-specific, so neither is promoted as a universal brand primary.

| Role | Value | Usage and evidence boundary |
| --- | --- | --- |
| Ink | #000000 | Current product home and both corporate-information routes; text and border observations |
| Canvas | #FFFFFF | Current captured surface background observations |
| Inverse text | #FFFFFF | Corporate-information hero/action context; not a global text token |
| Product link | #0070F0 | Product-home detail links only |
| Corporate link | #1E75D6 | Corporate-information links only |

The prior DIVE-only red and green content tags are omitted: they were not observed in this product/corporate packet and cannot describe the current product token set.

Keyboard focus draws a third blue, `#005fcc` (`rgb(0, 95, 204)`), as an `outline-style: auto` ring on every control probed on 2026-09-29 (§14). It is not a palette role: on the product home it comes from a site `:focus` rule, and on the corporate route it is consistent with the browser default.

## Typography

**Official product-use.** Hyundai Card says that it has used Youandi for product branding and official company documents since 2003; the 2021 renewal, YouandiNew, was designed for digital environments, readability, Korean/English balance, and variable-font use. The official account describes it as a proprietary corporate typeface, not a public web-font distribution or open-license announcement.

**Live computed surface-use.** `YouandiNewKr` is the only verified branded family in this packet: it is the computed family on 60 visible heading, navigation, and text observations, has a loaded FontFace match, and resolves to Hyundai Card-hosted `YouandiNewKrTitle` font files. The product home uses 40px/600/52px `h2` headings and 18px/500/26px second-level links; the two corporate-information pages use 54px/700/80px `h2` headings.

**System use.** A platform stack is the first computed family on 351 ordinary body, card, button, and text observations. It is an observed runtime fallback/utility stack, not a substitute rendering of YouandiNewKr and not a brand-font claim. Product-card labels are observed at 16px/500/22px in that stack.

**Declared-only assets.** `Spoqa Han Sans Neo`, `YouandiModernHEB`, `YouandiModernTR`, and `YouandModern` have `@font-face` source declarations in the capture but no visible first-family usage. They remain declared-only. A password-input face named `pass` is loaded for two inputs and is not a brand type token.

**License boundary.** The official font history establishes Hyundai Card’s ownership and internal product/document use. No public redistribution license or browser-consumable licensing terms were found in the official sources consulted; do not infer permission to ship the font outside its supplied Hyundai Card sources.

## Layout

The captured product home establishes hierarchy through a 40px YouandiNewKr heading, 18px second-level navigation, and transparent product-card links rather than a documented card-container recipe. Corporate-information routes use a separate 54px inverse hero and compact 3px outline action. Treat those as surface-specific compositions; there is no captured evidence for a shared responsive grid, spacing scale, or universal card treatment.

### Responsive Behavior

The supplied evidence is desktop-only at 1440×900. It establishes typography and default component values on the listed routes, not a responsive contract. Preserve the surface split and remeasure at target breakpoints before assigning mobile dimensions, stacking behavior, or touch states.

## Elevation & Depth

The captured representatives report `box-shadow: none`. This supports a flat default for the retained components only. It does not establish that Hyundai Card never uses shadows, gradients, or elevation on other product, marketing, or native-app surfaces.

One measured cue stands in for elevation: on hover, a product-home lineup card's list item moves up 12px (`translateY(-12px)`, measured 2026-09-29). It is a transform, not a shadow.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

No transition duration, easing curve, or motion state was observed in the 2026-07-13 capture. The 2026-09-29 probe read one motion cue: on hover, a product-home lineup card's list item moves up 12px (`translateY(-12px)`); the timing of that move was not read. The probed controls' own transitions compute `0s`. Do not derive a duration or easing scale from this; retain it as unresolved until it is measured.

---
**Verified:** 2026-07-13 · states re-measured 2026-09-29 (live probe of the product home and the English corporate route)
**Tier 1 sources:** https://www.hyundaicard.com/index.jsp (current product home, supplied computed-style capture), https://www.hyundaicard.com/about/ceh/ho/cehho0101_01.hc and https://www.hyundaicard.com/about/ckh/ho/ckhho0101_01.hc (current corporate-information routes, supplied capture), https://newsroom.hyundaicard.com/front/board/Hyundai-Card-branding-through-typeface?country=en (official Youandi/YouandiNew history and product-use context), https://img.hyundaicard.com/about/common/en/pageView.hc?id=ceabi0201_01 (official company overview), https://newsroom.hyundaicard.com/front/board/Hyundai-Card-Design-Library?country=en (official cultural/design context; not token evidence)
**Tier 2 sources:** https://getdesign.md/hyundaicard (attempted; built-in fetch path rejected the direct URL and search yielded no importable record), https://styles.refero.design/?q=Hyundai%20Card (attempted; built-in fetch path rejected the direct URL and search yielded no importable record). No Tier 2 values were promoted.
**Resolution note:** Prior DIVE-only palette, Noto Sans KR body, 26px heading, 24px/48px pill, category tags, and interaction guidance were removed because this packet did not corroborate them on current product/corporate routes.
**Conflicts unresolved:** none
**Proof:** see .verification.md (## Proof — Tier 1 live inspect)

## Components

Rest values come from the 2026-07-13 capture unless marked. Hover, pressed and keyboard focus come from a live probe on 2026-09-29 (real `:hover`, `:active`, and Tab to `:focus-visible`) on the product home and on the English corporate route `ceh`, which is the `corporate-ceh` surface declared here; the Korean twin `ckh` was not probed.

**Two focus rings (measured 2026-09-29).** On the product home a site `:focus` rule draws `outline: auto 2px #005fcc` with a -3px offset on every probed control, and the same ring appears while a control is pressed with the mouse. Chrome draws its own ring on `:focus-visible` only, so this is an authored rule that borrows the `auto` shape; that is inferred from the press behaviour and the offset, since the stylesheet was not read. On the English corporate route the ring is `auto 1px #005fcc` with a 1px offset, on `:focus-visible` only, consistent with the browser default. Neither is a brand colour or a token.

### Product-home navigation link

**Second-level link**
- Background: transparent
- Text: #000000
- Border: none
- Radius: 0px
- Padding: 0px 20px
- Font: 18px / 500 / YouandiNewKr
- Height: 80px
- Hover: a 2px `#000000` bar appears through `::before` across the link's width; text and background stay as they are. The fixed header (`div#header`) drops its `rgba(0,0,0,0.08) 0px 2px 4px 0px` shadow while the mega-menu is open, on hover, press and focus; after a keyboard focus the shadow stays off
- Pressed: the same bar, plus the home focus ring
- Focus: the home focus ring and the bar. The bar persisted after focus moved on, most likely because focus had entered the item's sub-menu (inferred; not read on 카드 itself)
- Use: `home::[data-omd-capture="1"–"7"]` static second-level navigation links on the product home (Account, 카드, 혜택, 금융, 컬처, 고객 지원, Apple Pay); probed on 카드

### Product-card link

**Default**
- Background: transparent
- Text: #000000
- Border: none
- Radius: 0px
- Size: 146px × 160px for the first lineup card
- Label: 16px / 500 / 22px platform system stack (`span.card_name`); the anchor's own computed font is 16px / 400
- Hover: the anchor does not change, but its parent list item lifts 12px (`transform: translateY(-12px)`)
- Pressed: the same lift, plus the home focus ring
- Focus: the home focus ring
- No lift on keyboard focus among the compared properties (measured 2026-09-29)
- Use: `home::[data-omd-capture="55"–"84"]` product-card links; probed on the lineup card 'the Red'

### Product detail link
- Text: #0070F0 (the product-link role), 16px / 700 platform system stack, 20px tall, no underline
- Hover: no change among the compared properties (measured 2026-09-29)
- Pressed: the home focus ring
- Focus: the home focus ring
- Use: the four 전체보기 links on the product home; probed on the first

### Search opener
- 30px × 30px (24px × 24px once the header shrinks on scroll), transparent; the glyph is a background image and the anchor's own text colour is rgba(0,0,0,0.48)
- Hover: no change among the compared properties (measured 2026-09-29)
- Pressed: the home focus ring
- Focus: the home focus ring
- Use: header 검색 영역 열기. There is no text input until it opens, and it was not opened

### Header utility link
- Text: #5C5C5C, 14px / 400 / 20px platform system stack, padding 2px 6px, 24px tall
- No pointer-state sample
- Use: 법인, 가맹점, 소비자보호 포털, 상품공시실 (captured 2026-07-13; the 2026-09-29 survey reads the same four)

### Carousel pause control
- #000000 fill, 5px radius (the `carousel-control` radius), 20px × 10px
- No pointer-state sample
- Use: the product-home hero carousel's 일시정지 control

### Login filled button
- #000000 fill, 8px radius, padding 17px 4px, 280px × 56px
- The anchor's own text colour equals its fill and the visible label element was not read, so no text colour or label type is given
- Not hovered, pressed or focused on 2026-09-29, because it belongs to the login widget
- Use: 간편번호 등록

### Quick-menu box
- Transparent, 1px #858585 border, 8px radius, 280px × 78px
- The 2026-09-29 survey reads its items (상담·문의 …) split by 1px #EBEBEB left rules
- No pointer-state sample
- Use: the quick menu beside the login widget

### Corporate-information action

**Outline action**
- Background: transparent
- Text: #FFFFFF
- Border: 1px solid rgba(255,255,255,0.6)
- Radius: 3px
- Padding: 0px 29px
- Font: 16px / 400 / platform system stack
- Height: 48px
- Hover and pressed: no change among the compared properties (measured 2026-09-29 on the English route)
- Focus: the corporate ring, `auto 1px #005fcc`, 1px offset
- Use: `surface-2::[data-omd-capture="11"]` and `surface-3::[data-omd-capture="12"]`; corporate-information routes only. States were read on the English route (Go to Company Overview) only

### Corporate text link
- Text: #1E75D6 (the corporate-link role), 13px / 400 platform system stack, 16px tall, followed by a 12px arrow image
- Hover and pressed: no change among the compared properties (measured 2026-09-29)
- Focus: the corporate ring, `auto 1px #005fcc`, 1px offset
- Use: Go to Recruitment Homepage on the English corporate route

### Corporate top-menu link
- Text: #959595, 14px / 400 / 18px YouandiNewKr, padding 0 0 0 28px, 42px tall
- No pointer-state sample
- Use: About Us, Investor Relations, Ethics and Careers on the English route (captured 2026-07-13; the 2026-09-29 survey reads the same four). The Korean route's five links sit at 29px and 43px

No disabled, error, menu, dialog, or toast state is included. The 2026-07-13 collector reported zero interaction expansions and zero observed states; the hover, pressed and focus values above come from the 2026-09-29 probe.

### States

The 2026-07-13 packet captured default styles only (`interactionCount: 0`, `interactionKinds: 0`, `observedStates: 0`). A live probe on 2026-09-29 measured hover, pressed and keyboard focus on six controls: four on the product home (the second-level link 카드, the lineup card 'the Red', 전체보기, the search opener) and two on the English corporate route (Go to Company Overview, Go to Recruitment Homepage). No state token is published; the values sit on the §4 components.

| Category | Status |
| --- | --- |
| Default | Observed for the §4 components (2026-07-13) |
| Hover | Measured 2026-09-29: a 2px `#000000` `::before` bar on the second-level link; a 12px lift of the lineup card's list item |
| Hover, the other four probed controls | No change among the compared properties (measured 2026-09-29) |
| Focus | Measured 2026-09-29 on all six: product home `outline: auto 2px #005fcc`, -3px offset, from a site `:focus` rule; English corporate route `auto 1px #005fcc`, 1px offset, consistent with the browser default. No brand focus colour |
| Pressed, product home | Measured 2026-09-29: the site's focus ring appears on mouse press, with the bar or the lift where hover has one |
| Pressed, corporate route | No change among the compared properties (measured 2026-09-29) |
| Disabled | Not observed |
| Error | Not observed |
| Loading | Not observed |
| Success | Not observed |
| Empty | Not observed |
| Skeleton | Not observed |

## Do's and Don'ts

### Do

- Use YouandiNewKr only when it is licensed and actually available from Hyundai Card-controlled sources.
- Preserve the product/corporate split: black-and-white foundation, product link #0070F0, corporate link #1E75D6.
- Keep the observed product navigation and card links transparent and borderless.
- Use the 3px corporate outline action only for the corporate-information context from which it was measured.

### Don't

- Treat DIVE tag colors or Design Library visuals as current payment-product tokens.
- Replace unavailable YouandiNewKr with a system face while labeling it Youandi.
- Generalize the corporate white outline action into a product-home primary button.
- Invent interaction states, motion, a spacing scale, or component variants absent from the capture and the 2026-09-29 probe.

## Voice & Tone

The official materials frame Hyundai Card as a financial company that has deliberately built a wider culture-and-design practice through its branded spaces, card plates, and typeface. The usable voice is therefore precise, design-literate, and concrete rather than “luxury” by default.

| Do | Don't |
| --- | --- |
| Describe a specific product, design choice, or cultural program plainly. | Claim an unmeasured visual rule as a universal brand mandate. |
| Let Youandi’s card-derived construction carry a factual brand story. | Use vague premium language in place of evidence. |
| Keep product and cultural surfaces named and separated. | Fold DIVE or library material into payment-product UI claims. |

## Agent Prompt Guide

When using the verified current Hyundai Card web cues, prompt for a restrained black-and-white base with surface-local blue links, not a generic monochrome luxury system. Use licensed YouandiNewKr for verified display/nav moments only; otherwise keep the observed platform stack honestly labeled. On a product-home composition, use transparent 18px/500 YouandiNewKr second-level links with 20px inline padding and transparent product-card links. Do not import DIVE category tags, a 48px pill, Noto Sans KR, or any invented state behavior. Keep the 54px inverse corporate hero and 3px white outline action confined to corporate-information-like contexts. The measured interaction cues (2026-09-29) are small and physical: a 2px black `::before` bar on a hovered second-level link and a 12px lift on a hovered lineup card.

## Governance

### Known Gaps

- **Contrast, `product-card-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `second-level-nav-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-open`.** Text `#0000007a` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `utility-link`.** Text `#5c5c5c` on `#00000000` measures 3.14:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
