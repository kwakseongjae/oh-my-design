<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->

---
name: omd:sync
description: "DESIGN.md shim 파일들(CLAUDE.md / AGENTS.md / .cursor/rules/omd-design.mdc)을 관리합니다. 'shim 업데이트', 'AGENTS.md 동기화', 'CLAUDE.md drift 확인' 같은 요청에 트리거됩니다."
---

# omd:sync — Shim Maintenance

DESIGN.md가 모든 주요 AI 코딩 에이전트 (Claude Code, Codex, OpenCode, Cursor)에게 보이도록 shim 파일 3종을 관리한다.

## 관리 대상

- `CLAUDE.md` — Claude Code용 `@./DESIGN.md` import
- `AGENTS.md` — Codex CLI + OpenCode 공용 pointer
- `.cursor/rules/omd-design.mdc` — Cursor auto-attach rule

각 파일은 `<!-- omd:start v=1 hash=... -->` ~ `<!-- omd:end -->` marker block으로 관리된다. Cursor mdc는 frontmatter 포함 전체 파일이 관리 단위.

## 사용

사용자 요청에 따라 다음 중 하나를 Bash 툴로 실행:

```bash
omd sync              # 인터랙티브 — drift 시 overwrite/skip/show/quit 프롬프트
omd sync --force      # drift 포함 무조건 덮어쓰기
omd sync --check      # 상태만 검사 (CI/pre-commit, unclean 시 exit 1)
```

## 언제 실행하나

- `DESIGN.md` 변경 직후 (shim hash 갱신)
- 새 프로젝트에 처음 도입 (shim 3종 생성)
- `.claude` / `.cursor` 디렉토리 추가 후
- CI에서 상태 확인 (`--check`)

## 금지

- shim 파일을 직접 편집하지 말 것. 반드시 `omd sync` 경유.
- marker block 외부 유저 content는 보존된다 (CLAUDE.md / AGENTS.md만). mdc는 omd 전용이라 전체 덮어쓰기.
