# oh-my-design — User Workflows & Verification Map

Date: 2026-04-26
Version: v0.2.0

이 문서는 사용자가 실제로 실행하는 6개 워크플로우를 정리하고, 각 단계에서 받는 결과물과 그것이 어떤 테스트/스모크로 검증됐는지 매핑합니다.

---

## 사전: 설치 옵션

| 옵션 | 명령어 | 적합한 사용자 |
|---|---|---|
| Zero-install (권장) | `npx oh-my-design-cli <command>` | 평가 / 1회성 |
| Global install | `npm install -g oh-my-design-cli` → `omd <command>` | 매일 사용 |
| GitHub URL | `npm install github:kwakseongjae/oh-my-design` | npm 미배포 시점 |
| Local clone | `git clone + npm link` | contributor / 디버깅 |

이하 워크플로우의 명령어는 `omd` 단축형으로 표기 (npx는 `npx oh-my-design-cli ...`로 그대로 치환).

---

## WF-1 — CLI-only: DESIGN.md를 직접 만들고 shim만 받는다

### 실행

```bash
cd my-project

# 추천
omd init recommend "warm B2C marketplace"

# stage
omd init prepare --ref airbnb --description "warm B2C marketplace"

# DESIGN.md를 직접 작성 (또는 reference 그대로 가져오기)
omd reference show airbnb > DESIGN.md
# (편집)

# 4개 에이전트용 shim 작성
omd sync --force
```

### 받는 것

- top-5 추천 (matched keywords + delta_set 미리보기)
- `.omd/init-context.json` (deterministic delta_set 기록)
- `DESIGN.md` (사용자가 직접 작성)
- `CLAUDE.md` / `AGENTS.md` / `.cursor/rules/omd-design.mdc` (3개 shim)
- `.omd/sync.lock.json` (drift 추적용 hash 기록)

### 검증

| 단계 | 테스트 / 스모크 |
|---|---|
| 추천 정확도 | 시나리오 10개 (s1-s10) — expected_top_refs 100% 충족 |
| 추천 stem matching | `recommend.test.ts` (engineering ↔ engineered) |
| 추천 category-prior | smoke: "warm marketplace" → airbnb 1위 (1.50, +0.5 부스트) |
| init prepare | `init-deprecate.test.ts` 3개 — 빈 dir / 기존 파일 rename / 두 번 연속 timestamp suffix |
| sync 결정성 | `shims.test.ts` 21개 + `sync-marker.test.ts` 13개 + `sync-lock.test.ts` 10개 |
| design_md_hash 기록 | smoke: sha256 12자리 직접 계산값과 lock 일치 확인 |

**판정**: 결정적 부분 100% 검증 → **production-ready**

---

## WF-2 — Agent-driven: Claude Code에서 한 번에 부트스트랩

### 실행

```bash
cd my-project
omd install-skills

# Claude Code 열고:
# User: "이 프로젝트에 DESIGN.md 만들어줘 — warm casual meal-kit subscription"
```

### 에이전트가 자동으로 수행하는 단계

```
Phase 1-3: 추천 → 사용자가 ref 선택
Phase 4:   omd init prepare --json
Phase 4.5 (NEW): "§11-13에 사실 정보 들어갑니다. 다음을 알려주세요:
                 1. 프로젝트 이름 / 창립 시점
                 2. 핵심 thesis 한 문장
                 3. 공식 tagline
                 4. 타겟 user segments 2-4개
                 또는 'skip'"
Phase 5:   Hybrid variation → DESIGN.md 작성 (silent voice fingerprint
           추출 + 7-rule strict emit)
Phase 6:   omd sync --force
Phase 7:   요약 보고
```

### 받는 것

- `.claude/skills/` (또는 감지된 에이전트별)에 5개 SKILL.md 파일
- 17KB DESIGN.md (15 sections, voice-preserved variation)
- §11-13: 사용자 답변 반영 또는 `[FILL IN: ...]` placeholder + `<!-- omd:limitation -->` 코멘트
- 3개 shim + lock 파일

### 검증

| 단계 | 테스트 / 스모크 |
|---|---|
| install-skills | `install-skills.test.ts` 7개 — 5×3=15 파일 / 마커 / `--agents` 필터 / idempotent / drift / `--force` / 자동 감지 |
| Hybrid variation 7-rule | LLM 1회 실증 (1차 시도, 픽스 전 prompt) — 9.5/10 (archive: `llm-real-session/`) |
| Phase 4.5 fact-collection dialog | **미실증 — Phase 4.5 스킬 텍스트 추가 후 실 LLM 재실행 안 함** |
| §11-13 limitation 처리 | 1차 LLM 실증에서 4개 omd:limitation 코멘트 정확 표시 확인 |

**판정**: 결정적 layer (install-skills, sync, recommend, delta_set 계산) → production. LLM-driven Hybrid → **late beta** (Phase 4.5 실증 필요)

---

## WF-3 — 작업 중 사용자 교정 → 자동 로깅

### 실행

```
[Claude Code에서 컴포넌트 작업 중]
User: "no, CTAs는 절대 uppercase 안 써"
```

### 에이전트가 자동으로 수행

```
[omd:apply 스킬의 self-report directive 트리거]
[Bash] omd remember "CTA buttons must never use uppercase text"
       (--agent 생략 — CLAUDECODE 환경변수로 자동 감지됨)
```

### 받는 것

`.omd/preferences.md`에 entry append:

```markdown
## 2026-04-26T... — cta-buttons-must-never-use-uppercase-text
​```omd-meta
id: pref_xxx
scope: components.button       # 자동 추론 (CTA → button)
signal: user-statement
confidence: explicit
status: pending
source_agent: claude-code      # 자동 감지
​```
CTA buttons must never use uppercase text
```

### 검증

| 단계 | 테스트 / 스모크 |
|---|---|
| 포맷 / 파싱 / 라운드트립 | `preferences.test.ts` 23개 |
| Scope 추론 (16 패턴) | `preferences.test.ts` (CTA→button, gradient→color, 8pt→spacing 등) |
| Agent 자동 감지 | `agent-detect.test.ts` 8개 — env 기반 + FS 기반 |
| Source agent 기록 | smoke: 현 Claude Code 세션에서 `--agent` 생략 → `source_agent: claude-code` 기록 확인 |
| 에이전트가 실제로 self-report 발화 감지하는 정확도 | **미실증 — 실 사용자 corrections 데이터 0건** |

**판정**: CLI 결정적 부분 → production. 에이전트의 발화 감지 정확도 → **late beta**

---

## WF-4 — Preference 누적 후 DESIGN.md에 반영

### 실행

```bash
omd learn                              # pending 그룹별 목록
omd learn --mark-applied <pref_id>     # 1개씩 반영 표시
omd learn --mark-rejected <pref_id> --reason "conflicts with reference"
omd learn --all                        # 전체 상태 확인
```

### 받는 것

- pending 목록 — scope별 그룹화 + 통계 (pending/applied/rejected/superseded 카운트)
- `--mark-applied`: status `pending → applied`, `applied_at` + `applied_design_md_hash` 자동 stamp
- `--mark-rejected`: status `rejected`, reason 기록

### 검증

| 단계 | 테스트 / 스모크 |
|---|---|
| Status transition | `preferences.test.ts` updateEntryStatus 3개 |
| Hash 자동 계산 | smoke: `--mark-applied` 시 현재 DESIGN.md sha256 12자리 stamp 확인 |
| Group / filter | `preferences.test.ts` groupByScope / filterByStatus |

**판정**: 결정적 → **production-ready**

(에이전트가 실제 DESIGN.md를 편집하는 부분은 표준 Edit 작업이라 별도 검증 불필요)

---

## WF-5 — CI / pre-commit drift check

### 실행

```bash
# package.json scripts
"lint:design": "omd sync --check"

# 또는 .husky/pre-commit
omd sync --check
```

### 받는 것

- 모두 동기화 상태 → `All clean` + exit 0
- 1개 이상 missing/drifted → `N not in sync` + exit 1

### 검증

| 단계 | 테스트 / 스모크 |
|---|---|
| Drift 4상태 분류 (missing/clean/drifted/out-of-date) | `shims.test.ts` inspectShim 7개 |
| `--check` exit code | smoke: 빈 dir → exit 1, sync --force 후 → exit 0 |

**판정**: **production-ready**

---

## WF-6 — 다른 reference로 re-init

### 실행

```bash
# 기존 DESIGN.md가 airbnb 기반인 상태에서:
omd init prepare --ref linear.app --description "minimal dev tool"
# → DESIGN.md → DESIGN_DEPRECATED.md (헤더에 메타) + 새 init-context
```

### 받는 것

- 기존 `DESIGN.md` → `DESIGN_DEPRECATED.md` rename
- (이미 `DESIGN_DEPRECATED.md` 있으면 → `DESIGN_DEPRECATED.<ISO-timestamp>.md`)
- 헤더 메타데이터:
  ```
  <!--
  omd:deprecated
    deprecated_at: 2026-04-26T...
    previous_reference: airbnb
    new_reference: linear.app
    reason: user-initiated omd init
  -->
  ```
- `.omd/preferences.md`는 **보존**

### 검증

| 단계 | 테스트 / 스모크 |
|---|---|
| 기본 deprecate | `init-deprecate.test.ts` — 빈 dir / 기존 파일 / 두 번 연속 |
| Timestamp suffix 충돌 방지 | 같은 테스트, 두 번 연속 케이스 |
| Preference replay (preference를 새 base에 reapply) | **미구현 — item 7e로 defer** |

**판정**: 기본 deprecate는 **production**. Preference replay는 **deferred** (현재는 단순 보존만).

---

## 종합 판정 매트릭스

| 워크플로우 | CLI/결정적 부분 | LLM 부분 | 종합 |
|---|---|---|---|
| WF-1 (CLI-only) | ✅ 100% | n/a | **production** |
| WF-2 (Agent bootstrap) | ✅ 100% | ⏳ 1회 검증 (픽스 전 prompt) | **late beta** |
| WF-3 (자동 교정 로깅) | ✅ 100% | ⏳ 0회 (실 발화 감지 정확도 미실증) | **late beta** |
| WF-4 (Preference fold) | ✅ 100% | n/a | **production** |
| WF-5 (CI drift check) | ✅ 100% | n/a | **production** |
| WF-6 (Re-init) | ✅ 결정적; replay 미구현 | (WF-2와 동일) | **beta** |

---

## 7-rule criteria (Hybrid variation 평가)

LLM이 `omd:init` 스킬을 따를 때 산출물이 만족해야 하는 7가지 (Phase 5B 강제 규칙):

1. **Section 구조 1:1** — 레퍼런스 H2/H3 그대로
2. **Token shifts only where delta_set authorizes** — 나머지 byte-for-byte
3. **Voice fingerprint 보존** — 문장 길이 / register / 은유 밀도
4. **Domain swap 구체 명사만** — 동사/형용사/framing 손대지 말 것
5. **새 philosophy 도입 금지** — delta-derived bullet도 추가 금지 (기존 통합)
6. **Unresolved delta는 omd:unresolved 코멘트로 표시**
7. **Voice hints 반영** — Voice 섹션에 직접
8. **(NEW)** **§11-13 분기** — 사용자 사실 정보 또는 `[FILL IN]` + omd:limitation

### 1차 LLM 실증 결과 (meal-kit + airbnb)

```
Rule 1: ✅ 15/15 H2 + 모든 H3 일치
Rule 2: ✅ Hex shift 7/7 정확 / Neutral 보존 7/7 / Non-color 토큰 9/9 / Radius +6 / Letter-spacing +0.005em 모두 정확
Rule 3: ✅ 평균 문장 길이 21.4 vs 22.4 (4.5% 차이) / metaphor density "tactile" 1건 누락 (소수)
Rule 4: ✅ Airbnb-domain 100% swap (listing 27→0 등)
Rule 5: ⚠️ §3 typography에 새 bullet 1개 추가 (마이크로 위반 — 픽스로 prompt에 명시)
Rule 6: ✅ 4개 omd:limitation 코멘트
Rule 7: ✅ Voice hints 명시
Rule 8: ✅ §11-13 placeholder 처리

총점: 9.5/10
```

archive: `test/scenarios/archive/llm-real-session/DESIGN.md`

---

## 발견된 P0/P1/P2와 해결 상태

| ID | 문제 | 해결 상태 |
|---|---|---|
| P0 | §11-13 (Brand Narrative / Principles / Personas)는 historical facts 박혀있어서 단순 swap 시 거짓 brand claim ship 위험 | ✅ Phase 4.5 추가 + Rule 8 명시 (commit cc1f556) |
| P1 | Recommend가 단일 tag 매칭으로 도메인 시그널 못 잡음 (consumer 쿼리에 dev tool 우위) | ✅ Category-prior +0.5 부스트 (commit cc1f556). 검증: airbnb #5 → #1 |
| P2 | apply-delta-stub이 color만 처리 — radius/letter-spacing/spacing은 무시 | ✅ STUB_HEADER에 한계 명시 + README 분해 (commit cc1f556) |
| Bug | README가 `omd` 단축 커맨드 사용했는데 bin에 없었음 | ✅ package.json bin에 `omd` 별칭 추가 |

---

## 잔여 검증 영역 (publish 후 알파 테스트로 확인)

1. **Phase 4.5 dialog 실 LLM 동작**: 픽스된 prompt가 Claude Code/Codex/OpenCode에서 실제로 사용자에게 §11-13 facts를 묻는지
2. **omd:apply self-report 정확도**: 실 사용자 발화에서 "교정"을 얼마나 정확히 감지하는지 (false positive / negative 비율)
3. **§14-15 (States/Motion) Hybrid 품질**: 1차 실증에선 OK 판정했지만 다른 reference + description 조합에서도 그런지

이 3가지는 v0.2.0 출시 후 실 사용자 데이터로 측정 → v0.3 / v1.0 방향 결정 입력.
