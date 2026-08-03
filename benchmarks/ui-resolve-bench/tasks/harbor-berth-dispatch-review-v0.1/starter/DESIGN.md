# Harbor dispatch review design contract

- Canvas: `#F4F1EC`; surface: `#FFFEFA`; ink: `#202522`; verified muted text: `#74756F`; border: `#AAA99F`.
- Primary action: `#244A3B`; signal accent: `#B46332`. Signal accent is a non-text cue unless its exact foreground pair passes 4.5:1.
- Body type: Arial. Display type: Georgia. Preserve supplied identifiers exactly; never shorten, split, rotate, or replace them.
- Cards use square corners (`0px`). Controls use `2px` radius. Do not invent other radius roles.
- The berth board, pilot-window strip, and dispatch handoff are separate semantic carriers. Preserve each carrier's identity, cardinality, visible facts, and relationships.
- On narrow screens, recover container space or reflow the carrier. Do not hide a carrier, duplicate its labels through generated content, or use word-breaking as a substitute for layout.
- Target, evidence, state, and action form one decision boundary in that order. Keep the target emphasized and the action spatially separate.
- Preserve all controls, form behavior, supplied assignments, and summary facts. Unknown operational conclusions remain absent.
