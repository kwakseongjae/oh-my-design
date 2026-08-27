# Expo provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence classes, and disposition evidence for the Expo migration candidate. Canonical source remains `web/references/expo/DESIGN.md` until catalog adoption.

Source `DESIGN.md` SHA-256: `0014c9fa640b65165cce430fddbbdc3e38efc78145a9ab18035fb30e973060a2`
Canonical sibling `.verification.md` SHA-256: `3ad30895e8696fb42cc5490d67159236311cdd71858748107a4fab1f9bb21a24`

## Identity

| Field | Value |
|---|---|
| id | expo |
| name | Expo |
| country | US |
| category | developer-tools |
| homepage | https://expo.dev |
| primary_color | `#000000` |
| logo | type `simpleicons`, slug `expo` |
| verified | 2026-07-13 |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The logo record is a third-party icon-set entry (Simple Icons), not an Expo-distributed brand file. The portable contract carries that boundary without naming the icon set; the exact record lives only in this row.

## Design-system record (source `ds` block)

| Field | Value |
|---|---|
| ds.name | Expo Brand Guidelines |
| ds.url | https://expo.dev/brand |
| ds.type | brand |
| ds.description | *“Official guidance for using Expo's registered name, logo, wordmark, and brand assets; it is distinct from live marketing and documentation UI evidence.”* |

`ds.type: brand` is a ledger field (A1c) and is recorded here rather than in the portable contract. The description's boundary — brand guidance is distinct from live marketing and documentation UI evidence — is carried in the portable Typography & Assets section in prose, without the URL.

Token note from source: *“Only the 2026-07-13 first-party marketing bundle is token authority. Brand guidance, product documentation, font licensing, and Tier 2 analysis remain separate evidence domains.”* The portable Scope carries the same boundary in prose; the phrase “Tier 2 analysis” is rendered there as independent third-party analysis, because the tier vocabulary is a grading of this ledger and not an Expo fact.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| evidence packet captured | 2026-07-13T11:47:50.954Z |

Conflicts unresolved: none. Structured `verification_v2.conflicts` is `[]`; the canonical footer uses the repository-standard exact value `none`.

## Verification v2

| Field | Value |
|---|---|
| schema | 2 |
| checked | 2026-07-13 |

### Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://expo.dev/ | 2026-07-13 |
| surface-2 | marketing | https://expo.dev/services | 2026-07-13 |
| surface-3 | marketing | https://expo.dev/pricing | 2026-07-13 |

### Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://expo.dev/ | 2026-07-13 |
| services-live | product-surface | https://expo.dev/services | 2026-07-13 |
| pricing-live | product-surface | https://expo.dev/pricing | 2026-07-13 |
| brand-official | brand-asset | https://expo.dev/brand | 2026-07-13 |
| about-official | official-doc | https://expo.dev/about | 2026-07-13 |
| eas-docs | official-doc | https://docs.expo.dev/eas/ | 2026-07-13 |
| inter-license | license | https://github.com/rsms/inter | 2026-07-13 |
| jetbrains-mono-license | license | https://github.com/JetBrains/JetBrainsMono | 2026-07-13 |

Named in the canonical sibling but not in `verification_v2.sources`:

| url | class | use / boundary |
|---|---|---|
| https://expo.dev/blog/what-expo-s-series-b-funding-means-for-you | first-party company/product evolution | April 2026 Series B and Expo Agent context. Narrative only; supplies no UI token. |

### Tier 1

- https://expo.dev/
- https://expo.dev/services
- https://expo.dev/pricing
- https://expo.dev/brand
- https://expo.dev/about
- https://docs.expo.dev/eas/

### Tier 2

- https://getdesign.md/expo/design-md — opened 2026-07-13. Identifies itself as an independent analysis and is not affiliated with Expo. Its dark-theme summary was resolved in favor of the current inspectable first-party light surfaces and was not used as token authority.
- https://styles.refero.design/?q=Expo — requested 2026-07-13; the endpoint returned an internal error, so it supplies no positive or negative component claim.

### Tier 2 conflict matrix (canonical sibling)

| Field | Tier 1 raw evidence | getdesign | refero | Resolution |
|---|---|---|---|---|
| Marketing theme | current home, services, and pricing are light: `#f0f0f3`, white, `#1c2024`, black actions | independent summary calls Expo “Dark theme, tight letter-spacing, code-centric” | `?q=Expo` query attempted; endpoint returned an internal error | retain first-party live marketing values; do not import the independent theme claim |
| Typography | Inter loaded/high 990 uses; JetBrains Mono loaded/high six uses | no inspectable font evidence used | unavailable from attempted query | retain only collector-backed families |
| Component geometry | selectors and exact 32px, 36px, 48px actions plus 8px dialog | no component specification used | unavailable from attempted query | retain Tier 1 provenance only |

The light-marketing-versus-dark-summary discrepancy is explicitly resolved in favor of the inspectable first-party capture. No unresolved promoted token conflict remains.

## Claim ledger

Claims use the YAML anchors from the source: `marketing` = surface `home` / source `home-live` / method `evidence-bundle-live-inspect` / captured 2026-07-13; `pricing` = surface `surface-3` / source `pricing-live` / method `evidence-bundle-live-inspect` / captured 2026-07-13.

| claim | anchor |
|---|---|
| tokens.colors.primary / canvas / surface / foreground / muted / subtle / on-primary / hairline / control-border / link | marketing |
| tokens.typography.family.ui / family.mono | marketing |
| tokens.typography.hero.size / weight / lineHeight / tracking / use | marketing |
| tokens.typography.section.size / weight / lineHeight / tracking / use | marketing |
| tokens.typography.subheading.size / weight / lineHeight / tracking / use | marketing |
| tokens.typography.body.size / weight / lineHeight / use | marketing |
| tokens.typography.action.size / weight / lineHeight / use | marketing |
| tokens.typography.code.size / weight / lineHeight / use | marketing |
| tokens.spacing.xs / sm / md / lg / xl / xxl | marketing |
| tokens.rounded.dialog | pricing |
| tokens.rounded.action / hero-action / full | marketing |
| tokens.components.header-primary.type / bg / fg / radius / padding / height / font / states / use | marketing |
| tokens.components.pricing-action.type / bg / fg / radius / padding / height / font / states / use | pricing |
| tokens.components.pricing-dialog.type / radius / shadow / font / states / use | pricing |

## Exact token record (source YAML)

| Path | Value |
|---|---|
| colors.primary | `#000000` |
| colors.canvas | `#f0f0f3` |
| colors.surface | `#ffffff` |
| colors.foreground | `#1c2024` |
| colors.muted | `#60646c` |
| colors.subtle | `#80838d` |
| colors.on-primary | `#ffffff` |
| colors.hairline | `#e0e1e6` |
| colors.control-border | `#d9d9e0` |
| colors.link | `#0d74ce` |
| typography.family | ui `Inter`, mono `JetBrains Mono` |
| typography.hero | size 64, weight 600, lineHeight 1.10, tracking -3, use “Current marketing hero heading” |
| typography.section | size 48, weight 600, lineHeight 1.10, tracking -2, use “Repeated marketing section heading” |
| typography.subheading | size 32, weight 600, lineHeight 1.10, tracking -0.5, use “Marketing subheading” |
| typography.body | size 14, weight 400, lineHeight 1.40, use “Repeated marketing body and list text” |
| typography.action | size 14, weight 500, lineHeight 1.40, use “Compact action label” |
| typography.code | size 12, weight 500, lineHeight 1.60, use “Observed code-oriented marketing text” |
| spacing | xs 4, sm 8, md 12, lg 16, xl 24, xxl 32 |
| rounded | dialog 8, action 36, hero-action 48, full 9999 |
| components.header-primary | type `button`, bg `#000000`, fg `#ffffff`, radius `36px`, padding `0 16px`, height `36px`, font `14px / 500 / Inter`, states “hover and pressed observed; pressed background #010101”, use “Repeated header conversion action across the three marketing surfaces” |
| components.pricing-action | type `button`, bg `#000000`, fg `#ffffff`, radius `32px`, padding `0 12px`, height `32px`, font `12px / 500 / Inter`, states “hover background #010101 and pressed background #030304 observed”, use “Pricing-surface compact action that opens a dialog” |
| components.pricing-dialog | type `dialog`, radius `8px`, shadow `rgba(0,0,0,0.1) 0px 10px 20px, rgba(0,0,0,0.05) 0px 3px 6px`, font `16px / 400 / Inter`, states “dialog-open observed”, use “Observed pricing dialog panel; fill was not promoted because the captured panel is transparent” |

Line heights are unitless ratios in the source YAML (`1.10`, `1.40`, `1.60`) and appear as the same ratios in the source typography table; both forms are the same value and are preserved as ratios, never converted to fixed pixels. Tracking is recorded as unitless numbers in YAML (`-3`, `-2`, `-0.5`) and as `-3px` / `-2px` / `-0.5px` in the source typography table; both forms are preserved.

The named spacing mapping (`xs` 4, `sm` 8, `md` 12, `lg` 16, `xl` 24, `xxl` 32) and the named radius mapping (`dialog` 8, `action` 36, `hero-action` 48, `full` 9999) are recorded here. The portable contract carries the same numbers as the source prose does — a working scale and role-specific radii — because the source's own prose, not the YAML key names, is what the marketing capture establishes.

## Capture selectors and raw samples (canonical sibling)

From `web/references/expo/.verification.md`. Retained here as evidence pointers; they are not portable contract values.

| Surface and selector | Actual computed observation |
|---|---|
| `home::[data-omd-capture="9"]` | `rgb(0, 0, 0)` background, `rgb(255, 255, 255)` text, `36px` radius, `0px 16px` padding, `36px` height, Inter `14px`/500 |
| `home::[data-omd-capture="9"]::state-pressed` | pressed background `rgb(1, 1, 1)` with the same `36px` radius and `0px 16px` padding |
| `home::[data-omd-capture="11"]` | `rgb(0, 0, 0)` background, white text, `48px` radius, `0px 24px` padding, `48px` height, Inter `16px`/500 |
| `home::[data-omd-capture="12"]` | `rgb(240, 240, 243)` background, `rgb(28, 32, 36)` text, `48px` radius, `0px 24px` padding, `48px` height |
| `surface-3::[data-omd-capture="23"]` | `rgb(0, 0, 0)` background, white text, `32px` radius, `0px 12px` padding, `32px` height, Inter `12px`/500 |
| `surface-3::[data-omd-capture="23"]::state-hover` | hover background `rgb(1, 1, 1)` |
| `surface-3::[data-omd-capture="23"]::state-pressed` | pressed background `rgb(3, 3, 4)` |
| `surface-3::[data-omd-interaction-capture="dialog-0-1"]` | `8px` radius; shadow `rgba(0, 0, 0, 0.1) 0px 10px 20px 0px, rgba(0, 0, 0, 0.05) 0px 3px 6px 0px`; Inter `16px`/400; `dialog-open` |
| typography aggregate | Inter `64px`/600/`70.4px`/`-3px` for hero; Inter `48px`/600/`52.8px`/`-2px` for sections; Inter `14px`/400/`19.6px` for repeated body text |
| color aggregate | `#1c2024` text 530 occurrences, `#60646c` text 265, `#0d74ce` text 25, `#f0f0f3` background 13 across the marketing bundle |

The sibling's computed pixel line heights (`70.4px`, `52.8px`, `19.6px`) are the rendered products of the unitless ratios at their captured sizes. The source `DESIGN.md` promotes the ratios, not those pixel figures, so the portable contract carries the ratios and the pixel figures stay in this ledger.

The `surface-3` dialog selector is one of the two dialog interactions the packet records; the panel is transparent, so no fill value exists to promote.

## Font resolution (canonical sibling)

| Family / claim | Computed surface use | FontFaceSet / source corroboration | Resolution |
|---|---|---|---|
| Inter | 990 visible uses; loaded/high | `https://static.expo.dev/static/fonts/inter-latin-ext.woff2` and `inter-latin.woff2` | Promoted as `tokens.typography.family.ui`. |
| JetBrains Mono | six visible uses; loaded/high | first-party `jetbrains-mono-*` WOFF2 files | Promoted as `tokens.typography.family.mono`, not as general UI type. |
| `ui-monospace` | two computed uses | no matching loaded FontFace or known system mapping | Unresolved; omitted, never substituted for JetBrains Mono. |
| Declared-only | none in the supplied bundle | — | Nothing to record. |

Official font/license context: Inter’s official repository states SIL OFL 1.1; JetBrains Mono’s official repository states OFL 1.1 and permits commercial and non-commercial use. The collector confirms first-party web delivery, not a separately distributed Expo-owned font asset. No first-party announcement in this packet assigns an Expo-exclusive product family.

## Narrative and specification evidence (not interface tokens)

| Source | Evidence class | Facts used | Boundary |
|---|---|---|---|
| https://expo.dev/ | Live marketing surface | Current framework and cloud-service positioning; building, deploying, and iterating on apps. | Also the token-authority surface for this reference. |
| https://expo.dev/about | Official company context | Founded 2015; creator and enterprise audience; React Foundation founding member; AI-native universal-app direction. | Corporate domain; supplies no marketing UI token. |
| https://expo.dev/blog/what-expo-s-series-b-funding-means-for-you | First-party company/product evolution | April 2026 $45 million Series B; introduction of Expo Agent. | Narrative only; not evidence for authenticated EAS or native-client tokens. |
| https://expo.dev/brand | Official brand guidelines | Simple, spacious, consistent, universally approachable, technically excellent; guidance for name, logo, wordmark, and brand assets. | Brand-asset domain; not a source for marketing component measurements. |
| https://docs.expo.dev/eas/ | Official EAS documentation | Service vocabulary: Build, Submit, Update, Workflows, Hosting; deeply integrated cloud services covering build, submission, update, workflow, hosting, and observability. | Documentation domain, not marketing-token evidence. |
| https://github.com/rsms/inter | Official upstream font/license | Inter under SIL OFL 1.1. | Describes the font, not an Expo-exclusive asset. |
| https://github.com/JetBrains/JetBrainsMono | Official upstream font/license | JetBrains Mono under OFL 1.1; commercial and non-commercial use permitted. | Describes the font, not an Expo-exclusive asset. |

Marketing, documentation, corporate, brand-asset, font-license, native-product, and authenticated-product domains remain separate. Only the three collected marketing surfaces promote UI tokens.

## Reconciliation notes (canonical sibling)

- Replaced the legacy `#000020` frontmatter color with the current first-party black primary action `#000000`.
- Removed legacy purple, error, success, widget, input, generic card, generic shadow, responsive, state, and motion claims without current representative evidence.
- Replaced prose-derived tokens with reconciled collector-backed tokens and per-token frontmatter claim provenance.
- Rewrote the component section around five observed component variants. Each preserves its surface, selector, and captured state boundary; no unobserved hover, focus, or form variant was added.
- Corrected the company narrative to the official About page’s 2015 founding statement and removed third-party founder/history claims not needed for this first-party reverify.

These notes describe changes the canonical source already made before this migration. They are recorded here as source history, not as a claim about the current portable contract.

## Proof notes

- Evidence packet: `artifacts/reference-evidence/expo.json`, captured `2026-07-13T11:47:50.954Z`. Packet scope: three first-party marketing surfaces, 39 component variants, two dialog interactions, four observed state kinds, and coverage 85/100.
- The packet contains no authenticated EAS product surface, no native app surface, and no documentation-chrome capture; none of those domains supplies a canonical UI token.
- Uncaptured interaction treatments are omitted values. They are not `not-applicable`; applicability follows control meaning, and state coverage is not claimed complete.
- The pricing dialog panel is left without an interactive kind or a canonical state-applicability map: the source establishes an observed panel with a `dialog-open` state, not a control role. Recorded as a decision, not as an omission.
- The two hero action variants carry no primitive type in the source. They are read as interactive controls in the portable contract on control meaning alone, and that reading is qualified as a derived editorial inference there.
- Pressed is preserved as an additional observed state outside the seven canonical ones, with its measured `#010101` and `#030304` values, rather than being folded into hover.
- No fictional persona, demographic, biography, or satisfaction claim exists in the source; none is introduced here or in the portable contract. The source's audience section says “two supported audience groups” and then lists three; that discrepancy is carried unchanged in the portable Audience and is not reconciled here.
- The source contains no `[FILL IN]` placeholder, so none was quoted here and none was emitted.
- The source contains no non-Latin copy. Its brand-published Latin strings are the three imperative calls (“Get started for free,” “Read the docs,” “Talk to our team.”), the EAS service names (Build, Submit, Update, Workflows, Hosting), the brand-character words (simple, spacious, consistent, universally approachable, technically excellent), `Expo Agent`, `React Foundation`, `ui-monospace`, `Inter`, and `JetBrains Mono`. All are carried byte-for-byte in the portable contract.
- Derived scope: the portable body carries twenty-five editorial-inference qualifier sentences, each naming both halves of the class (derived editorial implementation inference from the verified surfaces / not Expo-authored or a separately published UI specification). Counted against the body, they cover: the contract-boundary choice at the three captured routes and the treatment of documentation chrome, authenticated product UI, native clients, and brand-asset rules as domains the capture does not reach; the separation of published guidance from live computed observation; the one-light-marketing-system and calm-and-usable readings; the product-shape reading of the home page and the limit that the company and funding narrative carries no authority over authenticated EAS or native-client tokens; the primary-task selection; the grouping of the first-party material into three audience labels and the statement of what each group is served by; the trait characterizations; the four principles and their UI implications; the five application rules and the five prohibitions; the color role labels; the representative-element condition for promoting an observed value to a brand or semantic role; the decision to hold `#010101` / `#030304` apart from `#000000`; the spacing working-scale reading; the role-specific-rather-than-universal radius reading; the reading of flat actions plus one measured panel shadow as insufficient grounds for a generic elevation token together with the promotion of that shadow only as the dialog panel's own field; the five-kind per-component motion promotion gate; the font evidence-class sorting, the reading of those classes as domains that may not fill one another, and each item's promotion decision; the family-promotion condition and the restriction of JetBrains Mono to the code-oriented role it was observed in; the logo-record classification together with holding the brand-asset page apart from the marketing component measurements; every applicability row and the role reason beside it, the decision to leave unmeasured treatments empty rather than fill or negate them, and the decision to keep pressed as a separate observed state instead of folding it into hover; the hero-action control reading; the dialog-panel kind judgment; the layout readings, including reading the brand guidance as consistent with the observed presentation without letting it supply a layout value; the voice reading; and the placement of documentation chrome, authenticated product UI, native clients, and brand-asset rules outside the contract's scope rather than inside its unresolved list. Everything outside those qualifiers is a measured value, a published Expo statement, or a source-recorded boundary.
