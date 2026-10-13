---
name: Datarize
colors:
  canvas: '#ffffff'
  ink: '#191919'
  action: '#111111'
  body: '#5d6875'
  link: '#007aff'
  surface: '#f2f5fa'
  hairline: '#e5e7eb'
typography:
  display-hero:
    fontSize: 64px
    fontWeight: 700
    lineHeight: 83.2
    letterSpacing: '-3.2px'
    use: Marketing homepage H1; loaded Pretendard Bold
  section:
    fontSize: 44px
    fontWeight: 600
    lineHeight: 57.2
    letterSpacing: '-0.05px'
    use: Marketing H2; loaded Pretendard SemiBold
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24
    use: Blog and pricing body copy; loaded Pretendard Regular
  nav:
    fontSize: 15px
    fontWeight: 500
    lineHeight: 21
    use: Marketing navigation; loaded Pretendard Medium
  cta:
    fontSize: 16px
    fontWeight: 600
    use: Marketing CTA links; loaded Pretendard Variable
rounded:
  sm: 8px
  md: 10px
  pill: 50px
  full: 999px
spacing:
  xs: 6
  sm: 8
  md: 10
  lg: 14
  xl: 16
  xxl: 20
  xxxl: 24
  section: 32
components:
  pricing-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#191919'
    rounded: 999px
    padding: 8px 16px
    typography: 12px / 400 Pretendard
    selected: 'bg #ffffff'
    states: 'unselected rest (capture 12, aria-selected=false) and selected (capture 11, aria-selected=true) captured; after the collector clicked capture 12 and 13, each was re-captured with bg #ffffff and aria-selected=true (tab-0-0, tab-1-0); no pointer-state frame'
    use: 'Pricing tab (button role=tab, 34px) at surface-3::[data-omd-capture="12"] inside the pricing tablist. Corrected 2026-09-29: the July token held the selected tab''s #ffffff as its rest background'
  action-ink-pill:
    type: button
    backgroundColor: '#111111'
    textColor: '#ffffff'
    rounded: 50px
    padding: 14px 24px
    height: 47px
    typography: 16px / 600 / Pretendard Variable
    states: default captured; the bundle holds no pointer-state frame on any of its three surfaces
    use: Home CTA link at home::[data-omd-capture="11"]
  shared-ink-pill:
    type: button
    backgroundColor: '#191919'
    textColor: '#ffffff'
    rounded: 50px
    padding: 14px 24px
    height: 46px
    typography: 15px / 600 / Pretendard Variable
    states: default captured on home, blog and pricing (capture 10 on each, identical values); no pointer-state frame
    use: Header CTA link at home::[data-omd-capture="10"]; the pricing body repeats the fill at 16px / 47px (surface-3 capture 18)
  outline-pill:
    type: button
    backgroundColor: transparent
    textColor: '#111111'
    border: '1px #111111'
    rounded: 100px
    padding: 14px 24px
    height: 49px
    typography: 16px / 600 / Pretendard Variable
    states: default captured; no pointer-state frame
    use: 'Home outline CTA link at home::[data-omd-capture="12"]; the pricing copy (surface-3 capture 16) uses #191919 for its text and border'
  locale-control:
    type: button
    backgroundColor: transparent
    textColor: '#191919'
    rounded: 8px
    padding: 10px 12px
    height: 40px
    typography: 15px / 500 / Pretendard Variable
    states: default captured on all three surfaces (capture 8); no pointer-state frame
    use: Header button at home::[data-omd-capture="8"]; its 1px border computes rgba(0, 0, 0, 0), so no visible frame is claimed
  testimonial-nav-button:
    type: button
    backgroundColor: transparent
    border: '1px #e5e7eb'
    rounded: 8px
    padding: 1px 6px
    size: 48px x 48px
    states: default captured on both buttons (capture 18 and 19, identical values); no pointer-state frame
    use: Home testimonial carousel button at home::[data-omd-capture="18"]; it has no text node, so no label colour is claimed
  pricing-tablist:
    type: card
    backgroundColor: '#f2f5fa'
    border: 1px rgba(25, 25, 25, 0.1)
    rounded: 999px
    padding: 5px
    height: 46px
    states: default captured; container of the pricing tabs
    use: Pricing tablist (div role=tablist, 275 x 46) at surface-3::div; it holds the 34px pricing tabs
  newsletter-email-input:
    type: input
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px
    size: 295px x 20px
    typography: 15px / 400 / 18px Pretendard Regular
    states: default captured; the form-error interaction re-captured the same input (form-error-0-0) with identical computed values, so no error style is declared; no pointer-state or focus frame
    use: Blog newsletter email field at surface-2::[data-omd-capture="15"]; the input has a 0px border, so no field frame is claimed
  newsletter-submit-button:
    type: button
    backgroundColor: '#191919'
    textColor: '#ffffff'
    rounded: 10px
    padding: 0px
    size: 141px x 44px
    typography: 15px / 600 / 18px Pretendard SemiBold
    states: default captured; no pointer-state frame
    use: 'Blog newsletter submit button at surface-2::[data-omd-capture="16"]; the button itself computes #000000, so the label colour and font come from its child p at top 6170px (#ffffff)'
  text-link:
    type: tab
    backgroundColor: transparent
    textColor: '#007aff'
    rounded: 0px
    padding: 0px
    height: 24px
    typography: 15px / 400 / 24px Pretendard
    states: default captured on six home links (capture 14-17, 21, 22); no pointer-state frame
    use: Home text link at home::[data-omd-capture="14"]
  preset-text-link:
    type: tab
    backgroundColor: transparent
    textColor: '#00a3eb'
    rounded: 0px
    padding: 0px
    height: 19px
    typography: 16px / 400 / 24px Pretendard Regular
    states: default captured on five links across home, blog and pricing; no pointer-state frame
    use: Framer text-preset link (framer-styles-preset-1pfuu6) at home::[data-omd-capture="23"]; the blog copy (surface-2 capture 11) computes Inter at 16px / 28.8px
  footer-social-button:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.1)
    rounded: 1000px
    padding: 6px
    size: 36px x 36px
    states: default captured, four per surface on all three surfaces; no pointer-state frame
    use: Footer social icon link at home::[data-omd-capture="53"]; icon only, so no label colour is claimed
fonts:
  roles:
    marketing: Pretendard
---

# Design System Inspiration of Datarize

## Overview

### Visual Theme & Atmosphere

Datarize is an e-commerce growth and CRM platform: its official site presents AI that turns customer behavior into analysis, campaign action, and revenue growth. The current public story is broader than a single campaign tool—Audience, on-site banners, email, analytics, and metrics sit in its product navigation—while its guide describes the operational sequence from store data collection to campaign execution. The company frames that as “Autonomous Marketing Intelligence,” a current international-facing expression alongside its Korean marketing surfaces.

On the supplied July desktop capture, the Korean marketing home, blog route, and pricing page are restrained rather than dashboard-like: white is the canvas (`#ffffff`), with near-black `#191919` carrying most visible text and a smaller `#111111` action treatment. The most repeatable contrast is structural, not decorative—white and near-black CTA pills, an outlined alternate action, and a pale `#f2f5fa` pricing tab group. A medium blue `#007aff` appears as a home-page text-link accent, while `#5d6875` is the most frequently observed supporting copy color. This document intentionally does not carry forward prior lime, yellow, royal-blue, or large-card claims: they were not observed in the July evidence bundle.

The recognizable typography is a Korean marketing stack built from loaded Pretendard faces: Bold sets a 64px hero, SemiBold sets 44px section headings, and Regular/Medium handle body and navigation. The evidence supports this for the captured marketing surfaces only. The authenticated console, linked GitBook documentation chrome, and any separate product UI system were not captured, so this is not a statement that one visual system governs every Datarize surface.

**Key Characteristics:**

- White canvas (`#ffffff`) with near-black `#191919` marketing text
- `#111111` and `#191919` pill CTAs; the home outline CTA uses `#111111` ink and the pricing copy `#191919`
- Loaded Pretendard variants on the captured marketing surfaces
- `#007aff` home-page text-link accent and `#5d6875` supporting copy
- 8px / 10px small corners and 50px / 100px / 999px pill geometry
- Flat observed controls (`box-shadow: none`); no general elevation scale is claimed

### Primary tasks

- Register a store and complete installation to start collecting data.
- Create audiences from customer behavior data.
- Run an on-site banner or email campaign.
- Monitor analytics and metrics after campaigns run.
- Compare pricing by switching between the pricing tabs.

### Brand Narrative

Datarize describes itself as an e-commerce growth platform built around behavior data. Its About page says the company began from the question of how many e-commerce brands make full use of their data, and explains its approach as following signals such as clicks, scrolls, and pauses across a customer journey. The official guide grounds that story operationally: stores collect data, profile behavior, run on-site or message campaigns, and monitor analytics.

The current public evolution is visible in Datarize’s English-facing language, “Autonomous Marketing Intelligence,” and in its product navigation for Audience, on-site banners, emails, metrics, and analytics. This reference records the Korean public marketing styling separately from that narrative and does not infer the styling of the authenticated console from either the English marketing pages or the GitBook guide.

### Principles

1. **Turn behavior into action.** The official home and guide connect customer signals to campaigns and analytics. *UI implication:* make the transition from an observed signal to the next action legible.
2. **Keep the growth loop operational.** Audience, on-site campaign, message campaign, and analytics are explicitly documented product areas. *UI implication:* distinguish these jobs rather than collapsing them into a generic “AI dashboard.”
3. **Make the marketing surface decisive.** Captured marketing CTAs use a small set of dark-pill and outline treatments. *UI implication:* avoid competing action colors on a page modeled from this evidence.

### Personas

The official sources identify stakeholder groups but do not publish named user personas. The following non-fictional roles are scope labels, not invented people or research findings:

- **E-commerce store operator:** registers a store, completes installation, and receives data/campaign capabilities through Datarize’s documented onboarding.
- **CRM or growth marketer:** creates audiences and operates on-site or message campaigns using customer-behavior data.
- **Platform administrator:** manages store, user, payment, and integration settings documented in the guide.

## Colors

### Observed Marketing Colors

- **Canvas** (`#ffffff`): Captured page and selected-tab background.
- **Marketing Ink** (`#191919`): Dominant text/border value across the three captured surfaces; also the fill of a shared 50px CTA link.
- **Action Ink** (`#111111`): Captured 50px home CTA fill and the text/border of the home outline CTA link. The pricing outline CTA uses `#191919` instead (corrected 2026-09-29).
- **Supporting Slate** (`#5d6875`): Frequently captured supporting text, including pricing content.
- **Text-link Blue** (`#007aff`): Home-only text-link accent in the supplied bundle.
- **Pale Surface** (`#f2f5fa`): Observed as the pricing tab-group background; it is not promoted to a general card token.
- **Hairline** (`#e5e7eb`): Observed on home testimonial-navigation buttons.

### Boundary

`#f9ff91`, `#f7ff91`, `#ffef42`, and `#466cf3` appeared in the previous reference but were not present in the July raw color observations. They are therefore absent from the canonical palette and tokens rather than treated as a current brand fact.

Two link colours stay at component level. `#00a3eb` is a Framer text-preset link colour captured on all three surfaces (five links, §4); it is not promoted to a palette role. `#0000ee`, the second most frequent text colour in the census (103 occurrences), is the browser's default link colour computed on Framer wrapper anchors whose visible text sits in child elements with their own colours; it is not a Datarize colour.

## Typography

### Evidence classes

- **Live marketing-surface use:** the July bundle records loaded `Pretendard Regular` (177 visible uses), `Pretendard Medium` (85), `Pretendard SemiBold` (58), `Pretendard Variable` (13, with 92 jsDelivr source URLs), and `Pretendard Bold` (3). These faces support the named typography entries below.
- **Live but not promoted:** the literal computed family `Pretendard` occurs without a matching loaded face (21 uses), and `Inter` has one loaded visible use without a source URL. Neither becomes a general Datarize family token.
- **Declared-only:** `Fragment Mono`, `Inter Placeholder`, and several Pretendard placeholder/weight declarations have zero visible use. They are not design tokens.
- **Official distributed font asset and license:** Pretendard’s own repository documents web distribution and SIL Open Font License 1.1. This corroborates the captured webfont source and licensing boundary; it is not an official Datarize typography guideline.
- **Product/console boundary:** Datarize’s terms identify `console.datarize.ai` as the service page, but it was not captured. No font claim here is generalized to that product surface.

### Captured hierarchy

| Role | Family evidence | Size | Weight | Line height | Tracking | Captured context |
|---|---|---:|---:|---:|---:|---|
| Marketing hero | Pretendard Bold, loaded | 64px | 700 | 83.2px | -3.2px | Homepage H1 |
| Section heading | Pretendard SemiBold, loaded | 44px | 600 | 57.2px | -0.05px | Homepage H2 |
| Supporting heading | Pretendard SemiBold, loaded | 24px | 600 | 33.6px | -1.2px | Captured marketing heading |
| Body | Pretendard Regular, loaded | 16px | 400 | 24px | normal | Blog/pricing body copy |
| Navigation | Pretendard Medium, loaded | 15px | 500 | 21px | normal | Shared marketing navigation |
| CTA | Pretendard Variable, loaded | 16px | 600 | normal | normal | Home/pricing CTA links |

## Layout

The current evidence is desktop-only (1440×900) and does not justify a responsive grid specification. The repeatable layout signals are a shared 40px header control, 50px/100px CTA pills, and a compact pricing tablist (46px outer height, 5px padding) that houses 34px tabs. The extracted spacing clusters include 6, 8, 10, 14, 16, 20, 24, and 32px; they are recorded as observed values, not a published spacing scale.

### Responsive Behavior

No responsive behavior is specified from this evidence. The capture viewport is 1440×900 only; mobile breakpoints, stacking rules, and touch-target adaptations require a separate observed source.

## Elevation & Depth

Captured component styles use `box-shadow: none`. Controls separate through ink/white contrast, an outline border, or a pale tablist surface. The bundle does not establish a site-wide card or elevation system.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

No motion durations, easing curves, or reduced-motion behavior were measured in the supplied evidence or found in an official public design-system source. Motion is intentionally unspecified.

## Components

### Marketing CTA links

**Action ink pill**

- Background: `#111111`
- Text: `#ffffff`
- Radius: 50px
- Padding: 14px 24px
- Font: 16px / 600 / Pretendard Variable
- Height: 47px
- Use: Homepage anchor; evidence `home::[data-omd-capture="11"]` on the marketing home.

**Shared ink pill**

- Background: `#191919`
- Text: `#ffffff`
- Radius: 50px
- Padding: 14px 24px
- Font: 15px / 600 / Pretendard Variable
- Height: 46px
- Use: Shared marketing anchor; evidence `home::[data-omd-capture="10"]`, `surface-2::[data-omd-capture="10"]`, and `surface-3::[data-omd-capture="10"]`. The pricing body repeats the fill at 16px / 47px (`surface-3::[data-omd-capture="18"]`).

**Outline pill**

- Background: transparent
- Text: `#111111` on home; `#191919` on pricing
- Border: 1px `#111111` on home; 1px `#191919` on pricing
- Radius: 100px
- Padding: 14px 24px
- Font: 16px / 600 / Pretendard Variable
- Height: 49px
- Use: Marketing anchor; evidence `home::[data-omd-capture="12"]` and `surface-3::[data-omd-capture="16"]`. Corrected 2026-09-29: the July text gave both copies `#111111`; the pricing copy computes `rgb(25, 25, 25)`.

### Header and navigation controls

**Locale control**

- Background: transparent
- Text: `#191919`
- Border: 1px, computed rgba(0, 0, 0, 0), so no visible frame
- Radius: 8px
- Padding: 10px 12px
- Font: 15px / 500 / Pretendard Variable
- Height: 40px
- Use: Shared header button; evidence `home::[data-omd-capture="8"]`, also captured on blog and pricing.

**Testimonial navigation button**

- Background: transparent
- Text: none visible; the button has no text node (it computes `#000000`)
- Border: 1px `#e5e7eb`
- Radius: 8px
- Padding: 1px 6px
- Height: 48px
- Use: Unlabeled home navigation button; evidence `home::[data-omd-capture="18"]` and `home::[data-omd-capture="19"]`.

### Pricing selection

**Pricing tab — rest / selected**

- Background: transparent at rest; `#ffffff` when selected
- Text: `#191919`
- Radius: 999px
- Padding: 8px 16px
- Font: 12px / 400 / Pretendard
- Height: 34px
- Use: Pricing tab; rest evidence `surface-3::[data-omd-capture="12"]` (`aria-selected="false"`), selected evidence `surface-3::[data-omd-capture="11"]` (`aria-selected="true"`).
- Selected: after the collector clicked `surface-3::[data-omd-capture="12"]` and `"13"`, each was re-captured as `tab-0-0` / `tab-1-0` with background `#ffffff` and `aria-selected="true"`. Corrected 2026-09-29: the July frontmatter recorded the selected tab's `#ffffff` as the component's rest background; it now records transparent at rest and `#ffffff` as `selected`.

**Tab group**

- Background: `#f2f5fa`
- Border: 1px rgba(25, 25, 25, 0.1)
- Radius: 999px
- Padding: 5px
- Height: 46px
- Use: Pricing tablist; evidence `surface-3::div[role="tablist"]`.

### Form boundary

The supplied blog capture records an email input and a `form-error` interaction, but captures no distinct error style or message. No error variant is specified.

### Blog newsletter form

**Email input — observed default**

- Background: transparent
- Text: `#000000`
- Border: none (0px)
- Size: 295px × 20px
- Font: 15px / 400 / 18px Pretendard Regular
- Use: `surface-2::[data-omd-capture="15"]`. The collector's `form-error` interaction re-captured the same input as `form-error-0-0` with identical computed values, so no error style or message is specified.

**Submit button — observed default**

- Background: `#191919`
- Text: `#ffffff`, 15px / 600 / 18px Pretendard SemiBold, on the child `p` that carries the label; the button element itself computes `#000000`
- Radius: 10px
- Size: 141px × 44px
- Use: `surface-2::[data-omd-capture="16"]`.

### Links and footer

**Text link — observed default**

- Text: `#007aff`
- Font: 15px / 400 / 24px Pretendard
- Height: 24px
- Use: six home links, `home::[data-omd-capture="14"]` to `"17"`, `"21"` and `"22"`.

**Preset text link — observed default**

- Text: `#00a3eb`
- Font: 16px / 400 / 24px Pretendard Regular
- Height: 19px
- Use: Framer text preset (`framer-styles-preset-1pfuu6`) at `home::[data-omd-capture="23"]`; five links across home, blog and pricing. The blog copy (`surface-2::[data-omd-capture="11"]`) computes Inter at 16px / 28.8px, the one visible Inter use in the font census.

**Footer social button — observed default**

- Background: rgba(255, 255, 255, 0.1)
- Radius: 1000px
- Padding: 6px
- Size: 36px × 36px
- Use: four icon links per surface on all three surfaces, `home::[data-omd-capture="53"]` to `"56"`; icon only, so no label colour is claimed.

All components here are specified at rest; the pricing tab adds its measured selected state. The bundle holds no hover, pressed or focus frame on any of its three surfaces, so no pointer state is specified, and this collector's focus frames would not be keyboard focus-visible measurements in any case.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.datarize.ai/ (captured Korean marketing home), https://www.datarize.ai/blog/hidden_product (captured brand blog route), https://www.datarize.ai/pricing (captured pricing surface); https://www.datarize.ai/en/, https://www.datarize.ai/en/about, https://policy.datarize.ai/en/terms, https://datarize.gitbook.io/docs/guide-en (official context only)
**Tier 2 sources:** https://getdesign.md/datarize (attempted; no accessible entry evidence), https://styles.refero.design/?q=datarize (attempted; no accessible result evidence)
**Conflicts unresolved:** none

### States

Only two public interaction facts were captured: the blog route emitted a `form-error` event for its email form (the re-captured input computes the same values as at rest), and pricing tabs expose transparent rest versus `#ffffff` selected states. The bundle holds no hover, pressed or focus frame on any surface. No visible error copy, loading treatment, success confirmation, disabled control, toast, or product-console state was captured. Those unobserved states are intentionally unspecified.

## Do's and Don'ts

### Do

- Use the captured Pretendard hierarchy when recreating the observed marketing surface.
- Keep a single dark pill or outline pill as the dominant CTA treatment.
- Use white, `#191919`, and `#111111` as the primary structural contrast.
- Treat `#007aff` as a home-page text-link accent, not a universal action color.
- Preserve the selected/unselected pricing-tab contrast only where that tab interaction is present.

### Don't

- Reintroduce the previous lime/yellow/royal-blue palette as a current Datarize token without new live evidence.
- Present the captured marketing components as the authenticated console or GitBook documentation system.
- Add a pricing tab state beyond the transparent default and white selected state that were observed.
- Invent an email-error visual treatment from the captured form-error event.

## Voice & Tone

The official English home leads with “Behavior Captured. Growth Automated.” and describes a flow from data to insight to action. The About page states a mission of empowering e-commerce growth with autonomous marketing intelligence. The resulting public voice is direct, operational, and outcome-oriented: behavior and data are the inputs; campaign action and growth are the intended outcomes.

| Context | Observed voice |
|---|---|
| Brand proposition | “Behavior Captured. Growth Automated.” |
| Product explanation | Data to insight to action in one flow |
| Mission | E-commerce growth through autonomous marketing intelligence |

### Do

- Lead with a concrete behavior, campaign, or growth outcome.
- Explain the connection from data to action in plain operator language.

### Don't

- Attribute unverified product promises, metrics, or customer stories to Datarize.
- Treat external marketing copy as console UI microcopy.

## Agent Prompt Guide

For the captured marketing surface, start with a white canvas and `#191919` type. Use loaded Pretendard hierarchy—64px / 700 marketing hero, 44px / 600 section heading, 16px / 400 body—and choose one 50px dark CTA pill or one 100px outline CTA. A pricing selector may use a `#f2f5fa` 999px tablist with a white selected 34px tab. Do not add lime blobs, generic dashboard cards, product-console components, or undocumented interaction states.

## Governance

### Known Gaps

- **Contrast, `pricing-tab`.** Text `#191919` on `#00000000` measures 1.19:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `outline-pill`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `locale-control`.** Text `#191919` on `#00000000` measures 1.19:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `newsletter-email-input`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
