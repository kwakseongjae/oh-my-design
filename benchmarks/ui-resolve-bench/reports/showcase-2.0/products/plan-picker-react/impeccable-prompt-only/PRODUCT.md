# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated and confirmed by the build brief: a buildless React-compatible app using only the vendored Preact + HTM runtime already wired through the import map in `index.html`. Imports are limited to `"preact"`, `"preact/hooks"`, and `"htm"`. No build step, no network, no other libraries.

## Users

Assumption, inferred from the brief (no interview answer): a prospective or renewing member comparing access tiers before committing. They are at a desk or on a phone, scanning inclusions side by side, and need to leave knowing which ledger they chose.

## Product Purpose

This surface lets a member compare three fictional membership plans, select one, and confirm the choice in a summary that restates the plan name and inclusions. Success is a confident, keyboard-reachable selection whose pressed/checked state and summary stay in lockstep.

## Positioning

Assumption: this is not a checkout, billing, or account product. It is a comparison-and-confirm instrument. The mechanism is a single shared selection state that drives card visuals, `aria-pressed` / `aria-checked`, and the summary panel together.

## Operating Context

- Entry is `index.html` with a vendored import map; the app mounts into `#app`.
- Header artwork is the provided file `./assets/header-art.jpg`.
- All plan names and amounts are sample data and must be labeled as such. Real prices, customers, and commercial claims are not inventable.
- External evaluation owns browser checks. This workspace must not launch or control browsers or use network access.

## Capabilities and Constraints

Confirmed by the brief:

- Exactly three fictional plans to compare.
- One selected plan at a time.
- Selection is keyboard reachable.
- `aria-pressed` / `aria-checked` are driven by the same state that drives the visuals.
- A summary panel updates with the chosen plan's name and inclusions.
- Pressed, hover, and selection transitions use motion tokens and respect `prefers-reduced-motion`.
- Project-owned design system projected as a theme object plus mirrored CSS custom properties.
- Do not invent real prices; label all plans and amounts as sample data.

Assumption: no account, payment, or persistence beyond the session selection.

## Brand Commitments

Assumption, inferred for a complete fictional product (no interview answer): the organization is **Meridian Rooms**, a members' reading-room society. Voice is precise, unhurried, and concrete. No real trademark or existing brand is claimed.

Binding visual/asset constraints from the brief (not aesthetic invention): use `./assets/header-art.jpg` for header artwork; theme tokens must exist as a JS object and as CSS custom properties.

## Evidence on Hand

- `./assets/header-art.jpg` — abstract geometric illustration of three ascending tiers; cool indigo-teal; no text.
- `./assets/assets-manifest.json` — generation record for that artwork.
- Vendored runtime: `./assets/vendor/preact.module.js`, `hooks.module.js`, `htm.module.js`.

Must not fabricate: real prices, real customers, testimonials, press, benchmarks, or live membership availability.

## Product Principles

1. Comparison is the job; decoration that hides inclusions fails the product.
2. One selection state is the source of truth for visuals, semantics, and the summary.
3. Sample data stays labeled sample data.
4. Keyboard and pointer must produce the same result.
5. Motion is a token, not an effect — and it yields to reduced motion.

## Accessibility & Inclusion

Confirmed by the brief: keyboard-reachable selection; `aria-pressed` / `aria-checked` bound to the same state as the visuals; motion behind `prefers-reduced-motion`. Assumption: target WCAG 2.2 AA contrast and visible focus for the picker and summary.
