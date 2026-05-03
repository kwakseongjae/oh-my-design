---
name: omd:sync
description: "DESIGN.md shim 파일들(CLAUDE.md / AGENTS.md / .cursor/rules/omd-design.mdc)을 관리합니다. 'shim 업데이트', 'AGENTS.md 동기화', 'CLAUDE.md drift 확인' 같은 요청에 트리거됩니다."
---

# omd:sync — Shim Maintenance

DESIGN.md가 모든 주요 AI 코딩 에이전트(Claude Code, Codex, OpenCode, Cursor)에게 보이도록 shim 파일 3종을 관리한다. **CLI 호출 없음** — Read/Write/Edit 툴로 직접 처리.

## 관리 대상 (3 파일)

| ID | 경로 | 모드 |
|---|---|---|
| `claude` | `CLAUDE.md` | block (managed marker만) |
| `agents` | `AGENTS.md` | block (managed marker만) |
| `cursor` | `.cursor/rules/omd-design.mdc` | whole (전체 파일이 omd 전용) |

block 모드는 `<!-- omd:start v=1 hash=<sha256:12> -->` ~ `<!-- omd:end -->` 마커 안만 관리, 나머지 사용자 콘텐츠 보존. whole 모드는 frontmatter 포함 전체 파일이 관리 단위.

## 템플릿 (정확히 이 본문 — 절대 paraphrase 금지)

### CLAUDE.md body

```markdown
# Design System (oh-my-design)

The authoritative brand & UI spec is **@./DESIGN.md**.
Read before any UI/styling/microcopy/motion work.

Preference log (pending corrections): @./.omd/preferences.md

Precedence: DESIGN.md > preferences.md > your defaults.
```

### AGENTS.md body

```markdown
## Design System (oh-my-design)

**Before any UI, styling, copy, or motion change, open and read `./DESIGN.md` in full.** It is the authoritative brand/design spec. Treat its tokens, voice, and component rules as binding unless the user overrides in chat.

If present, read `./.omd/preferences.md` — pending corrections not yet folded into DESIGN.md. Apply them; flag conflicts.
```

### .cursor/rules/omd-design.mdc (whole, frontmatter 포함)

```mdc
---
description: Authoritative brand & UI design system. Read DESIGN.md before UI work.
globs:
  - "**/*.tsx"
  - "**/*.jsx"
  - "**/*.vue"
  - "**/*.svelte"
  - "**/*.css"
  - "**/*.scss"
  - "**/tailwind.config.*"
  - "**/components/**"
  - "**/app/**/page.*"
alwaysApply: false
---

<!-- omd:start v=1 hash=<HASH> -->
The authoritative design spec lives at `@DESIGN.md` (repo root). Open and read before generating/modifying UI.

Pending preference corrections: `@.omd/preferences.md`.

Precedence: DESIGN.md > preferences.md > framework defaults.
<!-- omd:end -->
```

## 해시 계산

`<HASH>` = sha256 of the body content (마커 제외, body 텍스트만), 12자 hex prefix:

```bash
node -e "console.log(require('crypto').createHash('sha256').update(process.argv[1]).digest('hex').slice(0,12))" "<body 텍스트>"
```

block 모드 마커 형식 정확히:
```
<!-- omd:start v=1 hash=ab12cd34ef56 -->
<body>
<!-- omd:end -->
```

## 실행 절차

사용자가 어떤 모드를 요청하는지 분기:
- **인터랙티브 (디폴트)** — drift 발견 시 사용자에게 묻기
- **--force 의도** ("강제 덮어쓰기") — drift 무시하고 덮어씀
- **--check 의도** ("상태만 검사") — 파일 상태만 출력, write 안 함

각 shim별로:

### Step 1 — Read existing
파일 없으면 → status: `missing`, 새로 write 진행
파일 있으면 → 내용 파싱

### Step 2 — block 모드 파싱
`<!-- omd:start v=N hash=H -->` 라인 찾기:
- 없으면 → status: `missing` (block 부재, 사용자 content 외에 새로 추가 필요)
- 있으면 → marker 사이의 본문 추출. 추출된 본문의 sha256:12를 계산해서 marker의 `hash=H`와 비교
  - 불일치 → status: `drifted` (사용자가 수동 편집함)
  - 일치 + 본문 == 템플릿 → status: `clean`
  - 일치 + 본문 != 템플릿 → status: `out-of-date` (omd 템플릿이 갱신됨)

### Step 3 — whole 모드 파싱
existing 전체 content와 rendered 템플릿 비교:
- 동일 → `clean`
- 차이 → `drifted`

### Step 4 — drift 처리
- **인터랙티브**: drift된 shim별로 "${path}는 수동 편집됐어요. 덮어쓸까요? (yes/no/show diff)" 묻기
- **--force**: drift 무시 덮어씀
- **--check**: drift 있으면 exit 1 동등 — 사용자에게 "drift detected" 보고 후 종료

### Step 5 — Write
- block 모드: existing 안의 marker block만 새 hash + 새 body로 교체. 마커 외부 사용자 content는 보존
- whole 모드: 파일 전체를 새 rendered content로 교체. 디렉토리 (`.cursor/rules/`) 없으면 mkdir

### Step 6 — sync-lock 갱신
`.omd/sync.lock.json` 기록 (없으면 만든다):
```json
{
  "design_md_hash": "<DESIGN.md sha256:12>",
  "targets": {
    "CLAUDE.md": "<hash>",
    "AGENTS.md": "<hash>",
    ".cursor/rules/omd-design.mdc": "<hash>"
  },
  "updated_at": "<ISO timestamp>"
}
```

DESIGN.md 해시:
```bash
[ -f DESIGN.md ] && node -e "console.log(require('crypto').createHash('sha256').update(require('fs').readFileSync('DESIGN.md')).digest('hex').slice(0,12))"
```

## 결과 보고

```
CLAUDE.md (block) — updated
AGENTS.md (block) — unchanged
.cursor/rules/omd-design.mdc — created
DESIGN.md hash: ab12cd34ef56
```

## 언제 실행하나

- DESIGN.md 변경 직후 (shim hash 갱신용)
- 새 프로젝트 첫 도입 (3종 생성)
- `.claude` / `.cursor` 디렉토리 추가 후
- "drift 확인" 요청

## 금지

- 마커 안 본문에 임의 추가/축약 금지 — 위 템플릿 정확히 사용
- block 모드 파일에서 마커 외부 사용자 content 절대 삭제 금지
- `.omd/sync.lock.json` 무시 금지 — 항상 갱신
- DESIGN.md가 없어도 shim은 만들 수 있음 (DESIGN.md 생성 후에 hash만 채움)
