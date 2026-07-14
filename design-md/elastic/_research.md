# Elastic UI research ledger — 2026-07-13

## Scope and confidence

- **Reference:** Elastic UI (`elastic`)
- **Canonical homepage:** https://eui.elastic.co/
- **Raw UI evidence authority:** `artifacts/reference-evidence/elastic.json` only
- **Capture confidence:** high for the three supplied public EUI routes (3 surfaces, coverage 93); component evidence includes 94 variants.
- **Interaction confidence:** no interaction behavior is available (`interactionCount: 0`). Static default geometry is retained; unobserved interactive behavior is absent.

## Tier 1 UI evidence

| Source | Domain | Confidence | Used for |
|---|---|---|---|
| https://eui.elastic.co/ | Public EUI framework home / product surface | High | `#1d2a3e`, `#0b64dd`, `#ffffff`, Inter live use, spacing, and compact control geometry. |
| https://eui.elastic.co/docs/components/ | Official component documentation | High | Sidebar list-item provenance, `#d9e8ff`, `#cad3e2`, control typography, and spacing. |
| https://eui.elastic.co/docs/components/containers/card/index.html | Official card documentation | High | Card-title typography, subdued surface, static toggle samples, and card/panel geometry. |

## Official design, font, and license evidence

| Source | Domain | Confidence | Use / boundary |
|---|---|---|---|
| https://eui.elastic.co/docs/getting-started/theming/tokens/typography/font-settings/ | Official EUI font documentation | High | Confirms the EUI base family stack begins with Inter; paired with loaded live evidence. |
| https://eui.elastic.co/docs/getting-started/theming/theme-provider/ | Official EUI theme documentation | High | Identifies `EUI_THEME_BOREALIS` as the default theme; framework-evolution context only, with no unobserved token promotion. |
| https://eui.elastic.co/v101.4.0/docs/getting-started/setup/ | Official EUI setup documentation | High | Describes EUI theming and local Inter embedding guidance; not a claim that Elastic owns Inter. |
| https://github.com/elastic/eui/blob/main/licenses/ELASTIC-LICENSE-2.0.md | Official EUI repository license | High | Elastic License 2.0 source for EUI software; do not conflate with a font license. |
| https://github.com/elastic/eui/blob/main/licenses/SSPL-LICENSE.md | Official EUI repository license | High | SSPL v1 is the other license named in the EUI documentation. |

## Company and brand-context evidence

| Source | Confidence | Facts retained | Not promoted into |
|---|---|---|---|
| https://www.elastic.co/about/press/elasticsearch-changes-name-to-elastic-to-reflect-wide-adoption-beyond-search | High | Elasticsearch project origin (2010), Elastic founding (2012), and 2015 rename for broader product scope. | Colors, components, or fonts. |
| https://www.elastic.co/blog/redesigning-product-logos-and-icons-while-building-a-design-hierarchy-at-elastic | High | Iterative product-logo/icon hierarchy for a multi-product company. | EUI UI tokens or a current marketing-surface claim. |
| https://www.elastic.co/celebrating-lucene | High | Elastic’s connection to Lucene contributors and the company’s early timeline. | UI metrics and component facts. |

## Tier 2 attempts

| Route | Attempt result | Confidence / effect |
|---|---|---|
| https://getdesign.md/elastic | Built-in web reader returned an internal error on 2026-07-13. | No observation; no token, component, or absence conclusion. |
| https://styles.refero.design/?q=Elastic | Built-in web reader returned an internal error on 2026-07-13. | No observation; no token, component, or absence conclusion. |

## Reconciliation decisions

1. UI colors, typography metrics, spacing, radius, and the sole canonical component are derived from the supplied computed-style packet, not from narrative or Tier 2 material.
2. Inter is promoted because it is both loaded in the packet and specified in official EUI font documentation. Roboto Mono is declared-only with zero visible uses, so it is omitted.
3. The high-confidence documentation sidebar row is promoted as `listItem`, not `button`: the evidence is an observed `li` row and does not establish button semantics.
4. No hover, focus, pressed, transition, or motion value is published because the packet contains no interaction events. Checked, unchecked, and disabled toggle samples stay evidence-only.
5. No unresolved conflict is recorded: the Tier 2 failures provide no competing value, and `verification_v2.conflicts` is empty.
