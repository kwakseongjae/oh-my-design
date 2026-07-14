---
id: udn
name: 聯合新聞網
country: TW
category: consumer-tech
homepage: "https://udn.com/news/index"
primary_color: "#2f76aa"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=udn.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product-surface, url: "https://udn.com/news/index", inspected: "2026-07-13" }
    - { id: politics, kind: product-surface, url: "https://udn.com/news/cate/2/6638", inspected: "2026-07-13" }
    - { id: finance, kind: product-surface, url: "https://udn.com/news/cate/2/6649", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://udn.com/news/index", captured: "2026-07-13" }
    - { id: politics-live, kind: product-surface, url: "https://udn.com/news/cate/2/6638", captured: "2026-07-13" }
    - { id: finance-live, kind: product-surface, url: "https://udn.com/news/cate/2/6649", captured: "2026-07-13" }
    - { id: group-history, kind: official-doc, url: "https://www.udngroup.com/", captured: "2026-07-13" }
    - { id: group-journalism, kind: official-doc, url: "https://www.udngroup.com/journalism", captured: "2026-07-13" }
    - { id: mobile-product, kind: official-doc, url: "https://mobile.udn.com/re/udnnews.shtml", captured: "2026-07-13" }
    - { id: noto-license, kind: license, url: "https://notofonts.github.io/noto-docs/website/use/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home_live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home_live
    "tokens.colors.muted": *home_live
    "tokens.colors.primary": *home_live
    "tokens.colors.action-muted": &politics_live { surface_id: politics, source_id: politics-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.accent": *home_live
    "tokens.typography.family.ui": *home_live
    "tokens.typography.feature-headline.size": *home_live
    "tokens.typography.feature-headline.weight": *home_live
    "tokens.typography.feature-headline.lineHeight": *home_live
    "tokens.typography.feature-headline.tracking": *home_live
    "tokens.typography.feature-headline.use": *home_live
    "tokens.typography.body.size": *home_live
    "tokens.typography.body.weight": *home_live
    "tokens.typography.body.lineHeight": *home_live
    "tokens.typography.body.tracking": *home_live
    "tokens.typography.body.use": *home_live
    "tokens.typography.control.size": *politics_live
    "tokens.typography.control.weight": *politics_live
    "tokens.typography.control.lineHeight": *politics_live
    "tokens.typography.control.use": *politics_live
    "tokens.spacing.xs": *home_live
    "tokens.spacing.sm": *home_live
    "tokens.spacing.md": *home_live
    "tokens.spacing.lg": *politics_live
    "tokens.rounded.none": *home_live
    "tokens.rounded.control": *home_live
    "tokens.shadow.none": *home_live
    "tokens.components.load-more-button.type": *politics_live
    "tokens.components.load-more-button.bg": *politics_live
    "tokens.components.load-more-button.fg": *politics_live
    "tokens.components.load-more-button.radius": *politics_live
    "tokens.components.load-more-button.padding": *politics_live
    "tokens.components.load-more-button.height": *politics_live
    "tokens.components.load-more-button.font": *politics_live
    "tokens.components.load-more-button.states": *politics_live
    "tokens.components.load-more-button.use": *politics_live
    "tokens.components.newsletter-email-input.type": *home_live
    "tokens.components.newsletter-email-input.bg": *home_live
    "tokens.components.newsletter-email-input.fg": *home_live
    "tokens.components.newsletter-email-input.radius": *home_live
    "tokens.components.newsletter-email-input.padding": *home_live
    "tokens.components.newsletter-email-input.height": *home_live
    "tokens.components.newsletter-email-input.font": *home_live
    "tokens.components.newsletter-email-input.states": *home_live
    "tokens.components.newsletter-email-input.use": *home_live
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    canvas: "#fafafa"
    foreground: "#000000"
    muted: "#777777"
    primary: "#2f76aa"
    action-muted: "#c7c7c7"
    accent: "#ee5103"
  typography:
    family: { ui: "Noto Sans TC" }
    feature-headline: { size: 32, weight: 500, lineHeight: "48px", tracking: "1px", use: "Observed white home h2 on editorial feature blocks; not a universal display scale." }
    body: { size: 16, weight: 300, lineHeight: "18.4px", tracking: "1px", use: "Observed home body baseline only." }
    control: { size: 15, weight: 400, lineHeight: "18.75px", use: "Observed real load-more button on the politics and finance category surfaces." }
  spacing: { xs: 2, sm: 5, md: 8, lg: 10 }
  rounded: { none: 0, control: 3 }
  shadow: { none: "none" }
  components:
    load-more-button: { type: button, bg: "#c7c7c7", fg: "#ffffff", radius: "0px 0px 3px 3px", padding: "6px 40px", height: "31px", font: "15px / 400 / 18.75px / Noto Sans TC", states: "Observed default only; no hover, focus, pressed, or disabled value was captured.", use: "Real button at politics selector surface-2::[data-omd-capture=90], repeated on the finance category surface." }
    newsletter-email-input: { type: input, bg: "#ffffff", fg: "#000000", radius: "3px 0px 0px 3px", padding: "8px 10px", height: "31px", font: "13px / 400 / 14.95px / Noto Sans TC", states: "Default geometry is observed; form-error interaction targets were captured, but the packet records no distinct error-style value. No hover, focus, pressed, or disabled value was captured.", use: "Email input at home selector home::[data-omd-capture=331], also present on the two category surfaces." }
  components_harvested: true
---

# Design System Inspiration of 聯合新聞網

## 1. Visual Theme & Atmosphere

聯合新聞網 (udn) is United Daily News Group’s public platform for immediate news and diverse editorial content. The group says udn launched in 1999, connected its original reporting operation, and brought 24-hour news to a digital audience. Its public news pages distinguish themselves through dense but scannable sections, short navigation links, and an editorial rhythm made from an off-white canvas, black text, restrained gray, compact blue controls, and occasional orange section emphasis. The supplied evidence is deliberately bounded to a home page and two category pages, not an undisclosed all-product design system. The group’s documented move from paper-first to digital-first, plus its 2020 subscription-economy initiative, explains a continuing shift toward content and reader services; it does not establish unobserved app, personalized, or paid-reading interface patterns. [聯合報系](https://www.udngroup.com/) · [新聞媒體](https://www.udngroup.com/journalism)

**Key Characteristics:**

- `#fafafa` public-page canvas with `#000000` foreground text
- Loaded Noto Sans TC across the three captured public news surfaces
- `#2f76aa` measured on compact blue category controls; `#ee5103` on a home tab treatment
- Flat, 0–3px-radius public controls with no measured elevation
- Editorial/news-page evidence only; product, corporate, mobile-app, and subscription-flow claims stay separate

## 2. Color Palette & Roles

- **Canvas — `#fafafa`:** home body background in the supplied packet.
- **Foreground — `#000000`:** repeated public text and border value on all three captured routes.
- **Muted — `#777777`:** repeated secondary public text/border value on all three routes.
- **Primary — `#2f76aa`:** measured background of compact blue public category controls; it is not asserted as a universal brand or CTA value.
- **Action muted — `#c7c7c7`:** measured load-more button fill on the two category pages.
- **Accent — `#ee5103`:** measured home tab-link text value; it is not promoted to a general alert or status color.

No raw packet value establishes semantic success, warning, error, subscription, paywall, or authenticated-account colors. Corporate identity prose is kept separate from these public-surface CSS values.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No first-party statement inspected in this CREATE pass names a proprietary udn product typeface. |
| Live computed surface-use | **Noto Sans TC** is loaded/high confidence with 1,279 visible uses across body, headings, controls, inputs, and tabs; the supplied packet records 105 Google Fonts source URLs. It is the verified public-web UI-family token. |
| Official distributed brand asset | None established for a udn-specific typeface in the inspected material. |
| Declared-only | `fontello` has `@font-face` declarations and six udn-hosted source URLs, but zero visible usage in the packet; it is not a text-family token. |
| System / unresolved | `helvetica` occurs as a system stack on 21 text uses. It is not substituted for or presented as a udn brand font. Noto’s official documentation describes its Open Font License boundary. [Noto documentation](https://notofonts.github.io/noto-docs/website/use/) |

| Role | Size | Weight | Line height | Tracking | Evidence boundary |
|---|---:|---:|---:|---:|---|
| Feature headline | 32px | 500 | 48px | 1px | White `h2` samples on home feature blocks only |
| Body baseline | 16px | 300 | 18.4px | 1px | Home `body` sample only |
| Category load-more control | 15px | 400 | 18.75px | — | Real category-page button only |

The live Noto Sans TC family may be used only where it can load; a system fallback must not be labeled Noto Sans TC. No broader editorial type scale is inferred from aggregates.

## 4. Component Stylings

### Category-page load-more control

**Observed default**
- Background: `#c7c7c7`
- Text: `#ffffff`
- Radius: `0px 0px 3px 3px`
- Padding: `6px 40px`
- Height: `31px`
- Font: `15px / 400 / 18.75px / Noto Sans TC`
- Use: Real `button` at `surface-2::[data-omd-capture="90"]`, class `btn-more--news`, repeated on the finance category surface.

### Newsletter email input

**Observed default**
- Background: `#ffffff`
- Text: `#000000`
- Radius: `3px 0px 0px 3px`
- Padding: `8px 10px`
- Height: `31px`
- Font: `13px / 400 / 14.95px / Noto Sans TC`
- Use: Email `input` at `home::[data-omd-capture="331"]`, also present on the two category surfaces.

The packet contains three `form-error` interaction captures. Their targets preserve the measured input geometry above and do not expose a distinct error color, border, or other style value. No hover, focus, pressed, disabled, selected, or success state is specified. Observed anchors and rows remain raw evidence rather than being recast as buttons.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://udn.com/news/index; https://udn.com/news/cate/2/6638; https://udn.com/news/cate/2/6649; https://www.udngroup.com/; https://www.udngroup.com/journalism; https://mobile.udn.com/re/udnnews.shtml; https://notofonts.github.io/noto-docs/website/use/
**Tier 2 sources:** https://getdesign.md/udn (attempted; no usable record returned); https://styles.refero.design/?q=udn (attempted; no usable record returned)
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied evidence is a 1440×900 desktop capture of a long, multi-module public news page and two category pages. Measured spacing clusters include 2, 5, 8, and 10px; those values are preserved as observed compact-control/layout rhythm, not a universal page grid. Category controls use 6px 40px or compact 5–10px padding, while the page body has no measured mobile or paywall layout rule. Responsive breakpoints, reading-column width, sticky behavior, and authenticated layouts are absent.

## 6. Depth & Elevation

The promoted body, button, and input samples all report `box-shadow: none`. No selector-backed card, sheet, dialog, floating panel, or elevation scale is available in the packet, so depth tokens beyond `none` are omitted.

## 7. Do's and Don'ts

### Do

- Use Noto Sans TC only when the verified webfont can be loaded.
- Keep the blue category control, muted load-more fill, and orange tab treatment in their observed public-news contexts.
- Preserve the low-radius, no-shadow geometry where the matching selector-backed public component is appropriate.
- Distinguish news-page evidence from corporate history, mobile-app messaging, and unknown subscriber flows.

### Don't

- Do not treat `#2f76aa` as a universal udn brand, subscription, or confirmation color.
- Do not turn a captured anchor or editorial row into a button component without button semantics.
- Do not invent a red error treatment from the presence of a form-error interaction.
- Do not substitute Helvetica or a system stack and call it Noto Sans TC.

## 8. Responsive Behavior

Only the 1440×900 collector viewport is supplied. No breakpoint, mobile grid, touch target, safe-area, content truncation, or responsive navigation transition is observed. The official mobile-product page is narrative/product context, not raw responsive CSS evidence for these tokens.

## 9. Agent Prompt Guide

For a public Taiwanese news-index or category-page concept, use an off-white canvas, black editorial text, Noto Sans TC only when available, restrained 0–3px corners, and no elevation. Use the measured blue, muted-gray, and orange values only for their documented public-news roles. Do not generate a subscriber dashboard, personal-feed flow, article paywall, mobile-app navigation, toast, dialog, or semantic state library from this reference.

## 10. Voice & Tone

The group’s official language is public-interest oriented: its mission is to make Taiwan better, and its listed values are integrity, justice, quality, and innovation. The official mobile product positions udn News as fast, broad, deep, and personalized. Together these support a precise, reader-serving public voice rather than promotional superlatives. [Group mission and values](https://www.udngroup.com/) · [udn News mobile product](https://mobile.udn.com/re/udnnews.shtml)

| Context | Observed direction |
|---|---|
| News navigation | Short category labels and scannable hierarchy |
| Product positioning | State breadth or speed plainly, then explain the reader benefit |
| Public-interest communication | Prefer accountable, evidence-led language over decorative claims |

Voice examples below are grounded paraphrases, not a specification for unseen editorial or notification copy:

- “Latest coverage, organized by the topic you need now.”
- “Read the context before forming a view.”
- “Save this channel to return to reporting that matters to you.”

## 11. Brand Narrative

聯合報 was founded in 1951; the group says 聯合新聞網 launched in 1999 and connected the group’s original editorial content to 24-hour digital news. The organisation frames its mission as making Taiwan better and describes its journalism as present wherever audiences read: paper, computer, phone, and tablet. [聯合報系](https://www.udngroup.com/) · [新聞媒體](https://www.udngroup.com/journalism)

Its current evolution is explicitly digital rather than merely a visual refresh. The group documents a shift from paper-first to digital-first, and says it began a subscription economy in 2020 to offer more precise, deeper, advertising-free reading experiences. Its mobile product describes always-on news, depth, diversity, social connection, and personal channel ordering. These first-party claims explain the platform’s service direction; they do not supply unobserved UI tokens or reader-data flows. [新聞媒體](https://www.udngroup.com/journalism) · [udn News mobile product](https://mobile.udn.com/re/udnnews.shtml)

## 12. Principles

1. **Serve the public through accountable journalism.** The group states a mission to make Taiwan better and values integrity, justice, quality, and innovation. *UI implication:* make source, section, and reading context easy to identify; do not use visual urgency to overstate a claim.
2. **Meet readers across media and moments.** The group describes news delivery across paper, computers, phones, and tablets. *UI implication:* treat the captured desktop news page as one source domain, not a substitute for unknown mobile behavior.
3. **Make depth discoverable.** The journalism page describes digital storytelling through graphics, animation, video, data, maps, and podcasts. *UI implication:* preserve clear editorial hierarchy before adding media treatments; do not infer a generic card system.
4. **Evolve around reader service.** The documented digital transformation includes subscriptions, user operation, and more precise services. *UI implication:* distinguish public navigation from unobserved personalization and payment decisions.

## 13. Personas

**Public-source audience cues, not research personas:** readers seeking 24-hour updates, people looking for deeper explanatory or multimedia reporting, and readers who want to save or order preferred channels are all described by the official mobile-product material. [udn News mobile product](https://mobile.udn.com/re/udnnews.shtml)

The public category pages also indicate an audience navigating broad news sections. No demographic, behavioral, or subscription persona is invented because the supplied evidence does not establish one.

## 14. States

The raw artifact records three `form-error` interactions across the public routes. Their captured input targets retain the observed default geometry and expose no distinct error color, border, text, message, loading, success, disabled, skeleton, toast, or empty-state value. Those unobserved state specifications are absent rather than synthesized.

## 15. Motion & Easing

No transition duration, easing curve, reduced-motion behavior, animation, or state transition was captured. Motion tokens are intentionally absent.
