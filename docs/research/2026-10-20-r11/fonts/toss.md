# Toss Product Sans (toss) — substitute measurement

- Page: https://tossmini-docs.toss.im/tds-mobile/foundation/typography/ (HTTP 200), measured 2026-10-20T12:41:49.317Z
- Tool: scripts/fonts/measure.mjs, playwright-core 1.61.1, Chromium 149.0.7827.55 (darwin-arm64)
- Size 16px; weights scored: 400, 600, 700; brand weights: 300, 400, 500, 600, 700, 800, 900, 950 (8 static weights; intermediate weights snap to them, no wght axis)
- Brand classification: not stated — The official introduction (2021-10-08) describes the face's balance, context and form but names no type classification. (https://toss.im/tossfeed/article/beginning-of-tps)
- Brand drawn 400/latin: yes — CDP: TossProductSans-Regular ×92
- Brand drawn 400/hangul: yes — CDP: TossProductSans-Regular ×36
- Brand drawn 600/latin: yes — CDP: TossProductSans-Semibold ×92
- Brand drawn 600/hangul: yes — CDP: TossProductSans-Semibold ×36
- Brand drawn 700/latin: yes — CDP: TossProductSans-Bold ×92
- Brand drawn 700/hangul: yes — CDP: TossProductSans-Bold ×36
- Cross-check https://tossmini-docs.toss.im/tds-mobile/components/button/: identical metrics

## latin

Brand @400: xHeightRatio 0.7308, avgAdvance 0.4590 em. Sample: `The quick brown fox jumps over the lazy dog`

Chosen: **IBM Plex Sans** — best Google Fonts candidate; stack rule: IBM Plex Sans KR also draws hangul and would override the Pretendard Variable substitute, so Latin candidates that cover hangul are excluded

Unconstrained pick before the stack rule: IBM Plex Sans KR — best Google Fonts candidate

Eligible = drew every sample glyph at every scored weight (and, for Latin, passes the stack rule).

| Candidate | Provider | Eligible | xHeightRatio@400 | avgAdvance@400 | Δadv (rel, mean) | Δx (rel, mean) | weight miss | class | score |
|---|---|---|---:|---:|---:|---:|---:|---|---:|
| IBM Plex Sans KR | google | no | 0.7393 | 0.4611 | 0.0061 | 0.0110 | 0.00 | neo-grotesk | — |
| IBM Plex Sans | google | yes | 0.7393 | 0.4611 | 0.0061 | 0.0112 | 0.00 | neo-grotesk | 0.0074 |
| Roboto | google | yes | 0.7431 | 0.4591 | 0.0173 | 0.0078 | 0.00 | neo-grotesk | 0.0117 |
| Pretendard Variable | other | yes | 0.7500 | 0.4639 | 0.0120 | 0.0159 | 0.00 | — | 0.0122 |
| Gothic A1 | google | no | 0.7183 | 0.4608 | 0.0110 | 0.0186 | 0.00 | humanist | — |
| Figtree | google | yes | 0.7143 | 0.4639 | 0.0078 | 0.0326 | 0.00 | geometric | 0.0166 |
| Manrope | google | yes | 0.7501 | 0.4688 | 0.0223 | 0.0162 | 0.00 | neo-grotesk | 0.0174 |
| Public Sans | google | yes | 0.7151 | 0.4771 | 0.0235 | 0.0314 | 0.00 | grotesk | 0.0240 |
| Geist | google | yes | 0.7465 | 0.4731 | 0.0416 | 0.0175 | 0.00 | neo-grotesk | 0.0276 |
| Noto Sans KR | google | no | 0.7409 | 0.4795 | 0.0504 | 0.0149 | 0.00 | humanist | — |
| Inter | google | yes | 0.7457 | 0.4891 | 0.0546 | 0.0101 | 0.00 | neo-grotesk | 0.0312 |
| DM Sans | google | yes | 0.7171 | 0.4774 | 0.0429 | 0.0286 | 0.00 | geometric | 0.0326 |
| Noto Sans | google | yes | 0.7511 | 0.4867 | 0.0659 | 0.0275 | 0.00 | humanist | 0.0437 |
| Work Sans | google | yes | 0.7576 | 0.5106 | 0.0874 | 0.0262 | 0.00 | neo-grotesk | 0.0539 |
| Nanum Gothic | google | no | 0.7394 | 0.4833 | 0.0260 | 0.0111 | 0.33 | — | — |
| SUIT Variable | other | no | 0.6385 | 0.4441 | 0.0326 | 0.1332 | 0.00 | — | — |
| LINE Seed Sans | other | yes | 0.6880 | 0.4806 | 0.0498 | 0.0522 | 0.33 | — | 0.0822 |
| LINE Seed Sans KR | other | no | 0.6880 | 0.4806 | 0.0498 | 0.0522 | 0.33 | — | — |

## hangul

Brand @400: xHeightRatio 0.8515, avgAdvance 0.7231 em. Sample: `다람쥐 헌 쳇바퀴에 타고파`

Chosen: **Pretendard Variable** — non-Google candidate scores 0.0068 ≤ 0.8 × best Google 0.0240 (IBM Plex Sans KR)

Eligible = drew every sample glyph at every scored weight (and, for Latin, passes the stack rule).

| Candidate | Provider | Eligible | xHeightRatio@400 | avgAdvance@400 | Δadv (rel, mean) | Δx (rel, mean) | weight miss | class | score |
|---|---|---|---:|---:|---:|---:|---:|---|---:|
| Pretendard Variable | other | yes | 0.8459 | 0.7328 | 0.0094 | 0.0054 | 0.00 | — | 0.0068 |
| SUIT Variable | other | yes | 0.8525 | 0.7360 | 0.0170 | 0.0025 | 0.00 | — | 0.0094 |
| IBM Plex Sans KR | google | yes | 0.8621 | 0.7514 | 0.0383 | 0.0125 | 0.00 | neo-grotesk | 0.0240 |
| Noto Sans KR | google | yes | 0.8815 | 0.7708 | 0.0656 | 0.0372 | 0.00 | humanist | 0.0473 |
| LINE Seed Sans KR | other | yes | 0.8519 | 0.7416 | 0.0241 | 0.0051 | 0.33 | — | 0.0511 |
| Gothic A1 | google | yes | 0.8694 | 0.8073 | 0.1368 | 0.0345 | 0.00 | humanist | 0.0818 |
| Nanum Gothic | google | yes | 0.8991 | 0.7986 | 0.1035 | 0.0608 | 0.33 | — | 0.1124 |
