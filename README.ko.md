<p align="center">
  <img src=".github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>AI 코딩 에이전트를 위한 스킬 기반 디자인 부트스트랩 — 명령어 한 번.</strong> 356개 실제 기업 디자인 시스템. 설치에 AI 호출 없음. 그 다음은 에이전트에게 말만 하면 됩니다.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/v/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/dm/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm downloads" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/references-356-7c5cfc?style=flat-square" alt="356 References" />
  <img src="https://img.shields.io/badge/CLI%20commands-1-blue?style=flat-square" alt="One CLI command" />
</p>

<p align="center">
  한국어 | <a href="README.md">English</a> | <a href="README.ja.md">日本語</a> | <a href="README.zh-TW.md">繁體中文</a>
</p>

---

## oh-my-design이란?

**oh-my-design (OmD)** 은 AI 코딩 에이전트를 위한 디자인 시스템입니다. Claude Code / Codex / OpenCode / Cursor를 당신의 브랜드를 기억하는 시니어 프로덕트 디자이너로 만듭니다. 한 번 설치하면, 이후엔 원하는 것을 설명하기만 하면 됩니다 — 컴포넌트, 화면, 카피, 에셋, 차트 — 에이전트가 프로젝트의 디자인 시스템을 적용해 결과물을 만들어냅니다. `DESIGN.md`가 브랜드 스펙이고([Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) 토큰 + 브랜드 철학 레이어: Voice / Narrative / Principles / Personas / States / Motion), 356개 실제 기업의 DESIGN.md 파일이 패키지에 함께 들어 있습니다. **API 키 불필요. 외부 인프라 불필요. 모든 것이 기존 CLI 세션 안에서 동작합니다.**

## 설치

```bash
npx oh-my-design-cli install-skills
```

설치 후 에이전트를 재시작하세요 (Claude Code는 Cmd+Q 후 재실행) — 새 스킬 + 에이전트가 로드됩니다.

이것이 당신이 실행할 유일한 CLI 명령어입니다. 나머지는 전부 에이전트에게 자연어로 말하면 됩니다.

설치 시 **어디에** 설치할지 묻습니다: **Project** (`./.claude/skills` — 이 프로젝트만, 기본값) 또는 **Global** (`~/.claude/skills` — 모든 프로젝트; 스킬 + 서브에이전트, 전역 hooks/settings는 건드리지 않음). `--global` 플래그로 프롬프트를 건너뛸 수 있습니다.

## 첫 60초

이게 핵심입니다: 프롬프트 한 줄이 에이전트가 모든 미래 세션에서 기억하는 `DESIGN.md`가 됩니다.

1. 설치(위) 후 **에이전트 재시작** (Cmd+Q, 재실행) — 새 스킬이 로드됩니다.

2. 프로젝트에서 첫 프롬프트를 입력하세요 — 그대로 복사해도 됩니다:

   > Set up our design system — Toss-style, for a family meal-tracking app.

   에이전트가 **`omd:init`** 을 실행합니다: 356개 실제 기업 카탈로그에서 레퍼런스를 추천하고, 확인을 받은 뒤 프로젝트 루트에 **`DESIGN.md`** 를 작성합니다. (`omd:sync`가 `CLAUDE.md` / `AGENTS.md` / Cursor shim까지 연결해 모든 에이전트가 자동으로 읽게 합니다.)

   **그 `DESIGN.md`가 활성화 지점입니다 — 이제 에이전트가 당신의 브랜드를 기억합니다.**

3. 이제 그 위에서 빌드하세요:

   > Design the home screen.

   에이전트가 `DESIGN.md`를 읽고 브랜드에 맞는 UI를 만듭니다. 디자인 시스템을 다시 설명할 일은 없습니다.

Toss가 아니어도 됩니다 — `Stripe-style`, `Linear-clone B2B SaaS`, `Karrot-style marketplace` 전부 가능. 전체 카탈로그: [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems).

## 지원 에이전트

| 에이전트 | 채널 | 설치되는 것 |
|---|---|---|
| **Claude Code** | `--agent claude-code` (기본) | 풀 번들 — `.claude/` 아래 스킬, 16 서브에이전트, hooks, data |
| **Codex** | `--agent codex` | `.agents/skills/` 스킬 번들 (공식 discovery 경로) |
| **OpenCode** | `--agent opencode` | `.opencode/skills/` 스킬 번들 |
| **Cursor** | `--agent cursor` | 정식 rules 채널 — `.cursor/rules/omd-design.mdc` shim + 공용 `.claude/data` 카탈로그 (스킬/훅 미설치) |

기본 설치는 감지된 모든 에이전트를 대상으로 합니다; 단일 채널만 원하면 `--agent <name>`.

## 패키지 구성

**18 스킬 · 16 서브에이전트 · 356 검증된 레퍼런스 · 활성화 hooks** — 위 명령어 하나로 전부 설치됩니다.

- **스킬** — core flow (`omd:init` / `omd:apply` / `omd:harness` / `omd:sync` / `omd:remember` / `omd:learn` / `omd:taste` — "내 취향 보여줘" 한마디로 루프가 배운 것·대기 중·보류된 것을 한 뷰로), 라이브 캡처 + 에셋 (`omd:reference-capture` / `omd:asset-fetch` / `omd:experiment-gallery`), v0.2 agent layer (`omd:orchestrator` / `omd:kr-writer` / `omd:locale-adapter` / `omd:designer-review` / `omd:final-qa` / `omd:codex-image`), 인터페이스 품질 스킬 `omd:feel` (HIG / Material / WCAG 기반 113개 출처-등급 규칙으로 모션·여백·타이포·a11y를 적용 + 감사), 그리고 터미널에서 claude.ai/design을 구동하는 단독 스킬 `claude-design`.
- **서브에이전트** — `omd-master` + 15 스페셜리스트 (UX 리서치, UI 생성, 에셋 큐레이션, 마이크로카피, a11y 감사, 페르소나 테스트, 비평, …).
- **레퍼런스** — 356개 실제 기업 `DESIGN.md`, 전부 라이브 소스 대조 검증. 모든 레퍼런스는 `oh-my-design.kr/<id>/design.md`에서 raw markdown으로도 제공되어 에이전트가 직접 fetch할 수 있습니다.
- **Hooks** — UserPromptSubmit / SessionStart / PostToolUse 활성화 — 슬래시 명령 없이 자연어만으로 스킬이 발동합니다.

스킬·에이전트별 상세 레퍼런스: **[oh-my-design.kr/docs](https://oh-my-design.kr/docs)**.

MCP를 선호한다면 **[oh-my-design-mcp](./packages/mcp/)** — 같은 카탈로그를 Claude Desktop, Cursor, Cline, Continue, Codex용 MCP 리소스/툴로 노출합니다. [`packages/mcp/README.md`](./packages/mcp/README.md) 참고.

## 업그레이드

```bash
npx oh-my-design-cli@latest install-skills
```

Idempotent. `<!-- omd:installed-skill -->` 마커가 있는 관리 파일은 in-place 갱신, 사용자가 수정한 파일은 그대로 둡니다 (`skipped-drift`) — 덮어쓰려면 `--force`. 재실행 후 에이전트 재시작.

```bash
npx oh-my-design-cli --version       # 프로젝트에 깔린 버전
npm view oh-my-design-cli version    # npm registry 최신
```

릴리스별 변경 사항 — re-install 이상이 필요한 변경 포함 — 은 [CHANGELOG.md](./CHANGELOG.md)에 있습니다.

## 링크

- **카탈로그** — [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems) (모든 레퍼런스 + 에이전트용 raw `.md` twin)
- **컬렉션** — [oh-my-design.kr/collections](https://oh-my-design.kr/collections) (유스케이스별 큐레이션)
- **문서** — [oh-my-design.kr/docs](https://oh-my-design.kr/docs) (설치 옵션, 스킬, 에이전트, FAQ)
- **체인지로그** — [CHANGELOG.md](CHANGELOG.md) · 0.1.x에서 마이그레이션: [MIGRATION.md](MIGRATION.md)

## 라이선스

MIT — [LICENSE](LICENSE) 참고. 레퍼런스는 각 기업의 자산이며, 교육적 참조 목적으로만 재구성되었습니다.
