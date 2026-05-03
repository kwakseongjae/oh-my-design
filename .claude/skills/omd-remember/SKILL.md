<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->

---
name: omd:remember
description: "디자인 선호/교정을 .omd/preferences.md 에 append합니다. 사용자가 '기억해', '앞으로는 ~해', '우리는 ~하지 않아', 'remember that' 같은 발화를 하거나 디자인 원칙을 명시할 때 트리거됩니다."
---

# omd:remember — Preference Logger

사용자의 디자인 선호/교정을 `.omd/preferences.md`에 append-only로 기록한다. 나중에 `omd:learn`이 배치로 DESIGN.md에 반영.

## 트리거 발화 패턴

- "기억해 둬", "앞으로는 ~로 해"
- "우리는 ~한다 / ~하지 않는다"
- "remember that ...", "going forward ..."
- "rule of thumb: ..."
- 사용자가 당신의 디자인 선택을 명시적으로 교정

## 실행

Bash 툴로 한 번 실행:

```bash
omd remember "<사용자 발화를 한 문장 영문으로 요약>"
```

옵션:
- `--scope <value>` — 명시적으로 지정할 때. 기본값은 note 내용에서 자동 추론. 허용: `visualTheme | color | typography | spacing | voice | motion | layout | components.<name>`
- `--context <text>` — 관련 파일 경로나 PR 번호 (e.g. `src/components/Button.tsx`, `#1234`)
- `--agent <name>` — 보통 생략 (환경변수 자동 감지). override 필요 시: `claude-code | codex | opencode | cursor`

## 응답

커맨드 출력(`Logged pref_xxx ... → ./.omd/preferences.md`)을 그대로 보여주면 된다. 사용자에게 장황한 확인 불필요.

## omd:apply 스킬과의 관계

- **자동 감지**: 일반 UI 작업 중 교정이 발생하면 `omd:apply` 스킬이 자동으로 이 커맨드를 호출한다.
- **명시적 호출**: 사용자가 UI 작업 없이 디자인 원칙을 선언하는 경우, 이 스킬이 직접 트리거된다.

## 금지

- `.omd/preferences.md` 파일을 직접 편집하지 말 것 — 항상 `omd remember` 경유.
- 같은 내용을 중복 기록하지 말 것 (같은 세션 내에서).
- 사용자에게 "기록할까요?" 묻지 말 것 — 감지 즉시 기록 + 간결 알림.
