---
omd: 0.1
brand: Fieldnote
status: fictional benchmark fixture
---

# Fieldnote Design Contract

## 1. Visual Theme & Atmosphere
Fieldnote is a quiet editorial operations surface. One master–detail board keeps the supplied asset queue, selected asset context, review lane, and final handoff boundary legible without implying legal clearance or publication.

## 2. Color Palette & Roles
- `page` `#EEEDE9`; `surface` `#FFFFFF`; `ink` `#20262B`; `muted` `#62686C`; `line` `#C9C7C0`; `route` `#263F53`; `attention` `#9A513F`.
- No gradients, glow, glass, decorative accent borders, or invented status colors.

## 3. Typography Rules
- UI/body: `Arial`, sans-serif. Display: `Georgia`, serif.
- Hero 46/50 desktop, 32/36 mobile, weight 400. Body 15/24. Label 11/16, weight 700, tracking 0.05em.

## 4. Component Stylings
- Board: 2px radius, 1px ring, no shadow. Controls: 3px radius, 44px minimum height.
- Asset queue and selected context remain one coherent master–detail surface, not decorative cards.

## 5. Layout Principles
- Maximum width 1080px. Space scale: 4, 8, 12, 16, 24, 32, 48, 64.
- Desktop uses a queue pane and a detail pane. Mobile stacks panes and gives facts full-width reading rows.
- Compact controls move below their full-width label. No page horizontal scroll at 320px or wider.

## 6. Depth & Elevation
Use surface contrast and 1px lines. Focus uses a 3px route outline. No diffuse shadow.

## 7. Do's and Don'ts
- Preserve supplied facts exactly. Keep settings reversible. Never invent clearance or publication outcomes.

## 8. Responsive Behavior
- Reflow before text clips. Atomic identifiers and short controls remain one line. Never make one text node horizontally scrollable. Preserve target, evidence, state, and action hierarchy at 200%.

## 9. Agent Prompt Guide
Improve hierarchy and narrow-screen reading order without changing the product contract.

## 10. Voice & Tone
Calm, exact, editorial. Avoid seamless, intelligent, perfect, guaranteed, and legal theatre.

## 11. Brand Narrative
[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles
1. Keep supplied assets visible. 2. Separate review state from outcomes. 3. Make the final handoff boundary explicit.

## 13. Personas
[FILL IN — no persona facts are provided.]

## 14. States
Lane and caption controls update `aria-pressed`; invalid input focuses and announces; valid input announces readiness only.

## 15. Motion & Easing
120ms/180ms ease-out; disable nonessential motion under reduced motion.
