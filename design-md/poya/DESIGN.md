---
name: 寶雅
colors:
  primary: '#dd006f'
  primary-soft: '#fff1f5'
  foreground: '#231815'
  foreground-soft: '#5e4d48'
  canvas: '#ffffff'
  hairline: '#cfcfcf'
  on-primary: '#ffffff'
typography:
  action:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24
    use: Observed 45px pink pill action on all three supplied public surfaces
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24
    use: Observed Traditional-Chinese story/timeline body samples; family is surface-specific
  heading:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27
    use: Observed public content heading/text samples; not a complete display scale
rounded:
  pill: 99px
spacing:
  xs: 5
  sm: 8
  md: 10
  lg: 15
  xl: 20
  xxl: 25
components:
  primary-pill-action:
    type: button
    backgroundColor: '#dd006f'
    textColor: '#ffffff'
    border: '1px solid #dd006f'
    rounded: 99px
    padding: 8px 20px
    height: 45px
    typography: 16px / 400 / 24px PT Serif
    states: Default geometry observed on three public surfaces; interactionCount is 0, so hover, focus, pressed, disabled, and error values are absent.
    use: Selector-backed .btn action on the public home, brand-story, and timeline routes
    pressed: 'bg #ffffff, label #dd006f (:hover + :active)'
    focus: no visible change (measured 2026-10-16) on :focus-visible
  search-field:
    type: input
    backgroundColor: '#fff1f5'
    textColor: '#5e4d48'
    border: '0px #5e4d48'
    rounded: 99px
    padding: 0px 40px 0px 25px
    height: 45px
    typography: 16px / 400 / 24px PT Serif
    states: Default geometry observed on three public surfaces; interactionCount is 0, so hover, focus, pressed, disabled, and error values are absent.
    use: Selector-backed .searchInput field in the shared public header
fonts:
  roles:
    ui: PT Serif
    cjk: Noto Sans TC
---

# Design System Inspiration of 寶雅

## Overview

### Visual Theme & Atmosphere

POYA 寶雅 is a Taiwanese specialty retailer for personal beauty and daily-living goods. Its first store opened in Tainan in 1985; the brand later adopted the 寶雅 trademark in 1998 and has grown from a store network into a retail, membership, payment, and online-shopping ecosystem. The public surfaces in this record make that practical retail role feel more considered than purely transactional: a vivid pink pill action punctuates a mostly white interface, while warm brown-black text and a pale blush search field soften dense navigation and campaign information. The result is a bright, accessible retail presentation that uses one conspicuous action color rather than a broad decorative palette.

POYA describes its core spirit as beauty, trendiness, and enrichment, and says it is improving store formats and accelerating digitalization. Its timeline records the 2023 consolidation of POYA BUY and POYA PAY into one app, followed by self-checkout with four-language interfaces in 2025. That evolution explains the public site’s role as a shared, information-heavy front door across stores, membership, and online services. It does not turn corporate history or campaign styling into UI-token evidence: the machine-readable values below remain limited to the supplied three public computed-style surfaces.

**Key characteristics:**

- Pink `#dd006f` is the repeated filled action and border treatment on the supplied public routes.
- Warm dark brown `#231815`, rather than neutral black alone, is the most frequent high-emphasis text/border value.
- A blush `#fff1f5` search field and softened brown `#5e4d48` give utility chrome a gentler retail character.
- The captured primary action and search field share a 45px height and 99px pill geometry.
- The packet contains no interaction events; its default component geometry remains useful evidence, while state transitions remain absent.

### Primary tasks

- Find personal beauty, health, and care goods through discoverable categories
- Restock practical household items using direct search and store information
- Look up store, membership, and online-shopping services from one front door
- Read the brand story and company timeline behind the 寶雅 name

### Brand Narrative

POYA began with a first store in Tainan in 1985. Its timeline records the first branch in Kaohsiung in 1997, adoption of the 寶雅 trademark in 1998, and public listing in 2002. The brand-story page describes the business as a specialty store for personal beauty and daily merchandise, spanning beauty care, apparel accessories, home goods, food and drink, and branded counters.

The current public company profile frames the next chapter around better store formats, digitalization, customer loyalty, and a more convenient, comfortable shopping space. The company timeline makes that evolution concrete: POYA PAY launched in 2021, POYA BUY and POYA PAY were integrated in 2023, and multilingual self-checkout began in stores in 2025. These first-party facts justify a service-oriented retail narrative; they do not establish any unobserved app UI or service-state design.

### Principles

1. **Beauty belongs in daily life.** POYA combines beauty and daily merchandise rather than placing them in separate brand worlds.
   *UI implication:* let useful retail navigation remain legible while pink is reserved for a defined action moment.
2. **Trend-aware, not trend-dependent.** The company names trendiness as a core spirit alongside service and selection.
   *UI implication:* favor clear, durable utility chrome over decorative effects that obscure labels or form fields.
3. **Convenience crosses channels.** The documented app/payment integration and multilingual self-checkout show a move toward connected customer service.
   *UI implication:* keep channel handoffs explicit; do not assume a public page proves account, payment, or checkout behavior.
4. **A broad assortment needs calm organization.** POYA describes more than 60,000 selected products across many everyday categories.
   *UI implication:* use hierarchy and predictable search/navigation before adding category-specific visual treatments.

### Personas

The following are evidence-bounded stakeholder archetypes, not claims about demographic research.

- **Beauty and care shopper:** looks across personal beauty, health, and care goods; needs discoverable categories and clear service information.
- **Daily-living replenisher:** comes for practical household or personal items and benefits from direct search, stock, and store pathways.
- **Cross-channel member:** moves among store, app, payment, and online-shopping touchpoints; needs accurate, explicit handoff language rather than implied account-state behavior.

## Colors

### Selector-backed public-surface colors

- **POYA Pink** (`#dd006f`): observed as the filled/background and 1px border value of the public `.btn` action on home, brand-story, and timeline surfaces.
- **Warm Foreground** (`#231815`): repeated public navigation, text, and border value across all three supplied surfaces.
- **Soft Foreground** (`#5e4d48`): observed search-field text/border value; its scope is the pale utility field rather than general content text.
- **Blush Search Surface** (`#fff1f5`): observed only on the shared public search input.
- **Canvas / On Pink** (`#ffffff`): repeated canvas/background and the action label color over POYA Pink.
- **Hairline** (`#cfcfcf`): observed 1px circular carousel-arrow border on the home surface; do not generalize it into a global divider system.

### Evidence-domain boundary

The `primary_color` and token palette are public-surface measurements only. POYA’s corporate profile, store formats, self-checkout rollout, app history, own-brand marketing, and campaign imagery provide context but do not add colors to this token set.

## Typography

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No first-party typography guideline or product announcement located in this pass establishes a POYA-owned UI type family. |
| Live computed surface-use | `PT Serif` is loaded and used 750 times in the supplied packet; `Noto Sans TC` is loaded and used 81 times. Both are live public-web family facts, not a claim of proprietary ownership. |
| Official distributed brand asset | No first-party POYA font package or typography asset was located. |
| Declared-only | `FontAwesome`, `footable`, `lg`, `slick`, and `swiper-icons` are declared in the supplied CSS evidence with zero visible usage. They remain non-text/icon implementation evidence and are not tokens. |
| License evidence | Noto’s official repository publishes its Sans license under SIL Open Font License 1.1. That license establishes the font asset’s terms, not a POYA distribution claim. |

### Captured hierarchy

| Role | Family boundary | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Pink public action | PT Serif first in computed stack | 16px | 400 | 24px | repeated `.btn` sample on all three supplied routes |
| Story/timeline body | Noto Sans TC first in computed stack | 16px | 400 | 24px | public long-form list/body samples |
| Public content sample | PT Serif first in computed stack | 18px | 400 | 27px | observed heading/text samples only; not a complete display scale |

Do not replace either loaded family with a system fallback and still call it a POYA typeface. The supplied evidence supports the named loaded public-web fonts above; it does not establish their use in the app, store signage, or every POYA digital surface.

## Layout

The supplied surfaces support a compact public-header pattern: a 45px search field and 45px action share one horizontal utility row, while the default action uses 8px vertical and 20px horizontal padding. Repeated captured spacing values cluster at 5px, 8px, 10px, 15px, 20px, and 25px. Those values describe observed local gaps/padding, not a complete responsive grid, store-navigation layout, or app checkout architecture.

## Elevation & Depth

The two promoted components are flat: both have `box-shadow: none`. The packet also records a white circular home carousel arrow with a 1px `#cfcfcf` border, but this is an unpromoted, route-local control and is not enough to publish a universal card or elevation token. Do not invent drop shadows, modal elevation, or a soft-card system from the retail imagery.

## Motion & Easing

No POYA motion values, duration scale, or easing curve were captured. For an implementation that needs motion, use its host product’s approved accessibility policy and reduce or remove nonessential movement for reduced-motion preferences. Do not label a generic easing curve, carousel transition, or focus animation as a POYA design-system fact from this record.

## Components

### Public actions

**Primary Pill Action**
- Background: `#dd006f`
- Text: `#ffffff`
- Border: 1px solid `#dd006f`
- Radius: 99px
- Padding: 8px 20px
- Height: 45px
- Font: 16px / 400 / 24px / PT Serif
- State: Default geometry is observed on home, brand-story, and timeline; no hover, focus, pressed, disabled, or error value was captured.
- Use: Public `.btn` action; selector `home::[data-omd-capture="9"]`.

### Public header utility

**Search Field**
- Background: `#fff1f5`
- Text: `#5e4d48`
- Border: 0px `#5e4d48`
- Radius: 99px
- Padding: 0px 40px 0px 25px
- Height: 45px
- Font: 16px / 400 / 24px / PT Serif
- State: Default geometry is observed on home, brand-story, and timeline; no hover, focus, pressed, disabled, or error value was captured.
- Use: Shared public-header `.searchInput`; selector `home::[data-omd-capture="7"]`.

### Scope boundary

The evidence packet has `interactionCount: 0` and `observedStates: 0`. No menu expansion, carousel transition, dialog, toast, tab state, form validation, error, disabled, or authenticated shopping state is added here. The two measured default components remain canonical because their selector/surface provenance is present and their geometry is static evidence.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.poya.com.tw/ ; https://www.poya.com.tw/about/60/ ; https://www.poya.com.tw/about/61/ ; https://www.poya.com.tw/en/investor/43/4564523/
**Tier 2 sources:** https://getdesign.md/poya (attempted; no accessible POYA record returned) ; https://styles.refero.design/?q=poya (attempted; no accessible POYA result returned)
**Conflicts unresolved:** none

### States

| Category | Guidance | Evidence boundary |
|---|---|---|
| Empty search | Explain that no matching public result is shown and retain the search term. | No POYA empty result was supplied. |
| Empty collection | State that the collection currently has no public items. | No POYA collection-empty state was supplied. |
| Loading page | Keep the header geometry stable while public content loads. | Illustrative implementation guidance; no POYA loader was captured. |
| Loading search | Preserve the 45px field geometry; do not fabricate a branded spinner. | Field geometry is observed; loading treatment is not. |
| Error network | Give a plain retry action and preserve entered text when safe. | No POYA error copy/state was supplied. |
| Error unavailable service | Say which service is unavailable without implying account or payment status. | No POYA service-error state was supplied. |
| Error validation | Pair the message with an input label and actionable correction. | No POYA validation state was supplied. |
| Success search | Announce updated results in an accessible status region. | No POYA success state was supplied. |
| Success member action | Confirm only an action that the underlying product flow can verify. | No POYA member-success state was supplied. |
| Skeleton header | Reserve the measured search and action footprints without simulating interaction states. | Geometry is observed; skeleton styling is not. |
| Skeleton content | Use neutral placeholders rather than campaign colors. | Illustrative implementation guidance. |
| Disabled action | Keep the reason visible; do not derive a disabled color from the pink default. | No disabled evidence was captured. |

Live state probe, 2026-10-16 (`https://www.poya.com.tw/`), `primary-pill-action`: pressed — bg #ffffff, label #dd006f; focus — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do

- Use `#dd006f` for the specific public pill-action context documented above, with white text and 99px rounding.
- Keep the pale `#fff1f5` search field distinct from the white page canvas and pair it with `#5e4d48` utility text.
- Preserve the difference between warm `#231815` content emphasis and plain black values that also occur in the capture.
- Use PT Serif and Noto Sans TC only within their supplied public-web evidence boundaries.

### Don't

- Don't treat a campaign color, own-brand graphic, store interior, or investor-page styling as a public-site token without selector-backed evidence.
- Don't fabricate hover, focus, pressed, disabled, error, menu, dialog, toast, or checkout behavior from this zero-interaction packet.
- Don't replace a loaded named family with a fallback and label the result as POYA typography.
- Don't generalize a 99px search/action shape into every input, card, or list item.

## Voice & Tone

POYA’s public language is inviting, practical, and lifestyle-aware. It pairs the company’s stated emphasis on beauty, trendiness, and enrichment with direct shopping/service prompts rather than technical product language.

| Do | Don't |
|---|---|
| Invite discovery in concise, everyday language. | Inflate routine retail actions into luxury or clinical claims. |
| Connect beauty and daily living without treating them as separate audiences. | Assume a single gender, age, or lifestyle. |
| Make service changes concrete: app, payment, store, and pickup. | Claim convenience or rewards that a given flow has not verified. |

Voice samples from POYA-owned public copy:

- “發現精彩日常” — POYA Original line on the current public home.
- “Beauty, Trendy, and Enrichment” — corporate-profile core spirits.
- “A more preferred Poya by the customers” — corporate-profile service aspiration.

## Governance

### Implementation Notes

Start from the measured public header rather than from a generic beauty-retail kit: white canvas, warm dark text, one pink pill action, and a separate blush search surface. Use 45px as the documented component height for the two selector-backed controls. The supplied packet is not an accessibility audit; contrast, keyboard behavior, input labels, localization, and error treatment need product-specific verification before implementation.

### Source & Verification Notes

This reference is a public-web record captured on 2026-07-13. The canonical token graph contains only supplied computed-style evidence from the POYA home, brand-story, and timeline routes. First-party history and corporate material are used for context only. The raw measurements, font status, Tier 2 attempt log, confidence notes, and conflict matrix are retained in `.verification.md` and `_research.md`.
