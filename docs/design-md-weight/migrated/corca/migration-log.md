# Corca migration log

Source: `web/references/corca/DESIGN.md`
Destination: `docs/design-md-weight/migrated/corca/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/corca/provenance.md`
Canonical Proof (adopted): `web/references/corca/.verification.md` SHA-256 `44eb660181a6e1bd6ba39250ae70530250b2a41ad3734a302933cbb7af1fd693`
Date: 2026-08-25
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v8
Portable Core: `evaluatePortableCore` → `portable_core: true`, `level: portable-core`. Gate `migrate-reference.mjs --gate-only` → PASS, problems `[]`. SHA-256 `79580b2d981a83e916ad9e2ef1be4c0c766c64e22224700244903d69c3676f4f`. This is not a catalog-adoption claim (E2c).
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, display_name_kr, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Distinctive + Foundations + capture-bound Do’s; logo URL 분리 → provenance, identity-boundary 옮김 → Assets | Portable file has no frontmatter. Name kept as H1 `Corca Design System` DESIGN.md:1. Homepage `https://www.corca.ai/` dual Scope DESIGN.md:9 / 11 + Primary tasks DESIGN.md:23 / 25 + provenance.md Identity 14 / dest 24 / Surfaces 52 / Sources 59 / Tier 1 66 / Inspect notes 118 (E2a). Catalog `primary_color` `#1a2352` dual provenance.md:15,22,26,46,118,152,159,211 + Proof quotes 177/189/203 + DESIGN.md Scope 9, atmosphere 13, Distinctive 36/38, Principles 50/53, capture-bound Do’s 58/60, Avoid 71/73, Foundations 87/89, after-list 107, Font 173, Type 192/199, Capture 220/224, Primary CTA 230/241, Outline 294, White Feature Card anatomy/heading 319/323 (E2a). Google s2 favicon URL `https://www.google.com/s2/favicons?domain=corca.ai&sz=128` is provenance.md:16,28 / Proof `:68` 219 only. Portable Assets DESIGN.md:203 is a URL-free Google-favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file sentence. First-party mark-file existence is not claimed from this lookup. GitHub org avatar URL provenance.md:28 / Proof `:70` 223 only, not adopted. `display_name_kr` 코르카 dual provenance.md:11 + Scope DESIGN.md:9 (E2a). |
| YAML `omd`, `verified`, `added`, token claims, `tokens.source` / `extracted` / `components_harvested` / `note` | mixed: `omd` / `verified` / `added` / `extracted` YAML keys 분리 → provenance; `live-extract`와 token note와 `components_harvested: true`는 본문에도 | 출처 원장·freshness·Proof. YAML has no `verification_v2`; absence recorded provenance.md:30,46,146 (A1c). None invented. `tokens.source: live-extract` dual provenance.md:18,30 + Scope DESIGN.md:9 (E2a). Token note dual provenance.md:22 + Scope DESIGN.md:9 (E2a). `components_harvested: true` dual provenance.md:20,30,147 + Capture DESIGN.md:212,214 (E2a). YAML `verified` / `added` / `extracted` 2026-07-02 freshness 40/41/42. Footer Verified provenance.md:44. Claim ledger provenance.md:86–112. YAML has no `ds.type`. None invented. Canonical Proof sidecar adopted because source HTML comment names `web/references/corca/.verification.md` Proof block: provenance.md:32,145. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. Colors DESIGN.md:89–105. YAML records no `lineHeight`; none invented DESIGN.md:186 (A1a). YAML `spacing` xs 8, sm 15, md 16, base 24, lg 48, xl 64 unitless dual DESIGN.md:111,389. YAML `rounded` sm 10, md 16, lg 24, pill 50, full 9999 DESIGN.md:115,117,122,125 (not Distinctive 36 after F3 retarget; 43 is observed 50px/999px, not the YAML scale). YAML `type: button` ×3 컴포넌트별 보존 DESIGN.md:238,263,291; `type: card` ×2 DESIGN.md:318,334; `type: tab` DESIGN.md:363; `type: badge` DESIGN.md:348 + provenance.md:150. `Kind: interactive`로 뭉개지 않음 (A1b). YAML `button-cta` `fg` `#1a2352` stays on that control as inferred, not a measured leaf DESIGN.md:107,230,241 — 일반 Navy와 역할은 공유하되 leaf-measurement로 승격하지 않음 (A4). Canvas `#ffffff` vs hero-headline `#ffffff` vs CTA fill `#ffffff` 비합침. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위 DESIGN.md:9–17. 두 캡처 URL dual Scope DESIGN.md:9 / 11 + provenance.md Surfaces 52–53 / Sources 59–60 / Tier 1 66–67 / Inspect notes 118–119 (E2a). `live-extract` token note DESIGN.md:9. 분위기 요약 Distinctive DESIGN.md:36–46. 반복 분위기 문장은 범위에 기여하는 요약만. |
| §1 / §11 공식 URL | 분리 → provenance; 본문에 범위 경계로도 유지 | 캡처 출처 provenance.md:52–53,59–60,66–67,118–119. `https://corca.co.kr/` dual Scope DESIGN.md:11 + Named gaps 461 + provenance Sources 61 / Tier 1 68 (E2a). `https://github.com/corca-ai` dual Scope DESIGN.md:11 + Named gaps 461 + provenance Sources 62 / Tier 1 69 (E2a). Trace dual Scope DESIGN.md:11 / 15 / Audience 32 + Named gaps 461 (E2a). 본문은 brand-owned host ≠ token-capture 경계를 Experience Scope DESIGN.md:11에 유지. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | 17 hex 전부 DESIGN.md:89–105. Unmerged-role extras 인접 완전 B2a DESIGN.md:87; after-list 107 (B2/B2a). `#1a2352` vs `#000000` / `#181818` / `#324158` / `#046cb8` 비합침. Canvas `#ffffff` vs hero-headline / CTA fill 비합침. `#fff3b7` vs `#fdd484` 비합침. `#777cdc` vs `#605070` 비합침. YAML `button-cta` `fg` `#1a2352`는 inferred leaf이지 `focus-visible` treatment가 아님 DESIGN.md:107,230,241 (B1). focus-visible 행에 hex 없음. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 DESIGN.md:169–174 (Live computed + Declared/resolved families). Custom uploaded display webfont / Pretendard sub-nav / Madefor chrome DESIGN.md:173,178–180. 역할 메트릭 DESIGN.md:186–197. YAML 60 / 32 / 30 / 46 / 17 unmerged from Proof samples named Proof-only at DESIGN.md:186,194–195 without quoting the px strings; exact `60.7114px` / `32.3794px` / `30.3557px` / `28.332px` / `46.5454px` / `24.75px` are provenance.md:175/177/179/181/197/201. 미확인 family 대체 금지 DESIGN.md:182. Universal-sheet / exclusive-family / license negatives deleted (D1). 원본에 없는 OFL/GitHub font URL 발명 없음. orig_meiryo_ui Proof-only provenance.md:191. |
| §4 Component Stylings | 옮김 → Components & States | Primary CTA DESIGN.md:234–257; Learn-More DESIGN.md:259–285; Outline DESIGN.md:287–313; two cards DESIGN.md:315–342 kind/map 생략 (C4 B2a 329/342); Achievement Eyebrow DESIGN.md:344–357 Kind: non-interactive; Navigation tab DESIGN.md:359–384. Capture selector 없음 — 원본 HTML comment에도 `data-omd-capture` 없음, 발명 없음. YAML `button-cta` `fg` inferred DESIGN.md:241. |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·원장 provenance.md:36–46,64–76,143–163. Dual (E2a): two capture URLs는 Scope 9/11 + Surfaces/Sources/Tier 1/Inspect notes. corca.co.kr / github URLs는 Scope 11 + Named gaps 461 + Sources/Tier 1. Conflicts unresolved: none. Portable body does not re-host Tier 2 failure strings (E1); they are provenance.md:73–76 / Proof `:39` 215 / `:40` 217. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | 8px base, 8/15/16/24/48/64, CTA `8px 15px` DESIGN.md:111,389. Color-banded sections, achievement block pairing DESIGN.md:389. Whitespace philosophy 인접 완전 B2a DESIGN.md:391. YAML pill 50 vs outline 999px vs YAML full 9999 vs source-body `9999px` vs badge 8px DESIGN.md:117,122–125. Source-body `9999px` is DESIGN.md:117 / 125. Proof `300px` circular is provenance.md:207 only. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Flat / Color block / Ring 표 DESIGN.md:129–133. YAML `shadow.none` DESIGN.md:135. Shadow philosophy 인접 완전 B2a DESIGN.md:137. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | DESIGN.md:58–67. 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | DESIGN.md:69–79. 브랜드 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Mobile `<640px` / Tablet `640-1024px` / Desktop `1024-1440px` DESIGN.md:393,395–399. Touch-target and collapsing sentences DESIGN.md:401 including Image Behavior `at all sizes`. Source-stated이지 captured cross-viewport pass가 아님 — 인접 완전 B2a DESIGN.md:393 (table) / 401 (after-table touch/collapsing/image). |
| §9 Agent Prompt Guide | mixed: 도구별 명령·복붙 프롬프트 삭제; White Feature Card heading/body child tuples 옮김 → Components | 프롬프트 래퍼/`omd-apply`/`npx omd` 없음. Quick Color / Iteration 값은 Foundations/Components/Experience에 이미 있음. White Feature Card heading 32px display webfont / `#1a2352` and body 16px Pretendard / `#324158` dual Anatomy DESIGN.md:319 + Heading 323 / Body 324 (E2a). Achievement-block pairing (eyebrow + navy heading + outline pill) is source §5 Grid, Layout DESIGN.md:389. Prior “§9-only 고유 관계 없음” is SUPERSEDED. |
| §10 Voice & Tone | 옮김 → Content & Locales | 톤 표 DESIGN.md:408–414. Verbatim voice samples DESIGN.md:416–420. Forbidden register DESIGN.md:422 (not 418; 418 is a verbatim sample). 합성 보이스 샘플 없음. 인접 완전 B2a DESIGN.md:406 (voice/table) / 422 (forbidden-register) (B2/B2a, E1). Complete-product-microcopy-guide and complete-locale-profile / unobserved-locale negatives deleted (D1). |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | 미션 H1 / Moonlight / Trace / 아기유니콘 / 세계 7위 / adoption numbers DESIGN.md:15. refuse/embrace DESIGN.md:17. 연표·founder 생략 제약 DESIGN.md:15, Named gaps 462. Capture URLs dual Scope DESIGN.md:9 / 11 + provenance.md:52–53,59–60,66–67,118–119 (E2a). |
| §12 Principles | 옮김 → Experience principles | 다섯 항목과 *UI implication* DESIGN.md:50–56. 원본 HTML comment가 editorial readings라고 명시. 인접 본문에 derived editorial implementation inference / not Corca-authored or a separately published UI specification 한정, naming the five stems and UI implications (B2/B2a). Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | mixed: no-persona 경계 옮김 → Experience Audience; 가상 biography 삭제, sidecar 재수록 없음 | 원본이 fictional archetypes라고 명시. 정민서 / James Park / 이하늘 / 나이 / 도시 는 DESIGN에도 provenance에도 없음 (D2). Audience no-individual-personas-promoted DESIGN.md:32 (B2/B2a). Primary tasks 3건 dests 25–27 are captured-surface outcomes, under adjacent complete B2a as not-from-§13 DESIGN.md:23. The portable body does not call those tasks independently verified (E2c). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 9행 보존 DESIGN.md:218–228 (Empty×2, Loading×2, Error×2, Success, Skeleton, Disabled) (A2). §14 표 특성화 인접 완전 B2a DESIGN.md:216 (before the table). 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음 DESIGN.md:232. `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1). Primary CTA loading·error·success omitted (C2) DESIGN.md:257. Learn-More / Outline loading·error·success 역할별 not-applicable DESIGN.md:283–285 / 311–313 (C2). Nav tab loading·error·success 역할별 not-applicable DESIGN.md:382–384 (C2). Cards kind/map 생략 DESIGN.md:329,342 (C4). Badge non-interactive DESIGN.md:357. YAML `button-cta` `fg` `#1a2352`는 inferred leaf이지 `focus-visible` treatment evidence가 아님 DESIGN.md:230,241. focus-visible 행에 hex 없음 (B1). graph 위임 없음. coverage 완료 주장 없음 (C3, 232). |
| §15 Motion & Easing | mixed: durations·역할·signature·reduced-motion 옮김 → Foundations motion; 무출처 커브 생략 + 원장 | Durations 120ms / 220ms / 340ms DESIGN.md:145–147 (T1-3: duration 유지). Easing 역할/용도 커브 없이 DESIGN.md:149–155 (인접 완전 B2a 149). Signature motion + `prefers-reduced-motion` DESIGN.md:159. Exact curves `cubic-bezier(0.2, 0.6, 0.25, 1)` / `cubic-bezier(0.4, 0.0, 1, 1)` / `cubic-bezier(0.25, 0.1, 0.25, 1)` 는 무출처라 승격하지 않음. Dual Motion DESIGN.md:157 + Named gaps DESIGN.md:458 + provenance.md omitted-curves table 137–139 (E2a, E2b). The exact `cubic-bezier(...)` strings are provenance 137–139, not the section head 131. Foundations Motion DESIGN.md:161는 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시하고, “Official documentation of a single curve or duration is not that gate”를 포함한다. Named gaps DESIGN.md:463는 같은 다섯 종류를 inventory form으로 나열한다. B3 전문 승격 게이트 문장은 Foundations Motion 161 only (B3, E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·원장 provenance.md:36–46,64–76. Dual (E2a): two capture URLs는 Scope 9/11 + Surfaces/Sources/Tier 1/Inspect notes. corca.co.kr / github는 Scope 11 + Named gaps 461. Source HTML comment names `.verification.md`; this packet adopts it (provenance.md:32,145). |
| HTML comment inspect notes (`rgb(26,35,82)` / `rgb(4,108,184)` / `rgb(50,65,88)` / `rgb(255,243,183)` / `rgb(64,32,96)` / `rgb(65,158,255)`) | mixed: compact rgb 분리 → provenance inspect notes; hex는 본문 | Compact rgb provenance.md:118–119 / dest 121 only (E2a). Hex equivalents are portable Foundations. Spaced Proof `rgb(26, 35, 82)` forms are Proof quotes 177+; they are not the compact HTML-comment strings. |
| HTML comment / Proof sidecar `.verification.md` | 분리 → provenance Proof notes; raw tuples 본문에 합치지 않음 | Canonical Proof SHA provenance.md:32,145. Raw samples quoted provenance.md:175–223. Proof-only: `60.7114px` / `32.3794px` / `30.3557px` / `28.332px` / `46.5454px` / `24.75px` / `300px` circular / `orig_meiryo_ui` / wrapper `rgb(0,0,238)` / 10px wrapper font-size / GitHub avatar. Portable Type-role limiter DESIGN.md:186 and Shape DESIGN.md:117,125 name those samples as Proof-only without quoting the Proof px strings. |

## F1 / F2 (v8 mandatory final passes)

Worker F1/F2 completeness is not a current-class claim (E2c). F3 auditor grepped the three files after B2a limiter and dest-map edits. Reconstruction-boundary exemption not used. Not a catalog-adoption claim (E2c).

### F1 B2a scan (post-F3; full DESIGN.md reread)

Pass 1 reread of portable `DESIGN.md` from line 1. Adjacent complete B2a sites match `provenance.md` Derived inventory: Scope 9/11/13/15/17, Primary tasks 23, Audience 32, Distinctive 36, Principles 50/58, Avoid 71, Semantic 87/107, Spacing 111, Shape 117, Elevation 137, Motion 141/149/157/159, Font 169, Family 182, Type roles 186/199, Assets 203/205, Capture 212/214/216/230/232, Primary CTA 257, Learn-More 275, Outline 303, cards 329/342, Badge 357, Navigation 374, Layout 389/391/393/401, Content 406/422. Governance Authority / priority / unknowns / changes 430 / 436–439 / 445 / 451 are the controlled Core copy; they are not reconstruction readings and are not wrapped. Named gaps 454–463 are unnamed-value inventory, not extra brand doctrine. Distinctive 36 does not name YAML rounded vs 999px / 8px / Proof circular or YAML 17 / 30 Proof unmerges (those are Shape 117 and Type roles 186). Capture 216 names §14 table characterizations immediately before the table; 232 names omitted-L-E-S / C4 / not-complete-coverage only. Core C1/C2/focus-visible sentences after 232 stay unqualified Core policy. B3 five-kind gate 161 stays unqualified Core policy. Motion 141 names durations only; easing-role B2a is 149; signature-motion B2a is 159. Layout 393 names the breakpoint table only; after-table touch/collapsing/image B2a is 401. This is not a claim that no unqualified sentence remains (E2c).

Left unqualified as first-party, source-stated, observed-technical, or Core policy: Corca product identity restatement after 9; two capture URLs and `live-extract` restatement after 9; token-note restatement after 9; atmosphere restatement after 13; product-scope restatement after 15; refuse/embrace restatement after 17; primary-task list 25–27; Audience source §13 sentences after 32; Distinctive bullets 38–46; Principles stems 52–56; capture-bound Do’s 60–67; Avoid bullets 73–79; Semantic bullets 89–105; harvested spacing restatement after 111; YAML rounded 115 and shape list 119–125; elevation table 129–133 and YAML shadow 135; duration table 143–147; easing table 151–155; omitted-curves restatement after 157; source motion-rules restatement in 159 (named by the same-line limiter); B3 five-kind gate 161; Font table 173–174; Family bullets 178–180; Type-role rows 190–197; Assets restatement after 203/205; Capture source-state table 218–228; Core C1/C2/focus-visible applicability sentences after 232; Learn-More/Outline/Nav role-based not-applicable rows 283–285 / 311–313 / 382–384; card anatomy 317–327 / 333–340; badge anatomy 346–355; Layout breakpoint table 395–399; Content table 408–414 and verbatim samples 416–420; forbidden-register restatement after 422; Governance controlled copy 430 / 436–439 / 445 / 451; Named gaps inventory 454–463.

### F2 E2 grep (post-F3; value + field/role context)

F2 grep after F3 body/ledger writes (three files: DESIGN.md, provenance.md, migration-log.md). Each row below was confirmed before this sentence was written.

- Catalog `primary_color` `#1a2352` → DESIGN 9/13/36/38/50/53/58/60/71/73/87/89/107/173/192/199/220/224/230/241/294/319/323 + provenance 15/22/26/46/118/152/159/211 + Proof quotes 177/189/203.
- Achievement `#046cb8` → DESIGN 9/36/41/58/61/71/74/87/94/173/194/350/389 + provenance 22/46/118/159 + Proof quotes 179/181/189. Not atmosphere 13.
- Bright `#419eff` → DESIGN 13/42/95 + provenance inspect 119 + Proof quote 205.
- Steel `#36597d` → DESIGN 13/42/96 + Proof quote 205.
- Cream `#fff3b7` → DESIGN 9/13/40/58/62/87/97/369 + provenance 22/46/119 + Proof quote 201. Not Distinctive 36.
- Deep `#402060` → DESIGN 9/13/40/58/62/98/137/389 + provenance 22/119 + Proof quote 203.
- Lavender `#faeeff` → DESIGN 13/42/99/137/389 + Proof quote 205.
- Amber `#fdd484` → DESIGN 13/42/87/100/137/389 + provenance 46 + Proof quote 205.
- Sky `#d9e5f5` → DESIGN 13/42/101 + Proof quote 205.
- Violet `#777cdc` → DESIGN 42/87/102/265 + provenance 46 + Proof quote 183. Not atmosphere 13.
- Plum `#605070` → DESIGN 42/87/103/265/271 + provenance 46 + Proof quote 183. Not atmosphere 13.
- Ink-pure `#000000` → DESIGN 13/36/71/73/87/90/133/295 + provenance 46/159 + Proof quote 185.
- Soft `#181818` → DESIGN 36/87/91/366 + provenance 46/153/159 + Proof quote 187.
- Slate `#324158` → DESIGN 36/87/92/319/324 + provenance 46/118/159 + Proof quote 187.
- Muted `#bbbbbb` → DESIGN 93/221/228 + Proof quote 187.
- Canvas / hero / CTA `#ffffff` → DESIGN 13/36/39/58/67/87/104/107/240/266/320/365 + provenance 46/119/160 + Proof quotes 175/195/199.
- Surface `#f1f5f9` → DESIGN 105/137/222/227/336 + Proof quote 205.
- Google favicon URL → provenance 16/28 / Proof `:68` 219 only. DESIGN 203 is URL-free lookup / not-a-captured-first-party-mark / not-a-portable-mark-file.
- GitHub avatar URL → provenance 28 / Proof `:70` 223 only.
- Homepage `https://www.corca.ai/` → Scope 9/11 + Primary tasks 23/25 + provenance 14/24/52/59/66/118. DESIGN 26 is the Moonlight URL (prefix match only).
- Moonlight `https://www.corca.ai/en/moonlight` → Scope 11 + Primary tasks 23/26 + provenance 53/60/67/119.
- `https://corca.co.kr/` → Scope 11 + Named gaps 461 + provenance 61/68/82/157.
- `https://github.com/corca-ai` → Scope 11 + Named gaps 461 + provenance 62/69/82/157. Avatar PNG is provenance 28 / 223 only.
- Pretendard GitHub / OFL URL → none. Source had none; none invented.
- Tier 2 getdesign.md / refero → provenance 73–76 / Proof `:39` 215 / `:40` 217 only.
- `tokens.source: live-extract` → provenance 18/30 + Scope 9.
- `components_harvested: true` → provenance 20/30/147 + Capture 212/214.
- `verification_v2.schema` → absent in YAML; absence provenance 30/46/146. Sidecar adopted as `.verification.md` SHA provenance 32/145. None invented as schema 2.
- YAML spacing xs 8 / sm 15 / md 16 / base 24 / lg 48 / xl 64 → DESIGN 111,389.
- YAML rounded sm 10 / md 16 / lg 24 / pill 50 / full 9999 → DESIGN 115/117/122/125. Not Distinctive 36. 43 is observed 50px/999px, not the YAML scale.
- `type: button` → DESIGN 238/263/291 + provenance 150.
- `type: card` → DESIGN 318/334 + provenance 150.
- `type: tab` → DESIGN 363 + provenance 150.
- `type: badge` → DESIGN 348 + provenance 150.
- CTA padding `8px 15px` → DESIGN 43/111/243/268/297/389/401 + provenance 46/118/183/185/199 (E2a).
- Heights 60 / 51 / 38 / 78 → DESIGN 43/44/244/269/298/368/401.
- Breakpoints 640px / 1024px / 1440px → DESIGN 393,395–399.
- Durations 120ms / 220ms / 340ms → DESIGN 145–147 + provenance 133.
- Exact cubic-bezier three values → DESIGN 157/458 + provenance 137–139 (E2a). Section head 131 names the omission, not the curve strings.
- Proof fractional px `60.7114px` / `32.3794px` / `30.3557px` / `28.332px` / `46.5454px` / `24.75px` → provenance quotes 175/177/179/181/197/201 only. DESIGN 186/194–195 names the samples as Proof-only without quoting those px strings.
- Proof `300px` circular → provenance 207 only. DESIGN 117/125 names the Proof circular-radius sample without quoting `300px`.
- Source-body `9999px` → DESIGN 117/125. YAML `full` 9999 is DESIGN 115/117/125 (not 36).
- Compact HTML-comment rgb → provenance 118–119/121 only.
- Forbidden register → DESIGN 422 (not 418; 418 is a verbatim sample).
- B3 전문 → Foundations Motion DESIGN.md:161. Named gaps 463 is inventory form only (E2c).
- §13 fictional names → neither DESIGN.md nor provenance.md (D2).
- B3 유지 주장은 Foundations Motion 161에 다섯 종류 + official-documentation 절이 실재할 때만 적음 (E2c).

### Revision 2026-08-25 (F3 B2a·E2 audit)

F3 auditor grok-4.6 (fresh session). Adjacent complete B2a attached or expanded where third-class readings were unqualified, under-named, or remote through a table; over-wide Distinctive/atmosphere/Assets/Capture limiters retargeted to the follow-on. Dest maps grepped against the three files after those edits. Worker F1/F2 completeness is not restated as current-class (E2c). Worker SHA `79580b2d981a83e916ad9e2ef1be4c0c766c64e22224700244903d69c3676f4f` is not the current-file SHA. Post-F3 DESIGN SHA-256 `4483983caf1e1c85411820eadb24d653cfb9026beefbd0cc537aef09d8c160e2`. `--gate-only` PASS, problems []. Core `portable_core: true`. Not a catalog-adoption claim. *(superseded 2026-08-25 — stale SHA; actual current SHA는 이 파일 말미 wave17 ledger sync 항목 참조)*

## Revision 2026-08-25 (wave17 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v8. Source remainder: `docs/reviews/t2-1-wave17-2026-08-25-sol-full.md` §4 corca conditions 1–4. Worker grok-4.6. This revision does not claim F1/F2/F3 closed (E2c). Not a catalog-adoption claim.

1. Restored portable causal tails with adjacent complete B2a: young benchmark-winning research lab → credible and playful; optimistic multi-hue → not-grey; navy warmth → human; 15–17px → comfortable dense hangul.
2. Restored 2024 아기유니콘 as a Korean government-backed high-potential-startup designation in Scope 15 and provenance Narrative.
3. White Feature Card heading/body child tuples restored component-locally: Heading 32px display webfont / `#1a2352`; Body 16px Pretendard / `#324158`. §9 prompt wrapper stays deleted. Prior “§9-only 고유 관계 없음” is **SUPERSEDED**.
4. SHA / gate / Core / fresh F3 recorded after this body change. Prior F3 trim of optimistic-multi-hue is **SUPERSEDED** (that trim deleted a source relationship).


## Revision 2026-08-25 (wave17 ledger sync)

- audit-log 16·77(optimistic multi-hue trim 기록 — current DESIGN.md:13과 반대)과 38-42·89-100의 pre-resubmit 포인터·SHA에 superseded 표시. actual current DESIGN SHA `eed43b5b5143884bba35562216717631b9c67fd90a9c715795cf71019ccaf067`.
- 수행: opus5 (grok 잔액 소진으로 기계적 원장 동기화만 직접 수행 — 본문 무변경).
