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
- code uses declared semantic tokens rather than undeclared literals;
- no product fact is inferred from a reference or generic convention; and
- provenance and coverage receipts bind the exact DESIGN.md bytes.

Any failed required check blocks product implementation until repaired. After
two bounded repairs, deliver an honest failed proof rather than force-pass.
