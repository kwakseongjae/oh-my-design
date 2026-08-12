# Atlas Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Atlas helps an operations lead triage a time-sensitive queue without losing the
record being reviewed. The interface is calm, direct, and evidence-led. Preserve
task order and show the consequence of an action before committing it. Avoid
decorative urgency, generic dashboard density, and claims that are not established.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

- Triage a time-sensitive record while preserving its identity.
- Review the consequence of an action before committing it.
<!-- design-md:claim-end -->

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
Use **Text Strong** (`#17181c`) on **Surface Base** (`#ffffff`) for primary reading.
Use **Action Blue** (`#2457e6`) only for actionable emphasis. The base spacing unit is
4px; use 8px within controls and 16px between related groups. Corners use 8px where a
container needs separation. Transitions are 160ms and become immediate when reduced
motion is requested.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

Body text is 16px/1.5 and headings are 28px/1.2 at weight 650. The project currently
has no verified custom font, logo, or illustration asset, so none is prescribed here.
Do not render a substitute as a project asset.

<!-- design-md:section components-states -->
## 4. Components & States

The primary action has label and optional progress content. It supports default,
hover, focus-visible, disabled, loading, error, and success states. Focus-visible uses
a non-color-only outline. Loading preserves the label width and prevents duplicate
submission. Error identifies the failed action and its recovery path.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Preserve reading and task order from wide screens down to 320px and at 200% zoom.
Stack the evidence summary before the action surface when two columns no longer fit.
Interactive targets remain at least 44px high. The initial profile is web.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Use concise, specific, blameless sentences. Name the affected object and the next
available action. English is supported. Additional locales are not claimed by this
contract.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=project-system lang=en -->
### Authority

This document is the project design contract for the declared scope.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->
