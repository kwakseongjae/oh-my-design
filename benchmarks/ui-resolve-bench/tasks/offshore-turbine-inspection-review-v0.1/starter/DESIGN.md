# Offshore turbine inspection review

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
- Atomic turbine, inspection-finding, engineering-desk, and review-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the turbine register, engineering-desk strip, and maintenance decision as separate relationship carriers.
- Preserve four turbines, six finding assignments, two engineering desks, three view controls, one reviewer-note toggle, and one maintenance review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, review windows, and `Maintenance review pending` state are observations only. They do not prove defect closure, root cause, blade repair completion, foundation clearance, return-to-service approval, work-order authorization, or maintenance readiness.
