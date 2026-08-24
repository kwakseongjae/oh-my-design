# T2-1 웨이브 6 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{104,11st,17live,3o3,42dot}/`
- 선행 판정: `docs/reviews/t2-1-wave6-2026-08-24-sol-full.md`의 건별 재제출 조건
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고, 새 F3 실행·증거를 요구하지 않았다.
- 재확인일: 2026-08-24 · 검증자: sol

## 건별 판정

| 대상 | 판정 | 선행 조건 | 목록-only 재확인 |
|---|---|---:|---|
| 104 | **PASS** | 5/5 | known selector와 미해상 label/destination/request/outcome을 분리했다(`DESIGN.md:180,197,207,220,230,378`; `provenance.md:142`). 기존 Scope 합성은 first-party facts로 재작성했고 4색 hierarchy 판단은 인접 완전 B2a·derived/F1 원장과 맞는다(`DESIGN.md:15,39`; `migration-log.md:42,92`). §10은 sample text → Content / citation URL·date → provenance의 mixed disposition이다(`migration-log.md:28,86,94`). favicon literal URL은 provenance-only, URL-free boundary는 Assets+Named gaps로 분리됐다(`provenance.md:22,149`; `migration-log.md:49,87`). 두 기계 검사도 통과했다. |
| 11st | **FAIL** | 5/6 | body/list/button/dialog use 복원(`DESIGN.md:140`), Principles 전체 B2a와 provenance/F1(`DESIGN.md:45`; `provenance.md:148`; `migration-log.md:39,50,58`), Billboard L/E/S 생략(`DESIGN.md:222`), copy negative 최소 경계(`DESIGN.md:268–270,311`), §9 mixed·footer dual(`migration-log.md:21,28,53,60`)과 두 기계 검사는 통과했다. 그러나 선행 조건 2가 명시한 audit 기록 동기화가 남았다. `audit-log.md:13`은 여전히 Principles의 *UI implication* notes만 derived로 기록하며, `audit-log.md:76`도 세 Principles 전체의 class를 바로잡거나 기존 분류를 supersede하지 않는다. |
| 17live | **PASS** | 6/6 | §11 고유 facts/relations가 권위 한정 아래 Scope와 provenance에 복원됐다(`DESIGN.md:15`; `provenance.md:110`). easing 표와 representative pixels는 각각 인접 완전 B2a 및 F1 원장과 맞는다(`DESIGN.md:182,259`; `migration-log.md:43,53,61`). Follow success, Gift error/success는 적용되고 미근거 Follow·Secondary·Chat 필드는 생략됐다(`DESIGN.md:304–312,330–337,350–358,398–407`). LIVE/Rank/Avatar Kind와 map은 생략됐다(`DESIGN.md:263,433,445,455`). 문제의 font/license/native negatives는 제거됐고 허용된 inferred-stack/no-custom-face/live-inspect 경계만 남았다(`DESIGN.md:198–215,563–573`). 두 기계 검사도 통과했다. |
| 3o3 | **PASS** | 5/5 | 네 negative claim은 Font evidence/Named gaps에서 제거됐고(`DESIGN.md:186–204,536–545`), logo row는 favicon identity+Assets dual과 no-generated-logo-gap으로 교정됐다(`migration-log.md:13,47–48`). product-origin/problem thesis가 인접 완전 B2a 아래 복원됐다(`DESIGN.md:19`; `provenance.md:143`). `158-86-00171`은 HTML evidence-comment source row의 Compliance Footnote+provenance dual이며 §11 오귀속이 제거됐다(`DESIGN.md:443`; `migration-log.md:29,34,50`). 두 기계 검사도 통과했다. |
| 42dot | **FAIL** | 4/7 | homepage/blog `#786efa` ×16과 AstaSans live/Noto declared-only 분리(`DESIGN.md:90,172–173`; `provenance.md:98–99,117`), font/license negatives 철회, Nav Item L/E/S 생략(`DESIGN.md:307`), 두 기계 검사는 통과했다. 그러나 조건 3·5·6이 남았다. viewport 판정은 본문에서 제거됐지만 기존 판정이 직접 지목한 audit 원장에는 cross-viewport/newly-measured-mobile-pass 문구가 superseded 표시 없이 남는다(`audit-log.md:35,60,77`). 또한 source-row별로 §6 shadow(`migration-log.md:28` ↔ `provenance.md:117,142`), §2/§9 transparent(`migration-log.md:23,32` ↔ `provenance.md:117,144`), §14 warm error tone(`migration-log.md:37,45` ↔ `provenance.md:151`)의 provenance 목적지가 빠졌다. 요약 개정표 `migration-log.md:57`은 원 source rows를 교정하지 않으며, 그 상태에서 `migration-log.md:65`의 F2/E2c 준수 주장은 실제 disposition보다 강하다. |

## 남은 재제출 조건

### 11st

1. 선행 조건 2에 따라 기존 `audit-log.md`의 Principles 분류를 세 numbered items 전체(stems + 조합 + UI implications)의 derived class와 맞추거나, 후속 correction으로 기존 좁은 분류를 명시적으로 supersede한다. 새 F3 실행·증거는 요구하지 않는다.

### 42dot

1. 선행 조건 3에 따라 기존 `audit-log.md:35,60,77`의 unsupported cross-viewport / newly measured mobile-pass 판정을 제거하거나 후속 correction으로 명시적으로 supersede한다. 원본 responsive rows와 측정값은 유지한다.
2. 선행 조건 5에 따라 §6 shadow, §2/§9 transparent, §14 warm-error-tone의 각 원 source row에 provenance 목적지를 직접 기록하고 F2를 동기화한다.
3. 선행 조건 6에 따라 위 원장과 일치하도록 F2/E2c 준수 주장을 낮추거나 다시 맞춘다.
4. 개정 뒤 두 기계 검사를 다시 통과시켜 같은 sol에 위 기존 조건만 재제출한다. 새 F3는 요구하지 않는다.

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| 104 | PASS, problems 0 | exit 0, `portable_core: true` | `1e840b06359cbb8f1b74a2fa51b30ddea813083b4091eb633e537136d8ff5e04` |
| 11st | PASS, problems 0 | exit 0, `portable_core: true` | `334be83845473498bcab12a193a4db1484f5ca29736a06718b7f42fabf0e460e` |
| 17live | PASS, problems 0 | exit 0, `portable_core: true` | `03e7b4ca820ea37e90418d0798ed3af1bc5625ddaf7e8ab675d41ef3b197102a` |
| 3o3 | PASS, problems 0 | exit 0, `portable_core: true` | `e950dc178f85cf019c65a0d903e20b07bf4bdf636d0bc04b017d991f9f461a23` |
| 42dot | PASS, problems 0 | exit 0, `portable_core: true` | `a043a85e11dbc8b1e950853ae4fc1deccd2da573fcea89ddc9bbd33af548a9c6` |

**전체: FAIL — 104 PASS / 11st FAIL / 17live PASS / 3o3 PASS / 42dot FAIL (선행 재제출 조건 25/29).**
