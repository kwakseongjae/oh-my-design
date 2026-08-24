# T2-1 웨이브 4 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{netflix,github,spotify,discord,vercel}/`
- 선행 판정: Netflix·GitHub는 `docs/reviews/t2-1-wave4-2026-08-23-sol-sample.md`, Spotify·Discord·Vercel은 `docs/reviews/t2-1-wave4-2026-08-23-sol-full.md`
- 개정 식별자: migration log의 `Revision 2026-08-23 (wave4 sol resubmit)` / `Revision 2026-08-23 (wave4 full resubmit)`
- 일시: 2026-08-23
- 범위: 두 선행 sol 판정의 건별 재제출 조건이 개정본에 반영됐는지만 확인했다. 새 기준은 추가하지 않았다.
- 검증: 다섯 migration log의 v6 F1·F2 수행 기록을 확인했고, `migrate-reference.mjs --gate-only`를 직접 재실행해 다섯 건 모두 `PASS`, problems 0을 확인했다.

## 판정 요약

| 대상 | 판정 | 재제출 조건 |
|---|---|---:|
| Netflix | **PASS** | 5/5 PASS |
| GitHub | **PASS** | 6/6 PASS |
| Spotify | **PASS** | 5/5 PASS |
| Discord | **PASS** | 5/5 PASS |
| Vercel | **PASS** | 5/5 PASS |

## 1. Netflix — PASS

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | Grey 500 `#808080`의 `secondary CTA label` 역할을 복원하고 다른 역할·필드와 비합침 | **PASS** | Grey 500 scale roles에 Caption/metadata, `"secondary" CTA label`, inactive nav가 함께 복원됐고 Auth Field border와 More Info `#FFFFFF`를 명시적으로 분리했다(`DESIGN.md` 107, 308, 359행; `migration-log.md` 15, 17, 43행). |
| 2 | Expanded Preview의 generic `Hover/focus`를 observed state로 복원하고 §9-only nav composition도 복원 | **PASS** | Resting tile과 Expanded Preview에 generic `Focus`를 observed state로 두되 `focus-visible` treatment로 승격하지 않았고, Red “N” left / links center-left / search+avatar right 조합도 복원했다(`DESIGN.md` 421, 427, 440, 442, 488행; `migration-log.md` 20, 28, 44–45행). |
| 3 | Motion·Avoid 포함 portable 전체 F1 재스캔 및 retained purpose/causal 문장의 인접 완전 B2a | **PASS** | Avoid 인과 판단, DVD-envelope·Canvas 해석, `peek to promise more`, `so the artwork lands first`에 각각 인접 완전 한정이 있다(`DESIGN.md` 15, 67–75, 90, 161, 163행). 전편 F1 기록도 해당 블록을 열거한다(`migration-log.md` 51행). |
| 4 | §2·§4·§9·§14 및 F1/F2 로그를 실제 field/role 문맥과 일치시킴 | **PASS** | §2 역할 결합, §4 generic Focus와 badge kind, §9 고유 조각 2건, §14 badge `Kind: non-interactive`/map 생략이 실제 본문과 일치하며 과장 주장을 철회했다(`migration-log.md` 17, 20, 28, 33, 47, 51–52행). |
| 5 | 기계 게이트 재통과 후 동일 sol 의미 레인 재제출 | **PASS** | `node test-v2/tools/migrate-reference.mjs --brand netflix --gate-only`를 재실행해 `PASS`, problems 0을 확인했고, 이 문서가 동일 sol 의미 레인의 재확인이다. |

**Netflix 판정: PASS — 선행 재제출 조건 5/5가 개정본에 반영됐다.**

## 2. GitHub — PASS

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | YAML exact component field와 feedback anatomy 복원 후 전체 field 결합 재대조 | **PASS** | Label exact border/height와 body 관측을 분리하고, Action List exact padding, Banner anatomy, Inline Message leading icon을 복원했다(`DESIGN.md` 653, 734–742, 844, 869행; `provenance.md` 36행; `migration-log.md` 16, 26, 43행). |
| 2 | 직접 관측 homepage 두 string과 derived voice/copy guidance 분리 및 인접 완전 B2a | **PASS** | Observed 블록은 두 WebFetch string만 포함하고, copy-pattern 표·금지문·voice reading은 바로 다음 완전 B2a 한정 아래 있다(`DESIGN.md` 956–975행; `provenance.md` 68행; `migration-log.md` 29, 44행). |
| 3 | Merge-whimsy와 Blankslate Octocat 판단 한정 후 전체 F1 재수행 | **PASS** | 두 판단 모두 문장 인접 완전 B2a를 갖고, full reread 기록이 이를 포함한다(`DESIGN.md` 170, 909행; `migration-log.md` 51행). |
| 4 | Select error와 Copy Icon Button success를 역할 의미로 재판정 | **PASS** | Select error는 native-backed form field 역할에 따라 `applicable`이며 treatment만 생략했다. Copy use는 captured checkmark 약 1.5초를 해당 component anatomy와 success에 연결했다(`DESIGN.md` 390, 400, 454–476행; `migration-log.md` 33, 46행). |
| 5 | YAML/§8/§10/HTML comment 및 F1/F2 로그를 실제 body·source-row와 일치시킴 | **PASS** | exact field/anatomy, Content evidence class, WebFetch `2026-06-06`의 Content+provenance 이중 목적지를 실제 source-row에 기록했고 최종 F1/F2도 field/role 문맥으로 대조했다(`DESIGN.md` 956행; `provenance.md` 34, 68행; `migration-log.md` 16, 26, 29, 35, 47, 51–52행). |
| 6 | 기계 게이트 재통과 후 동일 sol 의미 레인 재제출 | **PASS** | `node test-v2/tools/migrate-reference.mjs --brand github --gate-only`를 재실행해 `PASS`, problems 0을 확인했고, 이 문서가 동일 sol 의미 레인의 재확인이다. |

**GitHub 판정: PASS — 선행 재제출 조건 6/6이 개정본에 반영됐다.**

## 3. Spotify — PASS

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | Hollow `Type: button`과 source에 없는 surface kind 제거 또는 독립 증거 결합 | **PASS** | Hollow는 CTA 역할과 captured Focus로 interactive kind만 유지하고 primitive `Type`은 생략했다. Surface ledger도 source의 `id`/`url`/`inspected`만 보존하고 surface `kind`를 발명하지 않는다(`DESIGN.md` 266–279행; `provenance.md` 40–48, 124–125행; `migration-log.md` 44행). |
| 2 | 세 numbered stem 전체와 Scope·Avoid·Foundations·Layout·Content를 다시 F1 스캔하고 retained 해석에 완전 B2a | **PASS** | 세 stem·UI implication·capture-bound application 전체가 하나의 인접 완전 한정 아래 있고, 선행 판정의 각 hotspot에도 문장 인접 한정이 있다(`DESIGN.md` 13, 15, 40–54, 58–64, 87, 96, 100, 296–305행; `migration-log.md` 45, 51행). |
| 3 | Outlined/Circular exact role에 따라 loading/error/success applicability 재판정 | **PASS** | 정확한 selector label/behavior가 unresolved임을 최소 경계에 명시하고 세 applicability field를 닫거나 발명하지 않고 생략했다. Circular를 partner like-state와 임의 결합하지 않는다(`DESIGN.md` 154, 184–208, 212–234행; `provenance.md` 129–131행; `migration-log.md` 46행). |
| 4 | 모든 source-row와 portable/provenance/Governance 목적지를 log에 기록하고 F1/F2 문구 정정 | **PASS** | §2·§3·§5·§6·§10·§15의 Governance 포함 목적지, §14 like copy의 Content 목적지, §15 Avoid 목적지, URL의 실제 YAML-sources/footer 원천을 기록했다. 최종 F1/F2도 이를 grep 대조한다(`migration-log.md` 16, 20–21, 25–26, 31, 35–36, 47, 49–52행; `DESIGN.md` 345–361행). |
| 5 | 기계 게이트 재통과 후 동일 sol 의미 레인 재제출 | **PASS** | `node test-v2/tools/migrate-reference.mjs --brand spotify --gate-only`를 재실행해 `PASS`, problems 0을 확인했고, 이 문서가 동일 sol 의미 레인의 재확인이다. |

**Spotify 판정: PASS — 선행 재제출 조건 5/5가 개정본에 반영됐다.**

## 4. Discord — PASS

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | 직접 검증된 두 voice string 보존 및 나머지 examples의 evidence class 분리·인접 한정 | **PASS** | 두 WebFetch string을 Content와 provenance에 모두 보존했고, 나머지 examples/table은 derived reconstruction으로 분리해 인접 완전 B2a 아래 두었다(`DESIGN.md` 714–734행; `provenance.md` 85–90, 108–109행; `migration-log.md` 31, 45행). |
| 2 | Avoid·Motion·States·Semantic/Components 포함 전체 F1 재수행 | **PASS** | Avoid, Semantic workhorse, Motion superlatives, §14 characterizations, post-rebrand component reading, Message Box superlative에 각각 인접 완전 한정이 있다(`DESIGN.md` 72, 92, 198–204, 271–286, 290, 493행). Full F1 기록도 이 범위를 열거한다(`migration-log.md` 52행). |
| 3 | official brand/third-party와 marketing/in-app claim 분리, 발명 mapping·toast auto-dismiss 제거 | **PASS** | `discord.com/branding`을 official-brand로, 세 corroborator를 third-party로 분리했다. Marketing URL을 in-app token surface에 매핑하지 않고 per-claim mapping을 만들지 않았으며 Toast auto-dismiss도 제거했다(`DESIGN.md` 227–228, 647–657행; `provenance.md` 47–79, 92–94, 110–111행; `migration-log.md` 47행). |
| 4 | Badge/Toast kind, §14, HTML comment 목적지를 log와 맞추고 F1/F2 과장 정정 | **PASS** | Badge/Toast `Kind: non-interactive`와 map 생략을 정확히 기록하고, §14-only hex의 Foundations+Components 이중 목적지와 HTML comment의 실제 portable 목적지를 기록했다(`migration-log.md` 23, 35, 37, 48, 50–53행; `DESIGN.md` 147, 153–154, 271–286, 550–566, 647–657행). |
| 5 | 기계 게이트 재통과 후 동일 sol 의미 레인 재제출 | **PASS** | `node test-v2/tools/migrate-reference.mjs --brand discord --gate-only`를 재실행해 `PASS`, problems 0을 확인했고, 이 문서가 동일 sol 의미 레인의 재확인이다. |

**Discord 판정: PASS — 선행 재제출 조건 5/5가 개정본에 반영됐다.**

## 5. Vercel — PASS

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | Font evidence `Unresolved claim` 복원 및 footer `(omd:migrate)` metadata 보존 | **PASS** | Font evidence가 captured-but-uncorroborated `Unresolved claim`으로 복원됐고, footer 표지는 provenance Freshness와 log에 보존됐다(`DESIGN.md` 118행; `provenance.md` 35, 41, 121–122행; `migration-log.md` 22, 39, 47행). |
| 2 | Distinctive/Avoid/Elevation/card/responsive 포함 전체 F1 재수행 및 인접 완전 B2a | **PASS** | 선행 판정의 모든 judgment block에 문장 인접 완전 한정이 있다(`DESIGN.md` 34–41, 62–69, 100, 300, 305, 307, 314행). Full F1 기록도 같은 범위를 대조한다(`migration-log.md` 54행). |
| 3 | Secondary action·icon button·compact input의 state를 exact role evidence로 재판정 | **PASS** | 세 specimen은 exact action/validation identity가 unresolved이므로 loading/error/success를 primitive/specimen 이름에서 닫지 않고 해당 field boundary에서 생략했다(`DESIGN.md` 158, 211, 234, 260행; `migration-log.md` 37, 49, 55행). |
| 4 | 각 source row의 Governance 포함 모든 목적지를 log에 기록하고 F1/F2 문구를 grep 뒤 정정 | **PASS** | §2·§3·§4·§6·§7·§8·§9·§10·§13·§14의 Governance Named gaps 포함 disposition을 기록했고 실제 Named gaps와 일치한다(`migration-log.md` 21–39, 50, 52–55행; `DESIGN.md` 346–362행). |
| 5 | 기계 게이트 재통과 후 동일 sol 의미 레인 재제출 | **PASS** | `node test-v2/tools/migrate-reference.mjs --brand vercel --gate-only`를 재실행해 `PASS`, problems 0을 확인했고, 이 문서가 동일 sol 의미 레인의 재확인이다. |

**Vercel 판정: PASS — 선행 재제출 조건 5/5가 개정본에 반영됐다.**

**전체 판정: PASS — Netflix PASS / GitHub PASS / Spotify PASS / Discord PASS / Vercel PASS (5/5, 재제출 조건 26/26 반영).**
