# Compound atomic target and range-oracle repair — 1.9.409

The sterile-tray run isolated one remaining defect: `TRAY-VASC-2417 + IND-CHEM-77241` was kept as one text node. At narrow widths its two identifiers occupied two character lines, but the candidate's custom proof inspected the wrapper rectangle and incorrectly called the row one-line.

The workflow now treats this structure explicitly. A row whose longest protected value contains multiple exact identifiers must declare ordered `atomic_parts` before editing. The implementation keeps the protected wrapper, source order, and accessible text, but may wrap each existing identifier in a visible semantic child so layout can break between identifiers without breaking either identifier. Hidden copies, generated replacements, word breaking, and token-internal separators remain forbidden.

Resolved finalization now requires one measured browser attempt with the `character-range-line-tops` oracle. The proof must create a `Range` for every visible non-whitespace character and count unique top coordinates; `element.getClientRects().length`, page overflow, and screenshots cannot substitute for this measurement. The host validator and local helper share the same atomic-parts digest and browser-attempt contract.

Focused tests pass 56/56 and type-check passes. The broad contract run passes 367 tests with one skip; it retains the two known external vendor Git-root failures and one unrelated fake-timeout attribution expectation that now conflicts with the current fail-closed result. No provider was called and no quality promotion is claimed until a new unseen task reaches preregistered 3/3 reliability.
