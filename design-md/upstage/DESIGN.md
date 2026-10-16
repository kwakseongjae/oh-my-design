---
name: Upstage
colors:
  canvas: '#ffffff'
  ink: '#0a0d14'
  text: '#52525b'
  text-subtle: '#525866'
  action-violet: '#5b52ff'
  card-border: '#cdd0d5'
typography:
  marketing-display:
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.1
    use: Public home marketing hero only
  section-heading:
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.15
    use: Public marketing section headings
  body:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    use: Public home and API-pricing body copy
  action:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    use: Public CTA controls
rounded:
  action: 8px
  card: 8px
spacing:
  action-y: 12
  action-x: 18
  card: 32
  card-end: 96
components:
  api-pricing-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px solid #cdd0d5'
    rounded: 8px
    padding: 32px 96px 32px 32px
    hover: 'border 1px #525866; shadow rgba(0,0,0,0.09) 0px 4px 6px 0px (on the card wrapper while its title link is hovered)'
    pressed: 'border 1px #525866; shadow rgba(0,0,0,0.09) 0px 4px 6px 0px, as on hover (the red on the pressed anchor is the Chromium default pressed-link colour, not a state)'
    focus: outline browser default ring (outline-style auto, offset 1px) on the title link, not brand; the card border and shadow do not change — measured 2026-09-29
    states: 'default captured 2026-07-13 (six cards); hover, pressed and keyboard focus measured 2026-09-29 through the Solar Pro 3 title link (Tab 16); in the 2026-09-29 DOM the card holding that title carries id solar-pro-4, where July cited #solar-pro-3; transition all 0s'
    use: API pricing model card observed on the public pricing surface
  public-primary-action:
    type: button
    backgroundColor: '#5b52ff'
    textColor: '#ffffff'
    border: '1px solid #5b52ff'
    rounded: 8px
    padding: 12px 18px
    size: 366px x 50px
    typography: 16px / 500 / Geist
    hover: transform matrix(1, 0, 0, 1, 19.2, 0) (translateX 19.2px) on the two arrow layers; fill, border and label unchanged
    pressed: transform matrix(1, 0, 0, 1, 19.2, 0) on the two arrow layers, as on hover
    focus: outline browser default ring (outline-style auto, offset 1px), not brand — measured 2026-09-29
    states: default captured 2026-07-13 (10 occurrences on home and pricing); hover, pressed and keyboard focus measured 2026-09-29 on Try in Playground (Tab 14); the fill never changes colour; transition all 0s
    use: Public filled conversion action (Try in Playground) inside the home product cards
    height: 50px
  public-secondary-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#5b52ff'
    border: '1px solid #5b52ff'
    rounded: 8px
    padding: 12px 18px
    size: 366px x 50px
    typography: 16px / 500 / Geist
    hover: 'bg #fafafa'
    pressed: 'bg #fafafa'
    focus: outline browser default ring (outline-style auto, offset 1px), not brand — measured 2026-09-29
    states: default captured 2026-07-13 (5 occurrences); hover, pressed and keyboard focus measured 2026-09-29 on the first Learn more (Tab 15); pressed equals hover; transition all 0s
    use: Public outlined conversion action (Learn more) paired with the filled action
  hero-primary-action:
    type: button
    backgroundColor: '#5b52ff'
    textColor: '#ffffff'
    border: '1px solid #5b52ff'
    rounded: 8px
    padding: 16px 32px
    size: 158px x 58px
    typography: 16px / 500 / Geist
    hover: no change in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29
    pressed: no change in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29
    focus: outline browser default ring (outline-style auto, offset 1px), not brand — measured 2026-09-29
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on Try Studio (Tab 12); transition all 0s
    use: Home hero filled action (Try Studio), the largest CTA on the page
  hero-secondary-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#5b52ff'
    border: '1px solid #5b52ff'
    rounded: 8px
    padding: 16px 32px
    size: 222px x 58px
    typography: 16px / 500 / Geist
    states: default captured 2026-07-13; not probed
    use: Home hero outlined action beside the filled hero action
  compact-secondary-action:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#5b52ff'
    border: '1px solid #5b52ff'
    rounded: 8px
    padding: 10px 16px
    size: 345px x 43px
    typography: 14px / 500 / Geist
    states: default captured 2026-07-13 (4 occurrences on home and pricing); not probed
    use: Smaller outlined action (class is-secondary smaller)
  text-action:
    type: button
    backgroundColor: transparent
    textColor: '#5b52ff'
    rounded: 0px
    padding: 0px
    typography: 18px / 500 / Geist
    states: default captured 2026-07-13 (6 occurrences on home and pricing); not probed
    use: Violet text action at the top of the page (class button is-text, hidden below desktop)
  nav-contact-button:
    type: button
    backgroundColor: '#5b52ff'
    textColor: '#ffffff'
    border: '1px solid #5b52ff'
    rounded: 8px
    padding: 8px 16px
    size: 106px x 40px
    typography: 16px / 500 / Geist
    states: default captured 2026-07-13 (3 occurrences, one per captured page); not probed
    use: Small filled header action (class btn-contact)
  model-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#0a0d14'
    border: '1px solid #e2e4e9'
    rounded: 8px
    padding: 8px 16px
    size: 223px x 42px
    typography: 18px / 500 / Geist
    shadow: rgba(0,0,0,0.06) 0px 2px 3px 0px
    hover: no change in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    pressed: no change in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    focus: no focus indication in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    states: current item (w--current, aria-selected true) captured 2026-07-13 with the same shadow, which the July declaration left out; hover, pressed and keyboard focus measured 2026-09-29 on Generative intelligence (Tab 12)
    use: Public API-pricing model tab, current item
  model-tab-inactive:
    type: tab
    backgroundColor: transparent
    textColor: '#525866'
    border: 1px solid transparent
    rounded: 10px
    padding: 8px 16px
    size: 220px x 42px
    typography: 18px / 500 / Geist
    hover: no change in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    pressed: no change in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    states: 'inactive item (aria-selected false, tabIndex -1) captured 2026-07-13; hover and pressed measured 2026-09-29 on Document intelligence; keyboard focus not measured: tabIndex -1 keeps it out of the Tab order, and arrow keys were not tested'
    use: 'Public API-pricing model tab, inactive item on the #f3f4f6 tab track'
  nav-products-toggle:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    padding: 12px 40px 12px 16px
    size: 116px x 48px
    typography: 15.04px / 400 / Geist
    hover: no change in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels); the dropdown list is a sibling and was not compared — measured 2026-09-29
    pressed: no change in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29
    focus: 'outline 2px #4d65ff, offset 2px (authored; whether the rule is the site CSS or the Webflow platform stylesheet was not verified, so it is not a brand token) — measured 2026-09-29'
    states: hover, pressed and keyboard focus measured 2026-09-29 (Tab 4); aria-expanded false at rest; transition all 0.3s
    use: 'Header Products dropdown toggle (div role=button) over the dark #151727 navigation band'
  product-card:
    type: card
    backgroundColor: transparent
    textColor: '#52525b'
    border: '1px solid #cdd0d5'
    rounded: 8px
    padding: 24px
    size: 416px x 528px
    typography: 18px / 400 / Geist
    states: default captured 2026-07-13 (3 occurrences); not probed
    use: Home product card that holds the filled and outlined actions (div.basic_card-2)
fonts:
  roles:
    ui: Geist
    marketing-display: Espeak
---

# Upstage — Design Reference

> **Enterprise AI for document-heavy work.** (Current public-surface reference, observed 2026-07-13)

## Overview

### Visual Theme & Atmosphere

Upstage is a Korean AI company building language models and document-processing engines for work. Its public site frames the offer through Solar models, document intelligence, and Studio workflows for high-stakes industries, rather than as a generic consumer chatbot. The current public expression is a compact, white-led enterprise marketing system: dark `#0A0D14` headings, `#52525B` long-form copy, and `#5B52FF` conversion actions organise the page. The hero is the conspicuous exception: a loaded **Espeak** face appears only in the public home’s large display treatment, while loaded **Geist** carries the rest of the observed marketing and public pricing content. The design’s rhythm comes from restrained, square-to-8px geometry and repeated direct actions, not from a broad decorative palette. Upstage’s own About and Studio pages connect this visual restraint to a practical proposition: making document-heavy workflows more controllable, traceable, and useful for enterprises.

What is distinctive in the evidence:

- **A narrow violet action lane.** `#5B52FF` appears on observed filled and outlined calls to action; it is not promoted as a general semantic/status palette.
- **Marketing display has a bounded job.** Espeak is loaded for the home hero, while Geist is the repeatedly resolved public UI/content family.
- **Public pricing is calmer than the hero.** The API-pricing surface uses white model cards, `#CDD0D5` borders, and `#525866` supporting text.
- **Geometry is mostly flat.** Buttons and observed cards use 8px corners; the supplied samples show no general card-shadow system.

### Primary tasks

- Compare what each model costs on the API pricing page.
- Switch between models to reach the one you need.
- Design, deploy, and operate a document agent in Studio.
- Check how deployment, traceability, and controlled access are handled.
- Find which Upstage product fits a document-heavy industry.

### Imagery & Illustration

- The public home and product pages use product screenshots and workflow/process imagery to explain document intelligence, Solar, and Studio. They are marketing evidence, not a reusable application-image component specification.
- The Brand Resource Center distributes logo, product-logo, media-kit, and leadership assets. Its ownership statement is an asset/IP boundary, not permission to reproduce those binaries.
- No repeated crop ratio, overlay rule, illustration style, or image-frame token is established by the supplied capture.

### Iconography

The capture identifies ordinary links, buttons, and product imagery but no named icon library, icon-stroke rule, or reusable icon-size scale. No icon token is inferred.

### Brand Narrative

Upstage’s first-party About page says the company was founded in 2020 and builds intelligence for the future of work through language models and document-processing engines. Its founding story explains the name as helping companies move “up” to the stage of AI and describes the initial motivation as making advanced AI practical for organizations with data and IT teams. The current public site presents Solar, Document Parse, Information Extract, Studio, and AI Space, with industry framing for insurance, healthcare, manufacturing, and financial services.

The current evolution is toward document workflows that can be designed, deployed, and operated with visibility, control, governance, review, and traceability. Studio’s public page makes that product direction explicit while the About page supplies company context. Neither page is treated as evidence for private application visual tokens.

### Principles

1. **Make work context explicit.** Frame the value around documents, operational control, and the environment where a model is deployed. *UI implication:* keep public claims tied to an identifiable workflow rather than generic capability badges.
2. **Reserve violet for conversion.** `#5B52FF` is observed on the public action treatments. *UI implication:* do not expand it into unsupported product status meanings.
3. **Use typography by source domain.** Geist is the loaded public UI/content family; Espeak is the bounded marketing display face. *UI implication:* do not use the hero face as a general product-app default.
4. **Preserve evidence boundaries.** Marketing, public pricing, corporate narrative, asset distribution, and unobserved documentation/app surfaces have different evidentiary roles. *UI implication:* do not merge their claims into a fictional unified component library.

### Personas

Upstage’s public pages identify stakeholder groups without supplying formal user research or demographics. This reference preserves only those named functional contexts:

- **Document-workflow teams:** use Studio to design, deploy, and operate document-oriented agents with review and governance.
- **Enterprise technology and operations leaders:** evaluate deployment, traceability, security, and controlled access in high-stakes workflows.
- **AI/API builders:** evaluate Solar and document-intelligence services through public pricing and developer-oriented conversion paths.

No fictional names, demographic details, or unverified motivations are added.

## Colors

### Color & Typography

#### Color tokens

- `#FFFFFF` — observed page/card canvas
- `#0A0D14` — observed dark heading/ink
- `#52525B` — dominant observed public body-copy tone
- `#525866` — observed pricing-surface supporting-copy tone
- `#5B52FF` — observed public action foreground/background and catalog primary color
- `#CDD0D5` — observed API-pricing card border

The collector also sees isolated browser/default-like blue and red values. They are not assigned a brand or product role because the raw public capture does not establish one.

#### Typography evidence classes

- **Live public UI/content use — Geist.** The collector records `Geist` as loaded/high confidence, with 626 visible uses across body, actions, navigation-like controls, cards, tabs, and headings, backed by five Google Fonts source URLs. It is the sole general UI-family token. The official Geist project identifies the family and publishes it under SIL Open Font License 1.1; that licence describes the font software, not an Upstage visual-identity licence.
- **Live public marketing-display use — Espeak.** The collector records `Espeak` as loaded/high confidence for five visible `h1` uses and two Upstage-hosted WOFF2 sources. The observed home hero reaches 64px/600/70.4px. This is a marketing-display token only, not evidence for an authenticated product UI. No public first-party licence terms for the face were found in this update; Upstage’s Brand Resource Center says brand assets and associated intellectual-property rights belong to Upstage.
- **System-resolved values.** `system-ui` (three observed uses) and `monospace` (one observed hero use) are operating-system families, not Upstage font assets or substitute specimens.
- **Declared-only assets.** Archivo, Inter, Montserrat, Noto Sans JP, and Noto Sans KR have `@font-face` declarations in the bundle but zero observed visible uses. They stay declared-only and are not machine UI-family tokens.
- **Measured public styles.** The capture records 48px/500 section headings, 18px/400 body text at 28.8px line height, and 16px/500 actions at 24px line height. These remain public-surface measurements, not a complete product type scale.

## Layout

### Layout & Grid

- **Public action scale:** the repeated home filled and outlined action controls use 12px 18px padding; the compact outlined action uses 10px 16px.
- **Public pricing card:** the captured API-pricing model card uses `32px 96px 32px 32px` padding and a 24px internal gap.
- **Observed rhythm:** 8, 12, 16, 24, 32, 40, 96, and 128px occur in the collector’s spacing aggregation. This is a frequency record, not a claimed universal spacing scale.
- **Boundary:** no responsive breakpoint, desktop container maximum, or logged-in application layout is promoted from the supplied capture.

## Elevation & Depth

### Elevation

The observed filled/outlined actions and API-pricing cards have `box-shadow: none` at rest. Hovering a pricing card adds `rgba(0,0,0,0.09) 0px 4px 6px 0px` and darkens its border to `#525866` (measured 2026-09-29). The currently selected pricing tab's local `0px 2px 3px rgba(0,0,0,0.06)` shadow is now declared on the model-tab component. Neither shadow is promoted as a general elevation token or a tab-interaction rule.

## Motion & Easing

### Motion

The 2026-09-29 probe read `transition: all 0s` on the CTAs, model tabs and pricing-card link, and `all 0.3s` on the Products toggle. The filled action's 19.2px arrow slide is a settled position, not a timed curve. No easing curve, duration scale or scroll sequence is promoted, and nothing is inferred from Webflow classes.

Only per-control `transition` values were read (see §8). No easing curve or duration scale is promoted; preserve that absence rather than assigning default curves or durations.

## Components

### Public primary action

**Default**
- Background: `#5B52FF`
- Text: `#FFFFFF`
- Border: `1px solid #5B52FF`
- Radius: `8px`
- Padding: `12px 18px`
- Font: `16px / 500`
- Use: public filled conversion action on the home surface; evidence `home::[data-omd-capture="7"]`

**Hover and pressed** (measured 2026-09-29 on Try in Playground): the fill, border and label never change colour; only the two arrow layers slide 19.2px to the right (`matrix(1, 0, 0, 1, 19.2, 0)`). Pressed equals hover.
**Keyboard focus:** the browser's default ring, not a brand token.

### Public secondary action

**Default**
- Background: `#FFFFFF`
- Text: `#5B52FF`
- Border: `1px solid #5B52FF`
- Radius: `8px`
- Padding: `12px 18px`
- Font: `16px / 500`
- Use: public outlined conversion action on the home surface; evidence `home::[data-omd-capture="8"]`

**Hover and pressed** (measured 2026-09-29 on Learn more): background `#FFFFFF` → `#FAFAFA`, nothing else.
**Keyboard focus:** browser default ring.

### Hero primary action

**Default** — `#5B52FF` fill, `#FFFFFF` text, `1px solid #5B52FF`, 8px radius, `16px 32px`, 158×58px, 16px / 500 Geist; evidence `home::[data-omd-capture="5"]` (Try Studio).
**Hover and pressed:** no change within the compared scope (self, its ::before/::after, 4 descendants including 1 svg and 1 path, 3 ancestor levels). **Keyboard focus:** browser default ring.

### Hero secondary action

**Default** — `#FFFFFF` fill, `#5B52FF` text and `1px solid #5B52FF` border, 8px radius, `16px 32px`, 222×58px, 16px / 500; evidence `home::[data-omd-capture="6"]`. Not probed.

### Compact secondary action

**Default** — `#FFFFFF` / `#5B52FF`, `1px solid #5B52FF`, 8px radius, `10px 16px`, 345×43px, 14px / 500; evidence `home::[data-omd-capture="19"]`, four occurrences on home and pricing. Not probed.

### Text action and header contact action

- Text action: transparent, `#5B52FF` 18px / 500, no padding; evidence `home::[data-omd-capture="1"]` (class `button is-text`, hidden below desktop).
- Header contact action: `#5B52FF` fill, `#FFFFFF` text, `1px solid #5B52FF`, 8px radius, `8px 16px`, 106×40px, 16px / 500; evidence `home::[data-omd-capture="4"]` (class `btn-contact`).
- Default only; not probed.

### Products dropdown toggle

**Default** (probe rest reading, 2026-09-29) — transparent over the dark `#151727` navigation band, `#FFFFFF` 15.04px / 400 Geist, `12px 40px 12px 16px`, 116×48px (`div role=button`).
**Hover and pressed:** no change within the compared scope (self, its ::before/::after, 4 descendants, 3 ancestor levels); the dropdown list is a sibling and was not compared.
**Keyboard focus:** an authored `2px solid #4D65FF` outline, offset 2px. Whether it comes from the site's CSS or Webflow's platform stylesheet was not verified, so it is recorded on this component only, not as a brand focus token.

### Product card

**Default** — transparent, `#52525B` text, `1px solid #CDD0D5`, 8px radius, `24px` padding, 416×528px; evidence `home::div.basic_card-2`, the card that holds the filled and outlined actions. Not probed.

### API pricing card

**Default**
- Background: `#FFFFFF`
- Text: `#52525B`
- Border: `1px solid #CDD0D5`
- Radius: `8px`
- Padding: `32px 96px 32px 32px`
- Font: `18px / 400`
- Use: public API-pricing model card; evidence `surface-2::#solar-pro-3` (July). In the 2026-09-29 DOM the card holding the Solar Pro 3 title carries id `solar-pro-4`; the title link's 440×186 geometry matches, but whether it is the same card element was not established.

**Hover** (measured 2026-09-29 through the Solar Pro 3 title link): the card wrapper's border darkens `#CDD0D5` → `#525866` and it gains `rgba(0,0,0,0.09) 0px 4px 6px 0px`. **Pressed:** the same two changes; the anchor's red (`#0000EE` → `#FF0000`) is Chromium's default pressed-link colour on non-text wrappers, not a brand state, and the visible `#0A0D14` title does not change. **Keyboard focus:** browser default ring on the link; the card's border and shadow stay at rest.

### Public model tab

**Current item as captured**
- Background: `#FFFFFF`
- Text: `#0A0D14`
- Border: `1px solid #E2E4E9`
- Radius: `8px`
- Padding: `8px 16px`
- Font: `18px / 500`
- Shadow: `rgba(0,0,0,0.06) 0px 2px 3px 0px` (present in the July capture, missing from the July declaration)
- Use: currently selected model tab on public API pricing; evidence `surface-2::[data-omd-capture="5"]`, class `w--current`

**Inactive item** — transparent over the `#F3F4F6` tab track, `#525866` text, `1px solid transparent`, 10px radius, `8px 16px`, 18px / 500; evidence `surface-2::[data-omd-capture="6"]`.

**States** (measured 2026-09-29): hover and pressed change nothing on either tab within the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels). The current tab shows no keyboard focus indication within that scope (Tab 12). The inactive tab's keyboard focus is unmeasured: it has tabIndex -1, so the Tab walk never reached it, and arrow keys were not tested.

The July bundle's only state frames are 27 `::state-pressed` samples on links, all reading Chromium's default pressed-link colour (`#0000EE` → `#FF0000`); they are not a brand state. Its `interactionCount: 0` means no dialog, menu or tab interaction was enumerated, not that no state was sampled. Every hover, pressed and focus value above comes from the 2026-09-29 live state probe on www.upstage.ai; the console, studio and chat product domains were not loaded, and disabled, menu, dialog and form variants remain unobserved.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.upstage.ai/` (public marketing), `https://www.upstage.ai/pricing/api` (public API-pricing), `https://www.upstage.ai/about` (corporate context), `https://www.upstage.ai/products/studio` (public product context), `https://www.upstage.ai/resources/brand-resource-center` (official brand-asset ownership), `https://github.com/vercel/geist-font` (official Geist family and SIL OFL 1.1 licence)
**Tier 2 sources:** `https://getdesign.md/upstage` (attempted; built-in web open safe-open failure), `https://styles.refero.design/?q=upstage` (attempted; built-in web open safe-open failure), web search for both catalog names (no Upstage record returned)
**Conflicts unresolved:** none

The prior `#3C043B` plum / `#D2FF95` Solar-accent palette, 2025 font counts, generic card claim, inferred motion timing, and unbounded product claims are not supported by the supplied 2026 capture and were removed rather than carried forward.

### States

Hover, pressed and keyboard focus are documented per component in §4 (live state probe, 2026-09-29); six controls have all three. No loading, empty, success, error, disabled or validation state is documented, and tab transitions and the menu opened by the Products toggle were not observed.

## Do's and Don'ts

### Do

- Use the observed white / dark-ink public-surface foundation with `#5B52FF` reserved for conversion actions.
- Keep Geist as the loaded general public UI/content family and confine Espeak to the verified public marketing-display context.
- Use the 8px action/card geometry only where the public evidence establishes it.
- Keep public pricing-card claims separate from marketing, corporate, documentation, and logged-in product UI claims.
- Retain selector and surface provenance when reusing a documented component pattern.

### Don't

- Reintroduce the prior plum or Solar-lime palette as a current token without fresh source evidence.
- Present Archivo, Inter, Montserrat, Noto Sans JP/KR, `system-ui`, or `monospace` as an Upstage UI-family token.
- Read the July pressed-link red (`#0000EE` → `#FF0000`) as an Upstage state, or invent disabled, dialog or form variants.
- Treat the Brand Resource Center’s asset ownership notice as a licence to redistribute logos, photographs, or the Espeak face.
- Infer an authenticated product design system from these public surfaces.

## Voice & Tone

**Voice adjectives:** precise · enterprise-ready · workflow-oriented

| Do | Don't |
|---|---|
| Start from a document-heavy or high-stakes workflow. | Lead with an abstract AI-superlative detached from work. |
| Connect a model or agent to control, traceability, and deployment context. | Claim a capability without describing its operational setting. |
| Use concise, direct conversion labels. | Inflate marketing copy with invented benchmark or customer claims. |
| Separate public product promises from unobserved logged-in UI behavior. | Treat a marketing page as proof of a complete product design system. |

These are source-derived communication characteristics, not permission to reuse Upstage copy verbatim.

## Governance

### Accessibility

- `#0A0D14` on `#FFFFFF` and `#5B52FF` on `#FFFFFF` are observed public text/action pairings; implementations should test each exact size and weight rather than treating this reference as an accessibility audit.
- Keyboard focus, measured 2026-09-29: the browser's default ring on four controls (Try Studio, Try in Playground, Learn more, the pricing-card link), an authored `2px #4D65FF` ring on the Products toggle, and nothing within scope on the current model tab; the inactive tab is outside the Tab order. Disabled, error, dialog and menu states are not established. Provide accessible behaviour in an implementation without claiming it is an observed Upstage state.
- Geist has live FontFaceSet/source corroboration. Espeak is live only in the observed marketing hero; declared-only and system families must not be rendered as Upstage UI-family substitutes.

### Known Gaps

- **Contrast, `text-action`.** Text `#5b52ff` on `#00000000` measures 4.10:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `model-tab-inactive`.** Text `#525866` on `#00000000` measures 2.95:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `product-card`.** Text `#52525b` on `#00000000` measures 2.72:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
