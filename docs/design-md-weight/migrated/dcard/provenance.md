# Dcard provenance

Not part of the portable `DESIGN.md`. Source ledger, canonical proof, secondary-source boundaries, unpromoted interpretations, and disposition evidence for the T2-1 Wave 18 migration candidate. Canonical source remains `web/references/dcard/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | dcard |
| name | Dcard |
| country | TW |
| category | consumer-tech |
| homepage | https://www.dcard.tw |
| primary_color | `#0086ff` |
| logo | GitHub organization slug `Dcard` |
| verified | 2026-05-15; footer also records 2026-05-08 migration verification |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

Token note: text colors ship as black with opacity. Only six-digit hexes were promoted in the YAML color group; solid foreground uses `#000000` as its grounded base. Opacity-bearing values remain distinct in the body ledger.

Source DESIGN SHA-256: `232d09cb3a09466c3673113752918116a1eddc6aba6953d102a34b94f1c13e06`.

## Canonical proof

| Field | Value |
|---|---|
| sibling | `web/references/dcard/.verification.md` |
| SHA-256 | `0f7d659a5bcd57ff718d34f478d9c68741254918ca6863fa397d013f5fecc963` |
| pipeline | `spec/verification-pipeline.md` |
| skill | `omd:migrate` |
| inspected surfaces | `dcard.tw/f`; `about.dcard.tw/` |
| blocked surface | `dcard.tw/service/about` interstitial, no interactive chrome |

### Raw observations

- Forum header “Download App” / “Sign in”: `#3397cf`; white; 8px; padding 1×14; height 32px; 14px / 500.
- About-page navigation: `#3397cf`; 14px / 400; no background.
- Forum chrome: `#00324e`; content `#f2f2f2`; white post cards.
- Tier 2: `getdesign.md/dcard` directory only; Refero query has no record.

Conflict resolution: `#3397cf` is the live Download App CTA and cross-domain accent. Earlier footer copy assigning `#006aa6` to that CTA was reverted; `#006aa6` remains the distinct secondary/search/chrome role. The sibling reports no unresolved Tier 1/Tier 2 conflict.

## YAML token record

### Colors

| Key | Exact value |
|---|---|
| primary | `#3397cf` |
| primary-hover | `#5ab0db` |
| secondary | `#006aa6` |
| brand | `#00324e` |
| canvas | `#f2f2f2` |
| surface / on-primary | `#ffffff` |
| foreground | `#000000` |
| hint | `#e7f3f9` |
| premium / premium-hover | `#ffc51b` / `#ffd558` |
| success | `#49bd69` |
| danger | `#ea5c5c` |
| warning / special | `#f0a955` / `#f0b941` |
| topic | `#bf8ff0` |
| snackbar | `#2c2c2c` |
| sidebar-hover | `#032133` |
| disabled | `#e0e0e0` |
| hairline | `#cacaca` |
| gender-female / gender-male | `#cb3a6b` / `#1c7fac` |

Additional `:root` roles preserved in portable Foundations: `#6fc985`, `#339653`, `#f78c88`, `#c44347`, `#da9246`, `#0000000d`, `#ffffff14`, `#00000059`, `#000000b3`, `#fafafa`, `#000000d9`, `#00000080`, `#0003`, `#ffffff8c`, `#fff6`, `#0000001a`, `#ffffffb3`, `#f48fb1`, `#81d4fa`, `#fcd46d`, and `#0006`.

### Typography and scales

| Group | Exact YAML source values |
|---|---|
| family | sans `Roboto` |
| headline-1 | 32 / 500 / unitless `1.31`; mobile 30px in body |
| headline-2 | 28 / 500 / unitless `1.43`; mobile 24px |
| headline-3 | 24 / 500 / unitless `1.17`; mobile 20px |
| headline-4 | 20 / 500 / unitless `1.4` |
| title | 18 / 600 / unitless `1.39` |
| subtitle | 16 / 500 / unitless `1.38` |
| body | 16 / 400 / unitless `1.38` |
| body-sm | 14 / 400 / unitless `1.43` |
| caption | 12 / 500 / unitless `1.42` |
| caption-sm | 10 / 500 / unitless `1.6` |
| spacing | xs `4`; sm `8`; md `16`; base `16`; lg `20`; xl `32`; xxl `48`; section `64` |
| rounded | sm `4`; md `8`; full `9999` |
| shadow summary | level-1 “Material elevation level 1 — subtle card lift”; level-5 “Material elevation level 5 — modals, popovers” |

Full stack: `Roboto, "Helvetica Neue", Helvetica, Arial, "PingFang TC", 黑體-繁, "Heiti TC", 蘋果儷中黑, "Apple LiGothic Medium", 微軟正黑體, "Microsoft JhengHei", sans-serif`.

The body adds Subtitle 2 14/500/20px and Body 1 article 16/400/28px. Explicit line-height values: H1 42px/mobile 40px; H2 40px/mobile 33px; H3/H4 28px; Title 25px; Subtitle1/Body1 22px; Subtitle2/Body2 20px; Caption 17px; Caption2 16px.

## Component token record

| id / primitive | Exact YAML record and source-body refinement |
|---|---|
| button-primary / button | `#3397cf` / white; radius `8`; `8px 20px`; `14/500`; Download App. Sibling live compact tuple remains separate: 1×14, 32px, 14px·500. |
| button-secondary / button | `#006aa6` / white; YAML radius `4`; body joined `0px 4px 4px 0px`; `8px 20px`; `14/500`; search submit |
| button-counter / button | radius `8`; `1px 14px`; `14/500`; body transparent / `rgba(0,0,0,0.5)` |
| button-disabled / button | `#e0e0e0`; radius `8`; inactive state; body text `#00000080` |
| search-input / input | white; YAML radius `4`; body joined `4px 0px 0px 4px`; `8px 12px`; `1px solid #cacaca` |
| post-card / card | white; radius `4`; padding `20px`; flat feed card on `#f2f2f2` |
| forum-card / card | white; radius `4`; padding `16px`; `146px × 110px` |
| topic-chip / badge | `#bf8ff0` / white; 4; `4px 8px`; `12/500` |
| sponsor-chip / badge | `#f0b941` / white; 4; `4px 8px` |
| feed-tabs / tab | radius `4`; All/Following; 48px header; active underline + `#000000` in YAML, body distinguishes `#000000d9` active / `#00000080` inactive |
| snackbar / toast | `#2c2c2c` / white; 4; width 250px; bottom 0px or 16px |

Additional body components: on-dark chip `#ffffff14` / white / 4px / `4px 8px`; post modal white/8px/728px with `#00000059` or `#0006`; comment modal white/8px/720px; full-page sign-up overlay `#000000b3`; header 48px / 20px / `#00324e`; left sider 208px; right aside 300px / 10px gap.

### Internal geometry conflicts

- YAML/component detail uses 4px for the secondary button, search input, post/forum cards, topic/sponsor badges, feed tab, and snackbar; joined search geometry uses `0px 4px 4px 0px` and `4px 0px 0px 4px`.
- Legacy §7/§9/§12 simultaneously generalizes “8px everywhere”, says not to use 4px, and calls pills toggle-only. That generalization conflicts with the field-level component records and is not promoted over them.
- The legacy Agent Prompt example additionally says the post card has “no radius”, conflicting with the YAML/body 4px post-card record. The prompt-only value remains recorded here, not merged into the portable component.
- Topic chip padding: the Agent Prompt example gives `4px 10px` (with 8px radius), conflicting with the YAML/body component record `4px 8px` at 4px radius. The prompt-only padding is recorded here and not merged into the portable component.
- Header logo and joined search geometry: the Agent Prompt example gives a white logo of 28px height on the left of the 48px header, and a joined search pair with 8px radius on the input's left side and `0px 8px 8px 0px` on the submit — conflicting with the body's joined 4px geometry (`4px 0px 0px 4px` input / `0px 4px 4px 0px` submit). The 28px logo height has no competing body record; it survives only as a prompt-only child dimension. Both are recorded here and not promoted into Layout or the portable components.
- Post-preview line clamp: the Agent Prompt example specifies a 2-line clamp for the post body preview, while the body token `--mixins-multi-ellipsis--webkit-line-clamp` is `1` with per-component customization. The prompt-only 2-line value is recorded here and not promoted over the token.
- Feed tabs carry YAML active `#000000` and body semantic active `#000000d9`; both are retained separately.

### Prompt-only child dimensions and details

The legacy §9 Agent Prompt post-card example is the only source for the following child-level values. They are recorded here rather than deleted; the two with a portable slot (avatar, thumbnail) are also carried in Components as source guidance, and the log records both destinations.

| Child element | Prompt-only value | Also in portable? |
|---|---|---|
| Avatar | 40px circle | yes — Components, as source guidance |
| Inline thumbnail | 84px | yes — Components, as source guidance |
| Forum name | 12px weight 500, colored per forum | no — provenance only |
| Timestamp | 12px weight 500, `#00000080` | no — provenance only |
| Post title | H4 size, 20px weight 500, `#000000d9` | no — provenance only |
| Body preview | 14px weight 400, `#00000080`, 2-line clamp | no — provenance only |
| Inner padding | 20px | yes — Components post-card padding |
| Action buttons | heart / comment / save / share row at bottom | no — provenance only |

Per-forum coloring of the forum name is the prompt's own instruction; the legacy iteration guide separately restricts `--color-gender-*` to author chips on the gender-tagged forums `女孩` / `男生` / `感情`. Neither is promoted into a portable component record.

The Agent Prompt sign-up-overlay example also supplies illustrative English copy — “From school to work, find your resonance on Dcard.” — with a 24px weight 500 `#000000d9` heading and 14px weight 400 `#00000080` subhead. The string is prompt-only and illustrative, never verified as live Dcard copy, and is not promoted into Content & Locales.

## Elevation and runtime motion

| Token | Exact value |
|---|---|
| shadow-level-1 | `0px 1px 6px -2px #00000052` |
| shadow-level-2 | `0px 2px 8px -1px #0003` |
| shadow-level-3 | `0px 3px 12px #0000002e` |
| shadow-level-4 | `0px 4px 16px #00000029` |
| shadow-level-5 | `0px 6px 24px #0000001f` |
| animations-bezier | `cubic-bezier(.4, 0, .2, 1)` / normalized portable `cubic-bezier(0.4, 0, 0.2, 1)` |
| animations-short-duration | `.15s` / 150ms |
| animations-medium-duration | `.3s` / 300ms |

The sibling says §4 already documented the 5-level shadow, runtime easing, gender colors, and premium gold. Most feed cards remain flat; elevated tokens are for floating UI.

Legacy z-index semantics: the sticky header sits above content; modal backdrops use the spotlight layer; the sign-up overlay sits above chrome; toast/snackbar is the highest layer.

## Layout token ledger

- Max page width 1280px.
- Three columns: 208px sider / 728px main / 300px aside; section gap 12px; aside-section gap 10px.
- Header 48px high with 20px padding.
- Post entry 20px; post view/list 20px vertical / 24px horizontal; column item 24px; content title 60px.
- Bottom navigation height 0px on web; safe-area inset bottom 0px; hero image 243px; media maximum 60vh.
- Cover image width/height 100%, `object-fit: cover`.
- Ellipsis tokens: hidden / ellipsis / nowrap. Multi-line: `-webkit-box`, vertical, clamp 1, customizable per component.

### Inferred responsive ledger

- Desktop `>1280px`: centered 208/728/300 layout.
- Desktop `1024–1280px`: compressed three-column, asides may collapse.
- Tablet `768–1024px`: right aside hidden; sider + main.
- Mobile `<768px`: single column; H1 32→30, H2 28→24, H3 24→20.

The source explicitly labels these breakpoints inferred from mobile-specific typography tokens. They remain unpromoted as responsive contract; the mobile type sizes themselves are source tokens and remain portable.

## Unpromoted motion and signature ledger

Beyond the three runtime tokens, the legacy source adds:

- `motion-instant` 0ms; `motion-long` 500ms.
- `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`.
- Spring/overshoot prohibited for general product surfaces; the source's rationale names the late-night reading context and its sensitive forums (`感情`, `心情`, `工作壓力`), and a midnight-match reveal is described as a legacy ritual exception.
- Feed-card press: white to base-3 tint over short/standard, without scale/shadow.
- Sign-up overlay: transparent-to-`#000000b3` over long/enter plus y+20px-to-final card over medium/enter, backdrop first.
- Infinite-scroll cards: opacity 0→1 over medium/standard, no slide.
- Sidebar indicator: 2px bar height expands/collapses over short/standard.
- `prefers-reduced-motion: reduce`: all motion tokens collapse to instant; shimmer becomes static `#f2f2f2`; card fade becomes immediate; overlay appears without coordinated entrance.

These exact editorial recipes lack a complete component-specific transition-property, animation-name, duration, easing, and reduced-motion proof bundle and are not promoted beyond provenance.

## State recipe ledger

The complete 12-row legacy §14 guidance is retained in portable Components under adjacent B2a. It includes illustrative—not live-verified—strings and is not a complete measured interaction suite. Durations 3s / 4s, approximately two scroll lengths, widths 100/90/70%, 14px line height, 8px gap, 20px inset, 24px spinner, and all token references remain present there.

## Narrative, voice, and evidence classes

- Wikipedia, fetched 2026-04-20: 2011-12-16; NTU; Kytu Lin / 林裕欽; D = Destiny; 6M+ members / 18M monthly UV in November 2022; original midnight pairing and forum history. None was reverified against a primary Dcard source.
- Wikipedia URL: https://en.wikipedia.org/wiki/Dcard.
- Dcard Tech Blog, https://medium.com/dcardlab, fetched 2026-04-20: “Binding Generations. Breaking Limitations. Building with Passion.” and Kytu Lin editor association.
- Direct WebFetch to Dcard/About routes returned 403 during the philosophy augmentation; live microcopy re-verification was out of scope then.
- Verified base/live controls: `下載 App`, `登入`, `註冊`; sibling additionally verifies “Download App”, “Sign in”, `關於我們`, `最新消息`, `品牌資源`, `徵才介紹`, `社群守則`.
- Illustrative only: `還沒有文章`, `這篇文章已被刪除`, `搜尋 Dcard`. They remain labelled illustrative and are not verbatim brand copy.
- Editorial readings include frame-versus-picture, category/cultural comparisons, soft/tactile radius meaning, identity-under-anonymity causality, no-spring emotional rationale, and all eight Principles. Portable uses carry complete adjacent B2a.
- Style reference `pinkoi` is a TW Asian-marketplace tone pointer, not Dcard token authority.

Exact source/proof color-function forms: `rgba(0,0,0,0.85)`; `rgba(0,0,0,0)`; `rgb(51,151,207)`.

## Persona disposition

The source explicitly labels all three named personas fictional archetypes. Rulebook D2 prohibits recopying their names or biographies in either artifact. Only Taiwanese student/recent-graduate and forum-reader groups remain portable.

## Proof notes

- Tier 1: `dcard.tw/f`, `about.dcard.tw/`. Tier 2 Refero/getdesign unavailable. Secondary founding evidence: Wikipedia and Dcard Tech Blog masthead.
- NTU is the current secondary-source claim; NCCU remains a research gap pending a primary Dcard source.
- Portable derived-editorial scope includes surface/source boundaries, narrative causality, visual characterization, tasks, audience grouping, the English glossing of the Traditional Chinese forum names, biography-retention disposition, distinctive selection, eight principles, avoidances, the observed-token-layer subset characterization in Foundations, catalog-primary promotion, opacity/color reconciliation, spacing/geometry placement, shape/elevation/motion boundaries including the 95% estimate class and promotion rule, family/assets, state evidence, every component kind/applicability and source-record/geometry/color reconciliation judgment, shared-variant classification, child-dimension proof boundary, state guidance, layout/responsive boundary, content/locale direction including illustrative-copy promotion, and governance.
- Each carries adjacent complete wording: derived editorial implementation inference; not Dcard-authored or a separately published UI specification.
