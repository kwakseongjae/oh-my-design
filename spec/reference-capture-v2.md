# Reference capture v2 — evidence before interpretation

Status: CAP0-A0 through A2 implemented on 2026-07-11.

## Decision

The retired catalog MCP is not part of reference collection or reverify. Skills and agents need capabilities, not a protocol dependency:

- local browser automation (Playwright core or browser-harness);
- filesystem access for versioned evidence artifacts;
- ordinary HTTP/search access for official documentation and licenses;
- a high-reasoning model for reconciliation;
- deterministic validators that alone assign public quality status.

MCP may be added later as an optional adapter for another host, but it must never own catalog truth, extraction, scoring, or scheduling.

## Pipeline

```text
URL / reference id
  → deterministic multi-surface capture
  → ReferenceEvidenceBundle v1
  → model reconciliation (omd:add-reference)
  → DESIGN.md + verification_v2 claims
  → deterministic quality gates
  → Reference AST
  → evidence-aware detail renderer
```

The raw bundle is ephemeral and reproducible. The reviewed DESIGN.md and its atomic verification graph remain the catalog source of truth.

Brands whose canonical homepage redirects to authentication or hides representative routes from crawlers may define checked-in overrides in `config/reference-capture-routes.json`. Overrides are limited to first-party public product, documentation, brand, font, or license surfaces. Authentication, account, checkout, and administrative surfaces are rejected after redirects as well as before navigation.

## Extraction rules

### Color

Capture the computed `color`, `backgroundColor`, and `borderColor` of visible semantic elements. Normalize rgb/rgba to six-digit hex, drop transparent values, count occurrences per property and surface, and retain a representative `surfaceId + selector + raw style`. Frequency proposes candidates; it does not decide semantic roles such as primary or error.

### Spacing and shape

Cluster observed pixel values from padding, margin, gap, and border radius. Keep zero radius but discard zero spacing. Do not infer a spacing scale from CSS declarations that never reach a visible element. A model may name clusters only after checking their element roles and surfaces.

### Typography and fonts

Font identity is a chain of evidence, not a string scrape:

1. read the first computed family on visible text by role;
2. match it against `document.fonts` after page load;
3. parse captured CSS `@font-face` declarations and source URLs;
4. discover official font, typography, brand-asset, and license pages;
5. classify each family as `loaded`, `declared`, `system`, or `unresolved`;
6. store usage count and roles, and keep license state separate from visual use.

For a company without a public design system, repeated computed use backed by a loaded FontFace is strong evidence of the live UI typeface. It is not evidence that the font is redistributable. A declared but unused face stays secondary; a computed name with no matching face stays unresolved. Product-native app typography cannot be inferred from a marketing website alone.

### Components

Prefer semantic tag, role, ARIA state, and input type over class-name heuristics. Group occurrences by a stable visual fingerprint, preserve surface and interaction-state differences, and score coverage conservatively.

- coverage below 45 or one public product surface: cap at 3–6 observed components;
- 45–69: medium coverage; do not canonicalize low-confidence one-offs;
- 70+ plus two product surfaces or an official DS: rich harvest is allowed;
- public DS specs and live computed values remain separate evidence when they conflict.

Component accuracy is measured by provenance and state/surface coverage, not by matching a competitor's raw component count.

### Interaction expansion

The collector now records both passive pseudo-states and safe active expansions:

- hover, focus, and pressed computed-style snapshots are retained as state-specific elements;
- menu/listbox triggers with ARIA popup semantics are opened and their menu/menuitem surfaces captured;
- dialog triggers are opened and dialog descendants captured;
- unselected tabs are activated and selected tab + visible panel captured;
- required-field invalid states are requested without submitting network forms;
- toast/status capture is opt-in via `data-omd-action="toast"`, avoiding unsafe guesses about side-effectful public buttons.

Every active expansion is stored in `interactions[]` with kind, trigger, targets, and state labels. Coverage reports interaction count and distinct kinds. The schema remains additive v1 so existing raw bundles remain readable.

### Deterministic fixture gate

`npm --prefix web run capture:fixture:check` serves a local known-CSS fixture and runs the real Chrome collector against menu, dialog, form-error, tab, and toast transitions. It evaluates component types, states, font status, and colors with micro precision/recall/F1. CI requires all three metrics to remain at or above 0.95. The 2026-07-11 baseline is 1.0 / 1.0 / 1.0.

The fixture also contains a navigation-changing tab. It must not be clicked or counted as a UI-state expansion, and repeated selector matches are deduplicated by their stable capture marker. Authentication/transaction URL rejection is covered separately with route-policy unit cases.

### KRDS collector validation

The first KRDS run exposed a route-discovery blind spot: official docs use singular `/style/` and `/component/` paths, so the original generic matcher captured only the homepage. Generic discovery now recognizes singular paths, and checked-in KRDS overrides select eight official home/style/component surfaces. The resulting local bundle has 8 surfaces, 1,934 visible uses of loaded `Pretendard GOV`, 51 component fingerprints, 5 observed states, and 6 safe dialog expansions. Coverage is 94/100 after removing class-name false positives such as `open-modal` button → dialog and `lnb-toggle` navigation button → toggle. The opened modal surface remains a dialog; its trigger remains a button.

Capture route configuration accepts either a route array with the default three-surface budget or `{ routes, maxRoutes }` up to eight. The reverify queue reads the same per-reference budget, so a later scheduled KRDS run cannot silently regress from eight surfaces back to three.

## Renderer contract

Every reference page must make uncertainty legible before decorative previews:

- public quality status;
- grounded claims / total claims;
- product-surface and source counts;
- UI font origin and confidence;
- documented component count and harvest state;
- unresolved reason codes;
- later: per-claim evidence drawer, REAL/SUBSTITUTE/SYSTEM font badge, and version diff.

The preview may render only canonical AST values. Raw capture candidates never bypass reconciliation into user-facing tokens.

## Execution queue

1. Capture and reconcile Toss; validate Product Sans and component coverage.
2. Run the same packet for Karrot, Apple, Kakao, then Baemin native/app evidence.
3. ~~Add interaction expansion for menus, dialogs, form errors, tabs, and toasts.~~ Complete.
4. ~~Add fixture pages with known CSS/fonts/states and measure precision/recall for token and component classification.~~ Complete.
5. ~~Add provider adapters for Opus-class or high-reasoning runners with budget, retry, and per-reference PR limits.~~ Provider-neutral adapter and local ChatGPT-subscription `gpt-5.6-terra`/`high` wrapper complete; external packet execution remains explicit.
6. Ship the evidence drawer and surface switcher from `spec/preview-v2.md`.

Acceptance remains provider-neutral: a model can collect and reconcile evidence, but only deterministic gates can promote a reference to Verified v2.
