# Project design-system proof contract

An Autopilot-created or refreshed `DESIGN.md` is valid only when all applicable
groups below are present, provenance is complete, and no unresolved value is
consumed by product code.

## Required groups

1. Product and surface scope
2. Semantic color roles and measured contrast
3. Typography roles, metrics, loading and fallback policy
4. Spacing, density, radii, elevation and layout rules
5. Responsive behavior for desktop, mobile, 320px and 200% zoom
6. Component anatomy, variants and state matrix
7. Motion and reduced-motion behavior
8. Voice, terminology and locale behavior
9. Asset, font and license policy
10. Provenance and unresolved decisions

Sections 11–13 that require product-owner narrative facts use `[FILL IN]` when
the prompt or repository does not contain those facts.

## Provenance values

Every consequential decision uses exactly one source class:

- `prompt-fact`
- `repository-fact`
- `verified-reference-inspiration`
- `agent-proposed-greenfield-decision`
- `unresolved`

An agent-proposed value is an original project proposal, not an observed brand
fact. An unresolved value is omitted from tokens and code.

## Fail-closed checks

- all referenced tokens resolve;
- color contrast meets the applicable text/control requirement;
- interactive components cover default, hover, focus, disabled, loading,
  error and success where applicable;
- responsive rules preserve task order and do not merely shrink columns;
- motion has a reduced-motion path;
- fonts and assets have source and license status;
- the system contains a complete implementation contract for semantic color,
  type, spacing, components, locale, responsive behavior, and motion;
- no product fact is inferred from a reference or generic convention; and
- provenance and coverage receipts bind the exact DESIGN.md bytes.

Any failed required check blocks product implementation until repaired. After
two bounded repairs, deliver an honest failed proof rather than force-pass.

## Machine-readable system contract

Write `system/spec.json` beside the proposal and provenance files. It is bound
to the exact `DESIGN.md` bytes and is consumed only by the deterministic
validator. `DESIGN.md` remains the source of truth.

```json
{
  "schema_version": "0.1",
  "design_md_sha256": "<sha256>",
  "tokens": {
    "colors": { "text": "#111111", "surface": "#ffffff" },
    "color_pairs": [
      { "foreground": "text", "background": "surface", "min_ratio": 4.5 }
    ],
    "typography": { "body": "declared role", "heading": "declared role" },
    "spacing": { "space-1": "4px", "space-2": "8px", "space-3": "16px" }
  },
  "components": [
    {
      "id": "primary-action",
      "interactive": true,
      "states": ["default", "hover", "focus-visible", "disabled", "loading", "error", "success"],
      "token_refs": ["colors.text", "colors.surface", "spacing.space-2"]
    }
  ],
  "responsive": {
    "minimum_width_px": 320,
    "reflow_zoom_percent": 200,
    "rules": ["Preserve task order and keep primary controls operable."]
  },
  "motion": { "reduced_motion": true },
  "assets": [
    { "id": "none", "source_status": "none", "license_status": "not-required" }
  ],
  "voice_locale": { "locales": ["en"] },
  "unresolved": []
}
```

Every color token ID and value must also appear in `DESIGN.md`. Color-pair
contrast is calculated by the validator. Interactive components must declare
all seven states shown above. An unresolved path must not also appear under
`tokens` or `components`. Product-code conformance is deliberately not claimed
at this pre-build stage; the final same-route proof owns that check.
