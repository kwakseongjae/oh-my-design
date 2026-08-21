<p align="center">
  <img src="https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/.github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>코딩 에이전트가 실제로 붙들 수 있는 디자인 시스템.</strong> <code>oh-my-design-cli</code>는 AI UI 작업에 늘 비어 있던 중간 단계를 설치합니다 — 직접 선언하는 철학, 거기서 유도된 토큰과 컴포넌트 계약, AI가 반복하는 실패에 번호를 붙인 게이트, 그리고 자기 시스템을 되읽는 <code>omd book</code>. 스킬 22개, 전문 역할 19개, 프리셋 계약 93개, 품질 등급 레퍼런스 440개 이상. 핵심 워크플로에 API 키도 MCP 서버도 필요 없습니다.
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

## 무엇이 나오는가

세 가지 산출물이고, 전부 저장소 안의 파일입니다.

| | |
|---|---|
| **`DESIGN.md`** | 무엇을 희생했는지까지 적힌 철학, 모든 선택에 ID가 붙은 결정 표, 그리고 자기를 만든 결정을 되가리키는 토큰. 일반 채팅에 붙여넣어도 통할 만큼 이식 가능하고, 디자이너가 "왜 이 값인가"를 찾아낼 만큼 구체적입니다. |
| **디자인 시스템** | 해부(anatomy)를 갖춘 컴포넌트 계약, **해당 없는 상태와 그 이유까지** 적힌 상태 매트릭스, 접근성 계약, 결정이 채워 넣을 토큰 슬롯. 기본기·shadcn/Radix 매핑 프리미티브·화면 장르·레퍼런스 유도 성향, 네 레이어에 걸친 프리셋 계약 93개가 바닥에 깔립니다. |
| **`omd book`** | `npx oh-my-design-cli@latest book` — 로컬 포트에 자기 시스템을 띄웁니다. 토큰 옆에 그 값을 만든 결정, 이유가 달린 상태 매트릭스, 선언한 대비 쌍을 실제로 측정한 값, 프리셋 계보. `--static`은 핸드오프용 단일 HTML을 씁니다. |

v2.0.0에서는 위의 모든 레이어가 **당신이 고칠 수 있는 파일**입니다 — 철학도,
프리셋도, 게이트도, 레퍼런스도. 그리고 다음 빌드는 당신이 거기 써 넣은 것에
스스로를 정당화해야 합니다. 검사할 수 없는 취향은 개선할 수 없으니까요.

전체 안내: **[oh-my-design.kr/cli](https://oh-my-design.kr/cli)**

## 시스템은 어떻게 유도되는가

화면은 첫 단계가 아니라 마지막 단계입니다. 하네스는 에이전트가 먼저 시스템을
만들게 하고, 그다음 그 시스템에 답하게 만듭니다.

```
철학 → 결정 표 → 토큰 → 컴포넌트 계약 → 레이아웃 문법 → 빌드 → 렌더 비평 → DESIGN.md
```

각 단계가 다음 단계를 구속합니다. 원칙은 **무엇을 얻기 위해 무엇을 희생하는지**
반드시 밝혀야 합니다 — 반박할 수 없는 원칙은 장식 문장입니다. 모든 결정에는
ID(`D-<원칙>-<번호>`)와 근거 한 줄이 붙고, 토큰은 그 ID를 되참조합니다. 그래서
근거 없는 토큰 값은 취향 차이가 아니라 **게이트 실패**입니다. 사슬 규격은
[`skills/omd-autopilot/references/derivation-chain.md`](./skills/omd-autopilot/references/derivation-chain.md)에
있습니다.

하네스가 실제로 만들어 낸 `DESIGN.md`에서는 이렇게 보입니다
([`benchmarks/ui-resolve-bench/e2e/onzip/DESIGN.md`](./benchmarks/ui-resolve-bench/e2e/onzip/DESIGN.md),
644줄, 처음부터 끝까지 생성물):

```markdown
### Principles
- Accent is a signal — terracotta on linen, used for the primary action,
  selected chip, and focus ring, never a full-card wash (D-P2-4).

### Semantic tokens
- **color.accent**: `#8B4529` — Terracotta signal. D-P2-4. 6.1:1 on paper.
  Area budget under 5 percent.
```

원칙과 토큰에 **같은 ID**가 나옵니다. 요지는 그것뿐입니다 — 시스템 안 어느 값에서
출발하든 그 값을 만든 문장까지 거슬러 올라갈 수 있다는 것.

컴포넌트 계약은 한 단계 더 갑니다. 어떤 프리셋을 상속했는지 밝히고, 어떤 상태가
**의도적으로 해당 없는지**를 이유와 함께 적습니다.

```markdown
### Component: product-card
**Semantics:** P-CM-01. Price is the heaviest text. Whole-card link, no inner
competing CTA. Painted hover uses four-sided space.4 (P-FN-07).

| State | Applicability | Reason |
|---|---|---|
| disabled | not-applicable | A sold-out item still opens its detail page;
                             stock is a badge, not a disabled card. |
| loading  | not-applicable | Card media uses explicit width and height; the
                             card itself is not a pending control. |
```

`P-CM-01`과 `P-FN-07`은 프리셋 카탈로그의 항목입니다. 즉 이 빌드는 카드를 0에서
지어내지 않았습니다. **shadcn/ui가 구조를 주면, 프리셋은 어떤 값이 라이브러리
기본값이 아니라 당신의 결정 표에서 와야 하는지를 말합니다.**

이걸 정직하게 유지하려고 존재하는 게이트가 둘 있습니다 — `GS7`은 결정 참조가 없는
토큰을 떨어뜨리고, `GS8`은 부합 프리셋이 있는데도 0에서 만든 컴포넌트를
떨어뜨립니다. 나머지 54개 검사와 함께
[`slop-gates.md`](./skills/omd-autopilot/references/slop-gates.md)에 있습니다.

### 직접 확인하기

위의 어느 것도 CLI를 설치해야 확인할 수 있는 게 아닙니다. 전부 이 저장소의 파일입니다.

| 볼 것 | 위치 |
|---|---|
| 이식 가능한 계약, 7개 앵커와 준수 레벨 | [`spec/design-md-core-v2.md`](./spec/design-md-core-v2.md) |
| graph·provenance·coverage 기계 판독 스키마 | [`spec/schema/`](./spec/schema/) |
| 에이전트가 따르는 유도 사슬 | [`skills/omd-autopilot/references/derivation-chain.md`](./skills/omd-autopilot/references/derivation-chain.md) |
| 슬롭 게이트 54개 + 시스템 충실도 게이트 8개 | [`skills/omd-autopilot/references/slop-gates.md`](./skills/omd-autopilot/references/slop-gates.md) |
| 컴포넌트 장인 규범 45개(기하·상태·광학 정렬) | [`skills/omd-autopilot/references/component-craft.md`](./skills/omd-autopilot/references/component-craft.md) |
| 네 레이어 프리셋 계약 93개 | [`skills/omd-autopilot/references/presets/`](./skills/omd-autopilot/references/presets/) |
| 하네스가 생성한 완결된 시스템 3건 | [`benchmarks/ui-resolve-bench/e2e/`](./benchmarks/ui-resolve-bench/e2e/) |
| `omd book` — 시스템을 되읽는 방식 | [`src/cli/book.ts`](./src/cli/book.ts) |

## oh-my-design이란?

**oh-my-design (OmD)** 은 지금 쓰는 AI 코딩 도구에 로컬 디자인 워크플로를 설치합니다. 새 `DESIGN.md Core v2`는 상단 YAML이나 도구·모델 표식 없이 읽히는 7영역의 vendor-neutral 계약입니다. Claude Design, Open Design, 일반 채팅에는 파일만 전달해도 되고, 선택적 `.omd/system` Graph는 검증된 프로젝트에서만 machine authority가 됩니다. Google DESIGN.md와 가져오기·내보내기 호환을 목표로 하지만 같은 규격이나 Google 공식 규격이라고 주장하지 않습니다. 패키지에는 품질 등급과 근거 상태를 표시한 기업 레퍼런스 440개 이상도 들어 있습니다. **핵심 설치와 로컬 워크플로에는 별도 API 키·데몬·MCP 서버가 필요 없습니다.**

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

설치부터 눈으로 확인할 결과까지 가장 짧은 경로입니다.

1. 설치(위) 후 **에이전트 재시작** (Cmd+Q, 재실행) — 새 스킬이 로드됩니다.

2. 프로젝트에서 첫 프롬프트를 입력하세요 — 그대로 복사해도 됩니다:

   > 가족 식단 기록 앱의 DESIGN.md를 만들어줘. Toss를 레퍼런스로 쓰되 확인된 값만 가져오고, 제품 고유 정보는 결정하기 전에 물어봐.

   스킬이 설치된 에이전트가 **`omd:init`** 을 실행합니다. 품질 등급을
   매긴 기업 카탈로그 440개 이상에서 레퍼런스를 추천하고, 정확한 Graph와
   `DESIGN.md` 미리보기를 준비합니다. 프로젝트 소유자 또는 소유자 정책에
   사전 등록된 외부 권한 컨트롤러가 그 바이트를 검토·승인하고, 컴파일된
   hash-bound 패키지도 체크포인트에서 확인하면 OmD가 프로젝트에 원자적으로
   채택합니다.
   생성·구현 에이전트는 자기 제안을 승인할 수 없습니다. (`omd:sync`로
   관리되는 에이전트 지침 shim도 갱신할 수 있습니다.)

   **채택된 파일과 결박된 sidecar가 다음 작업으로 넘겨주는 기준입니다.**
   저장소에 남기 때문에 이후 세션도 같은 결정을 다시 읽을 수 있습니다.
   여기서 “원샷”은 한 번의 최초 브리프와 별도 하네스 설정 0회를 뜻하며,
   권한 전환을 조용히 생략한다는 뜻은 아닙니다. 정확한 미리보기와 패키지
   채택은 결과를 바꾸는 권한 체크포인트로 남습니다.

3. 이제 그 위에서 빌드하세요:

   > DESIGN.md를 읽고 홈 화면을 디자인해줘. 기존 동작과 로고는 유지해.

   에이전트가 `DESIGN.md`에 기록된 결정을 읽고 작업합니다. 결과는 프로젝트 안에서 바로 확인할 수 있습니다.

Toss가 아니어도 됩니다 — `Stripe-style`, `Linear-clone B2B SaaS`, `Karrot-style marketplace` 전부 가능. 전체 카탈로그: [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems).

## 지원 에이전트

| 에이전트 | 채널 | 설치되는 것 |
|---|---|---|
| **Claude Code** | `--agent claude-code` (기본) | 풀 번들 — `.claude/` 아래 스킬, 19 서브에이전트, hooks, data |
| **Codex** | `--agent codex` | `.agents/skills/` 스킬, `.codex/agents/` 내장 서브에이전트 역할, `.codex/data/` 로컬 카탈로그 |
| **OpenCode** | `--agent opencode` | 프로젝트: `.opencode/{skills,agents,data}/`의 스킬·네이티브 서브에이전트·카탈로그; 전역: `~/.config/opencode/{skills,agents,data}/`의 동일 번들 |
| **Cursor** | `--agent cursor` | `.cursor/skills/`의 호환 Agent Skills 21개 + 작은 `.cursor/rules/omd-design.mdc` bootstrap + 공용 `.claude/data` 카탈로그; 별도 서브에이전트 정의·훅은 설치하지 않음 |

기본 설치는 감지된 모든 에이전트를 대상으로 합니다. 단일 채널을 비대화형으로 설치하려면 `npx oh-my-design-cli@latest install-skills --agent <name> --all`을 실행하세요.

### Cursor의 정확한 사용 경로

Cursor 2.4+는 `.cursor/skills/`에서 호환 OmD Agent Skills 21개를 읽습니다. 설치 후 Cursor를 재시작하고 `토스 스타일로 가족 식단 공유 앱 디자인 시스템을 잡아줘`라고 자연스럽게 요청하거나 `/omd-init`을 직접 호출하세요. 작은 상시 rule은 pending 사용자 교정, 채택된 Bound System/standalone DESIGN.md, 프레임워크 기본값 순서와 unknown은 absent라는 계약을 유지합니다.

구형 Cursor에서는 `--cursor-rule-only`로 기존 rule + 카탈로그 호환 모드를 설치할 수 있습니다. OmD의 별도 전문 서브에이전트 정의와 hooks는 Cursor에 설치하지 않습니다.

## 패키지 구성

**22 스킬 · 19 서브에이전트 · 440개 이상의 품질 등급형 레퍼런스 · 활성화 hooks**가 전체 번들입니다. Cursor에는 이식 가능한 스킬 21개가 설치되며 `claude-design`, 별도 서브에이전트 정의, 활성화 hooks는 채널별로 제한됩니다.

- **스킬** — core flow (`omd:autopilot` / `omd:init` / `omd:apply` / `omd:harness` / `omd:sync` / `omd:update` / `omd:remember` / `omd:learn` / `omd:taste` — "내 취향 보여줘" 한마디로 루프가 배운 것·대기 중·보류된 것을 한 뷰로), 라이브 캡처 + 에셋 (`omd:reference-capture` / `omd:asset-fetch` / `omd:experiment-gallery`), 글쓰기와 리뷰 (`omd:orchestrator` / `omd:kr-writer` / `omd:locale-adapter` / `omd:humanize` / `omd:designer-review` / `omd:final-qa` / `omd:codex-image`), 인터페이스 품질 (`omd:feel` / `omd:slop-audit`), 그리고 터미널에서 claude.ai/design을 구동하는 단독 스킬 `claude-design`.
- **서브에이전트** — `omd-master` + 18 스페셜리스트 (UX 리서치, UI 생성, 에셋 큐레이션, 문장 다듬기, slop 감사, a11y 감사, 페르소나 테스트, 비평, …).
- **레퍼런스** — 기업 `DESIGN.md` 440개 이상에 근거와 품질 상태를 명시합니다. 모든 레퍼런스는 `oh-my-design.kr/<id>/design.md`에서 raw markdown으로도 제공되어 에이전트가 직접 가져올 수 있습니다.
- **Hooks** — UserPromptSubmit / SessionStart / PostToolUse 활성화 — 슬래시 명령 없이 자연어만으로 스킬이 발동합니다.

스킬·에이전트별 상세 레퍼런스: **[oh-my-design.kr/docs/ko](https://oh-my-design.kr/docs/ko)**.

기존 catalog MCP transport는 종료했습니다. 스킬과 에이전트는 로컬 카탈로그 또는 raw `/<id>/design.md` 경로를 직접 사용하며, 과거 구현은 `packages/mcp/`에 archive로만 남겨 둡니다.

## 업그레이드

```bash
npx oh-my-design-cli@latest
```

반복 실행해도 안전합니다. OmD 마커나 해시가 있는 관리 파일은 제자리에서 갱신하고, 사용자가 수정한 파일은 그대로 둡니다 (`skipped-drift`). 먼저 `doctor`가 출력한 범위 한정 복구 명령을 사용하세요. 관리형 Claude 훅이 오래됐으면 다른 미표시 파일을 덮어쓰지 않는 `--repair-hooks`가 자동으로 포함됩니다. `--force`는 의도적인 로컬 변경을 검토한 뒤에만 사용하세요. 다시 설치했다면 에이전트를 재시작하고 한 번 더 진단합니다.

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
