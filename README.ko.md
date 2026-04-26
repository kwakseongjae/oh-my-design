<p align="center">
  <img src="logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>67개 기업 디자인 시스템 기반 DESIGN.md 생성기.</strong> 인터랙티브 위자드. AI 호출 없음.
</p>

<p align="center">
  <strong>이제 OmD v0.1 Philosophy Layer까지.</strong> Voice · Narrative · Principles · Personas · States · Motion — Claude Code가 AI의 디폴트가 아니라 당신의 브랜드에 맞춰 출력합니다.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/AI%20calls-zero-blue?style=flat-square" alt="Zero AI" />
  <img src="https://img.shields.io/badge/references-67-7c5cfc?style=flat-square" alt="67 References" />
</p>

<p align="center">
  한국어 | <a href="README.md">English</a> | <a href="README.ja.md">日本語</a> | <a href="README.zh-TW.md">繁體中文</a>
</p>

---

## oh-my-design란?

**oh-my-design (OmD)** 은 AI 코딩 에이전트에게 "브랜드로서의" UI를 만들어낼 만큼의 컨텍스트를 제공하는 오픈 스펙입니다.

[Google이 제안한](https://stitch.withgoogle.com/docs/design-md/overview/) `DESIGN.md`는 본질적으로 **토큰 문서**입니다 — 색상, 타이포, 컴포넌트. 필요하지만 충분하진 않죠. 토큰만으로 UI를 만들면 형태는 그럴싸하지만 "누구의 브랜드"도 아닙니다 — Inter-on-white, 보라색 그라디언트, 의미 없는 이모지 같은 AI의 디폴트로 수렴합니다. OmD v0.1은 그 위에 **브랜드 철학 레이어**를 얹습니다: **Voice · Narrative · Principles · Personas · States · Motion**. OmD 포맷의 `DESIGN.md`를 프로젝트 루트에 두면 에이전트의 결과물이 제네릭하지 않고 "당신의 것"이 됩니다.

세 가지 구성:

1. **[스펙](spec/omd-v0.1.md)** — 버전 관리되는 Google Stitch 확장, MIT 라이선스.
2. **[Claude Code 스킬](.claude/skills/omd/SKILL.md)** — 스펙을 하드 제약으로 자동 적용.
3. **[67개 레퍼런스](references/)** — 실제 기업의 `DESIGN.md` 파일들을 포크하고, 빌더로 커스터마이징해 바로 씁니다.

**API 키 불필요. AI 호출 없음. 모두 클라이언트 사이드.**

## Ecosystem v1 — 에이전트 통합 (신규)

`oh-my-design`이 **코딩 에이전트 생태계**를 함께 ship합니다. `DESIGN.md`를 한 번 만들고 끝이 아니라, Claude Code · Codex · OpenCode · Cursor가 작업 중에 **읽고 따르도록** 만드는 것.

**설치 없이 (권장):**

```bash
cd my-project

# 1. 한 번만: 에이전트 스킬 설치 (.claude/skills, .codex/skills, .opencode/agents)
npx oh-my-design install-skills

# 2. 레퍼런스 + 프로젝트 description으로 DESIGN.md 부트스트랩
#    (Claude Code/Codex/OpenCode 안에서 omd:init 스킬이 이 단계를 주도)
npx oh-my-design init recommend "warm approachable B2C marketplace"
npx oh-my-design init prepare --ref airbnb --description "warm approachable B2C marketplace"

# 3. 4개 에이전트가 DESIGN.md를 읽도록 shim 파일 생성/갱신
npx oh-my-design sync

# 4. 작업 중 에이전트가 디자인 선택을 잘못하면 즉시 기록
npx oh-my-design remember "CTAs are never uppercase"

# 5. 누적된 preference를 DESIGN.md에 일괄 반영
npx oh-my-design learn                            # pending 보기
npx oh-my-design learn --mark-applied <id>        # 반영 완료 표시
```

**또는 글로벌 설치 (짧은 커맨드):**

```bash
npm install -g oh-my-design
# 이제 'oh-my-design' 또는 단축 별칭 'omd' 사용 가능
omd install-skills
omd sync
omd remember "..."
```

> **상태**: `v0.2.0`은 첫 ecosystem 릴리스. CLI 표면(sync / remember / learn / init prepare / install-skills)은 안정 + 단위 테스트 완료. 에이전트 측 Hybrid variation 품질은 호스트 LLM이 `omd:init` 스킬 프롬프트를 얼마나 잘 따르는지에 좌우됩니다 — 결과가 만족스럽지 않으면 archive와 함께 이슈로 보고 부탁드려요.

### 설치되는 파일

| 파일 | 관리 주체 | 용도 |
|---|---|---|
| `DESIGN.md` | 사용자 | 단일 진실 — 브랜드 & UI 명세 |
| `CLAUDE.md` | `omd sync` | Claude Code 포인터 (`@./DESIGN.md`) |
| `AGENTS.md` | `omd sync` | Codex CLI **+** OpenCode 공용 포인터 (한 파일이 둘 커버) |
| `.cursor/rules/omd-design.mdc` | `omd sync` | Cursor가 UI 파일 편집 시 DESIGN.md 자동 attach |
| `.claude/skills/omd-*/SKILL.md` | `omd install-skills` | Claude Code 스킬 5종 |
| `.codex/skills/omd-*/SKILL.md` | `omd install-skills` | Codex 스킬 5종 |
| `.opencode/agents/omd-*.md` | `omd install-skills` | OpenCode 에이전트 5종 |
| `.omd/preferences.md` | `omd remember` | append-only 디자인 교정 로그 |
| `.omd/sync.lock.json` | `omd sync` | drift 감지 상태 |

shim과 스킬 파일은 `<!-- omd:start -->` 마커 블록을 사용해서, 마커 외부의 사용자 편집은 `omd sync` 재실행에도 보존됩니다.

### 5개 스킬

| 스킬 | 트리거 | 동작 |
|---|---|---|
| `omd:init` | "DESIGN.md 만들어줘" / "브랜드 세팅" | 레퍼런스 추천 → 프로젝트 description 수집 → 레퍼런스 톤·매너를 **preserve**하면서 deltas만 반영한 Hybrid variation 생성 → DESIGN.md + shim 작성 |
| `omd:apply` | UI / 스타일링 / 마이크로카피 / 모션 작업 | DESIGN.md + pending preference를 authoritative context로 주입, 사용자가 교정하면 **자동으로** `omd remember` 호출 |
| `omd:sync` | "shim drift" / "AGENTS.md 동기화" | 적절한 플래그로 `omd sync` 실행 |
| `omd:remember` | "기억해 둬" / "우리는 ~안 해" | 구조화된 entry를 `.omd/preferences.md`에 append |
| `omd:learn` | "preferences 정리해서 DESIGN.md에 반영" | scope별로 그룹핑 → coherent edit 제안 → status flip |

소스: [`skills/`](skills/) 디렉토리. `omd install-skills`가 프로젝트의 에이전트 디렉토리로 복사.

### CLI 명령어

```
omd init recommend <description>   # 태그+stem 매칭 레퍼런스 추천 (top-5)
omd init prepare --ref <id> --description <text>
                                   # .omd/init-context.json + delta_set 준비
omd install-skills [--agent ...]   # skills/*를 .claude /.codex /.opencode로 복사
omd reference list                 # 번들된 레퍼런스 id 목록
omd reference show <id>            # 레퍼런스 DESIGN.md를 stdout으로 출력
omd sync [--force | --check]       # shim 파일 작성 또는 감사
omd remember <note> [--scope ...]  # preference entry append
omd learn                          # pending 목록
omd learn --mark-applied <id>      # DESIGN.md 반영 후 상태 변경
omd learn --mark-rejected <id> --reason <text>
```

`omd sync --check`는 CI 친화적: shim drift 또는 DESIGN.md 변경 + 미동기화 시 exit 1.

### 결정적 vs 에이전트 주도

| 레이어 | 담당 | 이유 |
|---|---|---|
| 레퍼런스 추천 | CLI (tag + stem 매칭 + category-prior + MMR 다양화) | 빠름, API 키 불필요. category-prior가 도메인 정렬된 ref 가산 (e.g. "marketplace / family / subscription" → Consumer). |
| Token delta 계산 | CLI (41 키워드 + ~75 synonym controlled vocabulary, additive 합성 + clamp) | 결정적; 동일 description → 동일 delta_set |
| Color hex shift baseline | CLI (`apply-delta-stub`) — **color-only** | 빠른 결정적 프리뷰. radius / letter-spacing / spacing 은 shift 안 함 — 에이전트 영역. |
| 전체 토큰 적용 + 섹션 구조 보존 + voice 재작성 | **에이전트** (Claude Code / Codex / OpenCode) + `omd:init` 스킬 | Stub은 color-only; 전체 delta 적용은 구조화된 Markdown 편집 필요. 스킬 프롬프트가 voice fingerprint preservation 강제. |
| §11–13 (Brand Narrative / Principles / Personas) | **에이전트 + 사용자 입력** (Phase 4.5) | 레퍼런스 content가 프로젝트별 사실 정보 (창립년도, verbatim tagline, 실제 personas). 스킬이 Phase 4.5에서 사실 수집하거나 `[FILL IN: …]` placeholder + `omd:limitation` 코멘트 — 절대 fabricate 안 함. |

### 상태

이 생태계는 **v0.2.0** — 첫 agent-integration 릴리스입니다. CLI 표면 (sync / remember / learn / init prepare / install-skills)은 안정 + 단위 테스트 완료 (505 테스트). 에이전트 측 Hybrid variation 품질은 호스트 LLM이 `omd:init` 스킬 프롬프트를 얼마나 잘 따르는지에 좌우됩니다 — 검증 맵은 [`test/scenarios/WORKFLOWS.md`](test/scenarios/WORKFLOWS.md) 참고. 실 세션 결과 환영 — `.omd/init-context.json`과 결과 `DESIGN.md`를 첨부해서 이슈로 보고 부탁드립니다.

## OmD v0.1 Philosophy Layer

Google Stitch의 9개 섹션 위에 OmD가 더하는 6개:

| 섹션 | 역할 |
|---|---|
| **10. Voice & Tone** | 마이크로카피 제약 — 버튼 문구, 에러 메시지, 온보딩 |
| **11. Brand Narrative** | "왜" — 브랜드가 거부하는 것, 바꾸려는 카테고리 |
| **12. Principles** | 토큰으로 못 푸는 케이스를 결정짓는 5~10개의 1차 원리 |
| **13. Personas** | 2~4명의 구체 사용자. 에이전트가 UI를 실제 사용 맥락에 grounded 하게 만들기 위함 |
| **14. States** | Empty / loading / error / skeleton 패턴 — "No data found" 같은 제네릭 상태 방지 |
| **15. Motion & Easing** | Named duration + easing 토큰 — Stitch 9개 섹션이 놓치는 차원 |

**현재 10개 레퍼런스가 완전한 Philosophy Layer와 함께 제공됩니다:**
Toss · Claude · Line · Stripe · Linear · Vercel · Notion · Airbnb · Apple · Figma — 각각 voice, narrative, principles, personas, states, motion까지 공개 출처 기반으로 작성됐습니다.

전체 OmD v0.1 예시는 [references/toss/DESIGN.md](references/toss/DESIGN.md) 참고.

## 주요 구성

- **빌더** — 레퍼런스 선택 후 색상 / radius / 다크 모드를 조정하고, 컴포넌트를 고른 뒤 Export. **Philosophy** 필터로 완전한 브랜드 철학을 담은 10개만 볼 수 있어요.
- **디자인 시스템 디렉토리** ([oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)) — 67개 레퍼런스 중 34개는 공식 디자인 시스템 또는 브랜드 가이드라인 페이지가 있으며, 디렉토리에서 라이브 썸네일과 함께 바로 이동할 수 있습니다.
- **Personal Curation** ([oh-my-design.kr/curation](https://oh-my-design.kr/curation)) — MBTI 스타일의 짧은 퀴즈로 당신의 디자인 성향을 67개 레퍼런스 중 하나와 매칭해, 해당 레퍼런스가 미리 선택된 빌더로 바로 이동시켜 줍니다.

## 67개 지원 레퍼런스

| 카테고리 | 기업 |
|----------|------|
| **AI & LLM** | Claude, Cohere, ElevenLabs, Minimax, Mistral AI, Ollama, OpenCode AI, Replicate, RunwayML, Together AI, VoltAgent, xAI |
| **디자인 도구** | Airtable, Clay, Figma, Framer, Miro, Webflow |
| **개발자 도구** | Cursor, Expo, Lovable, Raycast, Superhuman, Vercel, Warp |
| **생산성** | Cal.com, freee, Intercom, Linear, Mintlify, Notion, Resend, Zapier |
| **컨슈머 테크** | Airbnb, Apple, Baemin, Dcard, IBM, Kakao, Karrot, LINE, Mercari, NVIDIA, Pinkoi, Pinterest, SpaceX, Spotify, Uber |
| **핀테크** | Coinbase, Kraken, Revolut, Stripe, Toss, Wise |
| **백엔드 & DevOps** | ClickHouse, Composio, Hashicorp, MongoDB, PostHog, Sanity, Sentry, Supabase |
| **자동차** | BMW, Ferrari, Lamborghini, Renault, Tesla |
| **마케팅** | Semrush |

> 빌더의 **국가 필터**로 지역별 탐색이 가능합니다 (한국, 대만, 일본, 프랑스, 이탈리아, 독일, 영국, 미국).

## 내보내는 DESIGN.md

[Google Stitch DESIGN.md 포맷](https://stitch.withgoogle.com/docs/design-md/overview/) 기반 — 섹션 1~9 + OmD v0.1 Philosophy Layer(섹션 10~15, 선택):

**베이스 (Google Stitch)**
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

**OmD v0.1 Philosophy Layer (추가)**

10. Voice & Tone
11. Brand Narrative
12. Principles
13. Personas
14. States
15. Motion & Easing

그 외: Style Preferences, Included Components, Iconography & SVG Guidelines, Document Policies.

## 프로젝트 구조

```
oh-my-design/
  spec/              OmD v0.1 스펙 (정본)
  .claude/skills/omd/ Claude Code 스킬 번들
  references/        67개 기업 DESIGN.md 파일
  src/               CLI 코어 (TypeScript)
  web/               Next.js 웹 빌더
    src/app/         Landing + Builder + Directory 페이지
    src/components/  Wizard, Preview, Export
  test/              CLI Vitest 스위트 (unit/, integration/, scripts/)
```

웹 테스트는 소스 파일 옆에 함께 위치합니다 (`web/src/**/*.test.ts`).

## 테스트

두 개의 스위트가 있고, 둘 다 Vitest로 돌아가며 둘 다 통과해야 합니다:

```bash
npm test                # CLI: 370 테스트 — unit + 레퍼런스 전체 smoke
cd web && npm test      # Web: 88 테스트 — generate-css, config-hash, survey
```

통합 스위트(`test/integration/all-references.test.ts`)는 모든 `references/<id>/DESIGN.md`에 대해 전체 생성 파이프라인을 실행합니다. 망가진 레퍼런스가 있으면 PR 리뷰에서 어떤 ref의 어떤 체크가 실패했는지 한눈에 보입니다. 폴더 컨벤션과 모듈별 커버리지 맵은 [test/README.md](test/README.md)를 참고하세요.

## 감사의 글

- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — 이 프로젝트의 출발점이 된 업스트림 DESIGN.md 컬렉션.
- [kzhrknt/awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) — 일본 시장 디자인 시스템 레퍼런스.

oh-my-design은 위 컬렉션을 기반으로 인터랙티브 커스터마이징 위자드, A/B 스타일 선택, 컴포넌트 선택, 디자인 시스템 디렉토리, CLI 내보내기 파이프라인을 더했습니다.

## 라이선스

[MIT](LICENSE)
