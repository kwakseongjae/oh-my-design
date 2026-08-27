# Datarize provenance

Not part of the portable `DESIGN.md`. Source ledger, canonical proof, evidence classes, and disposition evidence for the T2-1 Wave 18 migration candidate. Canonical source remains `web/references/datarize/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | datarize |
| name | Datarize |
| display_name_kr | 데이터라이즈 |
| country | KR |
| category | marketing |
| homepage | https://www.datarize.ai |
| primary_color | `#191919` |
| logo | favicon `https://www.google.com/s2/favicons?domain=datarize.ai&sz=128` |
| verified | 2026-07-13 |
| added | 2026-06-26 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

Token note: July desktop evidence covers Datarize-owned Korean marketing home, blog, and pricing surfaces. It does not cover the authenticated console, GitBook documentation chrome, or an official design system.

Source DESIGN SHA-256: `a2d407d367e9c11d5548375f5e69b217354f3a026ffe782cd7d828503e85403b`.

## Verification v2

| Field | Value |
|---|---|
| schema | 2 |
| checked | 2026-07-13 |
| conflicts | `[]` |
| canonical sibling | `web/references/datarize/.verification.md` |
| sibling SHA-256 | `f65cf03d6a51907ad67731fb7b1536b03e08a266bbc043e448816274a5b06e35` |

### Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://www.datarize.ai/ | 2026-07-13 |
| blog | editorial | https://www.datarize.ai/blog/hidden_product | 2026-07-13 |
| pricing | pricing | https://www.datarize.ai/pricing | 2026-07-13 |

### Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.datarize.ai/ | 2026-07-13 |
| blog-live | product-surface | https://www.datarize.ai/blog/hidden_product | 2026-07-13 |
| pricing-live | product-surface | https://www.datarize.ai/pricing | 2026-07-13 |
| about | official-doc | https://www.datarize.ai/en/about | 2026-07-13 |
| terms | official-doc | https://policy.datarize.ai/en/terms | 2026-07-13 |
| product-guide | official-doc | https://datarize.gitbook.io/docs/guide-en | 2026-07-13 |
| pretendard-project | official-doc | https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md | 2026-07-13 |
| pretendard-license | license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | 2026-07-13 |

The collector labels the three live routes `product-surface`, but their URLs and content are marketing, blog, and pricing. Terms identify `console.datarize.ai` as the service page; it was not captured. GitBook contributed product context only.

### Claim ledger

YAML anchors: `home` = home / home-live / live-inspect / 2026-07-13; `blog` = blog / blog-live / live-inspect / 2026-07-13; `pricing` = pricing / pricing-live / live-inspect / 2026-07-13.

| Surface anchor | Exact claim paths |
|---|---|
| home | `tokens.colors.action`, `tokens.colors.canvas`, `tokens.colors.hairline`, `tokens.colors.ink`, `tokens.colors.link`; `tokens.rounded.full/md/pill/sm`; `tokens.shadow.none`; `tokens.spacing.lg/md/section/sm/xl/xs/xxl/xxxl`; `tokens.typography.cta.size/use/weight`; `tokens.typography.display-hero.lineHeight/size/tracking/use/weight`; `tokens.typography.family.marketing`; `tokens.typography.nav.lineHeight/size/use/weight`; `tokens.typography.section.lineHeight/size/tracking/use/weight` |
| blog | `tokens.colors.body`; `tokens.typography.body.lineHeight/size/use/weight` |
| pricing | `tokens.colors.surface`; `tokens.components.pricing-tab.bg/fg/font/padding/radius/states/type/use` |

## Deterministic proof method

The sibling uses supplied deterministic collector evidence only (`artifacts/reference-evidence/datarize.json`): no browser re-run and no MCP source. Bundle: three desktop 1440×900 public routes, coverage 77, 12 component variants, and two interaction kinds.

## Token record

| Group | Exact source values |
|---|---|
| colors | canvas `#ffffff`; ink `#191919`; action `#111111`; body `#5d6875`; link `#007aff`; surface `#f2f5fa`; hairline `#e5e7eb` |
| typography | marketing family `Pretendard`; display-hero `64 / 700 / 83.2 / -3.2`; section `44 / 600 / 57.2 / -0.05`; body `16 / 400 / 24`; nav `15 / 500 / 21`; cta `16 / 600` |
| spacing | xs `6`; sm `8`; md `10`; lg `14`; xl `16`; xxl `20`; xxxl `24`; section `32` |
| rounded | sm `8`; md `10`; pill `50`; full `999` |
| shadow | none `none` |

The legacy body adds a verified supporting-heading tuple `24 / 600 / 33.6 / -1.2` and explicit component radii 50px, 100px, and 999px. Prior `#f9ff91`, `#f7ff91`, `#ffef42`, and `#466cf3` were absent from July observations and remain negative history, not current tokens.

## Component record and raw proof

- Action-ink anchor, `home::[data-omd-capture="11"]`: `#111111` / white; `0px solid #ffffff`; 50px; `14px 24px`; 16px / 600; height 47px.
- Shared-ink anchor: `#191919` / white; `0px solid #ffffff`; 50px; `14px 24px`; 15px / 600; height 46px; captured on home, blog (`surface-2`), and pricing (`surface-3`) at capture 10.
- Outline anchor, home capture 12 and pricing capture 16: transparent; `#111111`; `1px solid #111111`; 100px; `14px 24px`; 16px / 600; height 49px.
- Locale button, home capture 8 and shared: transparent; `#191919`; `1px solid transparent`; 8px; `10px 12px`; full raw stack `"Pretendard Variable", Pretendard, -apple-system, "system-ui", system-ui, Roboto, sans-serif`; 15px / 500; height 40px.
- Testimonial navigation, home captures 18/19: transparent; black; `1px solid #e5e7eb`; 8px; `1px 6px`; height 48px.
- Pricing selected tab, `surface-3` capture 11: white / `#191919`; 999px; `8px 16px`; 12px / 400; height 34px; `aria-selected: true`. Captures 12/13 (`tab-0-0`, `tab-1-0`) were transparent before interaction and white after selection.
- Pricing tablist, `surface-3::div[role="tablist"]`: `#f2f5fa`; `1px solid rgba(25, 25, 25, 0.1)`; 999px; 5px; height 46px.
- Email input, `surface-2` capture 15: transparent; black; border-width 0px; `Pretendard Regular`; 15px / 400. A `form-error` event occurred without distinct style or message.
- `home::body`: white; shadow none; generic `sans-serif`; 12px. This body-root tuple is not promoted over element-level loaded-face evidence.
- Homepage H1 raw: `"Pretendard Bold", "Pretendard Bold Placeholder", sans-serif`; 64px / 700 / 83.2px / -3.2px.
- Homepage H2 raw: `"Pretendard SemiBold", "Pretendard SemiBold Placeholder", sans-serif`; 44px / 600 / 57.2px / -0.05px.

The YAML `pricing-tab` primitive record is preserved exactly: type `tab`; white / `#191919`; radius `999px`; `8px 16px`; `12px / 400 Pretendard`; states “selected and alternate selection captured after tab interaction”; use “Observed selected pricing tab on the public pricing surface”.

## Font source and usage reconciliation

| Evidence class | Exact finding | Disposition |
|---|---|---|
| Live computed + loaded | Regular 177; Medium 85; SemiBold 58; Variable 13 with 92 jsDelivr source URLs; Bold 3 | Portable captured marketing family/roles |
| Computed without loaded match | Literal Pretendard 21 | Not promoted as separate verified face |
| Loaded, weakly corroborated | Inter 1 visible use, no source URL | Not a Datarize token |
| Declared-only | Fragment Mono, Inter Placeholder, Pretendard Black/ExtraBold and placeholder declarations; 0 visible uses | Not promoted |
| Official asset / licence | Pretendard web distribution and SIL OFL 1.1 | Font source/licence boundary only; not Datarize ownership |

## Tier 2 and conflict boundary

- getdesign direct open was rejected as unsafe; a site search found the catalog but no Datarize entry. This is no accessible entry evidence in that turn, not a permanent-absence claim.
- Refero direct open was rejected as unsafe; searches produced no Datarize result. This is no accessible result evidence in that turn, not a permanent-absence claim.
- Attempted Tier-2 URLs: https://getdesign.md/datarize and https://styles.refero.design/?q=datarize.
- Tier 1 controls marketing ink, CTAs, pricing tabs, and typography. Tier 2 is non-confirmatory, not contradictory.
- The prior lime/yellow/royal-blue palette is removed from current tokens because it was absent from fresh Tier 1 raw observations.
- The form-error event has no visual sample; error treatment remains unspecified.
- Conflicts unresolved: none.

## Context, country, and asset evidence

- https://www.datarize.ai/en/ — first-party marketing: “Behavior Captured. Growth Automated.”, product areas, data-to-action framing; no visual token from web search.
- https://www.datarize.ai/en/about — company/mission, Autonomous Marketing Intelligence, behavior signals, leadership/offices; narrative only.
- https://policy.datarize.ai/en/terms — CRM solution, data collection/analysis/profiling/marketing services, and console URL; product boundary only.
- https://datarize.gitbook.io/docs/guide-en — installation, audiences, campaigns, analytics, settings, onboarding; information architecture only.
- Pretendard project/license URLs — font distribution/licence corroboration only.
- KR brand-owned sources: marketing home, pricing, blog, and About.
- Favicon entry retained. It was not recaptured or re-evaluated; no logo claim was added.

Exact proof color-function forms: `rgb(255,255,255)`; `rgb(17,17,17)`; `rgba(0,0,0,0)`; `rgb(25,25,25)`; `rgb(229,231,235)`; `rgb(242,245,250)`; `rgb(0,0,0)`.

## Persona and state disposition

The source contains no named fictional personas. The three portable audience roles are official-flow scope labels, not invented biographies. State proof is limited to pricing default/selection and a form-error event without visual treatment. No loading, success, disabled, toast, or console state is promoted.

## Proof notes

- Portable derived-editorial scope includes Scope surface/source/marketing-product boundaries, visual characterization, tasks, audience grouping/evidence classification, distinctive selection, implementation principles/avoidances, semantic-role/current-token boundaries, spacing-cluster/placement judgments, shape/elevation/motion boundaries, font evidence/promotion/ownership/product-scope and family-substitution boundaries, asset authority, state evidence, each component family/kind/applicability judgment, tablist omission, layout boundary, content direction plus attribution/console-copy boundaries, and governance.
- Each carries adjacent complete wording: derived editorial implementation inference; not Datarize-authored or a separately published UI specification.
