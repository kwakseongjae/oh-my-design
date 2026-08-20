# Orbital sample return custody

## Color
- Canvas: `#EEF2F3`
- Surface: `#FBFDFD`
- Ink: `#17272D`
- Muted text: `#6F7D81`
- Border: `#AAB8BC`
- Primary action: `#173E4B`
- Signal: `#A24A32`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates state and structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic return-canister, custody-seal, quarantine-bay, and work-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the canister register, quarantine-bay strip, and custody decision as separate relationship carriers.
- Preserve four return canisters, six custody seal assignments, two quarantine bays, three view controls, one custody-note toggle, and one custody review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, work windows, and `Custody review pending` state are observations only. They do not prove canister integrity, seal validity, contamination clearance, quarantine release, transport readiness, facility readiness, science authorization, or archive release.
