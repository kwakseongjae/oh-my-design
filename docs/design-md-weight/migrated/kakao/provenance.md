# Kakao provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/kakao/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | kakao |
| name | Kakao |
| country | KR |
| category | consumer-tech |
| homepage | https://www.kakaocorp.com/page/ |
| primary_color | `#fee500` |
| logo | simpleicons slug `kakaotalk` |
| omd format (source) | 0.1 |
| ds.name | Kakao Login Design Guide |
| ds.url | https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide |
| ds.type | system |
| ds.description | Official Kakao Login button compliance guidance; corporate-site design is tracked as a separate surface. |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-11 |

Catalog logo metadata is Simple Icons identity (`kakaotalk`), not a captured first-party mark. Dual destination (E2a): this identity ledger and portable Typography & Assets, which records the same Simple Icons identity as a boundary sentence, not as a captured first-party mark.

YAML `ds.name` is Kakao Login Design Guide. YAML `ds.url` is `https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide`. Verification surfaces record `https://developers.kakao.com/docs/ko/kakaologin/design-guide`. YAML `ds.type` is `system`. YAML `ds.description`: Official Kakao Login button compliance guidance; corporate-site design is tracked as a separate surface.

Token note from source: Kakao Login compliance, Kakao corporate marketing, and Kakao Developers documentation chrome are separate evidence domains.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-11 |
| verification_v2.checked | 2026-07-11 |
| surfaces inspected | 2026-07-11 |
| sources captured | 2026-07-11 |
| tokens.extracted | 2026-07-11 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| corp-home | marketing | https://www.kakaocorp.com/page/ | 2026-07-11 |
| corp-culture | marketing | https://www.kakaocorp.com/page/about/culture | 2026-07-11 |
| corp-milestones | marketing | https://www.kakaocorp.com/page/about/milestones | 2026-07-11 |
| login-guide | design-system | https://developers.kakao.com/docs/ko/kakaologin/design-guide | 2026-07-11 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| corp-home-live | product-surface | https://www.kakaocorp.com/page/ | 2026-07-11 |
| corp-culture-live | product-surface | https://www.kakaocorp.com/page/about/culture | 2026-07-11 |
| corp-milestones-live | product-surface | https://www.kakaocorp.com/page/about/milestones | 2026-07-11 |
| login-guide-live | official-doc | https://developers.kakao.com/docs/ko/kakaologin/design-guide | 2026-07-11 |

### Tier 1

- https://www.kakaocorp.com/page/
- https://www.kakaocorp.com/page/about/culture
- https://www.kakaocorp.com/page/about/milestones
- https://developers.kakao.com/docs/ko/kakaologin/design-guide

YAML `ds.url` (latest-path official guide): https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide

### Tier 2 (no usable record)

- https://getdesign.md/kakao (did not provide importable current Kakao records in this run)
- https://styles.refero.design/?q=Kakao (did not provide importable current Kakao records in this run)

### Narrative (not interface tokens)

Corporate mission, KakaoTalk-as-organizing-metaphor, and surface-separation narrative are in the portable Experience scope. They are not interface tokens. Official Login compliance remains `login-guide` / official-doc.

## Claim ledger

Claims use YAML anchors from the source: `login_doc` = login-guide / login-guide-live / official-doc-rendered-text / 2026-07-11; `corp_live` = corp-home / corp-home-live / computed-style / 2026-07-11; `milestones_live` = corp-milestones / corp-milestones-live / computed-style / 2026-07-11; `culture_live` = corp-culture / corp-culture-live / computed-style / 2026-07-11.

| claim | surface |
|---|---|
| tokens.colors.login | login-guide (`login_doc`) |
| tokens.colors.login-symbol | login-guide |
| tokens.colors.login-label | login-guide |
| tokens.colors.marketing | corp-home |
| tokens.colors.dark-marketing | corp-home |
| tokens.colors.canvas | corp-home |
| tokens.colors.foreground | corp-home |
| tokens.colors.on-dark | corp-home |
| tokens.colors.muted | corp-milestones |
| tokens.colors.surface | corp-milestones |
| tokens.colors.border | corp-culture |
| tokens.typography.family.display | corp-home |
| tokens.typography.family.text | corp-home |
| tokens.typography.family.login | login-guide |
| tokens.typography.display.size / weight / lineHeight / tracking | corp-home |
| tokens.typography.heading.size / weight / lineHeight | corp-home |
| tokens.typography.title.size / weight / lineHeight | corp-home |
| tokens.typography.nav.size / weight / lineHeight | corp-home |
| tokens.typography.body.size / weight / lineHeight | corp-home |
| tokens.typography.body-readable.size / weight / lineHeight / tracking | corp-home |
| tokens.typography.caption.size / weight / lineHeight / tracking | corp-home |
| tokens.typography.login-label.size | login-guide |
| tokens.spacing.xs / sm / md / lg / xl | corp-home |
| tokens.rounded.login | login-guide |
| tokens.rounded.marketing / search / full | corp-home |
| tokens.rounded.footer / filter | corp-milestones |
| tokens.components.kakao-login.* | login-guide |
| tokens.components.corporate-nav.* | corp-home |
| tokens.components.search-control.* | corp-home |
| tokens.components.dark-marketing-tag.* | corp-home |
| tokens.components.milestone-filter.* | corp-milestones |
| tokens.components.footer-pill.* | corp-milestones |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- YAML `ds.type`: `system`
- Surface split: corporate marketing uses KakaoBig/KakaoSmall; the Login component requires OS system type; Developers docs chrome uses Pretendard.
- Kakao Login foreground `rgba(0, 0, 0, 0.85)` is the component renderable field. YAML `tokens.colors.login-label` `#000000` is a named token, not a merge into corporate Foreground `#333333` (A4).
- Uncaptured or unspecified hover/pressed/disabled/`focus-visible` treatments are omitted. Capture absence is not a `not-applicable` reason. Applicability follows control meaning. State coverage is not claimed complete.
- Generic `focus` on corporate navigation is an additional observed named state, not a `focus-visible` treatment. No `focus-visible` color is assigned (B1).
- Dark Marketing Tag (`type: badge`) has no interactive-kind evidence; kind and a state-applicability map were omitted (C4).
- Kakao Login / Corporate Navigation / Search Control / Milestone Filter / Footer Related-Site Pill loading·error·success follow each control's product role, not primitive-type bulk assignment (C2).
- Source §13 states these are official service and stakeholder contexts, not invented demographic personas. The four groups remain Audience. Independently verified primary tasks are not a §13 destination: Login task maps to the official Login guide/component; browse/search/filter map to captured corporate surfaces/components. No fictional demographic segments were recorded here and none were moved to a persona sidecar (D2).
- No canonical motion duration or easing is promoted. Any exact animation value remains a local extension until a per-component computed observation records transition properties, animation name, duration, easing, and reduced-motion behavior (B3).
- Catalog Simple Icons logo is dual provenance identity + portable Typography & Assets boundary sentence; it is not a captured first-party mark (E2a).
- Source placeholders: none. No omission-ledger wrappers.
