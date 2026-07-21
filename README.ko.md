<p align="center">
  <img src=".github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>AI 코딩 에이전트를 위한 스킬 기반 디자인 부트스트랩 — 명령어 한 번.</strong> 440개 이상의 실제 기업 디자인 시스템. 설치에 AI 호출 없음. 그 다음은 에이전트에게 말만 하면 됩니다.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/v/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/dm/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm downloads" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/references-440%2B-7c5cfc?style=flat-square" alt="440+ References" />
  <img src="https://img.shields.io/badge/CLI-install%20%2B%20doctor-blue?style=flat-square" alt="Install and doctor CLI" />
</p>

<p align="center">
  한국어 | <a href="README.md">English</a> | <a href="README.ja.md">日本語</a> | <a href="README.zh-TW.md">繁體中文</a>
</p>

---

## oh-my-design이란?

**oh-my-design (OmD)** 은 AI 코딩 에이전트를 위한 디자인 시스템입니다. Claude Code / Codex / OpenCode에는 재사용 가능한 스킬과 전문 역할을 설치하고, Cursor에는 같은 `DESIGN.md`를 적용하는 프로젝트 rule을 설치합니다. 한 번 설치한 뒤 원하는 컴포넌트, 화면, 카피, 에셋, 차트를 설명하면 됩니다. `DESIGN.md`가 이식 가능한 브랜드 스펙이고([Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) 토큰 + 브랜드 철학 레이어: Voice / Narrative / Principles / Personas / States / Motion), 440개 이상의 실제 기업 DESIGN.md가 패키지에 함께 들어 있습니다. **핵심 설치·로컬 워크플로에는 별도 API 키·데몬·MCP 서버가 필요 없고, 기존 코딩 에이전트 세션이 추론을 담당합니다. 선택 기능인 `claude-design`은 로그인된 Chrome의 claude.ai/design 세션을 엽니다.**

## 설치

```bash
npx oh-my-design-cli@latest
```

설치 후 에이전트를 재시작하세요 (Claude Code는 Cmd+Q 후 재실행). 그런 다음 실제 채널 파일이 정상인지 한 번 진단합니다.

```bash
npx oh-my-design-cli@latest doctor
```

CLI는 번들을 설치하고 진단하는 역할만 합니다. 이후 디자인 작업은 전부 에이전트에게 자연어로 말하면 됩니다.

설치 시 **어디에** 설치할지 묻습니다: **Project** (이 저장소의 채널별 경로, 기본값) 또는 **Global** (모든 프로젝트에서 쓰는 사용자 경로). OpenCode는 프로젝트 설치에 `.opencode/`, 전역 설치에 `~/.config/opencode/`를 사용합니다. 전역 hooks/settings는 건드리지 않습니다. `npx oh-my-design-cli@latest install-skills --global`로 전역 범위를 바로 선택한 뒤 `npx oh-my-design-cli@latest doctor --global`로 진단할 수 있습니다.

## 첫 60초 — Claude Code, Codex, OpenCode

이게 핵심입니다: 프롬프트 한 줄이 에이전트가 모든 미래 세션에서 기억하는 `DESIGN.md`가 됩니다.

1. 설치(위) 후 **에이전트 재시작** (Cmd+Q, 재실행) — 새 스킬이 로드됩니다.

2. 프로젝트에서 첫 프롬프트를 입력하세요 — 그대로 복사해도 됩니다:

   > Set up our design system — Toss-style, for a family meal-tracking app.

   스킬이 설치된 에이전트가 **`omd:init`** 을 실행합니다: 440개 이상의 실제 기업 카탈로그에서 레퍼런스를 추천하고, 확인을 받은 뒤 프로젝트 루트에 **`DESIGN.md`** 를 작성합니다. (`omd:sync`로 관리되는 에이전트 지침 shim도 갱신할 수 있습니다.)

   **그 `DESIGN.md`가 활성화 지점입니다 — 이제 에이전트가 당신의 브랜드를 기억합니다.**

3. 이제 그 위에서 빌드하세요:

   > Design the home screen.

   에이전트가 `DESIGN.md`를 읽고 브랜드에 맞는 UI를 만듭니다. 디자인 시스템을 다시 설명할 일은 없습니다.

Toss가 아니어도 됩니다 — `Stripe-style`, `Linear-clone B2B SaaS`, `Karrot-style marketplace` 전부 가능. 전체 카탈로그: [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems).

## 지원 에이전트

| 에이전트 | 채널 | 설치되는 것 |
|---|---|---|
| **Claude Code** | `--agent claude-code` (기본) | 풀 번들 — `.claude/` 아래 스킬, 18 서브에이전트, hooks, data |
| **Codex** | `--agent codex` | `.agents/skills/` 스킬, `.codex/agents/` 내장 서브에이전트 역할, `.codex/data/` 로컬 카탈로그 |
| **OpenCode** | `--agent opencode` | 프로젝트: `.opencode/{skills,agents,data}/`의 스킬·네이티브 서브에이전트·카탈로그; 전역: `~/.config/opencode/{skills,agents,data}/`의 동일 번들 |
| **Cursor** | `--agent cursor` | 프로젝트 rule `.cursor/rules/omd-design.mdc` + 공용 `.claude/data` 카탈로그; OmD 스킬·서브에이전트·훅은 설치하지 않음 |

기본 설치는 감지된 모든 에이전트를 대상으로 합니다. 단일 채널을 비대화형으로 설치하려면 `npx oh-my-design-cli@latest install-skills --agent <name> --all`을 실행하세요.

### Cursor의 정확한 사용 경로

Cursor는 rules-only 채널이며 `omd:init`, `omd:feel`, OmD 서브에이전트를 실행하지 않습니다. 프로젝트 스펙은 다음 중 하나로 만드세요.

1. [Builder](https://oh-my-design.kr/builder)에서 레퍼런스를 선택·조정한 뒤 `DESIGN.md`를 내려받아 프로젝트 루트에 저장합니다.
2. Cursor에게 `Read .claude/data/references/toss/DESIGN.md and create a root DESIGN.md for this product using confirmed values only. Keep unknown facts absent.`라고 명시적으로 요청합니다.

그 다음 `@DESIGN.md를 읽고 동작은 유지한 채 홈 화면을 다시 디자인해줘`라고 요청하세요. 설치된 rule의 최소 계약은 `DESIGN.md` 우선, 대기 중인 `.omd/preferences.md` 교정 다음, 프레임워크 기본값 마지막입니다.

## 패키지 구성

**20 스킬 · 18 서브에이전트 · 440개 이상의 품질 등급형 레퍼런스 · 활성화 hooks**가 스킬 지원 채널의 전체 번들입니다. Cursor에는 의도적으로 rule과 카탈로그만 설치합니다.

- **스킬** — core flow (`omd:init` / `omd:apply` / `omd:harness` / `omd:sync` / `omd:remember` / `omd:learn` / `omd:taste` — "내 취향 보여줘" 한마디로 루프가 배운 것·대기 중·보류된 것을 한 뷰로), 라이브 캡처 + 에셋 (`omd:reference-capture` / `omd:asset-fetch` / `omd:experiment-gallery`), 글쓰기와 리뷰 (`omd:orchestrator` / `omd:kr-writer` / `omd:locale-adapter` / `omd:humanize` / `omd:designer-review` / `omd:final-qa` / `omd:codex-image`), 인터페이스 품질 (`omd:feel` / `omd:slop-audit`), 그리고 터미널에서 claude.ai/design을 구동하는 단독 스킬 `claude-design`.
- **서브에이전트** — `omd-master` + 17 스페셜리스트 (UX 리서치, UI 생성, 에셋 큐레이션, 문장 다듬기, slop 감사, a11y 감사, 페르소나 테스트, 비평, …).
- **레퍼런스** — 440개 이상의 실제 기업 `DESIGN.md`, 각각 근거와 품질 상태를 명시합니다. 모든 레퍼런스는 `oh-my-design.kr/<id>/design.md`에서 raw markdown으로도 제공되어 에이전트가 직접 fetch할 수 있습니다.
- **Hooks** — UserPromptSubmit / SessionStart / PostToolUse 활성화 — 슬래시 명령 없이 자연어만으로 스킬이 발동합니다.

스킬·에이전트별 상세 레퍼런스: **[oh-my-design.kr/docs/ko](https://oh-my-design.kr/docs/ko)**.

기존 catalog MCP transport는 종료했습니다. 스킬과 에이전트는 로컬 카탈로그 또는 raw `/<id>/design.md` 경로를 직접 사용하며, 과거 구현은 `packages/mcp/`에 archive로만 남겨 둡니다.

## 업그레이드

```bash
npx oh-my-design-cli@latest
```

Idempotent. OmD 마커/해시가 있는 관리 파일은 in-place 갱신하고 사용자가 수정한 파일은 그대로 둡니다 (`skipped-drift`). 먼저 `doctor`가 출력한 범위 한정 복구 명령을 사용하세요. 관리형 Claude 훅이 오래됐으면 다른 unmarked 파일을 덮어쓰지 않는 `--repair-hooks`가 자동으로 포함됩니다. `--force`는 의도적인 로컬 변경을 검토한 뒤에만 사용하세요. 재실행 후 에이전트를 재시작하고 다시 진단합니다.

```bash
npx oh-my-design-cli@latest doctor
```

```bash
npx oh-my-design-cli --version       # 프로젝트에 깔린 버전
npm view oh-my-design-cli version    # npm registry 최신
```

릴리스별 변경 사항 — re-install 이상이 필요한 변경 포함 — 은 [CHANGELOG.md](./CHANGELOG.md)에 있습니다.

## 링크

- **카탈로그** — [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems) (모든 레퍼런스 + 에이전트용 raw `.md` twin)
- **컬렉션** — [oh-my-design.kr/collections](https://oh-my-design.kr/collections) (유스케이스별 큐레이션)
- **문서** — [oh-my-design.kr/docs/ko](https://oh-my-design.kr/docs/ko) (설치 옵션, 스킬, 에이전트, FAQ)
- **체인지로그** — [CHANGELOG.md](CHANGELOG.md) · 0.1.x에서 마이그레이션: [MIGRATION.md](MIGRATION.md)

## 라이선스

MIT — [LICENSE](LICENSE) 참고. 레퍼런스는 각 기업의 자산이며, 교육적 참조 목적으로만 재구성되었습니다.
