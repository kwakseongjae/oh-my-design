# Subsea valve intervention review

## Color
- Canvas: `#EEF2F1`
- Surface: `#FCFEFD`
- Ink: `#202A2C`
- Muted text: `#6F7B7A`
- Border: `#AEB9B7`
- Primary action: `#184B57`
- Signal: `#A6472D`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates state and structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic valve, anomaly, intervention-console, and review-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the valve register, intervention-console strip, and intervention decision as separate relationship carriers.
- Preserve four valve assemblies, six anomaly assignments, two intervention consoles, three view controls, one reviewer-note toggle, and one intervention review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, review windows, and `Intervention review pending` state are observations only. They do not prove leak isolation, pressure-test success, valve operability, hydraulic clearance, dive authorization, work-pack approval, or intervention readiness.
