# Dable provenance

Not part of the portable `DESIGN.md`. Source ledger, proof, unpromoted legacy claims, and disposition evidence for the T2-1 Wave 18 migration candidate. Canonical source remains `web/references/dable/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | dable |
| name | Dable |
| display_name_kr | 데이블 |
| country | KR |
| category | marketing |
| homepage | https://dable.io/ko/ |
| primary_color | `#0071ce` |
| logo | GitHub organization slug `teamdable` |
| verified | 2026-07-02 |
| added | 2026-07-02 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

Token note: primary CTA blue `#0071ce`, secondary mint `#56cfc2`, flat shadowless bands, 50px pills, Poppins display/chrome, Open Sans reading/product headings.

## Sources and proof method

Inspected 2026-07-02 with Playwright `getComputedStyle`, Chromium headless at 1440×900, across two public surfaces.

| Source | Role / boundary |
|---|---|
| https://dable.io/ko/ | Homepage live styles, hero words, navigation, primary/compact pills, title |
| https://dable.io/ko/advertising/ | Advertiser product styles, headings, primary/mint/ghost/neutral pills, title |
| https://teamdable.github.io/techblog | Brand-owned engineering context; no token claim |
| https://github.com/teamdable | Brand-owned organization and selected catalog avatar |
| https://getdesign.md/dable | Generic SPA shell; no Dable content |
| https://styles.refero.design/?q=dable | Default gallery; no Dable-specific match |

No Tier 2 conflict; Tier 1 carries all token claims.

## Token record

| Group | Exact source values |
|---|---|
| colors | primary `#0071ce`; primary-link `#0b7ed1`; accent-mint `#56cfc2`; ink `#000000`; ink-soft `#181818`; body `#3d3d3d`; slate `#464646`; muted `#8a8a8a`; faint `#cccccc`; neutral-btn `#e8e8e8`; neutral-btn-text `#6f6f6f`; surface `#efefef`; dark `#212121`; outline-text `#2b2b2b`; canvas/on-primary `#ffffff` |
| families | display `Poppins`; body `Open Sans` |
| typography | display `56 / 400 / 1.0`; heading-lg `35 / 400 / 1.0`; heading `26 / 400 / 1.0`; subheading `22 / 400 / 1.0`; feature-title `18 / 700 / 1.0`; body `14 / 400 / 1.5`; button `14 / 400 / 1.0`; nav `13 / 600 / 1.0`; footer `15 / 400 / 3.0` |
| spacing | xs `4`; sm `8`; md `16`; lg `24`; xl `44`; section `64` |
| rounded | square `0`; pill `50`; full `9999` |
| shadow | none `none` |

### Alternate source renderings

The legacy prose also renders the same scale and hierarchy values with explicit units. These byte-level forms are retained for loss accounting without creating additional semantic tokens:

- Spacing/radius forms: `4px`, `8px`, `16px`, `24px`, `44px`, `64px`, `0px`, `50px`, `9999px`.
- Type-size aliases: `3.50rem`, `2.19rem`, `1.63rem`, `1.38rem`, `1.13rem`, `0.81rem`, `0.88rem`, `0.94rem`.

## Component token record

| id / primitive | Exact source record |
|---|---|
| button-primary / button | bg `#0071ce`; fg `#ffffff`; radius `50px`; height `48px`; padding `17px 44px`; font `14px / 400 Poppins`; primary CTA labels |
| button-mint / button | bg `#56cfc2`; fg `#ffffff`; radius `50px`; height `48px`; padding `17px 29px`; font `14px / 400 Poppins`; alternate CTA |
| button-ghost-light / button | bg `#ffffff`; fg `#2b2b2b`; radius `50px`; height `48px`; padding `17px 44px`; font `14px / 400 Poppins`; dark-hero support action |
| button-neutral / button | bg `#e8e8e8`; fg `#6f6f6f`; radius `50px`; height `48px`; padding `17px 29px`; font `14px / 400 Poppins`; tertiary guide action |
| nav-link / tab | fg `#ffffff`; font `13px / 600 Poppins`; active `#0071ce`; top-nav over dark hero |
| feature-card / card | bg `#ffffff`; fg `#000000`; flat block; no shadow/border |
| surface-band / card | bg `#efefef`; fg `#3d3d3d`; alternating content band |

## Raw proof samples

- body: `"Open Sans", sans-serif`; `#000000`; 14px; `#ffffff`.
- homepage hero words: Poppins; 56px / 400; `#000000`.
- homepage primary CTA: `#0071ce` / `#ffffff`; 50px; `17px 44px`; 14px Poppins; 48px.
- homepage navigation: `#ffffff`; 13px / 600 / Poppins; about 21px high.
- compact “Contact Us”: `#0071ce`; `rgba(255, 255, 255, 0.6)`; 50px; `10px 40px`; 13px; 39px.
- product hero: Open Sans; 35px / 400 / 35px; `#ffffff`.
- section H3: 26px / 400 / 26px / `#000000`; feature H3: 18px / 700 / `#181818`.
- advertising primary CTA includes selector-specific `17px 36px` padding, distinct from the compact YAML component’s `17px 44px` primary default; both records are retained and not merged.
- advertising `#0071ce` CTA labels as recorded by the source live inspect: “광고계정 생성하기”, “상품소개서 다운로드”, “시작하기”. “상품소개서 다운로드” appears only in this live-inspect record and not in the legacy component `use` field.
- mint CTA: `#56cfc2` / white; 50px; `17px 29px`; 48px.
- ghost CTA: white / `#2b2b2b`; 50px; `17px 44px`; 48px.
- neutral CTA: `#e8e8e8` / `#6f6f6f`; 50px; `17px 29px`; 48px.
- footer H4: Open Sans; 15px / 400 / 45px; white.
- frequency colors: body `#3d3d3d` ×846, `#000000` ×781/advertising ×3760, `#ffffff` ×181, `#8a8a8a` ×122, `#0071ce` ×10, `#0b7ed1` ×4, `#464646` product subhead, `#efefef` ×3, `#0071ce` background ×6, `#212121` ×2.
- `box-shadow: none` across hero, navigation, headings, and all pill buttons.
- titles: “네이티브 광고와 콘텐츠 디스커버리”; “인공 지능 기반의 네이티브 광고를 통한 적합한 고객 발견 | Dable”.

## Logo decision

- Google favicon proxy: 358 bytes, below 450-byte floor, generic globe; rejected.
- `https://dable.io/wp-content/uploads/2018/02/icon.png`: valid 20×20 PNG, 377 bytes; rejected as too low resolution.
- Simple Icons `dable`: HTTP 404; unavailable.
- GitHub org avatar `teamdable`: 64×64, 2198 bytes, PNG, HTTP 200; selected as genuine brand-owned catalog identity.

## Unpromoted legacy claim ledger

### Responsive recipes

- Mobile `<640px`: single column, compressed hero word, wrapped/stacked pill rows.
- Tablet `640–1024px`: moderate padding and two-up feature blocks.
- Desktop `1024–1440px`: full slide-band layout, centered heroes, multi-column feature bands.
- Claimed collapse: 56px word scales down with weight retained; pill rows wrap/stack; multi-column → single; bands remain full-width; screenshots stay shadowless; blocks remain square while buttons/play frames round.

No multi-viewport proof appears in `.verification.md`; exact claims are retained here without Core promotion.

### Motion recipes

- Durations: `motion-fast` 120ms; `motion-standard` 240ms; `motion-slow` 360ms.
- Curves: `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`; `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`.
- Legacy rules: deck-like hero at slow/standard; subtle pill scale/opacity; standard/enter content fade from below; no bounce/spring; instant transitions and snapped bands under `prefers-reduced-motion: reduce`.

The live proof establishes none of the five B3 evidence kinds for a specific component, so no value is promoted.

### State recipes

The complete legacy §14 state guidance remains in portable Components with an adjacent derived-editorial limitation. It is not treated as measured state evidence.

## Persona disposition

The three legacy named biographies are fictional by the source’s own disclosure. Rulebook D2 requires deleting their names and biographies without provenance recopy. Only advertiser, publisher/media-partner, and adtech-buyer groups remain in portable Experience.

## Narrative evidence boundary

The source records founding, founder background, RecoPick origin, mission, two engines, 500M+, 3,000+, APAC markets, and Yanolja acquisition. Its own comment says some figures are widely documented rather than directly quoted from one verified Dable statement in that turn. They remain narrative context, never machine tokens.

## Proof notes

- Canonical sibling proof used: `web/references/dable/.verification.md`.
- Derived editorial scope in the portable document comprises source-role/evidence classification; primary-task and audience framing; distinctive-trait selection; visual and semantic-role readings; shape-role separation; elevation grouping; motion-promotion; typography-role/substitution; asset-selection and authority; component-role and state-applicability judgments; layout/presentation and responsive-proof boundaries; content/proof-use direction; governance judgments; derived principles and avoidances; and legacy state guidance. These are reconstruction-level implementation inferences, not Dable-authored doctrine or a separately published UI specification, and each scope is paired in the portable body with an adjacent complete authority limitation.
- Two surfaces and the brand-owned tech blog satisfy the source’s Korean regional-source boundary; getdesign/Refero do not contribute claims.
