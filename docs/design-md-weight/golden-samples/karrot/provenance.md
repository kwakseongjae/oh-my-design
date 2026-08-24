# Karrot provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T1-3 golden sample. Canonical source remains `web/references/karrot/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | karrot |
| name | Karrot |
| country | KR |
| category | consumer-tech |
| homepage | https://www.karrotmarket.com |
| primary_color (frontmatter) | `#ff7e36` |
| logo | github slug `daangn` |
| ds.name | SEED Design |
| ds.url | https://v2.seed-design.io |
| ds.type | system |
| ds.description | Karrot (Daangn)'s open-source design system for marketplace apps. |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-11 |
| style ref (source footer) | `toss` (KR neighbor tone, retained) |

Frontmatter `primary_color: "#ff7e36"` is identity metadata. It is not the SEED Primary (`#ff6f0f`) and not the marketing CTA (`#ff6600`). It was not promoted into Foundations.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-11 (CAP0 evidence v1 + SEED v2 source reconciliation) |
| verification_v2.checked | 2026-07-11 |
| surfaces inspected | 2026-07-11 |
| sources captured | 2026-07-11 |
| philosophy-layer retrieval | 2026-04 (about.daangn.com, karrotmarket.com, medium.com/daangn) |

Conflicts unresolved: source §13 body vs philosophy-layer comment (official stakeholder contexts vs fictional archetypes). Token-level `conflicts: []` is unchanged.

Resolved drift recorded in source: current SEED product Primary is `#ff6f0f`; current marketing-web CTA `#ff6600` is retained as a separate surface token. The prior 26px maximum and exact Pretendard/SF Mono claims were removed.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| marketing-home | marketing | https://www.karrotmarket.com/ | 2026-07-11 |
| marketing-about | marketing | https://www.karrotmarket.com/about/ | 2026-07-11 |
| seed-system | design-system | https://v2.seed-design.io/ | 2026-07-11 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| karrot-live | product-surface | https://www.karrotmarket.com/ | 2026-07-11 |
| seed-source | official-doc | https://github.com/daangn/seed-design/blob/fb4459e90f84e049112395964319b163f980b821/packages/stylesheet/global.css | 2026-07-11 |
| seed-typography | official-doc | https://v2.seed-design.io/foundation/typography/ | 2026-07-11 |
| seed-box-button | official-doc | https://v2.seed-design.io/component/box-button/usage/ | 2026-07-11 |
| seed-text-field | official-doc | https://v2.seed-design.io/component/text-field/usage/ | 2026-07-11 |
| seed-tabs | official-doc | https://v2.seed-design.io/component/tabs/usage/ | 2026-07-11 |
| seed-snackbar | official-doc | https://v2.seed-design.io/component/snackbar/usage/ | 2026-07-11 |

### Tier 1

- https://www.karrotmarket.com/ (marketing live DOM)
- https://www.karrotmarket.com/about/
- https://v2.seed-design.io/foundation/color/palette/
- https://v2.seed-design.io/foundation/typography/
- https://github.com/daangn/seed-design/blob/fb4459e90f84e049112395964319b163f980b821/packages/stylesheet/global.css

### Tier 2 (no importable Karrot claim in this run)

- https://getdesign.md/karrot
- https://styles.refero.design/?q=Karrot

### Tier 2 philosophy / founders

- Crunchbase (Karrot + Kim Jae-hyun + Kim Yong-hyun profiles)
- KED Global ($180M unicorn 2021)
- Korea Herald (Canada 2M)
- ZoomInfo (HQ Gangnam)
- KoreaTechDesk

### Philosophy-layer first party (2026-04)

- https://www.karrotmarket.com — live English microcopy
- https://about.daangn.com — tagline `동네를 여는 문, 당근`, mission `로컬의 모든 것을 연결해, 동네의 숨은 가치를 깨워요`, Jan-2025 metrics
- https://medium.com/daangn — tech-focused mission variant `로컬의 모든 것을 연결해 동네의 숨은 가치를 기술로 깨우는`

## Claim ledger

`seed_color` = seed-system / seed-source / official-source / 2026-07-11.
`karrot_live` = marketing-home / karrot-live / computed-style / 2026-07-11.
`seed_type` = seed-system / seed-typography / official-doc / 2026-07-11.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-hover / primary-pressed / canvas / background / surface / foreground / muted / on-primary / hairline / brand-tint / error / info / success | seed_color |
| tokens.colors.marketing | karrot_live |
| tokens.typography.family.sans | karrot_live |
| tokens.typography.h1/h2/h3/title/body/body-small size, weight, lineHeight | seed_type |
| tokens.spacing.sm/md/lg/xl/section | karrot_live |
| tokens.rounded.sm/md/full | karrot_live |
| tokens.components.marketing-primary.* | karrot_live |
| tokens.components.box-button.type/states/use | seed-box-button |
| tokens.components.text-field.type/states/use | seed-text-field |
| tokens.components.tabs.type/states/use | seed-tabs |
| tokens.components.snackbar.type/states/use | seed-snackbar |

## Historical claims not in the portable contract

These were in legacy §11 or the philosophy HTML comment. They do not interpret current UI tokens. They stay here so they are not silently dropped from the corpus.

- Founded 2015 in Pangyo by Kim Yong-hyun and Kim Jae-hyun, former Kakao engineers (Crunchbase, press).
- Early product hard-capped transactions to a 6 km radius, later reported 10 km in KR/JP and up to 50 km in North America. Source comment: current product-level radius may differ; do not use as a design constraint without verification.
- Series D $162M August 2021 at $2.7B valuation; Danggeun Market Inc. as Korea's 13th unicorn. September 2019 raise 40 billion KRW from Altos Ventures + Goodwater Capital.
- By early 2025 the company reports 40M+ cumulative registered users and 20M+ monthly active users across 1,400+ regions worldwide, with 227B KRW in cumulative funding (about.daangn.com as of 2026-04; re-verify before quoting publicly; not independently cross-checked against financial filings).
- Editorial readings in the source comment, not sourced brand statements: “Orange is the accent because the brand is supposed to feel like one warm thing in an otherwise neutral room”; orange as “fresh carrot, not corporate orange, not alarm orange”.
- Spring-forbidden stance is in portable Foundations with the source comment's authority limit: derived editorial interpretation from brand posture (trust between strangers, calm neutrality), not a documented SEED rule.
- Source §13 body vs philosophy-layer comment conflict is unresolved. The four stakeholder-context bullets were not promoted to primary-tasks or Audience. Independently verified task only: buy or sell nearby with locals. Fictional demographic segments from that comment are not recorded here and were not moved to a persona sidecar.

## Verified copy pointers

- `Buy and sell for free with locals` — https://www.karrotmarket.com, 2026-04
- `Welcome to your new neighborhood buy & sell` — same
- `It's easier in the apps` / `Download the Karrot app` — same
- `동네를 여는 문, 당근` — https://about.daangn.com, 2026-04
- `로컬의 모든 것을 연결해, 동네의 숨은 가치를 깨워요` — about.daangn.com mission page, 2026-04

Illustrative (not verified as live Karrot copy; omitted from DESIGN.md):

- `<neighborhood>에서 <product>을(를) 찾고 있어요`
- `이 거래, 직접 만나서 할까요?`
