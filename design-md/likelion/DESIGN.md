---
id: likelion
name: LikeLion
display_name_kr: 멋쟁이사자처럼
country: KR
category: education
homepage: "https://likelion.net/"
primary_color: "#ff6000"
logo:
  type: favicon
  slug: "https://likelion.net/img/favicon.png"
verified: "2026-07-13"
added: "2026-07-02"
ds:
  name: LikeLion Design System
  url: "https://designsystem.likelion.net/"
  type: system
  description: Official public documentation surface. The supplied capture covers its documentation chrome, not component-story tokens.
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing-course-catalog, url: "https://likelion.net/", inspected: "2026-07-13" }
    - { id: docs, kind: documentation-chrome, url: "https://designsystem.likelion.net/?path=/docs/intro-introduction--docs", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://likelion.net/", captured: "2026-07-13" }
    - { id: docs-live, kind: official-doc, url: "https://designsystem.likelion.net/?path=/docs/intro-introduction--docs", captured: "2026-07-13" }
    - { id: history-context, kind: official-doc, url: "https://k-digital.likelion.net/364c521d-31d4-425e-a281-7d056ce3f8a6", captured: "2026-07-13" }
    - { id: b2b-context, kind: official-doc, url: "https://likelion.net/b2b", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.muted": *home
    "tokens.colors.muted-secondary": *home
    "tokens.colors.hairline": *home
    "tokens.colors.promo": *home
    "tokens.colors.nav-border": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.section-heading.size": *home
    "tokens.typography.section-heading.weight": *home
    "tokens.typography.section-heading.lineHeight": *home
    "tokens.typography.section-heading.use": *home
    "tokens.typography.search.size": *home
    "tokens.typography.search.weight": *home
    "tokens.typography.search.lineHeight": *home
    "tokens.typography.search.use": *home
    "tokens.rounded.promo": *home
    "tokens.shadow.none": *home
    "tokens.components.promo-tile.type": *home
    "tokens.components.promo-tile.bg": *home
    "tokens.components.promo-tile.fg": *home
    "tokens.components.promo-tile.radius": *home
    "tokens.components.promo-tile.padding": *home
    "tokens.components.promo-tile.font": *home
    "tokens.components.promo-tile.states": *home
    "tokens.components.promo-tile.use": *home
    "tokens.components.account-pill.type": *home
    "tokens.components.account-pill.fg": *home
    "tokens.components.account-pill.border": *home
    "tokens.components.account-pill.radius": *home
    "tokens.components.account-pill.padding": *home
    "tokens.components.account-pill.font": *home
    "tokens.components.account-pill.states": *home
    "tokens.components.account-pill.use": *home
    "tokens.components.course-search.type": *home
    "tokens.components.course-search.fg": *home
    "tokens.components.course-search.font": *home
    "tokens.components.course-search.states": *home
    "tokens.components.course-search.use": *home
tokens:
  source: live-extract
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    primary: "#ff6000"
    foreground: "#222222"
    muted: "#a3a3a3"
    muted-secondary: "#737373"
    hairline: "#e5e5e5"
    promo: "#fcf4ee"
    nav-border: "#d4d4d4"
  typography:
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Observed home body copy; the computed Pretendard Variable face is unresolved, so no UI-family token is assigned." }
    section-heading: { size: 32, weight: 700, lineHeight: 1.5, use: "Observed home course-section heading." }
    search: { size: 20, weight: 600, lineHeight: 1.2, use: "Observed home course-search input." }
  spacing: {}
  rounded: { promo: 16 }
  shadow: { none: "none" }
  components:
    promo-tile: { type: button, bg: "#fcf4ee", fg: "#222222", radius: "16px", padding: "40px", font: "16px / 400 / unresolved computed stack", states: "default observed only", use: "home::[data-omd-capture=\"13\"] clickable warm promotional tile; 310px rendered height." }
    account-pill: { type: button, fg: "#222222", border: "1px solid #d4d4d4", radius: "9999px", padding: "10px 16px", font: "16px / 400 / unresolved computed stack", states: "default observed only", use: "home::[data-omd-capture=\"6\"] 로그인/회원가입 control; 43px rendered height; low-confidence collector classification." }
    course-search: { type: input, fg: "#ff6000", font: "20px / 600 / unresolved computed stack", states: "default plus focus and pressed pseudo-state samples only", use: "home::[data-omd-capture=\"7\"] course-search input; no complete interaction or result state was captured." }
---

# Design System Inspiration of LikeLion

## 1. Visual Theme & Atmosphere

LikeLion (멋쟁이사자처럼) is a Korean programming-education brand whose public home surface currently groups course discovery, K-Digital Training bootcamps, AI education, and business education. Its official history page traces the brand to 2013 and the “HACK YOUR LIFE!” idea of turning an individual’s idea into something they can make; its current business page frames learning around practical problems, mentoring, and shared experience. The supplied desktop homepage translates that welcoming, action-oriented positioning into a restrained field of `#222222` copy and `#e5e5e5` hairlines, with `#ff6000` concentrated in the search/attention treatment and `#fcf4ee` warming a large promotional tile. The public design-system URL is retained as official documentation, but this collector run reached its Storybook documentation chrome rather than component stories; it is not used to fill in a generic component library.

The reference deliberately keeps the two domains distinct. Homepage measurements describe a public course-marketing/catalog surface. Documentation chrome establishes only that the public documentation route exists; its controls, colors, and loaded font observation do not authorize product or marketing component tokens.

**Key Characteristics:**

- Orange `#ff6000` is an observed attention/search color on the captured homepage, not a universal semantic palette.
- Homepage foreground is `#222222`, with `#a3a3a3` and `#737373` as observed lower-emphasis text.
- An observed warm `#fcf4ee` promo tile supplies the strongest surfaced color block.
- The verified geometry is local: a 16px promo tile and a 9999px navigation-account pill.
- The observed marketing computed face is unresolved; a loaded Pretendard observation on documentation chrome is not promoted to a homepage UI-family token.

## 2. Color Palette & Roles

### Observed homepage roles

- **Attention / search** (`#ff6000`): observed as the course-search input foreground at `home::[data-omd-capture="7"]`.
- **Primary foreground** (`#222222`): repeated homepage text color, including the warm promo tile.
- **Muted text** (`#a3a3a3`): repeated lower-emphasis homepage text.
- **Secondary muted text** (`#737373`): observed on the homepage search-input border sample and other low-emphasis text.
- **Hairline** (`#e5e5e5`): repeated homepage border color in the collector output.
- **Warm promo surface** (`#fcf4ee`): `home::[data-omd-capture="13"]` background.
- **Account-pill border** (`#d4d4d4`): observed on the navigation account control.

### Boundary

The supplied homepage evidence does not establish a filled orange CTA, orange hover color, semantic success/error palette, a neutral scale, or a general canvas token. Documentation-chrome values such as `#6b7583`, `#4e5967`, `#f3f4f6`, and `#e5e7ea` are not marketed as LikeLion product tokens here.

## 3. Typography Rules

### Evidence classes

- **Live product/marketing computed use — unresolved:** the homepage computes `Pretendard Variable` on 193 visible captured elements. The collector found no matching loaded FontFaceSet record or source URL for that exact family, so it is not a `tokens.typography.family` token.
- **Documentation-chrome computed use — loaded:** the Storybook documentation route computes `pretendard` / `Pretendard` on 34 visible elements; it has loaded FontFaceSet corroboration and 22 source URLs, including LikeLion-hosted static Pretendard files and the Pretendard CDN. This verifies the documentation-chrome observation only, not course-product use.
- **Declared-only:** Gotham, HeirofLight, Noto Sans Mono, Nunito Sans, and slick have declared font-face assets with zero visible captured use. They are not family tokens or specimens.
- **Official font and licence context:** the upstream Pretendard project publishes its files under SIL Open Font License 1.1. That licence describes Pretendard’s upstream distribution; it does not establish that the declared Gotham, HeirofLight, or Noto Sans Mono files are reusable assets. [Pretendard licence](https://github.com/orioncactus/pretendard/blob/main/LICENSE)
- **System fallback:** the homepage’s fallback list is a fallback list, not evidence for a substitute branded family.

### Measured homepage hierarchy

| Role | Size | Weight | Line height | Provenance |
|---|---:|---:|---:|---|
| Default body | 16px | 400 | 24px | `home::body` |
| Course-section heading | 32px | 700 | 48px | Homepage `h3` samples |
| Course-search input | 20px | 600 | 24px | `home::[data-omd-capture="7"]` |
| Course-card title | 20px | 600 | 30px | Captured homepage card text |

Do not substitute a system font and call it Pretendard. The exact marketing computed family remains unresolved until matching FontFaceSet/source evidence is captured on that surface.

## 4. Component Stylings

All component observations below are scoped to the supplied `home` desktop capture. The bundle records one documentation form-error interaction and no homepage interaction flow; focus/pressed rows on the course search are pseudo-state samples, not a general product-state contract. Documentation-chrome controls are excluded.

### Promotional tile

**Warm promotional tile — observed default**
- Background: `#fcf4ee`
- Text: `#222222`
- Radius: `16px`
- Padding: `40px`
- Font: `16px / 400 / unresolved computed stack`
- States: Default observed only
- Use: `home::[data-omd-capture="13"]`; clickable warm promotional tile, 310px rendered height.

### Navigation account control

**Login / sign-up pill — observed default**
- Text: `#222222`
- Border: `1px solid #d4d4d4`
- Radius: `9999px`
- Padding: `10px 16px`
- Font: `16px / 400 / unresolved computed stack`
- States: Default observed only
- Use: `home::[data-omd-capture="6"]`; 로그인/회원가입 control, 43px rendered height. The collector’s component classification is low confidence, so no further variant is inferred.

### Course search

**Course-search input — captured pseudo-state samples**
- Text: `#ff6000`
- Font: `20px / 600 / unresolved computed stack`
- Focus: border-color `#2563eb` in the captured pseudo-state sample while border width remains `0px`
- Pressed: captured pseudo-state sample only
- Use: `home::[data-omd-capture="7"]`; course-search input. No result list, validation, disabled, or complete focus-flow state is specified.

No ActionButton, TextField, chip, tab, tag, toast, dialog, card, or responsive variant is specified: the supplied design-system route is documentation chrome rather than a component-story capture, and the homepage does not provide selector-backed observations for those variants.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://likelion.net/; https://designsystem.likelion.net/?path=/docs/intro-introduction--docs; https://k-digital.likelion.net/364c521d-31d4-425e-a281-7d056ce3f8a6; https://likelion.net/b2b
**Tier 2 sources:** https://getdesign.md/likelion (attempted; no usable LikeLion record extracted); https://styles.refero.design/?q=likelion (attempted; no usable LikeLion record extracted)
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied home surface is a 1440×900 desktop capture. Its reliable layout observations are local: the course-search input rendered 731px wide, the promo tile rendered 310px high with 40px padding, and the account pill rendered 43px high. No public mobile viewport, course-grid rule, carousel behavior, sticky header behavior, or breakpoint was captured, so none is specified.

## 6. Depth & Elevation

Representative homepage and documentation-chrome samples report `box-shadow: none`. The observed promo tile is distinguished by `#fcf4ee`, type, and a 16px radius rather than an elevation value. No global shadow scale or overlay treatment is established.

## 7. Do's and Don'ts

### Do

- Keep the observed homepage scope separate from documentation chrome and official narrative sources.
- Use `#ff6000` only for the observed attention/search treatment unless another component has its own selector-backed evidence.
- Preserve the warm promo tile’s `#fcf4ee`, 16px radius, and 40px padding only in its captured homepage context.
- Treat `Pretendard Variable` on the homepage as unresolved until exact loaded-face/source corroboration exists.

### Don't

- Do not turn the public Storybook’s documentation controls into LikeLion product components.
- Do not recreate historical ActionButton, chip, tab, tag, toast, dialog, hover, disabled, or error variants without current selector and state provenance.
- Do not label Gotham, HeirofLight, Noto Sans Mono, Nunito Sans, or slick as a live UI family.
- Do not derive a semantic palette, breakpoint, or motion system from this two-surface desktop bundle.

## 8. Responsive Behavior

No mobile viewport or responsive transition was captured. Touch-target, grid, menu-collapse, carousel-scroll, and breakpoint rules require a public responsive observation before they can be specified.

## 9. Agent Prompt Guide

### Verified prompt boundary

“Recreate only the observed LikeLion desktop homepage elements: `#222222` foreground with `#e5e5e5` hairlines, an `#ff6000` course-search input at 20px/600, a warm `#fcf4ee` promotional tile with 16px radius and 40px padding, and the outlined login pill. Do not add an orange CTA, Storybook component set, mobile layout, semantic states, or a Pretendard substitution.”

## 10. Voice & Tone

LikeLion’s official materials are practical, encouraging, and learning-oriented. The history page’s “HACK YOUR LIFE!” framing pairs self-directed making with programming education; the current business page describes learning through repeated problem solving, experience sharing, and a shift from AI as a tool to AI as a collaborator. These are brand and educational-context sources, not homepage microcopy rules.

| Do | Don't |
|---|---|
| State the learner’s practical next step plainly. | Attribute unobserved error, enrollment, or support copy to the product. |
| Connect technical learning to a problem the learner or team can work on. | Convert corporate-training language into a visual token. |
| Keep the distinction between public course, business, and documentation surfaces. | Invent urgency, guarantees, or personal outcomes. |

**Source-grounded samples.**

- “HACK YOUR LIFE!” — official history-page slogan. <!-- verified: k-digital.likelion.net 2026-07-13 -->
- “문제 해결 반복 및 경험 공유” — official business-education process label. <!-- verified: likelion.net/b2b 2026-07-13 -->
- “AI = 동료” — official business-education process label. <!-- verified: likelion.net/b2b 2026-07-13 -->

## 11. Brand Narrative

LikeLion’s official history page describes an online/offline programming-education brand that began in 2013 around the value of realizing one’s own idea. It presents “HACK YOUR LIFE!” as the through-line, then describes a move into a commercial corporation and additional education initiatives. The current public home surface shows the present offer as a mix of courses, bootcamps, AI education, and business education; the business surface describes AX learning as problem-led, mentored, and collaborative. [Official history](https://k-digital.likelion.net/364c521d-31d4-425e-a281-7d056ce3f8a6) · [Business education](https://likelion.net/b2b)

The orange-and-warm-neutral homepage is a separately observed public course-marketing expression of that educational role. It should not be read as proof of a single interface across the learner product, business program, or documentation site.

## 12. Principles

1. **Make ideas buildable.** The official history frames programming as a means to realize an individual idea. *UI implication:* describe a learning path in concrete terms; do not manufacture product features or outcomes.
2. **Start from practical problems.** The business surface says its AI learning begins with members’ work problems. *UI implication:* lead educational copy with the task or problem being addressed.
3. **Learn through repetition and sharing.** The published process names repeated problem solving and experience sharing. *UI implication:* where learning progress is evidenced, make the next activity and shared context legible.
4. **Keep domains honest.** Homepage, business education, and documentation serve different contexts. *UI implication:* do not carry a token or component from one domain into another without direct evidence.

## 13. Personas

The first-party sources in this pass establish learner and organisation-facing education contexts, but do not supply enough persona research to support invented demographic archetypes.

- **Individual learners:** public course and bootcamp visitors. [FILL IN: task, constraints, and needs from user-provided research]
- **Organisation learning teams:** business/AX education decision-makers and participants. [FILL IN: task, constraints, and needs from user-provided research]
- **Documentation readers:** public Storybook/documentation visitors. [FILL IN: task and component-story evidence]

## 14. States

No course-product empty, loading, success, disabled, or error state was captured. The only recorded interaction is a form-error sample on documentation chrome, which is not promoted to the course surface.

| Category | Evidence status |
|---|---|
| Empty | [FILL IN: public course-surface observation required] |
| Loading | [FILL IN: public course-surface observation required] |
| Error | [FILL IN: public course-surface observation required] |
| Success | [FILL IN: public course-surface observation required] |
| Skeleton | [FILL IN: public course-surface observation required] |
| Disabled | [FILL IN: public course-surface observation required] |

## 15. Motion & Easing

No motion, transition, or user-flow state was supplied for the homepage. [FILL IN: selector-backed public motion evidence required]
