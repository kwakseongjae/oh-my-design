# Chai (차이) — Research log

**Verified**: 2026-05-15
**Skill**: `omd:add-reference` CREATE (KR finance batch)

---

## Tier 1 — Live + official DS

### Live (CDP :9222)

- **`https://chai.finance/`** — 200, meta-refresh `<meta http-equiv="refresh" content="0;url=/about.html">` → service-termination notice. Title: `CHAI - 차이코퍼레이션`. Last Webflow publish: `Fri May 13 2022 08:19:12 GMT+0000`.
- **`https://chai.finance/index.html`** — identical (redirect shell).
- **`https://chai.finance/about.html`** — 10 H3 announcement cards, dark panel `#1b1b1b`, white headings 25.2px / 700 / ChaiGothic. Title: `CHAI - 포트원솔루션스`.

### Production CSS bundle (authoritative tokens)

- **`https://chai.finance/css/chai-finance.webflow.css`** — 182,207 bytes. Direct frequency analysis via `curl -sL | grep`:
  - `#ff0062` (brand pink) — 16 declarations
  - `#1b1b1b` (ink primary / dark panel) — 16
  - `#a5a5a5` (muted ink) — 17 (the muted grey does as much chrome work as the brand pink)
  - `#6411ff` (purple hover) — 11
  - `#ffc600` (yellow accent) — 8
  - `#4700e0` / `#4400c3` — purple ladder
  - `border-radius: 4px` — 9 (canonical small)
  - `font-weight: 700` — 31 (51% of weight declarations)
  - `font-family: ChaiGothic, sans-serif` — multiple
  - `transition: color 200ms ease` — primary motion

- Reproducibility:
  ```bash
  curl -sL https://chai.finance/css/chai-finance.webflow.css | grep -c "#ff0062"   # 16
  curl -sL https://chai.finance/css/chai-finance.webflow.css | grep -c "ChaiGothic" # multi
  ```

### Historical marketing surface (factual context)

- **`web.archive.org/web/20210707171036/https://chai.finance/`** — 2021-07 snapshot. Title `CHAI - 차이나는 간편결제`. Hero headlines extracted (quoted as factual linguistic pattern, not design copy):
  - "할인 금액이 남달라서 차이다"
  - "단순하니까 차이다"
  - "끊임없이 경험하는 할인 결제의 차이를"

### Official DS — **negative**

Probed:
- `https://design.chai.finance` → 404
- `https://chai.finance/brand` / `/design` / `/design-system` → not present
- GitHub: no `chai-finance` / `chaicorporation` / `차이코퍼레이션` design-system / Storybook / tokens repo
- No public Figma library, no developer portal, no `@chai/*` npm namespace

**Documented as authoritative negative.** Production CSS bundle is closest public artifact; captured directly via curl frequency analysis + CDP runtime sampling.

### Corporate registry — `thevc.kr/Chai`

- Founded **2018-09-13** (originally **Geokoo E-Payment**)
- Name history: Geokoo E-Payment (2018–2019) → **Chai Corporation** (2019–2024) → **PortOne Solutions** (2024–present)
- Current CEO: **Jung Young-joo** (정영주)
- HQ: Seoul, Seongdong-gu, Seongsu-dong
- Acquired **Iamport** (electronic payment service founded by developer **Jang Ji-yoon**, 12yr payment-infra background)
- Status as of Aug 2025: 0 employees (National Pension Service data)

---

## Tier 2 — Cross-checks

| Source | Result | Verified |
|---|---|---|
| `getdesign.md/chai` | "No designs found for 'chai'" | 2026-05-15 |
| `styles.refero.design/?q=chai` | no result cards | 2026-05-15 |

Both empty — consistent with the systemic KR coverage gap logged in `data/reference-audits/2026-05-13-kr10.md` and `2026-05-14-kr10.md`.

---

## Tier 3 — Reconcile

No conflicts. Tier 1 (live + bundle frequency) is the only signal. Tier 2 indexes provide no data to reconcile against. Tokens emitted with **High** confidence on color / radius / typography / motion; **Medium** confidence on state matrix and full component palette (only marketing-surface CSS — no in-app token system was published).

---

## Confidence by section

| Section | Confidence | Notes |
|---|---|---|
| §1 Visual Theme | High | Direct quote from CSS bundle + live DOM |
| §2 Color | High | Frequency-verified in 182KB bundle |
| §3 Typography | High | 60 weight + 100+ size declarations sampled |
| §4 Components | High (marketing) / Medium (in-app) | Webflow class corpus complete; in-app components not in public surface |
| §5 Layout | High | em + px paddings frequency-verified |
| §6 Radius | High | 8-step ladder with frequencies |
| §7 Motion | Medium-Low | Only one shipped transition observed — most motion lives in webflow.js, not extracted |
| §8 States | Medium | Hover / active / selected verified; focus / error / skeleton inferred-as-missing |
| §9 A11y | High | Contrast values computed |
| §10 Voice | Medium | Pattern reconstructed from 2021 wayback; OmD-original samples |
| §11 Narrative | High | `thevc.kr` corporate registry primary |
| §12 Principles | High | Derived from token frequency |
| §13 Personas | Low (illustrative only) | Inferred from market context — disclaimer in §13 header |
| §14 States full | Medium | Gaps in shipped CSS called out |
| §15 Motion | Medium-Low | See §7 |

---

## IP guardrails

- Brand assets (Chai wordmark, ChaiGothic typeface, magenta `#ff0062`) referenced for analytical fair-use; not redistributed.
- 2021 headline corpus quoted as factual linguistic pattern in §11 / §10 verification note; **not** adopted as design copy in §10 voice samples (those are OmD-original reconstructions in the 차이다 verbal frame).
- Voice samples (§10) explicitly marked OmD-original with frame-only inheritance.
- Persona block (§13) carries public-surveys-only disclaimer.
- Founder Jang Ji-yoon (Iamport) and CEO Jung Young-joo (PortOne Solutions) named only as factual corporate-registry data.

---

## Follow-up flags

1. **Service-terminated reference** — useful for studying KR fintech 2019–2022 visual maximalism; **not** for live-product benchmarking. Note in §1 and audit row.
2. **No focus-visible / skeleton / field-error in shipped CSS** — explicitly called out in §8 / §9 with porting guidance.
3. **Iamport / PortOne Solutions B2B surface** is the live continuation of the corporate lineage — if a `portone` reference is requested in future, treat as separate brand (different surface, different tokens).
4. **`webflow.js` runtime motion** not extracted — only colour transitions captured from shipped CSS. If a follow-up UPDATE pass is needed, parse webflow.js for `.w-*` runtime animation hooks.
