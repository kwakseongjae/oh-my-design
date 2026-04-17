---
name: omd:add-reference
description: "회사 URL 하나로 디자인 시스템을 5단계 우선순위로 리서치해서 references/<id>/DESIGN.md를 OMD 9섹션 포맷으로 생성합니다. '레퍼런스 추가', 'DS 추출', 'Pinkoi/Dcard 레퍼런스 만들어줘' 같은 요청에 트리거. 입력: 회사 URL 1개."
argument-hint: "<company-url>"
user-invocable: true
---

# omd:add-reference — Reference DS Research & Extraction

URL 하나를 입력받아 기업의 디자인 시스템을 **5단계 우선순위**로 조사하고, OMD `references/` 폴더에 **9섹션 DESIGN.md**를 생성한다.

## 핵심 원칙

1. **Tier 1은 무조건 우선** — 기업이 공식 제공하는 DS가 있으면 그것이 정답. 다른 소스는 "보완"일 뿐 대체 불가.
2. **출처 투명성** — 모든 토큰/패턴은 `_research.md`에 출처와 신뢰도를 기록.
3. **추측 금지** — 확인되지 않은 값은 `<!-- inferred from product UI, not official -->` 인라인 주석을 남기고 사용자에게 보고.
4. **Zero AI for tokens** — 컬러/폰트/radius/shadow 값은 항상 실제 소스에서 추출. 생성하지 않음.

## 출력 산출물

`references/<id>/` 폴더에:

| 파일 | 내용 |
|---|---|
| `DESIGN.md` | 9섹션 디자인 시스템 (Stripe 등 기존 파일과 동일 포맷) |
| `README.md` | 표준 README (출처 링크, 파일 목록) |
| `_research.md` | 사용된 소스 목록, 신뢰도, 추출 일자 |

`preview.html` / `preview-dark.html`은 **deprecated**. 새 레퍼런스는 자동으로 `/reference/<id>` 경로에서 9섹션 React 쇼케이스로 렌더링됨 (`web/src/components/reference-preview.tsx` + `web/src/app/reference/[id]/page.tsx`). DESIGN.md만 잘 작성하면 추가 작업 불필요. 기존 50개 정적 파일은 역호환을 위해 보존만.

---

## Phase 1 — 회사 식별 & ID 결정

URL에서 회사 식별자를 추출한다. 도메인 우선, 서비스명 차선:

| URL | ID 후보 |
|---|---|
| `https://pinkoi.com` | `pinkoi` |
| `https://www.dcard.tw` | `dcard` |
| `https://cathaybk.com.tw` (CUBE 앱이 핵심) | `cathay-cube` |
| `https://linear.app` | `linear.app` (점 포함 OK, 기존 사례 있음) |

**충돌 체크**: `references/<id>/`가 이미 있으면 사용자에게 `(A) 덮어쓰기 / (B) 다른 ID 사용 / (C) 기존 보완`을 물어본다.

---

## Phase 2 — Tier 1: 공식 DS 탐색 (필수, 스킵 불가)

다음 순서로 모두 시도. **하나라도 발견되면 그것을 primary source로 고정**.

### 2-1. 알려진 도메인 패턴 (HEAD 요청으로 빠르게 체크)
- `<company>.design` (figma.design, atlassian.design)
- `design.<domain>` (design.airbnb.com, design.gitlab.com)
- `<brand>.<domain>` 또는 별도 도메인:
  - polaris.shopify.com, base.uber.com, primer.style, carbon.ibm.com, spectrum.adobe.com
  - lightning.salesforce.com, fluent2.microsoft.design, material.io
  - cube.cathaybk.com.tw 등
- `<domain>/design`, `<domain>/design-system`, `<domain>/styleguide`

### 2-2. 웹 검색
- `WebSearch`: `"<company>" "design system" OR "design language" site:<domain>`
- `WebSearch`: `"<company>" design tokens documentation Figma library`
- 중화권 기업이면: `"<company>" 設計系統 OR 設計語言`

### 2-3. GitHub 검색
- `gh search repos "<company> design system"`
- `gh search repos "<company> design tokens"`
- 공식 organization 확인 — `tokens.css`, `theme.ts`, `*.json` 디자인 토큰 파일 발견 시 그대로 추출

**발견 시 처리:**
- 공식 컬러 팔레트 → §2 Color Palette 그대로 매핑
- 공식 타이포 스케일 → §3 Typography Rules
- 컴포넌트 스펙 페이지 → §4 Component Stylings
- spacing/radius/shadow 토큰 → §5/§6
- 출처 URL은 `_research.md`에 모두 기록

**미발견 시 처리:**
- `_research.md`의 "Tier 1 — Official DS" 섹션에 `Not found` 명시
- Phase 3로 진행

---

## Phase 3 — Tier 2: 브랜드/프레스 키트

공식 DS가 부재하거나 불완전할 때 보완:

- `<domain>/brand`, `<domain>/press`, `<domain>/about/brand`, `<domain>/media-kit`
- `WebSearch`: `"<company>" brand guidelines press kit logo color palette`
- 발견 시 보통: 컬러 팔레트, 로고 사용 규칙, 1차 타이포 가이드 정도 확보

---

## Phase 4 — Tier 3: 엔지니어링/디자인 블로그

- `WebSearch`: `"<company>" design system Medium engineering blog`
- 알려진 채널 예시:
  - Pinkoi: `medium.com/pinkoi-engineering`
  - Dcard: `medium.com/dcardlab`
  - 일반: 회사명 + Medium publication 검색
- 블로그에서 추출 가능한 것: 디자인 원칙, 토큰 명명 규칙, 의사결정 배경 → §1 Visual Theme, §7 Do's and Don'ts에 반영

---

## Phase 5 — Tier 4: 라이브 사이트 리콘 (Fallback)

위 단계에서 채워지지 않은 부분만 보완. **공식 소스를 덮어쓰지 않는다.**

### 5-1. 도구 선택 (이 순서로 시도)

1. **curl + grep (1순위 — SSR 사이트면 가장 빠르고 정확)**
   - 사이트가 SSR이면 (`curl -sL <url>` 으로 실제 콘텐츠가 와야 함) CSS 번들 URL을 grep으로 추출 → 번들을 `curl`로 다운 → `grep -oE` 로 토큰 추출
   - Pinkoi 사례: `cdn02.pinkoi.com/media/dist/css/core-*.css` 4개 번들 다운 → `font-family`, hex 컬러, `border-radius`, `box-shadow` 빈도 분석
   - **장점**: 브라우저 불필요, 정확한 CSS 룰 추출, 빠름
   - **불가 케이스**: Cloudflare 봇 차단(403), CSR/SPA로 런타임 스타일 주입, AEM 등 동적 로딩

2. **Playwright MCP (`mcp__playwright__*`) — Cloudflare/SPA 사이트 권장**
   - `claude mcp add playwright npx @playwright/mcp@latest --scope project` 으로 설치
   - 별도 Chromium 인스턴스 → 사용자 Chrome 확장 충돌 무관
   - `browser_navigate` → `browser_evaluate("getComputedStyle(...)")` → `browser_take_screenshot`
   - **권장 케이스**: Cloudflare 통과 필요, 인터랙션 추출, 스크린샷 필요

3. **Claude in Chrome (`mcp__claude-in-chrome__*`) — 대체 옵션**
   - 사용자의 실제 Chrome 사용. 로그인 세션 활용 가능
   - **알려진 이슈**: 다른 Chrome 확장(특히 React DevTools, 비디오 다운로더, Cookie-Editor 등)이 있으면 `chrome.debugger` API 충돌로 `javascript_tool`/`screenshot` 실패. accessibility-tree 도구(`get_page_text`, `read_page`, `find`)만 작동
   - **활용**: 사용자가 이미 로그인한 사이트 텍스트 추출

4. 모두 불가 → 사용자에게 알리고 가능한 만큼만 작성 (신뢰도 표시 필수)

### 5-2. 캡처
- 데스크톱 1440px / 모바일 390px 풀페이지 스크린샷
- 저장: `references/<id>/_research/screenshots/`

### 5-3. 컴퓨티드 스타일 추출
다음 셀렉터에 대해 `getComputedStyle()`:

```js
const targets = ['h1', 'h2', 'h3', 'p', 'a', 'button', 
                 '[class*="card"]', '[class*="nav"]', 'input'];
// 추출 항목:
// font-family, font-weight, font-size, line-height, letter-spacing
// color, background-color
// border-radius, border, box-shadow
// padding, gap
```

### 5-4. 컬러 enumerate
페이지 전체에서 사용된 색상을 수집하고, 사용 빈도 상위 10-15개를 팔레트 후보로 추림.
**shadcn 토큰**(background, foreground, primary, secondary, muted, accent, destructive, border, input, ring)에 매핑.

### 5-5. 인터랙션 스윕 (선택적)
- 호버 상태: 버튼/카드/링크에 hover → 변화 기록
- 다크모드 토글이 있으면 다크모드도 동일하게 추출

---

## Phase 6 — DESIGN.md 생성 (9섹션)

`references/stripe/DESIGN.md`를 정확한 포맷 레퍼런스로 사용. 9개 섹션을 순서대로 작성:

```
# Design System Inspiration of <Company>

## 1. Visual Theme & Atmosphere
2-3문단 + Key Characteristics 글머리 5-8개

## 2. Color Palette & Roles
### Primary / ### Brand & Dark / ### Accent / ### Interactive
### Neutral Scale / ### Surface & Borders / ### Shadow Colors / ### Status

## 3. Typography Rules
Font families, weights, size scale, letter-spacing, OpenType features

## 4. Component Stylings
### Buttons / ### Inputs / ### Cards / ### Navigation / ### Tables / ### Badges

## 5. Layout Principles
Spacing scale, container widths, grid system

## 6. Depth & Elevation
Shadow system (named levels), z-index hierarchy

## 7. Do's and Don'ts
글머리 5-10개 (DO/DON'T 페어링 권장)

## 8. Responsive Behavior
Breakpoints 표, Touch Targets, Collapsing Strategy, Image Behavior

## 9. Agent Prompt Guide
### Quick Color Reference (한 줄씩)
### Example Component Prompts (3-5개, 실제로 복사-붙여넣기 가능한 프롬프트)
### Iteration Guide (글머리 5-8개)
```

### 작성 규칙

1. **모든 컬러는 hex (`#xxxxxx`) 또는 `rgba(...)` 형식**으로 표기
2. **CSS 변수명**이 공식 소스에 있으면 백틱으로 함께 표기 (예: `#533afd`: `--hds-color-button-primary`)
3. **각 토큰의 "Role"** 명시 (어디 쓰이는지 한 줄 설명)
4. Tier 1 출처가 있는 값은 **그대로** 사용 (반올림·근사 금지)
5. Tier 4(라이브 리콘)에서만 얻은 값은 인라인 주석 `<!-- inferred -->` 추가

---

## Phase 7 — _research.md 작성

```markdown
# Research Sources for <Company>

추출 일자: YYYY-MM-DD

## Tier 1 — Official Design System
- [URL] — extracted: colors, typography, component specs

## Tier 2 — Brand / Press Kit
- [URL] — extracted: brand colors, logo guidelines

## Tier 3 — Engineering / Design Blog
- [URL] — extracted: design principles, naming rationale

## Tier 4 — Live Site Recon
- Pages inspected: [URL list]
- Browser: claude-in-chrome MCP
- Viewports: 1440px, 390px

## Confidence
- **High** (Tier 1 직접 인용): [항목 리스트]
- **Medium** (Tier 2-3 + 라이브 검증): [항목 리스트]
- **Low / Inferred** (Tier 4 only — 사용자 확인 권장): [항목 리스트]

## Notes
- [기타 특이사항: 다국어 사이트, 다크모드 부재, 등]
```

---

## Phase 8 — README.md 작성

`references/stripe/README.md` 포맷 그대로:

```markdown
# <Company> Inspired Design System

[DESIGN.md](./DESIGN.md) extracted from <primary source URL>. 
{공식 DS 기반인지, 추론 기반인지 한 줄}.

## Files

| File | Description |
|------|-------------|
| `DESIGN.md` | Complete design system documentation (9 sections) |
| `_research.md` | Sources used and confidence per item |

Use [DESIGN.md](./DESIGN.md) as a reference for AI agents (Claude, Cursor, Stitch) to generate UI that looks like the <Company> design language.
```

---

## Phase 9 — 사용자 보고

작업 완료 시 다음 형식으로 보고:

```
✅ references/<id>/ 생성 완료

Tier 사용 현황:
- Tier 1 (Official DS): [있음/없음, 발견된 URL]
- Tier 2 (Brand Kit): [있음/없음]
- Tier 3 (Eng Blog): [있음/없음]
- Tier 4 (Live Recon): [실행함/스킵]

신뢰도 낮은 항목 (확인 권장):
- [항목 1]
- [항목 2]

다음 단계:
1. `web/scripts/`에서 preview HTML 생성
2. `.agents/skills/omd-design/REFERENCE_TAGS.md`에 신규 ID 등록
3. (옵션) 웹 빌더 카탈로그에 추가
```

---

## 알려진 실패 모드 & 대응

| 증상 | 원인 | 대응 |
|---|---|---|
| `curl -I <url>` → 403 | Cloudflare 봇 차단 (Dcard 등) | Playwright MCP로 전환 |
| `curl -L <url>` → HTML 짧고 CSS 비어 있음 | CSR/SPA, 런타임 스타일 주입 | Playwright MCP로 `browser_evaluate` 사용 |
| `cube.cathaybk.com.tw` 류 corporate AEM 사이트 | 마케팅 사이트가 실제 제품 DS 미반영 | 해당 기업 모바일 앱 DS는 웹 추출 불가 — 사용자에게 알림, 대안 제안 |
| Claude in Chrome `javascript_tool` 실패 ("chrome-extension://" 에러) | 다른 Chrome 확장의 `chrome.debugger` API 충돌 | Playwright MCP로 전환 또는 사용자에게 충돌 확장 OFF 안내 |
| HEAD가 200인데 콘텐츠는 홈페이지 | SPA catch-all 라우팅 (Pinkoi `/design-system` 사례) | URL 200을 신뢰하지 말고 콘텐츠를 직접 검증 |

## 안티 패턴 (절대 하지 말 것)

- ❌ Tier 1 검색을 스킵하고 라이브 리콘부터 시작
- ❌ 발견된 공식 컬러 값을 "더 예쁘게" 보정
- ❌ 출처 없이 디자인 원칙을 창작
- ❌ 한 섹션이 통째로 비었는데 표시 없이 넘어가기
- ❌ `references/<id>/` 덮어쓰기 전에 사용자 확인 안 함

## 트리거 키워드

- "X 레퍼런스 추가해줘"
- "X DS 뽑아줘"
- "X 디자인 시스템 references에 넣어줘"
- "오피셜 DS 찾아서 DESIGN.md 만들어줘"
- 또는 그냥 URL 한 줄 + "이거 추가해줘"
