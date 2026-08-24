# T2-1 웨이브 8 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{adobe,airbridge,alipay,amazingtalker}/`
- 선행 판정: `docs/reviews/t2-1-wave8-2026-08-24-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다.
- 재확인일: 2026-08-24 · 검증자: sol

## 건별 판정

### adobe — PASS (6/6)

1. **PASS — Category Tile tuple.** heading/body/text-link/border/shadow 결합이 component 문맥에 복원됐고 §9 원장과 맞는다(`DESIGN.md:395-410`; `provenance.md:119,147`; `migration-log.md:30,96,109`).
2. **PASS — PostScript / Firefly 관계.** page-description/physical-printability와 Firefly generative-AI 진화가 Scope 및 Narrative 원장에 복원됐다(`DESIGN.md:23,25`; `provenance.md:93,95`; `migration-log.md:19,97,110-111`).
3. **PASS — Glass / Promo / App switcher.** Glass는 card+interactive 및 역할 map, Promo는 badge, App switcher는 별도 interactive grid trigger와 5px/32px 결합으로 복원됐고 미해상 L/E/S만 생략됐다(`DESIGN.md:417-492`; `provenance.md:122-125,163,166`; `migration-log.md:98,112-114`; `audit-log.md:118`).
4. **PASS — unsupported negative 삭제.** product-UI, Adobe Clean redistribution/unavailability, first-party mark/file negative가 현재 본문에서 제거됐다. 허용된 Google favicon capture boundary와 live SVG `#eb1000` 긍정 사실만 남는다(`DESIGN.md:15,189-200,232`; `provenance.md:28,156`; `migration-log.md:99,117-118`).
5. **PASS — source count/source row/mission/원장.** six pages across five groups, YAML `verified`+footer URL source row, full mission의 Scope+Content+provenance 목적지가 현재 파일과 일치한다(`DESIGN.md:11,23,560`; `provenance.md:40,45,53-58,94`; `migration-log.md:16,100,103-120`; `audit-log.md:114-121`). 개정 전 문장은 후속 revision/current-class에서 명시적으로 비현재화됐다.
6. **PASS — 기계 검사/SHA.** 현재 파일에서 gate PASS/problems `[]`, Core exit 0/`portable_core: true`; SHA-256 `c2cd21a34eb38245d233144e5f4678bf02acf9600601501cf8bd06b1aae3691e`가 `migration-log.md:101`과 일치한다.

**adobe 판정: PASS.**

### airbridge — PASS (3/3)

1. **PASS — unsupported font negative 삭제.** Font evidence에는 live computed Pretendard Variable과 declared fallback만 남고 AB180 universal typography, Airbridge-exclusive family, Pretendard-upstream-as-brand-asset 주장은 제거됐다(`DESIGN.md:164-175`; `migration-log.md:78,84,90`).
2. **PASS — §3 원장 동기화.** provenance는 fallback-not-product-face 범위만 유지하고 migration/audit의 current-class가 삭제 후 상태를 가리킨다(`provenance.md:146`; `migration-log.md:20,78-79`; `audit-log.md:106-108`).
3. **PASS — 기계 검사/SHA.** 현재 파일에서 gate PASS/problems `[]`, Core exit 0/`portable_core: true`; SHA-256 `7f0caa9d59dd57e7c5515d80d75170407f0608120d83c1fab6e9b1e81b5ed17f`가 `migration-log.md:80`과 일치한다.

**airbridge 판정: PASS.**

### alipay — PASS (5/5)

1. **PASS — Scope ecosystem-expression 분류.** captured APIs/tools는 source-stated로 남고 ecosystem-expression 관계만 인접 완전 B2a로 분리됐다(`DESIGN.md:21`; `provenance.md:93,158`; `migration-log.md:19,93,101,105`; `audit-log.md:104`).
2. **PASS — Compact/Small 한정.** 두 질적 판단이 Distinctive 인접 완전 B2a와 derived inventory에 반영됐다(`DESIGN.md:42-46`; `provenance.md:157`; `migration-log.md:94,101,106`; `audit-log.md:105`).
3. **PASS — first-party-mark negative 삭제.** portable body와 Named gaps에서 해당 문장이 제거됐고 favicon literal은 provenance-only, Assets에는 URL-free capture boundary만 남는다(`DESIGN.md:165,350-363`; `provenance.md:15,26,141`; `migration-log.md:95,107,110`; `audit-log.md:106`).
4. **PASS — F2 line map.** packet date는 Scope 11+provenance 36/44이며 42는 conflicts다. Consumer payment copy는 Content 316으로 교정됐다(`migration-log.md:96,103-109`; `audit-log.md:107`).
5. **PASS — 기계 검사/SHA.** 현재 파일에서 gate PASS/problems `[]`, Core exit 0/`portable_core: true`; SHA-256 `f83d41bd12183c1077b6934289d41da8e0f2f71b81967fed32543391efd864ed`가 `migration-log.md:97`과 일치한다.

**alipay 판정: PASS.**

### amazingtalker — FAIL (4/5)

1. **PASS — §9 component tuple.** Course Card category head `24px Roboto 400 #363636`과 coral `14px Roboto 400` 결합이 component slot 및 §9 ledger에 복원됐다(`DESIGN.md:351-368,379-403`; `provenance.md:119`; `migration-log.md:53,65-66`).
2. **PASS — Course Card C4.** Course Card는 interactive listing/tap-target map을 가지며 Layout과 Named gaps도 현재 역할에 맞는다. 개정 전 omit-kind 문장은 current revision/audit에서 비현재화됐다(`DESIGN.md:250,351-377,481,548-557`; `provenance.md:139`; `migration-log.md:31,54,67`; `audit-log.md:103`).
3. **PASS — §11 premise.** personal/flexible/enjoyable 대 rigid/impersonal, vetted human tutors, visual-language warmth 관계가 인접 완전 B2a 아래 Scope와 derived ledger에 복원됐다(`DESIGN.md:23`; `provenance.md:142`; `migration-log.md:28,55,61,68`; `audit-log.md:103`).
4. **PASS — unsupported negative 삭제.** 현재 portable body에서 official/distributed/license/FontFaceSet/logo/microcopy negative는 제거됐고 source-stated no-custom-webfont와 Google favicon capture boundary만 남는다(`DESIGN.md:180-196,221,488-516,548-557`; `migration-log.md:56,69-71`; `audit-log.md:103`).
5. **FAIL — provenance/migration 원장 동기화가 남음.** 현재 Named gaps에는 first-party-mark row가 없고(`DESIGN.md:548-557`), 후단 Proof도 없다고 적는다(`provenance.md:128`). 그러나 active identity ledger는 여전히 “Named gaps names a first-party mark file…”이라고 반대로 기록하고(`provenance.md:23`), migration의 YAML identity source row도 같은 존재하지 않는 목적지를 유지한다(`migration-log.md:13`). 후단 revision/F2의 삭제 완료 주장(`migration-log.md:56,70-71`)과 정면 충돌하며 두 원 source row는 명시적으로 supersede되지 않았다. 이는 선행 조건 5의 provenance/migration/audit 실제 disposition/F2 동기화 미충족이다. 두 기계 검사와 새 SHA 자체는 통과했다.

**amazingtalker 판정: FAIL.**

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| adobe | PASS, problems 0 | exit 0, `portable_core: true` | `c2cd21a34eb38245d233144e5f4678bf02acf9600601501cf8bd06b1aae3691e` |
| airbridge | PASS, problems 0 | exit 0, `portable_core: true` | `7f0caa9d59dd57e7c5515d80d75170407f0608120d83c1fab6e9b1e81b5ed17f` |
| alipay | PASS, problems 0 | exit 0, `portable_core: true` | `f83d41bd12183c1077b6934289d41da8e0f2f71b81967fed32543391efd864ed` |
| amazingtalker | PASS, problems 0 | exit 0, `portable_core: true` | `b0c81624f62e981cbcc2de3ef69ca2a1be353be021cc9badba928c885d98cf98` |

## 남은 재제출 조건

### amazingtalker

1. 선행 조건 5에 따라 `provenance.md:23`과 `migration-log.md:13`의 존재하지 않는 first-party-mark Named-gaps 목적지를 삭제하거나 명시적으로 supersede하고, 현재 Named gaps·Proof·revision/F2와 맞춘다. 새 기준이나 새 F3는 요구하지 않는다.

**전체: FAIL — adobe PASS / airbridge PASS / alipay PASS / amazingtalker FAIL (선행 재제출 조건 18/19).**
