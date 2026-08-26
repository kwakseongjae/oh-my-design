# ElevenLabs provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, selectors, and proof for the ElevenLabs migration candidate. Canonical source remains `web/references/elevenlabs/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | elevenlabs |
| name | ElevenLabs |
| country | US |
| category | ai |
| homepage | https://elevenlabs.io |
| primary_color | `#000000` |
| logo | Simple Icons — `type: simpleicons`, `slug: elevenlabs` |
| omd format (source) | 0.1 |
| ds.name | ElevenLabs Brand |
| ds.url | https://elevenlabs.io/brand |
| ds.type | brand |
| ds.description | Official logo, symbol, naming, and platform-brand guidance. |
| ds.og_image | https://elevenlabs.io/cover.png |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

Token note from source, verbatim: "Selector-backed values come only from supplied public marketing, editorial, and pricing captures. Official brand, documentation, policy, authenticated-product, and declared-font evidence remain separate."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 (public capture) · 2026-07-13 (official context) |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none. `verification_v2.conflicts` is `[]`.

Machine artifact: `artifacts/reference-evidence/elevenlabs.json`, captured `2026-07-12T16:27:29.719Z`. The canonical sibling `web/references/elevenlabs/.verification.md` records that this update used the supplied artifact only — no browser recapture and no MCP session was run. The artifact records three public routes, five component types, 48 component variants, two structural states, zero interaction expansions, and coverage score 84.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://elevenlabs.io/ | 2026-07-12 |
| customer-story | editorial | https://elevenlabs.io/blog/clay-scales-content-production-and-agility-with-elevencreative | 2026-07-12 |
| pricing | marketing-pricing | https://elevenlabs.io/pricing | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| public-capture | product-surface | https://elevenlabs.io/ | 2026-07-12 |
| official-about | official-doc | https://elevenlabs.io/about | 2026-07-13 |
| official-brand | brand-asset | https://elevenlabs.io/brand | 2026-07-13 |
| official-docs | official-doc | https://elevenlabs.io/docs/overview/intro | 2026-07-13 |
| official-safety | official-doc | https://elevenlabs.io/safety | 2026-07-13 |

### Tier 1

- Supplied deterministic capture of https://elevenlabs.io/, https://elevenlabs.io/blog/clay-scales-content-production-and-agility-with-elevencreative, and https://elevenlabs.io/pricing (captured 2026-07-12).
- Official context at https://elevenlabs.io/about, https://elevenlabs.io/brand, https://elevenlabs.io/docs/overview/intro, and https://elevenlabs.io/safety.

### Tier 2

- https://getdesign.md/elevenlabs/design-md — independent, non-affiliated high-level analysis; no numeric token promoted. Its "dark cinematic" characterization conflicts with the supplied light public capture and was not promoted.
- https://styles.refero.design/?q=ElevenLabs — attempted; the built-in web tool returned an internal error, so no absence claim is made and no usable comparison record exists.

### Narrative and context sources (not interface tokens)

| URL | Source use recorded by the canonical sibling |
|---|---|
| https://elevenlabs.io/about | Official current company description, three platforms, Impact program, team/culture framing, safety position. Used for legacy §§1, 10, 12, 13. |
| https://elevenlabs.io/press | Official founder origin account, black/white logo assets, platform overview. Used for legacy §§1, 11. |
| https://help.elevenlabs.io/hc/en-us/articles/27583713738257-What-is-ElevenLabs | Official 2022 founding, dubbing motivation, accessibility mission. Used for legacy §11. |
| https://elevenlabs.io/brand | Linked from the source as "Brand guidelines". Official mark construction, correct names, platform-specific color/graphic direction, trademark boundary. Used for legacy §§1, 2, 7, 12. |
| https://elevenlabs.io/docs/overview/intro | Official audience/product descriptions and developer-documentation context. Used for legacy §§10, 13; no docs-chrome value promoted. |
| https://elevenlabs.io/safety | Official safety principles and safeguards. Used for legacy §§10, 12. |

## Evidence-domain boundaries

| Domain | Permitted use | Boundary |
|---|---|---|
| Public marketing, editorial, pricing | The supplied raw capture is the only source for canonical visual tokens and component values | Not an authenticated ElevenLabs product capture |
| Authenticated product | none | No dashboard/editor/voice-library component, state recipe, or product palette is asserted |
| Documentation chrome | Official docs/product-audience context only | Typography and component values are not promoted |
| Official brand assets | Mark construction, naming, per-platform identity direction | Not a source for unlisted UI CSS values, a font asset, or a font license |
| Declared font assets | Declaration/loading status only | Not UI-family tokens or specimen claims |

No mobile viewport, logged-in application route, browser interaction expansion, or official font-license document was inspected.

## Claim ledger

All `verification_v2.claims` entries resolve to the same YAML anchor `&public`: surface `home`, source `public-capture`, method `live-inspect`, captured `2026-07-12`.

| Claim group | Claims |
|---|---|
| Color | `tokens.colors.canvas`, `.surface`, `.foreground`, `.muted`, `.hairline`, `.primary`, `.on-primary` |
| Typography family | `tokens.typography.family.ui`, `.display` |
| Typography display | `tokens.typography.display.size`, `.weight`, `.lineHeight`, `.use` |
| Typography body | `tokens.typography.body.size`, `.weight`, `.lineHeight`, `.use` |
| Typography control | `tokens.typography.control.size`, `.weight`, `.lineHeight`, `.use` |
| Spacing | `tokens.spacing.xs`, `.sm`, `.md`, `.lg`, `.xl`, `.xxl` |
| Rounded | `tokens.rounded.sm`, `.md`, `.lg`, `.full` |
| Component | `tokens.components.public-selected-tab.type`, `.radius`, `.padding`, `.font`, `.states`, `.use` |

## Token record

| Group | Source values, as recorded |
|---|---|
| colors | canvas `#ffffff`; surface `#f5f3f1`; foreground `#000000`; muted `#777169`; hairline `#e5e5e5`; primary `#000000`; on-primary `#ffffff` |
| typography.family | ui `Inter`; display `Waldenburg` |
| typography.display | size `48`; weight `300`; unitless lineHeight `1.08`; use "Waldenburg h1 on captured public marketing home" |
| typography.body | size `18`; weight `400`; unitless lineHeight `1.60`; use "Inter repeated body/list text on captured public routes" |
| typography.control | size `15`; weight `400`; unitless lineHeight `1.00`; use "Inter public primary-action sample" |
| spacing | xs `4`; sm `6`; md `8`; lg `12`; xl `16`; xxl `20` |
| rounded | sm `4`; md `12`; lg `16`; full `9999` |
| public-selected-tab | type `tab`; radius `14`; padding `0px 21px 0px 20px`; font `18px/400 Inter`; states "selected via aria-selected=true; no measured visual delta"; use "One public-home selected tab; not a product-wide component contract" |

The three unitless line-height ratios `1.08`, `1.60`, and `1.00` are carried as ratios in the portable file's type-role table; the `1.17` public-section-heading ratio comes from the source's own hierarchy table and is carried there too.

## Component selectors and exact observations

| Component | Pointer | Observation summary |
|---|---|---|
| Black public action | `home::[data-omd-capture="63"]` | `rgb(0, 0, 0)` / `#000000` on text `rgb(255, 255, 255)` / `#ffffff`; 9999px radius; 0px 14px padding; Inter 15px/400/15px |
| White public action | `home::[data-omd-capture="97"]`, also repeated on the supplied public routes | `rgb(255, 255, 255)` / `#ffffff`; `#000000`; 9999px radius; shadow with `rgba(0, 0, 0, 0.4)` 1px edge and `rgba(0, 0, 0, 0.04)` 1px/2px lift. No semantic label is inferred from capture text length |
| Warm public pill | `home::[data-omd-capture="32"]` | `rgb(245, 243, 241)` / `#f5f3f1`; `#000000`; 9999px radius; 0px 16px padding; Inter 15px/400/22px |
| Editorial card | `home::article` | `rgb(255, 255, 255)` / `#ffffff`; 16px radius; `rgba(0, 0, 0, 0.4)` 1.143px edge plus `rgba(0, 0, 0, 0.04)` 0px 2px 4px shadow. No dashboard-card variant is inferred |
| Listbox trigger | `home::[data-omd-capture="59"]` | transparent background; `#000000`; 12px radius; 0px 8px 0px 12px padding; Inter 15px/500/22px; `aria-haspopup="listbox"`. The artifact has no menu-open interaction capture |
| Selected public tab | `home::[data-omd-capture="12"]` | transparent background; `#000000`; 14px radius; 0px 21px 0px 20px padding; Inter 18px/400/28.8px; `role="tab"`, `aria-selected="true"`. The selected structural state has no measured visual delta |
| Captured h1 | `home`, captured h1 | Waldenburg 48px/300/52px, -0.96px tracking; loaded/high family evidence |
| Repeated public text | public routes | Inter 18px/400/28.8px and `#777169` muted text recur across all three supplied routes |
| Disabled buttons | home capture | Present structurally, with no component text or visual-state contract; not promoted into the component set |

The portable file carries the source's own component values (radius, padding, font, background, text, shadow). The `data-omd-capture` pointers, `rgb()` forms, and the resolved pixel line heights (`15px`, `22px`, `28.8px`, `52px`) and `-0.96px` tracking above are capture-level detail kept here.

## Font proof

| Family / claim | Computed use | Source corroboration | Disposition |
|---|---:|---|---|
| Inter | 879 | loaded/high; seven ElevenLabs CDN source URLs | Live public UI/body family |
| Waldenburg | 22 | loaded/high; three ElevenLabs CDN source URLs | Live public display family; samples include a 48px/300 home h1 and 36px/300 headings |
| Geist Mono | 0 visible | declared/source evidence | Declared-only; excluded from UI-family tokens and specimen claims |
| WaldenburgFH | 0 visible | declared/source evidence | Declared-only |
| Waldenburg-ML | 0 visible | declared/source evidence | Declared-only |
| Listed fallback families | 0 visible | declared/source evidence | Declared-only; no fallback is rendered as a substitute for an identified face |

No font-license claim is made: the official brand page distributes logo/symbol files and sets trademark-use rules, and no official font-license source was found in the material reviewed.

## Tier 2 conflict matrix (from the canonical sibling)

| Field | Tier 1 supplied capture / official source | getdesign | Refero | Resolution |
|---|---|---|---|---|
| Parent public canvas/action | `#ffffff` canvas/inverse action and `#000000` primary public action across capture | Independent page calls the brand "dark cinematic"; no raw value | Direct `?q=ElevenLabs` open returned an internal error | Tier 1 light/neutral values retained; independent summary not promoted |
| Warm public pill | Home-only `#f5f3f1`, 9999px, 0px 16px | No selector evidence | No usable record | Keep route-local public component only |
| Public card | White, 16px, low-alpha dark edge/lift on captured home article | No component values | No usable record | Keep selector-backed public-card observation only |
| Live UI families | Inter 879 uses/high and Waldenburg 22 uses/high, each with bundle source URLs | No font evidence promoted | No usable record | Retain Inter/Waldenburg live public roles |
| Geist Mono / WaldenburgFH | Declared/source-backed but zero visible uses | No corroboration | No usable record | Remain declared-only; prior UI/code and CTA claims removed |
| Platform colors | Official brand assigns Agents blue, Creative orange, API monochrome, without values in this packet | Generic waveform-oriented summary | No usable record | Keep as narrative platform boundary, not parent color tokens |

Earlier universal warm-stone CTA, Geist Mono code, WaldenburgFH uppercase-CTA, generic product form/navigation, responsive, state, and motion claims were removed by the canonical sibling because this packet does not observe them. That removal predates this migration.

## Proof notes

- Canonical sibling proof used: `web/references/elevenlabs/.verification.md`.
- `verification_v2` schema: 2; conflicts: `[]`.
- Interaction expansions: 0. Structural `disabled` buttons and `aria-selected` tabs coexist with that empty interaction record; they are structural observations, not measured interaction variants.
- Uncaptured hover, focus, pressed, expanded-menu, loading, error, and success treatments are omitted from the portable file. They are not `not-applicable` on those grounds; applicability there follows control meaning. State coverage is not claimed complete.
- Official brand, press, help-center, documentation, and safety material supplies narrative and boundary context only.

## Derived editorial range (portable)

Exact URLs, selectors, capture identifiers, and ledger metadata stay in this file. The portable file keeps the narrative propositions needed for standalone use and places a complete authority boundary adjacent to every derived editorial implementation inference. Current portable range: Scope delimitation (`DESIGN.md:9`), parent-identity characterization (`:11`) and public-capture reading (`:13`); the Origin platform-separation reading (`:18`); Primary-task selection (`:23`); Distinctive-trait grouping (`:36`); the brand-page evidence-domain reading (`:47`); the four implementation principles (`:51`) and the two further application rules (`:58`); Avoid (`:62`); semantic-color role names and bounded-use readings (`:75`) and the color role-pairing separation (`:86`); spacing rhythm reading (`:94`); the elevation edge-plus-lift reading (`:111`); Typography evidence-class disposition (`:127`) and family-promotion grounds (`:143`); the Components applicability decisions and their reasons (`:169`) and the Editorial card kind omission (`:235`); Layout rhythm reading (`:285`); and the Content voice summary and direction derivation (`:294`). The Governance authority declaration is not used as a substitute for those adjacent qualifications.
