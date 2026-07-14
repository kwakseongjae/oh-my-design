---
id: makinarocks
name: MakinaRocks
display_name_kr: 마키나락스
country: KR
category: ai
homepage: "https://www.makinarocks.ai"
primary_color: "#2b2b3b"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=makinarocks.ai&sz=128"
verified: "2026-07-13"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.makinarocks.ai/", inspected: "2026-07-13" }
    - { id: about, kind: corporate-marketing, url: "https://www.makinarocks.ai/en/about/", inspected: "2026-07-13" }
    - { id: blog, kind: editorial-marketing, url: "https://www.makinarocks.ai/en/blog/", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://www.makinarocks.ai/", captured: "2026-07-13" }
    - { id: about-capture, kind: product-surface, url: "https://www.makinarocks.ai/en/about/", captured: "2026-07-13" }
    - { id: blog-capture, kind: product-surface, url: "https://www.makinarocks.ai/en/blog/", captured: "2026-07-13" }
    - { id: rebrand-context, kind: brand-asset, url: "https://www.makinarocks.ai/en/blog/makinarocks-rebranding-meet-our-new-logo/", captured: "2026-07-13" }
    - { id: kmr-apparat-assets, kind: brand-asset, url: "https://www.makinarocks.ai/fonts/kmr-apparat-regular.woff2", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.ink": *home
    "tokens.colors.slate": *home
    "tokens.colors.muted": *home
    "tokens.typography.family.display": *home
    "tokens.typography.family.body": *home
    "tokens.typography.display-hero.size": *home
    "tokens.typography.display-hero.weight": *home
    "tokens.typography.display-hero.lineHeight": *home
    "tokens.typography.display-hero.tracking": *home
    "tokens.typography.display-hero.use": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.tracking": *home
    "tokens.typography.body.use": *home
    "tokens.spacing.nav-control": *home
    "tokens.rounded.nav-control": *home
    "tokens.rounded.disabled-control": *home
    "tokens.components.disabled-home-control.type": *home
    "tokens.components.disabled-home-control.bg": *home
    "tokens.components.disabled-home-control.fg": *home
    "tokens.components.disabled-home-control.radius": *home
    "tokens.components.disabled-home-control.font": *home
    "tokens.components.disabled-home-control.states": *home
    "tokens.components.disabled-home-control.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    primary: "#2b2b3b"
    canvas: "#ffffff"
    ink: "#000000"
    slate: "#5a5a72"
    muted: "#8d8da5"
  typography:
    family: { display: "KmrApparat", body: "Pretendard" }
    display-hero: { size: 64, weight: 700, lineHeight: 83.2, tracking: -1.6, use: "Public-home marketing hero" }
    body: { size: 16, weight: 400, lineHeight: 25.6, tracking: -0.16, use: "Public marketing and corporate reading text" }
  spacing: { nav-control: 16 }
  rounded: { nav-control: 0, disabled-control: 28 }
  components:
    disabled-home-control: { type: button, bg: "rgba(196, 196, 212, 0.5)", fg: "#000000", radius: "28px", font: "13.3333px / 400 / Pretendard", states: "disabled computed snapshot only", use: "Disabled public-home control at home::[data-omd-capture=\"19\"]" }
---

# Design System Inspiration of MakinaRocks

## 1. Visual Theme & Atmosphere

MakinaRocks is a Korean Physical AI company building specialized AI and an enterprise AI OS for industrial operations, from manufacturing to defense. Its current public web language is a restrained, type-led marketing system: a white field, black reading text, dark indigo `#2b2b3b` titles, and a measured muted-text ladder. The supplied evidence covers the public homepage, corporate About page, and editorial blog—not an authenticated product application or documentation chrome—so this reference records those marketing surfaces without treating them as an application-wide design system.

The public design is also in transition. In May 2026, MakinaRocks introduced a new symbol and described a fluorescent yellow-green signature against a deep-black foundation; the company says the identity is being applied across touchpoints, including product experiences. That green is visible as a brand-asset expression in first-party context, but its exact UI value was not captured in computed styles, so it is intentionally not promoted to a color token. The current captured pages retain the cool indigo, black, white, and muted-grey marketing vocabulary below.

- **Source-domain boundary:** homepage, About, and Blog are public marketing/corporate/editorial surfaces; no live product surface or documentation chrome was supplied.
- **Observed contrast:** white `#ffffff` and ink `#000000` are the high-frequency public-web base; dark indigo `#2b2b3b` is observed as title/brand-weight text.
- **Type-led hierarchy:** loaded KmrApparat carries public display and navigation moments; loaded Pretendard carries broad reading and control use.
- **Rebrand expression:** fluorescent yellow-green is first-party brand context, not a captured machine token; do not substitute a guessed hex value.

## 2. Color Palette & Roles

### Observed public-web roles

- **Dark indigo** (`#2b2b3b`): high-confidence computed text/border color on the homepage and blog. It is a public marketing title/brand-weight color, not evidence for authenticated-product semantics.
- **Canvas** (`#ffffff`): high-confidence public-page background and high-contrast text/border value across all captured routes.
- **Ink** (`#000000`): high-confidence primary reading, border, and public navigation-control text.
- **Slate** (`#5a5a72`): high-confidence secondary public copy on the captured routes.
- **Muted** (`#8d8da5`): high-confidence lower-emphasis public text on all three captured routes.

### Brand asset outside the token sheet

MakinaRocks’ 2026 rebrand post identifies fluorescent yellow-green as the new signature color and describes it against a deep-black foundation. The supplied raw collector did not capture an exact computed green value on a reusable element. Preserve the qualitative brand context; do not manufacture a token from the logo asset or use the old indigo as a substitute for it.

## 3. Typography Rules

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
| Disabled public-home control | Pretendard | 13.3333px | 400 | normal | normal | `home::[data-omd-capture="19"]` |

## 4. Component Stylings

### Public header navigation control

**Default — observed on public-home marketing**
- Text: `#000000`
- Background: transparent
- Border: 0px
- Radius: 0px
- Padding: 16px
- Font: 16px / 400 / KmrApparat
- Use: `home::[data-omd-capture="1"]`, public-home header navigation control

### Disabled public-home control

**Disabled — observed computed snapshot**
- Background: `rgba(196, 196, 212, 0.5)`
- Text: `#000000`
- Border: 0px
- Radius: 28px
- Font: 13.3333px / 400 / Pretendard
- Disabled: captured static disabled state only
- Use: `home::[data-omd-capture="19"]`, public-home control

The collector reports `interactionCount: 0` and no interaction expansions. It does not establish hover, pressed, focus, menu, dialog, carousel, form, or transition behavior. Other older card, CTA, mega-menu, category-label, and carousel variants are not retained because their selector/surface/state provenance is absent from the supplied 2026-07-13 bundle.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.makinarocks.ai/; https://www.makinarocks.ai/en/about/; https://www.makinarocks.ai/en/blog/; https://www.makinarocks.ai/en/blog/makinarocks-rebranding-meet-our-new-logo/; https://github.com/orioncactus/pretendard/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/makinarocks (built-in web open failed; no matching result in site search); https://styles.refero.design/?q=makinarocks (built-in web open failed; no matching result in site search)
**Conflicts unresolved:** none

## 5. Layout Principles

### Evidence boundary

The supplied routes show public marketing, corporate, and editorial layouts only. They support the measured 16px public-navigation padding and public-web typography above; they do not support a product grid, app spacing scale, responsive breakpoint system, content-card geometry, or visual behavior outside those routes.

### Rebrand context

The official rebrand article explains the new symbol as a visual expression of the physical world and an expanding AI core, and says the broader design system was rebuilt around the identity. That is useful context for image direction and brand narrative, but it supplies no exact layout, spacing, or UI-component token.

## 6. Depth & Elevation

No reusable shadow or elevation token is promoted. The supplied collector output has no selector-provenanced component shadow claim in the retained component set. Treat flatness, depth, and card elevation as unresolved for reuse rather than carrying forward an older inferred shadow ladder.

## 7. Do's and Don'ts

### Do

- Keep public-web color claims scoped to the captured marketing, corporate, and editorial surfaces.
- Use KmrApparat only where a target project has a lawful source; otherwise label it unavailable rather than substituting a system font.
- Use Pretendard only with its upstream SIL OFL 1.1 boundary understood.
- Preserve fluorescent yellow-green as qualitative rebrand context until an exact, selector-provenanced public UI value is observed.
- Keep the two retained controls tied to their precise `home` selectors and captured state boundary.

### Don't

- Don't treat the public homepage as evidence for a logged-in AI OS or documentation chrome.
- Don't turn the 2026 rebrand’s logo/asset color into a guessed hex token.
- Don't reuse old carousel, card, pill CTA, mega-menu, hover, pressed, or focus variants without present selector/surface/state evidence.
- Don't call `Pretendard JP` a live family: this bundle records it as declared-only with zero visible use.
- Don't advertise KmrApparat as a redistributable public font; no downstream licence was found.

## 8. Responsive Behavior

No responsive viewport comparison was supplied. The collector used a 1440×900 viewport for all three routes; mobile breakpoints, stacking behavior, touch-target policy, and image treatment remain unresolved.

## 9. Agent Prompt Guide

### Safe public-web reference

- Use white `#ffffff`, ink `#000000`, dark indigo `#2b2b3b`, slate `#5a5a72`, and muted `#8d8da5` only as public-web visual evidence.
- Use a 64px / 700 / 83.2px / -1.6px KmrApparat hero only when the target can legally load that family; otherwise omit that specimen rather than use a substitute.
- Use Pretendard 16px / 400 / 25.6px / -0.16px for the captured public-web reading example when appropriate.
- The only retained components are the selector-provenanced public-home header control and a static disabled public-home control. Do not synthesize a component library from them.

## 10. Voice & Tone

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

## 11. Brand Narrative

MakinaRocks positions itself as a Physical AI company whose specialized AI and enterprise AI OS address complex industrial operations. Its official About page says it builds AI for harsh, unpredictable environments ranging from factories to battlefields, and lists manufacturing, defense, energy, logistics, and related industrial contexts. The same page states the company was founded in 2017, has a research-and-development workforce share above 70%, and reports more than 6,000 models applied in industrial fields; those are company-stated figures, not independently audited metrics.

The May 2026 rebrand gives the visual story a new center: the company introduced a symbol intended to represent the real world as a dense, grounded outer form and the AI core as energy breaking outward. It also says its fluorescent yellow-green signature and black foundation embody stability/precision alongside energy/acceleration, and that the new system is being applied across business, digital, event, and product touchpoints. This reference uses that article as brand context while keeping exact UI tokens restricted to the supplied computed-style evidence.

## 12. Principles

1. **Physical environments are the reference point.** The company explicitly frames its work around AI operating in harsh industrial conditions. *UI implication:* prefer concrete, operational language over speculative consumer-AI metaphors.
2. **Specialization precedes generalization.** MakinaRocks describes industry-specialized AI and an enterprise AI OS, rather than a generic assistant. *UI implication:* distinguish industry context and product claims; do not invent universal product states from marketing pages.
3. **The rebrand pairs stability with energy.** The official identity narrative describes deep black/precision alongside fluorescent yellow-green/acceleration. *UI implication:* retain that as a qualitative image and brand direction until an exact public UI token is observed.

## 13. Personas

The first-party sources identify industrial contexts rather than named end-user personas. Treat the following as stakeholder groups, not fictional individuals or validated usability personas:

- **Manufacturing and industrial operations organizations:** explicitly named on the official homepage and About page as contexts for specialized AI.
- **Defense and public-infrastructure organizations:** named in the rebrand and About narratives as environments where MakinaRocks operates or intends to operate.
- **Enterprise AI teams using Runway:** the homepage describes Runway as an enterprise AI operating system; no authenticated workflow, role permissions, or individual task evidence was supplied.

## 14. States

No reusable product-state guidance is established. The bundle contains one static `disabled` computed snapshot at `home::[data-omd-capture="19"]`, but `interactions: []` and `interactionCount: 0`. Empty, loading, error, success, form-validation, focus, pressed, and motion states are unresolved rather than inferred from marketing copy.

## 15. Motion & Easing

No duration, easing, or transition token is captured. The official rebrand’s language of expansion and momentum is narrative context only; it is not evidence for interface animation. Respect reduced-motion requirements in any implementation, but do not attribute a motion system to MakinaRocks without a selector-provenanced observation.
