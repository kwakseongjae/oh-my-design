# EasyWallet provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration of `easywallet`. Canonical source remains `web/references/easywallet/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | easywallet |
| name | EasyWallet |
| country | TW |
| category | fintech |
| homepage | https://easywallet.easycard.com.tw |
| primary_color | `#007bc6` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=easywallet.easycard.com.tw&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

The logo pointer is a third-party favicon-service URL, not an EasyWallet- or EasyCard-distributed brand asset. It stays here and is not named as a reusable asset in the portable document.

Token note from source, verbatim:

> primary = EasyWallet brand blue (#007bc6) used for text-highlight blocks on easywallet.easycard.com.tw intro site; magenta (#e4007f) = circle/decorative accent; yellow (#f6ac19) = nav border + step line; teal (#66ecd2) = loading overlay (brand teal family); body text #333333.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| Tier 1 live inspect | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| voice samples verified live | 2026-06-22 |

Conflicts unresolved (as recorded by the source): none. Two field-level disagreements were found during migration and are carried unreconciled in the portable body — see **Carried conflicts** below.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| intro | product-marketing site | https://easywallet.easycard.com.tw | 2026-06-22 |
| corporate | corporate site | https://www.easycard.com.tw/ | 2026-06-22 |

Method: Tier 1 live inspect via Playwright `getComputedStyle` — full CSS extraction, heading text, and color frequency on the intro site; CSS color system, `btn` classes, and font family on the corporate site.

### Tier 1 sources

- https://easywallet.easycard.com.tw
- https://www.easycard.com.tw/

### Tier 2 (no usable record)

- getdesign.md/easywallet — not found
- refero easywallet — not found

## Raw observations (source comment, verbatim values)

| Observation | Recorded value |
|---|---|
| body font | `"Noto Sans TC", "PingFang TC", 微軟正黑體, Semibold, "Microsoft JhengHei", Arial, sans-serif` |
| nav bar | white bg, 58px height, 2px bottom border `rgb(247, 177, 70)` `#f7b146` |
| loading overlay | `rgb(102, 236, 210)` `#66ecd2` — EasyCard transit teal |
| hero brand blue highlight blocks | `rgb(0, 123, 198)` `#007bc6` |
| magenta circle accent | `rgb(228, 0, 127)` `#e4007f` |
| yellow step line | `rgb(246, 172, 25)` `#f6ac19` |
| text on feature scenes | `rgb(89, 81, 83)` `#595153` |
| success step | `rgb(64, 167, 49)` `#40a731` |
| app-download button | `rgb(0, 0, 0)` `#000000` |
| scene transition | 0.5s between full-viewport scenes |

## Claim ledger

| Claim | Evidence domain |
|---|---|
| `tokens.colors.*` (`#007bc6`, `#006ba8`, `#66ecd2`, `#e4007f`, `#f6ac19`, `#f7b146`, `#40a731`, `#ffffff`, `#efefef`, `#333333`, `#595153`, `#413b3b`, `#bfbfbf`, `#000000`) | intro + corporate, computed style |
| `tokens.typography.*` (family, hero-xxl, hero-lg, hero-sub, section-title, sub-title, highlight, nav, body, caption, download-cta) | intro, computed style; family corroborated on corporate |
| `tokens.spacing.*` (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64) | intro |
| `tokens.rounded.*` (4 / 8 / 16 / 9999, plus 0 on EasyCard nav links) | intro + corporate |
| `tokens.shadow.card` / `tokens.shadow.nav` | intro |
| `tokens.components.button-download` | intro |
| `tokens.components.button-blue` / `button-outline-blue` / `button-yellow` / `button-magenta` (incl. hover `#006ba8`, `#f59205`, `#d5007d`) | corporate `btn` classes |
| `tokens.components.highlight-block` | intro |
| `tokens.components.card-surface` / `card-white` | intro |
| `tokens.components.nav-item` | intro + corporate |
| `tokens.components.badge-green` / `circle-feature` | intro |
| `tokens.components.input-default` | not attributed by the source — the token record and the component declaration give the role and values without naming a surface |
| Voice samples 「一卡一付 無現生活更進一步！」 / 「智慧升級，放心悠遊！」 / 「悠遊付=最聰明的電子錢包」 | intro homepage, verified live 2026-06-22 |
| Brand narrative (EasyCard Corporation as Taiwan's transit-card operator, 2002 launch) | publicly documented company history — narrative context, not interface tokens |
| Product-level state treatments other than the `#66ecd2` launch overlay | derived editorial interpretation of public positioning; no computed in-app observation |
| Motion durations `100ms` / `150ms` / `750ms`, the two-register motion split, the teal loading-overlay opacity fade, and the reduced-motion behavior | derived editorial interpretation; only the `500ms` / `0.5s` scene transition is corroborated by the live inspect |
| `ease-enter` / `ease-exit` `cubic-bezier(0.39, 0.575, 0.565, 1)` | attributed in the source to EasyCard CSS native easing; the attribution is carried with the value |
| The four readings named in Scope (「BEEP!」 as the EasyCard reader's tap, `#66ecd2` as transit identity carried into the digital product, continuity rather than replacement, trust inherited from the card) | derived editorial implementation inference from the observed surfaces and public positioning; qualified adjacent in the portable body |
| Audience stakeholder groups (EasyCard holders moving to the phone; everyday riders and shoppers) | derived editorial inference from the published positioning and the documented EasyCard usage domains; the source's persona archetypes are deleted, not rehosted |
| The five Principles and their UI implications | derived editorial implementation inference from the verified surfaces and public positioning |
| The first eight Avoid items (the ninth is an evidence boundary, not an inference) | derived editorial implementation inference from the observed surfaces |
| The three type principles | derived editorial implementation inference from the observed hierarchy |
| The elevation reading (scene-color shifts as the main separation device) | derived editorial interpretation of the observed surfaces |
| The layout reading (full-viewport scenes and their 0.5s transitions as the central experience) | derived editorial interpretation of the observed layout |
| Voice characterization, the bilingual-gloss handling rule, and the forbidden register | derived editorial interpretation of the published copy; the quoted strings themselves are published values |
| Brand Teal's heritage attribution where it recurs in Foundations semantic color | same reading as the Scope item above; qualified adjacent there as well |

## Carried conflicts

| Field | Value A | Value B | Handling |
|---|---|---|---|
| Nav item foreground | `#000000` (token record) | `#ffffff` on the dark nav overlay (component description) | Both carried in the portable body; neither chosen. |
| Caption tracking | `0.1em` (token record) | `0.17em` (hierarchy listing) | Both carried in the portable body; neither chosen. |

**Why a third disagreement was adjudicated instead of carried.** The two rows above are the same field recorded twice at the same evidence class — a token record against a component or hierarchy listing, both first-party, with nothing in the source ranking one above the other. There is no basis on which to pick, so both are carried. The "five equal circles" disagreement is not of that shape: it sets an illustrative count inside a tool-facing example prompt against 四大優勢 (four advantages), the component's own published name, which is brand-published copy. A published brand string outranks a number written into a prompt wrapper, and the wrapper's whole class was deleted as tool-facing packaging. That one was decidable; these two are not.

## Omission and deletion ledger

| Item | Disposition |
|---|---|
| Fictional persona archetypes | Deleted. The source labels them fictional archetypes. They are not promoted to Audience or primary tasks, and their demographic segments are not re-listed here. |
| "Taiwan's leading mobile payment app" | Deleted. An unsourced market-position superlative with no supporting evidence in either inspection or in the cited company history. |
| "five equal circles" (feature selector count) | Deleted, not carried as a conflict. An illustrative count inside a tool-facing example prompt, disagreeing with 四大優勢 — the component's own published name. Unlike the two carried conflicts, this one pits brand-published copy against a number in a prompt wrapper whose whole class was deleted, so it is decidable. See **Carried conflicts** for the policy statement. |
| Tool-facing quick color reference, example component prompts, and iteration guide | Deleted as tool-specific prompt wrappers. Their component-level values (feature-circle inactive treatment and active drop-shadow, download-CTA two-column layout with vertical separator and center alignment, nav app-logo placement) were moved into Components & States rather than dropped. |
| `focus-visible` treatment | Absent in the source. Applicability is declared by control meaning; no treatment value is emitted. |
| Domain names the source never establishes | Withheld from the portable body. `authenticated-account` and `offline signage` were drafted into the scope boundary, the font-evidence table, and the avoidance list, then removed: neither domain appears anywhere in the source, so naming it as an out-of-scope or unresolved domain would assert an existence the source does not establish. `app` and `promotional campaign` are established by the source and are kept. |

## Proof notes

- `components_harvested: true`; 12 component records in the source token block, projected as 5 interactive declarations (one with 4 named variants) and 4 non-interactive declarations.
- No `[FILL IN]` placeholder exists in the source, and none is emitted.
- Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- The six `not-applicable` rows — `loading`, `error`, and `success` on Nav Menu Item, and the same three on Feature Selector Circle — are declared for role reasons (the control owns no pending work of its own and reports no failure or confirmation on itself), never for absence of observation.
- The intro site, the corporate site, and the EasyWallet app are separate evidence domains. Corporate-site button values are labelled as such in the portable body, because §2 and §4 of the source attribute them to that site. The form input carries no surface label: the source attributes none, and inferring one from the button attribution would cross the domain boundary this scope sets (B1).
