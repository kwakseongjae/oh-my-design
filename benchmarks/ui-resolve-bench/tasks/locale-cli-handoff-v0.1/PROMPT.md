# Task: improve the Northstar five-locale setup handoff

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready setup handoff for Northstar, a local UI workflow used
with coding agents.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product and source contract, not optional inspiration. Do not
add external dependencies, network calls, remote fonts, images, customer
claims, performance claims, or product capabilities absent from the source.

Keep every `data-bench` hook and preserve the five locale tabs in this exact
order: KO, EN, JA, ZH-CN, ZH-TW. Every locale must preserve:

- `npx northstar-ui@1.4 setup --agent claude-code`
- 12 checked reference packs
- 3 local workflows
- `DESIGN.md`

Do not make every locale a sentence-for-sentence English translation. Use
natural product terminology for each locale, especially Japanese, Simplified
Chinese, and Traditional Chinese for Taiwan. ZH-TW must not inherit ZH-CN copy
or mainland product terminology.

Preserve and polish these working journeys:

1. switch among all five locale tabs with one visible panel and correct
   selected state;
2. keep every locale panel associated with its tab and language;
3. keep the document root language synchronized with the active locale and
   restore it to KO with the initial tab;
4. use the standard roving-tabindex tabs pattern: one tab in the sequential
   Tab order, with Left/Right Arrow navigation across all five tabs;
5. copy the protected command from the visible panel and announce a localized
   result; the status region may be empty before the action;
6. keep keyboard focus visible and respect reduced motion;
7. render without horizontal overflow at 320, 390, 640-at-200%-surrogate, and
   1440 pixels.

Do not explain a plan. Inspect the files, implement the page, exercise the
locale and handoff interactions locally, and leave the repository finished.
