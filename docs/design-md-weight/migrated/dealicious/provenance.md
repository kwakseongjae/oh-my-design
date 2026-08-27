# Sinsang Market (Dealicious) provenance

Not part of the portable `DESIGN.md`. Source ledger, canonical proof, unpromoted responsive/motion claims, and disposition evidence for the T2-1 Wave 18 migration candidate. Canonical source remains `web/references/dealicious/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | dealicious |
| name | Sinsang Market (Dealicious) |
| display_name_kr | 신상마켓 (딜리셔스) |
| country | KR |
| category | ecommerce |
| homepage | https://dealicious.kr |
| primary_color | `#001339` |
| logo | favicon/first-party asset `https://dealicious.kr/assets/images/deali_logo_square.png` |
| verified | 2026-07-02 |
| added | 2026-07-02 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

Token note: monochrome-navy corporate system. Deep navy `#001339` is the square-logo/hero identity; `#222222` is the sole dark pill action; `#3e4149` is light-surface heading/link slate. Tints and hairlines provide near-shadowless separation.

Source DESIGN SHA-256: `c143cf4a23dfafffb1594e3d93eba7beaafc3150da798f6537c9bc3b72ca898a`.

## Sources and proof method

Canonical sibling: `web/references/dealicious/.verification.md`, SHA-256 `ff45bff9048630cf9f862804fe1ec76349e6547d822285a392771fffed5e34f4`.

Inspected 2026-07-02 using Playwright `getComputedStyle`, Chromium headless at 1440×900, `domcontentloaded` plus 3.5s settle, modal/cookie Escape pass, targeted samples, and full-DOM color-frequency scans. Logo color was read through canvas `getImageData`.

| Source | Role / boundary |
|---|---|
| https://dealicious.kr | Corporate homepage; all live token claims |
| https://dealicious.kr/assets/images/deali_logo_square.png | First-party square-logo color proof |
| https://dealicious-inc.github.io/ | Official engineering blog and company context |
| https://github.com/dealicious-inc | Official GitHub organization; regional brand-owned source |
| getdesign.md/dealicious / sinsangmarket | 0 files / empty shell; no token evidence |
| styles.refero.design queries | Generic browse results; no brand match |

KR brand-owned evidence uses the corporate homepage, engineering blog, and GitHub organization. Tier 2 is empty rather than contradictory. Conflicts unresolved: none.

## Token record

### Color

| Source key | Exact value |
|---|---|
| primary | `#001339` |
| primary-deep | `#102245` |
| navy-scrim | `#151f32` |
| ink | `#222222` |
| black | `#000000` |
| slate | `#3e4149` |
| canvas / on-primary | `#ffffff` |
| surface | `#f5f6fb` |
| surface-alt | `#ebeef6` |
| surface-blue | `#f1f8ff` |
| hairline | `#d0d6e1` |
| muted | `#8f97a7` |
| faint | `#bec5d2` |
| faint-alt | `#a6adbd` |

### Typography and scales

| Group | Exact source values |
|---|---|
| family | sans `Roboto`; kr `Noto Sans KR` |
| display-hero | 60 / 700 / unitless `1.5`; hero |
| section | 30 / 700; section titles |
| button | 18 / 700; pill CTA |
| nav | 16 / 400; top navigation |
| body | 16 / 400 / unitless `1.5`; reading text |
| caption | 15 / 400; footer/contact |
| spacing | xs `4`; sm `8`; md `12`; base `16`; lg `24`; xl `31`; xxl `48`; section `64` |
| rounded | sm `8`; md `20`; lg `50`; full `9999` |
| shadow | none `none` |

Exact body stack: `Roboto, "Noto Sans KR", "Noto Sans SC", "Noto Sans JP", sans-serif`. Alternate source forms: 60px / 3.75rem; 30px / 1.88rem; 18px / 1.13rem; 16px / 1.00rem; 15px / 0.94rem; body 24px line height.

## Component token record

| id / primitive | Exact source record |
|---|---|
| button-primary / button | `#222222` / white; 50px; `14px 31px`; height 55px; `18px / 700`; 인재영입 바로가기 |
| button-secondary / button | white / `#3e4149`; 50px; `14px 31px`; height 55px; `18px / 700`; 블로그 바로가기 |
| nav-link / tab | white; `16px / 400`; active white on dark hero; source body adds transparent background and 64px header |
| card-surface / card | `#f5f6fb`; 20px; tinted frame; shadowless |
| card-story / card | YAML white; 20px; image-led/no shadow; sibling raw container background transparent |
| footer-link / listItem | `#3e4149`; `15px / 400`; footer navigation/contact |

## Raw proof samples

- body: `Roboto, "Noto Sans KR", "Noto Sans SC", "Noto Sans JP", sans-serif`; black; 16px; 24px line height.
- Hero H1 “고객의 사업을 쉽고 즐겁게”: 60px / 700 / white on dark navy.
- Navigation 회사소개 / 서비스 / 사람과 문화 / 뉴스룸: white; 16px / 400; header 64px.
- Section H1 “딜리셔스의 이야기”: 30px / 700 / `#3e4149`.
- Primary “인재영입 바로가기”: `#222222` / white; 50px; `14px 31px`; height 55px; 18px / 700.
- Secondary “블로그 바로가기”: white / `#3e4149`; 50px; `14px 31px`; height 55px; 18px / 700.
- Story/interview cards: 20px; shadow none; image-led transparent raw container. This remains distinct from the YAML white card token.
- Footer: white; links `#3e4149` and `#222222`; 15px / 400; contacts `contact@deali.net`, `recruit@deali.net`, `1661-1916`.
- First-party PNG: 1001×1001, 35,534 bytes; approximately 91% of opaque pixels `#001339`; secondary `#102245`; sibling-only third sample `#404e6b` remains proof-only.
- Background counts: white ×19; `#d0d6e1` ×3; `#ebeef6` ×3; `#f5f6fb` ×2; `rgba(21,31,50,0.3)` hero scrim ×1; `#f1f8ff` ×1; `#222222` ×1.
- Text counts: black ×518; white ×220; `#222222` ×73; `#3e4149` ×51; `#bec5d2` ×9; `#8f97a7` ×7; `#a6adbd` ×3.
- `box-shadow: none` across hero, navigation, headings, and story cards.
- Document title: “딜리셔스 Dealicious | 고객의 사업을 쉽고 즐겁게”.

Exact source/proof color-function forms: `rgb(62,65,73)`; `rgb(34,34,34)`; `rgb(0,19,57)`; `rgb(0,0,0)`; `rgb(255,255,255)`; `rgb(16,34,69)`; `rgb(64,78,107)`; `rgb(208,214,225)`; `rgb(235,238,246)`; `rgb(245,246,251)`; `rgb(241,248,255)`; `rgb(190,197,210)`; `rgb(143,151,167)`; `rgb(166,173,189)`.

Tier 2 result details: getdesign page title `dealicious — 0 DESIGN.md files`, body “No designs found for 'dealicious'”; Sinsang Market variant returned the same 14,811-byte empty shell. Refero queries returned only generic browse cards. The Google favicon proxy returned a 409-byte generic globe and was rejected; the first-party 35,534-byte PNG is used instead.

## Narrative and evidence boundary

Portable Scope retains the source's 2015 founding, Dongdaemun wholesale digitization context, Sinsang Market mission, and engineering topics. The source disclosure says specific founding details beyond homepage/blog are general public knowledge rather than a verified Dealicious quote in this turn. Causal readings that survive portably—single-action/single-shape hierarchy, tint-over-shadow grouping, contrast with dense commerce chrome, and cold-register avoidance—carry adjacent B2a in their actual sections. The source's “flat and fast” / “clean, fast, and confident” labels and product-studio comparison remain provenance-only narrative context; the mobile-native characterization and other unprojected prose are not claimed as portable.

Verified live voice samples: “고객의 사업을 쉽고 즐겁게”, “딜리셔스의 이야기”, and “K패션 도소매 거래 No.1 신상마켓”. Additional corporate labels and culture excerpts are source-body records.

## Unpromoted responsive ledger

- Mobile `<640px`: single column, compressed hero, stacked story cards.
- Tablet `640-1024px`: moderate padding, two-up story cards.
- Desktop `1024-1440px`: full layout, centered hero, multi-column story grid.
- Claimed collapse: hero shrinks while staying 700; story grid stacks; full-width tints remain; footer contact/links stack.
- Claimed image behavior: 20px story-card radius and no shadow across widths; `#151f32` hero scrim persists.
- Touch declarations: CTA 55px with `14px 31px`; links inside 64px header; story card as full 20px-radius target.

No multi-viewport proof bundle exists, so these exact source claims remain unpromoted.

## Unpromoted motion ledger

| Token | Exact value | Legacy use |
|---|---|---|
| motion-fast | 120ms | Hover, pill press, focus |
| motion-standard | 200ms | Card/section reveal, sheet, dropdown |
| motion-slow | 320ms | Page transition, hero reveal |
| ease-enter | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving cards/sheets |
| ease-exit | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| ease-standard | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

Legacy rules: motion functional/quiet; pill press uses subtle scale/opacity; story cards/sections fade upward with standard/enter; no bounce or spring; under `prefers-reduced-motion: reduce`, all transitions collapse to instant. No component-specific B3 proof exists; none is promoted.

## Persona and state disposition

The source explicitly labels all three named personas fictional archetypes. Rulebook D2 prohibits their names and biographies in portable and provenance. Group-level retailers, wholesalers, prospective staff, and engineers remain.

The full nine-row legacy state guidance remains portable under adjacent B2a. It is not measured state proof and does not establish unobserved treatment coverage.

## Proof notes

- Portable derived-editorial scope includes Scope source/surface/company-product/history-evidence boundaries and visual characterization; tasks; audience grouping and biography retention; distinctive selection; principles and avoidances; semantic-role grouping; spacing-scale/component-padding separation; shape-role and source-token/component-form separation; elevation and motion boundaries; family fallback; asset authority, palette, and reuse boundaries; state evidence; CTA family/kind/applicability; navigation kind/applicability; card kind/map, token/raw, and child-control boundaries; footer kind/map and child/container boundaries; legacy state guidance; layout/responsive boundaries; content voice/register; and governance.
- Each carries adjacent complete wording: derived editorial implementation inference; not Dealicious-authored or a separately published UI specification.
