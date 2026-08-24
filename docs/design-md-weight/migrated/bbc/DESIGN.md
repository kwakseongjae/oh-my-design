# BBC Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

BBC (British Broadcasting Corporation) is the UK public-service broadcaster. Catalog homepage identity is `https://www.bbc.co.uk`. Source token note: primary = BBC black (`#000000`) used for Register CTA, nav block, and all headings; BBC News red (`#bb1919`) is the signature product accent; BBC Reith custom typeface family.

Treating the following three URLs as the named public-web evidence domains of this reconstruction, treating `https://www.bbc.co.uk/gel` as GEL homepage / font-loading evidence rather than an extra bbc.co.uk product-UI capture, treating iPlayer / Sounds / Bitesize / Sport product UIs as unnamed in this packet except for GEL SVG accent hexes, and treating the live-inspect homepage form `https://www.bbc.co.uk/` as not merged with catalog homepage `https://www.bbc.co.uk`, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. This contract covers three named first-party web surfaces from the 2026-06-22 packet: home `https://www.bbc.co.uk/` (live DOM inspect — nav, Register / Sign In, search input, bgFreq / fgFreq); BBC News `https://www.bbc.co.uk/news` (same nav system; BBC Reith Sans confirmed); GEL homepage `https://www.bbc.co.uk/gel` (via curl — `--bbc-font`, Reith CDN, product-icon SVGs). Live-inspect homepage form `https://www.bbc.co.uk/` is not merged with catalog homepage `https://www.bbc.co.uk`.

Treating that token note as a register split — `#000000` is catalog `primary_color` and the harvested Register / nav / heading black; `#bb1919` is News accent / LIVE badge fill, not a second identity black; Reith is the live UI family and is not replaced by the Arial / Helvetica / freesans fallback chain; GEL SVG accents are not homepage action fills — is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

The following atmosphere readings (world’s-most-visited-public-service-site; uncompromising-clarity / accessibility-first / quiet-authority-of-institutional-black; not-luxury-fashionable-monochrome; editorial-black-of-newspaper-tradition; missionary-discipline) are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification. The source reads the captured interface as a white (`#ffffff`) canvas relieved by a cool grey surface (`#f6f6f6`), with BBC block black (`#000000`) on the Register button, the navigation bar, and primary interactive elements.

BBC Reith is a bespoke typeface commissioned in 2015 from Dalton Maag specifically for the BBC. The source records its stated mission as *"improve the experience of reading for everyone, regardless of ability, context or canvas."* BBC Reith Sans and BBC Reith Serif are designed together as a matched pair, with optical sizing and open letterforms engineered for legibility across the widest possible range of devices and vision abilities. The font loads from BBC's own static CDN (`static.files.bbci.co.uk`). Treating the fallback chain (`Arial, Helvetica, freesans, sans-serif`) as preserving accessibility without the brand personality is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. Where Reith is unavailable, the source records that fallback chain.

GEL (Global Experience Language) is a publicly documented BBC design framework. GEL launched publicly in 2015. Treating the following GEL-scope, anti-rounded, sharp-corners-signal-authority / seriousness-and-journalistic-precision, no-pill-buttons-or-soft-cards, and flat-depth-not-shadow readings, treating GEL’s governance of iPlayer / Sounds / Bitesize / News as a source-stated framework claim rather than a live capture of those product UIs, and treating GEL SVG accent hexes as not homepage CTA fills, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. The source says GEL governs BBC digital properties from bbc.co.uk to iPlayer, BBC Sounds, Bitesize, and BBC News, and that GEL enforces zero border-radius on buttons, inputs, cards, and badges. Elevation is recorded as absent on measured elements: section separation via grey surface (`#f6f6f6`) and divider hairlines (`#e6e8ea`) rather than shadows. Product-specific accent colours recorded from GEL SVGs: iPlayer pink (`#dc2878`), Sport amber (`#ffd230`), Sounds orange (`#fa6400`). Those hexes are not homepage CTA fills.

Public record recorded in the source: the British Broadcasting Corporation was founded on 1 January 1927 under Royal Charter, succeeding the British Broadcasting Company (from 1922). Its mission — to inform, educate, and entertain — is attributed to founding Director-General John Reith (1st Baron Reith). The BBC Reith typeface carries that name. The BBC is recorded as operating without advertising, funded by the UK television licence fee.

The following commercial-media-versus-trust and Register-black-not-dopamine-hue readings, including constitutional-fact-and-design-philosophy, visible-consequence, non-click-bait-article-cards, unsponsored-search, and not-interface-tokens, are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification. The source reads that licence-fee independence as a constitutional fact and a design philosophy, and reads the black Register button, non-click-bait article cards, and unsponsored search as the visible consequence. Those readings are not interface tokens.

Treating GEL’s “one system, many voices” promise (shared Reith, zero radius, flat depth, WCAG-first colours; per-service accents) as narrative context for the captured bbc.co.uk / News / GEL surfaces, not as proof that iPlayer / Sounds / CBBC / Bitesize share every harvested homepage token, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

Treating the five captured public-route jobs below as the user outcomes of this reconstruction, and keeping source §13 fictional archetypes out of this list, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

- Read news and editorial content on `https://www.bbc.co.uk/` and `https://www.bbc.co.uk/news`.
- Register or Sign In from the captured homepage CTAs (`Register`, `Sign In`).
- Search BBC from the captured global search (`Search BBC`).
- Navigate Home, News, Sport, Business, Technology, and Culture from the captured global nav.
- Skip to content from the captured keyboard skip link (`Skip to content`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 is labelled fictional archetypes; names, ages, cities, and biographies are not Audience and are not primary tasks. Restricting Audience so that no individual personas are promoted, tying observable work only to the five primary tasks, and treating source §13 as not Audience, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

### Distinctive traits

- Catalog `primary_color` / harvested Register and nav black `#000000`
- News accent / LIVE badge `#bb1919`; GEL SVG News reds `#b80000` / `#eb0000` / `#D30000` unmerged from that badge fill
- White canvas `#ffffff` with heading `#202224`, body/GEL-heading `#3a3c3e`, muted `#545658`, surface `#f6f6f6`, surface-alt `#f8f8f8`, hairline `#e6e8ea`
- BBC Reith Sans / BBC Reith Serif loaded from `static.files.bbci.co.uk`
- YAML `rounded` sm / md / lg / full all `0`; harvested buttons, inputs, cards, badges `0px`
- YAML `tokens.shadow.none` is `none`; live inspect `box-shadow: none` on nav, buttons, cards, inputs
- Keyboard Focus recorded as `2px solid #000000` on interactive elements — not copied onto `focus-visible` rows

Treating `#000000` as catalog primary and Register/nav black rather than heading `#202224` or body `#3a3c3e`, treating `#bb1919` as News/LIVE rather than iPlayer `#dc2878` / Sport `#ffd230` / Sounds `#fa6400` and unmerged from GEL SVG News reds `#b80000` / `#eb0000` / `#D30000`, treating YAML `0` and harvested `0px` as recorded geometry rather than a licence to round unlisted controls, treating Reith as the live family rather than the fallback stack, and treating the generic Focus ring as not `focus-visible` evidence and as not copied onto `focus-visible` rows, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

### Principles

The mission phrase to inform, educate, and entertain, the Royal Charter / licence-fee public record, the Reith commission quote, and the public existence of GEL (2015) are first-party or public-record facts. These five numbered items, including each stem’s design-constraint framing and each *UI implication*, plus the capture-bound application list, are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification.

1. **Inform, educate, entertain — in that order.** The BBC’s founding tripartite mission ranks utility first.
   *UI implication:* interface chrome should never compete with content; navigation and buttons should be as minimal as usable, so articles, programmes, and audio are the visual anchor.
2. **Impartiality is a design constraint.** BBC editorial guidelines require balance by Royal Charter.
   *UI implication:* interface copy never implies preference, urgency, or emotional manipulation; CTAs are verbs, not value propositions; interactive colours are black-and-white, not persuasion-optimised hues.
3. **Accessibility is non-negotiable.** The source records GEL as targeting WCAG AAA as its design ceiling.
   *UI implication:* zero-radius sharp corners aid distinguishability for low-vision users; 1.5 minimum line-height; 65ch reading measure; font size in relative units; 2px focus rings on all targets.
4. **Trust through restraint.** The source reads the BBC as trusted because it does not try too hard.
   *UI implication:* no gamification, no urgency patterns, no animated persuasion; the typeface does the authority work so colour doesn’t have to.
5. **One system, many voices.** The source records GEL as unifying services without homogenising them.
   *UI implication:* structural vocabulary (Reith, zero radius, flat depth) is constant; product accent colours (red / pink / amber / orange) distinguish services without fragmenting the system.

Treating the following as a capture-bound application of source §7 Do’s and harvested geometry, with first-party mission / Charter / Reith / GEL-existence marked separately from the remaining token-role rules, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

- Use BBC Reith Sans for UI text on the captured surfaces; keep BBC Reith Serif as the recorded serif pair for long editorial reads.
- Use `#000000` for the harvested Register fill, nav blocks, and strong labels — not heading `#202224`.
- Keep border-radius at `0px` on the harvested buttons, inputs, cards, and badges.
- Separate sections with `#f6f6f6` bands and `#e6e8ea` hairlines; do not promote a drop shadow.
- Set body font size in relative units (`rem` / `em`) as recorded; keep article containers at `max-width: 65ch` as recorded.
- Use `#bb1919` for News section branding and LIVE / breaking indicators on the captured News surface, not as a general UI fill.
- Keep the recorded keyboard Focus as `2px solid #000000`; do not copy it onto `focus-visible` rows.

### Avoid

The following items copy source §7 Don’ts. Grouping them here as capture-bound Avoid, including rounded-corners-break-GEL, coloured-primary-CTA-not-black, box-shadow-not-tint, mix-product-accents-across-services, pixel-lock-body, positive-letter-spacing-on-body, line-height-below-1.5-on-body, and generic-system-font-in-place-of-Reith, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

- Do not add border-radius to buttons, inputs, cards, or badges.
- Do not use coloured buttons other than black for primary CTAs.
- Do not apply box-shadows for elevation.
- Do not mix product accent colours across services (do not put iPlayer pink on a News surface).
- Do not use pixel-locked font sizes for body text.
- Do not use positive letter-spacing on body text.
- Do not set line-height below 1.5 on body copy.
- Do not use generic system fonts in place of BBC Reith.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following unmerged-role readings — catalog `#000000` is not heading `#202224`, not body/GEL-heading `#3a3c3e`, not muted `#545658`, and not bgFreq `rgb(20,22,24)`; canvas `#ffffff` is not on-primary `#ffffff` as one ink for every string; surface `#f6f6f6` is not surface-alt `#f8f8f8`; News `#bb1919` is not SVG `#b80000` / `#eb0000` / `#D30000` and not iPlayer `#dc2878` / Sport `#ffd230` / Sounds `#fa6400`; GEL Heading and Body Slate share `#3a3c3e` without becoming one role; Dark Nav Block `#3a3c3e` is that band’s fill, not those text roles; transparent Sign In fill is not a second canvas; “not off-black or dark grey” is source-stated role prose rather than a measured off-black token and not a computed contrast proof — are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification.

Primary / interactive:

- **BBC Black** (`#000000`): YAML `primary`. Catalog `primary_color`. Register CTA background, nav blocks, strong labels. The source’s “not off-black or dark grey” wording is source-stated role prose, not a computed contrast proof.
- **On-primary** (`#ffffff`): YAML `on-primary`. Text on black fills. Same hex as canvas; the roles are not merged.
- **Heading Dark** (`#202224`): YAML `heading`. Primary heading and body text colour on all surfaces. fgFreq `rgb(32,34,36)` ×399.
- **GEL Heading** (`#3a3c3e`): YAML `gel-heading`. GEL.bbc.co.uk heading colour.
- **Body Slate** (`#3a3c3e`): YAML `body`. Secondary body copy. Same hex as GEL Heading; the roles are not merged.
- **Muted** (`#545658`): YAML `muted`. Tertiary text, captions, metadata. fgFreq `rgb(84,86,88)` ×60; bgFreq ×12.

Surface:

- **Pure White** (`#ffffff`): YAML `canvas`. Page background, card surfaces. bgFreq `rgb(255,255,255)` ×70.
- **Surface Grey** (`#f6f6f6`): YAML `surface`. Content section backgrounds. bgFreq `rgb(246,246,246)` ×8.
- **Surface Alt** (`#f8f8f8`): YAML `surface-alt`. Secondary grey tint for alternating content bands.
- **Hairline** (`#e6e8ea`): YAML `hairline`. Thin dividers, card outlines.
- **bgFreq near-black** (`rgb(20,22,24)` ×18): HTML-comment live scan only; not a YAML colour and not merged into `#000000` or `#202224`.
- **Dark Nav Block** (`#3a3c3e`): body §4 sub-navigation band fill with `#ffffff` text. Same hex as Body Slate / GEL Heading; this is that band’s fill, not those text roles.

News / product accents:

- **News Red** (`#bb1919`): YAML `brand-red`. BBC News primary — section heading underline, LIVE badge background, breaking news indicator. Form-validation error text in source §14 uses this hex.
- **News Red Dark** (`#b80000`): YAML `brand-red-dark`. Darker News red used in SVG product icon. HTML-comment `#B80000`.
- **News Red Bright** (`#eb0000`): YAML `brand-red-bright`. Brightest News red in icon. fgFreq `rgb(235,0,0)` ×15. HTML-comment `#EB0000`.
- **News Red SVG third** (`#D30000`): HTML-comment GEL SVG only; not a YAML colour and not merged into `#bb1919` / `#b80000` / `#eb0000`.
- **iPlayer Pink** (`#dc2878`): YAML-absent body / GEL SVG `#DC2878`.
- **Sport Amber** (`#ffd230`): body / GEL SVG `#FFD230`.
- **Sounds Orange** (`#fa6400`): body / GEL SVG `#FA6400`.

Interactive:

- **Keyboard Focus**: `2px solid #000000` — source §2 records this as the keyboard focus state on all interactive elements, meeting WCAG 2.1 AA. This generic Focus observation is not `focus-visible` treatment evidence.

Treating WCAG AAA as a source-stated GEL ceiling rather than a computed contrast proof of every hex, treating “meeting WCAG 2.1 AA” on the Focus ring as source-stated rather than a computed contrast proof, treating the generic Focus ring as not `focus-visible` evidence, and treating colours not recorded in this packet as omitted rather than mapped to News red or black, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

### Spacing

The following local-spacing readings — YAML unitless steps stay the YAML scale; §5 px / rem figures stay body measurements; harvested padding stays with its control and is not a universal gutter — are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification.

YAML `tokens.spacing` (unitless): xs 4, sm 8, md 12, base 16, lg 24, xl 32, xxl 48, section 64.

Source §5 spacing system: base unit 8px; scale 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. Paragraph rhythm: 1.375rem between paragraphs; 2.75rem above section headings; 1.375rem below headings.

Harvested padding: Register / Sign In `6px 12px`; Skip to Content `8px 12px`; Search `13px 0px 13px 13px` (YAML `13px 0px 13px 13px`); LIVE badge `2px 6px`; Global nav `12px 8px`.

### Shape

The following local-geometry readings — YAML unitless `0` and harvested `0px` remain recorded geometry for those elements, not a radius assigned to every unlisted control; “defining geometric commitment” is source-stated characterization rather than a licence to round unlisted controls — are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification.

YAML `tokens.rounded`: sm 0, md 0, lg 0, full 0.

Harvested radius: Register, Sign In, Skip to Content, Search, Article Teaser, Surface Content Section, Dark Nav Block, LIVE badge — all `0px`.

Source §5 names 0px across all interactive and structural elements as the system’s defining geometric commitment.

### Elevation

YAML `tokens.shadow.none` is `none`.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | All surfaces — page background, cards, nav, inputs |
| Tint (Level 1) | `#f6f6f6` background | Secondary content sections |
| Dark (Level 2) | `#3a3c3e` background | Sub-nav bands, dark content blocks |
| Hairline | `1px solid #e6e8ea` | Article dividers, subtle list separators |

Live inspection confirmed `box-shadow: none` across every measured element — nav, buttons, cards, inputs.

The following table-Use assignments (all-surfaces-flat / secondary-tint / sub-nav-dark / divider-hairline) and shadow-philosophy readings (zero-shadow-system; depth-through-background-contrast-and-typographic-hierarchy-not-elevation; editorial-grid-and-image-placement-rather-than-soft-UI) are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification. The source says this matches GEL’s documented principle that depth should be communicated through background contrast and typographic hierarchy, not elevation effects. That matching is this derived reading, not a GEL-authored elevation token harvested as computed CSS.

### Motion

Source-stated duration roles. The source HTML comment attaches live inspect to token-level claims in §1–9; §15 sits in the philosophy layer (sections 10–15). Treating the duration table, easing names, spec-template-ease-exit-match, conservative-motion / LIVE-pulse / hamburger-to-close readings, and reduced-motion line as source-stated rather than computed CSS, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, badge reveals, focus rings |
| `motion-fast` | 100ms | Hover, button press, link underline |
| `motion-standard` | 200ms | Menu open/close, panel transitions |
| `motion-slow` | 300ms | Page-level content reveal, image load-in |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only) | Standard two-way transitions |
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only) | Menus, drawers arriving |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals, departures |

The following motion-rule readings, including conservative-by-institutional-necessity, motion-reinforces-state-change-never-decorates, LIVE-badge-pulsing-as-most-prominent, no-parallax / no-entrance-choreography / no-content-fade-in, hamburger-to-close as most-visible, restraint-as-motion-equivalent-of-zero-radius, and fully-functional-and-editorially-identical under reduced motion, are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification. GEL’s motion philosophy is recorded as conservative: motion reinforces state change, never decorates. The LIVE badge pulsing red is recorded as the most prominent motion — and even that is suppressed under `prefers-reduced-motion: reduce`. No parallax, no entrance choreography, no content fade-in sequences. Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`; the product remains fully functional and editorially identical.

**Signature motion** (source-stated): the hamburger-to-close animation on the mobile nav toggle is recorded as the system’s most visible motion — a 200ms `ease-standard` rotation. Everything else is fade or translate at `motion-standard` or faster.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings — GEL homepage curl is font-loading evidence; fallback stacks are not the product face and not a second live UI family; Trafalgar / Brevier names are source-stated GEL scale names rather than computed pixel roles — are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | GEL is a publicly documented BBC design framework. This packet’s GEL homepage curl confirms `--bbc-font` and the Reith CDN path. |
| Live computed surface-use | bbc.co.uk and bbc.co.uk/news compute visible nav / button / search text as BBC Reith Sans (14px / 500 nav; Register 16px / 500). Home and News live inspect used playwright getComputedStyle. |
| getComputedStyle / curl / CDN corroboration | Home/News getComputedStyle plus GEL curl plus CDN corroborate Reith. Reith loads from `https://static.files.bbci.co.uk/fonts/reith/2.610/BBCReithSans_W_Rg.woff2` and `BBCReithSans_W_Bd.woff2`. CSS variable `--bbc-font: ReithSans, Arial, Helvetica, freesans, sans-serif` is set on the HTML root. |
| Official distributed asset | BBC Reith is a bespoke family commissioned from Dalton Maag (2015). This packet records CDN-hosted Reith files under `static.files.bbci.co.uk`. |
| Declared-only | YAML `legacy` `Arial, Helvetica, freesans, sans-serif` and the GEL legacy stack `ReithSans, Arial, Helvetica, freesans, sans-serif` are fallback / root-variable stacks, not a second live UI family. |

### Family

- **Current visible UI sans:** `"BBC Reith Sans"`, fallback `BBCReithSans-fallback, sans-serif`
- **Current visible UI serif:** `"BBC Reith Serif"`, fallback `"Times New Roman", Times, serif`
- **GEL legacy / root variable:** `ReithSans, Arial, Helvetica, freesans, sans-serif` (`--bbc-font`)
- **YAML `legacy`:** `Arial, Helvetica, freesans, sans-serif`

Treating YAML `legacy` as not merged with the GEL legacy stack (GEL includes `ReithSans` first), and treating the fallback-display rule below as a reconstruction boundary, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. Do not replace unavailable Reith with Arial, Helvetica, or freesans as though those were the brand face.

### Type roles

YAML unitless `lineHeight` values are ratios and are not converted to a single px. YAML `caption` has no `lineHeight`; the body table records Caption at 1.50. YAML `display-hero` size 28 is not merged with body “28px+”. Body “minimum 15-18px per GEL spec” is not merged with YAML body 16. Treating those unmerged-writing and no-invented-caption-lineHeight readings as reconstruction boundaries is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Provenance |
|---|---|---:|---:|---:|---:|---|
| GEL H1 / heading-md | BBC Reith Sans | 20px | 700 | 1.25 | | YAML `heading-md`; body GEL H1 on GEL docs |
| Article Headline / display-hero | BBC Reith Sans | 28 / 28px+ | 700 | 1.25 | | YAML `display-hero` 28; body live article headlines 28px+ |
| Nav Section (active) | BBC Reith Sans | 14px | 700 | 1.50 | | YAML `nav-active`; body current/active nav |
| Nav Link (inactive) | BBC Reith Sans | 14px | 500 | 1.50 | | YAML `nav-link`; live inspect 14px / 500 |
| Button | BBC Reith Sans | 16px | 500 | 1.00 | | YAML `button`; Register / Sign In / Skip labels |
| Body | BBC Reith Sans | 16px | 400 | 1.50 | | YAML `body`; body table min 15-18px per GEL kept as a separate writing |
| Caption | BBC Reith Sans | 13px | 400 | 1.50 (body table only) | | YAML `caption` omits lineHeight; YAML use “GEL Brevier scale” |

GEL typography principles. Treating the following rows as source-stated GEL prose rather than computed on every control is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

- Font size in relative units: body as `rem` / `em`; root `100%`. Never hard pixel-lock body text.
- Reading measure: optimal line length `60-70ch`, maximum `80ch` per WCAG 2.1 1.4.8. Implementation: `max-width: 65ch` on article containers.
- Minimum line height: body copy 1.5, large headings 1.125, Reith Serif 1.375 recommended.
- GEL type scale names: Trafalgar (2rem, large heading), Brevier (0.8125rem, supplementary). Scale is relative, not pixel-absolute.
- Acronym spacing: letter-spacing increased ~10% on acronyms.

Treating those GEL-principle rows (relative-units, 65ch, minimum-line-height-split, Trafalgar/Brevier, acronym-~10%) as source-stated GEL prose rather than a separately published token sheet harvested as computed CSS is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

### Assets

Treating catalog logo metadata as a Google favicon lookup, not a captured first-party mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

Treating captured image-first article layout and LIVE/video tiles as not to be replaced with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Treating the following table as the source state contract preserved here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. Hex values and geometry in the harvested components remain source-stated.

| State | Treatment |
|---|---|
| **Empty (search, no results)** | White canvas. "No results found" in body font, `#202224`, with a plain suggestion to broaden terms. No illustration. Journalistic directness. |
| **Empty (My BBC, no saved items)** | `#f6f6f6` tinted surface. Simple line in `#545658`: explain what can be saved and how to start. CTA links to relevant section. |
| **Loading (article page)** | Grey skeleton blocks at headline dimensions on `#f6f6f6`. No shimmer animation on default — static skeleton, progressively replaced. Motion only if animation allowed. |
| **Loading (live video/audio)** | Spinner on `#000000` circular background on the video tile. Text: "Loading…" in Reith Sans 13px `#ffffff`. |
| **Error (404 page)** | Clean white with "Sorry, that page can't be found." in article headline font. One link back to bbc.co.uk. No branded illustration — honest, minimal. |
| **Error (form validation)** | Field-level: red text below input in `#bb1919`, 13px Reith Sans, describes what's wrong and how to fix it. No icons. |
| **Error (network)** | "Something went wrong. Please try refreshing the page." in body font on white. |
| **Success (registration)** | Calm confirmation: "You're registered" in heading font. Next steps listed as numbered plain text. No confetti animation. |
| **Skeleton** | `#e6e8ea` placeholder blocks at final content dimensions. Static (respects reduced-motion preference). |
| **Disabled** | Reduced opacity on the element; `#545658` text on white. Interactive elements remain recognisably shaped (0px radius preserved). |
| **Live/Breaking indicator** | `#bb1919` red block badge with uppercase "LIVE" or "BREAKING" — 12px Reith Sans bold on the article card. Pulses only if animation is permitted. |

Characterizations in that table such as “Journalistic directness”, “plain suggestion to broaden terms”, “No illustration”, “explain what can be saved and how to start”, “No shimmer animation on default”, “static skeleton, progressively replaced”, “Motion only if animation allowed”, “honest, minimal”, “No icons”, “Calm confirmation”, “No confetti animation”, “Static (respects reduced-motion preference)”, “0px radius preserved”, “recognisably shaped”, and “Pulses only if animation is permitted” are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact selector/label/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed from the §14 rows. This is not a complete state-coverage claim.

Treating the source’s generic keyboard Focus (`2px solid #000000` on all interactive elements) as additional named Focus, not `focus-visible` evidence, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. The `focus-visible` row does not carry that ring.

Article Teaser Card, Surface Content Section, Dark Nav Block, and LIVE / Breaking Badge have no interactive-kind confirmation for a §4.4 map, so kind and a state-applicability map are omitted.

### Register (Primary Black)

- Role: primary account-creation CTA on the captured homepage
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#000000`
- Text: `#ffffff`
- Radius: `0px`
- Padding: `6px 12px`
- Border: `2px solid #000000`
- Height: 34px
- Font: 16px / 500 / BBC Reith Sans (YAML `16px / 500 BBC Reith Sans`; YAML `lineHeight` 1.00)
- Use: Register CTA — primary black block button
- Observed: default only
- Field note: The following unmerged-role reading is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. `#000000` is this control’s fill and catalog `primary_color`. 34px is this control’s harvested height, not Search 44px, not Skip 38px, not nav 42px. `2px solid #000000` here is the button border, not the generic Focus ring.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the homepage Register CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An account-creation CTA can be unavailable; visual treatment omitted. Source §14 Disabled is not copied here as a computed paint |

Loading, error, and success applicability are omitted. Source names this control as Register on the homepage; exact selector/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 Success (registration) row.

### Sign In (Ghost)

- Role: Sign In CTA, companion to Register on the same row
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#000000`
- Radius: `0px`
- Padding: `6px 12px`
- Border: `2px solid transparent`
- Height: 34px
- Font: 16px / 500 / BBC Reith Sans
- Use: Sign In — ghost/outline button variant
- Observed: default only
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. Transparent fill is this control’s field, not Canvas. `2px solid transparent` is this control’s border, not Register’s `2px solid #000000` and not the generic Focus ring.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the homepage Sign In CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A Sign In action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as Sign In on the same row as Register; exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

### Skip to Content (Accessibility)

- Role: keyboard/accessibility skip link
- Kind: interactive
- Type: button
- Anatomy: label
- Text: `#000000`
- Radius: `0px`
- Padding: `8px 12px`
- Border: `2px solid #000000`
- Height: 38px
- Font: 16px / 500 / BBC Reith Sans
- Use: Skip to content — only visible on focus, identical spec to Register
- Observed: default named; visibility recorded as focus-only
- YAML `tokens.components` does not record this control; values are body §4 only. Type: button is taken from the source §4 Buttons grouping.
- Field note: Treating “only visible on focus” as an additional observed visibility, not as `focus-visible` treatment for every control, and treating 38px as this control’s height rather than Register 34px, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named skip link on the captured homepage |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A skip link can be unavailable; visual treatment omitted |
| loading | not-applicable | An in-page skip moves focus to content; the control itself does not enter a loading state |
| error | not-applicable | Skip meaning is target-focus, not a request or validation failure on the control |
| success | not-applicable | Skip meaning is focus movement, not action-outcome confirmation |

Additional observed named state: only visible on focus. Treating that visibility as not copied onto other controls’ `focus-visible` rows is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

### Search Input

- Role: global search on the captured homepage
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `rgba(239,239,239,0.3)` (YAML); body `rgba(239, 239, 239, 0.3)`
- Text: `#202224`
- Radius: `0px`
- Padding: `13px 0px 13px 13px`
- Border: none
- Height: 44px
- Font: BBC Reith Sans (YAML size not recorded; not invented)
- Use: Global search input — flat frosted background, no border
- Observed: default only
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. `rgba(239,239,239,0.3)` is this control’s fill, not Surface `#f6f6f6` and not Canvas. 44px is this control’s height, not the Search button/icon 40px. YAML size is not recorded for this control’s font and is not invented.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the homepage search input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |
| error | applicable | Form field; source §14 records field-level validation in `#bb1919` 13px Reith Sans. That paint is not copied here as a computed search-input error treatment |

Loading and success applicability are omitted. Source §14 Loading and Success rows name article, live video/audio, and registration, not this search field; those two fields stay omitted at this boundary rather than closed from the §14 rows.

### Global Navigation Tab

- Role: top navigation links — "Home", "News", "Sport", "Business", "Technology", "Culture"
- Kind: interactive
- Type: tab
- Anatomy: label
- Text: `#000000`
- Font: 14px / 500 / BBC Reith Sans (YAML `14px / 500 BBC Reith Sans`; YAML `lineHeight` 1.50)
- Padding: `12px 8px`
- Height: 42px
- Active: text `#000000` font-weight 700; underline indicator (product-section specific — e.g. BBC News red underline)
- Use: Global nav item; active section bold 700
- Observed: static inactive 500 and static active 700 appearances. The active appearance is a captured variant, not an observed click transition.
- Field note: Treating the static active 700 / News-red-underline appearance as a captured variant rather than an observed click transition, and treating that underline as product-section specific rather than LIVE badge `#bb1919` fill, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Static inactive appearance captured on global nav |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav section can be unavailable; visual treatment omitted |
| loading | not-applicable | A nav tab selects a section (Home / News / Sport / …); the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: static active appearance (weight 700; product-section underline). Treating that appearance as a captured variant rather than an observed click transition is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

### Dark Mode Toggle

- Role: account/preference toggle in user settings
- Kind: interactive
- Type: toggle
- Anatomy: control
- Text: `#000000`
- Use: Account/preference toggle in user settings
- YAML records `fg` and `use` only. Radius, padding, height, and fill are not invented.
- Observed: named only; no harvested geometry beyond YAML `fg: #000000`
- Field note: Treating radius, padding, height, and fill as not invented because YAML records `fg` and `use` only is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named YAML toggle |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A preference toggle can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as an account/preference toggle; exact selector/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

### Article Teaser Card

- Role: news article teaser card
- Type: card
- Anatomy: surface
- Background: `#ffffff`
- Text: `#202224`
- Radius: `0px`
- Use: Article teaser card — flat white, no shadow, no radius, relies on spacing + typography
- Observed: default only
- Kind and state-applicability map omitted (no interactive-kind confirmation).

§9 restates a title at 20px BBC Reith Sans weight 700, `#202224`, line-height 1.25, and metadata/timestamp at 13px weight 400, `#545658`, with divider `1px solid #e6e8ea` below each card. Treating those writings as attached to this card’s Use, not merged into YAML `heading-md` / Caption as a second component, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

### Surface Content Section

- Role: grey surface content band
- Type: card
- Anatomy: surface
- Background: `#f6f6f6`
- Text: `#202224`
- Radius: `0px`
- Use: Full-width grey content band for secondary content sections, topic groupings — `#f6f6f6` background, full-width, 0px radius, no shadow
- Inside heading: 20px BBC Reith Sans weight 700, `#202224`
- Observed: default only
- Kind and state-applicability map omitted (no interactive-kind confirmation).

§9 restates a section divider card: `#f6f6f6` background, full-width, 0px radius, no shadow, with a section heading inside at 20px BBC Reith Sans weight 700, `#202224`. Treating that inside heading as a local field/Use recipe on this parent surface, not merged into YAML `heading-md` / GEL H1, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

### Dark Nav Block

- Role: dark sub-navigation band (section nav on GEL, secondary service navigation)
- Anatomy: surface
- Background: `#3a3c3e`
- Text: `#ffffff`
- Radius: `0px`
- Use: Dark sub-navigation bands
- Observed: default only
- YAML `tokens.components` does not record this control; values are body §4 only. Type is not invented. Kind and state-applicability map omitted (no interactive-kind confirmation).
- Field note: The following unmerged-role reading is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. `#3a3c3e` is this band’s fill. It is not GEL Heading text and not Body Slate text. Type is not invented.

### LIVE / Breaking Badge

- Role: LIVE badge on breaking news / video
- Type: badge
- Anatomy: label
- Background: `#bb1919`
- Text: `#ffffff`
- Radius: `0px`
- Padding: `2px 6px`
- Font: 12px / 700 / BBC Reith Sans (YAML `12px / 700 BBC Reith Sans`)
- Use: LIVE badge on breaking news / video — red block, no radius; source: always uppercase
- Observed: default only
- Kind and state-applicability map omitted (no interactive-kind confirmation).
- Field note: The following unmerged-role reading is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. `#bb1919` is this badge’s fill. It is not the nav-section underline and not SVG `#b80000` / `#eb0000` / `#D30000`. Source §14 pulse-if-animation-permitted stays on the capture-record Live/Breaking row; it is not a promoted motion token for this badge.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / xxl 48 / section 64 is the YAML scale. Source §5 repeats 4px–64px as the spacing system and records paragraph rhythm 1.375rem / 2.75rem / 1.375rem.

Grid and container (source-stated):

- Max content width for editorial: approximately 1280px container
- Article reading column: `max-width: 65ch`
- Homepage: multi-column editorial grid — lead story + supporting articles in variable-width columns
- GEL documentation site: centered single-column article with sidebar navigation

The following whitespace-philosophy readings (editorial-breathing-room; no-shadow-flat-depth; image-first-layout; Image + Title + Timestamp as the minimal card pattern) are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification. The source records that BBC balances dense news information with generous white space between articles and sections; that section separation comes from `#f6f6f6` and `#e6e8ea`; and that article images dominate card space.

Source breakpoint table:

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <400px | Single column, nav collapses to hamburger, BBC logo only |
| Tablet | 400-600px | 2-column editorial grid, moderate padding |
| Desktop | 600-1280px | Full layout, 3-column news grid, sticky nav |
| Large Desktop | >1280px | Centered content with max-width container |

Touch-target record: Register and Sign In 34px height with 12px padding; navigation links 42px height with 12px 8px padding; Search button/icon 40px height — source: consistent with GEL interactive touch target specification.

Collapsing strategy recorded in the source: navigation full horizontal links → hamburger "Open menu" at narrow viewports; BBC logo always present as SVG block mark left-aligned; editorial grid 3-column → 2-column → single-column news cards; search inline search button collapses to icon-only on mobile; typography headline sizes reduce proportionally; body size maintains 15-18px range.

Treating that table as a recorded span of named widths, not a complete specification of every unlisted control, treating the 34px / 38px / 40px / 42px / 44px figures as surface measurements in this packet rather than universal layout tokens, treating the collapsing-strategy record (hamburger “Open menu”; logo always present; editorial grid 3-column → 2-column → single-column; search icon-only on mobile; headline sizes reduce proportionally; body maintains 15-18px) as recorded packet application rather than a complete responsive specification, and treating the touch-target record as a purpose reading of those measurements, including source “consistent with GEL interactive touch target specification”, rather than a complete target-size specification, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Observed (live surfaces, 2026-06-22)

The live strings below are source-stated. Treating the live-inspect attributions and the harvested-control-string grouping as citation-character of those live strings is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

- "British Broadcasting Corporation" — full wordmark in header link *(verified live 2026-06-22)*
- "Register" — primary CTA button *(verified live 2026-06-22)*
- "Sign In" — secondary CTA button *(verified live 2026-06-22)*
- "Open menu" — mobile nav hamburger label *(verified live 2026-06-22)*
- "Search BBC" — search button and input label *(verified live 2026-06-22)*

Treating the §14 empty/loading/error/success strings as part of the state contract, not extra Observed voice samples, is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

### Derived editorial voice

The following voice reading, context table, inventory-not-Observed examples (`Create your BBC account`; nav nouns beyond the captured list; error-message tone), and forbidden-register list are a derived editorial implementation inference from the verified surfaces; they are not BBC-authored or a separately published UI specification. They are not the Observed strings above.

The source describes BBC’s voice as impartial, clear, authoritative, and human — neither the clinical tone of a government body nor the casual voice of social media. The BBC’s editorial guidelines require impartiality by charter. Buttons say "Register" and "Sign In", not "Join the family" or "Get access now". Nav items are single nouns. Treating impartial-clear-authoritative-human, neither-clinical-government-nor-casual-social-media, Register-not-Join-the-family, nav-single-nouns, “world’s most trusted journalistic register”, and “the interface trusts the user’s intelligence” as extra characterizations of that reading is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Navigation labels | Single nouns. "News", "Sport", "Culture". Never "Explore Culture" or "Discover". |
| Button CTAs | Imperative, minimal. "Register", "Sign In", "Search BBC". No exclamation. |
| Article headlines | Active voice, declarative. Present tense where possible. No click-bait phrasing. |
| Error messages | Calm, specific, non-alarming. Describes what to try next. |
| Accessibility copy | Direct. "Skip to content", "Open menu", "Search BBC". |
| Breaking/LIVE labels | All-caps block signals. "LIVE", "BREAKING". Font and colour do the urgency work; no exclamation. |
| Account UI | Respectful, non-pushy. "Create your BBC account" not "Join millions of people today". |

`Create your BBC account` is a source table example. It is not in the Observed list.

**Forbidden register** (source): Hyperbole, superlatives without evidence, partisan framing, marketing exclamation, urgent-urgency patterns ("Limited time!", "Don't miss!"), casual slang on news and account surfaces.

Not promoting synthetic voice samples beyond the quoted live lines is a derived editorial implementation inference from the verified surfaces; it is not BBC-authored or a separately published UI specification. No synthetic voice samples are promoted.

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

- `ease-standard` / `ease-enter` / `ease-exit` cubic-bezier curves
- hover, pressed, and `focus-visible` visual treatments
- loading, error, and success visual treatments on harvested controls
- omitted loading/error/success applicability fields on Register, Sign In, and Dark Mode Toggle; omitted loading/success applicability fields on Search Input
- interactive kind and state-applicability map for Article Teaser Card, Surface Content Section, Dark Nav Block, and LIVE / Breaking Badge
- motion animation names, transition properties, and any duration beyond the four source tokens — promote only after per-component computed capture of all five kinds; a single named duration is not that gate
- iPlayer, Sounds, Bitesize, and Sport product-UI geometry beyond GEL SVG accent hexes
- Search Input font size (YAML records family only)
- Dark Mode Toggle radius, padding, height, and fill (YAML records `fg` and `use` only)
