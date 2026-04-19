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

전체 OmD v0.1 예시는 [references/toss/DESIGN.md](references/toss/DESIGN.md) 참고.

## 주요 구성

- **빌더** — 레퍼런스 선택 후 색상 / radius / 다크 모드를 조정하고, 컴포넌트를 고른 뒤 Export.
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
  test/              Vitest 테스트
```

## 감사의 글

- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — 이 프로젝트의 출발점이 된 업스트림 DESIGN.md 컬렉션.
- [kzhrknt/awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) — 일본 시장 디자인 시스템 레퍼런스.

oh-my-design은 위 컬렉션을 기반으로 인터랙티브 커스터마이징 위자드, A/B 스타일 선택, 컴포넌트 선택, 디자인 시스템 디렉토리, CLI 내보내기 파이프라인을 더했습니다.

## 라이선스

[MIT](LICENSE)
