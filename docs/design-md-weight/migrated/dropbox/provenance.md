# Dropbox provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, selectors, and proof for the T2 migration candidate. Canonical source remains `web/references/dropbox/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | dropbox |
| name | Dropbox |
| country | US |
| category | productivity |
| homepage | https://www.dropbox.com |
| primary_color | `#0061fe` |
| logo | `type: simpleicons`, `slug: dropbox` |
| verified | 2026-06-11 |
| added | 2026-06-11 |
| omd format (source) | 0.1 |
| ds.name | Dropbox Brand Guidelines |
| ds.url | https://brand.dropbox.com |
| ds.type | brand |
| ds.description | "Official brand site (dropbox.design redirects here) — framework, voice & tone, logo, typography, iconography, color, imagery, motion." |
| tokens.source | reconciled |
| tokens.extracted | 2026-06-11 |
| components_harvested | true |

Source token note, verbatim: "Core trio from official brand site, confirmed live: Dropbox Blue #0061fe on Coconut cream #f7f5f2 with Graphite ink #1e1919. Text on blue is coconut, not pure white. Flat, shadowless marketing system."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-11 |
| added | 2026-06-11 |
| tokens.extracted | 2026-06-11 |
| Tier 1 live inspect | 2026-06-11 |
| Official brand site fetch | 2026-06-11 |
| About page fetch | 2026-06-11 |

Conflicts unresolved: none.

## Sources

### Tier 1

- https://brand.dropbox.com — official brand site (color, typography, framework, voice-and-tone, motion). `dropbox.design` 301-redirects here.
- https://brand.dropbox.com/color — official named swatches with hex, read live in the DOM.
- https://www.dropbox.com — live computed-style inspect (hero, nav, CTAs, bands, footer).
- https://www.dropbox.com/plans — live computed-style inspect, pricing surface (plan CTAs, text buttons).
- https://www.dropbox.com/about — mission, founding year, current leadership.

### Tier 2

- `styles.refero.design/style/2b41e7c4-1e8c-4ea2-a87f-51e24c57886e` (Dropbox.com — "warm cream workspace — editorial") — confirms `#0061fe`, `#f7f5f2`, `#1e1919`, `#eee9e2`, `#cd2f7b`, 16px button radius, flat shadowless system, Sharp Grotesk display + Atlas Grotesk body.
- `getdesign.md/dropbox` — not listed ("No designs found"); the `dropbox.com` variant is also not listed.

## Evidence-domain boundaries

| Domain | Permitted use | Boundary |
|---|---|---|
| Official brand guidelines (`brand.dropbox.com`) | Framework and voice pillars, color statement and named wheel, typography page, motion principles and one example curve | Supplies no measured interface token, no component specification, and no layout measurement. |
| Official brand color page DOM | Named swatch values as published | Read on the brand site, not on a product or marketing surface; a swatch value is not evidence of where the hue renders. |
| Live marketing/pricing inspect (`www.dropbox.com`, `/plans`) | Computed color, type, radius, padding, height, border, box-shadow, frequency scans | Public marketing and pricing pages only; supplies no guideline statement and no product file-management screen. |
| About page | Mission, founding year, leadership, product list | Narrative context, not interface tokens. |
| Widely documented public facts | Arash Ferdowsi as co-founder; the forgotten-USB-drive origin | The source states these are not on the fetched about page and were not verified in the same turn. |
| Tier 2 directories | Corroboration only | No value enters the contract from Tier 2 alone. |

## Claim ledger

The source's YAML token block is `tokens.source: reconciled`, `tokens.extracted: 2026-06-11`, resolving the official brand site against the 2026-06-11 live inspect.

| Claim group | Claims |
|---|---|
| Color | `primary`, `coconut`, `graphite`, `canvas`, `surface-white`, `sand`, `graphite-deep`, `muted`, `on-primary`, `azalea`, `sunset`, `tangerine`, `crimson` |
| Typography | `family.display`, `family.body`; `display-hero.*`, `section.*`, `heading-sm.*`, `subheading.*`, `body.*`, `nav.*`, `caption.*` (size / weight / lineHeight / use) |
| Spacing | `xs`, `sm`, `md`, `base`, `lg`, `xl`, `xxl`, `section` |
| Rounded | `sm`, `md`, `lg`, `full` |
| Shadow | `none` |
| Component | `button-primary`, `button-compact`, `button-outline`, `nav-link`, `card-sand`, `card-menu`, `footer-link` |

## Token record

| Group | Source values |
|---|---|
| colors | primary `#0061fe`; coconut `#f7f5f2`; graphite `#1e1919`; canvas `#f7f5f2`; surface-white `#ffffff`; sand `#eee9e2`; graphite-deep `#1c1d21`; muted `#716b61`; on-primary `#f7f5f2`; azalea `#cd2f7b`; sunset `#fa551e`; tangerine `#ff8c19`; crimson `#9b0032` |
| typography.family | display "Sharp Grotesk"; body "Atlas Grotesk" |
| typography roles | display-hero size `40` / weight `500` / unitless lineHeight `1.20` / use "Hero headline, Sharp Grotesk Medium"; section `32` / `400` / `1.20` / "Section titles, Sharp Grotesk 23 (wide cut)"; heading-sm `26` / `500` / `1.30` / "Feature block headings, Sharp Grotesk"; subheading `20` / `500` / `1.20` / "Social-proof / card heads, Atlas Grotesk"; body `16` / `400` / `1.50` / "Standard reading text, Atlas Grotesk"; nav `16` / `400` / `1.50` / "Header nav items, Atlas Grotesk"; caption `14` / `400` / `1.55` / "Footer links, legal, metadata" |
| spacing | xs `4`; sm `8`; md `12`; base `16`; lg `24`; xl `32`; xxl `48`; section `72` |
| rounded | sm `8`; md `12`; lg `16`; full `100` |
| shadow | none `"none"` |
| button-primary | type `button`; bg `#0061fe`; fg `#f7f5f2`; border `2px solid #0061fe`; radius `16px`; padding `16px 24px`; height `55px`; font `16px / 400 Atlas Grotesk`; use "Marketing/pricing CTA — Try Dropbox free, Buy now" |
| button-compact | type `button`; bg `#0061fe`; fg `#f7f5f2`; radius `12px`; padding `0 12px`; height `40px`; font `16px / 400 Atlas Grotesk`; use "Get started CTA in the 72px global header" |
| button-outline | type `button`; fg `#1e1919`; border `2px solid #1e1919`; radius `16px`; padding `16px 24px`; height `55px`; font `16px / 400 Atlas Grotesk`; use "Secondary CTA — Learn more" |
| nav-link | type `tab`; fg `#1e1919`; padding `16px 12px`; font `16px / 400 Atlas Grotesk`; use "Global header item (Products, Solutions, Pricing)" |
| card-sand | type `card`; bg `#eee9e2`; fg `#1e1919`; radius `12px`; use "Warm sand surface card alternating with cream canvas" |
| card-menu | type `card`; fg `#1e1919`; radius `12px`; padding `16px`; height `92px`; use "Mega-menu product entry card (Dropbox, Replay, Sign, Dash)" |
| footer-link | type `listItem`; bg `#1e1919`; fg `#f7f5f2`; font `14px / 400 Atlas Grotesk`; use "Footer navigation link on graphite band" |

The `nav-link` `use` string names three header items; the source's section 4 body names four ("Products", "Solutions", "Enterprise", "Pricing"). The portable file carries the four-item list from the body; both records are kept here.

The source's section 4 body also carries records absent from the YAML block: a text button (transparent, `#1e1919`, `13.33px / 400`, use "or buy now"), a hero-size primary at `71px` height with `24px` uniform padding, the outline flip to a coconut `#f7f5f2` border and text on graphite bands, the rule that filled buttons carry a 2px border in their own fill color, and a graphite band (`#1e1919` background, `#f7f5f2` text) used for full-width dark sections.

One component binding exists in neither the YAML block nor the section 4 body: the source's section 9 prompt for the mega-menu states the card title as `16px Atlas Grotesk`. Section 9 is its only occurrence, so the value moved to the portable Mega-menu Product Card record under A3 rather than being deleted with the prompt wrapper.

## Sibling verification record

Canonical sibling proof used: `web/references/dropbox/.verification.md` (2026-06-11).

**Method:** playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless, 1440×900), `goto` `load` + 6s settle, cookie/modal dismissal pass, then `getComputedStyle` on h1/h2, all buttons/CTA anchors/nav, plus visible-element background/text/radius/font frequency scans. The official brand site (`brand.dropbox.com/color`) swatch DOM was also read live.

### Raw samples

- `https://www.dropbox.com/` · H1 "Get to work, with a lot less work" · font "Sharp Grotesk" · 40px / 500 / lh 48px · color `rgb(30, 25, 25)` = `#1e1919`
- `https://www.dropbox.com/` · H2 "Join the over 700 million registered users who trust Dropbox" · font "Atlas Grotesk Web" · 20px / 500 / lh 24px · `rgb(30, 25, 25)`
- `https://www.dropbox.com/` · H2 "Find it fast, every time" · Sharp Grotesk · 26px / 500 / lh 33.8px · `rgb(30, 25, 25)`
- `https://www.dropbox.com/` · H2 "Security never comes second" · 26px / 500 · color `rgb(247, 245, 242)` = `#f7f5f2` (on dark band)
- `https://www.dropbox.com/` · H2 "Dropbox empowers across industries" · font "Sharp Grotesk 23" · 32px / 400 / lh 38.4px
- `https://www.dropbox.com/` · header CTA "Get started" · bg `rgb(0, 97, 254)` = `#0061fe` · fg `rgb(247, 245, 242)` · radius 12px · padding 0px 12px · h 40px · border 2px solid `rgb(0, 97, 254)`
- `https://www.dropbox.com/` · hero CTA "Try Dropbox free" · bg `rgb(0, 97, 254)` · fg `rgb(247, 245, 242)` · radius 16px · padding 24px · h 71px · border 2px solid `rgb(0, 97, 254)` · box-shadow none
- `https://www.dropbox.com/` · outline CTA "Learn more" / "Try Dropbox free" · bg transparent · fg `rgb(30, 25, 25)` · border 2px solid `rgb(30, 25, 25)` · radius 16px · padding 16px 24px · h 55px
- `https://www.dropbox.com/` · nav items "Products" / "Solutions" / "Pricing" · transparent bg · `rgb(30, 25, 25)` · padding 16px 12px · header row h 72px
- `https://www.dropbox.com/` · mega-menu product cards (Dropbox / Replay / Sign / Dash / DocSend) · radius 12px · padding 16px · h 92px · fg `rgb(30, 25, 25)`
- `https://www.dropbox.com/` · footer links · color `rgb(247, 245, 242)` · 14px (on graphite band)
- `https://www.dropbox.com/` · visible bg frequency: `rgb(247,245,242)` ×15, `rgb(255,255,255)` ×13, `rgb(238,233,226)` ×9, `rgb(30,25,25)` ×5, `rgb(0,97,254)` ×4, `rgb(28,29,33)` ×3
- `https://www.dropbox.com/` · visible fg frequency: `rgb(30,25,25)` ×554, `rgb(247,245,242)` ×201, `rgba(82,74,62,0.82)` ×92 (muted taupe ≈ `#716b61` over cream), `rgb(205,47,123)` ×3
- `https://www.dropbox.com/` · radius frequency: 12px ×60, 16px ×9, 100px ×3, 8px ×3
- `https://www.dropbox.com/` · font frequency (visible elements): "Atlas Grotesk Web" ×286, "Sharp Grotesk" ×17, "Sharp Grotesk 23" ×2
- `https://www.dropbox.com/plans` · "Buy now" / "Try for free" buttons · bg `rgb(0, 97, 254)` · fg `rgb(247, 245, 242)` · radius 16px · padding 16px 24px · h 55px · border 2px solid `rgb(0, 97, 254)` · box-shadow none
- `https://www.dropbox.com/plans` · tertiary text button "or buy now" · transparent · fg `rgb(30, 25, 25)` · 13.3333px
- `https://brand.dropbox.com/color` · official swatches, live DOM text: Dropbox Blue `#0061FE` · Coconut `#F7F5F2` · Graphite `#1E1919` · Azalea `#CD2F7B` · Pink `#FFAFA5` · Crimson `#9B0032` · Sunset `#FA551E` · Rust `#BE4B0A` · Tangerine `#FF8C19` · Gold `#9B6400`

The Pink, Rust, and Gold swatch values above exist only in this sibling record; the source `DESIGN.md` names those three accents without a value, so the portable file names them without one too. The portable Named gaps bullet states that distinction in place — those three are gaps in the source's record, not unresolved swatches — so the omission does not read as a failed resolution.

### Conflict matrix

| Field | Tier 1 (live / brand site) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary blue | `#0061fe` (live + `#0061FE` on the brand site) | — | `#0061fe` | `#0061fe`. The Simple Icons logo fill is `#0061FF`, one bit off; the official and live value is kept. |
| Secondary text | `rgba(82, 74, 62, 0.82)` (live) | — | "Stone Gray `#716b61`" | The live rgba is ground truth; `#716b61` is retained as the flattened composite over the cream canvas. |
| CTA label font | 16px / 400 (live anchor CTAs; `<button>` elements computed 13.33px, a UA default leaking in headless where the custom font-size was not applied) | — | 14px / 500 | 16px / 400 from live anchors is used for marketing CTAs; the plans-page `<button>` 13.33px sample is kept as the tertiary text-button size. |
| Button radius | 12px (header compact) + 16px (standard CTA), both live | — | 16px | Both real — recorded as two variants. |
| Shadows | `box-shadow: none` everywhere measured | — | "no drop shadows" | Agreement — shadowless system. |

No unresolved conflicts.

### Logo decision

- The Google favicon proxy returned 332 bytes of HTML (an error page, not an image) for `dropbox.com`, and 336 bytes for the `www.dropbox.com` variant — unusable for this domain.
- `https://cdn.simpleicons.org/dropbox` returned HTTP 200 with a valid SVG (fill `#0061FF`), so the catalog logo is `type: simpleicons`, `slug: dropbox`.

### Official brand site record

- `https://dropbox.design` → 301 → `https://brand.dropbox.com/` (Framework, Voice & Tone, Logo, Typography, Iconography, Color, Imagery, Motion).
- Color page: core trio + 16 accents + a 20-step grey scale.
- Typography page: DB Sharp Grotesk custom typeface by Sharp Type, variable headline weights.
- Voice & Tone page: Simple / Helpful / Human / Magic pillars with verbatim examples.
- Motion page: four principles + the `cubic-bezier(0.65, 0, 0.45, 1)` example curve.
- About page: mission "design a more enlightened way of working", founded 2007, Drew Houston Co-Founder/Co-CEO, Co-CEO Ashraf Alkarmi.

## Proof notes

- The source's own HTML comment is the evidence ledger for its philosophy layer. It assigns the official brand site to sections 10–15, live inspect to all measured token values in sections 1–9, and the about page to the narrative. It gives the state table no separate origin entry.
- Motion durations 120ms / 240ms / 400ms are recorded by the source as illustrative scale values consistent with the observed motion; only `cubic-bezier(0.65, 0, 0.45, 1)` is officially documented. The portable file keeps the durations with that class attached and omits the second, unattributed curve value.
- The unattributed `ease-exit` value in the source matches the `cubic-bezier(0.4, 0.0, 1, 1)` example table in the legacy spec template `spec/omd-v0.1.md`, which the repository now marks as a non-brand implementation default. It is dropped from the portable file at the value boundary; the token name and its use survive there.
- The source marks its own interpretive claims — naming "the system is shadowless by design" and the coconut-on-blue "warmth preserved at full contrast" reading as editorial readings connecting observed values to the stated framework rather than direct Dropbox statements. Both boundaries are carried in the portable body next to the sentences they qualify.
- The source's persona section is fictional archetypes, stated by the source not to refer to real people. The archetypes, their names, ages, cities, and biographies are dropped and are not re-hosted here. No persona content became a primary task or an audience claim.
- No browser capture was rerun and no MCP was used for this migration; the record above is the 2026-06-11 verification as the source and its sibling recorded it.

## Derived editorial range (portable)

Exact source URLs and ledger metadata stay in this file; the portable text keeps the narrative and boundary propositions it needs to stand alone, with a complete authority boundary adjacent to every derived editorial inference. Current portable range, by line in `DESIGN.md`: the two-domain contract boundary and the accent-swatch seam between them (`:11`); the warm-editorial / reddish-undertone / coconut-on-blue readings (`:13`); the two-font-register reading (`:15`); the flat-depth, separation, geometry, and band readings (`:17`); the narrative-not-tokens disposition (`:19`); the refuses/embraces readings (`:21`); the primary-task selection (`:27`); the audience restriction (`:36`); the distinctive-trait readings — paper-warm/editorial, warmth-at-full-contrast, single-action-color, flat/shadowless separation, and the 12px workhorse ranking (`:49`); the principle *UI implication* notes and item 5 (`:63`); the Do list (`:71`); the Avoid list (`:84`); the two evidence-domain boundary rules (`:95`); the color role/domain assignments and the decision to carry the further accent names with no value attached (`:130`); the spacing system reading (`:134`); the shape emphasis reading (`:138`); the shadowless-by-design and hierarchy readings (`:149`); the reduced-motion reading (`:166`); the motion-curve characterization and the five-evidence promotion gate (`:168`); the font evidence-class sorting (`:183`); the font substitution rule (`:189`); the type-rule readings (`:209`); the asset-authority boundary (`:213`); the component evidence boundary, primitive/kind dispositions, and every applicability judgment and reason (`:224`, `:381`, `:389`); the button-family rule hoist (`:226`); the state-table class statement (`:396`); the layout rhythm readings and the pricing-panel relocation (`:415`); the desktop-capture and responsive-row disposition (`:429`); the voice summary and Tone descriptors (`:434`); the forbidden-register extension (`:451`); the byte-for-byte reproduction rule for brand-published strings (`:453`); and the named-gap selection (`:489`). The reconstruction boundary in Governance is not used as a substitute for any of those adjacent qualifications.
