# Controlled medicine dispense review

## Color

- Canvas: `#F3F1ED`
- Surface: `#FFFEFB`
- Ink: `#242628`
- Muted text: `#717579`
- Border: `#A1A5A8`
- Primary action: `#294B57`
- Signal: `#A34F3F`

Use Ink for normal text when Muted text does not meet contrast on the actual surface. Signal communicates state and structure; it does not replace readable text.

## Typography

- Body: Verdana, sans-serif
- Display: Georgia, serif
- Atomic prescription, medicine-lot, counter, and verification-window identifiers remain intact. Do not abbreviate or break inside an identifier.

## Geometry

- Cards: `2px` radius
- Controls: `2px` radius

## Layout and behavior

- Preserve the prescription register, verification-window strip, and dispense decision as three separate relationship carriers.
- Preserve six prescriptions, eight lot assignments, four verification windows, three view controls, one dispensing-note toggle, and one review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary

The supplied identifiers, assignments, windows, and `Pharmacist review open` state are observations only. They do not prove identity verification, pharmacist approval, prescription dispensing, inventory release, verification closure, insurance acceptance, controlled-substance logging, or patient notification.
