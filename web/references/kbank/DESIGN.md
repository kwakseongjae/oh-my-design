---
name: K bank
colors:
  primary: '#0114a7'
  secondary: '#4262ff'
  canvas: '#ffffff'
  foreground: '#000000'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    use: Observed public-web home body and compact action control; do not generalize to native or authenticated banking.
  product-display:
    fontSize: 44px
    fontWeight: 700
    lineHeight: 59.4px
    letterSpacing: '-0.22px'
    use: Observed on the supplied public deposit-product pages only.
rounded:
  compact-action: 8px
  primary-action: 10px
  selected-tab: 0px
spacing:
  compact-action-inline: 14
  wide-action-inline: 28
components:
  public-home-shell:
    type: card
    backgroundColor: transparent
    rounded: 0px
    shadow: none
    use: Observed static home shell at home::div.mainCardWrapper.css-x2jyed; not a general card family.
  public-compact-action:
    type: button
    backgroundColor: '#4262ff'
    textColor: '#ffffff'
    rounded: 8px
    padding: 0px 14px
    height: 40px
    typography: 16px / 400 / Pretendard K Edition
    states: default captured on all six routes; the bundle holds no state frame for any element
    use: Header compact action (button.css-1ags3br) at home::[data-omd-capture="3"], 96 x 40; computed oklch(0.571 0.235 268.681) on oklch(1 0 0); on the four product routes the same button computes a font stack led by -apple-system
  public-primary-action:
    type: button
    backgroundColor: '#0114a7'
    textColor: '#ffffff'
    rounded: 10px
    padding: 0px 28px
    height: 48px
    typography: 16px / 400 / system stack led by -apple-system
    states: default captured; no state frame
    use: Primary action (button.css-1mbo487) at product-curious::[data-omd-capture="19"], 143 x 48; computed oklch(0.343 0.219 264.362); the home copy (home::[data-omd-capture="18"], 202 x 48) computes 14px / 400 Pretendard K Edition
  product-index-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#545b69'
    rounded: 0px
    padding: 10px 4px 12px
    height: 44px
    typography: 18px / 700 / 24.3px Pretendard K Edition
    states: rest on six tabs; capture 14 carries aria-selected=true and captures 15 to 19 false, yet all six compute the same colour, type and geometry, so no selected value is declared; no state frame
    use: Deposit-index product tab (button role=tab, css-1npe48v) at product-index::[data-omd-capture="15"], 180 x 44; computed oklch(0.47 0.024 264.308)
  product-choice-chip:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#2a2e36'
    border: '1px #ced4e2'
    rounded: 6px
    padding: 0px 12px
    height: 32px
    typography: 16px / 400 / system stack led by -apple-system
    states: default captured on thirteen chips; no state frame
    use: Deposit-index bordered choice (button.css-174ue6) at product-index::[data-omd-capture="21"], 74 x 32; computed oklch(1 0 0), text oklch(0.301 0.016 264.308), border oklch(0.87 0.02 267.27)
  product-detail-text-button:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 16px 20px
    height: 60px
    typography: 18.72px / 700 / system stack led by -apple-system
    states: default captured; no state frame and no expansion record
    use: Product-detail full-width text button (button.css-1kjxfqu) at product-curious::[data-omd-capture="14"], 1080 x 60; five on product-curious, four on product-rolling, three on product-one-card
  gnb-link:
    type: tab
    backgroundColor: transparent
    padding: 0px 24px
    height: 56px
    states: default captured, nine per route; no state frame
    use: Global navigation link (a.css-opegi4) at home::[data-omd-capture="4"], 110 x 56; its own 16px / 400 black equals the inherited page default, so no label style is declared
  product-soft-action:
    type: button
    backgroundColor: '#edf3ff'
    textColor: '#0114a7'
    rounded: 8px
    padding: 0px 14px
    height: 40px
    typography: 16px / 400 / system stack led by -apple-system
    states: default captured on product-curious (one) and product-one-card (thirteen); no state frame
    use: Product-page tinted action (button.css-162fgkl) at product-curious::[data-omd-capture="13"], 178 x 40; computed oklch(0.963 0.017 264.487) with oklch(0.343 0.219 264.362) text, the primary blue; the copies inside the ONE card benefit slides are 90 x 37
  benefit-slide-card:
    type: card
    backgroundColor: '#f7f8fb'
    rounded: 16px
    padding: 32px 0px
    size: 316px x 381px
    states: non-interactive carousel panel; eight at 316 x 381 and the fully visible slide at 340 x 410
    use: ONE card benefit slide (div role=tabpanel, swiper-slide benefit-slide) at product-one-card::[data-omd-capture="13"]; computed oklch(0.979 0.004 271.37); 12px right margin
  slide-pagination-tab:
    type: tab
    backgroundColor: transparent
    padding: 3px
    size: 18px x 18px
    states: three at rest in a 62 x 18 tablist; no aria-selected recorded, so no current-page style is declared; no state frame
    use: ONE card benefit carousel pagination (div role=tab, css-120l21f) at product-one-card::[data-omd-capture="31"]; the dot is drawn by a child that was not sampled; a 30 x 30 play toggle (capture 34) sits beside it
fonts:
  roles:
    ui: Pretendard K Edition
---

# K bank — Design Reference

## Overview

### Visual Theme & Atmosphere

K bank is South Korea’s first internet-only bank. Its official brand story describes a “pleasant financial life” built from the basics of banking—rates and fees—then carries that promise into everyday rewards, investment, safety, and connected services. The public-web product capture has a more restrained job than that broad marketing story: it uses a white canvas and black chrome with two blue actions, while product information pages mix the loaded K bank webfont with system-stack controls. K bank’s own resource center makes the blue pair and Pretendard K Edition part of its brand expression; its culture writing adds a participatory way of working. These sources explain the brand’s current public expression, but only the supplied selector-backed product capture establishes the tokens and components below.

The evidence covers five distinct public product URLs plus a duplicate home snapshot. It does not cover the authenticated app, transfer journeys, account management, documentation chrome, or native UI. Brand marketing, the resource center, and culture writing are therefore retained as context and asset evidence—not silently converted into generic banking components or product states.

**Key characteristics:**

- White public-web canvas and black structural text
- Official dark-blue `#0114A7` and secondary blue `#4262FF`, both observed on separate public actions
- Pretendard K Edition is the loaded public-web family; selected product controls also expose an operating-system stack
- Flat, selector-local controls: 8px and 10px action corners coexist with 0px tabs and utility controls

### Primary tasks

- Explore savings, card, and investment products on the public pages
- Read what a deposit product is worth before its conditions
- Check the eligibility limits a product page spells out

### Iconography & Imagery

K bank’s official resource center publishes logo, K-bank identification icon, logo spacing, light/dark icon colors, and media-kit material. The icon guide says the K position is visually adjusted and should not be moved; it is brand-asset guidance for identifying K bank, including transfer screens, rather than a general application icon library. The supplied product collector does not identify a named SVG set, illustration ratio, or icon-component geometry. `swiper-icons` is declared but unused and must not be substituted for a K bank text or icon token.

#### Do

- Keep the two blue action treatments tied to their public-web selector and surface provenance.
- Use Pretendard K Edition only where loaded public-web evidence or official brand guidance applies.
- Use the official resource center for logo and K icon treatment, keeping those assets separate from product-control tokens.

#### Don't

- Generalize captured public actions to transfer, account, login, or native-app flows.
- Invent interaction states, a responsive grid, a general card family, or a documentation system from these static routes.
- Render a system fallback or `swiper-icons` as a verified K bank-branded typeface.

### Brand Narrative

K bank’s official culture story identifies the company as South Korea’s first internet-only bank. Its current brand story frames the evolution not as finance for finance’s sake, but as a pleasant daily financial life: better basics, rewards woven into ordinary moments, access to investment, and reassurance around customers’ assets.

That public expression is supported by a resource center that gives the brand a consistent visual vocabulary—deep and secondary blue, a K identification icon, and Pretendard K Edition—while distinguishing logo/asset guidance from the public-web UI. The public product routes in this reference show only a bounded web slice of that system; they do not prove the design of protected banking work or the native app.

### Principles

1. **Make the financial basics feel worthwhile.** The brand story foregrounds rates, fees, and practical benefits.
   *UI implication:* lead public product pages with the customer value, then keep conditions readable.
2. **Connect finance to daily life.** The brand explicitly places banking around shopping, meals, rewards, and ordinary routines.
   *UI implication:* use concrete scenarios in public education without trivializing regulated detail.
3. **Protect confidence while broadening access.** The brand combines approachable benefits with asset reassurance, IT, and AI-security messaging.
   *UI implication:* do not reuse campaign exuberance as a substitute for clear security and transaction states.
4. **Build shared language through participation.** The culture story documents collective input into K bank’s way of working.
   *UI implication:* retain provenance and evidence boundaries so product, brand, and design teams can review decisions together.

### Personas

These are source-grounded service audiences, not fictional user profiles.

- **Everyday banking customer:** the brand story addresses spending, rewards, and routine money management; protected-flow requirements were not captured.
- **Customer exploring savings, cards, or investment:** public product pages and the brand story cover these offerings, without establishing a unified dashboard UI.
- **Customer seeking reassurance:** the brand story speaks to security and asset confidence; specific support or fraud-response flows remain unobserved.
- **Internal contributor:** the culture story documents employees participating in defining shared working practices, an organizational stakeholder rather than an end user.

## Colors

### Color & Typography

#### Color tokens

- `#0114A7` — official primary color in K bank’s resource center; also the computed fill of the 48px public primary action.
- `#4262FF` — official secondary color in the same resource center; also the computed fill of the 40px compact action.
- `#FFFFFF` — observed page canvas and action-label color.
- `#000000` — observed public-web structural text and transparent-control border color.

The resource center additionally lists `#E0E6F1`, `#EDF1F7`, and `#F7F9FD` as brand grayscale and `#2848DF` for the icon’s dark-mode treatment. They are official brand/asset guidance, not tokens promoted from the supplied product capture.

#### Typography evidence classes

- **Official product/brand-use:** K bank’s resource center designates Pretendard K Edition for its consistent brand image and permits Pretendard as an alternate. This is official brand guidance, not a license grant or proof of every app surface.
- **Live computed surface-use:** Pretendard K Edition is `loaded` with high confidence, 58 observed uses, and four first-party WOFF2 sources on the supplied public-web routes. It is the sole UI-family token because both computed use and FontFaceSet/source evidence are present.
- **Live system use:** `-apple-system` is a high-confidence operating-system stack on 181 observed public-page elements, including product-detail controls. It remains system evidence rather than a K bank family or a substitute for Pretendard K Edition.
- **Declared-only:** `swiper-icons` has a data-URL `@font-face` declaration and zero visible uses. It is not a text-family token.
- **Official distributed asset / license:** no separately downloadable K bank font asset or font-license terms were located in the official material reviewed. The resource-center font statement remains useful brand evidence but does not authorize rehosting or substitution.

| Role | Size | Weight | Line height | Boundary |
|---|---:|---:|---:|---|
| Public-web body / compact action | 16px | 400 | normal | Home route; Pretendard K Edition loaded |
| Public deposit display | 44px | 700 | 59.4px | Supplied public deposit-product pages; -0.22px tracking |
| Selected product tab | 18px | 700 | 24.3px | Deposit index only; Pretendard K Edition |

## Typography

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.body.lineHeight`: `normal`

## Layout

### Layout & Grid

- The supplied collector uses a `1440×900` viewport on the home, product index, two deposit pages, and the ONE card page. The second home record is a duplicate URL, not a breakpoint or a distinct surface.
- The home’s `mainCardWrapper` is a measured static shell (`1365px × 840px`, no padding, 0px radius), not a reusable product-card or grid contract.
- Public product-page measurements include 44px tabs and 40px/48px action controls. No mobile breakpoint, authenticated layout, or responsive rule was captured.

## Elevation & Depth

### Elevation

The selector-backed public-home shell and all promoted action/tab samples have `box-shadow: none`. This is a route-level flatness observation, not a shadow scale for native banking, brand marketing, or unobserved panels.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Shapes

### Spacing & Shape

- The measured compact and primary actions use `0px 14px` / 8px and `0px 28px` / 10px respectively.
- The product tabs are square (`0px`) with `10px 4px 12px` padding, selected or not; the product-index bordered choice is 6px with `0px 12px` padding.
- The bundle also contains 2px, 3px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 28px, 32px, and 100px spacing observations. Their semantics are not promoted into a global scale.

## Motion & Easing

No motion, transition, easing, or interaction expansion appears in the supplied raw evidence. Motion tokens and behavioral rules are not established here; the observed selected tab is not proof of a tab transition or easing curve.

## Components

### Public compact action

**Default**
- Background: `#4262FF` (computed `oklch(0.571 0.235 268.681)`)
- Text: `#FFFFFF`
- Radius: `8px`
- Padding: `0px 14px`
- Height: `40px`
- Font: `16px / 400 / Pretendard K Edition` on home; on the four product routes the same button computes a stack led by `-apple-system` (noted 2026-09-29)
- States: Default only; no hover, pressed, focus, or disabled state captured.
- Use: `home::[data-omd-capture="3"]`; the same fingerprint occurs across the supplied public routes.

### Public primary action

**Default**
- Background: `#0114A7` (computed `oklch(0.343 0.219 264.362)`)
- Text: `#FFFFFF`
- Radius: `10px`
- Padding: `0px 28px`
- Height: `48px`
- Font: `16px / 400 / system stack` on `product-curious::[data-omd-capture="19"]`; the duplicate home snapshot uses a 14px Pretendard K Edition instance.
- States: Default only; no hover, pressed, focus, or disabled state captured.
- Use: Supplied public deposit and card-product pages; this does not establish an authenticated-flow CTA.

### Product index tab

**Rest (selected and unselected alike)**
- Background: transparent
- Text: `#545B69` (computed `oklch(0.47 0.024 264.308)`)
- Radius: `0px`
- Padding: `10px 4px 12px`
- Height: `44px` (180 × 44)
- Font: `18px / 700 / 24.3px Pretendard K Edition`
- States: capture 14 carries `aria-selected="true"` and captures 15 to 19 carry `"false"`, yet all six compute the same text colour, weight, padding, and height. The selected treatment therefore lies outside the dumped properties, and no selected value is declared. Corrected 2026-09-29: the July text presented these values as the selected style and said no alternate tab state was captured; the five unselected tabs were captured with identical values.
- Use: `product-index::[data-omd-capture="14"]` to `"19"` on the public deposit index (`button[role=tab]`).

### Product-index bordered choice

**Default**
- Background: `#FFFFFF` (computed `oklch(1 0 0)`)
- Text: `#2A2E36` (computed `oklch(0.301 0.016 264.308)`)
- Border: 1px `#CED4E2` (computed `oklch(0.87 0.02 267.27)`)
- Radius: `6px`
- Padding: `0px 12px`
- Height: `32px`
- Font: `16px / 400 / system stack`
- States: Default only; no interaction state captured.
- Use: `product-index::[data-omd-capture="21"]`; medium-confidence collector fingerprint, retained with its exact source boundary.

### Product-detail full-width text button

**Default**
- Text: `#000000`
- Radius: `0px`
- Padding: `16px 20px`
- Height: `60px`
- Font: `18.72px / 700 / system stack`
- States: Default only; no expansion or pressed state captured.
- Use: `product-curious::[data-omd-capture="14"]`, repeated on the supplied deposit and card product pages.

The components below were transcribed on 2026-09-29 from the same 2026-07-13 bundle; nothing was re-measured. Hex values convert the computed `oklch()` strings, which are kept beside them.

### Global navigation link

- Background: transparent
- Padding: `0px 24px`
- Height: `56px` (110 × 56 for a four-character label)
- Use: global navigation, nine links per route (`a.css-opegi4`, `home::[data-omd-capture="4"]` to `"12"`). The link's own `16px / 400` black equals the inherited page default, so no label style is declared.
- States: default captured; no state frame.

### Product tinted action

- Background: `#EDF3FF` (computed `oklch(0.963 0.017 264.487)`)
- Text: `#0114A7` (computed `oklch(0.343 0.219 264.362)`, the primary blue)
- Radius: `8px`
- Padding: `0px 14px`
- Height: `40px` (178 × 40); the copies inside the ONE card benefit slides are 90 × 37
- Font: `16px / 400 / system stack` led by `-apple-system`
- States: default captured on product-curious (one) and ONE card (thirteen); no state frame.
- Use: `product-curious::[data-omd-capture="13"]` (`button.css-162fgkl`).

### ONE card benefit slide

- Background: `#F7F8FB` (computed `oklch(0.979 0.004 271.37)`)
- Radius: `16px`
- Padding: `32px 0px`
- Size: 316 × 381 (eight slides); the fully visible slide is 340 × 410
- Use: benefit carousel panel (`div[role=tabpanel]`, `swiper-slide benefit-slide`) at `product-one-card::[data-omd-capture="13"]`, with a 12px right margin. Non-interactive.

### Carousel pagination

- Size: 18 × 18 with `3px` padding; three tabs in a 62 × 18 tablist (`product-one-card::[data-omd-capture="31"]` to `"33"`), beside a 30 × 30 play toggle (`"34"`). The home hero carries four 18 × 18 controls of the same size (`home::[data-omd-capture="14"]` to `"17"`).
- The dot is drawn by a child that was not sampled, so no colour is declared. No `aria-selected` was recorded, so no current-page style is declared.

The bundle holds no `::state-*` frame for any element on any of the six captured routes; that, and not `interactionCount: 0`, is why no hover, pressed, or focus value is claimed (the interaction record covers dialog, tab, menu, form-error, and toast expansions only). The selected tab is an element attribute, not an observed tab change, and it computes the same values as its unselected siblings. No menu, dialog, validation, toast, responsive, disabled, or authenticated-product variant is claimed. Corrected 2026-09-29: the July paragraph grounded the absence of pointer states in the interaction count.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.kbanknow.com/web/web-home/home/main`, `https://www.kbanknow.com/web/product/info/list?tab=deposit`, `https://www.kbanknow.com/web/product/deposit/curious-saving`, `https://www.kbanknow.com/web/product/deposit/rolling-farm`, `https://www.kbanknow.com/web/product/card/one-card`, `https://brand.kbanknow.com/resource.html`, `https://brand.kbanknow.com/`, and `https://blog.kbanknow.com/%EC%BC%80%EB%AF%B8%EC%BD%94%EB%93%9C-1%ED%8E%B8-%EC%BC%80%EB%AF%B8%EC%BD%94%EB%93%9C-%ED%83%84%EC%83%9D-%EA%B8%B0%EB%A1%9D-%EC%9D%91%EC%95%A0%F0%9F%90%A3/`
**Tier 2 sources:** `https://getdesign.md/kbank` and `https://styles.refero.design/?q=kbank` were both attempted with built-in web open and returned internal errors; corresponding built-in web searches returned no K bank-specific record.
**Conflicts unresolved:** none

### States

| Category | Evidence boundary |
|---|---|
| Empty | No public product empty state captured |
| Loading | No loading state captured |
| Error: validation | No validation state captured |
| Error: transaction or service interruption | No operational-error state captured |
| Success | No public product success state captured |
| Skeleton | No skeleton state captured |
| Disabled | No disabled control captured |
| Focus | No focus-visible state captured |
| Pressed | No pressed state captured |
| Hover | No hover state captured |
| Selected tab | Public deposit-index `aria-selected="true"` on one of six tabs; all six compute the same dumped values, so no selected style is declared (corrected 2026-09-29). No selection-change interaction captured. |

## Voice & Tone

### Content & Voice

The official brand story writes about rates, fees, everyday rewards, investment, and safety in short, conversational Korean: financial life should feel closer, easier, and more pleasant. It pairs that accessible public register with precise product explanations and terms on the public product pages. K bank-inspired public marketing can explain a concrete everyday benefit plainly, but this does not establish copy rules for regulated disclosures, transaction confirmations, eligibility decisions, or errors.

- **Everyday and benefit-led:** the brand story grounds financial features in shopping, meals, rewards, and daily situations.
- **Reassuring but specific:** public pages pair cheerful benefit language with product conditions and legal information.
- **Participatory internally:** the official culture story describes employees gathering perspectives to define a shared way of working.

### Do

- Explain a public benefit through a concrete financial situation.
- Keep conditions and eligibility explicit when a product page needs them.
- Separate public marketing language from regulated or operational copy.

### Don't

- Treat playful campaign language as the verified voice of every banking flow.
- Fabricate executive quotations, customer promises, or error-state language.

## Governance

### Accessibility

- The compact and primary actions pair white text with `#4262FF` and `#0114A7`; this reference does not substitute for a contrast or accessibility audit.
- No focus, keyboard, disabled, error, validation, or interaction snapshot was captured. A future implementation needs accessible focus and state treatments designed and verified on the relevant flow.
- The official brand resource asks that logo visibility be considered against its background. That asset rule is not evidence for control contrast, accessible names, landmarks, or mobile behavior.

### Known Gaps

- **Contrast, `product-index-tab`.** Text `#545b69` on `#00000000` measures 3.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `product-detail-text-button`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
