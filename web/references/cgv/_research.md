# CGV — Research Notes

**Extracted:** 2026-07-13
**Mode:** CREATE repair packet
**id:** `cgv`

## Evidence policy

`artifacts/reference-evidence/cgv.json` is the sole raw computed-style, font, component, and interaction input. It was not regenerated. Narrative and licence research below is kept in a separate evidence domain and does not add UI tokens.

## Tier 1 — supplied live evidence

| Source | URL | Extracted | Confidence |
|---|---|---|---|
| Public CGV capture | https://cgv.co.kr/ | Three supplied surfaces; coverage 81; 383 component variants; 0 interaction observations. | HIGH |
| FontFace / computed styles | CGV CDN paths recorded in `cgv.json` | Pretendard loaded/high, 1,217 visible uses and nine WOFF/WOFF2 sources. `Roboto` and `swiper-icons` are not visibly used. | HIGH |
| Selector-backed component samples | `home::[data-omd-capture="36"]`, `home::[data-omd-capture="128"]`, `home::span`, `home::li` | Category chip, outline action, screen-format badge, and menu row default geometry. | HIGH |

## Context and narrative ledger

| Source | URL | Usable fact | Evidence boundary | Confidence |
|---|---|---|---|---|
| CJ CGV 2024 Sustainability Report | https://img.cgv.co.kr/company/sustainabilityStrategy/Report/2024/2024_CJCGV_SUSTAINABILITY_REPORT_kor.pdf | CGV began Korea’s multiplex trend with Gangbyeon in 1998; Cultureplex framing; 2024 Deep Dive Space campaign; mission/vision/value language. | Official corporate context, not a public-CSS token source. | HIGH |
| CJ Newsroom history | https://newsroom.cj.net/part-12-koreas-first-multiplex-theater-cgv | Corporate history of Gangbyeon11 and the multiplex shift. | Official history, not a component specification. | HIGH |
| CJ Newsroom premium theatres | https://newsroom.cj.net/cgv-targets-global-market-with-premium-theaters/ | Recent premium theatre expansion focuses on screen, sound, and seating. | Official product evolution, not a typography or colour source. | HIGH |
| Pretendard licence | https://github.com/orioncactus/pretendard/blob/main/LICENSE | Pretendard is distributed under SIL Open Font License 1.1. | Font-project licence; does not make it a CGV-owned asset. | HIGH |

## Tier 2 attempts

| Source | URL | Result | Confidence |
|---|---|---|---|
| getdesign | https://getdesign.md/cgv | Attempted exact record lookup; internal retrieval error, no usable record. | N/A |
| refero | https://styles.refero.design/?q=cgv | Attempted exact brand query; internal retrieval error, no usable result card or style page. | N/A |

## Reconciliation decisions

- Promote only measured default values from the supplied capture. `interactionCount: 0` excludes interactive state values, but not static default component geometry.
- Treat `#fc5555` as an observed low-frequency signal, not as a presumed CGV primary, error, or success role.
- Promote `Pretendard` because the computed family is backed by loaded FontFace evidence; retain Roboto and swiper-icons only as declared-only context.
- Use only the allowed component types `button`, `badge`, and `listItem`; the observed row remains `listItem` rather than being recast as a button.
- No conflict is unresolved: Tier 2 supplied no competing value, and no token is inferred from corporate, marketing, or font-licence material.
