# T2-1 웨이브 2 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{coupang,openai}/`
- 선행 판정: `docs/reviews/t2-1-wave2-2026-08-23-sol-sample.md`
- 개정 식별자: migration log의 `Revision 2026-08-23 (wave2 sol resubmit)`
- 일시: 2026-08-23
- 범위: 선행 sol 판정의 건별 재제출 조건이 개정본에 반영됐는지만 확인했다. 새 기준은 추가하지 않았다.
- 전제: 사용자가 확인한 12종 기계 게이트 재통과를 그대로 수용했다.

## 판정 요약

| 대상 | 판정 | 재제출 조건 |
|---|---|---:|
| Coupang | **PASS** | 5/5 PASS |
| OpenAI | **PASS** | 8/8 PASS |

## 1. Coupang — PASS

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | Times의 unresolved 증거 종류 복원 및 non-promotion 유지 | **PASS** | Font evidence가 Times를 `Unresolved claim`과 `captured but uncorroborated unresolved claim`으로 복원하고 비승격을 유지한다(`DESIGN.md` 98–105행). 본 로그와 revision도 같은 disposition을 기록한다(`migration-log.md` 19, 44행). |
| 2 | Scope의 무한정 인과 해석 삭제 또는 인접 B2a 완전 한정 | **PASS** | Scope에는 careers/Newsroom의 사실과 corporate/editorial ≠ token-source 경계만 남고 문제의 “Those ideas explain the dense, utilitarian register” 인과 해석은 삭제됐다(`DESIGN.md` 9–13행). 로그도 삭제를 명시한다(`migration-log.md` 17, 45행). |
| 3 | §11의 실제 세 목적지를 로그에 기록 | **PASS** | §11 disposition이 `Experience Scope + Typography & Assets + provenance` 세 목적지와 각각의 내용을 모두 기록한다(`migration-log.md` 32, 46행). Portable 본문에도 Scope와 Coupang Sans Display/Text·speed/legibility 맥락이 남아 있다(`DESIGN.md` 11, 101–105, 127–131행). |
| 4 | §13 mixed disposition과 Primary tasks의 별도 근거를 정확히 기록 | **PASS** | 로그가 no-persona 경계 → Audience, 두 미해상 값 → 최소 필드 생략, wrapper → provenance omission ledger로 분기하고, Primary tasks를 §4 captured controls에 매핑한다(`migration-log.md` 34, 47행). Audience와 wrapper 원장도 실제로 일치한다(`DESIGN.md` 23–25행; `provenance.md` 129, 132–146행). |
| 5 | 12종 기계 게이트 재통과 후 동일 sol 의미 레인 재제출 | **PASS** | 기계 게이트 재통과는 사용자 확인을 전제로 수용했고, 이 문서가 동일 sol 의미 레인의 재확인이다. |

**Coupang 판정: PASS — 선행 재제출 조건 5/5가 개정본에 반영됐다.**

## 2. OpenAI — PASS

| # | 선행 재제출 조건 | 판정 | 개정본 확인 |
|---:|---|---|---|
| 1 | Neutral `Border: none` 복원 및 badge 세 variant의 컴포넌트별 `Type: badge` 명시 | **PASS** | Neutral에 `Border: none`이 있고, Neutral·Teal·Amber 각각에 `Type: badge`가 명시됐다(`DESIGN.md` 493–525행). 로그의 badge 보존 주장과 revision도 이에 맞는다(`migration-log.md` 15, 22, 44–45행). |
| 2 | OpenAI Sans history를 third-party-corroborated evidence class로 복원 | **PASS** | Scope와 Font evidence가 이력을 third-party WebSearch corroboration / `Third-party-corroborated brand history`로 한정하고 `Official product-use`가 아니라고 명시한다(`DESIGN.md` 13, 177–185행). provenance와 로그도 같은 권위 경계를 기록한다(`provenance.md` 95행; `migration-log.md` 19, 31, 46행). |
| 3 | Principles 밖 retained editorial block마다 인접 B2a 완전 한정 | **PASS** | Scope, Elevation, type-character, Layout whitespace, Voice/tone의 각 retained block 바로 앞에 `derived editorial implementation inference` 및 `not OpenAI-authored or a separately published UI specification` 한정이 있다(`DESIGN.md` 11, 130, 194, 626, 644행). Principles의 별도 여덟 항목 한정도 독립적으로 유지된다(38행). |
| 4 | §14의 rate-limit / Selected 의미 제약 복원 | **PASS** | Rate-limit에 “Honest and specific, not apologetic boilerplate”, Selected에 “a quiet highlight, not a colored bar”가 복원됐다(`DESIGN.md` 234, 238행). 로그도 두 제약을 그대로 기록한다(`migration-log.md` 34, 48행). |
| 5 | Dialog의 `Type: dialog`·검증값만 유지하고 interactive kind/map 생략 | **PASS** | Dialog는 `Type: dialog`와 geometry만 유지하며 `Kind: interactive`를 확정하지 않고 state-applicability map도 두지 않는다(`DESIGN.md` 589–599행). 공통 capture record와 로그도 같은 C4 disposition이다(242행; `migration-log.md` 21, 49행). |
| 6 | Favicon과 §13의 실제 portable/provenance/delete 목적지를 로그와 일치 | **PASS** | Portable Assets에는 favicon 문장이 없고, favicon은 provenance identity-only로 기록된다(`DESIGN.md` 214–216행; `provenance.md` 15, 20, 93행; `migration-log.md` 13, 50행). §13은 exclusion boundary → Audience, fictional biography fields → 삭제, sidecar 없음, Primary tasks → composer/CTA/docs 근거로 mixed disposition을 기록한다(`DESIGN.md` 16–26행; `provenance.md` 97행; `migration-log.md` 33, 51행). |
| 7 | easing 이름·use와 menu/popover `ease-out` association 복원, curve는 생략 가능 | **PASS** | Menu/popover와 `ease-out` 결합을 복원했고, `ease-out`·`ease-in`·`ease-standard`의 이름과 용도를 source-stated/uncomputed로 보존한다. 세 cubic-bezier curve만 생략한다(`DESIGN.md` 156–171행; `provenance.md` 98행; `migration-log.md` 35, 52행). |
| 8 | badge·§14·§15 로그 주장을 실제 본문과 맞추고 gate 재통과 후 동일 sol 재제출 | **PASS** | Badge 보존 주장은 각 variant 본문과, §14 두 의미 제약 주장은 state 표와, §15의 “curve만 삭제” 주장은 easing 이름/use 본문 및 provenance 원장과 각각 일치한다(`migration-log.md` 15, 34–35, 44–52행). 기계 게이트 재통과는 사용자 확인을 전제로 수용했고, 이 문서가 동일 sol 의미 레인의 재확인이다. |

**OpenAI 판정: PASS — 선행 재제출 조건 8/8이 개정본에 반영됐다.**

**전체 판정: PASS — Coupang PASS / OpenAI PASS (2/2, 재제출 조건 13/13 반영).**
