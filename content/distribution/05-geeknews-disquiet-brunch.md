# Korean distribution channels

3 channels prioritized by traffic potential + audience fit.

---

## 1. GeekNews HADA (news.hada.io) — KR tech aggregator

**Type**: HN-style upvoting community. Tech/startup focus. 20-30k MAU. Submissions need "Show GN" prefix for community-contributed projects.

**Title format**:
```
Show GN: oh-my-design-mcp - 한국·해외 107개 브랜드 디자인 시스템을 AI 에이전트에 주입
```

**Body**:
```markdown
DESIGN.md (구글 Stitch가 제안한 디자인 시스템 평문 포맷)를 AI 코딩 에이전트 (Claude Code, Cursor, Cline 등)에 컨텍스트로 주입하는 MCP 서버를 만들었습니다.

## 핵심 기능

- **107개 브랜드**: Stripe, Toss, Linear, Karrot, Channel Talk, Apple, Notion 등. 한국 브랜드 44개 (Toss, Karrot, Banksalad, KakaoBank, Channel Talk 등 SaaS 위주).
- **3개 MCP tool**:
  - `list_references` — 국가/카테고리별 필터링
  - `get_design_md` — 특정 브랜드 풀 스펙 fetch (토큰/컴포넌트/Voice/Motion 15섹션)
  - `search_by_vibe` — "차분한 B2B 핀테크" 같은 자연어 → 매칭 브랜드 top-5
- **107 resource**: `design://toss`, `design://karrot` 식으로 어떤 브랜드든 `@` 멘션으로 attach

## 차별점

| | oh-my-design-mcp | Refero MCP |
|---|---|---|
| 가격 | 무료 + 오픈소스 (MIT) | 유료 구독 |
| 데이터 | 107 브랜드 SPEC (토큰+철학+모션) | 130k+ 스크린 캡쳐 |
| 한국 브랜드 | 44개 (40%+) | US 위주 |
| 런타임 네트워크 | 없음 (npm 패키지에 번들) | 필요 |

## 설치 (Claude Desktop 기준)

`~/Library/Application Support/Claude/claude_desktop_config.json`:

\`\`\`json
{
  "mcpServers": {
    "oh-my-design": {
      "command": "npx",
      "args": ["-y", "oh-my-design-mcp"]
    }
  }
}
\`\`\`

재시작 후 "@design:toss 스타일로 송금 화면 만들어줘" 같은 프롬프트가 작동합니다.

## 왜 만들었나

GPT/Claude가 만드는 UI가 다 비슷비슷한 이유는 **디자인 컨텍스트가 없기 때문**입니다. 모델은 코드는 잘 짜지만 "이 브랜드가 왜 #3182f6를 썼는지, 왜 16px 라디우스가 아니라 2px인지" 같은 디자인 결정의 *왜* 를 모릅니다.

Refero가 비슷한 문제를 유료 SaaS로 풀고 있어서, 무료 오픈소스 대안을 만들었습니다. 한국 SaaS 디자인 (Toss, Karrot, Banksalad, Channel Talk Bezier 등) 깊이 있게 분석한 카탈로그가 있다는 게 차별점입니다.

## 링크

- GitHub: https://github.com/kwakseongjae/oh-my-design
- 카탈로그: https://oh-my-design.kr/design-systems
- 한국 브랜드 시리즈 1편 (Toss): https://oh-my-design.kr/blog/toss

피드백 환영합니다 — 특히 다음 batch (Q3)에 어떤 브랜드 추가하면 좋을지.
```

**Posting time**: 평일 오전 9-10시 (출근길 피크). 화·수가 가장 좋음.

---

## 2. Disquiet — KR 메이커 커뮤니티

**Type**: 메이커/창업가 커뮤니티. 토스/카카오/쿠팡 PM/디자이너 다수 활동. Post 카테고리: "프로덕트" or "아티클".

**제목**:
```
한국 SaaS 디자인 시스템 107개를 AI 에이전트에 주입하는 MCP 서버 만들었어요
```

**내용** (HADA보다 캐주얼하게, 1인칭 maker 톤):
```
안녕하세요, 4개월 전부터 oh-my-design 사이드 프로젝트를 만들어 왔습니다. 처음엔 구글 Stitch가 제안한 DESIGN.md 포맷을 활용해서 AI 에이전트가 우리 브랜드 톤을 따르도록 하자는 실험이었는데, 지금은 107개 브랜드 (Toss, Karrot, Banksalad, Channel Talk + Stripe, Linear, Apple 등 해외 포함) 디자인 시스템을 라이브 캡쳐로 추출해서 카탈로그로 만들고, MCP 서버까지 ship했습니다.

## 가장 자랑스러운 부분

한국 SaaS 디자인을 깊게 분석한 점입니다. 예를 들어:

- **Toss**: OKLCH 기반 색상 시스템 + 3-tier 토큰 구조 + 그림자 안 쓰는 디자인 thesis ("신뢰는 깊이가 아니라 명확함에서 온다")
- **Channel Talk × Bezier**: 한국 SaaS 최초의 MIT 오픈소스 DS. 마케팅(64px hero)과 프로덕트(36px max) 사이 type cliff 의도적으로 문서화.
- **Karrot**: 커스텀 typeface 안 쓰고 플랫폼 폰트로. "이웃처럼" 사용하는 브랜드 선언. 4px 그리드 엄격 준수.
- **Banksalad**: CSS 번들에 border-radius 2px가 81번 등장. 한국 핀테크 컨센서스 (16px friendly)를 거부한 "데이터 도구" thesis.

이런 디자인 결정의 *왜* 를 분석해서 DESIGN.md 15섹션 스펙으로 만들고, AI 에이전트가 컨텍스트로 읽을 수 있게 했습니다.

## 어떻게 쓰나

Claude Desktop 같은 도구에 한 줄 설정:
\`\`\`json
"oh-my-design": { "command": "npx", "args": ["-y", "oh-my-design-mcp"] }
\`\`\`

이제 "@design:toss 스타일로 송금 화면" 같이 프롬프트하면, 에이전트가 Toss DESIGN.md 전체를 컨텍스트로 받아서 작업합니다.

## 다음 마일스톤

- GitHub 스타 1000개
- DAU 1000
- 한국 브랜드 시리즈 영문 블로그 (Substack)

링크: https://oh-my-design.kr / GitHub: https://github.com/kwakseongjae/oh-my-design

피드백 댓글로 환영합니다 🙏
```

**Tip**: 댓글에 답글 다 달기. Disquiet은 메이커 retention 높아서 첫 댓글 후 follow-up 댓글이 algorithm boost.

---

## 3. Brunch — 한국어 long-form

**제목**:
```
107개 브랜드의 디자인 시스템을 분해해서 알게 된 것
```

(브런치는 어그로성 제목 OK. "디자인 시스템 시리즈"로 매거진 만들면 영어판 블로그와 평행)

**4편 시리즈로 분할 게재**:
1. 토스의 OKLCH와 그림자 없는 신뢰감
2. 채널톡 Bezier — 한국 SaaS 최초의 오픈소스 DS
3. 당근이 친근하게 느껴지는 이유 — 디자인 억제의 전략
4. 뱅크샐러드의 2px 라디우스 반란

각 편 끝에 "전체 분석 + MCP 도구" 영문 블로그/GitHub 링크. 브런치 = 한국어 SEO + 디자이너 커뮤니티 traffic, 영문판 = 글로벌 + 엔지니어 traffic.

**Brunch publishing tip**: 화/금 오전 8시 발행. 작가 페이지에 매거진 묶음으로. "구독" 유도 마지막 문단 — Substack 영문판 cross-link.

---

## 4. Threads (메타) — 시각 카드 위주

Threads는 한국에서 가장 빠르게 성장 중인 채널. **이미지 중심**.

브랜드별 1개 카드:
```
┌──────────────────────────────────┐
│  [브랜드 로고]                    │
│                                   │
│  토스                             │
│  fintech · KR                     │
│                                   │
│  "신뢰는 깊이가 아니라             │
│   명확함에서 온다"                │
│                                   │
│  Primary: #3182f6                 │
│  Default radius: 8-12px           │
│  Shadow tokens: 2 (minimal)       │
│                                   │
│  oh-my-design.kr/design-systems   │
└──────────────────────────────────┘
```

카드 + 1줄 한글 + 영문 캡션:
> "토스의 디자인 시스템을 분해했습니다. 4개의 결정으로 압축됩니다. 전체 분석: [링크]"

매주 1개씩 발행. 4주 = 4 카드 × 1 시리즈.

---

## 분배 순서 정리

| 주차 | 채널 | 컨텐츠 |
|---|---|---|
| W1 화 | Substack (영문) + HADA Show GN + Disquiet | MCP 서버 launch |
| W1 수 | Brunch 1편 (토스) + Threads 카드 1 | 토스 한글판 |
| W3 화 | Substack 2편 (Channel Talk) + Twitter thread B | 영문 |
| W3 수 | Brunch 2편 + Threads 카드 2 | 한글 |
| W5 화 | Substack 3편 (Karrot) | 영문 |
| W5 수 | Brunch 3편 + Threads 카드 3 | 한글 |
| W7 화 | Substack 4편 (Banksalad) | 영문 |
| W7 수 | Brunch 4편 + Threads 카드 4 + "시리즈 wrap-up" Disquiet 게시 | 한글 |
