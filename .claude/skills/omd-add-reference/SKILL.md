---
name: omd:add-reference
description: "회사 URL 또는 기존 reference id를 받아 references/<id>/DESIGN.md를 만들거나 확장합니다. URL 입력 시 CREATE 모드 (9섹션 생성), 기존 id 입력 시 AUGMENT 모드 (OmD v0.1 Philosophy 레이어 섹션 10-15 추가). '레퍼런스 추가', 'DS 추출', 'kakao Philosophy 붙여줘', 'mercari 브랜드 철학 채워' 같은 요청에 트리거."
argument-hint: "<url> | <existing-id> [--style-ref <id>]"
user-invocable: true
---

# omd:add-reference — Reference DS Research, Extraction & Augmentation

URL 또는 기존 id를 입력받아 **두 가지 모드**로 동작:
- **CREATE 모드**: URL → `references/<id>/DESIGN.md` 9섹션 신규 생성
- **AUGMENT 모드**: 기존 id → 기존 DESIGN.md에 OmD v0.1 Philosophy 레이어(섹션 10~15) 추가

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

## Phase 0 — Input Dispatch (CREATE vs AUGMENT 라우팅)

입력 형태를 감지해 모드를 결정한다. **가장 먼저 실행**한다.

### 입력 파싱 규칙

| 입력 예 | 모드 | 의미 |
|---|---|---|
| `https://kakao.com` | **CREATE** | 새 reference 생성 (Phase 1~9) |
| `https://www.daangn.com` | **CREATE** | 상동 |
| `kakao` | **AUGMENT** | 기존 `web/references/kakao/`에 Philosophy 레이어 추가 (Phase 10) |
| `kakao https://brand.kakao.com` | **AUGMENT** | 기존 id + 추가 소스 URL 명시 (Phase 10) |
| `kakao --style-ref toss` | **AUGMENT** | style reference 명시 override |
| `dcard` (refs에 없음) | **에러** | "해당 id가 references/에 없어. URL로 CREATE할지, 다른 id를 쓸지 확인" |

### 라우팅 로직

```
1. 첫 토큰이 http(s)://로 시작 → CREATE 모드, Phase 1로
2. 첫 토큰이 bareword:
   a. web/references/<token>/DESIGN.md 존재 → AUGMENT 모드, Phase 10으로
   b. 존재하지 않음 → 에러, 사용자 확인
3. AUGMENT 모드 시 `--style-ref <id>` 플래그 파싱, 있으면 Phase 10-2에서 override
```

**CREATE 모드**: Phase 1~9 순차 실행
**AUGMENT 모드**: Phase 10 한 번만 실행 (Phase 1~9는 스킵)

---

## Phase 1 — 회사 식별 & ID 결정 (CREATE 모드)

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

## Phase 10 — AUGMENT 모드 (OmD v0.1 Philosophy 레이어 추가)

**언제 실행**: Phase 0에서 AUGMENT로 라우팅됐을 때만.
**스킵 대상**: Phase 1~9 전부.

### 10-1. Pre-check

1. `web/references/<id>/DESIGN.md` 읽기
2. `grep -c "^## 10\. Voice & Tone"` — 존재하면 **이미 COMPLETE**. 아래 형식으로 보고 후 중단:
   ```
   ⚠️ <id>는 이미 Philosophy 레이어 보유 (섹션 10-15 모두 있음).
   재작성하려면 --force 플래그 사용. 덮어쓰기 전 사용자 확인 필수.
   ```
3. 없으면 Phase 10-2로.

### 10-2. Style Reference Pick (핵심 로직)

Philosophy는 톤·밀도·예시 포맷을 기존 COMPLETE 파일에서 빌려와 일관성을 유지한다.

**자동 선택 매트릭스** (지역 기반):

| 타겟 브랜드 region | 기본 style ref | 선택 이유 |
|---|---|---|
| 🇰🇷 KR (kakao, karrot, baemin) | `toss` | 같은 KR 페르소나 어조, 한국어 voice sample 품질 최상 |
| 🇯🇵 JP (mercari, freee) | `line` | 동아시아 간결·기능 중심 어조 |
| 🇹🇼 TW (pinkoi, dcard) | `toss` | TW 네이티브 COMPLETE 부재 → 가장 가까운 Asian |
| 🇺🇸 US (tesla, spacex, nvidia, uber) | `claude` | 미니멀·정확·비(非)-hype 문체 |
| 🇪🇺 Europe | `stripe` | 엔지니어링 톤 + 정제된 제품-서술 |
| 기타/불확실 | `notion` | 중립 톤, 광범위 예시 |

**지역 감지**: 타겟의 `DESIGN.md` 프론트매터 `brand:` + §1 (Visual Theme) 에서 국가/시장 언급 추출.

**사용자 override**: `--style-ref <id>` 플래그로 기본 선택을 덮어씀. (예: `omd:add-reference mercari --style-ref stripe`)

**선택 보고**: 사용자에게 한 줄 알림 — *"Style ref: `<picked>` (이유: <one-line>)"*.

### 10-3. Philosophy 소스 수집

1. **사용자 제공 URL 우선**: 인자로 전달된 URL을 우선 사용
2. **자동 탐색**:
   - `WebSearch`: `"<brand>" brand philosophy OR manifesto OR mission`
   - `WebSearch`: `"<brand>" voice AND tone AND guidelines`
   - `WebSearch`: `"<brand>" "brand narrative" OR "brand story" OR "our principles"`
   - `WebFetch`: `<domain>/about`, `<domain>/brand`, `<domain>/mission`, `<domain>/manifesto`
   - 창업자 인터뷰/에세이: `"<founder-name>" <brand> manifesto interview`
3. **기존 `_research.md`**: 있으면 Tier 2/3 소스 재활용
4. **최소 3개 독립 소스** 확보. 미달 시 사용자에게 "소스 부족" 보고 후 중단.

### 10-4. 섹션 10~15 생성 규칙

OmD v0.1 (`spec/omd-v0.1.md`) 준수. **Craft bar = `toss/DESIGN.md`** (2026-04 QA에서 밀도·명확성 표준으로 확정). 각 섹션 **최소·최대 요건**:

#### ## 10. Voice & Tone
- 2~3 voice adjectives (예: *Warm, Precise, Irreverent*)
- Do/Don't voice table (2~4행)
- **≥3 concrete voice samples** — 각각 UI context 지정 (button label / empty state / error / success / onboarding 등)

**🔑 Voice sample verification (중요 — 파일럿 QA 결과 추가된 룰)**

Voice sample은 **verification 우선순위**를 엄수하고, 각 샘플에 아래 중 하나의 인라인 주석을 **반드시** 붙인다:

| 우선순위 | 소스 | 주석 형식 |
|---|---|---|
| 1 (선호) | live 사이트 추출 (curl / WebFetch / Playwright) | `<!-- verified: <url>, <yyyy-mm> -->` |
| 2 | 공식 브랜드 가이드라인 / press kit 인용 | `<!-- cited: <source title or URL> -->` |
| 3 (최후) | 추론·작문 (실존 copy 아님) | `<!-- illustrative: not verified as live <brand> copy -->` |

**추론 샘플에 구체 수치·브랜드 전용 용어 넣지 말 것** (예: `"items over ¥100,000"` 같은 미확인 threshold). 대신 가변 자리표시자(`<amount>`, `<product>`)로 대체.

**실행 절차**:
1. 시도: `curl -sL <domain>` → visible 마이크로카피 (button, nav, footer) grep
2. 막히면: `WebFetch` 로 `about`, `help`, `onboarding` 페이지 조회
3. 막히면: Playwright MCP로 인터랙션 요구 페이지 캡처
4. 불가 시: illustrative 명시 + 실제 UI 관찰자가 검증할 수 있도록 구체 UI 맥락 명시

#### ## 11. Brand Narrative
- 2~3 문단: origin → mission → why-now
- 창업자/임원 인용 ≥1회, **출처 markdown link 인라인** (footer only 금지)
- 검증되지 않은 수치(DAU/MAU/다운로드 수 등)는 `<!-- source: base DESIGN.md §1, not re-verified -->` 처럼 재검증 여부 표기

#### ## 12. Principles
- 3~5 numbered principles (**cap 8까지 허용**, 초과 시 merge)
- 각 principle: 1줄 원칙 (**bold**) + 1~2문장 rationale + `*UI implication:*` 라벨 + 1줄 구체 예시

#### ## 13. Personas
- 2~4 archetypes
- **각 persona ≤ 3 sentences** 권장 (toss 밀도 기준). 배경 묘사(주거, 학교, 추정 생각)는 **최소화**하고 **구체 행동·사용 패턴**에 집중
- 상단에 disclaimer: *"Personas are fictional archetypes informed by publicly described <brand> user segments, not individual people."*

#### ## 14. States
- **6개 state 카테고리 전부 포함 필수**: Empty (≥1) · Loading (≥1) · Error (≥2 variants) · Success (≥1) · **Skeleton** · **Disabled**
  - Skeleton과 Disabled는 **각각 별도 행**으로 기재. Loading row 안에 skeleton 설명 녹이는 것으로 대체 금지 (2026-04-20 QA에서 4개 파일이 이 drift 발견 → 전 corpus와 불일치)
  - Skeleton 행 이름은 `Skeleton` 또는 `Skeleton (specifics)` 허용 (예: `Skeleton (post body)`, `Skeleton (spec table)`)
- **권장 총 행 수: 10~12**. 13+ 넘으면 중복·엣지 유스케이스 제거 검토
- 금지: 단순 UI pattern(rating request, 모달 treatment 등)을 state로 취급. 진짜 state = "UI가 렌더링할 실 상태 변형"만

#### ## 15. Motion & Easing
- Duration scale: `fast: Xms / base: Yms / slow: Zms` (3~5 tokens)
- Easing tokens: `standard: cubic-bezier(...)` 등 3~5개
- Motion rules: 무엇을 애니메이트하고 무엇을 피할지 (3~5 bullets)
- 브랜드-정합 easing 특성 (spring 허용/금지)을 **명시**하고 이유 서술

### 10-5. Append + Validate

1. 기존 `DESIGN.md` 섹션 9 끝을 찾아 그 뒤에 섹션 10~15 **append** (기존 콘텐츠 보존)
2. 프론트매터에 `omd: 0.1` 없으면 추가
3. **Validate**:
   - `grep -c "^## 1[0-5]\."` ≥ 6 확인
   - 각 섹션 최소 요건 충족 확인 (voice samples ≥3, principles ≥3 등)
4. `_research.md`에 Philosophy 소스 블록 추가:
   ```markdown
   ## Philosophy Layer — added YYYY-MM-DD
   - [URL 1] — used for: Voice samples, Principles
   - [URL 2] — used for: Brand Narrative
   ```

### 10-6. QA scorecard (Philosophy Diagnostic Rubric 적용)

Phase 10-5 validate 통과 후 **반드시** 실행. `research/2026-04-20_philosophy-layer-diagnostic.md` 의 11-dimension 스코어카드 (D1~D11) 를 해당 파일에 적용.

1. 각 dimension 🟢/🟡/🔴 판정
2. 판정 근거 1줄 메모
3. **Pass threshold: ≥9 green, no red, yellow ≤2**
4. 결과를 `_research.md` 에 아래 형식으로 append:
   ```markdown
   ## Philosophy Layer QA (YYYY-MM-DD) — Diagnostic Rubric
   
   | # | Dimension | Score | Notes |
   |---|---|---|---|
   | D1 | §10 intro standalone | 🟢/🟡/🔴 | ... |
   | D2 | ... | ... | ... |
   ...
   
   **Result**: N 🟢 / N 🟡 / N 🔴. **PASS / FAIL.**
   ```
5. **FAIL이면 자동 재생성 금지** — 실패 항목만 사용자에게 보고해서 대화 통해 수정 (창의적 판단 필요 작업 자동화 위험)

Rubric 업데이트는 `research/` 디렉터리에서 진행하며, 새 패턴 발견 시 changelog에 기록.

### 10-7. 사용자 보고

```
✅ <id> Philosophy layer augmented (섹션 10-15 추가)

Style reference: <picked_ref> (이유: <one-line>)
Sources: <N>개 (_research.md 참고)

섹션 요약:
  ✓ 10. Voice & Tone — voice samples <N>개
  ✓ 11. Brand Narrative — 인용 <N>건
  ✓ 12. Principles — <N>개
  ✓ 13. Personas — <N>개
  ✓ 14. States — empty/error/loading/success
  ✓ 15. Motion & Easing — duration <N>단계

Confidence:
  - High (공식 brand page 인용): <항목>
  - Medium (press/interview): <항목>
  - Low (inferred from product UI): <항목>  ← 사용자 검토 권장

Gaps flagged: <없음 또는 목록>

다음 단계:
  grep -c "^## 1[0-5]\." web/references/<id>/DESIGN.md  # 6 나오면 성공
  git diff web/references/<id>/DESIGN.md                 # 변경 리뷰
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

### CREATE 모드 (URL 입력)
- "X 레퍼런스 추가해줘"
- "X DS 뽑아줘"
- "X 디자인 시스템 references에 넣어줘"
- "오피셜 DS 찾아서 DESIGN.md 만들어줘"
- 또는 그냥 URL 한 줄 + "이거 추가해줘"

### AUGMENT 모드 (기존 id 입력)
- "kakao Philosophy 붙여줘"
- "mercari 브랜드 철학 채워줘"
- "X에 OmD 10-15 섹션 추가"
- "X Voice/Narrative 작성해줘"
- 또는 그냥 id 한 줄: `omd:add-reference kakao`
- style ref 명시: `omd:add-reference tesla --style-ref claude`
