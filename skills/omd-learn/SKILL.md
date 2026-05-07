---
name: omd:learn
description: ".omd/preferences.md의 status:pending 항목을 DESIGN.md에 정식 merge하고 status를 applied로 플립. '프리퍼런스 정리해줘', 'fold preferences', 'apply all corrections', 「好みをDESIGN.mdに反映」, 「套用偏好」류의 요청에 트리거. 단발성 교정 기록은 omd:remember."
---

# omd:learn — Preference Fold into DESIGN.md

`.omd/preferences.md`에 누적된 `status: pending` 교정사항을 DESIGN.md에 반영하고, 반영된 엔트리의 상태를 `applied`로 플립한다. **CLI 호출 없음** — Read/Edit 툴로 직접 처리.

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

"이 교정들을 DESIGN.md에 반영할까요?" 묻기. 동의 → Phase 3.

거부 → 어떤 scope를 reject할지 묻고 Phase 4 reject 분기로.

## Phase 3 — DESIGN.md 적용

1. `Read DESIGN.md` 로드
2. scope별로 묶어서 **하나의 coherent edit** 생성 (엔트리당 하나가 아니라 한 scope의 교정들을 종합)
3. Edit 툴로 DESIGN.md의 해당 섹션 수정:
   - `components.button` → DESIGN.md §8 (Components → Button) 또는 §13 (Components 상세)
   - `color` → §2 (Color Palette)
   - `typography` → §3
   - `spacing` → §4 (Spacing scale)
   - `voice` → §10 (Voice & Tone)
   - `motion` → §15 (Motion & Easing)
   - `visualTheme` → §1 (Visual Theme)
4. **voice/내러티브 수정 시 DESIGN.md의 기존 문체 preserve** — 교정 내용만 반영, 문장 스타일/길이/톤 유지
5. **§10-15 (Brand Philosophy 레이어)는 reference voice 보존이 우선** — preference가 §10-15 본문 자체를 다시 쓰라고 하지 않는 한 본문은 건드리지 않고 §1-9의 axes만 수정

## Phase 4 — 상태 플립

반영한 엔트리: 해당 엔트리의 omd-meta 블록을 Edit 툴로:
- `status: pending` → `status: applied`
- `applied_at: <ISO timestamp>` 라인 추가
- (선택) `applied_design_md_hash: <DESIGN.md sha256>` 추가. hash 계산:
  ```bash
  node -e "console.log(require('crypto').createHash('sha256').update(require('fs').readFileSync('DESIGN.md')).digest('hex').slice(0,12))"
  ```

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
4 preferences applied to DESIGN.md
  - components.button: CTAs never uppercase, primary brand-500
  - spacing: 8pt grid
1 rejected (conflicts with base reference radius)

Review .omd/preferences.md for details.
```

## 옵션 패턴

사용자가 특정 작업만 요청하는 경우:

- **"pending만 보여줘"** → Phase 1만, Phase 2-5 생략
- **"X scope만 반영"** → 해당 scope만 Phase 3에서 처리
- **"<pref_id>를 applied로 표시"** → Phase 4의 single-entry 플립만
- **"<pref_id>를 rejected로 표시 + 이유"** → 동일

## 금지

- LLM으로 엔트리별 개별 diff를 생성하지 말 것 — scope별 합쳐서 하나의 coherent edit
- DESIGN.md의 section heading 계층을 바꾸지 말 것
- 교정과 관계없는 부분을 "개선"하지 말 것
- pending을 건너뛰지 말 것 — 모든 pending에 applied/rejected/superseded 중 하나로 플립
- omd-meta 블록 외부 (body) 수정 금지 — 교정 본문은 영구 기록
