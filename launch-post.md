# OMD (oh-my-design) Launch Post

---

## Korean (X/Twitter Thread)

### Tweet 1 (Hook)

요즘 프로젝트마다 DESIGN.md 붙이는 게 루틴이 됐는데요.

awesome-design-md 정말 잘 쓰고 있지만, 딱 하나 번거로운 게 있었어요.

매번 DESIGN.md 가져와서 색상 바꾸고, 토큰 정리하고, 컴포넌트 맞추고...
프로젝트마다 이걸 반복하는 게 은근 시간을 잡아먹더라고요.

그래서 만들었습니다.

### Tweet 2 (Product)

oh-my-design (OMD)

"대기업 디자인 시스템 골라서, 내 취향으로 커스텀하고, DESIGN.md 바로 export"

- 67개 기업 디자인 시스템 (Stripe, Vercel, Notion, Linear, Figma, Apple...)
- A/B 선택 위자드 (버튼 스타일, 테이블, 헤더, 카드)
- 색상/radius/다크모드 커스텀
- 컴포넌트 추가/삭제 (17종)
- shadcn/ui CSS 변수 포함
- AI 호출 0, 비용 0

### Tweet 3 (How it works)

동작 방식:

1. 기업 레퍼런스 선택 (67개 중 택 1)
2. A/B 스타일 취향 선택 (버튼, 테이블, 헤더, 카드)
3. 색상 & radius & 다크모드 설정
4. 컴포넌트 추가/삭제
5. DESIGN.md export + npx CLI 커맨드

설정 결과는 해시로 인코딩돼서,
npx 커맨드 한 줄이면 어디서든 동일한 DESIGN.md를 재생성할 수 있어요.

### Tweet 4 (Demo)

[시연 영상]

### Tweet 5 (Tech)

기술 스택:
- Next.js + Tailwind CSS + shadcn/ui
- Framer Motion (위자드 애니메이션)
- react-fast-marquee (로고 캐러셀)
- Playfair Display (캘리그래피 악센트)
- 레퍼런스 데이터: VoltAgent/awesome-design-md 기반

Google Stitch DESIGN.md 포맷 호환.
생성되는 문서는 9섹션 + shadcn CSS + 아이콘 가이드라인 포함.

### Tweet 6 (CTA)

웹 빌더: [URL]
GitHub: github.com/kwakseongjae/oh-my-design

MIT 라이선스, 완전 오픈소스.

DESIGN.md 루틴 가진 분들한테 꽤 쓸만할 거라 자신합니다.
피드백이나 PR 환영해요.

---

## English (X/Twitter Thread)

### Tweet 1 (Hook)

Adding DESIGN.md to every project has become routine.

awesome-design-md is great, but one thing kept bugging me:

Every time I grab a DESIGN.md, I end up changing colors, adjusting tokens, tweaking components... repeating the same work for every project.

So I built something.

### Tweet 2 (Product)

oh-my-design (OMD)

"Pick a real company's design system, customize it to your taste, export DESIGN.md instantly"

- 67 company design systems (Stripe, Vercel, Notion, Linear, Figma, Apple...)
- A/B style wizard (buttons, tables, headers, cards)
- Color, radius, dark mode customization
- Add/remove from 17 component types
- shadcn/ui CSS variables included
- Zero AI calls, zero cost

### Tweet 3 (How it works)

How it works:

1. Pick a reference (67 companies)
2. A/B style choices (buttons, tables, headers, cards)
3. Customize color, radius, dark mode
4. Add/remove components
5. Export DESIGN.md + npx CLI command

Your config is encoded as a hash.
One npx command regenerates the same DESIGN.md anywhere.

### Tweet 4 (Demo)

[Demo video]

### Tweet 5 (Tech)

Tech stack:
- Next.js + Tailwind CSS + shadcn/ui
- Framer Motion + react-fast-marquee
- Reference data from VoltAgent/awesome-design-md

Google Stitch DESIGN.md format compatible.
Output: 9 sections + shadcn CSS + icon guidelines.

All client-side. No API keys. Deterministic generation.

### Tweet 6 (CTA)

Web builder: [URL]
GitHub: github.com/kwakseongjae/oh-my-design

MIT license, fully open source.

If you have a DESIGN.md routine, this will save you real time.
Feedback and PRs welcome.

---

## Short version (single post)

### Korean

DESIGN.md 매번 커스텀하는 거 귀찮아서 만들었습니다.

oh-my-design -- 67개 대기업 디자인 시스템 중 골라서, A/B 위자드로 취향 맞추고, DESIGN.md 바로 export.

Stripe, Vercel, Notion, Linear, Figma, Apple... 전부 지원.
AI 호출 없음. 비용 없음. 오픈소스.

[시연 영상]

Web: [URL]
GitHub: github.com/kwakseongjae/oh-my-design

### English

Tired of customizing DESIGN.md for every project.

oh-my-design -- Pick from 67 real company design systems, customize with an A/B wizard, export DESIGN.md instantly.

Stripe, Vercel, Notion, Linear, Figma, Apple... all supported.
Zero AI. Zero cost. Open source.

[Demo video]

Web: [URL]
GitHub: github.com/kwakseongjae/oh-my-design
