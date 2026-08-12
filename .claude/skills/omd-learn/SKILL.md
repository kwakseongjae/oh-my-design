---
name: omd:learn
description: ".omd/preferences.md의 status:pending 항목을 Core v2 System Graph에 합쳐 DESIGN.md를 재생성하고 status를 applied로 플립. '프리퍼런스 정리해줘', 'fold preferences', 'apply all corrections', 「好みをDESIGN.mdに反映」, 「套用偏好」류의 요청에 트리거. 단발성 교정 기록은 omd:remember."
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:learn — Preference Fold into Core v2

`.omd/preferences.md`에 누적된 `status: pending` 교정사항을
Core v2 System Graph에 반영하고, 그 graph에서 중립적인 root
`DESIGN.md`를 재생성한 뒤 반영된 엔트리의 상태를 `applied`로
플립한다. `DESIGN.md`를 직접 섹션 편집하는 스킬이 아니다.

## Phase 1 — 검토

`Read .omd/preferences.md` → frontmatter + 엔트리들 파싱:

- 엔트리 분리: `## ` heading 기준 split
- 각 엔트리의 `omd-meta` 코드블록에서 `id`, `scope`, `status` 추출
- `status: pending`만 필터

scope별로 그룹화해서 사용자에게 요약:

```
components.button (3 pending):
  - CTAs never uppercase (pref_xxx, pref_yyy)
  - primary fill should be brand-500 not 600 (pref_zzz)

spacing (1 pending):
  - 8pt grid, not 4pt (pref_aaa)
```

엔트리당 한 줄이 아니라 **scope당 2-3줄로 의도 정리**.

## Phase 2 — 사용자 확인

"이 교정들을 디자인 시스템에 반영할까요?" 묻기. 동의 → Phase 3.

거부 → 어떤 scope를 reject할지 묻고 Phase 4 reject 분기로.

## Phase 3 — Core v2 graph-first 적용

### 3.1 포맷·권위 게이트

1. root `DESIGN.md`를 읽고 `.omd/system/manifest.json` + `graph.json`의
   존재와 exact hash binding을 확인한다.
2. 유효한 `profile: portable-core` Bound Core v2이면 `graph.json`이
   canonical이다. `migration-candidate`는 source DESIGN.md authority를
   유지한다. visible Markdown의
   heading이나 표를 직접 편집하지 않는다.
3. Portable-only Core, legacy 13/15/16-section, unmarked 문서이면 설치된
   provider-free migrator로 별도 fresh staging directory에 migration을 실행한다.
   public CLI가 있으면 `omd design-md migrate DESIGN.md --out-dir
   <fresh-migration-dir>`를 사용한다. helper가 없으면 직접 편집으로 우회하지 말고
   stale install을 보고한다.
4. report의 `dropped_segments=0`, `synthetic_product_values_added=0`,
   `projection_roundtrip_equal=true`, `source_reconstruction_equal=true`,
   `opaque_extension_preserved=true`가 모두 확인되어야 계속한다.
   `unsupported_claims_review_required=true`이므로 staging 결과는
   `migration-candidate`인 non-authoritative observation이다. 곧바로 canonical
   authority로 승격하지 않는다. 이해하지 못한 원본은
   `extensions["dev.oh-my-design.migration"]`에 보존한다.
5. staging에서만 수정하고 원본 bytes, source hash, migration report를
   content-addressed rollback artifact로 남긴다. 실패 시 root 파일을 건드리지
   않는다.

### 3.2 scope → Core graph path

scope별 pending을 묶어 **하나의 coherent graph edit**로 합친다.
엔트리당 개별 diff를 만들지 않는다.

| preference scope | canonical graph/portable anchor |
|---|---|
| `visualTheme`, product direction | `experience` / stable anchor id `experience` |
| `color`, `spacing`, `radius`, `elevation`, `motion` | `foundations` / `foundations` |
| `typography`, `font`, `asset`, `icon`, `logo` | `typography_assets` / `typography-assets` |
| `components.*`, `states.*` | `components_states` / `components-states` |
| `layout`, `responsive`, `platform` | `layout_platforms` / `layout-platforms` |
| `voice`, `copy`, `locale` | `content_locales` / `content-locales` |
| `governance`, exception | `governance` / `governance` |

1. user correction은 `prompt-fact`로 provenance에 연결하되, 사용자가 말하지
   않은 수치·font·persona·platform 규칙을 보완하지 않는다.
2. 이전 graph의 알 수 없는 extension key/value를 그대로 보존한다.
3. voice/내러티브 수정은 기존 문체·register를 유지하고 명시된
   교정만 `content_locales` 또는 `experience`에 반영한다.
4. 기존 canonical graph를 run-scoped `graph.draft.json`으로 복사해 draft만
   수정하고 기존 `projection` binding은 제거한다. compiler가
   `projection.sha256` placeholder/precompute/zero seed를 요구하면 fail-close한다.
   **Never hand-write or patch `DESIGN.md`, section anchors, claim
   markers, claim-end delimiters, manifest, or binding hashes.** 일곱
   `design-md:claim` 선언과 각 `design-md:claim-end`는 canonical
   compiler-owned output이다.
5. graph/provenance/coverage draft가 schema와 evidence gate를 통과하면 프로젝트
   밖 fresh review directory에 exact preview를 먼저 만든다.

   ```bash
   omd design-md prepare-review <graph> --provenance <provenance> --coverage <coverage> --out-dir <review> [--migration-report <report>]
   ```

   `<review>/DESIGN.md`와 request hash에 대한 Phase 2 실제 사용자 승인을 받은 뒤
   provider-free tool로 승인 영수증과 final package를 만든다. agent가 승인하지 않는다.

   ```bash
   omd design-md approve-review <review>/review-request.json --reviewer <project-owner-id> --out <approval> --authority-transition-approved
   omd design-md compile <review>/input-graph.json --provenance <review>/provenance.json --coverage <review>/coverage.json --review-receipt <approval> [--migration-report <review>/migration-report.json] --out-dir <fresh> --adopt
   ```

   public CLI가 없으면 설치 bundle의 exact-equivalent
   `prepare-design-md-core-review.cjs`, `compile-design-md-core.cjs`,
   `adopt-design-md-core.cjs` helpers만 허용한다. renderer나 hash 계산을
   재구현하지 않는다.
6. compiled stage를 read back해 Portable declaration conformance와 exact binding을
   다시 검사한다. compiler PASS는 factual accuracy, provenance truth, font/asset
   license, locale behavior, accessibility, visual quality proof가 아니다. 기존 opaque
   extension 보존, provenance/coverage의 resolvable evidence, installed final
   project-system validator까지 모두 통과해야 한다. 필요한 binding을 helper가 만들
   수 없으면 수동 hash patch 대신 fail-close한다.
7. 통과한 fresh stage의 exact bytes만 아래 receipt-gated atomic transaction으로
   채택한다.

   ```bash
   omd design-md prepare-checkpoint <fresh> --reviewer <project-owner-id> --out <checkpoint> --authority-transition-approved
   omd design-md adopt <fresh> --project-root <project-root> --checkpoint-receipt <checkpoint>
   ```

   atomic package adopter가 없으면 stage를 보존하고 fail-close하며 파일별
   복사로 우회하지 않는다.

## Phase 4 — 상태 플립

반영한 엔트리: **Phase 3 atomic project adoption이 성공한 뒤에만** 해당
엔트리의 omd-meta 블록을 Edit 툴로:
- `status: pending` → `status: applied`
- `applied_at: <ISO timestamp>` 라인 추가
- (선택) `applied_design_md_hash`가 기존 schema에서 필요하면 새 계산을 하지 않고,
  성공한 adopted package manifest의 `artifacts.design_md.sha256` exact value만 복사한다.

거부한 엔트리:
- `status: pending` → `status: rejected`
- `rejected_reason: "<짧은 이유>"` 라인 추가

상위 엔트리가 누적된 작은 교정을 통합·대체했으면:
- 작은 엔트리들은 `status: superseded`
- `superseded_by: <상위 pref_id>` 추가

## Phase 5 — 결과 요약

한 문단:
- 반영된 교정 수 (scope별)
- 거부된 교정 수 + 이유
- 사용자에게 `.omd/preferences.md` 직접 확인 안내

```
4 preferences applied to the Core v2 design system
  - components.button: CTAs never uppercase, primary brand-500
  - spacing: 8pt grid
1 rejected (conflicts with base reference radius)

Review .omd/preferences.md for details.
```

## Fold-in 제안에서 호출된 경우 (`.omd/foldin-proposal.json`)

SessionStart 컨텍스트의 OMD FOLD-IN PROPOSAL → AskUserQuestion 승인 경로로 호출되었으면 Phase 2 확인은 이미 끝난 것 — 다시 묻지 말 것.

제안 없이 사용자가 직접 omd:learn을 부른 경우에도 `.omd/foldin-proposal.json`이
`"status": "proposed"`로 존재하면: 그 scopes를 이번 폴드 대상에 포함할지 Phase 2에서
함께 확인하고, 처리 후 아래와 동일하게 status를 갱신한다 (proposed인 채로 방치 금지 —
다음 세션이 또 물어본다).

- **승인된 scope만** Phase 3-4로 처리. 미승인 scope의 pending 엔트리는 건드리지 않는다
- 처리 후 `.omd/foldin-proposal.json`의 status를 Edit 툴로 갱신:
  - 전부 반영 → `"status": "applied"` + `"applied_at": "<ISO timestamp>"` 필드 추가
  - 일부만 반영 → `"status": "partial"` + `scopes` 배열을 **남은(미승인) scope만**으로 갱신
  - 전부 거절("나중에") → `"status": "snoozed"` + `"snoozed_at": "<ISO timestamp>"` 필드 추가
  - status 값은 **JSON 계약상 영문 고정** (`proposed`/`applied`/`partial`/`snoozed`) —
    번역·한글화 금지 (훅이 문자열 비교로 읽는다)

## 옵션 패턴

사용자가 특정 작업만 요청하는 경우:

- **"pending만 보여줘"** → Phase 1만, Phase 2-5 생략
- **"X scope만 반영"** → 해당 scope만 Phase 3에서 처리
- **"<pref_id>를 applied로 표시"** → Phase 4의 single-entry 플립만
- **"<pref_id>를 rejected로 표시 + 이유"** → 동일
- 플립 전 현재 status를 먼저 Read로 확인: 이미 같은 값이면 no-op 보고,
  `superseded`/`rejected` → `applied` 전환은 **금지** (이력 오염 — 사용자에게
  "이 항목은 X 상태예요. 되살리려면 omd:remember로 재캡처하세요"라고 안내)

## 금지

- LLM으로 엔트리별 개별 diff를 생성하지 말 것 — scope별 합쳐서 하나의 coherent edit
- `DESIGN.md`를 직접 편집하지 말 것. canonical graph draft + compiler만 사용한다
- section/claim/claim-end marker, manifest, hash를 수동 생성·수정하지 말 것
- legacy heading을 Core heading으로 수동 개명하지 말 것 — lossless migration
  gate를 거친다
- visible `DESIGN.md`에 frontmatter, generator, verification, preference 이력을
  넣지 말 것
- 교정과 관계없는 부분을 "개선"하지 말 것
- pending을 건너뛰지 말 것 — 모든 pending에 applied/rejected/superseded 중 하나로 플립
- omd-meta 블록 외부 (body) 수정 금지 — 교정 본문은 영구 기록
