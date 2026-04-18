<p align="center">
  <img src="logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>67개 기업 디자인 시스템 기반 DESIGN.md 생성기. 인터랙티브 위자드 + shadcn/ui CSS 내보내기. AI 호출 없음.</strong>
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

**oh-my-design**은 [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)의 확장입니다.

실제 대기업의 디자인 시스템을 골라 인터랙티브 A/B 위자드로 커스터마이징하고, AI 코딩 에이전트가 바로 사용할 수 있는 `DESIGN.md`를 생성합니다.

- [Google Stitch](https://stitch.withgoogle.com/) DESIGN.md 포맷 준수
- **API 키 불필요. AI 호출 없음. 모두 클라이언트 사이드.**

## 주요 구성

- **빌더** — 레퍼런스 선택 후 색상 / radius / 다크 모드를 조정하고, 컴포넌트를 고른 뒤 Export.
- **디자인 시스템 디렉토리** ([oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)) — 67개 레퍼런스 중 34개는 공식 디자인 시스템 또는 브랜드 가이드라인 페이지가 있으며, 디렉토리에서 라이브 썸네일과 함께 바로 이동할 수 있습니다.
- **Browse 드롭다운** — 홈 네비게이션에서 디렉토리로 한 번에 진입.

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

[Google Stitch DESIGN.md 포맷](https://stitch.withgoogle.com/docs/design-md/overview/)을 따릅니다:

1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide
10. shadcn/ui Theme (CSS 변수)

그 외: Style Preferences, Included Components, Iconography & SVG Guidelines, Document Policies (no-emoji 규칙).

## 프로젝트 구조

```
oh-my-design/
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
