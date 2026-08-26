# T2-1 웨이브 12 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{bmw,brandi,bunjang,buzzvil,cafe24}/`
- 선행 판정: `docs/reviews/t2-1-wave12-2026-08-24-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다.
- 재확인일: 2026-08-24 · 검증자: sol

## 건별 판정

### bmw — PASS (5/5)

1. **PASS — `verification_v2.schema: 2`.** provenance Identity/Freshness와 first-class 문장에 값이 복원됐다(`provenance.md:17,35,42`; `migration-log.md:122-123`).
2. **PASS — §13 고유 관계.** 세 source-backed stakeholder group의 서로 다른 관계가 Audience에 복원됐다(`DESIGN.md:28,30-32`; `provenance.md:129`).
3. **PASS — Font evidence class.** 근거 없던 `Official product-use` 행은 삭제됐고 source의 다섯 class만 남았다(`DESIGN.md:121,125-129`; narrative 경계 `provenance.md:76-85`).
4. **PASS — Named gaps/source-row 목적지.** 원본 `:104/:160/:200/:242/:114/:212/:84`의 본문 및 Named gaps 목적지가 현재 행에 맞게 기록됐다(`DESIGN.md:324-333`; `migration-log.md:126-132`). audit의 이전 current-class와 구 SHA도 supersede됐다(`audit-log.md:103-105`).
5. **PASS — 검사/SHA.** gate PASS/problems `[]`, Core exit 0/`portable_core: true`; 현재 SHA `77492c4dae561d58c335a606c6ebd2e48e6375961544302b3ea511c17e5a8dec`가 원장과 일치한다(`migration-log.md:156-160`).

**bmw 판정: PASS.**

### brandi — PASS (3/3)

1. **PASS — C4 field omission.** listbox의 `Type: omitted`/`Kind: omitted`과 badge의 `Kind: omitted`이 삭제됐다. Badge `Type: badge`만 유지되고 kind/map 미확정은 prose에만 있다(`DESIGN.md:175,248-265,274,335`).
2. **PASS — provenance 색상 및 Named gaps 목적지.** 색상 provenance hit `provenance.md:39,132,149`와 §14/responsive/voice/persona/font/C4의 Named gaps 목적지가 source-row/F2에 반영됐다(`migration-log.md:73-77,85-106`).
3. **PASS — audit/검사/SHA.** 이전 F2/current-SHA 주장이 supersede됐고(`audit-log.md:113-125`), gate PASS/problems `[]`, Core exit 0/`portable_core: true`; 현재 SHA `6debdbbc8cd32af5ea9121a4f20beabfe74111a3a41873e40fefdbfec5dcf32f`가 원장과 일치한다(`migration-log.md:68,109`).

**brandi 판정: PASS.**

### bunjang — PASS (4/4)

1. **PASS — button family cardinality.** `three variants × four sizes`, `_variant-{normal|primary|…}` × `_size-{XS|M|XL}` × `_full` 관계가 Capture/Primary/Secondary에 복원됐고 미상 세 번째 variant 이름은 발명하지 않았다(`DESIGN.md:207,229,256`; `provenance.md:111`).
2. **PASS — Font evidence 축소.** current table은 Pretendard Variable의 live computed 211/211, `sans-serif` fallback, Bunjang CDN self-host만 남긴다(`DESIGN.md:160-168`). `Official distributed`, 비독점 단정, exact `.woff2` coverage/Named gap 등 선행 삭제 대상은 portable에서 0건이다.
3. **PASS — proof/portable 경계.** `--remote-allow-origins` 원인 detail은 provenance에 복원됐고(`provenance.md:58`), 개별 lookup host/status는 provenance ledger에만 있다(`provenance.md:70-82`). portable Scope는 standalone 결론과 authority boundary만 남긴다(`DESIGN.md:17`).
4. **PASS — 원장/검사/SHA.** current-class와 E2/E2a map이 동기화됐고(`migration-log.md:55-96`; `audit-log.md:118-120`), gate PASS/problems `[]`, Core exit 0/`portable_core: true`; 현재 SHA `1ad844e1e575ca33779d1e0644f05cc5584a9633aaae8f1cf338c0819c41f089`가 일치한다.

**bunjang 판정: PASS.**

### buzzvil — PASS (3/3)

1. **PASS — 세 segment literal 제거.** 선행 판정의 세 literal은 `DESIGN.md`, `provenance.md`, `migration-log.md`, `audit-log.md` 전체에서 0건이다(`migration-log.md:87`).
2. **PASS — generic deletion only.** `fictional archetype material deleted; not re-hosted`라는 generic disposition만 남고 segment 이름은 재수록되지 않았다(`DESIGN.md:38`; `provenance.md:123-125`; `migration-log.md:79`; `audit-log.md:104`).
3. **PASS — F2/current-class/검사/SHA.** 이전 re-hosting과 구 SHA가 supersede됐고, gate PASS/problems `[]`, Core exit 0/`portable_core: true`; 현재 SHA `7315015474e081c4c7ff79202e847b4c133a7e87fc3d6214832cc1380aa1f98c`가 원장과 일치한다(`migration-log.md:73-92`).

**buzzvil 판정: PASS.**

### cafe24 — FAIL (7/8)

1. **PASS — canonical Proof.** canonical은 `web/references/cafe24/.verification.md`, derived mirror는 `design-md/cafe24/.verification.md`로 정확히 구분됐고 두 SHA는 `5812cc95e16da7f3a4afd1acf9948e0313a2beef422ede165186cc1a7125d606`으로 같다(`provenance.md:62,71-73,172`). 이전 false-absence는 supersede됐다.
2. **PASS — Circular Icon Button primitive/kind/map 본문.** `Kind: interactive`, `Type: button`, 역할 기반 applicability map이 복원됐고 미관측 visual treatment는 발명하지 않았다(`DESIGN.md:436-458`).
3. **PASS — Persona Card task.** `Open`은 비상호작용 결과인 `Scan the captured hero audience-segment entry cards`로 축소됐고 card의 미확정 kind/map과 모순하지 않는다(`DESIGN.md:25-29,363-376`).
4. **PASS — §9 local recipes.** White Hero, Dark Feature Band, Login White Card, Step Section의 네 parent-child tuple이 local recipe로 복원됐고 전역 token으로 승격되지 않았다(`DESIGN.md:460-506`).
5. **PASS — Typography Notes 및 §11/§15 관계.** body-table Notes(`DESIGN.md:213-223`), Naver stake/commerce partnership(`:17`), energetic-not-bureaucratic(`:19`), functional-and-friendly/dependability-not-gimmickry(`:173-180`)가 복원되고 편집 관계에는 인접 완전 B2a가 있다.
6. **PASS — Font class/history.** current Font table은 live computed surface-use와 capture boundary만 남긴다(`DESIGN.md:188-203`). Newsroom 철학의 Font `Official product-use`, live Pretendard/Noto의 `Declared-only`, `Official history` 승격은 current class가 아니다.
7. **PASS — App Blue/4px 분리.** `#3971ff`는 submit fill, input fill은 `#ffffff`; 4px만 submit/input 공통 geometry다(`DESIGN.md:13,15,38,41-42,281-305,378-403,485-495`).
8. **FAIL — affected current source-row/F2 동기화.** 실제 Circular 상태표는 `DESIGN.md:451-458`, loading/error/success는 `:456-458`인데 current provenance와 source-row/F2는 `436-456`, `451-456`, 또는 `454-456`으로 잘못 가리킨다(`provenance.md:143,169`; `migration-log.md:22,28,33,74`). 또한 current F2는 Login White Card의 4px tuple을 `490/495`로 적지만 `:490`은 `Anatomy: surface`이고 실제 tuple은 `:492`, 보강 문장은 `:495`다(`migration-log.md:65`). 두 기계 검사와 SHA는 맞지만 선행 조건 8의 원장/source-row/F2 동기화는 닫히지 않았다.

**cafe24 판정: FAIL.**

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| bmw | PASS, problems `[]` | exit 0, `portable_core: true` | `77492c4dae561d58c335a606c6ebd2e48e6375961544302b3ea511c17e5a8dec` |
| brandi | PASS, problems `[]` | exit 0, `portable_core: true` | `6debdbbc8cd32af5ea9121a4f20beabfe74111a3a41873e40fefdbfec5dcf32f` |
| bunjang | PASS, problems `[]` | exit 0, `portable_core: true` | `1ad844e1e575ca33779d1e0644f05cc5584a9633aaae8f1cf338c0819c41f089` |
| buzzvil | PASS, problems `[]` | exit 0, `portable_core: true` | `7315015474e081c4c7ff79202e847b4c133a7e87fc3d6214832cc1380aa1f98c` |
| cafe24 | PASS, problems `[]` | exit 0, `portable_core: true` | `b050dd6577bd01f79c0ca97d0298e8c5e0fc6b8575e8ffc610bc3c52c37e9d69` |

## 남은 재제출 조건

- **cafe24:** Circular Icon Button의 current source-row/provenance/F2 목적지를 실제 `DESIGN.md:436-458`, 상태표 `:451-458`, L/E/S `:456-458`에 맞추고, Login White Card 4px tuple 목적지를 `:492,495`로 바로잡는다. 본문 조건 1-7은 다시 열지 않으며 새 F3는 요구하지 않는다.

**전체: FAIL — bmw PASS / brandi PASS / bunjang PASS / buzzvil PASS / cafe24 FAIL (선행 재제출 조건 22/23, 새 기준·새 F3 없음).**
