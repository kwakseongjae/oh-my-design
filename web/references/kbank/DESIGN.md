---
id: kbank
name: K bank
country: KR
category: fintech
homepage: "https://www.kbanknow.com"
primary_color: "#0046ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kbanknow.com&sz=256"
verified: "2026-05-14"
omd: "0.1"
---

# K bank — Design Reference

> 케이뱅크 — Korea's first internet-only bank (launched 2017). State-licensed digital-only commercial bank; sibling category to Toss Bank and Kakao Bank, but with the most "traditional bank" posture of the three: navy-led, document-forward, partnership-driven (KT, Woori, Bain, MBK).

K bank reads as a **regulated bank that happens to be app-native**, not a fintech wearing a bank licence. The visual signal is conservative, the IA is product-catalog-first, and the language defaults to formal `~합니다` rather than the colloquial `~해요` of Toss. The interesting tension: an otherwise austere navy palette is paired with one shockingly bright lime (`#B6F23D`) reserved as the energetic accent — a calculated rule-breaker.

---

## 1. Visual Theme & Atmosphere

**K bank** is South Korea's first internet-only bank (launched 2017, KT-led consortium → 2021 KT Strategic Investment recap → 2024 IPO preparation). The product surface reads as a neobank that refuses both fintech-startup playfulness and legacy-bank gravitas: a near-white canvas anchored by a single signature **K bank Navy `#0114A7`**, an energetic **Lime `#B6F23D`** accent used sparingly on activation states, and a tight Pretendard type ladder. Skip-link primary, body 16px / 400 #1A1A1A on white, fixed 1280px desktop canvas — the chrome is sober, mobile-first-translated-to-desktop, and image-replacement H1 (font-size:0) is still in use, which surfaces concrete a11y debt (`a11y_landmark_violation` documented in §8). Where the prior batch's Toss leans warm-trust and KakaoBank leans playful-yellow, K bank leans **executive-restraint**: the brand is the navy, the navy is the trust, and chrome elsewhere stays out of the way.

## 1.1 Foundation tokens (live-captured)


All values pulled from `getComputedStyle(document.documentElement)` on `https://www.kbanknow.com` — see `assets/_reference/tokens.json` for the full machine-readable set and `assets/_reference/.live-inspect-proof.json` for raw samples.

### Color — brand
| Token | Value | Role |
|---|---|---|
| `--color-navy` | `#0114A7` | Signature K bank navy. Sole brand-positive primary. Used on skip-link, CTAs, key labels. |
| `--color-lime` | `#B6F23D` | Energetic accent. Sparingly applied — never on body text, never on form chrome. |
| `--txt-pri-sell` | `#047AF1` | "Sell" / promo blue — used for product-detail callouts adjacent to navy primary. |

### Color — neutral ramp (11 stops, dual-emitted as `--color-g*` and `--txt-g*`)
`g1000 #020616` → `g900 #252B37` → `g800 #3B4659` → `g700 #4D596F` → `g600 #67748E` → `g500 #8694B1` → `g400 #C8D2E4` → `g300 #E0E6F1` → `g200 #EDF1F7` → `g100 #F7F9FD` → `w100 #FFFFFF`. Cool-leaning grayscale (blue-tinted, not neutral) — keeps the ramp coherent with the navy primary.

### Color — semantic state
| State | Bg | Txt | Use |
|---|---|---|---|
| info | `#D1ECFF` | `#066AE5` | informational banner |
| action | `#E6EBFF` | `#2539E9` | promo / opportunity callout |
| neutral | `#EDF1F7` | `#4D596F` | quiet badge / chip |
| error | `#FFE5E0` | `#E23A32` | failure / fraud alert |

### Color — extended palette
`bu800 #066AE5` · `re700 #E23A32` · `og600 #E46F00` · `yl600 #B78F01` · `lm600 #69A305` · `in700 #4262FF`. Six muted hues, each kept dark/saturated enough to pass AA against `#FFFFFF`.

### Typography
- **Primary**: `Pretendard K Edition` — the Korean-optimised cut of the open-source Pretendard family. Single global family; no serif/display split.
- **Stack**: `Pretendard K Edition, -apple-system, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif`.
- **Body**: 14px / 400 / line-height `normal`.
- **CTA**: 18px / 500 (medium, not bold) / 56px height / 12px radius. This is the only widely-rounded surface — see §3.

### Radius
- CTA only: `12px`.
- Everything else observed: `0px`. **Sharp orthogonal blocks dominate.** This is a deliberate, conservative-bank signal.

### Shadow
- Not used on the marketing root. Elevation conveyed through 1px borders and `--color-g200/g300` background fills, not Z-axis.

---

## 2. Layout & grid

- **Fixed 1280px desktop canvas.** No fluid breakpoint observed on the marketing surface; mobile app is the primary product channel, web is the catalog/regulatory mirror.
- Body width measured live at `1280px`, height `1126px` above-the-fold for the landing surface.
- Three vertical bands: top utility row → primary nav → product-tile grid → 새소식/공지 list → footer-equivalent block.
- No `<header>` / `<nav>` / `<footer>` / `<main>` landmarks — all chrome is `<div class="…">`. Logged as a11y debt in §11.

---

## 3. Component DNA

**Buttons**: 56px tall × 12px radius × 18px / 500 type × navy (`#0114A7`) fill + white text. Medium weight, not bold — a small but distinctive choice; most KR finance peers default to 600/700.

**Skip-link**: Renders visibly when focused as `padding: 10px 20px; background: #0114A7; color: #fff;` — a rare bank that ships a working "본문 바로가기" affordance.

**Links**: Default to `g1000 #020616` body color, underline on hover (not inline-styled — relies on Pretendard's tight optical settings to keep dense 14px nav legible).

**Cards / product tiles**: Square-cornered (`0px`), separated by 1px borders in `--color-g300 #E0E6F1`, internal padding generous. No drop-shadow.

**Form chrome**: `<input>` elements observed but kept off-DOM until interaction (`display:none` on landing) — the marketing surface is read-only, transactional flows live in the app.

**Logo treatment**: `<h1 class="logo">` with `font-size: 0` (image-replacement) — text content `개인 / 기업` is the persona switcher, the visible logo is an inline SVG.

---

## 4. Iconography & illustration

- Minimal illustration on the marketing root (8 `<img>` total). The brand leans on type + flat color blocks for hierarchy, not custom artwork.
- No icon system surfaced in `:root` tokens — icons are inlined or asset-based, not tokenised.

---

## 5. Motion

- No CSS transitions/animations declared at `:root` level (no `--motion-*` or `--duration-*` tokens). The marketing surface is static; in-app motion is out-of-scope for web inspection.

---

## 6. Information architecture

Four-tab primary nav: `개인 · 기업 · 은행소개 · 상품안내 · 고객센터 · 혜택`. Catalog-first IA, not task-first.

| Group | Children |
|---|---|
| 은행소개 | 케이뱅크 · 투자정보 · 인재채용 · 새소식 |
| 상품안내 | 예적금 · 대출 · 카드 · 투자 · 서비스 |
| 고객센터 | 이용안내 · 소비자보호 · 금융사기대응 · 자료실 · 증명서 · 인증서 |
| 혜택 | (single landing) |

136 anchors on the landing surface. This is a **directory-style bank site**, not a product funnel. Compare Toss, which collapses everything into a single product narrative.

---

## 7. Content patterns

- **Notice-led hero**: top of the marketing root surfaces the most recent 공지사항 (e.g. K-패스 캐시백 지연 안내, 2026.05.06) — regulatory transparency placed above promotion.
- **Date stamps everywhere**: every notice carries `YYYY.MM.DD` prefix. Provenance > excitement.
- **Product naming**: short, formal nouns (`예적금 / 대출 / 카드 / 투자`) rather than benefit-led marketing names. Trust signal.

---

## 8. Accessibility posture

- ✓ Skip-link present and styled for focus visibility.
- ✓ `lang="ko-KR"` declared.
- ✓ Semantic heading outline H1→H2→H3 is logical.
- ✗ No landmark elements (`<header>`, `<nav>`, `<main>`, `<footer>`).
- ✗ `font-size: 0` logo pattern requires explicit `aria-label` — not verified on this pass.
- ✗ Fixed 1280px canvas blocks responsive zoom on small viewports.

Overall: meaningful effort on focus order and language tagging; structural semantics behind 2026 norms.

---

## 9. Voice (fresh paraphrase — NOT verbatim)

- Formal Korean, `~합니다` register throughout. K bank does not use Toss-style colloquial `~해요`.
- Headlines are nouns or noun-phrases, not promises. "예적금" not "돈을 모아보세요".
- Notices lead with the consequence and the date, then the explanation. Apology language is reserved and short.

**Don't write**: chatty contractions, emoji, second-person imperatives.
**Do write**: dated, dispassionate, action-noun headers with a single supporting sentence.

---

## 10. What to steal (and what not to)

**Steal**
1. The dual-emitted token system (`--color-g*` and `--txt-g*` pointing at the same values) — lets product teams reason about role separately from value.
2. The single navy + single lime accent. Disciplined two-color brand.
3. Notice-above-promotion landing pattern. Trust-first IA.
4. Cool-tinted neutral ramp — keeps grays from clashing with the navy primary.

**Don't steal**
1. The 0px radius everywhere except CTA — reads dated in 2026 unless you're deliberately signalling "regulated institution".
2. Fixed 1280px canvas. Not viable for any modern surface.
3. `<div>`-only chrome. Use real landmarks.
4. `font-size: 0` image-replacement on H1 logo. Use SVG + `aria-label`.

---

## 11. Open questions / gaps

- **Tier 1 official DS lookup — negative result documented.** K bank does **not** publish a public design system site (no `design.kbanknow.com`, no Figma community kit, no GitHub `kbank-design` org as of 2026-05-14). The `:root` token system shipped in production CSS is the closest public artifact. Compared to Toss (Toss Design System site) or Kakao (Kakao Design site), K bank has chosen not to externalise its system.
- Mobile-app token parity unknown — web tokens may diverge from in-app values.
- Motion / animation tokens not exposed to web; would need APK inspection to confirm.

---

## 12. Sources & verification

- **Tier 1 — Live inspect (production)**: `https://www.kbanknow.com/ib20/mnu/PBKMAN000000` via CDP `:9222` / `Runtime.evaluate` / `getComputedStyle`. 6 raw element samples + 43 CSS variables + 7 observed color frequencies captured. See `assets/_reference/.live-inspect-proof.json`.
- **Tier 1 — Official DS site**: **No public design system found.** Searched: `design.kbanknow.com` (no DNS), GitHub `kbanknow` / `kbank` orgs (no design-system repo), Figma Community (no official K bank kit). Negative result documented here as authoritative.
- **Tier 2 — Third-party indexes**: `getdesign.md/kbank` empty; `styles.refero.design/?q=kbank` and `?q=케이뱅크` both empty. Consistent with the systemic finding logged in `2026-05-13-kr10.md` (Korean coverage is weak on English-tooling-oriented directories).
- **Tier 2 — Press / corp**: `kbanknow.com/ib20/mnu/PBKINT000000` (은행소개), DART filings (regulated bank, public disclosures).
- **Tier 3 — Reconciliation**: All §1-§3 tokens are Tier 1 live-captured. §6 IA is Tier 1 DOM-derived. §9 voice is Tier 1 observed (notices/headings on production), paraphrased only — no verbatim copy reused. §10-§11 are analyst interpretation.

**Conflicts unresolved**: none — Tier 1 live capture is the single source of truth on this pass, with negative Tier 1 official-DS result explicitly documented.

**Verified**: 2026-05-14.

---

## 13. IP & guardrails

- Brand assets (logo, name, navy `#0114A7`) referenced for inspiration only — not redistributed.
- No verbatim taglines or copy lifted from kbanknow.com. §9 voice paragraph is a fresh analyst paraphrase of register and structure, not transcription.
- Token values are facts (CSS custom property values) and not protectable expression; they are reproduced here for engineering reference under fair-use analytical purpose.

## 14. Do's and Don'ts

### Do
- Anchor the brand on the single signature navy #0114A7 as the sole positive primary across skip-link, CTAs, and key labels
- Reserve the lime accent #B6F23D for sparing energetic activation states only, keeping it off body text and form chrome
- Keep surfaces sharp and orthogonal at 0px radius and apply the 12px radius exclusively to the 56px CTA
- Set CTAs in Pretendard K Edition at 18px / 500 medium weight with white text on navy fill, not the 600/700 most KR finance peers default to
- Convey elevation through 1px borders and cool-tinted g200/g300 fills instead of drop-shadows, using the blue-leaning neutral ramp to stay coherent with the navy
- Lead the page with dated notices (YYYY.MM.DD) above promotion and write formal ~합니다 noun-phrase headers with one supporting sentence

### Don't
- Spread the lime #B6F23D accent across large areas or place it on body text and form chrome
- Round corners broadly the way K bank reads dated with 0px everywhere except CTA — adopt the sharpness only when deliberately signalling a regulated institution
- Lock layouts to the fixed 1280px canvas, which blocks responsive zoom and is not viable for modern surfaces
- Build chrome out of bare <div> elements — use real <header>, <nav>, <main>, and <footer> landmarks
- Hide the logo with the font-size: 0 image-replacement trick on the H1 — use inline SVG with an explicit aria-label
- Write chatty contractions, emoji, or second-person imperatives, or swap the formal ~합니다 register for colloquial ~해요
