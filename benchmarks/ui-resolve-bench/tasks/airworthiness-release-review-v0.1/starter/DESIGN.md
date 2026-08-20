# Airworthiness release review

## Color
- Canvas: `#F3F1EC`
- Surface: `#FFFDF8`
- Ink: `#20252B`
- Muted text: `#92979A`
- Border: `#A9ADB0`
- Primary action: `#1F3D52`
- Alert: `#9B452E`

Use Ink for normal text when Muted text does not meet contrast. Alert communicates operational state; it does not prove an approval.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic work-order, inspection-record, maintenance-window, and maintenance-time identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `2px` radius
- Controls: `2px` radius

## Layout and behavior
- Preserve the work-order register, maintenance-window strip, and release decision as separate relationship carriers.
- Preserve four work orders, six inspection-record assignments, two maintenance windows, three view controls, one controller-note toggle, and one release-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, times, and `Release review pending` state are observations only. They do not prove airworthiness release, inspection completion, defect clearance, engineer authorization, parts certification, maintenance sign-off, return-to-service approval, or regulator acceptance.
