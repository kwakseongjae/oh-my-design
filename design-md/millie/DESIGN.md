---
name: Millie
colors:
  ink: '#242424'
  canvas: '#FFFFFF'
  surface-subtle: '#F7F7F7'
  muted: '#6F6F6F'
  divider: '#ECECEC'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7143
    use: Observed public home body and list text.
  heading-xl:
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.2273
    use: Observed public B2B heading specimen.
  heading:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.3571
    use: Observed public B2B section heading specimen.
  utility:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: Observed compact home utility button.
rounded:
  utility-button: 4px
  carousel-pagination: 100px
components:
  home-utility-button:
    type: button
    backgroundColor: '#333333'
    textColor: '#ffffff'
    rounded: 4px
    padding: 0px 12px
    height: 32px
    typography: 12px / 400 / 18px Pretendard Variable
    states: default captured; no state frame (the bundle holds none on either route)
    use: Home header utility button (button.button__Button-sc-746c0757-0) at home::[data-omd-capture="10"], 80 x 32
  hero-play-control:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.3)
    rounded: 100px
    padding: 8px
    size: 32px x 32px
    states: default captured; no state frame (the bundle holds none on either route)
    use: 'Home hero carousel play control (styled__PlayButtonContainer) at home::[data-omd-capture="21"]; its 8-character text cannot render inside the 16 x 16 content box, so the computed #242424 is not claimed as a label colour'
  hero-pagination-control:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.3)
    textColor: '#ffffff'
    rounded: 100px
    padding: 4px 10px
    height: 32px
    typography: 16px / 400 / 24px Pretendard Variable
    states: default captured; no state frame (the bundle holds none on either route)
    use: Home hero pagination counter (styled__PaginationButtonContainer) at home::[data-omd-capture="22"], 76 x 32 over the hero image
  gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#242424'
    rounded: 0px
    padding: 0px 24px
    height: 64px
    typography: 20px / 400 Pretendard Variable
    selected: 20px / 700, same colour (class on, capture 1)
    states: rest on five links (capture 2-6); the link carrying the class on (capture 1) renders 20px / 700; no state frame (the bundle holds none on either route)
    use: Home top navigation link at home::[data-omd-capture="2"]
  category-tab-link:
    type: tab
    backgroundColor: transparent
    textColor: '#242424'
    rounded: 0px
    padding: 0px 10px
    height: 44px
    typography: 16px / 400 / 24px Pretendard Variable
    states: rest on five links (capture 11, 13-16; 15 adds 32px left padding); capture 12 carries a different generated class and renders 16px / 700 / 22px, but no aria-selected or active class marks it, so it is not declared selected; no state frame (the bundle holds none on either route)
    use: Home category tab link (styled__MdsTabLink) at home::[data-omd-capture="11"]
  white-anchor-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#242424'
    rounded: 4px
    padding: 0px 16px
    height: 40px
    typography: 14px / 400 / 20px Pretendard Variable
    states: default captured; no state frame (the bundle holds none on either route)
    use: Home anchor button (a.button__Anchor-sc-746c0757-1, the utility button component family) at home::[data-omd-capture="38"], 311 x 40; its border width is 0px
  translucent-icon-button:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.4)
    border: 1px rgba(255, 255, 255, 0.3)
    rounded: 8px
    size: 24px x 24px
    states: default captured; no state frame (the bundle holds none on either route)
    use: Home translucent icon button (classes rounded-8 border-white-alpha-30 bg-black-alpha-40) at home::[data-omd-capture="34"]; it has no text node, so no label colour is claimed
  footer-link:
    type: tab
    backgroundColor: transparent
    textColor: '#6f6f6f'
    rounded: 0px
    padding: 0px 12px 0px 0px
    height: 14px
    typography: 12px / 400 Pretendard Variable
    states: default captured on eleven links (capture 43-53); no state frame (the bundle holds none on either route)
    use: Home footer link row at home::[data-omd-capture="43"]
  footer-about-button:
    type: button
    backgroundColor: transparent
    textColor: '#a5a5a5'
    rounded: 0px
    padding: 0px 14px 0px 0px
    height: 12px
    typography: 10px / 400 Pretendard Variable
    states: default captured; no state frame (the bundle holds none on either route)
    use: Home footer about button (styled__AboutButton) at home::[data-omd-capture="42"], 97 x 12
  hero-slide:
    type: card
    backgroundColor: transparent
    rounded: 20px
    size: 1392px x 400px
    states: default captured; no state frame (the bundle holds none on either route)
    use: Home hero banner slide (li.swiper-slide, bundle variant 13); the selector home::li is shared by many list items, so the class is the locator; the hero links (capture 17-20) span the same 1392 x 400 box
  skeleton-card:
    type: card
    backgroundColor: '#f7f7f7'
    rounded: 16px
    padding: 45px 24px 30px
    size: 280px x 424px
    states: 'captured shell only: no loading event, timing, or state frame'
    use: Home skeleton card (div.skeleton__SkeletonCard-sc-3613fd6a-1, bundle variant 5), five occurrences; the selector home::div is shared, so the class is the locator
  b2b-benefit-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 10px
    padding: 16px 24px
    size: 297px x 169px
    states: default captured on three list items; no state frame (the bundle holds none on either route)
    use: B2B benefit list item (surface-2::li, bundle variant 7); a container, so its inherited 14px / 400 type is not claimed as a label style
  b2b-campaign-cta:
    type: button
    backgroundColor: '#fef08c'
    textColor: '#242424'
    rounded: 4px
    padding: 0px
    height: 56px
    typography: 16px / 400 / 56px Pretendard Variable
    shadow: rgba(0, 0, 0, 0.22) 0px 4px 16px 0px
    states: default captured; no state frame (the bundle holds none on either route)
    use: B2B page HubSpot CTA (a.hs-cta-embed) at surface-2::[data-omd-capture="1"], 318 x 56; its wrapper anchor (capture 0) records the same values; route-local marketing evidence, not a consumer product CTA
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard Variable
---

# Design System Inspiration of Millie (밀리의서재)

## Overview

### Visual Theme & Atmosphere

Millie is a Korean reading-subscription platform. Its official company material says it began an e-book subscription service in 2016 and has expanded into a catalogue spanning e-books, audio formats, chat books, web novels, and webtoons. The supplied public capture is much narrower than that product story: it covers Millie’s public home and a B2B marketing page, not a signed-in library, checkout, reader, or native app. On those surfaces, the visual expression is quiet and typographic: near-black `#242424` text, white page planes, a subtle `#F7F7F7` skeleton surface, and a loaded Pretendard Variable webfont. The home’s large editorial imagery and translucent carousel controls make content imagery the strongest visible accent; the capture does not establish a universal brand-CTA color.

Millie’s tenth-anniversary site frames the service’s current ambition as making reading an ordinary part of daily life. That narrative helps explain the public surfaces’ calm, content-led presentation, but does not turn the anniversary site’s event colours into home-product tokens. Similarly, the B2B route is a public sales surface for employer reading benefits, and its yellow call to action remains route-local rather than a consumer product rule.

**Key Characteristics:**

- Near-black `#242424` is the most frequent observed text and border colour across both supplied routes.
- White canvas and `#F7F7F7` skeleton/card treatment keep the chrome restrained around editorial content.
- Pretendard Variable is visibly used and backed by loaded, Millie-hosted subset files.
- Home carousel controls use translucent black overlays and strongly rounded geometry over imagery.
- No consumer reader, account, checkout, error, modal, hover, pressed, focus, disabled, or responsive state is established by this capture: the bundle holds no hover, pressed, or focus frame for any of its 177 elements.

### Primary tasks

- Discover editorially featured reading content on the public home
- Read across e-books, audio content, web novels, and webtoons
- Evaluate the service as a workplace reading benefit for employees

### Brand Narrative

Millie’s official tenth-anniversary page says the company was founded in 2016 and began an e-book subscription service, asking how reading could become more enjoyable. Its company business page describes the present platform as offering 240,000 reading-content titles across e-books, audio formats, chat books, web novels, and webtoons (figures stated there as of May 2026). Together, these sources describe an expansion from subscription e-books to a wider digital-reading catalogue.

The supplied public capture shows only a home surface and B2B marketing page within that story. It does not establish the design of the signed-in library or reader. The public visual record here is therefore deliberately limited to content-led home chrome, a B2B marketing treatment, and the loaded webfont evidence.

### Principles

1. **Make reading approachable.** Millie’s anniversary material emphasizes making reading part of ordinary life. *UI implication:* public discovery copy can be welcoming and direct, but unobserved reader interactions remain unspecified.
2. **Let content explain breadth.** The company describes multiple reading and listening formats. *UI implication:* do not collapse that editorial breadth into an invented generic book-card system.
3. **Separate service audiences.** B2B benefits and public consumer discovery share a brand but are different source domains. *UI implication:* the yellow B2B CTA must not become a universal consumer control.
4. **Preserve evidence boundaries.** Font, colour, and component claims require their own surface provenance. *UI implication:* do not use company narrative or upstream licence text to fill missing UI states or tokens.

### Personas

These are first-party stakeholder groups, not fictional personas.

**Readers seeking a broad digital catalogue.** Millie’s company page names e-books, audio content, chat books, web novels, and webtoons as available formats. The capture does not reveal their signed-in reading workflow.

**Employer and organisation benefit teams.** The B2B page positions the service for workplace welfare and development, including reading-related information for employees. Its captured marketing controls remain B2B-specific.

**Millie’s product and company teams.** The careers page describes people working across customer experience, service planning, content, design, development, marketing, and operations. This is organisational context, not evidence of internal tool UI.

## Colors

### Observed public surfaces

- **Primary ink** (`#242424`): high-confidence computed text and border colour on the public home and B2B route.
- **Canvas** (`#FFFFFF`): high-confidence public page and B2B list-card surface.
- **Subtle surface** (`#F7F7F7`): observed on the home `skeleton__SkeletonCard` specimen.
- **Muted text** (`#6F6F6F`): observed home secondary copy; the footer link row uses it (§4).
- **Divider / pale surface** (`#ECECEC`): observed home background occurrence; its precise component role was not captured.
- **Home hero overlay** (`rgba(0,0,0,0.3)`): observed only on the carousel play and pagination controls. A separate 24px icon button uses `rgba(0,0,0,0.4)` (§4).
- **Footer fine print** (`#A5A5A5`): observed only on the 10px footer about button (§4); it is not promoted to a palette role.
- **B2B campaign action** (`#FEF08C`): observed only on `surface-2::[data-omd-capture="1"]`; it is marketing-route evidence, not a universal product CTA token.

The prior `#1B6DDA` “reading blue,” coral, yellow, and inferred semantic palette are not retained as current machine tokens: the supplied 2026 capture does not corroborate them as reusable public product roles. A single low-frequency `#A451F7` home observation is likewise insufficient to promote a brand-accent token.

## Typography

### Evidence classes

- **Live computed surface-use:** `Pretendard Variable` appears in 176 visible public-surface observations across body, list, button, card, and heading roles. The supplied FontFaceSet reports it loaded with high confidence and 29 Millie CloudFront subset source URLs. It is the sole UI-family token in this reference.
- **Official distributed font and licence:** the upstream Pretendard documentation describes its variable webfont distribution, and its upstream LICENSE is SIL Open Font License 1.1. Those sources describe the font asset and licence; Millie use is established separately by the supplied computed, loaded, and source evidence.
- **Declared-only:** `__notoSerif_ef2586`, `__notoSerif_Fallback_ef2586`, `icon`, `Pretendard Fallback`, `Pretendard Fallback Android`, and `swiper-icons` were declared with zero visible use. They are not UI-family tokens or specimens.
- **Unresolved:** one visible `Pretendard` computed observation has no matching loaded FontFace/source corroboration. It remains unresolved rather than being merged with Pretendard Variable.

| Role | Size | Weight | Line height | Surface provenance |
|---|---:|---:|---:|---|
| Body / list text | 14px | 400 | 24px | Public home text/body specimens |
| Large B2B heading | 44px | 700 | 54px | Public B2B body specimen |
| B2B section heading | 28px | 700 | 38px | Public B2B `h2` specimen |
| Compact home utility | 12px | 400 | 18px | `home::[data-omd-capture="10"]` |

Do not render a declared Noto Serif, icon font, fallback family, or the uncorroborated `Pretendard` observation as an observed Millie product font.

## Layout

The supplied capture is desktop evidence only. On the home route it records a 1392px × 400px hero slide and 32px-high overlay controls; it also records 12px gaps on some article rows. The B2B page records 297px-wide benefit-list items and a 318px × 56px CTA. These isolated measurements do not establish a universal grid, shelf layout, product-reader page, mobile breakpoint, or signed-in library composition.

### Responsive Behavior

No responsive viewport comparison was supplied. The desktop dimensions above must not be scaled into mobile, tablet, native-app, or e-ink-reader layout rules.

## Elevation & Depth

The public home controls and captured cards report no box shadow. The B2B campaign CTA alone carries `0px 4px 16px rgba(0,0,0,0.22)`. No modal, drawer, popover, menu, or cross-surface elevation scale was captured, so the B2B shadow is not generalized.

## Motion & Easing

No duration, easing, autoplay timing, reduced-motion behaviour, or transition was supplied. The hero’s control markup does not establish carousel motion rules. No Millie motion token is specified.

## Components

### Home utility button

**Observed default**
- Background: #333333
- Text: #FFFFFF
- Radius: 4px
- Padding: 0px 12px
- Font: 12px / 400 / Pretendard Variable
- Use: `home::[data-omd-capture="10"]`, class `button__Button-sc-746c0757-0 HMzlI button`; 80px × 32px in the supplied home capture.

### Home hero controls

**Play control — observed default**
- Background: rgba(0,0,0,0.3)
- Radius: 100px
- Padding: 8px
- Font: 16px / 400 / Pretendard Variable
- Use: `home::[data-omd-capture="21"]`, class `styled__PlayButtonContainer-sc-aeee1130-0 hNymXJ`; 32px × 32px over the home hero.

**Pagination control — observed default**
- Background: rgba(0,0,0,0.3)
- Text: #FFFFFF
- Radius: 100px
- Padding: 4px 10px
- Font: 16px / 400 / Pretendard Variable
- Use: `home::[data-omd-capture="22"]`, class `styled__PaginationButtonContainer-sc-b710220-0 bcMcRo`; 76px × 32px over the home hero.

### Home content and skeleton shells

**Hero slide — observed default**
- Radius: 20px
- Use: `home::li`, class `styled__HeroBannerSwiperSlide-sc-e42f00ea-4 gvJwhy`; 1392px × 400px in the supplied desktop capture.

**Skeleton card — captured shell only**
- Background: #F7F7F7
- Radius: 16px
- Padding: 45px 24px 30px
- Use: `home::div`, class `skeleton__SkeletonCard-sc-3613fd6a-1 gSdwRh`; five occurrences. The raw class name is preserved as provenance, but the collector records no loading-state event, animation, or skeleton timing.

### Home navigation

**Top navigation link — observed default** (`gnb-link`)
- Background: transparent
- Text: #242424
- Padding: 0px 24px
- Height: 64px
- Font: 20px / 400 / Pretendard Variable
- Current link: the link carrying the class `on` (`home::[data-omd-capture="1"]`) renders 20px / 700 in the same colour. It is recorded as the `selected` value by that class; no aria attribute marks it.
- Use: `home::[data-omd-capture="2"]`; five links (capture 2–6) record the same rest values.

**Category tab link — observed default** (`category-tab-link`)
- Background: transparent
- Text: #242424
- Padding: 0px 10px
- Height: 44px
- Font: 16px / 400 / 24px Pretendard Variable
- Use: `home::[data-omd-capture="11"]`, class `styled__MdsTabLink`; captures 13–16 match (15 adds 32px left padding). Capture 12 carries a different generated class and renders 16px / 700 / 22px. No `aria-selected` or active class marks it, so it is described here rather than declared as a selected state.

### Home secondary controls

**White anchor button — observed default** (`white-anchor-button`)
- Background: #FFFFFF
- Text: #242424
- Border: 0px
- Radius: 4px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 400 / 20px Pretendard Variable
- Use: `home::[data-omd-capture="38"]`, class `button__Anchor-sc-746c0757-1`, the same component family as the utility button; 311px × 40px.

**Translucent icon button — observed default** (`translucent-icon-button`)
- Background: rgba(0,0,0,0.4)
- Border: 1px rgba(255,255,255,0.3)
- Radius: 8px
- Size: 24px × 24px
- Use: `home::[data-omd-capture="34"]`, Tailwind classes `rounded-8 border-white-alpha-30 bg-black-alpha-40`. It has no text node, so no label colour is claimed.

### Footer

**Footer link — observed default** (`footer-link`)
- Background: transparent
- Text: #6F6F6F
- Padding: 0px 12px 0px 0px
- Height: 14px
- Font: 12px / 400 / Pretendard Variable
- Use: `home::[data-omd-capture="43"]`; eleven links (capture 43–53) record the same values.

**Footer about button — observed default** (`footer-about-button`)
- Background: transparent
- Text: #A5A5A5
- Padding: 0px 14px 0px 0px
- Height: 12px
- Font: 10px / 400 / Pretendard Variable
- Use: `home::[data-omd-capture="42"]`, class `styled__AboutButton`; 97px × 12px.

### B2B marketing examples

**Benefit card — observed default**
- Background: #FFFFFF
- Radius: 10px
- Padding: 16px 24px
- Size: 297px × 169px
- Type: the list item is a container, so its inherited 14px / 400 Pretendard Variable is not a measured label style. Corrected 2026-09-29: the July text listed it as the card's font.
- Use: `surface-2::li`; three B2B marketing-list occurrences.

**B2B campaign action — observed default**
- Background: #FEF08C
- Radius: 4px
- Shadow: 0px 4px 16px rgba(0,0,0,0.22)
- Font: 16px / 400 / Pretendard Variable
- Use: `surface-2::[data-omd-capture="1"]`, HubSpot CTA placeholder; 318px × 56px. This is route-local B2B marketing evidence, not a consumer or app button contract.

No hover, pressed, or focus value is specified for any component: the bundle holds no `::state-hover`, `::state-pressed`, or `::state-focus` frame for any element on either route. Corrected 2026-09-29: the July text gave `interactionCount: 0` as the reason, but that field counts dialog, tab, and menu expansions, not pointer-state frames. No disabled, error, dialog, menu, toast, input, search, subscription, reader, or card interaction state was captured either.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.millie.co.kr/; https://www.millie.co.kr/v4/brand/b2b; https://company.millie.co.kr/business/; https://10th.millie.co.kr/; https://company.millie.co.kr/careers/; https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md; https://github.com/orioncactus/pretendard/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/millie (attempted via built-in web; internal/safe-open error and no indexed Millie record); https://styles.refero.design/?q=millie (attempted via built-in web; internal/safe-open error and no indexed Millie style record)
**Conflicts unresolved:** none

The prior reference’s blue CTA system, content-tag palette, inferred inputs, book cards, shadows, states, motion, and reader flows were not corroborated by the supplied current capture and have been removed rather than carried forward as plausible defaults.

### States

No state system is established. The bundle holds no hover, pressed, or focus frame for any element on either route, and it records zero interaction expansions. Two static variants are recorded in §4 from markup alone: the top navigation link with the class `on` renders 20px / 700 (the `selected` value on `gnb-link`), and one category tab link renders 16px / 700 / 22px under a different generated class with no active marker, so it is described rather than declared. It includes elements whose class names contain `skeleton`, but does not record a loading event, timing, animation, or transition; they are documented in §4 as captured shells only. Hover, focus, pressed, disabled, error, success, empty, toast, dialog, and reader-progress states remain unresolved.

## Do's and Don'ts

### Do

- Keep `#242424`, white, `#F7F7F7`, and `#6F6F6F` tied to their recorded public-surface roles.
- Use Pretendard Variable only where its computed, loaded, and source evidence supports it.
- Preserve translucent, fully rounded carousel controls as home-hero specimens.
- Keep B2B benefit cards and the yellow HubSpot CTA explicitly separate from consumer product claims.

### Don't

- Restore the prior blue CTA or promotional palette without current selector-level evidence.
- Promote declared Noto Serif, icon, fallback, or unresolved font observations into a UI family.
- Generate reader, checkout, search, library, subscription, or mobile-app components from this public marketing capture.
- Invent hover, focus, pressed, disabled, error, loading, toast, modal, or responsive states.

## Voice & Tone

Millie’s official tenth-anniversary material describes a decade spent making reading more enjoyable and ordinary; its B2B page frames the service as access to reading content and recommendations for employee benefits. That supports warm, direct, reading-oriented public copy, but does not establish a complete product microcopy system.

| Context | Supported direction |
|---|---|
| Public reading discovery | Invite exploration in plain, encouraging language. |
| B2B benefit page | Explain access, content breadth, and workplace use directly. |
| Reader, account, payment, or error copy | Unresolved in this capture; do not manufacture a house voice. |

## Agent Prompt Guide

Use this reference narrowly: “Create a Millie public-home hero pagination control with a translucent `rgba(0,0,0,0.3)` background, white 16px/400 Pretendard Variable text, 100px radius, and `4px 10px` padding. Do not add interaction states.” For the compact home utility specimen, use `#333333`, white 12px/400 text, 4px radius, and `0px 12px` padding. Do not use this evidence to generate a signed-in reading or payment flow.

## Governance

### Known Gaps

- **Contrast, `gnb-link`.** Text `#242424` on `#00000000` measures 1.35:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `category-tab-link`.** Text `#242424` on `#00000000` measures 1.35:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-link`.** Text `#6f6f6f` on `#00000000` measures 4.18:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
