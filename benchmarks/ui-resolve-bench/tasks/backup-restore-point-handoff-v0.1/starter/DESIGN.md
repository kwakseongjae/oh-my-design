# Backup restore-point handoff

## Color
- Canvas: `#F1F4F6`
- Surface: `#FFFFFF`
- Ink: `#17212B`
- Muted text: `#8A96A1`
- Border: `#AEB9C2`
- Primary action: `#123B5D`
- Signal: `#B45F2A`

Use Ink for normal text when Muted text does not meet contrast. Signal communicates handoff state and infrastructure structure; it does not replace readable text.

## Typography
- Body: Arial, sans-serif
- Display: Georgia, serif
- Atomic restore-point, manifest, recovery-region, and replication-window identifiers remain intact. Do not abbreviate, shrink, or break inside an identifier.

## Geometry
- Cards: `0px` radius
- Controls: `0px` radius

## Layout and behavior
- Preserve the restore-point register, recovery-region strip, and handoff decision as separate relationship carriers.
- Preserve four restore points, six manifest assignments, two recovery regions, three view controls, one operator-note toggle, and one handoff review form.
- Reflow carriers before changing typography. Do not use page-level horizontal overflow, word breaking, hidden duplicate content, or invented summaries.

## Evidence boundary
The supplied identifiers, assignments, replication windows, and `Handoff review pending` state are observations only. They do not prove checksum validity, malware clearance, restore completion, recovery-point compliance, key availability, region readiness, failover approval, or production release.
