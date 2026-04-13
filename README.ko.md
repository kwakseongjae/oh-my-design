<p align="center">
  <img src="web/public/logo.png" height="80" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>58개 대기업 디자인 시스템 기반 DESIGN.md 생성기. AI 호출 없음.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design"><img src="https://img.shields.io/npm/v/oh-my-design?style=flat-square&color=7c5cfc" alt="npm version" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
</p>

<p align="center">
  한국어 | <a href="README.md">English</a>
</p>

---

## 이게 뭔가요?

**oh-my-design**은 실제 대기업의 디자인 시스템(Stripe, Vercel, Notion, Linear 등 58개)을 골라서, 인터랙티브 위자드로 커스터마이징하고, 프로덕션용 `DESIGN.md` + shadcn/ui CSS 변수를 내보내는 도구입니다.

내보낸 `DESIGN.md`는 [Google Stitch](https://stitch.withgoogle.com/) 포맷을 따르므로, AI 코딩 에이전트(Claude, Cursor, v0 등)가 읽고 선택한 디자인 언어에 맞는 UI를 생성할 수 있습니다.

**API 키 필요 없음. AI 호출 없음. 모두 클라이언트 사이드.**

## 주요 기능

- **58개 실제 레퍼런스** -- Stripe, Vercel, Notion, Linear, Figma, Apple, Spotify, Tesla 등의 실제 디자인 시스템 문서
- **인터랙티브 위자드** -- 버튼, 테이블, 헤더, 카드에 대한 A/B 스타일 선택
- **토큰 완전 제어** -- 색상, 타이포그래피, 폰트 굵기, 보더 radius, 다크 모드 커스터마이징
- **컴포넌트 갤러리** -- 17개 컴포넌트 라이브 프리뷰 (Button, Table, Card, Calendar, Dialog, Toast, Accordion 등)
- **shadcn/ui 통합** -- `globals.css`에 바로 붙여넣을 수 있는 CSS 변수 내보내기
- **Config Hash CLI** -- 설정을 해시로 저장, `npx oh-my-design --config=HASH`로 어디서든 재생성
- **AI 호출 0, 비용 0** -- 모든 생성은 결정적이고 클라이언트 사이드
- **이모지 금지** -- SVG 아이콘 라이브러리 가이드라인과 함께 이모지 사용 금지 정책

## 빠른 시작

### 웹 빌더 (권장)

```bash
cd web && npm install && npm run dev
```

`http://localhost:3333`을 열고 빌딩을 시작하세요.

### CLI

```bash
# 인터랙티브 모드
npx oh-my-design

# 웹 빌더에서 생성한 config hash 사용
npx oh-my-design --config=dmVyY2VsfCM2MzY2ZjF8SW50ZXJ8NTAwfDhweHwx
```

### 프로그래매틱 API

```typescript
import { loadReference, applyOverrides } from 'oh-my-design';

const ref = loadReference('stripe');
const { designMd, shadcnCss } = applyOverrides(ref, {
  primaryColor: '#6366f1',
  darkMode: true,
}, 'customized');
```

## 동작 방식

```
1. 레퍼런스 선택     Stripe, Vercel, Notion... (58개 기업)
        |
2. 스타일 취향       A/B 선택: 샤프 vs 라운드, 미니멀 vs 보더
        |
3. 디자인 토큰       색상, 폰트, 굵기, radius, 다크 모드
        |
4. 컴포넌트         17개 컴포넌트 타입에서 추가/제거
        |
5. 내보내기         DESIGN.md + shadcn CSS + JSON 토큰 + CLI 커맨드
```

## 사용 가능한 레퍼런스

| 카테고리 | 기업 |
|----------|------|
| **AI & LLM** | Claude, Cohere, ElevenLabs, Minimax, Mistral AI, Ollama, OpenCode AI, Replicate, RunwayML, Together AI, VoltAgent, xAI |
| **핀테크** | Stripe, Coinbase, Revolut, Wise, Kraken |
| **개발자 도구** | Vercel, Cursor, Warp, Expo, Lovable, Raycast, Superhuman |
| **생산성** | Notion, Linear, Cal.com, Zapier, Intercom, Resend, Mintlify |
| **디자인 도구** | Figma, Framer, Miro, Webflow, Airtable, Clay |
| **컨슈머 테크** | Apple, Spotify, Uber, Airbnb, Pinterest, NVIDIA, IBM, SpaceX |
| **백엔드 & DevOps** | Supabase, MongoDB, Sentry, PostHog, Hashicorp, ClickHouse, Sanity, Composio |
| **자동차** | Tesla, BMW, Ferrari, Lamborghini, Renault |

## 기여하기

기여를 환영합니다!

- `references/`에 새 기업 레퍼런스 추가
- 웹 빌더의 컴포넌트 프리뷰 개선
- 위자드에 새 A/B 스타일 선택지 추가
- 버그 수정 및 다크 모드 지원 개선

## 라이선스

[MIT](LICENSE)
