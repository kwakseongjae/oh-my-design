<p align="center">
  <img src="logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>58개 대기업 디자인 시스템 기반 DESIGN.md 생성기. AI 호출 없음.</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/AI%20calls-zero-blue?style=flat-square" alt="Zero AI" />
</p>

<p align="center">
  한국어 | <a href="README.md">English</a>
</p>

---

## 이게 뭔가요?

**oh-my-design**은 [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)의 확장입니다.

실제 대기업의 디자인 시스템을 골라 인터랙티브 A/B 위자드로 커스터마이징하고, AI 코딩 에이전트가 바로 사용할 수 있는 `DESIGN.md`를 생성합니다.

- [Google Stitch](https://stitch.withgoogle.com/) DESIGN.md 포맷 준수
- 레퍼런스 데이터 출처: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- **API 키 불필요. AI 호출 없음. 모두 클라이언트 사이드.**

## 빠른 시작

### 웹 빌더

```bash
cd web && npm install && npm run dev
```

### CLI

```bash
# 웹 빌더에서 생성한 config hash 사용
npx github:kwakseongjae/oh-my-design --config=<YOUR_CONFIG_HASH>
```

프로젝트 루트에서 실행 후, AI 어시스턴트에게 `DESIGN.md`를 참조하여 UI를 만들어달라고 요청하세요.

## 동작 방식

```
1. 레퍼런스 선택     58개 기업 디자인 시스템 중 선택
        |
2. 스타일 취향       A/B 선택: 버튼, 테이블, 헤더, 카드
        |
3. 디자인 토큰       색상, radius, 다크 모드
        |
4. 컴포넌트         17개 중 추가/제거
        |
5. 내보내기         DESIGN.md + CLI 커맨드
```

## 58개 지원 레퍼런스

| 카테고리 | 기업 |
|----------|------|
| **AI & LLM** | Claude, Cohere, ElevenLabs, Minimax, Mistral AI, Ollama, OpenCode AI, Replicate, RunwayML, Together AI, VoltAgent, xAI |
| **개발자 도구** | Vercel, Cursor, Expo, Lovable, Raycast, Superhuman, Warp |
| **핀테크** | Stripe, Coinbase, Kraken, Revolut, Wise |
| **생산성** | Notion, Linear, Cal.com, Intercom, Mintlify, Resend, Zapier |
| **디자인 도구** | Figma, Framer, Miro, Webflow, Airtable, Clay |
| **컨슈머 테크** | Apple, Spotify, Uber, Airbnb, Pinterest, NVIDIA, IBM, SpaceX |
| **백엔드 & DevOps** | Supabase, MongoDB, Sentry, PostHog, Hashicorp, ClickHouse, Sanity, Composio |
| **자동차** | Tesla, BMW, Ferrari, Lamborghini, Renault |

## 기여하기

- `references/`에 새 기업 레퍼런스 추가
- 컴포넌트 프리뷰 개선
- 위자드 A/B 선택지 추가

## 감사의 글

레퍼런스 디자인 시스템 데이터는 [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)에서 가져왔습니다. AI 코딩 에이전트를 위한 DESIGN.md 컬렉션을 만들어주신 VoltAgent 팀에 감사드립니다. oh-my-design은 이를 기반으로 인터랙티브 커스터마이징, A/B 스타일 선택, 컴포넌트 선택, CLI 내보내기 기능을 추가했습니다.

## 라이선스

[MIT](LICENSE)
