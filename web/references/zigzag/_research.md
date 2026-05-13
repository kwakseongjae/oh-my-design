# Research Sources for ZIGZAG (지그재그 / 카카오스타일)

추출 일자: 2026-05-13
스킬: `omd:add-reference` (CREATE mode)

---

## Tier 1 — Live / Official

| Source | Used for | Confidence |
|---|---|---|
| `https://zigzag.kr/` static HTML | Pretendard font stack (Regular/Medium/SemiBold/Bold), typography classes (`HEAD_28..CAPTION_9` / `BOLD/SEMIBOLD/MEDIUM/REGULAR`), max-width 600px mobile-web container | High (raw HTML inspected via direct fetch) |
| `https://www.zigzag.kr/resources/latest/arm64/website/_next/static/css/c41594a1ffd08aa6.css` (production CSS bundle, ~185KB) | §2 palette tokens — full `--zds-color-palette-pink-{50..950}` scale, `--zds-color-semantic-brand-zigzag: #fa6ee3`, `--zds-color-semantic-brand-kakao: #fee500`, `--zds-color-semantic-brand-selected: #ff4c34`, full gray scale, blue/coral-red/brown/blue-gray/purple sub-palettes, dark-mode pairings; §3 typography tokens (font-size 8–28, weight 400/500/600/700, line-height tokens); §4 button component tokens (`--zds-color-component-button-pink-{hovered,pressed}`); §5 corner-radius scale (0/2/4/6/8/12/16/20/full) | High (canonical ZDS production tokens) |
| `https://devblog.kakaostyle.com/ko/2024-12-13-1-rebuilding-frontend-design-system/` | §11 ZDS rearchitecture story (Vanilla Extract zero-runtime CSS-in-JS, replaced Emotion, compound-component pattern, packages: Core/Components/Icons/Themes/Tokens, project started mid-2023) | High (official engineering blog) |
| `https://brunch.co.kr/@zigzag/73` (ZIGZAG official brunch) | §10–11 voice — *"나만의 스타일을 발견할 수 있는 플레이그라운드"*, *"쇼핑을 넘어, 나의 라이프 스타일을 찾는 곳"*, *"다양함을 존중하는"*, *"나답게"*, rebranding pillars (Memorable, Effortless, Inspiring, Contextual), original audience 1020 여성 → MZ expansion | High (brand-owned publication) |
| `https://kakaostyle.com/` (parent operating company) | §11 parent narrative + tagline *"당신만의 라이프스타일을 카카오스타일에서 발견하세요"*, six operating principles (*내가 사용자가 됩니다 / '왜'에서 시작합니다 / 빠르게 시도합니다 / 팀을 위해 먼저 합니다 / 스스로 일합니다 / 투명하고 솔직하게 소통합니다*) | High (parent company site) |

### Tier 1 attempted but partial

- `mcp__playwright__browser_navigate https://zigzag.kr/` — navigation succeeded (Page Title: 지그재그 스토어), but the shared Playwright browser session was contended by parallel agents (tabs kept switching to kakaopay / banksalad / remember / zigbang during `browser_evaluate`). Raw `getComputedStyle` capture on live DOM was unreliable; substituted with direct curl of `zigzag.kr` + production CSS bundle, which yielded canonical ZDS tokens directly (a stronger source than runtime computed style).
- `kakaostyle.com` did not expose hex tokens in surface HTML — used for narrative only.

---

## Tier 2 — Cross-validation

| Source | Result | Confidence |
|---|---|---|
| `https://getdesign.md/zigzag` | **No record** (response: *"No designs found for 'zigzag'."*) | n/a — unavailable |
| `https://styles.refero.design/?q=zigzag` | Search returns generic curated results (Stripe / Qatchup / Maze / Slingshot / Fluz / a16z speedrun / etc.); **no ZIGZAG-specific style page indexed** | n/a — unavailable |

**Tier 2 status:** unavailable on both surfaces. Tier 1 (production CSS bundle + official brunch + parent kakaostyle.com + engineering devblog) is treated as authoritative per pipeline rule (`Tier 1 is truth; Tier 2 missing → state so + proceed`).

---

## Supporting press / context

| Source | Used for |
|---|---|
| `https://designcompass.org/en/2022/08/25/zigzag-rebranding/` | §2 rationale — "cool-toned pink" rebrand from previous "hot pink" (eye-fatigue issue), wordmark moved to a taller typeface, tagline shift "35 million women chose ZIGZAG" → "brand fashion life" |
| `https://heypop.kr/n/38932/` | §11 vision — *"무한한 콘텐츠 안에서 개인화된 서비스를 통해 자신만의 라이프스타일을 발견하도록 돕는다"*; previous hot-pink → cooler tone rationale |
| `https://m.apparelnews.co.kr/news/news_view/?idx=186346` | §11 founder framing — *"'지그재그'는 커머스 아닌 커넥터"* (Seo Jung-hoon on positioning as connector, not commerce) |
| `https://www.fnnews.com/news/201902241808512757` | §11 founding story — Croquis founded 2012-02 by Seo Jung-hoon (서정훈, 1977-, Ajou Univ. Media MS), launched ZIGZAG 2015-06 as a shopping-mall bookmark app (3-day Excel crawl, 300 malls seeded) |
| `https://cm.asiae.co.kr/en/article/2021070110025515550` | §11 merger — Kakao completed merger with Croquis 2021-07-01, "KakaoStyle" launched; Seo Jung-hoon remained CEO; ZIGZAG service name retained |
| `https://grokipedia.com/page/kakaostyle` (cited in search results) | §11 — KakaoStyle 50.9% Kakao Corp stake (2023); ~1 trillion KRW transaction volume by 2022 across ZIGZAG + Fashion-by-Kakao |
| `https://en.wikipedia.org/wiki/Pretendard` (general knowledge) | §3 — Pretendard is an OFL-licensed Korean-Latin hybrid sans by 길형진, designed as a Korean-localized "Inter + Apple SD Gothic Neo" fallback substitute; widely adopted by KR product teams |

---

## Confidence summary

- **High (direct CSS token capture, 2026-05)**: §2 entire palette (pink, gray, coral-red, blue, blue-gray, brown, purple, brand-zigzag `#fa6ee3`, brand-kakao `#fee500`, brand-selected `#ff4c34`); §3 typography scale (8–28px, weights 400/500/600/700, Pretendard JP + Pretendard stack); §4 button pink hover/pressed pairs; §5 corner-radius 0/2/4/6/8/12/16/20/full; both light + dark theme pairings.
- **High (brand-owned text)**: §10 voice samples from `brunch.co.kr/@zigzag/73`; §11 KakaoStyle six operating principles + tagline.
- **Medium (KR press synthesis)**: §11 founder/founding/merger timeline (multiple independent KR press confirmations).
- **Editorial (clearly flagged)**: §10 illustrative copy for empty/error/success states (no logged-in app capture this pass); §13 personas as archetypes; §12 "UI implication" framings of brand narrative.

---

## Gaps for future review

- **Logged-in app surface capture not done.** §14 state copy is illustrative; a follow-up pass with an authenticated zigzag.kr session (mobile-web breakpoint 600px) should verify empty-cart, checkout, payment-failed, order-placed copy against observed strings.
- **No public English brand book / voice guide.** ZIGZAG's tone synthesis in §10 is reasoned from brunch posts + marketing surfaces, not a published voice guideline. If KakaoStyle ever publishes one, §10 should be re-verified.
- **getdesign.md and refero.design both empty.** Cross-check would normally come from one of these; if they later index ZIGZAG, §4 should be revalidated.
- **Red Dot project page** (`https://www.red-dot.org/project/zigzag-discover-your-style-66051`) returned 403 to WebFetch; the "Discover Your Style" English tagline (referenced in the project title) is cited from the Red Dot listing title only, not the body text.
