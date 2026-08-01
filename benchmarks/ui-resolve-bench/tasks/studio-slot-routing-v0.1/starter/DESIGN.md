---
omd: 0.1
brand: Roomsheet
status: fictional benchmark fixture
---

# Roomsheet Design Contract

## 1. Visual Theme & Atmosphere
Roomsheet is a precise, quiet studio-operations surface. One resource-time board keeps supplied room holds, their order, selected routing context, reversible settings, and final review boundary legible without implying booking or staffing outcomes.

## 2. Color Palette & Roles
- `page` `#F2F0EA`; `surface` `#FFFFFF`; `ink` `#202522`; `muted` `#666963`; `line` `#C8C5BC`; `route` `#263C36`; `attention` `#A44C35`.
- No gradients, glow, glass, decorative accent borders, or invented status colors.

## 3. Typography Rules
- UI/body: `Arial`, sans-serif. Display: `Georgia`, serif.
- Hero 46/50 desktop, 32/36 mobile, weight 400. Body 15/24. Label 11/16, weight 700, tracking 0.05em.

## 4. Component Stylings
- Schedule board: 2px radius, 1px ring, no shadow. Controls: 3px radius, 44px minimum height.
- Resource lanes and time slots remain one coherent schedule, not independent decorative cards.

## 5. Layout Principles
- Maximum width 1100px. Space scale: 4, 8, 12, 16, 24, 32, 48, 64.
- Desktop uses labeled resource rows across time bands. Mobile reflows each supplied hold into an ordered full-width slot row while preserving room, time, and hold identity.
- Compact controls move below their full-width label. No page horizontal scroll at 320px or wider.

## 6. Depth & Elevation
Use surface contrast and 1px lines. Focus uses a 3px route outline. No diffuse shadow.

## 7. Do's and Don'ts
- Preserve supplied facts exactly. Keep settings reversible. Never invent booking, approval, staffing, or availability outcomes.

## 8. Responsive Behavior
- Reflow before text clips. Atomic hold identifiers, room names, times, counts, and short controls remain one line. Never make one text node horizontally scrollable. Preserve chronological order and decision hierarchy at 200%.

## 9. Agent Prompt Guide
Improve hierarchy and narrow-screen reading order without changing the product contract.

## 10. Voice & Tone
Calm, exact, operational. Avoid seamless, intelligent, perfect, guaranteed, and scheduling theatre.

## 11. Brand Narrative
[FILL IN — fictional fixture intentionally supplies no company history.]

## 12. Principles
1. Keep supplied holds visible. 2. Preserve room and time relationships. 3. Make the final routing boundary explicit.

## 13. Personas
[FILL IN — no persona facts are provided.]

## 14. States
Room and buffer controls update `aria-pressed`; invalid input focuses and announces; valid input announces routing readiness only.

## 15. Motion & Easing
120ms/180ms ease-out; disable nonessential motion under reduced motion.
