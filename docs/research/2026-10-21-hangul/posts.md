# /hangul launch: Threads and X drafts (2026-10-21)

These are drafts only; the owner posts them. Each post names the asset it pairs with. Nothing here has been posted.

## Before posting

- **Links.** `https://oh-my-design.kr/ko/hangul` (ko) and `https://oh-my-design.kr/hangul` (en). Both 404 until the launch page ships (stream H2).
- **Install line.** `npx skills add kwakseongjae/oh-my-design --skill hangul`. It works only after the skill is on main and 2.0.6 is out (H1/H4). The bundled path is `npx oh-my-design-cli@latest`.
- **Assets** (`web/public/hangul/`):
  - `before-after.mp4`: 1280×720, 12 s, no sound. Its poster is `before-after-poster.webp`.
  - `before-desktop.webp` / `after-desktop.webp`: 1440×900 viewport at 2×.
  - `before-phone.webp` / `after-phone.webp`: 390×844 at 2×.
- **What the before/after is.** Every caption has to stay true to this:
  - The Before is a page Codex CLI built without the skill in OmD's 2026-09-29 eval (run p1-A-r3).
  - The After is the same code edited to the /hangul rules, typography only. It is a demo edit, not an eval run, and not the eval's "with skill" arm.
  - Fonts were checked in headless Chrome on macOS.
- **Don't** tag or mention other brands or accounts. Don't use "완벽", "혁신", "압도적", "game-changer", "best" or similar.
- **If a post quotes the eval** (17 of 18 → 0 of 18), the four caveats go with it in the same post or the first reply. See the "Eval reply" section.

---

## Threads · 한국어 (단독)

Pairs with: `before-after.mp4`

> AI 코딩 에이전트에게 한국어 화면을 맡기면 영어처럼 조판되는 일이 많습니다. 제목 자간을 지나치게 좁히고, 본문 자간까지 줄이고, 단어 중간에서 줄을 바꾸는 식입니다.
>
> /hangul은 이 부분만 고치는 스킬입니다. 기준은 W3C klreq·CSS Text 명세, KRDS·SEED·TDS 공개 문서, 그리고 한국 서비스 67곳을 실측한 값(2026-07)입니다.
>
> 영상은 같은 페이지의 전후입니다. 왼쪽은 Codex CLI가 스킬 없이 만든 평가용 페이지, 오른쪽은 같은 코드를 /hangul 규칙대로 고친 시연용 수정본입니다. 바꾼 것은 글꼴, 자간, 글자 크기, 줄바꿈 규칙뿐이고 문구와 레이아웃 코드는 그대로입니다.
>
> oh-my-design.kr/ko/hangul

Video alt text: 같은 한국어 핀테크 랜딩 페이지를 휴대폰 폭으로 나란히 스크롤하는 영상. 왼쪽 Before는 제목 자간이 좁고 아래쪽 안내 문구가 8px로 작다. 오른쪽 After는 Pretendard 글꼴에 제목 자간이 조금 넓고, 안내 문구가 11px에서 단어 단위로 줄바꿈된다.

## Threads · 한국어 (3개 스레드)

**1/3**. Pairs with: `before-after.mp4`

> AI 코딩 에이전트가 만든 한국어 페이지 하나를 /hangul 규칙대로 고쳐 봤습니다. 왼쪽은 Codex CLI가 스킬 없이 만든 평가용 페이지, 오른쪽은 같은 코드의 타이포그래피만 고친 시연용 수정본입니다. 문구와 레이아웃 코드는 바꾸지 않았습니다.

**2/3**. Pairs with: `before-phone.webp` + `after-phone.webp`, side by side

> 고친 것은 네 가지입니다.
> · 제목 자간 −0.055em → −0.03em (1440px 기준)
> · 글꼴 목록 맨 앞에 Pretendard
> · 11px보다 작던 캡션을 11px로
> · 제목과 짧은 문구에 keep-all
>
> 렌더 검사에서 원본은 320~360px 폭에서 '순|간', '있어|요.'처럼 단어가 끊겼습니다. 수정본은 검사한 13개 폭 모두에서 끊긴 단어가 없었습니다.

**3/3**. Pairs with: nothing, or the launch page's data card once it is live

> 기준은 W3C klreq·CSS Text 명세, KRDS·SEED·TDS 공개 문서, 그리고 한국 서비스 67곳의 공개 웹 화면을 실측한 값(2026-07)입니다. 67곳 중 52곳이 본문 자간 0이었고, 행간이 수치로 잡힌 53곳의 본문 행간 중앙값은 1.5였습니다.
>
> 설치: npx skills add kwakseongjae/oh-my-design --skill hangul
> oh-my-design.kr/ko/hangul

## Threads · English

Pairs with: `before-after.mp4`

> Coding agents often set Korean as if it were English: headlines tracked tighter than Korean sites ship, negative tracking on body text, words split mid-word.
>
> /hangul fixes only that, with rules from W3C klreq and CSS Text, KRDS, SEED and TDS, and 67 measured Korean services.
>
> Left: a page Codex CLI built without the skill in our eval. Right: the same code edited to the /hangul rules (a demo edit, not an eval run). Only the typography changed.
>
> oh-my-design.kr/hangul

Video alt text: Two phone-width views of the same Korean fintech landing page scrolling side by side. Before: tight headline tracking and 8px notes at the bottom. After: Pretendard, slightly looser headline tracking, and 11px notes that wrap between words.

## X · 한국어

Pairs with: `before-after.mp4`

> AI 에이전트가 만든 한국어 페이지를 /hangul 규칙대로 고친 전후입니다. 바꾼 것은 글꼴·자간·글자 크기·줄바꿈뿐이고 문구와 레이아웃 코드는 그대로입니다. 기준은 W3C klreq, KRDS·SEED·TDS, 한국 서비스 67곳 실측.
>
> oh-my-design.kr/ko/hangul

## X · English

Pairs with: `before-after.mp4` (or `before-desktop.webp` + `after-desktop.webp`)

> The same page before and after /hangul. Only the font, letter-spacing, text size and line-breaking rules changed; the copy and layout code are untouched. The rules come from W3C klreq, KRDS/SEED/TDS and 67 measured Korean services.
>
> oh-my-design.kr/hangul

## Eval reply (optional; first reply under any post that cites the eval)

ko:

> 평가: 3개 한국어 UI 과제를 Codex CLI와 Claude(Sonnet)에서 각 3회씩 돌렸습니다. 스킬 없이는 18회 중 17회가 BLOCK 또는 WARN 수준의 위반을 하나 이상 냈고, /hangul을 적용하면 18회 모두 BLOCK·WARN 0이었습니다(9/30 체커 개정 후 재채점해도 같습니다).
> 한계: ① 채점 도구가 스킬과 같은 규칙을 쓴다 ② 스킬 적용 조건은 프롬프트에 스킬을 명시했다 ③ 칸마다 3회, 채널마다 모델 하나뿐이다 ④ 소스만 읽는 정적 채점이다.

en:

> Eval: three Korean UI tasks, three runs each, on Codex CLI and on Claude (Sonnet). Without the skill, 17 of 18 runs had at least one BLOCK or WARN finding; with /hangul, all 18 had 0 BLOCK and 0 WARN (unchanged after the 9/30 checker revisions).
> Limits: (1) the checker encodes the skill's own rules; (2) the with-skill arm named the skill in the prompt; (3) 3 runs per cell, one model per channel; (4) static scoring of source only.

---

## Where each number comes from

| Claim | Value | Source |
|---|---|---|
| Headline tracking, before → after | −3.3px at 60px (−0.055em) → −0.03em; at 390px, −2.8px at 44px (−0.064em) → −0.03em | Before/after stylesheets; computed styles measured in the render (`content/evidence/*-measure.json`) |
| Pretendard first | The After stack is `"Pretendard Variable", Pretendard, Arial, …`. CDP shows h1, description and footer rendered in Pretendard Variable; the Before rendered in Apple SD Gothic Neo + Arial | `content/evidence/after-measure.json`, `before-measure.json` (macOS headless Chrome) |
| Captions under 11px → 11px | Footer and metric notes 8px → 11px at 390px; base 10px → 11px | stylesheet diff (`content/tools/cssdiff.py`) |
| Broken words, Before | 320px "순 \| 간,", 340px "있 \| 어요.", 360px "있어 \| 요." | `skills/hangul/scripts/render-check.mjs` on the served Before |
| Broken words, After | 0 at 13 widths: 320, 340, 360, 375, 390, 412, 430, 600, 768, 820, 1024, 1280, 1440 | same, on the served After |
| 67 services, body letter-spacing | 52/67 exactly 0 | `skills/hangul/references/measured-67.md`, via `scripts/hangul/build-measured.mjs` |
| 67 services, body line-height | median 1.5 over the 53 services with a numeric value | same |
| Capture | public web surfaces of 67 services, 2026-07-11..13 | same |
| Eval 17/18 → 0/18 | BLOCK or WARN, as stated, with the four limits; holds after both 2026-09-30 rescores (BLOCK only: 10/18 → 0/18) | `skills/hangul/references/eval-2026-09.md`; `docs/research/2026-09-29-growth/hangul-eval-results.md` (local) |

## Length check

- X counts Hangul (and − →) as 2 and a URL as 23 against 280. ko 229 / 280, en 256 / 280.
- Threads allows 500 characters per post. ko single 376, en single 471, thread posts 140 / 210 / 237.
