# PatternFly — research ledger

**Reference:** PatternFly (`patternfly`)
**CREATE date:** 2026-07-14
**Raw UI evidence date:** 2026-07-13
**Scope:** public PatternFly.org home and documentation only

## Confidence

- **High — raw UI tokens and selected components:** `artifacts/reference-evidence/patternfly.json` records three surfaces, loaded FontFace-backed Red Hat Text/Display use, repeated color/spacing/radius values, and selector-backed primary-action and featured-card defaults.
- **High — product/system context:** official About, Typography, Theming, Components Overview, and Release Highlights pages directly describe PatternFly’s purpose, font roles, theme architecture, and current V6 evolution.
- **Medium — narrative synthesis:** the connection between public documentation tone and recommended agent language is an editorial synthesis of the official open-source/enterprise framing; it is not a quoted corporate voice guide.
- **Absent — license assertion:** an official download link was attempted but returned a Red Hat contact form rather than an inspectable license. No license fact is asserted.
- **Absent — interaction/responsive/state evidence:** the artifact reports zero interaction snapshots and one desktop viewport. Those groups are not reconstructed from documentation examples.

## Source ledger

| Tier / kind | URL | Accessed | What it supports | Boundary |
|-------------|-----|----------|------------------|----------|
| Tier 1 / product-surface | https://www.patternfly.org/ | 2026-07-13 packet | Public home computed styles, loaded fonts, primary action and featured card | Not a downstream Red Hat product surface |
| Tier 1 / product-surface | https://www.patternfly.org/components/button/ | 2026-07-13 packet | Button-documentation samples and default geometry | No interaction snapshot; no state value promotion |
| Tier 1 / product-surface | https://www.patternfly.org/design-foundations/colors/ | 2026-07-13 packet | Foundation-documentation samples | Not a semantic-token authority beyond observed values |
| Tier 1 / official-doc | https://www.patternfly.org/get-started/about-patternfly/ | 2026-07-14 | Open-source purpose, Red Hat sponsorship, community and release cadence | Context, not computed tokens |
| Tier 1 / official-doc | https://www.patternfly.org/foundations-and-styles/typography/ | 2026-07-14 | Official Red Hat Text/Display/Mono roles; heading/body scale context | License was not exposed by the retrieved destination |
| Tier 1 / official-doc | https://staging.patternfly.org/foundations-and-styles/theming/ | 2026-07-14 | Default/Project Felt separation; color scheme and contrast architecture | Do not merge theme values into Default tokens |
| Tier 1 / official-doc | https://www.patternfly.org/get-started/release-highlights | 2026-07-14 | PatternFly 6 evolution, high contrast, Project Felt, glass | Evolution context, not a captured component style |
| Tier 1 / official-doc | https://www.patternfly.org/components/overview/ | 2026-07-14 | Component purpose, lifecycle, and documentation structure | No measured values for absent components |
| Tier 2 attempt | https://getdesign.md/patternfly | 2026-07-14 | Attempted | Internal error; no usable record |
| Tier 2 attempt | https://styles.refero.design/?q=PatternFly | 2026-07-14 | Attempted | Internal error; no usable record |

## Raw evidence inventory

- Surfaces: `home` (`https://www.patternfly.org/`), `surface-2` (button documentation), and `surface-3` (color foundations), all 1440×900.
- Coverage: score 66; 27 variants across button, card, and listItem detection; 0 observed states; 0 interaction kinds; 0 interaction snapshots.
- Loaded fonts: Red Hat Text (349 uses, high confidence, four matching WOFF2 URLs); Red Hat Display (12 uses, high confidence, four matching WOFF2 URLs).
- Declared-only fonts: Red Hat Mono, Font Awesome 5 Free, pf-v6-pficon. They are retained in verification context and omitted from UI typography tokens.
- Promoted components: primary action at `home::[data-omd-capture="2"]`; featured card at `home::#featured-blog-post-1`. Both retain their public-home provenance.

## Reconciliation decisions

1. The public home’s `#0066cc` is retained as an observed primary value, not as a claim about every Red Hat product or Project Felt.
2. Official typography roles corroborate the live Red Hat Text/Display use; Red Hat Mono remains declared-only because the raw packet records no visible use.
3. The corpus has multiple button examples, but only the primary default and one static card are promoted. The remaining variants remain raw proof, not inferred product facts.
4. Default geometry is preserved despite zero interactions. Only unobserved state values are removed.
5. Theme, high-contrast, glass, motion, responsive, and semantic-state groups are kept separate or omitted because their exact values were not present in the supplied packet.
