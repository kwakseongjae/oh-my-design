# DJI Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

DJI (大疆创新) is recorded in the source as the company that turned the consumer drone into a category — a derived editorial implementation inference from the source reconstruction resting on the widely documented public history restated below, not DJI-authored or a separately published UI specification. Its catalog homepage is `https://www.dji.com`. This contract covers the dji.com web surfaces the source reconstruction records — the marketing and product pages, and the store — as read live on 2026-05-19. Token extraction is `prose-derived`. The source states that dji.com exposes no public CSS token layer the way a forum or a fintech does, and records that the values below combine the publicly documented brand-guide palette with observable live-site usage. They are a reconstruction, not a computed-style harvest.

Value authority, at the smallest boundary. `#000000` and `#ffffff` are the source's directly stated surface colors. Every other hex here — Titan, silver, the sky-blue accent, the surface / hairline / dark-panel neutrals, and the success / error / warning trio — is recorded in the source as a **best-fit approximation** of observed usage and is flagged `approximate` inline in Foundations Semantic color. The brand guide states Titan and the sky-blue accent **by name** but does not publish their exact hex openly. The bound travels with the value: wherever a component block, a state row, or a type-scale row later repeats one of these hexes bare or with `≈` alone, it is that same approximation and not a separately verified DJI value. Do not present these specific hexes to the brand owner as verbatim DJI tokens; present them as observed approximations pending the official guide.

Recorded in the source from Tier 2 brand-guide material (Behance "DJI – Design Style Guide"; Scribd "DJI Toolbox BASICS"), not from a first-party DJI publication read in this pass: DJI maintains a 500-page global Brand & Product Communication Design Style Guide, which names by NAME a primary color **Titan** (a deep near-black / charcoal), secondary white / black / silver, a single sky-blue accent, a custom DJI typeface (DJI-Demi, referenced in app font assets), and a proprietary grid called the **X-Factor** — a layout module derived from the height of the lowercase "i" in the DJI wordmark, with every margin, column gutter, and logo clearspace expressed in multiples of that single unit.

The following atmosphere and comparison readings are a derived editorial implementation inference from the source reconstruction; they are not DJI-authored or a separately published UI specification. The recorded surface is near-monochrome: hero sections are full-bleed product photography or cinematic flight footage on pure black (`#000000`), product detail pages sit on clean white (`#ffffff`), and the only chromatic intrusion is a restrained sky-blue accent reserved for links and a handful of interactive moments. The source reads that restraint as industrial-premium — closer to a high-end camera brand or an automotive flagship configurator than to a typical Chinese consumer-tech site. It records that there are no gradients-for-decoration, no rounded playful shapes, and no mascot. It reads the product as the only ornament. It reads the single-derived-unit logic as the same instinct Massimo Vignelli or the Braun / Dieter Rams school used, producing coherence that feels inevitable rather than designed, and it reads DJI's headline habit as declining to explain where a glance will do.

Public history recorded in the source as widely documented (the source states it was re-verified against no primary DJI source in this pass): DJI was founded in **2006 in Shenzhen** by **Frank Wang (汪滔)**, then a student at the Hong Kong University of Science and Technology, out of a dorm-room obsession with flight-control systems. Its first products were flight controllers — the mathematically demanding brains that keep a multirotor stable in the air — rather than finished drones. By the mid-2010s the Phantom line had defined what a consumer drone is in public imagination, and the company came to hold the dominant share of the global civilian drone market. The following origin-to-design reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification. The source treats that controls-engineering origin as the whole brand, reads the 500-page guide, the named Titan primary, the single accent and the X-Factor grid as systematizing rather than stylistic, and reads the black backgrounds, the absence of decoration, and the instrument-panel spec tables as a culture that cares more about what the machine does than about how the website feels. It contrasts DJI with consumer-tech brands that reach for warmth and personality, reading DJI as reaching for correctness instead, and summarizes the stance as refusing gradient-and-mascot playfulness, the warm illustration systems of lifestyle commerce, marketing language that outruns the spec sheet, and any color that competes with the product photography — while embracing monochrome restraint, photography as the only ornament, numbers as the argument, and a global bilingual voice in which Chinese and English are genuine peers. Those facts are not interface tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Browse DJI products across full-bleed product folds and the responsive store card grid.
- Read a product's technical specification table — flight time, transmission range, sensor size.
- Buy, pre-order, or configure a product through the primary purchase CTA and the cart.
<!-- design-md:claim-end -->

### Audience

The following audience-application reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification. No individual personas are promoted. The source marks its §13 entries as fictional archetypes informed by publicly described DJI customer segments — consumer creators, prosumer pilots, and enterprise / industrial users — rather than individual people. Those named archetypes are not Audience and are not primary tasks; use the segment framing only, and read observable work from the three primary tasks above.

### Distinctive traits

The following list restates source-stated reconstruction traits. Ranking them as what distinguishes DJI, and the trait characterizations (the product as the only ornament, the accent as a finite signal, precision-instrument rather than app-toy geometry, engineering credibility carried by photography and restraint), are a derived editorial implementation inference from the source reconstruction; they are not DJI-authored or a separately published UI specification.

- Monochrome-first palette: black (`#000000`) chrome, white (`#ffffff`) content, silver / gray neutrals, Titan charcoal as the named primary
- A single accent — sky blue — used sparingly for links and key interactive states, never decoratively
- X-Factor grid: every spacing and clearspace value is a multiple of the lowercase-"i" height in the DJI logo
- Full-bleed product photography and flight footage as the hero language
- Custom DJI display typeface (DJI-Demi) for wordmark / headlines; neutral sans plus Source Han Sans / PingFang SC for body and Simplified-Chinese running text
- Tight, terse, capability-led headlines — short evocative phrases over feature lists
- Sharp-to-modest corner radii; nothing playfully rounded
- Generous negative space; one message per fold; cinematic black backgrounds for product reveals
- No gradients-as-decoration, no mascot, no illustration system

### Principles

These six items and the capture-bound application list below are a derived editorial implementation inference from the source reconstruction; they are not DJI-authored or a separately published UI specification.

1. **The product is the only ornament.** Every surface exists to present the hardware — full-bleed photography and flight footage carry the page; the chrome stays out of the way. *UI implication:* No decorative graphics, no illustration system, no brand-colored fills behind content. If a fold needs visual interest, it needs a better product shot, not a gradient.
2. **Color is information, not mood.** The palette is black, white, silver, Titan, with one finite sky-blue accent; mood comes from photography. *UI implication:* Use the accent only for links and focus. Status colors appear only on functional surfaces such as checkout and forms. Never fill a hero with brand color.
3. **One derived unit, everywhere (X-Factor).** Spacing descends from a single base unit. *UI implication:* Pick a base spacing unit and express every margin, gutter, and clearspace as an integer multiple. Coherence comes from the system, not from per-screen judgment.
4. **The number is the argument.** DJI sells on measurable capability. *UI implication:* Spec tables are first-class, not afterthoughts. Set figures clearly, pair number with unit, divide rows with hairlines, and never dilute a spec row with adjectives.
5. **Restraint reads as authority.** Quiet design signals that the engineering does not need to shout. *UI implication:* Short headlines, flat chrome, generous negative space, sharp-to-modest radii. When in doubt, remove an element rather than add one.
6. **Chinese and English are peers.** Born in Shenzhen, sold worldwide. *UI implication:* Every font stack carries Source Han Sans / PingFang SC so CJK sits at the same optical weight as the Latin face; neither language's copy reads as a translation of the other.

Capture-bound application (source Do's; values are the recorded reconstruction):

- Keep the palette monochrome — black, white, silver, Titan.
- Reserve the sky-blue accent for links and key interactive states only.
- Let product photography and flight footage carry the page on full-bleed black folds.
- Derive spacing from a single unit — multiples of one base value across margins, gutters, and clearspace.
- Set headlines short and confident; put the detail in the spec table.
- Include Source Han Sans / PingFang SC in every font stack so Simplified Chinese renders at the same optical weight as Latin.

### Avoid

The following Don'ts copy source prohibitions. The causal and judgement wording inside them — that the photography supplies the color, that the accent is a finite signal whose job is not warnings or success, that one message belongs per viewport, that the brand is a precision instrument, that a DJI headline is a phrase, and that thin weights read as fragile against a ruggedness brand — is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification.

- Do not introduce decorative brand colors or gradients.
- Do not fill large surfaces with the accent blue, or use it for warnings / success — that is the neutral state palette's job.
- Do not crowd a fold with multiple competing CTAs or feature claims.
- Do not use playful or large corner radii; DJI corners are sharp-to-modest (4–12px).
- Do not write paragraph headlines or feature-bullet hero copy.
- Do not use thin / light weights for UI text.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Authority bound, restated here so this section stands alone: `#000000` and `#ffffff` are directly stated. Every other hex below is a source-recorded best-fit approximation of observed usage, flagged `approximate`; Titan and the sky-blue accent are named in the brand guide with their exact hex withheld from public release. Treat each approximate value as what it is — usable as the recorded observation, and never restated to the brand owner as a verified DJI token.

Brand:

- **Black / Chrome** (`#000000`): The dominant brand surface — global header and footer, hero backgrounds, cinematic product reveals. The source reads this as the brand's emotional ground; that reading is a derived editorial implementation inference from the source reconstruction and is not DJI-authored or a separately published UI specification.
- **Titan** (≈`#1c1c1e`, approximate): The named primary — a deep charcoal / near-black used for primary text on white, dark UI panels, and product-spec tables. Slightly warmer and softer than pure `#000000`. Named in the brand guide; exact hex withheld from public release.
- **Pure White** (`#ffffff`): Default content background on product and store pages; primary text on black.
- **Silver / Mid Gray** (≈`#86868b`–`#b0b0b5`, approximate): Secondary text, captions, spec labels, disabled states. The source calls this the "instrument readout" gray; that characterization is a derived editorial implementation inference from the source reconstruction and is not DJI-authored or a separately published UI specification.
- **Sky Blue Accent** (≈`#0a84ff`, approximate): The single accent — links, selected swatches, key interactive affordances. Used as a finite signal, never as a fill for large areas. Named "sky blue" in the brand guide; exact hex withheld from public release.

Neutrals (surface ladder):

- **Light Gray Surface** (≈`#f5f5f7`, approximate): Section dividers, alternating content bands, card backgrounds on white pages.
- **Border / Hairline** (≈`#d2d2d7`, approximate): Thin dividers, spec-table rules, input borders. The source records that DJI favors 1px hairlines over heavy borders. That reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification.
- **Dark Panel** (≈`#161617`, approximate): Cards and modules on black backgrounds — a hair lighter than the `#000000` ground for subtle separation.

State:

- **Success** (≈`#34c759`, approximate): Order confirmation, in-stock indicators.
- **Error / Sold-out** (≈`#ff3b30`, approximate): Form errors, out-of-stock, destructive confirmations.
- **Warning** (≈`#ff9f0a`, approximate): Low-stock, shipping caveats.

The following palette-philosophy reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification. The source's role note holds that the palette is deliberately almost colorless: color is information, not mood; the mood is supplied by the photography, and the chrome stays neutral so the product photography never competes with the interface. State colors are kept as their own role and are not merged into the accent.

### Spacing

Source YAML scale (unitless keys): `sm` 12, `base` 24, `lg` 28, `xl` 32, `section` 120. Source body values: button padding `12px 28px`; card padding `24px`; section vertical `80–120px` on full-fold product reveals; content max-width `~1440px` centered; spec-table rows hairline-divided with generous vertical air. Both writings are kept; they are not averaged.

### Shape

- YAML `rounded.sm`: 4 — the same figure the source records as the radius of the primary CTA, the secondary CTA, the input, and the status pill
- YAML `rounded.md`: 8 — the same figure the source records as the product-tile radius
- YAML `rounded.lg`: 12 — the same figure the source records as the spec-module radius
- YAML `rounded.full`: 9999 (unitless in the source YAML; written here without a `px` unit because the source states none). The source records no component using this key.

The source's YAML lists these four keys and its component blocks list per-component radii; pairing a key with the components that share its figure is a correspondence drawn here, not a binding the source states; that pairing is a derived editorial implementation inference from the source reconstruction and is not DJI-authored or a separately published UI specification.

The source records a sharp-to-modest 4–12px range and rules out playful radii; reading that range as precision-instrument rather than playful geometry is a derived editorial implementation inference from the source reconstruction and is not DJI-authored or a separately published UI specification. The following local-geometry reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification. The 4px control corner, 8px tile corner, and 12px module corner are the recorded geometry of those named components in this reconstruction, not a universal radius for every unlisted surface.

### Elevation

The source records chrome as predominantly flat, with depth carried by photography and by black / white surface contrast rather than by drop shadows; where elevation appears it is whisper-light. That depth reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification.

| Level | Value | Use |
|---|---|---|
| Flat | none | Default for buttons, spec modules, content blocks |
| Hover lift | `0 4px 16px rgba(0,0,0,0.08)` | Product tile on hover (light pages) |
| Floating | `0 8px 32px rgba(0,0,0,0.16)` | Dropdown mega-menu, modal, cart drawer |

Z-index, source-stated order:

1. Sticky black header above content
2. Mega-menu / cart drawer above page
3. Modal (region selector, media lightbox) above all chrome

Cinematic media lightboxes use a full black backdrop rather than a translucent scrim. Reading that choice as letting the product video take the whole screen is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle / select commits |
| `motion-fast` | 200ms | Hover, link, button feedback |
| `motion-standard` | 350ms | Dropdown / mega-menu, cart drawer, fade-reveals |
| `motion-slow` | 600ms | Hero media fade-in, scroll-triggered fold reveals, 360° product spins |

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | omitted (unattributed cubic-bezier; no DJI-published source for the curve) | Default two-way transitions |
| `ease-enter` | omitted (unattributed cubic-bezier; no DJI-published source for the curve) | Drawers, menus, reveals arriving |
| `ease-exit` | omitted (unattributed cubic-bezier; no DJI-published source for the curve) | Dismissals |

Signature motions (source-stated). The characterizations inside them — that the black ground stays while the product emerges from it, that fold reveals are sequential rather than simultaneous, that the spin carries no inertia overshoot, and that the drawer slide is the only confirmation — are a derived editorial implementation inference from the source reconstruction; they are not DJI-authored or a separately published UI specification.

1. **Hero media fade-in.** Product photography / footage fades from black over `motion-slow / ease-enter` as the fold enters the viewport. The black ground stays; the product emerges from it.
2. **Scroll-triggered fold reveal.** Headlines and spec modules translate up `~24px` and fade in over `motion-standard / ease-standard` as each fold scrolls into view. Sequential, not simultaneous.
3. **360° product spin.** On flagship pages the product rotates on scroll or drag with smooth, mechanical easing and no inertia overshoot.
4. **Cart drawer.** Slides in from the right over `motion-standard / ease-enter`; backdrop dims to a low-alpha black. The slide is the only confirmation.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all reveals collapse to immediate opacity-1, the 360° spin shows a static hero, and the cart drawer appears without slide. Fully functional, no kinetics.

The following motion-character and spring-stance readings are a derived editorial implementation inference from the source reconstruction; they are not DJI-authored or a separately published UI specification. The source reads DJI motion as slow, precise, and gravity-free — the motion equivalent of a stabilized aerial shot, where nothing snaps and nothing bounces. It forbids spring and overshoot on DJI surfaces on the ground that the brand's emotional register is precision and control, reasoning that a stabilized gimbal does not overshoot and neither should the UI, and it allows the slow parallax / 360° reveal as the one kinetic flourish because it mimics the mechanical motion of the hardware. Reading the 360° spin as turning a real object in your hands is the same editorial inference.

Do not promote an easing curve, an animation name, a transition property, or a duration beyond the table above until a later pass has recorded computed evidence of all five kinds **per component**: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or a single duration is not that gate. Any exact animation curve remains a local implementation default until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The evidence-class application readings in this table are a derived editorial implementation inference from the source reconstruction; they are not DJI-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The brand guide names a custom DJI typeface. The source records that name via Tier 2 summaries, and reads no first-party DJI type publication in this pass. |
| Declared brand face | YAML `typography.family` records `sans: "DJI"` and `mono: "DJI"`. Both keys are kept as recorded; the mono key is preserved rather than merged into the sans key. |
| Display face | DJI-Demi and family, referenced in app font assets per the Tier 2 brand-guide material — wordmark and large display headings. |
| Live computed surface-use | Token extraction is `prose-derived`. The dji.com read of 2026-05-19 records sans-serif typography; it records no computed font-family harvest and no public CSS token layer. |
| Fallback stack | Neutral Helvetica / Arial-class sans with Simplified-Chinese fallbacks. A fallback is a fallback here, never the brand face. |
| Official distributed asset | No DJI-distributed type family file is recorded in the source. |
| License | The source records no license terms for the DJI custom face or for the CJK fallback families. |

### Family

Source font stack, as recorded:

```
"DJI", "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Source Han Sans SC", "思源黑体", "Microsoft YaHei", sans-serif
```

- **Brand face:** the custom DJI face (DJI-Demi and family) carries the wordmark and large display headings.
- **Fallbacks:** running UI and body fall to a neutral Helvetica / Arial-class sans with first-class Simplified-Chinese fallbacks — `PingFang SC` on Apple platforms, `Source Han Sans SC` / `思源黑体` cross-platform, `Microsoft YaHei` on Windows.
- Do not present Helvetica, Arial, PingFang SC, Source Han Sans SC, Microsoft YaHei, or any system fallback as the DJI brand face. The custom face keeps its metadata here even though the source records no distributed specimen file for it.

### Weights

- **DJI-Demi / Bold (700-class):** display headlines, product names, capability statements.
- **Medium (500):** sub-heads, nav, button labels, spec-row labels.
- **Regular (400):** body copy, descriptions, captions.

The source states that DJI almost never uses light or thin weights for UI text. The following reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification: the source explains that habit by reading thin weights as fragile against a brand built on ruggedness and precision, and it reads the display tier as the tier that does the shouting.

### Type roles

The source records exact YAML sizes and, separately, observed body ranges across marketing and store surfaces, and a third set of figures inside the deleted §9 prompt block. All three writings are kept as separate recorded figures; they are not averaged. The source records no line-height and no numeric tracking value for any role; none is invented here. The one hex the table repeats, `#86868b`, is the approximate silver bounded in Foundations Semantic color, not a separately verified figure.

| Role | YAML size / weight | Observed body range / weight | §9 prompt figure | Use |
|---|---|---|---|---|
| Hero display | 64 / 700 | `56–80px` / 700 | `64px` white, weight 700 | Product reveal headlines on black; tight tracking |
| H2 section | 42 / 700 | `36–48px` / 700 | — | Capability section heads |
| H3 module / product name | 26 / 700 | `24–28px` / 500–700 | `24px` weight 700 Titan | Feature module titles; store-tile product name |
| Sub-head | 19 / 500 | `18–20px` / 500 | `18px` silver | Lead-in copy under headlines |
| Body / capability line | 16 / 400 | `15–16px` / 400 | `15px` silver | Descriptions, paragraph copy, one-line store-tile capability |
| Spec label | 14 / 500 | `14px` / 500 | `14px` weight 500 silver `#86868b` | Spec-table left column, nav |
| Spec value | — | `14–16px` / 400 | `14px` weight 400 Titan | Spec-table right column |
| Caption / legal | 12 / 400 | `12px` / 400 | — | Footnotes, disclaimers, legal |
| Button label | — | `15px` / 500 | `15px` weight 500 | Primary and secondary CTA labels |

### Conventions

The judgement wording inside these conventions — that a DJI headline is a phrase rather than a sentence, and that the numbers are what persuade — is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification.

- **Tracking tightens as size grows** — display headlines are set tight; body stays neutral. The source states the rule without a numeric tracking value.
- **Headlines are short.** A DJI headline is a phrase, not a sentence; detail lives in the spec table below.
- **Numerals matter.** DJI sells on specs — flight time, transmission range, sensor size. Spec figures are set in medium weight, often with the unit in lighter or smaller type beside the number; the §9 writing of the same rule sets the number larger than its unit. Both phrasings are kept.
- **CJK and Latin coexist at the same optical weight.** The following reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification: the source explains the choice of Source Han Sans / PingFang SC by reading them as sitting visually alongside the Latin face without one looking heavier.

### Assets

The following asset readings are a derived editorial implementation inference from the source reconstruction; they are not DJI-authored or a separately published UI specification. The catalog logo record is a Google s2 favicon entry in the source ledger, not a first-party DJI mark file, so it stays in the provenance ledger and is not carried here as a portable brand asset. Product photography and flight footage are first-party product content; do not replace them with invented brand-color decoration. The source records no illustration system and no mascot to source.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here. The characterizations inside this table — "no illustration", "no mascot, no suggestion spam", "never a bouncy spinner", "No alarm coloring", "Confident, not celebratory", "no confetti", "The drawer is the feedback" — are a derived editorial implementation inference from the source reconstruction; they are not DJI-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (cart)** | White canvas, centered single line of silver body copy, one black primary CTA ("Continue shopping" / 继续购物). No illustration. |
| **Empty (search no results)** | One line, silver, factual ("No products match your search"). No mascot, no suggestion spam. |
| **Loading (product page)** | Skeleton blocks at final dimensions on white / black surfaces; hero media fades in when ready. Slow, smooth — never a bouncy spinner. |
| **Loading (store grid)** | Grayscale tile placeholders matching the final grid; single shimmer pass. |
| **Error (form field)** | Field border turns error red (≈`#ff3b30`), one-sentence message below in the same red, 13px. State the fix. |
| **Error (out of stock)** | Product CTA replaced with a disabled silver "Sold out" / 售罄 state plus an optional "Notify me" link in accent blue. No alarm coloring. |
| **Success (order placed)** | Clean white confirmation, black checkmark, order number in Titan, next-step link in accent blue. Confident, not celebratory. |
| **Success (added to cart)** | Subtle cart-drawer slide-in from the right; item appears; no confetti. The drawer is the feedback. |
| **Skeleton** | Hairline-bordered gray blocks at exact final dimensions; never on price (price shows a neutral placeholder). |
| **Disabled** | Silver fill plus silver text together; reduced contrast, never a different hue. Disabled CTA keeps its 4px radius. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` observation is not `focus-visible` treatment evidence; the source's named input focus stays as an additional observed state and the `focus-visible` visual treatment remains omitted. Pointer-web hover and the other canonical states that are meaningful for a control remain applicable; their visual treatments are omitted where the source records none. Absence of an observation is never a `not-applicable` reason — only a control-meaning reason is. Where the source names one control for several roles and pins no request or outcome, that applicability field is omitted at the field boundary rather than closed. This is not a complete state-coverage claim.

Component radii, paddings, and heights below are the representative reconstruction pixels the source records; exact internal design-token names may differ. Every hex in these blocks other than `#000000` and `#ffffff` is the approximate value bounded in Experience Scope and Foundations Semantic color, whether or not the block repeats the `approximate` flag beside it. That qualifier is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification.

### Primary CTA (Buy / 立即购买)

- Role: primary purchase / configure CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#000000` on white pages, inverting to `#ffffff` on black pages
- Text: `#ffffff` on black, `#000000` on white
- Border: none
- Radius: 4px
- Padding: 12px 28px
- Font: 15px / 500
- Use: primary purchase / configure CTA. High-contrast, monochrome, no fill color.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named primary purchase action |
| hover | applicable | Pointer-web button; source records `motion-fast` 200ms as button feedback, and no separate hover fill |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Source Disabled state: silver fill plus silver text, reduced contrast, 4px radius kept |
| error | applicable | Source out-of-stock state renders on this control as a disabled silver "Sold out" / 售罄 plus a "Notify me" link |
| loading | applicable | A submitted purchase or configure request can be pending on this control; visual treatment omitted |
| success | not-applicable | The source places this action's confirmation on other surfaces — the cart drawer slide-in and the order-confirmation page — rather than on the control itself |

### Secondary CTA (Learn More / 了解更多)

- Role: ghost button beside the primary CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#000000` on light pages, `#ffffff` on dark pages
- Border: 1px solid current color
- Radius: 4px
- Padding: 12px 28px
- Font: 15px / 500
- Use: ghost button beside the primary CTA

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named secondary action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Source Disabled state applies to a CTA: silver fill plus silver text, 4px radius kept |

Loading, error, and success applicability are omitted. The source names this control only as the ghost partner of the primary CTA and pins no request, outcome, or destination to it, so those three fields stay omitted at this boundary rather than closed.

### Text / Link

- Role: inline links, "learn more" affordances, spec-detail expanders
- Kind: interactive
- Type: button (source YAML `button-link`; the source body names the same control Text / Link. Both writings are kept.)
- Background: transparent
- Text: sky-blue accent (≈`#0a84ff`, approximate)
- Border: none
- Font: 15px / 400
- Use: inline links, "learn more" affordances, spec-detail expanders. The source records this as the only place the blue accent reliably appears; that reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named inline link and expander |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A link or expander can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. The source names three roles for this one control — inline link, learn-more affordance, and spec-detail expander — and pins no request or outcome to any of them, so those three fields stay omitted at this boundary rather than closed as navigation-only.

### Input

- Role: account, checkout, and search fields
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#ffffff`
- Text: Titan (≈`#1c1c1e`, approximate)
- Border: 1px solid hairline (≈`#d2d2d7`, approximate)
- Radius: 4px
- Padding: 12px 14px
- Font: 15px / 400
- Use: account, checkout, search fields

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named account / checkout / search field |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A field can be unavailable; visual treatment omitted |
| error | applicable | Source form-field error: border turns error red (≈`#ff3b30`) with a one-sentence 13px message below in the same red |

Loading and success applicability are omitted. The source names this control for account, checkout, and search together and records no waiting or confirmation outcome on the field itself, so those two fields stay omitted at this boundary rather than closed.

Additional observed named state: generic `Focus` — the border transitions to the sky-blue accent. This is a generic focus observation, not `focus-visible` treatment evidence, so it stays here as an observed state and the `focus-visible` row above carries no treatment.

### Product Tile (store grid)

- Role: product grid tile — centered product shot, name, one-line capability, price, CTA
- Type: card
- Kind: omitted. The source records this tile's geometry and a hover lift and names no control role, focus behavior, or press behavior for the tile itself, so kind and a §4.4 state-applicability map are omitted rather than confirmed.
- Background: `#ffffff`, or dark panel ≈`#161617` on black sections
- Text: Titan
- Border: none, separation by whitespace, or 1px hairline. All three recordings are kept.
- Radius: 8px
- Padding: 24px
- Shadow: none by default; subtle lift on hover
- Use: product grid tile

Additional observed named state: hover — the lift is `0 4px 16px rgba(0,0,0,0.08)` on light pages.

### Spec Module

- Role: highlighted spec / feature block within a long product page
- Type: card
- Kind: omitted. The source records background, radius, padding, and use only, with no interactive-kind evidence, so kind and a §4.4 state-applicability map are omitted.
- Background: `#f5f5f7` on light, `#161617` on dark
- Radius: 12px
- Padding: 32px
- Use: highlighted spec / feature block

### Spec Table Row

- Role: technical specification listing. The source calls it the heart of every DJI product page; that reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification.
- Kind: omitted. The source records label, value, and divider treatment only, with no interactive-kind evidence, so kind and a §4.4 state-applicability map are omitted.
- Background: transparent
- Label: silver / mid-gray (≈`#86868b`, approximate), 14px / 500, left column
- Value: Titan, 14–16px / 400, right column
- Divider: 1px hairline (≈`#d2d2d7`, approximate) between rows
- Use: technical specification listings

### Global Navigation Item

- Role: product-category item in the global header
- Kind: interactive
- Anatomy: label; the mega-menu drops on category hover
- Active / hover treatment: subtle underline or opacity shift; no color fill
- Use: category navigation in the sticky black global header

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The resting nav item |
| hover | applicable | Source records a hover treatment: subtle underline or opacity shift, no color fill |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A category item can be unavailable; visual treatment omitted |
| loading | not-applicable | The item selects a product category and drops the mega-menu; the recorded loading treatments belong to the product page and the store grid, not to this control |
| error | not-applicable | The item's meaning is active versus resting selection, rather than a request or a validation outcome |
| success | not-applicable | Opening a category is selection, rather than an action-outcome confirmation on the item |

### Global Header / Footer

- Role: global chrome surrounding every page
- Kind: omitted. The source describes these as regions and records no control-level state evidence for the region itself, so kind and a §4.4 state-applicability map are omitted.
- Header: black (`#000000`) bar, white wordmark left, product categories center, account / cart / search right; sticky on scroll
- Footer: black, multi-column link grid, region / language switcher, fine legal type in silver
- Use: global navigation and legal chrome

### Status Pill (New / Pre-order)

- Role: product flag — "New", "Pre-order", "Coming soon"
- Type: badge
- Kind: omitted. The source records type, geometry, and use only, with no interactive-kind evidence, so kind and a §4.4 state-applicability map are omitted. Kind is not declared non-interactive either.
- Background: transparent, or a hairline outline. Both writings are kept.
- Text: sky-blue accent or Titan
- Radius: 4px
- Padding: 4px 8px
- Font: 12px / 500
- Use: "New", "Pre-order", "Coming soon" product flags. The source reads this as understated, without loud red "SALE" energy; that reading is a derived editorial implementation inference from the source reconstruction and is not DJI-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### The X-Factor grid

Recorded in the source from Tier 2 brand-guide material: the unit is the height of the lowercase "i" in the DJI logo, and all margins, gutters, and logo clearspace are integer multiples of that unit. The following consequence reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification: the source reads that rule as producing a tight, consistent rhythm across every surface, so the brand reads as engineered because the spacing descends from the logo's own geometry.

### Spacing

| Use | Value |
|---|---|
| Button padding | `12px 28px` |
| Card padding | `24px` |
| Section vertical | `80–120px` (full-fold product reveals) |
| Content max-width | `~1440px` centered |
| Spec-table row | hairline-divided, generous vertical air |

### Grid

- Product pages: alternating full-bleed photography folds and centered max-width content blocks
- Store: responsive card grid, typically 3–4 across on desktop
- One message per fold; the source states that DJI never crowds a viewport with competing claims

### Density

The following density reading is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification. The source reads DJI as low-density and high-impact on marketing folds and high-density and instrument-precise on spec tables, calls that contrast intentional — the photography breathes, the numbers pack tight — and reads it as mirroring the product itself: sleek exterior, dense capability.

### Responsive behavior

| Width | Behavior |
|---|---|
| Desktop `>1280px` | Centered ~1440px max-width, mega-menu nav, full-bleed hero folds, 3–4-col store grid |
| Laptop `1024–1280px` | Grid tightens to 3-col, hero headlines step down (~56px) |
| Tablet `768–1024px` | 2-col store grid, mega-menu collapses, hero ~40px |
| Mobile `<768px` | Single column, hamburger nav, full-width product folds, sticky bottom Buy bar, hero ~28–32px |

### Touch & mobile

- Sticky bottom purchase bar on product pages (price plus Buy) on mobile
- Spec tables become stacked label / value pairs
- Photography art-directed with mobile crops; flight footage autoplays muted
- Min 44px tap targets

### Media

- Hero video: full-bleed, autoplay muted, lazy-loaded, mobile-specific crops
- Product imagery: high-res, `object-fit: cover` in tiles, lightbox on click
- 360° product spins on flagship pages degrade to a static hero on low-power devices

The following unlisted-surface boundary is a derived editorial implementation inference from the source reconstruction; it is not DJI-authored or a separately published UI specification. The 1280px / 1024px / 768px breakpoints, the ~1440px max-width, the 44px tap-target minimum, and the ~56px / ~40px / ~28–32px hero step-downs are the source's recorded figures for the surfaces it names; they are not a claim that every unlisted surface shares them.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice characterization, the copy-pattern table, and the forbidden-phrase rationale are a derived editorial implementation inference from the source reconstruction; they are not DJI-authored or a separately published UI specification. The source reads DJI's voice as that of an engineer who has already done the impossible and feels no need to oversell it — confident, terse, and capability-led. It reads marketing copy as reaching for the aspirational in three or four words and then backing it immediately with hard numbers: flight time in minutes, transmission range in kilometers, sensor size in inches. It records that the brand states what the machine does and trusts the spec sheet to persuade. In Simplified Chinese it reads the register as clean, modern, and slightly literary in taglines but resolutely factual in product copy, and it records English and Chinese as peers — DJI is a global brand born in Shenzhen, and neither language reads as a translation of the other.

| Context | Tone |
|---|---|
| Hero headlines | Three-to-five-word aspirational phrase. `See It All`. `未来无所不能`. No sentence, no hedge. |
| Product names | The model name, set large and plain — `Mavic 4 Pro`, `Air 3S`, `Osmo Pocket`. The name is the headline. |
| Capability copy | Plain declarative plus a number. "Up to 51 minutes of flight time." Never "amazing", "revolutionary". |
| CTAs | Imperative verb, short. `Buy Now` / `立即购买`, `Learn More` / `了解更多`, `Pre-order` / `预订`. |
| Spec tables | Pure data. Figure plus unit. No adjectives. The numbers are the argument. |
| Support / error | Direct, blameless, instructional. State the condition and the next step. |
| Legal / regulatory | Formal, precise — drone regulation and safety copy is exacting and unembellished. |

**Forbidden phrases.** Marketing inflation — `革命性` (revolutionary), `颠覆` (disruptive), `极致` as filler, `世界第一` unqualified. Exclamation marks as emphasis on CTAs (`立即购买！` is wrong; `立即购买` is right). Emoji on product and spec surfaces. Hype that the spec sheet cannot substantiate; the source grounds that last rule in reading DJI's credibility as every claim being a measurable number, which is the same editorial inference qualified above.

**Voice samples — illustrative; the source's own inline markers are carried where it attaches them.** The source flags the marked samples as convention-following rather than verified live strings, so they stay labelled here and are not promoted to verified product copy. One further headline example is quoted in the source's §10 prose rather than in its sample list; it is identified as such below and is likewise not promoted:

- `See It All` — illustrative of the terse aspirational hero pattern; the source marks it as following an observed dji.com marketing-headline convention rather than quoting a specific live string.
- `Just Fly` — illustrative product-reveal phrasing in the same register; marked as convention observed rather than a verified live string.
- `Possibility in motion` — the third aspirational headline example, quoted in the source's §10 prose sentence beside `See It All` and `Just Fly` rather than in the source's own sample list. The source attaches no separate inline marker to that prose sentence, so none is asserted here; the string is carried at byte fidelity, including its lower-case `in motion`, and is not promoted to a verified live string.
- `未来无所不能` — illustrative Simplified-Chinese brand tagline register (*the future of possible*); marked as reflecting DJI's CN tagline style rather than verified verbatim.
- `立即购买` / `了解更多` — store CTA verbs in the imperative-short pattern; marked as standard CN e-commerce CTA register consistent with DJI store surfaces.

Locale behavior: the source treats English and Simplified Chinese as first-class peers on dji.com and requires Source Han Sans / PingFang SC in every stack so Simplified Chinese renders at the same optical weight as Latin. The footer carries a region / language switcher. The source records no other locale's copy or layout behavior.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent:

- the exact published hex for Titan and for the sky-blue accent (the brand guide names both and withholds the hexes; the approximations above stay approximations)
- a live computed token layer for dji.com (the source records that no public CSS token layer is exposed, and token extraction stays `prose-derived`)
- exact cubic-bezier easing curves (omitted as unattributed; no DJI-published source for the curves)
- animation names and CSS transition properties, until a per-component computed capture of all five motion evidence kinds exists; a single named duration is not that gate
- `focus-visible` visual treatments (the input's generic `Focus` border is a different observation)
- line-height and numeric tracking values for every type role (the source records the tracking rule without a number)
- interactive-kind evidence for the Product Tile, Spec Module, Spec Table Row, Global Header / Footer, and Status Pill
- license terms for the custom DJI face and for the CJK fallback families
- a distributed DJI type specimen file
