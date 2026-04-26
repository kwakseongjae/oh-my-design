---
name: omd:learn
description: "누적된 preference 교정사항을 DESIGN.md에 반영합니다. '프리퍼런스 정리해줘', 'DESIGN.md 업데이트', 'preference 반영', 'fold preferences', 'learn from corrections' 같은 요청에 트리거됩니다."
---

# omd:learn — Preference Fold into DESIGN.md

`.omd/preferences.md`에 누적된 `status: pending` 교정사항을 DESIGN.md에 반영하고, 반영된 엔트리의 상태를 `applied`로 플립한다.

## Phase 1 — 검토

Bash 툴로:

```bash
omd learn
```

실행하면 pending 엔트리를 scope별로 그룹화해서 보여준다. 출력을 읽고 사용자에게 **그룹별 요약**을 제시한다 (각 엔트리를 나열하지 말고, scope당 2-3줄로 의도 정리).

예시 출력 형식:
```
components.button (3 pending):
  - CTAs never uppercase (pref_xxx, pref_yyy)
  - primary fill should be brand-500 not 600 (pref_zzz)

spacing (1 pending):
  - 8pt grid, not 4pt (pref_aaa)
```

## Phase 2 — 사용자 확인

"이 교정들을 DESIGN.md에 반영할까요?" 묻는다. 사용자가 동의하면 Phase 3.

## Phase 3 — 적용

1. **DESIGN.md를 Read 툴로 로드**한다.
2. scope별로 묶어서 **하나의 coherent edit**을 생성한다 (엔트리당 하나의 edit이 아니라, 한 scope의 교정들을 종합).
3. Edit 툴로 DESIGN.md의 해당 섹션을 수정.
4. **voice 섹션이나 내러티브를 수정할 때는 DESIGN.md의 기존 문체를 preserve**한다 — 교정 내용만 반영하되 문장 스타일, 길이, 톤은 유지.
5. 수정 후 `DESIGN.md`의 새 hash를 계산. Bash:
   ```bash
   omd sync --force  # shim들의 hash 갱신 (DESIGN.md 해시는 pointer라 바뀌지 않지만 lock만 업데이트)
   ```

## Phase 4 — 상태 플립

반영한 각 엔트리에 대해:

```bash
omd learn --mark-applied <pref_id>
```

반영 안 한 엔트리(충돌, 거부)는:

```bash
omd learn --mark-rejected <pref_id> --reason "<짧은 이유>"
```

## Phase 5 — 결과 요약

한 문단으로:
- 반영된 교정 수 (scope별)
- 거부된 교정 수 + 이유
- 사용자에게 `.omd/preferences.md` 직접 확인 링크 안내

예시:
```
✓ 4 preferences applied to DESIGN.md
  - components.button: CTAs never uppercase, primary brand-500
  - spacing: 8pt grid
✗ 1 rejected (conflicts with base reference radius)

Review .omd/preferences.md for details.
```

## 금지

- LLM으로 엔트리별 개별 diff를 생성하지 말 것 — scope별 합쳐서 하나의 coherent edit.
- DESIGN.md의 section 구조(heading 계층)를 바꾸지 말 것.
- 교정과 관계없는 부분을 "개선"하지 말 것.
- pending을 건너뛰지 말 것 — 모든 pending에 대해 applied or rejected 플립해야 한다.
