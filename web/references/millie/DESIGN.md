---
id: millie
name: Millie
display_name_kr: 밀리의서재
country: KR
category: education
homepage: "https://www.millie.co.kr"
primary_color: "#242424"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=millie.co.kr&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.millie.co.kr/", inspected: "2026-07-12" }
    - { id: b2b, kind: product-surface, url: "https://www.millie.co.kr/v4/brand/b2b", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.millie.co.kr/", captured: "2026-07-12" }
    - { id: b2b-live, kind: product-surface, url: "https://www.millie.co.kr/v4/brand/b2b", captured: "2026-07-12" }
    - { id: company-business, kind: official-doc, url: "https://company.millie.co.kr/business/", captured: "2026-07-13" }
    - { id: anniversary-context, kind: official-doc, url: "https://10th.millie.co.kr/", captured: "2026-07-13" }
    - { id: careers-context, kind: official-doc, url: "https://company.millie.co.kr/careers/", captured: "2026-07-13" }
    - { id: pretendard-docs, kind: official-doc, url: "https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.ink": &both { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.typography.heading-xl.size": &b2b { surface_id: b2b, source_id: b2b-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.typography.heading-xl.weight": *b2b
    "tokens.typography.heading-xl.lineHeight": *b2b
    "tokens.typography.heading-xl.use": *b2b
    "tokens.typography.heading.size": *b2b
    "tokens.typography.heading.weight": *b2b
    "tokens.typography.heading.lineHeight": *b2b
    "tokens.typography.heading.use": *b2b
    "tokens.colors.canvas": *both
    "tokens.colors.surface-subtle": *both
    "tokens.colors.muted": *both
    "tokens.colors.divider": *both
    "tokens.typography.family.sans": *both
    "tokens.typography.body.size": *both
    "tokens.typography.body.weight": *both
    "tokens.typography.body.lineHeight": *both
    "tokens.typography.body.use": *both
    "tokens.typography.utility.size": *both
    "tokens.typography.utility.weight": *both
    "tokens.typography.utility.lineHeight": *both
    "tokens.typography.utility.use": *both
    "tokens.rounded.utility-button": *both
    "tokens.rounded.carousel-pagination": *both
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only values with supplied computed-style provenance are machine tokens. The capture did not establish a universal accent color, application state system, or native reader UI."
  colors:
    ink: "#242424"
    canvas: "#FFFFFF"
    surface-subtle: "#F7F7F7"
    muted: "#6F6F6F"
    divider: "#ECECEC"
  typography:
    family: { sans: "Pretendard Variable" }
    body: { size: 14, weight: 400, lineHeight: 1.7143, use: "Observed public home body and list text." }
    heading-xl: { size: 44, weight: 700, lineHeight: 1.2273, use: "Observed public B2B heading specimen." }
    heading: { size: 28, weight: 700, lineHeight: 1.3571, use: "Observed public B2B section heading specimen." }
    utility: { size: 12, weight: 400, lineHeight: 1.5, use: "Observed compact home utility button." }
  rounded:
    utility-button: 4
    carousel-pagination: 100
  components_harvested: false
  components: {}
---

# Design System Inspiration of Millie (밀리의서재)

## 1. Visual Theme & Atmosphere

Millie is a Korean reading-subscription platform. Its official company material says it began an e-book subscription service in 2016 and has expanded into a catalogue spanning e-books, audio formats, chat books, web novels, and webtoons. The supplied public capture is much narrower than that product story: it covers Millie’s public home and a B2B marketing page, not a signed-in library, checkout, reader, or native app. On those surfaces, the visual expression is quiet and typographic: near-black `#242424` text, white page planes, a subtle `#F7F7F7` skeleton surface, and a loaded Pretendard Variable webfont. The home’s large editorial imagery and translucent carousel controls make content imagery the strongest visible accent; the capture does not establish a universal brand-CTA color.

Millie’s tenth-anniversary site frames the service’s current ambition as making reading an ordinary part of daily life. That narrative helps explain the public surfaces’ calm, content-led presentation, but does not turn the anniversary site’s event colours into home-product tokens. Similarly, the B2B route is a public sales surface for employer reading benefits, and its yellow call to action remains route-local rather than a consumer product rule.

**Key Characteristics:**

- Near-black `#242424` is the most frequent observed text and border colour across both supplied routes.
- White canvas and `#F7F7F7` skeleton/card treatment keep the chrome restrained around editorial content.
- Pretendard Variable is visibly used and backed by loaded, Millie-hosted subset files.
- Home carousel controls use translucent black overlays and strongly rounded geometry over imagery.
- No consumer reader, account, checkout, error, modal, hover, pressed, disabled, or responsive state is established by this capture.

## 2. Color Palette & Roles

### Observed public surfaces

- **Primary ink** (`#242424`): high-confidence computed text and border colour on the public home and B2B route.
- **Canvas** (`#FFFFFF`): high-confidence public page and B2B list-card surface.
- **Subtle surface** (`#F7F7F7`): observed on the home `skeleton__SkeletonCard` specimen.
- **Muted text** (`#6F6F6F`): observed home secondary copy.
- **Divider / pale surface** (`#ECECEC`): observed home background occurrence; its precise component role was not captured.
- **Home hero overlay** (`rgba(0,0,0,0.3)`): observed only on the carousel play and pagination controls.
- **B2B campaign action** (`#FEF08C`): observed only on `surface-2::[data-omd-capture="1"]`; it is marketing-route evidence, not a universal product CTA token.

The prior `#1B6DDA` “reading blue,” coral, yellow, and inferred semantic palette are not retained as current machine tokens: the supplied 2026 capture does not corroborate them as reusable public product roles. A single low-frequency `#A451F7` home observation is likewise insufficient to promote a brand-accent token.

## 3. Typography Rules

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

## 4. Component Stylings

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

### B2B marketing examples

**Benefit card — observed default**
- Background: #FFFFFF
- Radius: 10px
- Padding: 16px 24px
- Font: 14px / 400 / Pretendard Variable
- Use: `surface-2::li`; three B2B marketing-list occurrences.

**B2B campaign action — observed default**
- Background: #FEF08C
- Radius: 4px
- Shadow: 0px 4px 16px rgba(0,0,0,0.22)
- Font: 16px / 400 / Pretendard Variable
- Use: `surface-2::[data-omd-capture="1"]`, HubSpot CTA placeholder; 318px × 56px. This is route-local B2B marketing evidence, not a consumer or app button contract.

The capture has `interactionCount: 0`, `interactionKinds: 0`, and no recorded state variants. No hover, focus, pressed, disabled, error, dialog, menu, toast, input, search, subscription, reader, or card interaction state is specified.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.millie.co.kr/; https://www.millie.co.kr/v4/brand/b2b; https://company.millie.co.kr/business/; https://10th.millie.co.kr/; https://company.millie.co.kr/careers/; https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md; https://github.com/orioncactus/pretendard/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/millie (attempted via built-in web; internal/safe-open error and no indexed Millie record); https://styles.refero.design/?q=millie (attempted via built-in web; internal/safe-open error and no indexed Millie style record)
**Conflicts unresolved:** none

The prior reference’s blue CTA system, content-tag palette, inferred inputs, book cards, shadows, states, motion, and reader flows were not corroborated by the supplied current capture and have been removed rather than carried forward as plausible defaults.

## 5. Layout Principles

The supplied capture is desktop evidence only. On the home route it records a 1392px × 400px hero slide and 32px-high overlay controls; it also records 12px gaps on some article rows. The B2B page records 297px-wide benefit-list items and a 318px × 56px CTA. These isolated measurements do not establish a universal grid, shelf layout, product-reader page, mobile breakpoint, or signed-in library composition.

## 6. Depth & Elevation

The public home controls and captured cards report no box shadow. The B2B campaign CTA alone carries `0px 4px 16px rgba(0,0,0,0.22)`. No modal, drawer, popover, menu, or cross-surface elevation scale was captured, so the B2B shadow is not generalized.

## 7. Do's and Don'ts

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

## 8. Responsive Behavior

No responsive viewport comparison was supplied. The desktop dimensions above must not be scaled into mobile, tablet, native-app, or e-ink-reader layout rules.

## 9. Agent Prompt Guide

Use this reference narrowly: “Create a Millie public-home hero pagination control with a translucent `rgba(0,0,0,0.3)` background, white 16px/400 Pretendard Variable text, 100px radius, and `4px 10px` padding. Do not add interaction states.” For the compact home utility specimen, use `#333333`, white 12px/400 text, 4px radius, and `0px 12px` padding. Do not use this evidence to generate a signed-in reading or payment flow.

## 10. Voice & Tone

Millie’s official tenth-anniversary material describes a decade spent making reading more enjoyable and ordinary; its B2B page frames the service as access to reading content and recommendations for employee benefits. That supports warm, direct, reading-oriented public copy, but does not establish a complete product microcopy system.

| Context | Supported direction |
|---|---|
| Public reading discovery | Invite exploration in plain, encouraging language. |
| B2B benefit page | Explain access, content breadth, and workplace use directly. |
| Reader, account, payment, or error copy | Unresolved in this capture; do not manufacture a house voice. |

## 11. Brand Narrative

Millie’s official tenth-anniversary page says the company was founded in 2016 and began an e-book subscription service, asking how reading could become more enjoyable. Its company business page describes the present platform as offering 240,000 reading-content titles across e-books, audio formats, chat books, web novels, and webtoons (figures stated there as of May 2026). Together, these sources describe an expansion from subscription e-books to a wider digital-reading catalogue.

The supplied public capture shows only a home surface and B2B marketing page within that story. It does not establish the design of the signed-in library or reader. The public visual record here is therefore deliberately limited to content-led home chrome, a B2B marketing treatment, and the loaded webfont evidence.

## 12. Principles

1. **Make reading approachable.** Millie’s anniversary material emphasizes making reading part of ordinary life. *UI implication:* public discovery copy can be welcoming and direct, but unobserved reader interactions remain unspecified.
2. **Let content explain breadth.** The company describes multiple reading and listening formats. *UI implication:* do not collapse that editorial breadth into an invented generic book-card system.
3. **Separate service audiences.** B2B benefits and public consumer discovery share a brand but are different source domains. *UI implication:* the yellow B2B CTA must not become a universal consumer control.
4. **Preserve evidence boundaries.** Font, colour, and component claims require their own surface provenance. *UI implication:* do not use company narrative or upstream licence text to fill missing UI states or tokens.

## 13. Personas

These are first-party stakeholder groups, not fictional personas.

**Readers seeking a broad digital catalogue.** Millie’s company page names e-books, audio content, chat books, web novels, and webtoons as available formats. The capture does not reveal their signed-in reading workflow.

**Employer and organisation benefit teams.** The B2B page positions the service for workplace welfare and development, including reading-related information for employees. Its captured marketing controls remain B2B-specific.

**Millie’s product and company teams.** The careers page describes people working across customer experience, service planning, content, design, development, marketing, and operations. This is organisational context, not evidence of internal tool UI.

## 14. States

No state system is established. The raw capture records zero interaction expansions and zero observed states. It includes elements whose class names contain `skeleton`, but does not record a loading event, timing, animation, or transition; they are documented in §4 as captured shells only. Hover, focus, pressed, disabled, error, success, empty, toast, dialog, and reader-progress states remain unresolved.

## 15. Motion & Easing

No duration, easing, autoplay timing, reduced-motion behaviour, or transition was supplied. The hero’s control markup does not establish carousel motion rules. No Millie motion token is specified.
