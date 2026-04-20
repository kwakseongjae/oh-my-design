# Research Sources for Baemin (배달의민족)

추출 일자: 2026-04-20
스킬: `omd:add-reference` (AUGMENT mode — Philosophy layer only)

Base sections (§1–9) predate this augmentation and were built from:
- [Woowa Design System Storybook](https://woowa-ds.vercel.app/)
- [Woowa Tech Blog](https://techblog.woowahan.com/)
- [Baemin free fonts](https://www.woowahan.com/) (13 OFL-licensed custom fonts)
- [Google Fonts — Baemin](https://fonts.google.com/?query=baemin)
- [Woowa GitHub](https://github.com/woowabros)

---

## Philosophy Layer — added 2026-04-20 (AUGMENT mode)

Skill run: `omd:add-reference baemin` (AUGMENT, Phase 10)
Style reference: `toss` (auto-picked — 🇰🇷 KR region matrix)

### Sources used for sections 10–15

| Source URL | Used for | Language |
|---|---|---|
| [baemin.com](https://www.baemin.com/) | §10 verified voice samples (hero slogan, 배민클럽 banner, 선물하기 tagline, 배민페이 speed claim) + §11 seven-service vertical list | KR (bilingual surfaces limited) |
| [en.sandoll.co.kr — Birth Story of Baemin Hanna](https://en.sandoll.co.kr/Story/?bmode=view&idx=19495712) | §11 Narrative (Hanna font origin, 1960s–70s signboard inspiration, Kim Bong-jin's daughter naming, "kitsch charm" preservation principle, Kim's 2015 Masters thesis on Korean visual culture typography) | EN (bilingual) |
| [en.wikipedia.org/wiki/Baedal_Minjok](https://en.wikipedia.org/wiki/Baedal_Minjok) | §11 Narrative (2010 founding, flyer-scanning origin, 2020 revenue, Delivery Hero acquisition timeline Dec 2019 announce → Dec 2020 close, Yogiyo divestiture condition) | EN |
| [ajunews.com — 배민신춘문예 2017 대상작](https://www.ajunews.com/view/20170411135156182) | §10 voice-samples framing paragraph (confirms "치킨은 살 안 쪄요" is a user-submitted contest entry, not Baemin UI copy) | KR |
| [jiwon.app — Baemin hiring branding culture](https://jiwon.app/blog/baemin-hiring-branding-culture) | §11 Narrative (Woowa Brothers' four internal values: 규율위의 자율, 스타보다 팀웍, 진지함과 위트, 열심만큼 성과) | KR-only |

### Attempted but not used

- `https://www.woowahan.com/` and `https://www.woowahan.com/design` — pages returned navigation-only content under WebFetch; no substantive brand/design philosophy text extractable from the extracted HTML this pass.
- `https://story.baemin.com/` — redirects to `https://bcut.baemin.com/` which was unreachable (ECONNREFUSED).
- `https://brandstory.woowahan.com/` — ECONNREFUSED.
- `https://namu.wiki/w/우아한형제들` — 403. Used ajunews/Wikipedia as alternate sources.

### Confidence (Philosophy layer only)

- **High (live-verified strings from baemin.com, 2026-04)**:
  - §10 verified voice samples: *"세상 모든 것이 식지 않도록"*, *"시켜도 시켜도 배달팁 무료 배민클럽!"*, *"마음을 배달해드려요"*, *"10초 만에 결제 완료"*.
  - §11 service vertical list (음식배달 / 배민클럽 / B마트 / 장보기・쇼핑 / 선물하기 / 전국특가 / 배민페이).
- **High (direct citation from English-language sources)**:
  - Hanna font origin story and Kim Bong-jin's thesis topic (Sandoll).
  - 2010 founding, flyer-scanning origin, Delivery Hero acquisition timeline (Wikipedia).
  - 배민신춘문예 contest provenance of the "치킨은 살 안 쪄요" line (ajunews).
- **Medium (Korean-source synthesis, English rendering is a translation, not a citation)**:
  - Woowa Brothers' four core values (규율위의 자율, 스타보다 팀웍, 진지함과 위트, 열심만큼 성과). Korean blog source; Woowa's English-language culture page could not be reached this pass.
  - Voice register characterization ("warm, witty, unmistakably Korean-vernacular", "B급 감성 humor"). Reasoned synthesis from Korean press coverage of 배민다움, not a direct citation of a Baemin-published voice guideline.
- **Low (illustrative, not verified live copy — flagged inline with `<!-- illustrative: ... -->`)**:
  - §10 illustrative samples: empty-cart copy, payment-failed copy, order-placed copy.
  - §14 illustrative state copy throughout — a production team with access to the logged-in Baemin app should replace with observed strings before shipping.

### Gaps flagged for future review (HONEST — this was a thin-sourcing pass)

- **배민다움 is Korean-culture-famous but English documentation is thin.** The voice register described in §10 is reasoned synthesis, not a direct citation of a Baemin-published brand-voice document. If Baemin ever ships an English voice & tone guide (or a translated edition of the 2016 *배민다움* book), §10 should be re-verified against it.
- **No live baemin.com app copy was captured** beyond the marketing homepage surfaces. Empty states, error messages, success toasts, checkout copy — all are currently illustrative. A future pass using an authenticated session (Playwright MCP with logged-in cookies) could verify and upgrade these.
- **Woowa's official English-language culture / values page was not reached this pass.** The four core values are sourced to a Korean recruitment-culture blog (jiwon.app), which itself cites Woowa. If Woowa's English site exposes these values directly, a follow-up pass should swap the citation for the primary source.
- **No English brand book from Baemin/Woowa verified to exist publicly.** This is standard for Korean consumer brands — 배민다움 is a book (2016, 홍성태 저) and an internal culture, not an external-facing brand guidelines site.

---

## Philosophy Layer QA (2026-04-20) — Diagnostic Rubric

Rubric source: `research/2026-04-20_philosophy-layer-diagnostic.md` (11 dimensions, derived from toss/claude/line/mercari corpus + OmD v0.1 spec §3/§4 + Claude Design anti-slop rules).

| # | Dimension | Score | Notes |
|---|---|---|---|
| D1 | §10 intro standalone, 3–5 lines, voice qualifiers | 🟢 | Standalone prose, 5 lines. Voice qualifiers include: "warm", "witty", "unmistakably Korean-vernacular", "B급 감성", "banmal register on marketing surfaces", "polite 요-endings on functional UI". No comparative opener referencing other OMD brands. |
| D2 | §10 tone table 7–10 rows with brand-surface | 🟢 | 9 rows. Brand-surface rows include: Marketing campaign slogans (verified hero string), Category labels (Baemin-specific noun vocabulary), Delivery tracking (Baemin's specific product surface), Promotional banners, Payment/refund/dispute (explicit humor-forbidden surface). |
| D3 | §10 forbidden phrases with brand-specific items | 🟢 | Generic (`불편을 드려 죄송합니다`, `Oops`, English `Sorry`) + brand-specific: rhyme/puns/B급 감성 humor forbidden on payment/refund/dispute surfaces (uniquely Baemin — their brand is built on wit, so forbidding it on one surface is a meaningful constraint); using Baemin Mint as a decorative-tone cue in text (brand-chromatic rule). |
| D4 | §10 voice samples ≥3 with verification tier markers | 🟢 | 7 samples: 4 verified with URL + 2026-04 date markers (세상 모든 것이 식지 않도록, 시켜도 시켜도 배달팁 무료 배민클럽!, 마음을 배달해드려요, 10초 만에 결제 완료), 3 illustrative with clear `<!-- illustrative: not verified as live Baemin copy -->` markers. Framing paragraph explicitly disclaims the "치킨은 살 안 쪄요" line as a contest entry, not Baemin UI copy. |
| D5 | §11 narrative with inline citations + footer manifest | 🟢 | Inline `[Kim scanned restaurant flyers](https://en.wikipedia.org/wiki/Baedal_Minjok)`, `["Font design reflecting Korea's indigenous visual culture"](https://en.sandoll.co.kr/Story/?bmode=view&idx=19495712)`, `[Delivery Hero announced ... completed the deal in December 2020](https://en.wikipedia.org/wiki/Baedal_Minjok)`, `[규율위의 자율, 스타보다 팀웍, 진지함과 위트, 열심만큼 성과](https://jiwon.app/blog/baemin-hiring-branding-culture)`. 2020 revenue figure marked `<!-- source: base DESIGN.md context + Wikipedia, not re-verified this pass -->`. Footer HTML comment preserved as complete source manifest with explicit Korean-source-only vs bilingual notation. |
| D6 | §12 principles with explicit UI implication | 🟢 | All 8 principles use explicit `*UI implication:*` label with concrete UI rule (e.g., "system sans-serif for functional UI; BMHANNA / BMJua for hero banners only", "16:9 photo at card-top, no text overlays", "700-weight for restaurant names, prices, primary CTAs"). |
| D7 | §12 count 5–10 (target 7–9) | 🟢 | 8 principles. |
| D8 | §13 personas ≤3 sentences, behavior-first, disclaimer | 🟢 | 4 archetypes (지현 / 대호 / 수민 / 지영), each ≤4 sentences, behavior-first (opens 4–6×/week, refuses >40min wait / cares about tip transparency vs food price / reads promo copy for fun / uses 선물하기 and B마트). Disclaimer present. Minor: 지현 is 4 sentences — within hard ceiling (5) but above soft target (3). Acceptable. |
| D9 | §14 states 10–12, core types covered, no UI-pattern pollution | 🟢 | 12 rows. Core types covered: Empty (×3: first-use / cart / search), Loading (×3: restaurant-list / map-tracking / checkout), Error (×3: inline-field / payment-declined / network), Success (×2: order-placed / add-to-cart), Disabled. Brand-authentic rows: "Loading (map-tracking)" is Baemin-specific (delivery-tracking is its core differentiator); "Success (order placed)" uses Baemin's ceremonial confirmation-screen treatment. No UI-pattern pollution. |
| D10 | §15 spring stance explicit + rationale | 🟢 | Explicit licensed-scope stance: *"Spring and overshoot are licensed in two narrow places only (category icon tap feedback, favorite heart toggle) because Baemin's brand voice leans playful... Everywhere else — checkout, delivery tracking, payment — motion is standard-easing and functional. A spring on the '결제하기' button would read as unserious with money."* Narrow scope defined, rationale given. |
| D11 | §15 reduce-motion rule present | 🟢 | *"Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. `ease-bounce` is suppressed entirely — category taps and favorite toggles swap to a crossfade. The app stays fully usable; motion is never load-bearing for comprehension."* |

**Result**: 11 🟢 / 0 🟡 / 0 🔴. **PASS** (threshold ≥9 🟢, no 🔴, ≤2 🟡).

**Notes on the PASS**:
- Despite the thin-sourcing warning, the verification tier markers do their job: what is verified is clearly marked verified, what is illustrative is clearly marked illustrative, and what is interpretive editorializing is disclosed in the footer.
- Sourcing honesty (honoring the instructions' "be honest; thin sourcing is expected") contributed to D4 and D5 scoring — the alternative (pretending illustrative copy was verified) would have moved both to 🔴.
