# Research Sources for Kakao

추출 일자: 2026-04-14 (sections 1–9), 2026-04-20 (Philosophy layer sections 10–15)
스킬: `omd:add-reference` (5-tier methodology; AUGMENT mode for §10–15)
입력: `kakao` (existing reference id, AUGMENT mode)

## Tier 1 — Official Design System

**Status: PARTIAL (Kakao Login button spec is public and compliance-mandated; full DS is not a single public document)**

Kakao does not publish a single unified design-system documentation site on the order of Material Design. The compliance-mandated **Kakao Login** button is the most rigorously-specified public surface; all other token-level claims in §1–9 are reasoned from Kakao's public brand assets, published open-source font files (Kakao Big Sans / Small Sans on GitHub under OFL-1.1), and live-site reconnaissance on KakaoTalk web and kakaocorp.com.

- [developers.kakao.com/docs/ko/kakaologin/design-guide](https://developers.kakao.com/docs/ko/kakaologin/design-guide) — Kakao Login button spec: `#FEE500` container, `#000000` symbol, `#000000` 85% label, 12px radius, symbol-required (speech bubble), label options (`카카오 로그인` / `Login with Kakao` — full; `로그인` / `Login` — abbreviated), sizing rules.

## Tier 2 — Brand / Press Kit

- [brand.kakao.com](https://brand.kakao.com/) — historically the Kakao brand portal; at time of 2026-04-20 augmentation attempt returned `ECONNREFUSED`. Base §1–9 extraction pre-dates this outage.
- [kakaocorp.com/page](https://www.kakaocorp.com/page) — current corporate-site brand surface (verified 2026-04-20); sources the taglines cited inline in Philosophy §11.

## Tier 3 — Engineering / Design Blog

- [tech.kakao.com](https://tech.kakao.com/) — Kakao tech blog; inspected 2026-04-20 and did not surface design-/motion-/typography-focused posts at the fetched snapshot. Design-specific content on Kakao's Brunch (`brunch.co.kr/@kakao-design`) and Medium presence is episodic.

## Tier 4 — Live Site Recon

Base §1–9 extraction (2026-04-14) captured live tokens from KakaoTalk web and kakaocorp.com at 1440px / 390px. Not re-run for Philosophy layer; tokens are base-carried.

## Confidence (base §1–9)

### High Confidence
- Kakao Login button spec (Tier 1 direct citation).
- Kakao Yellow `#FEE500` (logo / brand base / login container).
- Brand base `#1E1E1E` (Pantone 433 C).
- Kakao Big Sans / Small Sans as open-source brand fonts.

### Medium Confidence
- Chat-bubble palette (`#FEE500` self, `#ffffff` other, `#F0F0F0` system) — inferred from product observation; not a published DS token list.
- 12px radius as a cross-component default — inferred; Kakao publishes the 12px rule explicitly for the login button only.
- Shadow values — inferred from product observation.

### Lower Confidence / Inferred
- Three-tier text hierarchy (`#222` / `#333` / `#666` / `#808080` / `#999` / `#BBB`) — consistent with KakaoTalk web surfaces but not published as a token ladder.

## Notes
- Kakao's brand/design-system content is distributed across the corporate site, developer site, brand portal, and various design-team-author publications (Brunch, Medium). A future pass could strengthen §1–9 by periodically re-running live recon on KakaoTalk web and adding any Brunch / Medium design posts to Tier 3.
- This reference may drift if Kakao ships a unified public DS (historical discussion of `kakao.github.io/design` and similar subdomains has appeared in community posts but none is live as of 2026-04-20).

---

## Philosophy Layer — added 2026-04-20 (AUGMENT mode)

Skill run: `omd:add-reference kakao` (AUGMENT, Phase 10)
Style reference: `toss` (auto-picked — 🇰🇷 KR region matrix; same Korean-origin friend-fiduciary register)

### Sources used for sections 10–15

| Source URL | Used for |
|---|---|
| [kakaocorp.com/page](https://www.kakaocorp.com/page) | §10 Voice samples (corporate positioning `나의 세계를 바꾸는 카카오`; AI positioning `나에게 가장 가까운, 가장 쉬운 AI`; service taglines for KakaoTalk / KakaoPay / KakaoMap / Kakao T / Zigzag / Melon); §11 Brand Narrative (verbatim quotes + inline citations); §12 Principles (service-voice evidence for Principle 8). |
| [kakaocorp.com/page/service/service/KakaoTalk](https://www.kakaocorp.com/page/service/service/KakaoTalk) | §10 Voice & Tone (service-voice register: `편리함 넘어 더 새롭고 쾌적한 대화 경험`, `일상을 바꾼 대표 메신저`); §11 Brand Narrative (KakaoTalk history framing). |
| [developers.kakao.com/docs/ko/kakaologin/design-guide](https://developers.kakao.com/docs/ko/kakaologin/design-guide) | §10 Voice (mandated label strings `카카오 로그인` / `Login with Kakao`, abbreviated `로그인` / `Login`); §12 Principle 4 (never white text on yellow — sourced from `Label: #000000 85%` spec); §12 Principle 9 (compliance-as-design-surface — full spec citation). |

### Confidence (Philosophy layer only)

- **High (direct source citation)**: all six kakaocorp.com-sourced service taglines, Kakao Login button spec (container color, symbol, label opacity, radius, label options, sizing rules), corporate positioning + AI positioning one-liners.
- **Medium (synthesis from verified sources)**: voice-register characterization (*친근한 존댓말*, `-어요` / `-예요` endings for everyday surfaces; `-습니다` reserved for legal and chat-system-notices); tone-per-context table; the "chat is ambient, not performative" motion stance.
- **Low (style-reference derived / editorial)**: persona archetypes (지훈 / 영숙 / 서윤) are fictional, informed by publicly described KakaoTalk user segments and smartphone-saturation context — flagged inline at the top of §13. The spring-forbidden rationale ("chat bubbles are factual events; overshoot reads as uncertainty") is an editorial reading consistent with Kakao's product behavior, not a sourced Kakao statement.

### Gaps flagged for future review

- **brand.kakao.com returned ECONNREFUSED on 2026-04-20.** The brand portal was not reachable for this augmentation; any future pass should attempt it again and, if reachable, cite brand-personality or voice-guideline text directly rather than inferring from the corporate site.
- **No Kakao-authored voice-and-tone guideline surfaced in 2026-04-20 search.** Voice characterization is a reasoned synthesis from corporate-site service taglines + the login-button compliance doc, not a direct brand-guideline citation. If Kakao publishes one, §10 could be strengthened.
- **Live-copy empty / error / success strings in §10 are illustrative** because those surfaces are logged-in-only in KakaoTalk. A production team with KakaoTalk account access should observe real strings via Playwright MCP and replace the illustrative bullets before shipping UI against this reference.
- **Motion easings (`cubic-bezier(0.0, 0.0, 0.2, 1)` and family) are standard Material-family curves** commonly observed in Kakao products but not published by Kakao as named tokens. The token names (`motion-fast / motion-standard / motion-slow`, `ease-enter / ease-exit / ease-standard`) are OmD-normalized — they work when consumed by an agent but would not match an internal Kakao token name exactly.

## Philosophy Layer QA (2026-04-20) — Diagnostic Rubric

Rubric source: `research/2026-04-20_philosophy-layer-diagnostic.md` (11 dimensions, derived from toss/claude/line corpus + mercari pilot + OmD v0.1 spec §3/§4 + Claude Design anti-slop rules).

| # | Dimension | Score | Notes |
|---|---|---|---|
| D1 | §10 intro standalone, 3–5 lines, voice qualifiers | 🟢 | Standalone opener — no "Where X… where Y…" comparative frame. 4 lines. Includes ≥2 voice qualifiers: *친근한 존댓말* register, `-어요` / `-예요` ending preference, "yellow is a visual event — copy does not need to shout." |
| D2 | §10 tone table 7–10 rows with brand-surface | 🟢 | 8 rows. Brand-surface rows: chat system notices (the one place `-습니다` stays), push notifications (sender-first subject), legal/policy/finance (separate register). |
| D3 | §10 forbidden phrases with brand-specific items | 🟢 | Generic (`Oops`, `죄송합니다만`) + Kakao-specific (`카카오톡이 당신의 ~` platform-subject voice; `~완료되었습니다` over-formal on chat surfaces; `알 수 없는 오류` / `오류가 발생했습니다` as blameful/vague; mandated Kakao Login label not to be altered from `카카오 로그인` / `Login with Kakao`). |
| D4 | §10 voice samples ≥3 with verification tier markers | 🟢 | 7 samples: 4 verified (corporate positioning, KakaoTalk tagline, KakaoPay tagline, Kakao Login mandated label) with source + date markers; 3 illustrative (empty state, error, success) with explicit `<!-- illustrative: not verified as live Kakao copy -->` markers. |
| D5 | §11 narrative with inline citations + footer manifest | 🟢 | Inline `[kakaocorp.com/page](...)` citations on the KakaoTalk tagline (`사람과 세상을 연결하는 전 우주 통신규약을 꿈꾸는 메신저`), the KakaoPay tagline (`마음놓고 금융하다`), the AI positioning (`나에게 가장 가까운, 가장 쉬운 AI`). Near-saturation user-base claim marked `<!-- source: base DESIGN.md §1, not independently re-verified 2026-04 -->`. Footer HTML comment preserved as full source manifest with direct-verification / base-carried / interpretive-editorial tiers. |
| D6 | §12 principles with explicit UI implication | 🟢 | All 9 principles use the explicit `*UI implication:*` label with a concrete UI rule. Example: Principle 4 → `all yellow-background buttons ship with dark text; no brand-palette exception.` |
| D7 | §12 count 5–10 (target 7–9) | 🟢 | 9. At the upper end of the target range; stayed within the cap because the 9th (compliance-is-a-design-surface) is materially distinct from the first 8 and directly sourced from developers.kakao.com. |
| D8 | §13 personas ≤3 sentences, behavior-first, disclaimer | 🟢 | 3 archetypes (지훈 / 영숙 / 서윤). Each ≤3 sentences, behavior-focused (opens KakaoTalk ~80×/day; treats yellow send button as muscle-memory target; Kakao emoticon economy as fluency layer). Disclaimer present at top. |
| D9 | §14 states 10–12, core types covered, no UI-pattern pollution | 🟢 | 11 rows. Core types: Empty (×2: chat list / search-no-results), Loading (×2: chat room first paint / image in chat), Error (×3: send failed inline / network lost banner / blocking server-side), Success (×2: sent inline / KakaoPay confirmation), Skeleton, Disabled. No UI-pattern pollution (no rating-request, no tooltip-treatment rows). Brand-authentic rows: *Success (sent, inline)* — the bubble landing is the confirmation, no toast. |
| D10 | §15 spring stance explicit + rationale | 🟢 | Explicit forbidden stance: *"Spring and overshoot are forbidden across the system. Kakao does not include `ease-spring`, `ease-bounce`, or any cubic-bezier with y-values outside `[0, 1]`."* Rationale: *"chat bubbles, payment confirmations, and profile updates are all factual events — overshoot reads as uncertainty about the fact."* Sticker-send carve-out explicitly defused (*"uses a simple scale-in... no rebound"*) rather than silently omitted. |
| D11 | §15 reduce-motion rule present | 🟢 | *"Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Sheets and modals appear via opacity only, bubbles cross-fade in place instead of translating. The app remains fully functional; motion is never load-bearing for comprehension."* |

**Result**: 11 🟢 / 0 🟡 / 0 🔴. **PASS** (threshold ≥9 🟢, no 🔴, ≤2 🟡).

**Open follow-ups (non-blocking)**:
1. Retry `brand.kakao.com` on a later date; if it responds, verify voice samples against any published brand-voice guideline and promote illustrative empty/error/success samples to verified where they match live copy.
2. If Kakao publishes a named motion token scale (e.g., via a future `kakao.design` surface), re-align `motion-fast / motion-standard / motion-slow` names to the canonical set. Values are consistent with observed behavior and are safe to consume.
