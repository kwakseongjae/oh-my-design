# Research Notes — Remember (리멤버 / 리멤버앤컴퍼니, formerly 드라마앤컴퍼니)

**ID:** `remember`
**Extracted:** 2026-05-13
**Disambiguation:** Korean B2B business-card / professional-networking app operated by 리멤버앤컴퍼니. NOT Remember The Milk, NOT generic "remember" calendar apps, NOT any English-word brand. Verified via `https://www.rememberapp.co.kr/` (redirects to `career.rememberapp.co.kr`) and `https://corp.remember.co.kr/`.

---

## Tier 1 — Live inspect & official sources

| Source | URL | Trust | Notes |
|---|---|---|---|
| Product surface (career feed) | `https://career.rememberapp.co.kr/job/postings` | High | Playwright `getComputedStyle` capture. Body font `Pretendard, sans-serif`, body color `#222222`, primary CTA bg `#000000` radius 4–6px, filter chips `1px solid #D4D4D4` radius 4px padding 10px 16px font 16/400, search input `#F2F2F2` 52px radius 4px, growth CTA `#FF5414` text `#FFFFF9` radius 4px font 12/400. |
| Marketing landing | `https://www.rememberapp.co.kr/` | High | 301 redirects to career surface — confirms career is the primary public-facing product entry. |
| Storybook (Remember UI component library, live deploy) | `https://dramancompany.github.io/remember-ui/` | High (root only) | Body bg `#F3F2EF`, font-family `Pretendard, sans-serif`. Individual story iframes load via JS and require sustained playwright focus; concurrent sessions race the iframe. Root captured. |
| Corporate site — company | `https://corp.remember.co.kr/company` | High | Mission `"일하는 사람과 기회를 연결하여 성공으로 이끈다"`. Founders 최재호 / 송기홍. Founded 2013-07. DRAMA acronym = "DREAM AND MAKE IT HAPPEN." Business-card-app origin story (2014 launch). |
| Corporate landing | `https://corp.remember.co.kr/` | High | Tagline `"프로를 위한 모든 기회, 리멤버가 연결합니다."` Service categorization: HR Network / Expert Network / Business Network. |

### Tier 1 raw computed-style highlights (career.rememberapp.co.kr/job/postings, 2026-05-13)

```
body { font-family: Pretendard, sans-serif; color: rgb(34, 34, 34); }
button "로그인"      { bg: #000000; color: #FFFFFF; radius: 4px;   h: 32; font: 14/400 Pretendard }
button "회원가입"     { bg: #FFFFFF; color: #000000; radius: 6px;   h: 32; padding: 0 12px }
button "기업 서비스"  { bg: transparent; color: #FFFFFF; border: 1px solid #FFFFFF; radius: 6px; h: 32 }
input  "직무, 회사를…" { bg: #F2F2F2; color: #808080; radius: 4px; h: 52; padding: 0 0 0 56px; font: 16/400 }
button "검색"        { bg: #000000; color: #000000 (likely white via icon); radius: 6px; h: 52; padding: 0 12px }
button "직무" filter { bg: transparent; color: #222222; border: 1px solid #D4D4D4; radius: 4px; h: 42; padding: 10px 16px; font: 16/400 }
button "가입하기"    { bg: #FF5414; color: #FFFFF9; radius: 4px; h: 32; padding: 6.5px 13px; font: 12/400 }
h2     "프리미엄 대표기업" { font: 20/600 26lh Pretendard; color: #424242 }
h3     "[아기유니콘] …"  { font: 16/400 23.2lh Pretendard; color: #000000 }
li     job-card        { 162w × 201–250h; no shadow; no border; no radius; transparent bg }
```

### Tier 1 palette (unique non-trivial colors observed)

```
#000000   primary CTA bg, H3 title
#222222   body text, default heading
#424242   H2 sub-emphasis
#808080   placeholder, caption
#BDBDBD   disabled icon
#D4D4D4   filter-chip border, input outline
#EBEBEB   divider
#F2F2F2   search-input bg
#FAFAFA   page tint
#FFFFFF   surface
#FFFFF9   text on orange CTA
#FF5414   growth / signup orange
#FF6A0D   secondary orange / marketing accent
#239E7B   success green
#D9FCF2   success surface mint
rgba(0,0,0,0.8)  overlay scrim
rgba(0,0,0,0.2)  divider alpha
```

---

## Tier 2 — Aggregator cross-check (both unavailable)

| Source | URL | Result | Notes |
|---|---|---|---|
| getdesign.md | `https://getdesign.md/remember` | **404 / no entry** | "No designs found for 'remember'." Confirmed 2026-05-13. |
| Refero Styles | `https://styles.refero.design/?q=remember` | **404 / no entry** | "Collection not found — Refero Styles." Confirmed 2026-05-13. |
| GitHub source repo | `https://github.com/dramancompany/remember-ui` | **HTTP 404** | Source repo not publicly readable. The Storybook deploy at `dramancompany.github.io/remember-ui/` is live (GitHub Pages), but the source is private/deleted. `gh repo view dramancompany/remember-ui` returns "Could not resolve to a Repository." |

**Tier 2 verdict:** Unavailable. All token claims in DESIGN.md rest on Tier 1 live computed-style capture from the public career surface + Storybook root. No external cross-validation possible; the Conflict Matrix in DESIGN.md footer flags inferred values (selected/active filter chip state, error semantics) as `(unresolved)`.

---

## Tier 3 — Editorial / context sources (philosophy layer §10–§15)

| Source | URL | Use |
|---|---|---|
| 플래텀 (Platum) — CEO 최재호 interview | `https://platum.kr/archives/236180` | "폭발적 성장 변곡점에 섰다… 게임 체인저 될 시기" (2024 미디어데이 quote, brand-narrative §11) |
| Tech42 — 사명 변경 coverage | `https://www.tech42.co.kr/최재호-리멤버-대표-수익화-성공-자신감으로-사명/` | 2024-10 rebrand 드라마앤컴퍼니 → 리멤버앤컴퍼니 |
| The Bigdata — 미디어데이 quote | `https://www.thebigdata.co.kr/view.php?ud=202410161600341264edcbfa73b7_23` | "제2의 도약" / "비즈니스 네트워크 중심" positioning |
| 나무위키 — 리멤버앤컴퍼니 | `https://namu.wiki/w/리멤버앤컴퍼니` | Founding date 2013-07, DRAMA acronym, ownership history |
| 포브스코리아 — 최재호 interview | `http://www.forbeskorea.co.kr/news/articleView.html?idxno=330458` | Founder-voice register confirmation (책임감 / 사명감 lexicon) |
| 한국일보 — 최재호 interview | `https://www.hankookilbo.com/News/Read/A2023020702040000485` | "동양판 링크드인" framing — competitor-positioning context for §11 |

---

## Methodology notes

- **Browser race condition.** Playwright session was shared with concurrent sibling work on `wanted`, `zigzag`, `ably`, `kakaopay`, `29cm`, `gangnamunni`, `zigbang`. Tab focus repeatedly jumped during evaluation. Worked around by `tabs.list` → `tabs.select` → guarded `if (!location.href.includes('remember'))` early-return in every `evaluate` call. Final successful capture confirmed via `url: "https://career.rememberapp.co.kr/job/postings"` in the result payload.
- **Storybook iframe.** Storybook's `#storybook-preview-iframe` initially has `src=...id=*` (sidebar root). Setting iframe.src programmatically to a story-specific URL works in foreground but loses focus when other tabs activate. The body-level tokens (`bg #F3F2EF`, font Pretendard) captured from the Storybook root were sufficient.
- **Tier 2 absence.** Both getdesign.md and Refero have no entry for "remember" — likely because the brand's component library is npm-installable but its source repo is not public, so the aggregators couldn't ingest it. Documented as unresolved in DESIGN.md footer.
- **Disambiguation strategy.** Two-tier filter: (1) URL must be `*.rememberapp.co.kr` or `*.remember.co.kr` or `dramancompany.github.io/*`; (2) every search query included "리멤버" / "드라마앤컴퍼니" / "Korean B2B" to filter out global "remember" brands.
- **No commit triggered.** Per user memory, this skill stages files but does not run `git commit`.
