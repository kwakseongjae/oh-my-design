# Subsea cable splice handoff

## Color
- Canvas: `#EEF2F3`
- Surface: `#FAFCFC`
- Ink: `#17242B`
- Muted text: `#7E898D`
- Border: `#9EA9AD`
- Primary action: `#153E50`
- Alert: `#A6412D`

Use Ink for normal text when Muted text does not meet contrast. Alert communicates operational state; it does not prove an approval.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic cable-span, joint-test, vessel-window, and window-time identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `2px` radius
- Controls: `2px` radius

## Layout and behavior
- Preserve the cable-span register, vessel-window strip, and handoff decision as separate relationship carriers.
- Preserve four cable spans, six joint-test assignments, two vessel windows, three view controls, one coordinator-note toggle, and one handoff-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, times, and `Handoff review pending` state are observations only. They do not prove splice acceptance, insulation completion, burial completion, engineer authorization, vessel clearance, network energization, route commissioning, or regulator acceptance.
