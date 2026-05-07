---
name: omd:remember
description: "사용자의 디자인 선호·교정을 .omd/preferences.md에 기록. '이거 기억해줘', '앞으로는 이렇게', 'remember this', 'going forward never X', 「覚えておいて」, 「記住這個」류의 발화 또는 omd:apply가 교정을 감지했을 때 트리거. 기록된 내용은 omd:learn으로 DESIGN.md에 정식 반영."
---

# omd:remember — Preference Logger

사용자의 디자인 선호/교정을 `.omd/preferences.md`에 append-only로 기록한다. 나중에 `omd:learn`이 배치로 DESIGN.md에 반영. **CLI 호출 없음** — Read/Edit/Write 툴로 직접 처리.

## 트리거 발화 패턴

- "기억해 둬", "앞으로는 ~로 해"
- "우리는 ~한다 / ~하지 않는다"
- "remember that ...", "going forward ..."
- "rule of thumb: ..."
- 사용자가 당신의 디자인 선택을 명시적으로 교정

## 파일 포맷 (`.omd/preferences.md`)

frontmatter + 엔트리 시퀀스. 엔트리 하나당 `## <heading>` + `omd-meta` 코드블록 + body.

```
---
schema: omd.preferences/v1
design_md_hash_at_creation: <hash 또는 빈 문자열>
---

# Preference Log

## 2026-04-30T17:48:00.000Z — ctas-never-uppercase

​```omd-meta
id: pref_lqxk2_a3f9c1d4
timestamp: 2026-04-30T17:48:00.000Z
scope: components.button
signal: user-statement
confidence: explicit
status: pending
source_agent: claude-code
source_context: "src/components/Button.tsx"
​```

CTAs are never uppercase
```

## 실행 절차

### Step 1 — note 정규화
사용자 발화를 한 문장 영문으로 요약 (예: "앞으로 CTA 대문자 쓰지마" → `CTAs are never uppercase`).

### Step 2 — scope 추론
note 내용에서 다음 매핑 우선순위 사용:

| 매칭 키워드 (정규식, case-i) | scope |
|---|---|
| `\b(buttons?\|ctas?\|btns?)\b` | `components.button` |
| `\b(cards?)\b` | `components.card` |
| `\b(dialogs?\|modals?)\b` | `components.dialog` |
| `\b(inputs?\|fields?\|forms?)\b` | `components.input` |
| `\b(nav\|navigation\|headers?\|menus?)\b` | `components.navigation` |
| `\b(badges?\|chips?\|pills?\|tags?)\b` | `components.badge` |
| `\b(tables?\|rows?\|cells?)\b` | `components.table` |
| `\b(dropdowns?\|selects?\|comboboxes?)\b` | `components.dropdown` |
| `\b(toasts?\|notifications?\|snackbars?)\b` | `components.toast` |
| `\b(tabs?)\b` | `components.tabs` |
| `\b(colors?\|palette\|hex\|hue\|saturation\|shades?\|tints?\|gradients?)\b` | `color` |
| `\b(font\|typography\|typeface\|weight\|leading\|tracking\|letter-?spacing)\b` | `typography` |
| `\b(spacing\|gap\|padding\|margin\|grid)\b` | `spacing` |
| `\b(voice\|tone\|copy\|microcopy\|wording\|language)\b` | `voice` |
| `\b(motion\|animation\|transition\|easing\|duration)\b` | `motion` |
| `\b(layout\|structure\|hierarchy)\b` | `layout` |
| `\b(theme\|aesthetic\|vibe\|mood\|look\|feel)\b` | `visualTheme` |
| (어느 것도 매칭 X) | `visualTheme` |

사용자가 명시적으로 scope를 지정했으면 그대로 사용.

### Step 3 — id 생성
형식: `pref_<base36 timestamp>_<8 hex chars>`. Bash로 한 줄:
```bash
node -e "console.log('pref_' + Date.now().toString(36) + '_' + require('crypto').randomBytes(4).toString('hex'))"
```

### Step 4 — slug + heading
```bash
node -e "console.log(process.argv[1].toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,40) || 'entry')" "<note>"
```
heading: `<ISO timestamp> — <slug>`

### Step 5 — 파일 read/append
1. `Read .omd/preferences.md` — 없으면 frontmatter+header부터 만든다:
   ```
   ---
   schema: omd.preferences/v1
   design_md_hash_at_creation:
   ---

   # Preference Log

   ```
2. 새 엔트리 블록을 **파일 끝에 append** (Edit 툴, old_string은 마지막 라인, new_string은 마지막 라인 + 빈 줄 + 새 엔트리). 또는 Write로 전체 재작성.
3. 메타 필드:
   - `id`, `timestamp`, `scope` (필수)
   - `signal: user-statement` (디폴트, 사용자가 직접 발화한 경우) 또는 `user-correction` (사용자가 당신의 선택을 교정한 경우)
   - `confidence: explicit` (디폴트, 사용자가 명시적으로 말한 경우) 또는 `inferred` (당신이 사용자 행동에서 추론한 경우)
   - `status: pending` (모든 새 엔트리)
   - `source_agent`: 환경에서 추론 (`claude-code` / `codex` / `opencode` / `cursor`)
   - `source_context`: 관련 파일 경로 또는 PR번호 (있으면 JSON.stringify로 quote)

### Step 6 — 응답
간결한 한 줄: `Logged ${id} to .omd/preferences.md (scope: ${scope})`

## omd:apply 스킬과의 관계

- **자동 감지**: 일반 UI 작업 중 교정 발생 시 `omd:apply`가 이 스킬 트리거
- **명시적 호출**: 디자인 원칙 선언만 할 때 직접 트리거

## 금지

- `.omd/preferences.md` 파일을 frontmatter 외 직접 손대지 말 것 (id 충돌 방지) — 항상 위 절차로
- 같은 세션 내 동일 내용 중복 기록 금지
- 사용자에게 "기록할까요?" 묻지 말 것 — 감지 즉시 기록 + 간결 알림
- frontmatter의 `design_md_hash_at_creation`은 첫 생성 시에만 채움 (이후 절대 수정 X)
