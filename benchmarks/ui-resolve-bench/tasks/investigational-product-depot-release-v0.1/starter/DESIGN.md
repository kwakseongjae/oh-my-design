# Investigational-product depot release

## Color
- Canvas: `#EEF2F1`
- Surface: `#FFFFFF`
- Ink: `#172321`
- Muted text: `#899693`
- Border: `#AAB8B4`
- Primary action: `#164E63`
- Signal: `#B45309`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates review state and kit structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic product-kit, temperature-log, depot-lane, and transfer-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `4px` radius
- Controls: `4px` radius

## Layout and behavior
- Preserve the product-kit register, depot-lane strip, and release decision as separate relationship carriers.
- Preserve four product kits, six temperature-log assignments, two depot lanes, three view controls, one pharmacist-note toggle, and one release-review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, transfer windows, and `Release review pending` state are observations only. They do not prove QA release, complete chain of custody, temperature compliance, patient allocation, pharmacy readiness, expiry approval, customs clearance, or dispensation authorization.
