# AWS Cloudscape research ledger — 2026-07-13

## Scope and confidence

- **Reference id:** `aws-cloudscape`
- **Raw UI evidence confidence:** high for values explicitly present in `artifacts/reference-evidence/aws-cloudscape.json`; no other computed-style, font, component, or interaction source was used.
- **Surface coverage:** 3 public surfaces (`/`, `/components/`, `/about/`), coverage score 83, 32 component variants, 3 dialog-opening interactions.
- **Publication boundary:** the reference covers Cloudscape's public design-system site. It does not stand in for an authenticated AWS console, another AWS product, an unrelated AWS marketing site, an unobserved visual mode, or a responsive viewport not included in the artifact.

## Source ledger

| Domain | Source | Confidence | Permitted use |
|---|---|---:|---|
| Public product/marketing surface | https://cloudscape.design/ | High | Raw values only through the supplied evidence artifact; first-party system overview in narrative. |
| Official documentation surface | https://cloudscape.design/components/ | High | Raw static-card value only through the supplied evidence artifact; component-directory context. |
| About/corporate narrative | https://cloudscape.design/about/ | High | 2016 AWS origin, open-source purpose, customer-feedback/research evolution, and current design direction. |
| Official type documentation | https://cloudscape.design/foundation/visual-foundation/typography/ | High | Open Sans primary/default product-use context; not proof of unobserved live usage. |
| Official global styles documentation | https://cloudscape.design/get-started/for-developers/global-styles/ | High | `@font-face` Open Sans distribution, visual modes, and density context. |
| Official design resources | https://cloudscape.design/get-started/for-designers/design-resources/ | High | Figma library and Open Sans design-resource context. |
| Official developer guide | https://cloudscape.design/get-started/for-developers/using-cloudscape-components/ | High | React package and global-styles implementation context. |
| Repository license | https://github.com/cloudscape-design/components/blob/main/LICENSE | High | Apache 2.0 code-license boundary only. |

## Tier 2 ledger

| Attempt | Result | Treatment |
|---|---|---|
| `https://getdesign.md/aws-cloudscape` | Built-in web open rejected the URL as unsafe. | Attempt recorded; no positive/negative conclusion and no token value used. |
| `https://styles.refero.design/?q=Cloudscape` | Built-in web open rejected the URL as unsafe. | Attempt recorded; no positive/negative conclusion and no token value used. |

## Reconciliation notes

- `#295eff` is a high-confidence repeated text/border value in the supplied capture. It is represented as `tokens.colors.link`, not as a guessed generic primary-button fill.
- Open Sans is both an official default and the only high-confidence loaded visible family in the artifact. Declared Amazon Ember and fallback entries remain outside `tokens.typography.family`.
- The promoted component is the static `surface-2::div` directory-card default with class `card`. Transparent background, 0px border, 0px padding, 0px radius, no shadow, and 305px × 272px geometry are raw measurements; only the stable token fields needed for the default card are canonicalized.
- Dialog-opening activity is preserved as interaction evidence. It does not authorize hover, focus, pressed, disabled, error, or a generic dialog-component token.
- No source conflict is unresolved: structured `verification_v2.conflicts` is `[]`, and the DESIGN.md footer uses the repository-standard `**Conflicts unresolved:** none` form.
