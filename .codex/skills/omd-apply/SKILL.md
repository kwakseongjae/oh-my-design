<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->

---
name: omd:apply
description: "프로젝트 루트의 DESIGN.md를 UI/스타일링/마이크로카피/모션 작업의 authoritative brand context로 적용합니다. 컴포넌트 만들기, CSS 수정, 카피 작성, 애니메이션 튜닝, 디자인 시스템 질문에 트리거됩니다. 사용자 교정이 발생하면 자동으로 omd remember를 호출해 preference log에 기록합니다."
---

# omd:apply — Brand Context Injection

프로젝트 루트의 `DESIGN.md`를 읽고, UI 관련 모든 작업의 authoritative brand context로 사용한다. 작업 도중 사용자가 디자인 선택을 교정하면 `.omd/preferences.md`에 자동 기록한다.

## 트리거 조건

다음 중 하나가 감지되면 SKILL 전체를 로드한다.
- 새 컴포넌트 생성 (button, card, dialog, nav, form 등)
- 기존 컴포넌트 스타일 변경 (Tailwind 클래스, CSS, 토큰 값)
- 마이크로카피 작성/수정 (버튼 라벨, empty state, 에러 메시지, tooltip)
- 모션/트랜지션 추가
- 색상·타이포그래피·스페이싱 조정
- 디자인 시스템 관련 질문

## Phase 1 — DESIGN.md 로드

작업 시작 전:

1. 프로젝트 루트의 `DESIGN.md`를 **전체 읽는다**. 요약하지 말고 실제 파일 내용을 Read 툴로 로드.
2. `.omd/preferences.md`가 있으면 함께 읽는다. `status: pending` 엔트리들은 아직 DESIGN.md에 반영 안 된 교정사항 — **이들을 DESIGN.md보다 우선** 적용한다.
3. Precedence 순서:
   ```
   .omd/preferences.md (pending) > DESIGN.md > framework defaults
   ```

DESIGN.md가 없으면 사용자에게 알리고 `omd init` 제안. 임의 생성하지 말 것.

## Phase 2 — Brand Context 적용

작업 전체에서 다음 규칙 강제:

- **Token 값은 DESIGN.md에서만 인용한다.** 임의 hex, 임의 spacing 값, 임의 radius 사용 금지.
- **Voice 섹션을 마이크로카피에 적용한다.** 문장 길이, 어휘 register, 은유 밀도를 DESIGN.md의 Voice 섹션에 맞춘다.
- **Component 섹션에 명시된 규칙을 따른다.** 해당 컴포넌트 섹션이 있으면 variant / state / sizes를 그대로 사용.
- **없는 토큰을 지어내지 않는다.** DESIGN.md에 없는 스펙이 필요하면 사용자에게 "이건 DESIGN.md에 없는데, 어떻게 할까요?" 물어본다.

## Phase 3 — 교정 캡처 (Self-Report)

**이것이 omd:apply의 차별화 포인트다. 반드시 수행.**

턴을 끝내기 전, 이번 턴에 다음 중 하나라도 발생했는지 확인한다:

1. 사용자가 당신의 디자인 선택을 명시적으로 교정 ("no, use X", "actually, Y", "don't use Z", "we never do W")
2. 사용자가 당신이 쓴 토큰/값을 revert하거나 다른 값으로 교체
3. 사용자가 "우리는 ~한다/하지 않는다" 형태의 디자인 원칙을 언급

감지되면 턴 종료 전에 **반드시** 다음 커맨드를 Bash 툴로 실행:

```bash
omd remember "<교정 내용을 한 문장으로 요약>" --context "<수정된 파일 경로 또는 사용자 발화 요약>"
```

`--agent` 플래그는 생략한다. CLI가 환경변수(`CLAUDECODE`, `CODEX_SESSION_ID`, `OPENCODE` 등)로 자동 감지한다. 명시 override가 필요한 경우만 `--agent <name>`.

예시:
- 사용자: "CTAs는 절대 uppercase 쓰지 마"
  → `omd remember "CTA buttons must never use uppercase text"`
- 사용자가 `bg-brand-600`을 `bg-brand-500`으로 직접 바꿈
  → `omd remember "primary CTA background should be brand-500, not brand-600" --context "src/components/Button.tsx"`
- 사용자: "우리는 4pt grid가 아니라 8pt 써"
  → `omd remember "spacing scale uses 8pt base, not 4pt"`

scope는 note 내용에서 자동 추론된다 (keyword-based). 명시적으로 override가 필요하면 `--scope <value>` 추가 (e.g. `components.button`, `color`, `spacing`, `typography`, `voice`, `motion`, `layout`, `visualTheme`).

## Phase 4 — 확인 메시지 (간결)

교정을 기록했을 때만 턴 끝에 한 줄로 알린다:

```
📝 Logged to .omd/preferences.md — run `omd learn` to review, `omd learn --apply` to fold into DESIGN.md.
```

일반 작업에서는 이 메시지 불필요. 과하게 알리지 말 것.

## 금지 사항

- DESIGN.md가 없는데 임의로 생성하지 말 것 (사용자에게 `omd init` 제안).
- preferences.md에 직접 쓰지 말 것. 항상 `omd remember` 커맨드를 경유.
- 교정 감지 시 사용자에게 "기록할까요?" 묻지 말 것. 자동 기록 → 사후 한 줄 알림.
- 같은 턴 내에서 같은 교정을 중복 기록하지 말 것.
